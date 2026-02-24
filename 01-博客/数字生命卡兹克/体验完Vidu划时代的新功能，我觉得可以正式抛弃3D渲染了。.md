---
title: "体验完Vidu划时代的新功能，我觉得可以正式抛弃3D渲染了。"
发布日期: 2024-11-22
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666767&idx=1&sn=38fe4671af5681f3a74ee2a825f395a1&chksm=f155bf8d3bb2725c5923a990c88c8302d9bd0caefb1eb760eb6ae48b27300793f28f7e51755d"
---

## 摘要

**1) 一句话总结**
Vidu 1.5 推出“多主体一致性”功能，支持通过最多三张参考图实现人物、物品和场景的高度一致，为动漫风格视频和电商广告等领域提供了替代传统3D建模与渲染的高效解决方案。

**2) 关键要点**
*   **核心功能更新**：Vidu 1.5 上线“多主体一致性”功能，解决了单片段视频生成中的风格一致性、角色一致性和场景一致性三大难题。
*   **输入与操作方式**：用户最多可上传 3 张参考图（若需更多主体，可将多图拼接到一张图中上传），配合提示词（Prompt）即可直接生成视频。
*   **角色与场景组合**：支持任意人物、物品、场景的自由组合，例如“人物背影+另一人物正脸”（如梅西背影转头变宋小宝）、“多角色+特定场景”（如马斯克与甄嬛在故宫）。
*   **替代3D建模**：支持上传人物三视图直接生成动态视频（如Dimoo盲盒角色），或上传“物品+场景”（如Apple Watch在特定背景旋转），可跳过传统的3D建模与渲染阶段。
*   **生成速度与质量**：生成速度极快，720P 分辨率的视频生成时间不到 1 分钟，速度与 Runway 处于同一级别。
*   **2D动漫风格优势**：Vidu 在 2D 动漫画风的稳定性上表现极佳，是目前该领域的领先者。
*   **优化工作流**：简化了此前的创作流程，创作者无需再依赖“Midjourney出图再转图生视频”的繁琐步骤。

**3) 风险/不足（基于原文提取）**
*   **行业通用痛点**：当前的视频大模型在处理风格化动漫视频时，经常会出现变形和识别错误，甚至会将动漫参考图错误生成为写实或3D风格，稳定性较差。
*   **场景一致性技术空白**：在 Vidu 1.5 推出该功能之前，AI 视频领域对于“场景一致性”几乎没有任何有效的解决方案。

## 正文

这两天，在X上看到一个很酷的2D动漫AI视频。

我直接放一下，强烈建议看完。

当时第一遍看的时候，不知道为什么，心里的二次元之火熊熊燃烧。

我也一直都是那个，热爱纸片人的少年。

片子在动漫画风的稳定性上，强的可怕。

这个作者，是一个非常喜欢做AI视频，而且是动漫风格AI视频的创作者，叫Naegiko。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmEFKvl9kap9YneUtqcPiamRXbibib2nUqmVmMia6EnAa3iaeIDcNe7EicqFSA/640?wx_fmt=png&from=appmsg)

虽然片子只有10万播放，但是，很多大号都直接转载他的，总播放量破百万肯定是有的了。

这个AI视频的工具，来自Vidu。

在评论区的下面，哥们也在给所有喜欢做动漫风格的人，安利Vidu。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmOH6737jNBdLrBMDw5RH3jwTb8alu3tUyFjqjzCdjib50oX7Iyu0M9NQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmDEnVfOTCCano0R5wWkF8p3e1OZL4TImNhhPJ8bOsbUtcwibxmRiaCD1Q/640?wx_fmt=png&from=appmsg)

又是Vidu。

其实很多人上周也在催我写Vidu1.5版本的更新，但是事情实在太多，本来上周五打算发，结果出了点小毛病一波直接干到医院，一拖也就拖到了今天。

其实坦率的讲，现在的视频大模型，在写实上效果都能卷的还不错，但是在一些风格化的动漫视频上，经常会出现一些变形和识别错误。

甚至有的还会把你给的动漫的参考图，直接给你在过程中变成写实或者那种3D风格的，稳定性很差。

