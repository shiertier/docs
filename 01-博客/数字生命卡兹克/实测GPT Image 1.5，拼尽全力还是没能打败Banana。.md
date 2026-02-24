---
title: "实测GPT Image 1.5，拼尽全力还是没能打败Banana。"
发布日期: 2025-12-17
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647677862&idx=1&sn=e4ad65f982e911fc633af843e41c89c9&chksm=f12a7d9996be28554e3a6ceda0e0b79770953f7f92b0ae621e11a352e826520765d4e5d20856"
---

## 摘要

### 1) 一句话总结
本文实测了OpenAI新推出的GPT Image 1.5图像生成模型，通过多维度对比指出其在信息准确性、真实质感与精准编辑能力上总体仍逊色于Google的Banana Pro。

### 2) 核心要点
*   **版本与界面更新**：OpenAI发布了小版本升级的GPT Image 1.5，ChatGPT同步上线了全新的图像界面，支持快速风格转换（如糖曲奇、毛绒玩具）和快捷预设（如专业求职照）。
*   **生成速度提升**：实测显示，ChatGPT上的图像生成速度有所提升，单图生成时间约在40秒到1分钟之间。
*   **信息准确性（劣势）**：GPT Image 1.5在中文文字生成上表现极差（字迹如鬼画符），且在日历排版等逻辑测试中出现错误（如28天后继续生成29、31），表现远不及Banana Pro。
*   **真实质感（劣势）**：GPT Image 1.5生成的照片对比度和饱和度偏高，带有较明显的“AI油腻感”；而Banana Pro的质感更贴近日常与真实胶片。
*   **精准编辑（劣势）**：在局部替换和换装测试中，GPT Image 1.5出现了透视比例错误（丢失近大远小的物理关系）以及过度修改（如错误更改未要求修改的衣物和画风）的问题。
*   **世界知识（平局）**：两者互有胜负。GPT Image 1.5会出现知识错误（如混淆动漫角色名称），但在特定细节（如准确绘制8:22的挂钟）上优于完全翻车的Banana Pro。
*   **行业格局**：作者指出Google在半年内完成了Gemini 2.5到Banana再到Banana Pro的快速迭代，目前在图像生成领域处于领先压制地位。

### 3) 风险与不足（Gaps）
*   **中文生成缺陷**：模型目前无法准确生成中文字符，排版与文字内容完全崩溃。
*   **交互体验不佳**：新版图像界面的交互设计被指混乱，操作时在各个界面间跳来跳去，且深色模式下的粉色背景视觉效果不佳。
*   **逻辑与常识漏洞**：存在数字逻辑错误（如日历天数溢出、要求7根手指却画成6根）以及特定领域知识的幻觉（如错误匹配角色名）。
*   **空间透视能力缺失**：在进行图像元素替换时，模型无法维持原图的物理空间关系（如人物与镜头的距离比例失调）。

## 正文

在Google的Banana淫威之下。

OpenAI憋了很久之后，终于把他们的图片生成模型给掏出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgL4dHuZqiapL1lhhdOnNRCb6IXct296Ibd2hCgrzI5XGy5dHtJoDlTwg/640?wx_fmt=png&from=appmsg)

看一下他们的宣传视频。

突然想起了今年3月26号的时候，OpenAI第一次掏出GPT-4o的生图模型，也就是GPT Image 1.0，然后同天，Google发布了
Gemini 2.5 Pro，事后看，Gemini 2.5 Pro肯定是一个伟大的模型。

但是那一天的时候，在整个X上、各种群里，大家讨论的全部是GPT-4o。

那时候，我们说，
1.5 Pro被Sora淹，2.5 Pro被4o淹。

结果半年过去，风水轮流转，现在属于OpenAI天天被Google摁在地上打。。。

所以这一次，不是传闻中的GPT Image 2.0，跟Nano Banana Pro一样，用了一个小版本号去升级，用了1.5。

有一种感觉，就是怕被Google打脸。。。

半年前，OpenAI意气风发，谁能想到，如今是这样的结局。

