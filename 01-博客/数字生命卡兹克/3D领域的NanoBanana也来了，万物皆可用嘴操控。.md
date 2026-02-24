---
title: "3D领域的NanoBanana也来了，万物皆可用嘴操控。"
发布日期: 2026-01-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647679204&idx=1&sn=3ed3b69b86b52f1cbd16b5b8758a6231&chksm=f17f969962990b32231c962e0ae6aa7d62d46cd5af3b397915343d565be56455dfb9852e4131"
---

## 摘要

**1) 一句话总结**
Hyper3D 推出 Rodin Gen-2，成为首个支持通过自然语言提示词对任意 3D 模型进行局部编辑、增删与融合的 AI 工具，有效解决了传统 3D 资产修改中的一致性与数据保留难题。

**2) 关键要点**
*   **产品与入口**：Hyper3D 推出 Rodin Gen-2（访问网址：hyper3d.ai），被称为“3D 领域的 NanoBanana”。
*   **核心输入方式**：支持“图生 3D 模型”，同时允许用户直接上传任意第三方 3D 模型文件（如 obj、fbx 格式）进行编辑。
*   **局部文本编辑**：支持通过框选模型特定区域并输入提示词，进行“添加”、“移除”和“修改”操作（例如将机甲头部替换为特定角色，或直接删除多余的翅膀部件）。
*   **模型融合（Remix）**：支持将多个不同的 3D 模型上传并进行融合生成（例如将人物模型与墨镜模型结合）。
*   **保护 3D 资产核心数据**：与“修改 2D 图片后重新生成 3D 模型”不同，直接编辑 3D 模型可以保留拓扑结构、UV、材质分层、骨骼绑定和关键帧动画等底层资产数据。
*   **保障修改一致性**：实现了“局部、可控、可回滚的增量修改”，满足游戏迭代、影视制作和电商展示中对模型细节（如厚度、比例、特定部位替换）的精确控制需求。
*   **实际应用场景**：修改后的模型可直接导出，用于 3D 打印（文中实测使用拓竹 H2C 打印机）或导入 Blender 等软件作为游戏/动画资产。

**3) 风险与不足（基于原文）**
*   **UI 交互设计隐蔽**：编辑界面的“修改”按钮未直接外露，需要鼠标悬浮在“重做”区域上才会显现。
*   **跨模态转换损耗**：原文指出，任何模态之间的相互转化（如用 2D 图片重新生成 3D）必然伴随着信息的漏损，这也是必须采用直接 3D 编辑的原因。
*   **3D 打印耗时过长**：虽然 AI 建模速度快，但后端的 3D 打印过程非常缓慢，单件打印通常需要 7-8 个小时。

## 正文

周末看到一个好玩的东西。

3D领域的NanoBanana也来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7Sw1tLGic3BhG3sLc5hibTn4mNkps5zP9ThCCHV8icHBSBWNKFvRcXibxBw/640?wx_fmt=png&from=appmsg)

中间有一句比较重要的功能，是我觉得非常有意思的：

可以通过提示进行局部编辑。

玩过NanoBanana的肯定很熟了。

算了补全了一块有意思的拼图。

放下他们的视频。

用嘴来修改一切，真的变成了一个是未来必然的趋势。

图片领域有Nano Banana、视频领域有可灵o1，现在3D领域，hyper3D带着他们的Rodin Gen-2也来了。

这现在应该是第一个也是唯一一个，能用嘴编辑3D模型的AI3D产品。

而且是你能上传任意的三方模型上去，进行修改和编辑。

还是蛮有意思的。

真的，2019年我在学C4D学Blender，在那kuku的手拉box在那渲染模型的时候，真的没想过这么一天。

原来动动嘴，就可以改模型了啊...

网址在此：
https://hyper3d.ai/

进来以后，有两个卡片，一个是图生3D模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7icqAwtgCZLaXHEs2icMqM5LmRZl2DsiajdvZtSvJrGHJbe8P1CBvFRWlA/640?wx_fmt=png&from=appmsg)

另一个就是直接上传任意一个obj、fbx之类的3D模型，就可以直接进行编辑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7yCYr2dB4qyBf06a6SCQibInwwryTphwI90TV6lUWOicYLQRldFpx2xkA/640?wx_fmt=png&from=appmsg)

而这个功能，才是我觉得，最牛逼的。

你完全可以对任意的三方模型，进行二创。

比如我随手可以去
sketchfab上下载一个很爆的模型扔到了Blender里，它长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7qzgDmt1DDrZqZdYwuTnPib0TNSxLojiaUsWTyLabZoDrFbialcxJfPfqA/640?wx_fmt=png&from=appmsg)

