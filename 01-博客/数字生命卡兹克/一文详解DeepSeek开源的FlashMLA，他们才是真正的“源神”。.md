---
title: "一文详解DeepSeek开源的FlashMLA，他们才是真正的“源神”。"
发布日期: 2025-02-24
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668908&idx=1&sn=403d802c370eaced19f43d6ace8e8557&chksm=f15865c0247f92190d308a6cf1bad135d861f891ab72ddcddd2b658e2bfa0a56aa4f641ebcd6"
---

## 摘要

**1) 一句话总结**
DeepSeek开源了FlashMLA，这是一款专为NVIDIA Hopper架构（特别是H800 GPU）和可变长度序列深度优化的多头潜在注意力（MLA）高效解码内核。

**2) 关键要点**
*   **项目发布**：DeepSeek在GitHub开源了连续五天计划的首日项目FlashMLA，上线半小时内获得超300个Star。
*   **核心功能**：FlashMLA是一个高效的多头潜在注意力（MLA）解码内核，主要用于加速大模型推理解码阶段的KV缓存计算，提升长上下文对话的产出速度。
*   **硬件优化**：专门针对NVIDIA Hopper架构（H800 GPU）进行深度优化。
*   **性能指标**：在H800上达到了 3000 GB/s 的内存带宽极限（memory-bound）和 580 TFLOPS 的浮点算力极限（compute-bound）。
*   **横向对比**：灵感来自FlashAttention，其性能接近FlashAttention-2的两倍，并逼近针对H100优化的FlashAttention-3。
*   **场景适配**：针对可变长度序列（variable-length sequences）进行了优化，能够高效处理实际应用中用户输入长度不一、动态变更的场景（如超长PDF解析）。
*   **生态布局**：该项目开箱即用，并与DeepSeek近期发布的《Native Sparse Attention》论文相呼应，旨在从训练到推理全面榨干GPU硬件性能，打破闭源大厂的技术垄断。

**3) 风险/缺口**
*   **硬件限制**：受限于国内环境，目前该内核主要针对“阉割版”的H800 GPU进行优化，无法直接使用完整的H100 GPU。

## 正文

刚刚，万众瞩目的DeepSeek，开源了他们第一天的项目。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTEEuVYN8Jp4lnyV6EPfZmia1m8pz8ibqOpfMyfroHGwZKF9Libep6kTicew/640?wx_fmt=png&from=appmsg)

开源地址在此：

https://github.com/deepseek-ai/FlashMLA

开源的是一个叫FlashMLA的东西。

不到半小时，Github已经已经300多Star了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTFTticYiaGediaOzHIxBF40AyfGuIl774dD8UJd3k9fuRczzBQcR3OepAA/640?wx_fmt=png&from=appmsg)

几个参数：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTgMpwRPA9oEsd0bJLgX6zbB3KKFjiaQP4bzcQvVZbgwNiaZdStlonZiccQ/640?wx_fmt=png&from=appmsg)

核心的一句话是：

“FlashMLA is an efficient MLA decoding kernel for Hopper GPUs, optimized for variable-length sequences serving.”

翻译过来就是：FlashMLA是一款面向Hopper GPU的高效MLA解码内核，并针对可变长度序列的服务场景进行了优化。

因为确实比较硬核，我只能说用我仅有的知识，给大家简单科普一下这是个啥，可能会有错误，不保证对，如果出现错误欢迎大佬评论区拍砖。

把这句话拆解一下。

“MLA decoding kernel”。

这里的“MLA”指的是
Multi-head Latent Attention
，多头潜在注意力，DeepSeek降低成本的王炸，反正它是个专门用来做解码阶段的注意力加速器。

大模型有两个主要阶段：训练（包括prefill）和推理解码（infer decoding）。在解码阶段，我们往往需要一次一次地拿KV缓存出来，反复计算，所以当序列变长之后，这部分开销会爆炸似的增长。如果能在解码阶段有更强的核去优化，意味着你的大模型可以更快地产出结果，特别对像这种长上下文对话就很关键。

