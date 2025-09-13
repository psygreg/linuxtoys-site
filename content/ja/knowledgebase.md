# ナレッジベース

## LinuxToys機能の基本ガイドライン

- 機能は、互換性があり*かつ*関連性のあるシステムでのみ利用可能になります。
- アプリケーション内のすべての機能とリソースは、常に**KISS**（*Keep It Simple, Stupid*）原則に従う必要があります - ラベルと簡単な説明を通じて理解し、活用しやすくなければなりません。
- 機能は、ユーザーにとって**最適**に動作するように作られなければなりません。
- ユーザーとのインタラクションは、予測不可能性を避け、信頼性を確保するために`zenity`プロンプトに限定されています。
- Flatpakは、flatpakランタイムによる**一貫性**と、きめ細かな権限制御による**セキュリティ**のため、可能な限り使用すべきです。

## ネイティブパッケージとしてインストール

デフォルトのシステムリポジトリから、またはLinuxToysによって追加されたリポジトリがあり、他の変更は行われません。

### デフォルトリポジトリ
- Java OpenJDK（任意のバージョン）
- Maven
- NeoVim
- Broadcom WiFiドライバー（Fedora/Archでのみ利用可能）
- Intel Compute Runtime
- FFMPEGThumbnailer
- Gamemode
- Lutris（Fedora/Arch；他はFlathubから入手）
- F3 - Fight Flash Fraud（インストール後にブラウザでドキュメントも開きます）
- Wireguard

