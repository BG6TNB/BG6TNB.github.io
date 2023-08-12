---
title: PortaPack 往事
description: PortaPack 的前世今生
date: 2023/04/14
tag: HackRF
---

# {{ $frontmatter.title }}

## 出生

2013 年 Michael Ossmann 在海外众筹平台（ Kickstarter ）推出了 HackRF 项目，HackRF 项目的目标是创造一个宽频（ 1MHz-6GHz）、双工、便携、低成本的开源 SDR 平台，用于个人学习和网络安全。

![](/images/hackrf/hackrf-original.png)

2014 年 HackRF 众筹成功，Michael Ossmann 按照其承诺，将 [HackRF](https://github.com/greatscottgadgets/hackrf) 在 GPL v2.0 协议下完全开源。

2015 年的时候 Michael Ossmann 的好友 Jared Boone 为 HackRF 开发了一块扩展板，PortaPack 带有一块触摸屏和一个旋转开关作为用户交互界面（ HMI ），这样 HackRF + PortaPack 便可以在完全脱离电脑的情况下独立使用了，早期 PortaPack 的固件只有一个简单的瀑布图和广播接收的功能用于原型验证。

![](/images/hackrf/portapack-hackrf-h1.png)

2017 年 Jared Boone 对 PortaPack 的硬件做了一些调整，加入了高精度时钟、更换了声卡，同时给固件加入了更多的功能，例如接收和解码汽车胎压信号( [portapack-hackrf](https://github.com/sharebrained/portapack-hackrf) )。

## 成长

同年，PortaPack 这一便携式 SDR 手持机的想法吸引到了来自法国的开发者 Furrtek，Furrtek 是一名 Ham + Hack 并且技术能力极强，他根据自己的兴趣在 PortaPack 固件的基础上继续进行开发，并创建了 [portapack-havoc](https://github.com/furrtek/portapack-havoc) 项目，Havoc 固件增加非常多的功能，例如 ADS-B、POCSAG 等等，不仅仅是接收解码信号 Furrtek 更是实现了控制欧洲的路灯、广告牌、餐厅叫号器、信号重放等发射功能。

![](/images/hackrf/portapack-havoc-list.png)

Furrtek 本人也是开源精神的拥趸，所以他开发的功能也都继续在 GPL v2.0 协议下完全开源，在 Furrtek 的活跃下，越来越多的人注意到了 PortaPack 这一玩法。

此时的 PortaPack 虽然可以脱离电脑使用，由于没有内置的电池，所以还需要随身携带一个充电宝供电，对于单机独立使用来说，还是略微有点麻烦，于是有人想到了给 PortaPack 加上一块电池，此时 PortaPack H2 出现了，H2 的设计者不明。但是 H2 并没有根据 GPL 协议开放原理图，Furrtek 对 H2 是十分厌恶的，认为违反了开源精神。

<img style="height:300px;display:inline-block;" src="/images/hackrf/portapack-h2-front.png" />
<img style="height:300px;display:inline-block;" src="/images/hackrf/portapack-h2-back.png" />

## 来自中国的开发者

2020 年初，全球爆发了新冠疫情，社会活动开始减少，此时国内开发者邵大开始利用业余时间给 Havoc 固件继续开发，并创建了项目 portapack-havoc-modified，给固件加入了 GPS TX、Analog TV RX、NRF RX、BTLE RX 等新功能，邵大不仅按照协议开源了代码，还在博客上连载了多篇中文教程( [PortaPack 应用开发教程](https://blog.csdn.net/shukebeta008/category_9718353.html) )，为中文互联网的学习者做出了许多贡献。

2020 年 4 月 eried 开始联系邵大并询问为什么没有把 portapack-havoc-modified 合并到上游项目 portapack-havoc( [Why not PR into the main havoc?](https://github.com/jamesshao8/portapack-havoc-modified/issues/7) )，邵大那个时候刚开始用 GitHub 并不了解项目贡献的方式，所以给 Furrtek 写了 Email，由于一直没收到回复就没有合并代码。

::: info 注
根据 GPL 开源协议，邵大其实并没有义务合并到上游，只要分发的时候继续开源就行，事实上邵大是否合并到上游对邵大和 Furrtek 其实都没有影响，因为他们都是为了自己的兴趣爱好在开发学习，只是对于其他的伸手党来说，合并到同一个固件使用起来会更方便点
:::

![](/images/hackrf/portapack-havoc-modified-issues-1.png) <!-- eried 提问为什么不提交 PR -->

邵大本人表示，其实本来也就是学习和练手，并且从 Furrtek 那里也学到了很多知识，自己的代码开源出来如果其他人能因此学到些什么也算是对世界做出了自己的贡献，于是便同意 eried 搬运代码，前提是保留好版权信息，之后 eried 便开始搬运邵大的代码到上游 portapack-havoc 仓库。

![](/images/hackrf/portapack-havoc-modified-pr-1.png) <!-- eried 搬运代码 -->

## 摩擦

eried 在搬运代码的时候，还会根据自己的喜好去微调一些东西，比如打开 Havoc 固件的 Debug 模式。Furrtek 则表示开发人员自己知道如何打开 Debug 模式，没必要因此浪费普通用户的 Flash 空间。

eried 还给 Furrtek 提出了不少新的需求。但是 Furrtek 完全是用爱发电，除了维护这个项目之外，还有其他的工作，所以新功能添加的并不是非常频繁，同时合并代码也无法第一时间完成，通常是在 PR 提交后的几天才审核代码。

eried 感觉遇冷后，便开始在邵大的项目 issues 里面阴阳怪气说一个非盈利项目维护的时间久了，开发人员通常没有最初那么积极了（ 这话怎么看都是在说给 Furrtek 听的 ），明示邵大应该自己开个新的分支继续维护代码（ eried 就是想着让邵大来做管理员，好继续白嫖 ）。

![](/images/hackrf/portapack-havoc-modified-issues-1-1.png) <!-- eried 表示需要新的 fork 了，项目时间太长了维护人员没有耐心了 -->

::: info 注
此时距离 Furrtek 创建这个项目已经过去了 3 年，开发了许多的功能，而且这一切都是免费的，任何人都可以自由使用 Furrtek 的劳动成果，Furrtek 无法从中获取任何报酬，Furrtek 本来就没有义务给其他人开发新功能做项目维护。
:::

Furrtek 自然是对 eried 的态度感到不满意，自己明明是用爱发电，但每天都会有十几个人来要求他提供新的功能，而且态度很差认为这一切都理所应当，还嚷嚷着要开新分支换人来管理，于是 Furrtek 自然是不爽的，表示少说话多做事，想要什么自己写，并怼 eried 并没有什么真正的贡献，无非是搬运代码、解开注释、调整字符串长度之类的没什么技术含量的工作，对项目也没有实质的贡献。

![](/images/hackrf/portapack-havoc-modified-issues-2.png) <!-- eried 表示感觉项目死掉了，Furrtek 回怼 -->

## 分道扬镳

后来邵大接受了 eried 的提议开了新的分支（ 目的是让其他人可以方便的下载和升级固件，而不用在两个固件之间辗转 ），但是 eried 也从来没有贡献过任何代码，反而是在 portapack-havoc 代码库的基础上开了一个新的分支叫做 portapack-mayhem，Furrtek 见状，干脆停止了开发工作，把项目进行了归档（ 一个时代就此结束，非常可惜 ）。

![](/images/hackrf/portapack-havoc-modified-issues-3.png) <!-- eried 提议新的 fork 但是并没有贡献代码 -->

再后来 eried 对 portapack-mayhem 的 UI 和字体做了一系列的改进（ 客观来说，确实会更好看易用性更好，但是没有实质上的改进，没有新功能 ），同时继续搬运邵大的代码到自己的固件。

![](/images/hackrf/portapack-mayhem-ui-change.png)

漫漫的随着 Mayhem 固件的知名度上升，eried 对于搬运代码的事情不再提及，这时候开始有不少 YouTube 知名 UP 开始玩 PortaPack，并且由于不知情的原因，认为全部功能都是 eried 开发的，eried 对此没有选择澄清事实而是保持了沉默，这极大的打击了邵大的开源热情，于是邵大决定不在继续贡献代码。

## 后续

后来邵大自行设计了 PortaPack H3 扩展板，又增加了若干硬件，例如板载麦克风、板载扬声器、ABC 传感器（ 高度计、气压计、指南针 ）、板载 GPS 等，这时 eried 又跑来找邵大要代码。再后来邵大针对自己设计的扩展板写了很多单独的代码，比如 SSTV 接收、NOAA 解码、摩尔斯电码接收、GPS 接收、气压计、电子罗盘、电量检测等。

![](/images/hackrf/portapack-havoc-modified.png)

这时出现了一名新西兰人 jLynx，开始在 Mayhem 的 wiki 中诋毁邵大（ 个人推测是利益冲突，jLynx 很可能自己在销售 H2 ），刚开始还比较温和，只是说 H3 相比较 H2 只是数字变大，并不意味着更好，到后面开始睁着眼睛说瞎话，说 H3 并不支持 Mayhem 固件（ Mayhem 固件中有很多功能就是邵大自己写的，怎么会不支持呢？ ），eried 对此也没有做任何他应该做的事情，而是睁一只眼闭一只眼，随后随着邵大继续开发功能，eried 开始有了危机感，毕竟 eried 自己并不会核心的无线电开发，eried 也开始在项目介绍中劝大家不要购买 H3，并声称 H3 就是一场骗局。

::: info 注
eried 还在邵大和邵大朋友设计的 H3 / H2 Plus 后面的兼容性一栏画了一个 :shit:。
:::

![](/images/hackrf/portapack-mayhem-version.png)

现在邵大还在继续写代码，最近又增加了火车预警，并且改进了不少以前的功能。

<img style="height:300px;display:inline-block;" src="/images/hackrf/portapack-havoc-modified-train-detector-en.png" />
<img style="height:300px;display:inline-block;" src="/images/hackrf/portapack-havoc-modified-train-detector-cn.png" />

有趣的是嘴上说着支持开源的 eried 和 jLynx，无非是利用开源项目的名气为自己捞取好处，他们对项目本身并没有什么实质性的贡献（ 优化界面我承认是贡献，但是对于这个项目来说，UI 并不是最重要的 ），只是在借开源的名头搬运别人的代码，欺负邵大在英文世界没有知名度，事实上英文世界的 Furrtek 也是被他们一点一点逼走的，他们但凡是对 Furrtek 多点尊重，都不至于是现在这个下场。更何况自己用的还是不开源的 PortaPack H2 版本，如果是真心支持开源项目，就应该用最初的 PortaPack H1 版本。

## 尾巴

感谢 Michael Ossmann 和 Jared Boone 设计出 HackRF 和 PortaPack 这么好的平台。

感谢 Furrtek 和邵大等主力开发者的无私贡献，才给我们提供了这么好用的固件。

最后澄清一下，撰写本文的初衷并不是为了诋毁谁（ 事实上 eried 在其他开源项目上也有自己的贡献 ），而是看到国内有不明真相的群众没有调查就跟着老外抹黑国内开发者，实在是让人心寒！！！

**为众人抱薪者，不可使其冻毙于风雪。**

**为大众谋福利者，不可使其孤军奋战。**

**为自由开路者，不可使其困顿于荆棘。**
