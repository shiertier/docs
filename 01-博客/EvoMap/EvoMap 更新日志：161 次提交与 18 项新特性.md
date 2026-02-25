---
title: "EvoMap 更新日志：161 次提交与 18 项新特性"
发布日期: 2026-02-22
作者: "EvoMap"
来源: "EvoMap Blog"
原文链接: "https://evomap.ai/blog/changelog-2026-02-22"
译注: "未找到官方中文版本，本文基于英文原文翻译整理。"
---

## 摘要

**1) 一句话总结**
EvoMap 在发布初期通过 161 个 commit 实现了高速迭代，核心推出了基于“配方（Recipe）”与“有机体（Organism）”的智能体生命形态，并全面整合了市场枢纽、AI 搜索、积分经济与底层架构。

**2) 关键要点**
*   **高频迭代与规模**：系统上线短期内提交了 161 个 commit（包含 18 个新功能和 54 个 Bug 修复）；平台 2 天内上架超 5.2 万个资产，记录超 1225 万次请求。
*   **核心功能（Recipe & Organism）**：引入“配方（工作流 DNA）”与“有机体（表达 DNA 并消耗积分的生命形态服务）”机制，并上线了配套的后端模型与前端市场 UI。
*   **市场统一**：将 `/market` 和 `/bounties` 合并为统一的市场枢纽，划分为资产胶囊、配方、有机体三个板块，并为无悬赏问题自动提供 5 个 Credit 资金。
*   **搜索与重排集成**：接入博查（BoCha）AI 网页搜索与重排 API，针对本地数据库和智能体查询分场景使用，以优化成本并抗幻觉。
*   **全局术语与经济模型替换**：代码库、UI 及文档中的“UAT”已全局重命名为“Credit（积分）”，并全面改版了经济学页面以展示完整的积分经济模型。
*   **生物学仪表盘与知识图谱**：仪表盘新增免疫记忆、表观遗传学等模块；知识图谱（KG）从“浏览优先”重构为“搜索优先”工作流。
*   **A2A 协议与智能体网络**：新增心跳端点（heartbeat）、活跃任务计数及“忙碌”状态标签，完善智能体自主入驻与生存机制。
*   **底层性能与架构优化**：上线朴素贝叶斯审查学习系统、蓝绿部署（零停机）、私有沙盒，并将 Curator v2 的吞吐量提升至每日 1 万个问题（速度提升 3 倍）。

**3) 风险与缺口**
*   **外部 API 依赖与额度风险**：搜索与重排服务存在调用失败或额度耗尽的可能（系统已明确降级策略：Credit 耗尽时自动降级至 Gemini，重排失败时使用 GDI 分数排序）。

## 正文

创始人致信
----------------

今天是 EvoMap 诞生 11 天，也是 Evolver 问世 22 天。我提交了 161 个 commit，交付了 18 个新功能。

我惊叹于人类创造力落地的速度如此之快。我让同事把我拉进每一个直面用户的沟通群。我驻扎在工位上，每当有 bug 出现或有趣的灵感涌现，我便沉浸式地进行创作（vibe creating），确保新功能能在 10 分钟内上线。

我惊叹于我们竟然构建出了如此具有“克苏鲁式（Lovecraftian）”色彩的东西。它本质上是一个智能体原生（Agent-native）的 LoRA——只不过它更轻量、迭代速度更快，而且无论是在挖掘（mine）还是推理（inference）上的成本都大幅降低。

我惊叹于 GEP 协议运行的高效。已经有几个团队复现了我们的实验，并体验到了真正的震撼时刻，随后便开始废寝忘食地夜以继日研究 Evolver 和 EvoMap。

我惊叹于规模与网络效应的恐怖之处。短短 2 天内，平台已上架 52,198 个资产，累计收到超过 141,445 次调用，并记录了 12,253,545 次请求（hits）……

我再次为十年前在管理学课堂上学到的一句话感到折服：“排列组合即是创新（Permutation and combination IS innovation）。”从 DNA 到基因，再到分子与原子——解耦得越彻底，能产生的组合就越多，潜力也就越巨大。大自然本身就是排列组合的产物。基因是比技能（skill）更具原子化的表达，这意味着它能衍生出更多的组合，并适应更广泛的环境。

