---
title: "她决定开源AI模型，正面宣战“N号房2.0”。"
发布日期: 2024-09-04
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647665015&idx=1&sn=328b8cd442a92699d6ba3e5c89ea7ab2&chksm=f188006d2ffec51512a88f38ca27cc95eebde7ed5a0c8a6dfdcab76e774acc5956c039dd28c7"
---

## 摘要

**1) 一句话总结**
针对韩国利用Deepfake技术制造色情内容的“N号房2.0”事件，中科院博士张欣怡及其团队将获奖的AI伪造检测模型“DeepfakeDefenders”正式开源，以技术手段协助公众对抗AI换脸犯罪。

**2) 关键要点**
*   **事件背景**：韩国爆发“N号房2.0”事件，犯罪者利用Deepfake（AI换脸）技术合成身边女性（如同学、教师）的色情影像，并在Telegram上按学校、地区建群传播及勒索。
*   **波及规模**：学生是此次事件主要的受害者与加害者群体；其中一个Telegram涉黄聊天室的参与人数高达22.7万人。
*   **关键决策**：中科院博士张欣怡及其团队“VisionRush”在9月3日公布的外滩大会全球Deepfake攻防挑战赛中位列三强，团队决定放弃技术垄断，将获奖模型“DeepfakeDefenders”在GitHub上向全球开源。
*   **后续计划**：张欣怡明确表示，后续将继续开发相关应用，以降低大众使用该AI检测技术的门槛。
*   **技术原理**：该检测模型模仿人类视觉系统，结合了ConvNeXt（纯卷积神经网络，用于观察整体与局部细节）和RepLKNet（新型架构，用于大范围捕捉伪造痕迹）两类网络，并辅以SRM等多种滤镜进行多角度特征比对与鉴别。
*   **其他案例**：除色情犯罪外，Deepfake也被用于金融诈骗，例如今年2月有诈骗者利用该技术伪造英国公司高管的视频会议，成功骗取2亿港元。

**3) 风险与不足（基于原文提取）**
*   **传统验证手段失效**：传统的身份验证方式（如视频通话确认）在面对当前高超的Deepfake技术时已显得力不从心。
*   **社会信任与隐私危机**：Deepfake技术的滥用导致个人的形象、声音和行为可被随意篡改，不仅剥夺了个人的身份、名誉和隐私，还撕裂了社会信任的基础，动摇了人们对现实的认知。

## 正文

这几天，大家都刷到
韩国#N号房2.0#事件的新闻了吗？

曾经席卷韩国的N号房，又双
叒叕重来了。

而这次，主要的犯罪工具其实就是AI中一直饱受争议的Deepfake（深度伪造），或者可以就简单的理解为，AI换脸。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY01K04icvKnqfhMXYiaWH7QT9S1HMcJ15RjINWhI8L2m4bkXYETuHC9Gfw/640?wx_fmt=png&from=appmsg)

说实话，距离N号房事件的曝光，已经过去整整4年了。

2021年，随着主犯
赵主彬的落网以及40年的刑期，轰动整个韩国的N号房事件，看似落下了帷幕。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0YbAOlXmxLtY48iawiaCO7PYKI1VXtyn9rgZp0ibIjK01K97iafkDySOE0w/640?wx_fmt=jpeg&from=appmsg)

但是就像你在家里发现了一只蟑螂一样，你掀翻家里的所有角落，一定能再发现无数只蟑螂。

而如今在新时代AI技术的加持下，他们抛弃了旧时代的偷拍，带着Deepfake，又卷土重来了。

或者说，他们从来都没有消失过，只是从2021年的灰烬，重新燃起了熊熊大火。

这些犯罪者，
利用Deepfake，合成身边女性同学、朋友的色情照片和视频，在Telegram上通过聊天室的方式进行疯狂传播。

他们甚至按照共同的学校、地区，来建了N个群。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0YfJlnWvzbveCPNhWbdQNibWKRmbCujwvCuks2AnSvcAfpicIWDoTMUsw/640?wx_fmt=png&from=appmsg)

一起用身边的熟人作乐，甚至是威胁，
还以AI视频+公开受害女性身份、家庭住址为理由，向受害人索要钱财。

这一次，最大的受害者群体，是学生。

而最大的加害者群体，也是学生。

比如有一位女教师就被告知自己的涉黄图片在聊天室里被传播，而上传者正是她的学生。

她的学生
利用和女教师的合照、女教师发在KakaoTalk （韩国版微信）上的照片，用deepfake定制了她的色情影像，甚至他还在定制的时候注明了身材要求、姿势要求。

