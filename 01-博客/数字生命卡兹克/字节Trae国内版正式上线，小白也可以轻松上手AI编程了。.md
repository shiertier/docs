---
title: "字节Trae国内版正式上线，小白也可以轻松上手AI编程了。"
发布日期: 2025-03-03
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669251&idx=1&sn=677fa0171b81a12ee35d96b1b6b9dc8f&chksm=f153aa766e1a21f0d44762e71c442ab2cc7f3490dd2cf3c517ae504c4198f68bb8094605a2ef"
---

## 摘要

**1) 一句话总结**
字节跳动正式上线AI编程工具Trae国内版，内置豆包及DeepSeek模型，通过Chat和Builder双模式大幅降低编程门槛，实现免翻墙、开箱即用。

**2) 核心要点**
*   **产品定位与上线**：Trae是字节跳动推出的中国首个AI IDE产品，国内版已正式上线（trae.com.cn），原生支持中文，无需特殊网络手段即可使用。
*   **内置模型**：国内版首发支持三款大模型：豆包1.5 Pro、DeepSeek R1 和 DeepSeek V3。依托字节算力，运行流畅度高。
*   **Builder模式（主力构建）**：专为零基础或从0到1开发设计。用户输入自然语言需求后，AI可全自动编写、创建文件并运行项目（如3分钟内生成在线抽奖HTML网页），用户只需点击“接受”即可。
*   **Chat模式（辅助优化）**：采用一问一答形式，不会自动修改文件，需用户手动点击“应用”，适合对已有复杂代码进行精细化修改与优化。
*   **核心功能**：支持“时间回溯”（一键恢复到历史代码版本）、自动保存历史会话，以及通过输入“#”快捷引用本地文件或文件夹作为AI上下文。
*   **实测案例**：除基础网页开发外，Trae可结合本地导出的聊天记录文件，快速生成活跃度排行榜、时间热力图、词云及社交关系图谱等数据可视化项目。

**3) 风险与不足（基于原文）**
*   **模型能力差距**：国内版内置的三款模型在代码直出能力和UI交互审美上，不及海外版Trae最新接入的Claude 3.7 Sonnet。
*   **功能缺失（无视觉能力）**：国内版目前仅支持引用文档，暂不支持海外版已具备的“图片识别”功能（即无法通过上传设计图复刻网页或通过截图排查Bug）。
*   **代码准确性**：AI生成的代码偶尔会出现Bug，需要用户手动复制报错信息，通过多轮对话让AI自行修复。

## 正文

刚刚，我最喜欢的AI编程工具Trae，居然把国内版给上线了。

他们终于来了！

有朋友可能还不知道啥是Trae，我简单顺一下前情提要。

Trae是字节出的类似Cursor的AI编程工具，1月20号正式推出，支持原生中文，就这一点，让我这种其实对代码很陌生的人，就觉得极度友好。

我自己就不说了，
就从它发布最开始，一直用到现在，已经成深度用户了。在过往的很多帖子里，都安利过这个产品。比如飞书多维表格+DeepSeek那篇。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQby7kMOAbtHKGVOuMj6mqr5iagT1uDhIzPR5meSTic6ytbicIHaVkgI4Cbw/640?wx_fmt=png&from=appmsg)

不过他有个很大的问题，就是当时只有海外版，虽然可以免费白嫖Claude3.5，但是总归是需要一些魔法手段才能用的。

这气势对于想体验AI编程的普罗大众来说，还是有门槛存在的。

就跟当年的ChatGPT一毛一样。虽然平台火爆全球，但是其实很多人还是很难接触到，并将它彻底融入自己的生活的。

而今天，一切变了。

Trae国内版，来了。他出来的最大意义，我觉得就是真正的，技术平权。

这也是，中国首个AI IDE产品。

首发支持豆包1.5pro和Deepseek R1、V3三款模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQb5a2Zhibia4K0HSSO84unhIqUsL6lGQd4OicDDk2Y34f9tGd860oTcQeBg/640?wx_fmt=png&from=appmsg)

虽然非常坦率的讲，这三款模型虽然在编程能力上，他们肯定不如海外版Trae最新接入的Claude 3.7 Sonnet，但是这毕竟是不需要魔法，开箱即用的产品，就这一点，就足够吹爆。

