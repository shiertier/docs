---
title: "DeepSeek开源第二天，发了一个比OpenAI十二天直播还硬的硬货。"
发布日期: 2025-02-25
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668943&idx=1&sn=b3cebbb317239a34d8e5e5c2cd5c7c83&chksm=f1cf6a52b54e9c95e87d905067f8a242161fd1233f30c1d17be236ab43556d77f7ff123b2858"
---

## 摘要

**1) 一句话总结**
DeepSeek在开源周第二天发布了专为混合专家模型（MoE）和专家并行（EP）量身定制的高效通信库DeepEP，通过内核优化与纯RDMA技术极致榨干GPU性能。

**2) 关键要点**
*   **行业动态**：阿里同日推出了推理模型QwQ-Max的预览版（已上线chat.qwen.ai）。
*   **前序项目进展**：DeepSeek首日开源的FlashMLA项目（针对H800优化）在一天内获得8.2k GitHub Stars。
*   **DeepEP发布**：第二天开源了通信库DeepEP（GitHub地址：deepseek-ai/DeepEP），发布约1小时即获超1000 Stars。
*   **核心定位**：DeepEP是为“混合专家模型”（MoE）和“专家并行”（EP）量身定制的通信库，支持“all-to-all”通信与无损FP8通信。
*   **极低延迟**：信息在不同GPU专家间传递延迟低至186微秒；针对延迟敏感的推理解码，提供了一组纯RDMA的低延迟内核。
*   **内核优化**：提供针对非对称域带宽转发的优化内核（基于DeepSeek-V3/R1预训练设置在H800上测试），大幅提升大模型训练与推理效率。
*   **计算与通信重叠**：引入了一种基于钩子（hook based）的通信-计算重叠方法，该方法在传输数据的同时进行计算，且不占用任何SM（流多处理器）资源。
*   **部署便捷**：项目开箱即用，下载、部署和安装步骤精简。
*   **后续计划**：DeepSeek的开源发布活动还将持续三天。

## 正文

刚肝完Claude 3.7 Sonnet，睡了两小时，马不停蹄的又起来看DeepSeek开源项目。

结果时间线上先刷到的是阿里的推理模型QwQ-Max的预览版。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6JWgia1H752R4yuCHPUqqaWWIJkXF1mPJMpkHicgFQwPXWEa1tAJHlGSw/640?wx_fmt=png&from=appmsg)

不是哥们，早上5点发，这也太抽象了。。。

但是毕竟阿里，是跟DeepSeek其名的“源神”，还是值得关注一下，反正他们跟我说，正式版很快了，而且也是全部开源。

有兴趣的可以先去线上版本https://chat.qwen.ai玩。

左上角选2.5-max，点上深度思考，里面模型用的就是QwQ-Max preview。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6nM1oPr3mEFOtW95CicM4qH41SvctGKcMWLKOSM6jbNx8NTqh9V6pyyg/640?wx_fmt=png&from=appmsg)

回到DeepSeek这边。

昨天第一天他们发的FlashMLA直接在H800上把性能榨干。短短一天过去，Github Star 就已经8.2k了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6fRSEElaPficpfF0QhLETLQPib0yibXfYiaibficI6RjVuRjYblMPu2k7MoibA/640?wx_fmt=png&from=appmsg)

而今天，他们带来的项目，
放得招比第一天还大，承上启下算是用到极致了。

开源的是一个叫DeepEP的东西，它把电脑里的GPU性能再次拉满。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6osY84Q9uxXq0X0tZFQAV897C1DtwBib1dYliblGkNlcxuMhWCDEKYAdA/640?wx_fmt=png&from=appmsg)

开源地址在此：https://github.com/deepseek-ai/DeepEP

1小时左右，Github上已经斩获1000多颗星了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6yCmeLdGmCpMeq0VzLuFneMlErGvYGeqtVg8feMXO1sichqrMcsicpCZQ/640?wx_fmt=png&from=appmsg)

AI圈子里老说软件先行，硬件开路。但DeepSeek要的就是硬件效率，最低的硬件资源干出同水平更强的AI任务性能。

甚至，我感觉，DeepSeek比英伟达更懂怎么榨干GPU。。。

DeepSeek这回开源的技术，实在过于硬核，理解门槛太高，
硬核的甚至我都有点看不懂了，但是还是硬着头皮学习了一波，也提前找了朋友蹲点，第一时间给我拆解了一下。

所以秉持着一个自媒体的原则，给大家简单科普下。可能会有点错误，如果出现，欢迎各位大佬莅临评论区进行指导。

