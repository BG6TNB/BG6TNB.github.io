---
date: 2025/03/25
title: 解决 Arduino IDE 无法安装 ESP32 开发板的问题
description: 尽管 Arduino IDE 可以设置代理，但是有些时候即使设置了代理也无法下载，这时就需要手动安装了。
tag:
    - 快速笔记
    - Arduino
    - ESP32
---

# {{ $frontmatter.title }}

尽管 Arduino IDE 可以设置代理，但是有些时候即使设置了代理也无法下载，这时就需要手动安装了。

这份快速笔记是针对 macOS 系统准备的，如果你使用的是 Windows 或 Linux，可能并不能完全解决你的问题。

首先打开官方仓库 [arduino-esp32](https://github.com/espressif/arduino-esp32)，选择你需要的版本号（ Git Tag ），然后点击右边绿色 ``Code`` 选择 ``Download ZIP``。

::: tips
不要从 Arduino IDE 板管理器的地址下载，你如果从这个地址下载则需要手动安装全部依赖（ 截止 3.1.3 版本需要下载 10 个 ）
:::

下载完成后拷贝到路径 ``/Users/user/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3``（ 注意根据实际情况修改用户名和版本号，后面不再赘述 ）

然后终端进入 ``/Users/user/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/tools`` 运行 ``python3 get.py``，此时会自动安装所需的全部依赖：

``` shell
System: DarwinARM, Bits: 64, Info: macOS-15.3.2-arm64-arm-64bit-Mach-O
Platform: arm64-apple-darwin

Downloading and extracting tools...

Downloading 'esp32-arduino-libs-idf-release_v5.3-489d7a2b-v1.zip' ...
Downloading... 100.00% - 325.60 MB downloaded - Elapsed Time: 10:30.56 - Speed: 0.52 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:00.16 Files extracted successfully.

Downloading 'xtensa-esp-elf-13.2.0_20240530-aarch64-apple-darwin.tar.gz' ...
Downloading... 100.00% - 190.45 MB downloaded - Elapsed Time: 04:02.11 - Speed: 0.79 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:00.73 Files extracted successfully.

Downloading 'xtensa-esp-elf-gdb-14.2_20240403-aarch64-apple-darwin21.1.tar.gz' ...
Downloading... 100.00% - 35.31 MB downloaded - Elapsed Time: 00:25.99 - Speed: 1.36 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:00.13 Files extracted successfully.

Downloading 'riscv32-esp-elf-13.2.0_20240530-aarch64-apple-darwin.tar.gz' ...
Downloading... 100.00% - 272.24 MB downloaded - Elapsed Time: 06:32.54 - Speed: 0.69 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:01.05 Files extracted successfully.

Downloading 'riscv32-esp-elf-gdb-14.2_20240403-aarch64-apple-darwin21.1.tar.gz' ...
Downloading... 100.00% - 35.09 MB downloaded - Elapsed Time: 04:09.74 - Speed: 0.14 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:00.13 Files extracted successfully.

Downloading 'openocd-esp32-macos-arm64-0.12.0-esp32-20241016.tar.gz' ...
Downloading... 100.00% - 2.44 MB downloaded - Elapsed Time: 00:23.13 - Speed: 0.11 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:00.02 Files extracted successfully.

Downloading 'esptool-v4.9.dev3-macos-arm64.tar.gz' ...
Downloading... 100.00% - 28.73 MB downloaded - Elapsed Time: 01:16.87 - Speed: 0.37 MB/s - Done
 > Verify archive...  Extracting archive...
Renaming esptool-macos-arm64 to esptool ...
Elapsed time 00:00.02 Files extracted successfully.

Downloading 'x86_64-apple-darwin14.mklittlefs-c41e51a.200706.tar.gz' ...
Downloading... 100.00% - 0.35 MB downloaded - Elapsed Time: 00:05.54 - Speed: 0.06 MB/s - Done
 > Verify archive...  Extracting archive...
Elapsed time 00:00.00 Files extracted successfully.

Downloading 'mkspiffs-0.2.3-arduino-esp32-osx.tar.gz' ...
Downloading... 100.00% - 0.12 MB downloaded - Elapsed Time: 00:04.36 - Speed: 0.03 MB/s - Done
 > Verify archive...  Extracting archive...
Renaming mkspiffs-0.2.3-arduino-esp32-osx to mkspiffs ...
Elapsed time 00:00.00 Files extracted successfully.

Platform Tools Installed # 当你看到这个时，依赖就全部安装完毕了
```

这个时候再打开 Arduino IDE 选择一个 ESP32 开发板，打开一个 Blink 例程，点击 verify 看看编译是否存在问题，按理说是不会有问题的，祝你好运 :)
