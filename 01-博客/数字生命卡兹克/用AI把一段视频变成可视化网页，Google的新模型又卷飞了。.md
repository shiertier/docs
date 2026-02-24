---
title: "用AI把一段视频变成可视化网页，Google的新模型又卷飞了。"
发布日期: 2025-05-07
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670901&idx=1&sn=c7d0f59eb264999fd69b177842ccea27&chksm=f1959b32d09ec698bf6def3197e8e17c69dc35dd17dfa791ce89ebdd2f5f3e1249681474d6f0"
---

## 摘要

### 1) 一句话总结
Google提前发布了Gemini 2.5 Pro 05-06预览版，该模型大幅提升了代码生成与多模态理解能力，不仅在WebDev Arena前端盲测中击败Claude 3.7 Sonnet登顶，还支持直接将视频内容转化为可视化网页代码。

### 2) 核心要点
*   **提前发布**：因用户呼声较高，Google选择在年度I/O大会前两周提前发布了该模型更新。
*   **版本命名**：后台实际调用名称为 Gemini 2.5 Pro Preview 05-06，但在产品官网上仍显示为 2.5 Pro (experimental)。
*   **主攻代码能力**：此次更新将代码能力的优先级大幅提升，专为编程与开发服务。
*   **前端盲测登顶**：在专为评测网页前端开发（HTML、CSS、JS）设立的盲测竞技场 WebDev Arena 中，该模型击败 Claude 3.7 Sonnet 获得第一。
*   **分数大幅增长**：在 WebDev Arena 的 Elo 评分系统（Arena Score）中，05-06版本的得分结结实实提高了147分。
*   **视频理解能力提升**：在 VideoMME 基准测试中得分达到 84.8%。
*   **视频转网页功能**：结合强大的多模态能力，模型可以直接读取视频（如YouTube教程链接）并生成对应的可视化网页代码，带来新的开发与学习范式。

### 3) 风险与不足
*   **视频上传Bug**：目前 Gemini 官网不支持直接上传视频，而在 AI Studio 中直接上传本地视频时经常报错，当前只能通过输入 YouTube 在线链接来规避此问题。
*   **产品体验欠佳**：Google 在产品打磨上依然不够稳定，存在入口混乱、版本命名迷惑以及交互Bug等问题。

## 正文

Google也不知道受了什么刺激，最近在AI场上，好像越来越有站起来的意思了。

之前我就写过Gemini 2.5 pro，是在
聊天记录可视化的文章
里。

全世界，只有Gemini 2.5 pro，能吃下一个每天999+微信群聊天记录的上下文，同时还能给你干出，一个还挺好看的可视化网页。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibTtuHribVFlqDz4ia6Onuh4B0Q5iciaVnibyNqVhGMsbJrkicLiaicHMqN9whNw/640?wx_fmt=png&from=appmsg)

在Qwen3的跑分中，也印证了，Gemini 2.5 Pro的能力也是真的强。

而我自己在是日常使用中，也几乎是把Gemini 2.5 Pro，变成了我的默认编程模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibZ93kiabnLF9jrxhKHwb85GCC5os1qYhsPUibUuaHIoUDhLibIv4yuUiaug/640?wx_fmt=png&from=appmsg)

但是昨晚，Google好死不死的，又把模型更新了一版，把版本号变成了，Genmini 2.5 Pro（I/O版）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibn3anGwHYVsPTVGuL9e85mZdzPL90ibTF4SCkjJ5V5UkSq9HPjIwhcOg/640?wx_fmt=png&from=appmsg)

而在后台的模型调用里，命名是Gemini 2.5 Pro Preview 05-06。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib5DOLeVmQAnYribibdHmH7noWrY3t7uibBEIZjOm7gvTULIpe6DvwdQokA/640?wx_fmt=png&from=appmsg)

