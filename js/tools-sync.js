/**
 * LinuxToys Tools Auto-Sync
 * Automatically fetches and displays the latest tools from the LinuxToys repository
 */

class LinuxToysSync {
    constructor() {
        this.repoOwner = 'psygreg';
        this.repoName = 'linuxtoys';
        this.scriptsPath = 'p3/scripts';
        this.cache = new Map();
        this.cacheExpiry = 30 * 60 * 1000; // 30 minutes
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
        
        for (const file of files) {
            if (file.name.endsWith('.sh') && file.type === 'file') {
                const content = await this.fetchGitHubFile(file.path);
                if (content) {
                    const metadata = this.parseScriptHeader(content);
                    tools.push({
                        name: metadata.name || file.name.replace('.sh', ''),
                        description: metadata.description || '',
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
        
        if (content) {
            return this.parseCategoryInfo(content);
        }
        
        return {
            name: categoryName,
            icon: 'folder-open',
            description: `${categoryName}_desc`
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
        
        for (const file of files) {
            if (file.type === 'dir') {
                const info = await this.getCategoryInfo(file.name);
                const tools = await this.getCategoryTools(file.name);
                
                categories.push({
                    name: file.name,
                    displayName: info.name || this.getCategoryDisplayName(file.name),
                    icon: info.icon || 'folder-open',
                    description: info.description || `${file.name}_desc`,
                    tools: tools
                });
            }
        }
        
        return categories.sort((a, b) => a.displayName.localeCompare(b.displayName));
    }

    /**
     * Get display name for category
     */
    getCategoryDisplayName(categoryName) {
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
            this.setStatusMessage('Loading latest tools from LinuxToys repository...', 'loading');
            console.log('Fetching LinuxToys tools data...');
            const categories = await this.getCategories();
            
            const container = document.querySelector('.tool-grid-container');
            if (!container) {
                console.error('Tool grid container not found');
                this.setStatusMessage('Error: Could not find tools container', 'error');
                return;
            }
            
            // Clear existing content
            container.innerHTML = '';
            
            // Create category cards
            for (const category of categories) {
                const card = this.createCategoryCard(category);
                container.appendChild(card);
            }
            
            // Re-initialize toggle functionality
            this.initializeToggles();
            
            const totalTools = categories.reduce((sum, cat) => sum + cat.tools.length, 0);
            this.setStatusMessage(`✓ Loaded ${categories.length} categories with ${totalTools} tools (updated from GitHub)`, 'success');
            console.log(`Successfully loaded ${categories.length} categories with ${totalTools} tools`);
            
            // Hide status after 5 seconds
            setTimeout(() => {
                const statusElement = document.getElementById('tools-status');
                if (statusElement) {
                    statusElement.style.display = 'none';
                }
            }, 5000);
            
        } catch (error) {
            console.error('Error updating website:', error);
            this.setStatusMessage('⚠ Using cached data - GitHub API temporarily unavailable', 'warning');
            this.showErrorMessage('Failed to load tools data from GitHub. Using fallback data.');
        }
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
                const currentLang = document.documentElement.lang || 'en';
                
                // Get the translations from the existing script
                if (window.translations && window.translations[currentLang]) {
                    const key = isExpanded ? 'toggle-button-less' : 'toggle-button';
                    newButton.textContent = window.translations[currentLang][key];
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
