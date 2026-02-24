---
title: "5分钟教你用AI整理会议纪要，体验刚上班就下班的感觉。"
发布日期: 2024-07-16
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647663840&idx=1&sn=975ae1354de59ca91be0c0fb86c4d5ca&chksm=f15d59ffcc926e1d9629b03799dd4f0a1687c3b780ab39eb82cc63e3f2f47fb42de407eda723"
---

## 摘要

**1) 一句话总结**
本文介绍了一套利用通义听悟、Kimi和Markmap等AI工具，将会议音频快速转化为结构化文字纪要与思维导图的标准化工作流程。

**2) 关键要点**
* **整体工作流**：分为三步，即音频转文字、生成会议纪要总结、转化为思维导图。
* **音频转文字工具**：推荐使用阿里“通义听悟”，无登录门槛，每日登录自动获赠10小时免费转写额度。
* **转写效率与功能**：支持实时记录或音视频文件上传，转写速度快（41分钟音频约1分钟完成），自动生成概要、章节速览和发言人总结。
* **文本去噪**：使用通义听悟右上角的“AI改写”功能，可几十秒内自动去除口语中的语气废词，随后导出为Word本地文件。
* **纪要总结工具**：推荐使用Kimi处理长文本总结。
* **Prompt（提示词）设定**：向Kimi输入“专业CEO秘书”设定的提示词，要求其按固定框架（会议主题、时间、参会人、主要事项、讨论、决定与行动计划等）输出不遗漏数据的结构化纪要。
* **Markdown格式转换**：在Kimi输出文字纪要后，继续要求其将内容转换为Markdown格式文本以便后续使用。
* **思维导图生成**：将Markdown文本复制到开源工具Markmap（markmap.js.org/repl）左侧，右侧即可自动生成思维导图。
* **导图保存方式**：在Markmap左下角点击下载HTML文件，用浏览器打开该文件后，直接截图即可保存为图片。
* **平台替代方案**：若使用飞书或腾讯会议，可直接使用其自带的音频转文字功能完成第一步，后续总结与导图步骤保持一致。

**3) 风险/不足**
* **专业词汇识别局限**：音频转文字工具在处理特别专业或冷门的词汇时，可能存在识别准确率下降的风险。

## 正文

最近还挺多人在群里问，有没有啥好的总结会议生成纪要的AI。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcTibu2HBSzkV6rIXVwE9ShndSMjhxzRFe3TT0WVVMNjaZqicL2O7D558w/640?wx_fmt=png&from=appmsg)

他们有时候开会和做访谈，这种东西是刚需，要不然自己在那总结，那就是被硬控在工位3、4个小时，很痛苦。

本来想甩一篇以前的文章给他们，但是翻了翻，我居然没有写过类似的= =

所以今天更新一篇这个教程，也算是补上AI办公的拼图。

整体上，按照我自己过往的和朋友们的经历，在这块需求上，我们一般的流程都是：

将开会的纪要从音频转为文字。
进行会议纪要总结。
转变成思维导图。

这个流程其实不止针对于开会，同时也针对网课、播客等等，一切涉及到声音的场景都可以用。大道至简，其实都是相通的。

我们一步一步来说。

一.音频转文字

这一步没啥可说的，直接上阿里家的神器：通义听悟。

网址在此：https://tingwu.aliyun.com/

原因无他，通义听悟是为数不多的没有门槛登录即用，且可以白嫖的音频转文字的工具。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcNMJlkE2tMcjOekYic6aeL9tRPibdvkejcc4QsRFk00jAaqfRTZic26ibicw/640?wx_fmt=png&from=appmsg)

每天登录的时候，你就能自动获得10小时的转写时长额度。你没看错，是每天都有。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcao18DXBhcHqldQxDlLVCgibDnYANhnzEY6lGUpyCvUtjGHnE2djLJzA/640?wx_fmt=png&from=appmsg)

你登录个10天，就有100个小时。而且就每天送的10小时，这个时长额度，对于99%的人基本都够用了。

你要是实时开会，你就可以在网页上打开实时记录。

如果是手机，就在手机上打开通义千问，然后在频道里找到通义听悟，把那个实时记录打开直接录音就行。

如果你已经有了录屏或者录音，那就直接上传音视频就行。我用我最喜欢的B站的
【罗翔 x papi酱 x LKs】的那期节目做个case。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcuu44G5FpyOtHQBU3wp7NRaYfdS9VKsISCukH5ImwKjrbnHIezia8qYQ/640?wx_fmt=png&from=appmsg)

我把录音下载下来之后，传到了通义听悟上，41分钟音频，大概花了1分钟就转写完了。

它会把概要、章节速览、发言人总结、原文全都给你准备好。你可以直接在这上面看一遍整个的文字。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcD6epMcMnx4DDuDYzQ6FQslIic0ibOxuM3NMEoDX6V3gfgqTVNeotwqdA/640?wx_fmt=png&from=appmsg)

在识别精度上，通义听悟也没啥大问题，只要不是特别专业冷门的词，基本都能干对。

你也可以点击这个批量摘取原文，把整个的文字放到右边的文本框中。方便你更好的阅读。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcDRWWrk6aycRicHHJib4agZYgyYSFwgI6NxR8WFlW9aaJeN2cKoZSlKyg/640?wx_fmt=png&from=appmsg)

反正左边那种形式，我是读起来有点费劲，我更喜欢摘取原文后的阅读方式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcwK1xA8lYzDk0nITdRvoK8pEj3VibMkYzQytEoetMpDMvibVT7QMF2t2g/640?wx_fmt=png&from=appmsg)

有了文字以后，但是稿子里是你会议的原文，人在说话的时候，其实是有很多嗯嗯啊啊的语气废词的，特别是在一些会议或者直播中，那一篇合格的稿子，自然是需要把这些语气词去掉，精练化。

