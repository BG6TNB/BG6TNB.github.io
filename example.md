---
date: 2023/04/20                      # date 代表页面的创建时间，用于文章在列表的排序作用
title: Example                        # 文章标题
description: Here's a sample article  # 后续考虑添加到列表页展示
tag: D-Star                           # 文章标签，支持 String 和 Array 两种格式，用于标注文章的内容
index: false                          # 默认值是 undefined，当手动标注为 false 之后，打包过程中将屏蔽该文件入口
comments: false                       # 默认值是 undefined，当手动标注为 false 之后，将隐藏页面的评论功能
lastUpdated: false                    # 默认值是 undefined，当手动标注为 false 之后，将隐藏页面的最近更新时间
---

# {{ $frontmatter.title }}

本页面用于说明扩展的 Frontmatter 参数。

<!-- 并列显示图片 -->
![](http://via.placeholder.com/300){style="width:50%;display:inline-block;"}
![](http://via.placeholder.com/500){style="width:50%;display:inline-block;"}
