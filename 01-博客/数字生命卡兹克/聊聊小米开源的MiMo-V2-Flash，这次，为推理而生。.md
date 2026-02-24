---
title: "聊聊小米开源的MiMo-V2-Flash，这次，为推理而生。"
发布日期: 2025-12-20
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678105&idx=1&sn=61d523781d36199259525d0cc66668b1&chksm=f1169eced58b91846e9a199c98c3cb66052f05663933a348da4ac2c84330c9c1700a3e734a53"
---

## 摘要

**1) 一句话总结**
小米开源了总参数量为309B的MoE大模型MiMo-V2-Flash，该模型以极速推理和超低成本为核心，通过混合注意力和多词预测技术大幅提升了长文本处理与生成效率，旨在为未来的端侧硬件和智能生态提供底层算力支持。

**2) 核心要点**
*   **模型架构**：采用MoE（混合专家）架构，总参数量为309B，激活参数量为15B。
*   **超低成本**：API定价极低，每百万输入token为0.1美元，每百万输出token为0.3美元；推理成本约为Gemini 2.5 Pro的二十分之一。
*   **极速推理**：推理速度约为DeepSeek-V3.2的3倍；单条回复速度可达150 token/s，全局吞吐量达到5000至15000 token/s。
*   **长文本优化（Hybrid Attention）**：采用全局注意力（GA）与滑动窗口注意力（SWA）1:5的混合方案，使长上下文的KV cache和注意力计算开销下降近6倍。
*   **注意力沉底（Attention Sink Bias）**：引入该机制让模型选择性忽略噪音信息，在降低算力负担的同时维持甚至提升了模型性能。
*   **多词预测加速（MTP）**：在预训练和微调阶段原生融入多词预测机制，推理时开启三层MTP并行作为“草稿模型”进行推测解码（Speculative Decoding），实现2到2.6倍的生成加速。
*   **实测能力**：具备优秀的代码直出能力（可生成3D体素场景、SVG动画、手势交互网页等），在开源模型榜单（如OpenRouter、Artificial Analysis）中处于第一梯队。
*   **战略定位**：工程优化目标明确，致力于降低延迟与成本，为未来将模型塞入手机、车机、路由器等智能硬件（万物Agent）做准备。

**3) 风险与不足**
*   **绝对能力上限**：综合能力与闭源头部模型（如Gemini 3.0 Pro）相比仍有差距。
*   **代码审美局限**：在前端代码生成方面，其视觉审美水平距离最头部的模型还有一定差距。
*   **文本生成通病**：中文写作直出时，仍存在部分中文大模型常见的“词藻堆砌、内容偏空洞”的问题（尽管已优于部分同类模型）。

## 正文

周末加更一篇，我还是觉得，小米前两天开源的那个模型，值得单独来聊一聊。

当天晚上其实就打算写了，结果被OpenAI截胡了，这一拖，就拖到了今天。

就是前两天深夜，小米搞了一个大的。

没有任何预兆的，直接开源了一个大模型，
MiMo-V2-Flash。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgDtWzOsbFt1gyUMT8IUTbgZ99CZpJ2tcicsbt9VOia9uj9BooPynjgD6g/640?wx_fmt=png&from=appmsg)

说实话，十年米粉看到以后，还是有点激动的。

小米，作为硬件厂商的代表，终于出手了。

成绩也不错，在O
penRouter上的调用量排名上，一路上涨。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrKVcmNHiavw8wiciamNXEPPOhlGhY7y6xQ6Lib1wiaXDS5Ym5So7pRJgkje8pfIx1iaf4PiavJAbUeUk2tA/640?wx_fmt=png&from=appmsg)

今天看，又涨了将近2倍，已经来到了第六了，这个涨幅还是挺恐怖的。

而且还有一个非常有意思的是，那天，也是雷总的生日。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgNf5ibMxgZJ8aiakhCm4llEmHjboib5wZTWFnicLc2WlqD7JZh1GrhQl9nw/640?wx_fmt=png&from=appmsg)

这绝对不是巧合（狗头保命）。

这次，
MiMo-V2-Flash
发布即开源，还附带了技术报告。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgZb4gib5ZSrIkSdiaybUdWM4oyUkZeAW6yr48UFfzW9VpOryGib4zLqiajw/640?wx_fmt=png&from=appmsg)

说真的，这个技术报告，真的究极详细了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg8kQiar3WLtfgrF30xPDFLxkGibyicyiauEkicQzNIFrwPhm4fRTQEicib2GWA/640?wx_fmt=png&from=appmsg)

就很多有趣的经验值得分享。

