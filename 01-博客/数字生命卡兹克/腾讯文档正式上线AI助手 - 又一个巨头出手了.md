---
title: "腾讯文档正式上线AI助手 - 又一个巨头出手了"
发布日期: 2024-01-29
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661302&idx=1&sn=c06f11f93f2476e995b85dc5430357b7&chksm=f176f93bfb36b4feb0ca32a3723a9e012ab8796637ddcc2414ccd8e5f082a1c7408d19163b36"
---

## 摘要

**1) 一句话总结**
腾讯文档正式开启AI助手公测，以Copilot悬浮窗模式提供多类型文档生成、文档内辅助创作及表格数据处理三大核心功能，旨在完善办公场景防御并探索新的商业化变现空间。

**2) 关键要点**
*   **产品形态**：采用Copilot（辅助）思路，维持原有UI界面，通过增加小浮窗和层级图标唤起AI。
*   **底层模型**：调用腾讯混元大模型，生成内容的幻觉较低，更切合现实。
*   **多类型生成**：支持通过一句话生成文档、PPT、思维导图、表格和收集表（问卷），并支持上传文档进行在线问答。
*   **PPT生成表现**：PPT模板审美在线，能够有效拆解用户内容并进行逻辑串联。
*   **文档内创作**：功能封装较为克制，聚焦高频需求，支持对选中文本进行润色、改写和翻译。
*   **表格数据处理**：核心封装了“写公式”和“生成图表”两个功能，支持通过自然语言精准查找数据、计算复杂占比及绘制可视化图表。
*   **商业化策略**：目前处于“限免”状态，未来有望通过AI功能开启额外付费，拉动产品营收。

**3) 风险/不足（基于原文）**
*   **意图识别死板**：生成特定格式（如思维导图）需使用固定句式引导，否则默认生成普通文档；且容易陷入格式锁定，无法灵活切换生成类型。
*   **交互体验不佳**：必须完全退出APP才能清空AI聊天记录。
*   **知识库同步延迟**：原文档内容更新后，AI文档问答的知识库未能及时同步更新。
*   **模型创意受限**：为降低幻觉，大模型的创意能力有明显减弱，表现中规中矩。
*   **图表美观度差**：表格AI生成的图表视觉效果较丑。

## 正文

其实从很久以前，我就一直期待腾讯文档的AI助手。

主要是因为我是腾讯文档的重度用户，我们公司的大部分文件协同，也都是腾讯文档...

而且对于腾讯的产品体验，我是一直很有期待的。毕竟腾讯最引以为傲的，就是他们的产品体验了，对吧。

所以盼了很久很久，上周五看到腾讯文档终于要全面公测了，不过当时没空，今天终于有时间，可以体验一下了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekHwjla9Co8FfoA5FV5hwaLYAibJibIBskDPQwdZQxfaPED2lgrxAia85qA/640?wx_fmt=jpeg&from=appmsg)

申请链接在此：

https://docs.qq.com/form/page/DQnJoYkdBVWRCT0tS

不过你只要申请了，基本是秒通过的。在腾讯文档自己的通知里，可以看到：