跟随着新模型的上线，ChatGPT上，也上了一个全新的图像界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgYlxjFfaWaLZ2qicT01tgVnpqTt0L4LqjWGHJaaPpC2YibuaSicHkAJYrw/640?wx_fmt=png&from=appmsg)

点开以后，是这个样子的。

就是这个粉粉的背景色，放在深色模式下，真的不好看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgmgMRe7lAk116jzFLMuT03S4rmib4jNX3vH6YNyUMPg6oplKZ0hAGPGQ/640?wx_fmt=png&from=appmsg)

OpenAI其实明显感觉到，在C端体验上，做的确实还是比Google更上心，把风格和部分的快捷指令，单独拎了出来。

比如我们选中这个躺曲奇风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgiagPNIuIEhhviamF7iagYJXV7PHs1u5lYsjiaOy6aLRt5ICibticgYo2BgPQ/640?wx_fmt=png&from=appmsg)

在点击以后，会弹出一个弹窗，让你选择最近你发给ChatGPT的图片，或者上传一个图片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgY4RJLicG7ZDD2fTzYvGzQ4bRIEnR0UiaRoGIaCMh4OK1icH3uFPicUTicrA/640?wx_fmt=png&from=appmsg)

我就传了了我的那个AI固定模特染夏，就是那个粉头发的妹子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg0277LySQPKdvP9AqaLYVE4HcibLkzqia9Oibw21C6AKlHnwBwicUR7MRXA/640?wx_fmt=png&from=appmsg)

然后，他真的，就把我的图片，和这一段默认的Prompt，直接以对话的形式，发给了ChatGPT。

说实话，这个交互设计的体验真的并不是很好，各个界面跳来跳去，非常混乱。。。

不过生成的速度确实比之前有提升，测了一下，在ChatGPT上，大概40s到1分钟不等。

在这个时间之后，你就能得到一个，糖曲奇风格的小图了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg6FmkqOoFvRCMAjdqTjpAeEYoYRflicDCvEHRholgqnfj1qzuwsJtyhw/640?wx_fmt=png&from=appmsg)

当然，还有毛绒玩具风格的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgicZ1ULtFcTIxRkqG3hlDFnxSgHKLEcxhPzl8IGgacZcjs5NVVgqiafKQ/640?wx_fmt=png&from=appmsg)

除了快速转风格之外，也有一些快捷的操作预设。

比如创建专业产品照片、拍摄专业求职照片等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgKYKZgRicYfv5ibjYIUnuQPs9Sr2r6BkPH5w7WctvQ4rbbJZjLia9UzC2g/640?wx_fmt=png&from=appmsg)

交互也都是一样的，点开以后，传图，选择。

比如，给染夏做一张，专业求职照片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgDSg7aGNoNAw4Mx3C1rZLx6Qxic4kIPQL813ZnWibGkpdxdkeS36XkoWg/640?wx_fmt=png&from=appmsg)

做出来的效果，确实也挺真诚。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgBzEl8tkzdcVxqJrpTfZP03HPjJV00qoBUwLYBmYz2uEOHCRbgKf38w/640?wx_fmt=jpeg)

也可以，直接用模板，变成名画。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgOdOFy9rJ7PAtu4edFxWttX2rK5d14qOaiaC6eBphibjhH0iajMOpWGu2A/640?wx_fmt=png&from=appmsg)

就是这个脸部，缺失了一些笔触的风格，变得过于平整了。

而模型本体能力上，在我测了一夜之后，还是发现有些比较可圈可点比较好玩的地方。

这次，我想让X个跟Nano Banana Pro直接对比的案例，让大家直观的感受一下，他的特点和边界，以及跟Nano Banana Pro孰强孰弱。

一. 信息
准确性

文字准确性，绝对是现在的多模态AI绘图模型，大家最为关注的。

所以，我们首先开始，肯定先看这个。

