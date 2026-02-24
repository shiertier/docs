---
title: "最强开源大模型Llama3深夜发布 - 世界不能没有Meta"
发布日期: 2024-04-19
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647662241&idx=1&sn=5c0ff611a9ac3310188754b15db9c72d&chksm=f11db93c70abea9d4601af2fcb9f8966d029f6663e45ea82fceef76b25c8ecce8085e020ee33"
---

## 摘要

**1) 一句话总结**
Meta正式发布了新一代开源大模型Llama 3，首批开源了8B和70B两个参数版本，其在多项基准测试和代码能力上表现优异，并在特定条件下开放免费商用。

**2) 关键要点**
*   **模型版本与授权**：本次开源了8B和70B两个版本；模型在月活跃用户不超过7亿的条件下基本允许完全免费商用。
*   **训练数据**：预训练使用了超过15T tokens的数据（是Llama 2的7倍），代码数据量是Llama 2的4倍，并包含覆盖30多种语言的5%以上非英语数据。
*   **跑分表现**：在MMLU、GPQA、HumanEval等评测中，8B模型性能超越同尺寸模型及Llama 2 70B；70B模型性能可对标Gemini Pro 1.5和Claude 3 Sonnet。
*   **人工评估**：Meta构建了包含1800个提示、涵盖12个用例的全新高质量评估集，Llama 3在盲测人工评估中表现强劲。
*   **代码能力**：实测显示代码能力显著提升，8B通用模型能够成功运行并解决复杂的LeetCode算法题。
*   **获取渠道**：模型已在官网和Hugging Face上架，用户也可通过Meta AI官网或Replicate平台直接体验，或下载进行本地部署与微调。
*   **后续计划**：Meta目前正在训练一个规模达400B参数的更大版本模型。

**3) 风险与不足**
*   **上下文限制**：模型的上下文窗口长度较短，仅支持8K。
*   **知识库滞后**：8B模型的知识库截止时间为2023年3月，70B模型截止时间为2023年12月。
*   **中文能力弱**：由于训练数据中缺乏中文数据，模型原生的中文表现不佳，需依赖开发者后续微调。
*   **商用规模限制**：月活跃用户超过7亿的商业应用不属于免费授权范围。

## 正文

其实昨天在微软的偷跑之后，就已经有消息说，Llama3要出了。

这个消息的振奋程度，对于AI圈来说，甚至不亚于所谓的GPT4.5。

毕竟，meta才是真正的那个"OpenAI"。

有多少大模型的生态，是建立在Llama上的，大家都懂。

而这个开源之光，被全世界无数人盯着的大模型，Llama3，在时隔近9个月之后的今晚。

终于正式发布了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986QgPKJv201uXAeRqzZwWOB8ZR2JdXGnTeHQjmrVts4aJXlfKauG7Omg/640?wx_fmt=png&from=appmsg)

我的几个朋友，都已经疯了，比如zR同学：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986nUIHlI3VFVWEaicmAVsRgBD1VbUwIOlfFutWDaUBS9uRlaV1b6847ow/640?wx_fmt=png&from=appmsg)

今夜无眠。

Llama3目前在自己的官网和
huggingface上，模型
已经上架：

https://llama.meta.com/llama3/

而且还是meta的老规矩，虽然写的是特定条件下商业使用（月活不得超越7亿），但是基本等于完全免费商用了。

这次开源了2个模型，8B和70B。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986mJ5JQicMnmycwNUChQoHcS5Bk9tehcerjrjsn5K3Zmoe1oJRNg3Jxbw/640?wx_fmt=png&from=appmsg)

然后就是大模型的传统艺能：跑分。

坦率的讲，他们这个跑分，有一点的离谱。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P9869ibDXJ5828fNyBnJhpX8OrrUibh2eRHBkx5ydIiaf5gJiaibE1RYbK532EQ/640?wx_fmt=png&from=appmsg)

5个评测集分别是
MMLU（学科知识理解）、GPQA（一般问题）、
HumanEval（代码能力）、GSM-8K（数学能力）、MATH（比较难得数学）

不管是8B还是70B，基本等于全线秒杀。

8B这边，直接把同尺寸的摁在地上打。

曾经的Mistral 7B也是有过辉煌的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986PQRLMwSRftIYyZCjc8ujbBtdC4icHmsf9jQoS18GpBrhglRMib6L5x9A/640?wx_fmt=png&from=appmsg)

现在也被干成了时代的眼泪。

甚至，Llama3自己的8B模型，效果都比Llama2的70B要好，这事就非常的特么离谱。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986aiagBXXiaakAJqowFTG7UarloQic5KubpGB4QLQ93lUFrdx5e98zl7jhg/640?wx_fmt=png&from=appmsg)

而Llama3 70B那边，直接对标Gemini Pro 1.5（Gemini：我到底做错了啥）和Claude3 Sonnet。
GPT-4逃过一截哈哈哈哈。

这个分数真的很恐怖了，毕竟参数量跟两玩意都不是一个量级的，Llama3只有70B，还能打的有来有回，虽然跟Claude3最牛逼的那个
Opus还有一些差距，但是这特么是开源的啊！

他们还做了一个有趣的测试，搞了一个全新的高质量评估集。

里面包含 1800 个提示，涵盖 12 个关键用例，分别是：

寻求建议、头脑风暴、分类、封闭式问答、编码、创意写作、提取、塑造角色/角色、开放式问答、推理、重写和总结。

