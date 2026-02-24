---
title: "接入了DeepSeek后的飞书，强大到我有点陌生。"
发布日期: 2025-02-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668516&idx=1&sn=8864c1e666522fadfdcb9696b9f5bcbc&chksm=f18523135104a92c76ab7a94033f8e8a810f034f437eac637c8ab9269a3bcc1985e02b8f73b0"
---

## 摘要

**1) 一句话总结**
飞书多维表格正式接入满血版DeepSeek R1，用户通过简单的字段配置即可实现海量数据的批量AI处理与自动化分析，彻底免除多窗口切换与手动复制粘贴的繁琐操作。

**2) 关键要点**
*   **模型接入与计费：** 飞书多维表格已接入DeepSeek R1，官方为每位用户免费赠送100万Token；高频用户可绑定火山引擎账号消耗自有余额。
*   **核心工作流：** 在多维表格中添加“DeepSeek R1”字段并设置自定义Prompt，即可对指定列的数据进行批量自动化处理。
*   **数据结构化处理：** 针对AI输出结果不够结构化的问题，可通过新建“智能标签”字段，将DeepSeek的复杂输出自动归类为预设的标准化标签。
*   **可视化统计：** 处理完成的标签数据可直接利用飞书多维表格的仪表盘功能，一键生成图表（如案例中86.7%的评论认可率统计）。
*   **多模型串联应用：** 支持与其他AI能力结合，例如先用豆包视觉模型解析图片生成描述，再交由DeepSeek R1进行逻辑推理（如头像性格分析案例）。
*   **典型应用场景：** 
    *   **评论分析：** 批量处理数百条抓取的文章评论，自动判定用户情感倾向（好评/中性/负面）。
    *   **图像提示词反推：** 上传图片后，自动完成反推提示词、提取关键词、生成新风格提示词及英文翻译的一条龙服务。
    *   **内容创作：** 批量改写文案、转换短视频脚本、配合AI搜索整理早报等。

**3) 风险与不足**
*   **输出结构化较弱：** DeepSeek R1作为推理模型，其Prompt遵循能力相对一般，直接输出的结果较为杂乱，通常需要配合“智能标签”等功能进行二次结构化梳理。
*   **缺乏原生多模态能力：** DeepSeek R1自身无法直接读取和处理图片，涉及图像的任务必须依赖其他视觉理解模型（如豆包）进行前置的图文转换。

## 正文

用了两天接入了DeepSeek R1的飞书，坦率的讲，我已经被彻底折服了，今天，我必须要写一篇文章安利一下。

故事是这样的。

飞书的多维表格，在前天下午接入了满血版的DeepSeek R1。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsqcOPSgeLYpHNNFyJQ9iaT6H2Yvl2LAtrDt9SQHNMicibBgJJmgtey8ZnA/640?wx_fmt=png&from=appmsg)

你可能还没意识到，这意味着啥。

我说一个痛点，就是在此之前，每次当我需要用AI同时处理多篇内容或者各种数据的时候，我都要在N个窗口间反复横跳，究极无敌烦。我甚至为此去配个超长带鱼屏显示器。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsGzSEtYJJq99jKepq2KOIJeLiaJXEGXX9e3Ab7QjFFpodsWZuicte9alg/640?wx_fmt=jpeg&from=appmsg)

什么复制文本、打开AI、等待回答、复制回答、粘贴到表格...这一套操作下来，我的电脑总是开着一堆窗口。

但现在，飞书的多维表格接入了DeepSeek R1后，这个时代的玩法，变了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsK7x9OAiccG42l1g9Dunhlib9ogQibLJ8fAdL9Kdr8DnBibvhYI0xacD22g/640?wx_fmt=png&from=appmsg)

真的，直接起飞了。

就拿我现在经常会做的公众号评论分析为例。

因为我其实非常非常看重大家在评论区里面的评论反馈，而且每篇文章
几乎
最少都有100多条评论，所以最近我有个新增的工作是，每周日会把大家这周给我的评论给爬下来存到一个excel里，然后全部再复盘看一遍。

然后有一个数据我其实一直想看的，就是一级评论（对评论的回复是二级评论）的好评、中性、负面各自的占比。

以前我是把这个Excel文件，直接扔到ChatGPT里，每50～100条分析一次，再把分析结果复制回飞书表格里面整理。这个过程像是在搭积木，你得一块一块地搬，还不能掉。

上周末将近1500多条评论给我干的有点崩溃。

本来刚准备让AI帮我写个Python来解决，结果，飞书的多维表格+DeepSeek来了，直接把内容批量化处理的能力拉到了顶。

