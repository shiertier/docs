---
title: "半个AI圈期待的Midjourney角色一致性首发评测 - 再入迷梦"
发布日期: 2024-03-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661772&idx=1&sn=071bf3f60269198544251363b8725097&chksm=f1afb9496e3bf9f0f3ddee88702e4b32a489fe738da36e7c276701cc080d4e7cb83557446477"
---

## 摘要

**1) 一句话总结**
Midjourney正式推出了支持V6和Niji V6版本的角色一致性功能（`--cref`），通过调整`--cw`参数可灵活控制角色特征的保留程度，极大提升了2D、3D及动物角色创作的生产效率。

**2) 核心要点**
*   **功能支持**：新增角色一致性命令 `--cref`，同步支持 Midjourney V6 和 Niji V6 版本。
*   **参数控制**：配套参数 `--cw` 的值域为 0 到 100。默认值 `--cw 100` 会参考原图的面部、头发和衣服；`--cw 0` 则仅参考面部（类似换脸功能）。
*   **网页版交互**：在网页版（alpha.midjourney.com）上传图片后，可通过按住 Shift 键同时点选图标，实现“角色参考 (cref) + 风格参考 (sref) + 图片提示”的组合使用。
*   **2D与3D表现**：在2D和3D角色上表现优异，面部、发型、服装和身材均能高度还原，“Niji 6 + cref + sref”是目前2D创作的最优解。
*   **动物与怪物表现**：对动物和怪物的特征保持同样有效，精度足以满足绘本制作需求。
*   **跨维度玩法**：支持将2D动漫角色作为参考图，使用 MJ V6 生成具有一致性的真人场景图。
*   **生产力提升**：无需像 Stable Diffusion 那样高成本训练 LoRA，仅需单张图片即可实现高可用性，可为游戏、漫画、动漫等非真人领域70%~80%的工作带来巨幅效率提升。

**3) 风险与不足**
*   **真人照片效果差**：官方明确表示该功能并非为真人/照片设计（"It's not designed for real people / photos"），直接使用真人照片做参考无法达到完美或摄影级的一致性。
*   **提示词权重冲突**：当 `--cw` 参数设置为 100 时，由于高度参考原图特征，会导致模型非常“不吃”提示词（Prompt）。
*   **绝对一致性缺失**：目前该功能仍达不到绝对一致性的标准，真人一致性等难点仍需等待后续优化。

## 正文

在MJ一鸽再鸽，鸽了N次之后，今天早上6点，他们终于决定把他们万众期待的功能放出来了。

角色一致性。同步支持MJ V6和Niji V6。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6ibmY6WsMRNVX4UUJYHT829VbO6e6BddeEOHQniaiaSkZlY51yU6BqSYIg/640?wx_fmt=png&from=appmsg)

跟之前的风格一致性--sref命名基本一致，
--cref。

坦率的讲，风格一致性、角色一致性、场景一致性，是我觉得三个能真正进入生产管线的极度重要的可控性功能。其实现难度由低到高。

毕竟，你真要用MJ去带故事带场景的东西，这些一致性肯定是要的，要不然疯狂跳戏，那观感肯定奇差无比，这个妹子一会白头发一会红头发，一会圆脸一会方脸，你都怀疑你在看个什么异世界故事。

之前有朋友也在群里疯狂吐槽过：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6Jecfx91YHUaFUqSYOVaAVoSxLP3AL53xux1eK4mULibQcFMfQXfILUQ/640?wx_fmt=jpeg&from=appmsg)

风格一致性MJ有sref命令去做很好的解决了，而角色一致性，今早也终于放出来了，讲道理，他可以节省一半的工期了hhhhh。

--cref背后参数--cw的值可以从0设到100, --cw 100是默认参数，此时会参考原图的
脸部、头发和衣服，但是相应的，会非常的不吃Prompt。-- cw 0的时候，就只会参考脸部，大概就约等于一个换脸。

最近《沙丘2》挺火，上个小公主给大家当一下case。

