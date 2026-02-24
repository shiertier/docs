---
title: "一文看懂智谱AI的GLM4发布会 - 国产之光，无愧于此"
发布日期: 2024-01-16
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661150&idx=1&sn=6c1feb74b9332f90f97f874bd9b5b01e&chksm=f17832ccef6bf514596c15f85a784ebd1f89a6f814fd4986744fc264cfa859096f608bf52a28"
---

## 摘要

**1) 一句话总结**
智谱AI正式发布了全面对标GPT-4的GLM-4大模型，并同步推出了All Tools工具集、GLMs智能体中心以及针对开源生态的大模型科研基金。

**2) 核心要点**
*   **技术路线**：GLM模型采用编码器-解码器（Encoder-Decoder）架构，与GPT的仅解码器（Decoder-only）架构不同。
*   **基座性能**：GLM-4综合能力逼近GPT-4。其中代码能力（HumanEval）超越GPT-4，综合任务（BBH）达到GPT-4的99%，数学能力（GSM8K）达到95%，知识理解（MMLU）达到94%。
*   **长文本能力**：支持128K长文本（约300页容量），并成功通过“大海捞针”测试。
*   **中文与指令跟随**：中文能力整体略优于GPT-4；指令跟随（理解Prompt）能力约为GPT-4的88%。
*   **All Tools功能**：实现国内首发，可在一个任务中同时自动调用联网搜索、代码解释器、识图和画图（CogView3）功能。
*   **CogView3绘图**：图像生成质量大幅提升，并支持通过自然语言对话对图像进行连续修改和微调。
*   **GLMs智能体中心**：上线类似GPTs的定制功能，用户可通过自然语言创建并分享智能体，目前仅展示官方推荐以保证质量，即将推出创作者分成计划。
*   **开源支持基金**：智谱宣布提供1000张GPU、1000万人民币、1000亿Token，用于支持开源开放的大模型软件开发。

**3) 风险与不足**
*   **常识理解短板**：在HellaSwag（常识测试）任务上是目前对比GPT-4最弱的一项，仅达到其90%的水平。
*   **逻辑推理差距**：受限于大模型本身的底层能力，在复杂逻辑推理方面与GPT-4相比仍有差距。
*   **现场演示故障**：由于发布会现场宣布产品同步上线，在进行画图功能现场演示时出现了图片无法加载的“翻车”情况。

## 正文

众所周知，国内的大模型公司，我一直很喜欢智谱AI。

不只因为他们学术气息浓厚，技术底蕴深。

更是因为这家公司的真诚、开放的态度，前端时间他们给AI创业者提供的“Z计划”，更是让我感叹他们的格局。

今天，他们终于正式召开了他们的发布会，但是这个发布会的结构还是非常“智谱”。

标题叫：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoEBYAYG5W94e0AMxIXx2sy0snwgGs8EeZniaFG11vLf7T1CqkFzhLhXs8ho2gfNm7UcchC9lBrFUg/640?wx_fmt=jpeg&from=appmsg)

符合他们一贯作风，上午发布GLM4、ALL Tools、多模态大模型
CogVLM3

、代码大模型
CodeGeeX3
、
汇
报技术进展
，下午圆桌讨
论讲干货。

核心还是GLM4的发布，这个应该是国内所有AI相关人员，都在关注的东西了，其意味不亚于去年大模型GPT4的发布。

毕竟，中国，也真的需要自己的，真正属于自己技术路线的大模型。

这块多说一句，GLM是跟GPT完全不同的技术路线，具体的可以看这张图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syoznLnBoQAMG6InhRbibyYicaGflgaHApDiaRmu3o2WDoLKchC2W0dSQcg/640?wx_fmt=jpeg&from=appmsg)

基于Transformer架构的模型有三种：仅编码器架构（Encoder-only）、仅解码器架构（Decoder-only）、编码器-解码器架构（Encoder-Decoder）。

GPT走的是
仅解码器架构
，而智谱是借了
编码器-解码器架构思想走的自己的路，这也是我为什么一直很关注他们。

他们之前开源的GLM6B，在国际上掀起了多少的风浪，也相信不用我多说了。

回到今天的GLM4发布会。

我觉得可以用3个点来总结掉：

1. 基座模型的性能提升。

2. All Tools。

3. GLMs。

从整体上看，智谱AI毫不避讳的直接对标OpenAI，用他们的话说，我们还在不断的追赶OpenAI，追赶GPT，他们有的，我们都要有。

一条一条来说。

一.GLM4基座模型的性能提升

首先是基座的评分：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syd9TDzH2rDhvic7fjLvluxEicEkgvXjO4NklO677PsbAfbjNNGuClvRIw/640?wx_fmt=png&from=appmsg)

