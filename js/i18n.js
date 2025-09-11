/**
 * LinuxToys Website Internationalization System
 * Handles loading and switching between different language files
 */

class I18n {
  constructor() {
    this.currentLang = 'en';
    this.translations = {};
    this.fallbackLang = 'en';
    this.supportedLanguages = ['en', 'es', 'pt', 'ru', 'zh', 'ja', 'fr', 'de'];
    this.linuxToysTranslations = {};
  }

  /**
   * Initialize the i18n system
   */
  async init() {
    // Detect and set initial language
    const detectedLanguage = this.detectBrowserLanguage();
    await this.loadLanguage(detectedLanguage);
    
    // Wait for DOM to be ready before updating UI
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupEventListeners();
        this.updateLanguageDisplay();
        this.updateUI();
      });
    } else {
      this.setupEventListeners();
      this.updateLanguageDisplay();
      this.updateUI();
    }
  }

  /**
   * Load LinuxToys translations to supplement website translations
   */
  async loadLinuxToysTranslations(lang) {
    try {
      const response = await fetch(`./data/translations/${lang}.json`);
      if (response.ok) {
        const linuxToysTranslations = await response.json();
        this.linuxToysTranslations[lang] = linuxToysTranslations;
      }
    } catch (error) {
      // Silently fail - LinuxToys translations are optional
    }
  }

  /**
   * Load a language file
   * @param {string} lang - Language code (e.g., 'en', 'pt')
   */
  async loadLanguage(lang) {
    // Validate language
    if (!this.supportedLanguages.includes(lang)) {
      console.warn(`Unsupported language: ${lang}, falling back to ${this.fallbackLang}`);
      lang = this.fallbackLang;
    }

    // Check if already loaded
    if (this.translations[lang]) {
      this.currentLang = lang;
      return true;
    }

    console.log(`Loading language: ${lang}`);

    try {
      // Load the website language file with explicit timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const response = await fetch(`./lang/${lang}.json`, {
        signal: controller.signal,
        cache: 'no-cache' // Ensure we're not getting stale cached versions
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      if (!text.trim()) {
        throw new Error('Empty response');
      }

      let translations;
      try {
        translations = JSON.parse(text);
      } catch (jsonError) {
        throw new Error(`Invalid JSON: ${jsonError.message}`);
      }

      if (!translations || typeof translations !== 'object') {
        throw new Error('Invalid translations object');
      }

      console.log(`Successfully loaded ${lang} with ${Object.keys(translations).length} keys`);
      
      this.translations[lang] = translations;
      this.currentLang = lang;
      
      // Also try to load LinuxToys translations for this language
      await this.loadLinuxToysTranslations(lang);
      
      // Store language preference
      localStorage.setItem('linuxtoys-language', lang);
      return true;
      
    } catch (error) {
      console.error(`Failed to load language ${lang}:`, error.message);
      
      // If it's not the fallback language, try to load fallback
      if (lang !== this.fallbackLang) {
        console.log(`Attempting fallback to ${this.fallbackLang}`);
        return await this.loadLanguage(this.fallbackLang);
      } else {
        // If we failed to load the fallback language, use inline fallback
        console.warn(`Fallback language ${this.fallbackLang} failed, using inline fallback`);
        this.translations[this.fallbackLang] = this.getInlineFallback();
        this.currentLang = this.fallbackLang;
        localStorage.setItem('linuxtoys-language', this.fallbackLang);
        return false;
      }
    }
  }

  /**
   * Get a translation for a specific key
   * @param {string} key - Translation key
   * @param {string} lang - Language code (optional, uses current language if not specified)
   * @returns {string} Translated text
   */
  t(key, lang = null) {
    const targetLang = lang || this.currentLang;
    
    // First try website translations
    const langTranslations = this.translations[targetLang] || {};
    if (langTranslations[key]) {
      return langTranslations[key];
    }
    
    // Try fallback language for website translations
    const fallbackTranslations = this.translations[this.fallbackLang] || {};
    if (fallbackTranslations[key] && targetLang !== this.fallbackLang) {
      return fallbackTranslations[key];
    }
    
    // Then try LinuxToys translations
    const linuxToysLangTranslations = this.linuxToysTranslations[targetLang] || {};
    if (linuxToysLangTranslations[key]) {
      return linuxToysLangTranslations[key];
    }
    
    // Try LinuxToys fallback translations
    const linuxToysFallbackTranslations = this.linuxToysTranslations[this.fallbackLang] || {};
    if (linuxToysFallbackTranslations[key] && targetLang !== this.fallbackLang) {
      return linuxToysFallbackTranslations[key];
    }
    
    // If no translation found, log it for debugging (but not too verbose)
    if (!this._missingTranslations) this._missingTranslations = new Set();
    if (!this._missingTranslations.has(key)) {
      console.warn(`Missing translation for "${key}" in language "${targetLang}"`);
      this._missingTranslations.add(key);
    }
    
    return key;
  }

  /**
   * Switch to a different language
   * @param {string} lang - Language code
   */
  async switchLanguage(lang) {
    if (lang === this.currentLang) {
      console.log(`Language ${lang} is already current`);
      return;
    }

    console.log(`Switching language from ${this.currentLang} to ${lang}`);
    
    const success = await this.loadLanguage(lang);
    if (success !== false) { // success is true or undefined (older behavior)
      this.updateLanguageDisplay();
      this.updateUI();
      console.log(`Successfully switched to ${lang}`);
    } else {
      console.warn(`Failed to switch to ${lang}, staying on ${this.currentLang}`);
    }
    
    // Notify tools-sync system that language changed
    if (window.linuxToysSync) {
      // We could trigger a re-render here if needed
    }
  }

  /**
   * Update all translatable elements in the UI
   */
  updateUI() {
    const elements = document.querySelectorAll("[data-key]");
    
    elements.forEach((element) => {
      const key = element.getAttribute("data-key");
      const translation = this.t(key);

      if (key === "toggle-button") {
        const list = element.nextElementSibling;
        if (list && list.classList.contains("expanded")) {
          element.textContent = this.t("toggle-button-less");
        } else {
          element.textContent = translation;
        }
      } else {
        // Check if translation contains HTML (like links)
        if (translation && translation.includes("<a href")) {
          element.innerHTML = translation;
        } else if (translation) {
          element.textContent = translation;
        }
      }
    });

    // Update document language attribute
    document.documentElement.lang = this.currentLang;
  }

  /**
   * Update the language dropdown display
   */
  updateLanguageDisplay() {
    const currentLanguageSpan = document.getElementById("current-language");
    if (currentLanguageSpan) {
      const languageMap = {
        'en': 'EN',
        'es': 'ES',
        'pt': 'PT',
        'ru': 'RU',
        'zh': 'ZH',
        'ja': 'JA',
        'fr': 'FR',
        'de': 'DE'
      };
      const displayLang = languageMap[this.currentLang] || this.currentLang.toUpperCase();
      currentLanguageSpan.textContent = displayLang;
    }
  }

  /**
   * Detect browser language preference
   * @returns {string} Detected language code
   */
  detectBrowserLanguage() {
    // Check if user has a saved language preference first
    const savedLanguage = localStorage.getItem('linuxtoys-language');
    if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
      console.log('Using saved language preference:', savedLanguage);
      return savedLanguage;
    }

    // Get browser languages in order of preference
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
    console.log('Browser languages:', browserLanguages);
    
    // Check each language preference
    for (const language of browserLanguages) {
      const langCode = language.toLowerCase();
      
      // Check for Spanish variants (es, es-ES, es-MX, etc.)
      if (langCode.startsWith('es')) {
        console.log(`Detected Spanish variant: ${langCode} -> es`);
        return 'es';
      }
      // Check for Portuguese variants (pt, pt-BR, pt-PT, etc.)
      if (langCode.startsWith('pt')) {
        console.log(`Detected Portuguese variant: ${langCode} -> pt`);
        return 'pt';
      }
      // Check for Russian variants (ru, ru-RU, etc.)
      if (langCode.startsWith('ru')) {
        console.log(`Detected Russian variant: ${langCode} -> ru`);
        return 'ru';
      }
      // Check for Chinese variants (zh, zh-CN, zh-Hans, zh-TW, zh-Hant, etc.)
      if (langCode.startsWith('zh')) {
        console.log(`Detected Chinese variant: ${langCode} -> zh`);
        return 'zh';
      }
      // Check for Japanese variants (ja, ja-JP, etc.)
      if (langCode.startsWith('ja')) {
        console.log(`Detected Japanese variant: ${langCode} -> ja`);
        return 'ja';
      }
      // Check for French variants (fr, fr-FR, fr-CA, etc.)
      if (langCode.startsWith('fr')) {
        console.log(`Detected French variant: ${langCode} -> fr`);
        return 'fr';
      }
      // Check for German variants (de, de-DE, de-AT, de-CH, etc.)
      if (langCode.startsWith('de')) {
        console.log(`Detected German variant: ${langCode} -> de`);
        return 'de';
      }
      // Check for English variants
      if (langCode.startsWith('en')) {
        console.log(`Detected English variant: ${langCode} -> en`);
        return 'en';
      }
    }
    
    // Default fallback to English
    console.log('No matching language found, defaulting to English');
    return 'en';
  }

  /**
   * Setup event listeners for language switching
   */
  setupEventListeners() {
    const languageOptions = document.querySelectorAll(".language-option");
    
    languageOptions.forEach(option => {
      option.addEventListener("click", async (e) => {
        e.stopPropagation();
        const lang = option.getAttribute("data-lang");
        await this.switchLanguage(lang);
        
        // Close dropdown
        const dropdown = document.getElementById("language-dropdown");
        const dropdownBtn = document.getElementById("language-dropdown-btn");
        const dropdownArrow = document.getElementById("dropdown-arrow");
        
        if (dropdown) {
          dropdown.classList.add('invisible', 'opacity-0', 'scale-95');
          dropdown.classList.remove('opacity-100', 'scale-100');
        }
        if (dropdownArrow) {
          dropdownArrow.style.transform = 'rotate(0deg)';
        }
        if (dropdownBtn) {
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /**
   * Get supported languages list
   * @returns {Array} Array of supported language codes
   */
  getSupportedLanguages() {
    return [...this.supportedLanguages];
  }

  /**
   * Check if a language is supported
   * @param {string} lang - Language code to check
   * @returns {boolean} True if supported
   */
  isLanguageSupported(lang) {
    return this.supportedLanguages.includes(lang);
  }

  /**
   * Inline fallback translations in case files can't be loaded
   * @returns {Object} Basic English translations
   */
  getInlineFallback() {
    return {
      "title": "A collection of tools for Linux in a user-friendly way to make your life on Linux easier than ever",
      "github-button": "View on GitHub",
      "install-title": "Quick-Install",
      "toggle-button": "Show Tools",
      "toggle-button-less": "Show Less",
      "tools-title": "Tools by Category",
      "partners-title": "Credits",
      "license-text": "Released under the"
    };
  }
}

// Create global i18n instance
window.i18n = new I18n();

// Initialize immediately
window.i18n.init();