原图是这样的：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6Oh0SZeaIxhNKGDrCSs8wVe1EiatCAQicTxvsaTibdEgKHhRTw0u2cC5vA/640?wx_fmt=jpeg&from=appmsg)

使用--cref之后。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6urQfo8Q3FvuWTauoVPa87nZu7qXtSJUuBZWx3HBywibTgS1wyomIAxg/640?wx_fmt=jpeg&from=appmsg)

还是能明显看出区别的。--cw 100的时候，人物的头饰、衣服都是大差不差的；--cw 0的时候，发型和衣服就全变了。

至于用法，我比较习惯使用MJ的网页版，体验真不是好的一点半点，网址在此：
https://alpha.midjourney.com/

登进去之后，传一张图片，就会发现图片的右下角有一个小icon，鼠标hover上去以后就能看到出现了3个icon，最左边那个小人的icon就是把这张图片当做角色参考，中间那个链接icon就是作为风格参考，最右边那个就是仅作为图片prompt，就是传统意义上的图生图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6VbocyX128qmY8Xt6KSaRPeT2nZOibiaRlyOtoUxRggWFicaeFD3DlicyUA/640?wx_fmt=png&from=appmsg)

当然，你也可以按住shift，点这三个按钮，就能把这三个全部点亮，形成cref + sref + 图片prompt的超级组合拳。。。

官方对于角色一致性，也给了一些简单的小Tips。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6EBQUmLofdwmLGvDwUic4Q5LORZT3tKkcDqbGicUl5TNP9HarlAFGUgIQ/640?wx_fmt=png&from=appmsg)

真人和照片肯定是最难的，毕竟需要关注的细节太多，而且"神韵"是一个非常玄学的东西，有时候你就会觉得明明五官是一样的，但是为啥就是不像。。

而用在2D和3D角色上，那肯定就会好很多了，毕竟只需要抓住几个主要特征就行，所以从这个功能本身上看，也能猜到，Niji V6的表现，肯定会比MJ V6要好很多。

所以我会分成真人、2D&3D人物、动物，这三个维度，来做一些case，讲一些我摸索到的小技巧，让大家来直观的感受一下，他的用法和未来的可能性。

一. 真人

其实说实话，我跑了N多case，用真人照片直接去做参考的话，效果确实不咋地，只能保证相对一致性，但是绝对的完全一模一样，是不可能的。

官方自己也非常明白：

It's not designed for real people / photos

我放几个真人照片做参考的case，你们看一下相似度，就肯定明白了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6vhZOH9POyBibv9mFMFDy8H46oWVC0F2z7HLsvtSXib6qk57WfiaU1AWqw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6DcIuriardCwVQ5xKVLkVCDclfH4mdDVttDODrPpTe8IflW0VXXkT1SA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6OSGdczlUy37lic8LYGElcLIc7aAocyKw8y1MHwzroExQuic1V50A6B0A/640?wx_fmt=jpeg&from=appmsg)

属于是个人看了都想刀人的程度。

但是如果直接用MJ生成的图去做参考，一致性会好一些，但是也就仅仅好一些了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6XORGVBJOS9wc50hCIZt6wOCGZ7vibNOIanEazp4tLkiaqxPNUPvoFTew/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK62V6dtD4gsBD4XDwdibM6h2n0XQ28omPGsy1FYa4IPETM6HIIyJAUD4Q/640?wx_fmt=jpeg&from=appmsg)

当然，也有很好玩的用法，2D转真人。比如我扔进去了一个我用Niji跑的二次元女生，然后转头用MJ V6去跑"穿着皮衣，在舞台中弹着吉他"的场景，效果意外的还不错。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6R5dyQ82XgNmxCLo3kcQbkJ88em6RZzxmrVWRlbibLwb7xStWxKRSzPQ/640?wx_fmt=jpeg&from=appmsg)

在真人这块，整体上，我觉得作用是有比没有好，能降低过去很多Roll图的时间，但是达不到所谓的完美或者摄影级的水准，但是这毕竟只是第一步，真人的一致性肯定是最难的，等待MJ的后续优化。

