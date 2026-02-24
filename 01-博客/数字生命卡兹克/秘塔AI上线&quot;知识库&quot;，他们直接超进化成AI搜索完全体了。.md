---
title: "秘塔AI上线&quot;知识库&quot;，他们直接超进化成AI搜索完全体了。"
发布日期: 2024-11-13
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666550&idx=1&sn=d206ffca21527e94bd90550904c20b50&chksm=f174305e90908be136870db5ff6ebc2773689f31ce778bbefa0e7845aab1410620db27b213b7"
---

## 摘要

**1) 一句话总结**
秘塔AI搜索上线“专题”知识库功能，支持用户将AI搜索结果与本地上传文件整合，构建可共享、可调用API的专属知识库并进行精准问答。

**2) 核心要点**
*   **一键收藏建库**：搜索结果页新增“+”号交互，用户可将AI生成的回答及底层信息源直接分类收藏至“专题”中。
*   **限定范围检索**：支持在特定“专题”内进行搜索，AI仅基于用户筛选收录的干净数据进行知识检索（类似个人RAG），不进行全网发散。
*   **保留原生体验**：专题内搜索依然支持生成思维导图、人物信息整理等功能，并明确标注引用来源（通过小书本icon或“LIB”标注）。
*   **支持本地上传**：除联网搜索结果外，用户可在专题内手动上传Word、PDF、网页等格式文件作为补充信息源。
*   **多人协同共享**：专题知识库支持对外分享，允许用户与他人共享甚至共同编辑。
*   **开放API接口**：专题页开放了API接口，允许开发者直接调用个人知识库数据来构建第三方轻应用。
*   **形成产品闭环**：实现了“公域AI搜索生成 -> 筛选收藏 -> 建立专属专题 -> 专题内精准问答”的完整内容流转闭环。

**3) 风险/不足**
*   **收藏格式受限**：目前仅支持收藏秘塔生成的文字回答、网页和文档，暂不支持收藏播客和图片内容。
*   **单归属限制**：一次搜索结果只能被收录在单个专题内，无法同时被多个专题收录，分类灵活性存在局限。

## 正文

故事是这样的。

最近国内各家AI产品不是卷麻了吗。

就两大领域kuku卷，之前是AI搜索，这周是AI绘图。

AI搜索这一波，国内有Kimi上线复杂推理的探索版，海外的Perplexity除了高级推理还能调用各家大模型，GPT的搜索最近更新的动静也不小，要强干Google的地位。

我一直很好奇，这些厂子，还能把AI搜索完成什么花样。

然后非常巧合的是，昨晚李子柒不是复播了吗。

我的所有群，不知道怎么滴，就变成了李子柒讨论群。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5l7TWgcqYVpY2QibnLlWhwqsMRZbMEaOT78V9c5rs2rEIZCy7sIXmgrg/640?wx_fmt=png&from=appmsg)

但是不怕你们笑话，我作为一个做自媒体前，几乎不看八卦、不看热搜、不看任何我不感兴趣的事的人。

我之前只听过李子柒这个名字。

但是我真的不知道她为啥火，又为啥2021年以后停播。

那现在作为一个半媒体人，去挖掘任何热点，都是必备功课，没有之一。

于是我就习惯性的打开kimi、秘塔、Perplexity一起三箭齐发，去搜了一个问题：

“
李子柒为啥当初退网？
”

当然这个问题的答案，在这篇文章里面不重要，不过以防又跟我一样两耳不闻窗外事的人，我还是贴一下答案。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpWgSMGibXEPErjW1CvfYYu41hL2xCR694rnLDksRtWiakZ5WiaJMxHQIaYcPz7UYNgvQ2pKRSP9iaLlg/640?wx_fmt=png&from=appmsg)

大概的回答是：与MCN公司的纠纷导致退网。

kimi和Perplexity也差不多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h52IibavU7ZOffVtfs6a3xOzZDvbNH3yJUzqvMnEoWPY7qGWdy425pALg/640?wx_fmt=png&from=appmsg)

不过李子柒不是重点，重点是AI搜索产品本身。

尤其是秘塔AI搜索。

这次搜索，我发现秘塔的界面，居然多了一个有趣的变化。

就是在你提出的问题“李子柒当初为啥退网？”的旁边，多了一个
加号
，点击以后，显示的是“收藏到专题”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h50YgBtMSRCwfmPCxYXE3iaUBRlicsu0QHJIHGj3luq3axGQFEgQNs6iaDQ/640?wx_fmt=png&from=appmsg)

作为一个前用户体验设计师，我对界面UI太敏感了，我可以百分百保证，之前是没有这个玩意的。

这交互，藏得还挺深。

我就试了一下这个加号是个什么玩意。

