---
date: 2024/06/27
title: QCAD 社区版本切换脚本
description: 使用 Shell 脚本将 QCAD 快速从试用版切换到社区版本
tag:
    - 开源软件
    - QCAD
    - Shell
---

# {{ $frontmatter.title }}

QCAD 是一款优秀的开源 2D CAD App，但官方只提供了收费版本的试用版的下载链接，但其实 QCAD 的社区版本和收费版本的本体是完全一样的，只是收费版本额外内置了一些收费插件。

如果用户想要使用社区版本的 QCAD 就需要先下载收费版本的试用版，然后手动删除一系列收费插件即可，这一过程较为繁琐且容易出错，下面提供 macOS 的 Shell 脚本用于快速删除收费插件：

``` Shell
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadcamscripts.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadgles3d.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadpdf.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadpolygon.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadproj.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadproscripts.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadproxies.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadshp.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadspatialindexpro.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadtrace.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcaddwg.dylib
rm -f /Applications/QCADCAM-Trial.app/Contents/PlugIns/libqcadnest.dylib
```

## 相关链接

[QCAD 官网](https://qcad.org/)
