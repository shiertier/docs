---
title: "AI绘图太超前了，它们把下一任美国总统都内定了。"
发布日期: 2024-08-15
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664630&idx=1&sn=547eafad204fa27a1d7dcbd6ead40375&chksm=f18a470cbb0c4b88097ff5874b1698ba6c6f1aa0ee614fda819c970a603fd71251f6656caec9"
---

## 摘要

**1) 一句话总结**
测试发现，包括Grok2、Midjourney在内的多数国内外AI绘图工具在生成“下一任美国总统”时均默认输出特朗普，其本质原因是训练数据污染与算法采样策略导致的AI偏见。

**2) 核心要点**
*   **Grok2与Flux测试结果：** Grok2（接入Flux模型）上线后，用户输入“下一任美国总统”或“现任总统”，生成的图像几乎100%为特朗普；而输入“上一任总统”则会随机生成肯尼迪、林肯、奥巴马等历史总统。
*   **多平台横测结果一致：** 除Flux外，Midjourney以及国内的即梦、秒画等AI生图工具在相同提示词下均默认生成特朗普（仅快手可灵生成了拜登）。
*   **部分平台的政治内容限制：** DALL-E和豆包直接禁止生成此类政治内容；Midjourney官方也明确表示不以政治言论为目的，直接输入“特朗普”或“拜登”会触发违禁提示。
*   **AI偏见的历史案例：** AI大模型普遍存在刻板印象或过分“政治正确”的偏见，例如今年2月Google Gemini曾因违背历史事实，将美国开国元勋、教皇等强行生成为黑人或黄种人而遭到大量用户投诉。
*   **现象成因（数据污染）：** AI缺乏时间概念，且训练数据集中（尤其是2016年至2020年期间）特朗普与“总统”标签绑定的图像碎片数量极其庞大，导致严重的数据污染。
*   **现象成因（技术机制）：** 在图像生成阶段，AI的聚类效应以及过度依赖“概率”的采样策略，促使其在遇到模糊指令时，自动抓取并输出数据集中最常见、最显眼的特征（即特朗普）。

**3) 风险与不足**
*   **数据污染与算法偏见风险：** 训练数据集的严重污染以及过度依赖概率的采样策略，会导致AI输出结果严重偏向数据集中最常见的特征，无法做出客观或符合逻辑的判断。
*   **政治偏见与刻板印象风险：** AI模型容易表现出刻板印象（如特定职业的性别/种族绑定）或矫枉过正的“政治正确”（如违背历史事实生成图像），从而引发公众争议与大量投诉。

## 正文

昨天，Grok2正式上线了。

我们在正常测试Grok2的过程中，群友
@涂津豪
（之前姜萍那个数学比赛拿AI组第一的天才高中生），发现了一个非常非常有趣且离谱的现象。

如果跟Gork2说，给我画“下一任美国总统的照片”，Grok2出来的必是特朗普。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZI2axcmHYmqRp1Ot8hXkYqIsicnHWloDicIQOm2lML0g6dGqElf8CCJyw/640?wx_fmt=png&from=appmsg)

我们都懵逼了。

因为现在的大模型，你让他预测一下谁是下一任美国总统啥的，都会跟你绕的五迷三道，就是不跟你正面回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZkkfNQy8rFpAHLD9Prect9gEkTKjZTCppIHOMMbHFbxiboIZXFymP6Lg/640?wx_fmt=png&from=appmsg)

但是Grok2上的AI绘图，居然直接正面回答，下一任总统必是特朗普！还特么直接给你画出来了。。。

我自己也去试了一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZsfEib8xM0JmAh6sX07u3OeuuEXoDjBsibyk8sBzeLXYAjU5m0CBH9xNw/640?wx_fmt=png&from=appmsg)

果然。。。而且我试了十几次，无一例外，全是特朗普。。。

