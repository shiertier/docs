---
title: "Nano Banana Pro的最神级用法，其实是一键生成PPT。"
发布日期: 2025-11-24
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647677146&idx=1&sn=549a287c47b03278afedf2eba0d311b2&chksm=f104f93c991263fe5b01f98dc43a8dd574bb993107d05b0a3d0d75251e341c5e639a2031bff1"
---

## 摘要

**1) 一句话总结**
通过将源文件上传至 Google NotebookLM 并调用 Nano Banana Pro，用户可以一键生成内容准确且具备高度定制化视觉风格的演示文稿（PPT）。

**2) 核心要点**
*   **核心工作流**：在 NotebookLM 中上传素材，系统对内容进行总结拆分后，调用 Nano Banana Pro 逐页生成 PPT，并以前图为参考保证整体风格统一。
*   **支持多种输入格式**：支持 PDF、Word、TXT、MP3、JPG 等常见格式，以及直接抓取 YouTube 视频链接（不支持直接上传视频文件）。
*   **内容与配图准确性**：PPT 中的数据严格遵循原文，且能够精准提取并使用源文件（如论文、文章）中的原始配图。
*   **高度自定义视觉风格**：可通过提示词（Prompt）随意切换风格，如黏土拟物、文具手账、漫画、大字报、水墨、酸性设计、Y2K 等。
*   **两种输出模式**：支持生成“详细演示文稿”（字数较多，适合阅读与资料分享）和“演讲专用”（信息精简、突出金句，适合现场演讲）。
*   **提示词（Prompt）框架**：编写提示词时无需过于复杂，只需明确三个核心要素：受众、风格、重点。

**3) 风险与不足**
*   **内置检索准确度有限**：NotebookLM 自带的 DeepResearch 功能精准度一般，若对信息准确度要求较高，建议使用 ChatGPT 等外部工具生成报告后再上传。
*   **图层不可编辑**：生成的 PPT 单页为一整张扁平化图片，无法分层，导致无法直接在系统内修改文字，需借助外部工具（如 Lovart）进行二次处理。
*   **中文文字渲染缺陷**：在文字较多的情况下，中文字体容易出现笔画模糊的问题（英文生成则无此问题），需等待模型后续版本优化。

## 正文

相信这几天，大家把
Nano Banana Pro已经玩疯了。

周五的凌晨，在通宵测试后，我也第一时间发了
Nano Banana Pro的区别上一代的
玩法合集
。

但，这个周末，在家又测试了各种各样的玩法后。

我想说，最让我惊喜的，其实，是NotebookLM支持
Nano Banana Pro后，用它来一键生成PPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9XzgXFzmHjT5jb3fhUz1CKkXdr9Nics4praLr6nyLs77xYG42XrCLLAQ/640?wx_fmt=png&from=appmsg)

对，是一键生成PPT。

我先给大家看看，这个玩法，所生成的PPT的质量。

比如，这是我把之前OpenAI的那篇论文《
why-language-models-hallucinate》扔进去，用黏土拟物风格产出的英文PPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR93dgGNeuvGuMfbRo22OCcNTCzhe9rkUHHlEXtCkB60wRkd0hLfbXgMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9GyDOppDySMJsZTWLlANaDYEqEW6lME8OtfUhJ9p0FsbU2IZEQLXT8A/640?wx_fmt=png&from=appmsg)

真的超级粘土，视觉风格和配色，都极度讲究，也非常棒的遵循了排版原则。

最牛逼的是，所有的数据，也都全部来自于论文原文，偶尔两页，错误会有一点点，但是很少了，完全处于稍微修改一下，就可以直接用的状态。

风格，你也可以随意的改变。

比如这是同一篇论文，但是我说，要改成向小朋友进行科普的，文具手帐风。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9VJsLYwiaZOj0TLQteqWCuQfz6Yic9udEM45TqicGheHjSLGMcxb4qPibKg/640?wx_fmt=png&from=appmsg)

