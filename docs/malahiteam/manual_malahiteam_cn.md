---
title: 孔雀石收音机中文说明书
description: 孔雀石收音机中文说明书
tag:
    - Malahiteam
    - Receiver
    - Radio
    - 孔雀石
    - 收音机
    - 孔雀石收音机
---

# 孔雀石收音机中文说明书

::: info 译者注
1. 本文是基于孔雀石说明书 20220626 版进行的翻译，不同的软件和硬件版本之间可能存在细微差异，未来的软件升级也可能导致新的差异出现，考虑到整体的操作逻辑不太可能出现巨大的变化，同时由于个人的时间精力有限，暂时决定只翻译这一版说明书，如有不便还请见谅。
2. 由于原版说明书针对的是俄罗斯原版孔雀石，而国内可以购买到的官方授权版本是飞鱼版孔雀石 DSP2，所以在具体操作方面会针对飞鱼版孔雀石 DSP2 进行调整，如果你使用的是俄罗斯原版机器，那么可以参考原版说明书。
3. 飞鱼版孔雀石 DSP2 采用的是竖版设计，上半部分是屏幕，下半部分是喇叭，两个旋钮移动到了机身右侧，上方的是音量调节旋钮（ 对应原版的小旋钮 ），下方是调谐旋钮（ 对应原版的大旋钮 ）。
4. 译者本人不是飞鱼，如有售后相关问题请联系飞鱼。
5. 利益相关，译者本人从飞鱼手上原价购买了孔雀石收音机 DSP2 版本，我也没有办法获取任何优惠价格，本说明书纯属用爱发电。
:::

## 孔雀石收音机简介

孔雀石是来自俄罗斯的一款使用 SDR（ 软件定义无线电 ）技术制作的收音机，相比传统收音机来说，孔雀石收音机的信号处理流程是由软件来决定的。

本手册理论上适用于所有型号的孔雀石收音机，但不同型号之间可能有些许差异。

| 项目 | 规格说明 |
| - | - |
| 频率范围 | 10KHz-380MHz、404MHz-2GHz ( DSP2 )<br/>10KHz-250MHz、400MHz-2GHz ( DSP1 ) |
| 全景图宽度 | 192KHz、96KHz、48KHz ( DSP2 )<br/>160KHz、80KHz、40KHz ( DSP1 ) |
| 调制模式 | AM、SSB、DSB、CW、NFM、WFM |
| 灵敏度 | 0.3uV up to 1GHz |
| 动态范围 | 82dB |
| 天线 | 50 欧姆 SMA 母头<br/>高阻 SMA 母头（ DSP2 或 DSP1 加装选装板）<br/>偏置三通供电（ DSP2 ）<br/>内置前置放大器 |
| 电源 | 内置 6000mAH（ 飞鱼版 ）|
| 软件特色 | 可调滤波器带宽<br/>自适应降噪（ NR ）<br/>阈值降噪<br/>噪声消除器( NB )<br/>自动增益控制( AGC )<br/>自动陷波滤波器( ANF )<br/>支持RDS的立体声FM<br/>模拟立体声<br/>均衡器 |
| 硬件特色 | STM32H743 ARM CPU at 480MHz<br/>MSi001 多波段、多模式调谐器<br/>3.5 寸 480x320 LCD 显示屏<br/>电容式触摸屏<br/>两个机械编码器 |

## 开始使用

安装好天线，然后按下机身右侧的电源键，如果顺利的话你会看到下面这样的主界面：

![home-screen](/assets/images/malahiteam/home-screen.png)

从上往下，主界面包含以下部分：

1. 状态栏，各种状态指示器，后文会进一步介绍
2. 信号强度表（ S 表 ）
3. 目前的调谐频率和调谐步进
4. 耳机和扬声器指示灯
5. 全景图，按照频率显示信号强度，中间的竖线是您当前的调谐频率
6. 瀑布图，显示信号随着时间变化的情况
7. 菜单按钮，后文会进一步介绍

### 看起来有些复杂，但是孔雀石收音机的基本操作非常简单：

**修改频率**

点击主界面上的频率图标，然后使用触摸屏输入新的频率。

**调整频率**

旋转机身右侧下方的频率调谐旋钮即可。

**调整调谐步进**

按下机身右侧下方的频率调谐旋钮，旋转调谐旋钮修改步进，然后再次按下调谐旋钮保存步进。

**调整音量大小**

旋转机身右侧上方的音量调节旋钮即可。

**切换音量调节旋钮的功能（ 音量、过滤器带宽、衰减器 ）**

按下机身右侧上方的音量调节旋钮，旋转音量调节旋钮选择你想要的功能（ 音量、过滤器带宽、衰减器 ），然后再次按下音量调节旋钮保存。

**调整全景图的宽度**

全景图的左上角显示的是当前的带宽，点击屏幕中全景图的下半部分可以切换带宽。

**调整调制模式**

