---
title: "一键将老视频超清修复，Topaz出的这个新AI工具有点强。"
发布日期: 2025-02-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668756&idx=1&sn=820a6b1ae0554b1edfef3f7a7b811e4c&chksm=f1f0388adc8c907265d715526ef356de84a12be0bd544e17435a7377dfd5aff180f4677e10ec"
---

## 摘要

**1) 一句话总结**
Topaz Labs 推出了首款基于扩散模型（Diffusion model）的 AI 视频修复工具 Starlight，目前处于免费内测阶段，支持一键自动化将模糊老视频修复为超清画质。

**2) 核心要点**
*   **技术升级**：Starlight 采用扩散模型（Diffusion model），通过 AI 重建缺失细节，解决了以往深度学习模型在处理动态画面时易出现的抖动、闪烁或细节不一致问题。
*   **操作极简**：实现全自动化修复，用户无需像过去那样手动选择模型或调整参数，上传视频后点击“Render”即可一键处理。
*   **使用状态**：目前为内测版（正式版上线时间未定），免排队且可免费使用。
*   **额度与限制**：测试版限制每位用户每周可修复 3 条视频，单条视频时长上限为 10 秒（超出 10 秒需在上传后进行裁剪）。
*   **处理耗时**：单条视频的云端处理时间大约需要 20 到 30 分钟。
*   **访问与注册**：测试网址为 `https://app.topazlabs.com/starlight`（需使用网络代理），支持通过邮箱、Apple 账号或 Google 账号注册登录。
*   **任务找回**：若因网络问题导致状态显示“failed”或长时间无反馈，可刷新网页并在左侧“Render history”中查看和找回进行中的任务。

**3) 风险与不足**
*   **黑白视频效果受限**：黑白视频的修复效果整体逊于彩色视频；若叠加“黑白+极度模糊”双重因素，容易导致物体形状变形（如圆筒变扁、背景碎裂）。
*   **剧烈动作易崩坏**：在人物动作幅度过大或过猛时，仍可能出现少数帧画面崩坏的现象。
*   **极端模糊细节难还原**：对于原视频中极度模糊的文字细节以及混乱的背景，AI 仍无法有效修复。
*   **边缘与特定元素处理不佳**：处于画面边缘的人脸以及品牌 Logo，有时会出现修复效果不理想的情况。

## 正文

经常有群友问我有没有什么把视频修复的工具。

而我过去最推荐的，也是我心中目前最牛逼的视频修复工具，自然就是TopazVideoAI了。

这玩意儿我2023年就写过教程，传送门在此：
视频一键无损超清放大 - 最强AI视频修复工具TopazVideoAI

但，斗转星移，日月如梭，现在已经2025年了。

我们在进化，而Topaz他们家，自然也再进化，前两天他们家又整了个新活，搞了个叫
Starlight
的新东西。

号称能修复“不可能”的视频，直接把视频修复这事，又推上了一层台阶。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLz3EmpbVjpoCS0olDP4DyojlL3VvCibOufPfpib35tXApx01ftlX9pOrFw/640?wx_fmt=png&from=appmsg)

2月6号的时候，Starlight测试链接都没影呢，他们就光靠一个NASA火箭发射的老视频修复预告，就在X上怒刷80多万播放。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzrVBURR8uL6nGCzcoNHIgfErqrjqJPIpoqUjkgJkkA70ZkQv2BlhOZg/640?wx_fmt=png&from=appmsg)

给大家看一下这个修复的效果。

老录像里的纹理、边缘、光影全给你救活了，连最怕的人脸变形都没翻车，
稳得一批
！

从Topaz在社交媒体和外网的评价也看得出来，他们对自己的新产品效果很满意。

蹦蹦跳跳地在youtube和X上发了一大堆修复视频，他们在官网更是特意强调：“有史以来第一个用Diffusion model做视频修复”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzdmWeUY67nJrd9Z9R30SVKqPibiaxP1XlYs7syMMtxY0wqjicdFeFungdA/640?wx_fmt=png&from=appmsg)

没错，就是你现在脑子里可能闪过的Stable Diffusion和Sora用的那个Diffusion技术。

之前基本上视频超分和修复的天就是TopazVideo了，而他们用的还是深度学习那一套，在视频修复上，需要你去选很多模型和很多参数，极其麻烦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLziaHTQyiaib4bwSSsQVZmOYLl4KudKJ1SOCpLfmdC4psAYSo162kOxEKHA/640?wx_fmt=png&from=appmsg)

而且你就算把模型和参数都调好了，TopazVideoAI可以开始逐帧修复了，但帧与帧之间的关联依赖算法拼接，容易导致动态画面特别是一些大幅度的人物动作时出现不连贯，还是需要我们一点一点手动调整参数优化。

要不然基本上都会出现抖动、闪烁或细节不一致的问题，超级烦。

但是
Diffusion mode就牛逼了，
以通过
类似人类大脑补全缺失信息的能力，去
想象合理的画面内容，把视频里面模糊的地方重建成更真实的细节。

其实就跟之前AI绘图的重绘增强magnific.ai几乎一样，只不过一个是图的，一个是视频的。