而对于Vidu来说，在我测试的这几个月里，Vidu的2D风格，就是现在最强的，也是他们之前，最大的特色。

但是Vidu1.5的这波更新，如果只是模型质量提高了一些，语义理解强了一些，其实坦率的讲也没什么好写的了，大家对AI视频模型的更新已经有点趋近于去年语言大模型的感觉了，已经有点免疫了。

需要一些更直观的功能，才能让大家感觉到，很酷的感觉。

而Vidu1.5版本这次的更新，刚好就有一个我觉得划时代的新功能，叫：

多主体一致性。

我先放两个视频，让大家先直观感受一下，这个东西是个啥。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWm3ghxOh99pmiaRPOBlWNcJtt2anpoOGICjAU8QVPWAK6AmtGd7XmSmJA/640?wx_fmt=gif&from=appmsg)

衣服是梅西的10号球服，转过身来，是宋小宝，然后振臂高呼。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmV83vqHcZm3BibmdRO8v5xuKLVx3uUmLOs00iaSE0RwfNkWwnrIEYOCeg/640?wx_fmt=gif&from=appmsg)

来自朋友
@卡尔
之前做的一个case，马斯克和甄嬛漫步在故宫中，还动态非常大的给屏幕面前比了个大拇指。

现在应该能模糊的感觉到了一些，来自多主体一致性的强大了吧？

用最简单的话解释，就是你可以传至多3张图。来实现任意人物、任意物品、任意场景的一致性。

比如梅西那个case，就是上传了梅西的球服+宋小宝的脸，然后用一段Prompt：
梅西背对着镜头，慢慢转过头是图中的男子在冲着镜头笑。直接生成的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmT8CVGBvkzutUqMP36tdjribRYQhpMH7YeCLef4X1ONlibdYYPicfTibOHg/640?wx_fmt=png&from=appmsg)

而马斯克和甄嬛，则是上传了一张马斯克的、一张甄嬛的、一张故宫的图。然后用一段Promtp：一个穿着黑色衣服裤子的男人和一个穿着黄色中国古代服装的女人走在宫殿外的路上。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmnvvvCodarIq1lUH5FOvth3jC2S3RNvrpIamy2m3x9WuIBc7UicMFs5w/640?wx_fmt=png&from=appmsg)

就出来了完美一致的视频。

这就是Vidu1.5这波更新、最酷的功能，多主体一致性。

在我看来，可能是现在很多人意识不到，但是在AI视频领域，可能划时代的一个技术。

我们常说AI视频想进入专业影视领域，除了最终质量之外，一直以来都有三个一致性要解决：

风格一致性、角色一致性、场景一致性。

如果连在单个片段里，这三个一致性都没法解决的话，那别提电影这种最高殿堂的产物了，连一些剧集都够呛。

而过往，风格一致性已经解决的还行了，角色一致性Vidu在今年7月份的更新中其实上了一版，而场景一致性，一直以来几乎没有任何解决方案。

这一波，Vidu1.5直接用最简单开箱即用的方式。

解决了所有单片段中的一致性。

很强，非常强。

你终于可以不用担心，你的广告、你的片子中，人物角色形象不一致的问题了，也不用去用那个蹩脚的Midjourney出图再图生视频的流程了，而是直接找到你想要的，扔进去，加一段prompt，完事。

这个影响，可能非常深远，更是一道，黎明的曙光。

Vidu网址在此：
www.vidu.studio

进去登录以后，就能看到这个参考生视频了，打开那个多主体一致性功能，你就可以传最多三张图片作为参考。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmTiaYnGuAbf6y1o4ic34GLVzjl5DUibWv0DbdEDmQe8xkcAibkyriaQAGgQA/640?wx_fmt=png&from=appmsg)

比如，我们传一个奶龙和一个鸡哥上去，让他两，来一波开心的跳跃。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmhQcQyicw0RI6YlogamyCG2qsbHFgnzZgiaCHWbUhZNAKDG5EBqZ6RZDg/640?wx_fmt=png&from=appmsg)