我只需要把爬下来的数据导入进多维表格，添加一个DeepSeek字段，设置好分析要求，然后...就没有然后了。所有的文案会自动被分析成标签结果，直接出现在表格里，还可以自动变成可视化的数据仪表盘。

太牛逼了。

话不多说，直接把我自己摸索出来的经验整理成了一个详细教程，保证你看完就会用。

用我上面说的分析文章评论举例。

第一步：现在飞书中，创建一个空白的多维表格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsObwzhqh55LYxh5WYG3Z5dpodBB0FPuHicGQjFrKzUldou1sdRJHtbXA/640?wx_fmt=png&from=appmsg)

此时，我们就拥有了一个全新的空白的多维表格了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsGX8RXia7B9YQMsTEegJqQU9eNwhbqr9j7mqK9ShHbmvQK2Xx8OYicwUA/640?wx_fmt=png&from=appmsg)

关键是设置好基础字段，我一般会删掉后面几列，只保留第一列
用来放需要处理的内容。

那在我们这个任务里，自然是用户的所有评论了（包括未精选的)。

至于公众号的评论爬取，也挺简单的，我直接无脑用字节那个类cursor的AI编程工具Trae写了一个油猴脚本来爬。

（这里也安利下Trae，现在可以免费用Claude3.5，香的一笔。）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsJkOpHCwO5ry4EVcicaPPDhFeu0KnMcjjdB2ITFicQnYzotWx7aiaaSbVQ/640?wx_fmt=png&from=appmsg)

几分钟对话，你就能搞定一个脚本，然后我用我爬的昨天的那篇文章评论数据做演示。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsWfxicyRWDuZmvC1c4iaoFicArbRTANywoe4a6hFpVTNhvMDSKwHN7gthQ/640?wx_fmt=png&from=appmsg)

剔除掉一些被删除的或者违反规定的，最后剩下来了一共267条一级数据，我们直接把这个csv文件导入到飞书多维表格中。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLs8XlxDQ9B32FKXmTpD5oYgYwIZoHqgsF8a3BNyHdww0Y9x9cQIfqsNA/640?wx_fmt=png&from=appmsg)

接下来，就要在飞书多维表格中，召唤Deepseek来处理了，点击表格顶部顶部“+”号，把鼠标放在“探索字段捷径处”，搜索“Deepseek”，选择“Deepseek R1”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLseoOVGgnktP2O3VaNMyIibETFdYicN77VHEYxichnoQicflPbmQwLLePmkw/640?wx_fmt=png&from=appmsg)

这时会弹出配置窗口。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsY4FiaHmVeTMpCnmCSl6s04oroTFd6m70S80EVGGGROEPlibO2U2XyfLg/640?wx_fmt=png&from=appmsg)

看着好像很复杂的样子，但是不用慌，非常的简单。

1. 修改指令内容，也就是选择哪列需要AI处理的（这里就是“评论内容”列）

2. 设置“自定义要求” ，这就是你给DeepSeek的Prompt。

用人话总结就是，你要让DeepSeek对这一列数据做什么样的处理。

我的Prompt就是一个非常简单的几句话：

我是一个AI公众号作者，我想分析一下我文章下面的评论对我的文章是否认可。请帮我根据我的文章内容分析完以后，输出认可、一般或者不喜欢。我的文章是：XXXXX

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsd8WianTHYtzsxBk55lPNrpkicuUDot6Mr2wGFpK5EDCbRyH5wXemm4lQ/640?wx_fmt=png&from=appmsg)

然后还有一个设置项是关联账号，
这里的关联账号可以不用管，飞书给每个人送了100万的Token，普通用户还是能用一阵子的，如果你的量跟我一样非常大，还是可以绑定自己的火山引擎账号充一些余额的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsQGIc5zf9aE7mDNPh4UjtURmsjBumZyIw6NolVSJWK6ClFJpydu1SSA/640?wx_fmt=png&from=appmsg)

价格也是超级便宜，火山引擎是真的卷麻了。

都搞完以后，你就直接点确定就行，他就会嘟嘟的给你生成了，你可以退出去去干别的，一会回来再看。

很快，大概几分钟时间，我的267条数据，就分析完了，真尼玛解放双手，实在是太屌了，而且用推理模型做这种分析任务，准确性简直是绝杀，我之前接过GPT4o来做，但是真的不准，R1牛逼太多了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsFVx5v2FRveJlIrAqkdjKHxNF4wG2CXJI1hG46Uu3YYggSUicE0qp2qQ/640?wx_fmt=png&from=appmsg)

