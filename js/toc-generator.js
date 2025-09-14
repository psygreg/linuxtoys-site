/**
 * Table of Contents Generator for LinuxToys Documentation
 * Generates navigation from markdown headers (h2 and h3 only)
 */

class TOCGenerator {
  constructor() {
    this.toc = [];
    this.tocContainer = null;
    this.isVisible = false; // Start with TOC hidden
  }

  /**
   * Initialize the TOC system
   */
  init() {
    // Ensure DOM is ready before creating elements
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.createTOCContainer();
        this.setupEventListeners();
      });
    } else {
      this.createTOCContainer();
      this.setupEventListeners();
    }
  }

  /**
   * Create the TOC container and toggle button
   */
  createTOCContainer() {
    // Create TOC elements separately for independent positioning
    const tocHTML = `
      <!-- TOC Toggle Button - positioned independently -->
      <button id="toc-toggle" class="fixed right-4 top-20 z-50 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg border border-gray-600 shadow-lg transition-all duration-300 ease-in-out">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <!-- TOC Panel - positioned with adequate spacing from button -->
      <div id="toc-panel" class="fixed right-4 top-40 z-40 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-w-xs max-h-96 overflow-y-auto transition-all duration-300 ease-in-out transform translate-x-full">
        <div class="p-4">
          <h3 id="toc-title" class="text-white font-semibold mb-3 text-sm uppercase tracking-wide" data-key="toc-contents">Contents</h3>
          <nav id="toc-nav" class="space-y-1">
            <!-- TOC items will be inserted here -->
          </nav>
        </div>
      </div>
    `;

    // Insert TOC into page
    document.body.insertAdjacentHTML('beforeend', tocHTML);
    
    // Store references
    this.tocContainer = document.getElementById('toc-panel');
    this.toggleButton = document.getElementById('toc-toggle');
  }

  /**
   * Set up event listeners for TOC functionality
   */
  setupEventListeners() {
    // Use requestAnimationFrame to ensure elements are properly rendered
    requestAnimationFrame(() => {
      const toggleBtn = document.getElementById('toc-toggle');
      const panel = document.getElementById('toc-panel');

      if (!toggleBtn || !panel) {
        // Retry after a short delay if elements aren't ready
        setTimeout(() => this.setupEventListeners(), 100);
        return;
      }

      // Remove any existing listeners first
      const existingToggleBtn = document.getElementById('toc-toggle');
      if (existingToggleBtn && existingToggleBtn._tocListener) {
        existingToggleBtn.removeEventListener('click', existingToggleBtn._tocListener);
      }

      // Create and store the listener
      const toggleListener = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleTOC();
      };

      toggleBtn._tocListener = toggleListener;
      toggleBtn.addEventListener('click', toggleListener);

      // Close TOC when clicking outside (but not on the toggle button)
      document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !toggleBtn.contains(e.target) && this.isVisible) {
          this.hideTOC();
        }
      });

      // Handle scroll for active section highlighting
      window.addEventListener('scroll', () => {
        this.updateActiveSection();
      });

      // Listen for language changes
      window.addEventListener('languageChanged', () => {
        this.updateTranslations();
      });
    });
  }

  /**
   * Generate TOC from markdown content
   */
  generateTOC() {
    const content = document.getElementById('markdown-content');
    if (!content) return;

    const headers = content.querySelectorAll('h2, h3');
    this.toc = [];

    headers.forEach((header, index) => {
      const level = parseInt(header.tagName.charAt(1));
      const text = header.textContent.trim();
      const id = this.generateAnchorId(text, index);
      
      // Add ID to header for linking
      header.id = id;
      
      // Add to TOC data
      this.toc.push({
        level,
        text,
        id,
        element: header
      });
    });

    this.renderTOC();
  }

  /**
   * Generate a URL-safe anchor ID from header text
   */
  generateAnchorId(text, index) {
    const base = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    return base || `section-${index}`;
  }

  /**
   * Render the TOC navigation
   */
  renderTOC() {
    const nav = document.getElementById('toc-nav');
    if (!nav) return;

    const tocItems = this.toc.map(item => {
      const indent = item.level === 3 ? 'ml-4' : '';
      const textSize = item.level === 2 ? 'text-sm font-medium' : 'text-xs';
      
      return `
        <a href="#${item.id}" 
           class="toc-link block py-1 px-2 rounded text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 ${indent} ${textSize}"
           data-target="${item.id}">
          ${this.escapeHtml(item.text)}
        </a>
      `;
    }).join('');

    nav.innerHTML = tocItems;

    // Add click handlers for smooth scrolling
    nav.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        this.scrollToSection(targetId);
      });
    });
  }

  /**
   * Scroll to a specific section with smooth behavior
   */
  scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerHeight = 100; // Account for fixed header
    const targetPosition = target.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Hide TOC after navigation on mobile
    if (window.innerWidth < 768) {
      this.hideTOC();
    }
  }

  /**
   * Update active section highlighting based on scroll position
   */
  updateActiveSection() {
    if (this.toc.length === 0) return;

    const scrollPosition = window.scrollY + 150; // Offset for header
    let activeId = null;

    // Find the current section
    for (let i = this.toc.length - 1; i >= 0; i--) {
      const item = this.toc[i];
      if (item.element.offsetTop <= scrollPosition) {
        activeId = item.id;
        break;
      }
    }

    // Update active state in TOC
    const links = document.querySelectorAll('.toc-link');
    links.forEach(link => {
      link.classList.remove('bg-blue-600', 'text-white');
      link.classList.add('text-gray-300');
      
      if (link.getAttribute('data-target') === activeId) {
        link.classList.remove('text-gray-300');
        link.classList.add('bg-blue-600', 'text-white');
      }
    });
  }

  /**
   * Toggle TOC visibility
   */
  toggleTOC() {
    const panel = document.getElementById('toc-panel');
    if (!panel) return;
    
    if (this.isVisible) {
      this.hideTOC();
    } else {
      this.showTOC();
    }
  }

  /**
   * Show TOC panel
   */
  showTOC() {
    const panel = document.getElementById('toc-panel');
    if (panel) {
      panel.classList.remove('translate-x-full');
      this.isVisible = true;
    }
  }

  /**
   * Hide TOC panel
   */
  hideTOC() {
    const panel = document.getElementById('toc-panel');
    if (panel) {
      panel.classList.add('translate-x-full');
      this.isVisible = false;
    }
  }

  /**
   * Update TOC translations when language changes
   */
  updateTranslations() {
    const tocTitle = document.getElementById('toc-title');
    if (!tocTitle) return;

    if (window.translationManager && window.translationManager.translations) {
      const currentLang = window.translationManager.currentLang || 'en';
      const currentTranslations = window.translationManager.translations[currentLang] || 
                                   window.translationManager.translations[window.translationManager.fallbackLang] || {};
      const translation = currentTranslations['toc-contents'];
      
      if (translation) {
        tocTitle.textContent = translation;
      } else {
        tocTitle.textContent = 'Contents'; // Fallback
      }
    } else {
      // Fallback to default text if translation system not ready
      tocTitle.textContent = 'Contents';
      
      // Retry translation after a delay
      setTimeout(() => {
        if (window.translationManager && window.translationManager.translations) {
          this.updateTranslations();
        }
      }, 500);
    }
  }

  /**
   * Escape HTML characters
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Check if content is loaded and generate TOC
   */
  checkAndGenerate() {
    const content = document.getElementById('markdown-content');
    if (content && !content.classList.contains('hidden') && content.innerHTML.trim()) {
      this.generateTOC();
      
      // Ensure translations are applied with multiple attempts
      setTimeout(() => {
        this.updateTranslations();
      }, 50);
      
      // Try again after a longer delay to ensure translation system is ready
      setTimeout(() => {
        this.updateTranslations();
      }, 1000);
      
      return true;
    }
    return false;
  }

  /**
   * Wait for content to load, then generate TOC
   */
  waitForContent(maxAttempts = 50) {
    let attempts = 0;
    
    const checkInterval = setInterval(() => {
      attempts++;
      
      if (this.checkAndGenerate()) {
        clearInterval(checkInterval);
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval);
      }
    }, 100);
  }
}

// Export for use in other scripts
window.TOCGenerator = TOCGenerator;