然后，还做了一个线上对话产品，也是为了方便大家进行快速便捷的体验。

网址在此：
https://aistudio.xiaomimimo.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgU3D5FTtgHOgbJntFNyQWE0MlicaNBRIwFTPAWtunJicmWKxn2flQEkWg/640?wx_fmt=png&from=appmsg)

我这两天，零零散散的花了一些时间，读完了技术报告，又体验了一下模型之后，我觉得，这个模型还是有一点意思的。

就如同他们自己在Blog上所说的那样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgXnPe7M1kiblJH7zkGtrGqoyJaBaGibhiaXxdoiaR5laGmaRCqxuMHDrCmA/640?wx_fmt=png&from=appmsg)

Blazing speed meets frontier performance。

极速性能，前沿体验。

老规矩，先看跑分。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgh40orkfz8wDu463SPYQPiaMdf0Az4SuuIAPN06LnicFbSYB8sKicicNfIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgAHpibMicDQIiaQSaFTWafScT9MibaDGW62tibWAVAVmJPDKJX15RxicP9sBg/640?wx_fmt=png&from=appmsg)

差不多在开源世界里，属于第一梯队水平，跟Kimi-K2 Thinking和DeepSeek-V3.2互有胜负。

跟闭源模型，也能掰掰手腕，但是坦诚的讲，Gemini 3.0 Pro还是太强了。。。

在Artificial Analysis上，综合排名也是开源第二。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrKVcmNHiavw8wiciamNXEPPOhP7nGURyk6X1XhnQicGfWWqOBEiccbDw5ZsYGiaZz9b1ia8lqLPfF2ynkYw/640?wx_fmt=png&from=appmsg)

不过这些跑分，我觉得现在大家看看就就行了，真正在技术报告里有比较有意思的创新的点，还是在于他们生为一个硬件为核心的公司，所一直追求的。

能跑多快，能跑多省。

小米，为发烧而生。

MiMo，为Reasoning而生。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgCUBNibwQ6PRicTPTib5dBGkjdy3ByAnfWOiasK5gmFl9aXVsslP9ibatJXA/640?wx_fmt=png&from=appmsg)

在MiMo的世界里，最核心的，是速度、成本、是延迟。

是能不能把它塞进手机、塞进汽车、塞进一个能面向于普通消费者的未来里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdyKgzKF0NOUictNIsVUdvK88LambWVUQf7BCx1C8tT3hAdJ7KomMJ1DEA/640?wx_fmt=png&from=appmsg)

这次
MiMo-V2-Flash是个MoE模型，总参数309B，激活参数量15B。

基本上，跟DeepSeek-V3.2相比，MiMo-V2-Flash的推理成本略低，而推理速度大约是 V3.2 的三倍左右。

跟Gemini 2.5 Pro相比的话，MiMo-V2-Flash的推理速度接近，但推理成本大约低了20倍。

在价格上，达到了非常离谱的数据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdy9TrdfpDjsJkO8TqS1NXYlMEj5w3ibjGYLRfL6STwwFu0naX02nusMBA/640?wx_fmt=png&from=appmsg)

每百万输入token为0.1美元，每百万输出token为0.3美元。

这个数据有多离谱，我觉得还是需要放一下一些其他大模型价格对比。

GPT-5.2：$1.75/输入，$14/输出。

Gemini 3 Pro（<200k上下文）：$2/输入，$12/输出。

Gemini 3 Flash：$0.50/输入，$3/输出。

Kimi K2 Thinking：$0.60
/输入
，$2.50
/输出
。

DeepSeek-V3.2（思考模式）：$0.28
/输出入，$0.43/输出。

相信大家现在就知道，
MiMo-V2-Flash的价格和性能对比，还有他的推理速度，有多离谱了，可能会是常规开发普惠的又一利器。

而整个模型里面，我觉得最棒的点，其实有两个，一个叫长文本，一个叫吐字速度。

一个一个说。

先说长文本。

过去所有大模型做长文本，都会遇到一个非常朴素的问题，就是你让它看的东西越长，它脑子里要记的上下文缓存（KV cache）就越大，算注意力的时候就越废。

就比如说考试写作文。

最传统的大模型写作文，大概是这样的流程，就是每写一个字，都要从头到尾把自己刚写的所有内容，重新读一遍想一遍，然后才敢写下一个字。

写到第1000个字时，你可以理解成，它已经把前面999个字复习了999遍。

是不是听着就很酸爽，如果想象不到有多痛苦的，大家现在可以自己试一试。。。

这其实就是所谓的全局注意力，就是你每添一个词，大模型脑子里都要把前文全刷一遍，它很怕漏掉什么细节。

