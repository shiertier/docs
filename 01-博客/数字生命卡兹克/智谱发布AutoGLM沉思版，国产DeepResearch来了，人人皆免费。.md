---
title: "智谱发布AutoGLM沉思版，国产DeepResearch来了，人人皆免费。"
发布日期: 2025-03-31
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670063&idx=1&sn=2927d1123361f9c3ff588dabaf012514&chksm=f1eee44a9fd8da4e8f97cd5861fc9fd7700f084d5c940c21c549a0581a0b21069990feba781a"
---

## 摘要

**1) 一句话总结**
智谱发布了免费且不限量的“AutoGLM沉思版”，该产品结合了DeepResearch与AutoGLM的智能体能力，可自主操控本地浏览器跨平台检索图文信息并生成深度研究报告。

**2) 关键要点**
*   **产品定位**：国内首个真正的DeepResearch（深度研究）产品，核心机制为“规划-执行-合成”，可自动生成长篇（如万字）深度研究报告。
*   **定价策略**：完全免费，不限使用量。
*   **核心突破（打破数据孤岛）**：借助AutoGLM能力，模型可自主打开并操控用户浏览器，直接在小红书、知乎、微信公众号等封闭内容平台进行搜索和浏览。
*   **多模态能力**：在自主检索过程中，Agent模型不仅能读取文本，还能直接识别并提取网页图片中的文字信息。
*   **底座模型**：沉思版的底座为GLM-Z1-Rumination（基于GLM-Z1-Air微调），专为长周期的“工具使用+推理”任务设计。
*   **模型数据**：据称GLM-Z1-Air推理模型性能可打平DeepSeek R1，且速度快8倍，价格仅为R1的1/30。
*   **实测表现**：生成一份1万字的深度报告耗时约11分钟，整体报告质量与Google Gemini的DeepResearch基本持平。
*   **版本区分**：网页版（智谱清言）仅提供基础的DeepResearch能力；若需使用完整的AutoGLM跨平台检索能力，需下载桌面端产品并配置权限。

**3) 风险/不足（基于原文明确指出）**
*   **C端体验粗糙**：产品设计不够成熟，缺乏完善的用户交互体验。
*   **占用本地资源**：桌面端运行时需直接占用用户的本地浏览器（未采用虚拟机方案），导致生成期间用户无法操作该浏览器窗口。
*   **缺乏后台与多任务能力**：不支持后台运行，任务执行期间为唯一窗口，用户无法新建对话或进行其他聊天（会弹出“当前对话正在进行中”的提示）。
*   **缺少前置交互**：在用户提出问题后，缺少类似OpenAI DeepResearch的反问机制来帮助用户补全和明确任务信息。

## 正文

人在中关村论坛现场。

刚刚看完了智谱的发布会。

说真的，即使玩过了这么多的DeepResearch产品，我也没想到，他们能扔出个这么个有趣的玩意。

让我觉得眼前一亮。

这个产品叫做，AutoGLM沉思版。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVa1AQCMeweApY5GiaQkEWL0KYPJ7YibAEeOlkSvz3m36H8bPvFZQ9ntJsA/640?wx_fmt=jpeg&from=appmsg)

他们已经开放了内测，我在现场，一边听一边测一边写文章，看着屏幕里面的AutoGLM搜寻着各种各样的信息，再听着
张鹏在
台上讲述智谱在2025年的愿景，两种信息汇成河流，真的有一股别样的风景。

聊回到
AutoGLM沉思版。

你可以简单地把他理解成，DeepResearch和AutoGLM的结合。

DeepResearch我已经安利过很多很多遍了，我觉得我还是有必要再在这里强调科普一下。

DeepResearch中文名即为深度研究，第一个做出这个产品的，是Google的Gemini。
作用很简单，深度研究你提出的问题，然后花10到30分钟时间，搜索全网数据，然后给你一篇详细且非常有深度的展示报告。

但是Gemini做窜稀了，效果很烂。

真正把它发扬光大的，是OpenAI，用最牛逼的
o3模型，微调了一个端到端的Agent模型，按照规划 - 执行 - 合成的路径去完成任务，还会在过过程中，动态调整任务。

