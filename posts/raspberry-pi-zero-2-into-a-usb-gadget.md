---
date: 2024/10/15
title: 树莓派 Zero 2 通过 USB 进行 SSH 链接
description: 市面上大部分是基于 Pi Zero 的教程，然而这些教程是无法直接在 Pi Zero 2 上生效的，还需要一点额外的步骤。
tag:
    - 快速笔记
    - 树莓派
    - Raspberry Pi
    - Raspberry Pi Zero 2
---

# {{ $frontmatter.title }}

::: tip 小提示
本文只是一份快速笔记，不是教程，所以写的非常的简洁，还请见谅。

如果你看不懂可以查一下 Google 或者问一下 AI。
:::

首先使用树莓派官方工具 ``Raspberry Pi Imager`` 下载并烧录你需要的系统。

完成后重新插拔读卡器，在 ``boot`` 目录下创建空白内容不带扩展名的 ``ssh`` 文件开启 SSH 功能。

接着我们需要在 ``/boot/config.txt`` 文件最末尾添加下面代码：

``` shell
dtoverlay=dwc2
```

然后在 ``/boot/cmdline.txt`` 文件的 ``rootwait`` 后面添加下面代码（ 注意前后需要有一个空格 ）：

``` shell
modules-load=dwc2,g_ether
```

最后是最关键的一步，Pi Zero 2 无法在第一次启动期间正确构建设备树，为此我们需要先删除 ``bcm2710-rpi-zero-2.dtb`` 文件，然后复制 ``bcm2710-rpi-3-b.dtb`` 文件并重命名为 ``bcm2710-rpi-zero-2.dtb``。

完成这些后就可以推出磁盘插入 Pi Zero 2 启动了，最后一个需要注意的点是 USB 需要连接 Pi Zero 2 内侧的那个带有 USB OTG 功能的 Micro USB 插口。
