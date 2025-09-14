# Base de Connaissance

## Directives de Base des Fonctionnalités LinuxToys

- Les fonctionnalités ne seront disponibles que dans les systèmes où elles sont compatibles *et* pertinentes.
- Toutes les fonctionnalités et ressources de l'application doivent toujours suivre le principe **KISS** (*Keep It Simple, Stupid*) - elles doivent être faciles à comprendre et à utiliser grâce à leurs étiquettes et descriptions rapides.
- Les fonctionnalités doivent être conçues de manière à fonctionner de manière **optimale** pour l'utilisateur.
- L'interaction utilisateur est limitée aux invites `zenity` pour éviter les imprévisibilités et assurer la fiabilité.
- Les Flatpaks doivent être utilisés autant que possible pour leur **cohérence** grâce aux runtimes flatpak et leur **sécurité** grâce au contrôle granulaire des permissions.

## Installé comme paquets natifs

Depuis les dépôts système par défaut, ou avec des dépôts ajoutés par LinuxToys, et aucun autre changement n'est effectué.

### Dépôts par défaut
- Java OpenJDK (n'importe quelle version)
- Maven
- NeoVim
- Pilote WiFi Broadcom (disponible pour Fedora/Arch uniquement)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch ; les autres l'ont depuis Flathub)
- F3 - Fight Flash Fraud (ouvre aussi sa documentation dans votre navigateur après installation)
- Wireguard

### Dépôts ajoutés
- Visual Studio Code : depuis [le dépôt officiel de Microsoft.](https://packages.microsoft.com)
- .NET SDK : depuis [le dépôt officiel de Microsoft](https://packages.microsoft.com), uniquement dans OpenSUSE et Debian. Les autres systèmes l'ont installé depuis les dépôts par défaut.
- Sublime Text : depuis [ses dépôts officiels.](https://download.sublimetext.com)
- Unity Hub : depuis [le dépôt officiel d'Unity.](https://hub.unity3d.com/linux/repos) Disponible uniquement dans les systèmes officiellement supportés par Unity.
- Pilotes Nvidia : depuis [le dépôt officiel de Nvidia](https://developer.download.nvidia.com/compute/cuda/repos) dans Debian ou *RPMFusion* dans Fedora. Les autres systèmes l'ont installé depuis les dépôts par défaut.
- btrfs-Assistant : depuis [Chaotic-AUR](https://aur.chaotic.cx) sur Arch. Les autres systèmes l'ont installé depuis les dépôts par défaut. Inclut `snapper` depuis les dépôts par défaut sur tous les systèmes.
- Preload : depuis [Chaotic-AUR](https://aur.chaotic.cx) sur Arch, ou [dépôt COPR elxreno/preload](https://copr.fedorainfracloud.org/coprs/elxreno/preload) sur Fedora. Les autres systèmes l'ont installé depuis les dépôts par défaut.
- Touchegg : depuis son dépôt PPA officiel, ou [dépôt GitHub](https://github.com/JoseExposito/touchegg) pour Ubuntu et Debian respectivement. Les autres systèmes l'ont installé depuis les dépôts par défaut. X11 uniquement.
- Gamescope : depuis *Multilib* sur Arch, ou *RPMFusion* sur Fedora. Les autres systèmes l'ont installé depuis les dépôts par défaut.
- Steam : depuis *Multilib* sur Arch, ou *RPMFusion* sur Fedora. Les autres systèmes l'ont installé depuis Flathub.
- Topgrade : depuis *Pip*.
- Webmin : depuis son [dépôt GitHub officiel](https://github.com/webmin/webmin).
- Arch-Update : depuis [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP : depuis [le dépôt officiel de Cloudflare](https://pkg.cloudflareclient.com/).
- Solaar : depuis son dépôt PPA officiel sur Ubuntu. Les autres systèmes l'ont installé depuis les dépôts par défaut.
- IVPN : depuis ses [dépôts officiels](https://repo.ivpn.net/stable).
- Mullvad VPN : depuis ses [dépôts officiels](https://repository.mullvad.net) ou [Chaotic-AUR](https://aur.chaotic.cx) sur Arch.
- NordVPN : depuis son [dépôt officiel](https://downloads.nordcdn.com/apps) ou [Chaotic-AUR](https://aur.chaotic.cx) sur Arch.

### Autres
- Heroic Games Launcher : depuis son [dépôt GitHub officiel](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) pour Fedora/Arch. Les autres systèmes l'ont installé depuis Flathub.
- LSFG-VK : depuis son [dépôt GitHub officiel](https://github.com/PancakeTAS/lsfg-vk). Inclut les runtimes flatpak. Nécessite Lossless Scaling pour Windows.
- Figma : installé via l'installateur AppImage depuis [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN : installé via son installateur officiel basé sur AppImage.
- Windscribe VPN : depuis ses [dépôts officiels](https://windscribe.com/install/desktop).

## Installé comme flatpaks

Depuis flathub, ou avec des dépôts ajoutés par LinuxToys, et aucun autre changement n'est effectué. Les flatpaks au niveau système ne sont utilisés que lorsque c'est strictement nécessaire.

### Niveau utilisateur
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (inclut Mangohud, paquet installé nativement)
- Mangojuice (inclut Mangohud, paquet installé nativement)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (nécessite l'app installée dans le dispositif VR - suivre les instructions au premier lancement)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (optionnellement patche les fichiers dans `$HOME/.config` et `$HOME/.local` avec [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
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
- Distroshelf (inclut les paquets `podman` et `distrobox` installés nativement)
- Flatseal
- Handbrake
- Mission Center
- OBS Studio (inclut le plugin [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture))
- QPWGraph
- Warehouse
- StreamController
- LibreWolf
- Mullvad Browser
- Proton VPN
- Surfshark
- Ungoogled Chromium
- Gear Lever

#### Dépôts ajoutés

- GeForce NOW : depuis son dépôt officiel fourni par *Nvidia*

### Niveau système

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper (inclut `ratbagd` pour Debian/Ubuntu ou `libratbag` pour les autres, paquets installés nativement)
- Accélération Matérielle pour Flatpaks (ffmpeg-full pour les runtimes flatpak actuellement supportés)

## Procédures Personnalisées

Nécessitent une procédure d'installation personnalisée ou des ajustements spécifiques pour fonctionner de manière optimale, qui sont implémentés par LinuxToys. Offrent généralement aussi la suppression si déjà installés, sauf si ce n'est pas nécessaire (si supprimer le flatpak ou paquet principal annulera les autres changements) ou si les instructions de suppression sont données ici.

### Docker

Installe les dépôts Docker officiels (sauf pour Arch Linux et OpenSUSE, qui n'en auront pas besoin) et tous les paquets nécessaires depuis là via le gestionnaire de paquets de votre système, puis ajoute votre utilisateur au groupe d'utilisateurs `docker` et installe Portainer CE, qui fonctionne constamment en arrière-plan puisque son but est d'être un tableau de bord Docker et il utilise des ressources négligeables de la machine.

**Paquets Installés ou Mis à Jour**
- Arch:`docker docker-compose curl dialog git iproute2 libnotify`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin curl dialog git iproute libnotify`
- OpenSUSE:`docker docker-compose curl dialog git iproute2 libnotify-tools`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin curl dialog git iproute2 libnotify-bin`

**Installation de Portainer CE**
```
sudo docker volume create portainer_data
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

**Godot** et **GodotSharp** sont installés via une procédure personnalisée, car Godot ne fournit pas de paquets standard. *GodotSharp* inclut l'installation du **.NET SDK** comme également décrit dans cette documentation, requis pour ses fonctions.

- Emplacement des fichiers installés : `$HOME/.local/godot`
- Emplacement du raccourci du menu d'application : `$HOME/.local/share/applications`

### Jetbrains Toolbox

Télécharge la dernière version tar depuis le site officiel et l'installe via une procédure personnalisée, car JetBrains ne fournit que des AppImages autrement, qui sont notoirement peu fiables.

- Emplacement des fichiers installés : `$HOME/.local/jetbrains-toolbox`
- Emplacement du raccourci du menu d'application : `$HOME/.local/share/applications`

### Mise

Installe en utilisant le script d'installation officiellement fourni, puis suit sa documentation pour configurer l'autocomplétion, une fonctionnalité très désirée de celui-ci, pour les shells `bash`, `zsh` et `fish` ; et affiche sa documentation une fois terminé dans votre navigateur. Ne peut pas être utilisé avec les shells `zsh` sur les systèmes immutables (basés sur `rpm-ostree`) en raison des restrictions d'immutabilité. La suppression doit suivre leur documentation et ne peut pas être effectuée via LinuxToys.

### Node Version Manager (NVM)

Installe en utilisant le script d'installation officiellement fourni, ou via une configuration manuelle pour les distributions basées sur `rpm-ostree` puisque le script officiel ne fonctionne pas pour elles ; puis installe `yarn` via `npm` et affiche leur documentation dans votre navigateur. La suppression peut être effectuée en suivant leur documentation, ou simplement en supprimant `$HOME/.nvm` pour les systèmes basés sur `rpm-ostree`.

**Paquets Installés ou Mis à Jour**
- **Tous les systèmes** : `nodejs npm`
- **Depuis NPM** : `yarn`

### PyEnv

Installe toutes les dépendances requises, installe *PyEnv* en utilisant son script officiel, puis configure son chemin dans vos fichiers de profil `bash` et `zsh` et affiche leur documentation dans votre navigateur. La suppression doit suivre leur documentation et ne peut pas être effectuée via LinuxToys.

**Paquets Installés ou Mis à Jour**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

Installe en utilisant leur script d'installation officiel. Peut être supprimé via le même script.

### Signature de Module Noyau pour RPM-OSTree

Définit une **MOK** (Machine Owner Key) qui est générée aléatoirement et unique à votre machine ; puis installe [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys) pour signer les modules noyau avec elle à l'avenir. Requis pour faire fonctionner les pilotes de modules noyau *Nvidia*, *VirtualBox* et autres avec Secure Boot activé. Il est automatiquement déclenché lors de l'installation des pilotes Nvidia sur les systèmes immutables basés sur `rpm-ostree` si Secure Boot est activé au moment de l'installation.

### Radeon Open Compute (ROCm)

Installe tous les paquets ROCm et outils de diagnostic requis pour qu'il fonctionne correctement et ajoute votre utilisateur aux groupes d'utilisateurs `render` et `video`, requis pour rendre `/dev/kfd` - qui est requis par ROCm - accessible sans root.

**Paquets Installés ou Mis à Jour**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Pilote Realtek RTL8821CE

Installe [Pilote RTL8821CE par Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) et toutes ses dépendances, remplaçant et mettant sur liste noire le pilote RTW8821CE par défaut qui vient avec le noyau, qui ne fonctionne pas correctement ou pas du tout avec certains périphériques.

**Paquets Installés ou Mis à Jour**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Installe et active une implémentation plus récente et plus rapide pour OpenCL, pour les cartes qui ne sont pas supportées par Intel Compute Runtime, ROCm ou CUDA.

**Paquets Installés ou Mis à Jour**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Autres Changements**

**Ajoute à `/etc/environment` :**
- Pour les GPU *Intel*
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- Pour les GPU *AMD*
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

Installe toutes les dépendances requises, puis clone son [dépôt](https://github.com/atar-axis/xpadneo.git) et l'installe depuis le script officiel.

**Paquets Installés ou Mis à Jour**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Assistant de Commande Distrobox

Installe les fichiers requis pour rediriger les commandes depuis les distroboxes vers l'hôte si la commande n'est pas trouvée dans la distrobox pour `bash` et `zsh` ; puis les source dans `.bashrc` et `.zshrc`. La suppression peut être effectuée simplement en supprimant le dossier avec les fichiers.

**Emplacement des fichiers installés**
`$HOME/.local/distrobox-handler`

### Codecs de Streaming pour Fedora/OpenSUSE

Installe les codecs requis pour les médias en streaming avec accélération matérielle sur ces systèmes d'exploitation. Installera également RPMFusion sur Fedora s'il n'est pas déjà installé, puisque les paquets requis ne sont pas fournis dans les dépôts par défaut.

**Paquets Installés ou Mis à Jour**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE:`opi` et, depuis opi, `codecs`

### Microsoft CoreFonts

Télécharge les fichiers depuis [SourceForge](http://downloads.sourceforge.net/corefonts), puis utilise `cabextract` pour extraire les installateurs de polices et installe les polices dans `$HOME/.local/share/fonts`. La suppression peut être effectuée en supprimant les dossiers CoreFonts de `$HOME/.local/share/fonts`.

**Paquets Installés ou Mis à Jour**
- Tous les systèmes : `cabextract`

### Désactivateur de Mitigation Split-lock

Désactive la mitigation split-lock, qui a été faite pour imposer de bonnes pratiques de développement sur Linux, mais résulte en une perte de performance significative dans les applications plus anciennes et plusieurs jeux, spécialement de *Playstation Studios*, qui ne sont pas faits en tenant compte de Linux. Puisque ce n'est pas une fonctionnalité de sécurité, il est sûr de la désactiver. Ceci est fait par un fichier `99-splitlock.conf` qui injecte le paramètre noyau approprié. La suppression peut être effectuée en supprimant le fichier.

**Fichier installé**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Force la fermeture d'une application gourmande en mémoire ou qui fuit en cas de pression extrême de mémoire et de swap, évitant une situation 'out of memory', à laquelle les systèmes Linux réagissent notoirement mal, car le balayage heuristique effectué par le noyau pour décider quel processus fermer peut prendre plusieurs heures.

**Paquets Installés ou Mis à Jour**
- Tous les systèmes : `earlyoom`

**Paramètre personnalisé appliqué**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Affiche les snapshots btrfs dans votre menu de démarrage GRUB, parfait pour sélectionner un snapshot précédent au cas où vous auriez besoin de restaurer un système cassé. Cloné et installé depuis son [dépôt](https://github.com/Antynea/grub-btrfs) officiel ; puis des paramètres personnalisés sont appliqués. Nécessite `grub`, et ne procédera pas si `grub` n'est pas trouvé dans votre système. La suppression doit suivre leur documentation et ne peut pas être effectuée via LinuxToys.

**Paquets Installés ou Mis à Jour**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Paramètres personnalisés appliqués**
- Définit une configuration snapper 'root' par défaut, avec les changements suivants par rapport aux défauts de snapper :
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
Il active ensuite les services systemd `snapper-boot.timer` et `snapper-cleanup.timer`.

### iNet Wireless Daemon

Un daemon de réseau sans fil fait par Intel, qui a de meilleures performances globales et latence que le `wpa_supplicant` par défaut, cependant peut ne pas être compatible avec certains réseaux d'entreprise.

**Paquets Installés ou Mis à Jour**
- Tous les systèmes : `iwd`

**Paramètres personnalisés appliqués**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Désactive le service systemd `wpa_supplicant`.

### LucidGlyph

Installé en utilisant le script officiel depuis son [dépôt](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Change le gouverneur GPU par défaut en `ondemand` (`powersave` est le défaut pour la plupart des distributions), rendant les fréquences CPU plus réactives et augmentant la réactivité et les performances du système, avec une légère augmentation moyenne de consommation d'énergie. Non recommandé sur les ordinateurs portables pour leurs capacités limitées de dissipation thermique.

**Paramètres personnalisés appliqués**
- Pour les CPU *Intel*, le pilote `intel_pstate` empêche l'utilisation du gouverneur `ondemand` et doit être désactivé en premier :
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- Crée et active un nouveau service systemd : `/etc/systemd/system/set-ondemand-governor.service`
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

Installe `power-options` pour gérer les paramètres d'alimentation de manière intuitive et en grand détail via une interface GTK via son script officiel ou via le [dépôt COPR leo/power-options](https://copr.fedorainfracloud.org/coprs/leo/power-options). Inclut son icône de barre d'état. La suppression doit suivre leur documentation et ne peut pas être effectuée via LinuxToys, sauf pour les utilisateurs Atomic Fedora, qui peuvent le supprimer en supprimant simplement le paquet `power-options`.

**Paquets Installés ou Mis à Jour**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): `gtk4-devel libadwaita-devel power-options`

### Noyau Psycachy

Un noyau Linux modifié incorporant de nombreux patches noyau de CachyOS qui ont été testés et jugés sûrs à utiliser pour les systèmes basés sur Debian/Ubuntu, maintenu par Psygreg. Non disponible pour d'autres systèmes d'exploitation. Téléchargé et installé depuis les dernières versions de son [dépôt officiel](https://github.com/psygreg/linux-psycachy).

**Paquets Installés ou Mis à Jour**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

Un patch au fichier de configuration de connexion du shell qui active une taille de cache de shaders plus grande pour n'importe quel GPU, éliminant les bégaiements et chutes de FPS dans plusieurs jeux modernes. Rappel : il ne prendra pas tout l'espace à moins qu'il n'en ait vraiment besoin. Peut être annulé en supprimant simplement les lignes ajoutées à `.bash_profile`, `.profile` ou `.zshrc`.

**Paramètres personnalisés appliqués**
- GPU *AMD* et *Intel*
```
# enforce RADV vulkan implementation for AMD GPUs
export AMD_VULKAN_ICD=RADV

# increase AMD and Intel cache size to 12GB
export MESA_SHADER_CACHE_MAX_SIZE=12G
```
- GPU *Nvidia*
```
# increase Nvidia shader cache size to 12GB
export __GL_SHADER_DISK_CACHE_SIZE=12000000000
```

### Correctif de Politique SELinux OpenSUSE

Corrige un problème où SELinux empêche quoi que ce soit de fonctionner via WINE/Proton sur OpenSUSE. Peut être annulé en utilisant la même commande avec `0` comme valeur booléenne au lieu de `1`.

**Paramètres personnalisés appliqués**
```
setsebool -P selinuxuser_execmod 1
```

### Créateur de Swapfile

Crée un swapfile de 8GB, soit à `/swapfile` ou `/home/swapfile` (`/home/swap/swapfile` pour les systèmes de fichiers btrfs). Inclut les ajustements nécessaires pour que le swapfile fonctionne correctement dans les systèmes de fichiers btrfs, évitant une inondation de snapshots.

**Suppression**
```
sudo swapoff CHEMIN_SWAPFILE
sudo rm -rf CHEMIN_SWAPFILE
```
Puis supprimez l'entrée swapfile de `/etc/fstab`.

### Configuration du Pare-feu

Installe les paquets requis, puis applique des défauts sensés qui sont idéaux pour la plupart des utilisateurs.

**Paquets Installés ou Mis à Jour**
- Tous les systèmes : `ufw gufw`

**Paramètres personnalisés appliqués**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Installe l'application depuis Flathub, applique les fichiers de configuration `udev` requis pour qu'elle fonctionne à `/etc/udev/rules.d`, puis affiche la documentation sur les périphériques supportés dans votre navigateur. Les fichiers de configuration sont obtenus depuis son [dépôt GitHub officiel](https://github.com/berarma/oversteer).

### DaVinci Resolve

Offre une installation via [DaVinciBox](https://github.com/zelikos/davincibox) suivant des dépendances et procédures standard pour cela, ou une installation native via des procédures personnalisées. La version *Studio* nécessite une licence achetée chez Blackmagic Design. La suppression peut être effectuée en désexportant les raccourcis d'application et en effaçant la distrobox pour *DaVinciBox* en suivant les instructions dans son dépôt ; en utilisant le désinstallateur depuis le menu d'applications sur Fedora/OpenSUSE ; ou simplement en supprimant le paquet via votre gestionnaire de paquets dans d'autres systèmes.

**Paquets Installés ou Mis à Jour pour installation native**
- Arch: `davinci-resolve` ou `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` et `davinci-resolve` ou `davinci-resolve-studio`

### Active Directory

Installe tous les paquets nécessaires pour activer l'intégration dans les domaines Active Directory.

**Paquets Installés ou Mis à Jour**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Serveur Cockpit

Installe `cockpit` depuis les backports Debian ou les dépôts par défaut. Les systèmes Atomic Fedora nécessitent des paquets supplémentaires. Après, effectue les configurations de pare-feu nécessaires pour Fedora et OpenSUSE pour permettre d'y accéder depuis un *Client Cockpit*.

**Paquets Installés ou Mis à Jour**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Paramètres personnalisés appliqués**
- Active le service systemd `cockpit.socket`
- Pour Fedora :
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- Pour OpenSUSE :
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

Obtient toutes les dépendances nécessaires, et installe `waydroid` depuis les dépôts de votre distribution, ou son propre dépôt spécifiquement pour Debian/Ubuntu. Puis initialise le conteneur, installant Android avec des défauts sensés et le support pour ***Google Play Store*** activé. Optionnellement, il utilisera [waydroid_scripts](https://github.com/casualsnek/waydroid_script) pour installer des capacités de traduction ARM en utilisant *libndk* pour les processeurs AMD ou *libhoudini* pour les processeurs Intel.

**Paquets Installés ou Mis à Jour**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Autres : `waydroid`

**Avec traductions ARM**
- Arch: `python-pip`
- Autres : `python3-pip`

### OpenRGB

Installe l'application principale depuis Flathub, puis obtient les règles udev pour la faire fonctionner depuis son [dépôt officiel](https://openrgb.org/releases) ou depuis *RPMFusion* sur Fedora.

**Paquets Installés ou Mis à Jour**
- Fedora: `openrgb-udev-rules`

### OpenRazer

L'installe en utilisant le métapaquet `openrazer-meta` depuis ses [dépôts officiels](https://openrazer.github.io/), avec son GUI *Polychromatic* depuis Flathub ; ou, pour les systèmes Fedora Atomic (`rpm-ostree`), depuis le dépôt de modules noyau de *Universal Blue*. Pour les systèmes Universal Blue, installe en utilisant le script fourni par `ujust`.

**Paquets Installés ou Mis à Jour**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Autres : `openrazer-meta`

## Installateurs de Dépôt

### Brew
Installé via son script d'installation officiel.

### Cargo
Installé via son script d'installation officiel par RustUp.

### Chaotic-AUR
Installé en suivant leur documentation, avec des ajustements de timing pour éviter les erreurs causées par l'envoi de commandes trop rapidement à pacman.

### Flathub
Installe `flatpak` et ajoute le dépôt Flathub aux niveaux système et utilisateur.

**Paquets Installés ou Mis à Jour**
- Tous les systèmes : `flatpak`

### Pip
Installé via les paquets `python-pip` (Arch) ou `python3-pip` (autres systèmes) depuis les dépôts par défaut.

### RPMFusion
Installé en suivant leur documentation, avec une itération spécifique pour les systèmes Fedora Atomic (basés sur `rpm-ostree`).

## Défauts Optimisés

Une configuration en un clic qui installe une sélection organisée et stable d'optimisations pour votre système. Elle n'installera pas de fonctionnalités qui ne sont pas pertinentes ou déjà présentes dans votre machine.

#### Fonctionnalités Incluses

**Performance**
- EarlyOOM
- Shader Booster
- Désactivateur de Mitigation Split-lock
- Fichiers de configuration systemd *CachyOS* - testés et filtrés pour la stabilité, donc la performance ne vient pas au prix d'un compromis

**Qualité de Vie**
- FFMPEGThumbnailer
- Codecs de Streaming Fedora/OpenSUSE
- Correction du fichier `/etc/sudoers` pour Debian - corrige un problème rendant l'utilisateur incapable d'utiliser `sudo` après installation depuis l'image d'installation par défaut
- Correctif de timeout Gnome - augmente la tolérance de timeout pour arrêter les invites excessives 'le programme ne répond pas'
- Signature de Module Noyau pour RPM-OSTree
- activation des mises à jour automatiques pour `rpm-ostree` - en mode étape pour que votre travail ne soit jamais interrompu
- (optionnel) Accélération Matérielle pour Flatpaks

**Profils d'Alimentation**
- *Ordinateur portable* : Power Optimizer
- *Bureau* : CPU ondemand

## Sélections de Psygreg

Une sélection organisée d'applications pour rendre votre vie gaming sur Linux plus facile que jamais, à un clic.

#### Fonctionnalités Incluses

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
- Extension Manager (pour les bureaux *Gnome* uniquement)
- Gnome Tweaks (pour les bureaux *Gnome* uniquement)