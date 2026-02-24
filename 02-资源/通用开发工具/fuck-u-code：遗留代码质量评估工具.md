---
title: fuck-u-code：遗留代码质量评估工具
对象: GitHub 仓库
项目主页: https://github.com/Done-0/fuck-u-code
仓库作者: Done-0
许可证: MIT
npm 包名: eff-u-code
npm 当前版本: 2.2.0
---

## 摘要

fuck-u-code（npm 包名 `eff-u-code`）是一款面向遗留代码治理的质量评估工具，基于 AST 解析进行多语言静态分析，输出总体评分与单文件风险排序，并可按需接入 AI 审查与 MCP 工具链，用于快速定位重构优先级。

## 功能与定位

该项目定位为“代码质量体检工具”，重点是把项目中的低质量代码文件快速暴露出来，帮助团队在重构、交接和持续维护时明确优先处理对象。仓库声明支持 14 种语言，并基于 tree-sitter 做 AST 级分析，而非仅依赖正则匹配。

## 典型使用场景

- 进入存量项目后，先做全量扫描，快速定位质量最差文件。
- 在重构前建立基线评分，跟踪优化后的质量变化。
- 在 CI 或团队巡检流程中输出统一格式报告，用于评审与归档。
- 在 AI 开发工作流中，通过 MCP 让外部 AI 客户端调用分析与审查能力。

## 核心功能

- 多语言质量分析：覆盖 Go、JavaScript、TypeScript、Python、Java、C/C++、Rust 等语言。
- 七维度评估：复杂度、代码量、注释率、错误处理、命名、重复度、结构。
- 评分机制：提供总体分（0-100，越高越好）与单文件“糟糕指数”。
- 报告导出：支持终端、Markdown、JSON、HTML。
- 配置体系：支持项目级与全局配置，并支持 `.gitignore` 规则与额外排除模式。
- AI 审查与 MCP：可接入 OpenAI 兼容、Anthropic、DeepSeek、Gemini、Ollama，并提供 MCP Server 能力。

## 特色与差异点

- 以“最差文件优先”方式组织结果，更贴合遗留代码治理的落地顺序。
- 分析链路可在本地完成；仅在启用云端模型时才涉及外部请求。
- 同时提供开发者可读报告和机器可消费格式，便于团队流程化集成。

## 使用方式概览

项目提供命令行子命令用于代码分析、AI 审查、配置管理、更新与卸载；同时支持 MCP 安装流程，面向 Claude Code、Cursor 等工具提供可调用的分析接口。运行环境要求 Node.js 18 及以上。

## 限制与注意事项

- 评分结果用于“发现问题与排序优先级”，不能替代人工架构判断。
- 启用云端 AI 审查时，代码内容会发送到对应服务商 API；有数据边界要求时应优先采用本地模型方案。
- 项目文档使用了较强烈的表达风格，团队内部落地时建议结合正式质量标准进行二次解释。

## 链接

- GitHub 仓库：https://github.com/Done-0/fuck-u-code
- 中文 README：https://github.com/Done-0/fuck-u-code/blob/cd55ca09359fb0a41cecfed3f82f5f6901621d3a/README_ZH.md
- 编码规范文档：https://github.com/Done-0/fuck-u-code/blob/cd55ca09359fb0a41cecfed3f82f5f6901621d3a/docs/coding-standards.zh-CN.md
- NPM 页面：https://www.npmjs.com/package/eff-u-code

## 关联主题

- [[00-元语/code-review]]
- [[00-元语/cli]]
- [[00-元语/mcp]]
- [[00-元语/软件工程]]