Prompt：生成一张桌面月历照片，标题必须逐字 "2026年2月"，下方是标准7列表格（日一二三四五六）并填入日期1–28，要求网格对齐、数字清晰，除标题与日期外不加其他字。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg4xmvBTibK9lyxNSXVB0UgOKtSVHnETLDpIBqvyyMicM5NwfE7HH8Rpicw/640?wx_fmt=png&from=appmsg)

左边是GPT Image 1.5，右边是Banana Pro。

上来第一个case，GPT就拉了坨大的，我要求是只写到28，Banana精准的执行了任务，所有的数字都是对的，但是GPT在写到28后没有停止，又重复了一个28，然后写了29和31，这就是完全的错误了。

Prompt（来自
@卡尔的AI沃茨
）：生成一张3:4的图片，画面上方用书法写着一首完整的《茅屋秋风所破歌》，内容是【完整全文】，每个字上方都要标注上汉语拼音，同时画面内容主要用水墨画的形式展示这首诗所表达的情景。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgraRIxhKDRPezwTiamn1duv2iaaB73cBlib9ymzsMV8MYnBUU4HqZRHDzA/640?wx_fmt=png&from=appmsg)

两边各有各的拉，GPT你完全不不知道他在写个啥，中文完全崩成了一坨跟鬼画符一样。右边中文倒是写的很不错，只有个别字拉了，但是不知道为什么Prompt要求的是上面挂拼音，写着写着就脑袋顶上就挂了个中文字？而且排版确实不好看。

Prompt：
为我生成苏绣工艺的详细解说图，配上详细的中文知识解析。
GPT的中文字翻车的比较狠，而且信息图的展示没有Banana清晰，有很多无关内容硬生生的塞进去了。
Prompt：这个模特的Instagram动态界面，3:4。
这里我是把染夏的照片扔过去了。
GPT完全没有画出
Instagram上任何信息，emoji还画错了，Banana对界面的理解画的非常的精准，虽然人物一致性上有很多问题，但是在信息准确性上，还是要强出好几个档次。
综合来看，在信息准确性上，GPT Image 1.5，确实是不如Banana Pro，而在中文字上，有非常明显的差距，Banana Pro的中文字还是很稳的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgToupBEfKbfwqcReXdsvXlZx5ic7hAVvckRGnqG7adh0MickA3bmcHRZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgQ0vVXLSZU5kGzNFDOHoTW69u6NuPD9zdHewch2rfe4MNjLPhlj6t7Q/640?wx_fmt=png&from=appmsg)

二. 真实质感

这一趴，来看直接生成的照片质感，看看谁的效果更加的真实。

Prompt：
年轻白皙肤色的年轻女性肖像照：皮肤带自然红晕、鼻子与脸颊无雀斑。短款灰褐色波波头，中分层次，几缕松散发丝垂在脸侧；浅棕色眼睛、卷曲睫毛、饱满有光泽的粉色嘴唇，鼻中隔穿刺。表情俏皮淘气：眨一只眼、吐舌头、可爱搞怪。保留她皮肤/面部/手部可见的原始纹身细节。她随意坐在吧台凳上，穿黑色背心，外搭浅蓝/白/黑格纹法兰绒衬衫（敞开或披着），下穿牛仔迷你裙，系小黑色腰带。左手自然下垂，手里夹着一支点燃的香烟。场景为昏暗的户外或半户外酒吧/酒馆/夜店：石质或金属质感的圆桌与吧凳；桌上有一只装满饮料的玻璃杯、一个玻璃水壶、以及一包香烟（Gudang Garam Surya 16）。背景虚化，隐约可见坐着的人与夜晚氛围灯光。拍摄为高角度俯拍（从上往下看主体），强烈直射闪光灯，人物后方产生锐利阴影，皮肤明亮略微过曝。整体风格：随手快照、Y2K 美学、街头风、垃圾摇滚、闪光摄影。3:4，真实胶片质感、轻微噪点、浅景深。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgQeic5XsV3iaRhoDpE2HAWgG5Ogp2Y2tmnz6coKuIwiaMJR5r0oYKibDa9A/640?wx_fmt=png&from=appmsg)

