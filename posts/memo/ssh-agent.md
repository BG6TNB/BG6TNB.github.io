---
date: 2023/10/07
title: 使用 SSH-Agent 管理 SSH Keys
description: 使用 SSH-Keys 提交代码
tag:
    - SSH Keys
    - SSH
    - GitHub
    - GitLab
---

# {{ $frontmatter.title }}

## 生成密钥

常见的密钥有 ED25519 和 RSA，ED25519 的安全性会更好点，同时 GitHub 和 GitLab 都支持使用 ED25519 密钥，推荐优先使用 ED25519。

**ED25519**

``` zsh
$ ssh-keygen -t ed25519 -C "email@example.com"
```

输入上面命令之后，系统会询问密钥保存的位置和名称，推荐将密钥保存在 ``~/.ssh/`` 目录下面，例如：``~/.ssh/id_ed25519_github_email@example.com``

::: warning 警告
ssh-keygen 并不支持 ~ 别名，你需要输入从根目录 / 开始的完整路径，上述事例只是便于表述。
:::

然后系统会提示你设置密码，密码可以留空不设置。

重复输入两次密码之后，系统会在你指定的目录下生成 ``id_ed25519_github_email@example.com`` 和 ``id_ed25519_github_email@example.com.pub`` 两个文件（ 名称仅作参考，以实际为准 ）。

**RSA**

``` zsh
$ ssh-keygen -o -t rsa -b 4096 -C "email@example.com"
```

RSA 密钥生成流程和 ED25519 完全一致，这里就不再赘述，完成后将会得到 ``id_rsa_email@example.com`` 和 ``id_rsa_email@example.com.pub`` 两个文件（ 名称仅作参考，以实际为准 ）。

## 注册密钥

无论采用哪种方式生成的密钥，在 GitHub 和 GitLab 之类的网站上都是提交 xxx.pub 文件，你可以使用任何编辑器打开该文件，或者使用 ``$ cat xxx.pub`` 方式查看文件内容。

具体网站的注册方式都有 GUI 界面，我这里就不再赘述了。

## clone 项目

注册密钥之后，clone 项目即可，需要注意的是，你不能使用 HTTP/HTTPS 的方式 clone 项目，而要选择 SSH 的方式 clone 项目。

对于已经存在的项目来说，使用 ``git remote -v`` 来查看项目所使用的方式，如果是 HTTP/HTTPS，则需要更换成 SSH 方式的地址。

## 私钥管理

### 添加私钥到 ssh-agent

完成上述步骤后，你只需要最后一个步骤，即添加私钥到管理器即可。

``` zsh
$ ssh-add ~/.ssh/id_ed25519_github_email@example.com
```

ED25519 和 RSA 都行，需要注意必须是没有 .pub 结尾的私钥文件。

### 查看添加到 ssh-agent 的私钥

``` zsh
$ ssh-add -l
```

**查看添加到 ssh-agent 的私钥对应的公钥内容：**

``` zsh
$ ssh-add -L
```

### 从 ssh-agent 删除私钥

**删除指定私钥：**

``` zsh
$ ssh-add -d ~/.ssh/id_ed25519_github_email@example.com
```

**删除所有私钥：**

``` zsh
$ ssh-add -D
```

注意，这一步只是从 ssh-agent 管理器里面删除私钥，你的私钥文件本身是不会受到任何影响的。

## 开机自动注册 ssh-agent

::: warning 警告
以下内容是我个人的笔记，仅针对 macOS + ZSH 的组合，其他环境不做保证。
:::

在 ``~/.zshrc`` 文件末尾添加下面命令即可，有几个就写几个，不过写多了会减慢每次启动 terminal 的速度。

``` zsh
ssh-add ~/.ssh/id_ed25519_github_email@example.com
```

不过由于我设置了密码，所以每次输入密码还挺麻烦的，不过好在可以使用 macOS 的密码管理器，只需要改成下面命令即可：

``` zsh
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_email@example.com
```

这样每次开机时就会自动注册 ssh-agent 了。但是每次启动 terminal 都会看到 ssh-add 命令的运行结果，如果你想这一过程完全无感，可以再改成下面样子：

``` zsh
nohup ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_email@example.com >/dev/null 2>&1
```

这样就不会显示 ssh-add 的执行结果了，不过该等的时间还是要等，只是不显示结果而已。
