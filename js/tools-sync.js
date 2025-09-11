/**
 * LinuxToys Tools Auto-Sync
 * Automatically fetches and displays the latest tools from the LinuxToys repository
 */

class LinuxToysSync {
    constructor() {
        this.repoOwner = 'psygreg';
        this.repoName = 'linuxtoys';
        this.scriptsPath = 'p3/scripts';
        this.libsPath = 'p3/libs/lang';
        this.cache = new Map();
        this.translations = new Map();
        this.cachedLinuxToysTranslations = new Map();
        this.cacheExpiry = 30 * 60 * 1000; // 30 minutes
        this.localDataUrl = './data/tools-data.json';
        this.translationsBaseUrl = './data/translations/';
    }

    /**
     * Load cached LinuxToys translations from local files
     */
    async loadCachedLinuxToysTranslations() {
        const languages = ['en', 'es', 'pt', 'de', 'fr', 'ja', 'ru', 'zh'];
        
        for (const lang of languages) {
            try {
                const response = await fetch(`${this.translationsBaseUrl}${lang}.json`);
                
                if (response.ok) {
                    const translations = await response.json();
                    this.cachedLinuxToysTranslations.set(lang, translations);
                    console.log(`Loaded cached LinuxToys translations for ${lang}: ${Object.keys(translations).length} entries`);
                } else if (response.status !== 404) {
                    console.warn(`Failed to load cached LinuxToys translations for ${lang}: ${response.status}`);
                }
            } catch (error) {
                console.warn(`Error loading cached LinuxToys translations for ${lang}:`, error);
            }
        }
        
        console.log(`Loaded cached LinuxToys translations for ${this.cachedLinuxToysTranslations.size} languages`);
    }

