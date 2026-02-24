---
title: "Agent真的卷疯了，AI办公Agent也来了。"
发布日期: 2025-05-22
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671378&idx=1&sn=c3640ee4b61d0d0ed2e91d75dbbc387a&chksm=f1d43aeb5a6656f4c813539c52df6c40472eb091e683fe3ef93d0beca104725b9876b40b0581"
---

## 摘要

**1) 一句话总结**
昆仑万维推出了专为垂直办公场景打造的AI智能体Skywork Super Agents（国内版为天工），提供文档、PPT、表格等核心生成能力，具备创新的确认式交互体验，并向开发者开源了底层框架与MCP接口。

**2) 核心要点**
*   **产品定位与入口**：专为办公场景优化的垂直Agent，分为海外版（skywork.ai）和国内版（tiangong.cn），目前已向全量用户开放，无需邀请码。
*   **核心应用场景**：主打文档、PPT、表格三大专家级场景（内置细分场景选择），并额外支持网页生成、播客生成及通用对话模式。
*   **交互设计创新（选择式确认）**：在需求澄清阶段，将传统的“问答输入式”改为“选择式”，大幅降低用户的打字输入成本。
*   **过程高度可控**：在执行任务时，Agent会在生成“待办清单（To-do list）”和“内容大纲”节点暂停，要求用户确认或手动接管修改，确保生成结果精准可控。
*   **PPT生成与编辑**：采用代码绘制PPT，支持一键查看信息来源以核实真实性；允许用户直接在生成的PPT页面上点击编辑文字，最终可下载为PPT或PDF文件。
*   **定价与计费策略**：采用积分制（每日免费赠送1200积分）；国内版定价极低，仅为海外版的1/3（PPT生成低至3折）。
*   **开源与开发者生态**：昆仑万维开源了其DeepResearch Agent框架（GitHub已上线），并将文档、表格、PPT的生成能力封装为MCP（Model Context Protocol）供开发者调用。
*   **底层模型支持**：在音乐/播客生成方面，调用了昆仑万维自研的音乐推理大模型Mureka O1。

**3) 风险与不足（基于原文明确提及）**
*   **PPT排版自由度受限**：当前版本的PPT生成缺乏传统Office或Canva的自由度，无法直接移动文字位置或修改图片。
*   **表格缺乏在线编辑能力**：生成的Excel表格目前无法直接在线修改，必须下载到本地后才能进行编辑。

## 正文

我一直说，每个行业，都一定会有专门优化的垂直领域的Agent。

你看，通用Agent的王座上有Manus，研究类的有DeepResearch，旅游有飞猪问一问，设计类有Lovart。

那现在，办公领域的Agent也来了。

专为办公打造。

这玩意就是昆仑万维的Skywork Super Agents。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjxqycO0kzsa5prwCoxhJxCNBlIEEYs9UZnEibmO7vhmFic0rgDSHCicskA/640?wx_fmt=png&from=appmsg)

我在五天前受到昆仑万维邀请，深度体验了一把。

虽然在体验过程中，还有点小小的插曲，因为单独给我开的测试服务器，所以其实是晚上限时开放的，结果有天晚上提前关了，我测的正High。。。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQROibib34eibyPDWvWzV2vsmT80iaXx4R6h61I9diaCT0qPpItEExpFhvu52Q/640?wx_fmt=jpeg)

给我一下子干慌了，第一次见到这么真诚的品牌方，那一瞬间觉得我要是不好好体验测试，那我真是千古罪人= =

不过抛开这些情感因素不谈，在我体验了5天之后，我觉得，还是值得写一写这个产品。

因为作为一个Agent产品的第一代，做的功能确实完整，产品体验也很棒，而且它对大家的办公场景，是真的还有点用。分为海外版和国内版。

海外版网址在此：
https://skywork.ai/

国内版网址：https://www.tiangong.cn/

他们的首页是这样的。

