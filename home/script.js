const INSTALL_COMMAND = "curl -fsSL https://linux.toys/install.sh | bash";

const translations = {
  en: {
    pageTitle: "LinuxToys — For everything Linux.",
    pageDescription: "LinuxToys brings all things software, tools and system maintenance in one solution — across dozens of Linux distributions.",
    brandTagline: "For everything Linux.",
    navFeatures: "Documentation",
    navCompatibility: "Developer portal",
    navInstall: "About",
    navDonate: "Donate",
    heroEyebrow: "For everything Linux.",
    heroTitle: "Everything you need. Nothing in the way.",
    heroLead: "LinuxToys brings all things software, tools and system maintenance in one solution — across dozens of Linux distributions.",
    heroInstall: "Install LinuxToys",
    heroExplore: "Explore features",
    statDistros: "Linux distributions",
    statAppsValue: "Thousands",
    statApps: "of apps and features",
    statSetupValue: "Seamless",
    statSetup: "installations",
    simpleLink: "Explore the documentation",
    heroImageAlt: "LinuxToys application window",
    imagePlaceholderTitle: "Screenshot",
    imagePlaceholderText: "A real app screenshot",
    installEyebrow: "One-line install",
    installTitle: "The last command you will ever need.",
    installText: "And your Linux experience will never be the same.",
    terminalLabel: "Terminal",
    copyButton: "Copy",
    copiedButton: "Copied",
    copiedStatus: "Installation command copied.",
    copyFailed: "Could not copy automatically. Select the command and copy it manually.",
    featuresEyebrow: "Why use LinuxToys",
    featuresTitle: "LinuxToys takes care of everything for you.",
    featuresLead: "LinuxToys takes care of everything for you.",
    simpleTitle: "Works like magic",
    simpleText: "Install all kinds of software and features - even the ones that would normally require repositories, package-format decisions, terminal commands, or distro-specific instructions - through one consistent interface and don't waste any more time with installation instructions.",
    discoverTitle: "Discover new software",
    discoverText: "Find applications, gaming tools, utilities, drivers, tweaks, and system features you’ve been looking for — and some you never knew you needed — thanks to our ever-evolving relevance algorithm.",
    updateTitle: "Maintenance for the long run",
    updateText: "Update your whole system from one place, clean leftover packages and keep your distribution secure, tidy, and current.",
    manifestTitle: "Your setup follows you",
    manifestText: "Create a declarative manifest with the software and features you need - and no need to code: it's just a click away!",
    manifestLabel: "my-system manifest",
    manifestLink: "Learn about manifests",
    compatEyebrow: "It's everywhere",
    compatTitle: "Simplifying 40+ Linux distributions.",
    compatText: "And the list is still growing: these are just a few of them. For applicable distributions, LinuxToys is also compatible with the Windows Subsystem for Linux (WSL) and Distrobox containers.",
    ctaEyebrow: "Ready to try it?",
    ctaTitle: "Make your system work for you, as it should be.",
    ctaText: "Install LinuxToys, explore what is available for your system, and keep the same familiar toolbox if you move to another supported distribution later.",
    ctaButton: "Install LinuxToys",
    footerTagline: "For everything Linux.",
    footerInstall: "Install",
    footerCompatibility: "Compatibility",
    footerContact: "Contact"
  },
  "pt-BR": {
    pageTitle: "LinuxToys — Pra tudo no Linux.",
    pageDescription: "O LinuxToys reúne todo software, ferramentas e manutenção do sistema em uma solução — para dezenas de distribuições Linux.",
    brandTagline: "Pra tudo no Linux.",
    navFeatures: "Documentação",
    navCompatibility: "Portal do desenvolvedor",
    navInstall: "Sobre",
    navDonate: "Doar",
    heroEyebrow: "Pra tudo no Linux.",
    heroTitle: "Tudo que precisa. Nada no caminho.",
    heroLead: "O LinuxToys reúne todo software, ferramentas e manutenção do sistema em uma solução — para dezenas de distribuições Linux.",
    heroInstall: "Instalar o LinuxToys",
    heroExplore: "Conhecer os recursos",
    statDistros: "distribuições Linux",
    statAppsValue: "Milhares",
    statApps: "de apps e recursos",
    statSetupValue: "Instalações",
    statSetup: "sem complicação",
    simpleLink: "Explore a documentação",
    heroImageAlt: "Janela do aplicativo LinuxToys",
    imagePlaceholderTitle: "Imagem",
    imagePlaceholderText: "Imagem real do app",
    installEyebrow: "Instalação em uma linha",
    installTitle: "O último comando que você vai precisar.",
    installText: "E sua experiência no Linux nunca mais será a mesma.",
    terminalLabel: "Terminal",
    copyButton: "Copiar",
    copiedButton: "Copiado",
    copiedStatus: "Comando de instalação copiado.",
    copyFailed: "Não foi possível copiar automaticamente. Selecione o comando e copie manualmente.",
    featuresEyebrow: "Por que usar o LinuxToys",
    featuresTitle: "O LinuxToys cuida de tudo pra você.",
    featuresLead: "O LinuxToys cuida de tudo pra você.",
    simpleTitle: "Parece mágica",
    simpleText: "Instale todo tipo de programas e recursos - até os que normalmente exigiriam repositórios, escolha de formatos de pacote, comandos no terminal ou instruções específicas da distribuição - por meio de uma interface consistente e não perca mais tempo com instruções de instalação.",
    discoverTitle: "Descubra programas novos",
    discoverText: "Encontre aplicativos, ferramentas para jogos, utilitários, drivers, ajustes e recursos do sistema que você estava procurando - e outros que nem sabia que precisava - graças ao nosso algoritmo de relevância em constante evolução.",
    updateTitle: "Manutenção pensada a longo prazo",
    updateText: "Atualize tudo no seu sistema em um só lugar, limpe pacotes que ficaram para trás e mantenha seu sistema seguro, organizado e em dia com os recursos mais recentes.",
    manifestTitle: "Sua configuração segue você",
    manifestText: "Crie um manifesto declarativo com os programas e recursos que você precisa - e sem precisar de código: é só clicar um botão!",
    manifestLabel: "manifesto meu-sistema",
    manifestLink: "Saiba mais sobre manifestos",
    compatEyebrow: "Em toda parte",
    compatTitle: "Descomplicando mais de 40 distribuições Linux.",
    compatText: "E a lista continua crescendo: estas são só algumas delas. Para as distribuições aplicáveis, o LinuxToys também é compatível com o Subsistema do Windows para Linux (WSL) e containers Distrobox.",
    ctaEyebrow: "Pronto para experimentar?",
    ctaTitle: "Faça o seu sistema trabalhar pra você, como deve ser.",
    ctaText: "Instale o LinuxToys, explore o que está disponível para o seu sistema e continue com a mesma caixa de ferramentas familiar se mudar para outra distribuição suportada depois.",
    ctaButton: "Instalar o LinuxToys",
    footerTagline: "Pra tudo no Linux.",
    footerInstall: "Instalar",
    footerCompatibility: "Compatibilidade",
    footerContact: "Contato"
  }
};

