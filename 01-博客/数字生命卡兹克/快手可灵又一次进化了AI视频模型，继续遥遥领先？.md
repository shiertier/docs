---
title: "快手可灵又一次进化了AI视频模型，继续遥遥领先？"
发布日期: 2024-09-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647665076&idx=2&sn=764be0794918dc07bf211b0dd7e05c0a&chksm=f107ee56d864ae2a4768627fe83affca4f4688ce703a16fcd629b1e112361589a76c39299f7c"
---

## 摘要

**1) 一句话总结**
快手可灵AI视频模型推出“运动笔刷”功能，并面向内测用户升级了1.5版本基座模型，在分辨率、审美、一致性和人物表演能力上实现了大幅提升。

**2) 核心要点**
*   **新增运动笔刷**：图生视频新增“运动笔刷”功能，用户可涂抹指定区域并自定义元素的运动轨迹。
*   **模型版本升级**：基座模型升级至1.5版本（目前仅向“超创”用户开放内测，普通用户仍使用1.0版本）。
*   **分辨率提升**：视频直出分辨率从720P原生提升至1080P。
*   **审美进化**：文生视频的整体审美大幅改善，摆脱了早期版本的固有风格。
*   **一致性增强**：人物与物体在复杂动作（如跳跃、走秀转身）和多角度展示（如物体旋转）下的结构一致性显著提高，大幅减少了变形和画面“跳跃”感。
*   **人物表演优化**：人物面部表情和情绪传达（如流泪、微表情动作）更加丰富、细腻且完整。
*   **色彩BUG修复**：基本修复了此前图生视频中经常出现的变色和严重闪烁问题。
*   **迭代速度快**：距离6月6日首次发布仅过去3个月，产品已完成多次重大迭代。

**3) 风险与不足**
*   **功能适配未完成**：“运动笔刷”功能目前仅能搭配1.0版本模型使用，尚未完成与1.5版本内测模型的适配。
*   **人物表演仍有差距**：在人物表情和情绪表演的上限方面，明确指出目前仍不及Minimax的海螺模型。
*   **残存画面瑕疵**：虽然修复了严重的色差和闪烁BUG，但视频中偶尔仍会出现细微的黑色闪烁问题。

## 正文

可灵又双叒叕更新了。

目前对可灵的超创们，开放了他们继续进化的视频模型，以及新功能运动笔刷。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJHyZSvHriapv8KLqGJSndmXFELhKaL1TyLLkwGYtdrgPQy04vhbHvrQQ/640?wx_fmt=png&from=appmsg)

作为超创，第一时间拿到了资格，但是恰巧那天正在上海出差参加飞书的活动，没啥空玩，这刚回到北京，就先试了试。

主要就是两块：

1.
图生视频新增「运动笔刷」功能（1.0模型），支持为图片中的人/物体等各种元素，指定特定的运动轨迹。

2. 基座模型升级：普通人现在能用的版本，模型应该是1.0版本，而我们现在内测拿到的是1.5版本的模型，质量更高，分辨率也从720P变成1080P。

花了几个小时，跑了些case，给大家看看这一版更新的效果。

但是有一说一，我觉得可灵的动作和更新速度，实在是过于迅猛了。。

先说说这个运动笔刷。

为数不多的AI视频增强可控性的共识，Runway老大哥最先上的，然后Pixverse迭代出了自定义轨迹，即梦又搞出了动效画板。

但是总体逻辑都是框选/涂抹一个物体，让他做特定的轨迹与变形运动。

可灵的运动笔刷跟Pixverse的逻辑是一样的，可以自定义运动轨迹。

比如当你拿出旅游的海边照片。

你可以直接涂上你想运动的区域，然后用画笔拖个你想让它咋运动。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJRLcr8ltIYnk4ibHiaWRdnODmT5vNGLZ7vsLcFOyNP9Das8RFTCC6Nm9A/640?wx_fmt=png&from=appmsg)

给大家放个case。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJJXPVFTkCicibcicSPG3FsBhibnOiaia6Via8nV87azxy2MCDooY2oBmVIFpwQ/640?wx_fmt=gif&from=appmsg)

动的还是很自然的。

唯一难受的点就是运动笔刷只能搭配线上的1.0版本才能用，内测版的1.5模型用不了运动笔刷，适配还没做完。

然后就是最重要的可灵1.5版本的新模型。

测了一堆case，我的感觉就是：
文生视频的审美有了大幅进化，整体一致性更强，人物表演更强，修复了色差的BUG，更加高清。

一个个说。

1. 审美

文生视频是最能看出来，这个模型的审美是啥样的，说实话，之前的可灵的审美就很快手，土土的，跟Runway这种很影视经验沉淀极深的公司比还是有不少差距。

但是这次发布的1.5版本模型，审美上终于是能看了，摆脱了过去那种很土的影子。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJG745sOb1bq8ibst1KwuIF4HOtVUjSPSIxq782a9HtVWnmiaFrEScNjjg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJtRfcia3MxH7301GznwPJYick3q9q0PZLOlP5wvauFgZlLia1SrJzUJdTA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJstOFsIqwT16xKMVmkInmYicWbniaEnpLsZceAnUuvQOw7owwmghAqZvA/640?wx_fmt=gif&from=appmsg)

2. 一致性

