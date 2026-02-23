---
title: "gopeed：现代化全平台下载管理器"
对象: "GitHub 项目"
项目主页: "https://github.com/GopeedLab/gopeed"
Stars快照: "3672"
官方网站: "https://gopeed.com"
主要语言: "Go"
开源协议: "GPL-3.0"
---

## 摘要

### 一句话总结
Gopeed 是一款基于 Golang 和 Flutter 构建的现代化、全平台高速下载管理器，原生支持多协议并具备高度的可扩展性。

### 核心要点
*   **技术架构**：采用前后端分离架构，后端基于 Golang，前端基于 Flutter，两者通过 HTTP 协议（Unix socket 或 TCP）进行通信。
*   **多协议支持**：原生支持 HTTP、BitTorrent（BT）和 Magnet（磁力链接）下载协议。
*   **全平台覆盖**：提供针对 Windows、macOS、Linux、Android、iOS、Web 端以及 Docker 和 Qnap 等 NAS 设备的独立版本，并提供丰富的安装包格式（如 EXE、DMG、APK、Flathub 等）。
*   **高度可扩展**：除基础下载功能外，支持通过集成开发者 API 或安装/开发扩展（Extensions）来实现定制化功能。
*   **生态工具**：提供配套的浏览器插件（可接管 Chrome、Edge、Firefox 等主流浏览器的下载任务）以及基于命令行的下载管理工具。
*   **部署与编译**：支持客户端直装、`go install` 命令行安装和 Docker 容器化部署；源码编译需配置 Golang (1.24+)、Flutter (3.38+) 及 CGO 环境。
*   **开源与社区**：项目采用 GPL-3.0 开源协议，在 GitHub 上拥有超过 22,700 个 Stars 和 1,500 个 Forks。

## 功能与定位

Gopeed（全称 Go Speed）是一款由 Golang 和 Flutter 构建的现代化、高速下载管理器。它定位为一款全平台覆盖的下载工具，不仅提供基础的下载功能，还具备高度的可定制性，允许用户通过扩展和 API 进一步丰富其能力。

## 典型使用场景

*   **日常文件下载**：处理常规的 HTTP 链接或 P2P（BT/磁力）下载任务。
*   **跨设备下载管理**：在桌面端、移动端、NAS 设备或 Web 环境中统一管理下载任务。
*   **浏览器下载接管**：替代浏览器原生下载器，实现更高效的下载管理。
*   **开发者集成**：通过 API 或命令行工具将下载功能集成到其他工作流或系统中。

## 核心功能

*   **多协议支持**：原生支持 HTTP、BitTorrent 和 Magnet（磁力链接）协议。
*   **全平台覆盖**：提供针对 Windows、macOS、Linux、Android、iOS、Docker、Qnap 以及 Web 端的独立运行版本。
*   **浏览器扩展**：提供配套的浏览器插件，可接管 Chrome、Edge、Firefox 等主流浏览器的下载任务。
*   **命令行工具**：提供基于命令行的下载管理工具。

## 特色与差异点

*   **高度可扩展**：除了基础下载功能，Gopeed 支持通过集成 API 或安装/开发扩展（Extensions）来实现更多定制化功能。
*   **前后端分离架构**：项目前端采用 Flutter，后端采用 Golang。两者通过 HTTP 协议进行通信（在 Unix 系统上使用 Unix socket，在 Windows 系统上使用 TCP 协议）。
*   **广泛的包管理与分发支持**：针对不同操作系统提供了丰富的安装格式（如 Windows 的 Portable/EXE，macOS 的 DMG，Linux 的 Flathub/SNAP/DEB/AppImage，移动端的 APK/IPA 等）。

## 使用方式概览

*   **客户端安装**：用户可根据自身操作系统，从官方获取对应的安装包（如 EXE、DMG、APK 等）直接安装使用。
*   **命令行安装**：支持通过 `go install` 命令快速安装命令行工具。
*   **容器化部署**：提供 Docker 镜像，支持在服务器或 NAS 环境中快速部署。
*   **源码编译**：开发者在配置好 Golang (1.24+) 和 Flutter (3.38+) 环境及 CGO 环境后，可克隆仓库自行编译桌面端、移动端或 Web 端应用。

## 链接

- 仓库：https://github.com/GopeedLab/gopeed
- 官网：https://gopeed.com

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