/*
  Replace this placeholder list with the actual supported distributions.

  Put logo files in:
      assets/distros/

  Then use entries like:
      { name: "Fedora", file: "fedora.svg" },
      { name: "Ubuntu", file: "ubuntu.svg" },

  SVG is ideal, but PNG/WebP work too.
*/
const DISTRO_LOGOS = [
  { name: "AlmaLinux", file: "alma.webp" },
  { name: "AntiX", file: "antix.webp" },
  { name: "Arch Linux", file: "arch.webp" },
  { name: "Artix", file: "artix.webp" },
  { name: "Aurora", file: "aurora.webp" },
  { name: "Bazzite", file: "bazzite.webp" },
  { name: "BigLinux", file: "biglinux.webp" },
  { name: "BlackArch", file: "blackarch.webp" },
  { name: "Bluefin", file: "bluefin.webp" },
  { name: "CachyOS", file: "cachy.webp" },
  { name: "CentOS", file: "centos.webp" },
  { name: "Debian", file: "debian.webp" },
  { name: "deepin", file: "deepin.webp" },
  { name: "Devuan", file: "devuan.webp" },
  { name: "elementary", file: "elementary.webp" },
  { name: "Endeavour", file: "endeavour.webp" },
  { name: "Fedora", file: "fedora.webp" },
  { name: "Garuda", file: "garuda.webp" },
  { name: "Kali Linux", file: "kali.webp" },
  { name: "Kubuntu", file: "kubuntu.webp" },
  { name: "Lubuntu", file: "lubuntu.webp" },
  { name: "Manjaro", file: "manjaro.webp" },
  { name: "Linux Mint", file: "mint.webp" },
  { name: "LMDE", file: "lmde.webp" },
  { name: "MX Linux", file: "mx.webp" },
  { name: "KDE Neon", file: "neon.webp" },
  { name: "Nobara", file: "nobara.webp" },
  { name: "Omarchy", file: "omarchy.webp" },
  { name: "Oracle Linux", file: "oracle.webp" },
  { name: "Parrot", file: "parrot.webp" },
  { name: "Peppermint", file: "peppermint.webp" },
  { name: "PikaOS", file: "pikaos.webp" },
  { name: "Pop_OS!", file: "pop.webp" },
  { name: "Red Hat Enterprise Linux", file: "redhat.webp" },
  { name: "Rocky", file: "rocky.webp" },
  { name: "Solus", file: "solus.webp" },
  { name: "SteamOS", file: "steamos.webp" },
  { name: "OpenSUSE", file: "suse.webp" },
  { name: "Tails", file: "tails.webp" },
  { name: "TUXEDO", file: "tuxedo.webp" },
  { name: "Ubuntu", file: "ubuntu.webp" },
  { name: "Ultramarine", file: "ultramarine.webp" },
  { name: "Xubuntu", file: "xubuntu.webp" },
  { name: "Zorin OS", file: "zorin.webp" },
];

