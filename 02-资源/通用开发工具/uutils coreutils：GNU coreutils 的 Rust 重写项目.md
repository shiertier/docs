---
title: uutils coreutils：GNU coreutils 的 Rust 重写项目
对象: GitHub 仓库
项目主页: https://github.com/uutils/coreutils
官方文档: https://uutils.github.io/coreutils/docs/
许可证: MIT
最新稳定版: 0.6.0
最新稳定版链接: https://github.com/uutils/coreutils/releases/tag/0.6.0
---

## 摘要

uutils coreutils 是一个基于 Rust 重写的跨平台 GNU 核心工具集替代方案，目标是作为 GNU 工具的直接替代实现。

项目强调 Linux、macOS、Windows 的一致行为，提升内存安全与错误处理，并在 `printf`、`seq`、`sort` 等工具中提供任意精度十进制处理能力。截至 0.6.0 版本，其 GNU 测试套件兼容性达到 96.28%。

## 功能与定位

uutils coreutils 是 GNU coreutils 的 Rust 重写项目，定位为可直接替代的跨平台命令行工具集。项目将与 GNU 行为不一致的问题视为缺陷，核心目标是尽可能保持输出与返回码一致，并让同一套脚本在多系统中更易迁移。

## 典型使用场景

- 在 Linux、macOS、Windows 之间共享命令行脚本，降低环境差异带来的维护成本。
- 在关注内存安全的环境中替换部分或全部系统基础命令工具。
- 使用多合一二进制分发方式，在容器或受限环境中统一部署工具集。

## 核心功能

- 提供 GNU coreutils 主要命令的 Rust 实现，覆盖 `ls`、`cp`、`mv`、`rm`、`date`、`sort` 等常见工具。
- 支持多合一 `coreutils` 二进制调用模式，也支持按工具拆分构建。
- 提供 `uucore` 共享库能力，支撑多工具复用底层实现。
- 提供 UTF-8 与本地化支持，文档中包含基于 ICU 的时间与排序相关能力说明。

## 特色与差异点

- 使用 Rust 实现并持续减少不安全代码，强调稳健性与可维护性。
- 在部分数值处理路径使用任意精度十进制，减少跨架构浮点差异导致的行为偏差。
- 在兼容目标下保留部分扩展能力，例如 `cp`、`mv`、`rm` 的进度显示，以及 `env` 的 `.env` 文件读取支持。
- 官方 release notes 显示 0.6.0 版本达到 96.28% GNU 测试兼容性，并集中改进了安全性、本地化和性能。

## 使用方式概览

- 可通过多个生态安装渠道获取，包括 Cargo、Homebrew、Winget、Scoop 及多种 Linux 发行版包管理器。
- 可按平台特性或按需工具集进行构建与裁剪，适合从本地开发到发行打包的不同流程。

## 限制与注意事项

- 项目虽以 GNU 行为一致为目标，但部分选项与边界行为仍可能存在差异。
- 文档明确提到某些能力在极端输入或跨架构场景仍有已知限制，使用时应结合目标平台验证。
- 本文只保留可验证的项目定位、能力与边界信息，不复述高风险或不当用途的可操作细节。

## 链接

- 仓库主页：https://github.com/uutils/coreutils
- 官方文档：https://uutils.github.io/coreutils/docs/
- Crates 页面：https://crates.io/crates/coreutils
- 最新稳定版发布页：https://github.com/uutils/coreutils/releases/tag/0.6.0
- Release 列表：https://github.com/uutils/coreutils/releases
