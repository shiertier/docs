---
title: "我用AI 3D，终于实现了我的手办自由。"
发布日期: 2024-10-24
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666067&idx=1&sn=368048f9a6aeb17b1eaa37d8d7932310&chksm=f1d8f4965c014f2bb677776873aa8be2924785e74f5f1200b64957d21b856260307209c1aa38"
---

## 摘要

**1) 一句话总结**
作者利用Tripo AI的“图生3D”功能结合FDM 3D打印技术，大幅降低了传统3D建模的人力成本，成功实现了个性化手办与实体桌游组件的低成本快速制作。

**2) 核心要点**
*   **制作动机：** 作者因在市面上买不到心仪的特定形象（蟑螂小姐）手办，决定利用现有的3D打印机自行制作。
*   **AI建模工具：** 放弃耗时的传统手工建模（如C4D、Blender），采用Tripo AI（2.0模型）进行“图生3D”转换。
*   **Tripo AI 性能数据：** 上传图片后不到1分钟即可生成3D模型；提供免费重试（roll）机制；支持30秒到1分钟内的自动骨骼绑定，可直接让角色模型实现走、跑等动画效果。
*   **打印技术选择：** 评估了光固化（精度高但机器和耗材昂贵）与FDM（熔融沉积成型，便宜环保但有层纹）两种技术，最终使用拓竹 A1（FDM打印机）进行生产。
*   **切片与打印决策：** 在3D打印软件中为模型添加脚垫和支撑；为避免多色打印导致时长激增（从约2小时增加至十几个小时），选择直接打印白模。
*   **后期处理：** 打印完成后，使用丙烯马克笔进行手工上色，以最低成本完成手办制作。
*   **行业/应用影响：** AI 3D技术解决了阻碍3D打印普及的“建模人力成本过高”这一核心痛点；已有其他创作者（如sonyx.eth和克罗地亚16岁少年）利用该工作流完整开发了包含定制棋子的实体桌游。

**3) 风险与不足（原文明确提及）**
*   **AI生成的不确定性：** AI生成的3D模型偶尔会出现肢体小错位等瑕疵，需要通过重新生成（roll）来修正。
*   **多色打印门槛高：** 目前AI生成的3D模型是一体成型的，在打印软件中手动分色非常麻烦，且多色打印的时间成本极高。
*   **FDM打印精度限制：** 受限于FDM 3D打印机的物理特性，成品表面纹理相对粗糙，存在明显的层纹，体感上不如光固化模型精致。

## 正文

我真的很喜欢一些奇奇怪怪的小玩意。

家里手办乐高啥的也买了不少。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9CCZjSBjhuCoPibgUdSicC7kDmRswBEKiaRQrPQgrru74bFZIz9sA9HxibQ/640?wx_fmt=jpeg)

但是我一直，想玩一点自己的东西。

毕竟，谁不想，亲手搞点自己的东西呢。

然后周末的时候，在群里看到一个可爱的蟑螂小姐的图，让我超级心动。真的，太喜欢了。就是这个。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9eu85ye5Erg6QdwfBA25Y2sXbu34c2vxolwaFWgrJOuy1llQN0IXicIg/640?wx_fmt=png&from=appmsg)

我当时第一个想法，就是去淘宝上搜，看看有没有这个玩意的小手办。

结果，搜出来的都是蟑螂药，还有那种肌肉大玩偶。

好不容搜到类似的，还都是毛茸茸的，一点也不好玩，也不好摆在桌子上。

翻了半天，生气了，直接不买了。

但是想一想，感觉还是想要，我就秉持着来都来了大过年的都是孩子的良好传统，那不如干脆自己造。

反正我有一台3D打印机。

直接打印好几个，
还能送朋友玩。

说干就干。

3D打印的流程，其实挺简单的，就是两步，先建模，建模完以后扔到3D打印的软件里，它就突突突的把模型给你打印出来了。

那首先，必然是先建模。

第一批，我直接选了我最喜欢的两个蟑螂小姐。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9MAHTCvDibKb6yMmeRicevJBbQ9icQUDN5XFJFU5rFaknNxawV7NeSnh0g/640?wx_fmt=png&from=appmsg)

坦率的讲，要是两年前，我肯定得自己去徒手建模了。

但是如今，让我
自己再去建模那肯定不可能，C4D和Blender我打开都不想打开，作为一个AI博主，要是再回去手工建模，那简直就是就回到原始人了。

AI 3D必须安排上。

这一步，可以直接用Tripo AI，我心中目前最好的AI 3D平台，前段时间他们正好发了他们的2.0模型，精度强了非常非常多。

最关键的是，他们的图生3D，实在是太好了。