还有，把我之前写的那篇
作为一个AI博主，我劝你先别急着用AI
，变成漫画风格的PPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9IxicWByWXrfasb8JxpP9HlDoOanCDc7SxfLfBYgwn1gUfD9GfXZLunA/640?wx_fmt=png&from=appmsg)

还有大字报风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9NKDVBV43ulvibhcJicpgn3LXX32qurQficqD2TSczSMQlEl5BJLNER1Lg/640?wx_fmt=png&from=appmsg)

真的非常的大字报，显著、突出、吸睛。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9hPSgAQzzerNdLsLKjkwYKyRPKib39XuaXvA3kQXKbSoWGibLyiatmJ9Ew/640?wx_fmt=png&from=appmsg)

我自己出去演讲的时候，经常就非常喜欢用大字报形式的PPT，无他，就是信息极度突出和显目，能最大化的配合我的演讲的节奏。

还有水墨风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9Z4Cp91aeyMbZibKO4vNGlcicOQdLNUbCq8aErSjtSMDMEka6zqZte9MA/640?wx_fmt=png&from=appmsg)

而这一切的一切，都只是我把要转PPT的原始素材，扔了了NotebookLM，然后
NotebookLM在拆解之后，调用Nano Banana Pro生成的。

酷到无敌。

可能很多人不知道
NotebookLM。

这里也简单的介绍一下，这玩意，是Google自己家出的知识管理产品，以笔记本（其实就是知识库）为核心，把你的知识可以整理在一个一个的笔记本里，然后进行提问、总结、各种模态的转化。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9ibMCibticoKVrCJxpDtwP2qVicnibN6PehYuibCA54peO0jE4yIsK3PUzV4Q/640?wx_fmt=png&from=appmsg)

之前NotebookLM其实火过好几波了，第一次爆，就是它开启了AI播客的这个赛道，从任意资料，生成两个人在对谈的AI播客。

而现在，它已经成了一个全面的庞然大物，能把知识，进行各模态的流转。

是我心中如今AI时代最好的AI原生知识管理产品，没有之一。

网址在此：
https://notebooklm.google.com/

如果进不去的小伙伴，记得使用一个美国的传送点。

进去以后，新建一个笔记本，然后就会看到，让你上传数据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9APDSThWMgjepjxCSJ6OuRWurRsYcCibRY8d9Lp86rSkMiaMkkwybxzLA/640?wx_fmt=png&from=appmsg)

基本除了视频不行，啥格式都可以，PDF、wodr、txt、mp3、jpg等等。

也可以粘贴链接或者文字。

他们比较骚的一点就是，因为都是Google家的产品，所以也支持直接抓过来YouTube的视频。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR97Lh70hwRnFezmCyKw6bbDbnY6K138wDRaicGRA83sdyNpUXBsBKtJQw/640?wx_fmt=png&from=appmsg)

我就随手传了2个文件，一个是之前AI看不懂爱心的那篇论文《Time Blindness in Video-Language Models: The SpookyBench Challenge》，一个是我写的公众号文章
AI看不到的爱心，成了最棒的AI检测器
的原文。

然后，因为NotebookLM支持DeepResearch，我就有顺带手的，让他给我总结了一份关于格式塔心理学的详细报告当做第三个文件扔了进去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR983D04et8icebgNhTgDUMsiawJnLvdE6rvJhCp8OjNMveFLrAuVHA7OxA/640?wx_fmt=png&from=appmsg)

这里我其实有点偷懒了，因为我说实话，Google家的DeepResearch的精准度真的一般般，对比OpenAI的
DeepResearch其实真的挺拉的。

因为我是格式塔心理学，其实没啥特别的难度，但是如果你对信息精准度的要求比较高，我的建议还是去ChatGPT使用DeepResearch去生成报告，然后下载一个PDF扔到NotebookLM里面来，别用NotebookLM自己的，你根本不知道在什么地方它就会坑你一道。