过去，想改这种级别的模型，真的非常的麻烦，不管你是自己3D打印玩，还是想做个独立游戏扔进去当个BOSS，还是做个片子去K动画，都是一个非常复杂的事情。

比如我想把它的斧头改成大剑，现在，你只需要扔到
hyper3d的Rodin里，然后，用嘴改就行。

真的，一句话，就是这个效果，极其牛逼。

这就是用嘴改模型的魅力啊。

考虑到大多数普通玩家，可能还没有玩过3D，所以，我直接用从头到尾的图生3D模型的流程，来给大家看看，能怎么玩。

给大家先看个例子。

比如说我这里有个高达图，是之前用NanoBanana生成的，我还蛮喜欢的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7T4CYvlp8Ce5mjOLNETdWicicTicM7NA7GqkCYTRRttciab3QgYEOnrNkuQ/640?wx_fmt=png&from=appmsg)

我们直接给它上传上去。

然后，大概几十秒之后，一个模型就出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7fdoNQvGYmoPEV4EK7fERicIaERlViba8CWRD4jU8h5eNhkaGdEJNgoPA/640?wx_fmt=png&from=appmsg)

这个模型其实还有很多问题，比如翅膀我才发现只有一边，缺了一半。

翅膀跟主体之间的关联，也是没有的，是之间悬空的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7fFuribibSL1H22XKsY5Vl1mZosdzRDtRc8uI7x2BJU8w7iaRRfsVicpRXw/640?wx_fmt=png&from=appmsg)

但是没关系，我们可以修改。

手悬浮到那个重做上，然后就会看到上面冒出来一个修改的按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7aEGOVuYg7QAwrr0NficLSqGA7EaMm6bf36ufwOZBkrmQuWWR15Jb40A/640?wx_fmt=png&from=appmsg)

虽然我也不知道他们为啥不把修改放出来而是要藏在那。。。

选择修改以后，你就能看到出来了一个还非常有科技感的框框。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7YHjuVjGeiaLnmU0X3acfxDCwzdvtHchvupzs5DuSNDiahhs9uNObn8sA/640?wx_fmt=gif&from=appmsg)

这个交互也非常的有意思。

就是你把模型的区域放在框内，当你看到模型的那部分变成了水波纹那种形状的时候，就说明，那块被选中了。

在下面的选项里，我们选择局部修改。

可以看到有三个选项。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7oFj7UQzuicqNDnY4Lh7RZEKSV2ZDnWegnVM5h2ib3LlWLiaRCtNjEXzjw/640?wx_fmt=png&from=appmsg)

添加、移除、修改。

我就想整个活。

于是，我把原来机甲的那个头给框住，然后发了一段话：

把这个模型的头换成蜡笔小新的头。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7ApgJF1m2jCmoBdETMX5rEtSXHYkGnysUniaAVnO4xHzfCzA3SelZ7GQ/640?wx_fmt=png&from=appmsg)

很快啊，就换好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF74v22vvWNsSoe8iczibQLdZQf1AKparmmEjibIf0EhibRvmicicpHntxEn9Ug/640?wx_fmt=png&from=appmsg)

笑死我了，眼睛那块还没有是因为还没有材质，不是BUG，别慌。

然后呢，因为我想把它3D打印出来，那个翅膀打起来非常的麻烦，所以，可以用修改里面的移除功能，直接把他给删了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7moYYHiaZobZhfhANQaaRv6H72kV07qKUkicJueClQZ16ssWISmf5W3AQ/640?wx_fmt=png&from=appmsg)

不一会，就删完了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7EgaLBykibf2xqSoUQUxd3tb2YAeU0T6KCzGTcPGOcqibRia3cqVRkxQFA/640?wx_fmt=png&from=appmsg)

看到这，你可能会有一个问题，就是：

我要改模型的话，我直接用NanoBanana改下图重新扔进去生3D模型就不得了，我为啥要在你这，费劲巴拉的改用嘴改3D模型呢。

讲道理，从这个角度上，你的感觉是对的。

但是3D这玩意，很多时候，会跟另一个词一起结伴出现。

它叫，3D资产。

当你把3D当成资产而不是一个普普通通的模型的时候，那这玩意的价值，就会变得很硬。

3D和图片最大的差别不在于一个是模型一个是平面，或者一个是3维的一个是二维的。

而在于它带着一堆你可能完全看不见、但制作流程极度依赖的东西：

比如拓扑结构、UV、材质分层、法线细节、骨骼绑定、碰撞体、关键帧动画等等等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7P5ibnkZ1fMR1wyicDK9VQZTIDYLUzKiahibBaV1zAAv1EGWic6zaPSyyHsg/640?wx_fmt=png&from=appmsg)

模型已经把这些全部都做完了，都已经绑好了。

这时候你说，我想把原画那个头换成蜡笔小新，我重新跑张图，你们重新搞个模型。

