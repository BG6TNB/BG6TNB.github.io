---
date: 2025/02/19
title: OSM 离线地图笔记
description: 一份面向开发者的关于 OSM 离线地图的笔记
tag:
    - 快速笔记
    - OSM
---

# {{ $frontmatter.title }}

::: warning 免责声明
本文仅用于技术学习，在实际应用中，请确保遵循相关法律法规。

本人完全不认可 OSM 地图中关于中国的定义以及国境线的描述，并且强烈建议您不要依赖于这些信息进行任何商业活动。

如果从事地图相关工作，请认准 [标准地图服务](http://bzdt.ch.mnr.gov.cn/)，并获取审图号。
:::

## OSM 地图下载

推荐使用 [OpenStreetMap Data Extracts](https://download.geofabrik.de/) 来下载 OSM 数据。这个项目提供了多种格式的数据，包括 `.pbf`（Planet File）和 `.shp`（Shapefile），适合不同的需求。

如果需要批量下载多个区域的 OSM 数据，可以使用 [download-geofabrik](https://github.com/julien-noblet/download-geofabrik) 工具来简化这个过程。这个工具可以帮助你快速下载指定范围内的 OSM 数据，并且支持多种格式。

## 数据转换（ 切片 ）

`.pbf` 文件通常包括所有数据，需要先切片后才能使用，我们可以使用 [Tilemaker](https://github.com/systemed/tilemaker) 工具来进行切片。

常见的格式有 `MBTiles` 和 `PMTiles`，前者本质上是个 SQLite 数据库，后者是个二进制文件。

`MBTiles` 适合终端设备离线使用，而 `PMTiles` 则可以通过 HTTP 范围请求来获取数据（ 静态文件托管即可 ）。

## 地图托管

当你有了 `MBTiles` 或 `PMTiles` 文件后，可以使用 [Tileserver GL](https://github.com/maptiler/tileserver-gl) 起一个服务来测试地图效果，并且 Tileserver GL 是一个 Node.JS 应用，作为事例代码也是极好的。

## 地图渲染

最后如果需要在 web 中渲染地图，你需要一个 JavaScript 库来实现。常见的库有 `Leaflet` 和 `Mapbox GL JS`。我更推荐使用 `Mapbox GL JS` 来渲染地图，另外如果你使用 Vue.js，那么你可以使用 [LibreGL](https://libregl.vercel.app/) 来简化工作，这个库可以让你在 Vue.js 中直接使用 Mapbox GL JS。

## 其他方案

当我把整个 OSM 离线地图方案研究清楚后，最近又发现了一个 All in one 的打包服务：[Protomaps](https://docs.protomaps.com/) 

根据官网描述：Protomaps 是一个开源的交互式网络地图系统。

Protomaps 的主要部分有三个：

- PMTiles，一种通过 HTTP 范围请求访问的 tile 数据金字塔的开源档案格式。
- 用于创建、提供和操作 PMTiles 的工具和库生态系统。
- 一张基于 OpenStreetMap 数据集的地图底图，显示了世界上的道路、水体和标签等特征，并以一个大的 PMTiles 存档形式提供。

具体还没研究，先记下来。
