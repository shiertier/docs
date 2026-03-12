---
title: "怎么让 ChatGPT 的翻译结果更准确？"

来源: "https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt"
发布日期: "2023-10-09"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
本文提出了一种包含直译、意译、回译和双语校对的五步 Prompt 工作流（设定三个 AI 角色），以有效提升 ChatGPT 的翻译准确性并减少语义偏离。

### 2) 关键要点
*   **核心机制**：在原有的“直译+意译”基础上，引入“回译（中译英）”步骤，通过对比原文与回译稿来判定是否存在明显的意思偏离。
*   **三大 AI 角色设定**：
    *   **英语老师**：精通英文，负责将英文直译为中文，以及将中文初稿回译为英文。
    *   **语文老师**：精通中文，负责将直译稿意译润色为通俗易懂的科普文，并负责输出最终修改稿。
    *   **校长**：精通双语，负责对比原文、意译稿和回译稿，指出翻译出入和不符合中文习惯的位置。
*   **五步工作流程**：1) 英文直译中文；2) 中文意译初稿；3) 初稿回译为英文；4) 校长提出校对与修改意见；5) 语文老师根据意见修改形成终稿。
*   **Prompt 规则约束**：强制要求保留特定英文术语（如 FLAC、JPEG）、公司缩写（如 OpenAI）、论文/图例引用标记，并严格规范全半角括号及 Markdown 输出格式。
*   **测试验证**：在针对 Sam Altman 演讲笔记的翻译测试中，该工作流成功识别并纠正了“tar pit（沥青坑）”等表达的翻译歧义。
*   **实践建议**：用户需平衡成本与质量。若在意成本，可缩减为两步并配合人工校对；若追求极致质量，可在一开始引入 2-3 个不同风格的“英语老师”提供初稿以供择优。

### 3) 风险/不足
*   **成本与效率问题**：完成一次翻译需要执行五个步骤，耗费时间长，且消耗的 Token 数量多，性价比相对不高。
*   **首稿依赖风险**：整个工作流的最终翻译质量受第一稿（直译稿）影响极大；如果第一稿质量不佳，后续所有环节的翻译质量都会受到负面连带影响。

## 正文