所以，借这个机会，我也想给大家来好好聊一下这个我目前最喜欢的原生中文AI编程产品：Trae。

国内版网址在此：
http://trae.com.cn?utm_campaign=r1

先来给大家看一个小小的AI编程case。

关注我的粉丝可能都知道，我上周六，在北京办了一个AI圈的线下活动，《一起AI，交个朋友》，AI圈的半壁江山都来了，场面很爆炸（Trae的人也来了hhhhh）

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqv2a9ly5GH2r3ySogDICQb95owZHX1beRC8IW01nH8CdDBPM6r8s7K10CpXLaXLTeMfWpKzwxicnQ/640?wx_fmt=jpeg&from=appmsg)

因为有一个抽奖环节，所以我当时直接沿用了去年8月捏的一个抽奖的GPTs，想着AI活动吗，那得AI一些。

结果吧，周六的时候用这个GPTs抽奖的时候，又翻车了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbag3AeicCvPuI1V5DLLchHOtUAeSiabRotbraVtetRtibNC02DfLHd78NA/640?wx_fmt=png&from=appmsg)

我当时在台上就非常的尴尬，脑子里只有一个想法，我下次绝壁不会再用这个智障GPTs抽奖了，我一定直接搓一个抽奖的小产品，反正现在都有AI编程都有Trae了，这事根本不复杂。

所以，正好，今天我就用国内版，来给大家捏一个抽奖的case，正好演示一下，这玩意到底怎么用。

你正常根据上面给出的网址下载好Trae之后，跟着教程一步一步安装登录就行。

进入后的开启页面是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQb4h1PopkMGyMickIjNjRv7Q9HFv0ZtzFnWRLibX4xmbA07ibl4Lbic6POGQ/640?wx_fmt=png&from=appmsg)

Trae有两个模式，
Chat和Builder
。

Chat模式
更像是给你打辅助的角色，你跟他一句话一句话的来聊，你弄自己的代码有什么问题，也可以一步一步问它，一点点精准修改。

Builder
模式
就是类似于主力选手了。直接一个需求，它对小白巨友好，能一个人从0到1单刷复杂项目的代码，一步到位。

我们先来说一下Builder，因为这模式实在是太好用了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbUPsDcf9ZIhoicEzQLf9MibmV5UX9mgtJicSuITfmJ0WOnq7oHuF3gjKCQ/640?wx_fmt=png&from=appmsg)

建议无脑选择DeepSeek R1模型，然后在开始编程前，先点击打开文件夹。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbXecVUjHhpeC6675icjezm7D1vDDZQzEiaMlkibrOoFYvDBbNPdXFYe3TQ/640?wx_fmt=png&from=appmsg)

在弹出的文件夹窗口上，新建一个文件夹，可以直接用项目来命名。比如“在线抽奖工具”。（虽然我建议大家养成良好的习惯都用英文命名，比如可以命名成
lottery_tool，但是你要是真的懒得用英文，中文也没啥事，问题不大。）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbLyaIdWxnBibpAvUuc4dVoQeFmYWSnbJw83FiaV7ttqZ69K6bcEicCFJlA/640?wx_fmt=png&from=appmsg)

成功后，原本左上角的【选择项目】就会换成你新建文件夹的名字。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQb1BibhMibaXiaYEx5QOjwCDQ6wWrz8kc9eb4MXkDRjqgWeK67iadBR2cFFQ/640?wx_fmt=png&from=appmsg)

Trae整体的操作页面也很整洁，左半边就IDE工具的代码区。右半边基本就是和trae的对话区，交代AI怎么干活的。

我这就写了个贼简洁的Prompt：

帮我用html生成一个在线抽奖工具：支持上传xlsx和csv格式文件，可以选择每次中奖人员的数量，然后再有一个方框显示中奖人员；注意，人员不可重复中奖，且要求页面美观。

直接把这段prompt丢进对话框，R1就开始推理你的代码需求了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbZhkPV9JeRAohwjwYe1SHUg82mLRgMYXHEibZSMLWYYGcjaxU8mY33zA/640?wx_fmt=png&from=appmsg)

不到3分钟，直接把抽奖的html工具给做好了。而且一次roll成，直接就能用。

