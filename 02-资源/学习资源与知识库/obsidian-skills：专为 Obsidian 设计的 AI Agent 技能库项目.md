---
title: "obsidian-skills：专为 Obsidian 设计的 AI Agent 技能库项目"
对象: "GitHub 项目"
项目主页: "https://github.com/kepano/obsidian-skills"
Stars快照: "3668"
开源协议: "MIT"
---

## 摘要

**一句话总结**
Obsidian Skills 是一个拥有过万 Star 的开源（MIT）AI Agent 技能库，严格遵循 Agent Skills 规范，旨在赋予 AI 助手（如 Claude Code 等）处理 Obsidian 专属文件格式（Markdown、Canvas、Bases）及调用相关命令行工具的能力。

**核心要点**
*   **项目状态**：采用 MIT 协议开源，当前在 GitHub 上拥有 10417 个 Stars。
*   **规范兼容**：遵循 Agent Skills 规范，可被任何兼容该规范的 AI Agent（如 Claude Code 和 Codex CLI）直接调用。
*   **专属 Markdown 支持**：内置 `obsidian-markdown` 技能，支持生成和修改包含双向链接、嵌入、标注和属性等复杂语法的笔记。
*   **白板与数据库编辑**：提供 `json-canvas` 和 `obsidian-bases` 技能，支持处理 `.canvas`（节点、连线等）和 `.base`（视图、过滤器等）文件。
*   **CLI 自动化交互**：包含 `obsidian-cli` 技能，允许 AI 通过命令行与 Obsidian 库交互，适用于插件和主题的自动化开发。
*   **网页内容提取**：集成 `defuddle` 技能，可从网页抓取纯净的 Markdown 文本，有效节省 AI 的 Token 消耗。
*   **灵活的安装方式**：支持通过市场指令（`/plugin`）安装，也支持针对 Claude Code（放入 `/.claude` 目录）和 Codex CLI（放入 `~/.codex/skills` 目录）的手动配置。

## 功能与定位

Obsidian Skills 是一个专为 Obsidian 设计的 AI Agent 技能集合。该项目遵循 Agent Skills 规范，旨在赋予 AI Agent（如 Claude Code 和 Codex CLI）理解、创建和编辑 Obsidian 专属文件格式及调用相关命令行工具的能力。

## 典型使用场景

*   通过 AI 助手在 Obsidian 库（Vault）中自动生成或修改带有复杂语法（如双链、属性）的 Markdown 笔记。
*   利用 AI 辅助构建和编辑白板（Canvas）或数据库（Bases）文件。
*   结合 AI 与 Obsidian CLI 进行插件和主题的自动化开发与交互。
*   让 AI 抓取网页并提取纯净的 Markdown 内容直接存入笔记。

## 核心功能

该技能库包含以下具体技能（Skills）：
*   **obsidian-markdown**：创建和编辑 Obsidian 风格的 Markdown (`.md`) 文件，支持双向链接（wikilinks）、嵌入（embeds）、标注（callouts）、属性（properties）等专属语法。
*   **obsidian-bases**：创建和编辑 Obsidian Bases (`.base`) 文件，支持操作视图、过滤器、公式和摘要。
*   **json-canvas**：创建和编辑 JSON Canvas (`.canvas`) 文件，支持处理节点、连线、分组和连接关系。
*   **obsidian-cli**：通过 Obsidian CLI 与库进行交互，适用于插件和主题开发。
*   **defuddle**：调用 Defuddle 工具从网页中提取干净的 Markdown 文本，去除冗余信息以节省 AI 的 Token 消耗。

## 特色与差异点

*   **高兼容性标准**：严格遵循 Agent Skills 规范，可被任何兼容该规范的 AI Agent 直接调用。
*   **深度定制化**：不仅限于基础文本处理，还深入支持了 Obsidian 生态中特有的可视化白板（JSON Canvas）和结构化数据（Bases）格式。

## 使用方式概览

项目支持通过市场指令或手动配置进行安装：
*   **市场安装**：通过特定的 `/plugin` 命令添加仓库并安装技能。
*   **Claude Code 手动安装**：将仓库内容放入 Obsidian 库根目录（或 Claude Code 工作目录）下的 `/.claude` 文件夹中。
*   **Codex CLI 手动安装**：将仓库中的 `skills/` 目录复制到 Codex 的标准技能路径（通常为 `~/.codex/skills`）下。

## 链接

- 仓库：https://github.com/kepano/obsidian-skills

## 关联主题

- [[00-元语/learning-resource]]
- [[00-元语/github]]
- [[00-元语/wiki]]
- [[00-元语/AI]]
- [[00-元语/workflow]]