理论上，这样最稳妥、最严谨，但有一个致命问题，就是太费劲，太慢了。

就好像你在写古诗，一边写一边从第一页开始把整本《唐诗三百首》背一遍，确认自己没有撞韵，再写下一个字。

非要用一个词来描述这种行为，那我觉得，就是，自虐。

后来大家觉得不能这么算下去啊，要不然到时候就算你显卡堆成一座山，速度也快不起来，更别提长文本了。

所以就有一大堆加速方法被发明出来了，什么注意力结构、稀疏连接、特化硬件啥的都出现了。

小米的搞得这个Hybrid Attention，本质上就干了一件特别朴素的事，承认一个现实，也就是人类看东西，不是每一秒都在看全局。

其实你读小说的时候，其实也是局部认真，全局大概知道个意思。

你的眼睛，肯定主要盯着眼前这一两页，这是滑动窗口。

偶尔翻回前面看看人物关系图、章节标题，这是全局注意。

MiMo-V2-Flash把这个节奏，直接写进了模型结构里。

它的大部分时间，只看最近的 128 个 token，就像你只记得眼前这一段对话，每隔一段，就抬头看一下全局，防止走偏。

这就是
MiMo-V2-Flash
采用的全局注意力（GA）与滑动窗口注意力（SWA）1:5 的混合方案，长上下文下KV cache和注意力计算，能有接近6倍下降。。。

然后最有意思的事，他们还加了一个东西，叫“attention sink bias”。

你大概就可以理解成，让模型可以把有些东西选择性的不看，让注意力沉底，不被各种噪音干扰。

人类其实也一样，你坐在洗脚城大厅，旁边有人吵架、有人刷短视频、有人喊服务员，你不可能每句话都听进去。你真正能活下去的能力，是你能把这些噪音当成背景音，眼神空焦一下，注意力直接沉下去，只抓你要的那点信息。

MiMo做的，就是把这种我选择性忽略的能力工程化了。

更有意思的是，他们也做了实验，没有这个sink bias，性能会掉，加上以后不仅回来了，甚至能跟全局注意力打平甚至更好。

所谓
MiMo-V2-Flash为了解决成本问题，其实做了不少有趣的事情，而且虽然看着很多技术名词，但是本质上，非常的生活化。

就是，承认记得太多也是负担，学会在正确的地方选择性忘记，把算力留给真正重要的部分。

长文本搞定之后，然后是第二个：吐字速度。

很多人以为大模型慢，是因为它不够强。

其实更真实的原因是，就是大模型生成文字这件事，本质上非常流水线，一口一口吐，吐一个才知道下一个。

就像你让一个师傅现场写春联，他写完上联最后一个字，才知道下联第一个字怎么对，那速度怎么可能快的起来，还写个屁。

所以，MiMo-V2-Flash也用了一个有趣的东西，叫Multi-Token Prediction（MTP，多词预测）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdydoNakUTQHANFZkAEuvkrEqf9mibq4Qtxn7iaxAV57gPhAFFOqzNOYCkw/640?wx_fmt=png&from=appmsg)

这玩意别被名字吓到，其实也特别生活化。

本质上就是，你别一个字一个字写，你先打个草稿，一次性多写几个字，然后再快速检查一遍，没问题就直接用，有问题就退回重写。

论文里会说得更技术一点，MTP可以作为“draft model”用于speculative decoding（推测解码），也就是先草稿、后验收的机制。

而且不是当一个工程上的外挂搞得，最开始的预训练阶段，这玩意就直接塞了进去，让模型学的一直就是先草稿、再检查这套节奏。

在微调阶段，又加了更多层MTP，把这种多字并行的本事练得更熟了。

等到真正上线推理的时候，它直接开三层 MTP 并行，就相当于你手下有三组实习生轮班打草稿，主模型坐在中间挑挑拣拣，最后形成一条流畅的回答。

结果就是你前面看到的那个很夸张的数字。

在实际场景里，三层MTP可以做到2到2.6倍的加速，单条回复能跑到150 token/s，全局吞吐可以拉到5000到15000 token/s。

我录了一个回答，无加速，大家可以看看，20秒4000字，真的已经非常快了。

所以，其实通过上面这些有趣的东西，你就能看出来。

这个模型的特点了。

和DeepSeek-V3.2能力相近，但速度大概快三倍。

和Gemini 2.5 Pro能力接近，速度差不多，但成本低了近二十倍。

也就是，同样干一份工，我能用更少的钱、更少的电、跑得更快、更稳。

真的，对于一个硬件公司来说，这几乎是刻在DNA里的执念。

