# CLI模式

此模块为LinuxToys提供命令行界面功能，允许IT员工
和技术人员使用清单文件自动化安装。

#### 主要功能：
- 自动检测和安装系统软件包
- 自动检测和安装flatpak应用
- 执行LinuxToys脚本
- 支持带验证的自定义清单文件
- 跨平台包管理器支持（`apt`、`dnf`、`pacman`、`zypper`、`rpm-ostree`）

## CLI模式使用方法：
```
LT_MANIFEST=1 python3 run.py [选项]
```

#### 选项：
    <无参数>                - 使用当前目录中的默认'manifest.txt'，回退
    <清单路径>              - 使用指定的清单文件
    check-updates           - 检查LinuxToys更新
    --help, -h              - 显示使用信息

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
