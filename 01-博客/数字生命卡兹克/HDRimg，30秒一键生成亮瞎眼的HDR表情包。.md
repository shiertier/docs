---
title: "HDRimg，30秒一键生成亮瞎眼的HDR表情包。"
发布日期: 2025-05-19
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671186&idx=1&sn=31bdd67784fd5d368ddf5864f12da357&chksm=f1565b8a2c599b2a8d838db74dde40fb2cc5d29a50be0ca9261a92797cf4b572be005bbb3b7a"
---

## 摘要

**1) 一句话总结**
作者利用AI编程工具开发并上线了免费网页工具HDRimg，通过保留特定的ICC颜色配置文件，利用微信表情包的显示机制，一键将普通图片转换为在苹果设备上具有物理级高亮发光效果的HDR表情包。

**2) 关键要点**
*   **技术原理**：HDR（高动态范围）能提供更高的亮度和细节显示，触发该效果的关键在于图片中包含告知设备“我是HDR”的ICC颜色配置文件（如Rec.ITU-R BT.2100P）。
*   **微信机制漏洞**：微信在处理普通图片时会自动剥离ICC配置文件，但处理表情包时遗漏了此操作，使得HDR配置得以保留并触发高亮效果。
*   **设备兼容性**：发光效果依赖于具备高亮度、广色域、10bit色深屏幕的设备，目前主要在iPhone和Mac等苹果设备上生效。
*   **开发与部署**：作者使用GPT-4o和Cursor编写Python脚本，提取现有HDR图片的ICC文件并植入新图片；随后花费85元购买域名，上线了基于TailwindCSS的网页工具（hdrimg.com）。
*   **工具功能**：该网站免费提供服务，支持JPG和PNG格式，单次最多可批量转换20张图片。
*   **使用限制与建议**：建议上传尺寸不超过400x400的原图；转换后需通过隔空投送、压缩包或网盘等方式传至手机，再添加为微信表情。
*   **扩展应用**：除微信表情包外，HDR图片技术也被部分人用于网页设计中，作为二维码等特定元素的超级强调色。

**3) 风险与不足**
*   **平台兼容性缺失**：由于生态分裂和兼容性问题，安卓和Windows设备大概率无法看到HDR的荧光发光效果。
*   **传输方式限制**：若直接通过微信发送生成的图片文件，ICC配置文件会被微信系统自动剥离，导致发光效果失效。
*   **用户体验影响**：这种物理级别的极高亮度显示，在一定程度上可能会影响部分用户的观看体验。

## 正文

这篇文章，写的我眼睛疼，真的。。。

上周末，一个离谱的表情包，在我的微信群里刷屏了。

我相信你们肯定见过了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqyUET4A0g3aqz2eBDAmThwUkUMR1RBMIgXylibvOojdiavLP9JaiboS4ibw/640?wx_fmt=png&from=appmsg)

真的，这表情包只要一在群里出现，就绝对成了所有iPhone和Mac用户眼中，最亮眼的存在，这个亮眼，真的是物理级别的亮眼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqx3GsZVFCxnzD4wARZOGJGicJ5vph30u8IePqj8OM0n7pDaoCgMSD9lA/640?wx_fmt=png&from=appmsg)

不过安卓用户其实看不太到这样的亮瞎眼效果，这个背后的原因，其实是HDR和微信的兼容问题。

差评X.PIN上周五的科普文章写的已经非常详细了，推荐去可以去看看：
iPhone用户被表情包闪瞎，这事得赖微信。。

我大概用非常简短的话解释总结一下：

我们现在用的很多图片和视频，其实默认都是SDR格式。它有点像老电视，不管你拍得多好，它都只能给你显示一个平均水平的画面。

亮的地方不会太亮，暗的地方也不会太暗，一切都被压成了差不多的亮度，细节也被吃掉了。

HDR就不一样，HDR是新一代的显示标准。它能让亮的地方真的亮起来，比如阳光、灯光、高光反光，在屏幕上真的就像现实一样在发光的那种亮。而暗的地方也不会糊成一团黑，而是能看到阴影里的细节，比如一张脸上的毛孔、一个角落里的褶皱。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqCu3PfP35CWMLfYf3ufw96NEyjyf3tEwg2TIfyeEhSnuy60IpI1B1EA/640?wx_fmt=png&from=appmsg)