至此，成为了我愿意每个月付200美刀都去用的功能，天天在群里吹。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh34Cd4qTbB581hslXH6AzJPq5EKGqFUNCzRYJV3zcZom2CDCbI2N461w/640?wx_fmt=png&from=appmsg)

不过国内说实话，一直都没有真正的DeepResearch。有很多类似的产品，但是我们一般称为DeepSearch。

注意看，一个是
Deep
Research
，一个是
Deep
Search
，后面的单词是有区别的。

Research
代表的是深入研究、深度调查。

Search
代表的更多的是更高级、更深层次的信息检索。

仅仅两个字母之差，但是在做法、目标上、结果、耗时上，其实是有巨大的区别的。

DeepSearch是比较新的AI搜索方式，
其核心理念是
在搜索、阅读和推理三个环节中不断循环，直到找到最优答案。

比如DeepSearch首先利用搜索引擎在互联网上广泛获取信息，然后对特定网页进行深入分析，最后通过推理评估当前状态，看看是否需要将原始问题拆解为更小的子问题，或者尝试其他搜索策略。可以通过多次搜索和推理的循环，最终得出更准确的答案。

DeepResearch
则是在DeepSearch基础上的应用
，主要是可以自动生成研究报告。

用户只需提供一个主题，DeepResearch会首先规划出报告的大致章节结构。
然后，针对每个章节，利用DeepSearch进行信息搜索和推理，最后借助大模型进行整理和整合这些信息，生成完整的研究报告。

Deep
Research一般都是用一个通用基座模型专门微调的端到端模型，报告丰富详细，耗时最低几乎都是几分钟，平均十几分钟，我甚至还用OpenAI的
DeepResearch跑过分析30分钟，输出4w6千字的任务。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3cgBcfezSD09cnALpyn24AaawmHXgw1VoibRlUHq0RFuyswzKyY26FZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3Gv7lgagL4ddbPwI3cOEr212iad0UmvrVqMLhCmjreE5S9MrjloaBXKQ/640?wx_fmt=png&from=appmsg)

国内目前做的最好的是秘塔的先想后搜，还有豆包的深度思考，这两个是
DeepSearch的典范。

但是
Deep
Research，目前确实还是一个空白。

而这次，智谱的
AutoGLM沉思版，把这个空白补上了。甚至还用了更有趣的方式。就是把AutoGLM的部分能力，补足到了
Deep
Research里。

最最最牛逼的是，完全免费，不限量，随便用。

AutoGLM我也写过两三次，从他们第一次发布开始我就一直在追踪了。

参见这一篇：
智谱AI悄悄发布AutoGLM，这一次，贾维斯真的要成现实了。
我就不过多赘述了。

至于
Deep
Research+AutoGLM的融合，这个理解起来会有一点抽象，直接看case吧。

比如，最近两个月，我经常在玩《燕云十六声》，他们刚刚也上了河西篇。（PS：这不是燕云十六声的广告）

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3hK8Gzd1ob10locXPk0XxWXlHTwRMhLNGenFmHBvkbMVwQNVrtFgGdA/640?wx_fmt=jpeg&from=appmsg)

我真的非常非常喜欢
《燕云十六声》的剧情，特别是其中开封城的一段28个NPC的支线，一叶知秋，我觉得是我将近20年的游戏生涯里，也是值得封神的一章。

所以我也对燕云十六州的那段历史故事，有了非凡的期盼。

所以，我就向AutoGLM沉思版提出一个问题：

我想了解《燕云十六声》中呈现的故事有哪些是真实历史背景的，请结合用户发掘出来的信息和真实史料进行详细解释，输出一篇1万字的报告，并给出引用。

这个问题，其实非常的不简单。不简单的原因在于，《燕云十六声》这款游戏，2024年12月27号才正式上线时间，几乎所有的正式资料，也都是在这之后的时间。