我先用一个非常通俗易懂的例子描述一下这玩意。

现在很火的2个
AI
领域的研究方向，一个是“混合专家模型”（
MoE
），另一个就是“专家
并行
”（EP）。这回开源的DeepEP ，就是它俩量身定制的通信库。

在一个MoE模型里面，你可以简单的理解为里面有256个专家，给你干不同的事，有些擅长语言，有些擅长数学，有些擅长常识。这种模型叫做"混合专家模型"。

但是呢，过往的MoE模型里面，你可以想象成是这256个专家，都在一个房间里面，靠嘴通信，吵来吵去，要是所有人一起大喊大叫，这有多混乱，效率有多低下，你肯定能想象的出来。

而这个DeepEP呢，相当于设计了一个中间的沟通系统，把一群靠嘴巴沟通的地球人，变成了一群直接思想透明的三体人，靠电磁波交流，速度奇快无比。

所有专家的信息都可以即刻被其他所有三体人专家接收，没有延迟。
（信息在不同GPU专家间以接近光速的方式传递，延迟低至186微秒）

而且整个文明可以同时感知一个三体人的所有思想。
（支持"all-to-all"通信，一个专家的信息可以同时发送给所有其他专家）

因为三体人的思想是透明化的，让信息无损传递，没有误解。
（数据在传输过程中保持完整性，支持FP8通信）

这就是大概的东西，虽然可能还是需要理解一下，但是我已经尽可能用我的知识来类比了一下。

所以说啊，这就是真正的，三体科技。。。

回到DeepEP的技术和参数这块，我也列了3个点。

1. 开挂般的内核优化

与DeepSeek-V3 论文一脉相承，DeepEP 提供了一组针对非对称域带宽转发的优化内核，把高吞吐量和低延迟又带到了一个新水平。不光让大模型训练更快了，推理效率也大幅增加了。

他们根据 DeepSeek-V3/R1 的预训练设置，在 H800 上测试了普通内核性能。

这性能表现，牛逼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6FibQ9aH28CNzViaicYR93LHt3ibwymDzwgQE6ouhaWicSxk1MnTLDhEQmDA/640?wx_fmt=png&from=appmsg)

2. 低延迟

对于另一种对延迟敏感的推理解码，DeepEP 包含一组纯 RDMA 的低延迟内核，以最大限度减少延迟。

看到这里，感觉DeepSeek又贴心又硬核，把DeepSeek-V3/R1的核心优化技术之一开源就是这么简简单单。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6mEETrlFknXPMFicUjhpnvbG6RVo1VKyiaQb6MoZxA1N9MFebaYicHqMOw/640?wx_fmt=png&from=appmsg)

3. 新的通信-计算重叠方法

最后的最后，DeepSeek又给了个惊喜：一种基于钩子（hook based）的通信-计算重叠方法，牛逼的是，这种方法不占用任何 SM 资源。

就比如你在翻书的同时，就能一目十行了，而不是翻到哪页看哪页。

DeepEP 就是这样，让 GPU 在传数据的同时还能计算，一点不浪费时间。

这让我想起DeepSeek-V3当时论文一发出来，性能效率比把全网都爆了的那种即视感。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6cG4nM8m1jaibQVmd5eqPZ34QZC4JZopk7Qbib5GoAoortayKD13lK1bw/640?wx_fmt=png&from=appmsg)

恍惚间，我又想起之前，整宿盯的OpenAI十二连弹产品发布会，产品未至，营销先行。

看完了以后，我基本就是一句话描述他们：

XX OpenAI，XX 奥特曼。

这回，DeepSeek的手笔，让我感觉才是真的牛逼。

就是给你个代码库，简简单单，一点套路没有。

直接把饭喂到你嘴边。

整体来看，这回的开源也是开箱即用，下载、部署和安装都一步到位。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrOaEK7KFPwQKJam6hZ76j6nKhpP6nu8cshVlqr6BCaiatQ7Nuuqad9czdibc7L8jKDnic9TkrJ1jFSA/640?wx_fmt=png&from=appmsg)

这是开源党的狂欢日，而这样的狂欢日还有三天。。。

就像DeepSeek在开源页上所说的那样。

他们正在 AGI 探索中挑战自己的极限。

仅仅作为开发者。

以完全透明的方式分享微小但真诚的进展。

DeepSeek。

把进化工具，平等地交到每个人手上。

让所有普通人都能够。

跨AI的海，越AI的山。

这一刻，看到DeepSeek做的大事。

才让我由衷地觉得，AI真好。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
