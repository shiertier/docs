---
title: "用DeepSeek徒手造一个能对话的AI简历，助你当场拿下Offer。"
发布日期: 2025-06-03
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671604&idx=1&sn=ee74a151aa5ff7836e1da7562a1222df&chksm=f1e6f4f58e3b7384c650a49c9bb47d9e2fadb27cd48dbdbdf7020197daefec91a5dc9b4be07d"
---

## 摘要

**1) 一句话总结**
本文分享了候选人通过制作内嵌AI对话的交互式网页简历成功获得Offer的案例，并详细提供了使用Dify结合DeepSeek/Gemini零代码搭建同款AI简历的实操指南。

**2) 关键要点**
*   **录用决策**：作者收到一份将个人经历作为知识库并内嵌AI对话的网页简历，认可候选人实际应用AI的能力，在40分钟面试后的当晚即发放了运营实习生Offer。
*   **核心工具链**：推荐的零代码搭建方案为 Dify（构建智能体与知识库） + Gemini/DeepSeek（生成网页代码） + YouWare（网页托管）。
*   **知识库搭建（Dify）**：在Dify创建空白应用，上传简历PDF（最大支持15M，超限需压缩）作为知识库，推荐使用免费的“经济”索引方式。
*   **工作流编排（Dify）**：在“开始”与“LLM”节点间插入“知识检索”，在Prompt中使用XML标签（如 `<context>`）包裹上下文，并设定扮演求职者的提示词。
*   **模型选择**：LLM节点可灵活配置，如使用硅基流动平台的DeepSeek V3，或通义、智谱等其他大模型。
*   **代码生成**：在Dify发布应用并获取“嵌入网站”代码后，将该代码连同简历文件、网页生成Prompt发送给Gemini（开启Canvas）或DeepSeek生成HTML文件。
*   **网页发布**：若使用Gemini可直接分享网页链接；若使用DeepSeek，可下载生成的HTML文件并上传至YouWare平台获取公开访问链接。

**3) 风险与不足**
*   **样式定制受限**：使用Dify封装的SDK代码嵌入网页虽然操作简单，但存在对话窗口样式难以自定义修改的弊端。若需高度个性化的对话样式，必须改用API进行开发。

## 正文

故事是这样的。

我最近一直在招人，想招点人帮我分担一些压力，全职的实习的啥的都可以。

我这再怎么说，也是一个跟AI有关的地方，所以很多人在投简历的时候，都会写很多跟AI相关的经历，我甚至收到过很多AI生成的简历。

很多写的很玄乎，什么掌握全链路工作流，独立搭建xx系统，深度参与xx项目，掌握xx行业资源等等，但是一面，问用过最惊艳的AI产品是啥，10个有9个说的是DeepSeek，再问最常用的AI产品是啥，还是DeepSeek。

再追问还用过哪些其他的AI产品？10个有9个说的就是豆包。

真的，我觉得我现在对DeepSeek有点PTSD可能就是从这来的。

不过，这个端午节，我收到了一个让我觉得有点与众不同、眼前一亮的简历。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBLLAu21d74I9g5tYc8YWXxxicOEbv3zcAxodmonTIay3rU6xBM5qfFtQ/640?wx_fmt=png&from=appmsg)

第一次，看到一个人，把自己变成了AI简历。

我点进去看了下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaB6p3Bo2b0lzJKILNeEbJWwEzvbzEHk3UpuDauZmVModtEoHvtuARWGQ/640?wx_fmt=png&from=appmsg)

虽然已经跟她沟通过，写出来没啥问题，但是为了保护隐私，我还是都打码了。

虽然整体设计的很青涩，非常的AI，但是我依然觉得，这个非常的有意思。

毕竟，在千篇一律的PDF简历之后，我终于看到了一个，不一样的。是用AI编程把自己的简历，给可视化的东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBR4u6YT93T4E9yqYbfFxCfKHHff3RyfLbOQFJHR0epPcuwOfiboufwCw/640?wx_fmt=png&from=appmsg)