const distroLogoPreloads = [];

function preloadDistroLogos() {
  DISTRO_LOGOS.forEach(({ file }) => {
    if (!file) return;

    const img = new Image();
    img.src = `assets/distros/${file}`;
    distroLogoPreloads.push(img);
  });
}

preloadDistroLogos();

const languageButtons = document.querySelectorAll(".lang-button");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatableAltElements = document.querySelectorAll("[data-i18n-alt]");
const descriptionMeta = document.querySelector('meta[name="description"]');
const distroGrid = document.getElementById("distro-grid");
const copyButton = document.getElementById("copy-install");
const copyStatus = document.getElementById("copy-status");
const appShot = document.querySelector(".app-shot");

let currentLanguage = "en";

function getInitialLanguage() {
  // The localized HTML page is authoritative. Browser-locale routing is
  // handled before this script runs, and explicit language changes navigate
  // to the corresponding localized page. Do not re-detect locale here.
  return document.documentElement.lang === "pt-BR" ? "pt-BR" : "en";
}

function getEffectiveTheme() {
  const explicitTheme = document.documentElement.dataset.theme;
  if (explicitTheme === "light" || explicitTheme === "dark") return explicitTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeScreenshots() {
  const isLight = getEffectiveTheme() === "light";
  const isPortuguese = document.documentElement.lang === "pt-BR";

  const appShot = document.querySelector(".app-shot");
  if (appShot) {
    const baseName = isPortuguese ? "app-window-br" : "app-window";
    appShot.src = `assets/${baseName}${isLight ? "-light" : ""}.webp`;
  }

  const manifestShot = document.querySelector(".manifest-shot");
  if (manifestShot) {
    const baseNameManifest = isPortuguese ? "manifest-br" : "manifest";
    manifestShot.src = `assets/${baseNameManifest}${isLight ? "-light" : ""}.webp`;
  }
}

const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
themeMedia.addEventListener?.("change", () => {
  if (!document.documentElement.dataset.theme) updateThemeScreenshots();
});

new MutationObserver((mutations) => {
  if (mutations.some((mutation) => mutation.attributeName === "data-theme")) {
    updateThemeScreenshots();
  }
}).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

function applyLanguage(lang, { persist = true } = {}) {
  currentLanguage = lang === "pt-BR" ? "pt-BR" : "en";
  updateThemeScreenshots();

  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle;
  if (descriptionMeta) descriptionMeta.content = dictionary.pageDescription;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  translatableAltElements.forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.alt = dictionary[key];
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (persist) {
    localStorage.setItem("linuxtoys-lang", currentLanguage);
    localStorage.setItem("linuxtoys-dev-lang", currentLanguage);
  }
}

function shuffleDistros(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function createDistroCard({ name, file }, index) {
  const card = document.createElement("div");
  card.className = "distro-card";
  card.dataset.distroName = name;

  const media = document.createElement("div");
  media.className = "distro-card-media";

  if (file) {
    const img = document.createElement("img");
    img.src = `assets/distros/${file}`;
    img.alt = `${name} logo`;
    img.loading = "eager";
    img.decoding = "async";

    img.addEventListener("error", () => {
      const placeholder = document.createElement("div");
      placeholder.className = "distro-placeholder-logo";
      placeholder.textContent = String(index + 1).padStart(2, "0");
      img.replaceWith(placeholder);
    });

    media.appendChild(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "distro-placeholder-logo";
    placeholder.textContent = String(index + 1).padStart(2, "0");
    media.appendChild(placeholder);
  }

  const label = document.createElement("span");
  label.textContent = name;

  card.append(media, label);
  return card;
}

let distroResizeTimer = null;
let distroRotationTimer = null;
let visibleDistros = [];
let recentlyRotatedDistroSlots = [];

const DISTRO_ROTATION_INTERVAL = 960;
const DISTRO_TRANSITION_DURATION = 320;

function getDistroSlotCount() {
  if (window.innerWidth <= 430) return 6;   // 2 × 3
  if (window.innerWidth <= 680) return 9;   // 3 × 3
  if (window.innerWidth <= 980) return 12;  // 4 × 3
  return 18;                                // 6 × 3
}

function getAvailableDistros(excluded = visibleDistros) {
  const visibleNames = new Set(excluded.map(({ name }) => name));
  return DISTRO_LOGOS.filter(({ name }) => !visibleNames.has(name));
}

function renderDistroGrid() {
  if (!distroGrid || !DISTRO_LOGOS.length) return;

  const slotCount = Math.min(getDistroSlotCount(), DISTRO_LOGOS.length);

  // Keep distros already on screen when resizing, then fill any new slots
  // with random entries that are not already visible.
  visibleDistros = visibleDistros.slice(0, slotCount);

  if (visibleDistros.length < slotCount) {
    const needed = slotCount - visibleDistros.length;
    const additions = shuffleDistros(getAvailableDistros()).slice(0, needed);
    visibleDistros.push(...additions);
  }

  // Initial render starts with a random selection.
  if (!visibleDistros.length) {
    visibleDistros = shuffleDistros(DISTRO_LOGOS).slice(0, slotCount);
  }

  distroGrid.replaceChildren();

  visibleDistros.forEach((distro) => {
    distroGrid.appendChild(createDistroCard(distro, DISTRO_LOGOS.indexOf(distro)));
  });
}

function rotateRandomDistro() {
  if (!distroGrid || !visibleDistros.length) return;

  const cards = [...distroGrid.querySelectorAll('.distro-card')];
  if (!cards.length) return;

  const available = getAvailableDistros();
  if (!available.length) return;

  // Avoid recently changed positions so the random rotation feels more
  // evenly distributed. Keep at least one slot eligible on small layouts.
  const slotHistoryLimit = Math.min(7, Math.max(0, cards.length - 2));
  recentlyRotatedDistroSlots = recentlyRotatedDistroSlots
    .filter((index) => index < cards.length)
    .slice(-slotHistoryLimit);

  const recentSlots = new Set(recentlyRotatedDistroSlots);
  const slotChoices = cards
    .map((_, index) => index)
    .filter((index) => !recentSlots.has(index));

  const slotIndex = slotChoices[Math.floor(Math.random() * slotChoices.length)];
  const replacement = available[Math.floor(Math.random() * available.length)];
  const oldCard = cards[slotIndex];

  oldCard.classList.add('is-leaving');

  window.setTimeout(() => {
    // A resize can rebuild the grid while the outgoing animation is running.
    if (!oldCard.isConnected) return;

    visibleDistros[slotIndex] = replacement;
    recentlyRotatedDistroSlots.push(slotIndex);
    recentlyRotatedDistroSlots = recentlyRotatedDistroSlots.slice(-slotHistoryLimit);

    const newCard = createDistroCard(
      replacement,
      DISTRO_LOGOS.indexOf(replacement)
    );
    newCard.classList.add('is-entering');
    oldCard.replaceWith(newCard);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => newCard.classList.remove('is-entering'));
    });
  }, DISTRO_TRANSITION_DURATION);
}

