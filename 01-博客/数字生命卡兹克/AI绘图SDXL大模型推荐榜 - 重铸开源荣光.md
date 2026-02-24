---
title: "AI绘图SDXL大模型推荐榜 - 重铸开源荣光"
发布日期: 2023-10-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659867&idx=1&sn=5017314241e36e581d1e9da83dbadb5f&chksm=f1ce23c8de85566396746903ed51ba234c71f5ec49a2ef8d2b514703036b15e36575c9dfea08"
---

## 摘要

**1) 一句话总结**
本文盘点了基于SDXL 1.0微调的5款优质大模型与3款风格化LoRA模型，并提供了相应的本地整合包与云端部署方案。

**2) 关键要点**
*   **技术背景**：SDXL 1.0参数量比SD 1.5大近7倍，并采用OpenAI的CLIP模型，支持长句输入，能力上限大幅提升；近期WebUI 1.6.0及ControlNET的更新进一步稳定了SDXL生态。
*   **通用写实模型**：推荐 `DreamShaper XL1.0`，直接对标Midjourney 5.2，在图像生成质量和清晰度上表现极佳，是目前最全能的SD大模型。
*   **二次元/卡通模型**：推荐 `SDXL_Niji_Special Edition`，对标Niji 5，精通各类卡通风格，是目前SD生态中表现最好的卡通大模型。
*   **真人/摄影模型**：推荐 `LEOSAM's HelloWorld 新世界 SDXL`，主打极高的肖像真实感与电影级质量，需在提示词中使用“leogirl”触发。
*   **3D/UI特化模型**：推荐 `DynaVision XL`（擅长皮克斯/迪士尼等3D风格及动物处理）与 `Microsoft Design SDXL`（针对3D UI图标训练，偏微软弥散色彩风格）。
*   **风格化LoRA推荐**：推荐 `Juggernaut Cinematic XL`（增加电影质感与光照）、`InkPunk XL`（前卫复古的墨水朋克风，需用“inkpunk style illustration”触发）以及 `Voxel XL`（体素方块风格，配合Pika有奇效）。
*   **部署与获取**：可通过公众号私信获取本地模型整合包，或在“仙宫云”平台搜索“卡兹克”使用已配置好模型与插件的云端镜像。
*   **行业格局**：目前AI绘图形成三足鼎立态势——Midjourney（极强审美与泛化）、DALL-E 3（最强语义理解与多模态）、Stable Diffusion（最强控制能力与开源生态）。

**3) 风险与不足**
*   **LoRA生态不完善**：目前SDXL的LoRA生态仍处于早期，SD 1.5时代顶级的“功能性LoRA”（如细节调整、增强光影等）尚未完成适配，当前可用的多为“风格化LoRA”。
*   **硬件门槛高**：SDXL大模型对本地电脑的硬件配置要求极高，部分用户可能无法流畅运行。
*   **特定模型泛化能力弱**：`Microsoft Design SDXL` 模型虽然填补了UI图标领域的空白，但目前整体风格泛化能力较为单一。

## 正文

7月份我写过一篇SDXL1.0大模型的评测：

SD全新开源模型SDXL1.0评测 - 留给Midjourney的时间不多了

前两周
Stable Diffusion
WebUI1.6.0发布了，新增了很多对SDXL生态的支持。

而ControlNET也对SDXL的支持也逐渐稳定。

SDXL的生态终于有一点起色了，我也觉得是时候，可以来写一篇SDXL的大模型推荐了。

在推荐之前，以免大家混淆，所以这里再做一个简单的小科普：

现在的所有的SD的大模型，都是基于stability.ai发布的开源模型
Stable Diffusion进行微调的，而
Stable Diffusion本身有很多个版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpKCz3FAibas3Csrpib1ENb49cT9kB33lGkO4VJTJ4PuFcqdm7zqVbqc9ZIyZ4l8U0JNUsNS40SxFkw/640?wx_fmt=png)

对，有这么多，但是基本都没人玩，只有SD1.5屹立不倒，你不管在Civitai还是一些其他的模型站上，99%都是把SD1.5当底座进行微调或者融合的。

