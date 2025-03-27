---
date: 2025/03/25
title: 解决 PlatformIO + VSCode 无法正确初始化 Core 以及无法初始化项目的问题
description: 尽管 VSCode 可以设置代理，但是有些时候即使设置了代理也无法下载，这时就需要手动安装了。
tag:
    - 快速笔记
    - Arduino
    - ESP32
---

# {{ $frontmatter.title }}

尽管 VSCode 可以设置代理，但是有些时候即使设置了代理也无法下载，这时就需要手动安装了。

这份快速笔记是针对 macOS 系统准备的，如果你使用的是 Windows 或 Linux，可能并不能完全解决你的问题。

## 安装 PlatformIO Core

推荐使用 Homebrew 安装 PlatformIO Core，只需要一行命令：

``` shell
brew install platformio
```

安装完成后可以使用 ``platformio --version`` 或 ``pio --version`` 检查是否安装成功。

## 安装 VSCode 插件

商店直接搜索安装 ``PlatformIO IDE`` 即可。

安装完成后 ``CMD`` + ``,`` 打开设置，在扩展中找到 ``PlatformIO IDE``，取消勾选 ``Use Builtin PIOCore`` 和 ``Use Builtin Python``。

将 ``Custom Py Pi Index Url`` 设置为 ``https://pypi.tuna.tsinghua.edu.cn/simple/``（ 清华大学镜像站 ）。

将 ``Custom PATH`` 设置为 ``/opt/homebrew/Cellar/platformio/6.1.18/libexec/bin``（ 根据实际版本修改 ），注意这里有两个坑，首先你不能按照说明使用 ``echo $PATH``，这个地址是无效的，其次你也不能使用 ``which platformio`` 或 ``which pio`` 返回的地址，这个地址是 ``Homebrew`` 软连接之后的单个执行文件，而 ``Custom PATH`` 需要的是 ``platformio/*/bin`` 目录。

完整配置如下：

``` JSON
"platformio-ide.customPATH": "/opt/homebrew/Cellar/platformio/6.1.18/libexec/bin", // 根据实际版本修改
"platformio-ide.customPyPiIndexUrl": "https://pypi.tuna.tsinghua.edu.cn/simple/",
"platformio-ide.useBuiltinPIOCore": false,
"platformio-ide.useBuiltinPython": false,
```

至此，你的 PlatformIO IDE 变配置完毕了，点击插件应该能看见 PlatformIO Home 页面。

## 初始化项目

你在 Home 页面中初始化项目如果时间特别长，就取消吧，等多久也没用，此时你可以在 CLI 中运行 ``pio home`` 然后在打开的网页中完成项目初始化，虽然是同一个东西，但不知道为什么这样就能很快完成，可能是插件或 VSCode 有 Bug。
