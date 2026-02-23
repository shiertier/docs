---
title: "pot-desktop：划词翻译与 OCR 桌面工具"
发布日期: "2026-02-23"
对象: "GitHub 项目 `pot-app/pot-desktop`"
项目主页: "https://github.com/pot-app/pot-desktop"
开源协议: "GNU General Public License v3.0"
主要语言: "JavaScript"
统计快照: "Stars 17133，Forks 823，Watchers 54（抓取时间：2026-02-24）"
版本快照: "最新发布 3.0.7（发布时间：2025-05-10T01:14:01Z）"
---

## 摘要

**1) 一句话总结**
Pot 是一款基于 Tauri 开发的跨平台桌面端软件，集成了丰富的在线与离线引擎，专注于提供便捷的划词翻译、截图 OCR、多接口并行对比及生词本管理功能。

**2) 核心要点**
*   **技术栈与跨平台**：基于 Tauri、JavaScript 和 Rust 开发，全面兼容 Windows、macOS 和 Linux 操作系统。
*   **核心触发方式**：支持快捷键划词翻译、独立窗口输入翻译、剪切板监听自动翻译，以及框选屏幕区域进行截图 OCR 与翻译。
*   **丰富的内置引擎**：内置 OpenAI、Gemini Pro、DeepL 等在线翻译服务，以及 Ollama 离线翻译；OCR 支持系统自带离线引擎、Tesseract.js 及多种在线识别服务。
*   **多接口与插件系统**：支持同时调用多个接口对比结果；可通过安装 `.potext` 格式插件扩展 Rapid OCR、Paddle OCR、语音合成（TTS）等功能。
*   **外部 HTTP API 调用**：开放本地 HTTP 接口（默认端口 `60828`），允许第三方脚本或软件（如 PopClip、SnipDo）通过网络请求静默触发功能。
*   **学习辅助**：支持将查阅的生词一键同步导出至 Anki、欧路词典等主流单词记忆软件。
*   **便捷安装**：支持通过 Winget (Windows)、Homebrew (macOS, `brew install --cask pot`)、deb/AUR/Flatpak (Linux) 等包管理器快速安装。

**3) 风险与不足**
*   **Wayland 环境限制**：在部分纯 Wayland 桌面环境（如 Hyprland）下，内置全局快捷键和截图功能可能失效，需依赖系统级快捷键、HTTP API 及外部截图工具（如 grim/slurp）来绕过。
*   **Linux 版本功能缺失**：Linux Flatpak 版本目前缺失系统托盘图标。
*   **Windows 运行依赖**：强依赖 WebView2，若系统缺失或禁用该组件会导致启动后无界面，需手动安装或使用内置 WebView2 的修复版。
*   **macOS 权限与拦截**：首次运行可能因“开发者无法验证”被系统拦截（需手动放行或终端解除隔离）；划词翻译功能必须获取系统的“辅助功能”权限才能正常使用。

## 功能与定位

Pot（派了个萌的翻译器）是一款基于 Tauri、JavaScript 和 Rust 开发的跨平台桌面端软件，专注于提供便捷的划词翻译和 OCR（光学字符识别）功能。它通过集成丰富的第三方 API 和本地离线引擎，满足用户在不同桌面操作系统下的多语言翻译、文字提取和生词管理需求。

## 典型使用场景

- **日常外文阅读**：在浏览网页或文档时，通过鼠标选中文字并按下快捷键快速获取翻译结果。
- **图片与不可复制文本处理**：遇到图片、扫描版 PDF 或受保护的网页时，使用截图 OCR 功能提取文字或直接进行截图翻译。
- **外语学习与词汇积累**：将翻译过程中遇到的生词一键导出至 Anki、欧路词典等生词本应用中。
- **效率工具联动**：结合 PopClip (macOS)、SnipDo (Windows) 等效率工具，实现选中文字后的无缝翻译调用。

## 核心功能

- **多种翻译触发方式**：
  - **划词翻译**：选中文字后通过快捷键触发。
  - **输入翻译**：快捷键呼出独立窗口，手动输入文本翻译。
  - **剪切板监听**：开启后，复制任意文字即可自动完成翻译。
- **截图 OCR 与翻译**：框选屏幕区域，自动识别区域内的文字或直接输出翻译结果。
- **多接口并行处理**：支持同时调用多个翻译或 OCR 接口对比结果。
- **外部调用 API**：提供本地 HTTP 接口（默认端口 `60828`），允许其他软件或脚本通过发送网络请求来触发翻译或 OCR 功能。
- **生词本导出**：支持将查阅的单词同步至主流单词记忆软件。

## 特色与差异点

- **全桌面平台支持**：全面兼容 Windows、macOS 和 Linux，并针对 Linux 下的 Wayland 环境（如 KDE、Gnome、Hyprland）提供了适配方案。
- **丰富的接口生态（在线+离线）**：
  - **翻译**：内置 OpenAI、Gemini Pro、DeepL、Google、百度、腾讯等主流在线服务，并支持 Ollama 离线翻译。
  - **OCR**：支持 Windows/macOS/Linux 系统自带的离线 OCR 引擎、Tesseract.js，以及百度、腾讯、Simple LaTeX 等在线识别服务。
- **插件系统**：除了内置接口，用户可通过安装 `.potext` 格式的外部插件，进一步扩展翻译、OCR、语音合成（TTS）和生词本接口（如 Rapid OCR、Paddle OCR、扇贝等）。

## 使用方式概览

- **安装**：
  - Windows：支持通过 Winget 安装或下载 exe 安装包。
  - macOS：支持通过 Homebrew (`brew install --cask pot`) 安装或下载 dmg 文件。
  - Linux：提供 deb 包、AUR 包以及 Flatpak 版本。
- **快捷键与界面**：配置好快捷键后即可在后台运行，通过快捷键或系统托盘图标进行交互。
- **API 调用**：可通过类似 `curl "127.0.0.1:60828/selection_translate"` 的 HTTP GET/POST 请求，在终端或第三方脚本中静默调用软件功能。

## 限制与注意事项

- **Wayland 环境限制**：在部分纯 Wayland 桌面环境（如 Hyprland）下，软件内置的全局快捷键和截图功能可能失效。官方建议通过配置系统级快捷键结合 HTTP API，并调用外部截图工具（如 grim/slurp、Flameshot）来绕过此限制。
- **Linux Flatpak 版本**：该版本目前缺失系统托盘图标。
- **Windows 依赖**：软件运行依赖 WebView2。若系统缺失或禁用了 WebView2，会导致启动后无界面，需手动安装或下载官方提供的内置 WebView2 修复版。
- **macOS 权限**：首次运行可能遇到“开发者无法验证”的系统拦截，需在隐私设置中放行或通过终端命令解除隔离；划词翻译功能需确保软件已获得系统的“辅助功能”权限。

## 链接

- GitHub 仓库：https://github.com/pot-app/pot-desktop
- 官方网站：https://pot-app.com
- Release 下载：https://github.com/pot-app/pot-desktop/releases/tag/3.0.7

## 关联主题

- [[00-元语/ocr]]
- [[00-元语/desktop-client]]
- [[00-元语/tool]]
- [[00-元语/github]]
