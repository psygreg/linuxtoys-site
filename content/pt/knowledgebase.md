# Base de Conhecimento

## Diretrizes Básicas das Funcionalidades do LinuxToys

- As funcionalidades só estarão disponíveis em sistemas onde são compatíveis *e* relevantes.
- Todas as funcionalidades e recursos dentro da aplicação devem sempre seguir o princípio **KISS** (*Keep It Simple, Stupid*) - devem ser fáceis de entender e utilizar através de suas etiquetas e descrições rápidas.
- As funcionalidades devem ser feitas de forma que funcionem **otimamente** para o usuário.
- A interação do usuário é limitada a prompts `zenity` para evitar imprevisibilidades e garantir confiabilidade.
- Flatpaks devem ser usados sempre que possível pela sua **consistência** através dos runtimes flatpak e **segurança** através do controle granular de permissões.

## Instalado como pacotes nativos

A partir de repositórios padrão do sistema, ou tendo repositórios adicionados pelo LinuxToys, e nenhuma outra mudança é feita.

### Repositórios padrão
- Java OpenJDK (qualquer versão)
- Maven
- NeoVim
- Driver WiFi Broadcom (disponível apenas para Fedora/Arch)
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris (Fedora/Arch; outros têm do Flathub)
- F3 - Fight Flash Fraud (também abre sua documentação no seu navegador após instalado)
- Wireguard
- VLC
- Gnome Tweaks
- OBS Studio (inclui o plugin [Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture) e `v4l2loopback` para compatibilidade de Câmera Virtual), se a máquina tiver uma GPU Intel (discreta ou integrada) e não estiver executando sistemas baseados em Arch. Caso contrário, será instalado como um flatpak de nível de usuário do Flathub (sem GPU Intel), do [AUR](https://aur.archlinux.org/packages/obs-studio-browser) devido à falta de uma fonte de navegador no pacote padrão do Arch Linux, ou de seu repositório PPA oficial para Ubuntu.
- Nala

### Repositórios adicionados
- Visual Studio Code: do [repositório oficial da Microsoft.](https://packages.microsoft.com)
- .NET SDK: do [repositório oficial da Microsoft](https://packages.microsoft.com), apenas no OpenSUSE e Debian. Outros sistemas têm instalado dos repositórios padrão.
- Sublime Text: dos [seus repositórios oficiais.](https://download.sublimetext.com)
- Unity Hub: do [repositório oficial da Unity.](https://hub.unity3d.com/linux/repos) Disponível apenas em sistemas oficialmente suportados pela Unity.
- Drivers Nvidia: do [repositório oficial da Nvidia](https://developer.download.nvidia.com/compute/cuda/repos) no Debian ou *RPMFusion* no Fedora. Outros sistemas têm instalado dos repositórios padrão.
- btrfs-Assistant: do [Chaotic-AUR](https://aur.chaotic.cx) no Arch. Outros sistemas têm instalado dos repositórios padrão. Inclui `snapper` dos repositórios padrão em todos os sistemas.
- Preload: do [Chaotic-AUR](https://aur.chaotic.cx) no Arch, ou [repositório COPR elxreno/preload](https://copr.fedorainfracloud.org/coprs/elxreno/preload) no Fedora. Outros sistemas têm instalado dos repositórios padrão.
- Touchegg: do seu repositório PPA oficial, ou [repositório GitHub](https://github.com/JoseExposito/touchegg) para Ubuntu e Debian respectivamente. Outros sistemas têm instalado dos repositórios padrão. Apenas X11.
- Gamescope: do *Multilib* no Arch, ou *RPMFusion* no Fedora. Outros sistemas têm instalado dos repositórios padrão.
- Steam: do *Multilib* no Arch, ou *RPMFusion* no Fedora. Outros sistemas têm instalado do Flathub.
- Topgrade: do *Pip*.
- Webmin: do seu [repositório GitHub oficial](https://github.com/webmin/webmin).
- Arch-Update: do [Chaotic-AUR](https://aur.chaotic.cx).
- Cloudflare WARP: do [repositório oficial da Cloudflare](https://pkg.cloudflareclient.com/).
- Solaar: do seu repositório PPA oficial no Ubuntu. Outros sistemas têm instalado dos repositórios padrão.
- IVPN: dos seus [repositórios oficiais](https://repo.ivpn.net/stable).
- Mullvad VPN: dos seus [repositórios oficiais](https://repository.mullvad.net) ou [Chaotic-AUR](https://aur.chaotic.cx) no Arch.
- NordVPN: do seu [repositório oficial](https://downloads.nordcdn.com/apps) ou [Chaotic-AUR](https://aur.chaotic.cx) no Arch.
- Input Remapper: do [Chaotic-AUR](https://aur.chaotic.cx). Outros sistemas têm instalado dos repositórios padrão.
- Kisak-Mesa: de seu repositório PPA oficial, versão "fresh".
- OpenLinkHub: de seus repositórios oficiais PPA, COPR e AUR. Certifique-se de salvar a página aberta após a instalação nos seus favoritos, pois ela é o painel de controle.

### Outros
- Heroic Games Launcher: do seu [repositório GitHub oficial](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) para Fedora/Arch. Outros sistemas têm instalado do Flathub.
- LSFG-VK: do seu [repositório GitHub oficial](https://github.com/PancakeTAS/lsfg-vk). Inclui runtimes flatpak. Requer Lossless Scaling para Windows.
- Figma: instalado através do instalador AppImage do [Figma-Linux](https://github.com/Figma-Linux/figma-linux).
- ExpressVPN: instalado através do seu instalador oficial baseado em AppImage.
- Windscribe VPN: dos seus [repositórios oficiais](https://windscribe.com/install/desktop).
- Faugus Launcher: do Flathub; do seu repositório AUR oficial se estiver no Arch Linux e sistemas derivados; ou repositório COPR para Fedora e derivados.
- Positron: dos seus pacotes oficiais para sistemas compatíveis.
- RStudio: dos seus pacotes oficiais para sistemas compatíveis.
- Adoptium JDK: dos seus pacotes oficiais para sistemas compatíveis.
- Astah Pro: dos seus pacotes oficiais para sistemas compatíveis.

## Instalado como flatpaks

Do flathub, ou tendo repositórios adicionados pelo LinuxToys, e nenhuma outra mudança é feita. Flatpaks de nível de sistema são usados apenas quando estritamente necessário.

### Nível de usuário
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay (inclui Mangohud, pacote instalado nativamente)
- Mangojuice (inclui Mangohud, pacote instalado nativamente)
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN (requer app instalado no dispositivo VR - seguir instruções no primeiro lançamento)
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP (opcionalmente aplica patches em arquivos em `$HOME/.config` e `$HOME/.local` com [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git))
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
- Distroshelf (inclui pacotes `podman` e `distrobox` instalados nativamente)
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
- Greenlight
- Zed
- Bitwarden
- KeePassXC
- RcloneUI

#### Repositórios adicionados

- GeForce NOW: do seu repositório oficial fornecido pela *Nvidia*

### Nível de sistema

- Bazaar
- EasyEffects
- LACT
- Piper (inclui `ratbagd` para Debian/Ubuntu ou `libratbag` para outros, pacotes instalados nativamente)
- Aceleração de Hardware para Flatpaks (ffmpeg-full para os runtimes flatpak atualmente suportados)
- OptimusUI (inclui `nvidia-prime`, necessário para funcionamento)

## Procedimentos Personalizados

Requerem um procedimento de instalação personalizado ou ajustes específicos para funcionar optimamente, que são implementados pelo LinuxToys. Geralmente também oferecem remoção se já instalados, a menos que não seja necessário (se remover o flatpak ou pacote principal desfará as outras mudanças) ou instruções de remoção são dadas aqui.

### Stoat

Não possui nenhum empacotamento atualizado em repositórios além do NixOS (unstable), portanto é instalado ou atualizado pelo LinuxToys em `$HOME/.local/share/stoat` a partir do arquivo *zip* fornecido no repositório oficial do GitHub. Pode ser removido simplesmente deletando este diretório.

### Tac Writer

Instalado usando o script gentilmente fornecido pelo desenvolvedor em seu [repositório GitHub](https://github.com/narayanls/tac-writer) como um pacote padrão através do seu gerenciador de pacotes.

### Docker

Instala os repositórios oficiais do Docker (exceto para Arch Linux e OpenSUSE, que não precisarão deles) e todos os pacotes necessários a partir deles através do gerenciador de pacotes do seu sistema, em seguida, adiciona seu usuário ao grupo de usuários `docker`.

**Pacotes Instalados ou Atualizados**
- Arch:`docker docker-compose`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
- OpenSUSE:`docker docker-compose`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

### Portainer CE

Instala um contêiner Portainer CE no Docker seguindo as instruções de sua documentação. Ele é executado constantemente em segundo plano, pois seu propósito é ser um painel do Docker a partir de uma interface de usuário do navegador e usa recursos insignificantes da máquina. Requer Docker configurado corretamente com uso sem root pelo próprio LinuxToys ou manualmente.

**Procedimento de Instalação:**
```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

Tanto **Godot** como **GodotSharp** são instalados através de um procedimento personalizado, já que o Godot não fornece pacotes padrão. *GodotSharp* inclui a instalação do **.NET SDK** como também descrito nesta documentação, necessário para suas funções.

- Localização dos arquivos instalados: `$HOME/.local/godot`
- Localização do atalho do menu de aplicações: `$HOME/.local/share/applications`

### Jetbrains Toolbox

Baixa a versão tarball mais recente do site oficial e instala através de um procedimento personalizado, já que a JetBrains só fornece AppImages de outra forma, que são notoriamente não confiáveis.

- Localização dos arquivos instalados: `$HOME/.local/jetbrains-toolbox`
- Localização do atalho do menu de aplicações: `$HOME/.local/share/applications`

### Mise

Instala usando o script de instalação oficialmente fornecido, depois segue sua documentação para configurar autocompletações, um recurso muito desejado dele, para shells `bash`, `zsh` e `fish`; e exibe sua documentação quando termina no seu navegador. Não pode ser usado com shells `zsh` em sistemas imutáveis (baseados em `rpm-ostree`) devido a restrições de imutabilidade. A remoção deve seguir a documentação deles e não pode ser feita através do LinuxToys.

### Node Version Manager (NVM)

Instala usando o script de instalação oficialmente fornecido, ou através de uma configuração manual para distribuições baseadas em `rpm-ostree` já que o script oficial não funciona para elas; depois instala `yarn` através do `npm` e exibe a documentação deles no seu navegador. A remoção pode ser feita seguindo a documentação deles, ou simplesmente removendo `$HOME/.nvm` para sistemas baseados em `rpm-ostree`.

**Pacotes Instalados ou Atualizados**
- **Todos os sistemas**: `nodejs npm`
- **Do NPM**: `yarn`

### PyEnv

Instala todas as dependências necessárias, instala *PyEnv* usando seu script oficial, depois configura seu caminho nos seus arquivos de perfil `bash` e `zsh` e exibe a documentação deles no seu navegador. A remoção deve seguir a documentação deles e não pode ser feita através do LinuxToys.

**Pacotes Instalados ou Atualizados**
- Arch: `base-devel openssl zlib xz tk`
- Fedora: `make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE:`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu: `make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

Instala usando seu script de instalação oficial. Pode ser removido através do mesmo script.

### Assinatura de Módulo do Kernel para RPM-OSTree

Define uma **MOK** (Machine Owner Key) que é gerada aleatoriamente e única para sua máquina; depois instala [akmods-keys](https://github.com/CheariX/silverblue-akmods-keys) para assinar módulos do kernel com ela no futuro. Necessário para fazer drivers de módulos do kernel *Nvidia*, *VirtualBox* e outros funcionarem com Secure Boot habilitado. É automaticamente acionado ao instalar drivers Nvidia em sistemas imutáveis baseados em `rpm-ostree` se o Secure Boot estiver habilitado no momento da instalação.

### Radeon Open Compute (ROCm)

Instala todos os pacotes ROCm e ferramentas de diagnóstico necessárias para funcionar adequadamente e adiciona seu usuário aos grupos de usuários `render` e `video`, necessário para tornar `/dev/kfd` - que é requerido pelo ROCm - acessível sem root.

**Pacotes Instalados ou Atualizados**
- Arch: `comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora: `rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE:`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu: `libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Driver Realtek RTL8821CE

Instala [Driver RTL8821CE por Tomás Pinho](https://github.com/tomaspinho/rtl8821ce.git) e todas suas dependências, substituindo e colocando na lista negra o driver RTW8821CE padrão que vem com o kernel, que não funciona adequadamente ou de forma alguma com alguns dispositivos.

**Pacotes Instalados ou Atualizados**
- Arch: `linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE: `dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu: `bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Instala e habilita uma implementação mais nova e rápida para OpenCL, para placas que não são suportadas pelo Intel Compute Runtime, ROCm ou CUDA.

**Pacotes Instalados ou Atualizados**
- Arch: `opencl-mesa clinfo`
- Fedora: `mesa-libOpenCL clinfo`
- OpenSUSE:`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu: `mesa-opencl-icd clinfo`

**Outras Mudanças**

**Adiciona a `/etc/environment`:**
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

Instala todas as dependências necessárias, depois clona seu [repositório](https://github.com/atar-axis/xpadneo.git) e instala a partir do script oficial.

**Pacotes Instalados ou Atualizados**
- Arch: `dkms linux-headers bluez bluez-utils`
- Fedora: `dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE:`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu: `dkms linux-headers-$(uname -r)`

### Assistente de Comandos Distrobox

Instala arquivos necessários para redirecionar comandos de distroboxes para o host se o comando não for encontrado dentro da distrobox para `bash` e `zsh`; depois os sources em `.bashrc` e `.zshrc`. A remoção pode ser feita simplesmente deletando a pasta com os arquivos.

**Localização dos arquivos instalados**
`$HOME/.local/distrobox-handler`

### Codecs de Streaming para Fedora/OpenSUSE

Instala os codecs necessários para mídia de streaming com aceleração de hardware nesses sistemas operacionais. Também instalará o RPMFusion no Fedora se ainda não estiver instalado, já que os pacotes necessários não são fornecidos nos repositórios padrão.

**Pacotes Instalados ou Atualizados**
- Fedora: `libavcodec-freeworld gstreamer1-plugins-ugly`
- OpenSUSE:`opi` e, do opi, `codecs`

### Microsoft CoreFonts

Baixa os arquivos do [SourceForge](http://downloads.sourceforge.net/corefonts), depois usa `cabextract` para extrair os instaladores de fontes e instala as fontes em `$HOME/.local/share/fonts`. A remoção pode ser feita removendo as pastas CoreFonts de `$HOME/.local/share/fonts`.

**Pacotes Instalados ou Atualizados**
- Todos os sistemas: `cabextract`

### Desabilitador de Mitigação Split-lock

Desabilita a mitigação split-lock, que foi feita para impor boas práticas de desenvolvimento no Linux, mas resulta em perda significativa de performance em aplicações mais antigas e vários jogos, especialmente dos *Playstation Studios*, que não são feitos levando o Linux em consideração. Como não é um recurso de segurança, é seguro desabilitar. Isso é feito por um arquivo `99-splitlock.conf` que injeta o parâmetro de kernel apropriado. A remoção pode ser feita removendo o arquivo.

**Arquivo instalado**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

Força o fechamento de uma aplicação que consome muita memória ou com vazamento em caso de pressão extrema de memória e swap, evitando uma situação de 'out of memory', para a qual os sistemas Linux notoriamente reagem mal, já que o escaneamento heurístico realizado pelo kernel para decidir qual processo fechar pode levar várias horas.

**Pacotes Instalados ou Atualizados**
- Todos os sistemas: `earlyoom`

**Configuração personalizada aplicada**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

Exibe snapshots btrfs no seu menu de boot GRUB, perfeito para selecionar um snapshot anterior caso precise restaurar um sistema quebrado. Clonado e instalado do seu [repositório](https://github.com/Antynea/grub-btrfs) oficial; depois configurações personalizadas são aplicadas. Requer `grub`, e não prosseguirá se `grub` não for encontrado no seu sistema. A remoção deve seguir a documentação deles e não pode ser feita através do LinuxToys.

**Pacotes Instalados ou Atualizados**
- Arch: `gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu: `gawk inotify-tools make`

**Configurações personalizadas aplicadas**
- Define uma configuração snapper padrão 'root', com as seguintes mudanças dos padrões do snapper:
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
Depois habilita os serviços systemd `snapper-boot.timer` e `snapper-cleanup.timer`.

### iNet Wireless Daemon

Um daemon de rede sem fio feito pela Intel, que tem melhor performance geral e latência que o `wpa_supplicant` padrão, porém pode não ser compatível com certas redes empresariais.

**Pacotes Instalados ou Atualizados**
- Todos os sistemas: `iwd`

**Configurações personalizadas aplicadas**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- Desabilita o serviço systemd `wpa_supplicant`.

### LucidGlyph

Instalado usando o script oficial do seu [repositório](https://github.com/maximilionus/lucidglyph).

### CPU ondemand

Muda o governador padrão para `schedutil` para CPUs Intel (`powersave` é o padrão para a maioria das distribuições); ou muda o perfil energético interno de processadores AMD (Zen 2 e mais recentes) para `balance_performance`. Tornando as frequências da CPU mais reativas e aumentando a responsividade e performance do sistema, com um leve aumento médio no consumo de energia. Não recomendado em laptops pelas suas capacidades limitadas de dissipação térmica.

**Configurações personalizadas aplicadas**
- Para CPUs *Intel*, o driver `intel_pstate` impede o uso do governador `ondemand` e tem que ser desabilitado primeiro. Isso é feito adicionando o seguinte parâmetro de kernel ao `GRUB_CMDLINE_LINUX` ou como um arquivo de configuração `systemd-boot`.
```
intel_pstate=disable
```
- Cria e habilita um novo serviço systemd: `/etc/systemd/system/set-ondemand-governor.service`
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
- Se estiver executando uma CPU AMD compatível, a linha `ExecStart=` será:
```
ExecStart=/bin/bash -c 'for cpu in /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference; do echo balance_performance > "$cpu" 2>/dev/null || true; done'
```

### Power Optimizer

Instala `power-options` para gerenciar configurações de energia intuitivamente e em grande detalhe através de uma interface GTK através do seu script oficial ou através do [repositório COPR leo/power-options](https://copr.fedorainfracloud.org/coprs/leo/power-options). Inclui seu ícone de bandeja. A remoção deve seguir a documentação deles e não pode ser feita através do LinuxToys, exceto para usuários do Atomic Fedora, que podem removê-lo simplesmente removendo o pacote `power-options`.

**Pacotes Instalados ou Atualizados**
- Arch: `gtk4 libadwaita`
- Fedora/OpenSUSE: `gtk4-devel libadwaita-devel`
- Debian/Ubuntu: `libgtk4-dev libadwaita-1-dev`
- Atomic Fedora (`rpm-ostree`): `gtk4-devel libadwaita-devel power-options`

### Kernel Psycachy

Um kernel Linux modificado incorporando muitos dos patches de kernel do CachyOS que foram testados e considerados seguros para usar em sistemas baseados em Debian/Ubuntu, mantido pelo Psygreg. Não disponível para outros sistemas operacionais. Baixado e instalado dos últimos lançamentos do seu [repositório oficial](https://github.com/psygreg/linux-psycachy).

**Pacotes Instalados ou Atualizados**
- Debian/Ubuntu: `linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

Um patch para o arquivo de configuração de login do shell que habilita um tamanho maior de cache de shaders para qualquer GPU, eliminando gagueiras e quedas de FPS em vários jogos modernos. Lembrete: não ocupará todo o espaço a menos que realmente precise. Pode ser revertido simplesmente removendo as linhas anexadas a `.bash_profile`, `.profile` ou `.zshrc`.

**Configurações personalizadas aplicadas**
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

### Correção de Política SELinux do OpenSUSE

Corrige um problema onde o SELinux impede qualquer coisa de rodar através do WINE/Proton no OpenSUSE. Pode ser revertido usando o mesmo comando com `0` como valor booleano em vez de `1`.

**Configurações personalizadas aplicadas**
```
setsebool -P selinuxuser_execmod 1
```

### Criador de Swapfile

Cria um swapfile de 8GB, seja em `/swapfile` ou `/home/swapfile` (`/home/swap/swapfile` para sistemas de arquivos btrfs). Inclui os ajustes necessários para o swapfile funcionar corretamente em sistemas de arquivos btrfs, evitando uma enxurrada de snapshots.

**Remoção**
```
sudo swapoff CAMINHO_SWAPFILE
sudo rm -rf CAMINHO_SWAPFILE
```
Depois remova a entrada do swapfile de `/etc/fstab`.

### Configuração de Firewall

Instala os pacotes necessários, depois aplica padrões sensatos que são ideais para a maioria dos usuários.

**Pacotes Instalados ou Atualizados**
- Todos os sistemas: `ufw gufw`

**Configurações personalizadas aplicadas**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Instala a aplicação do Flathub, aplica os arquivos de configuração `udev` necessários para funcionar em `/etc/udev/rules.d`, depois exibe documentação sobre dispositivos suportados no seu navegador. Os arquivos de configuração são obtidos do seu [repositório GitHub oficial](https://github.com/berarma/oversteer).

### DaVinci Resolve

Oferece instalação através do [DaVinciBox](https://github.com/zelikos/davincibox) seguindo dependências e procedimentos padrão para isso, ou instalação nativa através de procedimentos personalizados. A versão *Studio* requer uma licença comprada da Blackmagic Design. A remoção pode ser feita desexportando os atalhos da aplicação e apagando a distrobox para *DaVinciBox* seguindo as instruções no seu repositório; usando o desinstalador do menu de aplicações no Fedora/OpenSUSE; ou simplesmente removendo o pacote através do seu gerenciador de pacotes em outros sistemas.

### Codificador FFMpeg para DaVinci Resolve

Ativa a codificação de hardware VAAPI para placas gráficas que não sejam Nvidia no Linux através do FFMpeg. Instalado copiando o tarball extraído da versão mais recente disponível no seu [repositório GitHub](https://github.com/EdvinNilsson/ffmpeg_encoder_plugin) oficial para `/opt/resolve/IOPlugins/`. **AVISO:** se estiver a usar o *DaVinciBox*, deve instalar o LinuxToys dentro do contentor e executar este instalador a partir dele para que esta funcionalidade funcione como esperado.

**Pacotes Instalados ou Atualizados para instalação nativa**
- Arch: `davinci-resolve` ou `davinci-resolve-studio`
- Fedora: `xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE: `xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu: `fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1` e `davinci-resolve` ou `davinci-resolve-studio`

**Pacotes instalados ou atualizados para DaVinciBox**
- Todos os sistemas: `lshw distrobox podman`

**Atualizando DaVinciBox**

Atualizar o contêiner distrobox em si é tão simples quanto executar `sudo dnf update` dentro dele. No entanto, para atualizar DaVinciBox para novas versões do Resolve, você precisará seguir o procedimento de remoção abaixo e reinstalá-lo através do LinuxToys.

**Remoção do DaVinciBox**
- Basta executar estes comandos em sequência:
```
distrobox enter davincibox -- add-davinci-launcher remove
distrobox stop davincibox
distrobox rm davincibox
```

### Active Directory

Instala todos os pacotes necessários para habilitar integração em domínios Active Directory.

**Pacotes Instalados ou Atualizados**
- Debian: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora: `sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu: `sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Servidor Cockpit

Instala `cockpit` dos backports do Debian ou repositórios padrão. Sistemas Atomic Fedora requerem pacotes adicionais. Depois, executa as configurações de firewall necessárias para Fedora e OpenSUSE para permitir acessá-lo de um *Cliente Cockpit*.

**Pacotes Instalados ou Atualizados**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu: `cockpit`
- Fedora Atomic: `cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**Configurações personalizadas aplicadas**
- Habilita o serviço systemd `cockpit.socket`
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

Obtém todas as dependências necessárias, e instala `waydroid` dos repositórios da sua distribuição, ou seu próprio repositório especificamente para Debian/Ubuntu. Depois inicializa o contêiner, instalando Android com padrões sensatos e suporte para ***Google Play Store*** habilitado. Opcionalmente, usará [waydroid_scripts](https://github.com/casualsnek/waydroid_script) para instalar capacidades de tradução ARM usando *libndk* para processadores AMD ou *libhoudini* para processadores Intel.

**Pacotes Instalados ou Atualizados**
- Debian/Ubuntu: `curl ca-certificates python3-venv waydroid`
- Outros: `waydroid`

**Com traduções ARM**
- Arch: `python-pip`
- Outros: `python3-pip`

### OpenRGB

Instala a aplicação principal do Flathub, depois obtém as regras udev para fazê-la funcionar do seu [repositório oficial](https://openrgb.org/releases) ou do *RPMFusion* no Fedora.

**Pacotes Instalados ou Atualizados**
- Fedora: `openrgb-udev-rules`

### OpenRazer

Instala usando o metapacote `openrazer-meta` dos seus [repositórios oficiais](https://openrazer.github.io/), junto com sua GUI *Polychromatic* do Flathub; ou, para sistemas Fedora Atomic (`rpm-ostree`), do repositório de módulos de kernel do *Universal Blue*. Para sistemas Universal Blue, instala usando o script fornecido pelo `ujust`.

**Pacotes Instalados ou Atualizados**
- Fedora: `kernel-devel openrazer-meta`
- Fedora Atomic: `openrazer-kmod openrazer-kmod-common openrazer-daemon`
- Outros: `openrazer-meta`

### Atualizações Automáticas para RPM-OSTree

Habilita as atualizações automáticas do `rpm-ostree` no modo de preparação, para que seu trabalho nunca seja interrompido. Elas serão baixadas silenciosamente e transformadas em um novo deployment para ser aplicado quando você decidir reiniciar seu sistema. Pode ser revertido desabilitando o serviço systemd `rpm-ostree-automatic.timer`.

**Configurações personalizadas aplicadas**
- adicionado ao `/etc/rpm-ostreed.conf`
```
[Daemon]
AutomaticUpdatePolicy=stage
```
- habilita o serviço systemd `rpm-ostree-automatic.timer`

### Nerd Fonts

Busca dados sobre fontes disponíveis no [NerdFonts](https://www.nerdfonts.com) e as exibe para instalação. A fonte selecionada será instalada em `$HOME/.local/share/fonts`, e pode ser removida simplesmente excluindo os arquivos adicionados a esse diretório.

### Lazyman

Instala o gerenciador de configuração *Lazyman* para *NeoVim* junto com uma configuração da escolha do usuário. Pode ser removido excluindo sua pasta.

**Pacotes instalados ou atualizados**
- Todos os sistemas: `neovim git`

**Arquivos adicionais instalados**
- Diretório: `$HOME/.config/nvim-Lazyman`

### Starship

Usa o script oficial do [Starship](https://starship.rs) para instalação ou atualização. Pode ser revertido removendo a linha adicionada para habilitá-lo em seu `.bashrc`, `.zshrc` ou arquivo de configuração similar para seu shell.

**Configurações personalizadas aplicadas**
- adicionado a `~/.bashrc`
```
eval "$(starship init bash)"
```

### Oh My ZSH

Usa o script oficial do [Oh My ZSH](https://ohmyz.sh) para instalação ou atualização. Pode ser revertido removendo a linha que o origina de seu `.zshrc`.

**Pacotes instalados ou atualizados**
- Todos os sistemas: `zsh`

### Fisher (e `fish`)

Instala o `fish` a partir dos repositórios padrão e o `fisher` com o instalador fornecido no seu [repositório oficial](https://github.com/jorgebucaran/fisher).

**Pacotes Instalados ou Atualizados**
- Todos os sistemas: `fish`

### Configurações systemd do CachyOS

Aplica várias otimizações de desempenho e correções para problemas comuns. Embora todos sejam instalados, muitos deles só serão ativados se necessário - pois só serão engajados se os dispositivos que eles visam forem encontrados em seu sistema. Isso permite que você altere componentes com patches aplicados dinamicamente para essas novas partes. Para sistemas Fedora atômicos e Universal Blue, estes serão instalados como um pacote em camadas e podem ser removidos simplesmente removendo o pacote via `rpm-ostree`. Para outros, podem ser revertidos removendo os arquivos correspondentes. Tanto os pacotes quanto os métodos de instalação direta utilizam arquivos obtidos diretamente dos repositórios do *CachyOS*.

**Pacotes instalados ou atualizados**
- Fedora atômico: `linuxtoys-cfg-atom`
- Universal Blue: `optimize-cfg-ublue`

**Configurações personalizadas aplicadas**
- `/usr/lib/systemd/journald.conf.d/00-journal-size.conf`
```
[Journal]
SystemMaxUse=50M
```
- `/usr/lib/udev/rules.d/20-audio-pm.rules`
```
SUBSYSTEM=="power_supply", ENV{POWER_SUPPLY_ONLINE}=="0", TEST=="/sys/module/snd_hda_intel", \
    RUN+="/bin/sh -c 'echo $$(cat /run/udev/snd_hda_intel-powersave 2>/dev/null || \
        echo 10) > /sys/module/snd_hda_intel/parameters/power_save'"

SUBSYSTEM=="power_supply", ENV{POWER_SUPPLY_ONLINE}=="1", TEST=="/sys/module/snd_hda_intel", \
    RUN+="/bin/sh -c '[[ $$(cat /sys/module/snd_hda_intel/parameters/power_save) != 0 ]] && \
        echo $$(cat /sys/module/snd_hda_intel/parameters/power_save) > /run/udev/snd_hda_intel-powersave; \
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
# Lista negra do módulo Intel TCO Watchdog/Timer
blacklist iTCO_wdt

# Lista negra do módulo AMD SP5100 TCO Watchdog/Timer (Necessário para CPUs Ryzen)
blacklist sp5100_tco
```
- `/usr/lib/tmpfiles.d/coredump.conf` - não incluído para sistemas Universal Blue, que têm sua própria configuração para isso
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
Instalado através de seu script oficial. Pode ser removido executando o instalador novamente do LinuxToys.

### Acer Manager
Instalado usando o script fornecido no [repositório oficial do GitHub](https://github.com/PXDiv/Div-Acer-Manager-Max) após instalar as dependências adequadas para ele.

**Pacotes Instalados ou Atualizados**
- Arch: `base-devel linux${_k:+-${_k}}-headers`
- Fedora/OpenSUSE: `make gcc kernel-headers kernel-devel`
- Debian/Ubuntu: `make build-essential`

### GPU Screen Recorder
Instalado a partir do [Pacstall](https://pacstall.dev), [COPR](https://copr.fedorainfracloud.org/coprs/brycensranch/gpu-screen-recorder-git) ou do [AUR](https://aur.archlinux.org/packages/gpu-screen-recorder) se uma GPU Intel (dedicada ou integrada) for detectada no seu sistema para que o *QuickSync* funcione corretamente. Caso contrário, será instalado a partir do Flathub como um flatpak de nível de sistema.

**Pacotes Instalados ou Atualizados**
- Arch/Debian/Ubuntu/OpenSUSE: `intel-media-driver gpu-screen-recorder`
- Fedora: `libva-intel-media-driver gpu-screen-recorder-ui`

**Procedimentos adicionais necessários!**
Após a instalação, execute no terminal:
```
gsr-ui
```
E configure-o para iniciar na inicialização do sistema a partir das configurações (o ícone de engrenagem), pressione Alt+Z para sair da interface, feche a janela do terminal e reinicie. Após reiniciar, você pode ajustar as configurações do programa de acordo com suas preferências e usá-lo como desejar.

### Correção de Renderizador GTK
Corrige problemas com a renderização de aplicações GTK com GPUs Intel Arc série B (*Battlemage*) e Nvidia ao alterná-las para o modo OpenGL. Pode ser revertido simplesmente removendo a linha adicionada usando um editor de texto como `nano`.

**Configurações personalizadas aplicadas**
- Adicionado a `/etc/environment`:
```
GSK_RENDERER=ngl
```

### Driver Intel Xe
Habilita o novo driver Intel `xe` do kernel. Embora esteja presente desde a versão 6.8, não é habilitado por padrão, o que faz com que processadores gráficos Intel mais novos, especialmente GPUs discretas (Arc), tenham performance consideravelmente inferior em geral, especialmente em certas tarefas de computação. Pode ser revertido removendo os parâmetros usando `rpm-ostree kargs --delete` para Fedora Atomic, ou deletando o arquivo `/etc/grub.d/01_intel_xe_enable` para outros sistemas. Isso também instalará a decodificação de vídeo por hardware.

**Pacotes instalados ou atualizados**
- Todos os sistemas: `libvdpau-va-gl`

**Configurações personalizadas aplicadas**
- Primeiro, a variável `$DEVID` é obtida através do seguinte comando:
```
lspci -nnd ::03xx | grep -Ei 'battlemage|alchemist' | sed -n 's/.*\[8086:\([0-9a-f]\+\)\].*/\1/p'
```
- então, para Fedora Atomic (sistemas baseados em `rpm-ostree`):
```
rpm-ostree kargs --append='i915.force_probe=!'"$DEVID" --append="xe.force_probe=$DEVID"
```
- ou outros sistemas: cria `/etc/grub.d/01_intel_xe_enable`
```
GRUB_CMDLINE_LINUX="\${GRUB_CMDLINE_LINUX} i915.force_probe=!$DEVID xe.force_probe=$DEVID"
```
- finalmente, para habilitar a decodificação de vídeo por hardware, adicionado a `/etc/environment`:
```
VDPAU_DRIVER=va_gl
```

### DNSMasq
Instala `dnsmasq` e habilita algumas configurações para operação e compatibilidade ideais, mesmo em sistemas rodando `systemd-resolved`, como um cache DNS local. Útil para melhorar velocidades de navegação na internet e como correção para um problema comum de queda de velocidade de download do Steam.

**Pacotes Instalados ou Atualizados**
- Debian: `dnsmasq resolvconf`
- Outros sistemas: `dnsmasq`

**Configurações personalizadas aplicadas**
- Habilita (descomenta) `domain-needed`, `bogus-priv` e `bind-interfaces` em `/etc/dnsmasq.conf`

### Secure Boot para Arch
Torna o Arch Linux capaz de operar com Secure Boot habilitado, permitindo inicialização dupla com Windows ao executar jogos com anticheats de kernel e fornecendo uma camada adicional de segurança. Para esse propósito, o LinuxToys emprega o `sbctl`, que pode ter problemas em algumas placas-mãe. Pesquise na internet por problemas com sua placa-mãe específica antes de usar esse recurso.

**Pacotes Instalados ou Atualizados**
- Arch: `sbctl efibootmgr`

**Configurações personalizadas aplicadas**
- Primeiramente, o GRUB precisa ser preparado se presente:
```
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB --modules="tpm" --disable-shim-lock
```
- Então, as chaves são criadas através do `sbctl` e registradas da seguinte forma:
```
sbctl create-keys
sbctl enroll-keys -m -f
```
- Por último, todos os arquivos encontrados que precisam de assinatura para Secure Boot através do `sbctl verify` são assinados usando `sbctl sign -s`.

### Configuração do AppArmor para Debian e Arch Linux
Instala e habilita uma configuração básica do AppArmor - os mesmos padrões que o Ubuntu. Para um MAC melhor endurecido, você deve procurar por [apparmor.d](https://github.com/roddhjav/apparmor.d), que não pode ser instalado de forma automatizada por várias razões e você deve ler sua documentação cuidadosamente para usá-lo.

**Pacotes Instalados ou Atualizados**
- Arch: `apparmor`
- Debian: `apparmor apparmor-utils`

**Configurações personalizadas aplicadas**
- AppArmor deve ser chamado como MAC para o sistema através da linha de comando do kernel. Isso é feito através de `/etc/default/grub.d/99-apparmor.cfg` para usuários GRUB:
```
GRUB_CMDLINE_LINUX_DEFAULT="${GRUB_CMDLINE_LINUX_DEFAULT} apparmor=1 security=apparmor"
```
- Ou `/etc/kernel/cmdline.d/99-apparmor.conf` para usuários de systemd-boot:
```
apparmor=1 security=apparmor
```
- O serviço `apparmor.service` também está habilitado.

### Correção do Bubblewrap
Resolve um problema comumente encontrado em certas versões do Ubuntu onde o AppArmor bloqueia o Bubblewrap, fazendo com que as aplicações flatpak e o Steam parem de funcionar. 

**Configurações personalizadas aplicadas**
- Em `/etc/apparmor.d/bwrap`:
```
abi <abi/4.0>,
include <tunables/global>

profile bwrap /usr/bin/bwrap flags=(unconfined) {
  userns,
  include if exists <local/bwrap>
}
```

### Correção do KDE Connect
Resolve um problema comum que faz com que o KDE Connect ou GSConnect não consiga localizar nenhum dispositivo na sua rede, causado pelo bloqueio das portas necessárias para conectar os dispositivos entre si pela firewall.

**Configurações personalizadas aplicadas**
- Abre as portas 1714-1764 (TCP e UDP) para o tráfego da rede local de forma adaptativa, de acordo com a sua firewall ativa no momento (`firewalld`, `ufw` ou `iptables`).

### Memória Livre Mínima Dinâmica
Define o valor da configuração do kernel `vm.min_free_kbytes` dinamicamente de acordo com a RAM total disponível, tornando mais RAM disponível para outras tarefas em dispositivos com restrição de memória. Também é adaptável na inicialização, o que significa que você não precisa reinstalá-lo se fizer alterações no seu hardware.

**Configurações personalizadas aplicadas**
- Cria o serviço systemd `/etc/systemd/system/set-min-free-mem.service`:
```
[Unit]
Description=Set vm.min_free_kbytes dynamically
DefaultDependencies=no
After=local-fs.target
Before=sysinit.target

[Service]
Type=oneshot
ExecStart=/bin/sh -c "sysctl -w vm.min_free_kbytes=$(awk '/MemTotal/ {printf \"%.0f\", $2 * 0.01}' /proc/meminfo)"

[Install]
WantedBy=sysinit.target
```

## Instaladores de Repositório

### Brew
Instalado através do seu script de instalação oficial.

### Cargo
Instalado através do seu script de instalação oficial pelo RustUp.

### Chaotic-AUR
Instalado seguindo a documentação deles, com ajustes de tempo para evitar erros causados por enviar comandos muito rapidamente para o pacman.

### Flathub
Instala `flatpak` e adiciona o repositório Flathub tanto no nível de sistema quanto de usuário.

**Pacotes Instalados ou Atualizados**
- Todos os sistemas: `flatpak`

### Pip
Instalado através de pacotes `python-pip` (Arch) ou `python3-pip` (outros sistemas) dos repositórios padrão. Inclui `pipx` para configuração automatizada de pacotes PyPI em ambientes virtuais, conforme recomendado na documentação.

### RPMFusion
Instalado seguindo a documentação deles, com uma iteração específica para sistemas Fedora Atomic (baseados em `rpm-ostree`).

### Pacstall
Instalado com o script oficial deles. Disponível apenas para Debian/Ubuntu.

### Terra
Instalado seguindo a documentação deles. Disponível apenas para Fedora e derivados.

## LSW-WinBoat

Configura uma instalação *Docker* com as configurações e patches apropriados para utilização com **WinBoat** - que pode instalar Windows em um contêiner Docker e interagir com seus apps, integrando-os ao sistema host. Em seguida, instala *WinBoat* em si do seu [repositório GitHub oficial](https://github.com/TibixDev/winboat), e *FreeRDP* do Flathub para usá-lo.

**Pacotes instalados ou atualizados**
- Arch:`docker docker-compose winboat-bin`
- Fedora: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`
- OpenSUSE:`docker docker-compose winboat`
- Debian/Ubuntu: `docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin winboat`

- Flathub: `com.freerdp.FreeRDP`

**Configurações personalizadas aplicadas**
- Habilita os serviços systemd `docker` e `docker.socket`
- Habilita o módulo do kernel `iptables` com configurações apropriadas, em `/etc/modules-load.d/iptables.conf`:
```
ip_tables
niptable_nat
```
- Habilita o uso do Docker sem root adicionando o usuário ao grupo de usuários `docker`, o que requer um patch personalizado para sistemas baseados em `rpm-ostree`:
```
echo "$(getent group docker)" >> /etc/group
```
- Abre as portas internas do Docker 8006 e 3389 no `firewalld` para permitir que WinBoat alcance seu contêiner, corrigindo um problema no Fedora e derivados (não aplicável a outros sistemas operacionais):
```
firewall-cmd --zone=docker --change-interface=docker0
firewall-cmd --zone=docker --add-port=8006/tcp --permanent
firewall-cmd --zone=docker --add-port=3389/tcp --permanent
```

## Padrões Otimizados

Uma configuração de um clique que instala uma seleção curada e estável de otimizações para o seu sistema. Não instalará recursos que não sejam relevantes ou já presentes na sua máquina.

#### Recursos Incluídos

**Performance**
- EarlyOOM
- Shader Booster
- Desabilitador de Mitigação Split-lock
- Arquivos de configuração systemd do *CachyOS* - testados e filtrados para estabilidade, para que a performance não venha com um compromisso

**Qualidade de Vida**
- FFMPEGThumbnailer
- Codecs de Streaming Fedora/OpenSUSE
- Correção do arquivo `/etc/sudoers` para Debian - corrige um problema que torna o usuário incapaz de usar `sudo` após instalar da imagem de instalação padrão
- Correção de timeout do Gnome - aumenta a tolerância de timeout para parar prompts excessivos de 'programa não está respondendo'
- Assinatura de Módulo do Kernel para RPM-OSTree
- habilitação de atualizações automáticas para `rpm-ostree` - em modo de estágio para que seu trabalho nunca seja interrompido
- (opcional) Aceleração de Hardware para Flatpaks

**Perfis de Energia**
- *Laptop*: Power Optimizer
- *Desktop*: CPU ondemand

## Recursos Exclusivos da versão em Português

### Distrobox-Adv

Um container distrobox com os recursos necessários para instalar e utilizar os certificados digitais mais usados por advogados e trabalhadores do judiciário no Brasil. Requer algumas dependências instaladas no hospedeiro pra funcionar corretamente, declaradas abaixo e instaladas pelo LinuxToys a partir do repositório padrão do seu sistema. Detalhes sobre o container podem ser encontrados no [repositório oficial do GitHub](https://github.com/pedrohqb/distrobox-adv-br).

**Pacotes Instalados ou Atualizados no hospedeiro**
- Arch: `distrobox podman pcsclite ccid`
- Fedora: `distrobox podman pcsc-lite pcsc-lite-ccid`
- OpenSUSE: `distrobox podman pcsc-ccid`
- Debian/Ubuntu: `distrobox podman pcsc-lite ccid`

### PJEOffice Pro Installer

Um instalador do PJEOffice Pro empacotado em .deb e mantido por Psygreg, escrito em bash. O instalador é empacotado em vez do programa em si porque o PJEOffice Pro possui bibliotecas proprietárias que não podem ser redistribuídas. O instalador obtém o programa através do [site oficial](https://pje-office.pje.jus.br).