---
title: "Kimi悄悄上线&quot;探索版&quot;，这下我真的想扔掉搜索引擎了。"
发布日期: 2024-10-11
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647665757&idx=1&sn=00f4393df0ee0c8f7f3b0becd4bce9d1&chksm=f1a13d24bb773ff24a9b7d5d3f9fbfc2587ea2d34b4cf0ce4cf44d64ddb1dceb8d2d97bed8f7"
---

## 摘要

**1) 一句话总结**
Kimi上线了基于思维链（CoT）和深度推理的“探索版”AI搜索功能，通过“先拆解、再推理、后回答”的机制，大幅提升了处理复杂多任务的准确性与实用性。

**2) 核心要点**
*   **触发方式**：在Kimi对话框中输入“/”并按Enter键即可调用“Kimi 探索版”。
*   **核心机制**：引入思维链（CoT）技术，摒弃传统的直接关键词检索，采用“理解拆解问题 -> 分步独立搜索 -> 逻辑推理 -> 整合答案”的类人思考路径。
*   **数理与代码能力**：在搜索过程中支持调用数学预测模型（如线性回归、指数平滑）进行计算，并能自主编写Python代码执行遍历统计等复杂任务。
*   **强指令遵循**：能够处理包含多重限制条件的复杂任务（如指定数据源、预算限制、多方案对比、特定表格输出等），并严格按步骤执行。
*   **自我反思纠错**：内置“反思层”机制（非每次触发），当AI在推理过程中发现检索数据错误或逻辑不通时，会自动推翻重来并输出修正后的正确答案。
*   **产品定位**：侧重于工程实现与实际用户体验（类似更接地气的联网版o1），而非单纯比拼大模型底座跑分。

**3) 风险/不足**
*   **时间节点抓取误差**：在基于时间线检索时可能出现日期混淆（例如测试中将10月6日的演讲稿错抓为6月10日）。
*   **部分实时数据偏差**：在抓取特定实时商业数据时可能存在轻微不准（例如测试中个别Steam游戏的当前售价抓取有误）。

## 正文

昨天晚上打开Kimi，想用它帮我朋友写个东西。

突然发现，他们上新功能了。

得，又不让我睡觉了。。。

真的，我不知道你们有没有发现。之前动静最大，没事就能掀起AI圈山呼海啸的Kimi，自从7月上了个浏览器插件、上了个AIPPT之后，突然“人间蒸发”了一样。

在最近AI圈各种更新、八卦满天飞时，Kimi岁月静好得让人心慌。

一眨眼，两个月啊，这两个月，你知道我是怎么过的吗。。。

AI媒体圈不能没有Kimi，就像西方不能没有耶路撒冷。

谁叫你Kimi就是流量密码呢。。。

今天Kimi的这个新功能，叫“kimi探索版”，其实就是加持了深度推理的AI搜索。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoJOiaLia4nZW8QXzjZhd5LtnzzLHH4d7n9xywILSHZpSaBNyveuYpajrnx4UPyTiaaCpr1ib3j1qrJFA/640?wx_fmt=png&from=appmsg)

AI搜索相关的产品我也写过太多了，不计其数，之前各家AI也前仆后继地冲向搜索功能，快特么卷成麻花了。

Kimi这个一直以产品体验著称的公司，我真的好奇他们还能怎么玩AI搜索。

进入Kimi后，在对话框输入“/”，然后按一下Enter，就能触发“Kimi 探索版”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXkE5YFMozETJK2oW7aonkph2yBMxPoql7840lA9DUhwWdXdskS56Gwg/640?wx_fmt=png&from=appmsg)

丝滑、简单。

在调出Kimi 探索版功能后，直接输入问题等Kimi查找然后回答就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXabExEamR1tN0kKM4o8n7QuZX32V1EogFaG5Ay1bOF3Mqap5LcjgHqw/640?wx_fmt=png&from=appmsg)

整体的步骤，就是拿到问题不直接莽，而是先拆解、再推理、最后才给答案。

其实就是思维链CoT那套。

这玩意用在AI搜索里面，搜索体验还真的有点爽。

我用几个case，给大家感受一下这套玩意儿的能力。

比如，我让Kimi推测黑悟空今年的销量：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXf0fu6pNUpFefrsV8G6UT4qK2rBGMQXQUbrS4IcrdIA1S2ImvEoKgZQ/640?wx_fmt=jpeg&from=appmsg)

Kimi就知道要先搜索现有销售数据，再找推测模型，最后给我答案。

它回答得非常详细。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXKZG7nia43k5tv6GGBziba6zAPE4ia739ibGwZBTeTPZccPCkqBBmknXP7Q/640?wx_fmt=jpeg&from=appmsg)

思路清晰，抓的数据也基本都对。

更好玩的是，kimi搜索现在不仅能调用公式做计算，甚至用的还是两种预测模型。这什么线性回归、指数平滑的数学公式弹出来的时候，我都懵了。。。

回答思路真的无懈可击。