从首页上能看出来跟其他的不一样的点，就是把办公场景单独抽离了出来，直接就标了3个专家级场景，文档、PPT、表格，后面还有网页、播客。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjkialYUZVd079uE9RVbo3mXFRUxHtNUSyx52QqYNp0OTFyTZ4ibgrXOibQ/640?wx_fmt=png&from=appmsg)

这三个专家级场景，大概率就是3个特训的不同的Agent，以能在每一个场景上，都达到最好的效果。

甚至前面三个智能体，在点击上面的小标签之后，还能选择细分场景，比如这个文档的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjzlvDHNL06Qw8aSXaR3ejzDkjQJJmS4Tsyia5tVUTvXAddryiausoicLMw/640?wx_fmt=png&from=appmsg)

还有PPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjUhf6NrDGzjO4HQxicw3miaewFiclUdLXPqYZ9spD4xWib8pTSz1LpxqNJg/640?wx_fmt=png&from=appmsg)

这个还是蛮有意思的，在用户体验层面，做了降维，同时也可以做一些针对性的优化。

给大家看一个实际的例子，就先用PPT入手吧。

比如说，马上终于又要端午节了，但是最近忙成狗，基本时间都快被切割成1小时为维度了，端午节出远门是不可能了，顶多当个溜达鸡，在北京附近转一转透透气。

同时考虑到随时可能要写稿，露营似乎成为最好的选择，因为随时能坐下来办公，毕竟面对好山好水，赶稿的心情也许会好一些。。。

于是，我就想让
Skywork，生成一份北京周边露营的PPT，来给我宣传宣传北京周边区域的景点。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjbE76L4hHrufykqAZhQqLIvOxhHdQqWbbHvU4cLWuFL2WOnPsK7uibpA/640?wx_fmt=png&from=appmsg)

当你把你的要求发过去之后，有趣的事情来了。

之前不管是DeepResearch还是Manus，现在都有一个我觉得超棒的环节，就是需要你确认。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVI29Wu1hHMDNdAtFjRDkTbDJ1YFT05ficQicDm2mbwCniaXHI7p57ibzzoqQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjK1pqWHLkPrOPqf6aZ6ZSiaYIdSwIYiclTFga28sW1AKlJQibFuGBjib3TA/640?wx_fmt=png&from=appmsg)

我自己超级喜欢这种方式，因为它能
帮你查缺补漏。

而这次，
Skywork做了一个小创新，虽然是交互设计和产品层面的，但是我依然觉得，眼前一亮。

他们把对话式的回复，变成了选择式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjj1T4NIRXscc2BATkZXzibbckhnIy3Rup4NxmNVMTfLabNdUIUMsSezw/640?wx_fmt=png&from=appmsg)

这个点真的挺棒的，因为打字这个事，其实一直都是成本比较高的行为，你会看到，在移动互联网的交互设计思路里，一定都是能选择就不会让你输入的，这样用户体验最佳。

而
Skywork，这波把需要你补充的信息，也从问答输入式，变成了选择式，这点我真的很喜欢，懒逼狂喜。

在你选完以后，点击确认，在嘟嘟的跑了一会后。就会继续让你确认，待办清单。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjyP0rdJkHn4Lfr3w7OibGMgOuQ5jqkZucLKfRrdbwZVFt2T5UicjUOQ7w/640?wx_fmt=png&from=appmsg)

之前很多Agent其实都是直接生成完步骤直接运行了，不会让你确认。

但是在办公场景下，坦率的讲，我自己还是希望确认或者修改一下的，因为我们需要的不是很随机的东西，而是精准，以及可控。

你觉得没问题的话，就可以点确认，如果觉得不满意，就直接在补充内容那块，直接用嘴修改就行。

确认之后，它就会就直接开始干活了。

先非常常规的搜集信息后，就是各种搜网页抓取信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjYICE88iaG9XOewMhfssrapaxmAgk8uzmsyuQ0dxpZcqUP1IHbeYf9iaQ/640?wx_fmt=png&from=appmsg)

每做完一步，修改自己的To do list，同时，有一个点，就是在最终PPT的大纲生成的时候，这个PPT大纲也是需要你确认的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjIwaibuDe0peHRXuz1W7wNDufyGpWxzlLdrHZPuUhwDMDmVTlRmaN56Q/640?wx_fmt=png&from=appmsg)