因为太新，可以说，没有任何一个模型，知晓《燕云十六声》的任何信息，他只能纯靠搜索和研究，一点一点的去理解，《
燕云十六声》这款游戏是什么，里面的剧情是什么样，里面主要角色有哪些，再去跟真实的历史，一点一点的拼凑，一点一点的校对。

所以，让我来看看，
AutoGLM沉思版是如何来解决这个问题的。

我先直接放一个我的一刀未剪完整版的12多分钟的录屏（很无聊，但是展示了全过程，有兴趣的可以看，没兴趣的可以看我下面的文字和动图介绍就行。）

在拿到任务后，
AutoGLM沉思版第一步干的事情是，进行拆解问题和任务规划。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3SLdPmVX0zVL7DicAhoyKlCmibwmqefQLYs8lUyib0Z3603guRzhUzBdoA/640?wx_fmt=png&from=appmsg)

5步分的非常清晰。然后根据规划，开始正常搜索，比如第一波《燕云十六声》的基本信息，
AutoGLM沉思版就抓了5个帖子来学习。

接下来，有趣的事情来了。

他希望，搜到关于游戏历史背景、剧情时间线的一些信息，他没有选择跟之前一样去搜索网页。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3sc5JRSvrAZRXiath4H21tCrvNhqHK7yjShq1TctgIrVjFJz8yHMEU4g/640?wx_fmt=png&from=appmsg)

而是，通过AutoGLM，打开了我的浏览器，开始跟人一样，打开小红书，开始搜索这个关键词：

“燕云十六声，历史背景”

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3AEicf8pomicMKUd75et8gibKehib2iaO69k9ib78wbgJN2k2RCO5Kmv5cOJg/640?wx_fmt=gif&from=appmsg)

自己开始在小红书上，开始浏览帖子了。。。

直接连看3篇关于燕云十六声剧情的详情帖子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3tqUTv9gTOUogpQXCU8up4ia9G5mLQ2R4IuTTawynAGguZ09ianicUPjTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3n9879yV7P0bsiaKGwYkicMBuuZbelvbehwRHTcgfFibHphEg755iax3LZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3329eBGxWlngGHz4uTGAVnWHbHEtmJMbEX89pS2iaqb2unbngiax92BPA/640?wx_fmt=png&from=appmsg)

这就是我说的，让我觉得
AutoGLM沉思版最有趣的地方。

你知道的，在国内，有很多数据孤岛。

最优质的信息源，比如公众号、小红书、巨潮、知网等等，都只能在自己的搜索或者大模型产品中才能搜到。

元宝为啥搜索质量高，还不是因为公众号只有它能抓吗。

所以，不管你是DeepReasearch还是AI搜索，没有优质数据都是巧妇难为无米之炊。

但是
AutoGLM沉思版，用一种非常猎奇同时又野蛮但有效的方式，解决了这个问题。

我既然抓取或者搜索不到，但是我自己有眼睛有手，我自己去看嘛还不行吗。我看看总不犯法吧。

于是，就有了上述一幕，打开了AutoGLM，开始自主浏览小红书，抓取信息。

这种事估计也就只有智谱能干的出来了，因为你想效果好，需要自己的DeepResearch和Agent模型，刚好，智谱都有，而且都是自己自研的。。。

而且，这个Agent模型，不是只能读取文字，图片也可以。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3soxc9AbXE16N1mDKwH3OQTv0ny76iaGB73D0NtVyj22JtGCOLO05icKg/640?wx_fmt=png&from=appmsg)

你会发现，这篇小红书的帖子里根本没啥字，字都在图里，但是
AutoGLM沉思版，全都抓出来了，并且在思维链里，总结的很棒。

后续，就是不断的搜索，不断的思考，然后更改自己的目标。

它不仅会看小红书，还会打开知乎搜。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh32iapN3wtL3QsDg9w2nakqxktvibicxtzVba93UlVNLCtxgjHGRQvRZVTg/640?wx_fmt=gif&from=appmsg)

甚至，还知道要搜索微信公众号。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh342LNrejH2tMBJpibmzAic2uiaLl3GpA2rkfMoAk93EjBAHicbdIQpeI8uQ/640?wx_fmt=png&from=appmsg)

