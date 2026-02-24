---
title: "Wan2.2-Animate又火了，5分钟让抠脚大汉秒变高冷女神。"
发布日期: 2025-10-30
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647676062&idx=1&sn=e0580fe50738aa90778f9e1b02070d49&chksm=f19d8fd270d947a221d5344ccdef141a9dabcd7ece2d4031e5216aa5dc8d48b00c98f20b81d8"
---

## 摘要

**1) 一句话总结**
阿里开源的视频生成模型 Wan2.2 Animate 可通过单张照片和参考视频实现高精度的角色替换与动作模仿，大幅降低了动捕与动画制作成本。

**2) 核心要点**
*   **核心功能**：仅需一张人物照片和一段参考视频，即可生成表情和动作自然复刻的换脸/换人视频。
*   **开源与部署**：模型已在 GitHub 完全开源（Wan-Video/Wan2.2），支持 ComfyUI，允许企业、剧组进行私有化部署。
*   **在线体验**：可通过通义万相官网“数字人”板块使用，支持“动作模仿”（保留原图背景）和“角色替换”（保留视频背景）两种模式。
*   **进阶工作流**：结合海螺、剪映等工具可实现声线同步替换；结合即梦等生图工具生成同款背景，可实现无缝纯换脸；结合 Wan2.1-Vace 可实现保持角色一致性的背景替换与实拍合成（VFX）。
*   **行业价值**：替代昂贵的专业动捕设备与专业动画师工作，为独立动画师、影视二创、数字替身及虚拟演员等领域提供低成本解决方案。
*   **竞品对比**：与 Runway、Viggle 等具备类似功能的模型相比，Wan2.2 Animate 的核心优势在于开源。

**3) 风险与不足**
*   **性能限制**：目前模型尚不能做到实时输出。
*   **生成瑕疵**：当视频中手部动作较多时，手指部位极易出现崩坏（变形）问题。
*   **滥用风险**：技术可能被用于网恋诈骗，或生成公众人物的逼真虚假视频（Deepfake），从而破坏现实社会的信任基石。

## 正文

最近，一个视频在推上传疯了。

一张美女照片，加上一条自己录制的视频，就能生成一张极其自然的换脸视频，表情和动作复刻的都很好。

而它用到的，就是阿里家的开源模型，Wan2.2 Animate。

其实Wan2.2 Animate一个月前杠发布的时候就火过一波，不知道你们对这个宅男变身女主播的视频眼熟不，当时我刷到了n次。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMAIwdRNQT3yLQeTewNUy6WEOk4u9JOmicIWywet1WM8JEjqIC3NsPuibRg/640?wx_fmt=png&from=appmsg)

然后你会发现，这次再火起来，流量密码依然没变。

搞颜色还是第一生产力。。。

但你们都知道，一个模型，它能搞颜色，不代表它只能搞颜色。

相反，很可能意味着它上限很高。。。

毕竟在座的各位都是老司机，阅历惊人，出来的效果如果哪里不自然，大概率一眼就看得出来。

至于效果，直接给大家看看，我用我自己的视频加上不同角色的图片，做出来的效果。

更复杂的表情，它也能复刻。

由于我自己确实是个不爱拍照的I人，表情没那么丰富，这里借用听泉老师代为出镜一下。

再加上一个美女。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMABS4tCRGR2Pds3J9TmeyrBIrmaxbLJ9A7rHMgzDztJUgufJnKBH7D7Q/640?wx_fmt=jpeg&from=appmsg)

出来的效果是这样的。表情模仿确实很到位，就是感觉高冷美女一下子变成东北银了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMAbum3D8aguTyGOaB9BjaqkwAAogytuBZswXA2QE8CvhUPPq7BsvNaoA/640?wx_fmt=gif&from=appmsg)

想得到更逼真的效果呢，还可以变声线。

直接做一条声音来替换就行，海螺+剪映就可以实现。

这样就能同时替换形象和声音了。

我用海螺做了声音，出来的效果是这样的。

你也很难想象这个视频的背后是一个我这样的糙老爷们对不对。

所以，不多说什么了，朋友们，网恋有风险，奔现需谨慎。。。

万幸的是，现在的Wan2.2 Animate
还不能做到实时输出，否则你想一下，假设以后郭老师，良子这些人也能当颜值主播开直播了，那会是一个怎样的世界。。。

当然了，类似于这种在违法边缘疯狂大鹏展翅的事情，我不会干，而且我也，绝对绝对，不希望任何人这么干。

不过话说回来，如果你的诉求就只是想给自己整一些小哥哥小姐姐的舞蹈视频看，用它还是很方便的。

也可以拉一个你喜欢的角色来复刻跳舞，比mmd方便多了。

动作表情啥的都挺到位的，但也有个问题，就是，一旦手部动作多了，手指还是很容易崩坏。

这个问题目前比较无解，很难顶。

除了跳舞之外，还可以做一些影视二创。

比如，让赵本山出演《了不起的盖茨比》，还原小李子经典镜头。