Vidu1.5的速度也非常的快，我选的720P，不到1分钟，就跑出来了，速度上跟Runway是一个级别的了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmF4cs9da22ooic2RVyVfBHSZSWpflZjiaVSPMCUCH7wSej0QC0ndW4Y8Q/640?wx_fmt=gif&from=appmsg)

效果也是非常的魔性。

我能对着他两跳看一个小时。

鸡哥和奶龙，在主体上，几乎是跟我传上去的图片，一摸一样，完美的实现了一致性。

你可以用这三个图片格子，来自由组合，
来实现任意人物、任意物品、任意场景的一致性。

这个事情非常的好玩。

比如上面奶龙和鸡哥的就是，
人物正面+人物正面
。

你也可以传一张人物背面+人物正面。

比如还是宋小宝。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmffB8VR8Nl6S9qpObGqEYzJs7UUzmlGbkZ9crHA4GLiaRBKfm7tn9mcA/640?wx_fmt=png&from=appmsg)

人物脸可以传两张，更强的保证人脸的一致性。

Prompt写：女生转过身发现脸是该男子。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmWSmrOBlBOD7hteeTseCiafW0eibVMAskiaDU9Rlbqlfiap9ia85kt2jk1Og/640?wx_fmt=gif&from=appmsg)

对不起了宋小宝老师。。。。。

还可以是一个人物的三视图，直接实现3D人物级别的一致性，3张图，就可以直接跳过建模阶段直接出成片。

我随手拍了我非常喜欢的Dimoo，之前的熊猫款的三视图。然后扔到Vidu里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmcsPgS1yLPSy71xV3etJ3mhgWlGKySBjgOBOkU53lQiarbv0N1U7zD5w/640?wx_fmt=png&from=appmsg)

然后不到1分钟，一段Dimoo在森林里的视频就做完了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmfvvZU4kMXibjcQLNt2AdYib3mGBKIGZjQhcRIQ2iaM38ZUb5ZMJuQuacg/640?wx_fmt=gif&from=appmsg)

稳定的要死，以后这种片子，谁还建模渲染啊。。。

你也可以，人物+物品。

比如一个女人喝一口可口可乐。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmPxwRQx2auXk4AXMtwdfWxPst17QYq53z8nXgHjoVdlsesbXuLTCYAg/640?wx_fmt=gif&from=appmsg)

向伟大的AI致敬。

甚至，Vidu1.5的多主体一致性不仅对角色是一场革命，对电商广告也是。

直接物品+场景，以后还渲染个屁啊。

比如APPLE watch。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmaROLM3NWWLxPsFH4QYZ6LKrEZBocPQbbGia0Md0u6Nha0slFV5gupbw/640?wx_fmt=png&from=appmsg)

我让他在这个场景里面来个360度旋转。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmLM7qJqFmiadU39ZmPRmzC66U8lqT3zBIsRUdFbXOKdWBV3YhobGXeMA/640?wx_fmt=gif&from=appmsg)

这个多主体一致性，绝对是我最近见过，可能是AI视频领域，最有趣也是最有用的功能之一。

想起来很多年以前，罗子雄在TED上做的一个演讲。

讲的就是创意。

创意其实很多时候就是借鉴和组合的能力。

比如把这些元素，随机组合。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqiafianibNyibwq1IFVmia9PyWmUSwCy0xc1RmpHicy5z9lF0RVHVzaqgaW6IYSYMclSTJB7cWFic9mrSFA/640?wx_fmt=png&from=appmsg)

就会得到很多很多有的东西。

而Vidu1.5这个多主体一致性，其实也是组合，你可以不断的组合。

人物背面+人物正面、人物三视图、物体+场景、人物+场景、人物+物体等等等等。

太多了。

甚至你如果觉得三张图片不够用，还可以上传的时候，将多个主体拼接到一张图中上传，展开无限可能。

新的技术，总是能进一步推升我们的边界，让我们的想象力，终于可以更为宏远的延伸。

感谢Vidu，感谢这个多主体一致性。

我觉得，我又可以，继续造梦了。

国产的AI视频，也真的是越来越好了。

Vidu、
可灵、海螺、即梦、pixverse，每一个都在市场上，杀出了自己的一条血路。

为你们，献上我最崇高的敬意。

以及，最好的祝愿。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
