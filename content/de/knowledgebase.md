# Wissensdatenbank

## Grundlegende LinuxToys Feature-Richtlinien

- Features werden nur in Systemen verfügbar gemacht, in denen sie kompatibel *und* relevant sind.
- Alle Features und Ressourcen innerhalb der Anwendung müssen immer dem **KISS** (*Keep It Simple, Stupid*) Prinzip folgen - sie müssen einfach zu verstehen und durch ihre Bezeichnungen und kurzen Beschreibungen zu nutzen sein.
- Features müssen so erstellt werden, dass sie **optimal** für den Benutzer funktionieren.
- Benutzerinteraktion ist auf `zenity` Eingabeaufforderungen beschränkt, um Unvorhersagbarkeiten zu vermeiden und Zuverlässigkeit zu gewährleisten.
- Flatpaks sollten wann immer möglich verwendet werden wegen ihrer **Konsistenz** durch Flatpak-Laufzeiten und **Sicherheit** durch granulare Berechtigungskontrolle.

## Als native Pakete installiert

Aus Standard-System-Repositories oder mit von LinuxToys hinzugefügten Repositories, und es werden keine anderen Änderungen vorgenommen.

### Standard-Repositories
- Java OpenJDK (jede Version)
- Maven
- NeoVim
- Broadcom WiFi-Treiber (nur für Fedora/Arch verfügbar)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch; andere haben es von Flathub)
- F3 - Fight Flash Fraud (öffnet auch seine Dokumentation in Ihrem Browser nach der Installation)
- Wireguard
- VLC

