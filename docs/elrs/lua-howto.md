---
original: https://www.expresslrs.org/quick-start/transmitters/lua-howto/
title: Lua 脚本使用指南
description: ExpressLRS Lua 脚本简明使用指南，快速了解不同选项的功能与用法。
tag:
    - R/C Link System
    - ExpressLRS
    - Lua
---

![Setup-Banner](https://github.com/ExpressLRS/ExpressLRS-Hardware/raw/master/img/quick-start.png)

## 安装 Lua Script

下载 [ELRSv3 Lua 脚本](https://github.com/ExpressLRS/ExpressLRS/blob/3.x.x-maintenance/src/lua/elrsV3.lua?raw=true) （ 你可以直接点击右键选择另存为 ），将下载好的脚本文件拷贝到你遥控器 SD 卡的 `Scripts/Tools` 目录下。然后装回 SD 卡，按下 `SYS` 按钮（ 对于类似 T16 的遥控器 ）或长按 `Menu` 按钮（ 对于类似 X9D 的遥控器）打开 Tools 菜单，如果一切顺利的话，你将会看到 ExpressLRS/elrsV3 脚本已经准备好了，点击即可运行。

以 X9D 和 T16 为例，Tools 菜单看起来应该是下面样子：

![Lua Script](/assets/images/elrs/lua1.jpg)

![Lua Script T16](/assets/images/elrs/lua2.jpg)

## 检查你的高频头是否已连接

Enter the Lua script by selecting "ExpressLRS" in the Tools menu and pressing ENTER.

If the parameter list does not populate after a few seconds, and it's stuck at `Loading...`, first verify the ExpressLRS module has power by checking its LED. If there is no LED lit up, it is possible the Protocol set for the External Module is incorrect (should be set to CRSF) or that the module is not properly connected to the pins of the JR bay of the radio. Another possible reason is that you haven't updated the firmware of the module to version 2.x.

If parameters do show up, but the Bad/Good section on the right side of the header is showing an unstable value, have a look at your model settings and make sure the Internal RF module is set to Off. If the Bad/Good indicates something other than `0/<your selected packet rate>` this means `CRSFshot` is not working-- verify that you properly followed the Radio Preparation Guide.

![Lua3](/assets/images/elrs/lua3.jpg)

![Lua Script Config BW](/assets/images/elrs/lua/config-bw.png)

The `master 942c40` from the photo above is the git branch and commit hash of the firmware version that the module has. You can reference this hash from [Releases](https://github.com/ExpressLRS/ExpressLRS/releases). In the first photo above, `master` means the module is flashed with the `Master Branch` with the git commit `942c40`. If you're on a Released version or a Release Candidate, this will read something like `3.0` or `3.0-RC1` plus the commit hash of the release.

!!! note "Note"
    Colors may differ from Handset to Handset, depending on the current theme in use.

## 了解和使用 Lua 脚本

Now, we can explore the complexities of the Lua script, and how to interpret each of its many sections. ExpressLRS supports multiple configuration profiles, and the configuration profile is selected by setting the "Receiver" property in handset Model Setup -> External Module -> Receiver (number).

![Model CFG](/assets/images/elrs/modelcfg.jpg)

!!! warning "WARNING"
	Do not change parameters while ARMED. When a parameter is changed, the module goes into Parameter Commit mode, interrupting the normal loop. This could result in a desync on some hardware combination which would result in a FAILSAFE.

### 顶部状态栏

The first line, "Header", will show you some information about your ExpressLRS link. 

The first part will show you the current ExpressLRS TX Module ID, followed by the current status of the link.

The `0/nnn` is your Packet Counter. The second set of numbers should match your currently selected Packet Rate. e.g. If you've set your Packet Rate to 500Hz, the Packet Counter should show 0/500, which means you're not getting any Bad Packets ( 0 Bad Packets ) and only getting Good Packets ( 500 Good Packets ). Any small fluctuation is normal and often goes back to 100% Good Packets, especially when you change a setting and it's committed into memory. 

Should the indicator starts showing Bad Packets, and Good Packets goes down, it isn't a good situation. Make sure your module is not overheating and it's still getting a good connection with the radio. This is most dangerous when you're armed and flying several kilometers/miles out, as this could mean a sudden Failsafe.

The `Connection Status` indicator shows your current RC link status. When not connected to any receiver, it will show a dash (`-`); while a `C` shows up when bound and connected.

The `Model Mismatched` message will also show up to indicate you are connected to a receiver, but the model selected on your radio is incorrect. See the Model Match page for more info about Model Matching.

### Folder Titles

Items with `>` before the name is a folder that when selected shows another level of customization. `TX Power`, `VTX Administrator`, `Wifi Connectivity` are examples of these items.

:new: These items will now show what is currently set for the items within. An example would be on `TX Power`, which will show the current Power set, and if Dynamic Power is enabled, it will show the current set Max Power, followed by the indicator `Dyn`.

### 包速率（ Packet Rate ）

Lua 脚本中的 `包速率` 用于设置数据包的发送频率，更高的发射频率会带来更低的延迟，反之更低的发射频率会带来更远的遥控距离。

下面这些选项适用于 `2.4GHz`：

- `50Hz, 150Hz, 250Hz & 500Hz`: 基于 LoRa 模式，更高意味着牺牲灵敏度以获取更低的延迟。
- `100Hz Full & 333Hz Full` :new: : 基于 LoRa 模式，通道支持 10-bit 全分辨率，开关模式可选 8ch/12ch/16ch。 [详情](https://github.com/ExpressLRS/ExpressLRS/pull/1572)
- `F500 & F1000` :new: : Pure FLRC for lowest latency, reduced range compared to LoRa, 500Hz and 1000Hz. [详情](https://github.com/ExpressLRS/ExpressLRS/pull/1277)
- `D250 & D500` :new: : Redundant transmit FLRC modes.  `D` stands for `Déjà Vu`, 250Hz and 500Hz. Higher latency, reduced packet jitter and higher LQ. Same range as other FLRC modes. [详情](https://github.com/ExpressLRS/ExpressLRS/pull/1527)

下面这些选项适用于 `900MHz`：

- `25Hz, 50Hz, 100Hz & 200Hz`: LoRa-based options. Higher means lower latency at the expense of sensitivity. Since v1.0.
- `100Hz Full` :new: : Lora-based 10-bit Full Resolution with 8ch/12ch/16 Switch Mode options. [详情](https://github.com/ExpressLRS/ExpressLRS/pull/1572)

The number following the rate in parentheses (e.g. -105dBm for 500Hz) is the Sensitivity Limit for the rate, the lowest RSSI where packets will still be received. See Signal Health for more information about the sensitivity limit.

::: warning 警告
永远不要在飞行过程中修改包速率，这会导致高频头与接收机之间强制断开连接。
:::

### 遥测速率（ Packet Rate ）

* `Telem Ratio` sets the telemetry ratio or how much of the packet rate is used to send telemetry. The options, in order of increasing telemetry rate, are: `Off, 1:128, 1:64, 1:32, 1:16, 1:8, 1:4, 1:2`. A Telem Ratio of 1:64 means one out of every 64 packets are used for telemetry data.
	- :new: v3.0 comes with `Std` and `Race` options. `Std` changes ratio depending on the Packet Rate, and `Race` is the same as Std, but will disable telemetry and sync while Armed.

	For information on telemetry setup, see First Flight: Telemetry and Telemetry Bandwidth.

### Switch Mode

The Switch Mode setting controls how channels AUX1-AUX8 are sent to the receiver (the 4 main channels are always 10-bit). The options are `Hybrid & Wide`. **Hybrid** mode is 6x 2, 3 or 6-position + 1x 16-position, and **Wide** is 7x 64 or 128-position. For detail about the differences, see the Switch Configs documentation.

:new: In full resolution modes, the Switch Mode parameter selects the number of channels to be used. Full Resolution Switch Modes

!!! hint "Hot Tip"
	The Switch Mode can only be changed when not connected to a receiver. The top right corner of the Lua script will show a `-` if you're not connected.

### Model Match

Model Match is used to prevent accidentally selecting the wrong model in the handset and flying with an unexpected handset or ELRS configuration. Setting this to `On` while a receiver is connected will make that receiver only connect with the current Receiver ID. Setting it to `Off` will allow a connection with any bound receiver (including those using a Bind Phrase). Both sides of the connection must agree on their Model Match setting. For a detailed explanation of how this restricts connections see Model Match. The current Receiver ID is shown after the option value.

### TX Power

![Power Settings](/assets/images/elrs/lua/pwrrm.png)

![Power Settings BW](/assets/images/elrs/lua/power-bw.png)

TX Power is a folder, press ENTER to enter the TX Power settings and use RTN/EXIT to exit the folder.

* `Max Power` sets the maximum power level your TX will transmit at. Selecting a power level higher or lower than your TX supports will revert to the closest supported level. The options are `10, 25, 50, 100, 250, 500, 1000 & 2000` mW. If Dynamic Power is set to `Off` this is the power level your TX always uses. 

* `Dynamic` enables the Dynamic Power feature. `Off` means that the TX will transmit at Max Power at all times. `Dyn` means the TX will dynamically _lower_ power to save energy when maximum power is not needed. The options `AUX9, AUX10, AUX11, AUX12` indicate that the TX can be changed from max power to dynamic power by changing the position of a switch. where switch HIGH (>1500us) = dynamic power, switch LOW (<1500us) = max power. For more information, Dynamic Transmit Power provides a deeper dive into the algorithm and usage.

* `Fan Thresh` sets the power level the Fan should activate, e.g. if set to 100mW, then the fan should spin up if you set `Max Power` to 100mW with `Dynamic` set to OFF after a short delay. The fan will continue running for some time even after the power level goes below the threshold. Not all modules have a Fan header that benefits from the setting. . Default fan threshold is 250mW.

### VTX Administrator

![VTX Settings](/assets/images/elrs/lua/vtxrm.png)

![VTX Settings BW](/assets/images/elrs/lua/vtx-bw.png)

VTX Administrator allows you to change your VTX settings directly from your radio, and have those VTX settings be applied to any receiver you connect to. The VTX settings are sent every time a new connection is acquired, or when `[Send VTX]` is pressed. **VTX Administrator will only send data when disarmed**

* `Band` sets the VTX band, the options are `Off, A, B, E, F, R & L`, the standard analog FPV bands. `Off` means that VTX Administrator will not adjust any VTX settings.

* `Channel` sets the VTX channel, the options are `1, 2, 3, 4, 5, 6, 7 & 8` which are the standard channels in the above bands.

* `Pwr Lvl` sets the VTX power by index, the options are `-, 1, 2, 3, 4, 5, 6, 7, & 8` which are the power levels that your VTX can do. Refer to your VTX table settings on the flight controller for the exact power levels. For example a VTX may have 1 = 25mW, 2 = 100mwW, 3 = 200mW, 4 = 500mW.

* `Pitmode` the options are `On & Off` which allow you to quickly switch into or out of pitmode

* Finally pressing the `[Send VTX]` button sends the configured settings to the receiver and on to the VTX. These settings are also sent every time a connection is established.

### WiFi Connectivity

![WiFi Connectivity Settings](/assets/images/elrs/lua/wifirm.png)

![WiFi Connectivity Settings BW](/assets/images/elrs/lua/wifi-bw.png)

This section contains all the WiFi-related functions.

* `Enable WiFi` will activate the Tx module WiFi mode for updating via WiFi (if the Tx Module has WiFi Capabilities). Visit this page for instructions on how the updating process works.

* `Enable Rx WiFi` will put the bound and connected receiver into WiFi mode to facilitate updating via WiFi (if the receiver has WiFi capabilities).

* `Enable Backpack WiFi` will put the Tx Backpack into WiFi mode (available only to TX modules with backpacks connected and updated to the new [Backpack](https://github.com/ExpressLRS/Backpack) firmwares).

* `Enable VRx WiFi` will put the VRx [Backpack](https://github.com/ExpressLRS/Backpack) that is bound and connected to the onboard TX Backpack into WiFi mode to facilitate updating via WiFi.

### Bind

![Binding](/assets/images/elrs/lua/bindrm.jpg)

![Binding BW](/assets/images/elrs/lua/bind-bw.png)

Pressing the `[Bind]` button activates the binding mode for traditional binding. This does nothing for users who have configured a bind phrase and is not needed. For more information check out this page on binding.

### BLE Joystick (ESP32 TXes Only)

![BLE Joystick](/assets/images/elrs/lua/blerm.jpg)

![BLE Joystick BW](/assets/images/elrs/lua/blejoystick-bw.png)

Pressing the `[BLE Joystick]` selection activates BluetoothLE Joystick mode which allows connection to simulators through the bluetooth of your computer. Reboot or change models to exit this mode.

### 其他设备

The Other Devices folder, if present, allows changing the configuration of other connected devices, such as the current receiver. Options can include Telemetry Power, Diversity Mode, and the Loan Model features.

## 建议

* For racing where maximum performance is a must, the `500Hz` modes or faster, with the `Race` Telemetry mode, is ideal. `Hybrid` Switch Mode is also good here.

* For freestyle and general everyday flying, you may use the `250Hz` modes or faster, with the `Std` Telemetry mode. Switch Mode doesn't matter as much here. Select what's appropriate for your Flight Mode settings.

* For fixed wings, we recommend using `100Hz Full Res`, together with either `Std` or your choice of Telemetry Ratio. Switch Mode will depend greatly on how many full resolution channels you intend to use.

## Lua 脚本常见问题解决办法

::: details ExpressLRS Lua Script is stuck at `Loading...`
Go back to the Radio Setup Guide and make sure your radio is prepped up for ExpressLRS.

Also, make sure your module has been flashed with v3.0 firmware. V3 Lua for V3.0-flashed modules, V2 Lua for v2.x-flashed modules (including some modules fresh from the factory).

For newly-acquired ExpressLRS modules, flashing via USB is the recommended update method.
:::

::: details I cannot change the Switch Mode!
Changing switch modes requires that the TX module and Receiver aren't connected to each other (no C in the top right corner of the Lua Script). Power off the receiver first, change the Switch Mode from the Lua script, then power up the receiver. The Switch Mode should then apply.
:::

::: details I cannot change my Packet Rate to F1000!
F1000 requires higher than 400K baud rates. First update your baud rate setting either in the Model Setup menu or in the System Menu -> Hardware, reboot your radio to ensure that the baud rate setting got applied and then change the Packet Rate.

Do note that not every handset is capable of higher than 400K baud rates. See the Radio Setup Guide for the details.
:::

::: details I cannot change to Full Resolution Rates!
As Full Resolution Rates call for an entirely different Switch Modes, you need to first disconnect the Receiver and the TX module from each other, like how you would change Switch Modes. Power down the receiver, change the Packet Rate to the Full Resolution modes, select your Switch Mode scheme and then power up the receiver or the aircraft.
:::

::: details VTX Admin is not working but I can change VTX channels via OSD Menu.
As VTX Admin depends on MSP which then depends on Telemetry, ensure that you have Telemetry enabled on your FC Configuration and that you are getting more than 10 Telemetry Sensors on your Radio (Model Setup -> Telemetry page; Delete and Discover New sensors to refresh the sensor list.)

Also, make sure Telem Ratio is not Off.
:::

::: details There is no C on the top right corner, and I'm not getting Telemetry in my radio!
Make sure Telem Ratio is not set to `Off`.

Set it to `Std`, or any other value other than `Off`.
:::

::: details On v1.x, I can choose 2W on the Lua, but I cannot do that anymore. What gives?
This means your module cannot go that high or that low. The power levels you can select on the new Lua script are based on the power levels your module supports.

This also applies to other options like `Enable Backpack WiFi` or `BLE Joystick`. If your module doesn't support any of these features, it won't show up on the Lua Script.
:::

##

::: info 原文链接
[Using The Lua Script](https://www.expresslrs.org/quick-start/transmitters/lua-howto/)
:::
