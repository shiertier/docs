---
title: 'AI 对劳动力市场的影响：一种新衡量标准与早期证据'
发布日期: 2026-03-09
来源: 'Anthropic'
原文链接: 'https://www.anthropic.com/research/labor-market-impacts'
作者: 'Anthropic'
译注: '原文无可用官方中文正文，使用 Gemini 翻译并经助手最小必要校对整理。'
---

## 摘要

**1) 一句话总结**
本文提出了一种结合AI理论能力与实际使用数据的“观察到的暴露度”新指标，研究发现目前AI远未达到理论替代上限，且尚未引发高暴露职业的系统性失业，但年轻工作者在这些领域的招聘已显现放缓迹象。

**2) 关键要点**
*   **新衡量标准**：引入“观察到的暴露度（observed exposure）”指标，结合了O*NET数据库（约800种职业）、Anthropic实际使用数据以及理论大语言模型（LLM）能力评估，对完全自动化和与工作相关的实际应用赋予更高权重。
*   **理论与实际的差距**：AI的实际应用覆盖率远低于其理论能力。例如，计算机与数学职业的理论任务暴露度高达94%，但目前Claude的实际任务覆盖率仅为33%。
*   **受影响最大的职业**：暴露度最高的职业包括计算机程序员（覆盖率75%）、客户服务代表和数据录入员（67%）；而厨师、修理工等处于底部的30%的工作者覆盖率为零。
*   **高暴露人群特征**：暴露度最高的工作者群体通常年长、女性比例更高（+16个百分点）、受教育程度更高（研究生学历占比17.4%，而未暴露群体仅为4.5%），且平均收入高出47%。
*   **与官方预测的关联**：观察到的暴露度与美国劳工统计局（BLS）2024-2034年的就业增长预测呈弱负相关：覆盖率每增加10个百分点，预期就业增长率下降0.6个百分点。
*   **失业率现状**：自2022年底（ChatGPT发布）以来，处于暴露度最高四分位数的工作者与无暴露工作者相比，失业率并未出现系统性上升或显著差异。
*   **年轻工作者招聘放缓**：针对22-25岁的年轻工作者，进入高暴露度职业的求职成功率下降了约0.5个百分点（较2022年下降14%，勉强具有统计学意义），而25岁以上工作者未出现此招聘放缓现象。

**3) 风险/不足**
*   **方法局限性**：该框架和衡量方法无法捕捉AI重塑劳动力市场的所有渠道。
*   **实际应用障碍**：理论上可行的AI任务在实际中可能因模型局限性、法律限制、特定软件要求或人工验证步骤等障碍而普及缓慢。
*   **数据测量误差**：在当前人口调查（CPS）等调查数据中，关于工作转换的记录可能更容易出现测量误差。
*   **指标时效性**：当前引用的理论暴露度指标基于2023年初的LLM能力，未来需要结合新的就业和AI使用数据进行定期更新。

## 正文

## 主要发现

*   我们引入了一种衡量 AI 替代风险的新标准——**观察到的暴露度**（observed exposure），它结合了理论上的大语言模型（LLM）能力和现实世界的使用数据，并对自动化（而非增强性）和与工作相关的使用赋予了更高的权重。
*   AI 远未达到其理论能力：实际覆盖率仅占可行范围的一小部分。
*   美国劳工统计局（BLS）预测，到 2034 年，观察到的暴露度较高的职业增长将较少。
*   暴露度最高职业中的工作者更有可能是年长者、女性、受教育程度较高且薪酬较高的人群。
*   我们发现，自 2022 年底以来，高暴露度工作者的失业率并未出现系统性上升，但我们发现了提示性证据，表明在暴露度较高的职业中，年轻工作者的招聘速度有所放缓。

## 引言

AI 的迅速普及引发了一波衡量和预测其对劳动力市场影响的研究热潮。但过去方法的历史记录提醒我们要保持谦逊。