而这次这个青蛙表情包，之所以能发光，其实全靠微信程序员一个小小的疏忽。

设备能不能显示HDR，看它有没有高亮度、广色域、10bit色深的屏幕。
图片能不能触发HDR效果，关键看它有没有
告诉设备“我是HDR”
。

那告诉的这部分，就靠
ICC颜色配置文件
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqyME6Kt15AanSQWCL7Gd6ibqRtIgD5M0oIgwEmT0DQscoqP1kgeFnDkg/640?wx_fmt=png&from=appmsg)

微信在处理大部分图片时，会自动把颜色配置文件（ICC）剥掉，这就使得咱们平时通过微信发送的图片，丢失了很多关键信息。

但表情包，它忘了动刀。。。

结果就是，在表情包上，HDR的ICC配置文件被原封不动保留下来，iPhone一看：哦，这是HDR图啊？那我得给你上上强度，HDR亮度整上。

于是，在支持HDR的苹果设备上，这张小小的表情包，就成了整个聊天框里，最炫目的一束光，对，物理意义上的一束光。

不过，HDR表情包，这事其实不过国内第一个发现的，一个月前，在国外的通讯工具Slack上，就爆了把大的。

最下面的那个青蛙，是不是很熟悉？对，这就是这波的主角。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaq7RicLPiaMtqwbof0O0uPD5VySO8hl57cQichqkdRRQez2ic3UFUym9uNMw/640?wx_fmt=jpeg&from=appmsg)

而且甚至他们不仅搞了表情包，甚至还有老哥，把头像也换成了HDR图片，这真的太艹了。。。

我也顺藤摸瓜，找到了一篇国外老哥写的，怎么做HDR表情的博客。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqnOvkLoW9bqonIibmIWmkXFFiaISAYFLRz4oCTxscbTEY5YicxzjV5cM7g/640?wx_fmt=png&from=appmsg)

而且，还在帖子里，直接附上了自己的脚本。

不过这个脚本门槛还是稍微有一点点高，也有点奇怪，但整体思路是一致的，本来我就想，自己搓一个程序，能批量把各种表情包变成HDR的。那现在一切就绪，说干就干。

把一张普通图转成闪光的HDR图片，其实不难。

核心是给图片调整部分数值，再植入一个带HDR的ICC文件。

最关键的其实是这个ICC文件，你当然可以，直接去网上搜一个ICC文件植入进去，比如这个萤光青蛙的ICC配置文件，就是Rec.ITU-R BT.2100P。

但是我是个懒逼，既然你萤光娃里都有了，我还下个啥，直接把你荧光娃当母体就行= =。

于是我直接让4o，先写了一段非常简单的程序测试一下。

Prompt是这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqCvwk7LMeVLG8wKvSsOry55egjyiaxegvCfFv4QVggnmfCrVU7kqV2iaA/640?wx_fmt=png&from=appmsg)

在本地运行测试，方法很简单， 打开IDE产品，Cursor或者Trae，随便找个文件夹，新建文本文件，粘贴刚刚写的代码，双击运行就可以。

当然你完全可以直接用Cursor或者Trae直接写，我是最近太喜欢用4o了，干啥都是本能反应打开4o直接开干了。。。

跑了一下，发现一把成功。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaquJZhfbKOsRbqicictqbTROaTYjcntw1qibXapoCyx48fpA1OCk8kr7XMg/640?wx_fmt=png&from=appmsg)

代码里的图片文件要根据情况修改，比如我这里是黄色小胸.jpeg。运行一下代码，成功处理图片，肉眼可见右边亮了很多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaq4eWB1vC5iaB1aTlusvyEsQibxOZyzZc0fJXRdkU6hOFGyzZ8WHicOVpOw/640?wx_fmt=png&from=appmsg)

不过我其实，还是想把这玩意，给大家也一起用的，所以，需要一个网站，能让大家有手就行就能直接转换。

于是，我就打开了Cursor，发了一段Prompt和刚才4o写的代码：

写一个Python程序，功能是把表情包图片转换为HDR格式，从参考图像"fluorescent_frog.png"中提取ICC配置文件，并添加到表情包图片里，最后保存为带"hdr”后缀的PNG文件，以网页形式提供服务，使用tailwindcss，模仿卡片的设计。【再加上刚才4o生成的Python代码】

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqk5vzsOzm78xBxicl7dK38GHQl2y4D6MtqkiacVZoCNMp5BUsQTfAeDzQ/640?wx_fmt=jpeg)