这一步也直接用通义听悟就行，直接点击右上角的AI改写，点一下，就完事了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcc1qhLciajXadmpDtvBzuXsqASe7YXrZod9iaTyNDgALjr37tbBZptxlw/640?wx_fmt=png&from=appmsg)

大概几十秒，整个改写就完事了。

我们再点击导出，把稿子变成一份word的本地文件，接下来的总结和脑图，就不用通义听悟了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcu2sAIANEWEJ0HSXxlukl0artd54gfNvTjSnjhZ7LeQ2mGHEfU9mq8w/640?wx_fmt=png&from=appmsg)

二.进行会议纪要总结

我们有了本地文件以后，打开我们的老朋友，Kimi。

网址在此：https://kimi.moonshot.cn/

这个也没啥说的，kimi依然是国内体验最好的总结长文本的模型。

这里我也有个总结会议纪要的Prompt，来自Kimi官方，我简单的改了一下，你们也可以根据你们自己的需求进行魔改：

你是一个专业的CEO秘书，专注于整理和生成高质量的会议纪要，确保会议目标和行动计划清晰明确。
要保证会议内容被全面地记录、准确地表述。准确记录会议的各个方面，包括议题、讨论、决定和行动计划
保证语言通畅，易于理解，使每个参会人员都能明确理解会议内容框架和结论
要求格式规范、言简意赅
绝对不能遗漏重要信息和数据

## 工作流程:

-
输入: 通过开场白引导用户提供会议讨论的基本信息
-
整理: 遵循以下框架来整理用户提供的会议信息，每个步骤后都会进行数据校验确保信息准确性
- 会议主题：会议的标题和目的。
- 会议日期和时间：会议的具体日期和时间。
- 参会人员：列出参加会议的所有人。
- 主要事项：列出会议的所有主题和讨论点。
- 主要讨论：详述每个议题的讨论内容，主要包括提出的问题、提议、观点等。
- 决定和行动计划：列出会议的所有决定并以原句的形式输出，以及计划中要采取的行动，以及负责人和计划完成日期。
- 下一步打算：列出下一步的计划或在未来的会议中需要讨论的问题。
-
输出: 输出整理后的结构清晰, 描述完整的会议纪要

## 注意:

-
整理会议纪要过程中, 需严格遵守信息准确性, 不对用户提供的信息做扩写
-
仅做信息整理, 将一些明显的病句做微调
-
会议纪要：一份详细记录会议讨论、决定和行动计划的文档。
-
只有在用户提问的时候你才开始回答，用户不提问时，请不要回答

## 初始语句:

""你好，我是会议纪要整理助手，可以把繁杂的会议文本扔给我，我来帮您一键生成简洁专业的会议纪要！""

把这段prompt直接复制，扔给kimi，然后他回复你了之后，把你刚刚导出的文字稿传上去就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBchUuW4FgMT1Z3cKItWT4gpjGvcayLbSib47NU1mdZkoPvTicLtIibXiaCOA/640?wx_fmt=png&from=appmsg)

很快，一篇会议纪要就完事了。

到这一步，其实对于很多人来说，就足够了，文字已经能满足大部分的需求了。

但是还是会有很多人，想要思维脑图的格式。

这一步，其实就更简单了。

三.转变成思维导图

思维导图其实是可以用文本转过去的，不需要自己画，它有一种特定的格式，叫做
Markdown。

我们直接在上述Kimi输出的纪要的基础上，让他给根据那个会议纪要，在给我们一个Markdown格式的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcnUgSjCP3xQ57D2oHjyaxgjHQP2AGnmtCQdWaWIia6YOdzMVLy2bQT4g/640?wx_fmt=png&from=appmsg)

Kimi就会嘟嘟嘟的给我们生成Markdown格式的文案，我们把鼠标悬浮上去，复制就行。

然后我们打开一个神器网站：https://markmap.js.org/repl

一个专门将Markdown格式的文本转化为思维导图的开源工具。

我们直接把刚才复制的Markdown格式的文字，粘贴到markmap的左边，右边就会自动出来思维脑图了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcicHS1o4YX7N1QlV7VZPHdFre5pGtN7wT30tV8HoD3nwQkJibv7JlWhMQ/640?wx_fmt=png&from=appmsg)

这个网站我以前给很多人也安利过，但是他们都问我，怎么保存图片。。

至于怎么保存成图片，那也挺简单的= =

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcosKyG3WmaecHbrMicjcLrOL82NWAicEFB1PBicUiavAJgLxwEOvSlrytXw/640?wx_fmt=png&from=appmsg)

左下角，这个下次html文件选项，点一下就能下载一个html文件，这个文件是可以用浏览器打开的。

打开以后你就能看到你刚才生成的思维导图了，里面的文字都是可以选中复制粘贴的，至于你想保存图片？那更简单，直接截图就完事了= =

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBccaLG1pv2R336qHohvp95IkVLsTy9ibsMad7RCY4ibwaicqT1wjvQTLoqA/640?wx_fmt=png&from=appmsg)

至此，你的会议就从一段音频，变成了思维导图，而这个时间，快的话可能就几分钟。

而很多人的会议，可能是在飞书或者腾讯会议里面开的，那也没啥问题，不过第一步，就只能用他们自己的音频转文字+优化了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryVBvPHwmhSvibTW4WX6jBcBnFX47ohmDohnBJTeY2bibWUzgpQLh2r08AfaOora2xLDxtLKvx8tYg/640?wx_fmt=png&from=appmsg)

后面的基本都一样。

希望这篇小玩意，能对大家有一些帮助。

毕竟，AI这玩意，从始至终，都是希望让我们生活更美好。

去追寻我们觉得更有价值的事。

不是吗。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
