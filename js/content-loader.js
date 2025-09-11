class ContentLoader {
  constructor(translationManager) {
    this.translationManager = translationManager;
    this.contentType = null;
    this.supportedLanguages = ['en', 'pt', 'es', 'fr', 'de', 'zh', 'ja', 'ru'];
  }

  async init() {
    // Get content type from URL parameters or pathname
    const urlParams = new URLSearchParams(window.location.search);
    this.contentType = urlParams.get('content') || this.getContentTypeFromPath();
    
    if (this.contentType) {
      await this.loadContent();
    } else {
      this.showError('Invalid content type');
    }
    
    // Store reference for global access
    window.contentLoader = this;
  }

  getContentTypeFromPath() {
    const path = window.location.pathname;
    if (path.includes('handbook')) return 'handbook';
    if (path.includes('cli-mode')) return 'cli-mode';
    return null;
  }

  async loadContent() {
    const loadingEl = document.getElementById('content-loading');
    const contentEl = document.getElementById('markdown-content');
    const errorEl = document.getElementById('content-error');
    
    // Show loading
    loadingEl.classList.remove('hidden');
    contentEl.classList.add('hidden');
    errorEl.classList.add('hidden');
    
    try {
      const currentLang = this.translationManager.currentLang;
      const content = await this.fetchMarkdownContent(this.contentType, currentLang);
      
      if (content) {
        // Parse markdown to HTML
        const htmlContent = marked.parse(content);
        contentEl.innerHTML = htmlContent;
        
        // Update page title and meta tags
        this.updatePageMeta(this.contentType, currentLang);
        
        // Show content
        loadingEl.classList.add('hidden');
        contentEl.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
      } else {
        throw new Error('Content not found');
      }
    } catch (error) {
      console.error('Error loading content:', error);
      this.showError();
    }
  }

  async fetchMarkdownContent(contentType, language) {
    // Try to fetch content in the requested language
    try {
      const response = await fetch(`content/${language}/${contentType}.md`);
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      console.warn(`Content not available in ${language}, trying fallback`);
    }
    
    // Fallback to English if the requested language is not available
    if (language !== 'en') {
      try {
        const response = await fetch(`content/en/${contentType}.md`);
        if (response.ok) {
          return await response.text();
        }
      } catch (error) {
        console.error('Fallback content not available');
      }
    }
    
    return null;
  }

  updatePageMeta(contentType, language) {
    const titles = {
      'handbook': {
        'en': 'Developer Handbook - LinuxToys',
        'pt': 'Manual do Desenvolvedor - LinuxToys',
        'es': 'Manual del Desarrollador - LinuxToys',
        'fr': 'Manuel du Développeur - LinuxToys',
        'de': 'Entwicklerhandbuch - LinuxToys',
        'zh': '开发者手册 - LinuxToys',
        'ja': '開発者ハンドブック - LinuxToys',
        'ru': 'Руководство разработчика - LinuxToys'
      },
      'cli-mode': {
        'en': 'CLI Mode Instructions - LinuxToys',
        'pt': 'Instruções do Modo CLI - LinuxToys',
        'es': 'Instrucciones del Modo CLI - LinuxToys',
        'fr': 'Instructions du Mode CLI - LinuxToys',
        'de': 'CLI-Modus Anweisungen - LinuxToys',
        'zh': 'CLI 模式说明 - LinuxToys',
        'ja': 'CLIモードの説明 - LinuxToys',
        'ru': 'Инструкции CLI режима - LinuxToys'
      }
    };

    const descriptions = {
      'handbook': {
        'en': 'Complete guide for developing LinuxToys tools and scripts',
        'pt': 'Guia completo para desenvolver ferramentas e scripts do LinuxToys',
        'es': 'Guía completa para desarrollar herramientas y scripts de LinuxToys',
        'fr': 'Guide complet pour développer des outils et scripts LinuxToys',
        'de': 'Vollständiger Leitfaden für die Entwicklung von LinuxToys-Tools und -Skripten',
        'zh': '开发 LinuxToys 工具和脚本的完整指南',
        'ja': 'LinuxToysツールとスクリプトの開発完全ガイド',
        'ru': 'Полное руководство по разработке инструментов и скриптов LinuxToys'
      },
      'cli-mode': {
        'en': 'Learn how to use LinuxToys CLI mode for automated installations',
        'pt': 'Aprenda a usar o modo CLI do LinuxToys para instalações automatizadas',
        'es': 'Aprende a usar el modo CLI de LinuxToys para instalaciones automatizadas',
        'fr': 'Apprenez à utiliser le mode CLI de LinuxToys pour les installations automatisées',
        'de': 'Erfahren Sie, wie Sie den LinuxToys CLI-Modus für automatisierte Installationen verwenden',
        'zh': '学习如何使用 LinuxToys CLI 模式进行自动化安装',
        'ja': '自動インストール用のLinuxToys CLIモードの使用方法を学ぶ',
        'ru': 'Изучите, как использовать режим CLI LinuxToys для автоматических установок'
      }
    };

    // Update title
    const title = titles[contentType]?.[language] || titles[contentType]?.['en'] || 'LinuxToys';
    document.title = title;
    document.getElementById('page-title').textContent = title;

    // Update description
    const description = descriptions[contentType]?.[language] || descriptions[contentType]?.['en'] || 'LinuxToys documentation';
    document.getElementById('page-description').setAttribute('content', description);
    document.getElementById('og-description').setAttribute('content', description);
    document.getElementById('twitter-description').setAttribute('content', description);

    // Update og:title and twitter:title
    document.getElementById('og-title').setAttribute('content', title);
    document.getElementById('twitter-title').setAttribute('content', title);
  }

  showError() {
    const loadingEl = document.getElementById('content-loading');
    const contentEl = document.getElementById('markdown-content');
    const errorEl = document.getElementById('content-error');
    
    loadingEl.classList.add('hidden');
    contentEl.classList.add('hidden');
    errorEl.classList.remove('hidden');
  }

  // Method to programmatically navigate to content
  static navigateToContent(contentType) {
    window.location.href = `page-template.html?content=${contentType}`;
  }
}

