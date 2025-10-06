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
# repo: https://repo.url

# --- 脚本代码开始 ---
source "$SCRIPT_DIR/libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/libs/helpers.lib"

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
- **`# gpu:`** - 仅为选定的GPU供应商显示脚本，有效条目 `Amd`、`Intel`、`Nvidia`。可以有多个供应商。
- **`# desktop:`** - 仅为选定的桌面环境显示脚本，有效条目 `gnome`、`plasma` 和 `other`。
- **`#repo:`** - 使脚本名称在确认对话框中可点击。应该允许用户快速访问相应功能的原始仓库。

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

**用户界面功能**

```bash
# 使用GUI请求sudo密码
sudo_rq

# 显示信息对话框
zeninf "信息消息"

# 显示警告对话框
zenwrn "警告消息"

# 显示错误并退出
fatal "致命错误消息"

# 显示错误但继续
nonfatal "非致命错误消息"
```

**语言检测**

```bash
# 检测系统语言并设置翻译文件
_lang_
# 这会设置$langfile变量（例如"en"、"pt"）
```

#### helpers.lib

为常见任务提供专门的辅助函数：

**Flatpak管理**

```bash
# 设置Flatpak和Flathub仓库
flatpak_in_lib
# 然后安装Flatpak应用程序：
flatpak install --or-update --user --noninteractive app.id
```

`flatpak_in_lib`函数：
- 如果不存在则安装Flatpak
- 为用户和系统添加Flathub远程
- 自动处理不同包管理器
- 提供错误处理和验证

**仓库管理**

```bash
# 在Arch系统上启用multilib仓库
multilib_chk

# 在Arch系统上添加Chaotic-AUR仓库
chaotic_aur_lib

# 在Fedora系统上安装RPMFusion仓库
rpmfusion_chk
```

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

有一些标准消息键可用于简单对话框。
- `$finishmsg`："_操作已完成。_"
- `$rebootmsg`："_安装完成。重启以使更改生效。_"
- `$cancelmsg`："_取消_"
- `$incompatmsg`："_您的操作系统不兼容。_"
- `$abortmsg`："_用户取消了操作。_"
- `$notdomsg`："_无需执行任何操作。_"

**标准删除对话框**
- `$rmmsg`："_您已经安装了`$LT_PROGRAM`。您希望删除它吗？_"

需要事先设置`LT_PROGRAM`变量。

**添加翻译**

1. 向所有语言JSON文件添加翻译键
2. 在脚本描述中使用翻译键：`# description: app_desc`
3. 在对话框和消息中引用键

#### 本地化控制
```bash
# 限制脚本到特定区域设置
# localize: pt
# 此脚本仅对葡萄牙语用户显示
```

### 容器兼容性

#### 容器检测

LinuxToys自动检测容器化环境并可相应过滤脚本。

#### 容器限制
```bash
# 在所有容器中隐藏脚本
# nocontainer

# 仅在特定发行版容器中隐藏脚本
# nocontainer: debian, ubuntu
```

**自动过滤**

使用`flatpak_in_lib`的脚本在容器中自动隐藏，除非使用指定兼容系统的`nocontainer`头明确允许。

### 高级功能

#### 开发模式

LinuxToys包含用于测试和调试的开发模式：

#### 环境变量
- **`DEV_MODE=1`** - 启用开发者模式
- **`COMPAT=distro`** - 覆盖兼容性检测
- **`CONTAINER=1`** - 模拟容器环境
- **`OPTIMIZER=1/0`** - 模拟优化状态

#### 开发者覆盖
```bash
# 显示所有脚本而不考虑兼容性
DEV_MODE=1 ./run.py

# 在特定发行版上测试脚本
DEV_MODE=1 COMPAT=arch ./run.py

# 测试容器行为
DEV_MODE=1 CONTAINER=1 ./run.py

# 测试默认优化切换
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

#### 执行的检查
- 基本bash语法
- 通过`sudo_rq`进行适当的`sudo`提升方法
- 适当的库引用
- 头元素检查（仅警告，因为有些不是强制性的）

### 重启管理

LinuxToys提供全面的重启处理：

#### 重启检测
```bash
# 检查脚本是否需要重启
script_requires_reboot(script_path, system_compat_keys)

