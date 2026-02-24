---
title: "10秒钟复刻AI付航吐槽一切，这就是现在最好的TTS声音克隆。"
发布日期: 2024-10-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647665987&idx=1&sn=1e8dbd9e7417b9551a6914a61a2c05c3&chksm=f16d26ded60113245ef3a0eea16b2ae138763e5ef38b05ed19be10a84bd65af847f76a3a0836"
---

## 摘要

**1) 一句话总结**
作者结合Claude生成文本与开源免费的F5-TTS工具，仅需15秒参考音频即可在本地成功克隆脱口秀演员付航的声音，并为读者制作了包含汉化界面的一键部署整合包。

**2) 核心要点**
*   **应用场景**：作者因观看英雄联盟S14总决赛TES战队0:3落败，萌生了用脱口秀冠军付航的声音来吐槽比赛的想法。
*   **核心工具**：采用F5-TTS模型，该工具开源、免费，且支持本地运行。
*   **克隆效率**：仅需提供一段15秒以内的目标人物参考音频，即可完成声音克隆。
*   **资源提供**：作者制作了F5-TTS的一键部署整合包，内置所需环境与模型，并将UI界面汉化，用户可通过公众号私信获取。
*   **操作流程**：解压后运行`.bat`文件 -> 访问本地链接进入UI界面 -> 上传参考音频 -> 输入待生成文本 -> 选择F5-TTS模型点击合成。
*   **文本生成**：作者尝试使用Claude模仿付航风格撰写脱口秀段子，但效果生硬；最终通过提供具体的比赛分析文章并要求直接吐槽，才获得满意的文本。
*   **最终效果**：生成的音频在音色、停顿和叹气等细节上高度还原真人，作者在后期手动添加了笑声以模拟现场效果。

**3) 风险与不足**
*   **参考音频限制**：用于克隆的参考音频并非越长越好，必须严格控制在15秒以下。
*   **数字识别缺陷**：F5-TTS支持中英文，但不支持阿拉伯数字，输入文本时必须将数字手动转换为中文汉字（如将“369”改为“三六九”），否则无法正常识别。
*   **大模型创作瓶颈**：当前大语言模型（如Claude）在撰写长文本脱口秀或One-liner（单句笑话）时能力有限，生成的内容存在生拉硬拽、效果僵硬的问题。

## 正文

上周末
，我追了两个月的脱口秀，终于总决赛了。

周六我一边看LOL S14总决赛，一边看《喜剧之王单口季》，真就体会了一把什么叫心态过山车。。。拉的很拉，稳的很稳。

好在脱口秀这边，我一直很喜欢的演员付航，不负众望地拿到了总冠军。决赛这场他还是“Passion”到极点，劲儿给得太足了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvfbiazBdX3j9CDe7ibTKZnGib3iaorppNrolofn5UuD8Zsr6rXyuPYI5ibQg/640?wx_fmt=jpeg&from=appmsg)

这场的段子和表演都太NB。给我看的笑中带泪，真的。

付航的表演给我的感觉就是纯粹的好笑，不需要你绞尽脑汁去思考什么“上价值”。看了就想笑，笑完还想再看，好笑本身就足够有价值。

看付航夺冠我呲着的大牙还没收回去。一转头看LPL那边，瞬间失去所有力气和手段。付航的Passion要是能借TES一点，也不至于让我看得这么无语。

0：3，直接被暴虐。被飞科按在脚底下摩擦。

太小丑了。。

知乎和微博更不用说，当晚看比赛的全在吐槽和破防，逛超话都给我看笑了。

就在那一瞬间，我脑子里冒出了一个很有趣的点子：
要是能让付航，帮我狠狠吐槽TES，简直完美就是完美的联动。。。

可惜我抢不到付航线下脱口秀的票。更不认识他。。。

但是，咱有AI啊。

那，说干就干。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmv0PnKspy1d8lWqGSUgMB0AKWTvuicvHu3C7Wb8CXXxX2TDt6RTWVjUxg/640?wx_fmt=png&from=appmsg)

效果大概就是这样的。

让我们☝️说中文👐！

这语气这效果，离川普就差一个手风琴了。

这把，就用F5-TTS，直接让AI付航当当我的嘴替吧。

F5这玩意牛逼就牛逼在只需要15秒，就能克隆任何声音，最关键的是，还是开源的，免费本地就可以跑。

而且使用贼简单，你也可以跟着手搓一个AI声音替你吐槽。

当然，为了大家能上手即用，
我们也给大家做了整合包，配好了环境，下载好了各种需要到的模型，大家可以一键部署使用。

你对着公众号私信"F5"就自动有下载链接了。

并且相比于原版的UI，我们也给大家做了汉化，方便大家使用（其实是我自己看不懂英语。。。）

首先下载完，解压压缩包，得到完整目录如下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvs8c2EKOefu13A7kiaHA131hcUIjFyeN9mxmic0QqF6ano1dVVErQyibiaw/640?wx_fmt=png&from=appmsg)

然后点击 一键运行.bat，终端会自动跳出。

