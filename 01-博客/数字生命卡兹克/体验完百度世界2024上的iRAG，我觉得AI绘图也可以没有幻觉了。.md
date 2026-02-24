---
title: "体验完百度世界2024上的iRAG，我觉得AI绘图也可以没有幻觉了。"
发布日期: 2024-11-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666518&idx=1&sn=ca276d8abd972dc089e70abfcb919bec&chksm=f18990270cd6ed9243723f5eddb1dbe6afabd7460fb1a19cc19720be0310f975f4359de0549b"
---

## 摘要

**1) 一句话总结**
百度在2024世界大会上推出了检索增强的文生图技术iRAG，通过结合实时检索有效解决了AI绘图中的细节幻觉问题，实现了对特定人物、地点和物品的精准生成。

**2) 关键要点**
*   **发布背景**：百度在2024世界大会上发布了智能体、自由画布、无代码开发工具“秒哒”以及核心图像产品iRAG（image based RAG）。
*   **核心痛点解决**：iRAG专门用于解决跨模态（图片生成）的“幻觉”问题，避免传统AI绘图（如Midjourney）在生成现实地标或特定物品时出现的细节错误（如天坛层数错误、牌匾缺失等）。
*   **产品状态**：该功能已在百度的“文心一言”中全量上线。
*   **最佳使用场景**：在“明确人物在明确地点做明确事情”的提示词公式下表现最佳，能够精准还原并组合复杂元素（如成功生成“特朗普和霸王龙在广州塔前”或“甄嬛使用小米折叠屏手机”）。
*   **支持垫图**：支持用户上传个人照片或参考图，以保证生成主体（如人脸）的绝对精准。
*   **技术路径**：主要通过实时检索相关图片，再进行重绘和内容注入来实现精准生成。

**3) 风险与不足**
*   **抽象元素表现差**：对于Logo等抽象概念的生成效果不尽如人意（如无法准确将百度Logo生成在腾讯大楼上）。
*   **微小细节仍有瑕疵**：在极细微的元素还原上存在小Bug（如生成的手机壁纸和图标与真实产品非常接近，但无法做到100%完全一致）。
*   **底模质量差距**：百度的AI绘图底层模型在整体画质和审美水平上，与Midjourney、Flux等头部模型相比仍有一定距离。

## 正文

作为受邀媒体，我现在人在2024百度世界大会现场。

在论坛中，听李彦宏讲了最重要的1小时。

这一小时里，他说了很多重要的东西，有智能体、有很好用的正式上线的自由画布，有一个无代码开发工具秒哒。

但是最让我眼前一亮，觉得有点东西的，可能是一个跟AI绘图有关的产品。

iRAG。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5oSD1CwvYsk57yB0HfibkbCvBaU6ALsR0IsggJcbL57Kg5fPibibviaMuQw/640?wx_fmt=jpeg&from=appmsg)

检索增强的文生图技术。

这个东西，还是值得单独拿出来说说的。

不过在说之前，我觉得还是先需要跟一些产业外的人，科普一下什么叫RAG，就是把百度这个iRAG去掉一个i。

RAG的出现，就是为了解决大模型本身的幻觉的，去年ChatGPT刚出来的时候，很多人都觉得他是万能的学者，无所不能的神。

直到对话对的越来越多，大家才发现，神其实并不是无所不能，神，甚至还会跟你一本正经的胡说八道。

于是，为了解决这个痛点，RAG出现了。

本质上，他是不是大模型按照自己的知识库回答，然后先通过一些工程化手段，比如联网搜索，比如文档搜索等等，先把相关信息给找出来，让大模型根据这些信息来进行回答。

直接把答案拍你脸上，你总不能胡说八道了吧。

现在你能看到的
绝大多数的AI搜索、知识库、AI客服等等，几乎都是RAG的延伸。

但是，这些RAG，你能看到，几乎都是文生文模态的，几乎没有跨模态的而。

而百度这个iRAG，有意思的点就是，他不是解决文字大模型生成的幻觉问题的，而是解决图片的。

没错，
图片生成，其实很多时候，跟AI绘图一样，也是有幻觉问题的。

比如我用Midjourney生成一副天坛的图片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5tXxqibxDdadvF8hhJBZj6ibCGJFh8D6LiafSzHdibjAf4kC33kNuGZ9EgQ/640?wx_fmt=jpeg&from=appmsg)

左边是Midjourney，右边是天坛实拍照片。

如果你不看实拍照片的对比，让你单看Midjourney生成的天坛照片，你可能还会觉得像模像样的。

但是当你看了实拍，你就会发现，细节的错误实在太多了。天坛的这个标志的祈年殿，是
三层蓝瓦金顶，中间挂着祈年殿的牌子。

而AI呢，变成了两层，还把祈年殿的牌子丢了。这个就是幻觉问题，而且在一些实际项目中，危害很大，特别是一些跟甲方的合作项目，你们都懂的。

