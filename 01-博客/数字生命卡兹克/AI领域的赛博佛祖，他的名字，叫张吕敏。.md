---
title: "AI领域的赛博佛祖，他的名字，叫张吕敏。"
发布日期: 2024-06-04
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647663020&idx=1&sn=89e442ee802f02e12f82bffce8502ad9&chksm=f1f727fe88fa992e7ba3ac2dc3230ccc2ecdd345c860e67c2bdd84004635afc08b90ed95b1bd"
---

## 摘要

**1) 一句话总结**
斯坦福大学博士生张吕敏（被誉为AI绘图界“赛博佛祖”）近期推出了基于区域合成的开源精准控图项目Omost，延续了其通过ControlNET、Fooocus等一系列开源工具大幅降低AI绘图门槛的贡献。

**2) 核心要点**
*   **Omost项目机制**：将简单提示词扩展为详细Prompt，通过将画面拆分（如九宫格）并逐个区域绘制后合成，实现极强的精准可控能力，技术路线类似Dalle3且完全开源。
*   **Omost技术规格**：大语言模型采用Llama3-8b，绘图模型采用RealVisXL V4.0，本地运行最低需8G显存。
*   **ControlNET**：张吕敏最著名的开源项目，实现了AI生图的多种手段自主可控，是将Stable Diffusion (SD) 生态推向繁荣及B端商业化工作流的核心工具。
*   **性能优化工具 (Forge UI)**：对原生SD WebUI推理进行加速优化，在6G显存上可提高60-75%的生成速度，8G显存上可提高30-45%。
*   **其他核心开源矩阵**：
    *   **Fooocus**：面向普通用户的傻瓜式小白AI绘图产品。
    *   **LayerDiffusion**：直接生成带原生透明背景（含玻璃透明效果）的PNG图片插件。
    *   **IC-Light**：重新打光工具，实现人物主体与背景光线的迅速统一融合。
*   **早期探索**：2018年即推出针对黑白漫画和线稿的AI一键上色工具Mangacaft与Style2Paints，并提供免费在线服务。
*   **作者背景**：张吕敏于2021年本科毕业于苏州大学，现于斯坦福大学计算机科学专业读博，多年来坚持AI工具的开源与免费共享。

**3) 风险/不足（原文明确提及）**
*   **Omost生态兼容性**：Omost目前尚未接入到SD（Stable Diffusion）生态中，且大模型处于封装好的状态。
*   **早期项目收益**：作者早期的免费开源项目（如Mangacaft）曾面临收益惨淡的困境。

## 正文

前两天，AI绘图圈的赛博佛祖张吕敏，又出手了，发了一个挺牛逼的新项目，叫Omost。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhutqErT3uB5BkWnNcAsibsx1bV0ObY2KxU1LtFWzeSX7289KvrDIic8Q8g/640?wx_fmt=png&from=appmsg)

简而言之，
Omost
的作用就是，把简单的一句话，扩展成非常牛逼、详细且精准的Prompt，然后挨个画出各种不同的区域，最后合成在一起。

注意，是
合成，
所以精准可控能力极强。

非常牛逼的自动绘图的Agent，
从此，
人人都可以不被所谓的Prompt困扰，普通人用一句话，也能生成很不错的图片
。

有一个东西
跟
Omost用的是同样的技术路线，它叫Dalle3。

但是，Dalle3毕竟是OpenAI的玩意，你只能付费氪金用，没有开源。

但是Omost，开源。

我的小伙伴@祁珏瑜第一时间做了一个本地整合包扔给了我，在我玩了2天后，只能感叹一句：

太强了。

比如我想画一个飞船，我就在输入框中直接输入“太空中的未来飞船”，他就会开始哐哐给我写代码。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuYPibooPaxiaHER6ApduPuY3EOYATQpTLib7RK3myq8w4oCjhNVfNhk7fA/640?wx_fmt=png&from=appmsg)

这些代码可能很多朋友看不懂，我翻译成中文的你们就知道了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuW9yFMO8MPibco5YmH5GVV68Mw1J0Mib3nfUuzjy1HYxS9ZCQr4ibPKT6g/640?wx_fmt=png&from=appmsg)

