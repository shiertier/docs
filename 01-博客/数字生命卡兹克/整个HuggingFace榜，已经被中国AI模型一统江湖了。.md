---
title: "整个HuggingFace榜，已经被中国AI模型一统江湖了。"
发布日期: 2025-07-31
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647673525&idx=1&sn=f0ee827831716ad19a9f9c2843cb2262&chksm=f150eb9a12bb94c5f99afd5bbe27d617c8a2a33dbe852446078972b99d7e1023872087a56579"
---

## 摘要

**1) 一句话总结**
中国AI大模型近期在Hugging Face开源榜单上包揽前十，国内头部厂商在短短一个月内密集开源了涵盖文本、多模态、音视频及3D领域的众多高质量模型。

**2) 关键要点**
*   **榜单霸榜**：Hugging Face开源榜单前十名目前全部被中国模型占据，其中智谱GLM-4.5登顶，阿里Qwen独占5席，腾讯混元3D模型位列第3。
*   **阿里系（Qwen与通义）**：7月密集开源多款模型，包括Qwen3-235B系列、Qwen3-Coder-480B、亲民版Qwen3-30B系列，以及首个CoT音频模型ThinkSound和MoE架构视频生成模型Wan2.2。
*   **智谱AI**：相继开源了9B尺寸的视觉理解模型GLM-4.1V-Thinking，以及GLM-4.5系列（包含355B及106B的Air版本）。
*   **腾讯混元**：开源了混元A13B（总参数80B，激活13B）以及业界首个可沉浸漫游、可交互的3D世界生成模型HunyuanWorld-1。
*   **Kimi (月之暗面)**：开源了K2模型（含Base与Instruct版本），主打代码能力，发布20分钟内下载量近1.2万。
*   **百度与昆仑万维**：百度开源了包含纯LLM与多模态的ERNIE 4.5；昆仑万维相继开源了Skywork-Reward-V2奖励模型、Skywork-R1V3多模态模型及Skywork-UniPic-1.5B多模态统一模型。
*   **科研机构与其他厂商**：上海人工智能实验室开源了241B多模态混合推理模型Intern-S1；邱锡鹏团队开源了基于百万小时音频训练的MOSS-TTSD。
*   **行业趋势**：与海外大模型不断闭源、涨价的趋势形成鲜明对比，国内AI厂商正处于密集开源期，大幅推动了中文及全球AI开源生态的发展。

**3) 风险与不足（基于原文明确提及）**
*   **文档与关注度缺失**：蚂蚁集团开源的KAG-Thinker模型缺乏Readme文档说明，导致社区关注度不高。
*   **发布未兑现**：阶跃星辰（Stepfun）仅发布了Step3模型的官方声明，但尚未实际开源放出模型。
*   **海外生态封闭风险**：海外模型持续走向闭源和涨价，例如Anthropic开始限制Claude的访问量并降低使用次数。

## 正文

最近，国产模型开源非常多。

MiniMax、Kimi、Qwen、混元、智谱、昆仑万维等等，都在疯狂开源。

有一个非常有意思的变化。

海外疯狂涨价、国内疯狂开源。

这个世界，好像真的变天了。

然后，昨天，我照例打开了hugging Face。

就在榜单上看到了这么一幕。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwlbPVZxFrhMfib0KmvFHic9W7P8iaC4SIvSicSolGMmicic8icibJUI09tm0lSA/640?wx_fmt=png&from=appmsg)

我甚至以为我眼睛花了，揉了一下，再看，确实还是这10个。。。

前10名的模型，全部都是中国的，开源模型。

智谱GLM-4.5登顶，Air排名第6；Qwen一家独占5席位，开源世界半壁江山；混元3D世界模型作为唯二的多模态，排行第3。

今夕是何年，天地翻覆不过顷刻间。

不到两年时间，咱们亲眼目睹了一个时代的逆转。

我本来想给大家盘点一下，这10个开源模型的能力和介绍。

但是我一想，最近其实国内已经卷疯了，除了这些在榜上的，还有一些大家不知道的优秀的开源项目。

那不如，就做一下，最近这一整个月的盘点吧，给大家看看，国产的开源力量。

有这个想法之后，于是，我就去找了我的好朋友，也是一个非常硬核的AI技术博主，刘聪NLP，因为我知道他一直都有盯着开源世界的习惯。

