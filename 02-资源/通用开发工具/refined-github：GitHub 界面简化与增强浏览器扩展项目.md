---
title: "refined-github：GitHub 界面简化与增强浏览器扩展项目"
对象: "GitHub 项目"
项目主页: "https://github.com/refined-github/refined-github"
Stars快照: "30511"
---

## 摘要

**1) 一句话总结**
Refined GitHub 是一款拥有超 3 万 Stars 的浏览器扩展程序，旨在简化 GitHub 原生界面并为开发者提供 PR 更新、工作流重跑等实用的增强功能。

**2) 核心要点**
* **项目热度**：社区认可度极高，拥有 30,511 个 Stars、1.7k 个 Forks 以及 4,450 次代码提交。
* **PR 与分支操作**：支持直接从基础分支更新 Pull Request（`update-pr-from-base-branch`）。
* **Actions 工作流**：提供快捷重新运行工作流（`rerun-workflow`）的功能。
* **界面与交互增强**：支持用户标签链接化（`linkify-user-labels`）、CI 链接跳转（`ci-link`）以及禁止编辑的防错警告提示。
* **运行环境**：作为浏览器扩展直接作用于 GitHub 网页端，并提供专门的 Safari 浏览器扩展应用。
* **技术栈**：项目采用 Svelte（v5 版本）与 TypeScript 开发，并使用 Biome 和 ESLint 进行代码规范管理。

**3) 限制与注意事项**
* 扩展内的部分功能会根据当前 GitHub 页面的状态自动禁用以避免干扰（例如：空仓库中会禁用 `ci-link`，已合并的 PR 中会禁用 `warning-for-disallow-edits`）。
* 某些旧功能（如 `resolve-conflicts` 解决冲突功能）已在版本迭代中被移除。

## 功能与定位
Refined GitHub 是一款浏览器扩展程序，其核心定位是简化 GitHub 的原生用户界面，并为开发者添加一系列实用的增强功能，从而提升在 GitHub 上的浏览和操作体验。

## 核心功能
根据代码仓库的提交记录，该扩展包含以下具体功能模块：
* **PR 与分支操作**：支持从基础分支更新 Pull Request (`update-pr-from-base-branch`)。
* **Actions 工作流**：提供重新运行工作流（`rerun-workflow`）的快捷功能。
* **界面元素增强**：支持用户标签链接化（`linkify-user-labels`）以及 CI 链接跳转（`ci-link`）。
* **防错与警告**：提供禁止编辑的警告提示（`warning-for-disallow-edits`）。
* **Safari 支持**：提供专门的 Safari 浏览器扩展应用。

## 特色与差异点
* **技术栈**：项目配置显示其使用了 Svelte（已更新至 v5 版本）以及 TypeScript 进行开发，并使用 Biome 和 ESLint 进行代码规范管理。
* **高活跃度**：拥有超过 3 万的 Stars 和 4400 多次提交，社区认可度极高。

## 使用方式概览
作为浏览器扩展安装后直接作用于 GitHub 网页端。支持 Safari 等浏览器环境。

## 限制与注意事项
* 扩展内的部分功能会根据当前 GitHub 页面的状态自动禁用以避免干扰。例如：
  * `ci-link`（CI 链接）功能在空仓库中会被禁用。
  * `warning-for-disallow-edits`（禁止编辑警告）在已合并的 PR 中会被禁用。
* 某些旧功能（如 `resolve-conflicts`）已在版本迭代中被移除。

## 链接

- 仓库：https://github.com/refined-github/refined-github

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