几个比较主流的评测任务。我简单的介绍一些这些评测集的代表意义吧，让大家知道GLM4在哪些地方效果好，哪些地方跟GPT4还有一些差距。

1. MMLU
(Massive Multitask Language Understanding)：
这
个测试是一个大规模多任务语言理解测试，主要评估大模型的对于知识的理解的，可以
看到目前GLM4是81.5分，GPT4是86.4分，目前
能
达到
GPT
4的94
%
。

2.
GSM8K (Grade School Math 8K)：主要是测试数学能力，基本就是小学数学和初中数学水平。GLM4打到GPT4的95%。

3.MATH：跟
GSM8K 有点类似，也是偏数学，但是会更难更复杂一点，涉及到一些比较难的逻辑推理。目前GLM4只能达到GPT4的91%。

4. BBH (Big Bench Hackathon)：偏综合测试，有一堆综合类的任务，比如翻译、语言理解、逻辑推理等等乱七八糟的。这块GLM4很强，基本跟GPT4打平，能到99%。

5. HellaSwag：偏常识测试的任务，看看大模型有没有人类的常识。这块是目前GLM4对比GPT4最弱的一个，只能达到90%。

6.
HumanEval: 纯粹的编程任务。评测大模型在算法、代码、编程层面的效果。这块是GLM4唯一超越GPT4的任务，非常强，程序员有福了。。。

从这些里面，你就能大概知道GLM4目前是个啥水平了，智谱也很实诚，从来不会说全面超越GPT4这种鬼话，不弄虚做假，客观的承认差距，然后努力追赶，这点我非常非常喜欢。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syL1UJ0IHgM3sib8B0ibUmkEZjkxH3QG4INla27TytDYS5xpjD8OnjpQmA/640?wx_fmt=png&from=appmsg)

基座能力第二个方面就是指令跟随上，通俗点说，就是理解Prompt和Instruction的能力上。GLM4目前大概都在GPT4的88%左右。

GPT4的语义理解和吃Prompt的能力，我相信大家都知道，基本是冠绝全球，不要以为88%所以不咋地，你要看跟谁比。。。国内的很多的所谓全面超越GPT4的大模型，你能达到60%我就愿意给你磕一个。。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syV4ZTeIjft5yqC5XfzHeAoELRPA3cPYEqE16yVmh7ICF4dQQE3e1mhg/640?wx_fmt=png&from=appmsg)

中文的能力，各方面都比GPT4强一点，这个正常，毕竟GPT4就那么点中文预料，超过是正常事。但是可以看到，在推理这块，受限于大模型本身的底层能力，还是差了一点点。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syiaQUIp1RNZhXibRP4jHo9Y0eeib3HmYzpIDPHf0DOpl2UAAt8drTlNFrg/640?wx_fmt=png&from=appmsg)

GLM4终于也上了128K的长文本，大概等于一次性灌300页吧，最好玩的是智谱自己也做了一个“大海捞针”的测试，很有意思。

我之前写过一篇关于
GPT4和Claude2.1的“大海捞针”测试
，有兴趣的可以去看看，看完你就知道，全绿是个多离谱多牛逼的事了。

二.
ALL Tools

ChatGPT有一个能牛逼的玩意，我相信用过的人都知道，就是他们的All Tools，在一个任务里，可以同时调用联网、画图、识图、代码解释器。形成一个小型Agent，能做很多很有意思的事情。

目前国内还没有一个能真正把ALL Tools搞出来的，智谱是第一个。

其实他们的识图能力其实早就有了，代码解释器也有了，这次主要是新增了画图的部分，也就是CogView3。再将它们全部打包在了一起。

比如我说一句：“搜索一下过去7天北京的天气，然后给我处理成一张表格让我可以下载”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2sybQlaiaWzeN759HcdnYasAQ4cjXIicfHIEdicLFx15XRtQsJFEPqFP14iaw/640?wx_fmt=png&from=appmsg)

直接就给我处理完了，非常爽。第一次，在国产大模型上用上了ALL Tools。要知道，GPT4的联网搜索默认都是外网，那些个结果，很多时候真的特娘的水土不服。。。

然后智谱也上线了他们的绘图大模型
CogView3。

有一说一，之前智谱的画图模型，真的，有点丑emmmm.....

但是这次得到了大幅的加强，至少，能看了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2sybUibYGpSlnMLskdRNlqGnwl6f4U74W5hHrmNOxuEtjfdhQLa7dGTyZQ/640?wx_fmt=png&from=appmsg)

