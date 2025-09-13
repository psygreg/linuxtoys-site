# Base de Conocimiento

## Directrices Básicas de Características de LinuxToys

- Las características solo estarán disponibles en sistemas que sean compatibles *y* relevantes.
- Todas las características y recursos dentro de la aplicación deben seguir siempre el principio **KISS** (*Keep It Simple, Stupid*) - deben ser fáciles de entender y utilizar a través de sus etiquetas y descripciones rápidas.
- Las características deben hacerse de forma que funcionen **óptimamente** para el usuario.
- La interacción del usuario está limitada a solicitudes `zenity` para evitar impredecibilidades y asegurar la confiabilidad.
- Los Flatpaks deben usarse siempre que sea posible por su **consistencia** a través de los runtimes de flatpak y **seguridad** a través del control granular de permisos.

## Instalado como paquetes nativos

Desde repositorios del sistema por defecto, o teniendo repositorios añadidos por LinuxToys, y no se hacen otros cambios.

### Repositorios por defecto
- Java OpenJDK (cualquier versión)
- Maven
- NeoVim
- Controlador WiFi Broadcom (disponible solo para Fedora/Arch)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch; otros lo tienen desde Flathub)
- F3 - Fight Flash Fraud (también abre su documentación en tu navegador después de instalado)
- Wireguard