我一度以为，马斯克支持特朗普，已经支持到这种地步了，因为他这两天又是跟特朗普见面，又是把特朗普请回X，还在首页置顶了一段他跟特朗普用AI做的一段双人舞视频，这就是爱情吧。

不过想了想不对啊，Grok2的AI绘图，接的是最近爆火的那个Flux，不是Grok自己做的。所以我又去试了一下到底是Grok2的问题还是Flux的问题。

用Flux一画，
draw me a photo of the next presidentof theUnited States of America，
好家伙。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZZhGPSlUDp47fy7dTzmUkA920RdInPhG4tV8qISwOTxSPMr5fGubY5Q/640?wx_fmt=png&from=appmsg)

什么妖魔鬼怪，
什么美女画皮，都挡不住我特朗普要当总统的心。

我又测了几个关键词，如果你只输president（总统）、现任总统，出来的一样百分百是特朗普，如果你输入上一任总统，就会开始随机了，什么肯尼迪、林肯、奥巴马就都炸出来了。

不仅Flux是这样，Midjourney画下一任美国总统，同样是如此。特朗普大大的脸庞充斥着我的所有屏幕。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZexvEUDYIgmib2XdvCdxic5mhUcHXDq8okesTakdP5L6s5oU99MyHsfUA/640?wx_fmt=png&from=appmsg)

不仅是国外的这些AI绘图。

我们再看看国内的。

即梦，画下一任美国总统，还是特朗普特朗普特朗普。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZ4UIQ6N82HsnCib5uJpJ4DZ2ASbvwmo8eibeib73gJzXOHPWJLHBz71VCQ/640?wx_fmt=png&from=appmsg)

秒画，给我出来了一个非常奇怪的人造人，这可能是另一个世界的女版摇滚特朗普。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZcMdHzsoiaDwOm00O5KL4zo7zAdKXFXc1jUN0xVoWn8hk1ibXYHBrIISw/640?wx_fmt=jpeg&from=appmsg)

快手可灵，是其中最叛逆的。

所有的AI都支持特朗普，内定特朗普为下一任美国总统，只有快手老铁不识好歹，加入了支持拜登的阵营。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZ3epO06pmxzC5Q1Y7LdDTyqKksasicG0u7EQzXhgN5H8p1gL4z9bsyjA/640?wx_fmt=png&from=appmsg)

我服了，真的。

除了DALLE和豆包这种禁止生成政治内容的，大部分AI生图工具的“next president”形象都是特朗普，个别是拜登。

真正的候选人哈里斯：Hello？

好好好，AI直接预测大选结果是吧。

这个事儿吧，毕竟涉及到了美国两党政治，我一度还猜测这结果是不是受到了企业政治倾向的影响。

不过从我们的调查结果来看，大部分AI企业是不愿意在两党斗争中站队的。即便AI团队的个别投资人有政治倾向，但这关系也太远了= =，不至于真的左右生成结果。

Midjourney的老大大卫也明确表示过：
“政治言论不是Midjourney的目的”。
现在在MJ上直接让画“特朗普”、“拜登”，还是会直接触发违禁提示。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZ4qTLWa8ribo0BuiaLeib8arPOzKTEtMGFJNPBPucSGvcgJSyBOcicWj8XA/640?wx_fmt=png&from=appmsg)

但，AI大模型，的确一直存在
“政治偏见”
。

这里的偏见主要是两种：刻板印象和过分政治正确。

刻板印象比较常见：
AI生成的图像里，科学家、医生大部分是男性；“贫穷的人”是黑人的概率更高；外国的大模型画亚裔总是眯眯眼……

过分政治正确的结果也很有意思。应该不少人记得，之前Gemini生图就被大量用户吐槽太“政治正确”。

起因是这样一条帖子：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZ62cBMyBiaJib6VWZbMTKS6E1WzD5NZUma9nJMqTnJRiaEDST0LkNIKxvA/640?wx_fmt=png&from=appmsg)