网址在此：https://www.tripo3d.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9P2iclKwR940fR8eQ43QP4mO8jFZDylJ0NQjaPoGKPGhu8voicmXRhr7Q/640?wx_fmt=png&from=appmsg)

进去以后，可以直接传图，用图生3D，当然你要是就是想玩，直接文生3D也没啥问题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9arwRDBfvLvEp8cPfdGDf0Riaic6MLiaVajUe17lyv4UYRdj4LQaAUxjwQ/640?wx_fmt=png&from=appmsg)

上传图片后直接点击“生成”按钮，它就会开始生成3D模型，大概不到一分钟的时间就能生成好。

然后你就可以，在网页上，预览模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9hUEcVKfhB9LP1AJ2sHjQXKad7icOU90dK8MiaZuFaZ5G6zWQvXYWQ0icw/640?wx_fmt=png&from=appmsg)

可以看到，几乎跟我上传上去的图片完全一样。

不得不说，TripoAI的能力，还是太屌了。

就是进入详情页
，转动一下后发现，胳膊还是有点小错位，不过这也正常。AI的本质就是得小roll一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M958bqh6v7NBWh8iavs6w0gttib2iaXUJXSm0wV4kmHOGvM9MxuWAGtuFYg/640?wx_fmt=png&from=appmsg)

Tripo的牛逼之处就在于，你不满意，这次重roll是免费的，不像很多的AI视频产品，你的钱可能都roll完了，但是就是没有一个好的片段。

这么对比来看，Tripo良心多了，你不满意是吧，那我就让你roll到满意为止。

但是其实我其实就roll了一次，第二次，就出来了非常完美的效果。

我取消了材质显示，给大家直接看白模。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9l3l4bspOs0XUaRtPasFzksSnjNqXCBf5AzFjGHlaTAOsZZRhk5hoeA/640?wx_fmt=png&from=appmsg)

这结构，这光滑程度，无敌了。

如果你不是玩3D打印，就是要模型的话，Tripo把贴图都给你准备好了，
甚至给你提供了绑骨骼的选项。。。

我这个模型不太好绑骨骼，毕竟是个蟑螂，我换个人形的给大家看看效果。

比如我生成了一个海贼王里的Q版索隆。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9yc5ibL0ZpuDdSsIUaGia3f7ficGWI0mBPlFf8T0iapib9H8OVlqiaW1gynlQ/640?wx_fmt=png&from=appmsg)

直接点右边的骨骼绑定。

loading个30秒到1分钟，骨骼，就直接自动绑定完了。。。非常离谱，真的。

你可以让它
走起来。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9X935EhNb9ZXahj9swwHJC82t3BQhd3NBoAkJYITJ07LQe6EH7Rs8RQ/640?wx_fmt=gif&from=appmsg)

还能跑起来。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M93bYvPRqibWvHTYDzojz0dG43KiaG97qRQvnia0TtjF5Ff5L0ZWrOT06icQ/640?wx_fmt=gif&from=appmsg)

这个对一些做角色动画和做模型的，非常有用。

回到3D打印，我们现在已经有一个模型了。
那现在，就是3D打印了，3D打印过程，其实非常简单，当然你要是没有3D打印机，你也可以找淘宝代打，也很便宜，肯定比你自己买便宜多了。

这里简单科普一下市面上主流的家用3D打印方式，就是
光固化和FDM（熔融沉积成型）。

光固化打印
的原理是通过紫外线光照射一种特殊的“光敏树脂”，本来是个液体，然后一照射就能让他变硬，一层层的变硬，最后形成一个完整的模型。

这玩意打出来的模型，表面非常光滑、细节也很精细，特别适合做一些小巧、复杂的东西。尤其适合那些需要极高细节的手办原型。

缺点就是很贵，机器和材料价格都贵，我买不起。。。

FDM
是更平民更常见的3D打印方式。它的原理其实有点像“奶油裱花”：将塑料丝材（比如PLA或PETG）加热成液态，再一层一层地堆叠，最终形成一个模型。

这种方式就是打印速度更快，而且材料环保又便宜。
缺点就是FDM打印的模型层纹比较明显，模型表面不如光固化模型那样光滑，体感上没那么精致。

我用的是拓竹 A1，这个就是FDM的机子。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9ra2bPBOibwLiaAOxFXoamAny2o6FxnH0a0HS9ia2uNxJTsDKNhYIUViaaA/640?wx_fmt=jpeg&from=appmsg)

Tripo 3D生成的模型，可以直接直接选3D打印机的软件的格式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9kiajrJ052DJsxR1td9K9FNpkPWImoqqSibfwDVmmENnFuP4icyicaM7x1g/640?wx_fmt=png&from=appmsg)