再比如，我让Kimi搜索“根据《西游记》的描写，玉皇大帝是住在平流层还是对流层”：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXzRTKOkkeicSjuPRxLicFMqqdQc5mf4xpRLWGAGZRUXan9QWbicHr5tkvw/640?wx_fmt=gif&from=appmsg)

可以看到Kimi的深入搜索，不是那种直接把问题打碎成一堆关键字，然后用关键字去公域搜索，抓取一堆文章回来的思路了。

而是先分步，再搜索。它把我的问题拆成了两个小问题：

第一步，先把原本的问题理解后，拆成“《西游记》玉皇大帝住所的描写”和“住所在平流层还是对流层”，两个问题。

第二步，逐个击破新拆解的问题。

最后整合答案：玉皇大帝住平流层。

这波操作，有那人思考的味道了，不是之前AI搜索的那种一股脑的条件反射，而是像人类一样先想再搜。

这问题丢给我，我可能就直接复制粘贴，去百度一键google找现成答案了。

Kimi能想到先搜索“玉皇大帝具体住哪儿”，还挺让人惊喜的。

我追着Kimi问了一夜。一开始没抱太大期待，结果越玩越上头。

我想尽办法拿一堆问题去刁难Kimi探索版。稍微也摸索出了点使用心得：

- 简单的问题，用简洁的、有逻辑的自然语言提问，比如上面两个case，说人话就行；

- 超级复杂推理和多任务问题，最好把任务写明白。就是指导Kimi往你要的方向思考，越清晰详细越好。要是先帮Kimi理清搜索和任务思路，它能答得更出色。

比如海的那边不是快要大选了吗，我有点好奇特朗普最近的演讲又cue了几次“China”。

用户只要提出问题就可以了，但是需要AI搜索考虑的就很多了。

Kimi得先搜特朗普有多少近期演讲，找原文，然后还得写Python代码遍历统计。就算是真人上，都得花不少时间。

我直接问特朗普cue了几次中国，果然直接宕机，主要是这事确实太复杂了。。。

我就先让Kimi给我简单来了个方法。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXOIc5YXTLlibp0RiaxvHwsNTLEiabEDLAs39LT642ZslemDuQrxicTEicH7A/640?wx_fmt=png&from=appmsg)

这个方法还挺科学的，我就自己又精炼调整了一下，然后发给了Kimi。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXCErLemOwcaGnpks4AKR8KB4ib0v5WeOkwhwIeMOffVfia0Et9Uo1b3bw/640?wx_fmt=png&from=appmsg)

本来我都做好Kimi答到一半卡住的准备了。

没想到，也就花了一分多钟，它真能给我搜出来，而且答得非常详细。非常！详细！！完全按我的指令执行了每一步：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDX6XELKIjUp9HYMph4ply244Tz36ibqlotB5dfK8SbkrFjMLqO4WBE03Q/640?wx_fmt=png&from=appmsg)

原本的回答非常长一大段，为了方便贴在文章里，我就只截重点的部分。

先查的最近的演讲，然后找到转写稿。它甚至还真能写Python。。。

最后Kimi回答的结果是这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXgtK7OAVSs4opEFMib55zrfuB7ffGdQ8YKJQZ3khqcopPq5vy476m2vA/640?wx_fmt=png&from=appmsg)

川普还是那么爱喊“China”，意满离。

先不说其他，Kimi现在能完全按我的要求执行，比起很多其他的AI搜索，已经非常牛了。你就说，别的AI搜索还怎么玩。。。

当然，为了严谨，我也去Kimi给的演讲原文里核实了一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXevVdJ9WicXwxwYsic5QdEgUicJAibBicUVQOmAHz62fRQSnGhTfib44brlkg/640?wx_fmt=png&from=appmsg)

真是3次China，我只能说一句，NB。。。

再然后我把五篇演讲稿挨个点了进去，还是发现了一个小问题。

Kimi或许是用时间做的关键词抓取，应该抓10月6日的演讲，但它抓成了6月10日的文字稿，但是问题不大，这点小错误是可以容忍的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXVQ4BtOnibukAMtCXFfT2mX9bZSYgeLn77PtfMlGs79TSEd461pBXaBQ/640?wx_fmt=png&from=appmsg)

最后，经过比对验证，Kimi抓的其他演讲场次很准，而且也给了对应的视频链接，很不错。

而且说真的，比起之前的Kimi联网搜索，更新后的体验感舒适太多了。

以前这样一长串的问题，AI搜索要么是找一大堆我不需要的内容，要么是看心情选几个关键词去搜索，我问东南西北它答夏商西周。

你可以拿原本的Kimi或者啥别的AI搜索去试试这个特康普China坑比题，一问一个跑火车。

为了确定这个复杂case的执行力不是意外，我又写了一个问题来刁难Kimi。

黑悟空不知道大家都入手没，还没买的话可以蹲蹲平台折扣。Steam传统艺能就是11、12月搞秋促冬促，一般能折扣个20% 30%啥的。

