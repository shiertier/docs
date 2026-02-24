---
title: "OpenAI发布ChatGPT世代首个开源模型gpt-oss，4060Ti都能跑得动。"
发布日期: 2025-08-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647673794&idx=1&sn=e56a534658b7525af76e5cbc5da84025&chksm=f1d291edc563e0583538388dce862e647390f296b5eb51a6caafd202cc6747017dc541f360d7"
---

## 摘要

**1) 一句话总结**
OpenAI正式发布ChatGPT世代首个开源纯文本推理模型gpt-oss（含120B和20B版本），采用Apache 2.0许可并原生支持MXFP4量化，大幅降低了本地部署的硬件门槛。

**2) 核心要点**
*   **模型规格**：开源了120B（总参数117B，激活参数5.1B）和20B（总参数20.9B，激活参数3.6B）两款MoE架构的纯文本推理模型，上下文窗口均为128K。
*   **开源许可**：采用最宽松的Apache 2.0许可，允许自由使用。
*   **原生量化技术**：在训练后期直接采用MXFP4格式进行4-bit量化（模型出厂即适应低精度），相比传统的后期压缩，在大幅缩小权重体积的同时极大地减少了性能损失。
*   **硬件门槛极低**：20B模型最终大小约12.8GB，最低仅需16GB显存（如RTX 4060Ti或5080）即可本地流畅运行；120B模型可在单张80GB显存的显卡上运行。
*   **跑分表现**：在同尺寸模型中跑分傲视群雄；在Codeforces竞技编程测试中，120B和20B分别获得2622分和2516分（优于DeepSeek R1，逊于o3和o4-mini）。
*   **推理速度与能力**：本地部署推理速度极快，且在同尺寸模型中具备优秀的逻辑推理、数学计算和文本写作能力。
*   **使用渠道**：目前可通过官方网站（gpt-oss.com）、OpenRouter平台在线调用，或通过Ollama下载模型进行本地部署。

**3) 风险与不足**
*   **幻觉问题明显**：实测发现模型存在较高的幻觉（如在《三体》小说细节和NASA登月历史等知识问答中生成错误信息）。
*   **特定代码生成能力较弱**：在代码审美和复杂游戏生成（如像素弹球）实测中表现不佳，120B生成的游戏视觉效果差，20B生成的游戏无法运行。
*   **官方服务不稳定**：OpenAI提供的官方在线试用网站（gpt-oss.com）目前存在严重卡顿、经常无法响应的问题。

## 正文

8月6号，真的今夕是何年了。

一晚上，三个我觉得都蛮大的货。

先是晚上10点，Google发了一个世界模型（但期货），Genie 3。

这个非常的强，我看的热血沸腾，我这两天也会单独写一篇文章，来聊聊这个玩意，真的，作为一个这么多年的游戏和VR玩家，看到Genie 3非常的激动。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFZmdEyAObtuV1qjdEWOoAQEU03I3hr8Nu7BHPbhqjBlxgpwibzshpHRw/640?wx_fmt=png&from=appmsg)

然后就是12点半，Anthropic突然就发布了Claude Opus 4.1，在编程能力上继续进化。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFu4gp1yGaxbTzcFDa6uz2vfnbTcrppicUjlczaoODhlVJVuVcJWoM7sw/640?wx_fmt=png&from=appmsg)

这节奏，感觉就是来狙击OpenAI的。

然后，重头戏来了。

凌晨1点，OpenAI在GPT-2后，在整个ChatGPT世代，官宣发布了他们的第一个开源模型，GPT-oss。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFEmahgcAf2mXl3keIGKmg9bYB4ssRmYnmuNqgJ4s6ibcnUUB5TLNXXkw/640?wx_fmt=png&from=appmsg)

真的，不眠之夜。

直接来聊聊GPT-oss。

很强，非常强，OpenAI终于干了点人事。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFhfDXLV8gDgN1OicElpPfVcDnNhWp0tJW0pq1MgtPib7oB4bicxibwrvBCw/640?wx_fmt=png&from=appmsg)

GPT-oss一共开源了两款模型，120B和20B，都是MoE，纯文本、非多模态的推理模型，
Apache 2.0 许可，也就是最宽松的那种，你随便用
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPF3OKFBxRz8r7FRoWRnNDfdqXIHPibPa5P6Y2ygRr6oibJ3T57Z6lwWRQg/640?wx_fmt=png&from=appmsg)

120B参数117B，激活参数5.1B。

20B的则209亿参数，激活参数3.6B。

上下文都是128K。

最爽的东西来了，这两模型，是原生支持4-bit量化的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFc5uasTwYibEgVt653ju697qoPIUR1Mhj2RPPvwHJcDzFUDfRUuiadDpg/640?wx_fmt=png&from=appmsg)

也就是说，20B模型的大小就12.8GB
，最低只要16GB内存就能跑，我这个破壁5080的16G卡，也能本地跑的动了20B的gpt-oss了。

而且，这不只是简单的那种事后压缩，就是社区常做的一些量化，那种方式性能会掉一大截。

