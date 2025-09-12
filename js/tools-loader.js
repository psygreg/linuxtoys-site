class ToolsCacheLoader {
  constructor() {
    this.cacheBaseUrl = './cache/';
    this.cachedData = null;
    this.currentLanguage = 'en';
  }

  async loadCache() {
    try {
      const response = await fetch(`${this.cacheBaseUrl}translated-categories.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.cachedData = await response.json();
      return true;
    } catch (error) {
      console.warn('Could not load tools cache, falling back to static data:', error);
      return false;
    }
  }

  async loadSummary() {
    try {
      const response = await fetch(`${this.cacheBaseUrl}summary.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Could not load cache summary:', error);
      return null;
    }
  }

  setLanguage(languageCode) {
    this.currentLanguage = languageCode;
  }

  getCategoriesForLanguage(languageCode = null) {
    const lang = languageCode || this.currentLanguage;
    if (!this.cachedData || !this.cachedData[lang]) {
      return null; // Fall back to static data
    }
    return this.cachedData[lang];
  }

  buildToolsHTML() {
    const categories = this.getCategoriesForLanguage();
    if (!categories) {
      return null; // Will use static HTML
    }

    const toolsContainer = document.querySelector('.tool-grid-container');
    if (!toolsContainer) return null;

    // Clear existing content
    toolsContainer.innerHTML = '';

    // Category order and mapping to translation keys
    const categoryOrder = [
      { key: 'devs', titleKey: 'devs' },
      { key: 'drivers', titleKey: 'drivers' },
      { key: 'extra', titleKey: 'extra' },
      { key: 'game', titleKey: 'game' },
      { key: 'office', titleKey: 'office' },
      { key: 'repos', titleKey: 'repos' },
      { key: 'utils', titleKey: 'utils' },
      { key: 'privacy', titleKey: 'privacy' }
    ];

    // Check if we're in utils category and handle subcategories
    const utilsCategory = categories['utils'];
    if (utilsCategory && utilsCategory.subcategories) {
      // Add privacy as a separate category from utils subcategories
      if (utilsCategory.subcategories['privacy']) {
        categories['privacy'] = {
          ...utilsCategory.subcategories['privacy'],
          name: 'privacy'
        };
      }
    }

    for (const categoryConfig of categoryOrder) {
      const categoryData = categories[categoryConfig.key];
      if (!categoryData) continue;

      const categoryDiv = this.createCategoryCard(categoryData, categoryConfig);
      if (categoryDiv) {
        toolsContainer.appendChild(categoryDiv);
      }
    }

    return true;
  }

  createCategoryCard(categoryData, categoryConfig) {
    const div = document.createElement('div');
    div.className = 'bg-gray-800 rounded-lg p-6 flex flex-col';

    // Create title
    const title = document.createElement('h4');
    title.className = 'text-xl font-semibold mb-4';
    title.setAttribute('data-key', categoryConfig.titleKey);
    title.textContent = categoryData.displayName || categoryData.name;

    // Create toggle button
    const button = document.createElement('button');
    button.className = 'mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 toggle-button';
    button.setAttribute('data-key', 'toggle-button');
    button.textContent = 'Show Tools'; // Will be updated by translation system

    // Create tools list
    const toolsList = document.createElement('ul');
    toolsList.className = 'tool-list mt-4 space-y-2 text-gray-300';

    // Add tools from main category
    for (const tool of categoryData.tools || []) {
      const li = document.createElement('li');
      li.textContent = tool.name;
      toolsList.appendChild(li);
    }

    // Add tools from subcategories (flattened)
    for (const subcategory of Object.values(categoryData.subcategories || {})) {
      for (const tool of subcategory.tools || []) {
        const li = document.createElement('li');
        li.textContent = tool.name;
        toolsList.appendChild(li);
      }
    }

    // Sort tools alphabetically
    const toolItems = Array.from(toolsList.children);
    toolItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
    toolsList.innerHTML = '';
    toolItems.forEach(item => toolsList.appendChild(item));

    div.appendChild(title);
    div.appendChild(button);
    div.appendChild(toolsList);

    return div;
  }

  async updateToolsSection() {
    const cacheLoaded = await this.loadCache();
    if (!cacheLoaded) {
      console.log('Using static tools data');
      return false;
    }

    console.log('Tools cache loaded successfully');
    
    // Update tools on language change
    const success = this.buildToolsHTML();
    if (success) {
      console.log('Tools section updated from cache');
      
      // Re-setup toggle buttons for the new content
      if (typeof setupToggleButtons === 'function') {
        setupToggleButtons();
      }
      
      return true;
    }

    return false;
  }

  async init() {
    // Try to load and update tools
    const updated = await this.updateToolsSection();
    
    if (updated) {
      // Show cache info in console
      const summary = await this.loadSummary();
      if (summary) {
        console.log(`Tools data last updated: ${new Date(summary.lastUpdated).toLocaleDateString()}`);
        console.log(`Total categories: ${summary.categoryCount}, Total tools: ${summary.totalTools}`);
      }
    }

    return updated;
  }

  // Method to update tools when language changes
  onLanguageChange(newLanguage) {
    this.setLanguage(newLanguage);
    if (this.cachedData) {
      this.buildToolsHTML();
      
      // Re-setup toggle buttons
      if (typeof setupToggleButtons === 'function') {
        setupToggleButtons();
      }
    }
  }
}

// Make it globally available
window.ToolsCacheLoader = ToolsCacheLoader;