但是如果只是这样，我觉得也还好，毕竟PDF做成可视化网页已经流行很久很久了，这也不算啥很特别的事，但是最让我觉得有意思的是，她还在里面，塞了一个AI对话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBqvVTKJOGIugEWuDr2u6ZuQPktLI3mXXWDpmsYmIhdRPp8pVDlD5GJQ/640?wx_fmt=png&from=appmsg)

你可以在这个网页里面，直接跟她的分身对话，来询问她过去的经历。

这个就很酷很有趣了。

测了一下，大概率就是把她自己的简历和过去的一些作品集放在了里面做了个知识库，并没有针对AI助手去写一些特别的Prompt或者是一些特定的数据集，来针对性的给面试官一些简历上没有的答案。

给出来的答案，也基本都是PDF简历上，已经有的东西。

但是在我看来，这事根本无所谓。

因为这个形式所传达出来的态度和意义，远远超出与真正问答的内容本身，我也相信不会有任何一个面试官，会真的用这种AI简历给出的回答来做参考，来定生死。

但当你看遍了PDF简历之后，看到个东西，我相信你绝对不会怀疑，这个人到底是否对AI感兴趣，这个人到底会不会用AI。

开什么玩笑，这要是都不会用的话，那谁算会啊？

于是我第二天直接约了面试，聊了40分钟以后，询问了很多技术细节，虽然中间有磕磕绊绊，但是整体我依然非常满意，面试完的当天晚上，我就发了Offer，来担任我这边的运营实习生岗位。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBMDXL86DO23KQdGpSQfQyZjfoLzzIZm33IicfdPRHyicBy6ZEuAz6OSUA/640?wx_fmt=png&from=appmsg)

江山代有才人出，我自然，也希望，能招到越来越多的这样的朋友。

看到这，我相信很多朋友可能会问，这个AI简历，到底咋做啊？特别是把AI对话嵌入到网页里面，我不懂代码，做不来啊。

坦率的讲，把PDF简历生成可视化网页，这事特别简单，但是如果你想在网页里面，插入一个AI对话窗口，这确实还是麻烦了一点，因为要用API来去搭，对于没有代码背景的朋友，还是有一些复杂的。

但是我想了一个有手就行的方案，就是用Dify+Gemini或者Dify+DeepSeek+YouWare的方式，来徒手搭一个。

原理其实很简单，CatBot这种形式肯定我们就不从头写了，那太麻烦了，一般就用一个智能体平台搭完，然后发布并嵌入到网页上。

这里我自己首选Dify。

网址在此：https://cloud.dify.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBfKaHqMq2N7j1cicic0fDbXh8693DL5uiaVECvibUGSYcxiawib9wYGaINtdQ/640?wx_fmt=png&from=appmsg)

我这里，用一个马斯克求职来举个例子（纯整活，无任何主观恶意）。

我让OpenAI DeepResearch给我输出了一份，马斯克的简历。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBYBeeoWhTx26I7mwBHFptv2lrNMM83A6tQS8Qnss468Ypa4JZfRGACg/640?wx_fmt=png&from=appmsg)

最后，简历的PDF是这样的，相比大家很多人的简历，要朴素好多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBjNGn24pB8iaLh69pvBEibeZDqo7xLiaBtyUNMaKFicWHhzcXN5bHrJKfLw/640?wx_fmt=png&from=appmsg)

在做个人网站之前，我们先去Dify上，搭一个可根据特定知识库问答的ChatBot。

进来以后，创建一个空白应用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaB9BGcAIPAATBKDwCXtCIuw28VFaMOZZ9D6Ww5yUyd2sqzbZvK2BBOaQ/640?wx_fmt=png&from=appmsg)

一进来以后，是一个看着好像很复杂的工作流界面，但是不要慌，信我，其实很简单。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaB5oRTwBesOhzkNxRUDiaElu26lBfIsZhYibAia2yWjJ5a2lwI29Q3dhflw/640?wx_fmt=png&from=appmsg)

首先，在开始和LLM节点之间，插入一个知识检索，这玩意就是知识库。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBt3j8zyUnyp2vxeV2Wq0cbNCeQfcibq4pAjcB4LcSNc2WfLticRDrZ3dQ/640?wx_fmt=png&from=appmsg)