比如DeepSeek-R1满血版是671B，8-bit精度，少数dense层依旧16 bit，最后的模型大小是720GB。

你想完整的部署它，8张96G的H100才行，如果你想省算力，那就你自己事后搞一层量化，量化到4-bit，这时候，模型体积就会小很多。

但是对等的，性能也会差一些。

而OpenAI是在后期训练的时候，就直接用了一种叫MXFP4的格式来做量化
。也就是说，模型在出厂前就已经学会了如何在低精度的环境下工作，所以这种方式，不仅能大幅的缩小模型权重体积，性能损失极小。

比如gpt-oss-20b，总参20.9B，9成以上是MoE专家，被压成MXFP4，4.25 bit/权重，剩下不足一成的主干还是 FP16。

所以20.9B×4.25 bit≈11.1GB，再把那10%左右的FP16算进去，加点 header，模型最终大小就差不多落在了12.8GB，直接一张16G的显卡就能推的动，非常的爽。

120B的模型，也能跑在80G的单卡的，真的牛逼。

这块量化还是挺有意思的，今年6月的时候英伟达也搞了个NVFP4，跟OpenAI这个
MXFP4稍微有点类似。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFRog5jZQjcSgcwcqds4wEnicbYG6q6licmmt8IC70RweJiate0GmMS5bRw/640?wx_fmt=png&from=appmsg)

定位都差不多，4 bit速度，接近FP8的精度，还挺好玩的。

这波OpenAI上大分，让我这种本地玩家，也能跑一跑满血版的20B gpt-oss了。

再看看跑分。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFqPcHXBZMb17w7Jm1bvLDefGVA5ssN44rLkvSSUE98Axb7srV5XuCeQ/640?wx_fmt=png&from=appmsg)

在 Codeforces（带工具）这个竞技编程测试中，gpt-oss-120b 和 gpt-oss-20b 分别获得 2622 分和 2516 分，表现我记得是优于DeepSeek R1的，但逊于o3和o4-mini。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFRxDLkCXarVSAJ12uu3ibZXh67jIsG7BibvCd1CRpJ7vNKNFic733RnWNQ/640?wx_fmt=png&from=appmsg)

在人类的终极考试中，gpt-oss-120b和gpt-oss-20b 的得分分别为19%和17.3%，低于o3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFrVzibZ0UDswMmsZyMZAiaicKr23Yjndbk6IPctMbxqfM5FuVVbbyiajyXA/640?wx_fmt=png&from=appmsg)

不过OpenAI这个跑分其实非常的不直观，因为只跟自己对比，挺狗的，正好前端时间差不多同尺寸的Qwen3和GLM-4.5也都发了，群友@洛小山 就把大家同尺寸模型的跑分都整合了一下。

结果不看不知道，一看吓一跳。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFco8kHB3u4pAaODkmPXPralzPM2ty023Z4ia15lrVzAKic4l4Uol4TCgg/640?wx_fmt=png&from=appmsg)

在同尺寸下，几乎是傲视群雄，没有敌手。

说说在哪用。

OpenAI自己做了一个在线的网站，供大家试用：

https://gpt-oss.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPF0BJXMZdqsQ9jQ4Hm9m10IbvyzJKaYSERqaPwvJKY94YEYdtJgQrbdQ/640?wx_fmt=png&from=appmsg)

但是卡的一笔，经常动不了。

所以，你也可以在O
penRouter上用，他们已经第一时间支持了gpt-oss。

https://openrouter.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPF9Fg6MOwvsoyicnCRxRVxTOsYO3UE57tRxGlnoa7niamqPfqW4iaZfad3g/640?wx_fmt=png&from=appmsg)

比较可惜的是，截止到凌晨4点，我最常用的模型平台硅基流动还没支持gpt-oss，估计睡了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFn3SlqibJBTOgBlIkjib3UWC2X6yLUWsb7wmHCrKA9AKFZg07vPsTocibQ/640?wx_fmt=png&from=appmsg)

此处对硅基流动工作人员喊话：快上模型。。。

而如果你想本地用的话，也可以直接下载一个Ollama。

https://ollama.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFCOZpibGq3ibDa8mQVWacuvAmDbS1EnK4d7JmekXicfBAcToiaia55aicBcnQ/640?wx_fmt=png&from=appmsg)

Ollama现在支持UI界面了，好用很多。

下载安装完Ollama之后，你就可以在这个地方选择模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFY9SU3IGDROcrRGDsiaaLy8ibB0hwn3I2m3yONXocbYaD6lVEruFjlKlQ/640?wx_fmt=png&from=appmsg)

选完了以后，随手发个1或者你好之类的。

模型就会自动开始下载了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFaiaMcIdht9a0bvDXlJJEp34liaB51BgMAVORyziazOib1IPrtwD4WTMfbg/640?wx_fmt=png&from=appmsg)

但是这个地方稍微注意一下，不要自不量力= =

20B的模型至少需要16G的显卡才能跑。

120B的模型至少需要80G。