你要是拿它跟MJ比那就有点欺负人了，但是至少画出来的东西不丑，能用，并且最好的一点是，可以用自然语义去做微调。

比如说，我先让他画一只“短脚柯基在公园里奔跑”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syeaiag0c9MXLicsIeeQEaeG0caoWhbjTpxbn4Wicic6lyEHQicQLrUtwcspg/640?wx_fmt=png&from=appmsg)

画的还不错，挺可爱的。然后我们再说一句：“给它旁边加几只蝴蝶”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2sybP9UH7Aicm1SHJufKHx9l9p0IcA5f2YmFKyPibGMbF87fRtVZMN4U0RQ/640?wx_fmt=png&from=appmsg)

小蝴蝶就加上了，这种感觉还是很爽的。说实话，我还是喜欢用这种自然语言作画。。。

然后再放几个他们的参数，从数据层面对标一下GPT4，这块我就不去做过多详细的解释了，有兴趣的可以自己去用智谱清言识图，让他给你解释一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syWFLxdSn8W8dBRbuuqIAxhYpP0qOmVqhSiciaSG8zhID6yOWZbHmm6ib1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syj6oAnWlgqoibKMeWF9BeSJFlhWnMlxLtj6icVViaaY4HdI69K7kbDNx1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2sylum3aiaCvQYIPYFHU7OqHY13vkSMiaq5zKrDh5qIfApJXwv0SYpeXybQ/640?wx_fmt=png&from=appmsg)

他们自己官方也放了两个例子，可以简单看下：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2sySgVI5AKlKTBxUTfrsLxiadR1uju9Xv6IUsW2d5heX6CFF6oXuCgwGFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syl2RbxRsypAAnzGQKgibbHWRib2BZPn49tgIOTiapCVH6W56RnR40JULrA/640?wx_fmt=png&from=appmsg)

三.GLMs

众所周知，OpenAI上线了他们的GPTs，前几天也上线了GPT store，被各种人吹为下一个APP store。当然，到底是不是，那就是另一个话题了...

现在智谱也正式上线了他们的GLMs和智能体中心。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syjvd62kXSeFj5eDdh3UnCOl7TdVu4icwvZQJxfsuFMbic8tzlEQXsjz7w/640?wx_fmt=png&from=appmsg)

目前没有搜索，只有官方推荐的，基本能保证这些GLMs的质量，毕竟GPTs那玩意，真的鱼龙混杂。。

而在整个GLMs的创建页面上，智谱这次挺致敬的（笑。跟GPTs基本一摸一样，你用过GPTs创建智能体的话，就会很容易上手了。直接用自然语义来，来说人话，就OK。你做完了以后，也可以分享给朋友。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syD3XItZjKwgt2FxACQGJlIHyu9zcbXicpEpeZJh5UGFztUksx95B6udw/640?wx_fmt=png&from=appmsg)

他们也即将公布创作者分成计划。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syhHCibmwuv7psoGRstBABfVPDbHJU3FOMibMV6YZMBsTvPpUy6GjItncg/640?wx_fmt=png&from=appmsg)

期待一下后面的生态，看看智谱要怎么运营这块。

写在最后

说一个有趣的小故事。

早上智谱CEO张鹏在演讲讲一半，即将开始现场演示时，直接宣布GLM4已经正式上线，大家可以立刻在线上使用了。

（PS：这里放个他们的网址：https://chatglm.cn/，或者下载APP智谱清言）

然后才开始的现场演示。

然后，就，翻车了。。。当时在画一张图，我记得好像是个狗还是啥，愣是加载不出来。

如果这是别的国产大模型公司，可能就各种冷嘲热讽就开始了。

然而在群里，大家在看到翻车后，画风完全不一样：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syWxSIU7ibc7EuicwaseV3bpSFfIjiaq7iboSKl1iatt4ibjtM1b3iamcqyiavGg/640?wx_fmt=png&from=appmsg)

你的口碑、你的真诚，是会被所有人看到的。

这是绝对的，长期的力量。

智谱的开源、贡献，国内AI行业肯定都是看的到的。

比如他们又成立了大模型科研基金。

掏1000张GPU、1000万人民币、1000亿的Token，来支持开源开放的大模型软件开发。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEBYAYG5W94e0AMxIXx2syA5Z5U93ibXKvSB0jsATiahltvKticZDQRSMOyqFQ3o9eCVwNvXYp0IPVQ/640?wx_fmt=png&from=appmsg)

我觉得，这就是中国AI，龙头的格局吧。

我不是什么AI圈的大牛，更不是什么KOL。

我就一普通写文章的，也没什么力量。

但是我真的在这里，还是想再吹一波智谱AI。

国产之光。

无愧于此。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