很快，一个版本就出来，不过各种UI细节还有点奇怪，我就跟他又对话调了调细节之类的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqqtVQFQc8q8lkUdjahgibpzOTyDFbuuNc5mXynSGgFZ0YwutRnNaIMhQ/640?wx_fmt=png&from=appmsg)

甚至，为了它更好看点，我还去用即梦画了个logo。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqGEp9K93UX3lAv6tW5E9W3p7wibny5ACzos2wFCUopfyluMIvYJegbXw/640?wx_fmt=png&from=appmsg)

名字是瞎取的，HDRimg，就非常的直白且庸俗。

于是，这么一个把普通图片转HDR图片的小工具，就搓出来了。

感觉确实能当一个小小的产品，于是，我又部署到了线上，花了85块钱，买了个域名。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqgu7KsibiceXPvoMDXI7Ty7bXC6d9sqkicCLcTIhica1Kj6PXlYicJ2o5xdQ/640?wx_fmt=png&from=appmsg)

网址在此：hdrimg.com，免费给大家玩。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaq273B44IMLUibTFS4zSDypMrTmVz7BzbRBkhJnkX2xtuIgV6X5LGxuxQ/640?wx_fmt=png&from=appmsg)

支持JPG、PNG格式，最多支持20张图，只需要把图片全部上传上去，你就能批量处理成HDR图片文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqibdAKbTOdd0Oa9tGXFicGlVLWj0ictIRaTgEiabicJqrPJoaNNAKx4WySYg/640?wx_fmt=png&from=appmsg)

图片传上去以后，只需要等待几秒钟。

一群闪瞎狗眼的表情包，就出来了，不过，这里跟手机是一样的，你得是Mac才能看到荧光效果，Windows电脑也能转换，但是大概率在电脑屏幕上显示是有问题的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqOibBHiaceeWriadWfb3dlJ2pjvRq0MTWibRl2NpCjG4IxaicyYA9f2Knbyg/640?wx_fmt=jpeg&from=appmsg)

而且说实话，大半夜的看这玩意，还真挺吓人的。。。

我们有了图片之后，正常下载，然后把图片，想办法弄到手机里。

Mac和iPhone可以直接隔空投送，或者也可以把图片变成压缩包通过微信传到手机上，网盘也行，U盘也行，就是别直接通过微信发图片，因为ICC会被干掉。

同时，原图尽量小一些，最好不要超过400x400的尺寸。

到了手机以后，你就可以，直接在微信里，添加表情包。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqw9WUb2OUFiamVnaW5JUkKDMlQsnAls2qBibicg7tPB9moYwicLf3yiaFhaw/640?wx_fmt=jpeg&from=appmsg)

给你们看下效果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqtuDJnuSZWAzqCICxBuCJaJKSrXNe1frciaEf3vWbwGxeJYjJEApBkXg/640?wx_fmt=jpeg&from=appmsg)

就。。。真的很萤光。。。

最后再说一句，安卓和Windows大概率看不到萤光的效果，只有iPhone和mac才可以，至于为啥安卓不行，请看差评X.PIN的原文解释：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqvkXVsMQuYEpBRHxI7D1KN3LI8vOjg0hOx0bA8PxmNricfibduGQT8ZzQ/640?wx_fmt=png&from=appmsg)

苹果的大一统，还是有大一统的好，安卓阵营，还是太分裂了。

这个HDR图片的方式，其实不止是用在微信表情包里。

还有人，用在了网站上，作为一种超级特殊的强调色。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpghP2WXf6J2h2XGRjpKGaqgpWlhA8zicIich0lwbSWtoop6avt1UXJsU65LPOEDVNP6h8ZoVPRMClg/640?wx_fmt=png&from=appmsg)

比如，给二维码强调。

等等。

很有意思，很好玩，虽然好像说，是有点影响用户体验。

但，它的亮，是真实的，它的骚，也是精准的。

别让这些有趣的小Bug，被无聊的规范和所谓的正确抹平了。

有这些亮瞎眼的光在。

那这个世界。

它就还没有无趣到让人绝望。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