而SDXL1.0是今年7月新发布的大模型，参数量比SD1.5大将近7倍，语言模型也“抄”了OpenAI的
CLIP可以写大长句
，他的
上限比SD1.5高太多太多了。

现在，我就来盘点一下我最近使用下来，认为很棒的基于SDXL1.0微调出来的模型推荐。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpexK6oPzPfmCicQV2B25a0ib6hFibEJf2ibuicE0x0vib6JCvDkoY5B0VWg5A/640?wx_fmt=jpeg)

大模型：

DreamShaper XL1.0（通用写实，对标MJ5.2）
SDXL_Niji_Special Edition（通用卡通，对标Niji5）
LEOSAM's HelloWorld 新世界 SDXL（亚洲真人）
DynaVision XL（通用3D）
Microsoft Design SDXL（UI图标）

LoRA：

Juggernaut Cinematic XL LoRA（电影感）
InkPunk XL LoRA（墨水朋克）
Voxel XL LoRA（体素风格）

老规矩，我已经帮大家全部都打包好了，对着我
公众号
私信“SDXL模型”
，后台就自动发你模型整合包了。

大模型

1.
DreamShaper XL1.0

DreamShaper可以说是SD生态里面的顶流和常青树了，SD各种模型起起伏伏，只有
DreamShaper屹立不倒，至今为止最为全能的SD大模型。

DreamShaper XL1.0
直接可以对标Midjourney 5.2，也是我现在用的最多的大模型，没有之一。

SDXL1.0版本
与基于SD1.5训练的DreamShaper模型相比，
DreamShaper XL1.0在图像生成质量和清晰度方面均表现极佳，可以直接看我下面跑的效果图。推荐必装。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpgsibVpN1tH0ktRataXprxGDgs9SfwnoD1JqIibgbAfbPBItUqnbPYCTQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpQpvEZaaWslPIQpgIVicm8CbJ13yo96cfTedMgJaW4hqlHzaHCGGu64g/640?wx_fmt=png)

2.
SDXL_Niji_Special Edition

如果说
DreamShaper XL1.0是直接对标的
Midjourney 5.2，那
SDXL_Niji想必你也能猜出来，是对标啥的了。

相比Niji5，有过之而无不及，SD生态里表现最好的卡通大模型，精通所有卡通风格，你的
每一个创意，都能在SDXL_Niji_Special Edition的世界里找到最完美的表达。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpWqO4XF8m2N47MDGcCiaLPPjCxaUSWDc5zjzYTs0jNxoXyl8AYpqgpfA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpvr6ib1SjeICIHzyKiaVbgN2QEHlPYaLQG59r2AtQnOzxlg6rNGICPia6Q/640?wx_fmt=jpeg)

3.
LEOSAM's HelloWorld 新世界 SDXL

“HelloWorld”一个全新的逼真的SDXL基础模型系列，拥有极高的
肖像的真实感和电影般的质量。用作者的原话说就是：

“
由于SDXL的信息量和文本理解能力远远优于SD1.5，HelloWorld是一个旨在逼真描绘所有事物的基本模型，或者换句话说，我希望使用HelloWorld逐步构建一个虚拟摄影世界
”

需要在prompt上写上“
leogirl”进行模型触发
。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpEwtlNNPkS8kOMTmMRtM5zic2svtj97zWRr5zDDMcjNZDy9sGv0iaokrA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpjgYcKqsDfwZZuSI3oxfsoGLccsx2RzBiauOxtDILpSYX6CIoG0ibzYiaQ/640?wx_fmt=jpeg)

4.
DynaVision XL

3D特化模型，对于
风格化3D模型输出表现极佳，如皮克斯、梦工厂、迪士尼等等。比较有特点的是对于动物的处理也很好。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpXehEC3iaOazRd01vfhH2H3IJ1DZf6925ibuL76mLfy8P6ps8UJpsXOPg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hphIvwb7EcZVIQ1hps94nZicmntd6asF5My2xw3PQicYgvY8TuKsKibTrgA/640?wx_fmt=jpeg)

5.
Microsoft Design SDXL