我在测试过程中，之前不知道这个地方也要确认，于是在确认完待办事项后，就把网页关了直接去拉屎了，想着一会打一把游戏回来一会就可以直接收菜了。

结果回来再打开网页以后，发现，卧槽怎么停在这一步了？

就，那一瞬间，感觉天塌了。。。

如果你觉得这个大纲可以，你就点继续，如果你觉得一般，你想改，那就直接点接管，你可以进入一个新页面，直接可以手调，只要有字的地方，都可以编辑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjBBQGZgqCmxv3H2GpDjfGc9jXFf8icc05RQiaqUpdzXUSetDLRhJBviaQQ/640?wx_fmt=png&from=appmsg)

最后，整体上大概等10分钟左右，你就会收到，生成好的PPT了。

比较骚的一点是，
Skywork是在用代码来画PPT。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj0GMP3NcuEFUNzDGOJtofNR2nHaW3uiaic1cGXqjeW1XiapOFcfw1GmFYQ/640?wx_fmt=png&from=appmsg)

PPT的效果，我觉得还是蛮好看的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj8W2qhsicZtrcAlrjXKlJ7JPibf41ZvaXa6icDItic1BUKictRFKHcdSTaoA/640?wx_fmt=png&from=appmsg)

整体风格非常统一，最搞笑的是，在这十几页PPT里，我也不知道它为啥，给情侣这一页，单独来了个浪漫的紫色。。。对，唯独就这一页不一样。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjxJMUDm1seZG1Ria3oUGXelmsibRGqHKhtACgqoK5ykKQpen6MbxLt6ibg/640?wx_fmt=png&from=appmsg)

如果担心PPT内容不可信，还可以点击右下角“查看信息来源”，确认PPT内容的真实性。

如果你觉得，这里面的文字你希望调整，你可以点击，右上角的编辑。

这个，是我觉得，相比于其他Agent最爽的一点，就是，他是真的，能直接在上面改文字的。。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo8jULIFue9dTC2cXt73WDjKPA5WMr6CS4WXUbbVA5U2vUk0AT9UvX1fmGrTstUIbe34m3M6ZtAgg/640?wx_fmt=gif&from=appmsg)

你能看出来，它想好好做办公的心，这玩意，就是正儿八经的，打通了最后一公里。

唯独可惜的是，还是没有PPT或者Canva那种自由度，比如你没法移动文字的位置，没法改图等等。不过还是那句话，路对了，后续迭代就好了，这毕竟才第一版。

最后，你什么都确认了，想下载的时候，你可以点击右上角，把它下载成PPT或者是PDF文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjwffIVZr8r11eyAn5VX81l1NFWdqX9m20w5LnmnMuz6hKsJH72zoUrw/640?wx_fmt=png&from=appmsg)

就这样，全程我就说了两句话，点了三下确认。一份我觉得很好看的PPT，就完成了。

而且中间的过程，自主可控，一些产品的交互细节做的，也蛮不错的，完整度很高。

然后，我又做了一个影视策划书。

这个PPT不仅要有独特的视觉风格，还要把故事和人物都介绍的很吸引人，制片层面的主创码盘子、制作周期规划、市场分析也少不了。

最关键的是，这玩意得跟我的参考PPT和原著小说做结合。

于是，我就上传了一个这两个文件，先扔到了知识库里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjL8avWCJuZULenbDwOXqTtLeOz2I3CCEHiaWEqckerx2iboINyWhtb8Wg/640?wx_fmt=png&from=appmsg)

让它再看一下生成的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjiaCFG1sgibVL4nCNf3kaMSjjxMicd594ELczfDVToEB8C0HKb28Pibwv3A/640?wx_fmt=png&from=appmsg)

PPT的怀旧风格是有的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj5ZhcJB00IsnDr236HgNvUIpDnJ1hpde2gtaZaFd2iceOFPibwyM6uYiaA/640?wx_fmt=png&from=appmsg)

