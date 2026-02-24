---
title: "Midjourney上线图像编辑，他们终于知道什么叫开放了。"
发布日期: 2024-10-25
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666141&idx=2&sn=2b295cadb413e07aefb326fdbacaef08&chksm=f1f19f098389eb72292e6a2349dd9dc556eb4e9efd82ea67f87d4d8a319b2d85764e7db46088"
---

## 摘要

**1) 一句话总结**
Midjourney在网页版推出了全新的图像编辑模式，包含局部重绘、自由扩图和材质重绘功能，大幅弥补了其相比开源模型在个性化图像编辑方面的短板。

**2) 关键要点**
*   **使用平台**：新功能目前仅在Midjourney网页版上线，不支持Discord。
*   **测试资格**：仅开放给过去12个月内持续订阅的年度会员，或历史生成图片总数达到10,000张以上的用户。
*   **局部重绘（Erase）**：支持通过URL或本地上传图片，使用可调大小的画笔涂抹指定区域并输入提示词进行修改；每次生成4张结果，且未选中区域完全不受影响。
*   **自由扩图**：打破了以往固定倍数的限制，支持向任意方向扩展任意像素大小的图像。
*   **材质重绘（Retexture）**：可重新绘制图像的纹理、光线和表面材质（类似Stable Diffusion的ControlNet或风格LoRA），在保持原图结构的基础上改变画风。
*   **功能兼容性**：所有新编辑功能均兼容Midjourney现有的风格参考、角色参考和个性化模型等高级功能。
*   **核心优势**：相比Stable Diffusion，该功能上手难度更低、容错性更高，且局部修改时的融合效果更加自然。

**3) 风险与不足（基于原文）**
*   **平台局限性**：目前功能被限制在网页版，习惯使用Discord的用户无法体验。
*   **使用门槛高**：测试资格要求严苛（年度会员或万图生成量），普通付费用户暂无法使用。
*   **服务器过载风险**：官方明确表示，为了防止服务器被用户热情冲垮，当前只能采取限制资格的限流措施。

## 正文

Midjourney作为文生图领域毋庸置疑的头号选手，之前几乎每次推新都非常惊艳。

前段时间也看到很多消息说Midjourney v7已经训练完毕了，但我左等右等，没等到v7的发布。

却提前等来了可能会更加好玩的一个功能——图像编辑模式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4QJnfgYlftm3CicxciaAs9JGo2lBhCUO5YFRc3ia5oOuYrnicDSbib8p4rzg/640?wx_fmt=png&from=appmsg)

Midjourney的这个新功能意义蛮大的。

因为开源的一些模型如Stable DIffusion虽然在效果上不如Midjourney，但是他们依托开源社区，所以可以上传图片，做很多个性化的图像编辑，比如局部重绘，比如ControlNet控制姿势，比如训练Lora捕获风格等等。

而Midjourney不行，这也是Midjourney一直以来的短板。

Midjourney的这一次更新，也意味着Midjourney可以像SD那样整更多有趣的花活儿，也是在更多个性化编辑上迈出的重要一步。

在公告发布不久，他就开始面向用户测试了，且只能在Midjourney的网页版使用，不能在discord上使用。

主要测试的两项新功能：：

（1）上传图像的图像编辑器，可以实现通过文本提示词进行区域编辑修改，有点像SD的局部重绘

（2）重新绘制纹理，光线，表面的材料，有点像SD的风格Lora

所有功能都适用于之前推出的三个高级功能，分别是风格参考、角色参考和个性化模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4EQicOibcjlSkJU2wyJfVPY90aW58queQsbbehcLccJ7wAMLzBEtqIxkw/640?wx_fmt=png&from=appmsg)

这些功能对于Midjourney而言还是非常的新颖和好玩，所以为了他们的服务器不被大伙的热情冲垮，Midjourney目前只开放给拥有年度会员资格的人。即过去 12 个月内一直是订阅者的会员，或者至少生成 10,000 张图片的会员。

作为Midjourney的资深用户的我自然拿到了测试资格，就先帮大家提前测试体验了。

进入Midjourney的网页版，图像编辑器的界面如下：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE44ZwgxRMG0rCibb1epr6Qz2PU7cgvt4b2MaysvTicrCZMyxszibogxe7bQ/640?wx_fmt=png&from=appmsg)

往图像编辑器上传图片有两种方式，一种是从URL即网址上传图像，另一种即直接从本地上传。

我们先随便上传一个图片，前几篇文章我写过付航在最新的脱口秀夺冠，我们就给他来戴个象征着冠军的王冠吧。

我们先点击Erase（消除），即可以调出一个画笔一样的圆圆的东西

然后在自己想要的区域上涂抹即可，选项的Brush Size可以调整画笔的大小。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4fn6uicpGmViaoRoWlShrRDrKgEBhvS1s0ptpvO6yyZRyakxRicV6B6t5w/640?wx_fmt=png&from=appmsg)

然后填写提示词，我们这里想放一个皇冠，所以写一个皇冠的提示词

A golden crown is worn on a boy's head（男孩的头上有一个金黄色的皇冠）

然后最后点击submit Edit 黑白按钮，稍等十几秒，即可生成啦！！一次会生成四张，选择自己喜欢的即可。。