function startDistroRotation() {
  if (!distroGrid || DISTRO_LOGOS.length <= getDistroSlotCount()) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.clearInterval(distroRotationTimer);
  distroRotationTimer = window.setInterval(
    rotateRandomDistro,
    DISTRO_ROTATION_INTERVAL
  );
}

if (distroGrid) {
  window.addEventListener('resize', () => {
    window.clearTimeout(distroResizeTimer);
    distroResizeTimer = window.setTimeout(() => {
      const expected = Math.min(getDistroSlotCount(), DISTRO_LOGOS.length);
      const current = distroGrid.querySelectorAll('.distro-card').length;

      if (current !== expected) {
        renderDistroGrid();
        startDistroRotation();
      }
    }, 180);
  });
}

async function copyInstallCommand() {
  const dictionary = translations[currentLanguage];

  try {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    copyButton.textContent = dictionary.copiedButton;
    copyStatus.textContent = dictionary.copiedStatus;

    window.setTimeout(() => {
      copyButton.textContent = dictionary.copyButton;
      copyStatus.textContent = "";
    }, 1800);
  } catch {
    copyStatus.textContent = dictionary.copyFailed;
  }
}

copyButton?.addEventListener("click", copyInstallCommand);

if (appShot) {
  appShot.addEventListener("error", () => {
    appShot.classList.add("is-missing");
    appShot.style.display = "none";
  });
}

renderDistroGrid();
startDistroRotation();
applyLanguage(getInitialLanguage(), { persist: false });
