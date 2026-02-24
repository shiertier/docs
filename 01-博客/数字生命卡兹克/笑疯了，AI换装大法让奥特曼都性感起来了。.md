---
title: "笑疯了，AI换装大法让奥特曼都性感起来了。"
发布日期: 2024-09-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664961&idx=1&sn=e500ea3860c72499629af7e088e57dcd&chksm=f1582abc58e7220633c887d996d83a1071113c64f73cb20b9e23d34d01884fd4edbb63c78441"
---

## 摘要

**1) 一句话总结**
快手推出的AI虚拟换衣工具Kolors Virtual Try-On近期在社交平台走红，该工具能在大约30秒内为人物照片逼真换装，有望大幅降低电商模特成本并重塑消费者的购物体验。

**2) 核心要点**
*   **产品背景**：该工具名为Kolors Virtual Try-On（可图），由快手开发，目前在HuggingFace上提供演示版本。
*   **操作机制**：用户只需上传一张普通的站姿/坐姿照片以及目标服装图片，AI即可结合身材比例、肤色、发型、光线和阴影进行融合。
*   **生成速度**：处理速度较快，单次生成大约需要30秒（半分钟左右）。
*   **适用范围**：不仅适用于真人（包括各类名人、政客），也能较好地融合二次元动漫角色。
*   **竞品对比**：在实际测试中，其生成效果优于市面上的IDM-VTON、OOTDDiffusion等同类产品（Outfit Anyone则出现无法生成的情况）。
*   **商业价值（商家端）**：可替代昂贵的真人模特拍摄，大幅削减人力、设备和时间成本，解决真人模特费用高且“不易管控”的问题。
*   **用户体验（消费端）**：打破时空限制，消费者可在家中基于自身形象预览数百件衣服的试穿效果，免去实体店排队试衣的麻烦与网购的不确定性。

**3) 风险/不足**
*   **细节处理不够精准**：在部分生成结果中会改变人物原有特征，例如将超长马尾重绘成短马尾或导致部分头发缺失。
*   **服装还原存在偏差**：部分生成的服装会出现走线奇怪的问题，或者错误地改变衣物原有形态（如将短裙直接拉长）。

## 正文

最近两天，我的X被一个AI虚拟换衣项目给刷屏了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIvMvWAuRuiaxex746JIiceWAG36DDghPh4DjKia8bNLydYW7B5F18iacevQ/640?wx_fmt=png&from=appmsg)

然后，冒出来了各种奇奇怪怪的图片。

比如皮衣老黄直接爆改成可爱硬汉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIibPAPUxpJpezxlJLqs0kNhZRthaWaCUZ9kfpsZWu9npKBSStQZyVpKg/640?wx_fmt=png&from=appmsg)

还有整活必备人物特朗普。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIh7yVKn1e9TQ43wvhyuicpAEVfwsI8mg1htwdeyLsZ2cKMUkkj3gHD9g/640?wx_fmt=png&from=appmsg)

你别说，特朗普和这衣服的适配度还挺高。

我居然觉得生成的图片毫无违和感。

接下来出场的，是性感版奥特曼。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGI6u5Pe7qPFbeBL0tBZm6ZwhW8fycUTBkA44uzes2oqXibLvZ1kUCJN6w/640?wx_fmt=jpeg&from=appmsg)

最好玩还是一个有着一千多万浏览量的帖子，它是这么说的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIRCjLljb4tFEDTaxib5EvTGeZUicc9fy0bgBZK2OichMU03CplWNqufWVA/640?wx_fmt=png&from=appmsg)

然后机智的网友就出手了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIBJul7icib57rJl3FicjBagfJFHOABnibkqDqrQBGMckEecUdNHmhpgz30A/640?wx_fmt=png&from=appmsg)

30秒钟，直接帮你把这个令人尴尬的服装搞定，保证你绝不会社死了。

可以说这是真正的：
“AI to the rescue!”

这个被国外网友玩的不亦乐乎的东西，就是快手新出的一个小demo。

Kolors Virtual Try-On。就是那个可图。

网址在此：https://huggingface.co/spaces/Kwai-Kolors/Kolors-Virtual-Try-On

一打开的界面是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIDCABU43mWJPCrIc92iaslCOM8nbtYXMK4HOJhobEGamoic26EvBpl8cA/640?wx_fmt=png&from=appmsg)

不知道大家有没有看到这图里的亮点。

给大家放大一下左下角。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIJm0zNZvHJ2j661uibpGdF1dM8AU0nZLAohAOE9DoXZml2QWicFWdFf1g/640?wx_fmt=png&from=appmsg)

好好好，这四位，老熟人了啊。

只能说，快手你是会找Examples的。