下载好就可以直接拖到3D打印的软件里面去，感觉站不稳的就给它加个脚垫，再自动加一个支撑，要不然悬空的地方打不上。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9hVjgz3SPJiaeauLjTtmibKdPVpxdvZf9ibkhQ9IwicUxCuSod8YXKg153A/640?wx_fmt=png&from=appmsg)

可以打多色的，也可以直接打个白模来自己上色。

我自己是打了白模，因为现在AI 3D的模型生出来还是一体的，在3D打印的软件里手动分色太麻烦了，而且打印时间也成几倍时间增加，原本可能两小时就打印完的玩意，多色可能直接就要十几个小时，我可造遭不住。

所以不如直接打白模，掏个
丙烯
马克笔上色。

是不是非常原始。
。
但是确实效果很好也很省心。

出门吃饭前点击开始打印，到家差不多就打印好了。再花一会的时间涂完色，就，万事大吉。

最后，请看一下我的蟑螂小姐成品。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9vNEFCvSPQsITpV3kicYYLBvwjNqYh79JbtIYvVyD6C5vPfqU1OB5Xlw/640?wx_fmt=jpeg&from=appmsg)

傻傻的，贼可爱。

摆在桌面前，每天光看着，心情都变好了。

虽然表面的纹理确实还有点粗糙，但是已经是我的3D打印机的极限了哈哈哈哈。想做的更好，可能就得换设备了。

不过，做到这个程度，我已经很开心了。

3D打印，真的已经不是什么新鲜事了，但是它从来，也不能让我实现“手办自由”。

因为成本。

不是耗材成本，而是人力成本。

以前，我想打印这种，建个模型，还是挺麻烦的，蟑螂小姐已经算是还比较简单的了，可能几十分钟就能搞定掉，但，如果是上文那种索隆的例子呢？

又或是，这种模型呢？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9G1Y9m4G8T8rzibrFahEgw4MuP04mpF6SiauKP6D3AibylX4HxsqicQq34A/640?wx_fmt=png&from=appmsg)

还有，这种呢？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqvUHS3bSicSiaXlztLXly5M9BpHBQUAKXjibXIo2nvN0e8o19L2HewmVINic5kdtuSsvibvDQKPyzx87A/640?wx_fmt=png&from=appmsg)

这种东西，你要是建模，那时间就不是一点半点了。

一直以来，都不是3D打印不行，而是建模的成本，实在太高了。

感谢AI的发展，也感谢TripoAI，让我们的梦，可以具象化的变成现实。

记得小时候我就我去跟朋友开荒一些德式桌游，那个桌游瘾戒不掉，我们上课的时候，还在小本本上，去设计自己的桌游，但是一切终归是平民，那时候我就想，如果我能随心所欲的创世，建一套自己的棋子，建一套自己的规则，大家都来玩我的游戏，那该多好啊。

直到看到有人，做出了我小时候那本本上的东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoSV5Iqnt4ngNibXJGpoHot0VFnm7lhSg7iccjgsY1uMZU5lMibdQVZiaE3eTTUnphDfzlASTB9jibDcFQ/640?wx_fmt=png&from=appmsg)

sonyx.eth这个老哥，为了参加tripo之前的棋子大赛，用tripo和3D打印，直接做了一整套的桌游。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoSV5Iqnt4ngNibXJGpoHot0WnqZud2LRdHeDPIDuvXaPnJIy3iaBiaSDyibbfTFEic5B7ickb9NLy9rf6Q/640?wx_fmt=png&from=appmsg)

有规则，有玩法，虽然跟我的小手办一样，受限于3D打印的精度，还没有那么的精致。

但不妨碍，他是我小时候，在那个破笔记本上，勾勾画画的游戏的摸样。

还有一个克罗地亚的16岁小哥，也是为了参加tripo的AI3D比赛，也同样，做了一套桌游，一整套棋子，那种震撼让我无以言表，直接看视频吧。

全部是tripo生成3D后，直接渲染的。

我幻想的那个世界，有屠龙的勇士，有永生不灭的魔王，有最明争暗斗的国度，也有灵魂在彼岸的叹息。

是巫妖王的震怒，是地狱咆哮的挽歌，是海拉鲁地下深埋的黑暗，是博德之门上登塔的先锋。

当无形化为有形，那些棋子，就能宛如魔法一样，出现在你的面前。

这可能，就是AI 3D，还有Tripo的魅力。

现在，当AI 3D，摆在你面前，这些儿时的创意，也终于迸发出了无与伦比的想象力。

也能亲手，让我们把幻想变成现实。

即使离那些真正的手办和梦中的世界，还有一些路要走。

但，这也是AI的一小步。

却是我们想象力的一大步。

不是吗。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