在一个 22.7 万人参与的 Telegram 聊天室，只需要女性的照片，就能在几秒内生成被用Deepfake换过脸的色情内容。

22 万什么概念？韩国 2023 年新生儿人数只有 23 万，总人口数只有 5000 多万。

而这，只是其中一个频道。

至于报警？呵。

在韩国的土壤上，N号房，就像是瘟疫，蔓延开去后，就再也停不下来了。

这密密麻麻的红点，就是瘟疫蔓延的轨迹。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0TwgC6Y1SIKgqTH1Q1kJUnqXf14FBnZo8AlqBnrfAmP3Q3icz9Ou8RibA/640?wx_fmt=png&from=appmsg)

为了对抗，许多韩国女性在社交媒体上发帖，呼吁韩国和外界对Deepfake犯罪事件的关注。

在韩国国内发帖已经几乎无用，他们就像三体中的降临派一样，祈求外部舆论，能来净化国内。

她们在X上用英文发帖，甚至还在微博用中文求助：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0FOd2w3iaDZbTt0EQCu6JUXsVly2ErU9jS6pDk299xiaV8uoAK3DoECUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0hHTTcTQJYfyOEN4yoGRVLWLDDvnz1UiauiaBFhvFnas3kk7HH5icJAcdg/640?wx_fmt=png&from=appmsg)

所有人都知道，家丑不可外扬。

试问，如果在韩国内部，还能有解决的办法，她们会祈求三体人降临，来治愈她们的一切吗，你能想象到，这是有多无助，多绝望吗？

但是，土壤的问题，我觉得，真的，挺无解的。

这块就不深说了，也不好说，有兴趣的，可以自己去深扒一下。

说实话，我觉得，韩国这波Deepfake的N号房问题，不止是韩国问题，只是韩国那边实在太烂了，最先暴露出来而已。

这是全世界女性的问题。

土壤的事情，我们几乎做不了任何东西，但是从技术上，我觉得，我们还是可以有一些有薄弱的解的。

Deepfake的换脸视频，至少在现在这个时间点看，不是完美无瑕全无破绽，所以，那如果，我们至少，能识别出AI换脸视频呢？

其实在这件事爆出来的时候，我就一直在看各种东西，在找识别的方法。但我毕竟不是技术人，很慢，又很笨。

直到今天，我在抖音和微博上，看到同一个热搜。

真的，如同天上降真主，真乃人间太岁神。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY04Guc11EcFswntLzDauiavbynYHM4LaISaHbLRZYTAB54EgajBBQj5pg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0Y4bfHXAINY2N4yy7o73bHy7PdNKZNe1mOkZv0nasGzF27MLxuGpbFw/640?wx_fmt=jpeg&from=appmsg)

她把他们的模型直接开源了，用来对抗Deepfake。

我也不知道为什么，我有点想哭。

“Girls help girls”具像化的呈现，或许也是女性工程师更能共情女性面对Deepfake犯罪时的恐慌和无助。

这位工程师名叫张欣怡，是来自中科院的博士。今年她和中科院的团队正好参与了外滩大会Deepfake攻防赛。

也就是9月3日当晚，大会也公布了三强名单，张欣怡和她所在的团队VisionRush赫然在列。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0KTf4a19xWykNykTBUt6Zfh39oLnliaibfMXWx8w8jMb9ftmrqOIIrjVg/640?wx_fmt=png&from=appmsg)

张欣怡说：

“经团队同意，已将近期参加在上海举办的外滩大会AI创新赛·全球Deepfake（深度伪造技术）攻防挑战赛的AI模型向全球开源。”

是的，他们直接开源了。

这个模型叫
DeepfakeDefenders
，在Github上就能找到。

链接在此：https://github.com/VisionRush/DeepFakeDefenders

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0iaAbysazWgggccgjHBejPh3fAWGLicdiaZfhHicicibn7megsvWiaMabJ2XiaQ/640?wx_fmt=png&from=appmsg)

外滩大会设立了100万元人民币的奖金池，但张欣怡和她的团队并没有止步于这个比赛，而是为了能够帮助更多人，将获奖的项目直接开源。

并且张欣怡本人
@
啦啦啦啦啦啦啦0-0
也在微博表示后续会继续开发应用，降低大众的使用门槛。他们是真的希望可以帮助到更多人！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY0BqKAaw4NZ2aD4HkkWPFJb9atSCEGLImeBjrGEfUDicMGX6l5JRNkrsA/640?wx_fmt=png&from=appmsg)

