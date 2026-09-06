const INSTALL_COMMAND = "curl -fsSL https://linux.toys/install.sh | bash";

const translations = {
  en: {
    pageTitle: "LinuxToys — Software made simpler on Linux",
    pageDescription: "LinuxToys makes it easier to discover, install, and manage software across more than 40 Linux distributions.",
    brandTagline: "Your Linux toolbox",
    navFeatures: "Documentation",
    navCompatibility: "Developer portal",
    navInstall: "About",
    heroEyebrow: "Your Linux toolbox",
    heroTitle: "Don't fight your system any longer.",
    heroLead: "LinuxToys brings useful software, system maintenance, and repeatable setup tools together in one approachable app — across dozens of Linux distributions.",
    heroInstall: "Install LinuxToys",
    heroExplore: "Explore features",
    statDistros: "Linux distributions",
    statAppsValue: "300+",
    statApps: "apps and features",
    statSetupValue: "Reproducible",
    statSetup: "system setups with manifests",
    simpleLink: "Explore the documentation",
    heroImageAlt: "LinuxToys application window",
    imagePlaceholderTitle: "Screenshot",
    imagePlaceholderText: "A real app screenshot",
    installEyebrow: "One-line install",
    installTitle: "The last command you'll ever need.",
    installText: "Paste this into a terminal to install LinuxToys; it stays the same across all supported distributions.",
    terminalLabel: "Terminal",
    copyButton: "Copy",
    copiedButton: "Copied",
    copiedStatus: "Installation command copied.",
    copyFailed: "Could not copy automatically. Select the command and copy it manually.",
    featuresEyebrow: "Why use LinuxToys",
    featuresTitle: "Useful when Linux is easy. Even more useful when it isn't.",
    featuresLead: "LinuxToys focuses on the parts of desktop Linux that are valuable but can otherwise take time, research, or distro-specific knowledge.",
    simpleTitle: "Works like magic",
    simpleText: "Install software and features that would normally require repositories, package-format decisions, terminal commands, or distro-specific instructions through one consistent interface - and don't waste any more time with installation instructions.",
    discoverTitle: "Discover new software",
    discoverText: "Browse useful applications, gaming tools, utilities, drivers, tweaks, and system features you didn't know you needed.",
    updateTitle: "Maintenance for the long run",
    updateText: "Update your whole system from one place, clean leftover packages and keep your distribution secure, tidy, and current.",
    manifestTitle: "Your setup follows you",
    manifestText: "Create a declarative manifest describing the software and features a machine should have: IT teams for standardized deployments at scale; individual users for distro-hopping or quick recovery.",
    manifestLabel: "my-system manifest",
    manifestLink: "Learn about manifests",
    compatEyebrow: "It's everywhere",
    compatTitle: "One experience across 40+ Linux distributions.",
    compatText: "And the list is still growing: the sky is truly the limit. These are just a few of them.",
    ctaEyebrow: "Ready to try it?",
    ctaTitle: "Make your system work for you, as it should be.",
    ctaText: "Install LinuxToys, explore what is available for your system, and keep the same familiar toolbox if you move to another supported distribution later.",
    ctaButton: "Install LinuxToys",
    footerTagline: "Your Linux toolbox",
    footerInstall: "Install",
    footerCompatibility: "Compatibility"
  },
  "pt-BR": {
    pageTitle: "LinuxToys — Sua caixa de ferramentas no Linux",
    pageDescription: "O LinuxToys facilita descobrir, instalar e gerenciar software em mais de 40 distribuições Linux.",
    brandTagline: "Sua caixa de ferramentas no Linux",
    navFeatures: "Documentação",
    navCompatibility: "Portal do desenvolvedor",
    navInstall: "Sobre",
    heroEyebrow: "Sua caixa de ferramentas no Linux",
    heroTitle: "Não brigue mais com seu sistema.",
    heroLead: "O LinuxToys reúne software útil, manutenção do sistema e ferramentas para repetir sua configuração em um único aplicativo fácil de usar — em dezenas de distribuições Linux.",
    heroInstall: "Instalar o LinuxToys",
    heroExplore: "Conhecer os recursos",
    statDistros: "distribuições Linux",
    statAppsValue: "300+",
    statApps: "apps e recursos",
    statSetupValue: "Reproduzível",
    statSetup: "configuração do sistema com manifestos",
    simpleLink: "Explore a documentação",
    heroImageAlt: "Janela do aplicativo LinuxToys",
    imagePlaceholderTitle: "Imagem",
    imagePlaceholderText: "Imagem real do app",
    installEyebrow: "Instalação em uma linha",
    installTitle: "O último comando que você vai precisar.",
    installText: "Cole este comando em um terminal para instalar o LinuxToys; é o mesmo em todas as distribuições suportadas.",
    terminalLabel: "Terminal",
    copyButton: "Copiar",
    copiedButton: "Copiado",
    copiedStatus: "Comando de instalação copiado.",
    copyFailed: "Não foi possível copiar automaticamente. Selecione o comando e copie manualmente.",
    featuresEyebrow: "Por que usar o LinuxToys",
    featuresTitle: "Útil quando o Linux é fácil. Ainda mais útil quando não é.",
    featuresLead: "O LinuxToys cuida das partes valiosas do Linux desktop que normalmente exigiriam tempo, pesquisa ou conhecimento específico de cada distribuição.",
    simpleTitle: "Parece mágica",
    simpleText: "Instale programas e recursos que normalmente exigiriam repositórios, escolha de formatos de pacote, comandos no terminal ou instruções específicas da distribuição por meio de uma interface consistente - e não perca mais tempo com instruções de instalação.",
    discoverTitle: "Descubra programas novos",
    discoverText: "Explore aplicativos, ferramentas para jogos, utilitários, drivers, ajustes e recursos do sistema que você nem sabia que precisava.",
    updateTitle: "Manutenção pensada a longo prazo",
    updateText: "Atualize tudo no seu sistema em um só lugar, limpe pacotes que ficaram para trás e mantenha seu sistema seguro, organizado e em dia com os recursos mais recentes.",
    manifestTitle: "Sua configuração segue você",
    manifestText: "Crie um manifesto declarativo descrevendo os programas e recursos que a máquina deve ter: Equipes de TI para implantações padronizadas em escala; usuários comuns para testar distribuições ou restaurações rápidas.",
    manifestLabel: "manifesto meu-sistema",
    manifestLink: "Saiba mais sobre manifestos",
    compatEyebrow: "Em toda parte",
    compatTitle: "A mesma experiência em mais de 40 distribuições Linux.",
    compatText: "E a lista continua crescendo: o céu é realmente o limite. Estas são só algumas delas.",
    ctaEyebrow: "Pronto para experimentar?",
    ctaTitle: "Faça o seu sistema trabalhar para você, como deve ser.",
    ctaText: "Instale o LinuxToys, explore o que está disponível para o seu sistema e continue com a mesma caixa de ferramentas familiar se mudar para outra distribuição suportada depois.",
    ctaButton: "Instalar o LinuxToys",
    footerTagline: "Sua caixa de ferramentas no Linux",
    footerInstall: "Instalar",
    footerCompatibility: "Compatibilidade"
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
  { name: "OpenSUSE", file: "suse.webp" },
  { name: "Tails", file: "tails.webp" },
  { name: "TUXEDO", file: "tuxedo.webp" },
  { name: "Ubuntu", file: "ubuntu.webp" },
  { name: "Ultramarine", file: "ultramarine.webp" },
  { name: "Xubuntu", file: "xubuntu.webp" },
  { name: "Zorin OS", file: "zorin.webp" },
];

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
  const savedLanguage =
    localStorage.getItem("linuxtoys-lang") ||
    localStorage.getItem("linuxtoys-dev-lang");

  if (savedLanguage === "en" || savedLanguage === "pt-BR") {
    return savedLanguage;
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return browserLanguages.some((language) =>
    language?.toLowerCase().startsWith("pt")
  ) ? "pt-BR" : "en";
}

function applyLanguage(lang, { persist = true } = {}) {
  currentLanguage = lang === "pt-BR" ? "pt-BR" : "en";
  const appShot = document.querySelector(".app-shot");

  if (appShot) {
    appShot.src = lang === "pt-BR"
      ? "assets/app-window-br.webp"
      : "assets/app-window.webp";
  }

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
    img.loading = "lazy";
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
let randomizedDistroOrder = null;

function getDistroSlotCount() {
  if (window.innerWidth <= 430) return 6;   // 2 × 3
  if (window.innerWidth <= 680) return 9;   // 3 × 3
  if (window.innerWidth <= 980) return 12;  // 4 × 3
  return 18;                                // 6 × 3
}

function renderDistroGrid() {
  if (!distroGrid || !DISTRO_LOGOS.length) return;

  // Pick one random order per page load and keep it stable for the visit.
  if (!randomizedDistroOrder) {
    randomizedDistroOrder = shuffleDistros(DISTRO_LOGOS);
  }

  distroGrid.replaceChildren();

  const slotCount = Math.min(getDistroSlotCount(), randomizedDistroOrder.length);
  const visibleDistros = randomizedDistroOrder.slice(0, slotCount);

  visibleDistros.forEach((distro) => {
    distroGrid.appendChild(createDistroCard(distro, DISTRO_LOGOS.indexOf(distro)));
  });
}

if (distroGrid) {
  window.addEventListener("resize", () => {
    window.clearTimeout(distroResizeTimer);
    distroResizeTimer = window.setTimeout(() => {
      const expected = Math.min(getDistroSlotCount(), randomizedDistroOrder?.length || DISTRO_LOGOS.length);
      const current = distroGrid.querySelectorAll(".distro-card").length;

      if (current !== expected) {
        renderDistroGrid();
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

copyButton?.addEventListener("click", copyInstallCommand);

if (appShot) {
  appShot.addEventListener("error", () => {
    appShot.classList.add("is-missing");
    appShot.style.display = "none";
  });
}

renderDistroGrid();
applyLanguage(getInitialLanguage(), { persist: false });
