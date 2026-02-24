---
title: "用AI把微信聊天记录变成可视化报告，酷到封神。"
发布日期: 2025-04-08
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670278&idx=1&sn=432604996bbe37adc789ce03f87d7e93&chksm=f1a2b112a415df9b10c3f6e41b8af1a8b786170eaebf2eb84e2e0f7ee262e6d426e7aadb0201"
---

## 摘要

**1) 一句话总结**
本文详细介绍了如何通过MemoTrace导出微信聊天记录，并使用Google Gemini 2.5 Pro大模型将其转化为可视化网页或长图报告的三步操作流程。

**2) 关键要点**
* **核心目标**：将繁杂的微信群聊或私聊记录总结，并转化为包含内容分类、每日金句和云图的可视化报告。
* **步骤一（导出数据）**：使用开源工具MemoTrace（留痕/WeChatMsg）解析微信数据，并导出为过滤了时间等冗余信息的“AI对话专用TXT”格式。
* **步骤二（生成代码）**：推荐使用Google Gemini 2.5 Pro（通过AI Studio），因其具备处理微信记录超大文本的能力。将聊天记录与包含固定样式的专属Prompt（共763行）输入模型，即可生成HTML代码文件。
* **步骤三（可视化与分享）**：生成的HTML文件可直接在本地浏览器打开；若需分享，可通过 `yourware.so` 托管为在线网页，或通过 `cloudconvert.com` 转换为PNG长图。
* **创意与资源来源**：该可视化方案及专属Prompt模板由用户“@Simon的精神世界”提供。

**3) 风险与不足**
* **系统兼容性**：MemoTrace工具目前不支持Mac系统，必须使用Windows电脑进行操作。
* **性能风险**：导出聊天记录时若不圈定时间范围（一次性导出全部），可能会导致电脑卡死。
* **平台稳定性**：在Gemini官方助手网页端输入长文本和Prompt可能会出现乱码，且只能手动复制；推荐使用AI Studio以确保代码正常输出并支持直接下载。
* **格式丢失**：使用CloudConvert将HTML转为图片时，会导致网页头部的emoji表情丢失。
* **隐私安全**：导出微信本地数据存在潜在的隐私泄露风险（注：作者在使用前已通过断网测试及安全专家咨询进行了初步验证）。

## 正文

我之前拉了一个AI自媒体的群，就...同行交流，互相学习。

很快就500人了，然后里面这群人，每天就话不停。

几小时不看，里面就是99+。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWma15iaVl0KBcMoTfsibz1sD4rFCicaZ28Jyh4mnibrf5ymoXfx4Zsz9tUQ/640?wx_fmt=png&from=appmsg)

真的，爬楼爬不动了，信息太多也是一种负担。。。（不是打广告，群已经满了，找我加也进不去。。。）

直到前几天，即梦3.0内测的那天，突然有个群友，在晚上11点，发了一张图出来。那张图是这样的。

是我们整个群一天的聊天记录汇总，还是可视化的，而且分门别类，还有每日金句和云图，超级有意思。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWBgIrU4vSzicoF5A1GM5fonE9zicVibELDT69GYSibVtm0aGibGvnCjGeRIw/640?wx_fmt=png&from=appmsg)

这个群友，叫
@
Simon的精神世界
。

他说，他之所以想做这个东西，也是因为群里消息太多了。。。他是在爬楼爬不过来，那不如，就自己手搓一个。

我问他，是怎么做的，他直接给我开了个飞书会议，分享了20分钟。

在得到他的授权后，我也想，把这个做法，分享给大家。

不止可以总结群，你跟女朋友、领导、基友的聊天记录，也都可以总结。

真的，酷到封神。

做这样一个可视化的微信聊天记录总结，一共可以分为三步。

1. 导出微信聊天记录。

2. 让AI根据聊天记录生成网页代码。

3. 将代码运行变成可视化网页/图片。

我们一步一步来说，保证手把手教会你。很简单的。

一. 导出微信聊天记录

中所周知，微信的聊天记录是加密的，很多人其实都卡在这一步，不知道怎么把微信的聊天记录导出出来。