知道打开搜狗搜索，在上面搜“燕云十六声 历史背景 分析”，然后打开了一篇游戏萝卜的写的很棒的文章。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3FFocdw1yC6tKXzbQsxYktdnXBC1sVVxXoB3IvibgNgRuBeZNaMrtFYQ/640?wx_fmt=gif&from=appmsg)

就这样噼里啪啦的，AutoGLM沉思版，打开了N个网页，甚至还一度打开了百度贴吧想去搜索，我连忙手动接管点了跳过。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3ib3A49Eicevu57lE61J7U9Iqbu1f8az6prfVoxKiaJNkCuut23XTHWscA/640?wx_fmt=png&from=appmsg)

再规划、推理、搜索了整整11分钟之后，一篇1w字的报告，终于放在了我的面前。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh32HxUibB3cibdcDl3z8Pf9BeVY7Tn7fvNsL1fJStAsnibOhmmwasGpH5jw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3ica0jttLtYRjLdo2aB1PibdHkLP9XodZicFSBgXONN7QeREYVaL1gxgxg/640?wx_fmt=png&from=appmsg)

报告实在太长，我就不放全文了。从报告质量上来说，肯定是打不过OpenAI的DeepReasearch的，这玩意即使不看小红书公众号这些高质量答案，就靠公网上的那些信息，那个质量也是离谱她妈给离谱开门，真的离谱到家了
。

智谱的这个
AutoGLM沉思版，在我实测下来，报告质量，大概是能跟Gemini那个DeepResearch打个平手，甚至在一些我的实测问题上，更易读更深度一些。

从我曾经做过的象限图里，大概在这个位置。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh39dkicM4tdVyaGqxiaOJA6eCCJCsPjX4JTuzz5MOsfGGh6UOBhWyV2bzg/640?wx_fmt=png&from=appmsg)

优点有很多，包括模型能力是很强的，DeepResearch+AutoGLM的结合也是非常有趣。但是缺点，我也真的必须要吐槽一下。

就是智谱的C端产品体验，实在做的是太粗糙了。。。

比如这个AutoGLM沉思版，是需要电脑客户端运行的，这些我都理解。

但是，我在提出问题，你在运行问题的时候，你要不要学Claude或者Manus做个虚拟机？而不占用我自己的浏览器，虽然现在是可以最小化，但是也很蛋疼，我根本不敢动那个浏览器窗口。

还有，OpenAI和Gemini还有Grok都知道这个等待时间太长了，所以做了后台运行和进度条，你把窗口关了，或者你新起一个对话聊别的，都可以。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3tRv5nicGCwFKFwDTicKj5JX89xI696T6pXhDyyRCIDGGhGXjgwbbOL3w/640?wx_fmt=png&from=appmsg)

但是智谱这个AutoGLM沉思版，居然是唯一窗口，我想着我这个任务在这跑着，一会过个10分钟我回来收菜，先去跟你聊聊别的。当我试图新起一个窗口的时候，他居然给我弹Toast。告诉我当前对话正在进行中，居然不能干别的。。。。我。。。。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3ScvKgAbbZmcOg3XKslR70rjRNQmlnFu9WM6CqBU1A3B72QmiamObfQw/640?wx_fmt=png&from=appmsg)

我不理解。

还有OpenAI的DeepResearch有个非常棒的交互，在我提出问题后，他会给我一个反问，帮我补全信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3xo9bZu2JYRcnsB4GgLTR9ib7Ue3d7Y3jRB6CXQn66LricEM4RglaRskA/640?wx_fmt=png&from=appmsg)

这个，智谱也没有。

从种种都可以看出，智谱是有模型底子的，他们的模型能力，坦率的讲，是真的很强。

比如这次终于发了他们新的推理模型GLM-Z1-Air，效果能打平DeepSeek R1，但是速度快8倍，价格是R1的1/30。沉思的底座模型也是基于
GLM-Z1-Air微调来的GLM-Z1-Rumination，能搞非常长的使用工具+推理任务。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVa4dDa3j2BJ4ibXvLbMY0acibyXVMMOiaNNeGYYqsRrxNCNSfN9M03TgZicQ/640?wx_fmt=jpeg&from=appmsg)

