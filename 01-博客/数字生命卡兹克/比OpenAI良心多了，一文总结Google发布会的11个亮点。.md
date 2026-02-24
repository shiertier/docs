---
title: "比OpenAI良心多了，一文总结Google发布会的11个亮点。"
发布日期: 2024-08-14
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664599&idx=2&sn=b7cbc73ca6f015254438b11649c0df7e&chksm=f19d00f7c50814ce6ce2561060b431ada90c5f08b1ed43bccea679601847fc2f1c65d2529d3e"
---

## 摘要

**1) 一句话总结**
Google在MadeByGoogle '24发布会上全面展示了将Gemini AI深度整合至Android系统及Pixel 9系列硬件的最新成果，推出了多项端侧AI功能及实时语音助手Gemini Live。

**2) 关键要点**
* **AI OS愿景**：Google计划基于Gemini重构Android，打造支持45种语言、覆盖全球数十亿台设备的“AI OS”。
* **跨应用交互与高效创作**：Gemini可直接分析视频内容（如提取清单、生成场景歌单），并能在数秒内完成邮件撰写与文本润色。
* **Gemini Live实时对话**：推出支持10种音色的低延迟语音对话功能，Gemini Advanced订阅用户（20美元/月）可立即使用。
* **首发多模态Gemini Nano**：Pixel 9系列搭载了最强端侧AI，性能比Pixel 8 Pro提升3倍，生成速度达45词/秒；设备配备12GB或16GB内存，并新增卫星通话功能。
* **Call Notes通话摘要**：提供完全在本地运行的私密通话总结功能，自动记录电话中的号码、时间等关键信息。
* **AI截图搜索**：类似Recall功能，允许用户通过自然语言快速搜索和提取手机历史截图中的图像与文本信息。
* **AI相机合照合成**：通过引导用户拍摄两张照片并进行AI合成，解决摄影师无法入镜的合照痛点。
* **生态新硬件**：发布了Pixel Watch 3智能手表和支持随时唤醒Gemini的Pixel Buds Pro 2耳机。
* **Project Astra预告**：展示了对标GPT-4o的原生多模态大模型，未来将结合摄像头实现实时视觉问答及跨应用（如日历、短信）操作。

**3) 风险与不足**
* **现场演示翻车**：在演示Gemini识别纸质海报日程时，前两次尝试均失败，更换设备后第三次才成功识别。
* **Gemini Live体验受限**：目前更像是低延迟的TTS（文本转语音），缺乏原生多模态大模型的情绪理解与表达能力，且在长回答时仍有明显延迟。
* **本地AI画图效果平庸**：Pixel Studio的本地图像生成效果表现普通，仅达到基础的“能用”水平。
* **Project Astra尚未落地**：虽然展示了强大的实时视觉和跨应用能力，但目前仍未正式上线（处于“画饼”阶段）。

## 正文

就在X上一群人被草莓哥乱发OpenAI预告，疯狂搞心态的时候。

Google带着
MadeByGoogle ‘24
发布会来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NDvA61HbwXg04fWe5hRtNu0YcmwXPAoCmSgbtbwlzMDD38PPEt59LOA/640?wx_fmt=png&from=appmsg)

OpenAI甚至为了狙击Google，在人发布会开始几分钟后，发了一个Blog，就这么个破Blog，还让他们的AI草莓哥当谜语人预告了两天。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NudibKJQOo8m1faOEtka9a7HNsO893CiaJm0WxhibRNbyIvl5aW19DicfzA/640?wx_fmt=png&from=appmsg)

现在的OpenAI，真的跟狼来了一样，我对他已经没有任何期待和信任可言了。每次就差那两个脏话骂出来了，XXX，XX！

而Google在没有任何的预期下，还是有一些额外的惊喜的。

我总结了11个亮点，你看完了这篇文章，也算是看完发布会了。

1. Google要根据Gemini重构Android。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NAGa82mNRlrafPCTtNaxEnlibr6PRSJneO4RDyTXMIlBVmKOPib4bq3eA/640?wx_fmt=png&from=appmsg)

他们定义了一个词，叫AI OS，Google想把AI OS带给所有人。

目前它们已经支持200多个国家和地区的45种语言，它可以在数十个设备制造商的数百个手机型号上使用，全球数十亿台设备上得到支持。

2. 手机上Gemini的图像识别翻车了。

他们第一个演示的是Gemini的图像识别能力。

