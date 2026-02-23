---
title: "fnm：Node.js 版本管理工具"
对象: "GitHub 仓库"
项目主页: "https://github.com/Schniz/fnm"
官网: "https://fnm.vercel.app"
开源协议: "GPL-3.0"
主要语言: "Rust"
来源:
  - "https://github.com/Schniz/fnm"
  - "https://github.com/Schniz/fnm/blob/master/README.md"
  - "https://github.com/Schniz/fnm/blob/master/docs/commands.md"
  - "https://github.com/Schniz/fnm/blob/master/docs/configuration.md"
  - "https://github.com/Schniz/fnm/blob/master/CHANGELOG.md"
  - "https://github.com/Schniz/fnm/releases"
---

## 摘要

fnm 是一个基于 Rust 构建的跨平台 Node.js 版本管理器，以低开销提供多版本安装与切换能力。它支持按目录自动切换（`--use-on-cd`）、读取 `.node-version`/`.nvmrc`，并在较新版本中默认解析 `package.json` 的 `engines.node`。项目覆盖 macOS、Linux、Windows 及多种 Shell，适合多项目并行开发中的 Node 版本治理。

## 功能与定位

fnm（Fast Node Manager）定位为“快速、简单”的 Node.js 版本管理工具，核心目标是降低多版本 Node 环境的切换成本，并保持较快的启动和执行体验。

## 典型使用场景

- 一台开发机同时维护多个 Node.js 项目，需要频繁切换运行时版本。
- 团队希望统一 `.node-version` 或 `.nvmrc` 约定，减少“本地能跑、线上报错”的版本不一致问题。
- 在 monorepo 或多层目录项目中，通过递归策略自动发现上级版本文件。
- 在 Windows 与 Unix 混合环境中使用同一套 Node 版本管理工具。

## 核心功能

- 版本生命周期管理：安装、卸载、查看本地版本、查看远程版本。
- 版本切换与默认版本管理：支持临时切换、设置默认版本、别名映射。
- 自动切换：可在 `cd` 进入目录时按版本文件自动切换 Node 版本。
- 版本解析扩展：支持解析 `package.json` 的 `engines.node`，补足无 `.nvmrc`/`.node-version` 的项目。
- Shell 集成与补全：支持 Bash、Zsh、Fish、PowerShell 的初始化与补全。
- 下载与架构相关配置：支持自定义 Node 分发镜像及架构覆盖参数。

## 特色与差异点

- 使用 Rust 实现，强调轻量和启动速度。
- 单文件分发思路，安装与迁移成本较低。
- 跨平台覆盖较完整，包含常见 Windows 使用路径。
- 配置层面提供递归查找、自动切换、Corepack 集成等能力。
- 根据仓库 `CHANGELOG` 与 Releases 页面，材料中可见的最新版本为 `v1.38.1`。

## 使用方式概览

- 通过包管理器安装：macOS/Linux 常见 Homebrew，Windows 常见 Winget、Scoop、Chocolatey。
- 安装后在 Shell 配置中接入 `fnm env` 输出，以启用环境注入。
- 在项目目录放置 `.node-version` 或 `.nvmrc`，配合 `--use-on-cd` 获得自动切换体验。
- 需要增强规则时，可追加版本文件查找策略与 `engines.node` 解析相关参数。

## 限制与注意事项

- macOS 场景下，README 明确更推荐使用 Homebrew；脚本安装路径有弃用提示。
- Windows CMD 支持可用但配置相对繁琐，需按文档设置启动脚本避免循环调用。
- `--corepack-enabled` 在文档中标注为实验性能力，启用前应先评估团队兼容性。
- 本条目仅整理功能定位与使用边界，具体参数与行为以官方文档和仓库最新发布说明为准。

## 链接

- 仓库主页：https://github.com/Schniz/fnm
- 官网：https://fnm.vercel.app
- 使用命令文档：https://github.com/Schniz/fnm/blob/master/docs/commands.md
- 配置文档：https://github.com/Schniz/fnm/blob/master/docs/configuration.md
- 变更记录：https://github.com/Schniz/fnm/blob/master/CHANGELOG.md
- 版本发布页：https://github.com/Schniz/fnm/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