但是他们在产品的设计上，我也不知道是真的粗糙，还是太急了，就感觉，还不是很成熟，在体验上不得劲。。。

虽然产品设计上，有各种各样的问题，但是不可否认的是，
AutoGLM沉思版，就是当今国内第一个真正的DeepResearch产品，而且还加入了AutoGLM的能力。

甚至，跟OpenAI那昂贵的价钱不一样，智谱他，不要钱，不限量，所有人免费用。

我已经能感受到，智谱的算力，会燃烧成什么样了。。。

回过头来，我们再说下，该怎么去用AutoGLM沉思版。

这次他们其实有两个产品。

一个是网页版的，你登录智谱清言
https://chatglm.cn/。

看到输入框左下角的沉思按钮，激活就可以用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh304oXe9JKtCiaDia49Vm176NQ4aRxtmS63I0kx7LQ4BwaU3lTBBgiaTLCQ/640?wx_fmt=png&from=appmsg)

但是因为网页版的问题，权限不够，所以只是沉思版，也就是个DeepResearch，没有AutoGLM的能力。

所以如果你想用有AutoGLM能力的AutoGLM沉思版，那你就得去他们官网：
https://autoglm-research.zhipuai.cn/

下载桌面端产品，跟着教程配置一下权限，就OK了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3dJpIsqWsrKjyiaEBNydktRL3WUQCcSLc78EwuBAbFI9Be9dxRkbQbyg/640?wx_fmt=png&from=appmsg)

除了上面的《燕云十六声》的案例，我再给大家看两个AutoGLM沉思版写的报告。

比如我很喜欢星球大战，有一个问题是我一直想知道的，光剑的设计灵感。

就是《星球大战》里光剑的灵感据说来自东方武士文化，也有人说来自西方骑士剑，能否搜集官方采访或设计师访谈来对比考据？

而AutoGLM在深度研究之后，给我开了N多网页后，还拔高升华了一层。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3fZDFJiacr6juiaEyeFpHZmPJH5zpad7B3yXD1uu7sL9QKdsjBJ1SiaxJA/640?wx_fmt=png&from=appmsg)

后面还有光剑颜色的象征意义、
光剑设计的演变、光剑在现代流行文化中的影响等等段落，我就不贴了。只贴个结论吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3DNVxSKQzxNDkrrvdJe2MMVLHzia9dpoTbuIpJOKEdAjsqH8U3rAafrQ/640?wx_fmt=png&from=appmsg)

满分100分，我能打90分钟，真的。

还有一个就是，我昨天刚看到
爱尔兰的初创公司Equal1发布全球首款硅基量子计算机Bell-1，我自己其实对量子计算非常好奇，
我希望AutoGLM沉思版，帮我检索并总结2024年至今量子计算领域的重要研究突破。用时间线列出有哪些新的技术进展，这些进展意味着什么，以及可能带来的应用前景。

它在打开了一堆Google学术、
arxiv论文、知乎之后。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh36dUmmBp9tDIHOnox3oibOjqn3sfVrXaibNQibSrfCiczpy58PK8CRoW1BQ/640?wx_fmt=png&from=appmsg)

给我来了一篇还不错的回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp2ZBOFFxG7wjG5hZic9Xrh3WfpGiaNgzSOcCzfia9FRuWwgIHdJeBxs3xzib7NaNfJcicSagURFeMf9xA/640?wx_fmt=png&from=appmsg)

效果非常的好。

说实话，智谱的模型，是真的很强。但是在ToC的产品这一步，也许智谱走得还稍微有点踉踉跄跄，但这颗种子终究还是种下了。

今何在的《悟空传》中有一句我很喜欢的台词：

“花果山，什么时候才能重新长出花果来？不过，种子已经撒遍天下了。”

每一次进步都像一场晚风拂面的惊喜。

向前进吧。

智谱。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
