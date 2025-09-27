# Knowledge Base

## Basic LinuxToys Feature Guidelines

- Features will only be made available in systems that they are compatible with *and* relevant on.
- All features and resources within the application must always follow the **KISS** (*Keep It Simple, Stupid*) principle - they must be easy to understand and utilize through their labels and quick descriptions.
- Features must be made in the way they will work **optimally** for the user.
- User interaction is limited to `zenity` prompts to avoid unpredictabilities and ensure reliability.
- Flatpaks should be used whenever possible for their **consistency** through flatpak runtimes and **security** through granular permission control. 

## Installed as native packages

From default system repositories, or having repositories added by LinuxToys, and no other changes are made.

### Default repositories
- Java OpenJDK (any version)
- Maven
- NeoVim
- Broadcom WiFi driver (available for Fedora/Arch only)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch; others have it from Flathub)
- F3 - Fight Flash Fraud (also opens its documentation on your browser after installed)
- Wireguard
- VLC
- Gnome Tweaks

### Added repositories
- Visual Studio Code: from [Microsoft's official repository.](https://packages.microsoft.com)
- .NET SDK: from [Microsoft's official repository](https://packages.microsoft.com), only in OpenSUSE and Debian. Other systems have it installed from default repositories.
- Sublime Text: from [its official repositories.](https://download.sublimetext.com)
- Unity Hub: from [Unity's official repository.](https://hub.unity3d.com/linux/repos) Only available in systems officialy supported by Unity.
- Nvidia Drivers: from [Nvidia's official repository](https://developer.download.nvidia.com/compute/cuda/repos) in Debian or *RPMFusion* in Fedora. Other systems have it installed from default repositories.
- btrfs-Assistant: from [Chaotic-AUR](https://aur.chaotic.cx) on Arch. Other systems have it installed from default repositories. Includes `snapper` from default repositories on all systems.
- Preload: from [Chaotic-AUR](https://aur.chaotic.cx) on Arch, or [elxreno/preload COPR repository](https://copr.fedorainfracloud.org/coprs/elxreno/preload) on Fedora. Other systems have it installed from default repositories.
- Touchegg: from its official PPA repository, or [GitHub repository](https://github.com/JoseExposito/touchegg) for Ubuntu and Debian respectively. Other systems have it installed from default repositories. X11-only.
- Gamescope: from *Multilib* on Arch, or *RPMFusion* on Fedora. Other systems have it installed from default repositories.
- Steam: from *Multilib* on Arch, or *RPMFusion* on Fedora. Other systems have it installed from Flathub.
- Topgrade: from *Pip*.
- Webmin: from its [official GitHub repository](https://github.com/webmin/webmin).
- Arch-Update: from [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP: from [Cloudflare's official repository](https://pkg.cloudflareclient.com/).
- Solaar: from its official PPA repository on Ubuntu. Other systems have it installed from default repositories.
- IVPN: from its [official repositories](https://repo.ivpn.net/stable).
- Mullvad VPN: from its [official repositories](https://repository.mullvad.net) or [Chaotic-AUR](https://aur.chaotic.cx) on Arch.
- NordVPN: from its [official repository](https://downloads.nordcdn.com/apps) or [Chaotic-AUR](https://aur.chaotic.cx) on Arch.
- Input Remapper: from [Chaotic-AUR](https://aur.chaotic.cx). Other systems have it installed from default repositories.

### Others
- Heroic Games Launcher: from its [official GitHub repository](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) for Fedora/Arch. Other systems have it installed from Flathub.
- LSFG-VK: from its [official GitHub repository](https://github.com/PancakeTAS/lsfg-vk). Includes flatpak runtimes. Requires Lossless Scaling for Windows.
- Figma: installed through the AppImage installer from [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN: installed through its official AppImage-based installer.
- Windscribe VPN: from its [official repositories](https://windscribe.com/install/desktop).

## Installed as flatpaks

From flathub, or having repositories added by LinuxToys, and no other changes are made. System-level flatpaks are only used when strictly necessary.

### User-level
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (includes Mangohud, natively installed package)
- Mangojuice (includes Mangohud, natively installed package)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (requires app installed in the VR device - follow instructions at first launch)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (optionally patches files in `$HOME/.config` and `$HOME/.local` with [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
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
- Distroshelf (includes `podman` and `distrobox` natively installed packages)
- Flatseal
- Handbrake
- Mission Center
- OBS Studio (includes [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture) plugin)
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

#### Added repositories

- GeForce NOW: from its official repository provided by *Nvidia*

### System-level

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper (includes `ratbagd` for Debian/Ubuntu or `libratbag` for others, natively installed packages)
- Hardware Acceleration for Flatpaks (ffmpeg-full for the currently supported flatpak runtimes)

## Custom Procedures

Require a custom installation procedure or specific tweaks to get them to work optimally, that are implemented by LinuxToys. Usually also offer removal if already installed, unless that is not necessary (if removing the main flatpak or package will undo the other changes) or removal instructions are given here.

### Docker

Installs the official Docker repositories (except for Arch Linux and OpenSUSE, that won't need them) and all packages needed from there through your system's package manager, then adds your user to the `docker` usergroup.

**Packages Installed or Updated**
- Arch:`docker docker-compose`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
- OpenSUSE:`docker docker-compose`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

### Portainer CE

Installs a Portainer CE container on Docker following instructions from its documentation. It runs constantly in the background since its purpose is to be a Docker dashboard from a browser UI and uses negligible resources from the machine. Requires Docker properly set up with rootless use by LinuxToys itself or manually.

**Installation Procedure:**
```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

Both **Godot** and **GodotSharp** are installed through a custom procedure, as Godot doesn't provide standard packages. *GodotSharp* includes the installation of **.NET SDK** as also described in this documentation, required for its functions.

- Installed files location: `$HOME/.local/godot`
- App menu shortcut location: `$HOME/.local/share/applications`

### Jetbrains Toolbox

Downloads the latest tarballed release from the official website and installs it through a custom procedure, as JetBrains only provides AppImages otherwise, which are knowingly unreliable.

- Installed files location: `$HOME/.local/jetbrains-toolbox`
- App menu shortcut location: `$HOME/.local/share/applications`

### Mise

Installs using the officially provided installation script, then follows its documentation to set up autocompletions, a much desired feature of it, for `bash`, `zsh` and `fish` shells; and displays its documentation when finished in your browser. It cannot be used with `zsh` shells on immutable (`rpm-ostree`-based systems) due to immutability restrictions. Removal should follow their documentation and cannot be done through LinuxToys.

### Node Version Manager (NVM)

Installs using the officially provided installation script, or through a manual setup for `rpm-ostree`-based distributions since the official script doesn't work for them; then installs `yarn` through `npm` and displays their documentation in your browser. Removal can be done following their documentation, or by simply removing `$HOME/.nvm` for `rpm-ostree`-based systems.

**Packages Installed or Updated**
- **All systems**: `nodejs npm`
- **From NPM**: `yarn`

### PyEnv

Installs all required dependencies, installs *PyEnv* using its official script, then sets up its path into your `bash` and `zsh` profile files and displays their documentation in your browser. Removal should follow their documentation and cannot be done through LinuxToys.

**Packages Installed or Updated**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`


### Tailscale

Installs using their official installation script. Can be removed through the same script.

### Kernel Module Signing for RPM-OSTree

Sets a **MOK** (Machine Owner Key) that is generated randomly and unique to your machine; then installs [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys) to sign kernel modules with it in the future. Required to make *Nvidia*, *VirtualBox* and other kernel module drivers work with Secure Boot enabled. It's automatically triggered when installing Nvidia drivers on `rpm-ostree`-based immutable systems if Secure Boot is enabled at the time of installation.

### Radeon Open Compute (ROCm)

Installs all ROCm packages and diagnostic tools required for it to work properly and adds your user to the `render` and `video` usergroups, required to make `/dev/kfd` - that is required by ROCm - accessible without root.

**Packages Installed or Updated**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Realtek RTL8821CE Driver

Installs [RTL8821CE Driver by Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) and all its dependencies, replacing and blacklisting the default RTW8821CE driver that comes with the kernel, that doesn't work properly or at all with some devices. 

**Packages Installed or Updated**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Installs and enables a newer, faster implementation for OpenCL, for cards that are not supported by Intel Compute Runtime, ROCm or CUDA. 

**Packages Installed or Updated**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Other Changes**

**Appends to `/etc/environment`:**
- For *Intel* GPUs
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- For *AMD* GPUs
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

Installs all required dependencies, then clones its [repository](https://github.com/atar-axis/xpadneo.git) and installs it from the official script. 

**Packages Installed or Updated**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Distrobox Command Helper

Installs files required to redirect commands from distroboxes to the host if the command is not found within the distrobox for `bash` and `zsh`; then sources them on `.bashrc` and `.zshrc`. Removal can be done simply deleting the folder with the files.

**Installed files location**
`$HOME/.local/distrobox-handler`

### Streaming Codecs for Fedora/OpenSUSE

Install the codecs required for streaming media with hardware acceleration on those operating systems. It will also install RPMFusion on Fedora if not already installed, since the packages required are not provided in default repositories.

**Packages Installed or Updated**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE:`opi` and, from opi, `codecs`

### Microsoft CoreFonts

Downloads the files from [SourceForge](http://downloads.sourceforge.net/corefonts), then uses `cabextract` to extract the font installers and installs the fonts in `$HOME/.local/share/fonts`. Removal can be done removing the CoreFonts folders from `$HOME/.local/share/fonts`.

**Packages Installed or Updated**
- All systems: `cabextract`

### Split-lock Mitigation Disabler

Disables split-lock mitigation, which was done to enforce good development practices on Linux, but results in significant performance loss in older applications and several games, specially from *Playstation Studios*, which are not made taking Linux into consideration. Since it is not a security feature, it's safe to disable. This is done by a `99-splitlock.conf` file that injects the proper kernel parameter. Removal can be done by removing the file.

**Installed file**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Force-closes a memory-hungry or leaking application in case of extreme memory and swap pressure, avoiding an 'out of memory' situation, which Linux systems knowingly react poorly to, as the heauristic scanning performed by the kernel to decide which process to close can take several hours.

**Packages Installed or Updated**
- All systems: `earlyoom`

**Custom setting applied**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Displays btrfs snapshots in your GRUB boot menu, perfect to select a previous snapshot in case you need to restore a broken system. Cloned and installed from its official [repository](https://github.com/Antynea/grub-btrfs); then custom settings are applied. Requires `grub`, and will not go ahead if `grub` is not found in your system. Removal should follow their documentation and cannot be done through LinuxToys.

**Packages Installed or Updated**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Custom settings applied**
- Sets a default 'root' snapper configuration, with the following changes from snapper defaults:
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
It then enables `snapper-boot.timer` and `snapper-cleanup.timer` systemd services.

### iNet Wireless Daemon

A wireless network daemon made by Intel, that has better overall performance and latency than the default `wpa_supplicant`, however may not be compatible with certain enterprise networks.

**Packages Installed or Updated**
- All systems: `iwd`

**Custom settings applied**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Disables `wpa_supplicant` systemd service.

### LucidGlyph

Installed using the official script from its [repository](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Changes the default GPU governor to `ondemand` (`powersave` is the default for most distributions), making CPU frequencies more reactive and increasing system responsiveness and performance, at a slight average power draw increase. Not recommended on laptops for their limited thermal dissipation capabilities.

**Custom settings applied**
- For *Intel* CPUs, the `intel_pstate` driver prevents the usage of `ondemand` governor and has to be disabled first:
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- Creates and enables a new systemd service: `/etc/systemd/system/set-ondemand-governor.service`
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

Installs `power-options` to manage power settings intuitively and in great detail through a GTK interface through its official script or through the [leo/power-options COPR repository](https://copr.fedorainfracloud.org/coprs/leo/power-options). Includes its tray icon. Removal should follow their documentation and cannot be done through LinuxToys, except for Atomic Fedora users, which can remove it by just removing the `power-options` package.

**Packages Installed or Updated**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): ``gtk4-devel libadwaita-devel power-options`

### Psycachy Kernel

A modified Linux kernel incorporating many of CachyOS's kernel patches that have been tested and deemed safe to use for Debian/Ubuntu-based systems, maintained by Psygreg. Not available for other operating systems. Downloaded and install from its [official repository's](https://github.com/psygreg/linux-psycachy) latest releases.

**Packages Installed or Updated**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

A patch to the shell login configuration file that enables a larger shader cache size for any GPU, eliminating stutters and FPS drops in several modern games. Reminder: it will not take the entire space unless it really needs to. Can be reverted by just removing the appended lines to `.bash_profile`, `.profile` or `.zshrc`.

**Custom settings applied**
- *AMD* and *Intel* GPUs
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

Fixes an issue where SELinux prevents anything from running through WINE/Proton on OpenSUSE. Can be reverted by using the same command with `0` as the boolean value instead of `1`. 

**Custom settings applied**
```
setsebool -P selinuxuser_execmod 1
```

### Swapfile Creator

Creates an 8GB swapfile, either at `/swapfile` or `/home/swapfile` (`/home/swap/swapfile` for btrfs filesystems). Includes the necessary tweaks for the swapfile to work correctly in btrfs filesystems, avoiding a flood of snapshots. 

**Removal**
```
sudo swapoff SWAPFILE_PATH
sudo rm -rf SWAPFILE_PATH
```
Then remove the swapfile entry from `/etc/fstab`. 

### Firewall Setup

Installs the required packages, then applies sane defaults that are ideal for most users. 

**Packages Installed or Updated**
- All systems: `ufw gufw`

**Custom settings applied**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Installs the application from Flathub, applies the required `udev` configuration files for it to work at `/etc/udev/rules.d`, then displays documentation on supported devices on your browser. The configuration files are obtained from its [official GitHub repository](https://github.com/berarma/oversteer). 

### DaVinci Resolve

Offers installation through [DaVinciBox](https://github.com/zelikos/davincibox) following standard dependencies and procedures for it, or native installation through custom procedures. The *Studio* version requires a license purchased from Blackmagic Design. Removal can be done by unexporting the app shortcuts and erasing the distrobox for *DaVinciBox* following the instructions in its repository; using the uninstaller from the applications menu on Fedora/OpenSUSE; or simply removing the package through your package manager in other systems.

**Packages Installed or Updated for native installation**
- Arch: `davinci-resolve` or `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` and `davinci-resolve` or `davinci-resolve-studio`

### Active Directory

Installs all packages necessary to enable integration into Active Directory domains.

**Packages Installed or Updated**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Cockpit Server

Installs `cockpit` from Debian backports or default repositories. Atomic Fedora systems require additional packages. Afterwards, performs the necessary firewall configurations for Fedora and OpenSUSE to allow accessing it from a *Cockpit Client*.

**Packages Installed or Updated**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Custom settings applied**
- Enables `cockpit.socket` systemd service
- For Fedora:
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- For OpenSUSE:
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

Obtains all necessary dependencies, and installs `waydroid` from your distributions repositories, or its own repository for Debian/Ubuntu specifically. Then initializes the container, installing Android with sane defaults and support for the ***Google Play Store*** enabled. Optionally, it will use [waydroid_scripts](https://github.com/casualsnek/waydroid_script) to install ARM translation capabilities using *libndk* for AMD or *libhoudini* for Intel processors.

**Packages Installed or Updated**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Others: `waydroid`

**With ARM translations**
- Arch: `python-pip`
- Others: `python3-pip`

### OpenRGB

Installs the main application from Flathub, then gets the udev rules to make it work from its [official repository](https://openrgb.org/releases) or from *RPMFusion* on Fedora.

**Packages Installed or Updated**
- Fedora: `openrgb-udev-rules`

### OpenRazer

Installs it using the `openrazer-meta` metapackage from its [official repositories](https://openrazer.github.io/), alongside its GUI *Polychromatic* from Flathub; or, for Fedora Atomic (`rpm-ostree`) systems, from *Universal Blue*'s kernel modules repository. For Universal Blue systems, installs using the script provided by `ujust`. 

**Packages Installed or Updated**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Others: `openrazer-meta`

### Automatic Updates for RPM-OSTree

Enables `rpm-ostree`'s automatic updates in stage mode, so your work is never disrupted. They will be silently downloaded and made into a new deployment to be applied when you decide to reboot your system. Can be reverted by disabling the `rpm-ostree-automatic.timer` systemd service.

**Custom settings applied**
- added to `/etc/rpm-ostreed.conf`
```
[Daemon]
AutomaticUpdatePolicy=stage
```
- enables `rpm-ostree-automatic.timer` systemd service

### Nerd Fonts

Fetches data on fonts available from [NerdFonts](https://www.nerdfonts.com) and displays them for installation. The selected font will be installed at `$HOME/.local/share/fonts`, and can be removed by simply deleting the files added to that directory.

### Lazyman

Installs *Lazyman* configuration manager for *NeoVim* alongside a configuration of the user's choice. Can be removed by deleting its folder.

**Packages Installed or Updated**
- All systems: `neovim git`

**Additional files installed**
- Directory: `$HOME/.config/nvim-Lazyman`

### Starship

Uses the official script from [Starship](https://starship.rs) for installation or updating. Can be reverted by removing the added line to enable it in your `.bashrc`, `.zshrc` or similar configuration file for your shell.

**Custom settings applied**
- added to `~/.bashrc`
```
eval "$(starship init bash)"
```

### Oh My ZSH

Uses the official script from [Oh My ZSH](https://ohmyz.sh) for installation or updating. Can be reverted by removing the line that sources it from your `.zshrc`.

**Packages Installed or Updated**
- All systems: `zsh`

### CachyOS systemd settings

Applies various performance tweaks and fixes for common issues. While all of them will be installed, many of those will only become active if needed - as they will only be engaged if the devices it targets are found in your system. This allows for you to change components with patches for those new parts being applied dynamically. For atomic Fedora and Universal Blue systems, these will be installed as a layered package and can be removed by just removing the package through `rpm-ostree`. For others, they can be reverted by removing the corresponding files. Both the packages and the direct installation methods utilize files sourced directly from *CachyOS'* repositories.

**Packages Installed or Updated**
- Fedora atomic: `linuxtoys-cfg-atom`
- Universal Blue: `optimize-cfg-ublue`

**Custom settings applied**
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
# Blacklist the Intel TCO Watchdog/Timer module
blacklist iTCO_wdt

# Blacklist the AMD SP5100 TCO Watchdog/Timer module (Required for Ryzen cpus)
blacklist sp5100_tco
```
- `/usr/lib/tmpfiles.d/coredump.conf` - not included for Universal Blue systems, that have their own setting for this
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

## Repository Installers

### Brew
Installed through its official installation script.

### Cargo
Installed through its official installation script by RustUp.

### Chaotic-AUR
Installed following their documentation, with timing tweaks to avoid errors caused by sending commands too fast to pacman.

### Flathub
Installs `flatpak` and adds the Flathub repository both system and user-level.

**Packages Installed or Updated**
- All systems: `flatpak`

### Pip
Installed through `python-pip` (Arch) or `python3-pip` (other systems) packages from default repositories. Includes `pipx` for automated setup of PyPI packages in virtual environments as is recommended by documentation.

### RPMFusion
Installed following their documentation, with a specific iteration for Fedora Atomic (`rpm-ostree`-based) systems.

## LSW-WinBoat

Sets up a *Docker* installation with the proper settings and patches for utilization with **WinBoat** - that can install Windows in a Docker container and interact with its apps, integrating those to the host system. Then, installs *WinBoat* itself from its [official GitHub repository](https://github.com/TibixDev/winboat), and *FreeRDP* from Flathub to use it.

**Packages Installed or Updated**
- Arch:`docker docker-compose winboat-bin`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`
- OpenSUSE:`docker docker-compose winboat`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`

- Flathub: `com.freerdp.FreeRDP`

**Custom settings applied**
- Enables `docker` and `docker.socket` systemd services
- Enables `iptables` kernel module with proper settings, on `/etc/modules-load.d/iptables.conf`:
```
ip_tables
niptable_nat
```
- Enables rootless docker usage by adding the user to the `docker` usergroup, which requires a custom patch for `rpm-ostree`-based systems:
```
echo "$(getent group docker)" >> /etc/group
```
- Opens internal Docker ports 8006 and 3389 on `firewalld` to allow WinBoat to reach its container, fixing a problem on Fedora and derivatives (not applicable to other operating systems):
```
firewall-cmd --zone=docker --change-interface=docker0
firewall-cmd --zone=docker --add-port=8006/tcp --permanent
firewall-cmd --zone=docker --add-port=3389/tcp --permanent
```

## Optimized Defaults

A one-click setup that installs a curated, stable selection of optimizations for your system. It will not install features that are not relevant or already present in your machine.

#### Included Features

**Performance**
- EarlyOOM
- Shader Booster
- Split-lock Mitigation Disabler
- *CachyOS* systemd configuration files - tested and filtered for stability, so the performance doesn't come at a compromise

**Quality of Life**
- FFMPEGThumbnailer
- Fedora/OpenSUSE Streaming Codecs
- `/etc/sudoers` file correction for Debian - fixes an issue rendering the user unable to use `sudo` after installing from the default installation image
- Gnome timeout fix - increases timeout tolerance to stop excessive 'program is not responding' prompts
- Kernel Module Signing for RPM-OSTree
- automatic updates enabling for `rpm-ostree` - in stage mode so your work is never disrupted
- (optional) Hardware Acceleration for Flatpaks

**Power Profiles**
- *Laptop*: Power Optimizer
- *Desktop*: CPU ondemand

## Psygreg's Picks

A curated selection of apps to make your gaming life on Linux easier than ever, one click away.

#### Included Features

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
- Extension Manager (for *Gnome* desktops only)
- Gnome Tweaks (for *Gnome* desktops only)