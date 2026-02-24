---
title: "AI绘图傻瓜指南 - 5分钟教你用ControlNET让妹子摆出你想要的pose"
发布日期: 2023-03-11
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647657853&idx=1&sn=51752aa058de04d582ff2719f3fceace&chksm=f14e7557787ceeab74b963834503bf26a0cb45c29df2e2aeab8a42beac4d4b79cfc3ec5d476b"
---

## 摘要

**1) 一句话总结**
本文详细介绍了在Stable Diffusion中安装与使用ControlNET插件的完整流程，并通过解析五种常用模型，帮助用户实现对AI绘图姿势与画面细节的精准控制。

**2) 关键要点**
*   **核心功能**：ControlNET解决了AI绘图无法自定义姿势的痛点，可根据线稿、骨骼或参考图直接生成全新图像，实现自主可控。
*   **插件安装**：通过SD WebUI的“从网址安装”功能输入GitHub链接进行在线安装。
*   **模型部署**：需将下载的专用模型文件放置于`\extensions\sd-webui-controlnet\models`目录下，并重启界面。
*   **参数设置**：显存小于8G需勾选“低显存优化”；预处理器（Preprocessor）必须与选择的模型（Model）名称严格对应。
*   **Canny与Hed模型**：两者均用于边缘检测提取线稿。Canny线条锐利，适合复原人物细节；Hed线条柔和，适合处理毛发或动物。
*   **Depth模型**：通过提取黑白深度图（越黑越远，越白越近）还原空间关系与结构，作者推荐使用MiDaS算法及真人/三维照片作为参考。
*   **M-LSD模型**：主要针对建筑设计，能高精度还原棱角分明的建筑结构。
*   **OpenPose模型**：通过生成骨骼图控制人物姿势，现已支持手部骨骼检测（有助于解决AI不会画手的问题），推荐使用真人照片作为参考。

**3) 风险/缺口**
*   **网络风险**：在线安装插件时需从GitHub下载，若未配置科学上网环境，大概率会导致安装卡住。
*   **参数风险**：ControlNET的权重（Weight）建议设为0.5~0.8，若设置过大（如设为1）极易导致画面崩坏。
*   **合规与伦理风险**：严禁将AI技术用于影响社会秩序、侵犯版权/肖像权或进行违法犯罪活动。

## 正文

相信上一期大家都会生成自己的专属AI妹子了，不知道大家玩的咋样

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/newemoji/Yellowdog.png)

上一期见：
AI绘图傻瓜指南 - 5分钟带你生成你的专属AI妹子

生成AI妹哪哪都好，但是我相信大家已经不满足于此了。在之前，一直有一个痛点是：没法自定义姿势。

即使你的提示词写的再精准，他也没办法完全按你的想法来，属于随缘抽奖，生成100张，总能抽到几个SSR。

而神级SD插件ControlNET的诞生，意味着抽卡游戏结束了，ControlNET补上了AIGC的最后一块拼图，自定义姿势，根据线稿、骨骼、其他图片直接生成全新的图，AI绘图正式
进入自主可控的世代
。

以下是我用ControlNET还原的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpvd1IN3DIJlggNgPqLKHGhI61X35BDvdicm1zXYClUsibwAmbmBp134yyeG5xWMDMcPiayrsrsTwJhA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpvd1IN3DIJlggNgPqLKHGhgYsDAu9HkRbwoRjdsOjic0ibFgQFn1txIrIicTmoUPQibZGn4k1ztnF4uQ/640?wx_fmt=png)

还原度相当离谱，这只是
Co
n
trol
NET的冰上一角。
我
也相当佩服ControlNET的作者，正在斯坦福读博的中国人，叫
张吕敏，真正的技术宅，和一个印度老哥一起干出这种神器，还直接开源，简直就是赛博菩萨，致敬！

话不多说，直接开始傻瓜式教程。

一. 安装ControlNET插件

首先大家肯定都已经完成了SD的本地化部署了，不会的见第一期，老规矩，我们先启动他。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKEexWUReM1N2TtktYn7aGQLJibicnn8RaA1XDYmibZ0Lcp8gX5dGE1AvjA/640?wx_fmt=png)

然后我们要开始在线安装ControlNET插件了，找到右上角的扩展，然后点击从网址安装，把这段网址输入到下方。