对于零基础新手，刚接触html的，边查教程边写再算上手滑打错括号什么的，估计得1-2小时。

已经能闭着眼写 for 循环的老手们，这种小东西可能也得要个 5-10分钟就写完。

就真挺快的。。。

左右两个窗口一般都会出现提示，等待你的指示。

比如左面这个窗口，是让你确认是否接受它对
代码
更改的。

而右边这个，是让你确认是否接受它对
文件
更改的。

它想直接帮你直接创建代码文档，问你行不行。行的话，Trae自动在帮你在目标文件夹把html文档创建好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbialLkOROobHUf7odXmte8PYgkVXHCKMvWCjzJHxuaCfXxuECvRGyrAg/640?wx_fmt=png&from=appmsg)

Trae直接把编程效率拉满了。。。

反正一般来说，无脑全选【接受】就行。没什么问题，不用担心。

对话框出现【运行】按钮，你点击一下，就会直接运行python，打开这个抽奖工具的网页了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbCXtJibB119IFhiaMZcJvx5lomkbM7MQ9g2Eb339uKvqyNaTdop7V0fdw/640?wx_fmt=png&from=appmsg)

也可以复制生成的工具链接，到浏览器去查看效果。我的这个prompt，跑出的结果长这样。

大概流程就是，提问，点应用，点接受，3分钟，完事。

快的没朋友。

就是UI界面，有点过于简陋了。。。

对我来说，即便是小工具，至少你也得稍微能看两眼= =

当然这只是roll了一次的结果。所以我又让Trae改了下代码。

改动的过程，其实只是直接在对话框里提Prompt。

比如我随便说了一些要求，然后无脑接受就行：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbZrPLOibvhuFSO4rG3j0Ym9z3pVLswCDwLMzjBeo33GmqNBbp0gWAD6g/640?wx_fmt=png&from=appmsg)

如果你想对比一下它这次修改改动了什么地方，他的呈现也是非常清晰的。

标红色的代码部分是被修改的内容，绿色的就是修改后这段代码的内容。

具体改了哪儿，这么一看就知道了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbiaViaBdU27YSwwxGVojFjTMOv8End3xlkjO8tekJLZGTM4QiaXtJK4OcQ/640?wx_fmt=png&from=appmsg)

整个过程也就1分钟不到。

而且你可以无限修改，不仅免费，而且虽然用的也是DeepSeek R1，但是毕竟这是字节自己搭的，所以几乎不会跟DeepSeek官网那样卡的你怀疑人生，体验上非常丝滑流畅。

改完之后，我们跑一遍看看效果。

下面这个是最开始我用
Trae
做的样子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbkEXVicEwgTYGjsib9Fmb70MqhUnwDJIERSXSJNBibHOsGhFlReoLbM1Sw/640?wx_fmt=png&from=appmsg)

这个是我用了不到1分钟，就简单改完的，背景就是黑客帝国里那种01数据组成的瀑布流。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbLyd0JrmrQog1TynA44ruiarDGZW885m8jiahOIty2UR9L10WewKVT1tg/640?wx_fmt=gif&from=appmsg)

如果改完，你对新效果还不满意，还能时间回溯。

回到你提要求的那句话，点一下【回退到本轮对话发起前】，代码文档就会恢复到之前的版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbt7ibZStPfuTRHsWAiaknJWRAE7sfF0zyOpicEw0PR5DdYys3zfP3icmJdA/640?wx_fmt=png&from=appmsg)

只要和
Trae
之前的对话数据没被cover掉，回溯到哪次都没问题。

而且它会自动保存历史会话，想找回就用Trae打开那个项目的文件夹就行。一般来说，没保存失败或者达到容量上限，和Trae的修改记录就能找回来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbpZhPkuhcO55hnH25EhN6IicZ1jM71MpyIoPt0dA0ugiaJJmib6wS2oMEw/640?wx_fmt=png&from=appmsg)

还是要提的一点是，Trae因为接的是R1，所以在模型直出的效果上，这个UI和交互的审美吧，确实不如Claude= =

Claude的代码能力，还是太强了。。。

接下来，再简单说下
Chat模式。

它跟Builder最主要的区别其实就是
修改代码的方式不同。

