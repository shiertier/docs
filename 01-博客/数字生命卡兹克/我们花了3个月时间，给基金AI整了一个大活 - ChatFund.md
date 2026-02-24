---
title: "我们花了3个月时间，给基金AI整了一个大活 - ChatFund"
发布日期: 2023-07-03
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658876&idx=1&sn=9c48b6e4c25a55f46341a36d95812f10&chksm=f19944ef9176c4102fe10f506ea6646f43e4718dc752f782c508baef1a020ffc2826b31f3f1f"
---

## 摘要

**1) 一句话总结**
韭圈儿耗时3个月研发的垂直领域AI应用ChatFund正式开启内测，通过自然语言交互提供基金分析、经理分析、灵感选基等8大核心功能，大幅提升基金筛选与投资分析效率。

**2) 核心要点**
*   **研发背景与状态**：为解决通用大模型在基金领域数据错误率高的问题而研发，目前已正式开启内测（网址：https://chat.funddb.cn/）。
*   **产品定位**：面向基金从业者和普通基民，致力于“做投顾的投顾，做基民的基助”。
*   **八大核心功能**：首批上线基金分析、经理分析、持仓诊断、季报巡检、灵感选基、每日收评、每日早报、知识问答。
*   **基金与经理分析**：支持一键生成多维度分析报告，可精准查询收益率、持仓、规模、奖项等数据，并与韭圈儿APP联动以验证数据准确性。
*   **持仓诊断**：直接集成韭圈儿APP账本功能，可结合用户的投资目标，自动生成资产配置诊断报告。
*   **每日收评**：支持在1分钟内调用最新市场数据生成收盘点评，并支持自定义文案风格（如小红书风格）。
*   **灵感选基（核心功能）**：支持使用自然语言输入复杂条件（如特定收益率、剔除特定板块、经理年限等）进行基金筛选，并与APP基金筛选器打通。
*   **按股选基与组合回测**：支持根据特定股票持仓反向筛选基金，并支持对筛选出的基金一键生成组合回测。
*   **未来规划**：计划未来与加自选、社区发帖等功能实现全面打通。

**3) 风险/不足**
*   受限于后端服务器和Token压力，目前内测名额无法完全放开，需逐步发放。

## 正文

在2月ChatGPT和NewBing大爆发的时候，我们尝试去让AI评价基金评价基金经理筛选基金。

但是得到的结果却非常不尽人意，数据全是错的。

错的就算了，关键还说的一板一眼，很难去验证这个数据到底是真是假，很麻烦。

这就导致生成式大语言模型在基金领域的应用上，基本一无是处。

在被他们反复折磨后，3月底我们决定：

我们韭圈儿，自己做一个AI应用，让所有基金从业者、基民们通过AI，使用自然语言，就能超级快速、准确的分析基金，筛选基金。

“做投顾的投顾，做基民的基助”

我们花了整整3个月时间，从一开始的扒OpenAI官方文档、到微调、研究嵌入、匹配数据、写Prompt、分析场景、实验AgentGPT、写Plugin...鬼知道趟了多少的坑。。。

但是今天，我们也能自豪的宣布。

韭圈儿AI - ChatFund。

正式开启内测了！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0XaeIQuAozokEbVueTW5NYicd7NKlqE9QzoODAuBmQBBFXF8h0JcGmww/640?wx_fmt=png)

网址在此：https://chat.funddb.cn/

目前开放申请，因为后端服务器和Token压力，我们会逐步开始发放名额～

ChatFund1.0首批上线8大功能，分别是基金分析、经理分析、持仓诊断、季报巡检、灵感选基、每日收评、每日早报、知识问答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV04RMjN3mo8YqGkGDLdWNbg9yd2Dhc7XkvDg1dUlhfE2ybXQqagrCP2A/640?wx_fmt=png)

从各个场景来为基金从业人员、普通基民赋能，颠覆交互体验，提升效率。

重点给大家介绍下基金分析、经理分析、持仓诊断、每日收评、
灵感选基
这5个功能。

01. 基金分析

ChatFund可以一键快速的生成一篇基金分析报告，并且我们在ChatFund上，也集成了韭圈儿APP，当你问某只基金的时候，
韭圈儿APP就会跳转到APP页面，可以让你图文并茂结合着看，也能让你快速验证数据的准确性
（PS：对数据准确性这块我们有绝对的自信）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0GyEc4FDVKQFr19xn9Z3ibf4MMwBnwd7voeb5t3sGNkUtahAZ4qZiamUg/640?wx_fmt=png)

你也可以直接查询某只基金的所有信息，比如问万家品质生活的近一年收益率、最新持仓、最新季报观点、规模变化等等。ChatFund都有准确无误的数据来给你回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0rg07icwb65PJLDAD6rzl5hCpxFye20xmk2vyo25ThCOF0ibWewKOzH2g/640?wx_fmt=png)