# 检查待定的ostree部署
check_ostree_pending_deployments()
```

**重启对话框**

- 自动重启警告对话框
- 用户在"立即重启"和"稍后重启"之间选择
- 在需要重启时优雅关闭应用程序
- 对ostree待定部署的特殊处理

### 错误处理

#### 最佳实践
```bash
# 检查命令成功
if ! command_that_might_fail; then
    nonfatal "命令失败，继续..."
    return 1
fi

# 关键失败
if ! critical_command; then
    fatal "关键操作失败"
fi

# 静默错误处理
command_with_output 2>/dev/null || true
```

### 脚本类别

#### 组织结构
```
p3/scripts/
├── office/          # 办公和工作应用程序
├── game/           # 游戏工具和启动器
├── devs/           # 开发者工具
├── utils/          # 系统实用程序
├── drivers/        # 硬件驱动程序
├── repos/          # 仓库管理
├── extra/          # 实验性/附加工具
├── pdefaults.sh    # 系统优化
└── psypicks.sh     # 精选软件选择
```

#### 类别信息

每个类别可以有一个`category-info.txt`文件：
```
name: 类别显示名称
description: 类别描述键
icon: folder-icon-name
mode: menu
```

### 最佳实践

#### 脚本开发
1. **始终使用元数据头**以进行适当的分类和过滤
2. **测试兼容性**在可能的情况下跨不同发行版
3. **优雅地处理错误**并提供适当的用户反馈
4. **使用现有库**而不是重新实现常见功能
5. **遵循标准脚本结构**以保持一致性

#### 包管理
1. **在调用`_install_`之前在数组中声明包**
2. **检查不同发行版的包可用性**
3. **适当处理rpm-ostree系统**（避免非必要包）
4. **尽可能为GUI应用程序使用Flatpak**

#### 用户体验
1. **用提供的语言提供清晰描述**
2. **使用适当的图标**进行视觉识别
3. **正确处理重启要求**
4. **在长时间操作期间显示进度和反馈**
5. **在确认对话框中尊重用户选择**

#### 本地化
1. **使用翻译键**而不是硬编码文本
2. **为所有支持的语言提供翻译**
3. **使用不同区域设置进行测试**以确保正确功能
4. **当脚本特定于区域时使用区域限制**

本指南为在LinuxToys生态系统中创建健壮、兼容和用户友好的脚本提供了基础。通过利用提供的库并遵循这些约定，开发者可以创建在多个Linux发行版上无缝工作并提供一致用户体验的脚本。

## III. AI编码代理

随着AI工具的使用每天变得越来越普遍，为其在LinuxToys开发中的使用建立一些指导原则是很重要的。我们相信它们可以成为非常有用的工具，如果以适度、负责任的方式使用，可以帮助开发者更高效。

### 允许的模型

基于测试，我们将*仅*允许以下模型用于代码辅助：
- **Grok Code Fast** - 快速、经济高效的模型，非常适合用作"类固醇版自动完成"
- **Claude Sonnet 4** - 先进模型，适用于复杂的代码分析和工作，但也更昂贵
- **Qwen Coder 3** - 平衡良好的模型，为各种编码任务提供良好的性能，同时保持良好的准确性和成本效率

所有其他测试的模型都未能长期提供令人满意的结果，经常在失控的幻觉中产生不正确甚至危险的代码。

### 使用指导原则

1. **补充，不要替代**：AI工具应该用于辅助和增强人类编码工作，绝不能完全替代它们。
2. **代码审查**：AI以任何能力生成的所有代码都必须经过彻底的审查和测试，以确保它符合我们高质量、安全性和功能性标准，就像任何代码一样。
3. **安全意识**：对AI生成代码中的潜在安全漏洞保持警惕。AI可能不总是遵循最佳安全实践。

### 翻译中的AI使用

我们理解让LinuxToys可以用人们的母语使用是非常重要的，因为这使软件更容易获得，这是我们成功的关键因素。然而，这也是一项非常耗时的任务，比我们大得多的项目也在努力寻找志愿者来帮助这项工作，所以我们使用AI工具来生成翻译。翻译中的任何不准确或错误都应该在我们的[GitHub问题页面](https://github.com/psygreg/linuxtoys/issues)上报告。

目前用于我们翻译的模型是**Claude Sonnet 4**，因为它在我们的测试中显示了最好的结果，没有偏离原始含义。