这次我测试中，人物与物体整体一致性的加强，也是让我非常惊喜的，因为人和物体在各种角度下一致，看上去是同一个东西，其实是一个最基本的要求。

但是这个要求，对AI视频的难度其实要求反而是很高的，要是生成一段稍长一点的视频，或者里面人物多一点的镜头，简直是灾难级别的。

在可灵1.0版本，还有RunwayGen3中，经常
有时会出现一些奇怪的“跳跃”：比如人物的衣服颜色突然变化，或者背景中的物体位置莫名其妙地改变。

相信大家都深有体会。。。

但在1.5版本中，这个问题得到了很大改善。

比如一个很恶心的动作，跳跃。

Prompt：
一个特工在空中跳跃并安全落地。

1.0版本：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJe7RZvaupe9MRqT464NJWoic5Vdto7cnRNf0ycNskvjpFgYGPMVjRtDA/640?wx_fmt=gif&from=appmsg)

1.5版本：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJAPswWMeAZYbeRKyYj9AoWBC7Gb7XibuUd2VHbIorDlcbMO4JzrUUBtg/640?wx_fmt=gif&from=appmsg)

1.0变形到姥姥家了，1.5没有变形，就很帅。

然后比如走秀。

我用了一张特朗普的图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJ7Qghic9CbmcbsJzYlcQ8c2hKcUMco0njFLOWF5L032B6FxvKJrSjf1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJKHmYEm5vJwV6pRFSFdjMnmZkXlb1o5LP0tLsG2pQvOeg59GJKcn9lQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJw8AMQ8Uv71xaIZqgf9ttm4wUuXlV8gbkwonAMgEmlBg7IPuEPDthkg/640?wx_fmt=gif&from=appmsg)

这个case进步还是挺明显的。

之前本来想做一个特朗普时装走秀，但是1.0模型的生成效果嘛。。如视频所示，遂放弃。

1.5版本脸部一致性保持极佳，转身也没有一点问题，甚至脑补了一个特朗普的大秃头，笑死。

物体一致性上，也进化的很强。

比如这个VisionPro，我要让他旋转展示。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJW0mibYmQ75vPXPqOnlicsA380wNvJeLlXFSJ3dcpFRUNmP8AkxgU4YNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJTXd6LK7eeictjU6UQjfaLMb5FibdrEiaDcZETOus8wZUGZQa8fqvslqhg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJSxX9GodxqGpxu3GWLT2vtFIibfX2Um9dcVD8IZTabOw0ZFialYqo2P8w/640?wx_fmt=gif&from=appmsg)

物体的稳定性明显加强了很多，变形的很少，结构至少是统一的。

3. 人物表演

人物表演也是一个视频里面，镜头情绪传达最重要的一环，她笑，她哭，那些真正的表情、情绪，才能触动我们的内心。

1.5版本在人物表演方面有了很大进步，但是这块我有一说一，没有Minimax的海螺强，那玩意的人物表演真的强的离谱。

比如这个prompt：
一个白发男人摘下帽子，开始流泪。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJQAvNGxZlNLPicuJB2rHIPZrYVygibibjibPOEN01h5bVLuiaz4Vy89aCXTg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJcu49D0v0TjqCf8QeEhCVw3eqEdoPzzLFxaxrx52LicmmpFLN4KwJ7nw/640?wx_fmt=gif&from=appmsg)

这表情的丰富和细腻程度，强太多了。

比如这个Prompt：女孩拿起一杯咖啡，喝了一口，然后闭眼睛微笑。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJdUVlBK4RrysVcVIOGVgmFtS7lRQohwZYgcmuuy8d45yGLKZa34sHgg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJCyDdO8e1cZOfNVIK82sFS6ac70H1geJuwdibwa6fKVsFDWlQfmB3MUQ/640?wx_fmt=gif&from=appmsg)

在表演的完整性、动作的丰富性、表情的细腻上，1.5版本，进步太大了。

4. 其他

色差修复，我之前用图生视频的时候，经常会给我变色+非常奇怪的闪烁。

就像这样。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJA64mrWzFc8jByYemYaBeUPibuDaHCK8R1AE1cANFCaJKC5Ezx7eiaFrA/640?wx_fmt=gif&from=appmsg)

而这次我试下来，几乎没有出现这种情况了，但是细微的黑色闪烁还是偶尔会出现一些，不知道是什么问题。

分辨率增强，现在的视频直出已经都是1080P了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRrn81XIZl10AJsAbSzTxJrruNrFvWxZZdwnvP9Lnm9EuR13RIlIUN5INVyNCe1Zkiatp0W1gvWuw/640?wx_fmt=png&from=appmsg)

最后

回想起最初接触可灵时的体验，再对比现在的效果，真是有种恍如隔世的感觉。

但是时间，也仅仅才3个月，仅此而已。

6月6号可灵发布的那天，我到现在还记得那情形，人还在360的发布会上，但是微信已经爆了，所有做AI视频的全都沸腾了。

今天，9月6号，正好3个月。

看着他们一步步升级打怪走到中国AI视频生成No.1的位置，甚至在世界上扎下了China AI的种子，对他们还是会有一种奇妙的情感。

希望可灵，希望快手这个老铁，每一步都走的足够扎实。

未来，给我们带来更多更奇妙的体验。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