当然，你也可以问一下骚问题...比如用小红书风格，给我列易方达蓝筹的5个缺点...kunkun对不起🧎。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0nCLMIg5B7kt4DZWErmBJOYicz5yWgH8icMtdhN0t6Ona2bSKaqFMX5ibw/640?wx_fmt=png)

02. 经理分析

跟基金分析类似，同样的，输入经理，就可以全面的多角度的为你生成基金经理的分析报告，韭圈儿APP会自动跳转到经理详情页，方便你查看更多详情，以及验证数据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0rxInJic65iacibEE7rhldzVmjFWjjst6ElXURa1ic6w0ehg8aPwia4MmdYQ/640?wx_fmt=png)

同样的，基金经理的任何信息都可以让ChatFund给你回答，比如查询杨鑫鑫的获得奖项、问在管规模等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0q1PL3vKt89XbNtqn8NbRSfm32Bc4TjtLWFqc2QvRakGVWVicReu1lsQ/640?wx_fmt=png)

当然，你也可以问一点进阶
的问题，比如聊聊莫海波的持仓行业变化，看看他的持仓变动是咋样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0IOrYicguibdnnX1dA7zTQiaOv9L95ZjceraE3bhj8cQRru50iaTswXZR8Q/640?wx_fmt=png)

03. 持仓诊断

如果我们让AI给你做持仓诊断，并给你生成诊断报告呢？

我们韭圈儿APP有一个功能叫做账本，我们直接集成了过来。你现在，可以对你的账本做一个诊断，看看你的资产配置怎么样了。

在ChatFund的对话中，选择你的账本，然后确定一下你的投资目标。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0gLdL9YNHAPsQCyvYJU67JNejmVtkSNptD5xCJjVEBPpL6GulFblFGw/640?wx_fmt=png)

他就会嘟嘟嘟的为你生成一篇诊断报告，右边同理，会有我们的韭圈儿的账本诊断界面，给你全新的阅读体验。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0PhRGux4AZiaBCO6ghbK77EqO5e8fzGEAlotibxNQlhiaNHpsUuIxADficQ/640?wx_fmt=png)

04. 每日收评

相信大家并不是每天都能去盯盘，或者看一遍市场。特别是基金从业者们，有时候还需要花1、2个小时的时间去写一篇收盘点评。

现在，ChatFund可以1分钟用最新的市场数据，为你生成一篇收盘点评。
想用什么风格都可以，比如典型的小红书风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0jz9Sr1bW7liabM62On5dGAApc8JV22CbjhJPyibXI47ZPCZBJUnKpngw/640?wx_fmt=png)

05. 灵感选基

最后，得隆重介绍一下我们的王牌功能，灵感选基。

在这个时代，基金筛选越来越复杂、越来越头疼的情况下
，AI的出现，给整个选基金的体验带来了降维打击。

“给我找今年收益率大于10%，且持仓中不含白酒的消费基金”

“我给列5个能涨抗跌的基金”

“给我找2021年夏普率最高的5只权益型基金，告诉我今年收益率最高的那个”

这些问题终于成为了可能。

比如你也可以问：
“帮我找经理投资年限大于10年，得过金牛奖的权益型基金，列5个”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV00t7icTZCR7Y7QbkwgPTicCrBia2MAgEdR9QnpaHB6BTayb1XmVrvyEXjg/640?wx_fmt=png)

筛选的基金直接跟我们韭圈儿的基金筛选器打通，条件直接录入，列出了所有符合条件的基金，你可以快速查看，修改等等。

当然，除了筛选器，你也可以通过股票选基金，比如最近火电涨的不错，我想挑出来买了华能国际、大唐发电、上海电力的基金。章恒的万家颐和勇夺第一。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0lPqU5ZwODKfibvCnibHMuGCgiaQAkLGQv7m60on9vPPj9vicQxyT5ZhXmw/640?wx_fmt=png)

当然，我们还有
One more thing。

筛选出的基金，你直接补一句：帮我做一个组合回测。

这个组合就做好了，比如我的条件，万家直接包场。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV06BYtqWYwU1gFda4crdfiax7o9Dcfj0lHeQOqjchx8dDufpLkcwJrH3A/640?wx_fmt=png)

未来，还能跟加自选、社区发帖等等全面打通。尽情期待吧！

写在最后

韭圈儿AI - ChatFund终于要见人了，我们也做了一个邀请海报，你可以通过链接：
https://chat.funddb.cn/加入体验，也可以通过海报扫码申请。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvwFUL9kE3sRSLCGM3iaBV0YtQxJk7nohRlibYXLrIOQghnzwxiaqTWEhkcxHjjjciboZFyyjsFpwsDQ/640?wx_fmt=png)

3个
月的时光。

致
坚守。

致热爱。

致各位真诚的陪伴。

致我们心中永不磨灭的创新。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
