/**
 * LinuxToys Website Internationalization System
 * Handles loading and switching between different language files
 */

class I18n {
  constructor() {
    this.currentLang = 'en';
    this.translations = {};
    this.fallbackLang = 'en';
    this.supportedLanguages = ['en', 'pt'];
  }

  /**
   * Initialize the i18n system
   */
  async init() {
    // Detect and set initial language
    const detectedLanguage = this.detectBrowserLanguage();
    await this.loadLanguage(detectedLanguage);
    this.setupEventListeners();
    this.updateUI();
  }

  /**
   * Load a language file
   * @param {string} lang - Language code (e.g., 'en', 'pt')
   */
  async loadLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      lang = this.fallbackLang;
    }

    try {
      // Check if already loaded
      if (this.translations[lang]) {
        this.currentLang = lang;
        return;
      }

      // Load the language file
      const response = await fetch(`lang/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language file: ${lang}.json`);
      }

      const translations = await response.json();
      this.translations[lang] = translations;
      this.currentLang = lang;
      
      // Store language preference
      localStorage.setItem('linuxtoys-language', lang);
      
    } catch (error) {
      console.warn(`Failed to load language ${lang}, falling back to ${this.fallbackLang}:`, error);
      
      // If it's not the fallback language, try to load fallback
      if (lang !== this.fallbackLang && !this.translations[this.fallbackLang]) {
        try {
          const fallbackResponse = await fetch(`lang/${this.fallbackLang}.json`);
          const fallbackTranslations = await fallbackResponse.json();
          this.translations[this.fallbackLang] = fallbackTranslations;
          this.currentLang = this.fallbackLang;
        } catch (fallbackError) {
          console.error('Failed to load fallback language:', fallbackError);
          // Use inline fallback if all else fails
          this.translations[this.fallbackLang] = this.getInlineFallback();
          this.currentLang = this.fallbackLang;
        }
      } else if (this.translations[this.fallbackLang]) {
        this.currentLang = this.fallbackLang;
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
    const langTranslations = this.translations[targetLang] || this.translations[this.fallbackLang] || {};
    
    return langTranslations[key] || key;
  }

  /**
   * Switch to a different language
   * @param {string} lang - Language code
   */
  async switchLanguage(lang) {
    if (lang === this.currentLang) return;

    await this.loadLanguage(lang);
    this.updateUI();
    this.updateLanguageDisplay();
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
      currentLanguageSpan.textContent = this.currentLang.toUpperCase();
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
      return savedLanguage;
    }

    // Get browser languages in order of preference
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
    
    // Check each language preference
    for (const language of browserLanguages) {
      const langCode = language.toLowerCase();
      
      // Check for Portuguese variants (pt, pt-BR, pt-PT, etc.)
      if (langCode.startsWith('pt')) {
        return 'pt';
      }
      // Check for English variants
      if (langCode.startsWith('en')) {
        return 'en';
      }
    }
    
    // Default fallback to English
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

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.i18n.init());
} else {
  window.i18n.init();
}