生成结果非常的自然，就好像一直都是戴着的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4IugOAm1Bxf2CLX2qfqzom0NrLIxE69BRaicib6xUaQeAGm0vbzpbCaKA/640?wx_fmt=png&from=appmsg)

正好之前
有一次拍视频的时候，刚剪头发，一不小心没注意发型，就下面这样，评论区说我的发型像个清澈的大学生。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4vlzCoETIgj3xqLzmKHS5J6Nhic0jNcrqfsaj3O34JjLQU7SVmFU3aMQ/640?wx_fmt=jpeg)

就...一言难尽。

有了Midjourney这个功能，我灵机一动，有了一个想法，让他给我换个发型

不像某些人类灵魂剪发师，一剪一个不吱声。

而Midjourney这个实在太好玩了，真的是毫无违和感。。。我差点都不认识我自己了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4fqxwibW6wux8vdctPibxe3m4SoPgYnEKiaoENfPUQMJOTyWwQicHYMPzhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4aOTjzWUqhEia75d6MxsNeXia2v9EEt6NWZhBbFglKHIJvfNNmnib5KFZQ/640?wx_fmt=png&from=appmsg)

我觉得之后都不需要人类给我设计发型了，我找Midjourney就可以了。

那么这个局部编辑功能还可以做什么？

比如拍照后背景加一个好看的夕阳，手部发光具有魔法特效等等，只有你想不到，没有Midjourney做不到~

有太多的可以去探索了。

当然，也可以用来整活，整活再整活，鬼畜，鬼畜再鬼畜

B站经典的鬼畜鸡汤来咯，后来成为了豆角来咯，

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4ttPklXliakwlR7kYmcJ6ZbAsJTXPFciaUokmzUYUTQhTcTzTZ62SPd4A/640?wx_fmt=png&from=appmsg)

我觉得都不够，应该直接油焖大虾来咯。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4gTUg6r2YlUyHZVhmMAkl2VOXHbq3IF9ib3uFXpLicjSckV5RoLhAu1Rw/640?wx_fmt=png&from=appmsg)

你别说，这大虾看起来还有滋有味的。

还有经典的张伟表情包。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4Ka6h2N3ZK7xdCVnsasWlPqxVcrPCebzDsAxEKibJhtl415ibYtl4XnCQ/640?wx_fmt=png&from=appmsg)

还有鸡你太美

我们随手将篮球换为了公鸡，这下的话，真真切切的是和鸡对唱鸡你太美咯~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4TuSEMc8D8TRiahAG1Xvvuv10Z59u53RqVHuUcw3ne5ib4bmaMacGc1xA/640?wx_fmt=png&from=appmsg)

有些效果虽然可以用PS实现，但是用Midjourney的这个功能实现真的是非常方便，就画个区域，写一句话就一键生成了。

经过大量的测试，我们发现Midjourney对消除区域外的部分几乎不做任何的修改，熟悉SD的局部重绘的朋友肯定知道，每次的重绘就是在重新抽卡，有时候虽然选中区域发生了期望的变化，但是未选中区域也会或多或少发生变化，但是Midjourney完全不会这样，其他区域基本不受影响，使用起来非常的爽。

以上仅仅是这次更新的一个功能

另一个功能是改变图片大小做自动填充。这个其实Midjourney之前也有，只不过当时是固定的一些倍数，而现在更加的自由，可以扩展任意方向，任意像素。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4buPeP9sqv7TnI7tnXvcWia0uZPqDXCzNMcmicxsH9BsEegG4ulmuaOibA/640?wx_fmt=jpeg)

他终于，把即梦做了N久的功能给塞进去了。。。

最后一个功能，即纹理，材质重新绘制~官方也举了很多的例子。

大家一看就知道做什么的了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4siaZAdqjHCm9oibDw2RMbIQyYkwkN41uUfXRxzicFicbjic6G7TXC8GDlLQ/640?wx_fmt=png&from=appmsg)

就是个ControlNET。

正好我前几天去了一趟极客公园总部，在798里面，那环境贼舒服，很慢的感觉，所以就随手拍了几张照片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4DITGtFmcUh1P0QOfrhtgA4zuFeGtrfYOrcH7MzjIMX84LD0XLIBAYA/640?wx_fmt=png&from=appmsg)

但看到Midjourney的这个功能，我就想给这张图换一个画风，先来一个赛博朋克的科技风不过分吧。

说干就干，更换材质实际上更简单。

上传图像后，这次得点击上面的Retexture。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE4P5PzGZA525MSHMTicT5QnD8JVbdb0NVUhSBHpjs7hveibyadCN7TJSgQ/640?wx_fmt=png&from=appmsg)

生成如下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoOlAajT7ibCl3TwCNYrIicE49pFfvMNc6DtB0jwTjDWt928svWgAn7Pibo0JiaPq7UgVp5DSldvCz0Wg/640?wx_fmt=png&from=appmsg)

你别说，还蛮酷的，说不定未来还真是这样呢。

这个功能没啥特别需要注意的，就只要明白你想要的风格是什么就好。

综合各个功能测试下来，感觉Midjourney的新功能还是给我们不少的惊喜。

这还有很多未挖掘的好玩的场景没有被挖掘出来。

它相比SD上手难度更低，容错性更高，生成的效果也更自然一些

不愧是No1。

也希望MIdjourney早点面向所有付费用户开放

也祝你，玩的开心~

Qodicat

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
