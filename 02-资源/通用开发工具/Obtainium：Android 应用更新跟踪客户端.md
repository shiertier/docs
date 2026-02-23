---
title: "Obtainium：Android 应用更新跟踪客户端"
发布日期: "2026-02-23"
对象: "GitHub 项目 `ImranR98/Obtainium`"
项目主页: "https://github.com/ImranR98/Obtainium"
开源协议: "GNU General Public License v3.0"
主要语言: "Dart"
统计快照: "Stars 15385，Forks 399，Watchers 105（抓取时间：2026-02-24）"
版本快照: "最新发布 v1.3.4（发布时间：2026-01-31T07:39:11Z）"
---

## 摘要

**1) 一句话总结**
Obtainium 是一款基于 Dart 开发的开源 Android 应用管理工具，允许用户绕过传统中心化应用商店，直接从代码托管平台、F-Droid 及第三方网站等源头安装并追踪应用更新。

**2) 关键要点**
* **开源与技术栈**：采用 GNU GPL v3.0 开源协议，使用 Dart 语言开发。
* **核心功能**：支持直接从应用发布页面解析并下载 APK 文件进行安装，并在有新版本时发送通知提醒。
* **广泛的源支持**：兼容 GitHub/GitLab 等代码托管平台、F-Droid 生态库，以及 APKPure、华为、腾讯、酷安等众多第三方应用商店。
* **灵活的解析机制**：除了标准 API，还支持直接 APK 链接、Jenkins 构建任务，并提供 HTML 后备解析功能以兼容未提供标准接口的常规网页。
* **特殊追踪模式**：针对 APKMirror 等特定平台提供“仅追踪（Track-Only）”模式。
* **众包配置生态**：提供官方众包应用配置网站，用户可直接搜索、导入现成配置或贡献新配置。
* **安全验证集成**：推荐并支持与应用签名验证工具 AppVerifier 集成，确保应用来源安全。
* **安装途径**：用户可通过 GitHub Releases、IzzyOnDroid 或 F-Droid 获取并安装 Obtainium 本身。

**3) 风险/缺口**
* **网页抓取失效风险**：部分应用源的数据获取依赖网页抓取（Web scraping）技术，若目标网站的页面设计发生更改，抓取功能极易失效，且在这种情况下可能没有更可靠的替代方案。

## 功能与定位

Obtainium 是一款开源的 Android 应用程序管理工具，旨在让用户能够直接从应用的官方发布页面（如代码托管平台或第三方网站）安装和更新应用，从而绕过传统的中心化应用商店。

## 典型使用场景

* 希望第一时间获取开源或第三方 Android 应用最新版本的用户。
* 需要集中管理、追踪并更新来自不同平台（如 GitHub、F-Droid、第三方应用市场等）应用的用户。

## 核心功能

* **直接安装与更新**：支持直接从应用的发布页面解析并下载 APK 文件进行安装。
* **更新通知**：当追踪的应用有新版本发布时，系统会向用户发送通知提醒。
* **广泛的源支持**：
  * **开源托管平台**：GitHub、GitLab、Forgejo (Codeberg)、SourceHut。
  * **F-Droid 生态**：F-Droid 官方库、第三方 F-Droid 仓库、IzzyOnDroid。
  * **第三方应用商店**：APKPure、Aptoide、Uptodown、华为应用市场、腾讯应用宝、vivo 应用商店 (CN)、RuStore、Farsroid、酷安 (CoolApk)、RockMods、LiteAPKs。
  * **其他来源**：直接 APK 链接、Jenkins 构建任务、特定应用源（如 Telegram、Neutron Code）。
  * **仅追踪模式**：支持对 APKMirror 进行版本追踪（Track-Only）。
  * **HTML 后备解析**：支持解析任何包含 APK 文件链接的常规 HTML 页面。
* **众包配置**：提供一个众包的应用配置平台，用户可以搜索、请求或贡献应用配置。

## 特色与差异点

* **去中心化获取**：不依赖单一的应用商店，直接从开发者发布源头获取更新。
* **生态整合**：推荐并支持与应用签名验证工具 AppVerifier 集成，以确保应用来源的安全性。
* **灵活的抓取机制**：除了标准 API，还提供 HTML 解析作为后备方案，最大程度兼容未提供标准接口的发布页面。

## 使用方式概览

1. 用户可通过 GitHub Releases、IzzyOnDroid 或 F-Droid 下载并安装 Obtainium。
2. 在应用内手动添加目标应用的发布页面链接，或通过官方提供的众包配置网站（apps.obtainium.imranr.dev）查找并导入现成的应用配置。
3. 配置完成后，Obtainium 将自动追踪版本，并在有更新时提醒用户进行安装。

## 限制与注意事项

* 对于部分应用源，Obtainium 依赖网页抓取（Web scraping）技术来获取数据。如果目标网站的页面设计发生更改，抓取功能可能会轻易失效，且在这些情况下可能没有更可靠的替代方案。

## 链接

- GitHub 仓库: https://github.com/ImranR98/Obtainium
- 官方网站: https://obtainium.imranr.dev
- 众包应用配置: https://apps.obtainium.imranr.dev/
- Wiki 文档: https://wiki.obtainium.imranr.dev/
- AppVerifier 工具: https://github.com/soupslurpr/AppVerifier

## 关联主题

- [[00-元语/desktop-client]]
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/productivity]]
