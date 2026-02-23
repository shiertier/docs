---
title: FileConverter：Windows 右键文件转换工具
对象: GitHub 仓库
项目主页: https://github.com/Tichau/FileConverter
官网: https://file-converter.io/
开源协议: GPL-3.0
来源:
  - https://github.com/Tichau/FileConverter/blob/master/README.md
  - https://github.com/Tichau/FileConverter/blob/master/CHANGELOG.md
---

## 摘要

FileConverter 是一款面向 Windows 的右键菜单文件转换工具，核心价值是把常见音视频、图像与文档转换流程压缩为“选中文件后右键选择预设”的轻操作。它集成 FFmpeg、ImageMagick、Ghostscript 等中间件，支持批量处理、预设管理与部分硬件加速，适合希望减少命令行和重型软件操作成本的日常转换场景。

## 功能与定位

FileConverter 的定位是“系统级轻量转换入口”。它直接集成在 Windows 资源管理器右键菜单中，用于快速完成文件格式转换与压缩，而不是替代专业剪辑或图像编辑软件。

从仓库说明看，项目自 2014 年持续维护，采用开源协作方式迭代，目标是让普通用户也能低门槛完成常见文件处理任务。

## 典型使用场景

- 在资源管理器中批量把视频转为 MP4 或 MKV，并按预设压缩体积。
- 把图片转为 JPG、PNG、WebP、AVIF 或 ICO，并执行缩放、旋转等基础处理。
- 批量处理音频格式转换与参数调整，例如声道转换、码率调整。
- 将 Office 文档导出为 PDF 或图片，或把图片合并为 PDF。
- 从视频中提取音频、去除音轨，或执行 CD 音频提取。

## 核心功能

- 右键菜单集成：选中一个或多个文件后可直接调用转换预设。
- 预设系统：支持新增、编辑、分组、拖拽排序，以及预设导入导出。
- 批量并发：支持多任务并发转换，并显示整体进度。
- 中间件能力集成：基于 FFmpeg、ImageMagick、Ghostscript 实现多媒体与文档相关转换能力。
- 新版本增强：CHANGELOG 显示 2.1/2.2 版本加入了 NVidia 与 AMD AMF 的 H.264 相关硬件加速选项，并扩展了 AVIF 等格式支持。

## 特色与差异点

- 交互路径短：不需要先打开应用，再导入文件，直接从文件上下文发起处理。
- 可复用的预设机制：同一团队可共享预设，降低重复配置成本。
- 覆盖面广：同一工具内同时覆盖音频、视频、图像、PDF、部分 Office 文档转换。
- 本地优先：核心流程在本机完成，适合对离线处理和响应速度有要求的场景。

## 使用方式概览

1. 在 Windows 资源管理器中选择待处理文件。
2. 右键进入 FileConverter 菜单并选择目标预设。
3. 观察转换进度并等待任务完成。
4. 按需在设置中调整或新增预设，再复用于后续批量任务。

## 限制与注意事项

- Office 文档转 PDF 或图片功能依赖本地 Microsoft Office 环境。
- 2.0 及以上版本要求 .NET Framework 4.8，并已移除对 32 位系统的支持。
- 该工具聚焦“快速转换与压缩”，复杂编辑仍需专业软件配合。

## 链接

- 项目仓库：https://github.com/Tichau/FileConverter
- 官网与下载：https://file-converter.io/
- 使用文档与排障：https://github.com/Tichau/FileConverter/wiki
- 变更记录：https://github.com/Tichau/FileConverter/blob/master/CHANGELOG.md
- 问题反馈：https://github.com/Tichau/FileConverter/issues
