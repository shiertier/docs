---
title: "tiny11builder：精简版 Windows 镜像构建脚本"
发布日期: "2026-02-23"
对象: "GitHub 项目 `ntdevlabs/tiny11builder`"
项目主页: "https://github.com/ntdevlabs/tiny11builder"
开源协议: "未声明"
主要语言: "PowerShell"
统计快照: "Stars 17885，Forks 1386，Watchers 155（抓取时间：2026-02-24）"
版本快照: "最新发布 06-09-25（发布时间：2025-09-05T21:42:04Z）"
---

## 摘要

**1) 一句话总结**
tiny11builder 是一个基于 PowerShell 的开源脚本工具，用于自动化移除 Windows 11 官方镜像中的冗余组件，从而生成体积更小、可定制且支持绕过微软账户登录的精简版系统安装包。

**2) 核心要点**
* **全版本兼容**：支持任意 Windows 11 版本、语言及架构（包含 arm64）。
* **双版本脚本**：提供保留系统更新与维护能力的“标准版（tiny11maker.ps1）”，以及极致精简但牺牲更新能力的“核心版（tiny11coremaker.ps1）”。
* **体积压缩**：利用 DISM 的恢复压缩技术（recovery compression）大幅减小最终生成的 ISO 文件体积。
* **OOBE 绕过与静默部署**：内置无人值守应答文件，可绕过开机向导阶段的微软账户强制登录要求，并默认使用 `/compact` 标志部署。
* **无第三方依赖**：除使用来自 Windows ADK 的 `oscdimg.exe` 打包可引导 ISO 外，不包含其他第三方外部工具。
* **隐私与广告控制**：脚本内置了禁用系统遥测及抑制部分系统广告的功能。
* **操作流程**：挂载官方 ISO 后，在 PowerShell 5.1 中以管理员身份放行执行策略并运行脚本，指定盘符和 SKU 即可自动生成 `tiny11.iso`。

**3) 风险与不足**
* **核心版（Core）不可逆**：核心版移除了 WinSxS 和 WinRE，无法在安装后添加语言、更新或新功能，强行启用 Windows Update 会导致系统故障。
* **组件残留与反弹**：移除 Edge 浏览器后系统设置中仍可能有残留选项；Outlook 和 Dev Home 等应用在一段时间后可能会被系统自动重新安装。
* **应用商店依赖限制**：在使用 Microsoft Store 安装应用前，可能需要先手动更新 Winget。
* **ARM64 架构报错**：在 arm64 架构上运行脚本时，由于缺少 `OneDriveSetup.exe` 会出现一闪而过的报错（通常不影响整体构建流程）。

## 功能与定位

tiny11builder 是一个基于 PowerShell 的开源脚本工具，用于自动化构建精简版的 Windows 11 镜像（类似 tiny10）。它能够移除系统中的冗余应用和组件，生成体积更小的定制化系统安装包，同时允许用户根据需求自由修改脚本内容。

## 典型使用场景

* **日常轻量化使用**：通过标准脚本移除预装的无用软件（Bloatware），同时保留系统的可维护性（如系统更新、语言包安装）。
* **开发测试与虚拟机环境**：通过核心版脚本（Core）生成极致精简的镜像，用于快速部署测试环境或虚拟机（牺牲了后续更新和维护能力）。

## 核心功能

* **全版本兼容**：支持任意 Windows 11 版本、语言及架构（包括 arm64）。
* **体积压缩**：利用 DISM 的恢复压缩技术（recovery compression）大幅减小最终生成的 ISO 文件体积。
* **OOBE 绕过与静默部署**：内置无人值守应答文件，可绕过开机向导（OOBE）阶段的微软账户强制登录要求，并默认使用 `/compact` 标志部署镜像。
* **内置引导生成工具**：仅包含来自 Windows ADK 的 `oscdimg.exe`，用于将处理后的文件打包为可引导的 ISO 镜像，无其他第三方外部工具。
* **隐私与广告控制**：脚本已实现禁用系统遥测，并包含部分广告抑制功能。

## 特色与差异点

项目提供两个不同级别的精简脚本，以满足不同需求：
* **tiny11maker.ps1（标准版）**：移除大量预装应用（如 Edge、OneDrive、Xbox、天气、邮件、地图等），但保留系统服务能力，支持后续添加语言、功能和系统更新。推荐日常使用。
* **tiny11coremaker.ps1（核心版）**：在标准版基础上进一步移除 Windows 组件库（WinSxS）和 Windows 恢复环境（WinRE），并禁用 Windows Defender 和 Windows Update。**注意：该版本不可维护，无法在安装后添加语言、更新或新功能。**

## 使用方式概览

1. 从微软官网或 Rufus 下载官方 Windows 11 ISO 镜像并挂载。
2. 以管理员身份运行 PowerShell 5.1，并临时放行执行策略（`Set-ExecutionPolicy Bypass -Scope Process`）。
3. 执行对应的精简脚本，指定 ISO 挂载盘符和暂存盘符。
4. 选择目标 SKU，等待脚本自动处理并在同目录下生成 `tiny11.iso` 文件。

## 限制与注意事项

* **核心版（Core）不可逆**：使用核心版脚本生成的系统无法恢复被移除的组件，强行启用 Windows Update 会导致系统故障。
* **残留与反弹问题**：尽管移除了 Edge 浏览器，系统设置中可能仍有残留选项；Outlook 和 Dev Home 等应用在一段时间后可能会被系统自动重新安装（最新脚本已尝试加强拦截）。
* **应用商店依赖**：在使用 Microsoft Store 安装应用前，可能需要先更新 Winget。
* **ARM64 报错**：在 arm64 架构上运行脚本时可能会出现一闪而过的报错，这是由于 arm64 镜像的 System32 文件夹中缺少 `OneDriveSetup.exe` 所致，通常不影响整体流程。
- 合规边界：本仓库仅做项目信息归档，不复述可操作细节、命令、脚本片段或下载镜像直链。

## 链接

- GitHub 仓库: https://github.com/ntdevlabs/tiny11builder
- Windows 11 官方下载: https://www.microsoft.com/software-download/windows11
- Rufus: https://github.com/pbatard/rufus

## 关联主题

- [[00-元语/windows]]
- [[00-元语/risk]]
- [[00-元语/github]]
- [[00-元语/tool]]
