---
title: "我体验完刚发布的Claude3.5，发现最强的是这个新功能。"
发布日期: 2024-06-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647663364&idx=1&sn=201de50c7d3988c9359c62143fe693e6&chksm=f1524d31e9874e8b39df20b239249b0a8ef8b897ed6d8124fd322300cf1840b3436b8f520353"
---

## 摘要

**1) 一句话总结**
Anthropic发布了中等参数模型Claude 3.5 Sonnet，其综合性能和运行速度大幅提升，并推出了支持代码和设计实时可视化交互的核心新功能“Artifacts”。

**2) 核心要点**
* **模型发布**：Anthropic正式发布Claude 3.5 Sonnet，这是Claude 3家族中等参数量级（Sonnet）的升级版本。
* **性能越级**：尽管是中等参数模型，其综合跑分已超越前代旗舰大模型Claude 3 Opus。
* **视觉能力领先**：在视觉数学推理 (MathVista)、科学图表理解 (AI2D)、图表问答、文档视觉问答 (ANLS) 4项多模态视觉指标上达到行业最佳水平。
* **速度与性价比**：运行速度是Claude 3 Opus的2倍，同时维持了中等参数模型的较低定价。
* **Artifacts新功能**：推出需手动开启的“Artifacts”功能，在对话框右侧生成实时预览窗口，支持对代码、网页设计、SVG图形等进行可视化展示与直接交互（如直接试玩生成的网页游戏、预览PPT），大幅提升开发者与设计者的效率。
* **后续计划**：Anthropic计划在今年晚些时候发布Claude 3.5 Haiku和Claude 3.5 Opus，并正在探索类似ChatGPT的记忆（Memory）功能。

**3) 风险/不足**
* **视觉问答差距**：在视觉问答（MMMU）跑分指标上，距离竞争对手GPT-4o仍有约1个百分点的差距。
* **用户感知有限**：虽然推理能力有客观提升，但对于普通用户而言，直观的体验差异可能并不明显。

## 正文

OpenAI的最大对手，
Anthropic，没有任何预兆的，官宣了自己的新模型。

Claude 3.5
Sonnet。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKq1ODy4SEicqPHiaf86eH3aJTq6JsKiaiaibBNic7ty8FmeFXAu3nQ8DWLiaOTw/640?wx_fmt=png&from=appmsg)

Claude3家族原本有三个参数量级的模型，分别是：

Claude 3 Opus
、
Claude 3 Sonnet
和
Claude 3 Haiku。

可以理解成Opus（大杯）、Sonnet（中杯）、Haiku（小杯）。

而这一次，是把中等参数模型Sonnet的3.5升级版放了出来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqAeDIod9y3jZGf1AjS0PG8PY95rC9z9zGt0GYicSXkOAQxxx0pCJJF5w/640?wx_fmt=png&from=appmsg)

在跑分上，除了MMLU（本科水平的知识）和MATH（数学能力）上，基本都达到了最佳。

此处要注意，
Claude 3.5 Sonnet只是一个中等参数模型，在参数量级上远远达不到
Claude 3
Opus的级别，但是在跑分上超了，这就很恐怖。

而在多模态的视觉能力上也基本达到了全面领先。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqIaC7VjlOsp3MVPGdwtTuxTZDrvvDjAEGchKKicFchIISL3ktpWb2oQw/640?wx_fmt=png&from=appmsg)

除了视觉问答（MMMU）离GPT4o还查了小1个点之外，其他的4项：视觉数学推理 (MathVista)、科学图表理解 (AI2D)、图表问答、文档视觉问答 (ANLS)，都达到了最佳水平。

最搞的是，
A
nthropi
c在发布
Claude 3.5
Sonnet前为了预热，搞了一段小插曲，他们发了一段谜语。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqyW8pPM9gickWwzrH99D9ObYAuqlyfuicotg7popBm7DGRmv1VtS25iaAg/640?wx_fmt=png&from=appmsg)

我看了半天也没看明白，然后朋友跟我说，视频里面的是摩斯密码，转换过来是
Sonnet，上面的密码要用
维吉尼亚密码去破，那一刻我才焕然大雾。

于是我扔给了GPT，GPT给我破译了出来，得到了一段诗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqQNRgdSUyYDaxxn3DibpmISkgSicPEMUiaPC4Q0wWia60PYazBWzrrIgUWw/640?wx_fmt=png&from=appmsg)

No more be grieved at that with which thou hast done - 不再因你所做的事情而感到悲伤。
Roses have thorns and silver fountains mud - 玫瑰有刺，银色的泉水也有泥。
All models err yet between the third and fourth - 所有的模式都会出错，但在第三和第四之间。
Run our new creation blooms a wiser bud - 我们的新创造将绽放出一个更智慧的花蕾。

说实话破完了又一次给我干懵逼了，这个谜语让我感受到了我智商的低谷。。。

搜了半天，然后发现这段，原来是莎士比亚的第35首十四行诗，而十四行诗，其实对应的单词就是
Sonnet
。

