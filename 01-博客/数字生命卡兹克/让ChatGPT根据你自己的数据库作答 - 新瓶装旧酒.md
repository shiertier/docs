---
title: "让ChatGPT根据你自己的数据库作答 - 新瓶装旧酒"
发布日期: 2023-04-19
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658252&idx=1&sn=c15ddd0ab3af1370d17ce1c1df79899e&chksm=f122d8d8696ac3cec3715e79ee06e61f85431908e80ec85f2f7f3f3662442ecd56b9bd83d4fa"
---

## 摘要

**1) 一句话总结**
本文介绍了如何通过OpenAI的微调（Fine-tuning）和嵌入（Embeddings）技术，结合外部搜索与提示词打包，让ChatGPT突破Token限制并基于用户自有数据库或实时数据进行作答。

**2) 关键要点**
*   **核心痛点**：ChatGPT原生模型缺乏最新数据，且存在4096 Token的输入限制，无法直接处理超长文档（如长篇PDF）。
*   **官方解决方案**：OpenAI官方提供了两种调用接口以接入自有数据的方法：微调（Fine-tuning）和嵌入（Embeddings）。
*   **微调（Fine-tuning）特点**：基于GPT-3分类模型（如davinci、ada）进行预训练，一次训练长期有效，适用于数据集较小且知识内容长期不变的场景。
*   **嵌入（Embeddings）特点**：无需训练模型，适用于数据量大且实时更新的场景，是目前ChatPDF、ChatDOC及Chrome联网插件的主流实现方式。
*   **嵌入方法工作流**：接收用户问题 -> 使用工具（如jieba）进行分词 -> 在本地数据库（如Excel）中搜索匹配数据 -> 将“预设Prompt + 提取的数据 + 用户问题”打包发送给GPT -> GPT重组自然语言输出回答。
*   **联网插件原理**：WebChatGPT等工具通过抓取网页HTML文字内容作为数据嵌入，交由ChatGPT根据抓取数据作答，从而实现“假联网”。
*   **终极解决方案**：为了彻底解决长文本处理问题，OpenAI推荐使用长时记忆区和矢量数据库，这也是AutoGPT的核心驱动力。

**3) 风险与不足（原文明确提及）**
*   **Token限制**：受限于4096 Token，长文本处理始终是一个难题，单纯依靠嵌入（Embeddings）只能解决部分问题。
*   **模型时效性**：原生模型没有最新数据，直接询问最新信息毫无意义。
*   **技术门槛**：作为长文本终极解决方案的“长时记忆区与矢量数据库”具有较高的技术深度，作者表示目前属于其无法理解和触及的领域。

## 正文

ChatGPT越来越广为人知之后，有越来越多人将他用在实际场景中。

但是ChatGPT也不是神，4096Token也如同梦魇般旋绕在头顶。

越来越多的问题暴露了出来：

比如，发现这玩意没有最新数据，问一些最新的数据毫无意义。

比如，一篇超长的PDF文档根本灌不进去。

诸如此类。

今天，想写一篇浅显的文章，跟大家聊聊OpenAI开放的能力，也是你们所见到的ChatPDF、ChatDOC、所谓Chrome联网插件等工具的原理。让大家人人都能将自己的数据灌给ChatGPT，让他根据你的数据来做答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwANPBM0K4XtbxZ0QGpC3n6Ft7kNtrjUsmC0rcYRVBicLjjFNR9KdxiaIqw/640?wx_fmt=png)

首先，非常推荐想研究的人去读一遍OpenAI的官方文档，里面很多东西其实已经写的非常非常傻瓜简单了，而且并不难。

在关于如何将自己的数据灌给GPT上，OpenAI官方提供了两种可以直接调用他们接口的做法：

Fine-tuning（微调）和
Embeddings（嵌入）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAaQRGHeDiaAVQzsK5yQLqqzWdDrC3AH37CoUia1DPMmCW6IMUSj83dmvQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAZhLNo5g09HY7bDGM0Plg2BxJoUY4FXW6EwHGPHibJqky0XfiaqSQkP4w/640?wx_fmt=png)

两者的优劣简单概括如下：

Fine-tuning（微调）只能基于GPT3的分类模型去训练，比如
davinci、ada等等，是预训练模型，一次训练终身受益，适合很久知识都不变且数据集较小的情况。

