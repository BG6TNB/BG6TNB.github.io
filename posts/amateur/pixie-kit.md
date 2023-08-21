---
date: 2023/08/21
title: 记录一次制作 PIXIE 短波电台套件的经历
description: PIXIE 套件在淘宝只要 17 块钱，买一套回来学习一下。
tag:
    - DIY
    - 业余无线电
    - 短波电台
    - 电台套件
    - PIXIE
---

# {{ $frontmatter.title }}

PIXIE 是一部非常经典的单频点 CW 收发信机，其发射频率固定为 7023KHz，接收频率可以在 7023-7026KHz 之间进行微调。

这部电台采用 DC 架构，即直接变频（ Direct Conversion ），将接收到的 RF 信号和 LO 信号直接进行混频，然后过滤出对应的音频信号。

由于架构简单，也没有做太多的优化设计，这部电台套件一共也没几个元器件，而且还全部是分立元件，所以非常适合初学者用于练手和学习。

市面上 PIXIE 有非常多的衍生版本，我购买的是常见的 PIXIE 4.1 版本，直接购买套件免去了自信采购 BOM 的繁琐操作，但相对应的代价是元器件质量不高，收发效果较差。

PIXIE 4.1 又包含两个细分版本，分别是板载 BNC 和 DC 接口的版本和不带 BNC 和 DC 接口的版本，前者适合制作好了直接裸板使用，后者适合嵌入到外壳中来使用。

![](/images/pixie/pixie-finished-nude.jpg){style="height:295px;display:inline-block;"}
![](/images/pixie/pixie-finished-module.jpg){style="height:295px;display:inline-block;"}

这类 DIY QRP 电台常见的外壳有三种，分别是铝铁盒子（ 茶叶盒 ）、透明亚克力和塑料壳：

![](/images/pixie/pixie-finished-metal.jpg)

![](/images/pixie/pixie-finished-acrylic.png){style="width:55%;display:inline-block;"}
![](/images/pixie/pixie-finished-box.png){style="width:45%;display:inline-block;"}

## 制作过程

我自己购买的是不带 BNC 和 DC 插座的版本，核心板比较简单，1h 就焊接好了：

![](/images/pixie/pixie-diy-finished-0.jpeg)

![](/images/pixie/pixie-diy-finished-1.jpeg)

![](/images/pixie/pixie-diy-finished-2.jpeg)

外壳还没想好具体用哪一个，要等我买的 BNC 插座和 DC5521 插座到了之后才能确定。

![](/images/pixie/pixie-diy-finished-3.jpeg)

![](/images/pixie/pixie-diy-finished-4.jpeg)

天线接口还有点纠结，SMA 的体积是最小的，可以更好的压缩垂直高度；BNC 使用方便，同时连接强度也更高，可以直连缩短型手持天线来玩（ 尽管辐射效率低到近乎没有 ）；M 接口是短波机广泛采用的接口，连接各种天线都会比较方便。

## 更多阅读

PIXIE 问世几十年了，网上有非常多的资料可供查阅，下面是我阅读过后认为写的比较好的，如果你也感兴趣可以看看这些：

### 博客

1. [老外写 PIXIE 4.1 版本测评](https://goughlui.com/2016/10/01/project-7-023mhz-pixie_4-1-qrp-cw-transceiver-kit/)
2. [BD6CR - Pixie 4.1 版本套件制作](https://mp.weixin.qq.com/s/qJVjkeM1bFZ18H2zvu0LhA)

### PDF

1. [PIXIE 电台的前世今生](/pdf/the-sprat-pixie-file.pdf)
2. [PIXIE 电台的工作原理解析](/pdf/how-the-pixie-transceiver-works.pdf)
3. [CQ 杂志对 PIXIE 电台套件的报道](/pdf/2018-02-cq-pixie-transceivers-construction-color.pdf)