### Repositorios añadidos
- Visual Studio Code: desde [el repositorio oficial de Microsoft.](https://packages.microsoft.com)
- .NET SDK: desde [el repositorio oficial de Microsoft](https://packages.microsoft.com), solo en OpenSUSE y Debian. Otros sistemas lo tienen instalado desde repositorios por defecto.
- Sublime Text: desde [sus repositorios oficiales.](https://download.sublimetext.com)
- Unity Hub: desde [el repositorio oficial de Unity.](https://hub.unity3d.com/linux/repos) Solo disponible en sistemas oficialmente soportados por Unity.
- Controladores Nvidia: desde [el repositorio oficial de Nvidia](https://developer.download.nvidia.com/compute/cuda/repos) en Debian o *RPMFusion* en Fedora. Otros sistemas lo tienen instalado desde repositorios por defecto.
- btrfs-Assistant: desde [Chaotic-AUR](https://aur.chaotic.cx) en Arch. Otros sistemas lo tienen instalado desde repositorios por defecto. Incluye `snapper` desde repositorios por defecto en todos los sistemas.
- Preload: desde [Chaotic-AUR](https://aur.chaotic.cx) en Arch, o [repositorio COPR elxreno/preload](https://copr.fedorainfracloud.org/coprs/elxreno/preload) en Fedora. Otros sistemas lo tienen instalado desde repositorios por defecto.
- Touchegg: desde su repositorio oficial PPA, o [repositorio GitHub](https://github.com/JoseExposito/touchegg) para Ubuntu y Debian respectivamente. Otros sistemas lo tienen instalado desde repositorios por defecto. Solo X11.
- Gamescope: desde *Multilib* en Arch, o *RPMFusion* en Fedora. Otros sistemas lo tienen instalado desde repositorios por defecto.
- Steam: desde *Multilib* en Arch, o *RPMFusion* en Fedora. Otros sistemas lo tienen instalado desde Flathub.
- Topgrade: desde *Pip*.
- Webmin: desde su [repositorio oficial de GitHub](https://github.com/webmin/webmin).
- Arch-Update: desde [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP: desde [el repositorio oficial de Cloudflare](https://pkg.cloudflareclient.com/).
- Solaar: desde su repositorio oficial PPA en Ubuntu. Otros sistemas lo tienen instalado desde repositorios por defecto.
- IVPN: desde sus [repositorios oficiales](https://repo.ivpn.net/stable).
- Mullvad VPN: desde sus [repositorios oficiales](https://repository.mullvad.net) o [Chaotic-AUR](https://aur.chaotic.cx) en Arch.
- NordVPN: desde su [repositorio oficial](https://downloads.nordcdn.com/apps) o [Chaotic-AUR](https://aur.chaotic.cx) en Arch.

### Otros
- Heroic Games Launcher: desde su [repositorio oficial de GitHub](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) para Fedora/Arch. Otros sistemas lo tienen instalado desde Flathub.
- LSFG-VK: desde su [repositorio oficial de GitHub](https://github.com/PancakeTAS/lsfg-vk). Incluye runtimes flatpak. Requiere Lossless Scaling para Windows.
- Figma: instalado a través del instalador AppImage desde [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN: instalado a través de su instalador oficial basado en AppImage.
- Windscribe VPN: desde sus [repositorios oficiales](https://windscribe.com/install/desktop).

## Instalado como flatpaks

Desde flathub, o teniendo repositorios añadidos por LinuxToys, y no se hacen otros cambios. Los flatpaks a nivel de sistema solo se usan cuando es estrictamente necesario.

### Nivel de usuario
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (incluye Mangohud, paquete instalado nativamente)
- Mangojuice (incluye Mangohud, paquete instalado nativamente)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (requiere app instalada en el dispositivo VR - seguir instrucciones al primer inicio)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (opcionalmente parchea archivos en `$HOME/.config` y `$HOME/.local` con [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
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
- Distroshelf (incluye paquetes `podman` y `distrobox` instalados nativamente)
- Flatseal
- Handbrake
- Mission Center
- OBS Studio (incluye plugin [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture))
- QPWGraph
- Warehouse
- StreamController
- LibreWolf
- Mullvad Browser
- Proton VPN
- Surfshark
- Ungoogled Chromium
- Gear Lever

#### Repositorios añadidos

- GeForce NOW: desde su repositorio oficial proporcionado por *Nvidia*

### Nivel de sistema

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper (incluye `ratbagd` para Debian/Ubuntu o `libratbag` para otros, paquetes instalados nativamente)

## Procedimientos Personalizados

Requieren un procedimiento de instalación personalizado o ajustes específicos para funcionar óptimamente, que son implementados por LinuxToys. Usualmente también ofrecen eliminación si ya están instalados, a menos que no sea necesario (si eliminar el flatpak o paquete principal deshará los otros cambios) o se dan instrucciones de eliminación aquí.

### Docker

Instala los repositorios oficiales de Docker (excepto para Arch Linux y OpenSUSE, que no los necesitarán) y todos los paquetes necesarios desde allí a través del gestor de paquetes de tu sistema, luego añade tu usuario al grupo de usuarios `docker` e instala Portainer CE, que funciona constantemente en segundo plano ya que su propósito es ser un tablero de Docker y usa recursos negligibles de la máquina.

**Paquetes Instalados o Actualizados**
- Arch:`docker docker-compose curl dialog git iproute2 libnotify`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin curl dialog git iproute libnotify`
- OpenSUSE:`docker docker-compose curl dialog git iproute2 libnotify-tools`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin curl dialog git iproute2 libnotify-bin`

**Instalación de Portainer CE**
```
sudo docker volume create portainer_data
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

Tanto **Godot** como **GodotSharp** se instalan a través de un procedimiento personalizado, ya que Godot no proporciona paquetes estándar. *GodotSharp* incluye la instalación de **.NET SDK** como también se describe en esta documentación, requerido para sus funciones.

- Ubicación de archivos instalados: `$HOME/.local/godot`
- Ubicación de acceso directo del menú de aplicaciones: `$HOME/.local/share/applications`

### Jetbrains Toolbox

Descarga la última versión comprimida desde el sitio web oficial y la instala a través de un procedimiento personalizado, ya que JetBrains solo proporciona AppImages de otra manera, que son notoriamente poco confiables.

- Ubicación de archivos instalados: `$HOME/.local/jetbrains-toolbox`
- Ubicación de acceso directo del menú de aplicaciones: `$HOME/.local/share/applications`

### Mise

Instala usando el script de instalación oficialmente proporcionado, luego sigue su documentación para configurar autocompletado, una característica muy deseada de él, para shells `bash`, `zsh` y `fish`; y muestra su documentación cuando termina en tu navegador. No puede usarse con shells `zsh` en sistemas inmutables (basados en `rpm-ostree`) debido a restricciones de inmutabilidad. La eliminación debe seguir su documentación y no puede hacerse a través de LinuxToys.

### Node Version Manager (NVM)

Instala usando el script de instalación oficialmente proporcionado, o a través de una configuración manual para distribuciones basadas en `rpm-ostree` ya que el script oficial no funciona para ellas; luego instala `yarn` a través de `npm` y muestra su documentación en tu navegador. La eliminación puede hacerse siguiendo su documentación, o simplemente eliminando `$HOME/.nvm` para sistemas basados en `rpm-ostree`.

**Paquetes Instalados o Actualizados**
- **Todos los sistemas**: `nodejs npm`
- **Desde NPM**: `yarn`

### PyEnv

Instala todas las dependencias requeridas, instala *PyEnv* usando su script oficial, luego configura su ruta en tus archivos de perfil `bash` y `zsh` y muestra su documentación en tu navegador. La eliminación debe seguir su documentación y no puede hacerse a través de LinuxToys.

**Paquetes Instalados o Actualizados**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

Instala usando su script de instalación oficial. Puede eliminarse a través del mismo script.

### Firma de Módulos del Kernel para RPM-OSTree

Establece una **MOK** (Machine Owner Key) que se genera aleatoriamente y es única para tu máquina; luego instala [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys) para firmar módulos del kernel con ella en el futuro. Requerido para hacer que los controladores de módulos del kernel *Nvidia*, *VirtualBox* y otros funcionen con Secure Boot habilitado. Se activa automáticamente cuando se instalan controladores Nvidia en sistemas inmutables basados en `rpm-ostree` si Secure Boot está habilitado en el momento de la instalación.

### Radeon Open Compute (ROCm)

Instala todos los paquetes ROCm y herramientas de diagnóstico requeridas para que funcione correctamente y añade tu usuario a los grupos de usuarios `render` y `video`, requerido para hacer `/dev/kfd` - que es requerido por ROCm - accesible sin root.

**Paquetes Instalados o Actualizados**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Controlador Realtek RTL8821CE

Instala [Controlador RTL8821CE por Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) y todas sus dependencias, reemplazando y poniendo en lista negra el controlador RTW8821CE por defecto que viene con el kernel, que no funciona correctamente o en absoluto con algunos dispositivos.

**Paquetes Instalados o Actualizados**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Instala y habilita una implementación más nueva y rápida para OpenCL, para tarjetas que no son soportadas por Intel Compute Runtime, ROCm o CUDA.

**Paquetes Instalados o Actualizados**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Otros Cambios**

**Añade a `/etc/environment`:**
- Para GPUs *Intel*
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- Para GPUs *AMD*
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

Instala todas las dependencias requeridas, luego clona su [repositorio](https://github.com/atar-axis/xpadneo.git) y lo instala desde el script oficial.

**Paquetes Instalados o Actualizados**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Ayudante de Comandos Distrobox

Instala archivos requeridos para redirigir comandos desde distroboxes al host si el comando no se encuentra dentro del distrobox para `bash` y `zsh`; luego los incluye en `.bashrc` y `.zshrc`. La eliminación puede hacerse simplemente eliminando la carpeta con los archivos.

**Ubicación de archivos instalados**
`$HOME/.local/distrobox-handler`

### Códecs de Streaming para Fedora/OpenSUSE

Instala los códecs requeridos para medios de streaming en esos sistemas operativos.

**Paquetes Instalados o Actualizados**
- Fedora: `libavcodec-freeworld`
- OpenSUSE:`opi` y, desde opi, `codecs`

### Microsoft CoreFonts

Descarga los archivos desde [SourceForge](http://downloads.sourceforge.net/corefonts), luego usa `cabextract` para extraer los instaladores de fuentes e instala las fuentes en `$HOME/.local/share/fonts`. La eliminación puede hacerse eliminando las carpetas CoreFonts de `$HOME/.local/share/fonts`.

**Paquetes Instalados o Actualizados**
- Todos los sistemas: `cabextract`

### Deshabilitador de Mitigación Split-lock

Deshabilita la mitigación split-lock, que se hizo para hacer cumplir buenas prácticas de desarrollo en Linux, pero resulta en pérdida significativa de rendimiento en aplicaciones más antiguas y varios juegos, especialmente de *Playstation Studios*, que no están hechos teniendo en cuenta Linux. Como no es una característica de seguridad, es seguro deshabilitarla. Esto se hace mediante un archivo `99-splitlock.conf` que inyecta el parámetro de kernel apropiado. La eliminación puede hacerse eliminando el archivo.

**Archivo instalado**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Cierra forzosamente una aplicación hambrienta de memoria o con fugas en caso de presión extrema de memoria y swap, evitando una situación de 'out of memory', a la cual los sistemas Linux reaccionan notoriamente mal, ya que el escaneo heurístico realizado por el kernel para decidir qué proceso cerrar puede tomar varias horas.

**Paquetes Instalados o Actualizados**
- Todos los sistemas: `earlyoom`

**Configuración personalizada aplicada**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Muestra snapshots de btrfs en tu menú de arranque GRUB, perfecto para seleccionar un snapshot anterior en caso de que necesites restaurar un sistema roto. Clonado e instalado desde su [repositorio](https://github.com/Antynea/grub-btrfs) oficial; luego se aplican configuraciones personalizadas. Requiere `grub`, y no procederá si `grub` no se encuentra en tu sistema. La eliminación debe seguir su documentación y no puede hacerse a través de LinuxToys.

**Paquetes Instalados o Actualizados**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Configuraciones personalizadas aplicadas**
- Establece una configuración snapper 'root' por defecto, con los siguientes cambios de los valores por defecto de snapper:
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
Luego habilita los servicios systemd `snapper-boot.timer` y `snapper-cleanup.timer`.

### iNet Wireless Daemon

Un daemon de red inalámbrica hecho por Intel, que tiene mejor rendimiento general y latencia que el `wpa_supplicant` por defecto, sin embargo puede no ser compatible con ciertas redes empresariales.

**Paquetes Instalados o Actualizados**
- Todos los sistemas: `iwd`

**Configuraciones personalizadas aplicadas**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Deshabilita el servicio systemd `wpa_supplicant`.

### LucidGlyph

Instalado usando el script oficial desde su [repositorio](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Cambia el governor GPU por defecto a `ondemand` (`powersave` es el por defecto para la mayoría de distribuciones), haciendo las frecuencias de CPU más reactivas e incrementando la responsividad y rendimiento del sistema, con un ligero aumento promedio de consumo de energía. No recomendado en laptops por sus capacidades limitadas de disipación térmica.

**Configuraciones personalizadas aplicadas**
- Para CPUs *Intel*, el controlador `intel_pstate` previene el uso del governor `ondemand` y tiene que ser deshabilitado primero:
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- Crea y habilita un nuevo servicio systemd: `/etc/systemd/system/set-ondemand-governor.service`
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

Instala `power-options` para gestionar configuraciones de energía intuitivamente y en gran detalle a través de una interfaz GTK a través de su script oficial o a través del [repositorio COPR leo/power-options](https://copr.fedorainfracloud.org/coprs/leo/power-options). Incluye su icono de bandeja. La eliminación debe seguir su documentación y no puede hacerse a través de LinuxToys, excepto para usuarios de Atomic Fedora, que pueden eliminarlo simplemente eliminando el paquete `power-options`.

**Paquetes Instalados o Actualizados**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): `gtk4-devel libadwaita-devel power-options`

### Kernel Psycachy

Un kernel Linux modificado que incorpora muchos de los parches de kernel de CachyOS que han sido probados y considerados seguros para usar en sistemas basados en Debian/Ubuntu, mantenido por Psygreg. No disponible para otros sistemas operativos. Descargado e instalado desde las últimas versiones de su [repositorio oficial](https://github.com/psygreg/linux-psycachy).

**Paquetes Instalados o Actualizados**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

Un parche al archivo de configuración de login del shell que habilita un tamaño de caché de shaders más grande para cualquier GPU, eliminando tartamudeos y caídas de FPS en varios juegos modernos. Recordatorio: no tomará todo el espacio a menos que realmente lo necesite. Puede revertirse simplemente eliminando las líneas añadidas a `.bash_profile`, `.profile` o `.zshrc`.

**Configuraciones personalizadas aplicadas**
- GPUs *AMD* e *Intel*
```
# enforce RADV vulkan implementation for AMD GPUs
export AMD_VULKAN_ICD=RADV

# increase AMD and Intel cache size to 12GB
export MESA_SHADER_CACHE_MAX_SIZE=12G
```
- GPUs *Nvidia*
```
# increase Nvidia shader cache size to 12GB
export __GL_SHADER_DISK_CACHE_SIZE=12000000000
```

### Corrección de Política SELinux de OpenSUSE

Corrige un problema donde SELinux previene que cualquier cosa funcione a través de WINE/Proton en OpenSUSE. Puede revertirse usando el mismo comando con `0` como valor booleano en lugar de `1`.

**Configuraciones personalizadas aplicadas**
```
setsebool -P selinuxuser_execmod 1
```

### Creador de Swapfile

Crea un swapfile de 8GB, ya sea en `/swapfile` o `/home/swapfile` (`/home/swap/swapfile` para sistemas de archivos btrfs). Incluye los ajustes necesarios para que el swapfile funcione correctamente en sistemas de archivos btrfs, evitando una inundación de snapshots.

**Eliminación**
```
sudo swapoff RUTA_SWAPFILE
sudo rm -rf RUTA_SWAPFILE
```
Luego elimina la entrada del swapfile de `/etc/fstab`.

### Configuración de Firewall

Instala los paquetes requeridos, luego aplica valores por defecto sensatos que son ideales para la mayoría de usuarios.

**Paquetes Instalados o Actualizados**
- Todos los sistemas: `ufw gufw`

**Configuraciones personalizadas aplicadas**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Instala la aplicación desde Flathub, aplica los archivos de configuración `udev` requeridos para que funcione en `/etc/udev/rules.d`, luego muestra documentación sobre dispositivos soportados en tu navegador. Los archivos de configuración se obtienen desde su [repositorio oficial de GitHub](https://github.com/berarma/oversteer).

### DaVinci Resolve

Ofrece instalación a través de [DaVinciBox](https://github.com/zelikos/davincibox) siguiendo dependencias y procedimientos estándar para ello, o instalación nativa a través de procedimientos personalizados. La versión *Studio* requiere una licencia comprada a Blackmagic Design. La eliminación puede hacerse desexportando los accesos directos de la app y borrando el distrobox para *DaVinciBox* siguiendo las instrucciones en su repositorio; usando el desinstalador desde el menú de aplicaciones en Fedora/OpenSUSE; o simplemente eliminando el paquete a través de tu gestor de paquetes en otros sistemas.

**Paquetes Instalados o Actualizados para instalación nativa**
- Arch: `davinci-resolve` o `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` y `davinci-resolve` o `davinci-resolve-studio`

### Active Directory

Instala todos los paquetes necesarios para habilitar la integración en dominios Active Directory.

**Paquetes Instalados o Actualizados**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Servidor Cockpit

Instala `cockpit` desde backports de Debian o repositorios por defecto. Los sistemas Atomic Fedora requieren paquetes adicionales. Después, realiza las configuraciones de firewall necesarias para Fedora y OpenSUSE para permitir acceder a él desde un *Cliente Cockpit*.

**Paquetes Instalados o Actualizados**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Configuraciones personalizadas aplicadas**
- Habilita el servicio systemd `cockpit.socket`
- Para Fedora:
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- Para OpenSUSE:
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

Obtiene todas las dependencias necesarias, e instala `waydroid` desde los repositorios de tu distribución, o su propio repositorio específicamente para Debian/Ubuntu. Luego inicializa el contenedor, instalando Android con valores por defecto sensatos y soporte para ***Google Play Store*** habilitado. Opcionalmente, usará [waydroid_scripts](https://github.com/casualsnek/waydroid_script) para instalar capacidades de traducción ARM usando *libndk* para procesadores AMD o *libhoudini* para procesadores Intel.

**Paquetes Instalados o Actualizados**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Otros: `waydroid`

**Con traducciones ARM**
- Arch: `python-pip`
- Otros: `python3-pip`

### OpenRGB

Instala la aplicación principal desde Flathub, luego obtiene las reglas udev para hacerla funcionar desde su [repositorio oficial](https://openrgb.org/releases) o desde *RPMFusion* en Fedora.

**Paquetes Instalados o Actualizados**
- Fedora: `openrgb-udev-rules`

### OpenRazer

Lo instala usando el metapaquete `openrazer-meta` desde sus [repositorios oficiales](https://openrazer.github.io/), junto con su GUI *Polychromatic* desde Flathub; o, para sistemas Fedora Atomic (`rpm-ostree`), desde el repositorio de módulos de kernel de *Universal Blue*. Para sistemas Universal Blue, instala usando el script proporcionado por `ujust`.

**Paquetes Instalados o Actualizados**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Otros: `openrazer-meta`

## Instaladores de Repositorio

### Brew
Instalado a través de su script de instalación oficial.

### Cargo
Instalado a través de su script de instalación oficial por RustUp.

### Chaotic-AUR
Instalado siguiendo su documentación, con ajustes de tiempo para evitar errores causados por enviar comandos demasiado rápido a pacman.

### Flathub
Instala `flatpak` y añade el repositorio Flathub tanto a nivel de sistema como de usuario.

**Paquetes Instalados o Actualizados**
- Todos los sistemas: `flatpak`

### Pip
Instalado a través de paquetes `python-pip` (Arch) o `python3-pip` (otros sistemas) desde repositorios por defecto.

### RPMFusion
Instalado siguiendo su documentación, con una iteración específica para sistemas Fedora Atomic (basados en `rpm-ostree`).

## Valores por Defecto Optimizados

Una configuración de un clic que instala una selección curada y estable de optimizaciones para tu sistema. No instalará características que no sean relevantes o ya estén presentes en tu máquina.

#### Características Incluidas

**Rendimiento**
- EarlyOOM
- Shader Booster
- Deshabilitador de Mitigación Split-lock
- Archivos de configuración systemd de *CachyOS* - probados y filtrados para estabilidad, por lo que el rendimiento no viene con un compromiso

**Calidad de Vida**
- FFMPEGThumbnailer
- Códecs de Streaming Fedora/OpenSUSE
- Corrección del archivo `/etc/sudoers` para Debian - corrige un problema que hace que el usuario no pueda usar `sudo` después de instalar desde la imagen de instalación por defecto
- Corrección de timeout de Gnome - aumenta la tolerancia de timeout para detener excesivas solicitudes de 'el programa no responde'
- Firma de Módulos de Kernel para RPM-OSTree
- habilitación de actualizaciones automáticas para `rpm-ostree` - en modo de etapa para que tu trabajo nunca sea interrumpido

**Perfiles de Energía**
- *Laptop*: Power Optimizer
- *Desktop*: CPU ondemand

## Selecciones de Psygreg

Una selección curada de aplicaciones para hacer tu vida gaming en Linux más fácil que nunca, a un clic de distancia.

#### Características Incluidas

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
- Extension Manager (solo para escritorios *Gnome*)
- Gnome Tweaks (solo para escritorios *Gnome*)