无敌。

但是可能有朋友会说了，这玩意准是准，但是也太乱了，根本没有可控性啊，乱七八糟的结构化，这要怎么统计嘛。

确实，推理模型本身Prompt遵循是不咋地，但是山人自有妙计，为啥非要一次性处理完成嘛，我们再加一步不久得了。

再新建一列，在字段类型中一样选择“字段捷径”，然后，选择智能标签。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLs4nrwnQWZnkiaMjP0JiajrwvZxPVAvKGZBhrKFXmKTUqAicMReVjBdPgNg/640?wx_fmt=png&from=appmsg)

填上三个标签，然后把字段选成DeepSeek输出结果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsmZ6Tr9WraOehGjiay2Gwdpuzukyprz7AYUf8IFfGZibA7maicNuv9ib2IA/640?wx_fmt=png&from=appmsg)

这一步，用人话翻译就是，
把前面DeepSeek那些不够结构化的结果，用3个标签来表达。

然后我们直接点确定，超级快，1分钟，标签直接全部打完了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLs8K1KtJia79GUuiaZgxlYIoRVQOyaBovIiaic8CdWRwFlQw8qJgUV5PqWVQ/640?wx_fmt=png&from=appmsg)

最搞笑的是，还有一个无匹配标签，我去看了一眼那条评论，确实没法归类。。。

最后，
再利用多维表格最强大的仪表盘，直接把数据变成图表，可视化的看下统计结果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsCjpmHDjBic5icKkur1JScG5xtIMB3hYZW3mOtjW8UXWibwlYZt1qmzjCw/640?wx_fmt=png&from=appmsg)

在所有的评论中，包括没精选的，有86.7%的认可率，只有2.63%的不喜欢。

只能说，谢谢粉丝爸爸们的抬爱。我以后一定加倍给大家生产好内容。

除了我自己这个超级实用的场景，好玩的东西我也做了一个，不过就是给朋友玩的小东西，看头像分析性格。

DeepSeek R1自己本身不是多模态的嘛，所以其实读不了图，但是我们可以做个流，
先用豆包那个超牛逼的视觉理解模型，给头像图片来一段非常详细的描述，再让R1根据这段描述，来推理用户的性格。

非常的好玩。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLs5Fia9HgazovZNmxZfbA5TsRVYPGWXRficXT8DKlzzXany37yjUlCicAsg/640?wx_fmt=png&from=appmsg)

而且我问了一下大家，大家居然普遍反馈还挺准的。

我也把玩意变成了飞书多维表格模板，大家可以拿去给自己的朋友们玩。

https://datakhazix.feishu.cn/base/FKKKb3k5VaPE2zsHxwScz1AenFh?from=from_copylink

还有一个21群群友
@Irene
做很实用的case，也
把大家之前分享过的写图片生成prompt的方式，整了一个多维表格的模板。

上传一张图片，
反推提示词（第三列）、
自动获取关键词（第一列）、生成类似风格的新提示词（第四列），最后翻译成英文。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLs9OI4ZjvMLuAVM9hHfxomVPQjDtyPEXBZq3b1eWH2pc4dCjpLWrDxKw/640?wx_fmt=png&from=appmsg)

以后只需上传图片，就能得到所有需要的结果。
一条龙服务，全程AI自动化。

说真的，这一套批量自动化的流程，上限远比我们想象的更高更恐怖，比如我随手就能搭一个Emo风格文案改写的工作流。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpibh6YvTrNHjRiaodRqOMKLsR5JJHzIwHKIab6KicuiaMfibr5papIuOHQ2An4MKHuKhOnWd1C0zRWINA/640?wx_fmt=png&from=appmsg)

又或者批量把文章改写成短视频脚本，或配上自带的AI搜索直接一键整理AI早报，甚至可以玩各种各样的灵感创意，比如用AI星座占卜、赛博算命等等等等。

这两天，每次打开多维表格处理工作，看着任务自动完成，我只需最后验收成果。

只能说，太爽了。

科技的进步不是让机器变得像人，而是让人从机器般的工作中解放出来。

多维表格配合DeepSeek R1，成功将自动化这个概念推进了一大步。

集合批量数据、RPA的超级优点为一身。

我们很多人都曾被繁琐操作压得喘不过气，可现在，你只要会说人话，学会一点飞书多维表格，就能把一个令人生畏的任务迅速拆分给AI，让它自主完成九成流程。

这是科技最美的注脚。

24年的3月，当我决定把公司开在飞书上的时候。

我觉得这也是我。

最棒的选择。

我爱飞书。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
