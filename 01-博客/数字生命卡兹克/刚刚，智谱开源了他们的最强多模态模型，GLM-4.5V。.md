---
title: "刚刚，智谱开源了他们的最强多模态模型，GLM-4.5V。"
发布日期: 2025-08-11
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647674025&idx=1&sn=11ea5be6d400d9cb2fb3aafcfddec99b&chksm=f12a2fecc382cf4eefb5f37d72ef323a213f33b4c05798f112acc156b2ae62e8185ff814f06c"
---

## 摘要

**1) 一句话总结**
智谱正式开源了拥有106B参数的视觉多模态大模型GLM-4.5V，该模型在41个评测基准中取得SOTA，并展现出强大的视觉推理、原生视频理解与网页复刻能力。

**2) 核心要点**
* **模型架构与规模**：采用GLM-4.1V-Thinking技术路线对GLM-4.5-Air进行重新训练，总参数量为106B，激活参数为12B。
* **评测表现**：在针对开源多模态模型的42个评测基准中，GLM-4.5V取得了41个SOTA（最高水平）。
* **开源与访问**：模型权重已在GitHub和Hugging Face多平台开源；普通用户可通过智谱z.ai网站直接使用。
* **API定价**：API调用成本较低，输入为2元/M tokens，输出为6元/M tokens。
* **视觉推理能力**：能够快速准确处理复杂视觉任务，如游标卡尺读数、复杂图像细节分辨，以及高相似度地理位置（如横店明清宫苑与故宫外观）的逻辑推理与识别。
* **原生视频理解**：具备原生视频时空理解能力，能够理解画面逻辑与故事脉络，并准确提取关键画面及对应的时间戳。
* **视觉定位（Bounding Box）**：支持根据文本指令在图像中精准框选特定人物或物体。
* **网页复刻（看图写代码）**：能够根据网页截图直接生成框架和结构高度还原的网页代码。

**3) 风险与不足（基于原文提取）**
* **部署门槛高**：模型达到106B量级，消费级硬件难以进行本地部署。
* **高仿真细节识别仍有局限**：在面对极高相似度的场景（如横店1:1复刻的宫殿内景）时，模型仍会出现判断错误。
* **视频处理限制**：原生视频理解功能目前仅支持200MB以内的视频文件，且格式必须为MP4（不支持MOV等其他格式）。

## 正文

上上周一的晚上，智谱开源了当今最好的模型之一，GLM-4.5。

然后，这个周一，又是突如其来的，开源了他们现在最好的多模态模型：

GLM-4.5v。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PHP36jzk9jBS9JIjLWlnOclib3ILXJoqen9WgUc4DSQyeaVncsHae5xA/640?wx_fmt=png&from=appmsg)

也是4.5系列的，用GLM-4.1V-Thinking的技术路线把GLM-4.5-Air重新训练了一遍，实现了视觉多模态的能力。

模型参数106B总参数，12B激活，这个规模在开源多模态模型里已经算是大块头了。

模型能力也有点东西，在所有的开源多模态模型中，42个评测基准，41个SOTA了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9P71exHIfa30ZpYXZ2kqTgxnxJkbqw1Yib3G7CBicJDAuEvS2MuaGMDia7A/640?wx_fmt=png&from=appmsg)

我说实话，这个看着，还是有点吓人的，我已经很久没看到这么全的评测基准列表了。。。

说明GLM-4.5v，这波是真的自信。

模型已经在多平台开源了，可以任选一个下载。

Github：https://github.com/zai-org/GLM-V

Hugging Face：https://huggingface.co/collections/zai-org/glm-45v-68999032ddf8ecf7dcdbc102

不过106B的量级，消费级还是难部署，如果想用的话，可以去智谱他们的z.ai上用。

嗯，网址就是z.ai。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9P60GDdVORwfVMdwvL25LLZl27Nbr7VeX3FzNWtZl5z5KtGAdhNJjEjQ/640?wx_fmt=png&from=appmsg)

我也第一时间去做了一下测试。

这里先测的，是用的是专门做评测的朋友拓界AI给的多模态测试题。

比如第一道是游标卡尺的读数，这玩意读起来还是挺费劲的，整数小数要分开读，得非常仔细才行。

反正我是看的一脸懵逼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PUF5l1ia3mLib4bIjvxR5lb9wQAZjkCPREmSWibkAB3ZGT9sdEUl22tTQA/640?wx_fmt=png&from=appmsg)

而GLM-4.5V，花了一小会，就写出正确答案了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PbIw8I4xeibvhJjcsHxsGiaTbYRZ4UTOD8Fv1yVEFlXMSSIyFhPicQA5qQ/640?wx_fmt=png&from=appmsg)

思考过程并不是非常的冗长复杂，很简洁，所以很快就出来了，这个非常的好评。