使用起来非常简单。

上传一张照片，不需要像模特那样摆出专业pose，只要提供一张普通的站姿/坐姿照片就行。再上传想要试穿的衣服，AI就分析你的照片，包括身材比例、肤色、发型等细节。

然后，它会将选择的服装“穿”到你的身上，同时考虑光线、阴影等因素，让生成的图片看起来逼真自然。

和之前的那些虚拟试衣流程差不多。

速度也还可以，半分钟左右就能跑出来，肯定比你实际去试衣间换衣服要快的多。

这里放几个我跑的case。

比如，让坤坤穿上鸡你太美的周边服装。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGI1rQJXibuLIo1T57bGn3ZOCAgef5ticicW2zeo4V1Qk4xf7LeJEEggxPUQ/640?wx_fmt=png&from=appmsg)

让马斯克穿上周老板的红衣。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGI2xEUTc0Otu8guOLYJ4vbtx2v26BmBXbpkJhQwQlYIiaQrCQniau2fCZg/640?wx_fmt=png&from=appmsg)

全员加入红衣宇宙。

或者再给奥特曼，来点辣眼睛的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIa5MfzJcG5ibEaeCyTVpTSJneH6txo9dm1ER55tZD3RMdc3rM0cMYcpw/640?wx_fmt=png&from=appmsg)

不仅是真人，各种二次元，其实也融合的很好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIEZsiaJYY7tQB6xpvhN9Q5sKzUdVZibLuZVpBJfRCkMD1Fx43HVZuZyvg/640?wx_fmt=png&from=appmsg)

不过瑕疵还是老生常谈的那些问题，肢体和服装提取上，可图已经做的很好了，但是细节的处理上，还是没有那么精准，比如上面这张二次元的图，超长马尾重绘成了短马尾，一些头发没了，左侧衣服的走线有点奇怪。

还有这个。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIz6E9UDEBm5zP4BQVPyO6pBUcxgibPZiaoewax20YBu4TWSLcgvGYF87g/640?wx_fmt=png&from=appmsg)

短裙直接给我拉长了。。

但是，拿之前市面上很多类似的小产品对比一下：

IDM-VTON Virtual Try-On：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIHN3gM4sZxw528WCTuq9cAFE5W9pzA9G4wH5r4wNoMk4yEicLEFp96icA/640?wx_fmt=png&from=appmsg)

OOTDDiffusion：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp5yY7ialqPrR6uP3Gl1jZGIsyWg7yRRWcljtkyn4h5bHLibVjkMdibiarW46CqHicNSQZzicINucmcxApw/640?wx_fmt=png&from=appmsg)

Outfit Anyone：
试了好几次都没跑出来。。。

至于效果吗。。大家肉眼都能看出来。

可图的还是可以的。进步了不少。

AI虚拟换衣
的出现，我觉得不仅仅是一个有趣的技术玩具，
它是必然会彻底改变我们的购物方式和电商产业的工作流程的。

而对于商家来说，那些昂贵的模特拍摄，也可以从成本项里剔除了，因为模特拍摄太贵了，而且很麻烦，人力成本、设备成本、时间成本，都很高。

甚至有些经纪公司，为了节省成本，也不再签约新模特，全部换成兼职，
因为签约模特要配经纪人、助理等，费用高，兼职模特不需要这些，所以不如跟兼职模特合作。

“模特就是一个商品，但是这个商品有他自己的思想，不太好管控”，这经纪公司的原话。

而AI换衣和AI模特，简直就是最好的替代。

对于消费者来说。

原来你需要去实体店，在试衣间里反复更换衣服，甚至有时候还要排队等着几个小时。或者在网上购物时，你只能看着模特穿着的效果图，猜测衣服穿在自己身上会是什么样子。

这个过程往往既耗时又充满不确定性。

而现在，有了Kolors这样的，购物体验就可以完全不一样了。

在家吹着空调，吃着西瓜舒适地“试穿”数百件衣服。

每件衣服都是基于你自己的形象来展示，甚至可以看到自己穿着新衣服在不同场合的表现。

这样下次再参加晚宴，就不会因为我的穿着显得格格不入了。。。（血痛的教训。。）

最后，聊点别的看法。

回到时尚的本质。

我一直觉得，时尚不仅仅是关于衣服，更是一种自我表达和身份认同的方式。

它反映了我们的个性、价值观和对世界的理解。

Kolors Virtual Try-On这种AI换衣的出现，为这种自我表达提供了一个全新的平台。

它像一面镜子，让我们能够在虚拟世界中探索无限可能的自我。

你也不用再受到，
时间、空间的限制，也不用再在意他人的眼光。

你就是你。

是最美的烟火。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
