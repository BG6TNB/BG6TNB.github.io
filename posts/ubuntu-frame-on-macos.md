---
date: 2025/06/05
title: 在 macOS 上模拟 Ubuntu Frame
description: 使用虚拟机运行 Ubuntu Frame 以提高开发效率
tag:
    - 快速笔记
    - macOS
    - UTM
    - Linux
    - Ubuntu
    - Ubuntu Frame
    - Chromium
---

# {{ $frontmatter.title }}

::: tip 小提示
本文只是一份快速笔记，不是教程，所以写的非常的简洁，还请见谅。

如果你看不懂可以查一下 Google 或者问一下 AI。
:::

为了提高开发效率，肯定是使用模拟器来的更加方便快捷。

一开始我一直在折腾使用 ``multipass`` + X11 转发方案和远程桌面方案，但是都没有成功，后来在 Ubuntu 论坛中发现了解决方案，原来如此简单，特此记录。

首先需要安装 [UTM](https://mac.getutm.app/) 虚拟机，然后下载和你电脑相同架构的 ``Ubuntu`` 镜像，我这里不需要桌面环境所以使用的是 [Ubuntu Server for ARM](https://ubuntu.com/download/server/arm)。

下载完成后，正常安装 ``UTM``，安装完成后新建一个虚拟机，选择 ``虚拟化``，预配置选择 ``Linux``，然后一路点击继续，在硬件配置页面记得勾选 ``启用 OpenGL 硬件加速``，然后正常流程初始化 ``Ubuntu`` 即可（ 记得安装 OpenSSH 服务 ）。

待 ``Ubuntu`` 安装好后，重启服务器，进入系统后使用 ``hostname -I`` 查询 IP 地址，然后就可以在 macOS 的终端中 SSH 进入到 ``Ubuntu`` 系统了。

SSH 进入系统后，正常流程安装 ``Ubuntu Frame`` 和你所需要的服务，这里我以 ``WPE WebKit for Mir Kiosk`` 作为演示。

``` shell
sudo snap install ubuntu-frame
```

``` shell
sudo snap install wpe-webkit-mir-kiosk
```

``` shell
sudo snap set wpe-webkit-mir-kiosk url=https://bing.com
```

``` shell
sudo snap connect wpe-webkit-mir-kiosk:wayland
```

``` shell
sudo snap set ubuntu-frame daemon=true
```

``` shell
sudo snap set wpe-webkit-mir-kiosk daemon=false
```

此时没有意外的话，你的模拟器窗口会自动启动 ``ubuntu-frame`` 和 ``wpe-webkit-mir-kiosk``。

当然，如果你觉得 ``wpe-webkit-mir-kiosk`` 的性能不够好或者需要更多 Web 特性的话，也可以使用 ``Chromium``。

``` shell
sudo snap install chromium
```

``` shell
sudo snap set chromium url=https://bing.com
```

``` shell
sudo snap connect chromium:wayland
```

``` shell
sudo snap set chromium daemon=true
```

需要注意的是 ``Chromium`` 和 ``wpe-webkit-mir-kiosk`` 不同，它的 ``url`` 是启动参数，你修改后是需要手动重启服务才会生效的。

至此 macOS 上面的 ``Ubuntu Frame`` 开发环境就配置完成了，剩下的部分就根据你实际的开发需求来处理即可。

玩的开心。

## 参考资料

[Ubuntu Frame on macOS (including Apple Silicon / M1)](https://discourse.ubuntu.com/t/ubuntu-frame-on-macos-including-apple-silicon-m1/28534)