作为多模态AI，图像拍摄识别似乎被卷成必须有的功能了。最能考验照片识别能力的，就是拍摄说明书、日程表这类信息密集的内容——既要识别图像，还得看得懂文本内容给出答案。

演示的小哥拍摄了一张
纸质音乐会海报
，上面巡演的日程安排。演示者让Gemini查看自己的计划，选择可以去看Sabrina Carpenter演出的时间。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NkNKJnCMfZdkH5z6mx8SX3ItWE14mvQHOLicyNLhpCibI954GqCHZMYpw/640?wx_fmt=png&from=appmsg)

然而，现场演示必定会出现的失误，它来了。

Gemini前两次拍照都很不给面子地现场演示失败，隔着太平洋我都感觉现场尬住了，还是两次。。。= =

这个演示还特意提了一下，用的是三星Galaxy S24 Ultra手机，难道是三星发力了？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NZG9fd4hos3I8u6fykXx9KtF93wpnhyfdITIcfxMnQfyML4TvS6qgjA/640?wx_fmt=png&from=appmsg)

现场紧急换了一部设备重新尝试，好在第三次顺利识别出了图片内容。

Gemini直接给出了很具体的日期：Sabrina会在
2024年11月9日
到达旧金山，并且这一天演示者没有其他安排，可以去看演出。

现场的掌声终于响起，哥们儿肉眼可见地松了一口气啊。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NPAyemvicxj4yTV3T9g7PUNKXPancY4oONicIly44fVUXTcfMBgyulE8g/640?wx_fmt=png&from=appmsg)

3. 跨软件交互很方便。

Gemini现在能够在手机上直接理解并分析视频内容。

你可以一边观看视频，一边呼唤出Gemini为你总结重点，或者回答你关于视频内容的问题。

比如晚上观看油管上美食视频后，都不用你挨个识图，自动生成视频中出现的食物清单，并添加到用户的个人"待尝试"列表中。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NRAFQMOhM596ex2lGyVheWaQ8r8h67FlPsJxCkibzziaibzZp5rUIesRDg/640?wx_fmt=png&from=appmsg)

吃货福音。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NJZZ6A6R0wmjf9lMHqev9ibms9oFfWRhz4VHYfjPaZMDIf2jmUtspePQ/640?wx_fmt=png&from=appmsg)

并且可以为油管上的一些旅行视频创建景点清单或行程建议。

作为一个连散步都需要出场bgm的，

你也可以要求gemini制作一个“适合在首尔散步的韩国流行音乐播放列表”，它能根据用户描述的场景、情绪或活动类型推荐合适的音乐。

使寻找音乐变得更加直观和个性化。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NeA9lpZ41ibicMhyG5ibZ4U0g9U6x16PwjcnHcx5OvFYX46xvqaxSR9vCQ/640?wx_fmt=png&from=appmsg)

4
. 写文速度很快效果也不错。

Gemini还可以辅助在手机端用仅数秒的时间完成邮件写作。

小哥演示了两个场景：第一个是给房东写封不失礼貌的催促信，通知她来维修家里的供电模块。

第二个是给教授写一封生病缺勤的道歉信（看来这种事小哥之前没少干）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0N3Q5VWJUG8N3HbibqHZJO2YGy8d22Q6zo7FwLPDXeKRBX4QzicI8BzTyQ/640?wx_fmt=png&from=appmsg)

此外Gemini还有方便用户润色文本和发送邮件的交互设计。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NosuefLFedDR7EnZMv8M8AqsphichxvlDsPKBdrm7A406LPpYSTKCiadA/640?wx_fmt=png&from=appmsg)

看到Gemini没几秒就完成道歉信，小哥都快憋不住笑了。

5.Gemini Live实时对话效果还不错，但只是低延迟的TTS。

Google推出了类似于GPT4o的可以随时打断的实时对话功能，他们称为Gemini Live。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NjPvaPUHyI0GibBHLYZN45fYFdHIjg7pYTRaYJjpXQvOesKy7yKG5jhA/640?wx_fmt=png&from=appmsg)

里面有10中音色可以选择。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0Niavtsjl1zFiaMMgS04kUnrXAZPibKVyEnJ2XTXlf5fhW7SJAVfiavgSu9A/640?wx_fmt=png&from=appmsg)

演示的小姐姐跟Gemini Live聊了半天，音色效果不错，延迟也足够低，但是其实看着就是一个低延迟的TTS，而不是GPT4o那种原生的多模态大模型。