点击屏幕中 MODE 按钮，然后点击触摸屏选择新的调制模式，例如 AM、WFM、NFM、LSB、USB。

**关闭屏幕**

短按机身右侧电源键，再次短按电源键可以点亮屏幕。

**关闭孔雀石收音机**

长按机身右侧电源键几秒钟，孔雀石收音机将会发出一串摩尔斯电码（ 猜猜什么意思 ），然后自行关闭。

### 机身右侧两个旋钮还有额外的两个功能：

**禁用屏幕触摸功能**

按住机身右侧上方音量调节旋钮几秒钟，将禁用触摸屏的触摸功能，这会减少短波波段上的干扰。

此时你仍然可以通过上下两个旋钮来操作孔雀石收音机。再次按下音量调节旋钮几秒钟将重新启用触摸功能。

**锁定当前调谐频率**

按住机身右侧下方调谐旋钮几秒钟即可锁住调谐频率，再次按下调谐旋钮几秒钟可以解除锁定。

### 最后，如要设置右上角显示的时钟：

1. 按住 RADIO 按钮直到孔雀石收音机发出提示音，并显示时间设置界面。
2. 旋转机身右侧上方音量调节旋钮改变数值。
3. 点击音量调节旋钮切换到下一个元素。
4. 完成输入后按住音量调节旋钮以保存。

## 状态栏和菜单

![home-screen](/assets/images/malahiteam/home-screen.png)

### 主界面的顶部是状态栏，里面的图标如果是灰色说明为禁用状态，每个图标具体的含义如下：

| 符号 | 含义 |
| - | - |
| SQL | 绿色表示已开启静噪，并且当前已触发静噪<br/>红色表示已开启静噪，但当前并未触发 |
| NB | 噪音消除器已启用 |
| NR | 自适应降噪已启用 |
| AGC-S | 自动增益控制状态 |
| ANT | 绿色表示启用了 Hi-Z 天线<br/>红色表示启用了天线供电（ 偏置三通，DSP2 独占 ）|
| PRE | 表示前置放大器已开启 |
| NFM | 调制模式，如 AM、WFM、NFM、LSB 或 USB |
| ATT 0 | 衰减器设置，以分贝为单位（ 仅限 DSP2 或 DSP1 加装了扩展板 ）|
| VOL 57 | 音量大小 |
| FLT NORMAL | 音频滤波器带宽 |
| 4.01v | 电池电压 |

### 主界面最下面一行是菜单按钮，分别的功能是：

| 菜单名称 | 功能 |
| - | - |
| RADIO | 配置硬件相关功能 |
| AUDIO | 配置音频相关功能 |
| VISUAL | 配置全景图、瀑布图以及其他视图 |
| NR | 开启或关闭降噪功能 |
| MODE | 切换不同的调制模式 |
| BAND | 保存/读取已存的频率或其他设置 |

接下来我们会针对上方每一个菜单进行详细的说明。

## 收音机菜单（ RADIO ）

<!-- ![the-radio-menu](/assets/images/malahiteam/the-radio-menu.png) -->

![the-radio-menu-cn](/assets/images/malahiteam/the-radio-menu-cn.png)

The RADIO menu lets you configure various hardware features, such as radio frequency gain, pre-amplifier, attenuator, and so on. Touch a menu item to select it. If an item has more than two different values, rotate the larger knob to change between these values. To exit the menu, touch the RADIO button again. This menu contains the following items.

## 音频菜单（ AUDIO ）

![the-audio-menu-cn](/assets/images/malahiteam/the-audio-menu-cn.png)

The AUDIO menu lets you configure various sound characteristics, such as filtering, gain, noise reduction, noise blanking, and squelch. Touch a menu item to select it. If an item has more than two different values, rotate the larger knob to change between these values. To exit the menu, touch the AUDIO button again. This menu contains the following sections.

## 视觉菜单（ VISUAL ）

![the-visual-menu-cn](/assets/images/malahiteam/the-visual-menu-cn.png)

The VISUAL menu lets you configure panorama and waterfall displays, changing their sensitivity, color scheme, and other settings. Touch a menu item to select it. If an item has more than two different values, rotate the larger knob to change between these values. To exit the menu, touch the VISUAL button again. This menu contains the following items.

## 模式菜单（ MODE ）

![the-mode-menu](/assets/images/malahiteam/the-mode-menu.png)

The MODE menu lets you change current modulation mode (displayed at the top of the screen), as well as enable the CW decoder feature. Touch a menu item to select it. If an item has more than two different values, rotate the larger knob to change between these values. To exit the menu, touch the MODE button again. This menu contains the following items:

## 波段菜单（ BAND ）

![the-band-menu](/assets/images/malahiteam/the-band-menu.png)

The BAND menu allows to save and restore current receiver settings to a collection of memory slots. These slots are organized into pages, flipped by rotating the larger knob. To exit the menu, touch the BAND button again, or touch the EXIT button.