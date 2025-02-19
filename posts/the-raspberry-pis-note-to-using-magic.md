---
date: 2024/11/24
title: 树莓派魔法使用笔记
description: 尽管存在清华大学软件镜像站这样优秀的项目，但是 Git 访问等其他常见需求还需要自行解决
tag:
    - 快速笔记
    - 树莓派
    - Raspberry Pi
---

# {{ $frontmatter.title }}

::: tip 小提示
本文只是一份快速笔记，不是教程，所以写的非常的简洁，还请见谅。

如果你看不懂可以查一下 Google 或者问一下 AI。
:::

写代码无论是工作还是学习，难免需要使用诸如更新系统、安装软件包、拉取项目、安装依赖等操作，由于众所周知的原因，这方面还需要准备点魔法，本文就是一份快速笔记，仅供我自己记录使用。

::: danger 警告
技术没有国界，但是技术员有。

请合理合法合规使用技术，违规使用后果自负。
:::

## 安装前准备

```shell
sudo apt update
sudo apt install -y vim # 可选，用 vi 和 nano 也是一样的
```

## shadowsocks-libev

安装：

``` shell
sudo apt install -y shadowsocks-libev
```

配置：

``` shell
sudo vim /etc/shadowsocks-libev/config.json
```

配置格式如下：

``` shell
{
    "server": ["0.0.0.0"],      # 我们是作为客户端使用，这里填写远程服务器，可以多个
    "server_port": 8888,        # 远程服务器的端口
    "method": "aes-256-gcm",    # 远程服务器的加密方式
    "password": "password",     # 远程服务器的密码
    "mode": "tcp_and_udp",
    "local_address": "0.0.0.0",
    "local_port": 1080,
    "timeout": 60,
}
```

我们是作为客户端使用，所以需要启动 ss-local 而不是 shadowsocks-libev：

``` shell
sudo systemctl start shadowsocks-libev-local@config.service    # 启动服务
sudo systemctl status shadowsocks-libev-local@config.service   # 检查下服务运行状态
```

验证：

``` shell
# 两次 IP 不一样的话验证通过
curl ipconfig.io
curl -x socks5://127.0.0.1:1080 ipconfig.io
```

验证通过后配置开机启动：

``` shell
sudo systemctl enable shadowsocks-libev-local@config.service
```

## Privoxy

shadowsocks 配置好后已经可以使用 socks5，但是大部分软件都只支持 http，所以我们需要桥接器，首先安装 Privoxy：

``` shell
sudo apt install -y privoxy
```

然后编辑配置文件：

``` shell
sudo vim /etc/privoxy/config
```

::: details 小贴士：查找配置文件路径还可以这样
``` shell
systemctl cat privoxy.service

# 输出
# /lib/systemd/system/privoxy.service
[Unit]
Description=Privacy enhancing HTTP Proxy
Documentation=man:privoxy(8) https://www.privoxy.org/user-manual/
After=network-online.target

[Service]
Environment=PIDFILE=/run/privoxy.pid
Environment=OWNER=privoxy
Environment=CONFIGFILE=/etc/privoxy/config # 看这里
Type=forking
PIDFile=/run/privoxy.pid
ExecStart=/usr/sbin/privoxy --pidfile $PIDFILE --user $OWNER $CONFIGFILE
ExecStopPost=/bin/rm -f $PIDFILE
SuccessExitStatus=15

[Install]
WantedBy=multi-user.target
```
:::

找到 ``listen-address`` 改成：

``` shell
listen-address  127.0.0.1:1087 # 如果需要外部访问可以写成 0.0.0.0:1087
listen-address  [::1]:1087     # 端口号是个人习惯，可以随意更改
```

配置文件末尾添加（ 不讲究的话 ）：

``` shell
forward-socks5 / 127.0.0.1:1080 . # 指向本地 socks5
```

``` shell
sudo systemctl start privoxy.service    # 启动服务
sudo systemctl status privoxy.service   # 检查下服务运行状态
```

验证：

``` shell
# 两次 IP 不一样的话验证通过
curl ipconfig.io
curl -x http://127.0.0.1:1087 ipconfig.io
```

验证通过后配置开机启动：

``` shell
sudo systemctl enable privoxy.service
```

## 日常使用

在更新软件或者拉取代码的时候可以使用下面命令开启：

``` shell
export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;
```

当然也可以把这句话配置到诸如 ``.zshrc`` 等 shell 配置文件中作为默认启动。
