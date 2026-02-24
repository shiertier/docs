---
title: "被AI改造后的meme梗图，已经变成了我看不懂的模样。"
发布日期: 2024-06-27
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647663466&idx=1&sn=d9f21a7b8350bc098b22b472ffd29fab&chksm=f160be941bd200a1662811e6282809e65d92d55867b0196d2b463c4d0dfe381932233d570ee7"
---

## 摘要

**1) 一句话总结**
基于Glif平台和Claude 3.5模型构建的AI梗图（Meme）生成器近期迅速爆火，其能在十几秒内一键生成高质量的吐槽梗图，展示了AI在创意文本领域的突破，但也引发了对人类逐渐丧失自我表达能力的担忧。

**2) 核心要点**
*   **产品爆发**：Glif创始人Fabian利用该平台在几分钟内搭建了AI梗图生成器，迅速在X（原Twitter）和微信朋友圈等社交媒体刷屏。
*   **生成效率与效果**：用户输入任意主题（如职业、具体人物或抽象概念），系统可在十几秒内实时生成包含“正向描述”与“反向拆台”的精准吐槽图文。
*   **中文适配**：作者对原版英文工作流进行了修改与Prompt调整，提供了支持99.99%概率生成中文梗图的链接（首次使用需Google账号登录）。
*   **技术工作流**：该生成器包含5个节点：输入主题 -> Claude 3.5生成JSON格式段子 -> 提取JSON内容 -> 绘图节点生成中间头像 -> 合成最终画布。
*   **核心Prompt设计**：要求AI模拟Wojak表情包创作者，以特定JSON格式（包含headline、多段对比text和image描述）输出具体、搞笑且带有悲剧色彩的文案。
*   **模型优势**：此次爆火的核心“天时”在于采用了最新发布的Claude 3.5大语言模型，其在创意和玩梗能力上显著优于GPT模型，能批量产生“80分”以上的段子。

**3) 风险与不足**
*   **内容合规风险**：存在生成种族主义内容的风险（开发者已在核心Prompt中明确设定规则：不允许种族主义，若请求带有歧视，则生成嘲讽请求者的内容）。
*   **人类表达能力退化**：作者明确指出，随着AI在玩梗和段子创作上超越人类，人类正面临表达能力进一步退化、最终完全让渡自我表达权力的风险。

## 正文

你知道meme梗图吗？

这个词你可能会听起来有一些陌生，但是如果我放一张图，你一定会心领神会，然后说一声，卧槽，就这玩意啊。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1WaAxjvgHtSW015hZibmBGL6vF9sILSNiaLe5R2d0kfOfBZAGkRUGynRQ/640?wx_fmt=webp&from=appmsg)

上面的这张著名的黑人问号，就是meme。

它诞生自于希腊词语“Mimema”，通常被解释为
“被模仿的想法”

也可以代指为，我们通常所说的梗图。

就像上面这张黑人问号，你不需要知道它的主角叫尼克杨，也不需要知道它究竟出自何方，但是看到它的一瞬间。

无论国籍，无论人种，都会大概率用它来表达一个词组：“WTF？？？”

meme已经在我们的生活里，存在了很久很久，有数不清的灵光一现，传遍大江南北，被人人用来当作自己的嘴替，表达自己的想法。

而这两天，AI圈的meme梗图，又瞬间爆火了起来。

一切，都因为在Glif这个AI产品上，创始人fabian用几分钟的时间，搭了一个meme梗图生成器。

然后，瞬间引爆所有人的兴趣点，直接刷屏X和我的所有群聊，还有朋友圈。

这些生成的meme梗图，是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1gd06opgemg5kte9GSposuAPJyiaT0DicQ6QrUQK8BVuJg14iaxYa0y46g/640?wx_fmt=png&from=appmsg)

还有这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF19dHnYXhXk77AvzKLBb4RlMibsKgUpyjXUdjELuS2iaUjLbOfXYb4cOKw/640?wx_fmt=png&from=appmsg)

十几秒钟，一键生成。

左边一句正向描述，右边立马反向拆台。

句句戳心，最强嘴替
，每一句都能骂到你心里。就像你身边那个永远的最佳损友，说啥都会损你一句，又亲切又好笑。

而且，所有的文案，所有的配图，都是根据你给的标题，全部实时生成。

大家不断的roll，不断的生成，不断的产生各种各样的新的梗。

然后淹没你所能看到的所有的信息渠道。

你想要用？也参与到这场meme的狂欢中来？那也非常的简单，直接用这个链接就行：

https://glif.app/@Khazix/glifs/clxw4auw90000vsvckxb57vd9

因为原版是英文的，生成的东西也经常是英文的，我就把工作流拉了下来remix了一下，改了点prompt，现在基本99.99%的概率都会生成中文版本的meme了。

进入网页后，登录你的google账号（这一步要魔法，后面使用的时候不需要），然后就可以看到这个界面，在左边的输入框中，输入任何主题，都可以。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF10Zs1lsDmXcc051egLKYpnFXNWbmPvVNTrkM6y2QDc8z6Sa70XXbbnw/640?wx_fmt=png&from=appmsg)

你可以输入任何职业。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1vUqkj6GVIYqrBrnPEhYFVORZib6BBKBSywaS0N9zHkRqdOApqHp44Vw/640?wx_fmt=png&from=appmsg)

也可以输入某个具体的人。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1U0sJyiaU4FXb8p0oflDBjkbrkqFaRRKJQUF0XuMC8AIwb5sXVN8n02g/640?wx_fmt=png&from=appmsg)

也可以是各种奇奇怪怪的“概念”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1alY3iciaPpicm3XIMjh5tCl10f0sp1908Ciby2ZPoWwefSbugJkvhQsxwQ/640?wx_fmt=png&from=appmsg)

