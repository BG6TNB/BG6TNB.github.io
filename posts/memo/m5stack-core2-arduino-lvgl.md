---
date: 2023/10/04
title: 如何在 M5Stack Core2 上面运行 LVGL ?
description: 本文主要是记录如何在 M5Core2 上面通过 Arduino 框架运行 LVGL 的流程，以帮助其他人
tag:
    - M5Stack
    - M5Core2
    - ESP32
    - Arduino
    - AXP192
    - TFT_eSPI
    - FT6336U
    - LVGL
---

# {{ $frontmatter.title }}

M5Core2 与 M5Core 与其说是迭代关系不如说更像是两条不同的路线选择，虽然看起来 M5Core2 只是 M5Core 的升级版本，但他们具体的硬件架构和引脚连接方式都有较大的差别，这也就导致 M5Core2 其实并不能直接使用针对 M5Core 开发的项目，必须经过手工移植才能尽可能的兼容。

::: info 碎碎念
之所以说是「尽可能兼容」这完全取决于需要移植的项目在撰写初期的架构设计，有些项目在设计初期压根没考虑过可移植性的问题，当然这也不怪他们，毕竟也没人想到这东西还能出到二代、三代。
:::

说回正题，LVGL 是嵌入式开发中非常优秀的图形库（ 或者说是抽象层，这非常类似于 web 的 DOM 开发和 Vue 的关系 ），可以极大的降低 GUI 的开发成本。

而 LVGL 不可能去适配市面上所有的显示屏和输入装置（ 触摸屏 ），所以 LVGL 采用了一个聪明的办法，及让出了显示驱动和触摸屏驱动，只要我们能搞定驱动，那么就能驱动 LVGL。

M5Core2 的屏幕驱动 IC 是 ILI9342C，这是 ILI9341 的一个变种型号，除了默认的显示方向不同之外，其他完全兼容，这里我选择的是 TFT_eSPI 作为驱动 lib。

触摸屏方面 M5Core2 采用的 IC 是 FT6336U，我找到了一个名为 Arduino-FT6336U 的 lib 支持该芯片。

本文以 Arduino 框架为例，但其实这个操作流程同样也适用于 ESP-IDF 等其他的 SDK。

开发环境方面本文使用的是 VS Code + PlatformIO IDE，事实上使用 Arduino IDE 也是可以的，但是考虑到项目隔离和易用性方面的问题，我这里还是使用的 VS Code + PlatformIO IDE 的方案来演示。