然后是第二题，小猫摸球问题，我是已经看花眼了，看这玩意看的我眼睛疼，真的。

问题就是：到底哪个猫摸到了毛线球。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PkdL3lo2TbgZq5iaPOWD3IbT7Mhxjibnh1icEoQ8c3IjHNz2nW5ibibsX0Hg/640?wx_fmt=png&from=appmsg)

GLM-4.5V也找到正确的答案，还给了正经的操作方法。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PzysdM8weHRdnYmRFVa9N5PmjACMx50blVLKpibH22PSnX3bAWSoWgibw/640?wx_fmt=png&from=appmsg)

我眼花着验证了两次，确实是AI没毛病。

在视觉推理能力上，GLM-4.5v确实有点东西，而且速度快的离谱。

我又试了一个经典的，识别地理位置的case。

就是横店明清宫苑的图片，想看看它能不能正确的分辨出来。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PtVtfcVuzAjFqGCWnRADIOj0xicpeOI8LhPibFsN33jribRSZDc7IPlWsQ/640?wx_fmt=jpeg)

这个测试其实挺有难度的，因为横店的明清宫苑是按照故宫1:1复制的，连细节都做得很到位。

如果模型只是简单地识别建筑风格，很容易就会判断错误。

GPT-5-Thinking在深度思考以后，就来了一个非常抽象的答案。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PfR6Pj40okhbD2KZibq1uUJfj6ZHYTVKHeS93TbQ6icrgSR0EzxqgaXeg/640?wx_fmt=png&from=appmsg)

华清宫什么鬼？

而GLM-4.5V答得很正确，指出了这里是横店的明清宫苑。

这个回答挺让我惊艳的，而是因为它能在如此相似的场景中做出准确判断。这说明模型不是简单的模式匹配，而是真的具备了一定的视觉推理能力。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PTmiag2SBLW0ZwX5v4gz7bIk8rhwO4dmteNuJ0p6L0W5wPxU8a5J1muA/640?wx_fmt=png&from=appmsg)

但我有点没看懂它是怎么分析出来的，于是我又问了一下它，为什么是横店不是故宫。

这回它给出了详细的解答，分了三个点，讲的相当有理有据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9P1P1Hw9Xh1aM6qQV0EyibYoN9okM9e9ZunffiaNwHt1MQ49Xu7sJEX9JA/640?wx_fmt=png&from=appmsg)

牛逼。

那再试试内景，我找了一个宫殿内景的图片，问他这是哪里。

这轮没有正确回答出来，我还追问了一下，它还是肯定的说是故宫。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PBqroicbXsDbiauSksCsZ1FrpwQvXQN1l1LzcQ6PCxQv2Ic8bdU6L4KLQ/640?wx_fmt=png&from=appmsg)

说实话，连我自己看这个内景图都有点拿不准，毕竟横店的复制度确实很高，内景的装饰、色彩、布局都做得很像。

看看GPT-5-Thinking，错了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PNalBQBJvemXJ6PuusM4EcIuTib8Ty6BMrQuicZbtN55gOk7hrtYh672Q/640?wx_fmt=png&from=appmsg)

这个题，连我心中最强的视觉推理模型o3都错了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PmuJso2N14mEGT3Os25PHw88Ck4tveeC8wDn4sH4yDElxFTk3pZcb9w/640?wx_fmt=png&from=appmsg)

横店搓的太像了，真的匠人精神，实在没招。。。

模型在这种情况下出错，也是情有可原。

还有一个我觉得很酷的功能。

目前只有Gemini有的，原生的视频理解。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PeL2Jq5fflwnia0dfrDUcPAf92lpFtAE0k7IC3wfIHAlIy2BzYMIUXYw/640?wx_fmt=png&from=appmsg)

这里我说一下，很多产品说自己有视频理解能力，或者总结视频，其实不是的。

他们更多的是吧视频里的音频提取出来，找到人说话的部分，然后STT音频转文字变成文字稿，最后再找个大模型总结，不是原生的靠模型能力的视频理解。

我发给它一个我下载下来的二十世纪影业官方的25周年《泰坦尼克号》的混剪，让GLM-4.5V看看里面包含了哪些经典画面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9Pxibzoib4hvuk9iaqHyZGICqkPDzW7IdhnmkWqFRUHzC5F0VqIYsoH7qRQ/640?wx_fmt=png&from=appmsg)

要知道，视频理解一直是多模态模型的难点。

模型需要理解时间序列、画面转换、场景连贯性等等，这对模型能力和算力的要求是几何级增长的。

GLM-4.5V非常有意思，也确实是让我我比较惊喜的，它思考了一会，给了我一个很全面的回答。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PGedbUczy4eJd0CPs8fG5eYxAMTBQndrr5xZO7dxO8h8Z9JnER5pJtw/640?wx_fmt=other&from=appmsg)