    /**
     * Load tools data from local JSON file
     */
    async loadLocalData() {
        try {
            const response = await fetch(this.localDataUrl);
            
            if (!response.ok) {
                throw new Error(`Failed to load local data: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(`Loaded local tools data (updated: ${data.lastUpdated})`);
            
            return data.categories || [];
        } catch (error) {
            console.error('Error loading local data:', error);
            return null;
        }
    }

    /**
     * Fetch file content from GitHub API
     */
    async fetchGitHubFile(path) {
        const cacheKey = `file:${path}`;
        const cached = this.cache.get(cacheKey);
        
        if (cached && (Date.now() - cached.timestamp < this.cacheExpiry)) {
            return cached.data;
        }

        try {
            const url = `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/contents/${path}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            
            const data = await response.json();
            const content = atob(data.content); // Decode base64
            
            this.cache.set(cacheKey, {
                data: content,
                timestamp: Date.now()
            });
            
            return content;
        } catch (error) {
            console.error(`Error fetching ${path}:`, error);
            return null;
        }
    }

    /**
     * Fetch directory listing from GitHub API
     */
    async fetchGitHubDirectory(path) {
        const cacheKey = `dir:${path}`;
        const cached = this.cache.get(cacheKey);
        
        if (cached && (Date.now() - cached.timestamp < this.cacheExpiry)) {
            return cached.data;
        }

        try {
            const url = `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/contents/${path}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            this.cache.set(cacheKey, {
                data: data,
                timestamp: Date.now()
            });
            
            return data;
        } catch (error) {
            console.error(`Error fetching directory ${path}:`, error);
            return [];
        }
    }

    /**
     * Load translation files from LinuxToys repository
     */
    async loadTranslations() {
        try {
            const langFiles = await this.fetchGitHubDirectory(this.libsPath);
            if (!langFiles || !Array.isArray(langFiles)) return;

            for (const file of langFiles) {
                if (file.name.endsWith('.json') && file.type === 'file') {
                    const content = await this.fetchGitHubFile(file.path);
                    if (content) {
                        try {
                            const langCode = file.name.replace('.json', '');
                            const translations = JSON.parse(content);
                            this.translations.set(langCode, translations);
                            console.log(`Loaded ${langCode} translations with ${Object.keys(translations).length} entries`);
                        } catch (e) {
                            console.error(`Error parsing ${file.name}:`, e);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    /**
     * Get translation for a key in specified language
     */
    getTranslation(key, lang = 'en') {
        // First try to use the website's i18n system if available
        if (window.i18n && window.i18n.translations[lang] && window.i18n.translations[lang][key]) {
            return window.i18n.translations[lang][key];
        }

        // Then try cached LinuxToys translations (locally stored)
        const cachedLangTranslations = this.cachedLinuxToysTranslations.get(lang);
        if (cachedLangTranslations && cachedLangTranslations[key]) {
            return cachedLangTranslations[key];
        }

        // Fall back to live LinuxToys translations if loaded (from GitHub API)
        const currentLangTranslations = this.translations.get(lang);
        if (currentLangTranslations && currentLangTranslations[key]) {
            return currentLangTranslations[key];
        }

        // Fall back to cached English from LinuxToys
        const cachedEnglishTranslations = this.cachedLinuxToysTranslations.get('en');
        if (cachedEnglishTranslations && cachedEnglishTranslations[key]) {
            return cachedEnglishTranslations[key];
        }

        // Fall back to live English from LinuxToys
        const englishTranslations = this.translations.get('en');
        if (englishTranslations && englishTranslations[key]) {
            return englishTranslations[key];
        }

        // Return key if no translation found
        return key;
    }

    /**
     * Parse script header metadata
     */
    parseScriptHeader(content) {
        const lines = content.split('\n').slice(0, 20); // Only check first 20 lines
        const metadata = {};
        
        for (const line of lines) {
            if (line.startsWith('#')) {
                const match = line.match(/^#\s*(\w+):\s*(.+)$/);
                if (match) {
                    const [, key, value] = match;
                    metadata[key.toLowerCase()] = value.trim();
                }
            }
        }
        
        return metadata;
    }

    /**
     * Parse category info file
     */
    parseCategoryInfo(content) {
        const lines = content.split('\n');
        const info = {};
        
        for (const line of lines) {
            if (line.includes(':')) {
                const [key, value] = line.split(':', 2);
                info[key.trim().toLowerCase()] = value.trim();
            }
        }
        
        return info;
    }

    /**
     * Get all tools for a category
     */
    async getCategoryTools(categoryName) {
        const categoryPath = `${this.scriptsPath}/${categoryName}`;
        const files = await this.fetchGitHubDirectory(categoryPath);
        
        if (!files || !Array.isArray(files)) {
            return [];
        }

        const tools = [];
        const currentLang = window.i18n?.currentLang || 'en';
        
        for (const file of files) {
            if (file.name.endsWith('.sh') && file.type === 'file') {
                const content = await this.fetchGitHubFile(file.path);
                if (content) {
                    const metadata = this.parseScriptHeader(content);
                    
                    // Get the name, resolving translation keys
                    let name = metadata.name || file.name.replace('.sh', '');
                    if (name.endsWith('_desc') || name.includes('_')) {
                        // This might be a translation key, try to resolve it
                        const translatedName = this.getTranslation(name, currentLang);
                        if (translatedName !== name) {
                            name = translatedName;
                        }
                    }

                    // Get description, resolving translation keys
                    let description = metadata.description || '';
                    if (description.endsWith('_desc') || description.includes('_')) {
                        const translatedDesc = this.getTranslation(description, currentLang);
                        if (translatedDesc !== description) {
                            description = translatedDesc;
                        }
                    }
                    
                    tools.push({
                        name: name,
                        description: description,
                        icon: metadata.icon || 'application-x-executable',
                        version: metadata.version || '1.0'
                    });
                }
            }
        }
        
        return tools.sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Get category information
     */
    async getCategoryInfo(categoryName) {
        const infoPath = `${this.scriptsPath}/${categoryName}/category-info.txt`;
        const content = await this.fetchGitHubFile(infoPath);
        const currentLang = window.i18n?.currentLang || 'en';
        
        if (content) {
            const info = this.parseCategoryInfo(content);
            
            // Resolve description translation key
            let description = info.description || `${categoryName}_desc`;
            const translatedDesc = this.getTranslation(description, currentLang);
            if (translatedDesc !== description) {
                description = translatedDesc;
            }
            
            return {
                name: info.name || categoryName,
                icon: info.icon || 'folder-open',
                description: description
            };
        }
        
        return {
            name: categoryName,
            icon: 'folder-open',
            description: this.getTranslation(`${categoryName}_desc`, currentLang) || `${categoryName}_desc`
        };
    }

    /**
     * Get all categories
     */
    async getCategories() {
        const files = await this.fetchGitHubDirectory(this.scriptsPath);
        
        if (!files || !Array.isArray(files)) {
            return [];
        }

        const categories = [];
        const currentLang = window.i18n?.currentLang || 'en';
        
        for (const file of files) {
            if (file.type === 'dir') {
                const info = await this.getCategoryInfo(file.name);
                const tools = await this.getCategoryTools(file.name);
                
                if (tools.length === 0) {
                    console.log(`Skipping category ${file.name}: no tools found`);
                    continue;
                }
                
                categories.push({
                    name: file.name,
                    displayName: this.getCategoryDisplayName(file.name, currentLang),
                    icon: info.icon || 'folder-open',
                    description: info.description || this.getTranslation(`${file.name}_desc`, currentLang),
                    tools: tools
                });
            }
        }
        
        return categories.sort((a, b) => a.displayName.localeCompare(b.displayName));
    }

    /**
     * Get display name for category with translation support
     */
    getCategoryDisplayName(categoryName, lang = 'en') {
        // Try to get translated category name first
        const translatedName = this.getTranslation(categoryName, lang);
        if (translatedName !== categoryName) {
            return translatedName;
        }
        
        const displayNames = {
            'devs': 'Development',
            'drivers': 'Drivers', 
            'extra': 'Extra',
            'game': 'Gaming',
            'office': 'Office & Productivity',
            'repos': 'Repositories',
            'utils': 'Utilities',
            'privacy': 'Privacy',
            'sysadm': 'System Administration'
        };
        
        return displayNames[categoryName] || categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    }

    /**
     * Update the website with fetched data
     */
    async updateWebsite() {
        try {
            this.setStatusMessage('Loading tools data...', 'loading');
            console.log('Loading LinuxToys tools data...');
            
            const container = document.querySelector('.tool-grid-container');
            if (!container) {
                console.error('Tool grid container not found');
                this.setStatusMessage('Error: Could not find tools container', 'error');
                return;
            }
            
            // Load cached LinuxToys translations first
            await this.loadCachedLinuxToysTranslations();
            
            // First, try to load local data (pre-generated and stored in repo)
            let categories = await this.loadLocalData();
            let dataSource = 'local';
            
            // If local data is not available, fall back to GitHub API
            if (!categories || categories.length === 0) {
                console.log('Local data not available, falling back to GitHub API...');
                this.setStatusMessage('Loading from LinuxToys repository (GitHub API)...', 'loading');
                
                try {
                    // Try to load translations from LinuxToys API, but don't fail if this doesn't work
                    await this.loadTranslations();
                } catch (error) {
                    console.warn('Could not load LinuxToys translations from API:', error);
                }
                
                categories = await this.getCategories();
                dataSource = 'github-api';
            }
            
            // Clear existing content
            container.innerHTML = '';
            
            if (!categories || categories.length === 0) {
                console.log('No data available from any source, using hardcoded fallback');
                this.setStatusMessage('⚠ Using fallback data - unable to sync with LinuxToys', 'warning');
                this.loadFallbackData(container);
                return;
            }
            
            // Create category cards
            for (const category of categories) {
                const card = this.createCategoryCard(category);
                container.appendChild(card);
            }
            
            // Re-initialize toggle functionality
            this.initializeToggles();
            
            const totalTools = categories.reduce((sum, cat) => sum + cat.tools.length, 0);
            
            if (dataSource === 'local') {
                const translationsCount = this.cachedLinuxToysTranslations.size;
                this.setStatusMessage(`✓ Loaded ${categories.length} categories with ${totalTools} tools (from local data, ${translationsCount} translations)`, 'success');
                console.log(`Successfully loaded ${categories.length} categories with ${totalTools} tools from local data`);
            } else {
                this.setStatusMessage(`✓ Loaded ${categories.length} categories with ${totalTools} tools (synced with LinuxToys repository)`, 'success');
                console.log(`Successfully loaded ${categories.length} categories with ${totalTools} tools from GitHub API`);
            }
            
            // Hide status after 5 seconds
            setTimeout(() => {
                const statusElement = document.getElementById('tools-status');
                if (statusElement) {
                    statusElement.style.display = 'none';
                }
            }, 5000);
            
        } catch (error) {
            console.error('Error updating website:', error);
            this.setStatusMessage('⚠ Failed to load tools data - using fallback', 'warning');
            
            // Load fallback data instead of failing completely
            const container = document.querySelector('.tool-grid-container');
            if (container) {
                this.loadFallbackData(container);
            }
        }
    }

    /**
     * Load fallback data when GitHub API is unavailable
     */
    loadFallbackData(container) {
        const fallbackCategories = [
            {
                name: 'devs',
                displayName: window.i18n ? window.i18n.t('devs') : 'Development',
                tools: ['VSCode', 'Git', 'Node.js', 'Python', 'Docker']
            },
            {
                name: 'game',
                displayName: window.i18n ? window.i18n.t('game') : 'Gaming',
                tools: ['Steam', 'Lutris', 'Wine', 'Heroic Games Launcher']
            },
            {
                name: 'office',
                displayName: window.i18n ? window.i18n.t('office') : 'Office & Productivity',
                tools: ['LibreOffice', 'GIMP', 'Blender', 'Firefox']
            },
            {
                name: 'utils',
                displayName: window.i18n ? window.i18n.t('utils') : 'Utilities',
                tools: ['VLC', 'Discord', 'Telegram', 'Spotify']
            }
        ];

        container.innerHTML = '';
        
        for (const category of fallbackCategories) {
            const card = this.createFallbackCard(category);
            container.appendChild(card);
        }
        
        this.initializeToggles();
        
        setTimeout(() => {
            const statusElement = document.getElementById('tools-status');
            if (statusElement) {
                statusElement.style.display = 'none';
            }
        }, 3000);
    }

    /**
     * Create a fallback category card
     */
    createFallbackCard(category) {
        const card = document.createElement('div');
        card.className = 'bg-gray-800 rounded-lg p-6 flex flex-col';
        
        card.innerHTML = `
            <h4 class="text-xl font-semibold mb-4">
                ${category.displayName}
            </h4>
            <button
                class="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 toggle-button"
            >
                ${window.i18n ? window.i18n.t('toggle-button') : 'Show Tools'}
            </button>
            <ul class="tool-list mt-4 space-y-2 text-gray-300">
                ${category.tools.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
        `;
        
        return card;
    }

    /**
     * Create a category card element
     */
    createCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'bg-gray-800 rounded-lg p-6 flex flex-col';
        
        card.innerHTML = `
            <h4 class="text-xl font-semibold mb-4" data-key="${category.name}">
                ${category.displayName}
            </h4>
            <button
                class="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 toggle-button"
                data-key="toggle-button"
            >
                Show Tools
            </button>
            <ul class="tool-list mt-4 space-y-2 text-gray-300">
                ${category.tools.map(tool => `<li>${tool.name}</li>`).join('')}
            </ul>
        `;
        
        return card;
    }

    /**
     * Initialize toggle functionality for category cards
     */
    initializeToggles() {
        const toggleButtons = document.querySelectorAll('.toggle-button');
        
        toggleButtons.forEach((button) => {
            // Mark as handled by sync system to avoid conflicts
            button.setAttribute('data-sync-handled', 'true');
            
            // Remove any existing event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener('click', () => {
                const list = newButton.nextElementSibling;
                list.classList.toggle('expanded');
                
                const isExpanded = list.classList.contains('expanded');
                
                // Get the translations from the i18n system
                if (window.i18n) {
                    const key = isExpanded ? 'toggle-button-less' : 'toggle-button';
                    newButton.textContent = window.i18n.t(key);
                } else {
                    newButton.textContent = isExpanded ? 'Show Less' : 'Show Tools';
                }
            });
        });
    }

    /**
     * Set status message
     */
    setStatusMessage(message, type = 'info') {
        const statusElement = document.getElementById('status-message');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = {
                'loading': 'text-blue-400',
                'success': 'text-green-400',
                'error': 'text-red-400', 
                'warning': 'text-yellow-400',
                'info': 'text-blue-400'
            }[type] || 'text-blue-400';
        }
    }

    /**
     * Show error message to user
     */
    showErrorMessage(message) {
        console.warn(message);
        // Could add a user-visible notification here
    }
}

// Initialize and run when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const sync = new LinuxToysSync();
    
    // Update immediately
    sync.updateWebsite();
    
    // Update every hour
    setInterval(() => {
        sync.updateWebsite();
    }, 60 * 60 * 1000);
    
    // Make globally available for debugging
    window.linuxToysSync = sync;
});