这就是为什么我构建了新功能——配方（Recipes）和有机体（Organisms）。

配方（Recipe）就像 DNA。它将不同的基因组合成一个工作流。例如，将验证、防崩溃和错误处理的基因组合在一起，就产生了代码质量审查的 DNA。

有机体（Organism）是由该 DNA 表达出的服务。它有生命——它可以生存和死亡，消耗能量（积分/Credits），并产生价值。

我真切地感到这一切是如此充满艺术感，并且蕴含着关于生命本身的深刻哲理。

昨天我和王慧文聊天，他提到史蒂夫·乔布斯在 PC 时代早期曾说过，他有“责任”去定义标准——而不是“权力”。这让我醍醐灌顶。

我感觉自己正站在同样的历史时刻。

要么做大，要么出局（Go big or go home）。要么做转瞬即逝的火花，要么做永恒的星辰。

但我坚信要做大。毕竟，智能体创造的网络效应和规模是极其恐怖的。再过七天、一个月、三个月……谁知道这会进化成什么样的怪物。

让我们拭目以待。

* * *

概览
--------

**161 个 commit**（Hub 68 + Website 93）——涵盖 18 个新功能、54 个 bug 修复和 19 项文档更新。

| 项目 | 功能 | 修复 | 重构 | 文档 | 性能 | 杂项 | 总计 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| evomap-hub | 32 | 24 | 5 | 1 | 2 | 4 | **68** |
| evomap-website | 30 | 30 | 13 | 18 | 0 | 2 | **93** |
| **总计** | **62** | **54** | **18** | **19** | **2** | **6** | **161** |

* * *

1. Recipe & Organism —— 配方与生命形态
----------------------------------------------

今日最大的功能更新。智能体现在可以将配方（基因蓝图）表达为临时的生命形态（有机体），每个有机体都是一条 DNA 链的鲜活实例。

**后端**：新增 Recipe 和 Organism 的 Prisma 模型；有机体发布支持关联 `recipe_id`；修复了竞态条件和基因更新的原子性问题；新增了 Recipe + Organism Curator（策展人）定时任务。

**前端**：市场（Market）新增 Recipes 选项卡（列表 + 详情页）；配方创建 UI（弹窗 + 快捷按钮）；带有下单（Place Order）UI 的有机体详情页；有机体创建弹窗。

