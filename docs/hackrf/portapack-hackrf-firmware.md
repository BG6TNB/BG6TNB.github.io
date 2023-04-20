---
title: PortaPack 固件介绍
tag:
    - HackRF
    - PortaPack
    - portapack-hackrf
    - Havoc
    - Mayhem
    - 邵大版
---

# PortaPack 固件介绍

PortaPack 作为 HackRF 的附件，让 HackRF 可以在脱离电脑的情况下接收解码和编码发送信息。

PortaPack 支持的功能由所搭载的具体固件所决定，下面将逐一介绍市面上主流的 PortaParck 固件：

## portapack-hackrf

![](/assets/images/hackrf/portapack-hackrf-h1.png)

随着 PortaPack H1 发布的初代 PortaPack 固件。

PortaPack H1 使 HackRF One 软件定义的无线电变得便携。它增加了一个 LCD 触摸屏、用户界面导航控制、音频输出和输入、微型 SD 卡插槽、2.5PPM 晶体振荡器和实时时钟电池备份。PortaPack 固件提供了一个用户界面和必要的信号处理，可以在没有计算机的情况下做许多有用的事情。

这个固件最后更新时间在 2019 年，虽然支持的功能不算多（ FM、AM、SSB、AIS、ERT、TPMS ），但是好在软硬件完全开源，所以仍然非常适合学习使用。