故事大纲也有点想让人往下看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj2Bzfln3joIAtCOpN7ibqhyLjTIQ8Mp6dhsM1Y8JQBvzHnXlaIRQRDCw/640?wx_fmt=png&from=appmsg)

人物介绍，emm，可以更吸引人，但好歹把人介绍清楚了，还是得我们徒手在上面修就成。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjFTsczUMpPFc5vpaU9ib42SEL1cEbYjWXpkPzVvCpdqh77YFePnU3SVA/640?wx_fmt=png&from=appmsg)

改编方向、视觉风格、主创团队、目标受众，想的还挺详细的，能当半个制片人了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjhfgHTCSODkPxuAq8PmSJtfmDEBRlKoOUCzNb0Gz54gdZw4XibicUg9XQ/640?wx_fmt=png&from=appmsg)

单就PPT这个Agent的体验上，非常完整了，很好的诠释了什么是办公场景的全链路。

我其实一直觉得在这个阶段，还是做垂一点的Agent产品，更可用，你把一个聚焦的场景做好，可能比一个究极通用，但是每个点都一般的产品，更有用。

表格模式，跟PPT类似。

我们可以直接让AI，来帮我们处理表格数据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRjbFApQxuJCgFaKNYWeo0jMDwsLpWHYmcicSuSL5uNxQdY58msrSPt6A/640?wx_fmt=png&from=appmsg)

也可以直接，说出你的要求，让他基于全网的信息给你做筛选，最后屯到表格里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRnQJJ2icDJicapAtWo9dfCpksWZwMoUE6rrdguotqiatwZKyrAkefaaakg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRZbRJscIhjjDWW0cETbZrwGkXH5ZbMZZ686mLBPviazOhDevc73ElN6g/640?wx_fmt=png&from=appmsg)

它甚至会单独帮你开几个sheet，给你准备好，视觉的可视化。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRhnqrlE2oRdtWHcueOiaoBkibdNCW869qfXX2MUjNpTYq93Ik4IK7S4eg/640?wx_fmt=png&from=appmsg)

不过有个问题就是，excel没有办法直接在线上编辑，需要下载下来才能修改，坐等他们迭代了下一版。

文档层面，其实整体上比较通用。

很酷的点就是基于文档这个大场景，还分了很多小场景。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRojwkBQvC1ibM9o8iaOLDJk4gKjl1vbMQaklM0fibDIKeOOd6ibY9e1obsA/640?wx_fmt=png&from=appmsg)

比如前几天，爱死机4上线了，就咋说呢，看的我还是挺失望的，有点像这几年的漫威，技术力上来了，故事越讲越烂了。

我就可以让
Skywork写一段吐槽的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRVibT6O4XrDM5aQE9nWeYWwhbenEBkFLPcK7n9SqVbbrcBlNUQdVbn6w/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQR9OLoUfichupKoeldxh4XxBRyIbuC6SKSm5EO9szic4uzd46kFnI6kicpg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRLcPXPjYF5KYnrXcPU7HHjPgPIbW2DplUuyQvTD3tXwogQK1AO3icEsQ/640?wx_fmt=jpeg&from=appmsg)

最后出来的效果，非常的不错。输出了一份超长的文档。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRwv6tkHrAick24fHXGSATicmak2DlFDCrSpeWPjoIIerXkG2cEZMLjiaibQ/640?wx_fmt=png&from=appmsg)

真得尖锐刻薄加杀人诛心。。。

当然，后面还有其他的模式。

比如我们可以直接，生成一个网页。

我就用它搓了个甄嬛传版狼人杀。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRFazBFyK38GJ9KcFVcbwYEjrYV0iboDZNwmZhFicA1XzAiacw77SlJKh7w/640?wx_fmt=png&from=appmsg)

再播客模式下，我们也能用文件或者Prompt，生成一段播客。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQR7s3cdQtUImpbQgFaPJLibR4Jv5qCLVibKmBQ2XgpCV3T7ibicOApibeExYQ/640?wx_fmt=png&from=appmsg)