现在在Gemini自己的产品官网上，虽然看着还是原来的
2.5 Pro (experimental)，但其实背后的模型已经变成
Gemini 2.5 Pro Preview 05-06了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib82srMVVv1llrUpYczMkqg9ObNeia8tK1QMECWpbWd58gLecvswJHFOA/640?wx_fmt=png&from=appmsg)

有一说一，Google你的命名到底能不能统一一下。

真的好乱。。。

而且，Google是真的感觉等不及了，其实距离他们一年一度的I/O大会，也就不到两周时间了，但是还是选择了把新模型直接放出来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib8vHKx1YRruTPia3YzG8ZUyIw06TtSgZDM3Ln4SiaWXHqY5lfhibvFkheQ/640?wx_fmt=png&from=appmsg)

这种行为，一般要么是真牛逼，要么是来吹牛逼。

但是Google，这回是前者，是真的有点牛逼。

他们自己也说了：

We were going to release this update at Google I/O
in a couple weeks, but based on the overwhelming enthusiasm for this model, we wanted to get it in your hands sooner so people can start building.

不是我来营销，是真的人民群众需要啊，我只是顺势而为。

这次Gemini 2.5 Pro 05-06版本（后面就简称05-06版了），跟今年三月DeepSeek V3 03-24的更新很像。都是完全为了代码服务的，把代码能力，往上提升了一个巨大的优先级。

而这次的05-06版，我觉得有两个亮点：

1. 模型代码能力在盲测竞技场登顶，力压Claude 3.7 Sonnet。

2. 得益于2.5 Pro强大的多模态能力，这次不仅可以给参考图生成代码，还可以，给参考视频生成代码。

特别是第二点，目前应该是全球唯一。

先看看代码能力的跑分。

这次最核心的榜单，就是，WebDev Arena
。

https://web.lmarena.ai/leaderboard

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibGauooDXgKkicsQfqx6wRNSJ1UWN9PWH1cntxmFk9BrzwmiaXm83kJiaEA/640?wx_fmt=png&from=appmsg)

0506版直接脚踩Claude 3.7 Sonnet，勇得第一。

可能很多人不知道
WebDev Arena是啥，我稍微解释一下，这玩意，还是挺有含金量的。

LMArena，最著名的大模型盲测竞技场，我相信一直关注AI的，大多数人都或多或少的听过。

跟一些传统的测试集不一样，这玩意就是纯粹的盲测，用户提出一个Prompt，然后
LMArena直接给你两个你也不知道是什么模型生成的回答，让你选你觉得哪个好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibNzeoR8bXv3heOtqq2kDKPqh9GBONuRibslq354RaVPdWNepAl6jahpg/640?wx_fmt=png&from=appmsg)

所以，在这上面，你几乎就做不了弊，全靠普通用户，一票一票投出来的，就跟拆盲盒一样。

而
WebDev Arena，其实就是一个子榜，还是由
LMArena他们开发的，专为评测网页前端开发任务（比如HTML、CSS 和 JavaScript）而设立的。

玩法跟
LMArena一样，也是用户盲测二选一。

唯一不同的是，
WebDev Arena会生成代码的预览给你看，而不只是文字了。

比如我让他生成一个Web的像素猫小游戏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib2trWoEvYWfJRVibwqhC02icDoC0bFHB1y2RrUYvtFyK8u264gnicoictdw/640?wx_fmt=png&from=appmsg)

在等了一分钟两边全部生成完之后，你就能非常明确的看出来，两边哪个是垃圾。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibrib12hcMNOYibxtK4iaYPu4oH299OYwnZuwY1e69BGdYjH0PtQzexqbHA/640?wx_fmt=png&from=appmsg)

傻子都能看出来，右边爆杀左边，这个时候，你就为右边，投出神圣的一票就行。

然后呢，他们用Bradley-Terry（BT）模型，
成对对决中的胜负数据，来估算模型的强度，为每个模型计算一个分数，这个分数反映此模型相对于其他模型的获胜概率。