::: info 仓库地址
[https://github.com/sharebrained/portapack-hackrf](https://github.com/sharebrained/portapack-hackrf)
:::

## portapack-havoc

![](/assets/images/hackrf/portapack-havoc-screens.png)

Havoc 是基于 portapack-hackrf 固件的 fork 版本，在 portapack-hackrf 固件的基础上进行二次开发，增加了一堆功能（ 见下文 ），并且除了 RX 功能外，还增加了许多 TX 功能。

::: danger 警告
正如它的名字所暗示的，Havoc 的功能有时会很有趣，很卑鄙，甚至“很有用”，你可能不应该使用它们。

在大多数国家，无线电传输受到严格的管制。在没有许可证或授权的情况下，在自由/公共波段之外发射，即使是以非常低的功率，在你居住的地方肯定是被禁止的。

始终牢记这一点，你是唯一一个对你使用这个软件的行为负责的人。
:::

目前 Havoc 固件支持的功能可以看菜单列表，其中绿色代表已经开发完成；黄色代表能用但缺少功能；灰色代表有开发计划（ 不过目前这个项目已经在 2020/06/25 转为归档了，后续不再进行开发了 ）。

![](/assets/images/hackrf/portapack-havoc-list.png)

::: info 仓库地址
[https://github.com/furrtek/portapack-havoc](https://github.com/furrtek/portapack-havoc)
:::

## portapack-havoc-modified

![](/assets/images/hackrf/portapack-havoc-modified.png)

这个版本是国内开发者邵大基于 Havoc 固件 fork 后继续进行开发的版本，在 Havoc 固件的基础上又继续增加了一堆功能，并且直到现在仍然保持高质量的更新。

缺点方面是由于邵大是业余时间开发，所以优先功能开发，固件中会有些小 Bug，UI 的打磨略有欠缺，不过整体瑕不掩瑜，对于 PortaPack H3 用户来说是非常值得推荐的一个版本。

另外由于只针对 PortaPack H3 开发，所以基于 PortaPack H3 独有的一些硬件会有一些额外的功能，例如：

- GPS（ 接收位置和时间 ）
- ABC（ 高度计、气压计、指南针 ）
- 内置麦克风、扬声器
- 内置电池和电源管理

由于恶意竞争问题，软件方面也会有些独占功能：

- 列车预警
- NOAA
- SSTV
- 模拟电视

::: info 仓库地址
[https://github.com/jamesshao8/portapack-havoc-modified](https://github.com/jamesshao8/portapack-havoc-modified)
:::

## portapack-mayhem

Mayhem 是又一个基于 Havoc 固件 fork 的版本，目前仍然保持更新。

![](/assets/images/hackrf/portapack-mayhem.png)

Mayhem 固件一大特点是改进了 Havoc 的 UI 和字体，各个功能的细节打磨的也不错，使用起来更加直观和舒适。

![](/assets/images/hackrf/portapack-mayhem-ui-change.png)

Mayhem 固件在 Havoc 的基础上又增加了不少功能，功能丰富度方面虽然不如邵大版本，但考虑到邵大固件是针对自研 PortaPack H3 开发的，所以 Mayhem 也是目前 PortaPack H1、H2 的主流固件。

不过 Mayhem 固件的管理员和邵大之间有些矛盾，早期邵大开源代码的时候，Mayhem 也是合并了不少功能（ 并且修改了界面和字体 ），诸如：

- GPS 模拟
- 模拟电视解调（ PAL ）
- 蓝牙接收
- NRF24L01 解调
- 改进 POCSAG 的发射与接收（ P/N phase ）

按理说都是 GPL 协议下的开源项目，但后来 Mayhem 固件的管理员开始攻击和抹黑邵大，具体缘由我还不清楚，等我弄清楚了再单独写一篇文章梳理清楚来龙去脉。

更新：[PortaPack 往事](/hackrf/portapack-dev-history.md)

::: info 仓库地址
[https://github.com/eried/portapack-mayhem](https://github.com/eried/portapack-mayhem)
:::

## 功能对比

### 接收（ Receivers ）

| Applications   | Original | Havoc | Mayhem | Shao |
| -------------- | -------- | ----- | ------ | ---- |
| ADS-B          |          | :o:   | :o:    | :o:  |
| ACARS          |          |       |        |      |
| AIS Boats      | :o:      | :o:   | :o:    | :o:  |
| AFSK           |          | :o:   | :o:    |      |
| APRS           |          |       | :o:    | :o:  |
| BTLE :cn:      |          | :o:   | :o:    | :o:  |
| NRF :cn:       |          | :o:   | :o:    | :o:  |
| Audio          | :o:      | :o:   | :o:    | :o:  |
| Analog TV :cn: |          | :o:   | :o:    | :o:  |
| ERT Meter      | :o:      | :o:   | :o:    | :o:  |
| POCSAG         |          | :o:   | :o:    | :o:  |
| SIGFOX         |          |       |        |      |
| LoRa           |          |       |        |      |
| Radiosonde     |          | :o:   | :o:    | :o:  |
| SSTV :cn:      |          |       |        | :o:  |
| TPMS Cars      | :o:      | :o:   | :o:    | :o:  |
| Recon          |          |       | :o:    |      |
| Level          |          |       | :o:    | :o:  |
| Morse          |          |       |        | :o:  |
| Navtex         |          |       |        | :o:  |
| Train :cn:     |          |       |        | :o:  |
| NOAA :cn:      |          |       |        | :o:  |
| Capture        |          | :o:   | :o:    | :o:  |
| Close Call     |          | :o:   | :o:    |      |
| Sweep/Spectrum |          |       |        | :o:  |

### 发射（ Transmitters ）

| Applications      | Original | Havoc | Mayhem | Shao |
| ----------------- | -------- | ----- | ------ | ---- |
| ADS-B(S)          |          |       | :o:    | :o:  |
| APRS              |          |       | :o:    | :o:  |
| BHT Xy/EP         |          | :o:   | :o:    | :o:  |
| GPS Sim           |          |       | :o:    | :o:  |
| Jammer            |          |       | :o:    | :o:  |
| Key Fob           |          |       | :o:    | :o:  |
| LGE Tool          |          |       | :o:    |      |
| Morse             |          | :o:   |        | :o:  |
| Burger Pager      |          |       | :o:    | :o:  |
| POCSAG            |          | :o:   | :o:    | :o:  |
| SSTV              |          | :o:   | :o:    | :o:  |
| TEDI/LCR          |          |       | :o:    | :o:  |
| TouchTunes        |          |       | :o:    | :o:  |
| RDS               |          | :o:   | :o:    | :o:  |
| OOK               |          |       | :o:    | :o:  |
| Soundboard        |          | :o:   | :o:    | :o:  |
| Playlist/Replay   |          | :o:   | :o:    | :o:  |
| Frequency manager |          |       | :o:    | :o:  |
| Signal generator  |          |       | :o:    | :o:  |
