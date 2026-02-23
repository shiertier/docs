---
title: posting：终端 API 调试客户端
对象: GitHub 项目
项目主页: https://github.com/darrenburns/posting
官网: https://posting.sh
开源协议: Apache-2.0
主要语言: Python
当前版本: 2.9.2
版本依据: docs/CHANGELOG.md（2.9.2，2025-10-14）
来源:
  - https://github.com/darrenburns/posting
  - https://posting.sh
  - https://github.com/darrenburns/posting/blob/main/README.md
---

## 摘要

posting 是一款运行在终端中的现代 API 调试客户端，定位接近 Postman/Insomnia，但强调键盘优先工作流、SSH 场景可用性，以及将请求以本地 YAML 文件管理。它支持环境变量、脚本扩展、cURL/OpenAPI/Postman 导入与 cURL 导出，适合需要将 API 调试资产纳入版本控制的开发团队。

## 功能与定位

posting 是基于 TUI（终端用户界面）的 HTTP 客户端，主要面向开发者进行 API 调试、请求组织和响应查看。相较于图形化客户端，它重点强化了终端内的高效交互与可脚本化能力。

## 典型使用场景

- 在 SSH 远程环境或无桌面环境中调试 HTTP API。
- 将请求集合作为工程资产管理，纳入 Git 版本控制。
- 通过 `.env` 与脚本机制处理多环境变量、鉴权令牌和重复请求逻辑。
- 使用键盘快捷键快速切换请求编辑、发送和响应分析流程。

## 特色与差异点

- 键盘优先：内置 Jump mode 与命令面板，支持 Vim 风格操作。
- 本地可读存储：请求以 `.posting.yaml` 形式落盘，便于审阅与协作。
- 脚本扩展：支持 Setup / Pre-request / Post-response 三阶段 Python 脚本。
- 导入导出能力：支持从 cURL、OpenAPI、Postman 导入，并可导出为 cURL。
- 终端生态友好：可配合 `$EDITOR`、`$PAGER` 等外部工具查看与处理内容。

## 使用方式概览

- 推荐通过 `uv` 或 `pipx` 安装；项目要求 Python 3.11 及以上。
- 默认执行 `posting` 启动，或使用 `--collection` 指定请求集合目录。
- 通过 `--env` 加载一个或多个环境文件；未指定时会自动加载当前目录 `posting.env`（若存在）。
- 在请求生命周期中按需挂载脚本，实现变量注入、请求修改或响应提取。

## 限制与注意事项

- 官方文档明确不建议用 `pip` 直接安装。
- 官方说明当前不支持 Homebrew 与 NixOS 安装路径。
- cURL/OpenAPI/Postman 导入在文档中标注为实验性能力，生产使用前建议先做兼容性验证。
- 脚本与应用运行在同一进程环境中，需控制脚本副作用并避免破坏性全局操作。

## 链接

- 仓库主页：https://github.com/darrenburns/posting
- 官方文档入口：https://posting.sh
- README：https://github.com/darrenburns/posting/blob/main/README.md
- 变更记录：https://github.com/darrenburns/posting/blob/main/docs/CHANGELOG.md
- 路线图：https://github.com/darrenburns/posting/blob/main/docs/roadmap.md

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