同时，还怕会有数据泄露风险。

@
Simon的精神世界
给我推荐了一个很傻瓜简单的工具。

叫MemoTrace，留痕。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWIDicqwt2wic6tgwAMescaGNm15S9O27hDccXtqDxuud8AI266NOUPJdw/640?wx_fmt=png&from=appmsg)

数据风险肯定也是我非常关心的，所以在用之前，我把作者的播客、过往两年的资料还有一些评论信息全部在网上遍历了一遍，没看到啥负面，同时也进行了断网测试，也找了某实验室做安全的大佬看了一下，没发现有啥问题。

然后，我自己才敢用，也才敢在这里写出来。

项目网址在此：
https://github.com/LC044/WeChatMsg/?tab=readme-ov-file

在项目中，可以进入官网直接下载，目前比较蛋疼是，mac不支持。

所以，需要有一台Windows电脑。在网页里面，下载2.1.1版本，上面大字写了，小白用户请不要下载测试版。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWgWrrTwSYZq1XyLXzYImZYdFetsCJZKZxxQrSviaF8SibJAzRa6ny1jzw/640?wx_fmt=png&from=appmsg)

正常下载完成安装。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWQyhXHRibJ8Bx8exvGxsZPIduWeZzaOLuI97GdbdOIV2w20ibQfeUXEyA/640?wx_fmt=png&from=appmsg)

在保持微信已经打开正在运行的状态，打开软件，你会看到一个没有那么精致的UI。

别看有那么多乱七八糟的信息，你其实根本不需要管那些东西，正常情况下你没魔改过微信的话，
第一次使用，你只需要先点击获取信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWib1lVPbHPt8ls8mjVtalhZj0pUUanqf7RWcTHj0wf0RAd3NiaH5BUYVQ/640?wx_fmt=png&from=appmsg)

然后，你就会发现，你的手机号、昵称、微信的ID被抓出来了。紧接着，点
解析数据这个按钮就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWqMoIKPoxbVHhlRKdKs9uKIK2R3xLxHI2MbEEJaoNGU2AlL8aicyPYPA/640?wx_fmt=png&from=appmsg)

速度一般很快，我是5080的显卡，几秒就全部解析完了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq166EfOXQEX4nJLzwJ6gyezTkcqS53KJ0qVpLPRP39ggp14O3MBQ2H09FAZ9jpzPO2MESujicZTIg/640?wx_fmt=jpeg)

然后，它就会给你复刻了一个，使用微信的UI界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWvicoG5lETfkB0yO68vkwtSfBjFIH231YnQJn7AzJfzFUmeib8CLbrD4w/640?wx_fmt=png&from=appmsg)

有一说一，虽然安装完刚打开的那个UI有点丑，但是这个界面，我还是真的很喜欢的，非常的直观，符合用户的预期，简直就是UI设计中
所见即所得的典范。。。

第一个聊天框，就是那个天天刷屏的AI自媒体群。

我写这篇文章的时间是4月8日凌晨1点56，他们居然还有人在里面聊天。。。

我们直接点击群聊右上角的导出聊天记录，选择这个AI对话专用TXT。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWCwLCaHoVs3np77br5BTGeVVc24mSTgTJJmhxiavXtOnxbnhFuGn0GYA/640?wx_fmt=jpeg&from=appmsg)

这个专用的TXT，你可以理解为做了一些数据清洗，把一些跟AI对话无关的信息比如时间等等都给剔除了，只留了每天的日期信息，同时还做了一些格式的排列，让大模型更好识别。

所以，无脑导出这个就行，因为我们总结和可视化聊天记录，也不需要那些精确到几分几秒的时间信息，更多的是看每天的内容总结，这个时间维度几乎就够了。

点击以后，会弹出一个弹窗。可以选择消息类型和时间周期，我一般就会把除了文本、分享卡片、文件啥的都勾掉，那些变成文本以后本身也没用，都是垃圾信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWaP1I3URHWPYJs6gh22g2xicaJSgTCuuD3EGAG684Fsm4wEeF8zjeqpA/640?wx_fmt=png&from=appmsg)