在今年2月的Gemini眼里，美国开国元勋、维京人、教皇是黑种人和黄种人，你说啥都没用，反正就是不按历史图像来，平等地得罪所有人。

外网用户破大防，怒斥Google的政治正确矫枉过正。

换位思考一下，要是AI画的饺子全是草莓馅的，我肯定也不乐意。。。哦不对，他们也画不出来饺子。。。

除了AI图像，语言模型也没有幸免。华盛顿大学、卡内基梅隆大学和西安交通大学的一项研究就认为，人工智能语言模型包含不同的政治偏见。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZOxkmsNlibzSI2RfqBs897xT5iarwbG0ib2v0PnMhrtEc9ta1EWf56j2TA/640?wx_fmt=png&from=appmsg)

这种“政治偏见”的结果，和AI绘图对下一任总统的“预测”观感太像了。

当然，明显的政治偏见问题在用户们山呼海啸般的投诉中，得到了一定的解决，AI企业花式打补丁，求生欲满满。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplAtbq6dSrUXTHiaBrRh7uZkW8DJDpQJ4FtpoxQmianicd1gGcdBjtcAkfuceCRiaLhUcZjIPX9bCnzw/640?wx_fmt=png&from=appmsg)

这种政治偏见，还是很有趣的，也花了一晚上跟很多大佬交流了一下产生这个现象的原因。

本质上，还是数据污染。

我稍微讲的通俗易懂一点，大家应该就能明白是因为啥，才会让AI认为下一任美国总统，无脑是特朗普了。

首先，让我们把AI当做个小孩。

他有n个巨大的拼图盒子，里面装满了各种各样的拼图碎片。

这些碎片就是
AI学习到的各种图像特征
。

现在，我们输入3个prompt，让这个小孩拼一幅
“上一任美国总统”
、
“现任美国总统”
和
“下一任美国总统”
的图（扩散模型的工作过程）。

然而小朋友并没有时间概念，不知道这些的区别。

只是小朋友听到指令后，先拿出
“上一任美国总统”
这个关键词的盒子。

他打开盒子，发现里面有很多不同总统的碎片，有奥巴马的、小布什的、克林顿的等等。因为这些都可能是“上一任”，所以小朋友每次随机挑选一位来拼。

接下来，小朋友去找
“现任美国总统”
和
“下一任美国总统”
的盒子。当他打开这两个盒子时，有趣的事情发生了。

由于里面的拼图碎片主要来自2016年到2020年的杂志（标记时间点问题）。

这个时期特朗普经常上新闻，所以盒子里几乎都是特朗普的拼图碎片！（数据污染）

于是立刻开始在他的拼图盒子里翻找。

他先拿出一些模糊的背景碎片，开始在桌上排列。

他很聪明，会把相似的碎片放在一起（聚类效应）。

当他看到盒子里最显眼的就是那座“特朗普山”。虽然他知道美国还有其他总统，但是其他总统的碎片都零零散散的，不好找。

于是，小朋友很自然地就从“特朗普山”上抓了一把碎片。他先放上了特朗普标志性的金发碎片，然后是他独特的表情，接着是他的西装……

在图像生成的最后阶段，小朋友的采样策略过度依赖“概率”了，导致结果偏向于数据集中最常见的表示。（采样）

所以他最后拼出来的很可能就是特朗普的样子。

大概就是这样，数据集的污染过于严重，所以导致只要我们输入，下一任的美国总统是谁，就必定，会出现特朗普。

不过，上面这段解释和小故事，也只是我自己的理解，
如有不对，欢迎大佬在评论区指教。

这次的小故事，或者说小事故，也让我们感觉到，AI，其实很多时候。

真的并没有那么的聪明。

但是这不仅只是属于AI的偏见，更是人类社会的偏见。

想要达成完美，是不可能的。

毕竟。

现实社会的偏见。

只会比AI世界中，更为严重。

万物皆灰。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
