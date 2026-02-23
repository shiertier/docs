---
title: qBittorrent Enhanced Edition：BT 客户端增强分支项目
来源: GitHub 仓库
项目主页: https://github.com/c0re100/qBittorrent-Enhanced-Edition
上游项目: https://www.qbittorrent.org
许可证: GPLv2+ / GPLv3+（含 OpenSSL 链接例外）
最近可见版本: release-5.1.3.10
最近提交日期: 2025-11-15
---

## 摘要

qBittorrent Enhanced Edition 是基于 qBittorrent 的 BT 客户端增强分支，重点提供自动封禁特定吸血客户端、节点黑白名单与连接治理能力，面向公共 BT 场景下的下载与上传秩序管理。

该项目同时强调私有 Tracker 使用边界：若站点未明确允许，使用该客户端可能导致账号封禁；项目维护者也明确不提供伪装客户端标识以规避规则。

## 功能与定位

qBittorrent Enhanced Edition 以原版 qBittorrent 为基础，延续其跨平台与 WebUI 等能力，并在此之上增加针对特定客户端类型的自动拦截与节点策略控制。

从仓库说明看，它主要定位为“公共 BT 网络中的增强治理分支”，而非独立协议或下载生态。

## 典型使用场景

- 在公共 BT 网络中降低吸血客户端对上传带宽的占用。
- 通过节点黑白名单进行连接策略控制。
- 在同一设备上区分不同用途的下载环境（例如将公共与私有场景分离）。

## 特色与差异点

- 提供针对特定客户端类别的自动封禁机制。
- 提供可选的附加拦截策略（默认关闭）。
- 文档明确说明私有种子默认不应用相关过滤逻辑。
- 向 Tracker 汇报时使用独立客户端标识，便于站点识别与管理。

## 使用方式概览

项目提供多平台分发入口，包括发布页构建产物与主流系统的软件分发渠道（如 AUR、PPA、Homebrew、Winget 等），并持续跟随上游版本演进。

具体安装与实例配置细节以仓库 README、NOTE 与发布页为准。

## 限制与注意事项

- 未获私有 Tracker 明确许可时，不应在该类站点使用本客户端。
- 该项目存在明显的站点规则与合规边界，使用前应先核对目标站点客户端白名单政策。
- 安全漏洞应按仓库安全政策通过私有通道提交，不应在公开 Issue 披露。
- 本仓库不复述可操作细节。
- 本仓库仅记录项目定位与风险边界，不复述可操作细节（命令、配置、下载直链、规避步骤）。

## 链接

- 项目主页：https://github.com/c0re100/qBittorrent-Enhanced-Edition
- 重要说明（用户与站点运营者）：https://github.com/c0re100/qBittorrent-Enhanced-Edition/blob/master/NOTE.md
- 版本记录（仓库 Changelog）：https://github.com/c0re100/qBittorrent-Enhanced-Edition/blob/master/Changelog
- 安全政策：https://github.com/c0re100/qBittorrent-Enhanced-Edition/blob/master/SECURITY.md
- 上游项目官网：https://www.qbittorrent.org