因为没有任何情绪理解和表达的演示，按照Google的尿性，真要是有他们一定会疯狂展示的，另外在一些长一点的回答上，还是能明显的感觉到延时。

所以其实就是个低延时的TTS对话。

目前得Gemini Advanced订阅用户才能用，一个月20美刀，立刻上线。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NfJB9iaFI8KtXzzY6X13ORy1MqHOE4uro5hK9ZPjTGrBSY4WcgC3NhYA/640?wx_fmt=png&from=appmsg)

6.Pixel 9 是首款搭载多模态 Gemini Nano 的手机。

这是迄今为止在手机上发布的功能最强大的设备端 AI 模型，比之前在 Pixel 8 Pro 上用的 AI 强大了三倍。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NXbcqmqVCdXy1I71u5ZMjlpmEPMXlsupxYgkp5ibmr1LjWicqvh64bv8A/640?wx_fmt=png&from=appmsg)

Pixel 9 的处理器（TPU 和 Tensor G4）可以在一秒内生成多达 45 个单词，比之前的速度快了两倍。

普通版的 Pixel 9 有 12GB 的内存，而 Pro 版本的内存更大，达到了 16GB。而且他们最骚的是，终于也上了卫星通话的功能。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NaKUvEyL7tPXgPhntpPyWbkZSE13tSnChFic0Puia2qZrwOvxAjr7QGCw/640?wx_fmt=png&from=appmsg)

这里只能说一句，遥遥领先！

这次发布的产品包括三款直板手机和一款折叠手机。常规系列包括一款配备 6.3 英寸显示屏的基础版 Pixel 9，一款配备 6.8 英寸屏幕的 Pixel 9 Pro XL，以及一款新的更小巧的 6.3 英寸 Pixel 9 Pro。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NKkoK9xqpPmDjf1KPXG0p9oicicpmEz83AtUX1E4fyKFOXFy3Zf6wke7A/640?wx_fmt=jpeg&from=appmsg)

说实话，我觉得，有点丑。。。

还有个新款的折叠屏
Pixel 9 Pro Fold。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NuhUenwtMrwY1DmO9fogAhZw9kvAaGPQYS3dE7hMkCx4AU0ABNYqq5A/640?wx_fmt=jpeg&from=appmsg)

更丑了。。。

7.Call Notes在电话过程中可以帮你记录下关键信息。

现在，Pixel的“通话助手”变得更强大了，增加了“Call Notes”功能。

在你打完电话后，它会为你提供一个完全私密的通话总结。这样即使你在通话时没有纸笔，也能轻松获取电话号码、时间、细节和其他你不想忘记的信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0N9kYQULHkSyQOdMibpzG7C0Lemf7e5Jnia57ibwae7KiczfYRaJHj3JeTaQ/640?wx_fmt=png&from=appmsg)

而且这个过程全部是本地跑的，基本没有隐私问题。

小哥举了个例子，他最近考虑换个发型，但他的理发师做不了他想要的发型，所以他推荐我去另一家理发店。

但是问题是，他忘了记下那家店的电话号码。有了Call Notes后，就可以轻松回溯。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NXPbPlKmrTU59Heo9DXMbibJgGaudZVuIB8qk8j2wiaFVhgXm9BbNyDVA/640?wx_fmt=png&from=appmsg)

7.类似于
Recall的屏幕截图功能有点屌
。

有个大家都熟悉的场景：你在手机上看到一些想记住的东西，也许你会在脑海中记下来，或者截图保存。

但通常，你要么忘记了要记的东西，要么在需要的时候找不到。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NwRD1RLzgZiaXSicFZK0bkW7Tic82nvvK8G7dtGBHRdIxZuQYlREzcibYxA/640?wx_fmt=png&from=appmsg)

然后他们就做了一个新的产品。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0N6NOTPeVOb5o4A25x1omDX5kogfxoRianO2flkoyzscqiazO2U2kv4gvQ/640?wx_fmt=png&from=appmsg)

可以用AI快速搜索所保存的所有图片。比如你手机里有几十张自行车的图，你搜一下自行车，就都出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NuXjLzlq0P6tQM5hTB7r9Mu7ELf1Xx8BLf2xWhkhG10NkBI2PV5CWfA/640?wx_fmt=png&from=appmsg)

