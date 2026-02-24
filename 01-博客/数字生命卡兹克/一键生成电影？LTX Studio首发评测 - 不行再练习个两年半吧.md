---
title: "一键生成电影？LTX Studio首发评测 - 不行再练习个两年半吧"
发布日期: 2024-04-17
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647662176&idx=1&sn=93c2124ff2627cf1ae03c983c4dd4691&chksm=f106e97be2a20f4e2a293b224e9cf4e72b4b723b1e1c4cb1d6f95c7d8ef213a25aeaff9ee520"
---

## 摘要

**1) 一句话总结**
LTX Studio是一款主打“一键生成电影”的AI视频工具，虽然提供了高度专业且复杂的故事板工作流，但受限于底层开源模型的低质量，实际成片效果和产品定位均表现不佳。

**2) 关键要点**
*   **产品定位**：官方定位为“下一代视觉叙事方式”，在Sora发布后借势营销，主打一键生成电影。
*   **剧本生成机制**：系统无法完全按照用户输入的原始大纲生成内容，而是强制对用户提供的一句话故事进行扩写或重写。
*   **工作流设计**：采用“场景-镜头”的故事板逻辑，用户可针对每个场景自定义地点、灯光、天气、配音及音效。
*   **镜头编辑功能**：分为跑图（Frame）、跑视频（Motion）和加声音（Sound）三个模块，支持局部重绘及类似Runway的运动控制（包含可简单建模的Orbit轨道镜头模式）。
*   **底层技术架构**：本质为开源工作流的集成，图像与视频生成依赖SD（Stable Diffusion）和SVD（Stable Video Diffusion），配音疑似调用11Labs API，音效采用类似剪映的搜索库逻辑。
*   **输出规格**：最终生成的视频分辨率较低，尺寸仅为928*522px。
*   **受众定位错位**：工作流设计过于复杂，对小白用户门槛过高；而核心模型质量太低，又无法满足专业创作者的需求。

**3) 风险与不足（原文明确提及）**
*   **宣传涉嫌夸大**：前期宣传存在过度包装，实际体验远未达到“一键生成电影”或“超越Sora”的水平。
*   **角色一致性极差**：尽管系统使用了特定人物LoRA、描述和服装预设，但实际生成的角色视觉一致性非常糟糕。
*   **指令遵循度低**：系统会擅自重写用户的故事大纲，无法精准执行创作者的原始意图。
*   **用户体验过载**：界面包含极其繁多的设置项和自定义参数，极易导致普通用户产生“信息过载”。
*   **模型质量上限低**：由于依赖SD和SVD等开源模型，生成的画面质量和运动效果较差（又丑又僵硬），与Runway、Dreamina等闭源模型存在明显差距。

## 正文

今年2月中旬，Sora爆了之后，把AI视频、AI电影，推上了空前的热度。

2月底，一个AI产品借着AI视频的热度，拿到了空前的关注。

这个产品叫LTX studio。

给自己的定位是：

The next generation of visual storytelling is here.（下一代视觉叙事方式）

宣传片，长这样：

然后被各大自媒体就吹爆了。

超越Sora、一键生成电影，什么牛鬼神蛇都出来了。

坦率的讲，看这个宣传片，我还是挺心动的，就跟前两天看Adobe那个PR的AI功能宣传片一个心情。但是内心其实还是有很多警惕的，毕竟...

AI的宣传诈骗，实在是太多了。。。

特别还是这种所谓的一键生成电影，怎么看怎么感觉是个坑。

左等右等，在等了一个多月之后，我的好朋友@吉川明静终于拿到了测试资格（我第一批申请的但是一直没有，这就很奇怪）。

我第一时间把号要来，然后开始玩了...

虽然预期很低，但...整体的产品设计、最终的效果呈现，可以说，比我预期的，还要低。

网址在此：https://app.ltx.studio/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTcx0mmmkIxS1NJIfawLjMsm4TkRanT48VvxO1aZEfWpT4Q2Hib5mK39A/640?wx_fmt=png&from=appmsg)

首页挺简单的，一个输入框，输入你大概的故事，再加一个内置的模板，还有过去所做的历史。

我自然的就掏出了我之前一直想做的一个故事大纲：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibToKoVibH7Dlfah8amad9aNdKU0eicB3ibMmg7sL1l5mEkrctx4NGXhPbUA/640?wx_fmt=png&from=appmsg)

一个关于友情和死亡的故事。

我把这个故事输入到了LTX里面，点了运行。

出来了一个弹窗。可以看到有一堆设置项还有两个预设的角色。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTdvE6XOPQfm18JlaalpqkcnOaict4GKRT6pLAUEZRG1fjLSvfXn7picSA/640?wx_fmt=jpeg)

项目设置那块大概率就是一个Prompt后缀模板啥的，为了做一些风格统一，视觉审美，里面就是不同的风格预设。

那两个角色我本来以为LTX studio是有什么黑科技能保证角色一致性，毕竟既然要做故事，那角色必须得一致嘛，所以我还挺期待的。

直到我看到后面，点开角色设置，发现：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibT6icbcIGhH80os3lcm146nwnCG3JIibZMqibicbImL8VfuayPtiaTAkesV2w/640?wx_fmt=png&from=appmsg)

= =

就是一些特定的人物lora+描述+衣服。。。。而且，效果说实话，也不咋地= =一致性，非常的差。。。

然后还有另一个问题是：它把我给的故事，给重写了，完全没按照我的故事来。

按照他们的现在的逻辑，只能给一句大概，比如：滑雪胜地的客人会体验到意想不到的浪漫和友谊。它就会给你扩写重写。

对，只能扩写或者重写，不能完全按照你的来。。。

所以我只能，换了一个故事：
未来，外星怪兽袭击地球，一个开着机甲的少年勇猛的打外星怪兽的故事。