很少会见到针对UI领域特化的SD大模型，
Microsoft Design SDXL是国人针对3D UI图标专门训练的模型，偏微软风格，弥散的色彩。

虽然整体风格泛化能力目前较为单一，但是出图质量较高，且填补了这个领域的空白。依然推荐。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpictT2p6xtqHsFuPQfkVIJTW40zLxE9empUzM0I2GdGJfbBohHypicv8Q/640?wx_fmt=jpeg)

LoRA

讲道理现在SDXL的LoRA生态真的还挺不完善的，两个SD1.5生态的顶流神中神：
Detail Tweaker LoRA（细节调整）和epi_noiseoffset（增强光影）没有一个做了SDXL生态适配的。此处只能推荐了3个偏风格化的LoRA，也实属无奈之举，功能化的LoRA我自己测了十几个，没一个能用的，还是得等大哥回归。

1.
Juggernaut Cinematic XL LoRA

电影LoRA，旨在为图片增加电影质感的光照、对比、色彩、皮肤质感等等。我自己测了几十张图，整体审美很棒。

还在早期阶段，刚推出1.0版本，后续可以持续关注。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpMuWicpayyIBHPiaVKHCVPEAMFk9yUcM4Tl3xRywEAg3eV4CUYXzNOj2A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpubzoia1BHqTXXxUNiau2Xw8iaauphhs8J2ibgQKF8YWjSGTRwJYF0Vb0jw/640?wx_fmt=jpeg)

2.
InkPunk XL LoRA

墨水朋克。一个很有意思的艺术风格，前卫+复古。

出来的场景和画风很有特点，我个人挺喜欢的，有视觉识别度。最好的使用方式是Prompt开头加上“
inkpunk style illustration”，然后用LoRA权重作为结尾。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpmJsicgNBo6XyCcQAJufImibpYE4baQmQNGPQFJYfj57nV6FuIYLjPw5w/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpAdf0rxWWIuN4VhDVNJIzjITSotyPjI4EHylK6ON1spzUsxZDemmzAQ/640?wx_fmt=jpeg)

3.
Voxel XL
LoRA

我很喜欢的体素风格，6年前我第一次学C4D的时候，一个建模就是体素小人哈哈。《我的世界》就是这种风格的。

能把整个世界都变成一个一个小方块，很有意思。

并且，体素风格+Pika有奇效。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpLcGaGIBuN4XibdROe04rD7OTRpRfFpOL0lhjWvSJPkGJjycujamNrJg/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hp7M1jUNM9cLiaNuCfAy4yicGmC0bPGDJFkjicPSOcAicK7aWWUQErH1WGbQ/640?wx_fmt=jpeg)

这些，就是这一期的SDXL大模型推荐了，5个大模型，3个LoRA。

对着我
公众号
私信
“SDXL模型”，
就有所有模型的整合包下载了。

不过有一说一，SDXL的硬件要求确实太高，不一定大家都跑得动。所以我在仙宫云上也部署了一个我搭好的有这些模型和各种插件齐全的SDXL镜像。
网址在此：

https://www.xiangongyun.com/register/V76GG5

在部署时后，在社区镜像里面搜“卡兹克”就有了。实在不会用的去看我以前的这篇文章：
你奶奶都会的云端SD部署教程 - 白嫖4090、无需代码、一键启动

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoyjZn7n0XDPYCL7R7g22hpibCf9Xz6vtugBIKzjv169SZAvxibjEXBNMupAFo53ykqCqaYLs2NpCSw/640?wx_fmt=png)

最后我想说一句，AI绘图三足鼎立的势态基本已经成型了。

拥有极强审美和泛化能力的Midjourney，拥有最强语义理解能力和多模态能力的Dalle3，拥有最强控制能力和
蓬勃生态的
Stable Diffusion。

这三者，至少未来一年，都是三足鼎立，都是不同的用户群，不同的擅长方向。

他们完全是可以互补的，都可以为我所用，不是谁就必须要干掉谁，谁一下就干死了谁。微信干死了QQ吗？京东干死了淘宝吗？抖音干死了快手吗？

拥有一颗炙热的心，保持一个包容的心态。

对世界永远充满好奇。

或许会更好。

⭐～感
恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