可以理解成把画面拆成了了九份，九宫格，画面中心是什么，画面左上方是什么，右下方是什么，然后挨个去绘制，最后合在一起。

当把所有的代码输出完后，我们直接点渲染就行，一幅飞船图就出来了~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhukibbYyPD2OT4W8TgYCLfPU1VoMwldlpk5PUuaeKJZWEtkicX3qicHluXQ/640?wx_fmt=png&from=appmsg)

也可以跟Dalle3一样，再进行对话式的区域修改，比如把背景从太空换成海洋等等。

但是目前还没法接入到SD生态里去，大模型也是封装好的。

大语言模型用的是Llama3-8b，绘图模型用的是RealVisXL V4.0。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhu3XpHUbgUF3DtM7wWubKbdB0kPibZ44hffvIFH92tW6VGJQDhSXU6E8Q/640?wx_fmt=png&from=appmsg)

本地有8G显存就能跑起来。

整合包我扔公众号后台了，
对着公众号私信“O”这个英文字母就有
。下载下来解压完后，第一次先运行env.bat，然后再运行run.bat就行了。以后每次打开，就只需要运行一下run.bat。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqus1mVo8Ya2POResFa7XRrj59Sb8PWkRG1cthxkeu1ZtQERA7sE9ibia8HR8o0EcZmZbqibKAS4Wk1g/640?wx_fmt=jpeg&from=appmsg)

不过
Omost毕竟开源了，肯定会有无数大佬，基于Omost上进行魔改，接入到WebUI和ComfyUI也肯定指日可待。

Omeost强是强，但是让我更感慨，觉得更强的，是
Omeost的作者。

赛博佛祖，张吕敏。

可能有些小伙伴对这个人名非常陌生，但是如果我说一个他最著名的开源项目，相信只要是玩AI绘图的，肯定都不会陌生了。

那个项目，叫
ControlNET
。

让AI生图实现多种手段自主可控，一举将SD生态推向了繁荣，让AI绘图进入N多B端工作流，实现全面商业化的始作俑者。说它是SD生态最大的功臣也不为过。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuEFNKvkKW6ufTTUqZ8skvmC373Np2Rg5DwcUzMTsCQnqjrSFvBIj1KQ/640?wx_fmt=png&from=appmsg)

（图片来源：小红书）

这些，全都是ControlNET干的，可以说，ControlNET是AI行业精准控图的爹。

而张吕敏，是ControlNET的爹。

而张吕敏的工作，除了ControlNET这种爆炸性的项目之外，还有面向普通人的傻瓜且小白的AI绘图产品
Fooocus，开源的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuV90U4auvnp37S4UxpYP0lXuvYWAP3JeqGdNuVj61Bz2PheLjAFVXfQ/640?wx_fmt=png&from=appmsg)

后面又发了一个
Fordge UI，对原生的SD WebUI推理进行加速等各方面优化。
在
6G低显存上可以提高60-75%的生成速度
，
8G显存上可以提高大约 30~45% 的速度
。让AI绘图的门槛进一步被拉低。

还有
LayerDiffusion，一个可以用AI直接生成原生的带有透明背景的PNG图片的插件，效果比生产完再用PS啥的抠图的效果完美多了，甚至连玻璃的透明效果都能直接生成出来，重点还是：开源的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuAibibTvxZauGoEJxKxzGrtITfS8oKEAVhyCTib39zCiaIAzHoATuqxVYcQ/640?wx_fmt=png&from=appmsg)

IC-Light，
可以重新打光，让人物和背景光线完美融合，实现主体与背景迅速统一在同一光源，还是：开源的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuqH3p4sCibGUqCbnAl2oEoLQYTF1zibKtYvzbicxCjf97I8IY0ngrId47w/640?wx_fmt=png&from=appmsg)

等等等等。

他在Github上，有无数的star，而头像，是一个很反差很喜感的英短。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhu6RCuN1dmzCsb1j8nSn8yAwyVmzansvtJt00zd1sZQGw7ZLncQ9ibd0A/640?wx_fmt=png&from=appmsg)

