---
title: 孔雀石收音机 FM MPX 界面介绍
description: 孔雀石收音机 FM MPX 界面介绍
tag:
    - Malahiteam
    - Receiver
    - Radio
    - 孔雀石
    - 收音机
    - 孔雀石收音机
    - FM MPX
    - FM Stereo
    - FM RDS
---

# {{ $frontmatter.title }}

## 如何进入 FM MPX 界面

当你在孔雀石收音机的 FM 广播频段时，点击瀑布图即可进入 FM MPX 界面。

## 孔雀石收音机 FM MPX 界面介绍

FM MPX 界面如下图所示：

![fm-mpx-screen](/assets/images/malahiteam/fm-mpx-screen.png)

::: info 译者注
武汉市的 FM 全部没有 RDS 信息，所以我的照片上面是空白的。
:::

上半部分是 FM 信号解调后的频谱图，PILOT 是 19KHz 的引导信号、38KHz 左右是立体声信号、57KHz 是 RDS 信号。

下半部分各个图标的含义是：

**PS**：节目名称

**PTY**：节目类型

**PI**：节目标识符

**Multipath**：多径传播，数字越小意味着干扰越少

**下方空白栏（ RT ）**：意味着广播站想要显示的自定义文本

## FM 立体声/RDS 理论

FM MPX 是一种利用多路复用技术将立体声信号和 RDS 信息调制成 FM 信号的规范。

接收机（ 收音机 ）通过 MPX 滤波器来解码 FM 信号。

![mpx-spec](/assets/images/malahiteam/mpx-spec.gif)

MPX 标准如上图所示，主通道带宽 15KHz，包含 L+R 音频信息，如果接收机不支持 MPX 滤波器，或者接收机只有单声道，那么主通道的信息用于向下兼容。

![fm_broadcasting](/assets/images/malahiteam/fm_broadcasting.gif)

19KHz 的位置有一个引导信号（ Pilot ），23KHz-53KHz 包含 L-R 的差分信号，中心位置 38KHz（ 正好是引导信号的 2倍 ），立体声解码规则如下：

```
L + R + L - R = 2L（ 左声道 ）
L + R - L - R = 2R（ 右声道 ）
```

57KHz 的位置是携带的 RDS 信息，RDS 包含的信息如下：

- 替代频率（ AF ）

- 增强的其他网络（ EON ）

- 节目标识符（ PI ）

- 节目名称（ PS ）

- 节目类型（ PTY ）

- 广播文本（ RT ）

- 交通广播标识符（ TA ）

- 节目是否携带交通广播（ TP ）

- 时间和日期（ CT ）

- 音乐/语音标识符（ M/S ）