这个排名系统非常类似于国际象棋和LOL、王者荣耀里中常用的Elo分。

只不过在
WebDev Arena里，这个分数，叫做Arena Score。

现在，我们再回过头去看，你就能看到，05-06版，是结结实实提高了147分。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibGPT89OpkJOyxLibYwtiaLoBPt146Bw2J00aZL4B6vicRPiaTm1HuoJrVKQ/640?wx_fmt=png&from=appmsg)

研究过王者荣耀或者LOL的影藏分也就是ELO分机制的朋友，就知道，这玩意提升100多分有多难。。。

这一次，Google的Gemini，登顶了。

第二个亮点，也是我觉得很牛逼的，05-06版本，也提升了视频的理解能力，在在VideoMME基准测试中得分为84.8%。

这就带来一个很有趣的化学反应。

过去我们经常给一个PDF、给一个图片，让它生成一段可视化网页，但是现在，你可以，给一个视频，来变成可视化网页了。。。

不过现在有点BUG，
Gemini官网本身不支持视频的上传，只能在AI Studio里传视频，但而上传的时候，又经常会报错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibFQFibwYiclh8DtficcV8tTMvGwoHCjTFWGIy4SMMxuwo104FQ8sWhc0GA/640?wx_fmt=png&from=appmsg)

Reddit里很多网友也遇到了这个问题。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib3MptGRJP0ymurBU41nrbyTKIjbeReXlqh6NTYzJQibGMo2lnL67bqtA/640?wx_fmt=png&from=appmsg)

Emmmmm，不过，目前使用YouTube的在线链接生成，目前是可以的。

我们直接打开AI studio的官网：

https://aistudio.google.com/

模型调整至05-06版。

在加号那，选
YouTube。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibMpCIvIq3oCwcN803cyEBDLgAdcPum5V0rf5p8MNPckN7wzNyC4ib1Uw/640?wx_fmt=png&from=appmsg)

我直接扔了一段OpenAI发在
YouTube上的Sora教程上去，然后继续用藏师傅的可视化Prompt。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibKicVyPXPXLjgeaBPIbwiafWmpm79iaXsacXgwvVvzIHmBFfUicgORJRcVQ/640?wx_fmt=png&from=appmsg)

很快啊，代码就跑出来了。

我们复制一下，运行看看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibP3EnZMK2o1389Jviaj24y3DrzdLEGnAR1GUhIQzScxfLMEjCvo2q5Mg/640?wx_fmt=png&from=appmsg)

完整版网页在此：https://2uwv6grszo.app.yourware.so/

虽然这事，看着很NTR，但是，他真的很酷啊。

这玩意用于学习，你就可以想想，他有多棒。

比如我有时候，回去
YouTube上看Blender教程。

现在，我就可以把这个视频和Prompt扔给他。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibJTJ2Tx3TTdX8UxY9PIkSYibLJRdVBN5tn0GIhIKcYXwnFJw3dQS6nUw/640?wx_fmt=png&from=appmsg)

等输出完代码以后，我们看看效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibkicJpiaGJnnxnWibkNerg6HibYlBgSvvp4JJykejHk2TmpZtKiayMiaynTCw/640?wx_fmt=png&from=appmsg)

真的很爽。。。

所以整体来看，这一次Gemini 2.5 Pro 05-06版本，确实是一次非常实在的升级。

既有实打实的代码能力提升，也在多模态理解上给到了新可能，尤其是视频转网页这种交叉场景，很可能会带来新的开发范式。

当然，Google 现在的问题依然是产品打磨还不够稳，入口混乱、命名迷惑、交互也还有bug，但模型本身的进步，确实值得承认。

它已经不是那个只靠PPT和论文刷存在感的Gemini了。

也不再是每次都被OpenAI狙击的AI界汪峰了。

接下来就看I/O大会正式发布时。

Google会不会再放出更大一锤了。

我们，拭目以待。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
