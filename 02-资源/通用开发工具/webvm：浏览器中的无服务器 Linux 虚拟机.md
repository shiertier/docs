---
title: "webvm：浏览器中的无服务器 Linux 虚拟机"
对象: "GitHub 项目"
项目主页: "https://github.com/leaningtech/webvm"
Stars快照: "3667"
官方网站: "https://webvm.io"
主要语言: "JavaScript"
开源协议: "Apache-2.0"
---

## 摘要

**1) 一句话总结**
WebVM 是一个完全在浏览器端运行的无服务器 Linux 虚拟机，基于 WebAssembly 技术提供 x86 虚拟化，支持在客户端沙箱中直接运行未经修改的操作系统、图形界面及完整网络栈。

**2) 核心要点**
*   **纯客户端运行**：无需后端服务器提供计算资源，所有计算均在用户浏览器的安全沙箱中本地完成。
*   **x86 与 Linux 模拟**：由 CheerpX 引擎驱动，内置 x86 到 WebAssembly 的 JIT 编译器、虚拟块级文件系统及 Linux 系统调用模拟器。
*   **多环境支持**：支持运行未经修改的 Debian 发行版及原生工具链，并提供基于 Alpine Linux、Xorg 和 i3 窗口管理器的图形化桌面环境。
*   **突破网络限制**：通过集成 Tailscale（利用 WebSockets 作为传输层）实现完整的网络栈，支持连接私有局域网、通过出口节点访问公网及接入 Headscale。
*   **AI 辅助集成**：内置 Claude AI 面板，用户可输入本地 API Key 让 AI 协助处理终端任务（密钥仅存本地，不上传服务器）。
*   **高度可定制**：支持通过修改 Dockerfile 从头构建自定义系统镜像（如构建 Python3 REPL 等 Web 终端环境）。
*   **便捷部署**：支持不可变构建，可通过 GitHub Actions 工作流实现自动化构建，并一键部署至 GitHub Pages。
*   **项目热度**：在 GitHub 上拥有超 1.6 万 Stars，自身代码基于 Apache-2.0 协议开源。

**3) 风险与局限**
*   **网络命令受限**：受现代浏览器底层限制，无法使用 `ping` 等依赖内核级特性的网络命令（官方建议改用 `curl` 或 `wget` 进行测试）。
*   **底层引擎商业授权限制**：其核心依赖的 CheerpX 引擎仅对个人技术探索和测试免费，任何组织（含非营利、学术及公共部门）使用或下载构建版本用于第三方托管，均需额外获取商业授权。

## 功能与定位

WebVM 是一个完全在浏览器端运行的无服务器（server-less）虚拟环境。它基于 HTML5 和 WebAssembly 技术，提供与 Linux ABI 兼容的执行环境，能够在客户端安全沙箱中直接运行未经修改的 Debian 发行版及原生开发工具链。

## 典型使用场景

*   在浏览器中进行 x86 二进制程序的安全沙箱执行、技术探索与测试。
*   快速构建并分发自定义的 Web 终端环境（如 Python3 REPL）。
*   通过浏览器直接接入和访问 Tailscale 虚拟局域网中的设备。

## 核心功能

*   **x86 虚拟化与 Linux 模拟**：由 CheerpX 虚拟化引擎驱动，内置 x86 到 WebAssembly 的 JIT 编译器、虚拟块级文件系统以及 Linux 系统调用模拟器。
*   **图形界面支持**：除了命令行终端，还提供基于 Alpine Linux、Xorg 和 i3 窗口管理器的图形化桌面环境。
*   **完整的网络栈**：通过集成 Tailscale（利用 WebSockets 作为传输层）突破了浏览器无法直接调用 TCP/UDP API 的限制。支持连接私有 Tailscale 网络、通过出口节点（Exit Node）访问公网，以及接入自托管的 Headscale 网络。
*   **AI 辅助集成**：内置 Claude AI 交互面板，用户输入自己的 API Key 后，可直接在界面中让 AI 协助完成终端任务（如解答 CTF 挑战）。

## 特色与差异点

*   **纯客户端执行**：无需后端服务器提供计算资源，所有计算均在用户的浏览器本地完成。
*   **不可变构建**：每次构建的依赖包版本固定，确保当前可用的版本在未来永久可用。
*   **高度可定制与易部署**：支持通过修改 Dockerfile 从头构建自定义系统镜像，并可通过 GitHub Actions 工作流一键部署到 GitHub Pages。

## 使用方式概览

*   **在线体验**：直接访问官方网站使用默认的 Debian 终端或 Alpine 图形环境。
*   **Fork 与云端部署**：Fork 官方仓库，修改 Dockerfile（如 `debian_mini`），利用 GitHub Actions 自动构建并发布至 GitHub Pages。
*   **本地运行**：克隆仓库，下载或构建自定义的 Ext2 磁盘镜像，通过配置 Nginx 本地服务并在浏览器中访问。

## 限制与注意事项

*   **网络命令限制**：由于现代浏览器的底层限制，部分依赖内核级特性的网络命令（如 `ping`）无法使用，官方建议使用 `curl` 或 `wget` 进行网络测试。
*   **商业授权限制**：WebVM 自身基于 Apache-2.0 开源，但其核心依赖的 CheerpX 引擎仅对个人的技术探索和测试免费。任何组织（包括非营利组织、学术界和公共部门）使用，或下载 CheerpX 构建版本用于第三方托管，均需获取商业授权。
*   **AI 隐私安全**：Claude API Key 仅存储在浏览器本地，不会被上传至服务器。

## 链接

- 仓库：https://github.com/leaningtech/webvm
- 官网：https://webvm.io

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
