---
title: "AI绘图傻瓜指南 - 5分钟教你做出绝美的AI二维码"
发布日期: 2023-06-29
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658826&idx=1&sn=3db82b718b7fe1a361067ba429868332&chksm=f15ce614f5a480547d6a54fa03dd1cc7eed8f45a3dbc0ef8c2e112843e26bad4028a6ebb23b7"
---

## 摘要

**1) 一句话总结**
本文详细介绍了如何利用草料二维码生成基础码，并结合Stable Diffusion与双层ControlNet模型，制作兼具艺术性与高识别率的AI二维码。

**2) 关键要点**
*   **基础码生成**：使用草料二维码（cli.im）生成基础码，建议参数为容错率30%，尺寸500*500px。
*   **提升识别率技巧**：在二维码美化设置中，将“码边距”改为4个色块以扩大白色边距，可显著提升最终的扫码成功率。
*   **SD基础参数**：大模型可使用GhostMIX等，建议迭代步数（Steps）设为15，采样方法选择DPM++ 2M Karras，图像大小设为768*768。
*   **模型路径**：ControlNet模型需放置于 `sd-webui-aki-v4\extensions\sd-webui-controlnet\models` 目录下。
*   **第一层ControlNet（重新着色）**：预处理器设为“空”，模型选择 `control_vlp_sd15_brightness`，权重0.3，介入时机0，终止时机0.2。
*   **第二层ControlNet（生成图像）**：预处理器选择 `inpaint_global_harmonious`，模型选择 `control_vlp_sd15_qrcode`，权重1.1~1.3，介入时机0.15，终止时机1。
*   **成功率**：使用上述固定步骤和参数，无需过度抽卡，生成成功率约为60%~70%。

**3) 风险/缺口**
*   **过度设计风险**：如果二维码做得过于艺术化，会导致用户意识不到这是可以扫描的二维码，从而降低实际扫码率，偏离其核心作用。

## 正文

事情是这样的。

粉丝看到一个很炫酷的二维码，在另一个群里问了一句，有没有教程，然后对方说星球有，加星球就能看。。emmm

这个东西前段时间我正好研究过，这不巧了。

于是我就来写一篇关于AI炫酷二维码的喂饭教程。

实现的效果大概是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrD5By2YyoOBJdfibTbvDEXaFnlff4OnicBpkWBic82PDYc6LtbXcHGqO0B2Yk17yYsAGUK8zI5YgVjA/640?wx_fmt=png)

还有这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrD5By2YyoOBJdfibTbvDEXaH3TjXZueEJ6ZNUcQ4sgnp20r7rrr2wZ2icjBm0XpTeIBibgZmSsqfZsg/640?wx_fmt=png)

思路和做法简单来说，就是用草料生成一个二维码，然后用
S
tableDiffusion+ControlNET进行定点重绘。没用HG上封装好的那种是因为没法用自己的模型和LoRA，实在太丑了。。。

步骤和参数已经调好了，不需要太玄学的抽卡，成功率60~70%左右。

话不多说，直接开始。

首先我们先去草料上生成一个二维码，网址在此：

https://cli.im/

按你自己的需求生成一个什么样的二维码，教程案例就是给我自己的公众号做。

这里我说一点能让二维码更容易被识别的小技巧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1Xjic96IgZhO48PJ84Sudz0J4KmsxiaDCMcQjYZugtcHFRicLovC5BZWZxkw/640?wx_fmt=png)

这块的容错改成30%，尺寸改到500*500px。

然后重点的来了。

点进去二维码美化，把码边距改成4个色块，你会发现二维码的白色边距变大了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1XjQNUHrsyLvLaQaficOZHwCatoRocVj5ibE9uQJ70hCkCnS1Y0VRjiae4Rw/640?wx_fmt=png)

这个小操作，能提升很多最后扫码成功率。你们也可以日常中也可以回想一下，有时候离得太近了，二维码扫不出来，但是把手机拉远，是不是就行了？一个道理。

想要二维码变好看不用这个大正方形的，也可以自己去设置里面改，比如我就生成了圆形的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1XjOn0XI2yZJev2roU23FguG1GWx67q9AgbtsCGpwKSrcRYGn0ibF33msA/640?wx_fmt=png)

OK，二维码准备完毕，
接下来我们需要下载两个SD的ControlNET模型，我已经打包好了，关注我，后台私信QR就自动发你了。

如果不懂SD和Control的，请去看我之前的两篇教程，虽然写的有点早，但是一个样。

AI绘图傻瓜指南 - 5分钟带你生成你的专属AI妹子

AI绘图傻瓜指南 - 5分钟教你用ControlNET让妹子摆出你想要的pose

ControlNET模型下载下来目前基本都是放在这个路径下：

sd-webui-aki-v4\extensions\sd-webui-controlnet\models

打开我们的SD。

正常选择我们的模型输入我们的咒语，模型我直接就用的我挺喜欢的GhostMIX。

这里有几个关键参数注意以下：

迭代步数 (Steps)设置到15，采样选择DPM++ 2M Karras，图像大小设置到768*768。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1XjE5HbhXVc4tXMpCD13veNX7DLZE2OC7ZQ53j8StVFGr8UCC72oBWHGg/640?wx_fmt=png)

设置好以后，我们打开我们的Control，把二维码传上去，然后我们需要用到
两层Control
去控制，参数我已经调好，照抄就行。

第一个
Control，允许SD重新着色，
用以下参数：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1XjB1KEbGH14jugiakick4y50lrXAgNUjDic6cKtoIia4fia8IToozxV712pjQ/640?wx_fmt=png)

预处理器：空

模型：
control_vlp_sd15_brightness

权重：0.3

介入时机：0

终止时机：0.2

-

第二个Control，生成图像，用以下参数：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1XjCEtdXPFDHOlGMxnsKuLibGiauQv2e6AiaaHpI8pviaVgmsic0ceoF5NMNKg/640?wx_fmt=png)

预处理器：inpaint_global_harmonious

模型：control_vlp_sd15_qrcode

权重：1.1~1.3

介入时机：0.15

终止时机：1

OK，一切准备就绪，我们直接开跑一张。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1Xj0fryMDiaC1GmZ0YiaWwMibNNAL5Iia2KtTa2QCDHxGPyOgzSYT12GdcJEg/640?wx_fmt=png)

扫扫试试。一把成~

你们也可以去做自己喜欢的二维码~在这个新奇的年代，这种二维码还是很有趣的，至少很吸睛。
但是回到实际，AI二维码的实际应用场景，除了好玩、新奇，我认为千万不要偏离了他最核心的作用 -
提示用户这是个二维码，这是可以扫的
，千万不要做的过于艺术，让人都意识不到这是个二维码，反而降低了扫码率，那就有点得不偿失了。
希望大家都能做出自己喜欢的炫酷二维码~
⭐，
感恩。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr7w3MkqYqtYhW4RMjpx1XjFd6Y4Ib9CsmDwteM9rgk30KnSSq2EfWDSXibVX3csKYiasV18TRvpjAQ/640?wx_fmt=png)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