语义理解这两家确实都很强，提到的所有元素几乎全部实现了，在质感上，GPT的图会更加AI更加油腻一些，Banana Pro会更真实一点。

Prompt：
生成一张照片级抓拍：一位年迈水手站在小渔船上整理渔网，旁边有一只狗安静坐着。要求可见真实皮肤纹理（皱纹、毛孔、日晒痕）、衣物磨损与盐渍；自然海边日光。镜头语言：50mm，中近景，平视，浅景深，轻微胶片颗粒；不摆拍、不精修；3:4。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgiaiaWk8NXRORBrGsowezvKA50YXdVzAh7icwk67U5sasQeU7S2MiaacRDw/640?wx_fmt=png&from=appmsg)

这两家基本打个平手，但是GPT的饱和度和对比度总是更强一些，Banana Pro会更日常一些。

Prompt：
生成一张照片级真实抓拍：演出后台化妆间。 场景： 一排带灯泡的化妆镜，桌面有散乱的化妆刷、发夹、水杯、纸巾； 光源为镜前灯泡（暖）+室内顶灯（中性），混合光真实。 主体： 至少6位演员/工作人员： 前景：一位坐着化妆，化妆师在旁边补妆（手部动作清楚）； 中景：两位在整理衣服与耳返； 镜子里必须能看到与现实一致的反射（人数、姿态、位置匹配，不能凭空多出人或少人）。 摄影参数/构图： 50mm，f/1.8，1/160s，ISO 2500；中近景；浅景深。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgBwPHUIEQhU8XiacoNucRtaJQq9tlFibH5xLWEvAsbtia5KAfkvChMKB3Q/640?wx_fmt=png&from=appmsg)

GPT还是那个问题，对比度和饱和度都有点高，整体色彩会看着有一点AI感，整体上，我个人还是喜欢Banana Pro的质感一些。

更为自然。

三.精准编辑

测一下用嘴改图的能力，这次GPT不是说，自己的精准编辑能力更强了吗。

第一个case就是换内容。

比较简单。

比如，把这个发布会的奥特曼，替换成染夏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfglA15rQp5XSYCXl6JicmnftO4DU25k4FibkBiaPPZzdOibmY6cg8eO6ic8MQ/640?wx_fmt=png&from=appmsg)

效果是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg7sCF4AfFtJvXPgAdETx05V30C3moSgecODXr2UXH8PPj57FcBshejw/640?wx_fmt=png&from=appmsg)

从光影感觉，人物比例和透视，Banana Pro更胜一筹，第一个的燃夏身上的衣服的光影明显就不对，然后明明是个圆桌，染夏是更靠近镜头的，所以肯定会显得大一点，原来的奥特曼也是这样，这就是最基本的近大远小。

但是GPT做的图，你会发现，染夏跟中间的老哥直接平齐了，没有前后关系了。

然后就是更复杂一点的，跨画风做替换，还替换天气。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgzDjXxVD9PqTx2NOaMMI2OUpgiachK1MnPa2nMX1omtYpjuRNlIPNNEQ/640?wx_fmt=png&from=appmsg)

图1的人物的衣服替换成图2角色的衣服，其他不变。天气变成小雨，3:4。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgfvI72gRDaic6z95hSZics4riaJdRwfvcT44x8W4yS10Iia6o4xfcofYbNg/640?wx_fmt=png&from=appmsg)

这时候，两边的处理差距就挺大了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg6icdhAPlZrnD2j2Iian9ic4mulVh6IgwWibq7sPrqckC3Q6xhqvvISUPicg/640?wx_fmt=png&from=appmsg)

虽然Banana的人脸保持也有一点问题，不太像了，但是整体肯定是比GPT要好的，我只替换服装，然后下雨，没让你把画风和色调也迁移过去啊。

还有换衣服。

比如我想给染夏的这张照片，换一些别的服装。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgibUj92icziaZsTZoYxoT1pCDJ5QGNh7DZHiaeiab80G78PjzCXw6ibB9sFqg/640?wx_fmt=png&from=appmsg)