最关键的是，现在也更自动化，不需要再手动改参数了，上传原视频就一键给你修复，爽歪歪好吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzPsJy4Ift5tYDGxTO0zkOI1LSKFBQ1SiaO3Qwc8Lw0Du11zmt3aVs9jw/640?wx_fmt=png&from=appmsg)

而且，这个修复神器现在是内测版（正式版没说啥时候上），可以免费白嫖。

也不需要排队，登录即用，使用方法也贼简单：

登陆注册 - 上传要修复的视频 - 点修复 - 等20分钟 - 修复成功。

你需要做的，只是点两下鼠标而已。

Starlight的测试网址在此
（记得开魔法）
：https://app.topazlabs.com/starlight

可以用邮箱或者apple账号、谷歌账号注册，
登陆成功后Starlight测试版界面长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzky6ACO8CrhnD7heDmGWMPtKFYDtiaN6BBvLeNC2rChtmacoCvq1tltw/640?wx_fmt=png&from=appmsg)

测试版目前的使用额度是每周可以修复3条视频，单条视频最长不超过10秒，如果你上传超过10秒的素材它会让你裁剪。

第一步，你直接
拖拽原始视频文件或者浏览文件夹上传。

当视频上传成功以后，点击页面左边蓝色的【Render】按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzdohSN23zvk5r3AxeM5r028tNjib8VibSFeVGWhYcNNQTpywQayaYGIjw/640?wx_fmt=png&from=appmsg)

我上传的是15秒的视频，所以进度条会出现这个蓝色的框，狂炫的范围就是最后修复的部分了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzZNxkvJU8qTIKibXBItve7kFkJ2uATvTGJajb87kGQtoMtyc1Lh0Fu5w/640?wx_fmt=png&from=appmsg)

Render按钮上面出现这个修复进度条，Status显示的是“processing”就是上传成功了。

他们后台应该是有点算力爆炸的，一条视频我测的时候大概是等二十到三十分钟左右修复好。

如果等了很久还是没反馈修复好的结果，或者状态提示“failed”，很大可能是网络问题。不用慌，刷新一下网页试试。等他重新加载一小会，滚动一下左半边的界面能看到“Render history”，就能找到之前进行中的修复任务了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLz1icXrtOFFGQ3icHqicf7uicyRb3J2ToU1uDCcLkhaVpTEUQP10BXl2y89g/640?wx_fmt=png&from=appmsg)

修复完成的界面是这个样子，修复前后的视频拼一块，看得很直观的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzvONnldb2hsWZjRpMkDhtGtddojttZa39ZPYnhra140AYg4FVTaN8VQ/640?wx_fmt=png&from=appmsg)

我相信你也直观的看到了，修复的效果了。

除了要等的时间久点，其他步骤都很丝滑，一味地点鼠标就行了，本懒人的福音。

最后，视频修复成功，对比一下修复前后。

这画质，这清晰度。1955年的老视频，修复完直接穿越2025。

再贴几个我跑的case。

比如已经赛博包浆的1995年街头采访的修复效果。

还有86版西游记。

真的，老素材有救了，特别是家里小时候，那些存的非常珍贵的影片。

不过不知道是不是放出来的测试版还不是最好的模型，或者也是扩散模型的通病，我跑了十几条case，多少还是发现了一些槽点。

比如黑白视频的修复效果相对彩色会差一点。尤其是黑白+原始视频太模糊的双重debuff，圆筒火箭变扁铁，背景的铁架更是碎成渣。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLz2LXx7nfOmuSSP8Cy4yqbP0SYgh23jxEj1SWods000TmOhIGfyOtibNg/640?wx_fmt=png&from=appmsg)

虽然比之前的模型修复效果好，但动作幅度太猛还是会崩那么几帧。

还有一些太模糊的文字细节和混乱的背景，还是不好修复。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzVNiavcXmBj0EjsyicVxiawKDHu2icz7dKCTt8uClYwQjgHLkrZLXYIBSRw/640?wx_fmt=png&from=appmsg)

必过说实话这玩意他要是都能补齐，那我真的也愿意给它磕一个，人都看不清那是啥字，别说AI了。

边缘处的人脸，有的时候也有点效果不太好，logo也是。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpUribcMSDzE1JfdzGSTLibLzNia6v7fCLOvmicxmZVWEYqR29bWZ6N7bFy2WUcy8cLY6Iex7g6Xy9vFQ/640?wx_fmt=jpeg)

不过原视频基础就这样，本身这些细节也糊成马赛克了，没必要难为AI。

整体来说，瑕不掩瑜。这个修复效果已经很不错了。

没拍好的新素材、模糊的老视频等等等等……全都有救了。

我们每个人的手机里、电脑里，多少都躺着一些珍贵但画质不太好的视频。

可能是小时候爸妈用老相机录下的生日，可能是毕业时和同学们胡闹的傻乎乎的短片，又或者是第一次自己出去旅行时录下的风景。

也许不清晰、不完美，但它们都记录着再也回不去的时刻。

但现在，有机会，用最新的AI工具，让他们重生。

人类一直在努力对抗时间。我们造相机，拍视频，就是想把流动的时光凝固，让我们从时间的尽头，回头看那段冲向自己的人生。

所以，也别让你的回忆在硬盘里继续积灰了。

生活总是匆匆向前，让过去的画面清晰一点。

未尝不是对回忆最好的温柔。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
