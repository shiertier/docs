---
title: "5分钟教你用AI做表情迁移，让一只猫萌萌哒的唱歌。"
发布日期: 2024-08-09
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664393&idx=1&sn=f657dac2c6f49324d19e1914f787f6a9&chksm=f17fed0e6a04d481bbd9cda429ea5651dc3871b86d973f419ce6433cc963ed438f722276b239"
---

## 摘要

**1) 一句话总结**
快手开源的AI表情迁移工具LivePortrait能够通过视频驱动人物或动物照片产生生动表情，并提供了低显存要求、开箱即用的本地图形化整合包。

**2) 关键要点**
*   **工具背景**：LivePortrait由快手在WAIC期间开源，与音频驱动类工具（如EMO）不同，它主要通过视频来驱动照片或视频。
*   **核心功能**：可将视频中的面部表情精准复刻到目标照片或视频上，支持45度侧脸，且该能力已成功泛化至动物（如猫、狗）身上。
*   **部署与使用**：官方于8月5日发布了本地图形化（GUI）傻瓜整合包，无需使用ComfyUI或进行复杂的本地部署，解压即用。
*   **硬件要求**：配置门槛较低，最低8GB显存即可运行。
*   **双运行模式**：整合包内包含独立的“人类模式”（`run_windows_human.bat`）和“动物模式”（`run_windows_animal.bat`）。
*   **素材建议**：驱动视频与目标图片最好均提前裁剪为1:1比例以获得最佳效果。
*   **性能参考**：在RTX 4060显卡环境下，生成十几秒的视频大约耗时70秒。

**3) 风险与注意事项**
*   **文件命名报错**：上传的图片或视频素材文件名绝对不能包含中文，否则会导致程序报错。
*   **模式混用风险**：必须根据目标对象（人或动物）严格选择对应的启动脚本，不能运行错误。
*   **异常裁剪风险**：当上传1:1尺寸的素材时，必须手动关闭“do crop”选项，否则系统会进行不必要的旋转剪裁（非1:1素材则需勾选）。

## 正文

昨天在群里看到海辛发的一个视频，直接给我萌化了。

喜欢到爆炸。

视频是这样的。

猫唱歌！！！而且唱起来这么可爱这么呆萌！！！

很多人在问是怎么做的，其实真的蛮简单的，毕竟是AI，AI的东西，一般就是有手就行，你懂的。

这个项目，就是WAIC期间，快手开源的那个表情迁移的玩意：

LivePortrait。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJ3KgaQDzJ0k1WzloGHQW5ib4h7vBT87KKhB9qzSmXiaXRlrH7fHRH2RIw/640?wx_fmt=png&from=appmsg)

网址在此：https://github.com/KwaiVGI/LivePortrait?tab=readme-ov-file

跟之前的那种照片说话啥的不一样，那种是给一段音频，然后让照片根据音频动起来。阿里的EMO就是一个典型。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJmXJtdGsBQica8xeib4PMbb7tpAup7h1ZOLE5bWIAnhU8oicv5kkCypM0Q/640?wx_fmt=gif&from=appmsg)

而快手的这个
LivePortrait，是视频驱动照片或视频，可以直接把视频里面部的表情，一模一样毫不违和的复刻到另一段照片或视频里。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJicDwIVOia5sicEjfmicmMq5opbrzeoxm4alTkyL5svnIKkF9BKZoO1ibpOw/640?wx_fmt=gif&from=appmsg)

不仅是正面，对于一些45度角的侧脸，效果支持的也很好。

但是如果只是这样，那其实也没有那么好玩，因为这样的效果，一个海外现在非常成熟的迁移产品Viggle也能做到。

它不仅能迁移表情，还能迁移动作。

而
LivePortrait我觉得最牛逼的就是，他们把迁移能力，泛化到动物身上了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJIVaNsqMiccmUEKYdgnjKtLdbakXhLWgiaM7f2wpYuWG0HQJtmn3CokbQ/640?wx_fmt=png&from=appmsg)

不是，你就说，谁特娘的看了满屏的可爱的猫猫狗狗的，不动心啊！

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJ0icwBsicxv9DXUILt3JrN0ohg5tAxa2ico3PHAk2RtEQJeEia060RJdncA/640?wx_fmt=gif&from=appmsg)

这一下，我不知道你们，反正我是心动的笑死。

我太喜欢萌萌的宠物了。。。

而想跟海辛一样，做个让小动物挤眉弄眼唱歌的小视频，也非常的简单。