结果是这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgRgsuB9EWwCdRtVoZFbVKvb05udUia91EeUib20bCqNNPXdJPgDjhFGtA/640?wx_fmt=png&from=appmsg)

GPT直接把我衣服改了，变成了还有一件内搭，这个肯定不对的，Banana Pro是正确的。

还有一个
@-Zho-
佬的Prompt，就是让3个角色，用夸张的造型合影。

我找了3个角色。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgZHn27mozdRBbDtMKSs4z27H6RZOEjD9Jv8dwjib5lQ9jDm8NAfVRIwg/640?wx_fmt=png&from=appmsg)

Prompt：
三人在 镜前 顶视角 摆出夸张姿势合影。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgGyms6yMLDfg7k0EaWib8W6UfRc5cZgAAgEV54KqbAuIM6sevT6vpOQw/640?wx_fmt=png&from=appmsg)

有一说一，这张整体的构图和感觉，我觉得GPT更好一点，GPT只丢了镜前这一个信息，但是Banan Pro丢了顶视角和镜前两个信息，而且姿势也没那么夸张。

综合来看，我觉得整体上，还是Banana在一致性、精准度上，还是会更甚一筹。

四. 世界知识

我最喜欢的一个案例，就还是海贼王排名。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg9ypm4mTOiaICgZicFicib6HX7zqo8wbbcyF40ltXjvBc8W9Iw2VLxiba6dA/640?wx_fmt=png&from=appmsg)

这块从设计角度来说，确实左边的GPT会更有张力，包括风格上，也更好看，战力的排序我就不多说了，这个见仁见智，但是就是有一个非常明显的知识错误，就是第十名，红犬库赞是什么鬼？？？

人叫赤犬，真名叫萨卡斯基。库赞是青雉。。。这就是完全的错误了。

右边目前看着没啥硬伤，头像都能对得上。

还有一个
@卡尔的AI沃茨
的Prompt，也很有意思：

用一组图，描绘公元前260年5月至10月之间，东经112°41到113°09′，，北纬35°39′到35°59′ 发生的事情，并给出详细的信息图，图上要用中文说明发生了什么事情，以及结果的重要信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfgPegM2b9qLMeplrbcOOlbqzewyv3ib6r3oNTO2ibCQibmyMge3IuxBciaWQ/640?wx_fmt=png&from=appmsg)

这个地方呢，让GPT-5.2自己来判断一下。

它自己说：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfghEO4cOWaodG3CClr4AjXxX8u1guPp5N6q1aqxojcC1EafnReRBNXqA/640?wx_fmt=png&from=appmsg)

我选Banana Pro。。。

不过坦率的讲，差距并不大，至少不会有错误。

还有一个非常搞的。

Prompt：创建一个包含以下内容的正方形图像：一只手有七根手指，一面显示时间为8:22的挂钟，一杯装满红酒的玻璃杯。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoEMVwPlJzjuJP7kPiaDXlfg5ibQ3ZnjmVfBEHibjicQ9VMgo2CVYChaTh3pxKNcx1dMKH31puzJd88Wg/640?wx_fmt=png&from=appmsg)

这块是让我非常惊喜的，GPT Image 1.5把时间画对了，除了那个时针应该在上去一点，分针是正确的，然后7根手指，画成了6根手指。

而Banana Pro，在这地方就翻了个大车，手和始终全部失败了。

所以，在世界知识这块，我觉得还是比较能打个平手的，各有胜负。

写在最后

花了一个通宵的时间，把GPT Image 1.5测了个大概。

不算差，但是肯定也不能说是特别好，跟Banana Pro比，在很多地方，还是有一些不足的。

而且自从3月份发布，OpenAI憋了半年，才憋出来个这个。

而Google，最恐怖的是，Gemini 2.5的画图，花了3个月进化到了Banana，Banana又花了3个月，进化成了Banana Pro。

这家公司的进化速度，还是太恐怖了。

Google，不愧是现如今，AI的王。

这次，该轮到OpenAI，奋起直追了。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