你但凡甲方的车换一下遭形，你看看他们会不会拿搬砖敲你。

不敲进医院都是我觉得最大的仁慈了，真的。

而百度的这个iRAG，他们就是想解决这个问题，所以叫iRAG，image based RAG。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5UgpgkW0rqKKOudopQEVmn4NJ0wF9ZTrMM4dHkN84xlAsWst8DY110Q/640?wx_fmt=jpeg&from=appmsg)

这是他们早上展示的一个case，爱因斯坦在天坛前面抽烟。

左边是iRAG加持后的效果，天坛极准，爱因斯坦也很像。

而右边的四兄弟基本就垮了，有的是天坛崩，有的是任务崩，不过我还真的挺好奇左下那一张是哪家模型的，在没有iRAG的加持下，天坛能那么稳定，还是有点东西的。

这个东西在早上李彦宏讲话的时候，就应该已经全量上线了，我也以最快的速度去文心一言上做了一波测试。

在李彦宏后面的发言几乎没听、错过了AI眼镜的发布，测了一早上之后。

我觉得这个iRAG确实有用，但是也会有很多它的局限。

我总结的最好的公式是：

某人物在某地点做某事。

对明确的物品、明确的人、明确的场景表现较好，但是对于一些抽象的比如logo之类的东西效果就不尽人意了。

我之前妄图想生成挂着百度logo的腾讯滨海大楼，就会非常的抽象。。。

而如果你说人地事，效果就很好了。

比如我可以直接在文心一言里面说：

生成一张图：
特朗普和霸王龙一起在广州塔前剥豆角。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5gdibPjMibcyZIt4fYk8DW2rOo963QbgScKOdfPRk3xBTw2pc2vQWUiaaw/640?wx_fmt=jpeg)

就能得到如此抽象的结果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5Iksmpuibj0vibUSic8EypIk5fnGaernIA5y6gfMyb55ibGkw4pWgKUx10g/640?wx_fmt=png&from=appmsg)

极其精准。

特朗普、霸王龙、广州塔，没有一个有错的。

你也可以生成：

甄嬛在玩小米mix fold折叠屏手机。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h56XCibo4Hfzuw2xmvZicolraVhYLP8f0gC5BlClnicJkqjshCMfibF4ib6Bg/640?wx_fmt=png&from=appmsg)

我的上一部小米折叠屏就长这样，壁纸几乎一样，icon也有小米的影子，就是还有点bug，不是完全一样，但是百度iRAG能做到这个程度，我已经是佩服到底了，更别提，这还是一个甄嬛传的场景，甄嬛的元素，几乎也跟真人一样。

又或者，你可以让建筑，随便出现在任何地方，比如沙漠中的自由女神像。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5iblPmZZicfeL69etEykBf3x8t8NxYkFVicoB3943Q4lv3ov82UZdIvytQ/640?wx_fmt=png&from=appmsg)

比如，在海底生锈的埃菲尔铁塔。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5EEeXMYtJUjqTExJAkPvKnmO9f6wC3JD5Geax7ictcnclibicQUZgibNBEw/640?wx_fmt=png&from=appmsg)

iRAG的优势在此刻被展现的淋漓尽致，那就是，绝对精准。

整体技术路径虽然百度没说，但是我大概能猜到，就是根据用户要求，先去实时检索图片，然后把这部分图片做一些重绘和注入，加入一些其他的内容。但是肯定会有很多更为繁琐的工程细节。

而且我发现，他还可以上传图，来保证绝对的精准。

比如我
把我的照片传上去了，让他给我生成一张
男人穿着花大袄子在打麻将。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5ypmVG9ePicNA5oDAtvyjvJibQ7myRia0uyC6qQd2t7DGfz0xm9mmOLpEQ/640?wx_fmt=jpeg&from=appmsg)

然后。。。就出现了非常抽象的图。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo565ZaCLlNlBf8DDtz45h5XOxxO5dhweMMTbqRHflppqNzwL5VzfgtaZmOGWUwPD1sYPJpbwgrNw/640?wx_fmt=png&from=appmsg)

emmmmmmm，像是真的像。。。

就是这一股子东北气息，是我真的不敢尝试的风格。

非常坦率的讲，百度的AI绘图底模还不够好，在质量和审美上，跟Midjourney、Flux这种还有一些距离，但是瑕不掩瑜，iRAG作为一种基础能力手段，是可以复刻到所有的AI绘图产品中去的。

毕竟精准，是很多时候，非常强的痛点。

我也强烈建议，所有的AI绘图产品，把iRAG这种技术，用在自己的产品里面。

Midjourney如果加上iRAG，那想象空间是真的大。

百度这一波。

是真的做了，非常优秀的东西。

有趣且有意思。

希望后面，再度进化，能再给这个行业，一些小小的震撼。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
