# CLIモード

このモジュールはLinuxToysのコマンドラインインターフェース機能を提供し、ITスタッフ
および技術者がマニフェストファイルを使用してインストールを自動化し、グラフィカルインターフェイスなしでアプリの完全な使用を可能にします。

#### 主な機能：
- システムパッケージの自動検出とインストール
- Flatpakの自動検出とインストール
- LinuxToysスクリプトの実行
- 検証付きカスタムマニフェストファイルサポート
- クロスプラットフォームパッケージマネージャーサポート（`apt`、`dnf`、`pacman`、`zypper`、`rpm-ostree`）

## CLIモードの使用法：
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### オプション：
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: 選択したオプション（スクリプト、パッケージ）をインストール、デフォルトモード
- `-s, --script`: 指定されたLinuxToysスクリプトをインストール
- `-p, --package`: システムのパッケージマネージャーまたはFlatpak経由でパッケージをインストール（正しい名前を指定する必要があります）

- `-h, --help`: 利用可能なオプションを表示
- `-l, --list`: 現在のオペレーティングシステムの利用可能なスクリプトをすべてリスト表示
- `-m, --manifest`: マニフェストの使用
- `-v, --version`: バージョン情報を表示
- `-y, --yes`: 確認プロンプトをスキップ
- `update, upgrade`: アップデートをチェックしLinuxToysをアップグレード

オプションはArch's `pacman`と同様の方法で組み合わせることができます。
```
linuxtoys-cli -sy apparmor  # Debian/Archのapparmor インストーラーを自動確認で実行
```

## マニフェストファイル形式
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- 最初の行は次のようにする必要があります：`# LinuxToys Manifest File`
- 項目を1行に1つずつリストします（スクリプト、パッケージ、またはFlatpak）
- 項目は順序が異なっても構いません
- `#`で始まる行はコメントです
- 空行は無視されます
- パーサーの優先度：スクリプト > パッケージ > Flatpak