例如，一项衡量工作可离岸外包性的著名尝试曾认定约四分之一的美国工作岗位面临风险，但十年后，这些工作中的大多数仍保持着健康的就业增长。政府自身的职业增长预测虽然方向正确，但除了对过去趋势进行线性外推之外，几乎没有增加什么预测价值。即使事后看来，重大经济动荡对劳动力市场的影响往往也不明确。关于工业机器人对就业影响的研究得出了截然相反的结论，而归因于中国贸易冲击的失业规模至今仍存在争议。1

在本文中，我们提出了一个理解 AI 对劳动力市场影响的新框架，并使用早期数据对其进行了测试，发现迄今为止 AI 影响就业的证据有限。我们的目标是建立一种衡量 AI 如何影响就业的方法，并定期重新进行这些分析。这种方法无法捕捉 AI 重塑劳动力市场的每一个渠道，但通过在产生实质性影响之前奠定这一基础，我们希望未来的发现能够比事后分析更可靠地识别经济动荡。

AI 的影响有可能是显而易见的。但当影响尚不明确时，该框架最为有用——并且可以帮助在替代现象显现之前识别出最脆弱的工作岗位。

## 反事实推断

当影响巨大且突然时，因果推断会更容易。COVID-19 大流行及随之而来的政策措施造成了极其明显的经济动荡，以至于对于许多问题来说，复杂的统计方法显得毫无必要。例如，在疫情爆发的最初几周，失业率急剧上升，几乎没有留下其他解释的余地。

然而，AI 的影响可能不太像 COVID，而更像互联网或与中国的贸易。从总体失业数据中可能无法立即看清其影响；贸易政策和商业周期等因素可能会模糊对趋势线的解读。

一种常见的方法是比较受 AI 暴露度较高和较低的工作者、企业或行业之间的结果，以便将 AI 的影响与混杂因素分离开来。2 暴露度通常在任务层面上定义：例如，AI 可以批改作业，但不能管理课堂，因此教师被认为比那些整个工作都可以远程完成的工作者暴露度更低。

我们的工作遵循这种基于任务的方法，结合了理论 AI 能力和现实世界使用情况的衡量标准，然后再汇总到职业层面。3

## 衡量暴露度

我们的方法结合了三个来源的数据。

