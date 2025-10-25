# Kennisbank

## Basis LinuxToys Functie Richtlijnen

- Functies worden alleen beschikbaar gemaakt in systemen die er compatibel mee zijn *en* relevant voor zijn.
- Alle functies en bronnen binnen de applicatie moeten altijd het **KISS** (*Keep It Simple, Stupid*) principe volgen - ze moeten gemakkelijk te begrijpen en te gebruiken zijn door hun labels en korte beschrijvingen.
- Functies moeten gemaakt worden op een manier dat ze **optimaal** voor de gebruiker werken.
- Gebruikersinteractie is beperkt tot `zenity` prompts om onvoorspelbaarheid te vermijden en betrouwbaarheid te verzekeren.
- Flatpaks moeten waar mogelijk gebruikt worden voor hun **consistentie** door flatpak runtimes en **veiligheid** door granulaire permission controle. 

## Geïnstalleerd als native pakketten

Van standaard systeem repositories, of repositories toegevoegd door LinuxToys, en geen andere wijzigingen worden gemaakt.

### Standaard repositories
- Java OpenJDK (alle versies)
- Maven
- NeoVim
- Broadcom WiFi driver (beschikbaar voor Fedora/Arch alleen)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch; anderen hebben het van Flathub)
- F3 - Fight Flash Fraud (opent ook zijn documentatie in je browser na installatie)
- Wireguard
- VLC
- Gnome Tweaks
- OBS Studio (inclusief [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture) plugin en `v4l2loopback` voor Virtual Camera compatibiliteit), als de machine een Intel GPU (discreet of geïntegreerd) heeft en geen Arch-gebaseerde systemen uitvoert. Anders wordt het geïnstalleerd als een flatpak op gebruikersniveau van Flathub (geen Intel GPU) of van de [AUR](https://aur.archlinux.org/packages/obs-studio-browser) vanwege het ontbreken van een browserbron in het standaard Arch Linux-pakket.

### Toegevoegde repositories
- Visual Studio Code: van [Microsoft's officiële repository.](https://packages.microsoft.com)
- .NET SDK: van [Microsoft's officiële repository](https://packages.microsoft.com), alleen in OpenSUSE en Debian. Andere systemen hebben het geïnstalleerd van standaard repositories.
- Sublime Text: van [zijn officiële repositories.](https://download.sublimetext.com)
- Unity Hub: van [Unity's officiële repository.](https://hub.unity3d.com/linux/repos) Alleen beschikbaar in systemen officieel ondersteund door Unity.
- Nvidia Drivers: van [Nvidia's officiële repository](https://developer.download.nvidia.com/compute/cuda/repos) in Debian of *RPMFusion* in Fedora. Andere systemen hebben het geïnstalleerd van standaard repositories.
- btrfs-Assistant: van [Chaotic-AUR](https://aur.chaotic.cx) op Arch. Andere systemen hebben het geïnstalleerd van standaard repositories. Bevat `snapper` van standaard repositories op alle systemen.
- Preload: van [Chaotic-AUR](https://aur.chaotic.cx) op Arch, of [elxreno/preload COPR repository](https://copr.fedorainfracloud.org/coprs/elxreno/preload) op Fedora. Andere systemen hebben het geïnstalleerd van standaard repositories.
- Touchegg: van zijn officiële PPA repository, of [GitHub repository](https://github.com/JoseExposito/touchegg) voor Ubuntu en Debian respectievelijk. Andere systemen hebben het geïnstalleerd van standaard repositories. X11-only.
- Gamescope: van *Multilib* op Arch, of *RPMFusion* op Fedora. Andere systemen hebben het geïnstalleerd van standaard repositories.
- Steam: van *Multilib* op Arch, of *RPMFusion* op Fedora. Andere systemen hebben het geïnstalleerd van Flathub.
- Topgrade: van *Pip*.
- Webmin: van zijn [officiële GitHub repository](https://github.com/webmin/webmin).
- Arch-Update: van [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP: van [Cloudflare's officiële repository](https://pkg.cloudflareclient.com/).
- Solaar: van zijn officiële PPA repository op Ubuntu. Andere systemen hebben het geïnstalleerd van standaard repositories.
- IVPN: van zijn [officiële repositories](https://repo.ivpn.net/stable).
- Mullvad VPN: van zijn [officiële repositories](https://repository.mullvad.net) of [Chaotic-AUR](https://aur.chaotic.cx) op Arch.
- NordVPN: van zijn [officiële repository](https://downloads.nordcdn.com/apps) of [Chaotic-AUR](https://aur.chaotic.cx) op Arch.
- Input Remapper: van [Chaotic-AUR](https://aur.chaotic.cx). Andere systemen hebben het geïnstalleerd van standaard repositories.

### Anderen
- Heroic Games Launcher: van zijn [officiële GitHub repository](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) voor Fedora/Arch. Andere systemen hebben het geïnstalleerd van Flathub.
- LSFG-VK: van zijn [officiële GitHub repository](https://github.com/PancakeTAS/lsfg-vk). Bevat flatpak runtimes. Vereist Lossless Scaling voor Windows.
- Figma: geïnstalleerd door de AppImage installer van [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN: geïnstalleerd door zijn officiële AppImage-gebaseerde installer.
- Windscribe VPN: van zijn [officiële repositories](https://windscribe.com/install/desktop).

## Geïnstalleerd als flatpaks

Van flathub, of repositories toegevoegd door LinuxToys, en geen andere wijzigingen worden gemaakt. Systeem-niveau flatpaks worden alleen gebruikt wanneer strikt noodzakelijk.

### Gebruiker-niveau
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (bevat Mangohud, native geïnstalleerd pakket)
- Mangojuice (bevat Mangohud, native geïnstalleerd pakket)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (vereist app geïnstalleerd in het VR apparaat - volg instructies bij eerste start)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (patches optioneel bestanden in `$HOME/.config` en `$HOME/.local` met [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
- Inkscape
- Kdenlive
- KiCAD
- Krita
- LibreOffice
- Teams for Linux
- Obsidian
- OnlyOffice
- Pinta
- Slack
- Zen Browser
- Cockpit Client
- Bottles
- Distroshelf (bevat `podman` en `distrobox` native geïnstalleerde pakketten)
- Flatseal
- Handbrake
- Mission Center
- QPWGraph
- Warehouse
- StreamController
- LibreWolf
- Mullvad Browser
- Proton VPN
- Surfshark
- Ungoogled Chromium
- Gear Lever
- Cryptomator
- SiriKali
- LogSEQ
- Endless Key
- GeoGebra
- Kolibri
- Stellarium
- Kalzium
- GCompris
- Extension Manager
- Termux
- CPU-X
- PeaZip
- Telegram
- Signal
- ZapZap
- S3Drive
- Moonlight
- Pika Backup
- Brave
- Prism Launcher

#### Toegevoegde repositories

- GeForce NOW: van zijn officiële repository geleverd door *Nvidia*

### Systeem-niveau

- Bazaar
- EasyEffects
- LACT
- Piper (bevat `ratbagd` voor Debian/Ubuntu of `libratbag` voor anderen, native geïnstalleerde pakketten)
- Hardware Acceleratie voor Flatpaks (ffmpeg-full voor de momenteel ondersteunde flatpak runtimes)
- OptimusUI (bevat `nvidia-prime`, vereist voor werking)

## Aangepaste Procedures

Vereisen een aangepaste installatieprocedure of specifieke tweaks om ze optimaal te laten werken, die geïmplementeerd zijn door LinuxToys. Bieden meestal ook verwijdering als al geïnstalleerd, tenzij dat niet nodig is (als het verwijderen van de hoofdflatpak of pakket de andere wijzigingen ongedaan maakt) of verwijderingsinstructies worden hier gegeven.

### Docker

Installeert de officiële Docker repositories (behalve voor Arch Linux en OpenSUSE, die ze niet nodig hebben) en alle benodigde pakketten daarvan door je systeem's pakketbeheerder, voegt dan je gebruiker toe aan de `docker` gebruikersgroep.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch:`docker docker-compose`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
- OpenSUSE:`docker docker-compose`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

### Portainer CE

Installeert een Portainer CE container op Docker volgens instructies van zijn documentatie. Het draait voortdurend op de achtergrond omdat zijn doel is om een Docker dashboard te zijn van een browser UI en gebruikt verwaarloosbare bronnen van de machine. Vereist Docker goed ingesteld met rootless gebruik door LinuxToys zelf of handmatig.

**Installatieprocedure:**
```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

Zowel **Godot** als **GodotSharp** worden geïnstalleerd door een aangepaste procedure, omdat Godot geen standaardpakketten biedt. *GodotSharp* bevat de installatie van **.NET SDK** zoals ook beschreven in deze documentatie, vereist voor zijn functies.

- Geïnstalleerde bestanden locatie: `$HOME/.local/godot`
- App menu snelkoppeling locatie: `$HOME/.local/share/applications`

### Jetbrains Toolbox

Download de laatste tarballed release van de officiële website en installeert het door een aangepaste procedure, omdat JetBrains alleen AppImages biedt anders, die notoir onbetrouwbaar zijn.

- Geïnstalleerde bestanden locatie: `$HOME/.local/jetbrains-toolbox`
- App menu snelkoppeling locatie: `$HOME/.local/share/applications`

### Mise

Installeert met het officieel geleverde installatiescript, volgt dan zijn documentatie om auto-aanvullingen in te stellen, een zeer gewenste functie ervan, voor `bash`, `zsh` en `fish` shells; en toont zijn documentatie wanneer voltooid in je browser. Het kan niet gebruikt worden met `zsh` shells op onveranderlijke (`rpm-ostree`-gebaseerde systemen) vanwege onveranderllijkheidsbeperkingen. Verwijdering moet hun documentatie volgen en kan niet gedaan worden door LinuxToys.

### Node Version Manager (NVM)

Installeert met het officieel geleverde installatiescript, of door een handmatige setup voor `rpm-ostree`-gebaseerde distributies omdat het officiële script niet voor hen werkt; installeert dan `yarn` door `npm` en toont hun documentatie in je browser. Verwijdering kan gedaan worden door hun documentatie te volgen, of door simpelweg `$HOME/.nvm` te verwijderen voor `rpm-ostree`-gebaseerde systemen.

**Pakketten Geïnstalleerd of Bijgewerkt**
- **Alle systemen**: `nodejs npm`
- **Van NPM**: `yarn`

### PyEnv

Installeert alle vereiste afhankelijkheden, installeert *PyEnv* met zijn officiële script, stelt dan zijn pad in in je `bash` en `zsh` profielbestanden en toont hun documentatie in je browser. Verwijdering moet hun documentatie volgen en kan niet gedaan worden door LinuxToys.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

Installeert met hun officiële installatiescript. Kan verwijderd worden door hetzelfde script.

### Kernel Module Signing voor RPM-OSTree

Stelt een **MOK** (Machine Owner Key) in die willekeurig gegenereerd en uniek voor je machine is; installeert dan [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys) om kernel modules ermee te ondertekenen in de toekomst. Vereist om *Nvidia*, *VirtualBox* en andere kernel module drivers te laten werken met Secure Boot ingeschakeld. Het wordt automatisch geactiveerd bij het installeren van Nvidia drivers op `rpm-ostree`-gebaseerde onveranderlijke systemen als Secure Boot ingeschakeld is op het moment van installatie.

### Radeon Open Compute (ROCm)

Installeert alle ROCm pakketten en diagnostische tools vereist voor het goed te laten werken en voegt je gebruiker toe aan de `render` en `video` gebruikersgroepen, vereist om `/dev/kfd` - dat vereist is door ROCm - toegankelijk te maken zonder root.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Realtek RTL8821CE Driver

Installeert [RTL8821CE Driver door Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) en alle zijn afhankelijkheden, vervangt en blacklist de standaard RTW8821CE driver die komt met de kernel, die niet goed werkt of helemaal niet met sommige apparaten. 

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Installeert en schakelt een nieuwere, snellere implementatie voor OpenCL in, voor kaarten die niet ondersteund worden door Intel Compute Runtime, ROCm of CUDA. 

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Andere Wijzigingen**

**Voegt toe aan `/etc/environment`:**
- Voor *Intel* GPUs
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- Voor *AMD* GPUs
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

Installeert alle vereiste afhankelijkheden, kloont dan zijn [repository](https://github.com/atar-axis/xpadneo.git) en installeert het van het officiële script. 

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Distrobox Commando Helper

Installeert bestanden vereist om commando's te omleiden van distroboxes naar de host als het commando niet gevonden wordt binnen de distrobox voor `bash` en `zsh`; sourced ze dan op `.bashrc` en `.zshrc`. Verwijdering kan gedaan worden door simpelweg de map met de bestanden te verwijderen.

**Geïnstalleerde bestanden locatie**
`$HOME/.local/distrobox-handler`

### Streaming Codecs voor Fedora/OpenSUSE

Installeer de codecs vereist voor streaming media met hardwareversnelling op die besturingssystemen. Het zal ook RPMFusion installeren op Fedora als niet al geïnstalleerd, omdat de vereiste pakketten niet geleverd worden in standaard repositories.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE:`opi` en, van opi, `codecs`

### Microsoft CoreFonts

Download de bestanden van [SourceForge](http://downloads.sourceforge.net/corefonts), gebruikt dan `cabextract` om de font installers uit te pakken en installeert de fonts in `$HOME/.local/share/fonts`. Verwijdering kan gedaan worden door de CoreFonts mappen te verwijderen van `$HOME/.local/share/fonts`.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `cabextract`

### Split-lock Mitigatie Uitschakelen

Schakelt split-lock mitigatie uit, wat gedaan werd om goede ontwikkelingspraktijken af te dwingen op Linux, maar resulteert in significant prestatieverlies in oudere applicaties en verschillende games, speciaal van *Playstation Studios*, die niet gemaakt zijn met Linux in overweging. Omdat het geen veiligheidsfunctie is, is het veilig om uit te schakelen. Dit wordt gedaan door een `99-splitlock.conf` bestand dat de juiste kernel parameter injecteert. Verwijdering kan gedaan worden door het bestand te verwijderen.

**Geïnstalleerd bestand**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Sluit een geheugen-hongerige of lekkende applicatie geforceerd in geval van extreme geheugen- en swap-druk, vermijdt een 'out of memory' situatie, waar Linux systemen notoir slecht op reageren, omdat de heuristische scan uitgevoerd door de kernel om te beslissen welk proces te sluiten verschillende uren kan duren.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `earlyoom`

**Aangepaste instellingen toegepast**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Toont btrfs snapshots in je GRUB boot menu, perfect om een vorige snapshot te selecteren in geval je een kapot systeem moet herstellen. Gekloond en geïnstalleerd van zijn officiële [repository](https://github.com/Antynea/grub-btrfs); dan worden aangepaste instellingen toegepast. Vereist `grub`, en zal niet doorgaan als `grub` niet gevonden wordt in je systeem. Verwijdering moet hun documentatie volgen en kan niet gedaan worden door LinuxToys.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Aangepaste instellingen toegepast**
- Stelt een standaard 'root' snapper configuratie in, met de volgende wijzigingen van snapper standaarden:
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
Het schakelt dan `snapper-boot.timer` en `snapper-cleanup.timer` systemd services in.

### iNet Wireless Daemon

Een draadloos netwerk daemon gemaakt door Intel, die betere algemene prestaties en latentie heeft dan de standaard `wpa_supplicant`, echter mogelijk niet compatibel is met bepaalde enterprise netwerken.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `iwd`

**Aangepaste instellingen toegepast**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Schakelt `wpa_supplicant` systemd service uit.

### LucidGlyph

Geïnstalleerd met het officiële script van zijn [repository](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Wijzigt de standaard governor naar `schedutil` voor Intel CPUs (`powersave` is de standaard voor de meeste distributies); of wijzigt het interne energieprofiel van AMD (Zen 2 en nieuwer) processors naar `balance_performance`. Maakt CPU frequenties meer reactief en verhoogt systeemresponsiviteit en prestaties, tegen een lichte gemiddelde stroomverbruik verhoging. Niet aanbevolen op laptops vanwege hun beperkte thermische afvoercapaciteiten.

**Aangepaste instellingen toegepast**
- Voor *Intel* CPUs, de `intel_pstate` driver voorkomt het gebruik van `ondemand` governor en moet eerst uitgeschakeld worden. Dit wordt gedaan door de volgende kernel parameter toe te voegen aan `GRUB_CMDLINE_LINUX` of als een `systemd-boot` configuratiebestand.
```
intel_pstate=disable
```
- Creëert en schakelt een nieuwe systemd service in: `/etc/systemd/system/set-ondemand-governor.service`
```
[Unit]
Description=Set CPU governor to ondemand
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/bin/bash -c 'for cpu in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do echo schedutil > "$cpu" 2>/dev/null || true; done'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```
- Als een compatibele AMD cpu wordt uitgevoerd, zal de `ExecStart=` regel zijn:
```
ExecStart=/bin/bash -c 'for cpu in /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference; do echo balance_performance > "$cpu" 2>/dev/null || true; done'
```

### Power Optimizer

Installeert `power-options` om voedingsinstellingen intuïtief en in groot detail te beheren door een GTK interface door zijn officiële script of door de [leo/power-options COPR repository](https://copr.fedorainfracloud.org/coprs/leo/power-options). Bevat zijn tray icon. Verwijdering moet hun documentatie volgen en kan niet gedaan worden door LinuxToys, behalve voor Atomic Fedora gebruikers, die het kunnen verwijderen door gewoon het `power-options` pakket te verwijderen.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): ``gtk4-devel libadwaita-devel power-options`

### Psycachy Kernel

Een gemodificeerde Linux kernel die veel van CachyOS's kernel patches bevat die getest en veilig bevonden zijn voor gebruik op Debian/Ubuntu-gebaseerde systemen, onderhouden door Psygreg. Niet beschikbaar voor andere besturingssystemen. Gedownload en geïnstalleerd van zijn [officiële repository's](https://github.com/psygreg/linux-psycachy) laatste releases.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

Een patch voor het shell login configuratiebestand dat een grotere shader cache grootte voor elke GPU inschakelt, elimineert stutters en FPS drops in verschillende moderne games. Herinnering: het zal niet de hele ruimte innemen tenzij het het echt nodig heeft. Kan teruggedraaid worden door gewoon de toegevoegde regels te verwijderen van `.bash_profile`, `.profile` of `.zshrc`.

**Aangepaste instellingen toegepast**
- *AMD* en *Intel* GPUs
```
# afdwing RADV vulkan implementatie voor AMD GPUs
export AMD_VULKAN_ICD=RADV

# verhoog AMD en Intel cache grootte naar 12GB
export MESA_SHADER_CACHE_MAX_SIZE=12G
```
- *Nvidia* GPUs
```
# verhoog Nvidia shader cache grootte naar 12GB
export __GL_SHADER_DISK_CACHE_SIZE=12000000000
```

### OpenSUSE SELinux Policy Fix

Lost een probleem op waar SELinux voorkomt dat iets draait door WINE/Proton op OpenSUSE. Kan teruggedraaid worden door hetzelfde commando te gebruiken met `0` als de boolean waarde in plaats van `1`. 

**Aangepaste instellingen toegepast**
```
setsebool -P selinuxuser_execmod 1
```

### Swapfile Creator

Creëert een 8GB swapfile, ofwel op `/swapfile` of `/home/swapfile` (`/home/swap/swapfile` voor btrfs filesystemen). Bevat de noodzakelijke tweaks voor het swapfile om correct te werken in btrfs filesystemen, vermijdt een vloed van snapshots. 

**Verwijdering**
```
sudo swapoff SWAPFILE_PATH
sudo rm -rf SWAPFILE_PATH
```
Verwijder dan de swapfile entry van `/etc/fstab`. 

### Firewall Setup

Installeert de vereiste pakketten, past dan verstandige standaarden toe die ideaal zijn voor de meeste gebruikers. 

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `ufw gufw`

**Aangepaste instellingen toegepast**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Installeert de applicatie van Flathub, past de vereiste `udev` configuratiebestanden toe voor het te laten werken op `/etc/udev/rules.d`, toont dan documentatie over ondersteunde apparaten op je browser. De configuratiebestanden worden verkregen van zijn [officiële GitHub repository](https://github.com/berarma/oversteer). 

### DaVinci Resolve

Biedt installatie door [DaVinciBox](https://github.com/zelikos/davincibox) volgende standaard afhankelijkheden en procedures ervoor, of native installatie door aangepaste procedures. De *Studio* versie vereist een licentie gekocht van Blackmagic Design. Verwijdering kan gedaan worden door de app snelkoppelingen te onexporteren en de distrobox te wissen voor *DaVinciBox* volgens de instructies in zijn repository; de uninstaller te gebruiken van het applicatiemenu op Fedora/OpenSUSE; of gewoon het pakket te verwijderen door je pakketbeheerder in andere systemen.

**Pakketten Geïnstalleerd of Bijgewerkt voor native installatie**
- Arch: `davinci-resolve` of `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` en `davinci-resolve` of `davinci-resolve-studio`

**Pakketten Geïnstalleerd of Bijgewerkt voor DaVinciBox**
- Alle systemen: `lshw distrobox podman`

**DaVinciBox updaten**

De distrobox container zelf updaten is zo simpel als gewoon `sudo dnf update` erin draaien. Echter, om DaVinciBox te updaten voor nieuwe Resolve versies, moet je de verwijderingsprocedure hieronder volgen, dan het opnieuw installeren door LinuxToys.

**DaVinciBox verwijdering**
- Draai gewoon deze commando's in volgorde:
```
distrobox enter davincibox -- add-davinci-launcher remove
distrobox stop davincibox
distrobox rm davincibox
```

### Active Directory

Installeert alle pakketten nodig om integratie in Active Directory domeinen in te schakelen.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Cockpit Server

Installeert `cockpit` van Debian backports of standaard repositories. Atomic Fedora systemen vereisen aanvullende pakketten. Voert daarna de noodzakelijke firewall configuraties uit voor Fedora en OpenSUSE om toegang toe te staan vanaf een *Cockpit Client*.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Aangepaste instellingen toegepast**
- Schakelt `cockpit.socket` systemd service in
- Voor Fedora:
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- Voor OpenSUSE:
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

Verkrijgt alle noodzakelijke afhankelijkheden, en installeert `waydroid` van je distributie repositories, of zijn eigen repository voor Debian/Ubuntu specifiek. Initialiseert dan de container, installeert Android met verstandige standaarden en ondersteuning voor de ***Google Play Store*** ingeschakeld. Optioneel, zal het [waydroid_scripts](https://github.com/casualsnek/waydroid_script) gebruiken om ARM vertaal capaciteiten te installeren met *libndk* voor AMD of *libhoudini* voor Intel processors.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Anderen: `waydroid`

**Met ARM vertalingen**
- Arch: `python-pip`
- Anderen: `python3-pip`

### OpenRGB

Installeert de hoofdapplicatie van Flathub, krijgt dan de udev regels om het te laten werken van zijn [officiële repository](https://openrgb.org/releases) of van *RPMFusion* op Fedora.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Fedora: `openrgb-udev-rules`

### OpenRazer

Installeert het met het `openrazer-meta` metapakket van zijn [officiële repositories](https://openrazer.github.io/), naast zijn GUI *Polychromatic* van Flathub; of, voor Fedora Atomic (`rpm-ostree`) systemen, van *Universal Blue*'s kernel modules repository. Voor Universal Blue systemen, installeert met het script geleverd door `ujust`. 

**Pakketten Geïnstalleerd of Bijgewerkt**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Anderen: `openrazer-meta`

### Automatische Updates voor RPM-OSTree

Schakelt `rpm-ostree`'s automatische updates in stage modus in, zodat je werk nooit verstoord wordt. Ze zullen stilletjes gedownload en gemaakt worden in een nieuwe deployment om toegepast te worden wanneer je besluit om je systeem te herstarten. Kan teruggedraaid worden door de `rpm-ostree-automatic.timer` systemd service uit te schakelen.

**Aangepaste instellingen toegepast**
- toegevoegd aan `/etc/rpm-ostreed.conf`
```
[Daemon]
AutomaticUpdatePolicy=stage
```
- schakelt `rpm-ostree-automatic.timer` systemd service in

### Nerd Fonts

Haalt data op van beschikbare fonts van [NerdFonts](https://www.nerdfonts.com) en toont ze voor installatie. Het geselecteerde font zal geïnstalleerd worden op `$HOME/.local/share/fonts`, en kan verwijderd worden door gewoon de bestanden toe te voegen aan die directory te verwijderen.

### Lazyman

Installeert *Lazyman* configuratiebeheerder voor *NeoVim* naast een configuratie van de gebruiker's keuze. Kan verwijderd worden door zijn map te verwijderen.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `neovim git`

**Aanvullende bestanden geïnstalleerd**
- Directory: `$HOME/.config/nvim-Lazyman`

### Starship

Gebruikt het officiële script van [Starship](https://starship.rs) voor installatie of updating. Kan teruggedraaid worden door de toegevoegde regel te verwijderen om het in te schakelen in je `.bashrc`, `.zshrc` of vergelijkbaar configuratiebestand voor je shell.

**Aangepaste instellingen toegepast**
- toegevoegd aan `~/.bashrc`
```
eval "$(starship init bash)"
```

### Oh My ZSH

Gebruikt het officiële script van [Oh My ZSH](https://ohmyz.sh) voor installatie of updating. Kan teruggedraaid worden door de regel te verwijderen die het sourced van je `.zshrc`.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `zsh`

### CachyOS systemd instellingen

Past verschillende prestatie tweaks en fixes voor veelvoorkomende problemen toe. Hoewel ze allemaal geïnstalleerd zullen worden, zullen veel ervan alleen actief worden als nodig - omdat ze alleen ingeschakeld zullen worden als de apparaten waarvoor ze bedoeld zijn gevonden worden in je systeem. Dit laat toe dat je componenten kunt veranderen met patches voor die nieuwe onderdelen die dynamisch toegepast worden. Voor atomic Fedora en Universal Blue systemen, zullen deze geïnstalleerd worden als een gelaagd pakket en kunnen verwijderd worden door gewoon het pakket te verwijderen door `rpm-ostree`. Voor anderen, kunnen ze teruggedraaid worden door de corresponderende bestanden te verwijderen. Zowel de pakketten als de directe installatiemethoden gebruiken bestanden rechtstreeks afkomstig van *CachyOS'* repositories.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Fedora atomic: `linuxtoys-cfg-atom`
- Universal Blue: `optimize-cfg-ublue`

**Aangepaste instellingen toegepast**
- `/usr/lib/systemd/journald.conf.d/00-journal-size.conf`
```
[Journal]
SystemMaxUse=50M
```
- `/usr/lib/udev/rules.d/20-audio-pm.rules`
```
SUBSYSTEM=="power_supply", ENV{POWER_SUPPLY_ONLINE}=="0", TEST=="/sys/module/snd_hda_intel", \
    RUN+="/bin/sh -c 'echo $$(cat /run/udev/snd-hda-intel-powersave 2>/dev/null || \
        echo 10) > /sys/module/snd_hda_intel/parameters/power_save'"

SUBSYSTEM=="power_supply", ENV{POWER_SUPPLY_ONLINE}=="1", TEST=="/sys/module/snd_hda_intel", \
    RUN+="/bin/sh -c '[[ $$(cat /sys/module/snd_hda_intel/parameters/power_save) != 0 ]] && \
        echo $$(cat /sys/module/snd_hda_intel/parameters/power_save) > /run/udev/snd-hda-intel-powersave; \
        echo 0 > /sys/module/snd_hda_intel/parameters/power_save'"
```
- `/usr/lib/udev/rules.d/40-hpet-permissions.rules`
```
KERNEL=="rtc0", GROUP="audio"
KERNEL=="hpet", GROUP="audio"
```
- `/usr/lib/udev/rules.d/50-sata.rules`
```
ACTION=="add", SUBSYSTEM=="scsi_host", KERNEL=="host*", \
    ATTR{link_power_management_policy}=="*", \
    ATTR{link_power_management_policy}="max_performance"
```
- `/usr/lib/udev/rules.d/60-ioschedulers.rules`
```
# HDD
ACTION=="add|change", KERNEL=="sd[a-z]*", ATTR{queue/rotational}=="1", \
    ATTR{queue/scheduler}="bfq"

# SSD
ACTION=="add|change", KERNEL=="sd[a-z]*|mmcblk[0-9]*", ATTR{queue/rotational}=="0", \
    ATTR{queue/scheduler}="mq-deadline"

# NVMe SSD
ACTION=="add|change", KERNEL=="nvme[0-9]*", ATTR{queue/rotational}=="0", \
    ATTR{queue/scheduler}="none"
```
- `/usr/lib/udev/rules.d/69-hdparm.rules`
```
ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="1", \
    RUN+="/usr/bin/hdparm -B 254 -S 0 /dev/%k"
```
- `/usr/lib/sysctl.d/99-cachyos-settings.conf`
```
vm.swappiness = 100
vm.vfs_cache_pressure = 50
vm.dirty_bytes = 268435456
vm.page-cluster = 0
vm.dirty_background_bytes = 67108864
vm.dirty_writeback_centisecs = 1500
kernel.nmi_watchdog = 0
kernel.unprivileged_userns_clone = 1
kernel.printk = 3 3 3 3
kernel.kptr_restrict = 2
kernel.kexec_load_disabled = 1
net.core.netdev_max_backlog = 4096
fs.file-max = 2097152
```
- `/usr/lib/udev/rules.d/99-cpu-dma-latency.rules`
```
DEVPATH=="/devices/virtual/misc/cpu_dma_latency", OWNER="root", GROUP="audio", MODE="0660"
```
- `/usr/lib/modprobe.d/amdgpu.conf`
```
options amdgpu si_support=1 cik_support=1
options radeon si_support=0 cik_support=0
```
- `/usr/lib/modprobe.d/blacklist.conf`
```
# Blacklist de Intel TCO Watchdog/Timer module
blacklist iTCO_wdt

# Blacklist de AMD SP5100 TCO Watchdog/Timer module (Vereist voor Ryzen cpus)
blacklist sp5100_tco
```
- `/usr/lib/tmpfiles.d/coredump.conf` - niet inbegrepen voor Universal Blue systemen, die hun eigen instelling hiervoor hebben
```
d /var/lib/systemd/coredump 0755 root root 3d
```
- `/usr/lib/modprobe.d/nvidia.conf`
```
options nvidia NVreg_UsePageAttributeTable=1 \
    NVreg_InitializeSystemMemoryAllocations=0 \
    NVreg_DynamicPowerManagement=0x02 \
    NVreg_RegistryDwords=RMIntrLockingMode=1
```
- `/usr/lib/tmpfiles.d/thp.conf`
```
w! /sys/kernel/mm/transparent_hugepage/defrag - - - - defer+madvise
```
- `/usr/lib/tmpfiles.d/thp-shrinker.conf`
```
w! /sys/kernel/mm/transparent_hugepage/khugepaged/max_ptes_none - - - - 4091
```

### SDKMAN
Geïnstalleerd door zijn officiële script. Kan verwijderd worden door de installer opnieuw te draaien van LinuxToys.

### Acer Manager
Geïnstalleerd met behulp van het script dat wordt geleverd in de [officiële GitHub repository](https://github.com/PXDiv/Div-Acer-Manager-Max) na het installeren van de juiste afhankelijkheden ervoor.

**Geïnstalleerde of Bijgewerkte Pakketten**
- Arch: `base-devel linux${_k:+-${_k}}-headers`
- Fedora/OpenSUSE: `make gcc kernel-headers kernel-devel`
- Debian/Ubuntu: `make build-essential`

### GPU Screen Recorder
Geïnstalleerd vanaf [Pacstall](https://pacstall.dev), [COPR](https://copr.fedorainfracloud.org/coprs/brycensranch/gpu-screen-recorder-git) of de [AUR](https://aur.archlinux.org/packages/gpu-screen-recorder) als een Intel GPU (dedicated of geïntegreerd) wordt gedetecteerd in uw systeem zodat *QuickSync* correct werkt. Anders wordt het geïnstalleerd vanaf Flathub als een systeemniveau flatpak.

**Geïnstalleerde of Bijgewerkte Pakketten**
- Arch/Debian/Ubuntu/OpenSUSE: `intel-media-driver gpu-screen-recorder`
- Fedora: `libva-intel-media-driver gpu-screen-recorder-ui`

**Aanvullende procedures vereist!**
Na installatie, voer uit in de terminal:
```
gsr-ui
```
En stel het in om te starten bij het opstarten van het systeem vanuit de instellingen (het tandwielpictogram), druk vervolgens op Alt+Z om de UI te verlaten, sluit het terminalvenster en herstart. Na het herstarten kunt u de programma-instellingen naar uw voorkeuren aanpassen en het gebruiken zoals u wilt.

### GTK Renderer Fix
Lost problemen op met het renderen van GTK-applicaties met Intel Arc B-serie (*Battlemage*) en Nvidia GPU's door deze over te schakelen naar OpenGL-modus. Kan worden teruggedraaid door simpelweg de toegevoegde regel te verwijderen met een teksteditor zoals `nano`.

**Toegepaste aangepaste instellingen**
- Toegevoegd aan `/etc/environment`:
```
GSK_RENDERER=ngl
```

### Intel Xe Driver
Schakelt de nieuwe Intel `xe` driver van de kernel in. Hoewel deze aanwezig is sinds versie 6.8, is deze niet standaard ingeschakeld, wat ervoor zorgt dat nieuwere Intel grafische processors, met name discrete (Arc) GPU's, aanzienlijke prestaties missen over de hele linie, vooral bij bepaalde rekentaken. Kan worden teruggedraaid door de parameters te verwijderen met `rpm-ostree kargs --delete` voor Fedora Atomic, of door het bestand `/etc/grub.d/01_intel_xe_enable` te verwijderen voor andere systemen. Dit zal ook hardware videodecodering installeren.

**Geïnstalleerde of bijgewerkte pakketten**
- Alle systemen: `libvdpau-va-gl`

**Toegepaste aangepaste instellingen**
- Eerst wordt de `$DEVID` variabele verkregen via het volgende commando:
```
lspci -nnd ::03xx | grep -Ei 'battlemage|alchemist' | sed -n 's/.*\[8086:\([0-9a-f]\+\)\].*/\1/p'
```
- vervolgens, voor Fedora Atomic (`rpm-ostree`-gebaseerde systemen):
```
rpm-ostree kargs --append='i915.force_probe=!'"$DEVID" --append="xe.force_probe=$DEVID"
```
- of andere systemen: maakt `/etc/grub.d/01_intel_xe_enable` aan
```
GRUB_CMDLINE_LINUX="\${GRUB_CMDLINE_LINUX} i915.force_probe=!$DEVID xe.force_probe=$DEVID"
```
- ten slotte, om hardware videodecodering in te schakelen, toegevoegd aan `/etc/environment`:
```
VDPAU_DRIVER=va_gl
```

### DNSMasq
Installeert `dnsmasq` en schakelt een paar instellingen in voor optimale werking en compatibiliteit, zelfs op systemen die `systemd-resolved` draaien, als een lokale DNS-cache. Nuttig voor het verbeteren van internetbrowsesnelheden en als oplossing voor een veel voorkomend probleem met dalende Steam downloadsnelheid.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Debian: `dnsmasq resolvconf`
- Andere systemen: `dnsmasq`

**Toegepaste aangepaste instellingen**
- Schakelt (uncomments) `domain-needed`, `bogus-priv` en `bind-interfaces` in op `/etc/dnsmasq.conf`

### Secure Boot voor Arch
Maakt Arch Linux in staat om te werken met Secure Boot ingeschakeld, waardoor dual boot met Windows mogelijk is terwijl games met kernel anticheats worden uitgevoerd en een extra beveiligingslaag wordt geboden. Voor dat doel maakt LinuxToys gebruik van `sbctl`, dat problemen kan hebben op sommige moederborden. Zoek op internet naar problemen met uw specifieke moederbord voordat u deze functie gebruikt.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch: `sbctl efibootmgr`

**Toegepaste aangepaste instellingen**
- Ten eerste moet GRUB worden voorbereid indien aanwezig:
```
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB --modules="tpm" --disable-shim-lock
```
- Vervolgens worden sleutels gemaakt via `sbctl` en als volgt ingeschreven:
```
sbctl create-keys
sbctl enroll-keys -m -f
```
- Ten slotte worden alle bestanden die via `sbctl verify` een handtekening voor Secure Boot nodig hebben, ondertekend met `sbctl sign -s`.

## Repository Installers

### Brew
Geïnstalleerd door zijn officiële installatiescript.

### Cargo
Geïnstalleerd door zijn officiële installatiescript door RustUp.

### Chaotic-AUR
Geïnstalleerd volgens hun documentatie, met timing tweaks om fouten veroorzaakt door commando's te snel naar pacman te sturen te vermijden.

### Flathub
Installeert `flatpak` en voegt de Flathub repository toe zowel systeem als gebruiker-niveau.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Alle systemen: `flatpak`

### Pip
Geïnstalleerd door `python-pip` (Arch) of `python3-pip` (andere systemen) pakketten van standaard repositories. Bevat `pipx` voor geautomatiseerde setup van PyPI pakketten in virtuele omgevingen zoals aanbevolen door documentatie.

### RPMFusion
Geïnstalleerd volgens hun documentatie, met een specifieke iteratie voor Fedora Atomic (`rpm-ostree`-gebaseerde) systemen.

### Pacstall
Geïnstalleerd met hun officiële script. Alleen beschikbaar voor Debian/Ubuntu.

## LSW-WinBoat

Stelt een *Docker* installatie in met de juiste instellingen en patches voor gebruik met **WinBoat** - dat Windows kan installeren in een Docker container en kan interacteren met zijn apps, die integreert met het host systeem. Installeert dan *WinBoat* zelf van zijn [officiële GitHub repository](https://github.com/TibixDev/winboat), en *FreeRDP* van Flathub om het te gebruiken.

**Pakketten Geïnstalleerd of Bijgewerkt**
- Arch:`docker docker-compose winboat-bin`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`
- OpenSUSE:`docker docker-compose winboat`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`

- Flathub: `com.freerdp.FreeRDP`

**Aangepaste instellingen toegepast**
- Schakelt `docker` en `docker.socket` systemd services in
- Schakelt `iptables` kernel module in met juiste instellingen, op `/etc/modules-load.d/iptables.conf`:
```
ip_tables
niptable_nat
```
- Schakelt rootless docker gebruik in door de gebruiker toe te voegen aan de `docker` gebruikersgroep, wat een aangepaste patch vereist voor `rpm-ostree`-gebaseerde systemen:
```
echo "$(getent group docker)" >> /etc/group
```
- Opent interne Docker poorten 8006 en 3389 op `firewalld` om WinBoat zijn container te laten bereiken, lost een probleem op Fedora en derivaten op (niet van toepassing op andere besturingssystemen):
```
firewall-cmd --zone=docker --change-interface=docker0
firewall-cmd --zone=docker --add-port=8006/tcp --permanent
firewall-cmd --zone=docker --add-port=3389/tcp --permanent
```

## Geoptimaliseerde Standaarden

Een één-klik setup die een gecureerde, stabiele selectie van optimalisaties voor je systeem installeert. Het zal geen functies installeren die niet relevant zijn of al aanwezig in je machine.

#### Inbegrepen Functies

**Prestaties**
- EarlyOOM
- Shader Booster
- Split-lock Mitigatie Uitschakeling
- *CachyOS* systemd configuratiebestanden - getest en gefilterd voor stabiliteit, dus de prestaties komen niet ten koste van een compromis

**Kwaliteit van Leven**
- FFMPEGThumbnailer
- Fedora/OpenSUSE Streaming Codecs
- `/etc/sudoers` bestand correctie voor Debian - lost een probleem op dat de gebruiker niet in staat stelt om `sudo` te gebruiken na installatie van de standaard installatieimage
- Gnome timeout fix - verhoogt timeout tolerantie om overmatige 'programma reageert niet' prompts te stoppen
- Kernel Module Signing voor RPM-OSTree
- automatische updates inschakeling voor `rpm-ostree` - in stage modus zodat je werk nooit verstoord wordt
- (optioneel) Hardware Acceleratie voor Flatpaks

**Stroom Profielen**
- *Laptop*: Power Optimizer
- *Desktop*: CPU ondemand

## Psygreg's Picks

Een gecureerde selectie van apps om je gaming leven op Linux makkelijker dan ooit te maken, één klik weg.

#### Inbegrepen Functies

- Bazaar
- Discord
- Flatseal
- Gear Lever
- GPU Screen Recorder
- Heroic Games Launcher
- Lutris
- Mission Center
- OBS Studio
- Prism Launcher
- ProtonPlus
- Protontricks
- Steam
- VLC
- Extension Manager (voor *Gnome* desktops alleen)
- Gnome Tweaks (voor *Gnome* desktops alleen)