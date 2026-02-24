---
title: "实测字节Seedance 1.5 Pro，能直出方言的AI视频也来了。"
发布日期: 2025-12-18
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678028&idx=1&sn=a6a0bf6b4f5219044a8f7fed6938f286&chksm=f1fc200932c544d398a533c99b9941d33254186161305cd17a43ff3b7e8d1a3277f4fba687d4"
---

## 摘要

**1) 一句话总结**
字节跳动发布全新AI视频模型Seedance 1.5 Pro，主打影视级音画同步、卓越的中文与多方言生成能力以及丰富的情感表现力，推动AI视频向工业化全声画创作迈进。

**2) 核心要点**
*   **上线与接入**：模型已在豆包、即梦（对应3.5 Pro版本）和火山方舟平台上线，API接口已开放预约。
*   **音画同步能力**：支持精准的主体说话唇形同步，能够准确处理多人对话场景的台词分配。
*   **长视频与多分镜**：最高支持生成12秒的视频，支持参考图结合文生分镜，可直接生成包含运镜和音效的微型广告或剧情短片。
*   **多语言与方言优势**：支持英、日、韩、西等多语言无障碍输出；中文方言能力表现突出，支持粤语、四川话、上海话、东北话和台湾腔的自如切换。
*   **情感与细节表现**：能根据情境设定展现细腻的面部微表情（如嘴角颤抖、冷笑等），并自动匹配相应的情绪声线、配乐和音效。
*   **提示词技巧**：为保证效果，需在提示词中精确指定台词文本、音效节奏，并直接使用目标语言或方言撰写台词提示词。
*   **即将上线功能**：计划推出“Draft样片”功能，允许用户先生成低分辨率预览以锁定画面关键元素，确认后再生成高清成片，从而降低抽卡成本。

**3) 风险/不足（基于原文明确提及）**
*   在生成Rap（说唱）时，声音与鼓点的节奏感契合度仍有进步空间。
*   模型对部分抽象音效概念理解存在偏差（例如将“罐头笑声”错误理解并生成了实物“罐头”）。
*   即梦平台目前的3.5 Pro版本暂不支持“智能多帧”和“主体参考”功能（需等待后续更新）。
*   粤语发音虽然具备氛围感，但尚未达到100%最地道的程度。

## 正文

今天是火山Force原动力大会，我在现场。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrz4nCMUYc4Cus8hGY2H37WKgEV55Yg2XHvQ2r3GPt3poMmGkZb8EicUBp7ec89DHbABgHBicrHuOVA/640?wx_fmt=jpeg&from=appmsg)

这次他们也掏了很多有意思的新货出来，但我觉得最炸的，还是他们的新视频模型，Seedance 1.5 Pro。

因为这次的更新，真的做到了影视级别的音画同步，而且中文能力和方言能力是目前所有模型里的独一档。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrz4nCMUYc4Cus8hGY2H37WC3ibNVibZc2va6HWLaiacmnTqE5s2UkIjmdgQFNdxia30A0e4l8r08sibPQ/640?wx_fmt=jpeg&from=appmsg)

语音生成能力这点在他们的技术报告里也有体现。

左边是视频生成能力，右边是语音生成能力。绿色的就是Seedance新模型，在语音生成这一块可以说是遥遥领先。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7ILfKV9ibsJAPiaOIDjktGnxTMFWXFTosc3VQ8w72jXcfus5mgQjZ3ic6xg/640?wx_fmt=png&from=appmsg)

模型昨天已经上线了，可以直接在豆包，即梦或者火山方舟上玩起来。

豆包是在视频生成或者照片动起来这一栏里选1.5 Pro模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7IB87LtKibMcOUrfavXZXdBZuSNflDLkickeTm1EB7lEsuLzbUUjv0sbdA/640?wx_fmt=png&from=appmsg)

即梦是在生成视频里选3.5 Pro，也是基于Seedance 1.5 Pro的能力。

目前3.5 Pro支持文生图，单参考和首尾帧，智能多帧和主体参考还要再等等，不过现在这些其实已经很够用了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7I8aLGxcARnPfffoMC64PMjQRcAEjagBguKMM5tSXRfwlAQ8iaR3wwdsw/640?wx_fmt=png&from=appmsg)

还有火山方舟，网址在此：https://exp.volcengine.com/ark/vision?launch=seedance