时间的话你可以自己选，我建议还是圈定一下范围，不要一次性导出全部时间，要不然...你的电脑可能会卡死。。。

全部搞定以后，点击开始，没几秒就会给你一个弹窗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREW2EDKPOpaicDTTh3fvvkE25lGFVPrQvRHxK1RhK7nlWpvEV4AES5DOhg/640?wx_fmt=png&from=appmsg)

你就可以点击打开，跳转到聊天记录存储的文件夹下面，看到那个聊天记录的txt文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWaz4Q1weKhHCoAejMHnR8XHLKccWq3fE4LKCn2a3ZICzdhRhLRCOozg/640?wx_fmt=png&from=appmsg)

双击打开，你就能看到，这个文件是这样子的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWVxJAMEwMHXunVAS3fklpZBv0CafhbHWuZZxBzLGjJENXwHscQm4RvA/640?wx_fmt=png&from=appmsg)

至此，第一步我们搞定。

你已经有了，能扔给AI最牛逼的原料，同时，最难的一步已经完成了。

后面的步骤，更加简单傻瓜。

2. 让AI根据聊天记录生成网页代码

得益于之前Claude 3.7的更新，以及藏师傅的发明和教程，AI把任意信息，转成可视化网页这一流派发扬光大。

它能做到传统拼图或者总结，所远远达不到的精致效果。

而这次的思路，其实也是基于藏师傅可视化网页的基础上，继续生根发芽。

把聊天记录，给可视化。

只不过，跟之前的PDF、word等等不同的是，微信聊天记录信息太多了，在Simon的测试中，Claude 3.7、DeepSeek v3这些有能力做出漂亮网页的模型，几乎都吃不下微信聊天记录这么大的文本，更别提要按格式输出一段很棒的代码了。

但是有一个模型，却在这个场景上完美的不可置信。

这就是前几天发布，但是被GPT4o画图爆火给淹了的Google Gemeni 2.5 pro...

AI界汪峰实锤。

我们可以在两个地方用到Gemeni 2.5 pro，一个是他们的AI Studio，一个是Gemini助手官网。

AI Studio：
https://aistudio.google.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWFq8lv4NNP2ofiat8oU93KlzIic9KfvZibgad0WOiapYnnlWsHGpI0HOPvg/640?wx_fmt=png&from=appmsg)

Gemini：
https://gemini.google.com/app

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREW479Bdib8vXbHoOetfAwQMuXjzJPuGa0wo1amPSuVaBGkn8xiaVxEPIIQ/640?wx_fmt=png&from=appmsg)

我个人还是推荐使用AI Studio。

一是Gemini上面不知道为啥，我给进去聊天记录和Prompt，这玩意就开始乱码输出，虽然最后的Html代码没啥问题，但是强迫症看着是真难受。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWQw5bLQTKFNQ6FiaoK1pGyugBcUHCJwHBHDU0WoicwSYw7yGATjGVI3cQ/640?wx_fmt=png&from=appmsg)

而是AI studio可以直接下载Html代码文件，而Gemini只能复制，保存成文件我还得打开Trae自己手动处理，就非常呆逼。

所以，我们打开
AI studio，在右边把模型选成Gemini 2.5 pro。然后，把我们的聊天记录，和Prompt扔进去。

Prompt的话，Simon直接写了一个模板，为了固定样式，他直接把样式代码也写进去了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWe0hy6Ik1frDlXWDAbBVu5ic5iadENia38v1LL6MjzEhjSljcK5UVlsmKQ/640?wx_fmt=png&from=appmsg)

因为实在太太太太长了，763行，我就不贴在文章里面了，我给他放到了一个txt里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWFa5Lshr4G1PQ8JuqribTeovfEth9HibDXPBAmQexAJVf8tP5bJcbkgfg/640?wx_fmt=png&from=appmsg)

你直接在公众号后台，对着公众号发送消息“wx”就会自动发给你了。

还记得我们在第一步里，导出的微信聊天记录txt吗。

直接把两个文件，一起扔进去就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWENDian6d2iaGVDunb3TeTWCJtMelDjUATzIibuPWusSjTGRzUBic5XUmjg/640?wx_fmt=png&from=appmsg)

