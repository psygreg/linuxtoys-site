# CLI模式

此模块为LinuxToys提供命令行界面功能，允许IT员工
和技术人员使用清单文件自动化安装，以及在没有图形界面的情况下完全使用应用程序。

#### 主要功能：
- 自动检测和安装系统软件包
- 自动检测和安装flatpak应用
- 执行LinuxToys脚本
- 支持带验证的自定义清单文件
- 跨平台包管理器支持（`apt`、`dnf`、`pacman`、`zypper`、`rpm-ostree`）

## CLI模式使用方法：
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### 选项：
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: 安装所选选项（脚本、软件包），默认模式
- `-s, --script`: 安装指定的LinuxToys脚本
- `-p, --package`: 通过系统的包管理器或flatpaks安装软件包（必须提供正确的名称）

- `-h, --help`: 显示可用的选项
- `-l, --list`: 列出您当前操作系统的所有可用脚本
- `-m, --manifest`: 用于清单使用
- `-v, --version`: 显示版本信息
- `-y, --yes`: 跳过确认提示
- `update, upgrade`: 检查更新并升级LinuxToys

选项可以像Arch的`pacman`一样一起使用。
```
linuxtoys-cli -sy apparmor  # 使用自动确认为Debian/Arch运行apparmor安装程序
```

## 清单文件格式
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- 第一行必须是：`# LinuxToys Manifest File`
- 每行列出一个项目（脚本、软件包或flatpak）
- 项目可以乱序排列
- 以`#`开头的行是注释
- 空行被忽略
- 解析器优先级：脚本 > 软件包 > Flatpak