那这下，答案就呼之欲出了，
A
nthropi
c要发Claude 3.5
Sonnet了。

就在我兴致勃勃的准备去炫耀我解出来谜题的时候，发现
A
nthropi
c已经发公告正式官宣发布
Claude 3.5
Sonnet 10分钟了。。。

全世界都知道了，而且是在我花了好大力气解完谜题之后，尼玛，瞬间有一种被
A
nthropi
c背刺的感觉
。

话说回来，除了以中等参数实现了综合跑分第一外，Claude 3.5
Sonnet的
运行速度是Claude 3 Opus的
2倍，但是定价会更便宜，毕竟是中等参数的模型。

推理能力也确实有了提升，但是坦率的讲，对于普通用户来说，可能直观的差异性，不是很大。

最让我惊喜的，其实是他们的新功能，
Artifacts
。

当用户要求 Claude 生成代码片段、文本文件或网站设计等内容时，右边就会多出来一个实时的窗口，这个就是
Artifacts
。

这个功能需要手动开启，点击头像，有个
Feature Preview，点进去，把
Artifacts打开就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqYqxczZVoYgLzl0ge25VPzaN48UYfoeET5QcoInPbrgBGjykXXibsicDw/640?wx_fmt=png&from=appmsg)

比如说，我想让Claude帮我做一个横版跳跃的小游戏，坤哥跳过各种障碍物的小游戏。

我在打开
Artifacts后，先让claude给我画一个主角，跟它说：

给我画一个8-bit的svg小人，灰色身体，白色头发，旁边有一个篮球。

他就会嘟嘟的写代码，这时候，右边的
Artif
acts窗口就会被打开。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqnZ7BnxQclv3UjFdcERQbQQNtoIreE9ibcuA7YPT9zLk8HURE0xkemBQ/640?wx_fmt=jpeg&from=appmsg)

所有代码全部写完后，他就会出来一个预览和code的tab，此时，你就可以直接在
Artif
acts窗口里的预览tab看到画出来的svg小人了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqDL4DY244JBzPUmWm465yFy9lXyeiaZwCaKLlU3fdZibhtgHicaVsnic0zA/640?wx_fmt=png&from=appmsg)

然后，我们在让claude帮忙画一些装饰的鸡。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqlnL5fQMAeqU9x3X5sIsImiaTzicEDXagrpicIHGWMoJjkaiaJg9are3eRA/640?wx_fmt=png&from=appmsg)

主角有了，鸡有了，现在，我们让claude帮忙做一个游戏，一个横版的跳跃游戏，我们的主角坤哥需要不断的跳过一只一只的小鸡。

我直接说：
现在，请帮我做一个横版的跳跃游戏，可操控的主角是8-bit的小人，需要跳过的障碍物是不断迎面而来的一只一只不同的小鸡，背景是蓝色的天空。我每次按空格键就是跳跃。

很快，代码就写好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqvQJyuKpibAjoUdhRjjLWmDN5SAIib1QCcDRc6Gchkr3QSehaxPJ6gZnA/640?wx_fmt=png&from=appmsg)

然后，我们在预览窗口，是真的，可以直接玩这个游戏的。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqEp5EbeQHAb4icDLYIncUb2KlM8gcx76xWSlKVMsO4ouWuj1dbCFAGNg/640?wx_fmt=gif&from=appmsg)

虽然把篮球给我干消失了，但是无伤大雅。

所以，
Artif
acts
对于很多开发者来说，未来，是有巨大的效率提升的，直接以可视化的方式展现在你的面前，甚至，还是可以交互的。

可以预期到，未来例如网页设计等等，会有巨大的效率提升。

甚至，你可以在Claude里，直接做一个PPT。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqHQfogCTrOa5QoPZ0npVK8nDuk2KdbONreLQic4Swd7icaYxFvYiaLhanQ/640?wx_fmt=gif&from=appmsg)

就非常的离谱。

相比于模型的更新，这种功能的更新，可能会实打实的更让我兴奋，它真的可以提升效率，以及整出不一样的花活。

而ChatGPT虽然也有类似的交互，但是也只局限于一些数据分析场景。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwiaPpbhPFl0cfwCCCPfCKqUnPKxdqeXh3CLqiaiaMNgdC5qcKMC5CdIZKa0yaHCbrtll92rHGRibKxQ/640?wx_fmt=png&from=appmsg)

Claude，这次，是做了大幅度的进化。

最后，
Anthropic说，会在今年晚些时候，放出
Claude 3.5 Haiku 和 Claude 3.5 Opus。

也在探索ChatGPT目前特有的记忆功能。

反正，这些模型厂商卷起来，对我们普通用户来说，肯定是好事。

只是老黄，可能要抱着他的英伟达，在那个铁王座上，坐的更久一点了。

还有那个奥特曼。

你的GPT-5，到底啥时候端上来？

哦不对，先把你的完全版的GPT4o端上来再说吧。

一个多月了，我还没用上新语音和新视觉呢= =

呸，渣男。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
