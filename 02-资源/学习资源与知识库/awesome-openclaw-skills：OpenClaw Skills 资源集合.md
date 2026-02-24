---
title: awesome-openclaw-skills：OpenClaw Skills 资源集合
对象: GitHub 仓库
项目主页: https://github.com/VoltAgent/awesome-openclaw-skills
来源: README、CONTRIBUTING、GitHub 仓库页与 Releases 页
数据快照: 2026-02-23（Star 18.7k / Fork 1.9k）
开源协议: MIT
---

## 摘要

这是一个面向 OpenClaw 的 Skills 精选资源集合，重点是把官方技能注册中心中的社区技能做可用性与风险导向筛选，帮助用户更快找到可安装、可复核的技能条目。项目强调“精选而非审计”，并给出明确的收录边界、排除规则与安全自检建议。

## 功能与定位

该仓库定位为 OpenClaw Skills 的分类索引与精选清单，而不是技能源码仓库。它把技能发现、筛选、导航整合在一个列表中，降低从海量技能中检索可用条目的成本。

仓库说明中提到，技能来源于 ClawHub（OpenClaw 公共技能注册中心），并通过分类目录组织，便于按任务类型查找。

## 典型使用场景

1. 为本地运行的 OpenClaw 快速挑选可用技能，减少逐个排查成本。
2. 团队在引入新技能前，先基于该清单做初步候选池，再进行内部安全复核。
3. 技能作者了解收录标准后，按约束准备文档与发布流程，提高被收录概率。

## 特色与差异点

1. 来源边界明确：仅接受已发布在 `openclaw/skills` 官方仓库中的技能链接。
2. 过滤规则公开：仓库给出了排除项，包括疑似垃圾、重复、部分高风险领域等。
3. 安全导向清晰：强调“curated, not audited”，并建议结合 VirusTotal、Snyk、Agent Trust Hub 做额外核验。
4. 维护形态直接：以 README 分类清单为核心，便于快速浏览与提交修正。

## 使用方式概览

1. 通过 ClawHub CLI 安装：`npx clawhub@latest install <skill-slug>`。
2. 手动安装到技能目录：全局 `~/.openclaw/skills/` 或项目级 `<project>/skills/`。
3. 按仓库贡献规范提交条目：在对应分类追加链接，并满足文档与成熟度要求。

## 限制与注意事项

1. 该仓库是链接清单，不提供技能二进制发布包；Releases 页面当前显示无正式发布版本。
2. 清单中的技能会随原维护者更新，历史安全状态不等于持续安全。
3. 官方提示该列表不是安全审计结果，使用前仍需自行审查源码与权限边界。
4. 仓库存在主题范围限制（如对部分金融相关技能不收录），不等于对外部生态的完整覆盖。

## 链接

1. 仓库主页：https://github.com/VoltAgent/awesome-openclaw-skills
2. README：https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/README.md
3. CONTRIBUTING：https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/CONTRIBUTING.md
4. OpenClaw 官方技能仓库：https://github.com/openclaw/skills/tree/main/skills
5. ClawHub：https://www.clawhub.ai/
6. Snyk Skill Security Scanner：https://github.com/snyk/agent-scan
7. Agent Trust Hub：https://ai.gendigital.com/agent-trust-hub

## 关联主题

- [[00-元语/skills]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/learning-resource]]
- [[00-元语/security]]
