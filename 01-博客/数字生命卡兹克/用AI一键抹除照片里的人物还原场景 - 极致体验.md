---
title: "用AI一键抹除照片里的人物还原场景 - 极致体验"
发布日期: 2023-04-23
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658275&idx=1&sn=24f8f46671bc27c619698a0d64da526d&chksm=f1568e5a04eab48a43dd658a79513c83d4d6c23c9757924f84e085ac7747fac98ed4bd85ed6e"
---

## 摘要

**1) 一句话总结**
本文推荐了由 stability.ai 开发的 AI 图像处理工具 ClipDrop，重点介绍了其一键清除路人、移除背景、3D 打光及无损放大等功能，强调其极低的使用门槛与极致的用户体验。

**2) 核心要点**
*   **工具背景**：ClipDrop (https://clipdrop.co/) 由知名开源 AI 公司 stability.ai（Stable Diffusion 的开发商）推出。
*   **功能矩阵**：目前共开放 8 大图像处理工具，包括清除、移除背景、重染、无损放大、更换背景、去除文本等。
*   **Cleanup（清除）**：基于 Stable Diffusion 局部重绘原理，用户只需用画笔涂抹即可一键抹除照片中多余的人物或物体。
*   **Remove background（移除背景）**：提供极高精度的图像抠图与背景移除效果。
*   **Relight（重染）**：能够为 2D 照片进行 3D 补光，支持用户自定义添加光源并调整光的颜色和强度，增强立体感。
*   **Image upscaler（无损放大图像）**：一键提升模糊或低像素图片的清晰度与分辨率。
*   **产品定位**：相比于 SAM、SEEM 等操作复杂的图片分割模型，ClipDrop 专注于降低普通用户的使用门槛，主打“一键完成”的便捷体验。

**3) 风险/不足**
*   **网络限制**：在使用 Cleanup（清除）功能点击“Clean”处理时，需要使用网络代理（原文称“需要魔法”）。
*   **格式限制**：Relight（重染）功能目前仅支持正方形图片，非正方形图片在处理前需要先进行裁剪。

## 正文

马上五一了，大家估计都要出门玩。

但是今年五一人一定爆满，记得去年五一我去阿那亚玩的时候，基本空无一人，拍照贼爽，完全不用担心有奇怪的路人混入。

但是今年就不一样了。。。都疯了一样往外涌。。。

拍照就成了一个极其困难的事。。我就不信你们在景点里不拍照

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/newemoji/Yellowdog.png)

于是，我就想在五一之前，给大家安利一个工具，让大家随意拍照，他们乱入就乱入嘛，给他们抹了就是。

效果大概是这样子的:

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7MLIYIQiaBnnsy4VOd7ypJJXKUYWT8DVNJvibEsramnqB8iaibayKMSf0GQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7XhhcKEW9le14LgNQjianrXSYU8FMicibXUHUkq2GFMFQvUCbpdicHmj1aw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7lA2dfXUpbjseZfJBN0xQibne7R8vMsNTC8eb9qPbQutt1iaSr1nezV7g/640?wx_fmt=png)

这么好看的场景，乱入了一个人，不怕，咱们直接给她抹了嘛！

工具网址在此：https://clipdrop.co/

ClipDrop，一个非常AI的工具。集成了很多有趣的小功能，清除只是一种，还有一键抹水印，一键替换背景，一键无损放大图片等等，还能给2D图片打光。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7AEwIicwssuNhSBskzcDkbxSNmK7jONllXIlMKpQSia3kYO8BQaD88Pow/640?wx_fmt=png)

看一眼他们Logo下方的小字，by stability.ai。

stability.ai，我心中最伟大的AI公司，没有之一，啥都哐哐开源往外面干。Stable Diffusion的爹，最近又开源了大语言模型StableLM。

回到ClipDrop，他们现在开放了8大工具。Cleanup（清除），Remove background（移除背景），Relight（重染），lmage upscaler（无损放大图像），Stable Diffusion，Replace background（更换背景），Text remover（去除文本），Stable Diffusion reimagine。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7pkXxQiauyM1TPdlicTR8icC9yicwI2JvBeELIXREnlCOAqjQvMzy8jd5Qg/640?wx_fmt=png)