::: tip 2023/10/08 更新
本文主要是记录配置一个项目的流程，如果你只是需要一个模版工程而不关心具体流程的话，那么我这里分别提供 TFT_eSPI 和 LVGL 的模版工程，你可以直接在此基础上进行二次开发。
1. [M5Core2 TFT_eSPI Template](https://github.com/BG6TNB/M5Core2-TFT_eSPI-Template)
2. [M5Core2 LVGL Template](https://github.com/BG6TNB/M5Core2-LVGL-Template)
:::

## 使用 PlatformIO IDE 创建项目

网上资料很多了，所以这一步就略过。

## AXP192

M5Core2 的硬件架构和接线方式相比 M5Core 有很大的变化，特别是电源部分的设计，详细的接线方式参阅下方表格：

| ESP32    | GPIO32 | GPIO23 | GPIO18 | GPIO5 | GPIO15 |         |         |          |
| -------- | ------ | ------ | ------ | ----- | ------ | ------- | ------- | -------- |
| AXP192   |        |        |        |       |        | AXP_IO4 | AXP_DC3 | AXP_LDO2 |
| ILI9342C | MISO   | MOSI   | SCK    | CS    | DC     | RST     | BL      | PWR      |

| ESP32   | GPIO21 | GPIO22 | GPIO39 |         |
| ------- | ------ | ------ | ------ | ------- |
| AXP192  |        |        |        | AXP_IO4 |
| FT6336U | SDA    | SCL    | INT    | RST     |

由上可知，屏幕和触摸屏都依赖 AXP192 的控制，所以我们需要先引入 AXP192 的 lib，我这里是移植的 M5Stack 官方 lib 的相关部分。

从 GitHub 下载 [M5Core2](https://github.com/m5stack/M5Core2) 最新的 [Release](https://github.com/m5stack/M5Core2/releases) 版本，本文撰写时最新的版本是 [0.1.7](https://github.com/m5stack/M5Core2/releases/tag/0.1.7)。

首先在 PlatformIO 项目目录下的 ``lib`` 目录下新建文件夹 ``AXP192``，然后将下载好的 zip 解压，将 ``src`` 目录下的 ``AXP192.h`` 和 ``AXP192.cpp`` 文件拷贝到刚才创建的 ``AXP192`` 目录下。

## TFT_eSPI 移植

首先在 GitHub 下载 [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) 最新的 [Release](https://github.com/Bodmer/TFT_eSPI/releases) 版本，本文撰写时最新的版本是 [2.5.0](https://github.com/Bodmer/TFT_eSPI/releases/tag/v2.5.0)。

::: tip
注意不要直接下载 Master 分支的版本，从 [Release](https://github.com/Bodmer/TFT_eSPI/releases) 下载最新的版本即可；或者从 Tag 中选择所需的版本。
:::

将下载好的 zip 包解压到项目目录下的 lib 文件夹内，然后找到 ``User_Setups`` 文件夹，创建一个新的头文件，命名为 ``Setup73_M5Stack_Core2.h``，然后在头文件内输入下面内容保存。

``` cpp
// 设置配置文件的 ID，只要不与其他配置文件的 ID 重合就行。
#define USER_SETUP_ID 73

// 设置驱动，M5Core2 的驱动采用的是 ILI9342，但其实 ILI9342 和 ILI9341 完全一致，
// 只是默认的显示方向不同罢了，我们可以在代码中使用 ``tft.setRotation(1);`` 来旋转屏幕方向即可。
#define ILI9341_DRIVER

#define M5STACK          // 标记 M5Stack 设备
#define TFT_SDA_READ     // 使用 SDA Line 从屏幕读取数据
#define TFT_INVERSION_ON // 启用颜色反转

// 引脚定义
#define TFT_MISO 38
#define TFT_MOSI 23
#define TFT_SCLK 18
#define TFT_CS    5
#define TFT_DC   15
#define TFT_RST  -1
#define TOUCH_CS -1

// 字体相关
#define LOAD_GLCD
#define LOAD_FONT2
#define LOAD_FONT4
#define LOAD_FONT6
#define LOAD_FONT7
#define LOAD_FONT8
#define LOAD_GFXFF

#define SMOOTH_FONT

// SPI 运行速度
#define SPI_FREQUENCY 40000000
#define SPI_READ_FREQUENCY 16000000
```

文件创建好之后，找到 ``User_Setup_Select.h`` 头文件，首先注视掉下面一行（ 在 # 号前面加 // ）：

``` cpp
#include <User_Setup.h>
```

然后找个合适的位置添加刚才我们创建的配置文件信息：

``` cpp
#include <User_Setups/Setup73_M5Stack_Core2.h>
```

至此 TFT_eSPI 就配置完毕了，我们可以在 ``main.cpp`` 中添加一些测试代码：

``` cpp
#include <Arduino.h>
#include <SPI.h>
#include <TFT_eSPI.h>
#include "AXP192.h"

#define TFT_GREY 0x5AEB

AXP192 Axp;
TFT_eSPI tft = TFT_eSPI();

uint32_t targetTime = 0;

static uint8_t conv2d(const char *p)
{
  uint8_t v = 0;
  if ('0' <= *p && *p <= '9')
    v = *p - '0';
  return 10 * v + *++p - '0';
}

uint8_t hh = conv2d(__TIME__), mm = conv2d(__TIME__ + 3), ss = conv2d(__TIME__ + 6);

byte omm = 99, oss = 99;
byte xcolon = 0, xsecs = 0;
unsigned int colour = 0;

void setup(void)
{
  Axp.begin();
  Axp.SetLcdVoltage(2700);

  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);

  tft.setTextSize(1);
  tft.setTextColor(TFT_YELLOW, TFT_BLACK);

  targetTime = millis() + 1000;
}

void loop()
{
  if (targetTime < millis())
  {

    targetTime = millis() + 1000;

    ss++;
    if (ss == 60)
    {
      ss = 0;
      omm = mm;
      mm++;
      if (mm > 59)
      {
        mm = 0;
        hh++;
        if (hh > 23)
        {
          hh = 0;
        }
      }
    }

    int xpos = 0;
    int ypos = 85;
    int ysecs = ypos + 24;

    if (omm != mm)
    {
      omm = mm;

      if (hh < 10)
        xpos += tft.drawChar('0', xpos, ypos, 8);
      xpos += tft.drawNumber(hh, xpos, ypos, 8);
      xcolon = xpos;
      xpos += tft.drawChar(':', xpos, ypos - 8, 8);
      if (mm < 10)
        xpos += tft.drawChar('0', xpos, ypos, 8);
      xpos += tft.drawNumber(mm, xpos, ypos, 8);
      xsecs = xpos;
    }
    if (oss != ss)
    {
      oss = ss;
      xpos = xsecs;

      if (ss % 2)
      {
        tft.setTextColor(0x39C4, TFT_BLACK);
        tft.drawChar(':', xcolon, ypos - 8, 8);
        xpos += tft.drawChar(':', xsecs, ysecs, 6);
        tft.setTextColor(TFT_YELLOW, TFT_BLACK);
      }
      else
      {
        tft.drawChar(':', xcolon, ypos - 8, 8);
        xpos += tft.drawChar(':', xsecs, ysecs, 6);
      }

      if (ss < 10)
        xpos += tft.drawChar('0', xpos, ysecs, 6);
      tft.drawNumber(ss, xpos, ysecs, 6);
    }
  }
}
```

## FT6336U

FT6336U 就比较简单了，直接从 GitHub 下载 [Arduino-FT6336U](https://github.com/aselectroworks/Arduino-FT6336U) 即可，下载好之后解压 zip 到 ``lib`` 目录下就算完成安装了。

## LVGL

终于到了移植 LVGL 这一步，首先还是从 GitHub 下载 [LVGL](https://github.com/lvgl/lvgl) 最新的 [Release](https://github.com/lvgl/lvgl/releases) 版本，撰写本文时我使用的版本是 [8.3.10](https://github.com/lvgl/lvgl/releases/tag/v8.3.10)，同样是解压后拷贝到 ``lib`` 目录下。

然后我们在 ``lvgl`` 目录下找到 ``lv_conf_template.h`` 文件，复制一份并重命名为 ``lv_conf.h``，然后打开 ``lv_conf.h`` 文件做如下调整：

1. 将第一个 ``#if 0`` 改为 ``#if 1``
2. 将 ``LV_COLOR_DEPTH`` 改为 16
3. 将 ``#define LV_TICK_CUSTOM 0`` 改为 ``#define LV_TICK_CUSTOM 1``

如果要运行 LVGL 内置的例程，我们还需要进行如下操作：

4. 将 ``lvgl/examples`` 移动到 ``lvgl/src/examples``
5. 将 ``lvgl/demos`` 移动到 ``lvgl/src/demos``
6. 将 ``lib/lvgl/src/examples/arduino/LVGL_Arduino/LVGL_Arduino.ino`` 的内容复制到 ``src/main.cpp``

然后我们需要稍微修改下 ``main.cpp`` 文件，首先添加相关 lib 的引用和 FT6336U 的引脚定义：

``` cpp
#include <Arduino.h>
#include <AXP192.h>
#include <TFT_eSPI.h>
#include <FT6336U.h>
#include <lvgl.h>
#include <examples/lv_examples.h>
#include <demos/lv_demos.h>

// FT6336U Pin Definition
#define I2C_SDA 21
#define I2C_SCL 22
#define INT_N_PIN 39
#define RST_N_PIN -1
```

接着我们需要修改屏幕分辨率：

``` cpp
static const uint16_t screenWidth  = 320;
static const uint16_t screenHeight = 240;
```

然后我们需要初始化 AXP192、屏幕驱动以及触摸屏驱动：

``` cpp
AXP192 Axp;

TFT_eSPI tft = TFT_eSPI(screenWidth, screenHeight); /* TFT instance */

FT6336U ft6336u(I2C_SDA, I2C_SCL, RST_N_PIN, INT_N_PIN);
FT6336U_TouchPointType tp;
```

由于我们使用的触摸屏驱动是 FT6336U 提供的，而不是 TFT_eSPI 内置的驱动，所以需要修改下 ``my_touchpad_read`` 函数的实现：

``` cpp
void my_touchpad_read(lv_indev_drv_t *indev_driver, lv_indev_data_t *data)
{
  tp = ft6336u.scan();

  bool touched = tp.touch_count;

  if (!touched)
  {
    data->state = LV_INDEV_STATE_REL;
  }
  else
  {
    data->state = LV_INDEV_STATE_PR;

    data->point.x = tp.tp[0].x;
    data->point.y = tp.tp[0].y;

    Serial.print("Data x ");
    Serial.println(tp.tp[0].x);

    Serial.print("Data y ");
    Serial.println(tp.tp[0].y);
  }
}
```

然后在 ``setup`` 函数中添加 AXP192、屏幕驱动以及触摸屏驱动的初始化操作：

``` cpp
// 启用 AXP192
Axp.begin();
// 设置屏幕电压以调整屏幕亮度
// 取值范围 3300-2500，默认值 2800
// 建议不要长时间保持最高亮度，否则会导致发热和屏幕寿命的下降
Axp.SetLcdVoltage(2700);

// 启用 TFT_eSPI
tft.begin();
// 修正屏幕方向（ 默认竖屏显示，M5Core2 需要横屏显示 ）
tft.setRotation(1);

// 启用触摸屏
ft6336u.begin();
```

然后解开下面一行的代码注释，就可以编译上传看看运行效果了：

``` cpp
lv_demo_widgets();
```

## 尾巴

其实整个移植的过程并不难，但不少环节有许多小坑，还是查了不少资料才完成移植。

特别感谢那些自己研究明白后把相关资料和解决方案发到网上的人，正是他们利用业余时间完成了这些无偿的工作才使我能顺利的完成移植。

介于中文互联网上关于 M5Core2 的资料并不多，特此记录，希望能帮助到其他人。

## 更多阅读

[M5Stack Core 2 compatibility](https://github.com/Bodmer/TFT_eSPI/issues/1328)

[User Setup for M5Stack Core2](https://github.com/Bodmer/TFT_eSPI/pull/1815)

[stand-alone TFT_eSPI library on Core2](https://community.m5stack.com/topic/4278/stand-alone-tft_espi-library-on-core2)

[TFT_eSPI @belm0](https://github.com/belm0/TFT_eSPI)

[LVGL 入门使用教程](https://www.cnblogs.com/jzcn/p/16695253.html)