手机时代，小米喜欢在发布会上讲同价位性能最强。

到大模型时代，它只是把同一套工程价值观，搬到了另一个战场。

我也大概测了一下模型的能力。

在代码这块，还挺有意思。

比如我之前测Gemini 3 Pro的时候，有一个体素3D世界的Prompt：

设计并创建一个非常有创意、精致且细节丰富的像素3D场景：一只胖乎乎的奶龙坐在一座美丽的花园中央，旁边是小池塘、石灯笼和弯曲的小路，周围长满树木，其中包括几棵盛开的樱花树。让整个场景足够震撼、层次丰富，在不同高度和区域布置各种小细节，比如长椅、小桥、石子路、草丛、花坛等，并使用色彩丰富的体素来表现。可以使用任何库来完成这个效果，但要确保我能把所有内容粘贴到一个单独的 HTML 文件中，并直接在 Chrome 中打开。JavaScript 库的引入方式请使用 importmap 和 ES 模块（ESM）导入。

而这次我扔到
MiMo-V2-Flash里，也一次性直出了。

各种交互啥的也都没啥问题。

而且功能也都给你做全了，樱花特效都能关，也能自动旋转，最细节的事，奶龙脖子那里，还有一个会一闪一闪发光的小立方体，还挺精致的。

还有一个测模型svg能力的时候，一个Prompt：

做一个长滚动网页，用 5 层以上视差背景和 SVG 插画讲一个小故事，滚动时触发渐进式动画和文字渐显。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrKVcmNHiavw8wiciamNXEPPOhh9hyrIVCptRSDXLIBT2uhH8licQelzGL5nRlelpfD1moKp44HMcVgqA/640?wx_fmt=png&from=appmsg)

这块完成的也不错。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrKVcmNHiavw8wiciamNXEPPOhKH5CuhbniaicOmiaJ8YdicwDQW8lwrlp0mHaoXnMyAj0iahpNcEfp5MTCMA/640?wx_fmt=gif&from=appmsg)

每个小动画，属实是都到位了。

比如前几天，Gemini流星雨，我就想，让Mimo给我做一个可以手势控制的流星网页。

对，就这么一个超级简单的Prompt。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdyWDASyIoygppmsol0Qgx5ZuMOcnzaIwdicYFdFRHGel9JBn1Yf9xlNUQ/640?wx_fmt=png&from=appmsg)

MiMo-V2-Flash一次成型。

像左挥手就是蓝色流星，像右挥手，就是红色流星。

然后我又基于这个，改了一个识别手势，刮彩票的。

这次出了小小的BUG，不过对话两次，也改成功了。

就非常的有意思，很好玩。

然后又一句话做了一个像素画板。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdysCibwhBIsViaBMibiag53lm0S7yZhXhqzvAoFDBv1mJgn55AjNM70mwbzA/640?wx_fmt=png&from=appmsg)

也成功了。

整体看下来，代码能力不差，不过坦诚的讲，前端审美离最头部的模型，还有一些差距。

在写作上，直出效果还行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdyyh37n2zQfYRicLa7hJhe48mo5ZHknjkuU5sX0gNxWBIsNJFKvztQoeg/640?wx_fmt=png&from=appmsg)

但是还是会有中文大模型的堆砌词藻空洞的问题，很多句子看着很华丽，但是其实比较的空，不包含任何信息量。

但是已经比一些中文大模型好一些了。

而在文风复刻任务上，其实也差不多。

这是我用我的文风复刻的我自己的文章。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpwK7FC1L1Hc6oTZrBxnBdyFiaFNa5xJSUpVOBCPiagn9qeSgvxIAUyaB3V3QXypMceDPYBTjtXKWow/640?wx_fmt=png&from=appmsg)

有些句子写的不错，而且那些经常被恶心的不是...而是...句式基本没用过，在很多时候，调一调还是可以的用的。

从更长远一点看，小米做这件事的意义，我觉得还是会往硬件去。

当未来，真的万物皆Agent的时候。

在手机、在车机、在路由器、在眼镜上、在所有的智能家居里，那颗小小的模型，能不能跑得快、跑得稳、跑得起。

这个是最重要的。

这也是，一家硬件公司最熟悉的战场。

在这个战场里，小米过去十几年已经证明过自己一次了，我到现在还记得我买小米1的兴奋。

作为一个十年米粉，我真的也很想自私地说一句。

如果哪天我跑Agent、搭小网页、操控我家里的所有家具，用的那颗本地小模型，背后跑的就是 MiMo，那会是一件挺让人开心的事。

开源是一种表态。

工程是一种信仰。

看好小米。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