### 追加されたリポジトリ
- Visual Studio Code：[Microsoftの公式リポジトリ](https://packages.microsoft.com)から。
- .NET SDK：[Microsoftの公式リポジトリ](https://packages.microsoft.com)から、OpenSUSEとDebianでのみ。他のシステムはデフォルトリポジトリからインストールされています。
- Sublime Text：[その公式リポジトリ](https://download.sublimetext.com)から。
- Unity Hub：[Unityの公式リポジトリ](https://hub.unity3d.com/linux/repos)から。Unityによって公式にサポートされているシステムでのみ利用可能。
- Nvidiaドライバー：Debianでは[Nvidiaの公式リポジトリ](https://developer.download.nvidia.com/compute/cuda/repos)から、Fedoraでは*RPMFusion*から。他のシステムはデフォルトリポジトリからインストールされています。
- btrfs-Assistant：Archでは[Chaotic-AUR](https://aur.chaotic.cx)から。他のシステムはデフォルトリポジトリからインストールされています。すべてのシステムのデフォルトリポジトリから`snapper`を含みます。
- Preload：Archでは[Chaotic-AUR](https://aur.chaotic.cx)から、またはFedoraでは[elxreno/preload COPRリポジトリ](https://copr.fedorainfracloud.org/coprs/elxreno/preload)から。他のシステムはデフォルトリポジトリからインストールされています。
- Touchegg：その公式PPAリポジトリから、またはUbuntuとDebianそれぞれの[GitHubリポジトリ](https://github.com/JoseExposito/touchegg)から。他のシステムはデフォルトリポジトリからインストールされています。X11のみ。
- Gamescope：Archでは*Multilib*から、Fedoraでは*RPMFusion*から。他のシステムはデフォルトリポジトリからインストールされています。
- Steam：Archでは*Multilib*から、Fedoraでは*RPMFusion*から。他のシステムはFlathubからインストールされています。
- Topgrade：*Pip*から。
- Webmin：その[公式GitHubリポジトリ](https://github.com/webmin/webmin)から。
- Arch-Update：[Chaotic-AUR](https://aur.chaotic.cx)から。
- Cloudflare WARP：[Cloudflareの公式リポジトリ](https://pkg.cloudflareclient.com/)から。
- Solaar：Ubuntuでは公式PPAリポジトリから。他のシステムはデフォルトリポジトリからインストールされています。
- IVPN：その[公式リポジトリ](https://repo.ivpn.net/stable)から。
- Mullvad VPN：その[公式リポジトリ](https://repository.mullvad.net)またはArchでは[Chaotic-AUR](https://aur.chaotic.cx)から。
- NordVPN：その[公式リポジトリ](https://downloads.nordcdn.com/apps)またはArchでは[Chaotic-AUR](https://aur.chaotic.cx)から。

### その他
- Heroic Games Launcher：Fedora/Archでは[公式GitHubリポジトリ](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher)から。他のシステムはFlathubからインストールされています。
- LSFG-VK：その[公式GitHubリポジトリ](https://github.com/PancakeTAS/lsfg-vk)から。flatpakランタイムを含みます。Windows用のLossless Scalingが必要です。
- Figma：[Figma-Linux](https://github.com/Figma-Linux/figma-linux)からのAppImageインストーラーを通じてインストールされます。
- ExpressVPN：公式のAppImageベースのインストーラーを通じてインストールされます。
- Windscribe VPN：その[公式リポジトリ](https://windscribe.com/install/desktop)から。

## flatpakとしてインストール

flathubから、またはLinuxToysによって追加されたリポジトリがあり、他の変更は行われません。システムレベルのflatpakは、厳密に必要な場合にのみ使用されます。

### ユーザーレベル
- Android Studio
- VSCodium
- HTTPie
- Insomnia
- Postman
- Discord
- GOverlay（Mangohud、ネイティブインストールパッケージを含む）
- Mangojuice（Mangohud、ネイティブインストールパッケージを含む）
- Minecraft Bedrock Launcher
- Osu!
- ProtonPlus
- Protontricks
- ProtonUp
- Sober
- Sunshine
- Vinegar
- WiVRN（VRデバイスにアプリがインストールされている必要があります - 初回起動時の指示に従ってください）
- Anydesk
- Audacity
- Blender
- Google Chrome
- Cohesion
- Darktable
- Foliate
- FreeCAD
- GIMP（オプションで[PhotoGIMP](https://github.com/Diolinux/PhotoGIMP.git)で`$HOME/.config`と`$HOME/.local`のファイルにパッチを適用）
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
- Distroshelf（ネイティブインストールパッケージ`podman`と`distrobox`を含む）
- Flatseal
- Handbrake
- Mission Center
- OBS Studio（[Pipewire Audio Capture](https://github.com/dimtpap/obs-pipewire-audio-capture)プラグインを含む）
- QPWGraph
- Warehouse
- StreamController
- LibreWolf
- Mullvad Browser
- Proton VPN
- Surfshark
- Ungoogled Chromium
- Gear Lever

#### 追加されたリポジトリ

- GeForce NOW：*Nvidia*によって提供される公式リポジトリから

### システムレベル

- GPU Screen Recorder
- Bazaar
- EasyEffects
- LACT
- Piper（Debian/Ubuntuでは`ratbagd`、他では`libratbag`、ネイティブインストールパッケージを含む）

## カスタム手順

LinuxToysによって実装される、最適に動作するためのカスタムインストール手順または特定の調整が必要です。通常、すでにインストールされている場合は削除も提供しますが、必要でない場合（メインのflatpakまたはパッケージを削除すると他の変更が元に戻る場合）または削除の指示がここに記載されている場合を除きます。

### Docker

公式のDockerリポジトリ（Arch LinuxとOpenSUSEは不要なので除く）とそこから必要なすべてのパッケージをシステムのパッケージマネージャーを通じてインストールし、ユーザーを`docker`ユーザーグループに追加し、Portainer CEをインストールします。これはDockerダッシュボードが目的であり、マシンからの無視できるリソースを使用するため、常にバックグラウンドで動作します。

**インストールまたは更新されたパッケージ**
- Arch：`docker docker-compose curl dialog git iproute2 libnotify`
- Fedora：`docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin curl dialog git iproute libnotify`
- OpenSUSE：`docker docker-compose curl dialog git iproute2 libnotify-tools`
- Debian/Ubuntu：`docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin curl dialog git iproute2 libnotify-bin`

**Portainer CEのインストール**
```
sudo docker volume create portainer_data
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

### Godot Engine

**Godot**と**GodotSharp**の両方が、Godotが標準パッケージを提供していないため、カスタム手順を通じてインストールされます。*GodotSharp*には、この文書でも説明されている**.NET SDK**のインストールが含まれ、その機能に必要です。

- インストールされたファイルの場所：`$HOME/.local/godot`
- アプリメニューショートカットの場所：`$HOME/.local/share/applications`

### Jetbrains Toolbox

JetBrainsは他の方法では悪名高く信頼性のないAppImageのみを提供するため、公式ウェブサイトから最新のtarball版をダウンロードし、カスタム手順を通じてインストールします。

- インストールされたファイルの場所：`$HOME/.local/jetbrains-toolbox`
- アプリメニューショートカットの場所：`$HOME/.local/share/applications`

### Mise

公式に提供されたインストールスクリプトを使用してインストールし、その後、`bash`、`zsh`、`fish`シェル用の非常に望ましい機能である自動補完を設定するためにドキュメントに従い、完了時にブラウザでドキュメントを表示します。不変性の制約により、不変（`rpm-ostree`ベース）システムでは`zsh`シェルで使用できません。削除はドキュメントに従う必要があり、LinuxToysを通じて実行できません。

### Node Version Manager (NVM)

公式に提供されたインストールスクリプトを使用してインストールするか、公式スクリプトがうまく動作しない`rpm-ostree`ベースのディストリビューション用の手動セットアップを通じて行います。その後、`npm`を通じて`yarn`をインストールし、ブラウザでドキュメントを表示します。削除は、ドキュメントに従うか、`rpm-ostree`ベースシステムでは単に`$HOME/.nvm`を削除することで実行できます。

**インストールまたは更新されたパッケージ**
- **すべてのシステム**：`nodejs npm`
- **NPMから**：`yarn`

### PyEnv

必要なすべての依存関係をインストールし、公式スクリプトを使用して*PyEnv*をインストールし、その後`bash`と`zsh`プロファイルファイルにパスを設定し、ブラウザでドキュメントを表示します。削除はドキュメントに従う必要があり、LinuxToysを通じて実行できません。

**インストールまたは更新されたパッケージ**
- Arch：`base-devel openssl zlib xz tk`
- Fedora：`make gcc patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel libuuid-devel gdbm-libs libnsl2`
- OpenSUSE：`gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel gdbm-devel make findutils patch`
- Debian/Ubuntu：`make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev`

### Tailscale

公式インストールスクリプトを使用してインストールします。同じスクリプトを通じて削除できます。

### RPM-OSTree用カーネルモジュール署名

マシンに固有でランダムに生成される**MOK**（Machine Owner Key）を設定し、その後、将来カーネルモジュールにそれで署名するために[akmods-keys](https://github.com/CheariX/silverblue-akmods-keys)をインストールします。Secure Bootが有効な状態で*Nvidia*、*VirtualBox*、その他のカーネルモジュールドライバーを動作させるために必要です。インストール時にSecure Bootが有効な場合、`rpm-ostree`ベースの不変システムでNvidiaドライバーをインストールする際に自動的にトリガーされます。

### Radeon Open Compute (ROCm)

ROCmが適切に動作するために必要なすべてのROCmパッケージと診断ツールをインストールし、ROCmに必要な`/dev/kfd`をrootなしでアクセス可能にするために必要な`render`と`video`ユーザーグループにユーザーを追加します。

**インストールまたは更新されたパッケージ**
- Arch：`comgr hsa-rocr rccl rocalution rocblas rocfft rocm-smi-lib rocsolver rocsparse rocm-device-libs rocm-smi-lib rocminfo hipcc hiprand hip-runtime-amd radeontop rocm-opencl-runtime ocl-icd clinfo`
- Fedora：`rocm-comgr rocm-runtime rccl rocalution rocblas rocfft rocm-smi rocsolver rocsparse rocm-device-libs rocminfo rocm-hip hiprand rocm-opencl clinfo`
- OpenSUSE：`libamd_comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas4 librocfft0 librocm_smi64_1 librocsolver0 librocsparse1 rocm-device-libs rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl ocl-icd clinfo`
- Debian/Ubuntu：`libamd-comgr2 libhsa-runtime64-1 librccl1 librocalution0 librocblas0 librocfft0 librocm-smi64-1 librocsolver0 librocsparse0 rocm-device-libs-17 rocm-smi rocminfo hipcc libhiprand1 libhiprtc-builtins5 radeontop rocm-opencl-icd ocl-icd-libopencl1 clinfo`

### Realtek RTL8821CEドライバー

[Tomás PinhoによるRTL8821CEドライバー](https://github.com/tomaspinho/rtl8821ce.git)とそのすべての依存関係をインストールし、カーネルに付属するデフォルトのRTW8821CEドライバーを置換・ブラックリストに登録します。これは一部のデバイスで適切に動作しないか、まったく動作しません。

**インストールまたは更新されたパッケージ**
- Arch：`linux-headers dkms bc base-devel rtl8821ce-dkms`
- Fedora/OpenSUSE：`dkms make kernel-devel rtl8821ce-dkms`
- Debian/Ubuntu：`bc module-assistant build-essential dkms rtl8821ce-dkms`

### RustICL

Intel Compute Runtime、ROCm、またはCUDAでサポートされていないカード用に、OpenCL用のより新しく高速な実装をインストールして有効にします。

**インストールまたは更新されたパッケージ**
- Arch：`opencl-mesa clinfo`
- Fedora：`mesa-libOpenCL clinfo`
- OpenSUSE：`Mesa-libRusticlOpenCL clinfo`
- Debian/Ubuntu：`mesa-opencl-icd clinfo`

**その他の変更**

**`/etc/environment`に追加：**
- *Intel* GPU用
```
RUSTICL_ENABLE=iris
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```
- *AMD* GPU用
```
RUSTICL_ENABLE=radeonsi
OCL_ICD_VENDORS=/etc/OpenCL/vendors/rusticl.icd
```

### Xpadneo

必要なすべての依存関係をインストールし、その後[リポジトリ](https://github.com/atar-axis/xpadneo.git)をクローンし、公式スクリプトからインストールします。

**インストールまたは更新されたパッケージ**
- Arch：`dkms linux-headers bluez bluez-utils`
- Fedora：`dkms make bluez bluez-tools kernel-devel kernel-headers`
- OpenSUSE：`dkms make bluez kernel-devel kernel-source`
- Debian/Ubuntu：`dkms linux-headers-$(uname -r)`

### Distroboxコマンドヘルパー

`bash`と`zsh`用に、distrobox内でコマンドが見つからない場合にホストにコマンドをリダイレクトするために必要なファイルをインストールし、`.bashrc`と`.zshrc`でそれらをソースします。削除は、単にファイルのあるフォルダを削除することで実行できます。

**インストールされたファイルの場所**
`$HOME/.local/distrobox-handler`

### Fedora/OpenSUSE用ストリーミングコーデック

これらのオペレーティングシステムでストリーミングメディアに必要なコーデックをインストールします。

**インストールまたは更新されたパッケージ**
- Fedora：`libavcodec-freeworld`
- OpenSUSE：`opi`と、opiから`codecs`

### Microsoft CoreFonts

[SourceForge](http://downloads.sourceforge.net/corefonts)からファイルをダウンロードし、`cabextract`を使用してフォントインストーラーを抽出し、`$HOME/.local/share/fonts`にフォントをインストールします。削除は、`$HOME/.local/share/fonts`からCoreFontsフォルダを削除することで実行できます。

**インストールまたは更新されたパッケージ**
- すべてのシステム：`cabextract`

### Split-lockミティゲーション無効化

Linuxで良い開発慣行を強制するために行われたsplit-lockミティゲーションを無効にしますが、古いアプリケーションや複数のゲーム（特にLinuxを考慮して作られていない*Playstation Studios*のもの）で著しい性能低下をもたらします。セキュリティ機能ではないため、無効にしても安全です。これは適切なカーネルパラメータを注入する`99-splitlock.conf`ファイルによって行われます。削除は、ファイルを削除することで実行できます。

**インストールされたファイル**
`/etc/sysctl.d/99-splitlock.conf` > `kernel.split_lock_mitigate=0`

### EarlyOOM

極端なメモリとスワップ圧力の場合に、メモリを大量消費するかリークしているアプリケーションを強制終了し、'out of memory'状況を回避します。Linuxシステムは悪名高くこれに対して不適切に反応し、どのプロセスを終了するかを決定するためにカーネルが実行するヒューリスティックスキャンに数時間かかる場合があります。

**インストールまたは更新されたパッケージ**
- すべてのシステム：`earlyoom`

**適用されたカスタム設定**
```
EARLYOOM_ARGS="-r 0 -m 2 -M 256000 --prefer '^(Web Content|Isolated Web Co)$' --avoid '^(dnf|apt|pacman|rpm-ostree|packagekitd|gnome-shell|gnome-session-c|gnome-session-b|lightdm|sddm|sddm-helper|gdm|gdm-wayland-ses|gdm-session-wor|gdm-x-session|Xorg|Xwayland|systemd|systemd-logind|dbus-daemon|dbus-broker|cinnamon|cinnamon-sessio|kwin_x11|kwin_wayland|plasmashell|ksmserver|plasma_session|startplasma-way|sway|i3|xfce4-session|mate-session|marco|lxqt-session|openbox|cryptsetup)$'"
```

### GRUB-btrfs

GRUBブートメニューにbtrfsスナップショットを表示し、壊れたシステムを復元する必要がある場合に前のスナップショットを選択するのに最適です。公式[リポジトリ](https://github.com/Antynea/grub-btrfs)からクローンしてインストールし、その後カスタム設定が適用されます。`grub`が必要で、システムで`grub`が見つからない場合は進行しません。削除はドキュメントに従う必要があり、LinuxToysを通じて実行できません。

**インストールまたは更新されたパッケージ**
- Arch：`gawk inotify-tools`
- Fedora/OpenSUSE/Debian/Ubuntu：`gawk inotify-tools make`

**適用されたカスタム設定**
- デフォルトの'root' snapper設定を設定し、snapperデフォルトから以下の変更を行います：
```
TIMELINE_CREATE="no"
NUMBER_LIMIT="5"
NUMBER_LIMIT_IMPORTANT="5"
NUMBER_CLEANUP="yes"
EMPTY_PRE_POST_CLEANUP="yes"
```
その後、`snapper-boot.timer`と`snapper-cleanup.timer` systemdサービスを有効にします。

### iNet Wireless Daemon

Intelによって作られたワイヤレスネットワークデーモンで、デフォルトの`wpa_supplicant`よりも全体的なパフォーマンスとレイテンシが優れていますが、特定の企業ネットワークと互換性がない場合があります。

**インストールまたは更新されたパッケージ**
- すべてのシステム：`iwd`

**適用されたカスタム設定**
- `/etc/NetworkManager/conf.d/iwd.conf`
```
[device]
wifi.backend=iwd
```
- `wpa_supplicant` systemdサービスを無効にします。

### LucidGlyph

その[リポジトリ](https://github.com/maximilionus/lucidglyph)からの公式スクリプトを使用してインストールされます。

### CPU ondemand

デフォルトのGPUガバナーを`ondemand`に変更します（`powersave`はほとんどのディストリビューションのデフォルト）。CPU周波数をより反応的にし、システムの応答性とパフォーマンスを向上させますが、平均的な電力消費がわずかに増加します。熱放散能力が限られているため、ラップトップには推奨されません。

**適用されたカスタム設定**
- *Intel* CPU用、`intel_pstate`ドライバーが`ondemand`ガバナーの使用を防ぐため、最初に無効にする必要があります：
```
if [ -n "${GRUB_CMDLINE_LINUX}" ]; then
    GRUB_CMDLINE_LINUX="${GRUB_CMDLINE_LINUX} intel_pstate=disable"
else
    GRUB_CMDLINE_LINUX="intel_pstate=disable"
fi
export GRUB_CMDLINE_LINUX
```
- 新しいsystemdサービスを作成して有効にします：`/etc/systemd/system/set-ondemand-governor.service`
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

公式スクリプトまたは[leo/power-options COPRリポジトリ](https://copr.fedorainfracloud.org/coprs/leo/power-options)を通じて、GTKインターフェースを通じて電源設定を直感的かつ詳細に管理するために`power-options`をインストールします。トレイアイコンを含みます。削除はドキュメントに従う必要があり、LinuxToysを通じて実行できませんが、Atomic Fedoraユーザーは単に`power-options`パッケージを削除することで削除できます。

**インストールまたは更新されたパッケージ**
- Arch：`gtk4 libadwaita`
- Fedora/OpenSUSE：`gtk4-devel libadwaita-devel`
- Debian/Ubuntu：`libgtk4-dev libadwaita-1-dev`
- Atomic Fedora（`rpm-ostree`）：`gtk4-devel libadwaita-devel power-options`

### Psycachyカーネル

Psygregによって維持される、Debian/Ubuntuベースシステム用にテストされ安全と判断されたCachyOSのカーネルパッチの多くを組み込んだ修正されたLinuxカーネル。他のオペレーティングシステムでは利用できません。その[公式リポジトリ](https://github.com/psygreg/linux-psycachy)の最新リリースからダウンロードしてインストールされます。

**インストールまたは更新されたパッケージ**
- Debian/Ubuntu：`linux-image-psycachy_$(uname -r) linux-headers-psycachy_$(uname -r) linux-libc-dev_$(uname -r)`

### Shader Booster

任意のGPU用のより大きなシェーダーキャッシュサイズを有効にするシェルログイン設定ファイルへのパッチで、複数の現代ゲームでスタッターとFPSドロップを排除します。注意：本当に必要でない限り、全スペースを占有しません。`.bash_profile`、`.profile`、または`.zshrc`に追加された行を削除するだけで元に戻せます。

**適用されたカスタム設定**
- *AMD*と*Intel* GPU
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

### OpenSUSE SELinuxポリシー修正

OpenSUSEでWINE/Protonを通じて何かが実行されることをSELinuxが防ぐ問題を修正します。`1`の代わりに`0`をブール値として使用して同じコマンドを使用することで元に戻せます。

**適用されたカスタム設定**
```
setsebool -P selinuxuser_execmod 1
```

### スワップファイル作成

8GBのスワップファイルを`/swapfile`または`/home/swapfile`（btrfsファイルシステムの場合は`/home/swap/swapfile`）に作成します。btrfsファイルシステムでスワップファイルが正しく動作し、スナップショットの氾濫を避けるために必要な調整を含みます。

**削除**
```
sudo swapoff スワップファイルパス
sudo rm -rf スワップファイルパス
```
その後、`/etc/fstab`からスワップファイルエントリを削除します。

### ファイアウォール設定

必要なパッケージをインストールし、ほとんどのユーザーに理想的な賢明なデフォルトを適用します。

**インストールまたは更新されたパッケージ**
- すべてのシステム：`ufw gufw`

**適用されたカスタム設定**
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
```

### Oversteer

Flathubからアプリケーションをインストールし、`/etc/udev/rules.d`で動作するために必要な`udev`設定ファイルを適用し、ブラウザでサポートされているデバイスのドキュメントを表示します。設定ファイルはその[公式GitHubリポジトリ](https://github.com/berarma/oversteer)から取得されます。

### DaVinci Resolve

標準的な依存関係と手順に従って[DaVinciBox](https://github.com/zelikos/davincibox)を通じたインストール、またはカスタム手順を通じたネイティブインストールを提供します。*Studio*版にはBlackmagic Designから購入したライセンスが必要です。削除は、アプリショートカットを非エクスポートし、*DaVinciBox*のdistroboxをそのリポジトリの指示に従って削除する、Fedora/OpenSUSEでアプリケーションメニューからアンインストーラーを使用する、または他のシステムではパッケージマネージャーを通じてパッケージを削除することで実行できます。

**ネイティブインストール用にインストールまたは更新されたパッケージ**
- Arch：`davinci-resolve`または`davinci-resolve-studio`
- Fedora：`xorriso qt5-qtgui curl wget newt libxcb libxcb.i686 glib2 glib2.i686 apr apr-util mesa-libGLU libxcrypt-compat`
- OpenSUSE：`xorriso curl wget newt libxcb-dri2-0 libxcb-dri2-0-32bit libgthread-2_0-0 libgthread-2_0-0-32bit libapr1 libapr-util1 libQt5Gui5 libglib-2_0-0 libglib-2_0-0-32bit libgio-2_0-0 libgmodule-2_0-0 mesa-libGLU libxcrypt-compat`
- Debian/Ubuntu：`fakeroot xorriso libqt5gui5 libxcb-dri2-0:i386 libxcb-dri2-0 libcrypt1 libglu1-mesa libglib2.0-0t64 libglib2.0-0t64:i386 libapr1 libaprutil1`と`davinci-resolve`または`davinci-resolve-studio`

### Active Directory

Active Directoryドメインへの統合を有効にするために必要なすべてのパッケージをインストールします。

**インストールまたは更新されたパッケージ**
- Debian：`sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config oddjob oddjob-mkhomedir`
- Fedora：`sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python`
- Ubuntu：`sssd realmd adcli samba-common-bin adsys krb5-user libpam-krb5 libpam-ccreds auth-client-config`

### Cockpitサーバー

Debianバックポートまたはデフォルトリポジトリから`cockpit`をインストールします。Atomic Fedoraシステムには追加パッケージが必要です。その後、*Cockpit Client*からアクセスできるようにするためにFedoraとOpenSUSE用の必要なファイアウォール設定を実行します。

**インストールまたは更新されたパッケージ**
- Arch/Fedora/OpenSUSE/Debian/Ubuntu：`cockpit`
- Fedora Atomic：`cockpit-system cockpit-ostree cockpit-podman cockpit-kdump cockpit-networkmanager`

**適用されたカスタム設定**
- `cockpit.socket` systemdサービスを有効にします
- Fedora用：
```
firewall-cmd --add-service=cockpit
firewall-cmd --add-service=cockpit --permanent
```
- OpenSUSE用：
```
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```

### Waydroid

必要なすべての依存関係を取得し、ディストリビューションのリポジトリから、またはDebian/Ubuntu専用の独自リポジトリから`waydroid`をインストールします。その後、コンテナを初期化し、賢明なデフォルトで***Google Play Store***のサポートを有効にしてAndroidをインストールします。オプションで、AMDプロセッサー用の*libndk*またはIntelプロセッサー用の*libhoudini*を使用してARM翻訳機能をインストールするために[waydroid_scripts](https://github.com/casualsnek/waydroid_script)を使用します。

**インストールまたは更新されたパッケージ**
- Debian/Ubuntu：`curl ca-certificates python3-venv waydroid`
- その他：`waydroid`

**ARM翻訳付き**
- Arch：`python-pip`
- その他：`python3-pip`

### OpenRGB

Flathubからメインアプリケーションをインストールし、その[公式リポジトリ](https://openrgb.org/releases)またはFedoraでは*RPMFusion*から動作させるためのudevルールを取得します。

**インストールまたは更新されたパッケージ**
- Fedora：`openrgb-udev-rules`

### OpenRazer

その[公式リポジトリ](https://openrazer.github.io/)から`openrazer-meta`メタパッケージを使用してインストールし、FlathubからGUI *Polychromatic*も併せてインストールします。または、Fedora Atomic（`rpm-ostree`）システムの場合、*Universal Blue*のカーネルモジュールリポジトリからインストールします。Universal Blueシステムの場合、`ujust`によって提供されるスクリプトを使用してインストールします。

**インストールまたは更新されたパッケージ**
- Fedora：`kernel-devel openrazer-meta`
- Fedora Atomic：`openrazer-kmod openrazer-kmod-common openrazer-daemon`
- その他：`openrazer-meta`

## リポジトリインストーラー

### Brew
公式インストールスクリプトを通じてインストールされます。

### Cargo
RustUpによる公式インストールスクリプトを通じてインストールされます。

### Chaotic-AUR
ドキュメントに従ってインストールされ、pacmanにコマンドを早く送りすぎることによるエラーを避けるためのタイミング調整が行われます。

### Flathub
`flatpak`をインストールし、システムレベルとユーザーレベルの両方でFlathubリポジトリを追加します。

**インストールまたは更新されたパッケージ**
- すべてのシステム：`flatpak`

### Pip
デフォルトリポジトリから`python-pip`（Arch）または`python3-pip`（他のシステム）パッケージを通じてインストールされます。

### RPMFusion
ドキュメントに従ってインストールされ、Fedora Atomic（`rpm-ostree`ベース）システム用の特定の反復があります。

## 最適化されたデフォルト

システム用の厳選された安定した最適化の選択をインストールするワンクリックセットアップ。マシンに関連性がないか、すでに存在する機能はインストールしません。

#### 含まれる機能

**パフォーマンス**
- EarlyOOM
- Shader Booster
- Split-lockミティゲーション無効化
- *CachyOS* systemd設定ファイル - 安定性のためにテストされフィルタリングされているため、パフォーマンスが妥協を伴いません

**生活の質**
- FFMPEGThumbnailer
- Fedora/OpenSUSEストリーミングコーデック
- Debian用`/etc/sudoers`ファイル修正 - デフォルトインストールイメージからインストール後にユーザーが`sudo`を使用できない問題を修正
- Gnomeタイムアウト修正 - 過度な'プログラムが応答していません'プロンプトを停止するためタイムアウト許容度を増加
- RPM-OSTree用カーネルモジュール署名
- `rpm-ostree`用自動更新有効化 - ステージモードで作業が中断されることはありません

**電源プロファイル**
- *ラップトップ*：Power Optimizer
- *デスクトップ*：CPU ondemand

## Psygregの選択

Linuxでのゲーミングライフをこれまで以上に簡単にするアプリの厳選された選択、ワンクリックで。

#### 含まれる機能

- Bazaar
- Discord
- Flatseal
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
- Extension Manager（*Gnome*デスクトップのみ）
- Gnome Tweaks（*Gnome*デスクトップのみ）