https://github.com/Mikubill/sd-webui-controlnet

（注：此处因为要从github上下载，所以一定要科学上网以后再点安装，要不然大概率卡住）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKeFtYchxQL5ibUI3sO2qlTY8LOVN3hmR0I7gXGCh6NTOefKSsAxqy8Dg/640?wx_fmt=png)

然后我们点击安装，过几十秒1分钟左右，就能看到这个提示，说明插件安装成功了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKMg2ibBkjPtqBRXiak2npxzibzVuGF0Uzib14myGIxY88mq3ltENVProy9g/640?wx_fmt=png)

但是别急，
ControlNET插件的本体我们安装成功了，但是我们还需要训练的模型，这里我也已经给大家整合好了傻瓜模型包，直接私信回复C就有了。
下载好解压后，就能看到这8个模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKP2jaPM79NGezmQ5yo9XGpSVrPbSdiansUsvUCoibXRCBwzGvnlyU7nGA/640?wx_fmt=png)

我们把模型放到你的SD目录\extensions\sd-webui-controlnet\models下

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKODohQdYZkXibVBMFKKRFkEdVzbhoAgoRpDDibxZlWI3oTSPeRd8r90qQ/640?wx_fmt=png)

OK，大功告成。我们直接应用并重启界面!

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGK1icAtzChwbgs18tIv4dO1xcQ7UEsqq4qz7RW1dboZhPXQjicuaEsrxTw/640?wx_fmt=png)

重启成功后，我们看到首页这块有ControlNET的模块，就说明安装成功啦！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKnJHZojNs56xo9Bv5DvyM4Exj6cfGb4BU7zOIXyx3DkziaLOfibDu7n0w/640?wx_fmt=png)

二. 生成AI图

老规矩，我们先还是正常写提示词，这里我直接给一组我自己最常用的赛博朋克妹子的Prompt

<lora:koreanDollLikeness_v15:0.6>, bbest quality, masterpiece,best quality,official art,extremely detailed CG unity 8k wallpaper,, (photorealistic:1.4), colorful, (Kpop idol), (aegyo sal:1),((puffy eyes)), full body,
(cyberpunk girl), (augmented reality:1), (neon lights), 1girl, blonde grey long hair,thick lips， blue contact lenses, hand on another's hip, silver cybernetic implants,long sleeves，black crop top, black leather jacket, purple metallic leggings, silver metallic boots,halo, earrings, pendant, wristband, armlet,
Negative prompt: paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot
Steps: 28, Sampler: DPM++ SDE Karras, CFG scale: 8, Seed: -1, Size: 512x768, Model hash: fc2511737a, Model: chilloutmix_NiPrunedFp32Fix, Denoising strength: 0.45, ENSD: 31337, Hires upscale: 1.75, Hires steps: 20, Hires upscaler: Latent (bicubic antialiased)

先跑一张。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKA6PxlqoZFCkuicrx62pia1aXEuJictmblM7Dej6dribS02wFSTc1fM1Xcw/640?wx_fmt=png)

OK，一切正常，没啥问题。这时候我们点开ControlNET模块。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKbYJcKLXtyQpTlllwenaOmQXb67GMcTv0M2D0YaDGlUtT26PAZdrsqw/640?wx_fmt=png)

简单给大家解释一下常用的功能，其他的都不需要管。

上面大大的偏【拖拽图像到此处】，就是拖一张参考图进去。
【
启用】这个很简单，勾上就是开启ControlNET让他生效。【低显存优化】，如果你的显卡显存小于8G就勾上。【权重】一般用0.5~0.8就行，如果你一定要一模一样的在往大了改，注意1尽量少用，容易出现崩坏的克苏鲁古神。

【预处理器】就是咱们刚才下载的那些模型，一会具体解释这些模型的区别，这里我们先选OpenPose，后面的模型一定要选跟预处理器对应的，比如预处理器我们选了OpenPose，后面就也是OpenPose命名；如果预处理器是Hed，后面也得是Hed，以此类推

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKia2zMeOut8MprD2M4oJiauboMZYwfp2L0ZsElcwDH7pybybw3Biceh9RA/640?wx_fmt=png)