快手这个老铁，在8月5号的时候，发了一个本地傻瓜整合包。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJJpsdyRMqH7m2FggEaoLaxpomNa86z4ibGanVoibia0a7GL0d1cEZg1csg/640?wx_fmt=png&from=appmsg)

所以，你也不用用那复杂的ComfyUI或者本地部署跑了，你直接把这个整合包下载下来，本地就可以直接跑，而且巨简单。

配置要求也挺低的，8G显存就能跑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJETrnXnCvzaj0RbAC1OTnibWbXvZAiaw786m7E8qkicyghVqAuDOp6XMdw/640?wx_fmt=png&from=appmsg)

这个整合包，为了方便大家下载，我也扔到后台了，
你直接对着公众号私信"LP"，就会自动发给你了。

是个解压包，解压出来以后，你就可以在文件夹里看到这两个文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrnfmOkJYEgW70RPTfppxLJHhD2v2ztoHzPup5QXDf4CYZYjapor6iahibh28flOdA7JFUwtJBRrTdg/640?wx_fmt=png&from=appmsg)

run_windows_human.bat是人类模式，也就是把表情迁移到人脸上用的。

run_windows_animal.bat是动物模式，把表情迁移到动物脸上去的。

一定，一定，一定不要运行错了。

比如我们要去跑上面的猫猫唱歌视频，那你一定要双击运行
run_windows_animal.bat！！！绝对不要运行另一个。

第一次运行时间可能会久一点，等个大概一分钟，你就能看到自动打开的界面了。

说实话，我还是喜欢GUI这种图形交互界面，因为真的很傻瓜很小白，上手即用。

界面也很简单，左边就是传你要被迁移的图，右边上传要迁移的视频素材，左右两边最好都是传1:1的图片或视频，自己先在手机相册或者美图秀秀或者剪映里面剪裁完，这样效果最好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryJ3eia8s81WUSA4H1pAZHRXjmrpF40vqKicAWovqgBGdupeHVBR43qMR4PtTpxPn9b2j8p0C1TwzA/640?wx_fmt=png&from=appmsg)

这里还有个坑要注意，你上传的文件，命名一定不要是中文名，要不然会报错。

当你传的是1:1尺寸的时候，下面这个do crop记得关掉，要不然会给你做旋转剪裁。如果你懒得裁，传的不是1:1的，那这个地方再给他勾上吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryJ3eia8s81WUSA4H1pAZHR1qzbN34aB8zn9P8uia9UcVMahZeOib2vPgXOCWS27w4rsNA6AU1emxPg/640?wx_fmt=png&from=appmsg)

我找了一个很可爱的猫猫来做一个演示，要让这个猫猫动起来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryJ3eia8s81WUSA4H1pAZHRX9b03LmiaPuiaJPIBkFuq74ByklPAAbUicYura7Y2VdBovibSAq0ZzYYcA/640?wx_fmt=png&from=appmsg)

我就自己录了一段唱两只老虎的小视频。

我唱歌天生跑调，所以大家不要嘲笑。

点击Adnimate之后，下面的进度条就会嘟嘟嘟的开始跑了，我是4060，十几秒的视频大概跑70秒左右就可以出来，大家可以参考一下速度。

很快，你就会得到一个可爱的小猫，唱两只老虎的视频了。

或者，如果你有孩子的话，也可以用萌宠，给他唱一首，《生日快乐》。

是不是非常简单？真的5分钟就会。

还可以去做好多好多有趣的东西。

当然，除了萌宠之外，你也可以启动Human人类模式，去做更专业的表情控制。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURryJ3eia8s81WUSA4H1pAZHR2gMo6wTWWbWAV1iazTicsbAhgib4RFrBNWCuar6FaG7UvmOSGkYgheZicw/640?wx_fmt=gif&from=appmsg)

一个可以精细控制的表情和嘴型，在AI视频中，想象力有多大，能做到什么程度，想必所有的AI视频创作者，应该懂得都懂。

这就是LivePortrait。

来自朴实无华的快手老铁的项目，发布即开源，还在不断的迭代更新，甚至给你做整合包。

用户体验属实是拉满，建议所有国内公司，在开源的项目上，都向快手学习，不发期货，不只开源Readme，照顾普通用户的使用体验。

LivePortrait的整合包不想去Github上下的我也放到网盘里了，即下即用，
你对着公众号后台私信"LP"就有了。

希望也能看到大家，更多有趣的视频产出。

下一期的5分钟教程系列，大家想看到用AI来解决什么问题呢？欢迎在评论区留言，说出自己的需求，说不定下一期，就可以5分钟用AI来解决你的问题哦😉～

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