在文件都上传上去以后，你就可以找到右上角的演示文稿。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR99ZIqiaPvswniaIvm5ynmEY1biaKXtILjzPrhXj1PrDXZIMLAXNuQw8Wmw/640?wx_fmt=png&from=appmsg)

你如果懒得话，就可以直接点击这个卡片，什么也不管，NotebookLM在几分钟之后，就会给你生成一份默认预设的PPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9nLMqtrl3KMMldPRPjk6145cJH7AW3epOq2Z9F3YcZXR7o9nI30TNUg/640?wx_fmt=png&from=appmsg)

这份默认的PPT，长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9kPTKJ5xLxEseLIQ1YPdx0OddpN8fJqutjUAY4AvyoiapG0zGjEruhibw/640?wx_fmt=png&from=appmsg)

质量已经相当的屌了。

而且不同于很多其他的产品，你会发现，这里面的配图，都是我文章里或者论文里的配图，全都精准无比。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9oK77nI9KFpyXMMwBFOevumiag3JwxTtLx5Gqribm4taqdicXwZDbUmbNQ/640?wx_fmt=png&from=appmsg)

其实从这个地方你也能看出来，这个功能本身，就是一个非常明显的工作流，而且背后用的就是Nano Banana Pro。

内容进行总结和拆分，拆成PPT专用的格式以后，调用Nano Banana Pro一页一页的话，前面的图片为后面的图片的参考，以保证所有PPT的单页风格统一。

当然，除了傻瓜式的默认直接点之外，你也可以点右边的笔，进入到设置界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9pRvxpMz9eAZFuo9DaLEjPrnSl1KBxwNicQRHdw2YbS6Riber9aNzDmMA/640?wx_fmt=png&from=appmsg)

你可以输出两种PPT类型，一种就是详细演示文稿，这种东西，就不是你拿去演讲用的，一般上面的字巨多，就是纯粹的你拿去微信发给别人看的，当个材料。

第二种就是演讲专用的，演讲专用的就是我上面那种，一页上可能只有一两句金句和部分信息，发布会上的PPT基本就是演讲PPT。

时长我一般选择长。

然后就是最重要的，Prompt。

这个地方的Prompt其实也不需要多复杂，主要就是三个点：

受众、风格、重点。

即你这个PPT，希望用什么风格展示给谁看，有没有需要重点展示的内容。

我就写了一句Prompt：

“使用黑色背景酸性设计风格，来从为什么看不到图中的爱心开始，为大家详细科普人类和AI视觉的不同，观众是一些对AI感兴趣的爱好者。”

大概十几分钟之后。

这个PPT就出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9thS42UMapmjLHRZOJB6dcLd0RSxK4n6LGl86L4jl1Om7ibkaoWticxLg/640?wx_fmt=png&from=appmsg)

这不比那些模板好看？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9zjYQtzkYSibl6FJ8nYhpFxZj6thhQqPcNlRwiaO0IGaMkY3rpNQ9zNyQ/640?wx_fmt=png&from=appmsg)

当然，你还可以不断的换风格，比如美式漫画风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9cZz9yWlPApXHKkriaDCOBFEkHJ8Tv106fxSDebylVF0t4icGhicDWejMw/640?wx_fmt=png&from=appmsg)

Y2K风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9j4hsBOXL9sJIbH6fDfdhuEpKLofteg55A58hGZoqeYJvf2yy0Ja8mg/640?wx_fmt=png&from=appmsg)

如果这些设计风格你不是特别了解的话，也没有关系，就直接说颜色+功能性。

比如，黑色背景+科技风格，也可以。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9aoNosYOXpxSBtPMiaYfLv2mtEIcEKnO8Y51S11V6kFuWPBQZfPx1aPQ/640?wx_fmt=png&from=appmsg)

很强，NotebookLM+Nano Banana Pro的组合，可能是我今年，看到的最离谱最爽也最有用的功能之一。

当然，在实际体验上，还是一些需要优化的点。

