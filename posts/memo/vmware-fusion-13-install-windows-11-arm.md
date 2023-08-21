---
date: 2023/04/20
title: VMware Fusion 13 安装 Windows 11 ARM 笔记
tag: Memo
index: false
---

# VMware Fusion 13 安装 Windows 11 ARM 笔记

::: info 参考视频
[Mac免费虚拟机来啦！支持M芯片｜VMware Fusion 13](https://www.bilibili.com/video/BV1YP4y1R7L4)
:::

## 如何跳过初始化时的网络设置

1. 初始化流程中按下 ``Shift`` + ``F10``
2. 输入 ``oob\bypassnrp``
3. 重新走流程
4. 点击 ``我没有 Internet 连接``
5. 点击 ``继续执行受限设置``
6. 正常走流程

## 安装 VMware Tool

1. 以管理员身份运行 PowerSheel
2. 输入 ``Set-ExecutionPolicy RemoteSigned``
3. 输入 ``A`` 敲回车
4. 点击 ``虚拟机``， 点击 ``安装 VMware Tool``
5. 进入驱动器 ``VMware Tool``，找到 ``setup`` 点击右键选择 ``使用 PowerShell 运行``
6. 等待安装完成后重启虚拟机即可
