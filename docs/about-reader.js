const DOCS_FILES = {
  en: new URL("docs/content/about.en.md", document.baseURI).href,
  "pt-BR": new URL("docs/content/about.br.md", document.baseURI).href
};

const uiTranslations = {
  en: {
    brandPortal: "Your Linux toolbox",
    backHome: "Overview",
    repoLists: "Repository lists",
    coreLibs: "Core libraries",
    onThisPage: "On this page",
    loading: "Loading documentation…",
    noHeadings: "No sections found",
    loadError: "Documentation could not be loaded.",
    loadHint: "Make sure the Markdown file exists at:",
    navInstall: "About",
    navCompatibility: "Developer portal",
    navFeatures: "Documentation",
    copy: "Copy",
    copied: "Copied",
    footerText: "Linux software distribution made easy.",
    footerTagline: "Your Linux toolbox",
    footerContact: "Contact"
  },
  "pt-BR": {
    brandPortal: "Sua caixa de ferramentas no Linux",
    backHome: "Visão geral",
    repoLists: "Listas de repositório",
    coreLibs: "Biblioteca shell",
    onThisPage: "Nesta página",
    loading: "Carregando documentação…",
    noHeadings: "Nenhuma seção encontrada",
    loadError: "Não foi possível carregar a documentação.",
    loadHint: "Verifique se o arquivo Markdown existe em:",
    navInstall: "Sobre",
    navCompatibility: "Portal do desenvolvedor",
    navFeatures: "Documentação",
    copy: "Copiar",
    copied: "Copiado",
    footerText: "Distribua seu software no Linux sem complicação.",
    footerTagline: "Sua caixa de ferramentas no Linux",
    footerContact: "Contato"
  }
};

const languageButtons = document.querySelectorAll(".lang-button");
const uiElements = document.querySelectorAll("[data-ui-i18n]");
const content = document.getElementById("markdown-content");
const status = document.getElementById("docs-status");
const toc = document.getElementById("toc");
const mobileTocToggle = document.getElementById("mobile-toc-toggle");
const mobileTocCurrent = document.getElementById("mobile-toc-current");
const sidebar = document.getElementById("docs-sidebar");
const progressBar = document.getElementById("reading-progress-bar");

let currentLanguage = "en";
let headingObserver = null;

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("linuxtoys-lang");
  if (savedLanguage === "en" || savedLanguage === "pt-BR") return savedLanguage;

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return browserLanguages.some(lang => lang?.toLowerCase().startsWith("pt"))
    ? "pt-BR"
    : "en";
}

function translateInterface(lang) {
  const dictionary = uiTranslations[lang] || uiTranslations.en;

  document.documentElement.lang = lang;
  document.title = lang === "pt-BR"
    ? "Sobre — LinuxToys"
    : "About — LinuxToys";

  uiElements.forEach(element => {
    const key = element.dataset.uiI18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  languageButtons.forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function slugify(text, usedIds) {
  const base = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "section";

  let id = base;
  let suffix = 2;
  while (usedIds.has(id)) id = `${base}-${suffix++}`;
  usedIds.add(id);
  return id;
}

function configureMarked() {
  marked.setOptions({
    gfm: true,
    breaks: false
  });
}

function renderMarkdown(markdown) {
  configureMarked();
  const rendered = marked.parse(markdown);

  // Markdown is treated as repository content, but sanitizing it still prevents
  // accidental or malicious HTML from becoming executable in the portal.
  content.innerHTML = DOMPurify.sanitize(rendered, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel"]
  });

  decorateHeadings();
  decorateLinks();
  decorateTables();
  decorateCodeBlocks();
  buildTableOfContents();

  content.hidden = false;
  status.hidden = true;

  // Let layout settle before resolving a deep link from the URL.
  requestAnimationFrame(() => {
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      target?.scrollIntoView();
    }
    updateReadingProgress();
  });
}

function decorateHeadings() {
  const usedIds = new Set();
  const headings = content.querySelectorAll("h1, h2, h3, h4, h5, h6");

  headings.forEach(heading => {
    const text = heading.textContent.trim();
    const id = slugify(text, usedIds);
    heading.id = id;

    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${id}`;
    anchor.setAttribute("aria-label", `Link to ${text}`);
    anchor.textContent = "#";
    heading.prepend(anchor);
  });
}

function decorateLinks() {
  content.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    } catch (_) {
      // Keep unusual but valid relative Markdown links untouched.
    }
  });
}

function decorateTables() {
  content.querySelectorAll("table").forEach(table => {
    if (table.parentElement?.classList.contains("table-wrap")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrap";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

function decorateCodeBlocks() {
  const dictionary = uiTranslations[currentLanguage] || uiTranslations.en;

  content.querySelectorAll("pre code").forEach(code => {
    hljs.highlightElement(code);

    const button = document.createElement("button");
    button.className = "code-copy";
    button.type = "button";
    button.textContent = dictionary.copy;
    button.setAttribute("aria-label", dictionary.copy);

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = dictionary.copied;
        window.setTimeout(() => { button.textContent = dictionary.copy; }, 1500);
      } catch (_) {
        button.textContent = dictionary.copy;
      }
    });

    code.parentElement.appendChild(button);
  });
}

function buildTableOfContents() {
  if (headingObserver) headingObserver.disconnect();
  toc.replaceChildren();

  // H1 is the document title; the navigator begins at H2. H3/H4 provide useful
  // depth without making long documentation trees overwhelming.
  const headings = [...content.querySelectorAll("h2, h3, h4")];
  const dictionary = uiTranslations[currentLanguage] || uiTranslations.en;

  if (!headings.length) {
    const empty = document.createElement("div");
    empty.className = "toc-empty";
    empty.textContent = dictionary.noHeadings;
    toc.appendChild(empty);
    mobileTocCurrent.textContent = "";
    return;
  }

  headings.forEach(heading => {
    const link = document.createElement("a");
    link.className = `toc-link level-${heading.tagName.slice(1)}`;
    link.href = `#${heading.id}`;
    link.dataset.target = heading.id;
    link.textContent = heading.textContent.replace(/^#/, "").trim();
    link.addEventListener("click", () => closeMobileToc());
    toc.appendChild(link);
  });

  setupHeadingObserver(headings);
}

function setupHeadingObserver(headings) {
  const links = [...toc.querySelectorAll(".toc-link")];

  const setActive = id => {
    links.forEach(link => link.classList.toggle("active", link.dataset.target === id));
    const active = links.find(link => link.dataset.target === id);
    if (active) {
      mobileTocCurrent.textContent = active.textContent;
      if (window.innerWidth > 980) {
        active.scrollIntoView({ block: "nearest" });
      }
    }
  };

  headingObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (visible.length) setActive(visible[0].target.id);
  }, {
    rootMargin: "-120px 0px -68% 0px",
    threshold: [0, 1]
  });

  headings.forEach(heading => headingObserver.observe(heading));
  setActive(headings[0].id);
}