最骚的是，为了防止过拟合，甚至Llama3自己的建模的团队事先都不知道这玩意。然后针对
Claude Sonnet、Mistral Medium 和 GPT-3.5，对这些类别和提示进行人工评估。

结果就是：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986OtnOokAzTUEJcFiaYkEVTWz0WsSeaGIjUr4icuE10vTx3H8T8D9oUsqw/640?wx_fmt=png&from=appmsg)

很强。

不过也有两个很der的点。

一个是知识库时间，一个是上下文长度。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986CstA9nggO0Tkic7mOIJVUyV5o0icc4gzLfQXiav1NM0yNE75CRP3RMFaA/640?wx_fmt=png&from=appmsg)

知识库这块，7B只到2023年3月，70B到了2023年12月。

上下文长度更是只有可怜的8K。

知识库的时间还好说，但是你这个上下文长度，在现在动不动200k的时代里，属实是有点不够看了。。

Llama3的
训练数据，用了
超过15T词库的预训练，是Llama 2的七倍。
包含的代码数量是Llama 2的四倍。
预训练数据集含5%以上的非英语数据，覆盖30多种语言。

而且，他们还有个400B的离谱玩意还在训练中。但是我觉得400B的这玩意大概率不会开源。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986VK9mFpCcUqk01VdyA0aCiamP9ZuoPO9wgIsQm1OXIcgULYN2JuibK1yA/640?wx_fmt=png&from=appmsg)

再对比一下目前的主流的最强模型：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrpDjbmeEribRdp8QuM5P986QCicmicyskd9m0ABHbHyweW55X1NL1ialkK7X7GgictDZdxS1g06rorUcw/640?wx_fmt=jpeg&from=appmsg)

就...离谱

直接跟Claude3 Opus和GPT4 Turbo差不多，爆杀了Gemini Pro 1.5。

嗯。。。。无话可说。。。

现在可以直接在的官网用：https://www.meta.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986b70N0cfcDo3MlicZA4Mpv1WYhOiciczibXlpAv9hQCsQgrOeXzkQgApiceQ/640?wx_fmt=png&from=appmsg)

如果你没Meta账号的话，也可以在这用：https://llama3.replicate.dev/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986EXTxteTgQO1I6UMYP3XKbKGPHzRI2xmjolTXQyyXh9Ru7B294NlhHA/640?wx_fmt=png&from=appmsg)

当然，我相信更多的人，还是会下载下来，本地部署+微调。

Llama3的中文还是不咋地，几乎就没啥数据，所以还是得靠大佬微调以后才能用，前提是必须遵守Llama 3社区许可证和可接受使用政策。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986tQ0EtW7QMY84rIFSKblib7ZKGWUvjFdkYibsr5m7Giakc7q5RrX1QDbrA/640?wx_fmt=png&from=appmsg)

而我们再跑了2小时后，我们发现很突出的一点是，代码能力太炸了。

zR跑了很多的case（都是英文）。

比如一个经典的皇后问题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986AVtTYYCvTJe7ZjAmicK5LNCFluqbuRAM0INuSGWFcobAvWqIdE6IQxQ/640?wx_fmt=png&from=appmsg)

Llama3-8B直接给出了解法：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P9866lvtiadYZiaZpnL643rBRc2J6ibmmaylb81ZSLPAibF8XAFZKFZrQwucaA/640?wx_fmt=png&from=appmsg)

然后，运行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986nEdvCcc7NgbpLa6qicOiaD9ViaevEFyFWwSDicHiaNU8C4YH8AwjRO1re3Q/640?wx_fmt=png&from=appmsg)

这特么在Llama2中，基本是不可能的，只有专门的代码模型，才能搞定。

要知道，Llama3-8B，只是一个8B的通用大模型啊。。。

然后，我们又上了一个贼难的一题。按zR的话说，这就是leetcode上，最难的一题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986ibPlB03pqdrSWPMREweibOibZegQANwfxhRKncq9Uhbf5J1UpfZkWmXhA/640?wx_fmt=png&from=appmsg)

题目是：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986eRKicAhXCYf4yHgFKI4xhbl4CSuUZxgm361MCDWrXPRMJ9cxqgicTFPQ/640?wx_fmt=png&from=appmsg)

然后跑了一次，报错了，给了报错和答案错误，对话三次后：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986ibZEuL5d3elZDicuSgaJdJ0fcibsbicpO5swUtRwt7ajE2HRkUUf8jZq8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986ZlUoib66RqY7WpibJB74QYrLws9HHM6Iiaq7l6Ptrmyjp22PvTosxdSEA/640?wx_fmt=png&from=appmsg)

。。。

他自闭了。

GPT4同样出错，享受跟
Llama3-8B的同等待遇，还是
没干出来。

但是Llama3-8B，干出来了。。。

太抽象了。。。

总结来说，Llama3这次，绝对是王炸级别的模型。

也可以当之无愧的说，就是最强的开源模型。

Meta再次证明了，自己才是那个"OpenAI"，而那个OpenAI，只是个"CloseAI"。

世界不能没有Meta。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrpDjbmeEribRdp8QuM5P986yLq9s3Y76cYkoWhhrK4sl0TxgsZJibFuHvvWQ7c0U8HBE6H1UloYt0w/640?wx_fmt=png&from=appmsg)

还有个小插曲是，今天还是
吴恩达的生日。

所以话说回来，OpenAI你的GPT5还在等啥呢？

快狙击啊。别怂。

赶紧的。

我们等你。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