如果你想到时候买好几个游戏但预算有限，可以这么问Kimi：

分析2024年Steam畅销付费游戏,并根据降价预测提供购买建议。
1.
搜索并列出2024年1月至9月Steam月度付费游戏销量榜单,使用可靠的数据来源(如SteamDB或Steam官方数据)。
2.
使用适当的数学模型或Python代码计算并排序2024年1-9月期间销量最高的5个付费游戏。请展示计算过程。
3.
基于历史数据和当前趋势,预测这5个游戏在2024年剩余时间的可能降价情况。请说明预测方法。
4.
假设预算为300元人民币,分析如何以最优惠的价格购买top5游戏中的任意两个。考虑不同的购买时间和组合。
5.
将所有信息整理成一个清晰的表格,包括游戏名称、当前价格、预计降价时间和幅度、推荐购买时间等。
6.
如果需要货币转换，请使用最新的汇率。
7.
最后，给出基于以上分析的最佳购买方案和时间建议。
优先考虑数据的准确性和购买建议的可行性。

没开玩笑，比特朗普china还坑比的题目。

但是最后，Kimi的回答把我惊得下巴都要掉了。

它给的答案巨长一串，但这回我真得多放些内容。

因为真的，太屌了。

Kimi先是自己消化了一遍我的问题，再按月列出了今年Steam销量榜，并且整理了总销量最好的5个游戏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXTP0yNhyiaYYibvZRwaiadFXfdPJkCGE6u3feNOhsLDsfnqBHzGbib5wz0g/640?wx_fmt=png&from=appmsg)

就算到这，我已经觉得很厉害了。但Kimi还在继续发力。

不仅考虑到了活动折扣安排，还预测了折扣后的价格。最后甚至对比给出了两个“最佳”方案，不仅都在预算内，连预计购买时间都安排上了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXlaOKia6bLY8qlfUHrG0bzQegsWskdp4Aib2BLQkfiayicE86VS7ya4xdoQ/640?wx_fmt=png&from=appmsg)

除了
帕鲁和战锤40k的现价抓偏了，其他都对。而且可能Kimi觉得战锤40K太新，打折力度可能太小，在最后的最佳购买方案里直接剔除掉了哈哈哈哈。

我也专门去看了下专门监测相关内容的VG insight，截止9月20日统计的steam销售数据和Kimi给的回答一致。（PS：这个图里第四的Banana是个免费游戏，Kimi没抓它的销量是对的。。。）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXVm1nN1oWXcIp3EufM0WpkXHFf14fLqvTDQiaV5k5VxbIAkzxGrpuTpw/640?wx_fmt=png&from=appmsg)

牛逼。。。

让AI成为用户的助手，在Kimi这儿已经不是简单的噱头或口号了。

甚至，我还发现了一个有趣的点。

除了会分步骤进行搜索推理之外，Kimi额外加了反思层
，不过这个反思层貌似不是每次都触发。

但有些问题Kimi在回答完以后，它自己会觉得不太行。然后小蓝机器人就会冒出来，开始自己pua自己。

比如我问了一个问题，叫：“如果所有钢琴都定期调律，估算一下北京需要多少名全职的钢琴调律师？”

Kimi就先会老样子嘟嘟嘟的去拆解、搜索。然后给出答案。但这次，它发现自己查错数据了，直接自己反思完，重来了一波，得出了正确答案。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr6SOBsfG5jRAVgyibaicGHDXwFicSwWsZxV10px5KSfkTYqvia9TLMs73Oz7icq1x4VEFcyJ1l7Jb7PWA/640?wx_fmt=png&from=appmsg)

Kimi真的，我哭死。

它的搜索思考，真的越来越接近人类的脑回路了。

憋了两个月的这个更新，我觉得挺值。

Kimi很聪明，他们没有去卷大模型底座能力。而是选择做体验、做工程，在AI搜索上引入了思维链。

而且做得很接地气，有点联网版的o1的感觉。但是却比高高在上的o1，更加的实用。
更符合普通老百姓的使用需求。

以往的AI搜索，说白了就是个高级点的关键词匹配。

比如让之前用AI搜索“北京周边国庆出行攻略”，以往AI搜索的做法，是直接抓取问题里的“北京周边出行”“出行攻略”这样的关键词，再去携程小红书之类的平台检索文章，然后汇总答案。

而现在，你可以直接让kimi跟着黑悟空的景点，按朝代来一次复杂的时空旅行。

真的，被思维链强化之后，Kimi有思考步骤、逻辑性、有意识，更像人的思考方式。

这才叫从搜索引擎到AI搜索的进化。

能像人类一样思考，AI搜出来的结果自然更准确、更实用。

这，才是真正的用户体验。

我能看到，Kimi在努力实现。

他们不卷大模型分数、不卷花里胡哨的功能，就是踏踏实实做好“AI助手”。

永远在想，怎么让AI更像人。

Kimi没有让人失望。

我也继续期待着，他们的下一步。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