京剧玩法，名画玩法什么的都可以在方舟上体验。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7IeC9ucia5YmRhESjWQu9G23af37LJZCZrTwgbwCXXo5p1FsUIja6AH9w/640?wx_fmt=png&from=appmsg)

API也在路上了，现在就可以预约。

Seedance 1.5 Pro的能力维度呢，我觉得可以分成这么几大块，复杂场景的音画同步能力、中文和方言内容输出能力、情感表现力。

我们一个一个说。

一.音画同步

最基本也最重要的，就是主体说话时的唇形一致性，我们的第一个case也从这个测起。

提示词：让这个猴子在摄影棚里唱一段rap，猴子对着镜头说唱，镜头跟随猴子的动作运镜，雷鬼+tropical风格，浑厚黑人嗓音，从口哨声引入，第二秒开始加入强节奏的鼓点，第三秒后加入有节奏感的rap词，语速100BPM，同步配合鼓点：As Moko the monkey, skankin’ in the sun, Swingin’ through the palm trees, life’s just for fun,Big smile,no fear— One love from the jungle, yeah I’m right here!

如上，对口型对的很完美，呲着一口大白牙，非常引人瞩目。

非要挑点什么问题的话就是，rap的节奏感还有进步的空间。。。

这里要说一个小小小技巧，如果想在这个视频里说什么词，一定要在提示词里给模型规定好。

包括你想要的音效节奏啥的，也和它说清楚，总之别让它太自由发挥，不然效果你懂的。

然后再看一个多人对话场景，提示词如下：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7IFFTwER9dajzxZv51YVDVsOIm5RrrSOCyAjREcUic8DaUM0ox56vKR8g/640?wx_fmt=png&from=appmsg)

一来一回总共四句对话，只要写清楚对话内容和顺序，就能准确地把台词分给每一个人。

唯一美中不足的是，它暂时还不理解罐头笑声是啥意思，当我想要在视频结尾加一段罐头笑声的时候，它给我生成了真正的，罐头。

无伤大雅。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7ITLW4KHxR9ox7JTn5W7f0XvLJuC2tktK6SMyr7Iqq1BTLEibXHGucvLg/640?wx_fmt=png&from=appmsg)

除了对口型同步之外，Seedance 1.5 Pro还能做到多分镜音画同步。

而且因为它最高支持秒12秒的视频生成，所以你甚至可以直接用参考图+文生分镜，roll一个小小的广告短片。

这，是我给它的提示词。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7I818MMEwCb15hD6brLEnZ39O4tVWXYZjz8tvSNaallIP9ZAsibKPTticg/640?wx_fmt=png&from=appmsg)

而这，是它给我的视频，声音效果和细节的准确性都非常在线，几乎已经可以说是一个80%的成品了。

毫不夸张地说，能省下至少一半做片子的时间。

或者，也可以让它直接完成一段12秒的剧情。

我让瑞克和莫蒂俩人致敬了一把无间道的经典天台片段。

提示词长这样：

人物声音设定- Morty（左）：声音偏高、发颤，语速不稳，带明显犹豫与恐惧，气息短，像硬挤出来的勇气。 Rick（右）：低沉沙哑，语速快而不耐烦，带嘲讽，尾音下压，充满控制感。 Shot 1：中景 天台。Morty僵直站立，直视Rick。 Morty： “I wanna be a good person.” Shot 2：特写 Rick半侧脸近景。 Rick（冷笑）： “Oh yeah? go tell the cops, Morty.” Shot 3：快切 a 大全景：Rick举起手枪 b 大特写：枪口贴近Morty额头，无台词。 Shot 4：大全景，Rick持枪抵住Morty头顶，镜头环绕，风声呼啸。

整个过程中，无论是台词还是音效，匹配的都很恰到好处。

而且镜头切换和运镜也有点东西，很酷。

二.中文和方言能力

第二个，就是中文和方言的输出能力。

其实我测下来发现，1.5 Pro的多语言能力很拿得出手，英语日语韩语西语都能无障碍输出。

具体效果可以看下面这个合集：毛利小五郎用各种语言，在线抢柯南台词，真相只有一个。

但我要重点说的还不是多语言能力，因为我觉得，中文和方言能力才是它最强的技能点。

在所有模型中，seedance 1.5pro的方言能力是断档的强。

