---
title: "一手实测深夜发布的世界首个设计Agent - Lovart。"
发布日期: 2025-05-13
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671036&idx=1&sn=21f4cf60b26ecdf9dae03ce4520d52bb&chksm=f19a7a37404528c40b522ebadf08e8431832787420ef953da6381d762014e4b274614130b2eb"
---

## 摘要

**1) 一句话总结**
Lovart是一款处于内测阶段的垂直领域AI设计Agent，它深度结合设计行业Know-How，整合多种大模型能力，实现了从需求拆解、风格匹配到尺寸延展、图文分离及视频合成的全链路设计资产交付。

**2) 核心要点**
*   **访问机制**：产品目前处于内测阶段，采用排队与邀请码机制。
*   **风格匹配优先**：执行任务的第一步是匹配设计风格（最高决策），优先调用库中的LoRA模型，若无匹配则调用Flux、GPT-4o、Gemini等大模型生图。
*   **自动拆解规范**：能将简单的用户提示词（Prompt）自动转化为极其详细的设计规范，包括固定调色板、总体布局以及系列图中每张图的独立提示词。
*   **二次编辑能力**：画板支持放大、扩图、抠图、消除、修复等主流功能，并支持通过框选局部区域结合对话框进行精准修改（如添加特定元素）。
*   **多尺寸延展**：支持将设计稿快速适配延展为1:1、3:2、16:9等不同比例的尺寸。
*   **图文分离功能**：支持将生成的海报分离为背景图与可编辑的文字图层，解决AI生图文字难以修改的痛点。
*   **跨模态视频合成**：集成了可灵（视频）、11labs（配音）、Suno（音乐），可基于单张产品图自动生成包含脚本、分镜、动态画面和BGM的完整广告视频Demo。

**3) 风险与不足**
*   **语义理解偏差**：在尺寸延展测试中，曾出现未按指令生成16:9尺寸，而是错误生成3:2尺寸的情况。
*   **指令词敏感**：在英文指令下进行尺寸适配时，若误用“Extend”（扩图）而非“Generate”（延展），会导致画面逻辑崩坏。
*   **图文分离不完美**：目前的图文分离功能在还原字符位置时，会造成背景细节的微调改变，且无法完全保持原有的字体样式。
*   **视频生成局限**：在生成故事脚本类视频时，人物一致性和影视级镜头语言的表现仍有欠缺，有待提升。

## 正文

说个超级有意思的事。

今天凌晨，一个AI设计类的垂直Agent工具，在X上爆了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwhLWHcOJjcicyItpnU9IBjichlLoqr9y1FvccMsc7SGvVicYUU3iaTF5IhQ/640?wx_fmt=png&from=appmsg)

可以直接看一下他们的片子。

可能很多老粉都知道，我其实是设计师出身，所以对这种AI设计类的产品，还是Agent的产品，本身就比较关注。

不过比较尴尬的是，他们又是那种内测制，要排队。

不过好像海外都看到Manus的火爆了，所以他们也搞了邀请码机制，关注评论就送码。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwHMR1F9zGKwEyHUj3p0snxTbBIvebW3cFc087ToKqcYNpf75UpicFRtw/640?wx_fmt=png&from=appmsg)

我也就去随手留了个言，大概意思就是：

我是一个中国的AI博主，有一点名气，对Lovart产品很感兴趣，希望可以获得内测资格。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwehYIqTiaK6b5RLv4tRSjYH5g0fI2FnaMeF9juGDsshUK4MDx7Y7riauA/640?wx_fmt=jpeg)

结果，没一会，发现我的X，真的收到了一条私信。。。

说实话，我对这种机会一般是不抱有啥希望的，结果没想到，居然还真的，拿到了邀请码。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwISTnWuy27YGba0ic8eNwW3AFntM3icPPNl9FoZha3UxINjRrgpcIwtBw/640?wx_fmt=png&from=appmsg)

本来都准备睡了，于是果断起床，一手体验了一波。

这个设计类的Agent产品，Lovart。

在玩到早上6点以后，我想说，Lovart真的是有一点东西，虽然因为是内测版，在很多细节上，做的还有一点粗糙，但是大的框架，已经很看到了。

而且，是真实的有用。

这是我做的一些小case。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwD6thibqqZocXuHa40edTXdkLlDeUUicPXntF5nJdr6xSaBw75CPQrfuQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwBUqicmFeuNZdILCoZsmu6QJyXjqvw0szz53cwxv0VnpRyh2jnOdrAew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwBkpicMPy1FicJvfgQgRyvPSPVkSjpaLX2jsNwY5iblicMEQdu9ibiacTFFww/640?wx_fmt=png&from=appmsg)

网址在此：https://www.lovart.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xDIUqwpQ87zjsibGJLMUo9ZvNubI3qGRyZnK512ARH9gA8n7Sf39lDTA/640?wx_fmt=png&from=appmsg)