点开以后，发现这个新功能有点像搜索结果的收藏夹。可以把AI联网搜索后总结生成的内容，分类收藏到一个专题里，同时秘塔主页的左边，也多了一个“专题”的栏目。

还是刚才那个李子柒的问题。

点开问题旁边的“+”，就可以创建专题。比如我建了一个叫“李子柒”的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5I5d2wrtO0wlyXuAGzJ4hjj1FD9tCkgPt3wtEC6a8icl2MOqpYn31Q5w/640?wx_fmt=png&from=appmsg)

有趣的是，
这个功能，除了可以收藏秘塔生成的回答内容，还可以收藏回答里秘塔查到的信息源。反正就是只要你能看到那个“+”，啥都能收藏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5tLP4UmGtUxrzC4ko7GHMibYGhg7GvIWC1icedCxv0STzy4CiadJnoCwkQ/640?wx_fmt=png&from=appmsg)

左侧功能栏目里，有一个“专题”的入口，点开就能找到你的专题库了。也可以先在专题功能这儿的界面建好专题，要收藏的时候点加号选择就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5Vg9vtpYkDCJaLVxJ5z1xoeQ4pEMfgq8IqKXj0fbgEmFRNyqeVnyAaA/640?wx_fmt=png&from=appmsg)

新功能研究了半天，我才明白，这回秘塔做了一个很有趣的事：

他们做了一个
知识库
。

是不是听着好像很普通的样子？

但是不要忘了，现在市面上能看到的RAG知识库的本质，就是AI搜索，只不过是限定了范围的AI搜索。

这个范围，就是你自己收集的乱七八糟的文件、网址、知识等等。

但是不管你里面塞了什么东西，它最后本质上还是得用AI搜索。

而秘塔是啥？就是AI搜索的扛把子。

只不过，大家一直对它的印象，是公域AI搜索。

那现在，秘塔来做知识库，才是这最有趣的神之一手。有点妙啊。

其实秘塔在很早以前，就可以限定范围和渠道，做特定范围的搜索了。能搜全网、文库、学术、播客等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5JepGHPtia43RQkoFN9tB1VppxkRuHnRQwIzWWzOhgLwEiaFMrA6GkLmA/640?wx_fmt=png&from=appmsg)

那现在，知识库，作为一个渠道，放在这个地方，真的有点水到渠成的意思。

而且可以把在秘塔上搜索到的任何内容，直接收录进专题，作为知识库的一员。

这个自循环，也非常的好玩。

我直接做几个case，给大家看看这个东西玩起来，是多么的有趣。

继续前面搜李子柒的。作为一个对她的了解停留在名字的人，想搞明白她这一连串从火到停再到复播的复杂经历，就很适合用秘塔来干。

以前要梳理这样的人物经历，我得先联网搜索，再把查到的信息和文档，复制粘贴到我的知识库去，之后再复盘整理成学习资料。。。。（这么一理，才发现之前整理内容有够折腾= =）

现在就很简单，对着AI搜索问就完事。

比如李子柒是什么时间怎么火的、“李子柒为什么停更”、“为什么突然回归”、“李子柒都有哪些产品”、“李子柒这次回归后发的内容跟之前有什么不同”、“李子柒现在还火吗”……

我直接想到什么问什么，秘塔查到我满意的内容，我就点个收藏，它就会把回答结果以“文章”的形式保存在专题库里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5UPnRJpr4YDN3ibW8IItAEibaVczRlOSnia3YicCWSmaUFyZWRc7MEVFUIg/640?wx_fmt=png&from=appmsg)

这些文章，点开就是刚才秘塔联网搜索后，回答结果的页面。

这个专题，其实就成了我筛选过的，非常棒的一个知识库。

因为坦率的讲，AI在公域去做搜索，有时候也还是需要抽下卡的，并不是每次的回答，都很棒。

而现在我已经提前收录过了很多的优质的信息。

之后哪天我要是再需要查找这些“李子柒”相关的事，可以不用再重复联网搜索，直接去这个专题里面的搜索栏，或者在首页的搜索渠道里选这个专题，就可以调取之前查到的结果。

比如我在专题的搜索栏问：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5VePwAibYXrYmFj3U6hL2FM5TprAC7YC6R12gAqLdaKYYLvVOT2LOdSw/640?wx_fmt=png&from=appmsg)

在专题内搜索的时候，秘塔不会联网。它读懂问题后会进行“知识搜索”，这一步的信息来源就仅限于这个专题，就跟个人的知识库RAG一样。

别的不说，信息源都是自己筛选过的，足够干净，足够可控。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h58dIL0Cp9wnT8PGEibLETsHpx4JHXNiazTFcGasibukvCZKsicIUoYsn34g/640?wx_fmt=png&from=appmsg)

