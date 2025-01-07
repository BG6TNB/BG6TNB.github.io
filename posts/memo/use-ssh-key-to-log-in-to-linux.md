---
date: 2024/01/07
title: 使用 SSH Key 登录 Linux
description: 一键登录，无需密码
tag:
    - SSH Keys
    - SSH
    - Linux
    - Ubuntu
---

# {{ $frontmatter.title }}

## 生成密钥

``` zsh
$ ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/bandwagon -C "Bandwagon"
```

创建密钥时会提示输入密码，这个密码的作用是在每次 SSH 连接的时候用的，如果你想一条命令直连服务器也可以为空

其他详细介绍请看参考资料

## 上传公钥

``` zsh
$ ssh-copy-id -i ~/.ssh/bandwagon.pub root@127.0.0.1
```

发送公钥到服务器，需要输入服务器密码，需要注意的是，这里需要对应用户，比如如果你是 pi 用户登录，就需要上传到对应服务器的 pi 用户目录下，root 同理

## 配置本机 SSH Config

在本机的 ``config`` 中配置 IP 和用户，如下：

```
Host 127.0.0.1                    # 服务器域名或者 IP
    HostName 127.0.0.1            # 服务器域名或者 IP
    IdentityFile ~/.ssh/bandwagon # 对应的 SSH 私钥
    User root                     # 登录用户
```

## 测试 SSH 连接

``` zsh
$ ssh root@127.0.0.1 # 如果设置了密钥密码，这里会提示输入，否则就直连了
```

## 参考资料

[SSH 使用密钥做免密登陆 Ed25519](https://www.creplus.cn/posts/5725.html)