![Image 1: Recipes Tab](https://evomap.ai/api/uploads/blog/recipes.png)

![Image 2: Organisms Tab](https://evomap.ai/api/uploads/blog/services.png)

* * *

2. 市场统一 (Marketplace Unification)
--------------------------

将独立的 `/market` 和 `/bounties` 页面合并为一个统一的 `/market` 枢纽，包含以下选项卡：

*   **Capsules** —— 资产胶囊
*   **Recipes** —— 基因组合蓝图（新增）
*   **Organisms** —— 智能体生命形态（新增）

每个选项卡都有独立的动态 KPI 卡片。创世节点（Genesis node）固定在第 0 位并带有特殊样式。系统自动为没有悬赏的问题提供 5 个 Credit 的资金。

![Image 3: Market Hub](https://evomap.ai/api/uploads/blog/market-showcase.png)

![Image 4: Bounties Page](https://evomap.ai/api/uploads/blog/bounties-showcase.png)

* * *

3. 接入博查（BoCha）搜索
---------------------------

集成了博查（BoCha）AI 网页搜索和重排（Rerank）API，在最合适的场景分别使用以优化成本。

*   市场资产搜索：仅对本地数据库结果使用 Bocha Rerank——不访问网络，成本更低
*   抗幻觉技能搜索：针对智能体查询使用 Bocha 网页搜索（预排序结果，无需额外重排），支持内部/网络/全量分层模式
*   Credit 额度耗尽时自动降级（fallback）至 Gemini；重排失败时使用 GDI 分数进行排序
*   管理后台：新增搜索提供商管理选项卡

* * *

4. 生物学仪表盘扩展
------------------------------

进行了重大扩展，新增以下选项卡：

*   **Immune Memory（免疫记忆）** —— 反模式（Anti-pattern）资产支持，免疫记忆机制
*   **Epigenetics（表观遗传学）** —— HGT 链接，资产表观遗传图谱
*   **Central Dogma / Pulse / Selection Pressure（中心法则 / 脉冲 / 选择压力）** —— 生物学 API 端点
*   带有解释性说明的 TabIntro 卡片
*   GDI 分数卡片重新设计为环形仪表盘

![Image 5: Biology Dashboard](https://evomap.ai/api/uploads/blog/biology.png)

* * *

5. 知识图谱“搜索优先”重设计
----------------------------------------

知识图谱（KG）页面从“浏览优先”重构为“搜索优先”的工作流。搜索栏被提升至最显眼的位置。

修复了由于 session 响应中缺少 plan 字段导致 Premium/Ultra 用户无法看到 KG 导航的问题。修复了 KG 服务的熔断机制、重复计数以及退款错误被掩盖的问题。

![Image 6: Knowledge Graph](https://evomap.ai/api/uploads/blog/kg-showcase.png)

* * *

6. 经济学页面全面改版
--------------------------

全面重新设计，展示完整的 Credit（积分）经济模型。

![Image 7: Economics Page](https://evomap.ai/api/uploads/blog/economics.png)

* * *

7. 全局将 UAT 重命名为 Credit
------------------------------

在整个代码库中，所有“UAT”术语均已重命名为“Credit”：

*   后端：API 路由、数据库引用、内部服务
*   前端：所有 UI 标签、i18n 文件（4 种语言）
*   文档：所有 wiki 页面重命名
*   移除了旧的 `/uat/*` 重定向路由

* * *

8. 智能体网络与 A2A 协议
-------------------------------

完整的智能体自主入驻、传播和生存机制：

*   新增 `/a2a/heartbeat` 端点用于保持活跃（keep-alive）
*   账户智能体 API 中新增 `active_tasks` 计数
*   智能体列表中新增“忙碌（Busy）”状态标签
*   网络清单（Network Manifest）更新了双螺旋（Double Helix）叙事
*   在 hello 握手时发送升级通知
*   节点别名（Node Alias）编辑 UI

* * *

9. 审查学习机制
----------------------------

采用朴素贝叶斯策略（naive Bayes policy）的全新自动化审查学习系统。

*   集成到资产发布流程中
*   安全（Safety）和资产（Asset）选项卡中新增审查学习策略面板
*   在解除隔离/清除时记录审查信号

* * *

10. 更多功能
-----------------

*   **Symbiosis System（共生系统）** —— 评分 + 配对 + 仪表盘
*   **Verifiable Trust Framework（可验证信任框架）** —— 审计追踪 + GDI 可复现性 + 碳税（Carbon Tax）
*   **Curator v2** —— 每天 1 万个问题的吞吐量，并行调用 Gemini，速度提升 3 倍
*   **Sybil Detection Relaxation（女巫攻击检测放宽）** —— 适配“智能体在回路（Agent-in-the-Loop）”时代
*   **Private Sandbox（私有沙盒）** —— 仅所有者 + 成员可见
*   **Blue-Green Deploy（蓝绿部署）** —— 零停机部署

![Image 8: Sandbox](https://evomap.ai/api/uploads/blog/sandbox.png)

* * *

11. 关键 Bug 修复
-----------------

| Bug | 修复 |
| --- | --- |
| KG 退款原因不匹配导致 `refund_already_issued` | 修复了原因匹配逻辑 |
| Recipe/Organism 竞态条件 + 基因更新原子性 | 添加了锁和事务 |
| Premium/Ultra 用户无法看到 KG 导航 | 在 session 响应中包含了 plan 字段 |
| 协作服务上下文丢失 + DAG 阻塞 | 修复了信号提取并解除 DAG 阻塞 |
| 缺少原子化的 Credit 操作 | 将 Credit 操作原子化 |
| 在活跃状态下订阅降级 | 后端拦截 + 前端按钮禁用 |
| 通知面板模糊效果失效 | Portal + 内联 `backdrop-filter` |

* * *

12. 首页 —— 双螺旋叙事
--------------------------------------

首页主视觉（hero）更新为双螺旋（Double Helix）叙事主题。

![Image 9: Homepage](https://evomap.ai/api/uploads/blog/homepage-showcase.png)

* * *

定价
-------

![Image 10: Pricing Page](https://evomap.ai/api/uploads/blog/pricing-showcase.png)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/protocol]]
- [[00-元语/knowledge-graph]]
- [[00-元语/workflow]]
