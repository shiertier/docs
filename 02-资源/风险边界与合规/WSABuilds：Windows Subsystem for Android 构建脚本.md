---
title: "WSABuilds：Windows Subsystem for Android 构建脚本"
发布日期: "2026-02-23"
对象: "GitHub 项目 `MustardChef/WSABuilds`"
项目主页: "https://github.com/MustardChef/WSABuilds"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 16126，Forks 2205，Watchers 151（抓取时间：2026-02-24）"
版本快照: "最新发布 Windows_11_2407.40000.4.0_LTS_7_HOTFIX_1（发布时间：2026-01-04T20:44:52Z）"
---

## 摘要

**1) 一句话总结**
MustardChef/WSABuilds 是一个开源项目，提供预编译的 Windows Subsystem for Android (WSA) 版本，原生集成 Google Play 服务与 Root 权限，并突破官方限制支持在 Windows 10 和 Windows 11 上开箱即用。

**2) 关键要点**
*   **开箱即用**：提供预编译的二进制文件，用户无需配置复杂的编译环境即可直接下载部署。
*   **向下兼容**：突破官方 WSA 仅支持 Windows 11 的限制，提供适用于 Windows 10（x64 架构）的构建版本。
*   **内置 Google 服务**：集成 MindTheGapps，原生支持 Google Play 商店及相关依赖服务。
*   **内置 Root 权限**：提供集成了 Magisk 或 KernelSU 的版本，满足开发者与高级用户的系统级定制需求。
*   **多版本与变体**：维护稳定版与长期支持版（LTS），并提供纯净版（NoGApps）及支持 Magisk Delta 的自定义版本。
*   **硬件要求**：最低需要 8 GB 内存（推荐 16 GB），支持 x86_64 或 arm64 架构处理器。
*   **系统要求**：Windows 11 需 Build 22000.526 或更高；Windows 10 需 22H2 10.0.19045.2311 或更高（旧版需特定补丁）。

**3) 风险与缺口**
*   **系统更新冲突**：近期部分 Windows 更新可能导致 WSA 无法正常安装（建议受影响用户使用 NoGApps 版或回退至 2211/2210 等旧版）。
*   **部署命名限制**：解压后必须将文件夹重命名为 `WSA`，否则会导致子系统无法启动。
*   **第三方系统兼容性**：在定制或精简版 Windows 系统（如 ReviOS、Tiny 10/11、Ghost Spectre）上运行可能会遇到兼容性问题。
*   **已知 Bug**：在某些特定版本（如 v2307）中，安装的 Magisk 模块可能会在系统重启后消失。
*   **低内存风险**：极不推荐在 4-6 GB 内存的设备上运行该子系统。

## 功能与定位

MustardChef/WSABuilds 是一个开源项目，提供预编译的 Windows Subsystem for Android (WSA) 二进制文件。该项目旨在让用户能够在 Windows 10 和 Windows 11 操作系统上轻松运行 Android 子系统，并原生集成了 Google Play 商店以及 Root 权限解决方案。

## 典型使用场景

- 需要在 Windows 10 或 Windows 11 电脑上运行 Android 应用程序的用户。
- 依赖 Google Play 服务（GApps）来下载和运行特定 Android 应用的场景。
- 需要在 Windows 的 Android 子系统中使用高级权限（如 Magisk 或 KernelSU）进行系统级定制或调试的开发者与高级用户。

## 核心功能

- **多系统与架构支持**：提供适用于 Windows 11（x64 和 arm64 架构）以及 Windows 10（x64 架构）的构建版本。
- **内置 Google 服务**：集成 MindTheGapps，原生支持 Google Play 商店及相关服务。
- **内置 Root 解决方案**：提供集成了 Magisk 或 KernelSU 的版本供用户选择。
- **多版本分支**：维护“稳定版（Stable Builds）”和“长期支持版（LTS Releases / Pre-Release Builds）”，以满足不同稳定性需求。

## 特色与差异点

- **开箱即用**：用户无需自行配置复杂的编译环境，直接下载预编译的压缩包即可部署。
- **向下兼容 Windows 10**：突破了官方 WSA 仅限 Windows 11 的限制，使 Windows 10 用户也能运行 Android 子系统。
- **灵活的变体选择**：除了包含 GApps 的标准版本外，还提供不包含 Google 服务的纯净版（文件名包含 `NoGApps`）以及支持 Magisk Delta 的自定义版本。

## 使用方式概览

- 建议先阅读 README 与官方文档，再按最小示例验证。

## 限制与注意事项

- **系统更新冲突**：近期的部分 Windows 更新可能会导致 WSA 无法正常安装。受影响的用户建议使用不含 GApps 的版本（`NoGApps`）或回退到较旧的 WSA 构建版本（如 2211/2210）。
- **文件夹命名要求**：解压后、安装 WSA 之前，必须将自动生成的长文件夹名称重命名为 `WSA`，否则可能导致子系统无法启动。
- **精简版系统兼容性**：在定制或经过修改的 Windows 系统（如 ReviOS、Tiny 10/11、Ghost Spectre 等）上运行 WSA 可能会遇到兼容性问题。
- **硬件要求**：
  - **内存**：最低需要 8 GB RAM，推荐 16 GB（4-6 GB 极不推荐）。
  - **处理器**：支持 x86_64 或 arm64 架构。Windows 11 建议满足官方基础要求（如 Core i3 8代、Ryzen 3000、Snapdragon 8c 或更高）。
- **系统版本要求**：
  - Windows 11：需 Build 22000.526 或更高版本。
  - Windows 10：需 22H2 10.0.19045.2311 或更高版本（旧版 20H1 需安装特定的 KB 补丁才能运行）。
- **已知 Bug**：在某些版本（如 v2307）中，安装的 Magisk 模块可能会在重启后消失。
- 合规边界：本仓库仅做项目信息归档，不复述可操作细节、命令、脚本片段或下载镜像直链。

## 链接

- GitHub 仓库：https://github.com/MustardChef/WSABuilds

## 关联主题

- [[00-元语/windows]]
- [[00-元语/github]]
- [[00-元语/risk]]
- [[00-元语/tool]]