function setLoading() {
  const dictionary = uiTranslations[currentLanguage] || uiTranslations.en;
  content.hidden = true;
  status.hidden = false;
  status.classList.remove("error");
  status.innerHTML = '<div class="docs-spinner" aria-hidden="true"></div>';
  const message = document.createElement("span");
  message.textContent = dictionary.loading;
  status.appendChild(message);
  toc.replaceChildren();
}

function setLoadError(path) {
  const dictionary = uiTranslations[currentLanguage] || uiTranslations.en;
  content.hidden = true;
  status.hidden = false;
  status.classList.add("error");
  status.replaceChildren();

  const title = document.createElement("strong");
  title.textContent = dictionary.loadError;
  const hint = document.createElement("span");
  hint.textContent = dictionary.loadHint;
  const code = document.createElement("code");
  code.textContent = path;

  status.append(title, hint, code);
}

async function loadDocumentation(lang, { preservePosition = false } = {}) {
  currentLanguage = lang === "pt-BR" ? "pt-BR" : "en";
  localStorage.setItem("linuxtoys-lang", currentLanguage);

  translateInterface(currentLanguage);
  setLoading();
  closeMobileToc();

  const relativePath = DOCS_FILES[currentLanguage];
  const url = new URL(relativePath, document.baseURI);
  const previousY = window.scrollY;

  console.log("Loading Markdown from:", url.href);

  let markdown;

  // Fetch phase
  try {
    const response = await fetch(url.href, {
      cache: "no-cache"
    });

    console.log(
      "Markdown response:",
      response.status,
      response.statusText,
      response.url
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${response.url}: HTTP ${response.status} ${response.statusText}`
      );
    }

    markdown = await response.text();
  } catch (error) {
    console.error("Markdown fetch failed:", error);
    setLoadError(url.href);
    return;
  }

  // Rendering phase
  try {
    renderMarkdown(markdown);

    if (preservePosition && !location.hash) {
      window.scrollTo({ top: previousY });
    }
  } catch (error) {
    console.error("Markdown rendering failed:", error);

    content.hidden = true;
    status.hidden = false;
    status.classList.add("error");
    status.replaceChildren();

    const title = document.createElement("strong");
    title.textContent = "Markdown was loaded, but could not be rendered.";

    const details = document.createElement("code");
    details.textContent = error.message;

    status.append(title, details);
  }
}

function closeMobileToc() {
  sidebar.classList.remove("open");
  mobileTocToggle.setAttribute("aria-expanded", "false");
}

function updateReadingProgress() {
  if (content.hidden) {
    progressBar.style.width = "0%";
    return;
  }

  const rect = content.getBoundingClientRect();
  const contentTop = window.scrollY + rect.top;
  const maxScroll = Math.max(1, content.offsetHeight - window.innerHeight * 0.45);
  const travelled = Math.min(maxScroll, Math.max(0, window.scrollY - contentTop + 130));
  progressBar.style.width = `${(travelled / maxScroll) * 100}%`;
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (lang !== currentLanguage) loadDocumentation(lang);
  });
});

mobileTocToggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  mobileTocToggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", event => {
  if (window.innerWidth > 980 || !sidebar.classList.contains("open")) return;
  if (!sidebar.contains(event.target) && !mobileTocToggle.contains(event.target)) closeMobileToc();
});

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMobileToc();
  updateReadingProgress();
});

loadDocumentation(getInitialLanguage());
