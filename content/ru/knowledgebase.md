# База знаний

## Основные рекомендации по функциям LinuxToys

- Функции будут доступны только в системах, где они совместимы *и* актуальны.
- Все функции и ресурсы внутри приложения должны всегда следовать принципу **KISS** (*Keep It Simple, Stupid*) - они должны быть легкими для понимания и использования через их метки и краткие описания.
- Функции должны быть сделаны так, чтобы работать **оптимально** для пользователя.
- Взаимодействие с пользователем ограничено запросами `zenity` для избежания непредсказуемости и обеспечения надежности.
- Flatpaks должны использоваться когда только возможно из-за их **согласованности** через flatpak runtimes и **безопасности** через детальный контроль разрешений.

## Установлено как нативные пакеты

Из стандартных системных репозиториев, или с репозиториями, добавленными LinuxToys, и никаких других изменений не производится.

### Стандартные репозитории
- Java OpenJDK (любая версия)
- Maven
- NeoVim
- Драйвер WiFi Broadcom (доступен только для Fedora/Arch)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch; другие получают из Flathub)
- F3 - Fight Flash Fraud (также открывает документацию в вашем браузере после установки)
- Wireguard
- VLC

### Добавленные репозитории
- Visual Studio Code: из [официального репозитория Microsoft.](https://packages.microsoft.com)
- .NET SDK: из [официального репозитория Microsoft](https://packages.microsoft.com), только в OpenSUSE и Debian. Другие системы имеют его установленным из стандартных репозиториев.
- Sublime Text: из [его официальных репозиториев.](https://download.sublimetext.com)
- Unity Hub: из [официального репозитория Unity.](https://hub.unity3d.com/linux/repos) Доступен только в системах, официально поддерживаемых Unity.
- Драйверы Nvidia: из [официального репозитория Nvidia](https://developer.download.nvidia.com/compute/cuda/repos) в Debian или *RPMFusion* в Fedora. Другие системы имеют его установленным из стандартных репозиториев.
- btrfs-Assistant: из [Chaotic-AUR](https://aur.chaotic.cx) на Arch. Другие системы имеют его установленным из стандартных репозиториев. Включает `snapper` из стандартных репозиториев на всех системах.
- Preload: из [Chaotic-AUR](https://aur.chaotic.cx) на Arch, или [elxreno/preload COPR репозитория](https://copr.fedorainfracloud.org/coprs/elxreno/preload) на Fedora. Другие системы имеют его установленным из стандартных репозиториев.
- Touchegg: из его официального PPA репозитория, или [GitHub репозитория](https://github.com/JoseExposito/touchegg) для Ubuntu и Debian соответственно. Другие системы имеют его установленным из стандартных репозиториев. Только X11.
- Gamescope: из *Multilib* на Arch, или *RPMFusion* на Fedora. Другие системы имеют его установленным из стандартных репозиториев.
- Steam: из *Multilib* на Arch, или *RPMFusion* на Fedora. Другие системы имеют его установленным из Flathub.
- Topgrade: из *Pip*.
- Webmin: из его [официального GitHub репозитория](https://github.com/webmin/webmin).
- Arch-Update: из [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP: из [официального репозитория Cloudflare](https://pkg.cloudflareclient.com/).
- Solaar: из его официального PPA репозитория на Ubuntu. Другие системы имеют его установленным из стандартных репозиториев.
- IVPN: из его [официальных репозиториев](https://repo.ivpn.net/stable).
- Mullvad VPN: из его [официальных репозиториев](https://repository.mullvad.net) или [Chaotic-AUR](https://aur.chaotic.cx) на Arch.
- NordVPN: из его [официального репозитория](https://downloads.nordcdn.com/apps) или [Chaotic-AUR](https://aur.chaotic.cx) на Arch.
- Input Remapper: из [Chaotic-AUR](https://aur.chaotic.cx). Другие системы имеют его установленным из стандартных репозиториев.

### Другие
- Heroic Games Launcher: из его [официального GitHub репозитория](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) для Fedora/Arch. Другие системы имеют его установленным из Flathub.
- LSFG-VK: из его [официального GitHub репозитория](https://github.com/PancakeTAS/lsfg-vk). Включает flatpak runtimes. Требует Lossless Scaling для Windows.
- Figma: установлен через AppImage установщик из [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN: установлен через его официальный установщик на базе AppImage.
- Windscribe VPN: из его [официальных репозиториев](https://windscribe.com/install/desktop).

## Установлено как flatpaks

Из flathub, или с репозиториями, добавленными LinuxToys, и никаких других изменений не производится. Системные flatpaks используются только когда строго необходимо.

### Пользовательский уровень
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (включает Mangohud, нативно установленный пакет)
- Mangojuice (включает Mangohud, нативно установленный пакет)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (требует приложение, установленное в VR устройстве - следуйте инструкциям при первом запуске)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (опционально патчит файлы в `$HOME/.config` и `$HOME/.local` с [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
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
- Distroshelf (включает нативно установленные пакеты `podman` и `distrobox`)
- Flatseal
- Handbrake
- Mission Center
- OBS Studio (включает плагин [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture))
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

#### Добавленные репозитории

- GeForce NOW: из его официального репозитория, предоставляемого *Nvidia*

### Системный уровень

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper (включает `ratbagd` для Debian/Ubuntu или `libratbag` для других, нативно установленные пакеты)
- Аппаратное ускорение для Flatpaks (ffmpeg-full для текущих поддерживаемых flatpak runtimes)

## Пользовательские процедуры

Требуют пользовательскую процедуру установки или специфические настройки для оптимальной работы, которые реализованы LinuxToys. Обычно также предлагают удаление, если уже установлены, если только это не необходимо (если удаление основного flatpak или пакета отменит другие изменения) или инструкции по удалению даны здесь.

### Docker

Устанавливает официальные репозитории Docker (кроме Arch Linux и OpenSUSE, которым они не нужны) и все необходимые пакеты оттуда через пакетный менеджер вашей системы, затем добавляет вашего пользователя в группу пользователей `docker` и устанавливает Portainer CE, который постоянно работает в фоне, поскольку его цель - быть панелью управления Docker, и он использует пренебрежимо малые ресурсы машины. *Установка Portainer CE не произойдет в системах на базе `rpm-ostree`, если пользователь не запустит установщик снова из-за ограничений в развертываниях ostree.*

**Установленные или обновленные пакеты**
- Arch:`docker docker-compose`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
- OpenSUSE:`docker docker-compose`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

**Установка Portainer CE**
```
sudo docker volume create portainer_data
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

И **Godot**, и **GodotSharp** устанавливаются через пользовательскую процедуру, поскольку Godot не предоставляет стандартных пакетов. *GodotSharp* включает установку **.NET SDK**, как также описано в этой документации, необходимую для его функций.

- Расположение установленных файлов: `$HOME/.local/godot`
- Расположение ярлыка меню приложений: `$HOME/.local/share/applications`

### Jetbrains Toolbox

Загружает последний tarball релиз с официального сайта и устанавливает его через пользовательскую процедуру, поскольку JetBrains в противном случае предоставляет только AppImages, которые печально известны своей ненадежностью.

- Расположение установленных файлов: `$HOME/.local/jetbrains-toolbox`
- Расположение ярлыка меню приложений: `$HOME/.local/share/applications`

### Mise

Устанавливается с помощью официально предоставленного установочного скрипта, затем следует его документации для настройки автодополнений, очень желаемой функции, для оболочек `bash`, `zsh` и `fish`; и отображает его документацию по завершении в вашем браузере. Не может использоваться с оболочками `zsh` на неизменяемых (основанных на `rpm-ostree`) системах из-за ограничений неизменяемости. Удаление должно следовать их документации и не может быть выполнено через LinuxToys.

### Node Version Manager (NVM)

Устанавливается с помощью официально предоставленного установочного скрипта, или через ручную настройку для дистрибутивов на основе `rpm-ostree`, поскольку официальный скрипт не работает для них; затем устанавливает `yarn` через `npm` и отображает их документацию в вашем браузере. Удаление может быть выполнено следуя их документации, или просто удалив `$HOME/.nvm` для систем на основе `rpm-ostree`.

**Установленные или обновленные пакеты**
- **Все системы**: `nodejs npm`
- **Из NPM**: `yarn`

### PyEnv

Устанавливает все необходимые зависимости, устанавливает *PyEnv* с помощью его официального скрипта, затем настраивает его путь в ваших файлах профиля `bash` и `zsh` и отображает их документацию в вашем браузере. Удаление должно следовать их документации и не может быть выполнено через LinuxToys.

**Установленные или обновленные пакеты**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

Устанавливается с помощью их официального установочного скрипта. Может быть удален через тот же скрипт.

### Подписывание модулей ядра для RPM-OSTree

Устанавливает **MOK** (Machine Owner Key), который генерируется случайно и уникален для вашей машины; затем устанавливает [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys) для подписывания модулей ядра с ним в будущем. Требуется для работы драйверов модулей ядра *Nvidia*, *VirtualBox* и других с включенным Secure Boot. Автоматически запускается при установке драйверов Nvidia на неизменяемых системах на основе `rpm-ostree`, если Secure Boot включен во время установки.

### Radeon Open Compute (ROCm)

Устанавливает все пакеты ROCm и диагностические инструменты, необходимые для правильной работы, и добавляет вашего пользователя в группы пользователей `render` и `video`, необходимые для предоставления доступа к `/dev/kfd` - который требуется ROCm - без root.

**Установленные или обновленные пакеты**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Драйвер Realtek RTL8821CE

Устанавливает [Драйвер RTL8821CE от Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) и все его зависимости, заменяя и добавляя в черный список стандартный драйвер RTW8821CE, который поставляется с ядром, который не работает должным образом или вообще с некоторыми устройствами.

**Установленные или обновленные пакеты**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Устанавливает и включает более новую, быструю реализацию для OpenCL, для карт, которые не поддерживаются Intel Compute Runtime, ROCm или CUDA.

**Установленные или обновленные пакеты**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Другие изменения**

**Добавляет в `/etc/environment`:**
- Для GPU *Intel*
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- Для GPU *AMD*
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

Устанавливает все необходимые зависимости, затем клонирует его [репозиторий](https://github.com/atar-axis/xpadneo.git) и устанавливает из официального скрипта.

**Установленные или обновленные пакеты**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Помощник команд Distrobox

Устанавливает файлы, необходимые для перенаправления команд из distroboxes на хост, если команда не найдена внутри distrobox для `bash` и `zsh`; затем подключает их в `.bashrc` и `.zshrc`. Удаление может быть выполнено простым удалением папки с файлами.

**Расположение установленных файлов**
`$HOME/.local/distrobox-handler`

### Кодеки для потокового воспроизведения для Fedora/OpenSUSE

Устанавливает кодеки, необходимые для потокового мультимедиа с аппаратным ускорением в этих операционных системах. Также установит RPMFusion на Fedora, если он еще не установлен, поскольку необходимые пакеты не предоставляются в стандартных репозиториях.

**Установленные или обновленные пакеты**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE:`opi` и, из opi, `codecs`

### Microsoft CoreFonts

Загружает файлы с [SourceForge](http://downloads.sourceforge.net/corefonts), затем использует `cabextract` для извлечения установщиков шрифтов и устанавливает шрифты в `$HOME/.local/share/fonts`. Удаление может быть выполнено удалением папок CoreFonts из `$HOME/.local/share/fonts`.

**Установленные или обновленные пакеты**
- Все системы: `cabextract`

### Отключение митигации Split-lock

Отключает митигацию split-lock, которая была сделана для обеспечения хороших практик разработки в Linux, но приводит к значительной потере производительности в старых приложениях и нескольких играх, особенно от *Playstation Studios*, которые не сделаны с учетом Linux. Поскольку это не функция безопасности, безопасно отключать. Это делается файлом `99-splitlock.conf`, который вводит соответствующий параметр ядра. Удаление может быть выполнено удалением файла.

**Установленный файл**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Принудительно закрывает приложение, потребляющее память или имеющее утечки, в случае экстремального давления памяти и swap, избегая ситуации 'out of memory', на которую системы Linux печально известно плохо реагируют, поскольку эвристическое сканирование, выполняемое ядром для решения, какой процесс закрыть, может занять несколько часов.

**Установленные или обновленные пакеты**
- Все системы: `earlyoom`

**Примененная пользовательская настройка**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Отображает снимки btrfs в вашем загрузочном меню GRUB, идеально для выбора предыдущего снимка в случае, если вам нужно восстановить сломанную систему. Клонирован и установлен из его официального [репозитория](https://github.com/Antynea/grub-btrfs); затем применяются пользовательские настройки. Требует `grub`, и не продолжит, если `grub` не найден в вашей системе. Удаление должно следовать их документации и не может быть выполнено через LinuxToys.

**Установленные или обновленные пакеты**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Примененные пользовательские настройки**
- Устанавливает стандартную конфигурацию snapper 'root' со следующими изменениями от стандартов snapper:
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
Затем включает службы systemd `snapper-boot.timer` и `snapper-cleanup.timer`.

### iNet Wireless Daemon

Беспроводной сетевой демон, сделанный Intel, который имеет лучшую общую производительность и задержку, чем стандартный `wpa_supplicant`, однако может быть несовместим с определенными корпоративными сетями.

**Установленные или обновленные пакеты**
- Все системы: `iwd`

**Примененные пользовательские настройки**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Отключает службу systemd `wpa_supplicant`.

### LucidGlyph

Установлен с помощью официального скрипта из его [репозитория](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Изменяет стандартный регулятор GPU на `ondemand` (`powersave` является стандартом для большинства дистрибутивов), делая частоты процессора более отзывчивыми и увеличивая отзывчивость и производительность системы при небольшом среднем увеличении потребления энергии. Не рекомендуется для ноутбуков из-за их ограниченных возможностей теплоотвода.

**Примененные пользовательские настройки**
- Для процессоров *Intel* драйвер `intel_pstate` предотвращает использование регулятора `ondemand` и должен быть отключен первым:
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- Создает и включает новую службу systemd: `/etc/systemd/system/set-ondemand-governor.service`
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

Устанавливает `power-options` для интуитивного и подробного управления настройками питания через интерфейс GTK через его официальный скрипт или через [leo/power-options COPR репозиторий](https://copr.fedorainfracloud.org/coprs/leo/power-options). Включает его значок в трее. Удаление должно следовать их документации и не может быть выполнено через LinuxToys, кроме пользователей Atomic Fedora, которые могут удалить его просто удалив пакет `power-options`.

**Установленные или обновленные пакеты**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): `gtk4-devel libadwaita-devel power-options`

### Ядро Psycachy

Модифицированное ядро Linux, включающее многие из патчей ядра CachyOS, которые были протестированы и признаны безопасными для использования в системах на основе Debian/Ubuntu, поддерживается Psygreg. Недоступно для других операционных систем. Загружается и устанавливается из последних релизов его [официального репозитория](https://github.com/psygreg/linux-psycachy).

**Установленные или обновленные пакеты**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

Патч к файлу конфигурации входа в оболочку, который включает больший размер кэша шейдеров для любого GPU, устраняя заикания и падения FPS в нескольких современных играх. Напоминание: он не займет все пространство, если не будет действительно нужен. Может быть отменен простым удалением добавленных строк в `.bash_profile`, `.profile` или `.zshrc`.

**Примененные пользовательские настройки**
- GPU *AMD* и *Intel*
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

### Исправление политики SELinux для OpenSUSE

Исправляет проблему, когда SELinux предотвращает запуск чего-либо через WINE/Proton на OpenSUSE. Может быть отменено использованием той же команды с `0` как булевым значением вместо `1`.

**Примененные пользовательские настройки**
```
setsebool -P selinuxuser_execmod 1
```

### Создатель файла подкачки

Создает файл подкачки 8GB, либо в `/swapfile`, либо в `/home/swapfile` (`/home/swap/swapfile` для файловых систем btrfs). Включает необходимые настройки для правильной работы файла подкачки в файловых системах btrfs, избегая наводнения снимков.

**Удаление**
```
sudo swapoff ПУТЬ_К_ФАЙЛУ_ПОДКАЧКИ
sudo rm -rf ПУТЬ_К_ФАЙЛУ_ПОДКАЧКИ
```
Затем удалите запись файла подкачки из `/etc/fstab`.

### Настройка брандмауэра

Устанавливает необходимые пакеты, затем применяет разумные настройки по умолчанию, которые идеальны для большинства пользователей.

**Установленные или обновленные пакеты**
- Все системы: `ufw gufw`

**Примененные пользовательские настройки**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Устанавливает приложение из Flathub, применяет необходимые файлы конфигурации `udev` для работы в `/etc/udev/rules.d`, затем отображает документацию по поддерживаемым устройствам в вашем браузере. Файлы конфигурации получены из его [официального GitHub репозитория](https://github.com/berarma/oversteer).

### DaVinci Resolve

Предлагает установку через [DaVinciBox](https://github.com/zelikos/davincibox), следуя стандартным зависимостям и процедурам для этого, или нативную установку через пользовательские процедуры. Версия *Studio* требует лицензию, купленную у Blackmagic Design. Удаление может быть выполнено отменой экспорта ярлыков приложения и удалением distrobox для *DaVinciBox*, следуя инструкциям в его репозитории; использованием деинсталлятора из меню приложений на Fedora/OpenSUSE; или просто удалением пакета через ваш пакетный менеджер в других системах.

**Установленные или обновленные пакеты для нативной установки**
- Arch: `davinci-resolve` или `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` и `davinci-resolve` или `davinci-resolve-studio`

### Active Directory

Устанавливает все пакеты, необходимые для включения интеграции в домены Active Directory.

**Установленные или обновленные пакеты**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Сервер Cockpit

Устанавливает `cockpit` из бэкпортов Debian или стандартных репозиториев. Системы Atomic Fedora требуют дополнительных пакетов. После этого выполняет необходимые конфигурации брандмауэра для Fedora и OpenSUSE, чтобы разрешить доступ к нему из *Клиента Cockpit*.

**Установленные или обновленные пакеты**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Примененные пользовательские настройки**
- Включает службу systemd `cockpit.socket`
- Для Fedora:
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- Для OpenSUSE:
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

Получает все необходимые зависимости и устанавливает `waydroid` из репозиториев вашего дистрибутива или его собственного репозитория специально для Debian/Ubuntu. Затем инициализирует контейнер, устанавливая Android с разумными настройками по умолчанию и включенной поддержкой ***Google Play Store***. Опционально, будет использовать [waydroid_scripts](https://github.com/casualsnek/waydroid_script) для установки возможностей трансляции ARM с использованием *libndk* для процессоров AMD или *libhoudini* для процессоров Intel.

**Установленные или обновленные пакеты**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Другие: `waydroid`

**С трансляциями ARM**
- Arch: `python-pip`
- Другие: `python3-pip`

### OpenRGB

Устанавливает основное приложение из Flathub, затем получает правила udev для его работы из его [официального репозитория](https://openrgb.org/releases) или из *RPMFusion* на Fedora.

**Установленные или обновленные пакеты**
- Fedora: `openrgb-udev-rules`

### OpenRazer

Устанавливает его с помощью метапакета `openrazer-meta` из его [официальных репозиториев](https://openrazer.github.io/), вместе с его GUI *Polychromatic* из Flathub; или, для систем Fedora Atomic (`rpm-ostree`), из репозитория модулей ядра *Universal Blue*. Для систем Universal Blue устанавливает с помощью скрипта, предоставленного `ujust`.

**Установленные или обновленные пакеты**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Другие: `openrazer-meta`

### Автоматические обновления для RPM-OSTree

Включает автоматические обновления `rpm-ostree` в режиме подготовки, так что ваша работа никогда не будет прервана. Они будут незаметно загружены и преобразованы в новое развертывание, которое будет применено, когда вы решите перезагрузить систему. Может быть отменено отключением службы systemd `rpm-ostree-automatic.timer`.

**Применяемые пользовательские настройки**
- добавлено в `/etc/rpm-ostreed.conf`
```
[Daemon]
AutomaticUpdatePolicy=stage
```
- включает службу systemd `rpm-ostree-automatic.timer`

### Nerd Fonts

Получает данные о шрифтах, доступных на [NerdFonts](https://www.nerdfonts.com), и отображает их для установки. Выбранный шрифт будет установлен в `$HOME/.local/share/fonts`, и его можно удалить, просто удалив добавленные файлы в этот каталог.

### Lazyman

Устанавливает менеджер конфигурации *Lazyman* для *NeoVim* вместе с конфигурацией по выбору пользователя. Может быть удален путем удаления его папки.

**Установленные или обновленные пакеты**
- Все системы: `neovim git`

**Дополнительно установленные файлы**
- Каталог: `$HOME/.config/nvim-Lazyman`

### Starship

Использует официальный скрипт от [Starship](https://starship.rs) для установки или обновления. Может быть отменено путем удаления добавленной строки для его включения в вашем `.bashrc`, `.zshrc` или аналогичном файле конфигурации для вашей оболочки.

**Примененные пользовательские настройки**
- добавлено в `~/.bashrc`
```
eval "$(starship init bash)"
```

### Oh My ZSH

Использует официальный скрипт от [Oh My ZSH](https://ohmyz.sh) для установки или обновления. Может быть отменено путем удаления строки, которая его загружает из вашего `.zshrc`.

**Установленные или обновленные пакеты**
- Все системы: `zsh`

## Установщики репозиториев

### Brew
Установлен через его официальный установочный скрипт.

### Cargo
Установлен через его официальный установочный скрипт от RustUp.

### Chaotic-AUR
Установлен следуя их документации, с временными настройками для избежания ошибок, вызванных слишком быстрой отправкой команд в pacman.

### Flathub
Устанавливает `flatpak` и добавляет репозиторий Flathub как на системном, так и на пользовательском уровне.

**Установленные или обновленные пакеты**
- Все системы: `flatpak`

### Pip
Установлен через пакеты `python-pip` (Arch) или `python3-pip` (другие системы) из стандартных репозиториев.

### RPMFusion
Установлен следуя их документации, с специфической итерацией для систем Fedora Atomic (на основе `rpm-ostree`).

## LSW-WinBoat

Настраивает установку *Docker* с правильными настройками и патчами для использования с **WinBoat** - который может установить Windows в контейнер Docker и взаимодействовать с его приложениями, интегрируя их в хост-систему. Затем устанавливает *WinBoat* сам по себе из его [официального репозитория GitHub](https://github.com/TibixDev/winboat), и *FreeRDP* из Flathub для его использования.

**Установленные или обновленные пакеты**
- Arch:`docker docker-compose winboat-bin`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`
- OpenSUSE:`docker docker-compose winboat`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`

- Flathub: `com.freerdp.FreeRDP`

**Примененные пользовательские настройки**
- Включает службы systemd `docker` и `docker.socket`
- Включает модуль ядра `iptables` с правильными настройками, в `/etc/modules-load.d/iptables.conf`:
```
ip_tables
niptable_nat
```
- Включает использование Docker без root, добавляя пользователя в группу пользователей `docker`, что требует пользовательского патча для систем на базе `rpm-ostree`:
```
echo "$(getent group docker)" >> /etc/group
```
- Открывает внутренние порты Docker 8006 и 3389 в `firewalld`, чтобы позволить WinBoat достичь своего контейнера, исправляя проблему на Fedora и производных (не применимо к другим операционным системам):
```
firewall-cmd --zone=docker --change-interface=docker0
firewall-cmd --zone=docker --add-port=8006/tcp --permanent
firewall-cmd --zone=docker --add-port=3389/tcp --permanent
```

## Оптимизированные настройки по умолчанию

Настройка в один клик, которая устанавливает проверенный, стабильный набор оптимизаций для вашей системы. Не будет устанавливать функции, которые не актуальны или уже присутствуют на вашей машине.

#### Включенные функции

**Производительность**
- EarlyOOM
- Shader Booster
- Отключение митигации Split-lock
- Файлы конфигурации systemd *CachyOS* - протестированы и отфильтрованы для стабильности, поэтому производительность не идет в ущерб компромиссу

**Качество жизни**
- FFMPEGThumbnailer
- Кодеки потокового вещания Fedora/OpenSUSE
- Исправление файла `/etc/sudoers` для Debian - исправляет проблему, делающую пользователя неспособным использовать `sudo` после установки с образа установки по умолчанию
- Исправление тайм-аута Gnome - увеличивает толерантность тайм-аута для остановки чрезмерных запросов 'программа не отвечает'
- Подписывание модулей ядра для RPM-OSTree
- включение автоматических обновлений для `rpm-ostree` - в режиме этапа, чтобы ваша работа никогда не была прервана
- (опционально) Аппаратное ускорение для Flatpaks

**Профили питания**
- *Ноутбук*: Power Optimizer
- *Настольный компьютер*: CPU ondemand

## Выбор Psygreg

Проверенный набор приложений для того, чтобы сделать вашу игровую жизнь в Linux проще, чем когда-либо, в одном клике.

#### Включенные функции

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
- Extension Manager (только для десктопов *Gnome*)
- Gnome Tweaks (только для десктопов *Gnome*)