没想到，他还真的整理了一份。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwxAibszTGUg57NOhov2h6bBtUibwpMuEibENL9pOufHO1qMFVHJ7vs7UIQ/640?wx_fmt=png&from=appmsg)

所以，这篇文章里的很多的模型盘点，都来自刘聪NLP，没啥可说的，感谢聪哥。

NLP刘聪，一点都不普通。

接下来，让我们开始。

- 6月27号，腾讯开源了混元A13B模型。

总参数80B，激活参数13B，补齐了70-80B尺寸的空缺。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwBVlmIlnHvk2ZRU3FGB6SdQSiaANU5vOxqhGkIKAFjEiaibpicacv3WI66w/640?wx_fmt=png&from=appmsg)

- 6月30日，百度ERNIE4.5正式开源。

百度信守了承诺。有纯LLM还有多模态，尺寸也蛮全的，大小都有。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwCibxuTV7on0IyTEGUvKS0dIMLcy8c3P8wWP8SeEWSunAYy95a7zOL0A/640?wx_fmt=png&from=appmsg)

- 7月1日，阿里通义开源首个CoT音频模型-ThinkSound。

主要用于视频配音，让每一帧画面都有专属匹配音效。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwXceaEIufy1pqNpOx4w2FmjrBlACfhib9UtKClJ0ctCyftGGw7CXTPxQ/640?wx_fmt=png&from=appmsg)

- 7月2号，智谱开源GLM-4.1V-Thinking模型。

刘聪也第一时间做了评测：
服了！没想到，GLM-4.1V-Thinking竟然把这些问题都答对了！
9B尺寸的视觉理解模型有点强。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwiaXGHONA7iawqf5uaEz0iatI4hnbiaZLnwwga9x6o5a33ElIredmibia4IMw/640?wx_fmt=png&from=appmsg)

- 7月4日，昆仑万维开源奖励模型Skywork-Reward-V2 系列。

共包含 8 个基于不同基座模型和不同大小的奖励模型，参数规模从 6 亿到 80 亿不等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwlV6jxvFs5kzgQ1jjebfPZ6EdKrS5VujMOJ2jkyR3ZbjBHLicAXhukNw/640?wx_fmt=png&from=appmsg)

- 7月5号，
邱锡鹏老师团队开源MOSS-TTSD。

基于百万小时音频训练，不过好久没听到MOSS了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwyoJ6lEx8XPXYd5iaNYh6LKwmPzfdMHRILR3832qGvXCPibQ3icN3Kdia2Q/640?wx_fmt=png&from=appmsg)

- 7月8号，蚂蚁集团知识引擎团队开源KAG-Thinker 模型。

一种交互式思维与深度推理模型，为复杂的多跳问题提供认知推理范式。不过这个关注度不高，但是你这个readme都不写吗= =

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2Twooaf2YLXJY9etHKwribcLLa1L3PaspQr5J4eEy6ya4ZseOh9Kh7NJTw/640?wx_fmt=png&from=appmsg)

- 7月9日，昆仑万维开源Skywork-R1V3模型。

也是一个多模态理解模型，基于InternVL-38B进行特殊的Post-Training得到的效果更好地模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwrqXOGwj0RY5jHz6e87C41zblo2B6VLJamNuBWbyRJyU9Wic9iaReQvicA/640?wx_fmt=png&from=appmsg)

- 7月11日，Kimi开源K2模型。

有基础模型 Kimi-K2-Base 与 微调模型 Kimi-K2-Instruct两个版本，当时仅20min就达到近12.2k的下载量。

K2真是好评不断，也是提升了大家对国内大模型的真实Coding能力的信心。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwACf2M5ibUVd5unQrPJ7RTuicHAJtofvmKLB5SPialTjpjkQ4GhcxKSZ2g/640?wx_fmt=png&from=appmsg)

- 7月21日，阿里Qwen开源Qwen3-235B-A22B-Instruct-2507模型，当前排名第10。

之后就连续开源。

- 7月22日开源Qwen3-Coder-480B-A35B-Instruct，当前排名第2。

- 7月25日开源Qwen3-235B-A22B-Thinking-2507，当前排名第5。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwhibjApOSicqjr6NUweGdt72iaLJdaoib7sPMo9ncOEWhzAgicnHgjYFJdRA/640?wx_fmt=png&from=appmsg)

