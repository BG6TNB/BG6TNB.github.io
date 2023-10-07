---
date: 2023/10/04
title: 如何在 M5Stack Core2 上面运行 LVGL ?
description: 主要是记录如何在 M5Core2 上面通过 Arduino 框架运行 LVGL
tag:
    - M5Stack
    - M5Core2
    - ESP32
    - Arduino
    - LVGL
index: false                          # 默认值是 undefined，当手动标注为 false 之后，打包过程中将屏蔽该文件入口
---

# {{ $frontmatter.title }}

前端开发写多了，习惯所有 lib 都是安装后直接使用，实例化之后再进行配置；而嵌入式开发由于需要考虑到不同的硬件配置，所以通常是需要在编译前就处理好配置文件。

LVGL 是嵌入式开发中非常优秀的图形库，可以极大的降低 GUI 的开发成本，而 LVGL 需要依赖 TFT_eSPI 进行驱动，而这两者都有各自的配置文件需要修改。

本文以 Arduino 框架为例，但其实这个操作流程同样也适用于 ESP-IDF 等其他的 SDK。

开发环境方面本文使用的是 VS Code + PlatformIO IDE，事实上使用 Arduino IDE 也是可以的，但是考虑到项目隔离的问题，所以我这里还是使用的 VS Code + PlatformIO IDE 的方案。

::: tip 2023/10/04 更新
如果你不想进行下面繁琐的操作，我这里也提供了一个配置好 TFT_eSPI 和 LVGL 的项目模版，你可以直接在此基础上再进行二次开发。

M5Core2_LVGL_Template
:::

## TFT_eSPI 安装、配置及测试

首先在 GitHub 下载 [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) 最新的 [Release](https://github.com/Bodmer/TFT_eSPI/releases) 版本。

::: tip
注意不要直接下载 Master 分支的版本，从 [Release](https://github.com/Bodmer/TFT_eSPI/releases) 下载最新的版本即可；或者从 Tag 中选择所需的版本。
:::