第二，“for Hopper GPUs”。

英伟达的卡有几个架构，包括A架构和H架构。

A是Ampere架构（2020年发布），是NVIDIA的第七代GPU架构，主打通用计算和高性能AI训练/推理，典型代表型号为A100。

H代表Hopper架构（2022年发布），是NVIDIA的第九代架构（跳过第八代），目前最新的，专为超大规模AI和超算设计，显著优化了Transformer模型性能，典型的就是H100，不过因为国内问题，能用到的都是阉割版的H800。

所以，大家就可以明白，FlashMLA是
DeepSeek专门针对NVIDIA H800这一代高端加速卡做的深度优化。

他们在release note里还说跑在H800上能达到“3000 GB/s memory-bound & 580 TFLOPS compute-bound”，这等于在“内存带宽”和“浮点算力”两方面都拉到极限了。基本已经是我见过的最逼近巅峰的了。

他们在致谢了写了灵感来自于
FlashAttention。

我就去翻了下那个项目。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTmISMibITSeQHVztZGrDBQOOJBVz0MLTt9lpUsbicWmecwSmlOHicYLNjA/640?wx_fmt=webp&from=appmsg)

相比FlashAttention-2，
FlashMLA接近翻了2倍，甚至都能跟
FlashAttention-3还差点，而别人是H100优化的，DeepSeek是针对H800优化的。

第三，“optimized for variable-length sequences.” 。

就是说它不仅仅适合固定batch，还对那种“每个人输入长度不一样，随时变更token长度”的场景特别好。

因为就大模型的实际应用而言，用户往往输入并不规则，随时来个长上下文对话或者给你干上去一个超长PDF，这就需要内核支持“动态序列”，同时还能保持高效，而这块，DeepSeek也做了大幅的优化。

目前整体上也可以开箱即用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTn8mNfJCdMAJlzg5HSM2qq5hsGG3TiaOQ7x1ApDWBa8zN8VIDjGs3D5g/640?wx_fmt=png&from=appmsg)

DeepSeek这是真的把自己最牛逼的东西开源出来了。

这尼玛，才是真正的OpenAI啊。

想起来了他们前几天发的论文《Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention》，整个目标也都是有异曲同工之妙。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCT7vyKbja1ccCUU2PSQbvuic9SAjLHfd3nZHDby4hqibVBLHmZ4j5EJfBA/640?wx_fmt=png&from=appmsg)

如果说FlashMLA是针对推理解码做的“终极性能爆破”，那么Native Sparse Attention就是对训练和推理做更全面的“稀疏化改革”。

两者结合到一起，意思就是DeepSeek在告诉你。

“无论训练还是推理，我都要把硬件榨干，要做就做最猛的AI。”

对于整个AI生态来说，这是一件天大的好事。

特别是国内。

越多的开源优化，意味着以后大家都可以在高效注意力、稀疏推理、长上下文训练等方面取得突破，不用像过去那样闭源大厂独家享受。

如果你是小白或者纯产品经理，可以把这件事情当做：

苹果又给iPhone做了一个专门的GPU调教，所以游戏跑得更爽了。

只不过，这次是DeepSeek在给AI大模型做专门的GPU调教，把H800的极限性能都薅出来，换来更快的推理和训练速度。

这是妥妥的GPU性能红利。

所以我对DeepSeek挺佩服，敢搞硬件极限那一套，敢把论文跟开源项目一起放出来，而且频率这么高。

而且这还只是第一天。

后面还有四天，不敢想他们还会放出来多牛逼的东西出来。。

希望这篇小白友好版的文章能让你对FlashMLA有个更直观的理解。

既然没卡，没有资源。

那我们自己，就特娘的打下那一片天。

感谢DeepSeek。

你才是真正的源神。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
