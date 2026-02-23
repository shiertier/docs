---
title: social-auto-upload：多平台社媒视频自动发布工具
对象: GitHub 仓库
作者: dreammis
项目主页: https://github.com/dreammis/social-auto-upload
文档站: https://sap-doc.nasdaddy.com/
来源:
  - https://github.com/dreammis/social-auto-upload
  - https://github.com/dreammis/social-auto-upload/blob/main/README.md
  - https://github.com/dreammis/social-auto-upload/releases
---

## 摘要

`social-auto-upload` 是一个基于浏览器自动化的视频发布工具，支持将视频一键或定时同步到抖音、Bilibili、TikTok 等多平台。项目提供脚本层、API 层与 Web 管理界面，适合需要批量化、周期化分发内容的团队。当前已知约束包括对登录态与页面稳定性的依赖、部分模块维护强度有限，以及使用前需核对平台合规边界。

## 功能与定位

该项目定位为“跨平台视频发布自动化工具”，面向需要同时维护多个内容平台的个人创作者、MCN 团队和运营人员。根据仓库 README，当前覆盖抖音、视频号、Bilibili、小红书、快手、百家号与 TikTok，并支持定时发布。

从仓库结构看，项目以平台模块拆分实现能力，既保留了可扩展的底层上传模块，也提供了可视化管理端，属于“可脚本化 + 可界面化”的混合形态工具。

## 典型使用场景

- 同一视频内容需要在多个平台同步发布，减少重复操作。
- 运营团队需要预排发布计划，在固定时间窗口自动执行。
- 需要在脚本调用、接口接入、可视化管理三种方式之间按团队能力选择接入路径。
- 需要以 Docker 或本地环境部署，便于在不同机器上复用发布流程。

## 特色与差异点

- 多平台导向明确，项目目标不是单平台增强，而是统一分发。
- 以浏览器自动化驱动上传流程，贴近真实平台交互路径。
- 提供多层入口：底层模块、API 与 Web 管理界面并存。
- `examples` 目录覆盖多平台示例文件，便于理解各平台接入差异。
- 仓库存在版本标签（如 `baijiahao`、`ks-support`、`tk-chrome`），可用于追踪阶段性功能扩展。

## 使用方式概览

该项目的实际使用通常围绕三类输入展开：平台登录态、视频素材与发布配置。用户可按自身技术能力选择脚本化流程或 Web 管理流程，在统一目录与配置约束下完成多平台分发调度。

对于团队协作场景，更适合先确定目标平台和发布节奏，再按模块启用能力，逐步扩展到更多平台，而不是一次性启用全部功能。

## 限制与注意事项

- 项目依赖平台页面交互与登录态，平台策略或页面结构变化可能导致流程失效。
- 仓库 README 明确提到作者维护精力有限，部分模块处于“可用但持续修复”的状态。
- README 声明采用 MIT License，但仓库根目录当前未见 `LICENSE` 文件，使用前建议自行复核最新仓库状态。
- 自动化发布涉及平台规则与账号合规风险，使用前应核对目标平台服务条款。
- 本仓库只记录项目定位、能力边界与使用注意事项，不复述可执行的自动化操作细节、命令、脚本片段或下载直链。

## 链接

- GitHub 仓库：https://github.com/dreammis/social-auto-upload
- README：https://github.com/dreammis/social-auto-upload/blob/main/README.md
- Releases：https://github.com/dreammis/social-auto-upload/releases
- 官方文档站：https://sap-doc.nasdaddy.com/