Builder模式更适合小白从0到1构建项目，而Chat模式，其实更针对已有代码的优化和精细化。

比如你已经有一大段的代码文件了，你想让他帮你优化，而不是从0到1，那这个时候，Chat就可以直接上了。

这个模式下，集成了三个模型，豆包1.5 Pro、DeepSeek-R1和V3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQblDB3P4lxPPv3LvelluqnrSQN3HCkZNsBG5EKCiaNed2TicE0A9DJ81rQ/640?wx_fmt=png&from=appmsg)

在Chat模式里，对代码文档提出修改要求，你得等Trae回复，
Trae会嘟嘟嘟给出修改建议。

但他不会给你自动改或者啥的，你需要手动点击【应用】按钮，才可以。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQb7qQhw9OkRbPRSkIe21veZBmAic4ycq05nQAibo3mD22uBnxSDJCEib5JQ/640?wx_fmt=png&from=appmsg)

更精细化，更符合一些大型项目。

但是如果你是一个小白，你要是想搞个一堆文件类型和代码做出来的项目，比如Chrome浏览器的插件、一个多元化的项目，我还是推荐Builder模式。

真的，有手就行，真的简单。

然后我还有一个活，一直想做的，就是想用AI，来分析一下一个我最牛逼、氛围最好的社群，就是这个，传说中的KA21群。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQblZ3rIoyX6cMUSTHwVcGb7wWUibrGzjVplnnCcibY55lQ5JGpYS9LFzZA/640?wx_fmt=png&from=appmsg)

我想找出里面，最活跃的那10个群友，看看他们，有多活跃。

正好在做Trae的case，所以，我就一块给大家演示一下。

我先用的memotrace的免费功能，直接把从21群建群到现在所有的群聊内容导出成文件，因为这个已经有现成的产品了，就没必要再搓了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbEI2XYpWguibTIQgEUKKyprKjiauYiak4SuxtfGNTxdeibabydEUEYo2aOA/640?wx_fmt=png&from=appmsg)

导出完以后，
打开Trae。

在对话框选择“#”，可以让它引用文件或者文件夹。这个小技巧其实非常好用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbLM0wzNZHgAgunMkOJKPFm4ZclMd5yyzeiciaAIOA2tVR4euTafUqGm6A/640?wx_fmt=png&from=appmsg)

打开“file”，选择21群的聊天记录文档。

还是和之前一样，一句简单清晰的要求直接甩上去：

帮我按照"NickName"统计发言最多的前10个人的，然后使用一个美观且简单的ui展示这10个人的昵称以及发言数量。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbr09xM88bbo6dOMX5yPZpowgcrs9Dic2H9gNkhuiclgaU4iaibFCP3GszPA/640?wx_fmt=png&from=appmsg)

出现【接受】按钮，就全点。

有bug提示，直接复制bug的具体内容，要求Trae自己改。

就是这么丝滑，轻松全自动敲代码。

大概几分钟之后。

一个发言统计的界面就做完了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbQ5Hld3m66L2BrarLmRwZpSfIxwNeubplSwNx7WczbPHDianbU1Ob51w/640?wx_fmt=png&from=appmsg)

发言最多群友
@🔴Rosia吴熳
居然有一万六千多条内容，不愧是21群包工头，最强扛把子。。。。

当然，除了做排行榜，数据都有了，更多好玩的效果，我们让Trae实现起来也是轻轻松松。

比如直接让他再高一些有趣的可视化。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbtlLs8hia2nicpffXg5wTrDSlGiax2OODMt87s9R1I5ITJ58V2glj1CYKw/640?wx_fmt=png&from=appmsg)

它想得还挺全乎，
热力图、活跃趋势图、词云、社交网络等等全都想到了。。。

比如我搞了个时间维度分析的热力图，就是想看看峰值在哪个时间段。

红色越深，代表发言密度越高。看得出来，大家是醒了就开始疯狂输出了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbMKTHBL0N2OvPBdrEY777cESSFCjfEtaDUWA9gOfKQFLlNr4vOudzibA/640?wx_fmt=png&from=appmsg)

下面这两张就是个人的热力图了。
@🔴Rosia吴熳
、
@东深
、
@风
、
@Irene
、
@柒小風
等等，他们真是太猛了。。。