- 7月26日，上海人工智能实验室开源书生科学多模态大模型Intern-S1。

一个241B多模态混合推理模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwHQ0DSfP20eEckhVqId2TygyLhZQg0Pt7UBkTZkxTz8iat8kkWAbiawEA/640?wx_fmt=png&from=appmsg)

- 7月27日，腾讯混元开源了3D世界模型1.0-HunyuanWorld-1。

也是业界首个开源可沉浸漫游、可交互、可仿真的世界生成模型，为游戏开发、VR、数字内容创作等领域带来了全新的可能性。腾讯还在3D上发力。也是现在排名第3的模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwQo5nMmM65Ravcn1FMf3Fa7R9RicXDFSVOkBa0NYeyapZDPLjolUXAMQ/640?wx_fmt=png&from=appmsg)

- 7月28日，阿里通义万相团队开源Wan2.2。

是业界首个使用MoE架构的视频生成基础模型，有文生视频Wan2.2-T2V-A14B、图生视频Wan2.2-I2V-A14B、统一视频生成Wan2.2-TI2V-5B。当前排名第9。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwMwfibUg3Wl1HOxudHQXztoU9HBFDTwribgZibr4ibOK5cmQ9ia5BjrK6plA/640?wx_fmt=png&from=appmsg)

- 7月28号，智谱开源GLM-4.5系列模型。

包括：GLM-4.5 355B-A32B、GLM-4.5-Air 106B-A12B，这几天社区反响很好，也是冲到了HF热榜第1，登顶。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwsfEcO1znb6WG1Fiaicyob1hnuUibJFNBQlib3xnYIR3ZGf2uia1tPXzUPYA/640?wx_fmt=png&from=appmsg)

- 7月30日，Qwen开源Qwen3-30B-A3B-Instruct-2507。

亲民版模型，本地部署福音。
Qwen开源了亲民版模型！这次是30B-A3B小尺寸！
当前第7。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2Tww2QdzbTdv4x0QT2s5ReYThHHTv2Y3OTibgd2XeMWxbBicpLfgicnzZOng/640?wx_fmt=png&from=appmsg)

- 7月30日，昆仑万维开源多模态统一模型Skywork-UniPic-1.5B。

实现图像理解、文本到图像生成、图像编辑三大核心能力。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2Twlwl7ZH2w0k3m6K6uyCGTHAU7TZibPA01xic9Xf2S5tMXyxDNnBxGC86Q/640?wx_fmt=png&from=appmsg)

- 7月31日，
Qwen继续开源
Qwen3-30B-A3B-Thinking-2507模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2TwK4QDHVpdEwQATsRhehiaVdZKXVpScvOYJkgaFHibxXqIMsVjn8ia3Z1Ag/640?wx_fmt=png&from=appmsg)

- 7月31日，阶跃要开源Step3模型。

不过没等到，先放个官方声明吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqCPNPb5uuK119M7WibGk2Tw7DOIINC4TR4t0v1wTJfsXllAaLEFCO7fbFkt5xRYUfxXMyjptXPs7Q/640?wx_fmt=png&from=appmsg)

因为都是我和刘聪手动整理，也许会漏掉一些，勿怪！！

可以直接在评论区补充，但仅限最近一个月的国内开源哈~

最后。

我忽然有点想起了23年的世界，那时候，中文世界只有GLM这一个独苗，海外开源模型层出不穷，我至今还记得当年LLaMa2的震撼。

那时候，我们用着国外的模型，小心翼翼地去改他们的Prompt，适配我们的场景。

那时候，我们顶着质疑，熬着通宵，费尽全力也只能追在别人屁股后面跑。

那时候，我们羡慕着硅谷的光芒，幻想着有一天也能创造属于我们自己的传奇。

短短两年之后的今天，我们却第一次真切地站在世界开源舞台的中央。

这条路，走得太难，太辛苦，太漫长。

但好在，我们从未停下脚步。

想起海外模型不断闭源，不断涨价，甚至Anthropic开始限制Claude访问量，默默降低次数。

大洋这边，还在不断开源，为这个世界的AI生态，不断做着贡献。

如果一定要问，今夕是何年？

那我觉得，一定是属于国产大模型的元年。

也是属于中文世界的开源元年。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