我体验了大概半天的时间，其实你要是硬说，腾讯文档AI比WPS AI、比钉钉AI、飞书AI牛逼多少，那我觉得这也是个非常玄学的事情...
每家基本都很相似，巨头们，更像是被动防御，以及寻找未来时代可能的破局点。
你有我没有，是个很可怕的事情，一些AI的小的功能点你可以没有，但是你要是说，你产品里面，特别是这种办公场景、创作场景里，你一点生成式AI元素都没有的话。
那下场可能会比较惨烈。
这就约等于，对面都特么原子时代开着坦克手持RPG了，你还拿着把长矛跟人肉搏，刚冲出小山坡，就被人直接突突了。闭眼的那刻，你还没想不明白，对面这物种怎么跟你不一样，明明都是人，对面怎么跟天神下凡一样。
所以我说，这四巨头，更像是被动防御，去年被Notion卷了之后，这四兄弟就开始拼命的卷，誓死要守住这桥头堡，如果能顺带再啃点兄弟们的用户，那就更好了。
说回腾讯文档AI。
整体上还是秉持着辅助，也就是copilot的思路，原来的大UI界面不变，增加一个小浮窗，加一个层级。一点，AI窗口就出来了。
整体功能可以大概分成3个大场景：
1. 生成多种类型文档
2. 文档内AI创作
3. 表格内AI数据处理
大概简单的都来说一下。
一.
生成多种类型文档
这个基本就是通用能力了，在首页的那个小浮窗里，一句话，生成各种各样的文档，反正你一进去，它就把这些默认项扔给你了。
能生成文档、PPT、思维导图、表格、收集表（问卷）。最后再来个上传文档或者选一个在线文档问答。
不过他们这个意图识别做的属实有点问题，比如我现在想生成一个关于MBTI十六种性格的特点的思维导图。
如果我说：“
你好，请帮我生成一个
MBTI
十六种性格
的特点的
思维导
图
”
他不会给我画脑图，而是直接写文档了。。。。
你必须先说："请帮我生成一个思维导图"，然后跟着一步一步引导走，才能最后给你生成思维导图。
而生成思维导图之后，你如果不用刚才类似的话去触发，告诉他“
请帮我制作一个PPT
”或者“请帮我制作一个表格”，他就永远都是给你干成思维导图，不管你怎么要求他，跟他说“你好，请帮我生成一个汽车行业分析框架的文档”这种东西完全不行。。。我也是挺无奈的...
这种意图识别，咱没必要非要用这种固定句子触发吧，而且你还必须完全退出APP才能清空聊天记录...这个体验...有点der= =
文档问答也有点问题...因为我的文档是可以更新的。。。当我更新了文档之后，大退清空聊天记录后，再回来问，好像知识库并不是更新后的知识库...就...有待优化。
PPT生成这块，腾讯的审美还是可以的，一些模板做的比较好看，也真的在拆解我的内容，做了一些串联，这个很棒～
其他的，就是正常的生成了，背后调用的腾讯混元的大模型，幻觉确实低了不少，更切合现实，但是相对应的，创意能力也减了不少。中规中矩。
二.
文档内创作
这个就是比较通用的文档内辅助了，跟Nontion、WPS没啥区别。
你给你的文字框一下，就能看到这个腾讯AI助手的小图标。
点这个小图标，就能调出来小浮窗。
整体上，腾讯文档的AI给的一些封装的功能给的比较克制，不多，但是把一些最常用的功能都封装进去了。比如我给一段话润色一下。
整体上比较中规中矩，没啥错，改写、翻译的效果都很正常。
毕竟，这玩意，也很难做出一些惊喜。属于别人有，我也有，但是速度和体验确实还不错～
三.
表格内AI数
据处理
表格处理，还是我比较喜欢的，因为我真的不是很懂各种函数...
腾讯文档在这块，封装了两个主要的功能：写公式、生成图表。
我down下来去年3月到5月我的文章数据。
比如我问他，
找出分享人数是101对应的阅读人数
。
它就会给我先写一个公式，然后非常精准的找出了那个数据～
或者，再让他帮我挑出
阅读次数最高的那天是哪天。问题也不大～
再问一个复杂的：
算出所有日期的渠道来自于朋友圈的阅读次数占比。最后的比例只有4%，就很惨。。。
生成图表就比较简单了，比如我让他：画出渠道为推荐的每日阅读次数的柱状图。也没啥问题，除了比较丑。。。。
写在最后
腾讯文档，有一个最有趣的东西是：
限免。
这也是我为什么在最开头说，
除了被动防御之外，以及寻找未来时代可能的破局点。
原有的场景，用户的付费规模，在这么多年的洗礼下，已经快饱和了。
但是，AI是一个全新的想象。
很有可能，这个会再开一波额外付费，拉一波营收。
这些面向C端的办公、创作者产品。
可能要迎来，最好的时光了。
。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekQcjN5YicuypuZyu6ZcZdKQM52UtA92nF58Ria8lp0eiayDrgvNSiceyuFA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekqib5WIp7mKY9KOk9WYiczlK2CD62fqX4PfSO8BOt3D64aVG9qISIrWaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekobRCVlEQAmmwH407fOA8ibssHoPJeRUI3dmZjjuB4ibFA3q5SonCSW3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpEb84njs7AFzWS6A2iaDseklmJ0IMECpF30GPArYJJVsRIxBCV19lWEa66bsiavcTefKVFYATpicu3g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekFZONSD7R7M997kiaA8ibkUtqwQ25nUiawcMdSW0aYTC4I4XwyAAFNKkCA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsek0HgJyf2D6hgnlNzSAhAcEyexIkA71WhDhBJxIKtyxTzha4SwprrSDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekv29nJicYdCe8wfeqTYlOmL3wCRAKbBv7YFuoO475rbxsn9PiaPRCRkTw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekXedpxqdIPro00Q8zdsbXDLukbpRIiboutiaZeoQ82FX2w86EfWJ5WPhg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekUSM2iaQcbABXTchQGJF96OvWVe0lOQzYicabweaLcTapSd6EOVFKsebg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekxv80ibO5MicbDu4BF5OMOpQIKMChtKoB2dCBCICmpogibjLGIicddAyNng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekGnB5OapKyMwPvsDsdM1ibWKMLnFfibBjDYYajYageJibg3bzKDIxRpPPQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekbveaJWLpI0sfnGuM15XknvjcokXRgF7HoIcm9EaHGHMLJwLIxibQRlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekViaIHE9Oc0iaEW4NkyjEjSDibvOpadjUls9xdibCznNbwXrQnvoiaevwtgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpEb84njs7AFzWS6A2iaDsekyGcSksZgq7SEFsZZFloLyGXORd5YqRF3ICfibFmVCiadkKPwulkbMl0g/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