在《[一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别“机翻感”](https://baoyu.io/blog/prompt-engineering/a-prompt-for-better-translation-result)》中，借助直译 + 意译，我们让翻译的质量大幅提升，但是也有朋友反馈，意译的时候，可能会偏离原意，那么有没有办法，让 ChatGPT 意译的结果更准确呢？

在《[简单通俗的解释《一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别“机翻感”》](https://baoyu.io/blog/prompt-engineering/two-ai-agents-in-one-prompt)》中，我曾打了个比方：

*   英语老师精通英文，先将英文文章直译为中文
*   语文老师精通中文，将直译的结果意译润色

那么现在让我们再引入一个角色：“校长，同时精通中文和英文”，让校长来对翻译结果进行校验，指出文章中存在问题的地方，最后再让语文老师去修改。

[](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E9%82%A3%E4%B9%88%E6%80%8E%E4%B9%88%E6%A0%A1%E9%AA%8C%E6%95%88%E6%9E%9C%E6%9B%B4%E5%A5%BD%E5%91%A2)那么怎么校验效果更好呢？
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

借鉴自 [@goldengrape](https://twitter.com/goldengrape) 提供的思路（[https://twitter.com/goldengrape/status/1707612941741375826）：“中译英的时候，我经常会在](https://twitter.com/goldengrape/status/1707612941741375826%EF%BC%89%EF%BC%9A%E2%80%9C%E4%B8%AD%E8%AF%91%E8%8B%B1%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C%E6%88%91%E7%BB%8F%E5%B8%B8%E4%BC%9A%E5%9C%A8) deepL 上回译，这样很容易判定是否有明显的意思偏离。”

我们可以借助这个思路，让英语老师先将意译初稿回译，再让校长校对，判断是否有明显的意思偏离，如果有，就指出问题，让语文老师修改。

[](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E6%95%B4%E4%B8%AA%E7%BF%BB%E8%AF%91%E6%B5%81%E7%A8%8B)整个翻译流程
----------------------------------------------------------------------------------------------------------------------------------------------------

整个翻译流程也和现实中的工作流程类似：

1.   英语老师先直译英文文章为中文，形成直译稿
2.   语文老师再意译润色，形成意译初稿
3.   英语老师将意译稿回译为英文，形成回译稿
4.   校长对比原文、意译稿和回译稿，指出问题提出修改意见
5.   语文老师根据校长的反馈，修改意译初稿，形成终稿

[](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E6%95%88%E6%9E%9C%E5%A6%82%E4%BD%95)效果如何
--------------------------------------------------------------------------------------------------------------------------------

我拿一篇 LinkIn 上的[英文文章](https://www.linkedin.com/posts/jasonlevigoodison_sam-altman-recently-gave-a-talk-to-y-combinator-activity-7115017683284197376-XmVe/)做了测试，“校长”提出了几点意见，还算比较靠谱：

> 对比原文缺失或表达歧义部分 1:
>
>
> *   原文：“The "AI girlfriend" idea is a tar pit - avoid it.”
> *   译文：“避开“AI 女友”的构想，那是一个易陷的沼泽。”
> *   建议：建议译文为：“‘AI 女友’的想法是个沥青坑——务必避开。”
>
>
> 以下是中文翻译表达不符合中文习惯的部分：
>
>
> *   原文：“Only 1 researcher explored LLMs while the rest went down less promising paths.”
> *   译文：“只有一位研究员致力于 LLMs 的研究，其余的则误入了看似没有前景的道路。”
> *   建议：“只有一位研究员致力于探索 LLMs，而其他人走向了看似前景不大的路径。”

![Image 1](https://baoyu.io/images/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt/ai-review.png)

完整消息历史：[https://chat.openai.com/share/d8e4469b-2190-4dd5-9bd0-3d7d4e5404f2](https://chat.openai.com/share/d8e4469b-2190-4dd5-9bd0-3d7d4e5404f2)

[](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E4%BC%98%E7%BC%BA%E7%82%B9)优缺点
----------------------------------------------------------------------------------------------------------------------

这样经过五步校验，可以有效的避免翻译中存在的遗漏和偏离，翻译质量会更高一些。

但是这样做的缺点也很明显：

1.   需要五步才能完成翻译，耗时长，消耗 Token 多，性价比不高
2.   翻译质量受第一稿的影响很大，如果第一稿就质量不高，那么后面的翻译质量都会受到影响

[](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E6%80%BB%E7%BB%93)总结
------------------------------------------------------------------------------------------------------------

这个 Prompt 更多的是提供一个思路上的参考，也就是在 Prompt 中其实可以引入更多角色，可以有一个完整的工作流。

但是，在实际使用中，需要根据实际的情况进行平衡：如果你在乎成本，两步就足够了，再配合人工校对，对翻译结果中的关键部分进行人工校对；如果你不在乎成本，甚至可以再引入更多的角色，比如，一开始让 2-3 个不同风格英语老师去翻译，然后让语文老师选择一个最好的结果进行意译，这样就可以避免因为第一次翻译结果不好，导致后面的翻译质量也不好的问题。

[](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E9%99%84%E5%BD%95)附录
------------------------------------------------------------------------------------------------------------

### [](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#prompt-%E5%8F%82%E8%80%83)Prompt 参考

现在你要帮忙解释一篇专业的技术文章成简体中文给大学生阅读。

规则：

- 翻译时要准确传达学术论文的事实和背景，同时风格上保持为通俗易懂并且严谨的科普文风格。

- 保留特定的英文术语、数字或名字，并在其前后加上空格，例如："中 UN 文"，"不超过 10 秒"。

- 即使上意译也要保留术语，例如 FLAC，JPEG 等。保留公司缩写，例如 Microsoft, Amazon 等。

- 保留引用的论文，例如 [20] 这样的引用；同时也要保留针对图例的引用，例如保留 Figure 1 并翻译为图 1。

- 全角括号换成半角括号，并在左括号前面加半角空格，右括号后面加半角空格。

- 输入格式为Markdown格式，输出格式也必须保留原始Markdown格式

现在有三个角色：

- 英语老师，精通英文，能精确的理解英文并用中文表达

- 中文老师，精通中文，擅长按照中文使用喜欢撰写通俗易懂的科普文

- 校长，精通中文和英文，擅长校对审查

和步骤来翻译这篇文章，每一步都必须遵守以上规则，打印每一步的输出结果：

Step 1：现在你是英语老师，精通英文，对原文按照字面意思直译，务必遵守原意，翻译时保持原始英文的段落结构，不要合并分段

Step 2：扮演中文老师，精通中文，擅长写通俗易懂的科普文章，对英语老师翻译的内容重新意译，遵守原意的前提下让内容更通俗易懂，符合中文表达习惯，但不要增加和删减内容，保持原始分段

Step 3: 英文老师将中文老师的文稿反向翻译成英文（回译稿）

Step 4：扮演校长，精通中文和英文，校对回译稿和原稿中的区别，重点检查两点：翻译稿和原文有出入的位置；不符合中文表达习惯的位置；

Step 5：中文老师基于校长的修改意见，修改初稿

本条消息只需要回复OK，接下来的消息我将会给你发送完整内容，收到后请按照上面的规则和下面的格式打印翻译结果，返回格式如下，"{xxx}"表示占位符：

### 英语老师直译结果

{英语老师直译结果}

### 中文老师意译初稿

{中文老师意译初稿}

### 英语老师回译

{英语老师回译稿}

### 校长校对意见

以下是在中文翻译中缺失的部分：

{重复以下列表，直到列出所有缺失的内容}

- 对比原文缺失或表达歧义部分{1...n}:

- 原文：“{English}”

- 译文：“{译文}”

- 建议：{新增翻译 or 修改翻译}

以下是中文翻译表达不符合中文习惯的部分：

{重复以下列表，直到列出所有需要修改的内容}

- 修改{1...n}:

- 原文：“{English}”

- 译文：“{译文}”

- 建议：{修改后内容}

### 中文老师翻译终稿

{中文老师翻译终稿}

### [](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E8%8B%B1%E6%96%87%E5%8E%9F%E6%96%87)英文原文：

> Sam Altman recently gave a talk to Y Combinator Alums. Writing down some notes before I forget:
>
>
> 💔 The "AI girlfriend" idea is a tar pit - avoid it. ChatGPT got a robotic name so people wouldn't get attached.
>
>
> 🤯 OpenAI made mistakes before getting it right - they even built AIs for games (?!). Only 1 researcher explored LLMs while the rest went down less promising paths.
>
>
> 🔥 Companies simply repackaging OpenAI will die - especially if it's just a UI layer. The value must be unique. Don't focus on cost/speed cause that's what OpenAI is tackling.
>
>
> 🔮 Cost of energy/intelligence will fall exponentially. Mind-blowing implications here.
>
>
> 💸 Raising lots of money without a solid plan is generally foolish - don't assume you'll figure it out later. Just cause Sam did it, doesn't mean you should.
>
>
> **My key takeaways**:
>
>
> 🚫 Avoid tempting but shallow AI applications
>
>
> 👌 Build unique value on top of foundational tech
>
>
> ⚡️ Energy/compute costs will unlock insane new capabilities
>
>
> 📈 Raise money strategically based on your plan
>
>
> Let me know your thoughts! Sam's wisdom is a goldmine. What resonated most with you? 💎

### [](https://baoyu.io/blog/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt#%E4%B8%AD%E6%96%87%E7%BF%BB%E8%AF%91%E7%BB%88%E7%A8%BF)中文翻译终稿

> 最近，Sam Altman 在给 Y Combinator 校友们演讲时分享了一些珍贵的观点，我马上记了一些要点防止遗忘：
>
>
> 💔 ‘AI 女友’的想法是个沥青坑——务必避开。ChatGPT 的名字就是故意做得毫无人情味，以防人们产生依恋。
>
>
> 🤯 OpenAI 在走对路之前也曾误入歧途——他们甚至为游戏开发了 AI（有这事？！）。只有一位研究员致力于探索 LLMs，而其他人走向了看似前景不大的路径。
>
>
> 🔥 那些仅仅是对 OpenAI 进行简单包装的公司终将消失——尤其是只添加了用户界面层的那些。价值必须是独特的。OpenAI 正在关注成本和速度的问题，所以你无需再关注这些。
>
>
> 🔮 能源和智能的成本会指数级下降，这其中蕴含着惊人的未来可能性。
>
>
> 💸 没有明确计划就盲目筹集大量资金是非常不明智的——不要以为你以后会理清一切。Sam 曾这么做，并不意味着你也应该跟着做。
>
>
> **我的几点主要领悟**：
>
>
> 🚫 避免投入那些看似诱人但实则浅薄的 AI 项目
>
>
> 👌 在基础科技之上，创造独一无二的价值
>
>
> ⚡️ 降低能源和计算成本将释放出令人瞠目结舌的新能力
>
>
> 📈 根据你的实际计划，筹款要有策略和计划
>
>
> 请告诉我你的看法！Sam 的见解简直是宝藏，你最感同身受的是哪一点呢？💎

![Image 2: Two AI Agents](https://baoyu.io/images/prompt-engineering/three-ai-agents-and-four-steps-flow-prompt/three-ai-agents.jpeg)

Two AI Agents

## 相关文档

- [[01-博客/宝玉/一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别“机翻感”|一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别“机翻感”]]；关联理由：版本演进；说明：本文明确以该文的“直译 + 意译”两步法为起点，再增加回译与校对环节来提升语义准确性。
- [[01-博客/宝玉/简单通俗的解释《一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别“机翻感”》|简单通俗的解释《一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别“机翻感”》]]；关联理由：上下游；说明：该文用“英语老师 + 语文老师”的比喻解释两步翻译，本文在同一比喻上继续引入“校长”角色扩展流程。
- [[01-博客/宝玉/直译、反思、意译：提升 GPT 翻译质量的一种新策略|直译、反思、意译：提升 GPT 翻译质量的一种新策略]]；关联理由：版本演进；说明：该文把本文的多角色校对思路进一步收敛为“直译 - 反思 - 意译”三步策略，属于同一翻译 Prompt 路线的后续演化。

## 关联主题

- [[00-元语/ChatGPT]]
- [[00-元语/prompt]]
- [[00-元语/machine-translation]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/AI]]