中科院的这套Deepfake检测系统，还是很有意思的。

我硬着头皮啃了半天代码，可惜电脑不太行，没能顺利跑通case。

但是我花了一晚上跟几个做计算机视觉的朋友请教学习了一下它是怎么工作的。

本质上
，
还是模仿人类
视觉系统
的工作原理。

我稍微用比喻讲得通俗易懂一点，大家应该就能明白为什么中科院的这个DeepfakeDefenders系统能准确地识别出深度伪造的图片了。

让我们把这个系统想象成一个超级细心
、眼力贼强又经验丰富的超级侦探。

这位侦探有两只眼睛，一只叫ConvNeXt（一种纯卷积神经网络），另一只叫RepLKNet（一种新型的卷积神经网络架构）。这两只眼睛各有特点，能从不同角度观察图片的细节。

现在，我们给侦探一张照片，让他判断这张照片是真的还是假的(深度伪造)。

他会怎么做呢?

首先，他会用ConvNeXt这只眼睛仔细观察照片。它就像是一个放大镜，能同时看到照片的整体和局部细节。此时侦探会注意照片中的色彩变化、纹理特征，甚至是像素级别的细微差异。

然后呢，侦探会用RepLKNet这只眼睛再看一遍。这只眼睛更像是一个广角镜头，能看到更大范围的信息，特别擅长发现那些可能藏在照片任何角落的伪造痕迹。

但是光靠看还不够，侦探还有一个特殊的“鉴别工具箱”。

他会从工具箱里拿出各种“滤镜”，在看照片时戴上不同的镜片。

有的滤镜会改变照片的亮度和对比度；有的会旋转或翻转照片；还有一种特殊的SRM滤镜，能让那些肉眼难以察觉的细微痕迹变得更明显。

通过这些不同的“滤镜”，侦探就能从多个角度反复检查照片，不放过任何可疑的地方。

在做出最后判断之前，他还会回想起他以前侦查过的无数真假照片（也就是训练过程）。他会把当前的照片和记忆中的那些照片进行比较，看看有没有相似的特征。

最后的最后，侦探会综合所有观察结果，给出一个判断：这张照片是真的，还是假的。

当然，
上面这段解释和比喻也只是我自己的理解
。

如有不对
，
欢迎大佬在评论区指教。

坦率的讲，Deepfake掀起的这次N号房事件，对我的触动真的很大。

如果从去年很早就关注我的老粉可能会知道，我写过大模型、写过AI绘图、写过TTS、写过SVC、写过AI视频、写过AI 3D。

我写了200多篇文章，但唯独，从来没有写AI换脸或者Deepfake的任何内容。

因为，Deepfake，是一把双刃剑，更是潘多拉魔盒。

在电影制作中，它让我们得以欣赏到“年轻版”的小罗伯特唐尼在《美国队长3》中的精彩表演，也让吴京和刘德华在《流浪地球2》“重返二十岁”。

令人惊叹的视觉效果背后，是技术为人类创造力插上的翅膀。

但是，当这项技术被一些不法分子滥用时，我们只能被迫面临着一个又一个令人不寒而栗的现实。

不仅仅是N号房用Deepfake来侵犯女性，还有各种诈骗。

比如今年2月，诈骗者通过公司的YouTube视频和从其他公开渠道获取的媒体资料，成功地仿造了英国公司高层管理人员的形象和声音，再利用Deepfake技术制作伪冒视频，造成多人参与视频会议的效果，骗取财务职员2亿港元。

那些传统的身份验证方式（如视频通话确认）在面对如此高超的Deepfake技术时，早已显得力不从心。

当我们的形象可以被随意篡改，我们的声音可以被任意模仿，我们的行为可以被肆意伪造。

它撕裂了社会信任的基础，动摇了人们对现实的认知。

在一个连“我是我”都无法确定的世界里，真相变得可疑，现实变得模糊。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqlHh36PlwNFNBFYem2tzY06iat3OxNGRSQBUWYG6uwv6RfIpDviaNjKtXzzibvicvd73aQc0OICwb8pQ/640?wx_fmt=png&from=appmsg)

正如张欣怡所说，“在脸被偷走的同时，我们的身份、名誉、隐私、尊重也都被偷走了。”

是她，是我，更是所有人。

“这个世界有黑暗，也有照亮黑暗的光。如果一个人的火把太小，我们就把火把传给世界的每一个人。”

但是，好在，我们还有我们。

在这场大战中，我们既是战士，也是战场本身。

举起一束黑暗中的火把。

筑起另一座自由的罗马。

谢谢你。

张欣怡。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