一进来，就是一个非常有视觉冲击力的主页。

直接点Get Started就行，
你们可能还没有资格，就正常按照流程申请排队就行，当然，你也可以去他们的X评论区留言看看，说不定也会直接给你发。

发完就在这个邀请码的地方填就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwRmcPiazUtmPv7DM7VIDzQEUXYicoiadDrpLDibgs4LV5lhxVmiceiag6tr4w/640?wx_fmt=png&from=appmsg)

如果你有资格了之后。

一进来，是一个非常像AI Chat的界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xx6IbOy9oyUiaOZk4gZ25m17cPVIBYvn2bHWHje1WOibIL8bc3BnARsXA/640?wx_fmt=png&from=appmsg)

很简洁。

但是其实我在各种场合表达过很多次观点，在我的认知里，从来没有什么AI+行业，而是行业+AI，就像我之前写飞猪那个垂直的旅游Agent的时候。

行业里的Know How，才是最重要的，你到底是有什么痛点，有什么需求，有什么场景，什么时候该调用什么模型，什么时候该调用什么工具，这些东西，叠加你的AI的能力，才是真正的护城河。

所以我对Lovart，是真的还有一些期待的。

我们可以在对话框中，随便跟他提一个设计要求。

比如我就写了一段：

帮我画一组“猫猫去世界各地旅行”的插画系列，总共8张图，每张都画一只米白色、站着走路的Q版猫猫，穿着当地的传统服饰，比如去日本就穿和服，去法国就带贝雷帽，去西安就穿唐装。猫的形象要一模一样，要站在画面中间偏下，后面是有代表性的地标，比如东京的街道、巴黎铁塔、西安城墙等等，但背景不要太复杂。画风要偏日系插画，线条细一点，颜色柔和一点，每张右下角能加一句旅游口号，比如“Spring in Tokyo”。整套适合做小红书日签那种风格，尺寸是3:4。

发给Lovart之后，我直接录了个屏，大家可以看一下，就是原来稍微有点慢，一个任务三分钟，我就给加了2倍速。

大家也可以看看复现过程：https://www.lovart.ai/r/f1mjl6f

8个小猫咪，是不是超级可爱的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xNjHWicmZ7bJ4icIsyhZUPsXm5cJEmxGXQQKhaxnAoazz5bqDp5wSydGA/640?wx_fmt=png&from=appmsg)

毕竟是Agent产品，中间的思考过程，其实非常有趣。

在收到我的任务之后，其实不同于所有的其他Agent产品，它做的第一步，永远是匹配风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xnZzoJWlWUBXTfOQiaF8XZDWA0OXjA4wV1x6Mj5iaiaQ33keKgjQJBMtmg/640?wx_fmt=png&from=appmsg)

我这个任务，虽然显示没有匹配到风格，但是我还是想说下。

他这个第一步，是完全没毛病的。

这个其实就是设计任务场景，跟其他的场景不太一样的地方了。

因为在设计场景里，画风就是影响最大的那个爹，就是最高决策。

你风格一旦错了，后面哪怕你画得再好，都是废图。

就像你做一张海报，客户说想要极简风，你整了一套写实叠素材+渐变爆炸+颗粒反光上去，你就是在纯种找骂。

风格不对，全盘否定。

风格对了，哪怕细节差点，大家都觉得你是在一个频道上。

这就是我所说的行业的Kow How，如果你是不懂这个行业的人，你可能意识不到，风格这事，会有这么高的优先级，甚至高于怎么把这玩意画出来的优先级。

我自己写的风格其实比较模糊，但是如果我们非常明确的写一个，噪点插画，它可能就会匹配上了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xmRj5JxaOUCpciaznLl0ubHicoL1rXZvibIG6LF6hBoBrq1LC8EsH7qXjA/640?wx_fmt=png&from=appmsg)

而且这效果确实很好。

我大概扒了一下，这应该是1个LoRA模型。

所以在Lovart的判断逻辑里，应该是会先判断你的设计任务所要求的风格，在他们的库里去匹配是否有LoRA模型能够满足，如果能满足的话，不管从效果还是推理成本的角度，都应该用LoRA模型去做执行。

如果匹配不上的话，才会用其他的大模型比如Flux、GPT4o等等来去画图。

这个逻辑完全没毛病，就是不知道他们库里有多少LoRA。

在匹配之后，其实就是创建执行计划了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xDSRM8JfZTWreIAHBvPkeIqSTqKqT9ibKpImqvttvSEdfHjZoLf1QlrA/640?wx_fmt=png&from=appmsg)

不过有时候，匹配风格这一步，也有可能会被Lovart放在执行计划里，不过概率比较小。