然后，进入到顶部的知识库页面，创建一个知识库。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBcfRibyLcYsok2efCicHrvVVXjSQgWHOtkROJA4MialWAZdwC5ayG0LdAw/640?wx_fmt=png&from=appmsg)

正常上传你想要的单个文件，比如我就传了个马斯克的简历PDF上去。

在索引方式下，选择经济就行，主要就是咱们简历其实也没几个字，没多少信息，效果也没有差太多，还能省一堆很多人看不懂的关于Embedding模型的事，还免费。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBV9xqWcrmlFfd6knfn1TffV2ctLdHkENbUemXBkZoVglBtPZVlUzFeA/640?wx_fmt=png&from=appmsg)

然后点保存并处理就行，几秒钟后，知识库就弄好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBibWMUMOrk5EGCon6OWKj7XkKtjiagOwyibj4e7qxnqiblarVYLUPjCkNFA/640?wx_fmt=png&from=appmsg)

点前往文档，就能进入知识库详情，我觉得一个简历PDF好像没啥意思，于是又补了一本《马斯克传》进去。

PS：Dify最大支持15M的PDF，如果PDF大小超出的话，可以直接用WPS进行PDF瘦身。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBepd6uAhGrlSKahysojh3oK2iaA3UfTTfvXCuZotZyDPO2STBmYRdmNg/640?wx_fmt=png&from=appmsg)

十几秒后，我们的知识库就弄好了。

回到工作室Tab（我也不知道它为啥叫工作室），在这个知识检索节点中，添加刚刚弄好的知识库。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBwNUibqqV8UXhyIDMgQRjNKopfYBtTLthVVNOUxqStNR1uibWPdQ8XRhQ/640?wx_fmt=png&from=appmsg)

然后，在LLM模块中，在上下文部分，选择第一个知识检索。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBUy9uLtIiakGVMRVu3OnRdT6hjicexvd8raPd3QxzOMK72gr6qoURkjQA/640?wx_fmt=png&from=appmsg)

再在下面的Prompt部分，点击函数，插入上下文。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBehecL4EsHKxiblDBTbDt9NYnQ78Yng1RHzabR3OmobAsF6IlJZ1icnTQ/640?wx_fmt=png&from=appmsg)

这里的上下文，其实就是会抓取到的你文档里的知识。有一个小小的规范，就是我非常建议在上下文的上下，写一个XML标签，把它包裹起来，效果会好一些。

我瞎写的Prompt是这样的：

我是马斯克，我正在求职。
我最近破产了，xAI、特斯拉、星舰都倒闭了，我想找一份工作，理想工作是中国公务员，实在不行滴滴司机或者送外卖也行。
我现在正在跟面试官面试，请你根据接受到的问题和我给出的信息：
<
context
>
上下文
</
context
>
从一个求职者的角度，进行回答。

流程编排，这就弄好了。

当然，最后，最关键的一步，就是具体要回答的大模型的选择。

这里，我自己是用的硅基流动上的DeepSeek V3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBI8g9WklsnMcCStUiam0oOdNf3L7J2iaSqibnOcRtAribfPrm4uK3ibGNGCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaB0U3I2G9UBzu09NiaKRnHH60vugYI1M1oOsGHZggngNOIiczxHmVnag4w/640?wx_fmt=png&from=appmsg)

当然，你们要是用火山方舟、通义、智谱啥的都没问题，自己配置就好，这里我就不过多赘述了。

一切完成之后，我们点击发布。

至于怎么把它嵌入你的网站，特别简单，当你点击发布之后，你会发现，下面有一个嵌入网站的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBDZNzlK8rNvgYfkhj0oDHnE31ByY9aeRkm9xBicVyDySWY4KZs9YdeVg/640?wx_fmt=png&from=appmsg)

点开它，你会发现有三种ChatBot样式，三种代码。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBVk6QDxmZeNRYibvFPicJYEIoOk3gl3kg8MA4t4de2ibQ8vRTQ5Wc49Wag/640?wx_fmt=png&from=appmsg)