你还能问一下更复杂的，比如T恤价格，你可以看到Pixel截图不仅找到了原始图像，而且还根据图像中的信息用自然语言为我提供了答案。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NhAHa8lJutZMsVfEDmxTIfEBTCBMWgBtTjEw49a3Uc4Nb78IS4mqbow/640?wx_fmt=png&from=appmsg)

8.一个普普通通的本地AI画图Pixel Studio
。

每部Pixel 9手机都配备了新的Pixel Studio，他们手机上的首款图像生成器。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NtqWe6OXhiaHQ0O7RAicaDsanrCecFHroqLWNkMc67lujoVx9UBibibf4Xw/640?wx_fmt=png&from=appmsg)

效果我觉得，就是普普通通，属于能用。

比如日落时的海滩篝火坑，就感觉效果，非常的普通。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NBuoxYiahurK71l53PDwuWBsKbVVdsDT9Dse51WjibicL1CxUsfya665Ig/640?wx_fmt=png&from=appmsg)

9.AI相机拍合照非常的棒
。

Pixel相机，说是第一个AI相机。

大多数参数我不懂，但是这个合照的场景非常的有趣。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0Nelv6hqz2OLB3lUH2ebiaYKdKQNlfYdEdFunDCjliamA9ACsp4JdQxzew/640?wx_fmt=png&from=appmsg)

很多时候大家没发拍合照，总有一个朋友要当摄影师。

它会用一个简单的屏幕界面来引导你拍照，比如让你把相机交给别人，这样你们可以交换位置。然后，你可以根据第一张照片中人物的轮廓，把他们在新照片中对齐，再拍一张。最终生成的图片会把两张照片合成在一起，看起来就像大家同时出现在同一张照片里一样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NicRvCjArnltHNUGL3DBDcWibT19nRBHYEuK4l2OA76K1BCCp6c2SHOsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NUJkFolpdHc9Ka5fSeYpcicvVZuJcRqWKwXUhAzkbhITWwNlRE295eUg/640?wx_fmt=png&from=appmsg)

非常的牛逼，解决了合照的一大痛点。

10.新的手表和耳机。

发了一个Pixel Watch 3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0N5n24b0m2iaykvpvjibQKaXrvoQ8mltO40yT5sWSLf296tkRib2Bfjux7g/640?wx_fmt=png&from=appmsg)

一个耳机Pixelbuds Pro 2。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NaPnQ2ThWoGGdESYgRTUqvH2VT1ia2mteTUaGvDVJHZnvc7JiaIF7iba0Q/640?wx_fmt=png&from=appmsg)

耳机可以随时唤醒Gemini跟他对话。

11.对标GPT4o的Project Aster。

Project Aster在几个月前的Google发布会上就亮相过了，直接对标GPT4o的原生多模态大模型。

现在，在Gemin Live中，你未来也可以用到
Aster了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NVbxVkLGTlQdiczq1Jtr1QrzicVGIHPLf18YhDU1pJH9vcGyElWrfXxTg/640?wx_fmt=png&from=appmsg)

比如，你可以在与Gemini对话时共享你的相机，这样你可以直接展示自己在微积分作业中遇到的问题，或者寻求下一步家具组装的帮助。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NHB32c3p7JswaONPGWCUUd91eicmm2MJRkabmWtcG6wse98zsa0iaicl6g/640?wx_fmt=png&from=appmsg)

而且，还把最常用的应用程序也集成到Gemini Live中，这样它可以在对话和消息中帮助你采取行动，并从像Google日历这样的应用程序中提取信息。

所以你可以直接在Gemini Live中给邻居发短信，分享关于某个商家的详细信息，并同时查看你的日历，完全不需要打开其他应用程序。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0N7OpsicVOSBKKGhStHDMK0rShsOx7ZmwQHBCkA4ib73uibaXaP7MALkdqw/640?wx_fmt=png&from=appmsg)

有点屌，GPT4o+苹果的集合体。

就是可惜，还是个饼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrRTYFXkkoicQJWzicaod8F0NwXpDj8zZolEO22hwkVKJBMwWQ84PWuCxhAyfbyOadOVFMGukpcdubg/640?wx_fmt=png&from=appmsg)

这，就是这一次
MadeByGoogle ‘24的全部内容了。

在AI方面，跟硬件的结合，还是蛮有意思的，Gemini Live至少不是期货，今天就可以用。

比那个只会画饼的OpenAI，还是强了很多。

希望Google越来越好，锤死OpenAI。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
