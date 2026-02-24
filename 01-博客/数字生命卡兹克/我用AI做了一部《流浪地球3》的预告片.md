---
title: "我用AI做了一部《流浪地球3》的预告片..."
发布日期: 2023-08-03
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659108&idx=1&sn=9fcd0e59b59786358869fcbebe15d60d&chksm=f1473c0b512694fa5e4671974f2d76f22db8df935f3035e2d048dc6c266b2919053a51f6f1ce"
---

## 摘要

**1) 一句话总结**
作者利用MidJourney和Gen2，在5个晚上内通过“海量生成+精选剪辑”的工作流，高效制作了一部《流浪地球3》的AI概念预告片。

**2) 关键要点**
*   **制作耗时**：利用下班后的5个晚上完成，相比以往使用Blender建模渲染（需1个多月）大幅提升了制作效率。
*   **核心工具与产出**：使用MidJourney生成了693张静态图，使用Gen2生成了185个4秒视频镜头，最终精选出60个镜头进行剪辑。
*   **MidJourney生图策略**：采用“前缀（描述场景/人物/镜头）+ 固定后缀”的提示词公式，固定后缀包含硬科幻、低饱和度、8K、比例21:9等参数，以确保分镜风格统一。
*   **Gen2视频生成策略**：直接上传图片生成视频，不添加任何文本提示词（添加文字会导致画面面目全非）。
*   **Gen2增强（Upscale）设置**：生成人脸视频时需关闭Upscale，生成场景视频时开启Upscale效果更好。
*   **创作逻辑转变**：放弃了预先手绘的50多个分镜线稿和故事线，改为通过生成海量镜头素材进行后期挑选和拼凑。

**3) 风险/不足（原文明确提及）**
*   **Gen2稳定性一般**：生成的180多个4秒镜头中，仅有2个能完整使用4秒，其余大部分只能使用前1～2秒的画面。
*   **AI生成可控性差**：AI无法精准按照作者预期的手绘分镜线稿和预设故事线进行生成。
*   **面部畸变风险**：在Gen2中对人脸视频开启增强（Upscale）功能，会导致人物面部发生巨大变动。

## 正文

很久以前，就想做一段自己的AI视频。

直到前段时间的《芭比海默》，给了我很大的启发。

MidJourney+Gen2的流程，终于可以实现我的想法了。

于是。

我花了5个晚上，用
MidJourney生成了693张图，用Gen2生成了185个镜头，最后选出来了60个镜头，剪辑成了我最喜欢的。

《流浪地球3》的预告片。

工作流程其实很简单。

MidJo
urney
生图，Gen2生成4秒的视频。

以下是我用
MidJo
urney生成的部分分镜图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrp9cYmRM6fibgML4JKNwSoHRUvNUwqSFvHhXV1mfr3ORicsYB5cicSy3gmYB4ZhQQRCNjfneyMSRopg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrp9cYmRM6fibgML4JKNwSoHKxHDeZhJ9BMlpDcAwoWibIjWNRzYiakcAut1ic8nXeeYdcOOaBrtkBBaA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrp9cYmRM6fibgML4JKNwSoHG1lk5GjwXgibROxOUA2IlQcKfEJac1RqVwjBXbDlPJH26zE4ibUtVlIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrp9cYmRM6fibgML4JKNwSoH3qBicenufxZsBI7ic4EH4KuwYLLqHjl4BibHiay3wX7KQcLBteyBpVNTQQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrp9cYmRM6fibgML4JKNwSoHw62jq5KIrI69VSVH2Kozn7sxmlJL822OibrOGDtOVO0lwNfTLBEiaN5w/640?wx_fmt=jpeg)

这些图片，为了分镜风格一致，所以我固定好了后缀提示词。
这块部分
词组有借鉴《
创世纪》。

____ , not central composition, Science fiction movie: The Wandering Earth, in the style of detailed crowd scenes, hard sci-fi style, futuristic incredible scene, very imaginative, indoor scenes, movie scene, dynamic shot, low saturation, light white and
teal，extreme detail, 8K --ar 21:9 --v 5.2

在前缀空白处描写场景或人物或镜头，后缀一致，这样可以保证画面风格的统一。

扔到Gen2里生成视频反而是最简单的一步。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrp9cYmRM6fibgML4JKNwSoHKXdxRh0UMBgFISTrplTQosrFWAUGmcSIvPtuic4GOwk7tobL8IW70GQ/640?wx_fmt=png)

直接把图片上传，生成。

不要写任何提示词，只要写任何一句话，基本都会面目全非。

说实话Gen2现在的稳定性还是一般，roll了180多个镜头，4秒全能用的一共只有2个。其他的基本都只能用前1～2秒。

但是对于剪辑至少是够了。

而且我也遇到了跟《创世纪》作者同样的问题。

用Gen2生成人脸视频的时候，一定不要开增强Upscale，要不然面部会变动巨大。生成场景的时候，开
增强
Upscal
e效果会更好。

剩下的也没啥技术含量了，roll就行了，最后挑选镜头，按心中的故事或主题剪辑。

话说本来我是自己手绘了50个左右的分镜线稿，还写好了故事线，埋了彩蛋，结果发现AI根本不会按我的预期效果去弄。

最后管他呢，量大管饱，生成几百个镜头，总能拼的。

这次《流浪地球3》预告片的工作流，对我来说是个很有意思的实验。

以前自己做视频，Blender建模渲染，1个多月的时间，现在下班后的5个晚上就搞定。

AI，真的是效率革命。

不知道Gen4的时候，会有什么样的光景。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