尤其是21群包工头
@🔴Rosia吴熳
，上午10点，直接聊到色块变黑。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbE2j15C322mVTicQ4TOv4SW4ahSeK14LyQJhEKKYpEuXRQuFG4W3xRmw/640?wx_fmt=png&from=appmsg)

聊的很High，我还想看一下，统计的词云，看看每天到底在聊啥。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbpicBpGEmOK8vqTiclxabnfbupsQlGTVNqYaicOPEiaicdBeZSkXQ5HfwIaw/640?wx_fmt=png&from=appmsg)

看起来，频率最高的还得是“老师”和“AI”，群友们可太有礼貌了。

这些超顶的群友之间互动的关系图谱，也贼有意思。

我让Trae把他们每个人画成一个小圆点，谁跟谁聊得多、关系近，就在两个圆点之间连一条线。蓝色的圆越大，颜色越深，说明这个人跟别人互动越多；圆越小颜色越浅，说明聊得少。

整个图画完，立马就可以发现，一群人之间的互动关系。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbRibP5Exn9uNB9EuvSCuobibribDCia0IZzibxmDVVYIlRzG02jsrtNQOCGw/640?wx_fmt=png&from=appmsg)

看到中间那几个大圆，我就明白了。。。这些最活跃的群友们，他们确实是群的核心。

而我，在最左面那个角落里。

我只配在车底。。。

这个小项目跑下来，Trae确实偶尔会有些代码bug，可以让它自己改，基本多聊两轮、多花些时间，基本都能搞定。

不管是中文交互还是整体顺下来的编程流程，感觉都已经很不错了。但有些东西，精益求精还是有必要的。

比如说，海外版的Trae里有个自带的图片识别功能，它是真好用。

但对比起来，目前国内版是这样，只能引用文档。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbDUaepM47tceHcjjMjdSg6YDGJdEiaFaTibJiaB84z23NGwurA3vIggjXA/640?wx_fmt=png&from=appmsg)

我直接把一张照片墙的图复制粘贴给发给海外版的Trae，它能直接复现。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbtWibMzHiaUvBjiccotI0QFX29RYLuJkmRTcxVxgbFcMvMGsEMnoEuhXkw/640?wx_fmt=png&from=appmsg)

一张图+一段prompt，Trae就给我做出了一个这样的html网页。真的是不需要一点儿多余心思。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbo5PqrbDQbo3L6rfRTfNcMICxFXCl0Nt9mUsSKq38diawKiamuibcYPOwQ/640?wx_fmt=png&from=appmsg)

而且我试了试，真的能用。虽然这只是一个超简单的html网页，但是看起来确实很有意思。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqv2a9ly5GH2r3ySogDICQbr6wukXCyXZWvWJOcZCia25fGBkTSE3ia5xK3lMhvy1mmgc1sGNLvo6fg/640?wx_fmt=png&from=appmsg)

整体交互过程中，由于确实没有什么多余的繁琐步骤，所以稍微改下Prompt，就能添加更多的html元素了。

也就是说，哪怕你连描述也说不清，也可以轻松复刻网页、小游戏。甚至我在用海外版小爬虫的时候，直接把提示bug的界面屏幕截图发给Trae，改bug也更丝滑更精准。

贼牛逼。

可惜目前只有海外版可以读图，真的希望国内版，也早点上这功能。

可以这么说。

AI时代的IDE，拉低了编程小白们的学习门槛。

更是把所有学科与AI、编程融合到了一起。

我相信。

无论是作为AI编程的小白、大佬。

或者完全就是没接触过编程的另一个学科的朋友们。

初高中时，相信
大家都会向家人or朋友们许下一个“做一个大项目”的愿望。

我记得我家里，现在还有一本我初中时，缠着我爸给我买的那本《Dreamweaver网页开发教程》。

少年时，我也曾想，开发过属于自己的网站。我也想要属于我自己的编程自由。

可能是因为懒惰、可能是因为其他，那个梦想，停留在了2008年的夏天。

但是如今，13年后。

AI编程所带来的技术平权，让我们的梦想，又可以重新生根发芽了。

2025年的你们，又有什么曾经的梦想，亟待实现的？

今年春暖花开时。

我也想，跟你一起，看见它们。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