它是我见过的第一个，说粤语说得有点韵味的模型。

即使还做不到最地道的程度，但氛围感已经出来了。。。

除了粤语之外，四川话，上海话，东北话，台湾腔，也都能自如切换。

所以，你就可以让上海人和北京人用自己的方言吵架，也可以在东北话和台湾腔之间无缝切换。

考虑到公众号里最多只能放十条视频，我依然是做了个方言合集，大家可以点进来感受一下。

怎么样，是不是还挺有那味儿的。

说不同语言跟方言这里也有一个小技巧，就是，要给它原版语言或者方言的提示词，比如英文版的真相只有一个就得跟它说，There’s only one truth，说粤语的话，就要这样写：呢个世界上有一种雀係冇脚嘅。

不会粤语也没关系，直接和ChatGPT帮你翻译就行，就像这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7IUX7c4THy9RU01aY9absiclvTfd9QXvODTsI3rztWMVaYwkqgQVrickow/640?wx_fmt=png&from=appmsg)

三.情感表现力

Seedance 1.5 Pro这次还有一个大幅度提升的能力，就是情感表现力。

哪怕是同一句台词，规定不同的情境之后，也能说出完全不一样的感觉。

提示词非常简单，就一句话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7Iu6WEj6TDwwXric5qh0rzlK6tsAMGNtmxljXekq3H6JrKEBd6wYDV81A/640?wx_fmt=png&from=appmsg)

这个表演合集，大家也可以品鉴一下。

我自己看这些表演的时候，有好几个瞬间都感觉，我是不是正在看什么豪门真假千金的短剧片段。

因为它真的能演出来嘴角颤抖，一声冷哼，皮笑肉不笑，眼睛叽里咕噜转，倒吸一口凉气，这些短剧中熟悉而微妙的细节。

而且声线也会跟着不同的情绪变化，很有代入感。

就感觉，Seedance 1.5 Pro已经可以进军短剧界了。。。

而且更强的是，哪怕我只是给它一句话，不加别的提示，它也能够根据这句话的内容，给我配一段合适的表演，直接一条过。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosiarHxIufoCxwKa6W8Bib7IRXe3jyFf8I0xsibIW1LViaibSU7yMF30ic56YCngZa8421BzmH4BpV9JFw/640?wx_fmt=png&from=appmsg)

就是，现实中的演员都没这么省心好吧。。。

而且这个情感表现力不只是体现在台词上，而是包括配乐，音效，运镜，各种能力和细节综合起来，最终实现你想要的效果。

比如这个第一视角驾驶战斗机的片段，所有的声画元素都综合起来，就是一段效果非常丰富，非常有沉浸感的视频。

之前要在剪辑软件里倒腾一大通，现在一键直出。

没什么可说的，Seedance NB。。。

写在最后

这次会上，他们还提到了一个很有意思的能力，没上线，但我非常期待，就是draft样片。

什么意思呢，就是在成片之前，先给你一个较低分辨率的draft样片，让你可以锁定这个画面中的关键元素，等你修改完确认没问题之后，它再帮你生成高清晰度的成片。

也就是，减少抽卡次数，精准锁定效果，实在是一个对于钱包和时间都非常友好的功能。

快上吧孩子已经等不及了。。。

最后，来总结一下这次的Seedance 1.5 Pro更新。

虽然最近视频模型集体从默片时代跨入有声时代，可以说是前狼后虎，但在这种局面之下，我觉得，1.5 Pro依然很能打。

它的优势，除了能够满足方言这种更加细粒度和个性化的需求之外，更重要的是，真正让声画的结合做到了1+1大于2的效果。

我们都说，电影是声画的艺术。

这次的更新，就让画面，台词，音效，节奏，情绪，都能很好地融合在一个视频里，输出一个广告级，甚至是影视级别的成品。

这意味着，生成出来的不再是只有画面加上简单音效的半成品，而是可以直接上剪辑台的素材。

这对于AI视频的工业化，是一个巨大的提升。

再往上一层，甚至对于AI视频的创作方式和理念来说，也是一个巨大的提升。

以后的创作，就不再只是考虑画面如何了，声音也会一起纳入考虑的范畴。

就会出现新的提示词方式、新的视频形态、新的制作流程，进而引发，新的生产力变革。

新的风暴已经出现。

而我真的，非常期待。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