可以说，张吕敏他本人，就是整个AI绘图领域的，赛博佛祖。

本人也非常的年轻，2021年本科毕业于苏州大学，现在在
斯坦福大学计算机科学专业读博。

但是他，在18年，可能还没进入大学校园时，就已经在研究人工智能了。

18年，他发了两款AI绘图产品，一个叫
Mangacaft，给黑白漫画AI一键上色。一个叫
Style2Paints
，给线稿用AI一键上色。

在19年，我跟
Style2Paints，还有过一段很有趣的交集。

那时候在公司，我们设计团队发起了一个项目，是做一个小游戏，类似于王权那种左滑右滑做抉择的。想法很美好，但是现实很骨感，游戏卡牌的插图，我们全得自己画，有整整将近400张。

那时候没有什么AI，真的全得靠人。

我们的几个插画师，不眠不休肝了一两个礼拜，肝出来了近400张线稿，然后我们对着这400张线稿犯了难，毕竟还要上色。。。那是一个比画线稿还恐怖的工作。

我一度觉得这事不该人干，于是就去网上翻，翻到了lks的视频，他推荐了一个很有趣的AI上色工具，就叫
：Mangacaft。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuN7ib7mOeo5WpCa3jY6MCnUJBhqib9mJuQkfGgXl08zmhB9K0cdaa0fWA/640?wx_fmt=png&from=appmsg)

我顺着这个产品，找到了张吕敏的Github，找到了他的符合我需求的另一款线稿AI上色工具：
Style2Paints
。

然后用这个产品，就花了几天时间，帮我直接搞定了属于我的所有的上色任务，然后，开开心心的摸了很多天的鱼。

那时候，我还不知道他叫张吕敏，那个时候，我也更是想象不到，6年后的今天，全世界都知道了他的名字，他成了我们心中的，神。

这六年，他的初心，好像也从来没有变过。

六年前，他的
Mangacaft和
Style2Paints就是在线服务免费给大家用。

而
Mangacaft，收益很凄惨。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhu7fL2NicFx1hB87QDW8za1COM0j7DBJwHibuhEYBh3Vgllib5kia0A6BKfQ/640?wx_fmt=png&from=appmsg)

他也有过迷茫。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuvMFdtb5pruOSAC25FxKnMrdHsKUrBMiccZqBRicurwuGfhIWqfZicCYfw/640?wx_fmt=png&from=appmsg)

也有抓耳挠腮的时候。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhuLPjHm2YIhcrib6msuJUnic2DJLXNzDv0ibIhYC4k7OuYEjjp29WHlib3Iw/640?wx_fmt=png&from=appmsg)

网站关了开，开了关，
但是还是一直在开心的做着自己喜欢的事情。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhu0yTPib2VeUwjpjvBJLccKj3z1JM0FZqwliaDxWOOQhx3UXSDIltUy8IQ/640?wx_fmt=png&from=appmsg)

就这样，一直做，一直做。

然后，他做出了ControlNET、做出了
LayerDiffusion、
IC-Light、
F
oo
ocu
s，也做出了
Omost。

现在，他成了张吕敏，成了我们心中的，赛博佛祖。

18年，24年。

我非常佩服他，更是非常的羡慕他，他能做到那么多人都做不到的事，把心中的美好带给所有人，那一股子初心和激情，我非常的羡慕。

我也想成为那样的人，但是也清楚，我实在太菜了。所以也只能做一点，我自己力所能及的小事，去尽可能的追逐他们的背影吧。

最后，我想用张吕敏曾经转发过的一句话做结尾，那句话，最近也挺火。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpztjwXriaIPCeCwwV8iayZhurzHZr9iaI5YdsCw0dhGvukhRS4vUPicung8sqxEch0Vmze3jiczn8dukA/640?wx_fmt=png&from=appmsg)

为天地立心，为生民立命，为往圣继绝学，为万世开太平。

我想，这就是，最大的意义吧。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
