---
title: "code2prompt：代码库转 LLM 提示词工具"
对象: "GitHub 项目"
项目主页: "https://github.com/mufeedvh/code2prompt"
Stars快照: "3709"
官方网站: "https://code2prompt.dev"
主要语言: "Rust"
开源协议: "MIT"
---

## 摘要

**1) 一句话总结**
code2prompt 是一个基于 Rust 开发的开源工具，旨在将整个代码库高效提取并格式化为适用于大语言模型（LLM）的单一提示词，支持 CLI、Python SDK 和 MCP 服务集成。

**2) 核心要点**
* **底层技术与协议**：核心基于 Rust 构建，具备极高的运行性能和极低的资源占用，采用 MIT 开源协议。
* **多形态生态系统**：提供 Rust 核心库、面向用户的 CLI 工具（含交互式终端界面 TUI）、Python SDK（`code2prompt-rs`）以及 MCP（Model Context Protocol）服务器。
* **智能过滤与解析**：严格遵守 `.gitignore` 规则，支持 glob 模式包含/排除文件，并能智能读取和简化 CSV、Notebooks、JSONL 等特殊文件格式。
* **灵活的模板定制**：内置 Handlebars 模板系统，允许用户针对不同场景自定义提示词结构。
* **Git 深度集成**：支持在生成的提示词中直接嵌入 Git 差异（diffs）、提交日志（logs）及分支比较信息。
* **上下文控制**：内置 Token 计数与追踪功能，并在输出内容中自动生成项目的源代码树状结构。
* **便捷输出与安装**：支持一键复制到系统剪贴板或导出为文件；可通过 Cargo、Homebrew、pip 安装，或直接下载预编译二进制文件。

**3) 风险与限制**
* 在基于 Wayland 的 Linux 系统上，若需启用剪贴板集成支持，使用 Cargo 安装时必须显式添加 `wayland` 特性标志（`--features wayland`）。
* 若选择通过源码编译安装，系统必须预先安装 Git、Rust 和 Cargo。

## 功能与定位

code2prompt 是一个强大的上下文工程工具，旨在将整个代码库提取并格式化为适用于大型语言模型（LLM）的单一提示词。它能够自动处理文件遍历和代码格式化，大幅简化为 AI 模型准备代码上下文的繁琐流程。

## 典型使用场景

* **手动对话准备**：为 ChatGPT 等 LLM 手动提取并复制整个项目或特定目录的代码上下文。
* **AI 代理开发**：通过 Python SDK 为 AI 代理（AI Agents）、自动化脚本或 RAG 管道提供快速的代码库上下文读取能力。
* **MCP 服务集成**：作为本地 MCP（Model Context Protocol）服务器运行，使代理应用程序能够高效读取本地代码库，避免上下文窗口膨胀。

## 核心功能

* **多形态生态系统**：提供底层 Rust 核心库、面向用户的 CLI 工具（含交互式终端界面 TUI）、Python SDK 以及 MCP 服务器。
* **智能过滤与读取**：支持使用 glob 模式包含或排除特定文件，严格遵守 `.gitignore` 规则；能够智能读取并简化 CSV、Notebooks、JSONL 等多种文件格式。
* **灵活的模板系统**：支持使用 Handlebars 模板，针对不同的使用用例自定义提示词结构。
* **Git 集成**：可在生成的提示词中直接包含 Git 差异（diffs）、提交日志（logs）以及分支比较信息。
* **Token 追踪**：内置 Token 计数与追踪功能，帮助用户将内容控制在 LLM 的上下文限制范围内。
* **源码树生成**：在输出的提示词中自动包含项目的源代码树状结构。

## 特色与差异点

* **极速性能**：核心基于 Rust 构建，具备安全的文件遍历能力、极高的运行性能和极低的资源占用。
* **全方位生态**：不仅提供基础的命令行工具，还通过 Python 绑定和 MCP 服务器深入整合到现代 AI 开发工作流中。
* **开箱即用**：支持一键将生成的提示词输出到系统剪贴板或保存为指定文件。

## 使用方式概览

**安装方式**：
* 通过 Cargo 安装：`cargo install code2prompt`
* 通过 Homebrew 安装：`brew install code2prompt`
* 安装 Python SDK：`pip install code2prompt-rs`
* 此外还支持直接下载预编译的二进制文件或通过源码编译安装。

**基础命令**：
* 生成当前目录的提示词并复制到剪贴板：`code2prompt .`
* 生成指定路径的提示词并保存到文件：`code2prompt path/to/project --output prompt.txt`

## 限制与注意事项

* 在基于 Wayland 的 Linux 系统上，若需启用剪贴板集成支持，使用 Cargo 安装时需要显式添加 `wayland` 特性标志（`--features wayland`）。
* 若选择通过源码编译安装，系统需预先安装 Git、Rust 和 Cargo。

## 链接

- 仓库：https://github.com/mufeedvh/code2prompt
- 官网：https://code2prompt.dev

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