啥都不用说，你就直接扔进去就完事了。

然后Gemini 2.5 pro就会自己嘟嘟的推理了，你啥也不用管，喝杯咖啡尿泡尿，回来的时候，他就把代码写好了。

你拉倒最后，有复制和下载两个按钮，直接点下载就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREW9F4vOna8ibKMLLeTRHbJydpV2AyVYFzwwkqPNBZJPEUdicP3Yic0xzbxA/640?wx_fmt=png&from=appmsg)

你的下载文件夹里，就会出现一个名叫code的HTML文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWzWsDFRHvvWdH8PAZzVmlK67FoicnDd9ZxSDVGBfbibjWTSkWRNCO9NHA/640?wx_fmt=png&from=appmsg)

至此，第二步完成。

三. 将代码运行变成可视化网页/图片

其实如果你装了Chrome的话，上面那个html文件，是可以直接双击点开运行的。

但是它有个很大的问题，就是是个本地链接，你想把这个东西分享给别人，要么从头到尾截一张长图，要么把这个文件发给别人让别人打开。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWRzdtoKR8kCganVfibYaJ96vPafjia49IsYPlcicdrRdjsITRuOv2HMSzQ/640?wx_fmt=png&from=appmsg)

怎么看怎么都不够优雅。

所以，我们有两种方式，分享给别人。

1. 转成一个在线的网页。

2. 直接把html文件转成一张长图。

转成在线的网页很简单，用之前我安利过很多次的小众产品
yourwar就行。

网址在此：https://www.yourware.so/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWMBgU6lUGMKs8SDSNcx7hLdWDvW4ocf63uaSxNIMibyeNOvCFOAVkicpA/640?wx_fmt=png&from=appmsg)

直接切换到Upload tab，把你的html文件上传上去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWHITibiaRMcibo6uJnJNxTjtSXmncdX8zVv7vskLsBib2UfyJADZyByJibbQ/640?wx_fmt=png&from=appmsg)

几秒时间，一个在线的网页就搞定了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWmcJaGkENiacEIVmq34pHtsHl7hGVVicoibNMFzxCFGdKP1icAVc5dkAILQ/640?wx_fmt=png&from=appmsg)

直接点Share，就能把这个在线的网址，分享给你的朋友，你的朋友们，也都可以打开了。

比如我总结的4月7号的聊天记录，就是这样的，你们也可以打开看看。

https://z5gw1aprhd.app.yourware.so/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWwG68OtH31yxNeGtpvDSWlTR7VdO06G10GtgXgQHVJXw6gCPOve7ODg/640?wx_fmt=png&from=appmsg)

另一种方式，是直接把html文件，转成长图，可以少几步操作步骤。

这个小公举也是在线的。

https://cloudconvert.com/html-to-png

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWrlYU4ia7cdYNTBtzic8QglIyRib3JRkGPZwTmcHANbMgHAiarpDtoKoMIQ/640?wx_fmt=png&from=appmsg)

你什么都不用管，只需要，把你的html文件，传上去。

点击Convert。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWXfQZUVclnATJBKAp9OWfvqYZpcpchbcYOTShmeTHwEEwVcOIa7DFdg/640?wx_fmt=png&from=appmsg)

等十几秒钟。它就会给你一个下载链接。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq9q1Gdu6nwAUOAhnNRicREWOgJ3bibibRm9AhVbb0ytOMibRev336YvP9NPsrmjqTJOLslPNN7BibPY2w/640?wx_fmt=png&from=appmsg)

主打一个方便快捷。

除了头部的emoji给我干没了，其他的都挺好。。。

写在最后

这个小教程，我个人还是觉得蛮有趣的。

感谢
@
Simon的精神世界
提供的这么棒的点子。

让大家再一次眼前一亮，哇AI还能做这么好玩的事。

可视化的Prompt，别忘了
直接在公众号后台，对着公众号发送消息“wx”就会自动发给你了。

希望大家，都能把AI玩出花来。

去做一些，属于自己的故事。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