通用模式下，其实就相当于Manus那种了，我甚至让它给我写了一首歌。

我让它模仿泰勒斯威夫特的风格创作一段音乐。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRJHic6hPWfcUQibJHeeUuibeB6T8WB4h0k9POaqROxd3hR7urbzBh3j8uQ/640?wx_fmt=png&from=appmsg)

emmm，顶锅盖说，其实我觉得比霉霉的新专辑更有记忆点一些......

这个模型应该就是昆仑万维自己的音乐模型
Mureka，冷知识，昆仑万维其实，是一家有深厚音乐基因的公司。。。

他们的音乐推理大模型
Mureka O1，之前压了Suno，然后了SOTA了。。

最后，说说价格。

Skywork是积分制，实际跑的过程中，你才能知道，消耗多少积分。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRMmtpsv3xADIm2mAOF1n7oOiclc0YIpUrWObneJ23Zps3edLLvh4bZKw/640?wx_fmt=png&from=appmsg)

一个项目，小的可能就几十，最多的我见过5000积分的，但是大部分，都在几百到一千左右。

价格上，海外版价格在大部分的同类型Agent产品中，价格算中档。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQREJYAc53a0RMLG2qiahBykm6Z6JypFjUeibtCLpkqJibwCJsialaW5HdGIQ/640?wx_fmt=png&from=appmsg)

但是坦诚的讲，相比于大家日常用的非Agent的AI产品，会贵一些，毕竟整体Agent算力消耗在这。

不过每天会送1200，还是能白嫖一些的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRqnVH5q1oI7vmZdUrBqKcibqD4sInakHUiceScEvTnQUfcbEaoXuswZ4A/640?wx_fmt=png&from=appmsg)

目前，无需邀请码，对所有人开放。

但是，但是来了。

国内版，则就便宜的多了，而且是便宜的我有点不敢相信。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQR9OXZUovByMibceXPFKiadUBMwNWsWz4GhMaSUafTNYAlJ1a0Qxjz0Szg/640?wx_fmt=png&from=appmsg)

价格只有海外版的1/3，PPT还是三折？。。属于便宜到离谱的那一档。。。

这个定价策略，让我想起了曾经的拼多多，挣海外的钱，补贴国内，泪目了。。。

海外网址：https://skywork.ai

中国网址：https://tiangong.cn

最后，我还是想聊聊昆仑万维。

其实坦率的讲，我之前对昆仑万维的产品，是没有啥太深的印象的。

但是这一次，我是有一点意外的。

不止是产品的完整度。

更是另外1个非常有趣的操作，就是刚刚，他们，把DeepResearch Agent框架直接开源了。。。

主要是他们这个框架跑分（5月10号的数据），还挺高的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRSQEAEt2xHwWDTeKJ4mJvGheqFo24Cm5lrhhZNzwbUC1ssiaxPibsZbnA/640?wx_fmt=png&from=appmsg)

deep research agent框架开源：https://github.com/SkyworkAI/DeepResearchAgent

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQRufbgnFVz0BUh0s3ED3NeX6BBU2aCpecX36kCXjSvny2dUrJt5HaYwg/640?wx_fmt=png&from=appmsg)

还把文档、表格、PPT
的生成能力，做成了MCP，供所有开发者调用。

MCP地址：https://mcp.so/server/skywork-super-agents/Skywork-ai

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqzNK4z1x2ogVcO4Sz0icxQR760f4OsQ2LKlV74zAZicmJia384UQYT5ibw6n7twkMoflaicEl7mxAfpbQ/640?wx_fmt=png&from=appmsg)

就，我还是想说句佩服的。

我一贯的态度就是，你开源，你开放，你就牛逼，我就要夸你。

你能从每一个细节中感受到，这还是一群真心想让AI好用的人，在用工程师的方式，尝试解决我们每天办公里的小痛点。

昨天，Google已经手起刀落，开始在重构自己的搜索引擎。

那其实像笨重的Office套件。

为什么不会有，重构的可能呢？

这个方式，也许。

Agent，会更优雅。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