Stable Diffusion 一系列的就不聊了，简单介绍下Cleanup（清除），Remove background（移除背景），Relight（重染），lmage upscaler（无损放大图像）这四个功能。

一.cleanup（清除）

极其简单的页面，只有一个入口，上传照片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7prLAGD3jED7Aia2LjSB5RkWzNtDnESOXLVnwE5wSMo8CjOQE19D8qcw/640?wx_fmt=png)

你传上去照片之后，鼠标就会自动变为一个黄绿色的圆圈，你直接把你想抹除的东西涂上就好。比如这张照片，有几个碍眼的路人，很影响照片观感。直接涂上，然后点击Clean，那些碍眼的游客就消失啦。
（注意：Clean这步需要魔法）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7Pohrq85J1DmbvBnlpWicLSoVc7cf307vLYPWkpgTI3fKzpQfwSsZmKw/640?wx_fmt=png)

涂掉以后，效果是这样子的，基本看不出之前有人存在过。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7k5NIISqHy4zOcOFib3NsM8vtmiatww3qUGic14hYJmtmK1axBLsKibbWgQ/640?wx_fmt=jpeg)

原理其实也很简单，就是用的Stable Diffusion的局部重绘，但是架不住实在是太太太太方便了。

二.Remove background（移除背景）

这玩意其实国内已经有很多家做了，看似是很普通的功能，但是，我放几个例子，就知道他们扣的有多牛逼了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7PD2EhDQCw7udz8C4dNXEokoLiciaLfFeKFT8YZWAibUEKnP27YnTe5Ibw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7Mwz2JaO0prMLib3wF0VibAnAwicHm4rh0srLL9o8BaVM2ZsoibdWBeSNxw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7HribjvUyyJL7HCZ5RBcc0eEsLibWzaBicAibIlPXhYHJPiaLqxvIezU5MoA/640?wx_fmt=png)

这些东西设计师们可能会深有体会，目前最好的抠图工具，没有之一。

三.Relight（重燃）

一个挺有趣的小功能，但是非常有用，在日常拍照中，一定会有光照不足的场景，或者过了最佳光照时间点，拍出来的光不立体不好看了。总不可能有人会随身携带补光灯对吧。

那这玩意就派上用场了，
直接把2D照片进行3D补光
。比如这张图片，我觉得他光太暗，太扁平。我在补点光营造立体感。

我们把照片传上去以后（注，重燃目前只支持正方形图片，所以需要剪裁一下），点击New light，就可以加一张新光了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7OladtW3AgX6QcnbGib0n1v9V0Fw9FDYdQ8f4Qex5FLykjxYz8eGk6MQ/640?wx_fmt=png)

这时候，你就能发现，人物边缘出现了轮廓光，直接立体了起来。你可以自己去改光的颜色和强度，极其方便。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7FxpVibsqZdYx2X4NcZlviaQsZI6aOmD8AqvCI2oUZfw1BEMPgsQAicibaw/640?wx_fmt=png)

四.lmage upscaler（无损放大图像）

非常方便的小功能，平时有的时候发现图有点糊，或者像素不够，这个小工具直接就能把这事干了，左边是放大之前，右边是放大后。可以对比一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2vqtLBjAfECK7FHUYAYO7ibBIiacynb4znDeWzRibVmCKFVLCvFXHtB9udvGefbAIdwstT2EWfic1WA/640?wx_fmt=png)

最后，虽然最近各种
SAM、
SEEM等等图片分割模型大火，但是普通人用不了，或者特别特别难用，那还是不行嘛。
在很多时候，降低门槛，体验才是王道。ClipDrop牛逼就牛逼在，照顾绝大多数的普通用户，用户体验做到了极致，一键就完事。

这才是正道嘛。

以上，祝大家五一节快乐~玩的开心~

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
