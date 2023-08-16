---
title: PortaPack 硬件介绍
date: 2023/04/12
tag: HackRF
index: false
---

PortaPack 有许多不同的版本，虽然名字叫做 H1、H2、H3，但是它们之间并没有迭代关系，主要区别在于不同的设计者在设计的时候有不同的考量，比如屏幕尺寸、操作方式、是否内置电池、是否添加其他传感器等。

每个大版本之下还有若干小版本，这些小版本通常是由于芯片的价格变化导致的更换芯片，或者是完善设计而进行的迭代。

## H1

![](/images/hackrf/portapack-h1-front.png){style="width:50%;display:inline-block;"}
![](/images/hackrf/portapack-h1-back.png){style="width:50%;display:inline-block;"}

主要特征：2.4 寸 LCD、旋转开关、带有 RTC

初代版本，PortaPack 这一概念首次被提出。

小版本差异：
- H1 R1 使用 WM8731 音频芯片
- H1 R2 使用 AK4951 音频芯片
- 原版有触摸屏，但是一些克隆版本没有

## H2

![](/images/hackrf/portapack-h2-front.png){style="width:50%;display:inline-block;"}
![](/images/hackrf/portapack-h2-back.png){style="width:50%;display:inline-block;"}

主要特征：3.2 寸 LCD、旋钮 + 十字键、带有 RTC、带有电池

H2 可以完全摆脱外资供电，让 PortaPack 完全独立使用。我不知道 H2 是谁设计的，但是 H2 有好几个版本，相对来说比较混乱。

## H2+

![](/images/hackrf/portapack-h2-R1.png){style="width:50%;display:inline-block;"}

主要特征：3.2 寸 LCD、旋钮 + 十字键、带有 RTC、带有电池

与早期版本中的 H2 类似，据说使用了 TXCO 晶振，丝印标记为 H2+。

带有电池状态指示灯，编码器旋钮下方有 4 个 LED，充电时闪烁 25%、50%、75%、100%，满电时常亮。

小版本差异：
- H2 R2 在 H2+ 的基础上增加了音频功率放大器 INS8002E
- H2 R3 CPLD 5M40ZE64CN5 被替换为 EPM240T100C5N
- H2 R4 更换 IC 芯片、更换扬声器放大器、更换电源管理芯片

## H2 Plus

![](/images/hackrf/portapack-h2-plus-front.png){style="width:50%;display:inline-block;"}

主要特征：3.2 寸 LCD、旋转开关、带有 RTC、带有电池

虽然名字叫做 H2 Plus 但是和 H2+ 是完全不同的两个东西，由邵大的朋友设计，可以看做 H3 的阉割版。

## H3 / H3 SE / H3 MINI

主要特征：3.2 寸 LCD、旋转开关、带有 RTC、带有电池、带有 GPS、带有 ABC 硬件（ 高度计、气压计、电子罗盘 ）

早期邵大设计了登山板，上面集成了 ABC 传感器，后来将登山板与 PortaPack 合并了，也就是现在的 H3。

H3 是 2.8 寸 LCD，到了 H3 SE 屏幕增大到 3.2 寸，不过机身尺寸也一起增大了，到了 H3 MINI 保留了全部功能的前提下成功瘦身到原来的尺寸。
