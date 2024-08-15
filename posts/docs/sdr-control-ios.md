---
title: SDR Control 中文手册
description: SDR Control 是一款通过 iPhone 远程控制 ICOM 电台的 app，本手册是 SDR Control 用户手册的双语版本
date: 2024/07/22
tag:
    - App
    - iOS
    - SDR Control
    - 用户手册
    - 英文手册
    - 中文手册
    - 双语手册
    - ICOM
    - 业余无线电
index: false
---

# SDR Control 中文手册

::: tip 温馨提示
本文是双语手册，点击中文段落即可查看原文。

为此还特地写代码添加了这个功能，希望能增加使用体验 :)
:::

::: details 说明及更新记录
SDR Control 是一款通过 iPhone 远程控制 ICOM 电台的 app，本手册是 SDR Control 用户手册的双语版本，原始版本在这里：[sdr-control-mobile](https://documents.roskosch.de/sdr-control-mobile/)。

本手册的翻译工作完全是用爱发电，只是个人阅读学习的产物，所以本手册没有跟随官方版本实时同步的计划，本手册使用的原始版本是：2024.5.25。

以下是更新记录：

1. 2024/07/22 添加原始英文版本，并添加部分翻译
2. 2024/07/23 新增双语模式，默认展示译文，点击译文文本即可展示原文
:::

::: warning 警告
本文还在施工中...
:::

## 1. 关于本 App {#about-the-app}

::: translator
SDR-Control Mobile for Icom is an iOS App for your iPhone to operate your Icom Radio via network.
<!-- zh -->
适用于 Icom 的 SDR-Control Mobile 是一款适用于 iPhone 的 iOS 应用程序，可通过网络操作您的 Icom 电台。
:::

::: translator
This App has been optimized for the small iPhone screen. Even though you can run this App on an iPad, like any iPhone App, you can better use the separately available iPad version of SDR-Control which offers additional features like displaying a Waterfall, Satellite mode and more.
<!-- zh -->
该应用程序针对 iPhone 的小屏幕进行了优化。尽管您可以在 iPad 上运行此应用程序，但与其他 iPhone 应用程序一样，您最好使用单独提供的 iPad 版 SDR-Control，它可提供瀑布图显示、卫星模式等附加功能。
:::

### 1.1. 使用任何模式操作 {#operate-in-any-mode}

::: translator
You can operate in SSB using the iPhone internal Microphone or use a Headset like Apple’s AirPods. You can also operate in CW using the integrated **Keyer** and **CW decoder**. Furthermore, you can operate in FT8/FT4 using the integrated **FT8 Mode Tool**. This all is now possible from your iPhone. No Mac or PC is needed.
<!-- zh -->
您可以使用 iPhone 内置麦克风或苹果 AirPods 耳机进行 SSB 操作。您还可以使用集成的 **Keyer** 和 **CW 解码器** 进行 CW 操作。此外，您还可以使用集成的 **FT8 模式工具** 进行 FT8/FT4 操作。这一切现在都可以通过 iPhone 实现。无需 Mac 或 PC。
:::

### 1.2. 本地或远程访问 {#local-or-remote}

::: translator
Besides the possibility to connect to your Radio via WiFi at home, where your Radio is located, SDR-Control also supports **Remote Access** to your Radio from around the world without the need for additional Hardware or Software. No Server is needed. It works, just with your Icom Radio. The only requirement is a Icom Radio that offers a network interface like the IC-705, IC-9700, IC-7610 or IC-R8600.
<!-- zh -->
SDR-Control 除了可以在家中通过 WiFi 连接到您的电台外，还支持从世界各地远程访问您的电台，无需额外的硬件或软件。无需服务器。只需使用您的 Icom 电台即可。唯一的要求是支持网络连接的 Icom 电台，如 IC-705、IC-9700、IC-7610 或 IC-R8600。
:::

::: info Note
::: translator
The App displays and can send back most values and settings to and from the Icom Radio. Some values (like the VFO Frequency and Waterfall) are exchanged real-time. Others needs to be polled from the Radio in regular intervals. For this reason, if you would use the physical controls of the Radio (except for the main frequency dial), changes are not or not immediately available to the App. Ideally, solely use the controls from inside this App.
<!-- zh -->
该应用程序可以显示并向 Icom 电台发送和从 Icom 电台发回大部分数值和设置。有些值（如 VFO 频率和瀑布值）是实时交换的。其他则需要定期从无线电中轮询。因此，如果您使用电台的物理控制（除主频拨盘外），应用程序就不能或无法立即获得更改。理想情况下，只需使用本应用程序内的控件即可。
:::

### 1.3. 问题排查 {#troubleshooting}

::: translator
In case of problems, please first have a look to the [Common Issues](#common-issues) section of the manual. If you can’t find any help there, please use the App included **Contact Developer** feature to contact me and I will be happy to help.
<!-- zh -->
如果遇到问题，请首先查看手册中的 [常见问题](#common-issues) 部分。如果您在那里找不到任何帮助，请使用应用程序中的 **Contact Developer** 功能与我联系，我将很乐意为您提供帮助。
:::

## 2. 关于本手册 {#the-manual}

::: translator
This manual explains how to setup your Icom Radio and the App and how to work with the App. Where possible and where it makes sense, the App uses the same abbreviations and terms for buttons and menus that are used by Icom for physical knobs and Buttons on the Touch screen. Those terms such as “P.Amp” (for Pre Amplifier) will not be explained in this manual because they can be looked up in the regular Icom manual.
<!-- zh -->
本手册说明如何设置 Icom 电台和应用程序，以及如何使用应用程序。在可能和合理的情况下，应用程序使用与 Icom 在触摸屏上的物理旋钮和按钮相同的缩写和术语来表示按钮和菜单。本手册将不对 “P.Amp”（前置放大器）等术语进行解释，因为这些术语可以在 Icom 基础手册中找到。
:::

::: translator
This manual can be opened from inside the App or directly following this link: [sdrcontrol-mobile-manual](https://go-to.me/sdrcontrol-mobile-manual) .
<!-- zh -->
本手册可以在应用程序中打开，也可以直接通过以下链接打开：[sdrcontrol-mobile-manual](https://go-to.me/sdrcontrol-mobile-manual) 。
:::

::: translator
If you prefer a printed version, just tap <a href="javascript:if(window.print)window.print()">here</a>. This can also be used to save a PDF file of the Manual.
<!-- zh -->
如果您喜欢打印版本，只需点击 <a href="javascript:if(window.print)window.print()">这里</a>。这也可以用来保存手册的 PDF 文件。
:::

::: translator
But please keep in mind, that this manual will be updated from time to time.
<!-- zh -->
但请记住，本手册将不时更新。
:::

::: tip 译者注
放心吧，我不会更新的 :)
:::

## 3. 必备条件 {#requirements}

::: translator
SDR Control for Icom can be used for the following Icom Radios:
<!-- zh -->
SDR Control for Icom 可用于下列 Icom 电台：
:::

- IC-705
- IC-9700
- IC-7610
- IC-R8600

::: translator
USB Connections or other Radios are not supported.
<!-- zh -->
不支持 USB 连接或其他电台。
:::

::: translator
Your Radio needs to be connected to your Local network. For the IC-705 this will be a WiFi connection. For all other Radios, a LAN cable must be used.
<!-- zh -->
为了正常运作，你的电台需要与本地网络建立连接。如果你正在使用 IC-705，那么这通常是通过 WiFi 实现的；而如果你的电台采用其他设备，则可能需要使用网线进行联网。
:::

::: translator
The App only requires iOS 16 or higher; there are no additional special memory or hardware requirements.
<!-- zh -->
应用程序只需要 iOS 16 或更高版本；没有额外的特殊内存或硬件要求。
:::

::: translator
If you have purchased the App once on the AppStore (thank you!) you can run it on several additional devices with any number of Icom Radios you own. No additional purchase is necessary. You only have to use one and the same **Apple ID** on all your devices.
<!-- zh -->
如果您在 AppStore 上购买过一次该应用程序（谢谢！），则可以在其他多台设备上运行该应用程序，而且可以使用任意数量的 Icom 电台。无需额外购买。您只需在所有设备上使用一个相同的 **Apple ID**。
:::

## 4. 做好准备 {#setting-everything-up}

::: translator
In order to use the App, you first need to setup your Icom Radio as described further below. Once that’s done, you can add your Radio to the list of Radio Devices of the App and connect to it.
<!-- zh -->
为了使用该应用程序，您首先需要按照以下描述设置您的 Icom 电台。一旦完成，那么您就可以将电台添加到应用程序的电台设备列表中并连接它。
:::

### 4.1 电台设置 {#setting-up-the-radio}

::: translator
Your Icom Radio needs just some basic setup to allow this App to connect to it.
<!-- zh -->
您的 Icom 电台只需要进行简单设置，就能允许该应用程序连接到它。
:::

::: translator
In general, the Radio must be setup to connect to your local Network (via LAN Cable for the IC-7610, IC-9700 or IC-R8600 or WiFi for the IC-705) also the Radio setting “Network Control” needs to be enabled, and a username / password must be set in your Radio settings.
<!-- zh -->
一般来说，电台必须先连接到您的家庭网络（IC-7610、IC-9700 或 IC-R8600 通过网线连接，IC-705 通过 Wi-Fi 连接），并且电台设置中的“网络控制”选项需要启用，并在您的电台设置中设定一个用户名和密码。
:::

::: translator
Detailed setup instructions can be found in the attachment of this manual for all supported Icom Radios. Even if you already setup your Radio, please have a look to the setup instructions, specific for the Radio as well as the **Network Considerations** further below in this manual. A separate chapter **Remote Access** explains how to access your Icom Radio even from around the world, outside your home network.
<!-- zh -->
详细的设置说明可以在本手册附件中找到，对所有支持的 Icom 电台都有。即使您已经为您的电台进行了设置，请务必查看一下有关设置指南、具体针对电台以及 **网络考虑** 的部分。此外，单独的一个章节 **远程访问** 解释了如何从世界各地（包括您家以外的地区）通过互联网连接到您的 Icom 电台。
:::

::: warning Hint
::: translator
If you have issues setting up your Radio, please have a look to the [Common Issues](#common-issues) chapter of this manual.
<!-- zh -->
如果您遇到设置电台的问题，请参阅本手册的 [常见问题](#common-issues) 章节。
:::
:::

### [4.2. Adding the Radio to the App](#adding-the-radio-to-the-app)

::: translator
After setting up your Icom Radio, start the App. If you see the message that asks for permission to use the microphone, please confirm this message with Ok as well as a possible message about a recent update.
<!-- zh -->
在设置好你的Icom电台后，启动应用程序。如果你看到询问使用麦克风的弹窗，请确认这个消息，并且可能会出现最近更新的提示。
:::

::: translator
Next tap on Connect or the center of the Screen. The Radio chooser will appear with an empty list. Now tap on Add to add information about your Icom Radio:
<!-- zh -->
接着在屏幕的中间点击Connect，或者直接点Connect按钮。电台选择器会弹出一个空白列表。现在点击Add添加关于你的Icom电台的信息。
:::

![](/images/docs/sdr-control-ios/network-add-device.png)

::: translator
Here, you need to enter the information you have collected during the Radio setup as described before. You can also enter a Title for your Radio.
<!-- zh -->
在这里，你需要输入你之前收集到的电台设置信息。同时也可以为你的电台起一个标题。
:::

::: translator
The **Low Bandwidth Connect** feature is designed to minimize network traffic. This option is particularly useful when operating on unstable or slow network connections. However, if you’re on a stable and high-speed local network, you may choose to disable this setting.
<!-- zh -->
低带宽连接功能是为了减少网络流量而设计的。这一选项在使用不稳定或慢速网络时特别有用。但如果你是在一个稳定的高速本地网络上，你可能会选择禁用这个设置。
:::

::: translator
The **Auto Connect** feature offers added convenience, especially if you operate just one radio. When this option is enabled, the app bypasses the “Available Radio” screen and automatically connects to your designated radio.
<!-- zh -->
自动连接功能提供了更大的便利性，尤其是当你只使用一个电台时。当这个选项被启用时，应用程序会跳过“可用的电台”的屏幕，并直接自动连接到你的指定的电台。
:::

::: danger Important
::: translator
Exercise caution when using the Auto Connect feature. Ensure that your radio is configured to maintain a consistent IP address. If the IP address of the radio changes, the app will be unable to establish an automatic connection. Should this occur, consult the ‘Common Issues’ section of this manual for troubleshooting guidance.
<!-- zh -->
在使用自动连接功能时，请谨慎操作。确保你的电台配置为保持一个稳定的IP地址。如果电台的IP地址发生变化，应用程序将无法建立自动连接。在这种情况下，请参阅本手册“常见问题”的章节，以获取故障排除指南。
:::
:::

::: translator
Once you tap on Add at the top and back on the previous screen you will find your newly added Radio in the list.
<!-- zh -->
在顶部点击Add，然后返回上一屏幕，你会发现你刚添加的电台已经出现在列表中。
:::

![](/images/docs/sdr-control-ios/ic_705_added.png)

To connect to your Radio, just select (highlight) the entry and tap on Connect – or double tap on the line in the list.

### [4.3. Final settings (Important!)](#final-settings-important)

::: translator
Once you can connect to your Radio, don’t forget to adjust your ALC level as described further below. This setting can be found under the IC-xxxx Settings tab.
<!-- zh -->
一旦你能够连接到你的电台，别忘了调整 ALC 水平，如下文所述。这项设置可以在“IC-xxxx 设置”选项卡中找到。
:::

::: translator
Second, you may want to decide how the App should leave the Radio after disconnecting. The App just changes a few settings but depending on how you want to use your Radio without the App, you need to decide which settings should be reverted after the App disconnects. These settings can also be found under the IC-xxxx Settings tab after being connected.
<!-- zh -->
第二，你可能想决定应用程序断开连接后应该如何离开电台。应用程序只改变了一些设置，但根据你的意愿使用电台而不用应用程序，你需要决定哪些设置在应用程序断开连接后应恢复原状。这项设置也可以在“IC-xxxx 设置”选项卡中找到，尤其是在已连接状态下。
:::

::: translator
Finally, use the Network Stats Tool (under Tools) to see if you have a good network connection to your Radio. You should always keep an error rate below 0.05% in order to ensure smooth operation. If the error rate is higher, you need to investigate for your network problems (see the common issues section for further help).
<!-- zh -->
最后，请使用网络统计工具（在“工具”下）来检查你是否有一个良好的电台连接。你应该始终保持错误率低于 0.05% 以保证流畅的操作。如果错误率较高，你需要调查一下网络问题（参阅常见问题章节获取进一步帮助）。
:::

## [5. The Main Window](#the-main-window)

::: translator
After connecting to your Transceiver, you will see the main Window which includes all frequently used functions for controlling the Transceiver as shown below:
<!-- zh -->
连接到你的收发器后，你会看到主窗口，包含了所有常用的功能来控制收发器，如下所示：
:::

![](/images/docs/sdr-control-ios/main-screen_sections.png)

Most buttons have identical names and functions like the physical- or soft-buttons of the Radio. For this reason, they are not explained here further. Other buttons are special to the App and explained below.

Depending on your device size, the scrollable Button bar will cover multiple rows so that more buttons are visible at once.

The **Lock button** prevents accidental changes when enabled (locked).

For the top **meter**, you can change between SWR, Power, ID and ALC Meter by long-tapping here.

::: translator
Most buttons have identical names and functions like the physical- or soft-buttons of the Radio. For this reason, they are not explained here further.
<!-- zh -->
大多数按钮具有相同的名称和功能，如收发器上的物理或软键。因此，这里不再进行进一步解释。
:::

::: translator
Depending on your device size, the scrollable Button bar will cover multiple rows so that more buttons are visible at once.
<!-- zh -->
根据你的设备大小，滚动式按钮栏会覆盖多行，以便一次看到更多按钮。
:::

::: translator
The **Lock button** prevents accidental changes when enabled (locked).
<!-- zh -->
**锁定按钮** 当启用时，可以防止意外更改。
:::

::: translator
For the top **meter**, you can change between SWR, Power, ID and ALC Meter by long-tapping here.
<!-- zh -->
顶部 **计量器** 可通过长按这里来切换 SWR、功率、ID 和 ALC 计量器。
:::

### [5.1. Buttons with multiple functions](#buttons-with-multiple-functions)

Most buttons have two possibilities. They can be (regular) tapped to quickly change a certain setting and to perform a certain function. For instance hitting PTT once will start transmission, hitting it again will end transmission.

In addition, most buttons have further functions which can either be reached from an addition “more…” button or by long-pressing (tap and hold) a button.

For instance, if you tap once on the **SQL** button, you can enable and disable Squelch. Tap and holding the SQL button will show the Squelch level slider.

![](/images/docs/sdr-control-ios/squelch-sel-part.png)

Similar additional popups will be displayed by long-tapping on other buttons like Mic, Tune, NB, NR and many other buttons in the button bar.

The **Tune button** tuning feature can only be used if your Radio has an Antenna tuner included or if a tuner is attached to it. However, long-tapping on Tune can be used to generate a 10% AM signal even without using a Tuner. A framed Tune button indicates an active tuner.

The **Mic button** needs to be used to define the microphone input source for your Radio. The available sources can be selected by long-tapping this button. To use your local iPhone (either the internal microphone Headset connected to your iPhone) as microphone source, **chose iPhone** as selection.

![](/images/docs/sdr-control-ios/mic-sel-part.png)

## [6. Settings](#settings)

In this App, you can maintain different types of Settings. First, there are **general App Settings** which are App and not Radio specific such as your HAM Radio information like Call-sign, Country, Locator etc. and your credentials for the integrated Call-Sign lookup features. These settings can be maintained from the **Settings tab** at the bottom. Second, there are **Radio specific settings** which can only be maintained, once you are connected to a Radio. In this case, you will see another tab at the bottom named according your Radio type which can be used to maintain the Radio settings.

And finally, there are the **Audio settings** which can be used to define your Microphone and Speaker source and volume.

### [6.1. App settings](#app-settings)

Most of these settings are self-explanatory. It might be worth to go though these settings and add / select your personal information and preferences.

![](/images/docs/sdr-control-ios/settings-1.png)

In the “Information & Support” section, you can find the “Contact Developer” button in case you have questions or issues.

### [6.2. Radio settings](#radio-settings)

As mentioned before, the settings here depend on the Transceiver you are using.

![](/images/docs/sdr-control-ios/radio-settings.png)

An important setting here is the **LAN input gain** slider. Before you start working in digital modes like FT8 using the App you will need to maintain this gain slider for a correct audio signal. For this, look for a free frequency and start transmitting in FT8 (e.g. by calling CQ) and move this slider up from the lower position until the ALC meter no longer increases. For this, you can either watch the ALC meter on your Transceiver (as this must only be done once) or you can change the Power Meter of the App to display the ALC meter but then you would have to switch between the Waterfall display and these radio settings.

Under **“STARTUP SETTINGS”** you are able to force the Device Microphone to be activated upon App connection.

Under **“SETTINGS AFTER DISCONNECT”** you can decide how the App should leave your Radio once you disconnect from the Radio. If you want to use your Radio with the locally connected Microphone once you are no longer using the App, you can select “Mic” for DATA ON and/or OFF mode for example. So if you forgot to change the Mic setting back from inside the App, this setting will ensure that you can use the locally connected Microphone after disconnecting.

You may see additional setting options here on the Radio settings screen depending on the capabilities of your Radio.

For instance, the IC-9700 offers a SAT mode so for this type of Radio you will see a button to maintain your SAT settings which are explained further in a separate chapter below.

For Radios that are providing **Memory groups** you can also maintain **Memory group names**.

::: info Note
If you have already maintained Memory Group names on your Radio, Icom doesn’t offer these names to remote Apps so you will have to enter the names again here for the App.
:::

### [6.3. Audio settings](#audio-settings)

The Audio Settings can be reached by hitting the top gear Icon.

![](/images/docs/sdr-control-ios/audio-settings.png)

Using button right of **“Device:”** you can select the audio device used by the App which can either be the internal Microphone and Speaker, a Headset or any other Audio device linked to your Device.

Using the Mic Threshold slider, you can prevent submission of ambient noise by raising the slider as high as necessary.

At the bottom of this setting screen, you can enable and control the volume of the Radio internal speaker.

Change the Buffer size setting if you are experiencing audio dropouts.

::: info Note
If you notice static noise at the beginning of your transmission, activating the **Mic Delay** setting may resolve the issue. This static is typically residual receive noise captured by the microphone as you start transmitting. If you’re using a headset, this option is generally not necessary and can remain disabled.
:::

## [7. Frequency Tuning](#frequency-tuning)

You can tune the frequency using the tuning wheel at the bottom of the screen.

![](/images/docs/sdr-control-ios/main-tuning.png)

Here you can use the **<<**, **<**, **\>** or **\>>** buttons to tune the frequency down or up based on the Step settings. Tap and hold these buttons to repeat stepping.

Hit the Step button to change the Stepping.

::: warning Hint
You can reverse the tuning wheel direction in the Settings of the App.
:::

You can also directly enter a frequency by tapping on the VFO frequency.

![](/images/docs/sdr-control-ios/main-tuning-2-part.png)

In addition, you can tune to a certain frequency by using the Memories tool, explained further down.

## [8. Advanced](#advanced)

### [8.1. Satellite Mode / Transverter](#satellite-mode-transverter)

If you are using a Transverter or are operating Satellites, you may want to show the effective frequency in the App and even use the effective frequency for logging.

For this, you can maintain a frequency Offset under Radio Settings of the App. Here, you can set and adjust the Offset frequency independently for RX (Receive) and TX (Transmit). The translated display frequency will be shown below for your reference.

Remember, the TX frequency is always derived from the VFO displaying the red TX indicator. The indicator may change if you switch to Split, Dual-Watch or SAT Mode.

### [8.2. SAT Mode](#sat-mode)

The IC-9700 offers a SAT mode which is supported by this App. Activating SAT mode will result in the following changes:

- TR (Tracking) mode will be enabled
- DW (Dual Watch) will be enabled
- TX will change from the left to the right VFO

When TR (Tracking) mode is enabled, the TX frequency will automatically adjust in response to any changes made to the RX frequency.

::: info Note
The App does not yet support automatically doppler-shift adjustment.
:::

To adjust the Offset between RX and TX frequencies, first turn off TR mode, then adjust the RX frequency (which is now independent of the TX frequency), and finally, re-enable the TR mode.

### [8.3. Switching the Radio on or off](#switching-the-radio-on-or-off)

A radio cannot be completely shut down by an App. It can only be put in standby mode or woken up from standby. To put the radio in standby mode, you can long-press the disconnect button. You can also configure a setting on the Settings tab to make the radio go into standby whenever you disconnect from it.

If you turn off the radio using the power button, you won’t be able to turn it on again with the app. To prevent this from happening and to bring the Radio into Standby mode instead of turning it off completely, you can configure a corresponding setting as follows:

For the IC-705:

Menu → Set → Function → Power Off Setting (for Remote Control) → Standby/Shutdown

or for other Radios:

Menu → Set → Network → Power Off Setting (for Remote Control) → Standby/Shutdown

Once this setting is configured, the radio will ask whether to power it off or put it in standby mode whenever you use the power button.

## [1. Tools](#tools)

Under the Tools tab you will find several helpful features which are extending this App.

![](/images/docs/sdr-control-ios/tools.png)

Some Tools like the Network Stats Tool are for informational and debugging purposes. Some Tools like the MIDI Controller will add additional controlling capabilities to the App. Other Tools like the Logbook can even be used separately, without being connected to the Radio but all Tools are fully integrated and work seamlessly together with the App and your Radio.

## [2. Band Plan](#band-plan)

The Band Plan feature offers a comprehensive frequency guide for all HF HAM Bands tailored to your specific IARU region, including the recommended modes and maximum bandwidth as per IARU guidelines.

::: info Note
To view the Band Plan applicable to your area, please configure your **IARU region** in the App Settings.
:::

![](/images/docs/sdr-control-ios/bandplan-1-part.png)

If you tap on a band, you can see more details for the selected band.

![](/images/docs/sdr-control-ios/bandplan-2-part.png)

Tapping on an entry, will tune to the selected frequency range. Tapping twice will also switch to the VFO screen.

## [3. CW Macros](#cw-macros)

It is possible to create CW-Macros for your CW QSOs. After opening the CW-Macros tool, you can maintain up to ten different macros which can use Placeholders like {MYCALL} which will be replaced before the Macro gets sent.

![](/images/docs/sdr-control-ios/cw-macros-part.png)

::: info Note
A list of available Variables can be found in the Attachment of this manual.
:::

The Macros maintained here will be available in the CW Mode Tool.

![](/images/docs/sdr-control-ios/cw-qso-ex.png)

For CW Macros, you can send pro-signs like BK by using the ^ prefix character (e.g. ^BK).

## [4. DX-Cluster](#dx-cluster)

The DX-Cluster Tool connects you to a variety of pre-defined global DX-Cluster databases or your local CW-Skimmer, displaying Spots directly on the Waterfall. You can also instantly tune to a Spot’s frequency by simply tapping on its entry in the list.

Upon launching the DX-Cluster Tool, click on ‘Start’ to begin retrieving data from the selected DX-Cluster server.

![](/images/docs/sdr-control-ios/tool-dxcluster.png)

If you double-tap on a line in this list, the Transceiver will tune to the particular frequency of this spot.

If you single-tap a line, you will see more details about the Spotter and Call.

Tapping on the Filter Icon at the top will show the various Filter options:

![](/images/docs/sdr-control-ios/tool-dxcluster-filter.png)

Here, you can select the Bands or Modes or Countries you are only interested in or enter CQ-Zones, ITU-Zones or prefixed of Spotter or Calls you only want to see. For those you can enter multiple values, separated by comma.

At the top of these filter settings, you can either enable or disable these filters.

The Settings menu will let you alter several options of the DX-Cluster Tool. From here, you can select a one of the predefined servers or add your own by clicking the Add button.

![](/images/docs/sdr-control-ios/tool-dxcluster-settings-ex.png)

### [4.1. Map](#map)

You can either see a list of all current DX-Cluster entries or a Map by tapping the Map / List button at the top.

![](/images/docs/sdr-control-ios/tool-dxcluster-map.png)

## [5. POTA](#pota)

The POTA Tool shows Parks on the Air (POTA) spots in a similar way like the DX-Cluster tool does for regular spots.

POTA Spots and be displayed on the Waterfall. You can directly jump to a certain frequency of a POTA Spot and take over Park information to the Logging Window.

::: info Note
The POTA Tool can be unlocked along with the DX-Cluster Tool. Once any of these two tools have been unlocked, the other is unlocked too.
:::

After starting the POTA Tool, after a short while, you will see all spotted POTA stations

![](/images/docs/sdr-control-ios/tool_pota.png)

If you double-tap on a line in this list, the Radio will tune to the particular frequency of this spot.

::: info Note
Tuning to the spot will not work for FT8 as the announced frequency is never the exact FT8 frequency. For FT8 Spots, you will need to open the FT8 Tool manually and look out for the POTA Activator.
:::

Second, logging information will be prefilled to the logging window, if it had been opened before.

![](/images/docs/sdr-control-ios/pota-logging.png)

::: info Note
For FT8 and for using this feature, you need to turn both auto logging settings off as otherwise FT8 QSOs will be logged without the additional POTA information.
:::

### [5.1. Map](#map)

You can also get all current POTA stations displayed on a Map by hitting the MAP button

## [6. PSK Reporter](#psk-reporter)

PSK Reporter is a great automatic propagation reporter for digital modes, including FT8 / FT4.

You can use PSK Reporter to get an almost instant idea about the current DX conditions and who is able to copy you around the world.

This App integrates PSK Reporter in two ways.

### [6.1. Submitting PSK Reporter spots](#submitting-psk-reporter-spots)

PSK Reporter lives from the fact that many HAMs are contributing their reception reports to PSK Reporter. This App can automatically send FT8 reports to PSK reporter when enabled (under Settings inside the FT8 Tool or the PSK Reporter Tool).

If enabled, a list of received FT8/FT4 signals will be submitted to PSK Reporter every five minutes. Except for the information about your antenna (which is optional), nothing else has to be configured.

### [6.2. Viewing PSK Reporter results](#viewing-psk-reporter-results)

The opposite side of PSK Reporter is to view a list of all stations who received your signal. This is, what the PSK Reporter Tool is for.

To get a report of stations that are able to copy you, first have a QSO or a test transmission on a band you are interested in. Next open this Tool and enter your callsign at the top of the window (it not already per-filled) and click on the start button.

![](/images/docs/sdr-control-ios/tool-pskreporter-details.png)

Once the list is filled with reports you can tap on a line for more details.

It may take up to 15 minutes after your transmission until you will see your results. This is because every contributing listener will update their reports every five minutes and it is not possible to download reports from PSK Reporter sooner than every 5 minutes as well. If you would request an update sooner than after five minutes, you will see an according message at the bottom of this window.

You can narrow down the results by using the Filter Icon at the top and selecting a Mode and Time.

You can also visualize all locations on a map by switching to the map mode using the Icon at the top.

![](/images/docs/sdr-control-ios/tool_pskreporter_map-part.png)

## [7. Logbook](#logbook)

The included Logbook was implemented with the idea in mind to offer a quick and easy logging feature to this App which should already provide all basic requirements for day to day logging.

You can export (and import) ADIF files to exchange logbook contents with other logbook software.

::: info Note
If you wish to export only a portion of your complete log file, utilize a filter to refine your logbook and enable the **Export only filtered Log entries** setting under Settings.
:::

After starting the Logbook tool you will see your last logs.

![](/images/docs/sdr-control-ios/tool-logbook.png)

At the bottom, you see a trash-can which can be use to delete the whole logbook if you like and a sort menu. The Spy-glass will open a search field where you can enter a call-sign you are looking for.

To edit an already logged QSO, just tap on a line.

![](/images/docs/sdr-control-ios/logbook-details.png)

From here, you can alter all fields of the log manually or let them be filled using the HamQTH or QRZ.com lookup feature. For this, just tap on the corresponding button.

![](/images/docs/sdr-control-ios/logbook-details-lookup.png)

And you will see the details provided by these Call lookup services. Hit the **Use to update Log** button at the top to take over these values for all empty field of your Log.

There are several settings for customizing the logbook using the Settings button at the top.

![](/images/docs/sdr-control-ios/tool-logbook-settings.png)

When enabled, your Logbook will be synchronized across your devices. This synchronization uses iCloud Drive which needs to be enabled on your Device and will work even with the Mac Version of this App or the SmartSDR Apps.

Other Tools like the FT8 Tool will display Call signs marked in a different color if you have worked a call before. In the above settings you can define when a Call sign should be regarded as “worked before”.

Under Contest, you can let the logging Tool automatically generate text for the RST entries.

You can also filter the Logbook using the Filter button.

![](/images/docs/sdr-control-ios/tool-logbook-filter.png)

### [7.1. Logging a new QSO](#logging-a-new-qso)

For logging a new QSO, you have a couple of options:

- From inside the Logbook Tool, tapping the + Icon
- From the main VFO View, hit the Log button
- The FT8 or CW Mode Tools you can also use the included Log button

::: info Note
As for FT8 all necessary logging information is available right after the QSO, every QSO will be logged fully automated even without showing the logging window. You can turn this off in the FT8 settings.
:::

The displayed logging window will be pre-populated with values based on the current VFO:

![](/images/docs/sdr-control-ios/tool-logbook-log.png)

To log a new QSO (Contact), simply enter the call sign of your QSO partner and tap the “Save” button. This action will save the contact details to your Logbook.

To the right of the call sign entry field, you’ll find additional information about the entered call sign, including QTH (location), distance measured in both kilometers and miles, as well as details for both short and long path (LP) calculations. This area also indicates whether the call sign is already present in your logbook.

You can tap the Spy-Glass button for an in-depth lookup of the entered call sign, providing you with further details.

#### [7.1.1. Time Stamps](#time-stamps)

The QSO Start Time automatically reflects the moment you opened the log entry window. To continuously update the QSO End Time, tap the black clock icon located to the right of the time display; this will cause the end time to update every second.

#### [7.1.2. Field Locking](#field-locking)

Certain fields feature a lock icon on their right side. Activating this lock ensures that the information you’ve entered into these fields remains constant, even after saving and moving on to a new QSO entry. This can be useful for information that remains consistent across multiple contacts.

#### [7.1.3. Custom Fields](#custom-fields)

When you enable Custom Fields in the Logbook Settings, three additional input fields will appear. You can select the appropriate ADIF (Amateur Data Interchange Format) field for each from a dropdown menu on the left side.

Custom fields are especially useful for specialized operations like POTA (Parks on the Air), SOTA (Summits on the Air), SAT-Mode (Satellite Mode), or any other scenarios requiring you to log QSO values that are typically not needed.

#### [7.1.4. Keep the log window open](#keep-the-log-window-open)

Located at the bottom-right corner of the screen is a push-pin icon that controls the behavior of the window after saving a QSO. If the push-pin icon is crossed out, the window will automatically close once you tap the “Save” button. If the icon is not crossed out, the window will clear the fields for your next QSO entry but remain open, allowing for quick and consecutive logging.

### [7.2. Log submission to other Apps via UDP](#log-submission-to-other-apps-via-udp)

If you are using your device on your local network and want to continue to use another Logging software on your Mac or even your Windows PC, you can use a feature of this App which submits all new log entries to other software via UDP.

This feature can be enabled in the App Setting. If enabled, whenever you are adding a new Log entry, this log entry will be submitted simultaneously to the other Logging program. In addition, there is a “UDP Broadcast” button on the Log detail screen which can be used to submit any older or amended log entry as well.

For UDP Log transmission, you need to enter the IP Address of the PC/Mac where your other Logging program is running and the required UDP Port. If the program is running on the same Mac, just enter 127.0.0.1 as IP Address.

Unfortunately, there are different standards for submitting log entries via UDP. This App supports two different standards:

1.) For N1MM or Log4OM format

This standard is understood by N1MM or Log4OM and others, mainly PC based logging programs.

2.) WSJT-X format

This standard is used by WSJT-X. Every logging software that can receive WSJT-X UDP logging information can be used.

The ports that need to be used for each standard depends on the Logging program. Some will let you enter an individual port number, some have a fixed port number. In any case, the port number used by the logging software needs to be identical to the port entered here.

When clicking the Test button, a sample log entry will be submitted so you can verify if the log entry will be received in your logging program.

### [7.3. Logbook export](#logbook-export)

When tapping the Folder Icon at the top you can chose how to import or export your logbook. It is recommended to create export files vie Email or iCloud Drive to keep a backup of your Logbook.

## [8. Network Stats](#network-stats)

This Tool can help to analyze network issues.

![](/images/docs/sdr-control-ios/tool-network-stats.png)

It displays information about the network traffic from and to your Radio.

**Internet RTT** is the Round-Trip-Time (the time to the server and back) to a server on the Internet. This value should be lower than 30 – 50ms. Higher values indicate general issues with your network connection. However, this value is only important for Call Lookups over the internet.

**Radio RTT** is the Round-Trip-Time to your Transceiver. These should be below 20ms on local networks. However, this value should always be lower or at least equal than the Internet RTT. If this value is significantly higher (e.g. 1.5 or twice as high as your Internet RTT) there are issues with your local network (e.g. wrong LAN Cables or wrong FullDuplex/HalfDuplex network settings or a WiFi issue in case you are using an IC-705.)

The **Radio Packets** section shows the number of packets received for certain packet types along with the Error count and percentage.

A certain Error percentage up to 0.05% is normal and usually covered by the automatic error correction and often not even noticeable. Errors may even temporary happen if the device is too busy (e.g. while temporary switching to another App). However, continuous Errors might be an indication of network issues.

You may also want to monitor the Error rate while you are transmitting. If the rate goes up while transmitting, you likely have an EMC / RFI problem.

The **Reset button** at the bottom can be used to set the error counter to zero which is useful to see if there are any changes after changing some settings.

In case of Network issues, please consult the [Common Issues](#common-issues) section of this Manual.

## [9. Call Lookup](#call-lookup)

The Call Lookup tool is designed to provide you with detailed information about a specific call sign.

![](/images/docs/sdr-control-ios/call_lookup_before-part.png)

After entering the Call-sign in the top entry field, Basic information like Country, DXCC, CQ- and ITU-Zone will be displayed immediately. This information comes from an internal Database of the App which will be updated from time to time.

::: info Note
This information is only accurate down to a country level. The location within a country will always be the location of the capital city of the country.
:::

Further below you will get a list of previous QSOs to the entered Call-sign.

For more accurate and detailed information like the name, exact location or even Email address, you can use one of the integrated **call lookup services** like **HamQTH** or **QRZ.com**. If you have an account on one or both of these services, please enter your account information in the App Settings. In that case, you can use the HamQTH or QRZ.com lookup buttons for best results and most convenient display. If you don’t have accounts for these services, you can at least use the View on QRZ.com button which will show the QRZ.com website for the particular call-sign.

Once you have used the call lookup using HamQTH or QRZ.com, the results in the upper part will be updated.

![](/images/docs/sdr-control-ios/call_lookup_after-part.png)

This also includes **Distance** and **Bearing**.

## [10. Memories](#memories)

This tool will show all memories stored inside the currently connected Radio.

![](/images/docs/sdr-control-ios/tools-memories.png)

Once this tool has been opened, it will load all memories stored inside the Radio to show them in a list.

You can single tap to tune to a certain memory. Double tapping will also cause the screen to switch to the main VFO View.

At the bottom, you can change the sorting and sorting order. If your Radio offers the possibility to use memory groups, you can select a memory group here as well.

::: info Note
If supported by your Radio, you can maintain Memory Group names in the Radio settings (IC-xxxx tab) at the bottom.
:::

To edit the name of a memory, just select an entry in the list and tap edit at the top.

To add a new memory, just use the **+** button at the top. The next free channel will be selected and the current frequency and mode settings can be stored using a desired memory name.

## [11. Scanning](#scanning)

This tool enables users to scan various frequencies. Apart from Memory Group scanning, it runs the Scan on the Radio and compiles the results which will be displayed in a list.

![](/images/docs/sdr-control-ios/tool-scanning.png)

Under Settings, you can define which type of scanning should be performed. Scanning begins after hitting the Start button.

While scanning, all frequencies where a signal was received will be added to the list, including it’s memory name (if available) the number of hits and the minimum or maximum signal strength.

::: danger Important
You can also run a Memory Group scan, even though Icom doesn’t provide this possibility for remote access. In this case, this Memory Group Scan will run from inside the App. For this reason, scanning speed is only one channel per second. If you have access to the Radio, you can run a fast Memory Group scan by selecting Memory as Scan type in the Scanning tool, hit the Start button but then start the desired Memory Group Scan at the Radio’s front panel.
:::

::: warning Hint
You can mark Memories with Stars (\*,\*\*,\*\*\*). To Scan only Memories marked with Stars, you can select Memory as Scan Type and select the corresponding Stars below the Scan type.
:::

Clicking on a line in the list will stop scanning (if it was running) and tune to the corresponding frequency.

## [12. Pryme Buttons](#pryme-buttons)

This tool enables users to use a physical button to trigger PTT or other features of the Radio.

::: danger Attention
This tool requires at least iOS 16. It is not available when running on older iOS versions.
:::

The supported buttons are available from a company called Pryme which can be found using the following link: [https://www.pryme.com](https://www.pryme.com/index.php?l=product_list&c=163) .

All Pryme buttons with with a **\-Z** or **\-ZU** in their name are supported like the BT-PTT-Z, BT-PTT-ZU, BT-PTT-ZU-STRAP, or another similar.

![](/images/docs/sdr-control-ios/pryme-ptt-z.jpg)

Upon launching the Pryme Button tool, activate the **Enable Pryme Button** switch. You may be prompted to grant Bluetooth access for the app the first time you ::: info enable this switch. After a brief period, all detected buttons will be displayed. Note that some buttons may need to be pressed before they can be detected.
:::

![](/images/docs/sdr-control-ios/tool-pryme.png)

When a button is detected, it will appear as **PTT-Z** followed by a unique identifier and a **Not connected** status.

To establish a connection to a button, simply tap the corresponding line and hit the **Add** button. Within a few seconds, the status should change to **Connected**.

To assign a function to the button, keep the line selected and press the **Map** button.

A new Mapping window will appear, as shown in the screenshot above. In this window, you can select a **Radio action** such as **PTT Push** or other radio functions.

Feel free to add as many buttons as desired. To identify a specific button, press it, and the corresponding entry in the list will be highlighted.

## [13. CTR2 Controller](#ctr2-controller)

This tool enables the use of the **CTR2-MIDI** Controller, which is available for purchase from Lynn Hansen, KU7Q at [https://ctr2.lynovation.com](https://ctr2.lynovation.com/).

The controller serves as an interface for the radio, allowing operators to tune frequencies, adjust volume, activate PTT, and access several other features.

Additionally, it provides the capability to connect a CW paddle to your device.

The CTR2-Controller offers the flexibility of wireless connectivity via Bluetooth-LE or a wired connection through a USB adapter.

![](/images/docs/sdr-control-ios/ctr-midi.jpg)

To pair the CTR-MIDI with your device via Bluetooth, ensure that the controller is powered on and in proximity to your device. Then, launch the CTR2 Controller tool and click the “Find CTR2 Bluetooth-LE Device” button at the top. The CTR2-MIDI should be detected within a few seconds and appear in the Device list. If the initial attempt is unsuccessful, close the tool, reopen it, and try again. Once the controller is detected, you can select it from the Device list under the name CTR2\_xxxx whereas xxxx is a unique identifier different for each controller.

If you are connecting the CTR2-MIDI via USB, it will be listed as XIAO\_ESP32S3 in the Device list.

After selecting the appropriate device and toggling the **Enabled** switch on, the status should update to Connected.

The controller comes with default mappings that allow you to use the knob for tuning, volume adjustment, and more. You can view and modify these mappings to suit your specific needs by clicking the **Edit Mapping** button.

Should you wish to revert to the default mappings after making changes in the Mapping editor, simply delete all mappings, close the editor, and reopen it.

When a paddle is connected to the CTR2-MIDI, it is ready for immediate CW operation. To adjust CW and paddle settings, such as CW Speed, Iambic mode, or paddle swapping, open the CW Decoder Mode Tool and click the Options button in the TX section.

For additional information and a comprehensive manual, please visit Lynn’s website.

## [1. Modes](#modes)

The Modes tab will be visible once you are connected to a Radio. It includes tools for operating in certain modes like CW or FT8.

![](/images/docs/sdr-control-ios/modes-part.png)

## [2. FT8](#ft8)

This tool allows to use and operate the popular FT8 and FT4 mode, invented by Nobel prize winner Joe Taylor, K1JT.

![](/images/docs/sdr-control-ios/tool_ft8_qso.png)

The screen above shows a typical FT8 QSO.

### [2.1. Foreword (please read)](#foreword-please-read)

I met Joe in Dayton in 2019. His speech inspired me to add this feature first to my [iOS App](https://roskosch.de/smartsdr-features/) . It took me some time to understand his way of encoding and decoding the FT8 messages and I learned a lot about FFT (fast Fourier transformation). Now, this Mac App also contains a full featured FT8/FT4 Tool.

A special thanks to [Joe Taylor](http://www.physics.princeton.edu/pulsar/K1JT/index.html) who brought us this wonderful mode.

### [2.2. Requirements / Features](#requirements-features)

So far, the App only supports FT4 and FT8. Also, no Contest or DX-Pedition mode is supported. It just supports standard QSO’s which are about 95% of all FT4 and FT8 QSOs.

The App can automatically generate answer messages based on received messages. It also supports complete **Auto Logging** without even prompting to log a QSO. **Worked before** Calls will be marked to prevent working them again.

### [2.3. How to use](#how-to-use)

My approach was to offer FT8 with minimal or no configuration and operation effort. If you are already familiar with WSJT-X, you will immediately know how to operate in FT8 with my App. If you have never worked FT8 before or found it too complicated, just read the following basics and you should be set.

My hope is, to **encourage more HAMs to join this fantastic new way to get in contact with each other** by providing a simple and easy to use FT8 tool. Even if you found FT8 too complicated in the past, just give it a try with this tool. No cable fiddling, audio interfaces, strange settings or CAT commands.

Just open this tool and start your first FT8 QSO.

### [2.4. A few FT8 Basics](#a-few-ft8-basics)

A typical FT8 QSO starts by somebody (say K1CQ) calling CQ, next somebody like you (say DC1ME) is answering. Both will then exchange their signal reports and optionally end the QSO by saying 73.

Here is how it typically looks like:

| Caller | You | Meaning |
| --- | --- | --- |
| CQ K1CQ EN61 |     | K1CQ is Calling CQ. His Grid locator is EN61 |
|     | K1CQ DC1ME JO12 | You are replying to him with your Grid locator |
| DC1ME K1CQ -11 |     | K1CQ responds to you with a signal report |
|     | K1CQ DC1ME R-10 | You, confirming his report and send your own report |

Now, there are two typical options:

_Option 1_ (the fastest and more common):

|     |     |     |
| --- | --- | --- |
| DC1ME K1CQ RR73 |     | K1CQ confirmed the reception of your report and<br><br>says best regards. The QSO is done now. No need to<br><br>respond again |

_Option 2_ (more polite option which takes longer):

|     |     |     |
| --- | --- | --- |
| CDC1ME K1CQ RRR |     | K1CQ confirmed the reception of your report |
|     | K1CQ DC1ME 73 | You say best regards |
| DC1ME K1CQ 73 |     | K1CQ send his best regards and the QSO is over |

If you would like to call CQ yourself instead, the procedure is the same. Just swap the Callsigns in the above table.

These so-called FT8 messages cannot be longer than 13 Characters. It takes 13 seconds to transfer these messages and they will be exchanged every 15 seconds. Thus, there can be 4 messages per minute. When sending at second zero or 30 it is called “even” or “first”. When sending at second 15 or 45, it is called “odd”.

Besides these aforementioned typical QSO messages, there is additional information that will be added to messages in Contests Mode or DXpedition mode. These modes are not supported by this FT8 tool.

CQ Callers may also add either DX or the desired destination to their CQ message if they just want to get an answer from certain stations.

For example:

|     |     |
| --- | --- |
| CQ DX K1CQ EN61 | K1CQ just wants to have DX QSOs |
| CQ JA K1CQ EN61 | K1CQ just want to have contact with Japan |

And that’s pretty much it. That’s all you need to know to operate in FT8 with this App.

If you want to learn more, just head to G4IFBs website which includes a fantastic FT8 Operating guide, written by Gary Hinson, ZL2IFB : [www.g4ifb.com](https://www.g4ifb.com/) which is also available in other languages.

### [2.5. Using the FT8 tool](#using-the-ft8-tool)

You can start the FT8 Tool from the Modes tab as usual.

There are two window parts, the Receive window with the blue header and the Transmit window with the red header. Both are explained more in details below.

### [2.6. Quick start](#quick-start)

If you can’t wait and have no time to read further, the following sequence will perform a quick FT8 qso:

- Select a Frequency (next of the RX Button)
- Tap on RX and wait until the list fills
- Double-tap on any of the entries of the list
- … and wait, the whole QSO will be completed automatically and ending with the logging window as shown below:

![](/images/docs/sdr-control-ios/tool_ft8_qso.png)

… if all goes well of course. But there can be situations where something goes wrong or you want to call CQ yourself. The following chapters will describe everything more in detail.

### [2.7. The Receive Window](#the-receive-window)

On the top half you will see the RX window with the blue header.

![](/images/docs/sdr-control-ios/tool_ft8_qso-top.png)

All received messages are displayed on this part of the screen. The following colors are being used:

- Green background: Somebody is calling CQ
- Gray background: You already worked that station
- Red background: your call-sign appears in that message (or you are in TX mode and message was sent on your TX frequency)

#### [2.7.1. The RX Button](#the-rx-button)

To start the FT8 mode, you will need to be connected to your Transceiver and to tap on the RX button in the upper left corner.

#### [2.7.2. The Frequency selection](#the-frequency-selection)

If you tap on the Frequency selection next to the RX button, you can select the Band or Frequency you want to operate. These Frequencies are fixed and you should only operate on these predefined frequencies.

::: info Note
The frequencies may differ depending on your location so please ensure that you set the correct IARU Region in the Preferences for the location from where you want to operate. Please also ensure that you did set your Callsign and your Grid (QTH) locator in the App Settings.
:::

::: warning Hint
If you want to operate on another, not supported Frequency, for example to work DX-Pedition stations, you can always select **Manual** to tune to any frequency.
:::

Once you hit RX, the Radio will not just tune to the right frequency. Also, all necessary parameters such as Mode, Filter width etc. will be set automatically. So should you accidentally have changed some settings, just tap the RX button twice to get the right settings back.

After at least 15 seconds, you may see the first FT8 conversations in the upper receiving part of the screen.

#### [2.7.3. Options](#options)

When opening the Options menu, you can switch between **FT8** and **FT4**

![](/images/docs/sdr-control-ios/tool_ft8_options-part.png)

Here, you can also change the RX and TX Frequency. In case TX = RX is enabled (blue) the TX and RX frequencies will always be equal. If not enabled, you can work in Split mode with different TX and RX frequencies.

::: warning Hint
Using Split mode is recommended when calling CQ because otherwise you would continue calling CQ on the frequency of the answering station if they would TX on a different frequency.
:::

The **AUTO** button enables automatic message selection based on incoming messages. To disable AUTO might make sense if the other station can’t copy your message and you intentionally want to repeat a certain message.

The **DX** field is for the Call-sign of the other station and will be pre-filled when tapping on an entry of the receiving list.

The **Rep** field is the dB report of the other station which will also be pre-filled.

#### [2.7.4. Filter](#filter)

On a busy frequency, the receive list can quickly get full and you may easily miss some interesting calls. The App provides a filter, described more in details later, to limit the number of calls in the list. Tapping the Filter Icon will open the filter settings from where you can toggle activation of the filter with immediate effect to the list below.

#### [2.7.5. Erase](#erase)

Tapping the Erase button once, will clear the TX Window (described below) and all QSO fields like DX and Report. A double-tap will also clear the RX Window.

You may want to use this Button, once you have finished a QSO for example.

#### [2.7.6. tapping on an entry of the list](#tapping-on-an-entry-of-the-list)

If you tap on an entry of the receiving list, Frequency, the odd/even setting, the Callsign and dB report will be transferred to the TX Window (see below).

If you would double-tap on the line, in addition, the TX button will be enabled so you will automatically start your transmission at the next odd or even slot.

### [2.8. The Transmit Window](#the-transmit-window)

![](/images/docs/sdr-control-ios/tool_ft8_qso-bottom.png)

The list in this window contains all your sent messages in yellow and marked with “TX” instead of a dB value.

In addition, it contains all messages that have been received on your RX frequency or messages that are containing your callsign.

This way, you can better focus on your QSO partner and will also see if somebody else is transmitting on the same frequency so you can interrupt your QSO or transmission.

#### [2.8.1. TX](#tx)

If you tap on this button, transmission will start at the next odd- or even- time slot. If active, the button has a blue background, if you are currently transmitting, the button is red, otherwise it is gray, indicating a listen only mode.

#### [2.8.2. Odd/Even](#odd-even)

FT8/FT4 messages can either be sent at an even- or odd time slot. The other station is receiving and transmitting at the opposite time slot. This button indicates your transmission time slot. You can hit the button to change from even to odd or vice verse. If you are not in CQ mode and answering somebody from the receiving list by tapping (or double tapping) on an entry from the receiving list, this button will be set automatically (to the opposite of the calling station you tapped). So normally, you will only need this button if you are calling CQ yourself and want to start calling either in the even- or odd time slot. If the frequency is free, it is common to start in the even slot but that’s up to you.

The colors for odd (green) and even (blue) are corresponding with the colors of the UTC time in the lists.

#### [2.8.3. CQ](#cq)

Using this button, you can switch between CQ mode or answering mode. A blue button indicates the activated CQ mode.

#### [2.8.4. Message selection](#message-selection)

Right from the CQ button, you can select a message which will be sent in the next odd or even slot.

If you are in AUTO mode, you usually don’t need to change this message, only if you are in manual mode or want to correct / repeat a previously wrong interpreted or received message.

::: info Note
A FT8 message can only get 15 characters long. If the message gets too long maybe because both call signs have extra characters, the QTH locator will be removed automatically.
:::

#### [2.8.5. LOG](#log)

Hitting the LOG button will open the logging window with all fields already pre-filled.

This button is not needed if you have enabled “Auto log after QSO” in the Settings of this FT8 Tool. In this case, the Log window will appear automatically at the end of a QSO.

You could even turn on “Don’t even show Log Window” and the QSO will be logged completely automated without any user intervention.

### [2.9. FT8 Settings](#ft8-settings)

![](/images/docs/sdr-control-ios/tool-ft8-settings-ex2.png)

Most of these settings are self explanatory or you can just try them and will see what they do.

When TXing either while answering somebody else’s CQ or calling CQ yourself, the Max. TX retries value defines the number of tries so that you will not end up in an endless loop.

If you would enable Auto Log after QSO and even Auto Log without Log Window, all your QSOs will be logged automated without the need for any confirmation.

### [2.10. Filter Settings](#filter-settings)

![](/images/docs/sdr-control-ios/tool-ft8-filter-ex.png)

The filter settings help to reduce the number of lines in the receiving list. The filter can be enabled or disabled at the top of this settings screen.

### [2.11. Using FT8/FT4 for DXpeditions (Fox and Hound)](#using-ft8-ft4-for-dxpeditions-fox-and-hound)

You can operate as a **hound** to work DXpeditions (the fox) with this app as follows: First, set the Band selector in the FT8 Tool to **Manual** and activate Split mode in FT8 (Options and disable TX = RX). This configuration allows you to monitor the DXpedition’s frequency, typically announced on their website, outside ::: info the standard FT8 or FT4 band range. Subsequently, transmit on the frequency where the DXpedition expects to receive your signal. Please note that if the 
:::DXpedition responds to your call with a multi-answer message, the app may not automatically log this response. In such cases, you’ll need to manually press the **LOG button** to log the QSO.

## [3. CW](#cw)

This CW Mode Tool can be used to work in CW along with a CW Decoder.

![](/images/docs/sdr-control-ios/cw-qso-ex.png)

It consists, like the FT8 tool, of a RX section in the upper part where decoded CW will be displayed and a TX section at the lower part.

Once you hit the RX button, CW decoding will start at the currently selected frequency. To optimize CW decoding, you can change decoding options using the Options button in the upper part.

Depending on the noise on the frequency you may see random characters instead of well decoded CW. You can always hit the Erase button to clear the receive section. Hitting Erase twice will also clear the TX section like for the FT8 Tool.

The CW decoder will try it’s best to identify the speed of the other station which will be displayed at the top. Identifying the speed will require receiving at least two characters so the first characters of a submission might get lost or could be wrong. You can prevent this in case you already know the speed of the other station. In this case, you can enter the expected speed as Min. and Max. WPN in the RX Options.

If you have maintained CW Macros (in the Tools section of the App), these Macros will be displayed as buttons just below the decoding section.

The CW TX options can be maintained using the Options button of the TX section.

When Live mode is turned on, everything which is being entered will be sent immediately. If Live mode is off, everything will be sent once you hit the return key.

Each submitted line will be displayed below the entry field. You can click on a line to repeat the transmission of a previously sent line.

You can always hit the Cancel key to cancel any CW submission.

The Cancel key will also hide the keyboard so you will be able again to select the tabs at the bottom to switch between the waterfall or other tools.

::: warning Hint
Instead of using the standard keyboard, you can select a special QWERTY or QWERTZ keyboard, like shown on the picture above, from the settings of the App.
:::

::: info Note
You can send pro-signs like BK by using the ^ prefix character (e.g. ^BK). This is only possible when **not** using the **Live** mode.
:::

## [4. D-Star](#d-star)

Using this tool, you can monitor all D-Star (DV Mode) messages and send your own message.

![](/images/docs/sdr-control-ios/dstar-2-part.png)

::: info Note
This tool will only work if your Radio supports D-Star mode (DV Mode) and if that mode has been selected.
:::

Under Settings you can alter your D-Start Settings for the Radio.

- - -

## [1. Setting up an IC-705](#setting-up-an-ic-705)

It is possible to use your IC-705 in **“Station mode”** or **“Access Point mode”**. Both modes are explained in the two next chapters individually.

### [1.1. Setting up an IC-705 in Station Mode](#setting-up-an-ic-705-in-station-mode)

**“Station mode”** means that your IC-705 will connect to **your local WiFi Network**. This is the preferred mode when using your IC-705 **at home** and this is also necessary for remote access over the Internet.

To setup your IC-705 in Station mode, proceed as follows:

- Use the Menu key (**Menu** > **Set** > **WLAN SET**) to check or change the following Settings:

![](/images/docs/sdr-control-ios/ic-705-wlan-1.png)

- Ensure **WLAN** is **ON** and **Connection type** is **Station**

![](/images/docs/sdr-control-ios/ic-705-connection-1.png)

- Tap on Access Point to select your own local WiFi network and enter the WiFi credentials to connect.
- Ensure **DHCP** is **ON**
- You may need to restart the Radio at this point if you made changes here. Then revisit this menu.
- Once connected you will see an IP Address under **DHCP**. Take down this IP Address.

::: info Note
This is your Radio IP Address which needs to be used for the Radio setup in the App.
:::

![](/images/docs/sdr-control-ios/ic-705-connection-2.png)

- All other settings below DHCP should be grayed out.

![](/images/docs/sdr-control-ios/ic-705-wlan-2.png)

- Use the **Back** button to go Back to **WLAN SET**
- Select **Remote Settings**

![](/images/docs/sdr-control-ios/ic-705-remote-1.png)

- Ensure **Network Control** is **ON**.
- Verify if the **Control Port** has a value of **50001**.

![](/images/docs/sdr-control-ios/ic-705-remote-2.png)

- Ensure that **Internet Access Line** is **FTTH**
- Tap on **Network User1**.
- Now enter a **Username** and a **Password** of your choice.

Setting up of your IC-705 is now complete. Now proceed with adding a new Radio to the App based on the information you have collected (The IP Address) or entered (Username and Password) here.

::: info Note
Please keep in mind that you need to restart your Radio if you have changed some settings which are marked **(Valid after Restart)**
:::

### [1.2. Setting up an IC-705 in Access Point (AP) Mode](#setting-up-an-ic-705-in-access-point-ap-mode)

The **“Access Point mode”** doesn’t require a local WiFi network because the IC-705 creates one on it’s own. You can use this mode for Field Days or whenever you are not at home. However, this mode only allows the App to Connect to your IC-705.

To setup your IC-705 in Access Point mode, proceed as follows:

- Use the Menu key (**Menu** > **Set** > **WLAN SET**) to check or change the following Settings:

![](/images/docs/sdr-control-ios/ic-705-ap-1.png)

- Changing the **Connection Type** to **Access Point**
- Tap on _Connection Settings_.

![](/images/docs/sdr-control-ios/ic-705-ap-2.png)

- You have to setup a SSID (the WiFi Name) and a Password for your WiFi connection of the IC-705

::: info Note
This is a new WiFi network, don’t enter the WiFi name and password of your current local WiFi network here.
:::

- You may need to restart the Radio at this point if you made changes here, then revisit this menu.
- Take down the IP Address.

::: info Note
This is your Radio IP Address which needs to be used for the Radio setup in the App.
:::

![](/images/docs/sdr-control-ios/ic-705-remote-1.png)

- Ensure **Network Control** is **ON**.
- Verify if the **Control Port** has a value of **50001**.

![](/images/docs/sdr-control-ios/ic-705-remote-2.png)

- Ensure that **Internet Access Line** is **FTTH**
- Tap on **Network User1**.
- Now enter a **Username** and a **Password** of your choice.

Setting up of your IC-705 in AP Mode is now complete.

::: danger Important
Now, connect your iPhone or iPad with the newly created WiFi Access Point of your Radio
:::

After you are now connected to your Radio WiFi, you can proceed with adding a new Radio to the App based on the information you have collected (The IP Address) or entered (Username and Password) here.

## [2. Setting up an IC-9700](#setting-up-an-ic-9700)

- Use the Menu key (**Menu** > **Set** > **Network**) to check or change the following Settings:
    

![](/images/docs/sdr-control-ios/ic-9700-1.png)

  

- Ensure **DHCP** is **ON** and take this IP Address down. All other settings below DHCP should be grayed out.
    

::: info Note
This is your Radio IP Address which needs to be used for the Radio setup in the App.
:::

![](/images/docs/sdr-control-ios/ic-9700-2.png)

  

- Ensure **Network Control** is **ON**.
    

![](/images/docs/sdr-control-ios/ic-9700-3.png)

  

- Verify if the **Control Port** has a value of **50001**.
    

![](/images/docs/sdr-control-ios/ic-9700-4.png)

  

- Ensure that **Internet Access Line** is **FTTH**.
- Tap on **Network User1**.
- Now enter a **Username** and a **Password** of your choice.
    

Setting up of your IC-9700 is now complete. Now proceed with adding a new Radio to the App based on the information you have collected (The IP Address) or entered (Username and Password) here.

::: info Note
Please keep in mind that you need to restart your Radio if you have changed some settings which are marked **(Valid after Restart)**
:::

## [3. Setting up an IC-7610](#setting-up-an-ic-7610)

- Use the Menu key (**Menu** > **Set** > **Network**) to check or change the following Settings:
    

![](/images/docs/sdr-control-ios/ic-7610-net-1.png)

  

- Ensure **DHCP** is **ON** and take this IP Address down. All other settings below DHCP should be grayed out.
    

All other settings below DHCP should be grayed out.

![](/images/docs/sdr-control-ios/ic-7610-net-2.png)

  

- Ensure **Network Control** is **ON**.
- Verify if the **Control Port** has a value of **50001**.
    

![](/images/docs/sdr-control-ios/ic-7610-net-3.png)

  

- Ensure that **Internet Access Line** is **FTTH**.
- Tap on **Network User1**.
- Now enter a **Username** and a **Password** of your choice.
    

Setting up of your IC-7610 is now complete. Now proceed with adding a new Radio to the App based on the information you have collected (The IP Address) or entered (Username and Password) here.

::: info Note
Please keep in mind that you need to restart your Radio if you have changed some settings which are marked **(Valid after Restart)**
:::

## [4. Setting up an IC-R8600](#setting-up-an-ic-r8600)

- Use the Menu key (**Menu** > **Set** > **Network**) to check or change the following Settings:
    

![](/images/docs/sdr-control-ios/ic-r8600-1.png)

  

- Ensure **DHCP** is **ON** and take this IP Address down. All other settings below DHCP should be grayed out.
    

::: info Note
This is your Radio IP Address which needs to be used for the Radio setup in the App.
:::

![](/images/docs/sdr-control-ios/ic-r8600-2.png)

  

- Ensure **Network Control** is **ON**.
    

![](/images/docs/sdr-control-ios/ic-r8600-3.png)

  

- Verify if the **Control Port** has a value of **50001**.
    

![](/images/docs/sdr-control-ios/ic-r8600-4.png)

  

- Ensure that **Internet Access Line** is **FTTH**.
- Tap on **Network User1**.
- Now enter a **Username** and a **Password** of your choice.
    

Setting up of your IC-R8600 is now complete. Now proceed with adding a new Radio to the App based on the information you have collected (The IP Address) or entered (Username and Password) here.

::: info Note
Please keep in mind that you need to restart your Radio if you have changed some settings which are marked **(Valid after Restart)**
:::

## [5. Network considerations](#network-considerations)

Because this App relies on the IP Address of the Radio for connecting to it, it is important to know that **IP Addresses may change**.

One possibility for a non-changing IP Address would be to manually assign an IP Address to the Radio and not using DHCP.

However, this is not recommended as you may experience problems if you don’t carefully chose the IP Address that don’t conflict with other Addresses on your network.

A better solution is to keep the **DHCP (the default)** setting of your Radio but instruct your Router instead, to always keep the same IP Address for this device. Unfortunately, there are different terms used for this feature in different Routers. It may be called static-lease or even static-IP so you may want to look into your Router’s manual to find this feature.

Another consideration is to use a secure password. This is especially important if you enable Remote Access as described in the next chapter.

## [6. Remote access](#remote-access)

With this App, it is possible to connect to your Icom Transceiver from outside your home network. For this, you need to let three ports pass your Router to the internet or in other words you need to open three ports in your Router.

Unfortunately, this task will be different from Router to Router so it can only be explained in general here.

The ports in question are the three ports found in your Radio settings under “Control Port (UDP)”, which usually is 50001, “Serial Port (UDP)”, which usually is 50002 and “Audio Port (UDP)” which usually is 50003.

Now you need to access your Router’s configuration website and look for a possibility to open ports in your Router.

Here, you need to open these three ports (50001,50002,50003) to the IP Address of your Icom Transceiver. If your Router want’s to know for which Protocol these ports should be opened, it it only necessary to open these ports for the UDP Protocol. If your Router want’s to know which ports should be used for the inside and which for the outside, you can use the same ports (50001,50002,50003) for the inside and outside. Sometimes you can enter a complete port range like 50001-50003. In some Router you have to open each port individually.

Once this is done, you will already be able to connect your Transceiver from elsewhere but you need to know the IP Address that now needs to be entered when you add your Radio to the App’s Radio chooser.

The IP Address you need is the public IP Address for your network allocated by your Internet Service Provider. You can find out this IP Address in your Router or by visiting one of the whatismyip websites.

However, most likely, this IP Address will change from one day to another. To address this problem, you can use services like [https://dyn.com](https://dyn.com/) but most likely, your Router also supports additional services. Any of those services will provide you with a unique way to access your Public IP Address which always remains the same. Such an address may look like xxxxx.dyndns.org. Once you have setup everything, you can enter this unique address for setting up your remote Transceiver instead of the IP-Address.

For your convenience, just add another Radio to the “Available Radio” list by using the Add button again. Use a name that differentiates the new entry from your regular local access Radio (e.g. 705 remote), use the aforementioned IP Address and for the other values the same as for your local Radio.

### [6.1. Testing remote access](#testing-remote-access)

For testing, first try to connect to the newly added Radio by still using the home WiFi network. Even though it makes no sense as you could also connect to your Radio directly, it makes sense for testing if Port forwarding and the public IP or dyndns address are both working well. Once you have checked that this is working, try to connect using another network like Cellular or another WiFi.

::: danger Important
If you are using an iPhone as Hotspot, you will have to **disable “Low Data Mode”, “Private Wi-Fi Address” and “Limit IP Address Tracking”** in your Device WiFi settings. This is important, otherwise it will not work.
:::

## [7. Macro Variables](#macro-variables)

You can use variables like {CALL} in CW Macros.

These variables will be replaced by values from your settings or log before being sent.

The following Macro Variables are available:

|     |     |
| --- | --- |
| {CALL} | Will be replaced by the Call-sign currently entered in the Log Window |
| {CALLSPELL} | Will be replaced by the Call-sign currently entered in the Log Window spelled letter by letter |
| {SENTRST} | Will be replaced by the RST Sent value of the Log Window |
| {RECRST} | Will be replaced by the RST Received value of the Log Window |
| {NR} | Will be replaced with the Contest Serial number, maintained in the Settings of the Logbook |
| {COMMENT} | Will be replaced by the Comment value of the Log Window |
| {MYCALL} | Will be replaced by your own Call-sign, maintained in the App Settings |
| {TXFREQ} | Will be replaced by current TX Frequency |
| {RXFREQ} | Will be replaced by current RX Frequency |
| {FREQ} | Same as {RXFREQ} |
| {TXBAND} | Will be replaced by current TX Band |
| {RXBAND} | Will be replaced by current RX Band |
| {DATE} | Will be replaced by the Date entered in the Log Window |
| {TIME} | Will be replaced by the current Time entered in the Log Window |
| {ENTER} | Will send a new-line character |
| \\n | Same as {ENTER} |
| {NOW} | Will be replaced by the current time in UTC |
| {GRID} | Will be replaced by your Grid locator, maintained in the App Settings |
| {LOG} | Will cause the current QSO to be logged |

- - -

## [Common Issues](#common-issues)

### [The Contact Developer button is not working](#the-contact-developer-button-is-not-working)

To request support, it is recommended to use the app’s built-in **Contact Developer** feature which can be found under the Settings tab. This automatically provides essential information needed to assist you and creates a support ticket. If the **Contact Developer** button is not functioning, it’s likely that you do not have an email account set up correctly on your device, which is crucial for utilizing this feature — and indeed, for the overall functionality of your device.

To resolve this, please follow these steps:

- Open the **iOS Settings** app (gear Icon) on your device.
- Navigate to and select **Mail**.
- Scroll to find the **Default Account** option.
- Tap on **Default Account** and make sure you have an email account selected.

Additionally, verify that your email is operational on your device. Once you have confirmed these settings, the **Contact Developer** feature should be usable.

### [App doesn’t connect to the Radio](#app-doesnt-connect-to-the-radio)

If you did follow the instructions on how to setup your Transceiver for the App but the App still can’t connect, this can have various reasons.

The most common reason is, that there was a typo in the settings or the instructions were not followed exactly.

Before you start setting up remote access (which means to connect to your Radio from the internet), you should first ensure that a local connection is working reliable. So in this case, have a local setup first and use the Network Stats tool to see if the error rate is below 0.05%. Once that’s the case, start setting up a remote connection as described under Remote Access. That chapter also explains how to test your Remote access connection.

If you can’t connect, you may see an error message. If the error messages states “error 0”, this means your Radio can not be connected at all. So you might have entered a wrong IP Address or the Radio is not connected to your network. An “error 1” usually means you have entered invalid values for the connection (e.g. a letter or space for the port or invalid address)

Below are a few possible causes of connection issues:

### [Disallowed local network access](#disallowed-local-network-access)

One reason could be that you accidentally confirmed the message after a first start of the App to give the App network access with “no”. This can be checked and fixed as follows:

- Open the **iOS Settings** app (gear Icon) on your device.
- Select Privacy
- Select Local Network on the right side
- Search for the App and see if the switch on the right side is on. If it is off, turn it on an try again

### [Device and Radio on different networks](#device-and-radio-on-different-networks)

Another possibility is, that your iPad/iPhone and your Transceiver are not on the same network. To prove that, compare the IP Address of your Transceiver (you did already collect in the Transceiver setup steps) and the IP Address of your iPad/iPhone. You can find this out by opening the Network Stats Tool (Tools → Network Stats). An IP Address consists of four numbers, separated by a . (dot). The Transceiver IP Address and the Mac IP Addresses must both start with the same three numbers. The last number will be different.

So for instance: 192.168.1.4 and 192.168.1.201 would be fine whereas if you have 192.168.1.4 and 192.168.0.10 it would be wrong.

Possible causes are:

- Using an old firmware version. Please update your Transceiver always to the latest firmware.
- Using a Mesh solution where DHCP is not working correct
- Using a so called “guest” WiFi for the Mac and a regular network connection for the Transceiver
- Wrong router or iPad/iPhone settings
- Cable issues or something else that prevents the Radio from connecting to your network
    

### [Wrong CI-V address of the Radio](#wrong-ci-v-address-of-the-radio)

Besides the settings mentioned in this manual, the Radio has many additional settings that may prevent the App from connecting. One example is the CI-V address. When this was changed, the App can’t connect. You can revert individual settings back to their default values of your Radio (Menu → Set → Connectors → CI-V → CI-V Address, long-pressing on a CI-V Address and select Default).

### [Issues with the Radio](#issues-with-the-radio)

In case your Radio has issues, you can try to perform a Partial or Full Reset. A Partial reset can be the first choice as this will not wipe your Settings.

### [Too old Radio firmware](#too-old-radio-firmware)

The App is always tested with the latest firmware released by Icom. In case of problems, just double-check if your Radio is running the latest firmware.

### [Wrong connection of your local network](#wrong-connection-of-your-local-network)

For a local connection, you need to have your iPad/iPhone connected to your Local network via WiFi. Your Radio need to be connected to your local network in the same way (WiFi for the IC-705 or LAN Cable for the other Radios). Only if you want to use your IC-705 without Internet, you need to have a direct connection between your iPad/iPhone and your Radio (In this case, the IC-705 needs to be setup in AP mode and the iPad/iPhone needs to connect to the AP of the Radio). In all other cases, both iPad/iPhone and Radio need to connect to your local network and not to each other.

### [DHCP not working when using a Mesh](#dhcp-not-working-when-using-a-mesh)

A Mesh network is usually no good idea as it may cause all kind of network issues or delays. Wherever possible use a LAN (cabled) connection or at least a fast direct WiFi connection. Especially on wrong configured Mesh networks you may end up with issues using DHCP because sometimes the DHCP server (usually your Router) can not be reached or even worse you may have two DHCP servers on one network which will not work.

### [Wifi issues](#wifi-issues)

Wherever you have to use Wifi (e.g. for the IC-705 or the iPad or iPhone itself) you may experience issues. However, you can always see if issues exist or your measurements to solve the issues were successful by using the Network Stats tool and having a look to the error rate which should be below 0.05%.

If you only have a high error rate when TXing, maybe you “just” have RFi. To prove that, just lower your TX power to 1% and see if that improves the situation

You may also want to look into your WiFi router settings for settings that may improve the reliability. Some routers allow to automatically chose a good WiFi channel. Even though that sounds good, it is not good for reliability if the Router decides to jump to another channel while working with the Radio. So it’s better to see which channel is free and assign that channel manually. But you may need to re-visit that setting from time to time at least once you have problems again.

Another typical issue with WiFi is roaming which not always works well. Sometimes a device might be still connected with the wrong Access point if you are using more than one.

The situation on 5Ghz and 2.4GHz WiFi might also be different. In general, none is better than the other. Both have advantages and disadvantages so it might make sens to disable one or the other to see which one is better for you.

### [Nothing happens when tapping on Connect](#nothing-happens-when-tapping-on-connect)

This could happen if you have enabled the “Auto connect” setting for a certain Radio enabled but that Radio is no longer available under the same IP Address. If the “Auto connect” setting is enabled, the “Available Radio” list will be skipped (which is the purpose of the Auto connect function). To get the “Available Radio” list back, just open the Settings tap and tap on the “Available Radio” button. Now, you can either double-check the settings for the Radio and / or unset the “Auto connect” setting for the Radio.

### [App disconnects or quits – Issues with IC-705](#app-disconnects-or-quits-issues-with-ic-705)

Even though this should not happen, it can happen if the network connection is not good. Please read the next point for a solution.

### [Stuttering Audio or poor Radio responsiveness](#stuttering-audio-or-poor-radio-responsiveness)

As all data to and from the Transceiver will be transferred over the network, it is essential that your network is healthy. While this is easy to achieve with a LAN connection, it may be tricky for the WiFi connection of an IC-705.

To see, if there are any connection issues, use the Network Stats Tool. It should not show an error percentage higher than 0.05 %.

If there is a higher error percentage only for the TX Packets, maybe you have EMC / RFI issues. Try to lower your power and see if this helps.

If you have a higher error rate for an IC-705, most likely you need to move your Icom closer to your WiFi access point or other other way round.

If you are experiencing just temporary audio drops, you can increase the output buffer size in the top (gear Icon) Audio menu.

Another common cause for WiFi issues is bluetooth. Try (at least temporary) to turn off bluetooth on your device to see if that makes a difference.

### [Connection error](#connection-error)

If the App would quit unexpectedly or forced-quit, it had no chance to tell the Transceiver that the connection should be closed. The Icom Transceivers may take some time until they got aware of a cut connection. In such a case it may happen that you see an error message when trying to re-connect.

In that case, just wait and try again a bit later. If it still doesn’t work, try to power-cycle your Icom.

In some cases, even if it looks as you did wait long enough and you see the Waterfall, it might have been too early and it can happen that certain data can not be received from the Transceiver. Sometimes, for instance, the Frequency is missing. In that case, disconnect again using the Disconnect button and re-connect.

### [No TX signal / audio in SSB – which microphone do I have to select?](#no-tx-signal-audio-in-ssb-which-microphone-do-i-have-to-select)

To use your device or a connected Headset, you need to select iPad (or iPhone) as microphone source. For this, long-tap the Mic button (which is the button below Tune). Next, select iPad (or iPhone). (Only if you want to use a microphone which is directly connected to your Transceiver, select something different here).

In the audio settings (gear Icon at the top) ensure that the Mic threshold slider is moved to the far left.

If you like to use a Headset, connect your Headset (e.g. pair it via Bluetooth) and open the Audio settings (gear Icon) and tap on the Icon right of “Audio device:”. Now, select your headset.

Next, the Mic button needs to be enabled. Just tap on the button once to enable or disable it.

You should now see the level meter indicating microphone audio while speaking. If that’s not the case, try to increase the Mic. level slider.

Double check if Data is not enabled for the mode you like to operate. You can double check if Data is enabled by looking at the mode button. If it shows -D after the mode name (e.g. USB-D), Data is enabled. To disable the data mode, just tap once on the mode button and de-select DATA.

Now you should be able to TX in phone mode (SSB,AM,FM).

If you would enable “Show TX” for the Waterfall (long-tapping the Center button, selecting Settings… and enabling Show TX) you should see your own TX signal in the waterfall. If you like, you can now adjust the Mic Threshold slider in the Audio (gear) settings so that ambient sound does not cause RF submission. For this, just slide the threshold slider slowly to the right (while being quiet) until RF emission stops.

To use VOX along with the device, first tap once on the VOX button to enable it then long-tap on the VOX button to adjust Level and Delay according your needs. After using the App, I can no longer use the Radio

There are only a few settings that are changed when the App connects to your Radio in order to let the App use the Radio. One of these settings is the Microphone selection. When using the iPad (or iPhone) as Microphone source (by tapping long on the Mic button and select iPad or iPhone) you will have to change that back before disconnecting if you want to continue to use the locally connected Microphone.

However, under the Radio settings (the tab left from the Settings tab) you can instruct the App to revert such settings back to the desired values upon disconnection. Here, you can decide if the App should select back your locally connected Mic (or USB).

### [Too high (or low) audio gain / ALC](#too-high-or-low-audio-gain-alc)

You may experience a too high or too low audio gain, especially when working in FT8. This gain depends on your particular Transceiver and might be adjusted for best performance. You could either adjust this so called “LAN Mod Level” using the Set Menu on your Radio or more conveniently from inside the App by using the Radio Settings tab. Before adjusting the LAN input gain slider, you can turn on the ALC meter by long-tapping on the Power meter and select ALC. While transmitting (e.g. by calling CQ in the FT8 tool) you can adjust the slider so that it is right before the ALC value doesn’t increase anymore.

### [After using the App, I can no longer use the Radio, Microphone is not working anymore](#after-using-the-app-i-can-no-longer-use-the-radio-microphone-is-not-working-anymore)

There are only a few settings that are changed when the App connects to your Radio in order to let the App use the Radio. One of these settings is the Microphone selection. When using the iPad (or iPhone) as Microphone source you will have to change that back before disconnecting if you want to continue to use the locally connected Microphone.

However, under the Radio settings (the IC-xxxx tab at the bottom) you can instruct the App to revert such settings back to the desired values upon disconnection. Here, you can decide if the App should select back your locally connected Mic.
