---
date: 2025/10/10
title: 使用 UTM 在 macOS 上创建 Batman-Adv 测试网络
description: 通过在 macOS 上的虚拟机 UTM 中安装 OpenWRT 系统来创建 Batman-Adv 测试网络
tag:
    - 快速笔记
    - macOS
    - UTM
    - Linux
    - OpenWRT
    - Batman-Adv
---

# {{ $frontmatter.title }}

::: tip 小提示
本文只是一份快速笔记，不是教程，所以写的非常的简洁，还请见谅。

如果你看不懂可以查一下 Google 或者问一下 AI。
:::

## 系统及软件版本

```
macOS:   26.0.1
UTM:     4.7.4(114)
OpenWRT: 24.10.3
```

## 下载 UTM 及 OpenWRT

- [UTM 官网](https://mac.getutm.app/)
- [OpenWRT 官方固件下载页](https://firmware-selector.openwrt.org/)

打开 OpenWRT 官方固件下载页之后，搜索 `armv8` 点击 `Generic EFI Boot (armsr/armv8)`，然后点击 `自定义预安装软件包和/或首次启动脚本`，在预安装的软件包后面追加以下几个软件包：

```
kmod-batman-adv       # 启用 batman-adv 内核模块
batctl-default        # batman 调试工具
luci-proto-batman-adv # luci 新增 batman 相关协议
```

构建完成后下载第一个 `COMBINED-EFI (EXT4)` 选项。

## UTM 配置

首先打开 UTM，然后找到 `设置-网络`，点击右下角创建两个网络，默认名称应该是 `Network 0` 和 `Network 1`。

接着创建虚拟机，按照顺序点击：

1. 虚拟化
2. 其他
3. 内存给 512MiB、CPU 分配 2 个
4. 启动设备「无」，勾选 UEFI 启动
5. 储存空间直接点「继续」
6. 共享目录直接点「继续」
7. 修改名字为「OpenWRT」，勾选「打开虚拟机设置」，然后点储存

接着依次移除设备下的 `显示`、`网络`、`声音` 和驱动器下的 `VirtIO 驱动器`。

然后依次新建设备：

1. 串行（用于粘贴命令）
2. 网络、仅主机、显示高级设置、客户机网络 10.0.2.0/24
3. 网络、仅主机、Host Network 选 Networkrk 0，显示高级设置、客户机网络 100.0.2.0/24
4. 网络、共享网络

点击驱动器新建，选择 `导入` 选择刚下载的固件，然后点击 `储存` 即可。

接着复制这个虚拟机实例分别命名 OpenWRT 2 和 OpenWRT 3。

OpenWRT 2 在上面设备 3、4 之间新增一个网络设备，完整配置如下：

1. 串行（用于粘贴命令）
2. 网络、仅主机、显示高级设置、客户机网络 10.0.2.0/24
3. 网络、仅主机、Host Network 选 Networkrk 0，显示高级设置、客户机网络 100.0.2.0/24
4. 网络、仅主机、Host Network 选 Networkrk 1，显示高级设置、客户机网络 101.0.2.0/24
5. 网络、共享网络

OpenWRT 3 只需要把上面设备 3 调整一下，完整配置如下：

1. 串行（用于粘贴命令）
2. 网络、仅主机、显示高级设置、客户机网络 10.0.2.0/24
3. 网络、仅主机、Host Network 选 Networkrk 1，显示高级设置、客户机网络 101.0.2.0/24
4. 网络、共享网络

全部完成后依次启动三个 OpenWRT 实例即可。

## OpenWRT 配置

实例启动后（CLI 不再更新之后），我们在窗口中按 `Enter` 进入 Shell，然后三个实例分别执行下面命令，设置好静态 IP。

``` bash
uci set network.lan.ipaddr='10.0.2.2' # 另外两个设置为 10.0.2.3 和 10.0.2.4，确保不要重复即可
uci commit
service network restart
```

然后就可以在浏览器通过静态 IP 访问 LuCI 了，我们需要分别对 3 个实例设置按照下面步骤进行设置：

1. 点击 Network - Interfaces
2. 点击 Add new interface
3. Name 输入 bat0，Protocol 选择 Batman Device，然后点击 Create interface
4. 然后点击 Mesh Routing 标签页，勾选 Avoid Bridge Loops（可选步骤，简单网络下勾不勾都可以），点击 Save 保存
5. 点击 Save & Apply
6. 点击 Add new interface
7. Name 输入 batmesh，Protocol 选择 Batman Interface，Device 选择 eth1，然后点击 Create interface（ 这一步对 OpenWRT 2 来说需要重复两遍，第二个可以叫 batmesh1，然后 Device 选择 eth2，其他保持一致 ）
8. 确认 Device 是 eth1，Batman Device 是 bat0，点击 Save 保存
9. 点击 Save & Apply

此时你就可以进入 shell 使用 batctl 命令进行检查了：

``` bash
batctl n        # 检查邻居节点，OpenWRT 1 和 3 应该都只有 1 个邻居节点，而 OpenWRT 2 应该有 2 个邻居节点
batctl o        # 检查路由表，应该任意节点都可以看到全部的节点
batctl tr <MAC> # 在 OpenWRT 1 追踪 OpenWRT 3 的 MAC 地址，应该可以看到通过 OpenWRT 2 进行了 1 跳 
```

到这里就完成了 Batman-Adv 环境的简单搭建了。

## 参考资料

- [OpenWrt on UTM on Apple Silicon HowTo](https://openwrt.org/docs/guide-user/virtualization/utm)
- [UTM Documentation Network Mode](https://docs.getutm.app/settings-qemu/devices/network/network/#network-mode)
