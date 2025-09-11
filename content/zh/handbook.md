# 开发者手册

## I. 贡献指南

感谢您对贡献LinuxToys的兴趣！本项目旨在以用户友好的方式提供Linux工具集合，让所有用户都能使用强大的功能。

### 文档

开始之前，请查看[开发者手册](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)以获取LinuxToys库和开发实践的完整文档。

#### 开发优先级

在为LinuxToys做贡献时，请牢记这些核心优先级，按重要性顺序列出：

#### 1. 安全和隐私优先
- **用户安全和隐私必须始终是最高优先级**
- 所有脚本和工具都应经过彻底测试和审查
- 永远不要实现可能危及用户数据或系统安全的功能
- 清楚地记录任何潜在风险或系统更改
- 遵循安全编码实践并验证所有用户输入

#### 2. 用户友好性和可访问性
- 以普通计算机用户为设计目标
- 提供清晰、直观的界面
- 为所有功能提供有用的描述和指导，保持要点明确
- 确保不同技术技能水平用户的可访问性
- 在面向用户的文本和错误消息中使用简单语言

#### 3. 可靠性和自给自足
- **所有功能必须按预期工作，无需用户额外的变通方法**
- 工具应优雅地处理边缘情况
- 当出现问题时提供清楚的错误消息
- 在支持的发行版和版本间进行测试
- 确保依赖项得到正确管理和记录

#### 4. CLI工具限制
- **命令行界面应限制于开发者和系统管理员用例**
- 普通计算机用户不了解或不想处理终端模拟器
- 仅限CLI的功能应限制在开发者和系统管理菜单中

### 最后...

- 所有拉取请求将在批准前进行人工审查
- 确保您的贡献与上述开发优先级保持一致
- 在可能的情况下在不同Linux发行版上测试您的更改
- 遵循现有的代码风格和结构
- 记录任何新功能或重大更改

### 入门

1. 查看[开发者手册](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. 分叉仓库并创建功能分支
3. 按照开发优先级进行更改
4. 在支持的系统上彻底测试
5. 提交带有清楚更改描述的拉取请求

我们感谢您为让Linux对所有人更易访问和用户友好所做的贡献！

## II. LinuxToys的功能和使用

### 脚本结构和元数据

#### 基本脚本模板

所有LinuxToys脚本都遵循带有元数据头的标准化结构：

```bash
#!/bin/bash
# name: Human Readable Name (或翻译占位符)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer

# --- 脚本代码开始 ---
. /etc/os-release
SCRIPT_DIR="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"
source "$SCRIPT_DIR/../../libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/../../libs/helpers.lib"

# 您的脚本逻辑在这里
```

#### 元数据头

**必需头部**

- **`# name:`** - UI中显示的显示名称
- **`# version:`** - 脚本版本（通常为"1.0"）
- **`# description:`** - 翻译描述键或直接文本
- **`# icon:`** - UI图标标识符 - *检查列表菜单中不需要*

**可选头部**

- **`# compat:`** - 兼容发行版的逗号分隔列表
- **`# reboot:`** - 重启要求：`no`（默认）、`yes`或`ostree`
- **`# noconfirm:`** - 如果设置为`yes`则跳过确认对话框
- **`# localize:`** - 支持的区域设置的逗号分隔列表
- **`# nocontainer:`** - 在容器化环境中隐藏脚本

#### 兼容性系统

LinuxToys通过兼容性键系统支持多个Linux发行版：

**支持的发行版**

- **`ubuntu`** - Ubuntu及其衍生版
- **`debian`** - Debian及其衍生版
- **`fedora`** - Fedora和基于RHEL的系统
- **`arch`** - Arch Linux（不包括CachyOS）
- **`cachy`** - 专门针对CachyOS
- **`suse`** - openSUSE和SUSE系统
- **`ostree`** - 基于rpm-ostree的系统
- **`ublue`** - Universal Blue镜像（Bazzite、Bluefin、Aurora）

#### 重启要求
- **`no`** - 不需要重启（默认）
- **`yes`** - 总是需要重启
- **`ostree`** - 仅在ostree/ublue系统上需要重启

### 核心库

#### linuxtoys.lib

主库为脚本操作提供基本功能：

**包管理**

```bash
# 声明要安装的包
_packages=(package1 package2 package3)
_install_
```

`_install_`函数自动：
- 检测包管理器（apt、pacman、dnf、zypper、rpm-ostree）
- 检查包是否已安装
- 使用适当方法安装缺失的包
- 处理带有分层包的rpm-ostree系统
- 完成时取消设置`_packages`变量，允许在同一脚本中多次使用

**Flatpak管理**

```bash
# 声明要安装的包
_flatpaks=(package1 package2 package3)
_flatpak_
```

`_flatpak_`函数使用标准参数（用户级别、Flathub仓库）自动安装数组中的每个flatpak。完成时也会取消设置`_flatpaks`，允许在同一脚本中多次使用。

### 语言和本地化

#### 翻译系统

LinuxToys通过JSON翻译文件支持多种语言：

**语言文件结构**

```
p3/libs/lang/
├── en.json    # 英语（备用）
├── pt.json    # 葡萄牙语
└── ...
```

#### 翻译使用
```bash
# 加载语言检测
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# 在zenity对话框中使用翻译
zenity --question --text "$translation_key" --width 360 --height 300
```

### 最佳实践

#### 脚本开发
1. **始终使用元数据头**以进行适当的分类和过滤
2. **测试兼容性**在可能的情况下跨不同发行版
3. **优雅地处理错误**并提供适当的用户反馈
4. **使用现有库**而不是重新实现常见功能
5. **遵循标准脚本结构**以保持一致性

本指南为在LinuxToys生态系统中创建健壮、兼容和用户友好的脚本提供了基础。通过利用提供的库并遵循这些约定，开发者可以创建在多个Linux发行版上无缝工作并提供一致用户体验的脚本。
