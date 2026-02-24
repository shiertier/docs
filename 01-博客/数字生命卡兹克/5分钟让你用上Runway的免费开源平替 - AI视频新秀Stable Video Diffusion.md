---
title: "5分钟让你用上Runway的免费开源平替 - AI视频新秀Stable Video Diffusion"
发布日期: 2023-11-27
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660564&idx=1&sn=9cb7c469730c0b9aa9a5750414f30115&chksm=f1380eb3677b7517175e1a977fe33d8f40c716edab96c6342cf6a817ff3d256be7118b9398dc"
---

## 摘要

**1) 一句话总结**
Stability AI 开源了免费的 AI 视频生成大模型 Stable Video Diffusion (SVD)，用户可通过云算力平台低成本快速部署并生成视频。

**2) 关键要点**
* **模型发布**：Stability AI 开源了 AI 视频大模型 Stable Video Diffusion (SVD)，性能可对标 Runway 和 PIKA，且免费开源。
* **硬件门槛**：SVD 本地部署的硬件要求较高，起步需要 20G 显存。
* **云端部署方案**：可通过“仙宫云”平台租用 4090 显卡，并使用社区镜像（镜像使用费为 0.2元/小时）实现免本地显卡的云端部署。
* **操作界面**：云端部署仅需数秒，提供可视化的 WebUI 界面，支持拖拽图片一键生成视频。
* **输入限制**：上传用于生成视频的图片尺寸必须严格为 1024*576。
* **生成效率**：单次生成一段 4 秒钟的视频大约需要 70 秒。
* **官方动态**：Stability AI 即将推出官方在线 AI 视频生成工具，目前已开放排队申请（stability.ai/contact）。

**3) 风险与不足**
* 图像尺寸存在严格限制。
* 目前不支持摄像机运动控制。
* 视频生成的可控性较差。
* 生成视频的清晰度较差。

## 正文

前几天，AI届开源先锋，Stability终于对视频下手了。

他们在开源了AI绘图大模型（大名鼎鼎的Stable Diffusion）和AI文本大模型（Stable LM）之后，终于集齐了自己的全部多模态，开源了AI视频大模型Stable Video Diffusion

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeEox5q6OM31PcfpOJSf6FYhWClETUhicPFZBhPicJGdQOoe9Hia54jzoOjw/640?wx_fmt=png&from=appmsg)

效果还非常离谱。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeEGmHGkdmCVjyRIowAgwyYVJqVbfibNbc2lkuSwFdSRXibereTybD2yc0w/640?wx_fmt=gif&from=appmsg)

很强，非常强，甚至在很多方面，可以直接对标Runway和PIKA。

重要的是，他不要钱啊！！！

但是其性能超高的要求，直接把大部分人拒之门外。

当然也包括我（笑）。

毕竟，不仅要各种部署，还要20G显存起步的玩意，真不是普通人能玩的起。。。

所以我一直在等，等那种有手就行，还不需要显卡可以上云的项目，再安利给大家。

直到我在老朋友∶仙宫云上看到有个大佬做了这么一个镜像

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeE35uQiaoHoONQNYiangWwjzamdkGaQJMKUnriaFUJYq7t66jMTiawBwVG0w/640?wx_fmt=png&from=appmsg)

春天来了~

打开仙宫云：

https://www.xiangongyun.com/register/V76GG5

正常去租一张4090的卡，然后在社区镜像这块，搜索SVG。选择第一个，2毛钱1小时的这个。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeEEAicLswDLZz0T66lP4vwkrQibu7e8S9kA4rIqSiaARB50sko4WMXW59WQ/640?wx_fmt=jpeg&from=appmsg)

虽然作者要收费，但是这价格，相比Runway的使用成本，还是低了不少。

然后直接部署。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeElibtnEjzMTdleGuzZhSATic4MIiaDxeNe6R31ObX8vKdUTARrkooa2OBA/640?wx_fmt=jpeg&from=appmsg)

大概几秒钟后，就部署好了，可以直接点开右边的WebUI那个按钮，你就可以看到SVG的页面了。

非常简单，直接把图拖到顶部，然后点击启动，下面就可以直接生成视频了。需要注意的事，图片只能支持1024*576的尺寸，所以一定要只扔这个尺寸的图进来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeE4BMUaCoHIkSMgYq56jX0RdicGjRfSGBQnLeicPUpwfwmYAqYZSChdiasA/640?wx_fmt=png&from=appmsg)

大概70s以后，你就可以得到你的4s的视频了~

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeEA0bOQTIeKV1ictiaY9PUuVIpXiblLwfl5M6Eibn8iaB6b7iaibLerp02CCq5w/640?wx_fmt=gif&from=appmsg)

比如我的这个火箭，极其轻易的就实现了RunwayGen2之前死活做不了的火箭升空的画面。

再放几个用SVD做的例子：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeEicLwdJS8ibkrgJtu4mjzIISwSf3Xh4sngGb0XeWgMozUpv5JfVD6O7nQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeE0jkh9pJNlX2YSdq3ywuEeJUeVE56mWVBicZsc9icndetxXWMGLGFYhyA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpbGfq4iaIBcCRGFc5D3jLeE9HMa4WSclPbpdxpfr6wMUg5Tibcoekdw0ffsM0ZKp5gOu4vzLoOabZg/640?wx_fmt=gif&from=appmsg)

但是SVD强归强，也不是万能的。

尺寸有限制，不支持摄像机运动，可控性较差，清晰度较差等等。

但是嘛，AI这玩意，你懂的。

能列出来的这些已经被前辈Runway解决的问题，那都不叫问题。

估计要不了两个月，就能看到翻天覆地的变化。

同时，stability自己也快出他们的在线AI视频生成工具了。可以去排队一下，地址：https://stability.ai/contact

希望大家都能愉快的玩起来~

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