二. 2D&3D

当不跑真人，而是去跑2D和3D角色的时候，这就让我惊喜多了。

Niji 6 + cref + sref的组合拳，是我认为目前的最优解。

prompt写法也很简单，角色描述+角色动作+cref。

比如我随手跑了一个人造人18但是换了衣服，再把提示词删了直接去用图片提示，可以看到角色一致性得到完美的保持，不管是面部、发型、颜色、衣服，甚至还有身材，都能完美还原...

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK68PhxaM572MWWLxqicRY1vKq3ay1FZGdYSRicUzUHNMgvtK1xxrNJ2mQw/640?wx_fmt=jpeg&from=appmsg)

如果换成--cw 0，再写一个运动服。可以看到衣服全变了，但是面部和头发都不变，用吉川的话说：头发才是二次元的本体。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6qjXfcDDOegkUN7neibibOMJTmG8hTvMRKptqj3GKWgTosSU9jaBkXZ5w/640?wx_fmt=jpeg&from=appmsg)

再比如，用我之前的橙头发妹子，直接跑一个穿皮衣弹吉他的图，

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6RlWZH55ticxWVHlCkFibhkwxH3xYozdfKnmXs4KNWLHJianRssbticmTYg/640?wx_fmt=jpeg&from=appmsg)

当然，除了弹吉他之外，她还可以做很多事情。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6KAzEEZpTrFUcE19SIibK0ibN0XVyiaKz3t65ZbawibocicAuEt0zwgj87Iw/640?wx_fmt=jpeg&from=appmsg)

而做3D角色也是同理，比如经典的泡泡玛特风格的IP。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6wCfXo4VWCibJx4aKEibMiafJGic0gDof9fibbfL9fnBOlYY6pgBbLPpxicHg/640?wx_fmt=jpeg&from=appmsg)

三. 动物

动物的一致性，比我想象的要好很多，因为我一直以为MJ的角色性，真就只有人物的，但是随手试了一下动物，居然意外的还不错。

比如用坤哥的《山海奇镜》里面的狼当图片提示，让它来抓兔子。

原图是这样的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6dbmZDQQzNm9x33vwB8bXogRGKxBLXzlnV7hO1fMTQMIc3D7VkjQw8w/640?wx_fmt=jpeg&from=appmsg)

让它去抓兔子以后，就意外的，非常好。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6Mf1iaKsM74LJfmr7JMOyF8LmCRNWkX8B2h8ic9WyaCrzw7EVhrwTVHRw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6vhLyJJ3MKpkRrHWicBFwWMNJ27DicolePSEYY3BrhvBQ1uYzPmWTgM1g/640?wx_fmt=png&from=appmsg)

比如用朋友的狗当prompt，也还原的差不多。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6qjoj5jczH86maPBTk7KMmK7otBzpfF8IscRQYET1BgSQE4rrxrtCZw/640?wx_fmt=jpeg&from=appmsg)

还有怪物，也很Nice。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURplD7z0JWc7KkkCTzIgAdK6wcjTfuI7IuvFVv8BMqVON2mZMj0OenMY9rQ8UIJeAWDnDDSA43gP7A/640?wx_fmt=jpeg&from=appmsg)

这种精度，去做个绘本，肯定是没问题了~

写在最后

在角色一致性上，MJ终于踏出了坚实的一步。

首当其冲的，肯定是所有非真人领域，比如游戏、漫画、动漫、绘本等等。

MJ的角色一致性精度，是一个很棒的杀器。

可能他还达不到绝对一致性得标准，但是对于70~80%的工作，我觉得是有巨幅的效率提升的。

同时它也不需要像SD一样，去高门槛、高成本的训练自己的LoRA，只需要一张图。

就完事了。

高可用性、极佳的用户体验、不错的效果。

我觉得足够它在商业领域和专业工作流中。

有他的，一席之地。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