你不需要知道这些代码是干啥的，选择一个你心仪的样式，复制下来就行。

然后，打开你的Gemini或者DeepSeek或者Claude，把你的简历文件+可视化网页Prompt+这段代码，一起发送过去。

你要是用Gemini的话，记得把下面的那个Canvas打开。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBne78gX1w33yFicqRhvGGHxvNL6zVmPzSqZ3IVCSUIBTOYEPxFriaU5xA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBRRQDBUYspdVGvcSvEW2kU043Dq4Fuy8ic9X7VrsmCCbpibZ5YIDTVJPQ/640?wx_fmt=png&from=appmsg)

很快啊，两个好哥们，一顿给你写，写了几分钟以后，就写完了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBg19KZ5LbKG40bONLFcLne3DgOWTWiaG5C8AOsgSfGm4hM67o7rnhRxQ/640?wx_fmt=png&from=appmsg)

如果是Gemini，你就可以直接，把网址分享给你的朋友或者直接发出去了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBFiaGoM0g9paon14S0YwVUG6SOzARiaUiaa1HkIaZrQmmmTMZkCc447ficg/640?wx_fmt=png&from=appmsg)

对方是可以打开的。

如果你是DeepSeek，可以看到，这里有下载和运行按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaB8F6oicctWtug8iaFMB0XjIvsibbfr76IPrVMYHVbaNicITg6JSGtJJUpRw/640?wx_fmt=png&from=appmsg)

运行的话可以直接看预览，但是，没法把链接分享给朋友看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBL1FTbxIRb091dPLOGNLf0eR1lUE3IUqVJss8ZLialI15MWrRAE9KtLA/640?wx_fmt=png&from=appmsg)

（别问我为啥DeepSeek给马斯克匹配了一个蜘蛛侠，我也一脸懵逼，咋，因为蜘蛛侠是钢铁侠的接班人吗。。。）

你也可以接着跟DeepSeek对话，或者直接把这个Html文档下载下来，然后，打开我们的老朋友，YouWare（不是错别字，之前他们叫YourWare，现在改名叫YouWare了）

网址在此：https://www.youware.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBriaKR5js9jTnfWbcadtC28X6ez3nicaXtyYqJE8DuxJ5R6Z409XSWhbw/640?wx_fmt=png&from=appmsg)

把我们刚刚在DeepSeek上下载的Html文件，直接扔上去。

然后，你就会获得一个链接，就能看到马斯克的AI简历了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBGZMwR6z6ygzZ5IZxJyTEicMK5acUC9GTVOV8SAabScicicxnFBQzFek3w/640?wx_fmt=png&from=appmsg)

最右边那个AI对话，是真的可以对话的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpsVb4ylBR8DMiaR1VwjIPiaBiazfPOMB5Z0Bad357t3tn0BicsgicSrGL6NmjEiaXoUE0Ojcib1hD0WgRkA/640?wx_fmt=png&from=appmsg)

当然，因为是封装的SDK，所以虽然简单傻瓜，但是样式确实不是很好改，这是一个弊端。

所以这块如果你有非常个性化的、自定义的对话样式需求，那我建议，还是用API开发吧。

最后，我想说。

AI，让我们的简历有了更多被看见的可能性，也许会让大家的找工作之路变得更加顺利。

不过说到底，我写这篇的目的，不是为了让大家玩儿命地去卷简历。

而是让大家看到一种，用AI把自己变得更好的可能性。

AI简历很酷炫，但不是最重要的东西。

真正重要和有价值的，是探索未知领域的好奇心，持续学习的努力，即使一时半会儿没有得到想要的结果也不去摆烂的韧劲儿，以及在roll一遍又一遍的过程中逐渐成长起来的你自己。

当面试官看到你的简历时，他们也同样能够透过简历看到这些，看到背后的那个你。

祝大家在这个不那么好的大环境里，顺利找到自己满意的工作。

虽然有了工作就会发现，工作中有的是比简历难搞的东西。不过这些都是人生这个开放世界游戏中，很有意思的剧情。

愿你借助AI的力量，成长，进化，一步步走向属于自己的顶峰。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