Embeddings（嵌入）无需训练模型，是将自己的
预设Pormpt+
数据+问题打包，当作一整段话发送给GPT。让GPT根据这个预设的Prompt和灌给的数据再加问题做回答。适合数据量超大且实时更新的一些数据。

在我实际使用中，嵌入方法可能更适合大多数场景一些。ChatPDF和所谓的那个假实时联网的插件也都是这种方式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAsztZjHjf21WA31SNBHtZWToO0GkOyauHnNFia0c8jxDKbOVW6g2bLxw/640?wx_fmt=png)

以下，我来举个小栗子：

我现在有10000只基金的所有的最新的涨跌数据，在一个excel里，我想让ChatGPT在回答这10000只基金的相关问题时，使用我excel的数据来回答，别用他那老掉牙的21年的数据。

这是我的需求，当然正常做法可能是去数据库里面扒数据，当然原理跟从excel里取数没什么本质区别。

现在，我想问“诺安成长这只基金怎么样？”

首先，先使用jieba分词，把这句话给拆了，变成“诺安成长”“这”“只”“基金”“怎么样”“？”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwA8kcL4vNOSlcQ1cTG3ia9hQ4LhxoedNpnqvTUYz6XF3CFSPr03OhtJBw/640?wx_fmt=png)

然后拿这些分词出来的字段去跟搜索我们的分词表。然后发现跟分词表匹配上了，就去我们的excel里搜“诺安成长”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAraqamnn57RTXibknD45ua20abiaBaGicg32vUaAVQevv4K3BuZqVGkpyg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAicXIajke92iaZACSRYIMTnhgPOrYPVLAfPHWZ0OaicIMRnhv4DXKpuzUw/640?wx_fmt=png)

搜到了诺安成长这个基金之后，把整行数据提取出来，加上我们的prompt和这行数据和
“诺安成长这只基金怎么样？”这个问题，一起送给GPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwA6HDTD6BMibadgnupyRtNQtrAoWM49CZDsNefuTajLRNS0dbO3kRiaPsw/640?wx_fmt=png)

这样，GPT就会根据我们这么长的一大段，用自然语义重新组装，给我们回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwA4Xn9ibsicHuhX88tVwX8XF37kZ2OWoaE8qMVMKRWzNxicQJicCHsOwnrQw/640?wx_fmt=png)

其实，懂一点技术的就能明白，为了解决token的问题，在外面包了一层搜索，先搜索，再嵌入。

现在很多的长文本的处理方式，也是如此。

比如我们常用的ChatDOC。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAqVC5vDic3lMYOJm6YvKrqwEEdibCQJpjoNdbcuiatzMSk8bS5cfw5VuFA/640?wx_fmt=png)

先做了一层语义搜索，然后用嵌入的方式去总结并做答。

而所谓的WebChatGPT，可访问互联网的ChatGPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwABwVI05BhAONEBlxordzO8rYodmDicibh6A35aFtfBgpcNY7RSawjvibFg/640?wx_fmt=png)

也是将网页里的HTML文字内容给扒下来，当作数据嵌入，让ChatGPT根据这扒下来的数据回答。实现假联网。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAMtImib8xRRVMCTcgapFIuV3GrHQt3ibxrvqVTh8oIiaz4bKzXvGNnAn1w/640?wx_fmt=png)

说了这么多，相信大家对如何使用自己的数据库有一定的了解了，一篇文章，肯定不可能手把手教大家会，抛砖引玉，可以自己再去研究一下。
知道该如何让ChatGPT根据自己的数据作答。

最后，因为4096token的限制，长文本处理一直是一个非常头疼的问题。

嵌入，能解决部分问题。

而长时记忆区，矢量数据库，我觉得才是解决的唯一真谛。

这也是OpenAI推荐的方式，
更是大火的AutoGPT真正
驱动
核
心
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrriaq3L0Fa2VhLaWVetJSwAynAawbicZBC5lvVFum5YjnbLQfWZ5IfB2Rfea8SntibY4bHNIiaicIhicmg/640?wx_fmt=png)

同时，也是我现在无法理解和触及的领域。

呵，记忆，真的是人类生命长河中，最深奥的殿堂。

以上。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