比如，因为每一页，都是由NanoBanana Pro直接生成的，所以是一整张图，并不能分层。

这也就导致，你想改图，没有办法改。

这块其实完全可以借鉴Lovart的做法，直接完全可以在生成以后的PPT页面上，进行分层爆破，把文字图层单独拎出来，实现文本可编辑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9Wu8OZL9NUiaRO1vibO6MfYgqTAFDkQR25SEKQS9spvc6bowhwic4FBuyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9nSj9KKkrojYj0CjXuyG39CpNkniaqtSdKv2ibp1eiaX4eicWnjGukkvnQw/640?wx_fmt=png&from=appmsg)

而现在，我现在要改图上的字，都是把那一页单独复制出来，扔到Lovart里单独改字，这个路径就很长，完全可以在NotebookLM里直接做成分层编辑的，这样体验就会好非常非常多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR97nq4Nl96U95RbuiaCHoRCPQibDXYCiamJpsSGWslg4P80b9cHFXjEoSRg/640?wx_fmt=png&from=appmsg)

还有中文字这块，字一多，其实还是有一些小字会糊笔画，这块中文跟英文差距还是有点大的，英文几乎不会糊笔画，但是中文会糊，这块也能理解，毕竟是Google，只能等真正的Nano Banana 2来去解决这个问题了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9iaWLe14IbiclRub2DNtkZIeE9ibiaJOBiaTruKVDictgzCHmaqWjR1F1R6Ug/640?wx_fmt=png&from=appmsg)

但总体，瑕不掩瑜，依然强到爆炸。

说实话，我平时特别不喜欢出去演讲，基本邀请我出去演讲的，我基本都拒了，核心不是我不喜欢演讲这件事，或者我不喜欢这个活动。

我就是，单纯的讨厌做PPT这件事。

因为不管是我以前在公司里当牛马，还是现在作为一个AI领域的博主，我会发现，我做的PPT，大多数都是一次性的。

述职、讲课、汇报、分享等等等等。

你整理素材、填充内容，可能只花了几个小时的时候，但是美化这个PPT，为了让它变得好看，却花了好几天。

这好几天的时间花完了之后，这个PPT，从此就躺在了你的文件夹里，几乎就是永远的吃灰。

所以对我自己来说，做PPT这件事，真的性价比太低，真的不喜欢。

基本别人喊我参加一个活动或者进行一个分享，我问的第一句话，都是：

要做PPT吗？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR99P7B2b55Wz4R1AlBclyh7gFBkJ9Vk4AWoM5dwibibBayQmzPmO3iazDug/640?wx_fmt=png&from=appmsg)

非常的真实。

而以前，所谓的所有的AI PPT产品，坦诚的讲，能用，但是，真的不好用。

毕竟我们用AI生成PPT，很多时候，除了准确性之外，还要好看，甚至，是独属于你自己的好看。

而现在绝大多数的AI PPT产品，就是那种一眼很模板很常见的生成的即视感。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnVNV0hErOyQNhJt2icmtR9hdMjBXbpag9Iibyn3V6IvPtmI6nib5fhoFyJ0SfVmVkoRib5xMwEkSqdg/640?wx_fmt=png&from=appmsg)

看多了真就跟AI生成的文字一样，那个味道太冲了。

而现在，可能很多产品没想到。

自己受到的冲击，居然是来自于一个画图的。。。

所以，我真的越来越觉得，在如今汹涌的AI浪潮下。

真正被解放的，不只是这么一个小小的PPT，而是我们的注意力。

我也不再需要把生命浪费在这一页的标题是用24号还是28号字，这个背景应该用什么来搭这种很多时候并无意义的细节里。

我可以把更多的时间，留给那些更难、也更值得的事情。

比如，去读一本难一点的书，去飞书里搭一个对公司更能提升效率的自动化系统，去和朋友聊一场更长的天，去好好打磨那一句真正想留在世界上的话。

所以啊，这就是人生的意义。

把形式交给AI。

把意义留给自己。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
