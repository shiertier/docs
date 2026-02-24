---
title: "如何写出优雅的prompt？ - 通用的万能框架"
发布日期: 2023-04-05
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658135&idx=1&sn=0c150d312dbfad69928bab63d9317d6e&chksm=f11eadd5fd77ba0008390407602f1ecef38fc0153c35b2e3752539ecd52864a02a418ad2ebb9"
---

## 摘要

**1) 一句话总结**
本文介绍了Prompt（提示词）的基本概念，并重点讲解了由GitHub开发者Matt Nigh总结的“CRISPE”万能提示词框架，帮助用户更高效地指导大语言模型生成高质量内容。

**2) 关键要点**
* **Prompt定义**：在NLP领域指提供给预训练大语言模型的提示、线索或指令，用于指导模型理解人类问题并生成合适的文本回答。
* **核心方法论**：推荐使用GitHub项目`ChatGPT3-Free-Prompt-List`中提出的**CRISPE Prompt Framework**。
* **CR (Capacity and Role/能力与角色)**：设定你希望大模型扮演的特定身份或专家角色。
* **I (Insight/洞察)**：提供任务相关的背景信息、上下文或目标受众。
* **S (Statement/陈述)**：明确指出你希望大模型执行的具体任务或输出内容。
* **P (Personality/个性)**：指定大模型回答的语气、风格或模仿的特定人物方式。
* **E (Experiment/实验)**：要求大模型为你提供多个不同的答案或示例以供选择。
* **OpenAI官方建议**：OpenAI官方文档（Best practices for prompt engineering）也提供了补充技巧，如“明确说明要做什么，而不是不做什么”以及“减少空洞和不精确的描述”。

**3) 风险/不足（文章明确指出的）**
* **内容深度局限**：本文提供的框架仅为基础应用层面的“门外惊鸿一瞥”，未深入探讨Prompt底层的专业性技术（如“思维链 / Chain of Thought”和“ICL / 上下文学习”等）。

## 正文

Prompt，绝对是现在最炙手可热的名词。

无论是ChatGPT，还是Midjourney，好像什么地方都绕不开这个词。

作为一个伪安利作者，在翻阅了大量资料以后，也想用最通俗易懂的话语让大家明白啥是prompt，以及到底应该如何写出好的prompt。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqmtfTPicEUg5iarQApL6oz5LNDdwpay9n7chd1hqibQHDNbIcibFuhLRYJFfzz6AKC9RyArebFgwKR9A/640?wx_fmt=jpeg)

prompt翻译成中文，就是“提示”。但是在NLP领域里，prompt好像并没有特别权威的官方定义，可以理解为提示，也可以是线索、指令。

就是给预训练好的大语言模型一个提示，以帮助模型更好的理解人类的问题。

可能还是有点难以理解，这里我用一个例子给大家解释：

你叫小帅，是一个卑微打工人。有一天，老板突然给你喊过去：
“小帅啊，公司要新搞一个项目，要卖椰子鸡，你给我写个方案吧”
你直接就懵逼了：“卧槽，老板，啥情况，我这啥也不知道啊。椰子鸡是啥？为啥突然要卖椰子鸡啊？我这方案咋做啊？”
这时候老板告诉你：
“你个废物，啥都不知道，你好歹是一个策划专家。我们之所以要卖椰子鸡，是因为公司要进军餐饮行业，咱们以前是做椰子的，这正好契合。方案嘛，你就用公司背景、目标人群、地段租金、成本等等方面分析去写，最少2000字啊”

如果老板不跟你说这些话，你能明白项目背景吗？你能知道要从哪些角度去写方案吗？那这方案能写得好吗？

我们把身份互换一下，小帅就是ChatGPT，你就是老板。你不说这些，十个ChatGPT都得懵逼。

“
你好歹是一个策划...等方面分析去写，最少2000字啊
”这一段，就是标准的prompt。

prompt的作用不言而喻：提供给模型输入文本，指导模型生成合适的回答。

在聊天交互中，用户可以提供一个问题或主题作为prompt，让ChatGPT生成相应的回答。而在文本生成任务中，prompt则可以指定一段前置文本，让模型在此基础上生成一段连贯的文本等等。

prompt如此重要，我们应该怎么去写一个好的prompt呢？

这时候我们就需要请出github上的大佬，@
Matt Nigh。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqmtfTPicEUg5iarQApL6oz5LXaKhgLSnfvNpCzO0hYTp7bpTsXCgE8sGFGEJ6fw7sSs6NuickcgicZPA/640?wx_fmt=png)

在
ChatGPT3-Free-Prompt-List的项目上，他总结了一套prompt的方法论框架。
这个框架的完备性非常高，直接套用就行，傻瓜又无脑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqmtfTPicEUg5iarQApL6oz5L5KAuyCFcL9dIWEtbSjzKcdqkUo1qghFVvGR4ZEUAibmiauLibReVFmOnQ/640?wx_fmt=png)

CRISPE Prompt Framework，
CRISPE是首字母的缩写，分别代表以下含义：

CR：Capacity and Role（能力与角色）。你希望 ChatGPT 扮演怎样的角色。

I：Insight（洞察），背景信息和上下文。

S：Statement（陈述），你希望 ChatGPT 做什么。

P：Personality（个性），你希望 ChatGPT 以什么风格或方式回答你。

E：Experiment（实验），要求 ChatGPT 为你提供多个答案。

这里用大佬的prompt举个例子（这里是为了大家看的懂翻译了一下，建议还是用英文做prompt）：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqmtfTPicEUg5iarQApL6oz5LW4WtialqJS1KbmTr2yGjroyayiam8ibpeAlDYXm0lLTxTwjicaqjftKYcA/640?wx_fmt=png)

组合起来就是：

作为机器学习框架主题的软件开发专家和专业博客作者，本博客的受众是对最新的机器学习进展感兴趣的技术专业人员。提供最受欢迎的机器学习框架的全面概述，包括其优缺点。通过真实的案例和案例研究，说明这些框架在各行各业中的成功应用。在回答问题时，请结合Andrej Karpathy、Francois Chollet、Jeremy Howard和Yann LeCun的写作风格。请给我多个不同的例子

这样的例子其实有很多，github上的那prompt角色大全基本都是CRISPE框架。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqmtfTPicEUg5iarQApL6oz5Lh8dw5YGNSrMkia1aEK93TgcP3Jr0ETtrp4XeXia4k8gTgyZxTB4FHyUQ/640?wx_fmt=png)

先定角色，后说背景，再提要求，最后定风格。一套齐活，是否生成多个例子可以看自己喜好。

除了
CRISPE框架外，在OpenAI的官方文档中：
Best practices for prompt engineering with OpenAI API，也介绍了很多如何写好的prompt的小技巧和规范。

包括“
Instead of just saying what not to do, say what to do instead
”、“
Reduce “fluffy” and imprecise descriptions
”等等，个人认为影响不大，感兴趣的可以去OpenAI官网看看，在此文章中就不做过多赘述了。

最后。

prompt的真正故事和其底层专业性，在我以上的表述中，仅仅只是门外的惊鸿一瞥。“思维链”“ICL”等等，才是沉在水下的冰山，也是我这个门外汉，想去努力触碰的方向。

怎么说呢，在这个新时代，终身学习必然是未来永久性的思维。

风雨同舟，愿与诸君共勉。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