OK，设置完毕，咱们直接把咱们鸡哥扔进去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGK2Mf5rNCN29yWAqTmT46vhlR1KESqFonhRLqwiaibNN1KftwsRiangp6iag/640?wx_fmt=png)

右上角开始生成！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGKRy4gibC19IQ3HhE5DGic3WrFDlnKqBnj6QiawfTmsWJZ6KwVZjv6wuSpQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo4suicmGrt4nD3ftKhpiaiaGK4cw8XkolIUzzfWwreAn72tgiagMZ6R66OWvdNH4DZzOUjEEpHRnseDQ/640?wx_fmt=png)

没啥毛病，基本一致，大家可以开动脑洞愉快的玩起来了~

三. 模
型区别

接下来稍微花一点篇幅讲一点ControlNET常用的5个模型的区别，大家在用的时候也可以针对性选择。

1.Canny

Canny模型主要就是把原图的边缘提取出来并生成线稿，然后通过线稿和提示词进行二次绘制。
这个模型适合复原人物，对细节的复原能力很强
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33F8Mia0chLqonAHbQqzspUPr5oK6Oa9vjod6JwrbM5Ex7zRGJAdiagYiaA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33NaW5N8SMtzK1JkQGiaTbh0iatRjIibeRc5ACuOIia1hLrSo7Bc95IIYp9Q/640?wx_fmt=png)

2.Depth（MiDaS和LeReS深度信息估算）

懂三维的朋友应该会非常熟悉，就是深度图，从图片中提取黑白两色，越黑则离镜头越远，越白则离镜头越近，
适合还原图片的空间关系和结构，尽量用真人照片或者三维照片做参考
。（注：Depth的两种算法MiDaS和LeReS，据说LeReS更牛逼一些，但是我用起来反而没有MiDaS好用。个人还是常用MiDaS）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33UvcUG3JueAqtq4frz6uhMOeeXtmA47aj6cL4fMUOOJvrASibFGXibAPA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33vzFVlI4WsWUhCXonaMUFrIichk4WyP6oHgF8Uzg624p4bechK5sKM0g/640?wx_fmt=png)

3.Hed

跟Canny基本相似，都是边缘检测提取线稿，唯一的不同是，Canny提取的线稿边更锐利，像铅笔画出来的，Hed的线稿边缘更柔和，像毛笔画出来的。
如果是做毛发或者动物之类的，Hed更合适一些
。这个没啥优劣，看个人喜好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33cVnUr4hSJU3vEyDVk0y1v1jic8icsqDDuqjdElUmfz3XxICvCJYL3prQ/640?wx_fmt=png)

4.M-LSD

主要针对建筑设计，对棱角分明的建筑有超高的还原甚至是直接输出效果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp9v2UBMCadDfYp9gUh6g339ozQHtf3WMCLBB3a2YUIQpxTNINvmQVCtnPgC8vibr5wziatelWia96SA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33rfX3W1icxnJOdx2h2TgCR8XiayoQicsPsZ98YJJPg0nLYkmjtKmBHo7VQ/640?wx_fmt=jpeg)

5.OpenPose

神中的神，生成骨骼图，摆脱提示词控制人物骨骼姿势，并且最近新出的OpenPose支持手部骨骼检测了，极大概率解决了AI一直不会画手的问题，
另外参考图片最好用照片，效果会最好
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33UCPsiarWUiauP3nGeGJ9vteg1fPK6TOyl3aD86ef6vM5sibrraCtwu6NQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33793eQEU6zvgazrFlEricGVWpNabAicVIu1KUib4xccMPXicEoGwApAYBdg/640?wx_fmt=png)

以上，就是我个人常用的5种模型啦，大家快乐的玩起来吧。

写在最后。

当前AI技术的迭代速度，甚至远超过了大多数人的学习速度，大多数人根本不理解世界即将遇到的变化，将会是如此的巨大，翻天覆地式的变革，我无法想象年底时，AI会迭代到什么样的恐怖的速度，仅仅是现在，我勉强跟上他的发展，已经耗尽了的全部精力，未来，不敢想象。

AI再怎么变化，但是我们也绝对不要用来做任何影响社会秩序、侵犯版权肖像权的事情，更不要用来违法犯罪！

以上，创作不易，有用的话请帮忙点个在看，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
