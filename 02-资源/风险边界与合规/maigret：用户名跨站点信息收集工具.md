---
title: maigret：用户名跨站点信息收集工具
对象: GitHub 仓库
项目主页: https://github.com/soxoj/maigret
文档: https://maigret.readthedocs.io
许可证: MIT
来源: README、docs/source/features.rst、docs/source/installation.rst、docs/source/philosophy.rst、pyproject.toml、CHANGELOG.md
---

## 摘要

maigret 是一个基于用户名做跨站点信息收集的开源工具，定位是“通过用户名构建档案”。它可在大量网站范围内检索同名账号、提取公开页面中的结构化线索，并输出多种格式报告；同时提供命令行、Web 界面和 Python 库形态。该类工具天然涉及个人信息处理与平台规则约束，使用前需要明确授权边界与合规要求。

## 功能与定位

maigret 基于公开网页信息进行账号存在性检索与资料聚合，目标是把分散在不同站点的公开线索整理为可分析的结果集合。项目在仓库与文档中强调其 OSINT 用途，并提供持续维护的站点数据与检测逻辑。

## 典型使用场景

- 在合法授权前提下，做用户名复用风险排查与公开信息盘点。
- 作为安全研究或调查分析流程中的线索发现环节。
- 将检索结果输出为结构化报告，供后续人工复核与合规审查。

## 特色与差异点

- 以用户名为主线，覆盖多站点检索与信息聚合。
- 支持从页面线索扩展后续检索，提升跨平台关联发现能力。
- 提供标签筛选、错误识别与多格式报告，便于控制范围与沉淀结果。
- 同时支持 CLI、Web 界面与库集成，适配不同使用形态。

## 使用方式概览

项目支持本地安装、容器方式与在线入口，并可通过文档查看功能说明与参数体系。实际落地时应先界定目标范围、数据处理规则和审计要求，再执行检索与复核。

## 限制与注意事项

- 该工具处理的是跨站点公开信息，仍可能涉及个人数据合规与平台条款约束。
- 仓库免责声明明确其仅用于教育和合法用途；使用者需自行满足所在地区法律法规要求。
- 检索结果可能存在误报或上下文缺失，不能直接作为定性结论，必须人工复核。
- 本仓库仅记录项目定位与风险边界，不复述可操作细节、命令参数或可直接执行流程。

## 关联主题

- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/web-crawling]]

## 链接

- https://github.com/soxoj/maigret
- https://maigret.readthedocs.io
- https://pypi.org/project/maigret/
- https://github.com/soxoj/maigret/blob/main/README.md
- https://github.com/soxoj/maigret/blob/main/docs/source/features.rst
- https://github.com/soxoj/maigret/blob/main/docs/source/installation.rst
- https://github.com/soxoj/maigret/blob/main/CHANGELOG.md
- https://github.com/soxoj/maigret/blob/main/LICENSE