我这个画猫咪的小任务，就被拆成了3步，获取知识、用GPT4o生图、结束。

获取知识这块很有意思，其实就是把我的Prompt，变成了一个超级详细的Prompt。

我必须要全部放出来给你们看，这也是我第一次见到这么详细的在AI上的设计拆解。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xWEYtMG2nLTva3PXKvJfOKPas2KMXBCtlPlfZF6HCzGiacoHS6smoxBg/640?wx_fmt=png&from=appmsg)

不仅写了通用性的设计规范，确定好的IP的样式和总体布局，然后，还列了8个城市，给每个城市，单独固定了调色板和单独的Prompt。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xdwyvQRnWt9wNVnJ3pRn2AGfN4WSBDLj8U5lwrX8ciaHj6fn9PdFeUaQ/640?wx_fmt=png&from=appmsg)

真的，要是每一个设计师，在做一些系列化设计的时候，都能把设计规范和一些差异化的点，描述的这么清楚，那真的不用浪费那么多时间去做一些无用的所谓的视觉统一的工作了。。。

最后，是选择调用了GPT4o，一口气把八张图，全部画了出来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xq32RJdsWvgl0bQAQWMCeTIS2icQaAuUJDIXgeVqys8Bm6N0z7oTa0eQ/640?wx_fmt=png&from=appmsg)

效果非常好。

在我自己一夜的测试过程中，除了GPT4o之外，还有Flux、Gemini，还有Poster Gen，做海报的时候经常会用的，但是我查半天也不知道底层是什么模型，感觉是他们自己做的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoD3cz7ibEs9W6MZK7C4By6xrIQqiaxs9dkfbcj41tT27dLzYNApgqYVlykjNSbDI0aynmTmbZU2ljg/640?wx_fmt=png&from=appmsg)

最后，全流程Ending，Lovart，把所有的图，给你放在了左边的画板上。

并且，二次编辑的功能，做的还蛮全的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwCqnsPCw3ibicTuefibCibxp1SMFu0w2FT5O9D7o9adI7Ga09K8lDt440HQ/640?wx_fmt=png&from=appmsg)

顶上的放大、扩图、抠图、消除、修复、涂抹模糊，主流的功能，基本全都支持了。

而每一张图，也可以单独点击，进行选区选择。比如这个城市，我希望在右上角加一些和平鸽，peace and love才是真正的主旋律。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwwPSI67kodqVOe3yibq4PQRsDiaHOfA3GTgAXaQVNYLCcc1nop85tS5Dw/640?wx_fmt=png&from=appmsg)

我涂上右上角的区域，就可以直接点下面的编辑，也可以添加到对话框中进行精准修改。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwTnDWJlOLeG7OqFaibo6LW72kLlT9vS3athZ6AtqIfibV31J9OxgoibW6Q/640?wx_fmt=jpeg)

发送给他，很快，他就自己把和平鸽加上了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51Vfgjw3wQrGaic6iajhdZ0uT39YpBmEmrGqia2KADNvAJhdgxlNsdWRQplkrEHg/640?wx_fmt=png&from=appmsg)

除了小猫旅游之外，我又让他做了一些海报。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwDn6bxiaZ2JJCIaVKolMnue3icVNErphKuJvj9UlcRtQ6FhnE1YcRFLCg/640?wx_fmt=png&from=appmsg)

还做了一整套游戏UI，我超级喜欢的蒸汽波+复古像素的风格。是我心中的404世界，那种在虚拟空间中，被废弃的城市。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwIIibmVoARKulz71Gd3o5la8VHLFnDPS8LMaaQK2IbibnTC6npiby0Fqpg/640?wx_fmt=png&from=appmsg)

而且在我们日常设计任务中，其实还有很多尺寸延展的场景的，比如这个404世界的首页。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwCH1gib3BrIn2Y4JD4G5e7cXIF8zXut6jR7eo8KjjMJmIAB66ibEdf2YA/640?wx_fmt=png&from=appmsg)

我们可以让他把这个竖着的，再延展成
1:1，3:2，16:9这3个
尺寸。

几分钟以后，他就全部给你改好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwNo4TictFRxuJz1mxVYLmLRuMhicrJl6aDSlvriaA58450jZKpgmZwqcrg/640?wx_fmt=png&from=appmsg)

可惜就是出现了一些语义理解的问题，最后的16:9没给我生成，还是按3:2去生的。

同时，这里需要特别注意，如果是是写的英文，在英文里，这种延展或者适配设计，一定要写
Generate，而不是写Extend，Extend不是延展，是扩图，所以，如果你跟他说Extend的话，会很崩。

走的是纯扩图的逻辑，直接没眼看了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwrPd3IMeKp7y8EOPdn0KAvq8JEKBbWpchoOU6FBbMarErG2NlNUqX8g/640?wx_fmt=png&from=appmsg)

