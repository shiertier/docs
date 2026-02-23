---
title: "reinstall：服务器系统重装自动化脚本"
发布日期: "2026-02-23"
对象: "GitHub 项目 `bin456789/reinstall`"
项目主页: "https://github.com/bin456789/reinstall"
开源协议: "GNU General Public License v3.0"
主要语言: "Shell"
统计快照: "Stars 10809，Forks 1777，Watchers 39（抓取时间：2026-02-24）"
---

## 摘要

### 1) 一句话总结
`bin456789/reinstall` 是一款专为 VPS 设计的一键系统重装脚本，支持在 Linux 和 Windows 之间进行任意方向的跨平台互刷，具备纯净安全、极低资源占用及智能网络配置等特性。

### 2) 核心要点
* **广泛的系统支持**：支持一键安装 19 种常见 Linux 发行版（自动优化内核）以及各版本 Windows（Vista 至 11）和 Windows Server（2008 至 2025）。
* **跨平台互刷**：支持 `Linux to Linux`、`Linux to Windows`、`Windows to Windows`、`Windows to Linux` 的任意方向重装。
* **纯净与安全**：无自制包，所有资源实时从官方或镜像源获取；Windows 安装使用官方原版 ISO，并自动集成 VirtIO 等公有云驱动。
* **极低资源占用**：专门适配低配服务器，最低仅需 256MB 内存即可完成部分系统的重装。
* **智能网络配置**：自动配置动态/静态 IP，支持纯 IPv6、网关跨子网、IPv4/IPv6 双网卡等复杂网络环境。
* **高级引导与救援**：支持直接写入 DD RAW 镜像，支持引导至 Alpine Live OS（提供 SSH）或 netboot.xyz 以进行数据备份、分区修改或手动救砖。
* **高兼容性**：通过分区表 ID 识别硬盘防误写，支持 BIOS 与 EFI 引导，支持 ARM 架构，并可绕过 Windows 11 硬件限制。
* **灵活的执行与监控**：提供 Linux (Shell) 和 Windows (Batch) 双版本，支持通过参数自定义密码、SSH 端口/公钥等，并可通过 SSH、HTTP 80 端口、VNC 或串行控制台实时查看安装进度。

### 3) 风险与不足
* **数据清空风险**：执行重装或 DD 镜像功能会彻底清除当前系统整个硬盘的全部数据（包含其他分区）。
* **架构限制**：不支持 OpenVZ 和 LXC 架构的虚拟机。
* **硬件场景建议**：虽然理论上支持独立服务器和 PC，但如果具备 IPMI 或 U 盘条件，不建议使用此脚本。
* **Windows 环境运行限制**：在 Windows 下下载脚本前需关闭 Windows Defender 的实时保护（否则会拦截 `certutil`）；Windows 7 / Server 2008 等老旧系统可能因不支持 TLS 1.2 无法自动下载，需手动处理。

## 功能与定位

这是一款专为 VPS（虚拟专用服务器）设计的一键操作系统重装脚本。支持在 Linux 和 Windows 之间进行任意方向的跨平台系统重装，涵盖 19 种常见 Linux 发行版及各版本 Windows 系统。

## 典型使用场景

* **VPS 系统重置与跨平台更换**：在云服务器上快速实现 Linux 与 Windows 系统的互换。
* **低配服务器装机**：为内存或硬盘资源极小的 VPS（如 256MB 内存）重装纯净系统。
* **系统救援与维护**：将服务器引导至内存系统（Live OS）或网络启动环境，进行数据备份、分区修改或手动救砖。

## 核心功能

* **一键安装 Linux**：支持 Ubuntu、Debian、CentOS、Alpine 等 19 种发行版，自动根据机器类型选择优化内核（如 Cloud、HWE 内核）。
* **一键安装 Windows**：支持从官方原版 ISO 安装 Windows（Vista 至 11）及 Windows Server（2008 至 2025），脚本可自动查找 ISO 链接并集成 VirtIO 等公有云驱动。
* **DD RAW 镜像**：支持将 raw 或固定大小的 vhd 镜像（兼容多种压缩格式）直接写入硬盘。
* **引导至 Alpine Live OS**：重启进入纯内存系统，提供 SSH 连接，用于手动维护、DD 或救砖。
* **引导至 netboot.xyz**：提供网络启动环境，便于用户通过 VNC 手动安装其他操作系统。

## 特色与差异点

* **跨平台互刷**：支持 `Linux to Linux`、`Linux to Windows`、`Windows to Windows`、`Windows to Linux` 任意方向重装。
* **纯净与安全**：不含自制包，所有资源实时从官方或镜像源获取；Windows 安装使用官方原版 ISO 而非第三方修改镜像。
* **智能网络配置**：自动设置动态/静态 IP，支持纯 IPv6、网关不在子网范围内、IPv4/IPv6 在不同网卡等复杂网络环境。
* **极低资源占用**：专门适配低配机器，最低仅需 256MB 内存即可重装部分系统，内存占用低于官方 netboot。
* **防呆与兼容性**：全程通过分区表 ID 识别硬盘以防误写；支持 BIOS 与 EFI 引导，支持 ARM 架构服务器；支持绕过 Windows 11 硬件限制。

## 使用方式概览

* 提供 Linux（Shell）和 Windows（Batch）双版本脚本。
* 通过命令行执行重装指令，支持附加参数以自定义密码、SSH 端口、SSH 公钥或配置内网穿透（frpc）。
* 安装过程中，支持通过 SSH、HTTP 80 端口、商家后台 VNC 或串行控制台实时查看安装进度。

## 限制与注意事项

* **数据清空风险**：执行重装或 DD 镜像功能会彻底清除当前系统整个硬盘的全部数据（包含其他分区）。
* **虚拟化限制**：不支持 OpenVZ 和 LXC 架构的虚拟机（建议改用其他专用工具）。
* **硬件环境建议**：理论上支持独立服务器和 PC，但如果具备 IPMI 或 U 盘条件，不建议使用此脚本。
* **Windows 环境运行限制**：在 Windows 下下载脚本前，需关闭 Windows Defender 的实时保护（否则会拦截 `certutil` 下载）；部分老旧系统（如 Windows 7 / Server 2008）可能因不支持 TLS 1.2 等原因无法自动下载，需要手动处理。

## 链接

- https://github.com/bin456789/reinstall
- https://github.com/bin456789/reinstall/blob/main/README.md

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/self-hosting]]