Welcome to 乡村大舞台，有梦你就来。

还有这个经典的梗，接着奏乐接着舞，可以直接换了一个人来演。

当然，我推荐这个模型的原因不只是因为效果好。

类似的东西去年就有了，Runway，Viggle，都能实现。

但问题是，这些模型都不开源。

像Wan2.2 Animate
这样一直走在开源路上的，已经不多了。。。

想玩这个模型，最简单的方法就是去通义万相官网，网址在这里：

https://tongyi.aliyun.com/wan/explore

进去之后在底部这里，找到数字人。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMAxmkHFicpD5JWWfickqgjfzWDXGcDgQehJ3fIQI0DzFibVZ2HW8qkicKL8g/640?wx_fmt=png&from=appmsg)

然后选择角色替换或者动作模仿，选择专业模式输出，再上传参考图和参考视频，就OK了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMArR27OWNmckIN89s6MU8CQ7t5Re480QZVyS4axK7MtUWd1jyx33MIqw/640?wx_fmt=png&from=appmsg)

简单说一下动作模仿和角色替换的区别。

假设我们现在有一张参考图A，主体为A，背景为A，一个参考视频B，主体为B，背景为B。

动作模仿就是，主体A在背景A里，做着主体B的动作。

也就是让参考图动起来，模仿视频中的动作和表情。

角色替换则是，主体A在背景B里，做主体B的动作。

就是保留原视频的背景环境，用参考图中的角色替换视频中的角色。

这里面还有一个小技巧，就是，如果想要达到开头case那种只换脸不换背景的效果，可以多加一个流程：在视频中截一帧，用这一帧图和角色图，在seedream或者nano banana上，生成一张和视频中背景完全一致的图，把这张图作为生成视频的参考图。

举个例子，这张拼图的左边，是我从视频里截的一帧，右边是我生成的用于替换我自己的角色图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMAAyh1Ed0QDmuQAuoSeNFwI0H3HxWiamVaptg8ulHS9N7jVgYd9wk8X3Q/640?wx_fmt=jpeg&from=appmsg)

然后我用即梦，生成了一张和视频中背景一致的图，长这样。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMA7DfwNuYKgia4AzdyNhrTuwIocgwWRF6zEVGsDoIFO7rRdQhbRo9z1vQ/640?wx_fmt=jpeg&from=appmsg)

最后把这张图放进去跑case，出来的就是一张，和原背景一模一样的换脸视频了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMAKvoQbl7ms6C1flG4Qj5E256hx3eIticnPH6XLGhd6iaxBjGCz9qCgj4Q/640?wx_fmt=png&from=appmsg)

有了这些输入，你基本上就可以愉快地开始玩耍了。

如果你想进行本地部署的话，
Wan2.2 Animate也完全开源了：

https://github.com/Wan-Video/Wan2.2

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfGqXJOaPRtwy6f2cECjMA2wn6oYKsqQ3LMxIYXh4icc6YKfK8gLpBmbJFSTGtseIWAOrmphEibgIg/640?wx_fmt=png&from=appmsg)

目前也支持了ComfyUI。

从技术的角度看，Wan2.2 Animate的意义，绝对是积极的。

它把过去需要昂贵动捕设备、专业动画师才能实现的表情和动作捕捉，变成了一个普通人点几下鼠标就能完成的事情。

而且，是开源的。

这也意味着，真的可以进入到企业、剧组里，进行私有化部署，来做很多的实际效果。

这也意味着很多独立动画师，可以用极低的成本，让自己的角色活起来。

更意味着电影制作，可以在特效、数字替身、甚至虚拟演员这些领域，打开全新的想象空间。

要知道，专业动捕真的很贵的。。。

而且，除了用
Wan2.2 Animate来去做角色替换之外，还有一些其他的流程，也是很好玩的。

比如，我的好基友
@GongWangG
，在组里用
Wan2.1-Vace，玩的实验小demo，
Wan2.2 Animate不是做角色替换嘛，但用
Wan2.1-Vace
，也可以用来保持角色一致性，但更改掉整个背景做实拍合成VFX。

这种流程，也是非常酷的。

未来我们也许能看到已经逝去的演员，在新电影里“复活”，用AI完美复刻他们的音容笑貌和表演风格，也许也能看到很多经典的场景被复刻出现，而我们就在其中畅游。

这在技术上，已经不再是科幻。

它降低了创作的门槛，解放了生产力。

但是。

凡事，就怕这个但是。

这些技术，同样可以，毫不费力地，割开我们现实世界的信任基石。

就说一个最实际的。

你在网上看到一段视频，某个公众人物，说着极其出格的话，做着极其不齿的事，视频看起来天衣无缝，没有任何破绽，你信不信？

所以我说，我之前还犹豫了一下，要不要写这篇文章。

但想了想，最后还是决定写出来了。

我们理应看见它的好，也看见它的坏。

技术永远是中立的。

它就像火，可以取暖，也可以焚城。

但真正重要的。

是那群握着火把的人。

我相信，我们还是一群。

用火取暖的人。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
