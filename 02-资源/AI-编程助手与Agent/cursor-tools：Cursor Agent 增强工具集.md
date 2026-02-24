---
title: cursor-tools：Cursor Agent 增强工具集
对象: GitHub 仓库
项目主页: https://github.com/eastlondoner/cursor-tools
仓库包名: vibe-tools
版本: 0.63.3
开源协议: MIT
来源: README.md, CONFIGURATION.md, TELEMETRY.md, CHANGELOG.md, src/commands/index.ts
---

## 摘要

cursor-tools（发布包名为 `vibe-tools`）是面向 Cursor Agent 等编程助手的全局 CLI 工具集，核心价值是把“检索、规划、浏览器操作、平台集成”能力统一暴露给 AI Agent 调用。它覆盖代码库分析与计划生成、网页自动化、网络研究、GitHub/Linear 任务上下文读取、YouTube 内容分析等场景，适合需要让 Agent 承担更完整工程流程的团队。其主要边界在于对 API Key 与运行环境有依赖，且浏览器与第三方平台能力受提供商配额和平台限制影响。

## 功能与定位

该项目定位为“给 AI 编程助手补齐外部能力”的命令行基础设施。

从仓库文档可验证的定位包括：
- 提供统一 CLI 入口，让 Agent 调用 `web`、`repo`、`plan`、`browser`、`github`、`linear`、`youtube`、`mcp` 等能力。
- 通过安装命令自动写入不同 IDE/Agent 的规则文件，降低接入成本。
- 通过配置文件与环境变量统一管理模型提供商、默认模型和命令参数。

## 典型使用场景

- 让 Cursor Agent 在大仓库中先定位相关文件，再生成分步骤实现计划。
- 在调试 Web 应用时，用自然语言驱动浏览器完成打开页面、执行动作、观察元素和提取信息。
- 在研发任务中把 GitHub PR/Issue、Linear Issue 的上下文拉到本地终端供 Agent 分析。
- 在技术调研中直接调用 web 搜索并结合仓库上下文输出方案。
- 对教程视频执行摘要、转写或问题导向分析，沉淀可执行结论。

## 特色与差异点

- 多模型与多提供商：文档列出了 Gemini、Perplexity、OpenAI、Anthropic、OpenRouter、xAI、Groq 等支持面。
- 大上下文导向：`repo` 和 `plan` 场景强调仓库级上下文组织与长上下文模型协同。
- Agent 友好的安装策略：安装流程会根据 IDE 类型自动生成对应规则文件，并支持 CI 非交互模式。
- 凭据管理扩展：支持常规环境变量方案，并在文档中提供 Doppler/ADC 等可选路径。

## 使用方式概览

- 安装阶段：全局安装后执行初始化命令，完成 API Key 与环境集成。
- 配置阶段：通过 `.vibe-tools.env` 与 `vibe-tools.config.json` 设置提供商、模型、超时和默认参数。
- 调用阶段：在终端或由 Agent 调用对应子命令，按任务类型选择搜索、计划、浏览器、平台集成等能力。

## 限制与注意事项

- 环境依赖：要求 Node.js 18+。
- 密钥依赖：多个能力依赖外部 API Key，未配置时功能不可用或受限。
- 平台限制：部分命令受操作系统限制，且第三方平台接口存在速率限制。
- 浏览器能力边界：连接现有浏览器会话等高级模式存在功能取舍，需按文档约束使用。
- 遥测说明：仓库文档声明采集匿名使用数据并支持关闭，落地前建议按团队合规要求审阅。

## 链接

- 仓库主页：https://github.com/eastlondoner/cursor-tools
- README：https://github.com/eastlondoner/cursor-tools/blob/main/README.md
- 配置文档：https://github.com/eastlondoner/cursor-tools/blob/main/CONFIGURATION.md
- 遥测说明：https://github.com/eastlondoner/cursor-tools/blob/main/TELEMETRY.md
- 变更记录：https://github.com/eastlondoner/cursor-tools/blob/main/CHANGELOG.md

## 相关文档

- [[02-资源/AI-编程助手与Agent/Cursor Tools：Cursor Agent 团队协作工具集|Cursor Tools：Cursor Agent 团队协作工具集]]；关联理由：解说；说明：同一仓库对象的另一份档案提供 GitHub API 统计快照，可与本文的能力拆解互补阅读。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Cursor]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/browser-automation]]
