---
title: FLTSATCOM - UHF SatCom Reception
description: 美国海军上一代 UHF 同步卫星通讯系统
date: 2023/04/20
tag: Radio
---

# {{ $frontmatter.title }}

![](/images/radio/uhf-satcom-reception/airspy2.jpg)

FLTSATCOM 是美国海军的一个卫星通信系统，它被用于海军的舰艇、潜艇、飞机和地面站之间的 UHF 无线电通信。

在 20 世纪 90 年代末，FLTSATCOM 卫星逐渐被 UFO 卫星所取代。

这些卫星上运行的 12 个转发器，大多数是只是简单的中继，没有鉴权或控制它们转发内容的能力。

由于 FLTSATCOM 7 和 FLTSATCOM 8 转发器是开放的（ 没有访问控制 ），它们经常被未经授权的无线电用户使用，最常见的是位于偏远地区的巴西、西班牙和俄罗斯的人。

所以听到西班牙、葡萄牙和俄罗斯的传输是很常见的。

[早在 2009 年，39 名巴西海盗被抓获，但活动仍在继续。](https://www.wired.com/2009/04/fleetcom/)

::: danger 警告
该同步轨道卫星可以覆盖几乎中国全境，根据我国法律你不应该使用该卫星，您需要自己承担全部的法律责任，本文仅用作科普。
:::

## 天线

要接收 SATCOM，你需要一个能在 240MHz 和 270MHz 之间调频的窄调频（ NFM ）接收器。

可以使用多种天线，最受欢迎的是八木天线和 Turnstile's 天线。

![](/images/radio/uhf-satcom-reception/1.png)

来自 [Scannerforum.nl](https://www.scannerforum.nl/index.php?topic=30089) 设计的八木天线：

![](/images/radio/uhf-satcom-reception/Satcom_Yagi.jpg)

![](/images/radio/uhf-satcom-reception/turnstile255mhz.jpg)

Some Turnstile examples:

[https://ua3reo.ru/antenna-dlya-satcom-iz-podruchnyx-materialov/](https://ua3reo.ru/antenna-dlya-satcom-iz-podruchnyx-materialov/)

[https://diebastelkammer.wordpress.com/2018/09/11/uhf-milsat-satcom-eine-faltbare-turnstile-antenne/](https://diebastelkammer.wordpress.com/2018/09/11/uhf-milsat-satcom-eine-faltbare-turnstile-antenne/)

## 波段规划

位于西经 15.5 度的 FLTSATCOM 8/USA-46 正在使用 Fleetsat Bravo 计划波段。

![](/images/radio/uhf-satcom-reception/milsatcom.jpg)

[http://www.satellitenwelt.de/uhfmilsat.htm#Positionen](http://www.satellitenwelt.de/uhfmilsat.htm#Positionen)

[http://qrg.globaltuners.com/?q=milsat](http://qrg.globaltuners.com/?q=milsat)

[https://uhf-satcom.com/satellite-reception/uhf](https://uhf-satcom.com/satellite-reception/uhf)

[http://www.satellitenwelt.de/UHF_MilSat.pdf](http://www.satellitenwelt.de/UHF_MilSat.pdf)

## SDR 接收机

![](/images/radio/uhf-satcom-reception/airspy.png)

AirSpy R2 SDR 接收机应该可以正常接收卫星通信。

## 软件

[SDRSharp](https://airspy.com/download/) 是迄今为止用于操作卫星窄带通讯模式的最佳 SDR 软件。

![](/images/radio/uhf-satcom-reception/sshot-4.jpg)

![](/images/radio/uhf-satcom-reception/sshot-2.jpg)

![](/images/radio/uhf-satcom-reception/sshot-3.jpg)

Milstar 卫星发射一种绰号为「waterdripper」的数字信号。

信号位于 243.785 和 243.825MHz 之间，它在光谱中是可见的。

![](/images/radio/uhf-satcom-reception/sshot-1.jpg)

舰队广播通过 SATCOM 卫星在 250.450/550/650 MHz 采用 16 频道 75dB 多路传输。

调制方式为 DBPSK 1200Bd。

[Fleet Broadcast Decoder v0.5](http://www.r00t.cz/SW/FBR)

## 一些有用的链接

[http://www.satellitenwelt.de/yagi260mhz.htm](http://www.satellitenwelt.de/yagi260mhz.htm)

[https://www.brianswx.com/index.php/11-other-hobbys/116-250mhz-satcom-7ele-yagi](https://www.brianswx.com/index.php/11-other-hobbys/116-250mhz-satcom-7ele-yagi)

[https://www.qsl.net/py4zbz/ec/ec.htm](https://www.qsl.net/py4zbz/ec/ec.htm)

[http://www.radioamatoripeligni.it/i6ibe/milsat/milsat.htm](http://www.radioamatoripeligni.it/i6ibe/milsat/milsat.htm)

[MonitoringUHFSat](https://www.google.nl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0CEAQFjAE&url=http%3A%2F%2Fhrvhf.net%2Fforum%2Findex.php%3Faction%3Ddlattach%3Btopic%3D1782.0%3Battach%3D9830&ei=3ILPVOH3MYOUatn2grAP&usg=AFQjCNGP3osNndUJ-By7ZiaSSbOZtKaB2w)

::: info 原文链接
[https://github.com/happysat/UHF-SatCom-Reception](https://github.com/happysat/UHF-SatCom-Reception)
:::