我特地回到视频，看了下对应的时间点。

所有的时间点都一一对应，完全没毛病。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PCXyVtfNnxXcRSLM90mQje17RpFUiaZviame9x9guuu0ETSRWG9x9bweQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9P9Jib31I360t8wJlaclHg7tAb07I6iaMdOIYeYhGc4rhbaKxKG0oeQ6cA/640?wx_fmt=png&from=appmsg)

展开它的思考过程，我发现它是真的能理解画面之间的逻辑关系和故事脉络。

GLM-4.5V不是简单地逐帧识别，而是把这些场景串联成一个完整的叙事序列。

从船头的浪漫时刻，到灾难降临后的生离死别，再到最后的救援场面。

不仅识别出了视频中的关键画面，还能准确标注时间点。
这种时空理解能力，在开源模型里确实难得一见。
当然，视频理解也有限制。我试了一下，它只能处理200M以内的视频，再大就不行了。不过对于大多数应用场景来说，这个限制还算合理。
同时，注意是MP4格式，不要传成MOV啥的了。
我还试了下视觉定位功能，它能根据指令在图片里做标记。
我扔了一张流浪地球3的开机大合照，让他帮忙框选出郭导。
圈的很正确。
找出烧烤签子也是不在话下，标记的很精准。
甚至还有一个超级骚的。
圈出他最擅长的运动。。。
果然是篮球。。。
GLM-4.5V实在是太懂了。
除了视觉定位，还有一个很有意思的功能。
网页复刻。
我直接扔给它一个网页截图，让它给我复刻出来。
结果真的震撼到我了，你看这个效果。
框架、结构几乎一样，除了一些设计的样式有一些区别。
不过，讲个大实话，我觉得比智谱自己的官网都好看= =
这种看图写代码的能力，以前基本上就是Gemini、Claude这些顶级闭源模型的专利。
现在开源模型也能做到这种水平，真的是一个巨大的进步。
而且，模型完全开源，你可以直接下载权重，部署在自己的服务器上。
GLM-4.5V的API定价也相当良心。
输入只要2 元/M tokens，输出6 元/M tokens，这个价格在多模态模型里算是相当便宜了。
最后，总结一下。
曾经的国产之光，智谱好像回来了。
连续两个开源GLM-4.5和GLM-4.5V，效果都非常的强。
忽然想起上周OpenAI开源的oss，还有GPT-5这一系列的骚操作。
他们好像是那种守着一座巨大城堡的国王。
偶尔会大发慈悲，从城堡里扔出一些金币，希望平民们就得感恩戴德地冲上去疯抢。
而国内的这些大模型厂商，更像一个热衷于基建的狂人，他根本不屑于守着城堡，他每天都在我们家门口修路、建桥、盖发电站，然后把钥匙直接塞到我们手上，说：
随便用，兄弟，不够再跟我说。
所以，当我这两次，都说智谱牛逼的时候。
我相比表达加赞美的，不仅仅是它在41个基准测试中取得的SOTA。
我赞美的，是这种持续不断的、近乎于偏执的开放精神。
海外Close AI，国内天天Open AI。
AI的未来，不应该只掌握在少数几个巨头的服务器里，从GPT-4o的下线引发的风波，就能看出影响。
它更应该，也必须，绽放在我们每一个人的硬盘上。
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9P9ZvTPgFLMh2wdy9URobEdwca0GY91un7OQxwxNicvyML6VN8icpC5sbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PALkCJJ9h6FKibrjxejViadiavTOZXHkgvO8NvWtVk9L6hhjNdhW4tUsKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PpFicA29BQnByLgrvw0MSvrjibZFUQxBibI5XFZzibTCoycG7VLSs1w9wFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PBQQtLR2kTtsyia7UcbZBQDAtEg2A86NMuWMruUAmMV74c2amETiajkMQ/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PuwXTYibKHaPz43clA0LJfHmrjVgMWW65Iby3gSexOp2iaoEpW9WrIbEg/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PmmvbkwPhvdFPribc2pJDn3QctVANTy9bCGGwicPicJrtuEztFLA4EPl1g/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PjFuaibhPw7kibzktdBTR9r6P4HWk7KDiceyOqx7QqiaS9cQWdeVp6SNpxg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PXDRU0dGHmNwCptXPoScNSApZLv6shb3cj5YDLrE2vDwOvV62LpTOjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PZsG9CWEIwyE7V9dpomoqTu3Bz2RfgFmfLibUYMsUyvOfcoTgh7jQyhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PibyhbdlX7HD3jEQagVEngY8uVLH9z3qibmeYCeCPcc1Z7uGWhaKOO9Lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq8EAjAA2As6Se9PBjMcz9PS50uibP8ggYkT6AxMCs0u5XN3SeJL9YqlkKoicBaeMQZ4TLlxpMN43VQ/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