最后专题内搜索的回答结果，也不错。思维导图、人物信息整理啥的秘塔原本就有的功能，一个也不少。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5cgRRJZmj5yuUsYicZwbaTA4e6uf4ZM04I8p5I98DwgSw8e0EiaNeoo3Q/640?wx_fmt=png&from=appmsg)

引用的信息源具体也标得明明白白。点击回答里小书本一样的icon或者“LIB”的标注，就能看到参考了专题收藏里的哪一篇回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h558qraotQcRmFIbwaR1ZsHWjI0f0jFLcoOp5p5q9JZ5yZSbBtibgMN5w/640?wx_fmt=png&from=appmsg)

整个体验就，很丝滑。

以后做这种互联网信息的整理，我再也不用自己手动一个个去复制粘贴、下载文档再上传文档了，知识库搭建难度立减九十九。

而且，除了保存和调用联网搜索的结果，你还可以自己补充上传特定的知识内容。这一个就和你熟悉的知识库流程差不多了。

在专题内页，右边有个“上传文件”的功能。上传word、pdf、网页啥的都行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5F7uDJctQiaYKpbCGYmpj8tL0Xy6yR57v7Msy9eb58RJfD5f5VlfxNiaA/640?wx_fmt=png&from=appmsg)

这样在这个专题里搜索的时候，秘塔就能把这些上传文档的内容，也作为信息来源了。

你就想想，以后做工作研究、个人学习、专业知识库建构……都可以在一个产品里，既能用到AI公域搜索，又能用到自己的个人知识库问答。

比如建一个“学习资料”知识库，里面摆满了各种你自己上传的以及从秘塔AI搜索问答那的收藏文章。

下次直接想找什么资料，直接对着这个专题问答，你就能体会体会，
什么叫飞一般的感觉。

然后我又冒出来个想法，是关于热梗的。

因为最近我实在是忙得飞起，一大堆推不开的活动和商务，18G冲浪选手本人直接给干成2G了。群里最近聊的抽象梗，我是一听一个懵逼。已经快跟不上年轻人的步伐了。

所以正好我就试试，在秘塔上整个“热门抽象梗”知识库，专门收集这些玩意。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5w9snYVlAVQVVjKZTwuP5siaj81c6789ibWOKCvYHMewXlnicYAyLbibGZA/640?wx_fmt=png&from=appmsg)

在成为抽象之王的路上一路飞奔...

然后秘塔这个专题有一个非常有趣的点是，它是可以被分享的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5rN9e12IrlBww5jY6rnDwB4rHojKJrMH4VTyusnseXg631FFQZIHstw/640?wx_fmt=png&from=appmsg)

也就是说，这个知识库，是可以跟其他人共享的，甚至，可以共同编辑。

你和你的同学或者朋友，可以共用这个知识库，这个在协同上，就很酷。

但是你以为这就完了吗。

他们甚至，给这个专题页，开放了API接口。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5jXjcDS4LPZPyV50kl8badxhT9xGMLtmM0mQnzHJGiaWzqyIicKG2okibA/640?wx_fmt=png&from=appmsg)

这就比较有趣了，可以去做一点套壳的小应用，直接给别人玩。

比如我就借助Claude，随手写了个代码，把我的“抽象梗”专题给封装成了一个前段页面。

一个热门梗解释器，自动就有了。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpWgSMGibXEPErjW1CvfYYu4uXvibUE8lrRD3ib6DnmYJicM4InlFt7M0OWlOrO4Pjvc3w4pF6AJicS3pA/640?wx_fmt=png&from=appmsg)

好抽象，真的，抽象到家了。

不过这组“专题”的新功能体验下来，还是会有不少有待改进的地方。

比如现在能收藏的内容形式，也有一些局限，目前只能收藏秘塔“生成”的文字回答、AI搜索到的网页和文档。播客和图片啥的，还是不行。

并且，可能是秘塔担心搜索的逻辑套娃，一次搜索结果只能被收录在单个专题内，不能同时被多个专题收录。比如问“卡兹克和郭德纲是什么关系”的回答，收藏在【卡兹克专题】后，就不能在被【郭德纲专题】收藏了。只能二选一，这个设计确实有一丢丢难受了。

但整体而言，瑕不掩瑜。我依然觉得秘塔这次更新的方向，选得太对了。

秘塔，确实是一直奔着用户体验在走。

也算是第一个，在我看来把AI搜索，做成了完全体的产品。

甚至，它还有一种，想做新生代内容平台的概念。

AI生成内容，然后收藏内容，进入专题，最后还能对这个进行问答。

形成了真正的闭环。

秘塔，真是把AI搜索。

卷上了另一条路。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
