class TranslationManager {
  constructor() {
    this.currentLang = 'en';
    this.translations = {};
    this.fallbackLang = 'en';
    this.supportedLanguages = ['en', 'pt', 'es', 'fr', 'de', 'zh', 'ja', 'ru']; // Added new languages
  }

  detectBrowserLanguage() {
    // Get browser language preferences in order of preference
    const browserLanguages = [
      navigator.language,
      ...(navigator.languages || []),
      navigator.userLanguage, // IE fallback
      navigator.browserLanguage, // IE fallback
      navigator.systemLanguage // IE fallback
    ].filter(Boolean);

    console.log('Browser languages detected:', browserLanguages);

    // Check each browser language against supported languages
    for (const browserLang of browserLanguages) {
      // Extract language code (e.g., 'pt-BR' -> 'pt', 'en-US' -> 'en')
      const langCode = browserLang.split('-')[0].toLowerCase();
      
      if (this.supportedLanguages.includes(langCode)) {
        console.log(`Matching language found: ${langCode}`);
        return langCode;
      }
    }

    console.log(`No matching language found, using fallback: ${this.fallbackLang}`);
    return this.fallbackLang;
  }

  async loadTranslations(language) {
    try {
      const response = await fetch(`translations/${language}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load ${language} translations`);
      }
      this.translations[language] = await response.json();
      return this.translations[language];
    } catch (error) {
      console.error(`Error loading translations for ${language}:`, error);
      
      // If not the fallback language, try to load it
      if (language !== this.fallbackLang) {
        console.log(`Falling back to ${this.fallbackLang} translations`);
        return await this.loadTranslations(this.fallbackLang);
      }
      
      return {};
    }
  }

  async setLanguage(language) {
    // Load translations if not already loaded
    if (!this.translations[language]) {
      await this.loadTranslations(language);
    }

    this.currentLang = language;
    document.documentElement.lang = language;
    
    this.updatePageTranslations();
    this.updateLanguageButtons();
    
    // Update tools loader if it exists
    if (window.toolsLoader && typeof window.toolsLoader.onLanguageChange === 'function') {
      window.toolsLoader.onLanguageChange(language);
    }
    
    // Store language preference
    localStorage.setItem('preferredLanguage', language);
  }

  updatePageTranslations() {
    const elements = document.querySelectorAll('[data-key]');
    const currentTranslations = this.translations[this.currentLang] || this.translations[this.fallbackLang] || {};
    
    elements.forEach(element => {
      const key = element.getAttribute('data-key');
      
      if (key === 'toggle-button') {
        this.updateToggleButton(element, currentTranslations);
      } else {
        const translation = currentTranslations[key];
        if (translation) {
          // Update title attribute if it exists
          if (element.hasAttribute('title')) {
            element.setAttribute('title', translation);
          }
          
          // Update content
          if (translation.includes('<a href')) {
            element.innerHTML = translation;
          } else {
            element.textContent = translation;
          }
        }
      }
    });
  }

  updateToggleButton(button, translations) {
    const list = button.nextElementSibling;
    if (list && list.classList.contains('expanded')) {
      button.textContent = translations['toggle-button-less'] || 'Show Less';
    } else {
      button.textContent = translations['toggle-button'] || 'Show Tools';
    }
  }

  updateLanguageButtons() {
    // Update active state for all language buttons
    this.supportedLanguages.forEach(lang => {
      const button = document.getElementById(`lang-${lang}`);
      if (button) {
        button.classList.toggle('bg-blue-600', this.currentLang === lang);
        button.classList.toggle('bg-gray-800', this.currentLang !== lang);
      }
    });
  }

  getTranslation(key) {
    const currentTranslations = this.translations[this.currentLang] || this.translations[this.fallbackLang] || {};
    return currentTranslations[key] || key;
  }

  async init() {
    // Load default language first
    await this.loadTranslations(this.fallbackLang);
    
    // Determine the initial language to use
    let initialLanguage = this.fallbackLang;
    
    // Check for saved language preference (highest priority)
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && this.supportedLanguages.includes(savedLang)) {
      console.log('Using saved language preference:', savedLang);
      initialLanguage = savedLang;
    } else {
      // If no saved preference, detect browser language
      const detectedLang = this.detectBrowserLanguage();
      console.log('Using detected browser language:', detectedLang);
      initialLanguage = detectedLang;
    }
    
    // Load and set the determined language
    if (initialLanguage !== this.fallbackLang) {
      await this.loadTranslations(initialLanguage);
    }
    
    this.currentLang = initialLanguage;
    
    // Apply initial translations
    this.updatePageTranslations();
    this.updateLanguageButtons();
    
    // Set up language switch event listeners
    this.setupLanguageSwitchers();
    
    console.log('Translation system initialized with language:', this.currentLang);
  }

  setupLanguageSwitchers() {
    // Set up all supported language buttons
    this.supportedLanguages.forEach(lang => {
      const button = document.getElementById(`lang-${lang}`);
      if (button) {
        button.addEventListener('click', () => this.setLanguage(lang));
      }
    });
  }

  // Method to add support for new languages dynamically
  addSupportedLanguage(languageCode) {
    if (!this.supportedLanguages.includes(languageCode)) {
      this.supportedLanguages.push(languageCode);
      console.log(`Added support for language: ${languageCode}`);
    }
  }

  // Method to get current language info
  getLanguageInfo() {
    return {
      current: this.currentLang,
      supported: this.supportedLanguages,
      fallback: this.fallbackLang,
      detected: this.detectBrowserLanguage()
    };
  }
}

// Export for use in other scripts
window.TranslationManager = TranslationManager;