甚至我还发现了，一个非常有趣的事，就是，你可以直接把生成的海报，扔到对话框中，然后说：
Generate an editable text version of this poste。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51Vfgjwl8GicjN2zQdJAwjdY4l39ayeZFIP1icGLy9y4WJneuZo1rOib7V7t3VQQ/640?wx_fmt=png&from=appmsg)

你就会发现文字和背景图，真的被分离了，出来了一个可编辑的版本。

这个文字和背景分离的功能，其实是个超级刚需，做过AI绘图的都知道，文字有时候是要重改的，明明手敲就行，但是很多时候，AI出来的就是一张，根本改无可改。

但是如果我们一句话，能把字体样式、字体本身、背景图给分离出来，那绝对是一件所有设计师有巨大加持的大事。

只不过现在Lovart虽然有了这个意思，会把字符、位置几乎完美的还原，但是把背景做了一些很细节的微调，字体样式也还没有保持住，不过至少看到了希望，未来可期。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwSDxwnPtt7KAbicbfRJXuuMXPffqU1WNXrVrx7jHFba7TGWzUrhBh3aQ/640?wx_fmt=png&from=appmsg)

而且，他们不止能传图改图，甚至他们还集成了可灵、11labs、suno，可以把图片，生成视频，再配上音乐和配音，然后剪辑在一起。。。

比如我就扔了一张非常经典的口红战神Dior999的产品图上去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwUseeicFnYwibrpZrtJIa3F7h9gn4bAGJfgpW0iaEwnD1a2jTyy7kibc2fg/640?wx_fmt=png&from=appmsg)

给了一段Prompt：

我上传了一张高品质的Dior999的口红产品图，请基于这张图的质感和品牌定位，帮我生成一支专业感极强的Dior999品牌广告片段，时长控制在30秒以内。
整个广告需要延续这张图的调性，镜头语言可以参考过去Dior、香奈儿、兰蔻等高端美妆品牌的广告片风格。
请生成完整的视频脚本分镜图，包括文字、画面描述和转场逻辑。然后把这些图转成视频，根据图片主题，加背景音乐。

Lovart先分析了图像，然后写了一段非常详细的，广告视频脚本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwfXPSEAtIcJ2GrHJ9UcDoknVY2807M1fkjEAr1mdrur5I2bxsZX5Qzw/640?wx_fmt=png&from=appmsg)

然后，画了所有的分镜图，和一个可视化的脚本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwRnurDAXZTPUbbBrKcCkmrU78Cdzc3QxxEaOxodRPHnNSY9DyibG7ztg/640?wx_fmt=png&from=appmsg)

随后，他就给这些图片，都用可灵转成了视频，还用Suno，生成了BGM音乐。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoKdQnT1ibnAO2sRp51VfgjwLH9cgJKKs7YPiapPfIR6icsf6V6AqlAYRF3f20Ykchw69oE2V2rfVvoA/640?wx_fmt=png&from=appmsg)

在跑了十几分钟以后，一个还算好看的Dior999的广告视频，出现了。

真的，搓个小的广告片demo，Lovart真的没啥问题。

核心能力，其实还是来自于设计领域的Know How。

用Agent来生成视频+配乐这件事，其实不是啥难事，很多通用Agent都可以做，接接几个API或者MCP就行，但是大家可以去对比一下一些通用的Agent产品，用相同的产品图和Prompt，生成出来的视频审美和质量。

其实你就能看出来差别。

本来我还想用这个功能，来直接搓一段故事脚本，但是我发现，它的人物一致性和影视级别的镜头语言，还有一些进步空间，就作罢了= =

最后的最后，我还是想来聊聊Lovart的意义。

他当然，还有很多的细节问题和不足。

就像我当年第一次看到Figma，意识到设计协作这个赛道会被重写一样。

今天第一次看到Lovart跑完需求→生成→尺寸延展→图文分离→视频合成→二次修改这一整链条，我也觉得：

在Agent的加持下，设计的工作流，未来也不一定是现在这样了。

甚至设计师的定义，可能也是另一个描述。

在没有所谓的设计Agent的时候。

你跟任何AI说我要一张图，它给你的是作品。

但是，在Agent的加持下，你现在跟Lovart说我要一张图，它给你的是产品。

是交付，是资源，是资产。

未来，直接一句话，生成潮玩IP、生成这个IP所有的延展、做完视频、直出3D模型，并不是不可能。

可能，就在很快的未来。

现在的图景，非常的清晰。

每一个垂类赛道，可能都会有它一个专属的最牛逼的Agent。

有大通用的、有研究的、有旅游的、有设计的。

未来，垂直Agent的，一定会更快速的涌现。

现在又是凌晨6点了。

但是我还是还想感慨一句。

亲身参与这个时代里。

实在是，太酷了。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