你看看他们会不会把你吊在电风扇上打。

对内容展示当然够用了，但是对于专业的生产管线来说，经常是灾难。

你看，大家用NanoBanana改图，都会强调一致性问题，要强调的，是我改你这个地方，你别的地方绝对别给我动。

3D也是一样的，任何模态之间的相互转化，都必然伴随着信息的漏损。

用嘴改3D真正成立的前提是，它做的是“局部、可控、可回滚的增量修改”，绝对不是所谓的，直接重新生成个模型。

我举2个非常常见的场景，你可能就会了解的更深一点。

第一个是游戏和影视里，一个角色模型要反复迭代几十次。

导演说鼻梁高一点、铠甲薄一点、肩甲外扩两厘米，建模师改的就是局部网格和材质层，而角色的骨骼和蒙皮要保持可用，动画也要继续跑。

你让他每次都重新改图然生3D，那就约等于杀了他，前面做的绑定、动画、物理全要重做，这也完全不符合资产的定义。

第二个是电商模型里面最常见的。

比如杯子换个 logo，鞋子换个鞋带颜色，包装盒加一个开窗。

换张图重生，模型上别的细节经常一起变，厚度、圆角、比例、材质粗糙度都会变。

我们需要的是精确地改那个点，其他像素级不许变，这种需求在3D上更强烈，因为一致性比图片更难保。

所以在过去，基本就只能手改了，AI在后续的edit上，很难有帮助。

这就是为什么，我在一开头说，可以直接用嘴改模型很牛逼，而且，你还可以上传各种模型过来用嘴改，更牛逼。

我们回到刚刚的模型上。

蜡笔小新机甲生成出来以后，我们点击模型确认。

选择三角面的网格就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7COwicMl4tiche1yIV0icvd393Q5ibKqO3ACsJFB51egSTFymzkog6Ss8Yg/640?wx_fmt=png&from=appmsg)

然后确认材质，你就能看到，蜡笔小新机甲冒出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7fppuzXdOVM4TxLge04O7cjLp3vW15eTTGtTFF2WY9dvibK13pYiaiad4w/640?wx_fmt=png&from=appmsg)

不过看着有点素，虽然最后3D打印的时候肯定得是这样，但是为了展示好看点。。。

我又，回去把大翅膀，加上了= =

于是，最终，他就变成了这样。

超级酷。

模型下载下来以后，我们前段时间，正好为了满足公司小伙伴的创作欲，正好我也爱玩，于是就在公司里，配了一台专门搞3D打印的拓竹H2C。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF75k4ia638LxbaG55icLicHMiaw3Z4jf9jjet6XEZTFMdLxDpiauiaFPEALlCw/640?wx_fmt=jpeg)

就这玩意。

于是，我们又把那个蜡笔小新机甲，3D打印了出来，放在桌上当装饰。

真的还挺好看的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7DnsCN21OqE92ibJ8ickiaDEeuVve4zS4q1F8BLADwRlSaH0B7LqpARiaTg/640?wx_fmt=jpeg&from=appmsg)

说实话，AI 3D+3D打印，是真的挺好玩的。

而且不仅可以用嘴来改3D模型，还能玩，remix，就像NanoBanana的融合。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7ucUM9B3F34Gcxj9F3yywAxwx4lp8zCW9GOibhk0majCsF5BSAHgo1uQ/640?wx_fmt=png&from=appmsg)

比如把戴珍珠耳环的少女和墨镜都上传上去，一起融合。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF70UOAib4rWqTHgcCR4iaRcdzBpWniaIL3hP16cibSj1d9sTDJRvM2boicW7A/640?wx_fmt=png&from=appmsg)

还把一只金毛，跟怪奇物语，融合了一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7HmyJ9DjmNXess1kZCjwTCv3aLvmc9lGUhlEtuGFAsVL1qUsjpvGTEg/640?wx_fmt=png&from=appmsg)

然后，也全都打印了出来。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7V2XNhu5x3ibqp2306sVc6gDevryTBqD4YbGHpHnQZfrWxCP5DO9Taibg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqUwSPZLxXfTiaI97M9ldoF7oh65TYuq9gY5GicD80f7nIpu8YluVJnT7CTHFIjFtBRkRh0ibfm5D6Bg/640?wx_fmt=jpeg&from=appmsg)

真的，如果不是3D打印实在太墨迹了，懂不懂就是7、8个小时一个。

我真的感觉，我能打一车。。。

现在的时代，真的是一个很棒的时代。

未来的一切，可能绝大多数，都是用你的语言、你的文字，来驱动一切。

好多人说，文字已死，视频当立。

但是我们现在，文字的力量，好像被拔的无限高。

用嘴操控一切。

就是超棒的未来。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