没到的就别下模型了，老老实实去硅基流动或者O
penRouter接个API用就行。

我自己部署了一下20B，用了下，速度确实是快，而且快的离谱。

还是群友@洛小山 做了个对比。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFPicS9TViaLyOyn9ibILVSZ6uEX8jsic3LoegT0VaPJhZWvcKCRHDP79Vdg/640?wx_fmt=png&from=appmsg)

在别的还在慢悠悠的跑的时候，gpt-oss-20B只花3秒就解决了战斗。

你用的时候就感觉，飞一样的感觉。

我自己也测了下代码审美，老样子，跑跑固定case像素弹球大师。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFfXC1JKQwFHN6SE1Q9zALObTEntk3ETC1EYkumT5wJ0IQ1UzibSFbDQw/640?wx_fmt=png&from=appmsg)

结果120B的给我看不会了，虽然能玩，但是真的丑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFicIyjY42T287L62zcLZJcYzVg2Nlvcu7QibZYdQVxTZgulW9x9bcEN4A/640?wx_fmt=png&from=appmsg)

emmmmmm。

至于20B的，就玩不了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFicX4Rky7l9jnVQrWfOu1fETUv7I5bdmibN5gCej3RUcRbnAll2ic7NmjA/640?wx_fmt=png&from=appmsg)

然后又在群里，看到了一张梗图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFh4oGc1Gee9noBOrG0QF88JxjroCJ24a97gGWrJoltJwtgl7yFXgmrw/640?wx_fmt=jpeg&from=appmsg)

一下子笑不活了。

而在推理和知识层面，确实还不错。

20B的模型，做这些烧脑的推理题，真的绰绰有余了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPF17kxDcjI1vUImxFu45VI7jJBEgGVWQPQBuicK5jtu9ibgNOhbkRlKoUw/640?wx_fmt=png&from=appmsg)

写作文笔这块，我有一个常用的提示词：

"你是一位久负盛名的小说家，文字极富感染力，风格细腻，善于挖掘和表达复杂的情绪与心理。现在，给你一个场景：

夜晚十一点半，你独自坐在一列开往远方的小城的绿皮火车上，车厢内昏暗的灯光时明时灭，窗外掠过荒凉的村庄、星星点点的灯火、偶尔传来的犬吠，车厢内空气沉闷、混杂着烟草与泡面的味道。你对目的地怀着某种难言的情绪，夹杂着期待、犹豫、忐忑甚至是恐惧。

请你使用第一人称，以细腻且富有感染力的文字，深入描写你此刻的内心活动和车厢内外的细节，尤其要注重细节密度、情绪层次和氛围营造，不少于500字。"

能比较清楚的对比看出来模型的写作功底。

比如这个就是GPT4.5的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFiaROsqLqG3cGYDcic5Z3HsuWsO6mdhK3LSnibmdwjibIxibRJ6FVe3fnhfg/640?wx_fmt=png&from=appmsg)

这个是Gemini 2.5 Pro的，都还不错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFH3aEicicfOgJXUOPuVcAjotZJplyIJIA723S4C5VpUDDCvNJppuH6BTg/640?wx_fmt=png&from=appmsg)

而gpt-oss 20B的文笔，是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFvkv3iaBohsIcsdOrvX6QP7ianodkrnEoPGSl0eS0KVSpl3tyyzEqdpicQ/640?wx_fmt=png&from=appmsg)

不跟GPT4.5和Gemini 2.5 Pro比，在同尺寸模型中，还是不错的，微调一下，应该能很棒的处理很多垂直任务。

就是我自己实测中发现，幻觉还是有一点不低的。

比如我问它，三体里云天明的三个小说是什么。

直接给我来了个，打底三部曲？？？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFFdicJ4utsjM0dEmKibdtNzaLbNxc7xvXSZgrs0Tw05SVGq7px4hNURHA/640?wx_fmt=png&from=appmsg)

还有NASA第四个登月的明明是Alan Bean，这个爱德华安德森是个什么鬼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFGtAxEiaDyygj03lnP5107CFzndc7jzyBHWluscAibV8F7zpwmvGYJPTg/640?wx_fmt=png&from=appmsg)

不过这毕竟是个20B的模型，虽然代码拉，幻觉有点高，但是在推理能力和数学能力上都很强了。

整体来看，确实在本地的消费级模型上，是很好也是很实用的。

后面微调一下，应该能干不少事，又燃起了我的斗志。。。

到时候后续也可以分享一下gpt-oss的微调教程和应用场景。

讲道理，OpenAI能把这事干出来，还是之前被DeepSeek给逼急了。

虽然每次看到OpenAI磨磨唧唧藏着掖着，我都会骂它一顿，但这次，确实真的可以给它鼓个掌了。

gpt-oss确实够诚意满满，够硬气，也足够改变未来开源社区的格局了。

这次OpenAI开了一个很好的头，拉低了门槛，提高了上限，让AI圈子的玩法更丰富了。

咱就是说，要不然，就Open到底。

周四不是发GPT-5吗？

索性，把GPT-5也开源了。

可好？


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