1.  [O*NET 数据库](https://www.onetcenter.org/database.html)，该数据库列举了与美国约 800 种独特职业相关的任务。
2.  我们自身的使用数据（如 [Anthropic 经济指数](https://www.anthropic.com/economic-index) 中所衡量）。
3.  Eloundou 等人（2023 年）的任务级暴露度估计，该估计衡量了 LLM 在理论上是否有可能使一项任务的速度至少提高一倍。

Eloundou 等人的指标 β 对任务进行简单评分：如果仅靠 LLM 就能使任务速度翻倍，则评分为 1；如果需要建立在 LLM 之上的额外工具或软件，则评分为 0.5；否则评分为 0。4

为什么实际使用情况可能达不到理论能力？由于模型的局限性，一些理论上可行的任务可能不会出现在实际使用中。其他任务可能由于法律限制、特定的软件要求、人工验证步骤或其他障碍而普及缓慢。例如，Eloundou 等人将“授权药物续配并向药房提供处方信息”标记为完全暴露（β=1）。我们尚未观察到 Claude 执行此任务，尽管该评估似乎是正确的，因为理论上它可以通过 LLM 加快速度。

尽管如此，这些理论能力和实际使用情况的衡量标准高度相关。如图 1 所示，在前四份《经济指数》报告中观察到的任务中，有 97% 属于 Eloundou 等人评定为理论上可行的类别（β=0.5 或 β=1.0）。

![Image 1](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F9d205667455ef8b78e8cbb407b6bd76556a7d859-4584x2579.png&w=3840&q=75)

**图 1：按 Eloundou 等人任务暴露度评级划分的 Claude 使用份额**。本图显示了 Claude 的使用情况分布在按理论 AI 暴露度分组的 O*NET 任务中。评级为 β=1（仅靠 LLM 完全可行）的任务占观察到的 Claude 使用量的 68%，而评级为 β=0（不可行）的任务仅占 3%。关于 Claude 使用情况的数据来自前四份《经济指数》报告。

### 职业暴露度的新衡量标准

我们的新衡量标准——**观察到的暴露度**，旨在量化：在那些 LLM 理论上可以加速的任务中，哪些在专业环境中实际看到了自动化使用？理论能力涵盖了更广泛的任务范围。通过追踪这一差距如何缩小，观察到的暴露度提供了对正在显现的经济变化的洞察。

我们的衡量标准定性地捕捉了 AI 使用的几个方面，我们认为这些方面可以预测对工作的影响。如果满足以下条件，则该工作的暴露度更高：

*   其任务在理论上可以通过 AI 完成
*   其任务在 Anthropic 经济指数中有显著的使用量 5
*   其任务在与工作相关的语境中执行
*   其在自动化使用模式或 API 实施中占有相对较高的比例
*   受 AI 影响的任务在整体角色中占较大比例 6

我们在[附录](https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf)中提供了数学细节。如果理论上可以通过 LLM 完成的任务在 Claude 流量中看到了足够的与工作相关的使用，我们将其计入已覆盖。然后，我们根据任务的执行方式进行调整：完全自动化的实施获得全部权重，而增强性使用获得一半权重。最后，将任务级别的覆盖率衡量标准按每项任务所花费的时间比例加权，平均到职业级别。

图 2 显示了观察到的暴露度（红色）与 Eloundou 等人的 β 值（蓝色）的对比，说明了我们平台上理论使用与实际使用之间的差异，并按广泛的职业类别进行了分组。我们的计算方法是：首先按我们的时间比例衡量标准加权平均到职业级别，然后按总就业人数加权平均到职业类别。例如，β 衡量标准显示，LLM 在计算机与数学（94%）以及办公与行政（90%）职业的大多数任务中具有渗透空间。

![Image 2](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fc1952c81bca02a7c8cc05ef7801e67ca60831c55-4096x4096.png&w=3840&q=75)

**图 2：按职业类别划分的理论能力与观察到的暴露度**。LLM 理论上可以执行的工作任务份额（蓝色区域）以及我们从使用数据中得出的自身工作覆盖率衡量标准（红色区域）。

红色区域描绘了 Anthropic 经济指数中的 LLM 使用情况，展示了人们在专业环境中如何使用 Claude。覆盖率表明，AI 远未达到其理论能力。例如，Claude 目前仅覆盖了计算机与数学类别中所有任务的 33%。

随着能力的提升、采用的普及和部署的深化，红色区域将不断扩大以覆盖蓝色区域。同时也有很大的未覆盖区域；当然，许多任务仍然超出了 AI 的能力范围——从修剪树木和操作农用机械等体力农业工作，到在法庭上代表客户等法律任务。

图 3 显示了在该衡量标准下暴露度最高的十个职业。与其他显示 Claude 被广泛用于编程的数据一致，计算机程序员位居榜首，覆盖率为 75%；其次是客户服务代表，我们越来越多地在第一方 API 流量中看到他们的主要任务。最后是数据录入员，其阅读源文档和录入数据的主要任务实现了显著的自动化，覆盖率为 67%。

![Image 3](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fa16a5b9ba4a5280ef41e058dff6964a3f116c854-4584x2579.png&w=3840&q=75)

**图 3：暴露度最高的职业**。使用我们的任务覆盖率衡量标准得出的暴露度最高的前十个职业。

在最底端，30% 的工作者覆盖率为零，因为他们的任务在我们的数据中出现频率太低，未能达到最低阈值。这一群体包括例如厨师、摩托车修理工、救生员、调酒师、洗碗工和更衣室服务员。

## 暴露度如何与预期就业增长和工作者特征相关联

美国劳工统计局（BLS）定期发布就业预测，最新的一组数据于 2025 年发布，涵盖了对 2024 年至 2034 年每个职业就业变化的[预测](https://data.bls.gov/projections/occupationProj)。在图 4 中，我们将我们的工作级别覆盖率衡量标准与他们的预测进行了比较。

一项按当前就业人数加权的职业层面回归分析发现，观察到的暴露度越高的工作，其增长预测略弱。覆盖率每增加 10 个百分点，BLS 的增长预测就会下降 0.6 个百分点。这提供了一定程度的验证，表明我们的衡量标准与劳动力市场分析师独立得出的估计相吻合，尽管这种关系很微弱。有趣的是，如果仅使用 Eloundou 等人的衡量标准，则不存在这种相关性。

![Image 4](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4da91f7eeb62c2c7b09600282c9163f6bdf0d5ca-4584x2579.png&w=3840&q=75)

**图 4：BLS 预测的 2024-2034 年就业增长与观察到的暴露度对比**。包含 25 个等大分箱的分箱散点图。每个实心圆点显示其中一个分箱的平均观察暴露度和预测就业变化。虚线显示了按当前就业水平加权的简单线性回归拟合。小菱形标记了用于说明的个别示例职业。

图 5 使用来自当前人口调查（Current Population Survey）的数据，展示了在 ChatGPT 发布前三个月（2022 年 8 月至 10 月）处于暴露度最高四分位数的工作者与 30% 零暴露度工作者的特征。7 这两个群体截然不同。暴露度较高的群体中，女性的可能性高出 16 个百分点，白人的可能性高出 11 个百分点，亚裔的可能性几乎是两倍。他们的平均收入高出 47%，并且受教育程度更高。例如，拥有研究生学历的人在未暴露群体中占 4.5%，但在暴露度最高的群体中占 17.4%，相差近四倍。

![Image 5](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fff251060d019f4fdf6579df08aaf61e94b4c2d27-4584x2579.png&w=3840&q=75)

**图 5：高暴露度与低暴露度工作者之间的差异，当前人口调查**

## 确定结果的优先级

掌握了这些暴露度衡量标准后，问题在于我们要寻找什么。研究人员采取了不同的方法。例如，Gimbel 等人（2025 年）使用当前人口调查追踪职业结构的变化。他们的论点是，AI 对经济的任何重要重组都会表现为工作岗位分布的变化。¹（他们发现，到目前为止，变化并不显著。）Brynjolfsson 等人（2025 年）使用薪酬处理公司 ADP 的数据研究了按年龄组划分的就业水平，而 Acemoglu 等人（2022 年）和 Hampole 等人（2025 年）则分别使用了来自 Burning Glass（现为 Lightcast）和 Revelio 的招聘启事数据。

我们将失业率作为优先关注的结果，因为它最直接地捕捉了潜在的经济损害——失业的工作者想要一份工作但尚未找到。在这种情况下，招聘启事和就业情况并不一定预示着需要政策干预；高暴露度职位招聘启事的减少可能会被相关职位空缺的增加所抵消。可以说，AI 对劳动力市场最有害的发展应该包括一段失业率上升的时期，因为被替代的工作者需要寻找替代方案。当前人口调查非常适合追踪这一点，因为失业的受访者会报告他们之前的工作和行业。

## 初步结果

接下来我们研究失业趋势，将我们的职业级别衡量标准与当前人口调查中的受访者进行匹配。

在解释我们的覆盖率衡量标准时，一个关键问题是：哪些工作者应被视为受到了“处理”（treated）？仅仅 10% 的任务覆盖率就能预期就业发生变化吗？Gans 和 Goldfarb（2025 年）表明，如果 O 型环模型（O-ring model）最能描述工作，那么只有当所有任务都有一定程度的 AI 渗透时，才可能看到就业影响。Hampole 等人（2025 年）认为，平均暴露度会降低劳动力需求，但暴露度仅集中在某些任务上可以抵消这一点。而 Autor 和 Thompson（2025 年）则强调了剩余任务所需的专业知识水平。

出于简化的目的，并注意到我们最关心的是重大影响，我们将分析的重点放在这样一个观点上：平均暴露度最高的群体应该最能感受到影响。我们将时间加权任务覆盖率处于最高四分位数的工作者与处于最低四分位数的工作者进行比较。如果 AI 能力快速进步，较低百分位数的任务覆盖率也可能很高，这可能会使绝对阈值更有帮助。但我们假设影响应该首先波及暴露度最高的工作者，并展示了改变用于定义“处理”的截断值时的结果。

图 6 的上半部分显示了自 2016 年以来，处于暴露度最高四分位数的工作者和未暴露群体的原始失业率趋势。在 COVID 期间，受 AI 暴露较少的工作者（他们更有可能从事需要亲自到场的工作）的失业率增幅要大得多。从那以后，两组之间的趋势基本相似。下半部分在双重差分框架（difference-in-differences framework）中衡量了暴露度最高和最低工作者之间的差距大小，反映了原始数据的发现。自 ChatGPT 发布以来，这一差距的平均变化很小且不显著，这表明暴露度较高群体的失业率略有上升，但该影响与零无异。8

![Image 6](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fe4cf7bf0364758fe1bfbb7b915c8f1db6d7bd4d4-4584x2579.png&w=3840&q=75)

**图 6：观察到的暴露度最高四分位数工作者与无 AI 暴露工作者的失业率趋势，当前人口调查**。上半部分显示了处于暴露度最高四分位数的工作者（红线）和 30% 零暴露度工作者的失业率。下半部分在双重差分框架中衡量了这两个序列之间的差距。

这个框架能识别出什么样的情景？基于汇总估计的置信区间，1 个百分点数量级的失业率差异性增长将是可检测到的（这会随着新数据的出现而改变，因此这只是一个粗略的估计）。如果前 10% 的所有工作者都被解雇，这将使最高四分位数群体内的失业率从 3% 增加到 43%，并将使总体失业率从 4% 增加到 13%。

一个较小但仍令人担忧的影响将是诸如“白领大衰退”之类的情景。在 2007-2009 年的大衰退期间，美国的失业率翻了一番，从 5% 升至 10%。在暴露度最高的四分位数中，这种翻倍将使其失业率从 3% 升至 6%。这在我们的分析中也应该是可见的。请注意，我们的核心估计是基于暴露群体与较少暴露群体相比在失业率上的*差异性*变化。如果所有工作者的失业率平行上升，我们不会将其归因于仍然使许多任务未受影响的 AI 进步。

一个特别令人关注的群体是年轻工作者。Brynjolfsson 等人报告称，在 22 至 25 岁的工作者中，暴露职业的就业率下降了 6-16%。他们将这种下降主要归因于招聘放缓，而不是离职增加。9

我们发现，暴露职业中年轻工作者的失业率持平（见[附录](https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf)）。但招聘放缓不一定会表现为失业率上升，因为许多年轻工作者是劳动力市场的新进入者，在 CPS 数据中没有列出的职业，他们可能会退出劳动力市场，而不是显示为失业。为了直接解决招聘问题，我们使用 CPS 的面板维度，计算随着时间的推移，在暴露度较高与较低的职业中开始新工作的年轻（22-25 岁）工作者的百分比。图 7 显示了年轻工作者的月度求职成功率（即当工作者报告了一份他们上个月没有的工作时），按他们进入的是高暴露度还是低暴露度职业进行划分。

![Image 7](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1e4020e4312e8eeb4601f542a96cb238234f6c8b-4584x2579.png&w=3840&q=75)

**图 7：在观察到的高暴露度和无 AI 暴露度职业中，22-25 岁工作者的新工作入职情况，当前人口调查**。上半部分显示了在高暴露度与无暴露度职业中开始新工作的年轻工作者的百分比。下半部分在双重差分框架中衡量了这两个序列之间的差距。

除了 2020-2021 年的一些大幅波动外，这些序列在 2024 年在视觉上出现了分歧，年轻工作者被聘用到暴露职业的可能性相对较低。暴露度较低职业的求职成功率稳定在每月 2%，而进入暴露度最高工作的比率下降了约半个百分点。后 ChatGPT 时代的平均估计是，与 2022 年相比，暴露职业的求职成功率下降了 14%，尽管这仅仅勉强具有统计学意义。（对于 25 岁以上的工作者，没有出现这种下降。）

这可能提供了 AI 对就业早期影响的一些信号，并呼应了 Brynjolfsson 等人的发现。但也有几种其他的解释。未被聘用的年轻工作者可能留在现有的工作岗位上，从事不同的工作，或者重返学校。另一个与数据相关的注意事项是，在调查中，工作转换可能更容易出现测量误差。10

## 讨论

本报告引入了一种理解 AI 对劳动力市场影响的新衡量标准，并研究了其对失业和招聘的影响。如果工作任务在理论上可以通过 LLM 完成，并且在我们的平台上观察到自动化、与工作相关的用例，那么这些工作对 AI 的暴露度就更高。我们发现，计算机程序员、客户服务代表和财务分析师是暴露度最高的职业之一。使用来自美国的调查数据，我们发现对暴露度最高职业中工作者的失业率没有影响，尽管有初步证据表明，22-25 岁工作者进入这些职业的招聘速度略有放缓。

我们的工作是记录 AI 对劳动力市场影响的第一步。我们希望本报告中采取的分析步骤，特别是围绕覆盖率和反事实推断的步骤，将随着有关就业和 AI 使用的新数据的出现而易于更新。一种既定的方法可能有助于未来的观察者从噪音中分离出信号。

目前的工作还有几个需要改进的地方。我们的使用数据将被纳入未来的更新中，形成经济中任务和工作覆盖率不断演变的图景。Eloundou 等人的指标也可以进行更新，因为它是与截至 2023 年初的 LLM 能力相关联的。此外，鉴于围绕年轻工作者和劳动力市场新进入者的提示性结果，下一个关键步骤可能是研究在暴露领域拥有学历的应届毕业生是如何在劳动力市场中摸索前行的。

## 附录

可在[此处](https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf)获取。

### 致谢

作者：Maxim Massenkoff 和 Peter McCrory。

感谢以下人员：Ruth Appel, Tim Belonax, Keir Bradwell, Andy Braden, Dexter Callender III, Miriam Chaum, Madison Clark, Jake Eaton, Deep Ganguli, Kunal Handa, Ryan Heller, Lara Karadogan, Jennifer Martinez, Jared Mueller, Sarah Pollack, David Saunders, Carl De Torres, Kim Withee, 和 Jack Clark。

我们还要感谢 Martha Gimbel, Anders Humlum, Evan Rose, 和 Nathan Wilmers 对本报告早期版本提供的反馈。

### 引用

```
@online{massenkoffmccrory2026labor,
 author = {Maxim Massenkoff and Peter McCrory},
 title = {Labor market impacts of AI: A new measure and early evidence},
 date = {2026-03-05},
 year = {2026},
 url = {https://www.anthropic.com/research/labor-market-impacts},
}
```

## 参考文献

Acemoglu, Daron and Pascual Restrepo, "Robots and Jobs: Evidence from US Labor Markets," _Journal of Political Economy_, 2020, 128 (6), 2188–2244.

Acemoglu, Daron, David Autor, Jonathon Hazell, and Pascual Restrepo, "Artificial intelligence and jobs: Evidence from online vacancies," _Journal of Labor Economics_, 2022, 40 (S1), S293–S340.

Appel, Ruth, Maxim Massenkoff, Peter McCrory, Miles McCain, Ryan Heller, Tyler Neylon, and Alex Tamkin, "Anthropic Economic Index report: economic primitives," 2026.

Autor, David H, David Dorn, and Gordon H Hanson, "The China syndrome: Local labor market effects of import competition in the United States," _American Economic Review_, 2013, 103 (6), 2121–2168.

Autor, David H, & Thompson, N. (2025). Expertise. NBER Working Paper, (w33941).

Blinder, Alan S et al., "How many US jobs might be offshorable?," _World Economics_, 2009, 10 (2), 41.

Borusyak, Kirill, Peter Hull, and Xavier Jaravel, "Quasi-experimental shift-share research designs," _The Review of Economic Studies_, 2022, 89 (1), 181–213.

Brynjolfsson, Erik, Bharat Chandar, and Ruyu Chen, "Canaries in the coal mine? six facts about the recent employment effects of artificial intelligence," _Digital Economy_, 2025.

Eckhardt, Sarah and Nathan Goldschlag, "AI and Jobs: The Final Word (Until the Next One)," Economic Innovation Group (EIG), August 2025. Available at: [https://eig.org/ai-and-jobs-the-final-word/](https://eig.org/ai-and-jobs-the-final-word/)

Eloundou, Tyna, Sam Manning, Pamela Mishkin, and Daniel Rock, "Gpts are gpts: An early look at the labor market impact potential of large language models," arXiv preprint arXiv:2303.10130, 2023, 10.

Fujita, S., Moscarini, G., & Postel-Vinay, F. (2024). Measuring employer-to-employer reallocation. _American Economic Journal: Macroeconomics_, 16(3), 1-51.

Gans, Joshua S. and Goldfarb, Avi, "O-Ring Automation," NBER Working Paper No. 34639, December 2025. Available at SSRN: [https://ssrn.com/abstract=5962594](https://ssrn.com/abstract=5962594)

Gimbel, Martha, Molly Kinder, Joshua Kendall, and Maddie Lee, "Evaluating the Impact of AI on the Labor Market: Current State of Affairs," Research Report, The Budget Lab at Yale, New Haven, CT October 2025. Available at: [https://budgetlab.yale.edu](https://budgetlab.yale.edu/).

Graetz, Georg and Guy Michaels, "Robots at Work," _Review of Economics and Statistics_, 2018, 100 (5), 753–768.

Hampole, Menaka, Dimitris Papanikolaou, Lawrence DW Schmidt, and Bryan Seegmiller, "Artificial intelligence and the labor market," Technical Report, National Bureau of Economic Research 2025.

Handa, Kunal, Alex Tamkin, Miles McCain, Saffron Huang, Esin Durmus, Sarah Heck, Jared Mueller, Jerry Hong, Stuart Ritchie, Tim Belonax, Kevin K. Troy, Dario Amodei, Jared Kaplan, Jack Clark, and Deep Ganguli, "Which Economic Tasks are Performed with AI? Evidence from Millions of Claude Conversations," 2025.

Hui, Xiang, Oren Reshef, and Luofeng Zhou, "The short-term effects of generative artificial intelligence on employment: Evidence from an online labor market," _Organization Science_, 2024, 35 (6), 1977–1989.

Johnston, Andrew and Christos Makridis, "The labor market effects of generative AI: A difference-in-differences analysis of AI exposure," Available at SSRN 5375017, 2025.

Massenkoff, Maxim, "How predictable is job destruction? Evidence from the Occupational Outlook," 2025. _Working Paper._

Ozimek, Adam, "Overboard on Offshore Fears," 2019. [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3777307](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3777307)

Tamkin, Alex and Peter McCrory, "Estimating AI productivity gains from Claude conversations," 2025.

Tomlinson, K., Jaffe, S., Wang, W., Counts, S., & Suri, S. (2025). Working with AI: measuring the applicability of generative AI to occupations. arXiv preprint arXiv:2507.07935.

## 脚注

1.  工作可离岸外包性：Blinder 等人（2009）和 Ozimek（2019）；政府增长预测：Massenkoff（2025）；机器人：Graetz 和 Michaels（2018）以及 Acemoglu 和 Restrepo（2020）；中国冲击：Autor 等人（2013）和 Borusyak 等人（2022）。

2.  Brynjolfsson 等人（2025）使用 Eloundou 等人（2023）的任务暴露度衡量标准和 ADP 的薪酬数据，比较了受 AI 暴露较多与较少职业中工作者的就业趋势。Johnston 和 Makridis（2025）使用美国行政数据进行了类似的基于任务的分析，但他们将处理汇总到了行业层面。Hui 等人（2024）研究了 Upwork 上的自由职业如何应对 ChatGPT 和高级图像生成工具的发布，比较了每种工具发布日期前后直接受影响类别和未受影响类别中的工作者。Hampole 等人（2025）使用历史大学招聘网络作为企业级 AI 采用的工具变量：历史上从那些毕业生后来进入 AI 相关职位的大学进行招聘的企业，面临着较低的采用成本。

3.  我们的任务和职业级别暴露度衡量标准可以很容易地纳入其他使用数据，并扩展到不同的国家。我们打算随着时间的推移将这种方法应用于新的环境。

4.  在他们的框架中，“直接暴露”的任务是指使用 LLM（输入限制为 2,000 字且无法访问最新事实）可以在一半时间内完成的任务。“借助工具暴露”的任务是指使用能够访问例如信息检索和图像处理软件的 LLM，可以实现相同加速的任务。未暴露的任务无法使用 LLM 将其持续时间缩短 50% 或更多。

5.  我们使用了前两个 Anthropic 经济指数数据集，涵盖了 2025 年 8 月和 11 月的使用情况。对于语义高度相似的 ONET 任务，我们在它们之间分配计数。

6.  每一步都涉及主观判断。Eloundou 等人（2023）的衡量标准应该作为 {0, 0.5, 1} 还是其他值输入？什么决定了“显著”的使用？我们如何处理那些看起来与高使用率任务非常相似，但由于太罕见而未能在经济指数抽样中被专门挑选出来的任务？与增强相比，自动化工作流应该多算多少？我们在附录中展开说明的一个令人欣慰的发现是，在对这些问题的许多解决方案中，工作暴露度的斯皮尔曼（等级-等级）相关性极高。

7.  为了将 O*NET-SOC 代码与 CPS 中的 occ1990 代码相匹配，我们使用了 [Eckhart 和 Goldschlag（2025）](https://eig.org/ai-and-jobs-the-final-word/) 提供的对照表。

8.  我们在[附录](https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf)中通过三种方式对此进行了进一步探讨。首先，我们探讨了用于定义“处理”的百分位截断值是否重要，将其从中位数变化到第 95 个百分位。在所有情况下，影响都是持平或负面的（意味着暴露群体的失业率下降）。接下来，我们特别关注年轻工作者，即 Brynjolfsson 等人（2025）中提到的 22 至 25 岁的人群。最后，我们使用劳工部关于失业保险索赔人的数据来衡量失业率，而不是 CPS 调查回复。在任何扩展中，我们都没有发现对暴露工作有明显的影响。

9.  这个范围很宽，因为作者提供了针对多个反事实的估计。6 个百分点的下降是与就业增长持平的反事实相比得出的。16 个百分点的估计来自比较同一公司内从事不同职业的相似工作者的设计。

10. 参见 Fujita 等人（2024）。

### 更正

*2026 年 3 月 8 日更新：更正了图 7，该图错误地颠倒了最高四分位数和零暴露组流入率之间的标签。*

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Claude]]
- [[00-元语/知识工作]]
- [[00-元语/risk]]
