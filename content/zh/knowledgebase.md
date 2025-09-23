# 知识库

## LinuxToys功能基本指南

- 功能仅在兼容*且*相关的系统上可用。
- 应用程序内的所有功能和资源应始终遵循**KISS**原则（*Keep It Simple, Stupid*）- 通过其标签和简短描述应易于理解和使用。
- 功能应该以对用户**最优**的方式制作。
- 用户交互仅限于`zenity`提示，以避免不可预测性并确保可靠性。
- 尽可能使用Flatpaks，因为它们通过flatpak运行时的**一致性**和通过细粒度权限控制的**安全性**。

## 作为本地包安装

来自标准系统存储库，或由LinuxToys添加的存储库，不进行任何其他更改。

### 标准存储库
- Java OpenJDK（任何版本）
- Maven
- NeoVim
- Broadcom WiFi驱动程序（仅适用于Fedora/Arch）
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris（Fedora/Arch；其他系统从Flathub获取）
- F3 - Fight Flash Fraud（安装后还会在浏览器中打开其文档）
- Wireguard
- VLC

### 添加的存储库
- Visual Studio Code：来自[官方Microsoft存储库。](https://packages.microsoft.com)
- .NET SDK：来自[官方Microsoft存储库](https://packages.microsoft.com)，仅在OpenSUSE和Debian中。其他系统从标准存储库安装。
- Sublime Text：来自[其官方存储库。](https://download.sublimetext.com)
- Unity Hub：来自[官方Unity存储库。](https://hub.unity3d.com/linux/repos) 仅在Unity官方支持的系统上可用。
- Nvidia驱动程序：在Debian中来自[官方Nvidia存储库](https://developer.download.nvidia.com/compute/cuda/repos)，在Fedora中来自*RPMFusion*。其他系统从标准存储库安装。
- btrfs-Assistant：在Arch上来自[Chaotic-AUR](https://aur.chaotic.cx)。其他系统从标准存储库安装。在所有系统上都包含来自标准存储库的`snapper`。
- Preload：在Arch上来自[Chaotic-AUR](https://aur.chaotic.cx)，在Fedora上来自[elxreno/preload COPR存储库](https://copr.fedorainfracloud.org/coprs/elxreno/preload)。其他系统从标准存储库安装。
- Touchegg：在Ubuntu和Debian上分别来自其官方PPA存储库或[GitHub存储库](https://github.com/JoseExposito/touchegg)。其他系统从标准存储库安装。仅适用于X11。
- Gamescope：在Arch上来自*Multilib*，在Fedora上来自*RPMFusion*。其他系统从标准存储库安装。
- Steam：在Arch上来自*Multilib*，在Fedora上来自*RPMFusion*。其他系统从Flathub安装。
- Topgrade：来自*Pip*。
- Webmin：来自其[官方GitHub存储库](https://github.com/webmin/webmin)。
- Arch-Update：来自[Chaotic-AUR](https://aur.chaotic.cx)。
- Cloudflare WARP：来自[官方Cloudflare存储库](https://pkg.cloudflareclient.com/)。
- Solaar：在Ubuntu上来自其官方PPA存储库。其他系统从标准存储库安装。
- IVPN：来自其[官方存储库](https://repo.ivpn.net/stable)。
- Mullvad VPN：来自其[官方存储库](https://repository.mullvad.net)或在Arch上来自[Chaotic-AUR](https://aur.chaotic.cx)。
- NordVPN：来自其[官方存储库](https://downloads.nordcdn.com/apps)或在Arch上来自[Chaotic-AUR](https://aur.chaotic.cx)。
- Input Remapper：来自[Chaotic-AUR](https://aur.chaotic.cx)。其他系统从标准存储库安装。

### 其他
- Heroic Games Launcher：在Fedora/Arch上来自其[官方GitHub存储库](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher)。其他系统从Flathub安装。
- LSFG-VK：来自其[官方GitHub存储库](https://github.com/PancakeTAS/lsfg-vk)。包含flatpak运行时。需要Windows版Lossless Scaling。
- Figma：通过[Figma-Linux](https://github.com/Figma-Linux/figma-linux)的AppImage安装程序安装。
- ExpressVPN：通过其基于AppImage的官方安装程序安装。
- Windscribe VPN：来自其[官方存储库](https://windscribe.com/install/desktop)。

## 作为flatpaks安装

来自flathub，或由LinuxToys添加的存储库，不进行任何其他更改。仅在严格必要时使用系统flatpaks。

### 用户级
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay（包含本地安装的Mangohud包）
- Mangojuice（包含本地安装的Mangohud包）
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN（需要在VR设备中安装应用程序 - 首次运行时请遵循说明）
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP（可选择使用[PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git)修补`$HOME/.config`和`$HOME/.local`中的文件）
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
- Distroshelf（包含本地安装的`podman`和`distrobox`包）
- Flatseal
- Handbrake
- Mission Center
- OBS Studio（包含[Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture)插件）
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

#### 添加的存储库

- GeForce NOW：来自*Nvidia*提供的官方存储库

### 系统级

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper（包含Debian/Ubuntu的`ratbagd`或其他系统的`libratbag`本地安装包）
- Flatpaks硬件加速（当前支持的flatpak运行时的ffmpeg-full）

## 自定义程序

需要自定义安装程序或特定配置以获得最佳功能，由LinuxToys实现。通常还提供卸载选项（如果已安装），除非不建议（如果卸载主要flatpak或包会撤销其他更改）或此处给出卸载说明。

### Docker

安装官方 Docker 仓库（Arch Linux 和 OpenSUSE 除外，它们不需要），然后通过您的系统包管理器从那里安装所有必需的包，然后将您的用户添加到 `docker` 用户组。

**安装或更新的包**
- Arch：`docker docker-compose`
- Fedora：`docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
- OpenSUSE：`docker docker-compose`
- Debian/Ubuntu：`docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

### Portainer CE

按照其文档中的说明在 Docker 上安装 Portainer CE 容器。它一直在后台运行，因为其目的是从浏览器用户界面成为 Docker 仪表板，并使用机器的微不足道的资源。需要 Docker 由 LinuxToys 本身或手动正确设置为 rootless 使用。

**安装程序：**
```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

**Godot**和**GodotSharp**都通过自定义程序安装，因为Godot不提供标准包。*GodotSharp*包括安装**.NET SDK**，如本文档中也有描述，这是其功能所需的。

- 安装文件位置：`$HOME/.local/godot`
- 应用程序菜单快捷方式位置：`$HOME/.local/share/applications`

### Jetbrains Toolbox

从官方网站下载最新的tarball发布版并通过自定义程序安装，因为JetBrains否则只提供AppImages，这些都以不可靠著称。

- 安装文件位置：`$HOME/.local/jetbrains-toolbox`
- 应用程序菜单快捷方式位置：`$HOME/.local/share/applications`

### Mise

使用官方提供的安装脚本安装，然后按照其文档为`bash`、`zsh`和`fish` shell配置自动完成（非常理想的功能）；完成后在浏览器中显示其文档。由于不可变性限制，无法在不可变（基于`rpm-ostree`）系统上与`zsh` shell一起使用。卸载应遵循其文档，不能通过LinuxToys执行。

### Node Version Manager (NVM)

使用官方提供的安装脚本安装，或对基于`rpm-ostree`的发行版进行手动配置，因为官方脚本对它们不起作用；然后通过`npm`安装`yarn`并在浏览器中显示其文档。卸载可以按照其文档执行，或对于基于`rpm-ostree`的系统简单删除`$HOME/.nvm`。

**安装或更新的包**
- **所有系统**：`nodejs npm`
- **来自NPM**：`yarn`

### PyEnv

安装所有必需的依赖项，使用其官方脚本安装*PyEnv*，然后在您的`bash`和`zsh`配置文件中配置其路径，并在浏览器中显示其文档。卸载应遵循其文档，不能通过LinuxToys执行。

**安装或更新的包**
- Arch：`base-devel openssl zlib xz tk`
- Fedora：`make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE：`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu：`make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

使用其官方安装脚本安装。可以通过同一脚本卸载。

### RPM-OSTree的内核模块签名

安装随机生成且机器唯一的**MOK**（Machine Owner Key）；然后安装[akmods-keys](https://github.com/CheariX/silverblue-akmods-keys)以便将来使用它签署内核模块。*Nvidia*、*VirtualBox*和其他内核模块驱动程序在启用Secure Boot时正常工作所必需。在基于`rpm-ostree`的不可变系统上安装Nvidia驱动程序时，如果安装时启用了Secure Boot，会自动运行。

### Radeon Open Compute (ROCm)

安装所有ROCm包和诊断工具以正常工作，并将用户添加到`render`和`video`用户组，这是在不使用root的情况下提供对`/dev/kfd`访问所必需的 - ROCm要求这样做。

**安装或更新的包**
- Arch：`comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora：`rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE：`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu：`libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Realtek RTL8821CE驱动程序

安装[Tomás Pinho的RTL8821CE驱动程序](https://github.com/tomaspinho/rtl8821ce.git)及其所有依赖项，替换并列入黑名单内核附带的标准RTW8821CE驱动程序，该驱动程序在某些设备上无法正常工作或根本无法工作。

**安装或更新的包**
- Arch：`linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE：`dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu：`bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

为不受Intel Compute Runtime、ROCm或CUDA支持的卡安装并启用更新、更快的OpenCL实现。

**安装或更新的包**
- Arch：`opencl-mesa clinfo`
- Fedora：`mesa-libOpenCL clinfo`
- OpenSUSE：`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu：`mesa-opencl-icd clinfo`

**其他更改**

**添加到`/etc/environment`：**
- 对于*Intel* GPU
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- 对于*AMD* GPU
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

安装所有必需的依赖项，然后克隆其[存储库](https://github.com/atar-axis/xpadneo.git)并从官方脚本安装。

**安装或更新的包**
- Arch：`dkms linux-headers bluez bluez-utils`
- Fedora：`dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE：`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu：`dkms linux-headers-$(uname -r)`

### Distrobox命令助手

安装将命令从distroboxes重定向到主机的必要文件（如果在distrobox内未找到命令）以供`bash`和`zsh`使用；然后在`.bashrc`和`.zshrc`中连接它们。卸载可以通过简单删除文件夹来执行。

**安装文件位置**
`$HOME/.local/distrobox-handler`

### Fedora/OpenSUSE的流媒体编解码器

安装这些操作系统中使用硬件加速的流媒体所需的编解码器。如果尚未安装RPMFusion，它还将在Fedora上安装RPMFusion，因为所需的包不在默认存储库中提供。

**安装或更新的包**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE：`opi` 和，来自opi，`codecs`

### Microsoft CoreFonts

从[SourceForge](http://downloads.sourceforge.net/corefonts)下载文件，然后使用`cabextract`提取字体安装程序并将字体安装到`$HOME/.local/share/fonts`。卸载可以通过从`$HOME/.local/share/fonts`删除CoreFonts文件夹来执行。

**安装或更新的包**
- 所有系统：`cabextract`

### 禁用Split-lock缓解

禁用split-lock缓解，这是为了在Linux中强制执行良好的开发实践而制作的，但会导致旧应用程序和几个游戏（特别是来自*Playstation Studios*的游戏，它们不是为Linux制作的）显著性能损失。由于这不是安全功能，禁用是安全的。这通过引入适当内核参数的`99-splitlock.conf`文件完成。卸载可以通过删除文件来执行。

**安装的文件**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

在极端内存和交换压力情况下强制终止消耗内存或泄漏的应用程序，避免'内存不足'情况，Linux系统在这种情况下反应出奇地差，因为内核执行的启发式扫描来决定要终止哪个进程可能需要几个小时。

**安装或更新的包**
- 所有系统：`earlyoom`

**应用的自定义配置**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

在GRUB引导菜单中显示btrfs快照，非常适合在需要恢复损坏系统时选择以前的快照。从其官方[存储库](https://github.com/Antynea/grub-btrfs)克隆并安装；然后应用自定义配置。需要`grub`，如果在系统中未找到`grub`将不会继续。卸载应遵循其文档，不能通过LinuxToys执行。

**安装或更新的包**
- Arch：`gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu：`gawk inotify-tools make`

**应用的自定义配置**
- 设置标准snapper 'root'配置，对snapper默认值进行以下更改：
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
然后启用systemd服务`snapper-boot.timer`和`snapper-cleanup.timer`。

### iNet Wireless Daemon

Intel制作的无线网络守护程序，比标准`wpa_supplicant`具有更好的整体性能和延迟，但可能与某些企业网络不兼容。

**安装或更新的包**
- 所有系统：`iwd`

**应用的自定义配置**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- 禁用systemd服务`wpa_supplicant`。

### LucidGlyph

使用其[存储库](https://github.com/maximilionus/lucidglyph)的官方脚本安装。

### CPU ondemand

将默认GPU调节器更改为`ondemand`（`powersave`是大多数发行版的默认值），使CPU频率更加响应，并在平均功耗略有增加的情况下提高系统响应性和性能。由于散热能力有限，不建议用于笔记本电脑。

**应用的自定义配置**
- 对于*Intel*处理器，`intel_pstate`驱动程序阻止使用`ondemand`调节器，必须首先禁用：
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- 创建并启用新的systemd服务：`/etc/systemd/system/set-ondemand-governor.service`
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

安装`power-options`以通过其官方脚本或通过[leo/power-options COPR存储库](https://copr.fedorainfracloud.org/coprs/leo/power-options)通过GTK界面进行直观和详细的电源设置管理。启用其系统托盘图标。卸载应遵循其文档，不能通过LinuxToys执行，除了Atomic Fedora用户可以通过简单卸载`power-options`包来删除它。

**安装或更新的包**
- Arch：`gtk4 libadwaita`
- Fedora/OpenSUSE：`gtk4-devel libadwaita-devel`
- Debian/Ubuntu：`libgtk4-dev libadwaita-1-dev`
- Atomic Fedora（`rpm-ostree`）：`gtk4-devel libadwaita-devel power-options`

### Psycachy内核

修改的Linux内核，包含许多CachyOS内核补丁，这些补丁已经过测试并被认为可安全用于基于Debian/Ubuntu的系统，由Psygreg维护。不适用于其他操作系统。从其[官方存储库](https://github.com/psygreg/linux-psycachy)的最新发布下载并安装。

**安装或更新的包**
- Debian/Ubuntu：`linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

对shell登录配置文件的补丁，可为任何GPU启用更大的着色器缓存大小，消除几个现代游戏中的卡顿和FPS下降。提醒：如果不真正需要，它不会占用所有空间。可以通过简单删除`.bash_profile`、`.profile`或`.zshrc`中添加的行来撤销。

**应用的自定义配置**
- *AMD*和*Intel* GPU
```
# enforce RADV vulkan implementation for AMD GPUs
export AMD_VULKAN_ICD=RADV

# increase AMD and Intel cache size to 12GB
export MESA_SHADER_CACHE_MAX_SIZE=12G
```
- *Nvidia* GPU
```
# increase Nvidia shader cache size to 12GB
export __GL_SHADER_DISK_CACHE_SIZE=12000000000
```

### OpenSUSE的SELinux策略修复

修复OpenSUSE上SELinux阻止通过WINE/Proton运行任何内容的问题。可以通过使用相同命令但使用`0`作为布尔值而不是`1`来撤销。

**应用的自定义配置**
```
setsebool -P selinuxuser_execmod 1
```

### 交换文件创建器

创建8GB交换文件，位于`/swapfile`或`/home/swapfile`（btrfs文件系统为`/home/swap/swapfile`）。包括btrfs文件系统中交换文件正常工作的必要配置，避免快照泛滥。

**卸载**
```
sudo swapoff SWAP_FILE_PATH
sudo rm -rf SWAP_FILE_PATH
```
然后从`/etc/fstab`中删除交换文件条目。

### 防火墙设置

安装必要的包，然后应用对大多数用户来说理想的合理默认设置。

**安装或更新的包**
- 所有系统：`ufw gufw`

**应用的自定义配置**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

从Flathub安装应用程序，在`/etc/udev/rules.d`中应用其正常工作所需的`udev`配置文件，然后在浏览器中显示支持设备的文档。配置文件来自其[官方GitHub存储库](https://github.com/berarma/oversteer)。

### DaVinci Resolve

提供通过[DaVinciBox](https://github.com/zelikos/davincibox)安装（遵循其标准依赖项和程序）或通过自定义程序本地安装。*Studio*版本需要从Blackmagic Design购买的许可证。卸载可以通过取消导出应用程序快捷方式并删除*DaVinciBox*的distrobox（遵循其存储库中的说明）；在Fedora/OpenSUSE上使用应用程序菜单中的卸载程序；或在其他系统上简单地通过包管理器删除包来执行。

**本地安装的安装或更新包**
- Arch：`davinci-resolve`或`davinci-resolve-studio`
- Fedora：`xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE：`xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu：`fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` 和 `davinci-resolve`或`davinci-resolve-studio`

### Active Directory

安装启用Active Directory域集成所需的所有包。

**安装或更新的包**
- Debian：`sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora：`sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu：`sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Cockpit服务器

从Debian backports或标准存储库安装`cockpit`。Atomic Fedora系统需要额外的包。之后为Fedora和OpenSUSE执行必要的防火墙配置，以允许从*Cockpit客户端*访问它。

**安装或更新的包**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu：`cockpit`
- Fedora Atomic：`cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**应用的自定义配置**
- 启用systemd服务`cockpit.socket`
- 对于Fedora：
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- 对于OpenSUSE：
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

获取所有必需的依赖项并从发行版存储库或Debian/Ubuntu的自己存储库安装`waydroid`。然后初始化容器，使用合理的默认设置和启用的***Google Play Store***支持安装Android。可选地，将使用[waydroid_scripts](https://github.com/casualsnek/waydroid_script)为AMD处理器使用*libndk*或为Intel处理器使用*libhoudini*安装ARM翻译功能。

**安装或更新的包**
- Debian/Ubuntu：`curl ca-certificates python3-venv waydroid`
- 其他：`waydroid`

**带ARM翻译**
- Arch：`python-pip`
- 其他：`python3-pip`

### OpenRGB

从Flathub安装主应用程序，然后从其[官方存储库](https://openrgb.org/releases)或Fedora上的*RPMFusion*获取其工作所需的udev规则。

**安装或更新的包**
- Fedora：`openrgb-udev-rules`

### OpenRazer

使用其[官方存储库](https://openrazer.github.io/)的`openrazer-meta`元包安装，以及从Flathub安装其GUI *Polychromatic*；或者，对于Fedora Atomic（`rpm-ostree`）系统，从*Universal Blue*内核模块存储库安装。对于Universal Blue系统，使用`ujust`提供的脚本安装。

**安装或更新的包**
- Fedora：`kernel-devel openrazer-meta`
- Fedora Atomic：`openrazer-kmod openrazer-kmod-common openrazer-daemon`
- 其他：`openrazer-meta`

### RPM-OSTree 自动更新

启用 `rpm-ostree` 的分阶段模式自动更新，这样您的工作永远不会被中断。它们将静默下载并成为新的部署，当您决定重启系统时应用。可以通过禁用 `rpm-ostree-automatic.timer` systemd 服务来撤销。

**应用的自定义设置**
- 添加到 `/etc/rpm-ostreed.conf`
```
[Daemon]
AutomaticUpdatePolicy=stage
```
- 启用 `rpm-ostree-automatic.timer` systemd 服务

### Nerd Fonts

从[NerdFonts](https://www.nerdfonts.com)获取可用字体的信息，并显示它们以供安装。选定的字体将安装在`$HOME/.local/share/fonts`，可以通过简单删除添加到该目录的文件来删除。

### Lazyman

安装*Lazyman*配置管理器用于*NeoVim*以及用户选择的配置。可以通过删除其文件夹来删除。

**安装或更新的包**
- 所有系统：`neovim git`

**额外安装的文件**
- 目录：`$HOME/.config/nvim-Lazyman`

### Starship

使用[Starship](https://starship.rs)的官方脚本进行安装或更新。可以通过删除添加到您的`.bashrc`、`.zshrc`或类似shell配置文件中的行来恢复，以启用它。

**应用的用户自定义设置**
- 添加到`~/.bashrc`
```
eval "$(starship init bash)"
```

### Oh My ZSH

使用[Oh My ZSH](https://ohmyz.sh)的官方脚本进行安装或更新。可以通过删除从您的`.zshrc`加载它的行来恢复。

**安装或更新的包**
- 所有系统：`zsh`

## 存储库安装程序

### Brew
通过其官方安装脚本安装。

### Cargo
通过RustUp的官方安装脚本安装。

### Chaotic-AUR
按照其文档安装，使用临时配置以避免向pacman发送命令过快导致的错误。

### Flathub
安装`flatpak`并在系统和用户级别添加Flathub存储库。

**安装或更新的包**
- 所有系统：`flatpak`

### Pip
通过标准存储库的`python-pip`（Arch）或`python3-pip`（其他系统）包安装。包括 `pipx`，用于按照文档推荐的方式在虚拟环境中自动设置 PyPI 包。

### RPMFusion
按照其文档安装，对Fedora Atomic（基于`rpm-ostree`）系统进行特定迭代。

## LSW-WinBoat

设置一个*Docker*安装，使用正确的设置和补丁以与**WinBoat**一起使用 - 它可以在Docker容器中安装Windows并与其应用程序交互，将它们集成到主机系统中。然后，从其[官方GitHub存储库](https://github.com/TibixDev/winboat)安装*WinBoat*本身，并从Flathub安装*FreeRDP*以使用它。

**安装或更新的包**
- Arch：`docker docker-compose winboat-bin`
- Fedora：`docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`
- OpenSUSE：`docker docker-compose winboat`
- Debian/Ubuntu：`docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`

- Flathub：`com.freerdp.FreeRDP`

**应用的用户自定义设置**
- 启用 `docker` 和 `docker.socket` systemd 服务
- 在 `/etc/modules-load.d/iptables.conf` 中启用具有正确设置的 `iptables` 内核模块：
```
ip_tables
niptable_nat
```
- 通过将用户添加到 `docker` 用户组来启用无root Docker使用，这需要为基于 `rpm-ostree` 的系统进行自定义补丁：
```
echo "$(getent group docker)" >> /etc/group
```
- 在 `firewalld` 中打开内部Docker端口8006和3389，以允许WinBoat访问其容器，修复Fedora及其衍生产品上的问题（不适用于其他操作系统）：
```
firewall-cmd --zone=docker --change-interface=docker0
firewall-cmd --zone=docker --add-port=8006/tcp --permanent
firewall-cmd --zone=docker --add-port=3389/tcp --permanent
```

## 优化的默认设置

一键设置，为您的系统安装经过验证的稳定优化集。不会安装不相关或已在您机器上存在的功能。

#### 包含的功能

**性能**
- EarlyOOM
- Shader Booster
- 禁用Split-lock缓解
- *CachyOS* systemd配置文件 - 已测试并过滤以确保稳定性，因此性能不会因妥协而受损

**生活质量**
- FFMPEGThumbnailer
- Fedora/OpenSUSE流媒体编解码器
- Debian `/etc/sudoers`文件修复 - 修复默认安装映像后用户无法使用`sudo`的问题
- Gnome超时修复 - 增加超时容忍度以停止过度的'程序未响应'提示
- RPM-OSTree的内核模块签名
- 为`rpm-ostree`启用自动更新 - 在分阶段模式下，这样您的工作永远不会被中断
- （可选）Flatpaks硬件加速

**电源配置文件**
- *笔记本电脑*：Power Optimizer
- *台式机*：CPU ondemand

## Psygreg的选择

经过验证的应用程序集合，一键让您在Linux上的游戏生活比以往任何时候都更轻松。

#### 包含的功能

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
- Extension Manager（仅适用于*Gnome*桌面）
- Gnome Tweaks（仅适用于*Gnome*桌面）