// Add translations for the new keys
const additionalTranslations = {
  'en': {
    'back-to-home': 'Back to Home',
    'loading-content': 'Loading content...',
    'error-title': 'Content not available',
    'error-message': 'Sorry, the content for this page is not available in the selected language yet.',
    'return-home': 'Return to home page',
    'footer-description': 'Making Linux easier, one tool at a time.',
    'footer-support': 'Support',
    'footer-rights': 'All rights reserved.'
  },
  'pt': {
    'back-to-home': 'Voltar ao Início',
    'loading-content': 'Carregando conteúdo...',
    'error-title': 'Conteúdo não disponível',
    'error-message': 'Desculpe, o conteúdo desta página ainda não está disponível no idioma selecionado.',
    'return-home': 'Voltar à página inicial',
    'footer-description': 'Tornando o Linux mais fácil, uma ferramenta de cada vez.',
    'footer-support': 'Suporte',
    'footer-rights': 'Todos os direitos reservados.'
  },
  'es': {
    'back-to-home': 'Volver al Inicio',
    'loading-content': 'Cargando contenido...',
    'error-title': 'Contenido no disponible',
    'error-message': 'Lo sentimos, el contenido de esta página aún no está disponible en el idioma seleccionado.',
    'return-home': 'Volver a la página de inicio',
    'footer-description': 'Haciendo Linux más fácil, una herramienta a la vez.',
    'footer-support': 'Soporte',
    'footer-rights': 'Todos los derechos reservados.'
  },
  'fr': {
    'back-to-home': 'Retour à l\'accueil',
    'loading-content': 'Chargement du contenu...',
    'error-title': 'Contenu non disponible',
    'error-message': 'Désolé, le contenu de cette page n\'est pas encore disponible dans la langue sélectionnée.',
    'return-home': 'Retourner à la page d\'accueil',
    'footer-description': 'Rendre Linux plus facile, un outil à la fois.',
    'footer-support': 'Support',
    'footer-rights': 'Tous droits réservés.'
  },
  'de': {
    'back-to-home': 'Zurück zur Startseite',
    'loading-content': 'Inhalt wird geladen...',
    'error-title': 'Inhalt nicht verfügbar',
    'error-message': 'Entschuldigung, der Inhalt dieser Seite ist in der ausgewählten Sprache noch nicht verfügbar.',
    'return-home': 'Zur Startseite zurückkehren',
    'footer-description': 'Linux einfacher machen, ein Tool nach dem anderen.',
    'footer-support': 'Support',
    'footer-rights': 'Alle Rechte vorbehalten.'
  },
  'zh': {
    'back-to-home': '返回首页',
    'loading-content': '正在加载内容...',
    'error-title': '内容不可用',
    'error-message': '抱歉，此页面的内容在所选语言中尚不可用。',
    'return-home': '返回首页',
    'footer-description': '让Linux更简单，一次一个工具。',
    'footer-support': '支持',
    'footer-rights': '版权所有。'
  },
  'ja': {
    'back-to-home': 'ホームに戻る',
    'loading-content': 'コンテンツを読み込み中...',
    'error-title': 'コンテンツが利用できません',
    'error-message': '申し訳ございませんが、このページのコンテンツは選択した言語ではまだ利用できません。',
    'return-home': 'ホームページに戻る',
    'footer-description': 'Linuxをより簡単に、一度に一つのツールで。',
    'footer-support': 'サポート',
    'footer-rights': '全著作権所有。'
  },
  'ru': {
    'back-to-home': 'Вернуться на главную',
    'loading-content': 'Загрузка контента...',
    'error-title': 'Контент недоступен',
    'error-message': 'Извините, контент этой страницы пока недоступен на выбранном языке.',
    'return-home': 'Вернуться на главную страницу',
    'footer-description': 'Делаем Linux проще, по одному инструменту за раз.',
    'footer-support': 'Поддержка',
    'footer-rights': 'Все права защищены.'
  }
};

// Export for use in other scripts
window.ContentLoader = ContentLoader;
window.additionalTranslations = additionalTranslations;