然后，给我写成了这么一段故事：

在一个受到外星怪物威胁的世界里，小男孩亚历克斯找到了一台旧机甲，并与他的朋友米娅一起勇敢地战斗以保护他们的城市。他们的决心激励其他人加入战斗，导致一场高潮般的战斗，他们摧毁了外星母舰，赶走了怪物。这座城市庆祝他们的胜利，机甲象征着这个星球的希望。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTGMnoo7alFyQYNUZUx0VT9LcOSb2DcBz7pnsro4omMuBmkWblRaprYg/640?wx_fmt=png&from=appmsg)

扩的还挺多。

一切准备就绪，我们点那个明闪闪的Start。

然后，我就有点信息过载了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTZiaTlbA69UGvGUs0cWcDZuet4GibCwtldx9Fy0TI6PeCeE3ibPBt2sMtg/640?wx_fmt=png&from=appmsg)

说实话，我面对这个界面，尚有点信息过载，更别提普通用户。

这是完全的故事版的逻辑，每个场景是一场戏，每场戏里有几个故事版。

并且可自定义项非常非常的多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTp8nHCdD1K3CFal3pwjQmXToSfKAicNHhORr9nGib2Fib72fZtPy6TUllg/640?wx_fmt=png&from=appmsg)

在场景项中，可以修改地点、灯光、天气，还能重新改配音，甚至还能加音效。

但...

怎么说呢，那些场景项，其实就是Prompt，而且本身他们生成图其实上限很低，99.99%是拿SD微调的，配音那味大概率又是接的11Labs的API，至于音效。

他们直接接了一个库，是搜索逻辑，嗯，跟剪映一样。。。

再具体到场景下的每一个故事版，就是生图，有些prompt可以写，镜头给单独摘出来了，方便一些不懂镜头语言的人去快速生图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTpR2u1qbEwrILMPIv1vB24aR4XkBy3ttnsnCVz9GAXKlI6mibLmFOTyQ/640?wx_fmt=png&from=appmsg)

然后LTX在这个页面，给出来的其实都是静态图，每个静态图变成视频，都是要去生成视频的，你可以在每个故事版那，把每个故事版上面的生成视频挨个点一遍，也可以进每个故事版的详细页面，就是那个Shot editor按钮。

进来以后，我保证你，又会信息过载一次。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTJ1O5bHdVibicUuPfrroGicQnKXGyIC2gRYHVMgCZcSMphIRRsCIvy2bPg/640?wx_fmt=png&from=appmsg)

别慌，看着多，其实也还好。

分为三趴：Frame（跑图），Motion（跑视频），Sound（加声音）。

Frame那块就是正常的生成图片，或者上传一张图片，当然，也给你塞了一些基本的局部重绘的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTrjNHdoibKlIEqJkVUXTkGO1tiaBMK3DcRAKSsrFb2dW8ucu4h5nLMh4A/640?wx_fmt=png&from=appmsg)

Motion那趴就是正常的图生视频，用Frame的图，来跑一段视频，运动控制给了一些预设参数，反正跟Runway那些控制也差不太多。

唯一有意思的是Custom的镜头控制下，有个叫
Orbit
(轨道)的模式：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTVdV1jZibfoXgicU0YcHiauQic24eGz7GAiaETYKumbsNLCrmrN177nBSyKA/640?wx_fmt=png&from=appmsg)

能给这张图简单建个模，然后设定首帧和尾帧，进行特定的运动。跟我理想中的微软的轨迹控制还不太一样。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTibPGRkXKpGE4kz47e2xpEtRWZgr6VfEnTexM5jFbmqn8EnpzE2kVz8A/640?wx_fmt=png&from=appmsg)

至于出来的效果吧，反正就是抽卡。。不评价。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrHMQNu0lEHvePCVibdIiaHibTm4uIvZibYb82p5VcquvDlnb2xZbJY52884YOdB7LyAe8NXpnPFYglwg/640?wx_fmt=gif&from=appmsg)

音效不提了，就还是搜索，找个你觉得还行的贴上去就完事了。

最后，为了原汁原味，我基本对他们直接生成的片段基本没有任何修改，组成了一个成片，我放一下，至于效果能行否，各位自己评判：

视频尺寸：928*522px。挺无奈的，摊手。

坦率的讲，这个产品本身，就是一个巨型的工作流缝合怪。

底层技术明显能看出来，用的全是开源的那一套，SD+SVD，整体质量上限非常低，而SVD本身的上限，跟Runway、Dreamina这种闭源模型，就有一定的差距。又缝了一些自己的文本Prompt包装、配音、音效啥的。

但是从产品定位上，又非常的奇怪。

整套工作流设计，可以看出来极其的专业且复杂，对于小白来说一定非常不友好，门槛太高。

而对于真正的专业者来说，核心的点并不是你的工作流，而是你的模型质量。。

就比如Dreamina，所有的参数都非常糟糕，体验也不咋地，更没有工作流的概念，但是人模型就是牛逼，就是好用，所以专业者都硬着头皮用。

而LTX明显就是集成了开源的工作流，比如SD、SVD、Animetadiff等等，图的质量也低，视频模型的运动质量也低。。。

就咋说呢，专业者和小白，两头都不讨好。

整体的成片质量，也不咋地。又丑又僵硬。

你工作流做的再好，你真正的核心模型一坨屎，那有蛋用呢？

那不是屎上雕花吗？

要不然你学学Adobe吧，你把Midjourney、Dalle、runway、pika、Dreamina、Sora都谈下来，给你当供应商，那我敬你是条牛逼汉子。

就目前的形态来看，怎么看，怎么蹩脚，怎么诡异。

至少我觉得，现在的LTX Studio。

还得再练习个两年半。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
