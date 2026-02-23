---
title: "Koodo Reader：跨平台电子书阅读与管理客户端"
发布日期: "2026-02-23"
对象: "GitHub 项目 `koodo-reader/koodo-reader`"
项目主页: "https://github.com/koodo-reader/koodo-reader"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "JavaScript"
统计快照: "Stars 26078，Forks 1934，Watchers 134（抓取时间：2026-02-24）"
版本快照: "最新发布 v2.2.9（发布时间：2026-02-21T02:29:15Z）"
---

## 摘要

**1) 一句话总结**
Koodo Reader 是一款基于 JavaScript 开发的开源跨平台电子书阅读器与管理器，支持多种文档格式、丰富的第三方云同步协议以及 AI 辅助阅读功能。

**2) 核心要点**
* **开源与技术栈**：采用 AGPL v3.0 开源协议，主要使用 JavaScript 开发。
* **全平台覆盖**：原生支持 Windows、macOS、Linux、Android、iOS，同时提供 Web 网页版，并支持通过 Docker 进行私有化部署。
* **广泛的格式支持**：兼容 EPUB、Mobi、Kindle (azw3, azw)、FB2、PDF、TXT、富文本 (md, docx)、漫画归档 (cbr, cbz 等) 及多种网页格式。
* **高度开放的同步生态**：不依赖单一官方云服务，支持通过 OneDrive、Google Drive、Dropbox、WebDAV、SMB、FTP、SFTP 等十余种网盘和标准协议进行数据同步与备份。
* **AI 与辅助工具**：内置 AI 字典、文本摘要和翻译功能，支持文字转语音 (TTS)，适合外语学习与深度阅读。
* **个性化阅读与批注**：支持单栏、双栏或连续滚动布局；可高度自定义字体、间距、颜色和夜间模式；支持书签、笔记及多种样式的高亮批注。
* **便捷安装**：提供各平台独立安装包，并支持通过 Scoop (Windows) 和 Homebrew (macOS) 等包管理器快速安装。

**3) 风险与不足**
* **DRM 限制**：明确指出仅支持“无 DRM 限制”的 Mobi 和 Kindle 格式，无法阅读受 DRM 保护的电子书。

## 功能与定位

Koodo Reader 是一款现代化的跨平台电子书管理器和阅读器，致力于为用户提供统一的阅读体验。它支持广泛的电子书格式，并内置了强大的数据同步、备份以及 AI 辅助功能，适用于需要在多设备间无缝切换阅读进度的用户。

## 典型使用场景

- **多设备无缝阅读**：在电脑、手机或网页端阅读同一本书，并通过云盘同步阅读进度和笔记。
- **多格式电子书管理**：集中管理 EPUB、PDF、Mobi、漫画及富文本等多种格式的本地文档。
- **外语学习与深度阅读**：利用内置的 AI 字典、翻译和摘要功能辅助阅读外文书籍或长篇文献。

## 核心功能

- **广泛的格式支持**：
  - 电子书：EPUB、无 DRM 限制的 Mobi 和 Kindle 格式 (azw3, azw)、FB2。
  - 文档与文本：PDF、TXT、富文本 (md, docx)。
  - 漫画归档：cbr, cbz, cbt, cb7。
  - 网页格式：html, xml, xhtml, mhtml, htm。
- **云端同步与备份**：支持通过 OneDrive, Google Drive, Dropbox, MEGA, pCloud, Yandex Disk, Box, FTP, SFTP, WebDAV, SMB 或对象存储进行数据同步、备份及直接导入书籍。
- **AI 与辅助工具**：内置 AI 字典、文本摘要和翻译功能；支持文字转语音 (TTS)。
- **阅读批注**：支持添加书签、笔记和高亮（提供下划线、加粗、斜体和阴影等多种高亮样式）。
- **高度自定义的阅读体验**：
  - 支持单栏、双栏或连续滚动布局。
  - 可自由调整字体大小、字体族、行距、段间距、背景色、文字颜色、边距和亮度。
  - 提供夜间模式和自定义主题色。
  - 支持触摸屏操作及批量导入书籍。

## 特色与差异点

- **全平台覆盖**：原生支持 Windows、macOS、Linux、Android、iOS，并提供 Web 网页版。
- **高度开放的同步生态**：不依赖单一的官方云服务，而是允许用户接入几乎所有主流的第三方网盘及标准网络协议（如 WebDAV、SMB、FTP）来托管自己的阅读数据。
- **多语言支持**：由开源社区驱动，支持数十种界面语言。

## 使用方式概览

- **客户端安装**：提供 Windows、macOS、Linux、Android 和 iOS 的独立安装包。
- **包管理器安装**：
  - Windows (Scoop): `scoop install extras/koodo-reader`
  - macOS (Homebrew): `brew install --cask koodo-reader`
- **Web 端访问**：可直接通过浏览器访问 Web 版进行阅读。
- **私有化部署**：支持通过 Docker 进行部署。

## 限制与注意事项

- 使用前请核对许可证、维护状态与兼容性约束。

## 链接

- [GitHub 仓库](https://github.com/koodo-reader/koodo-reader)
- [官方网站](https://koodoreader.com)
- [Web 版预览](https://web.koodoreader.com)

## 关联主题

- [[00-元语/desktop-client]]
- [[00-元语/reading]]
- [[00-元语/github]]
- [[00-元语/tool]]
