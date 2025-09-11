#!/usr/bin/env node

/**
 * LinuxToys Data Fetcher
 * Fetches the latest tools from LinuxToys repository and updates the local data file
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');

class LinuxToysDataFetcher {
    constructor() {
        this.repoOwner = 'psygreg';
        this.repoName = 'linuxtoys';
        this.scriptsPath = 'p3/scripts';
        this.libsPath = 'p3/libs/lang';
        this.dataFile = path.join(__dirname, '..', 'data', 'tools-data.json');
        this.translations = new Map();
    }

    /**
     * Make HTTP request to GitHub API
     */
    async fetchFromGitHub(path) {
        return new Promise((resolve, reject) => {
            const url = `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/contents/${path}`;
            
            https.get(url, {
                headers: {
                    'User-Agent': 'LinuxToys-Data-Fetcher'
                }
            }, (res) => {
                let data = '';
                
                res.on('data', (chunk) => {
                    data += chunk;
                });
                
                res.on('end', () => {
                    if (res.statusCode === 200) {
                        try {
                            const parsed = JSON.parse(data);
                            resolve(parsed);
                        } catch (error) {
                            reject(new Error(`Failed to parse JSON: ${error.message}`));
                        }
                    } else {
                        reject(new Error(`GitHub API returned ${res.statusCode}: ${data}`));
                    }
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    }

    /**
     * Get file content from GitHub
     */
    async getFileContent(path) {
        try {
            const data = await this.fetchFromGitHub(path);
            if (data.content) {
                return Buffer.from(data.content, 'base64').toString('utf8');
            }
            return null;
        } catch (error) {
            console.error(`Error fetching ${path}:`, error.message);
            return null;
        }
    }

    /**
     * Get directory listing from GitHub
     */
    async getDirectoryListing(path) {
        try {
            const data = await this.fetchFromGitHub(path);
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error(`Error fetching directory ${path}:`, error.message);
            return [];
        }
    }

    /**
     * Load translation files
     */
    async loadTranslations() {
        console.log('Loading translations...');
        try {
            const langFiles = await this.getDirectoryListing(this.libsPath);
            
            for (const file of langFiles) {
                if (file.name.endsWith('.json') && file.type === 'file') {
                    const content = await this.getFileContent(file.path);
                    if (content) {
                        try {
                            const langCode = file.name.replace('.json', '');
                            const translations = JSON.parse(content);
                            this.translations.set(langCode, translations);
                            console.log(`  Loaded ${langCode}: ${Object.keys(translations).length} entries`);
                        } catch (e) {
                            console.error(`  Error parsing ${file.name}:`, e.message);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error loading translations:', error.message);
        }
    }

    /**
     * Get translation for a key
     */
    getTranslation(key, lang = 'en') {
        const langTranslations = this.translations.get(lang);
        if (langTranslations && langTranslations[key]) {
            return langTranslations[key];
        }

        const englishTranslations = this.translations.get('en');
        if (englishTranslations && englishTranslations[key]) {
            return englishTranslations[key];
        }

        return key;
    }

    /**
     * Parse script header metadata
     */
    parseScriptHeader(content) {
        const lines = content.split('\n').slice(0, 20);
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
     * Get display name for category
     */
    getCategoryDisplayName(categoryName) {
        const translatedName = this.getTranslation(categoryName, 'en');
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
     * Get all tools for a category
     */
    async getCategoryTools(categoryName) {
        console.log(`  Processing category: ${categoryName}`);
        const categoryPath = `${this.scriptsPath}/${categoryName}`;
        const files = await this.getDirectoryListing(categoryPath);
        
        if (!files || !Array.isArray(files)) {
            console.log(`    No files found for ${categoryName}`);
            return [];
        }

        const tools = [];
        
        for (const file of files) {
            if (file.name.endsWith('.sh') && file.type === 'file') {
                const content = await this.getFileContent(file.path);
                if (content) {
                    const metadata = this.parseScriptHeader(content);
                    
                    let name = metadata.name || file.name.replace('.sh', '');
                    if (name.endsWith('_desc') || name.includes('_')) {
                        const translatedName = this.getTranslation(name, 'en');
                        if (translatedName !== name) {
                            name = translatedName;
                        }
                    }

                    let description = metadata.description || '';
                    if (description.endsWith('_desc') || description.includes('_')) {
                        const translatedDesc = this.getTranslation(description, 'en');
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
        
        console.log(`    Found ${tools.length} tools`);
        return tools.sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Get category information
     */
    async getCategoryInfo(categoryName) {
        const infoPath = `${this.scriptsPath}/${categoryName}/category-info.txt`;
        const content = await this.getFileContent(infoPath);
        
        if (content) {
            const info = this.parseCategoryInfo(content);
            
            let description = info.description || `${categoryName}_desc`;
            const translatedDesc = this.getTranslation(description, 'en');
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
            description: this.getTranslation(`${categoryName}_desc`, 'en') || `${categoryName}_desc`
        };
    }

    /**
     * Fetch all categories and tools
     */
    async fetchAllData() {
        console.log('Fetching data from LinuxToys repository...');
        
        await this.loadTranslations();
        
        const files = await this.getDirectoryListing(this.scriptsPath);
        
        if (!files || !Array.isArray(files)) {
            throw new Error('Could not fetch scripts directory listing');
        }

        const categories = [];
        
        console.log('Processing categories:');
        for (const file of files) {
            if (file.type === 'dir') {
                const info = await this.getCategoryInfo(file.name);
                const tools = await this.getCategoryTools(file.name);
                
                if (tools.length === 0) {
                    console.log(`  Skipping ${file.name}: no tools found`);
                    continue;
                }
                
                categories.push({
                    name: file.name,
                    displayName: this.getCategoryDisplayName(file.name),
                    icon: info.icon || 'folder-open',
                    description: info.description || this.getTranslation(`${file.name}_desc`, 'en'),
                    tools: tools
                });
            }
        }
        
        return categories.sort((a, b) => a.displayName.localeCompare(b.displayName));
    }

    /**
     * Get latest LinuxToys version/release info
     */
    async getLatestVersion() {
        try {
            const data = await this.fetchFromGitHub('');
            // For now, just use commit SHA as version. Could be enhanced to use actual releases.
            return data.sha?.substring(0, 8) || 'unknown';
        } catch (error) {
            console.error('Could not fetch version info:', error.message);
            return 'unknown';
        }
    }

    /**
     * Save LinuxToys translations to local files
     */
    async saveTranslations() {
        console.log('\nSaving translations...');
        const translationsDir = path.join(__dirname, '..', 'data', 'translations');
        
        try {
            // Create translations directory if it doesn't exist
            await fs.mkdir(translationsDir, { recursive: true });
            
            // Save each translation file
            for (const [langCode, translations] of this.translations) {
                const filePath = path.join(translationsDir, `${langCode}.json`);
                await fs.writeFile(filePath, JSON.stringify(translations, null, 2));
                console.log(`  Saved ${langCode}.json (${Object.keys(translations).length} entries)`);
            }
            
            console.log(`✅ Saved ${this.translations.size} translation files`);
        } catch (error) {
            console.error('❌ Failed to save translations:', error.message);
            throw error;
        }
    }

    /**
     * Update the local data file
     */
    async updateDataFile() {
        try {
            const categories = await this.fetchAllData();
            const version = await this.getLatestVersion();
            
            const data = {
                lastUpdated: new Date().toISOString(),
                linuxToysVersion: version,
                categories: categories
            };

            await fs.writeFile(this.dataFile, JSON.stringify(data, null, 2));
            
            // Also save the translations
            await this.saveTranslations();
            
            const totalTools = categories.reduce((sum, cat) => sum + cat.tools.length, 0);
            console.log(`\n✅ Successfully updated tools data!`);
            console.log(`   Categories: ${categories.length}`);
            console.log(`   Total tools: ${totalTools}`);
            console.log(`   Translations: ${this.translations.size} languages`);
            console.log(`   Version: ${version}`);
            console.log(`   Updated: ${data.lastUpdated}`);
            
            return data;
        } catch (error) {
            console.error('❌ Failed to update data file:', error.message);
            throw error;
        }
    }
}

// Run if called directly
if (require.main === module) {
    const fetcher = new LinuxToysDataFetcher();
    fetcher.updateDataFile()
        .then(() => {
            console.log('\n🎉 Data update completed successfully!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('\n💥 Data update failed:', error.message);
            process.exit(1);
        });
}

module.exports = LinuxToysDataFetcher;