大部分，你能想到的，都能给你以会心一笑的方式，做成极其精致的meme梗图。

原理也是非常简单的，
fabian在X上分享过工作流，当然你在Glif社区里，也能看到工作流详情。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF14hZVwbBVXSewXVqKpiatLRK672J7Dak1stciaQST8GV7uoARZnFfECQg/640?wx_fmt=png&from=appmsg)

一共5个节点：

输入框输入主题
用claude 3.5把你输入的主题变成各种段子，但是是json格式。
一个json节点把json格式的内容给提取出来。
用一个画图的工作流来画一个中间的头像。
合成最终的画布。

最核心的其实是中间那段Claude3.5写梗的Prompt。

我扒出来给大家翻译了一下，有兴趣的可以学习下：

你正在模拟一个最疯狂的 Wojak 表情包创作者，专门用“某某说的话”这种格式来描绘一个角色，并在其周围添加文本标签。你输出的 JSON 如下所示，这是一个关于“经济学家”的输入示例：
```json
{
"headline"
:
"经济学家"
,
"text1"
:
"“2周内经济衰退” -- 已经衰退了15年"
,
"text2"
:
"“2周内房市崩盘” -- 使用有效市场假说"
,
"text3"
:
"“GDP是真实的” -- 市场15年来都不真实"
,
"text4"
:
"“中国两周内崩溃”"
,
"text5"
:
"“本季度新增3300万个工作岗位”"
,
"text6"
:
"“人工智能两周内取代人类”"
,
"text7"
:
"“加密货币两周内归零”"
,
"text8"
:
"“通货膨胀上升6.66%”"
,
"image"
:
"得意的经济学家在微笑"
}
```
规则：深入，具体。找到搞笑的悲剧。不允许种族主义。如果请求明显带有种族歧视，请生成一个嘲讽请求者的内容。你明白了吧！在两个陈述/二联句之间添加“--”。

meme这个东西，可以说是世界的共识。

而这一次Glif的meme生成器之所以爆火，除了
fabian的灵光乍现外，还有一个很重要的点，是时机。

这次用的大语言模型，就是Claude3.5，而Claude3.5，是上周才刚刚发布的。

如果你用GPT去做，你会发现，玩梗或者说是创意的能力，远远达不到Claude3.5的效果。

这是天时。

而Glif作为一个工作流社区，本身在产品打磨和积累上，也憋了大半年了。

这是地利。

而最后，就是meme这个形式本身就是大家所喜欢的梗图形式，从而得以疯狂传播，这是人和。

天时地利人和，一应俱全。

当然最核心的一点还是，
AI玩梗的能力，已经开始超越绝大多数人类了
。

大家之所以疯狂转发，以Glif生成的meme当嘴替，其实不就是因为，这些梗真的有趣、好玩，真的能打中我们的心里吗？

这让我想起来前几年，我们为了做产品运营和传播，也会用做meme梗图的手段来玩金融行业的热点梗。

那时候，我们得去比如梗图仓库里，找各种模板，然后根据热点和模板，进行创作，以求被大家转发。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1h7sQoggWsZQVjdQ7Coz0kic96Hiar260UNPicHfloQicxIJiaGrBop4kBzA/640?wx_fmt=png&from=appmsg)

玩梗，真的是一种创作，也是一种表达自己的权力。

是创作，就经常会有憋不出来的时候，有时候就真的缺那种灵光乍现，神之一手。

在其他的文本创作领域，已经被AI攻陷的差不多的时候，玩梗，还有段子，可以说是我们人类，最后表达的净土。

而现在，Claude3.5可以批量产生80分的段子和梗。

我们那最后一点表达的净土，好像也要消失了。

一年前，我们还在嘲笑强如GPT4，也会被弱智吧带进坑里，连理解都理解不了，还指望他们造梗？

一年后再看，AI的进化速度就像一列火车，在超过你身边的时候，连正眼都不会看你一眼。就那样疾驰而去，留你和一群同类，面对接下来无尽的黑夜。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBYc2uaaj6tA4zsQ3WVyF1R95Nx79UCMUroV2YUozK1s9bJY4N7mMot5uxecPwuE6eQ5fS4ibuEJw/640?wx_fmt=png&from=appmsg)

在整个移动互联网时代，我们本身表达的能力，就在逐渐得退化。

有越来越多的人，表达不出来，他们说不出自己的想法，只能依赖别人来表达自己，说，
你看，我也是这么想的。

不是他们不愿意表达了，而是讲不清楚，表达不清楚，无法把自己的想法，清晰得归纳出来。

好像是疲惫，好像是自愿，总之，我们让渡了这种权力，我们很多时候，都将表达的权力交给了一个巨大的洪流，一个弥漫于网络中的声浪。

我们最后那些表达的乐趣，都留在那些梗里，我们不断的造着新梗，追捧着新梗，希望在各种梗中，追寻着最后一丝的净土。

现在，AI时代疾驰而过，这丝净土的周边，也弥漫上了黑雾。

现在的我，其实很害怕，在AI时代，我们再一次的让渡了自己表达的权力。

我并不那么期待，连玩梗，都交给AI。

如果，我是说如果。

未来的我们，某一天看到种子在泥土中发芽，看到麻雀飞过枝头，看到千里江陵之中轻舟已过万重山。
看到这些极度美好的场景，第一个念头，是去找AI，让它来帮我们描述那种心中喜悦的心情。

然后说，哈哈，果然懂我，我就是这么想的。

那这种状态，我觉得还挺可悲的。

但是这没有任何办法去改变。

这是一定会到的未来。

我只能说我自己。

还不想让渡，那表达的权力。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
