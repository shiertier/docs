---
title: "VERT：The next-generation file converter, Open source, fully local＊ and free forever"

发布日期: "2026-02-22"
对象: "GitHub 项目 `VERT-sh/VERT`"
项目主页: "https://github.com/VERT-sh/VERT"
官方网站: "https://vert.sh"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Svelte"
统计快照: "Stars 14027，Forks 720，Watchers 45（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
VERT 是一个开源项目，归档分类为“通用开发工具”。GitHub 描述：The next-generation file converter. Open source, fully local* and free forever.

**2) 关键要点**
- 项目基础：仓库地址为 `VERT-sh/VERT`，主语言为 `Svelte`，协议为 `GNU Affero General Public License v3.0`。
- 社区活跃度：当前公开数据为 Stars 14027、Forks 720、Watchers 45。
- 版本状态：暂无正式发布记录
- 定位依据：本条目基于 GitHub 仓库信息与公开主页链接整理。

**3) 风险/不足**
- 仓库简介与元数据不能替代完整技术评估，实际接入前需通读 README、Release 与关键文档。

## 功能与定位

VERT 是一个以 WebAssembly 为核心的文件转换工具，默认在本地设备完成转换，不依赖把文件上传到云端。项目强调开源、可长期免费使用，并提供官方在线实例。

## 典型使用场景

- 在本地完成图片、音频、文档、视频等文件格式转换，减少敏感文件外传风险。
- 需要批量或频繁转换文件格式的个人开发者与内容团队。
- 需要在隐私约束下提供转换能力的自托管场景。

## 核心功能

- 基于 WebAssembly 在设备侧执行转换流程。
- 覆盖图片、音频、文档、视频等类型，支持 250+ 格式（以项目文档为准）。
- 提供转换参数设置与可视化界面（Svelte + TypeScript）。
- 视频转换可结合官方 `vertd` daemon 做自托管部署。

## 特色与差异点

- 仓库最近更新时间：2026-02-22T12:37:30Z。
- 最近推送时间：2026-02-21T16:50:06Z。
- 项目创建时间：2024-11-11T14:27:14Z。
- 本地优先的转换路径与可自托管补充能力并存，兼顾隐私和扩展性。

## 使用方式概览

1. 阅读 README 与 `docs/GETTING_STARTED.md`，确认本地转换能力与格式覆盖范围。
2. 按文档完成基础部署；涉及视频转换时评估是否引入 `vertd` daemon。
3. 在团队或生产场景中补齐版本固定、日志与访问边界控制。

## 限制与注意事项

- 本档案仅整理可验证公开信息，不替代项目官方文档。
- 若项目涉及安全或合规风险，应优先建立边界策略后再接入。
- 视频转换的本地/非本地路径存在差异，落地前需按官方文档核对部署模式与数据边界。

## 链接

- 仓库：https://github.com/VERT-sh/VERT
- 官网：https://vert.sh
- README：https://raw.githubusercontent.com/VERT-sh/VERT/main/README.md
- Releases：https://github.com/VERT-sh/VERT/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/multimodal]]
- [[00-元语/wasm]]
- [[00-元语/self-hosting]]
- [[00-元语/audio]]
- [[00-元语/video]]