### Hinzugefügte Repositories
- Visual Studio Code: aus [Microsofts offiziellem Repository.](https://packages.microsoft.com)
- .NET SDK: aus [Microsofts offiziellem Repository](https://packages.microsoft.com), nur in OpenSUSE und Debian. Andere Systeme haben es aus Standard-Repositories installiert.
- Sublime Text: aus [seinen offiziellen Repositories.](https://download.sublimetext.com)
- Unity Hub: aus [Unitys offiziellem Repository.](https://hub.unity3d.com/linux/repos) Nur verfügbar in Systemen, die offiziell von Unity unterstützt werden.
- Nvidia-Treiber: aus [Nvidias offiziellem Repository](https://developer.download.nvidia.com/compute/cuda/repos) in Debian oder *RPMFusion* in Fedora. Andere Systeme haben es aus Standard-Repositories installiert.
- btrfs-Assistant: aus [Chaotic-AUR](https://aur.chaotic.cx) auf Arch. Andere Systeme haben es aus Standard-Repositories installiert. Beinhaltet `snapper` aus Standard-Repositories auf allen Systemen.
- Preload: aus [Chaotic-AUR](https://aur.chaotic.cx) auf Arch oder [elxreno/preload COPR Repository](https://copr.fedorainfracloud.org/coprs/elxreno/preload) auf Fedora. Andere Systeme haben es aus Standard-Repositories installiert.
- Touchegg: aus seinem offiziellen PPA-Repository oder [GitHub-Repository](https://github.com/JoseExposito/touchegg) für Ubuntu bzw. Debian. Andere Systeme haben es aus Standard-Repositories installiert. Nur X11.
- Gamescope: aus *Multilib* auf Arch oder *RPMFusion* auf Fedora. Andere Systeme haben es aus Standard-Repositories installiert.
- Steam: aus *Multilib* auf Arch oder *RPMFusion* auf Fedora. Andere Systeme haben es von Flathub installiert.
- Topgrade: aus *Pip*.
- Webmin: aus seinem [offiziellen GitHub-Repository](https://github.com/webmin/webmin).
- Arch-Update: aus [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP: aus [Cloudflares offiziellem Repository](https://pkg.cloudflareclient.com/).
- Solaar: aus seinem offiziellen PPA-Repository auf Ubuntu. Andere Systeme haben es aus Standard-Repositories installiert.
- IVPN: aus seinen [offiziellen Repositories](https://repo.ivpn.net/stable).
- Mullvad VPN: aus seinen [offiziellen Repositories](https://repository.mullvad.net) oder [Chaotic-AUR](https://aur.chaotic.cx) auf Arch.
- NordVPN: aus seinem [offiziellen Repository](https://downloads.nordcdn.com/apps) oder [Chaotic-AUR](https://aur.chaotic.cx) auf Arch.
- Input Remapper: aus [Chaotic-AUR](https://aur.chaotic.cx). Andere Systeme haben es aus Standard-Repositories installiert.

### Andere
- Heroic Games Launcher: aus seinem [offiziellen GitHub-Repository](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) für Fedora/Arch. Andere Systeme haben es von Flathub installiert.
- LSFG-VK: aus seinem [offiziellen GitHub-Repository](https://github.com/PancakeTAS/lsfg-vk). Beinhaltet Flatpak-Laufzeiten. Benötigt Lossless Scaling für Windows.
- Figma: installiert über den AppImage-Installer von [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN: installiert über seinen offiziellen AppImage-basierten Installer.
- Windscribe VPN: aus seinen [offiziellen Repositories](https://windscribe.com/install/desktop).

## Als Flatpaks installiert

Von Flathub oder mit von LinuxToys hinzugefügten Repositories, und es werden keine anderen Änderungen vorgenommen. System-Level-Flatpaks werden nur verwendet, wenn unbedingt notwendig.

### Benutzer-Level
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (beinhaltet Mangohud, nativ installiertes Paket)
- Mangojuice (beinhaltet Mangohud, nativ installiertes Paket)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (benötigt App installiert im VR-Gerät - Anweisungen beim ersten Start befolgen)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (optional patcht Dateien in `$HOME/.config` und `$HOME/.local` mit [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
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
- Distroshelf (beinhaltet `podman` und `distrobox` nativ installierte Pakete)
- Flatseal
- Handbrake
- Mission Center
- OBS Studio (beinhaltet [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture) Plugin)
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

#### Hinzugefügte Repositories

- GeForce NOW: aus seinem offiziellen Repository bereitgestellt von *Nvidia*

### System-Level

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper (beinhaltet `ratbagd` für Debian/Ubuntu oder `libratbag` für andere, nativ installierte Pakete)
- Hardware-Beschleunigung für Flatpaks (ffmpeg-full für die aktuell unterstützten Flatpak-Laufzeiten)

## Benutzerdefinierte Verfahren

Benötigen ein benutzerdefiniertes Installationsverfahren oder spezifische Anpassungen, um optimal zu funktionieren, die von LinuxToys implementiert werden. Bieten normalerweise auch Entfernung an, falls bereits installiert, es sei denn, das ist nicht notwendig (wenn das Entfernen des Haupt-Flatpaks oder -Pakets die anderen Änderungen rückgängig macht) oder Entfernungsanweisungen sind hier gegeben.

### Docker

Installiert die offiziellen Docker-Repositories (außer für Arch Linux und OpenSUSE, die sie nicht benötigen) und alle benötigten Pakete von dort über den Paketmanager Ihres Systems, fügt dann Ihren Benutzer zur `docker` Benutzergruppe hinzu und installiert Portainer CE, das ständig im Hintergrund läuft, da sein Zweck ein Docker-Dashboard ist und es vernachlässigbare Ressourcen vom Rechner verwendet. *Die Portainer CE-Installation wird in `rpm-ostree`-basierten Systemen nicht erfolgen, es sei denn, der Benutzer führt den Installer erneut aus aufgrund von Einschränkungen in ostree-Bereitstellungen.

**Installierte oder aktualisierte Pakete**
- Arch:`docker docker-compose`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
- OpenSUSE:`docker docker-compose`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

**Portainer CE Installation**
```
sudo docker volume create portainer_data
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

Sowohl **Godot** als auch **GodotSharp** werden über ein benutzerdefiniertes Verfahren installiert, da Godot keine Standard-Pakete bereitstellt. *GodotSharp* beinhaltet die Installation von **.NET SDK** wie auch in dieser Dokumentation beschrieben, erforderlich für seine Funktionen.

- Installierte Dateien-Speicherort: `$HOME/.local/godot`
- App-Menü-Verknüpfung-Speicherort: `$HOME/.local/share/applications`

### Jetbrains Toolbox

Lädt die neueste Tarball-Version von der offiziellen Website herunter und installiert sie über ein benutzerdefiniertes Verfahren, da JetBrains ansonsten nur AppImages bereitstellt, die bekanntermaßen unzuverlässig sind.

- Installierte Dateien-Speicherort: `$HOME/.local/jetbrains-toolbox`
- App-Menü-Verknüpfung-Speicherort: `$HOME/.local/share/applications`

### Mise

Installiert mit dem offiziell bereitgestellten Installationsskript, folgt dann seiner Dokumentation, um Autovervollständigungen einzurichten, ein sehr gewünschtes Feature davon, für `bash`, `zsh` und `fish` Shells; und zeigt seine Dokumentation nach Abschluss in Ihrem Browser an. Kann nicht mit `zsh` Shells auf unveränderlichen (`rpm-ostree`-basierten Systemen) verwendet werden aufgrund von Unveränderlichkeitsbeschränkungen. Entfernung sollte ihrer Dokumentation folgen und kann nicht über LinuxToys durchgeführt werden.

### Node Version Manager (NVM)

Installiert mit dem offiziell bereitgestellten Installationsskript oder über eine manuelle Einrichtung für `rpm-ostree`-basierte Distributionen, da das offizielle Skript für sie nicht funktioniert; installiert dann `yarn` über `npm` und zeigt ihre Dokumentation in Ihrem Browser an. Entfernung kann durch Befolgen ihrer Dokumentation erfolgen oder einfach durch Entfernen von `$HOME/.nvm` für `rpm-ostree`-basierte Systeme.

**Installierte oder aktualisierte Pakete**
- **Alle Systeme**: `nodejs npm`
- **Von NPM**: `yarn`

### PyEnv

Installiert alle erforderlichen Abhängigkeiten, installiert *PyEnv* mit seinem offiziellen Skript, richtet dann seinen Pfad in Ihre `bash` und `zsh` Profildateien ein und zeigt ihre Dokumentation in Ihrem Browser an. Entfernung sollte ihrer Dokumentation folgen und kann nicht über LinuxToys durchgeführt werden.

**Installierte oder aktualisierte Pakete**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

Installiert mit ihrem offiziellen Installationsskript. Kann über dasselbe Skript entfernt werden.

### Kernel-Modul-Signierung für RPM-OSTree

Setzt einen **MOK** (Machine Owner Key), der zufällig generiert und einzigartig für Ihren Rechner ist; installiert dann [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys), um Kernel-Module in Zukunft damit zu signieren. Erforderlich, um *Nvidia*, *VirtualBox* und andere Kernel-Modul-Treiber mit aktiviertem Secure Boot zum Laufen zu bringen. Wird automatisch ausgelöst, wenn Nvidia-Treiber auf `rpm-ostree`-basierten unveränderlichen Systemen installiert werden, falls Secure Boot zum Zeitpunkt der Installation aktiviert ist.

### Radeon Open Compute (ROCm)

Installiert alle ROCm-Pakete und Diagnose-Tools, die erforderlich sind, damit es ordnungsgemäß funktioniert, und fügt Ihren Benutzer zu den `render` und `video` Benutzergruppen hinzu, erforderlich, um `/dev/kfd` - das von ROCm benötigt wird - ohne Root zugänglich zu machen.

**Installierte oder aktualisierte Pakete**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Realtek RTL8821CE Treiber

Installiert [RTL8821CE Treiber von Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) und alle seine Abhängigkeiten, ersetzt und setzt den Standard-RTW8821CE-Treiber auf die Blacklist, der mit dem Kernel kommt, der nicht ordnungsgemäß oder überhaupt nicht mit einigen Geräten funktioniert.

**Installierte oder aktualisierte Pakete**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Installiert und aktiviert eine neuere, schnellere Implementierung für OpenCL für Karten, die nicht von Intel Compute Runtime, ROCm oder CUDA unterstützt werden.

**Installierte oder aktualisierte Pakete**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Andere Änderungen**

**Fügt zu `/etc/environment` hinzu:**
- Für *Intel* GPUs
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- Für *AMD* GPUs
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

Installiert alle erforderlichen Abhängigkeiten, klont dann sein [Repository](https://github.com/atar-axis/xpadneo.git) und installiert es vom offiziellen Skript.

**Installierte oder aktualisierte Pakete**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Distrobox Command Helper

Installiert Dateien, die erforderlich sind, um Befehle von Distroboxen an den Host weiterzuleiten, falls der Befehl in der Distrobox nicht gefunden wird, für `bash` und `zsh`; sourced sie dann in `.bashrc` und `.zshrc`. Entfernung kann einfach durch Löschen des Ordners mit den Dateien erfolgen.

**Installierte Dateien-Speicherort**
`$HOME/.local/distrobox-handler`

### Streaming-Codecs für Fedora/OpenSUSE

Installiert die Codecs, die für Streaming-Medien mit Hardware-Beschleunigung auf diesen Betriebssystemen erforderlich sind. Es wird auch RPMFusion auf Fedora installieren, falls nicht bereits installiert, da die benötigten Pakete nicht in Standard-Repositories bereitgestellt werden.

**Installierte oder aktualisierte Pakete**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE:`opi` und aus opi `codecs`

### Microsoft CoreFonts

Lädt die Dateien von [SourceForge](http://downloads.sourceforge.net/corefonts) herunter, verwendet dann `cabextract`, um die Font-Installer zu extrahieren und installiert die Fonts in `$HOME/.local/share/fonts`. Entfernung kann durch Entfernen der CoreFonts-Ordner aus `$HOME/.local/share/fonts` erfolgen.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `cabextract`

### Split-lock Mitigation Disabler

Deaktiviert Split-lock-Mitigation, die gemacht wurde, um gute Entwicklungspraktiken auf Linux durchzusetzen, aber zu erheblichem Leistungsverlust in älteren Anwendungen und mehreren Spielen führt, insbesondere von *Playstation Studios*, die nicht unter Berücksichtigung von Linux gemacht werden. Da es kein Sicherheitsfeature ist, ist es sicher zu deaktivieren. Dies wird durch eine `99-splitlock.conf` Datei gemacht, die den ordnungsgemäßen Kernel-Parameter einspritzt. Entfernung kann durch Entfernen der Datei erfolgen.

**Installierte Datei**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Schließt gewaltsam eine speicherhungrige oder leckende Anwendung bei extremem Speicher- und Swap-Druck, vermeidet eine 'Out of Memory'-Situation, auf die Linux-Systeme bekanntermaßen schlecht reagieren, da das heuristische Scannen, das vom Kernel durchgeführt wird, um zu entscheiden, welcher Prozess geschlossen werden soll, mehrere Stunden dauern kann.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `earlyoom`

**Angewendete benutzerdefinierte Einstellung**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Zeigt btrfs-Snapshots in Ihrem GRUB-Boot-Menü an, perfekt, um einen vorherigen Snapshot auszuwählen, falls Sie ein defektes System wiederherstellen müssen. Geklont und installiert von seinem offiziellen [Repository](https://github.com/Antynea/grub-btrfs); dann werden benutzerdefinierte Einstellungen angewendet. Benötigt `grub` und wird nicht fortfahren, wenn `grub` nicht in Ihrem System gefunden wird. Entfernung sollte ihrer Dokumentation folgen und kann nicht über LinuxToys durchgeführt werden.

**Installierte oder aktualisierte Pakete**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Angewendete benutzerdefinierte Einstellungen**
- Setzt eine Standard-'root' Snapper-Konfiguration mit den folgenden Änderungen von Snapper-Standards:
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
Es aktiviert dann `snapper-boot.timer` und `snapper-cleanup.timer` systemd-Services.

### iNet Wireless Daemon

Ein drahtloser Netzwerk-Daemon von Intel, der bessere Gesamtleistung und Latenz als der Standard `wpa_supplicant` hat, jedoch möglicherweise nicht mit bestimmten Enterprise-Netzwerken kompatibel ist.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `iwd`

**Angewendete benutzerdefinierte Einstellungen**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Deaktiviert `wpa_supplicant` systemd-Service.

### LucidGlyph

Installiert mit dem offiziellen Skript von seinem [Repository](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Ändert den Standard-GPU-Governor zu `ondemand` (`powersave` ist der Standard für die meisten Distributionen), macht CPU-Frequenzen reaktiver und erhöht System-Reaktionsfähigkeit und Leistung bei einem leichten durchschnittlichen Stromverbrauchsanstieg. Nicht empfohlen für Laptops wegen ihrer begrenzten thermischen Ableitungsfähigkeiten.

**Angewendete benutzerdefinierte Einstellungen**
- Für *Intel* CPUs verhindert der `intel_pstate` Treiber die Verwendung des `ondemand` Governors und muss zuerst deaktiviert werden:
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- Erstellt und aktiviert einen neuen systemd-Service: `/etc/systemd/system/set-ondemand-governor.service`
```
[Unit]
Description=Set CPU governor to ondemand
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/bin/bash -c 'for cpu in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do echo ondemand > "$cpu" 2>/dev/null || true; done'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

### Power Optimizer

Installiert `power-options`, um Energieeinstellungen intuitiv und sehr detailliert über eine GTK-Schnittstelle über sein offizielles Skript oder über das [leo/power-options COPR Repository](https://copr.fedorainfracloud.org/coprs/leo/power-options) zu verwalten. Beinhaltet sein Tray-Symbol. Entfernung sollte ihrer Dokumentation folgen und kann nicht über LinuxToys durchgeführt werden, außer für Atomic Fedora-Benutzer, die es entfernen können, indem sie einfach das `power-options` Paket entfernen.

**Installierte oder aktualisierte Pakete**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): `gtk4-devel libadwaita-devel power-options`

### Psycachy Kernel

Ein modifizierter Linux-Kernel, der viele von CachyOS's Kernel-Patches beinhaltet, die getestet und als sicher für Debian/Ubuntu-basierte Systeme befunden wurden, gepflegt von Psygreg. Nicht verfügbar für andere Betriebssysteme. Heruntergeladen und installiert von seinem [offiziellen Repository's](https://github.com/psygreg/linux-psycachy) neuesten Releases.

**Installierte oder aktualisierte Pakete**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

Ein Patch zur Shell-Login-Konfigurationsdatei, der eine größere Shader-Cache-Größe für jede GPU ermöglicht, eliminiert Stottern und FPS-Drops in mehreren modernen Spielen. Erinnerung: es wird nicht den gesamten Platz einnehmen, es sei denn, es braucht ihn wirklich. Kann rückgängig gemacht werden, indem einfach die angehängten Zeilen zu `.bash_profile`, `.profile` oder `.zshrc` entfernt werden.

**Angewendete benutzerdefinierte Einstellungen**
- *AMD* und *Intel* GPUs
```
# enforce RADV vulkan implementation for AMD GPUs
export AMD_VULKAN_ICD=RADV

# increase AMD and Intel cache size to 12GB
export MESA_SHADER_CACHE_MAX_SIZE=12G
```
- *Nvidia* GPUs
```
# increase Nvidia shader cache size to 12GB
export __GL_SHADER_DISK_CACHE_SIZE=12000000000
```

### OpenSUSE SELinux Policy Fix

Behebt ein Problem, bei dem SELinux verhindert, dass etwas über WINE/Proton auf OpenSUSE läuft. Kann rückgängig gemacht werden, indem derselbe Befehl mit `0` als boolescher Wert anstelle von `1` verwendet wird.

**Angewendete benutzerdefinierte Einstellungen**
```
setsebool -P selinuxuser_execmod 1
```

### Swapfile Creator

Erstellt eine 8GB-Swapfile, entweder bei `/swapfile` oder `/home/swapfile` (`/home/swap/swapfile` für btrfs-Dateisysteme). Beinhaltet die notwendigen Anpassungen, damit die Swapfile korrekt in btrfs-Dateisystemen funktioniert, vermeidet eine Flut von Snapshots.

**Entfernung**
```
sudo swapoff SWAPFILE_PATH
sudo rm -rf SWAPFILE_PATH
```
Dann entfernen Sie den Swapfile-Eintrag aus `/etc/fstab`.

### Firewall Setup

Installiert die erforderlichen Pakete, wendet dann vernünftige Standards an, die ideal für die meisten Benutzer sind.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `ufw gufw`

**Angewendete benutzerdefinierte Einstellungen**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Installiert die Anwendung von Flathub, wendet die erforderlichen `udev` Konfigurationsdateien an, damit sie bei `/etc/udev/rules.d` funktioniert, zeigt dann Dokumentation über unterstützte Geräte in Ihrem Browser an. Die Konfigurationsdateien werden von seinem [offiziellen GitHub-Repository](https://github.com/berarma/oversteer) bezogen.

### DaVinci Resolve

Bietet Installation über [DaVinciBox](https://github.com/zelikos/davincibox) folgend Standard-Abhängigkeiten und Verfahren dafür oder native Installation über benutzerdefinierte Verfahren. Die *Studio* Version benötigt eine von Blackmagic Design gekaufte Lizenz. Entfernung kann durch Nicht-Exportieren der App-Verknüpfungen und Löschen der Distrobox für *DaVinciBox* gemäß den Anweisungen in seinem Repository erfolgen; Verwendung des Deinstallationsprogramms aus dem Anwendungsmenü auf Fedora/OpenSUSE; oder einfach Entfernen des Pakets über Ihren Paketmanager in anderen Systemen.

**Installierte oder aktualisierte Pakete für native Installation**
- Arch: `davinci-resolve` oder `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` und `davinci-resolve` oder `davinci-resolve-studio`

### Active Directory

Installiert alle Pakete, die notwendig sind, um die Integration in Active Directory-Domänen zu ermöglichen.

**Installierte oder aktualisierte Pakete**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Cockpit Server

Installiert `cockpit` aus Debian-Backports oder Standard-Repositories. Atomic Fedora-Systeme benötigen zusätzliche Pakete. Führt danach die notwendigen Firewall-Konfigurationen für Fedora und OpenSUSE durch, um den Zugriff von einem *Cockpit Client* zu ermöglichen.

**Installierte oder aktualisierte Pakete**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Angewendete benutzerdefinierte Einstellungen**
- Aktiviert `cockpit.socket` systemd-Service
- Für Fedora:
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- Für OpenSUSE:
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

Beschafft alle notwendigen Abhängigkeiten und installiert `waydroid` aus den Repositories Ihrer Distribution oder seinem eigenen Repository speziell für Debian/Ubuntu. Initialisiert dann den Container, installiert Android mit vernünftigen Standards und Unterstützung für den ***Google Play Store*** aktiviert. Optional verwendet es [waydroid_scripts](https://github.com/casualsnek/waydroid_script), um ARM-Übersetzungsfähigkeiten mit *libndk* für AMD oder *libhoudini* für Intel-Prozessoren zu installieren.

**Installierte oder aktualisierte Pakete**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Andere: `waydroid`

**Mit ARM-Übersetzungen**
- Arch: `python-pip`
- Andere: `python3-pip`

### OpenRGB

Installiert die Hauptanwendung von Flathub, beschafft dann die udev-Regeln, damit es von seinem [offiziellen Repository](https://openrgb.org/releases) oder von *RPMFusion* auf Fedora funktioniert.

**Installierte oder aktualisierte Pakete**
- Fedora: `openrgb-udev-rules`

### OpenRazer

Installiert es mit dem `openrazer-meta` Metapaket von seinen [offiziellen Repositories](https://openrazer.github.io/), zusammen mit seiner GUI *Polychromatic* von Flathub; oder für Fedora Atomic (`rpm-ostree`) Systeme von *Universal Blue*'s Kernel-Module-Repository. Für Universal Blue-Systeme installiert mit dem Skript, das von `ujust` bereitgestellt wird.

**Installierte oder aktualisierte Pakete**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Andere: `openrazer-meta`

### Automatische Updates für RPM-OSTree

Aktiviert die automatischen Updates von `rpm-ostree` im Stage-Modus, sodass Ihre Arbeit niemals unterbrochen wird. Sie werden stillschweigend heruntergeladen und zu einem neuen Deployment gemacht, das angewendet wird, wenn Sie sich entscheiden, Ihr System neu zu starten. Kann durch Deaktivierung des `rpm-ostree-automatic.timer` systemd-Dienstes rückgängig gemacht werden.

**Angewendete benutzerdefinierte Einstellungen**
- hinzugefügt zu `/etc/rpm-ostreed.conf`
```
[Daemon]
AutomaticUpdatePolicy=stage
```
- aktiviert den `rpm-ostree-automatic.timer` systemd-Dienst

### Nerd Fonts

Ruft Daten zu Schriftarten ab, die von [NerdFonts](https://www.nerdfonts.com) verfügbar sind, und zeigt sie zur Installation an. Die ausgewählte Schriftart wird bei `$HOME/.local/share/fonts` installiert und kann durch einfaches Löschen der hinzugefügten Dateien entfernt werden.

### Lazyman

Installiert den *Lazyman*-Konfigurationsmanager für *NeoVim* zusammen mit einer Konfiguration der Wahl des Benutzers. Kann durch Löschen seines Ordners entfernt werden.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `neovim git`

**Zusätzlich installierte Dateien**
- Verzeichnis: `$HOME/.config/nvim-Lazyman`

### Starship

Verwendet das offizielle Skript von [Starship](https://starship.rs) für Installation oder Aktualisierung. Kann rückgängig gemacht werden, indem die hinzugefügte Zeile entfernt wird, um es in Ihrer `.bashrc`, `.zshrc` oder ähnlichen Konfigurationsdatei für Ihre Shell zu aktivieren.

**Angewendete benutzerdefinierte Einstellungen**
- hinzugefügt zu `~/.bashrc`
```
eval "$(starship init bash)"
```

### Oh My ZSH

Verwendet das offizielle Skript von [Oh My ZSH](https://ohmyz.sh) für Installation oder Aktualisierung. Kann rückgängig gemacht werden, indem die Zeile entfernt wird, die es aus Ihrer `.zshrc` lädt.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `zsh`

## Repository Installer

### Brew
Installiert über sein offizielles Installationsskript.

### Cargo
Installiert über sein offizielles Installationsskript von RustUp.

### Chaotic-AUR
Installiert gemäß ihrer Dokumentation mit Timing-Anpassungen, um Fehler zu vermeiden, die durch zu schnelles Senden von Befehlen an pacman verursacht werden.

### Flathub
Installiert `flatpak` und fügt das Flathub-Repository sowohl auf System- als auch auf Benutzerebene hinzu.

**Installierte oder aktualisierte Pakete**
- Alle Systeme: `flatpak`

### Pip
Installiert über `python-pip` (Arch) oder `python3-pip` (andere Systeme) Pakete aus Standard-Repositories.

### RPMFusion
Installiert gemäß ihrer Dokumentation mit einer spezifischen Iteration für Fedora Atomic (`rpm-ostree`-basierte) Systeme.

## Optimierte Standards

Ein Ein-Klick-Setup, das eine kuratierte, stabile Auswahl von Optimierungen für Ihr System installiert. Es wird keine Features installieren, die nicht relevant oder bereits in Ihrem Rechner vorhanden sind.

#### Enthaltene Features

**Leistung**
- EarlyOOM
- Shader Booster
- Split-lock Mitigation Disabler
- *CachyOS* systemd-Konfigurationsdateien - getestet und für Stabilität gefiltert, sodass die Leistung nicht auf Kosten eines Kompromisses kommt

**Lebensqualität**
- FFMPEGThumbnailer
- Fedora/OpenSUSE Streaming-Codecs
- `/etc/sudoers` Dateikorrektur für Debian - behebt ein Problem, das den Benutzer daran hindert, `sudo` nach der Installation vom Standard-Installationsimage zu verwenden
- Gnome-Timeout-Fix - erhöht Timeout-Toleranz, um übermäßige 'Programm reagiert nicht' Eingabeaufforderungen zu stoppen
- Kernel-Modul-Signierung für RPM-OSTree
- automatische Updates-Aktivierung für `rpm-ostree` - im Stufen-Modus, sodass Ihre Arbeit nie unterbrochen wird
- (optional) Hardware-Beschleunigung für Flatpaks

**Energieprofile**
- *Laptop*: Power Optimizer
- *Desktop*: CPU ondemand

## Psygreg's Picks

Eine kuratierte Auswahl von Apps, um Ihr Gaming-Leben auf Linux einfacher als je zuvor zu machen, einen Klick entfernt.

#### Enthaltene Features

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
- Extension Manager (nur für *Gnome* Desktops)
- Gnome Tweaks (nur für *Gnome* Desktops)