稍等片刻，即可看到一个链接。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvRMCAjZ5pqQpgjWHkfYs82icpPzwUKr9wibYRrDAUjrK99USLvowmmYIg/640?wx_fmt=png&from=appmsg)

按住Ctrl 并单击进行访问，就能进到F5的界面里面了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvsHAOiaf86vHbTlDP5NHMAZJXziaSu0OmWgGE8mtLWOYLkialJuqlrjBEA/640?wx_fmt=png&from=appmsg)

点击上传参考音频，即我们想要克隆的人的音频，这里我用了付航喜剧之王里的一段12秒的音频。音频不是越长越好，一定得15秒以下才行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvDyeLM8icicF6KLMEXAFud0PNh6Y1ICwUrA4rc71fVPv0YrSph76YhKdQ/640?wx_fmt=png&from=appmsg)

然后在待生成文本里面填自己想要生成的文字内容，比如之前鲜虾包
谬赞我文章的一段话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvksiayCuz46ksRnMm5n4diaCfHNP5yP6jhdZFicOzG9BiaWgXHqlyy2fx7A/640?wx_fmt=png&from=appmsg)

最后选择F5-TTS模型，点击合成即可。

这样就可以得到鲜虾包以付航的口吻称赞我文章的passion了！！！

是不是巨简单，是不是有手就行。

但是跑明白了声音克隆的流程，我们还缺一段最重要的东西，就是，文本。

说实话，我自己写段子的水平可能连小学生都够呛，所以我果断选择求助了Claude老师。

我把付航在《喜剧之王》的视频转成文字稿，一股脑儿塞给了Claude。想着让它学着付航的风格写一段脱口秀试试。

然而。。。我roll了N次，Claude就是没法做到付航那个味儿。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvve4d0IUVVbVCxXDTF87fufESjiaicSKZH2ajiaq47YCwLeI8W8sqPrMhQ/640?wx_fmt=png&from=appmsg)

想着可能长文本脱口秀不好写，换个风格用one-liner吧，写了一段Prompt。

给了特点、节奏、杨波曾经的case。

又试了好几次。

效果还是很难评。。。

说实话，连Claude都只能做到这种程度，我根本不想试其他的大模型的效果了，没有意义。

不过可能也是脱口秀这个形式确实复杂了一点。现在的大模型还是太直率了，写的内容坦率的讲都是生拉硬拽拼在一起，效果比僵尸都硬。

脱口秀这样文雅人的吐槽不太行，感觉还是得直接骂才有效果。

于是我又扒了篇知乎分析TES比赛的文章，写了一段比较不太能放出来给大家看的Prompt，让Claude给我整了一段。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvK7UNVic7fc65gvUE6G3ArVmwZDwZ8GnzrBPwB6lvEMMdc2BpYXzicrWg/640?wx_fmt=jpeg&from=appmsg)

这次火力直接拉满了。。。

还得是直接吐槽开骂啊。

然后我就直接把这篇稿子，拆分了一下，一小段一小段的，扔回到我们刚才的F5里。

就，出现了这样的效果。请大家欣赏，AI付航吐槽TES。

说实话，这个效果，有点过于直白过于狠了。。。

当然那个笑声是我后期加的，为了模仿一下脱口秀现场的效果。

F5出来的音频，音色跟付航真的一模一样，那个劲，也非常的像。还有些停顿、叹气，简直跟真人一样，虽然说表演和情绪跟付航自己比肯定是一个天一个地，但是AI能跑出这种程度，我已经很欣喜了。

就是有个小技巧大家在用的时候需要注意一下，F5支持中英文，但是不支持数字，这个点就非常的尴尬，所以你需要把数字处理一下变成中文。

比如，369，变成“三六九”。F5就能正常识别了。

大家有啥想整的活，都造起来吧。

最后，我想说。

有人说，脱口秀就是当代的“精神布洛芬”，我觉得挺贴切的。

我以前特别不喜欢看所谓的小品“喜剧”节目，尤其受不了一些创作者对剧作模式的生搬硬套。一定要上一层价值，一定要结尾包个饺子。

不来点生硬的价值，好像就不是“好喜剧”。

但这几年懂得都懂，大家的压力都大。谁希望一天忙前忙后到家，好不容易瘫在沙发上，想看个节目乐呵乐呵，还得警惕“人生的意义”突然来拷问。

累不累啊。。。看喜剧还是上成功学？

喜剧，不就是为了让人们开心吗。

所以我更欣赏付航这样的演员，也更喜欢脱口秀这样的形式。

TES虽然输得难看，但打得好笑啊。能给大家提供一个集中吐槽的机会，也不失为一种情绪价值。

其实我这次就是忍不住想整个活，博大家一乐。

比赛的结果输也好，赢也好，都是常事。反正我也不能替选手上，咱也没那个实力，那咱不如就吐槽吐槽，开心一下。

“如果高级动物必须高级。那我宁愿当猴。”

何必把自己绷得那么紧？

希望S14这次决赛的时候，看LPL，能像这次看付航一样，也像18年的IG一样，让我们喊出：

“我们是冠军”。

人生，还是得：

passion！！！

Qodicat

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
