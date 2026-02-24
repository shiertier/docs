---
title: "试完刚刚开源的StableDiffusion3，我觉得能打败它的只有下一代。"
发布日期: 2024-06-13
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647663181&idx=1&sn=facd6629564bbbdee28078b88c7bf76e&chksm=f18d4c5a4415a755a158ad46d3c49e40921ce1f54448a08cc2d8fbd6e2d50479b9f800037b88"
---

## 摘要

**1) 一句话总结**
尽管面临严重的内部财务与人事危机，Stability AI 仍正式开源了20亿参数的 Stable Diffusion 3 Medium 绘图模型，该模型在语义理解、空间关系和文字生成等方面全面超越前代，并大幅降低了本地部署门槛。

**2) 核心要点**
*   **模型开源**：6月12日，Stability AI 在 Hugging Face 上正式开源了 20亿参数的中型版本模型 Stable Diffusion 3 Medium。
*   **提示词简化**：与 SD1.5、SD2.0 和 SDXL 不同，SD3 不需要添加冗余的画质提示词（如 best quality, 8k 等）即可输出高质量图像。
*   **语义与空间理解**：SD3 具备极强的复杂语义理解能力，且能准确处理物体间的相对位置关系（如准确生成“狗叼着热狗”的画面）。
*   **文字嵌入能力**：SD3 首次支持在图像中准确生成指定的嵌入文字（如电子屏幕上的特定英文单词），这是过往 SD 模型不具备的功能。
*   **多风格表现优异**：在二次元动漫、科幻、水下真人、风景等多种风格的横向测试中，SD3 的画质和细节均显著优于前代模型。
*   **硬件门槛低**：支持本地运行，实测在 8GB 显存的显卡（如 RTX 4060）上即可流畅运行。
*   **AMD 显卡支持**：Stability AI 与 AMD 达成合作，SD3 模型原生支持在 AMD 显卡上运行。
*   **官方易用工具**：官方推出了基于 ComfyUI 封装的 WebUI 工具 `StableSwarmUI`，提供免配置的一键运行环境，支持 Windows、Mac 和 Linux 系统。

**3) 风险/不足**
*   **公司运营危机**：Stability AI 面临严重财务和人事问题，CEO Emad Mostaque 于今年3月辞职；第一季度营收不到500万美元，亏损超3000万美元，且拖欠供应商近1亿美元账单。
*   **色彩理解偏差**：在个别测试（如科幻风格机器人）中，模型对“五颜六色（colorful）”的色彩呈现与用户的预期存在一定偏差。

## 正文

Stable Diffusion 3，终于开源了。

当初SD3 API放出来的时候，他的公司Stability AI已经出现大大小小很多的裂缝了。

先是在今年3月23日，Stability AI的CEO Emad Mostaque宣布辞职。

第一季度结束的时候，Stability AI的营收不到500万美元，亏损超过3000万美元。此外，他们还拖欠云计算供应商和其他公司近1亿美元的账单，
可以说，Stability AI已经乱成一锅粥了。

即便这样，Stability AI顶着大家评论他商业模式稀烂的舆情压力的情况下，依然不时地开源一些模型，给你一些小惊喜。

比如
代码模型Stable Code Instruct 3B、3D视频模型
Stable Video 3D
、3D模型TripoSR、音频模型
Stable Audio Open等等...

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6XYNN8xoYt8a8ew6yB9aht47ibgmUxJhGD40YicmUTJGmkRqYxuWUibeoA/640?wx_fmt=png&from=appmsg)

不过Stability AI毕竟是以AI绘画出圈的，绘图模型是核心业务，
所以大家还是更期望看到他的绘图模型
Stable Diffusion
发出来。不过看一眼Stability AI的惨状，大家都觉得，SD3开源无望了。

果然，
SD3来了，意料之中的是，是付费API的形式。

不过广大网友没有放弃，还是抱着一些微弱的希望，在Stability AI官方推特下面求开源模型哈哈哈。

结果，万万想不到的是，千呼万唤始出来。
Stability AI大手一挥说，那行，
继续开源！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6yMX1WMVBxRAvzdhBlRmlETRjy6hDw2bYo2ejx1mpxwDaxOqr5xicNYA/640?wx_fmt=png&from=appmsg)

这次给了一个
中型版本的SD3，20亿参数
，
Stable Diffusion 3 Medium。

有些人可能觉得中型不够意思，但是我觉得刚好，
毕竟再大了本地也跑不动啊= =

他们官宣的是6月12号，于是我就等啊等，12号从中午等到晚上，终于，等到了Stability AI把模型放出来了。在huggingface上开源。

网址在此：https://huggingface.co/stabilityai/stable-diffusion-3-medium

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6btsmxO4MCkia0NVBheNRA1yiaqHyQibNrMlsQb8RicY9fDapPcArvzibztQ/640?wx_fmt=png&from=appmsg)

第一时间，我跟我我的小伙伴@祁珏瑜 对比了SD1.5，SD2.0，SDXL，SD3
Medium
四个基础模型，来给大家看一下SD这么长时间，直观的进化。也给大家看看，SD3
Medium，有多强。

先说一下测试的大背景。

我们知道对于SD的话，需要很多的提示词，
一般SD提示词两部分组成：内容描述提示词+画质描述提示词。

之前SD很烦的是，你必须要加一些冗余的画质提示词，比如best quality, high resolution, 8k之类的，正向反向都得加，不加的话则出图质量会差很多。

那我觉得既然SD3了，你就别欺负前面的弟弟了。

所以我给前三个模型SD1.5，SD2.0，SDXL提示词评测都加了正向画质提示词和反向画质提示词，（后面每一个都加了，为了避免重复就不写出来了）

1.5和2.0 的正向反向画质提示词

best quality, high resolution, 8k,masterpiece, highly detailed, UHD,
bad proportions, low resolution, bad, ugly, terrible, render, watermark, logo,

sdxl 的正向反向画质提示词（因为xl和之前的画质提示词有些不同）。

score_9, score_8_up, score_7_up
score_6, score_5, score_4, source_pony, low quality, normal quality, lowres,logo, watermark,

那SD3呢，我不给他加任何的画质提示词，直接裸奔。

所以其实最开始评测是有些不公平的，
不过，真正的强者不需要我们的特殊照顾。直接来看效果。

1. 第一组内容提示词，
看一下语义理解能力。

a cat,a destroyed badly damaged space ship,beautiful beach,broken windows, grass and flowers grow around,sunny,ocean（一只猫，一艘被摧毁的严重受损的宇宙飞船，美丽的海滩，破碎的窗户，周围长着草和鲜花，阳光明媚，海洋）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6WmyGGcG8YS9bzXvibfadcgDytMIgLzHc2miatClDF0FpSicQ0LTDXicvbg/640?wx_fmt=png&from=appmsg)

SD1.5
：emmmmmm，这怎么成两张了，小猫咪看起来不太高兴啊，挎着个脸，海滩不太美丽雅，阳光呢？

SD2.0
：不是，小猫怎么从船里长出来了，还有月亮你是怎么回事儿？不是说好的太阳吗。

SDXL
：整体还行，但画面有点昏暗，配色不是很舒服。

SD3
：王炸！语义理解能力极强，阳光明媚，美丽的海滩，鲜花……关键细节什么的都很好，画面也很和谐。

-

2.
再来测一下相对位置关系理解，这个更加考验模型能力。

a dog,hold hot dog,outdoors,grass（一只狗，叼着热狗，户外，草地）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6GIOOWR4OVLOnauc7f8WnMJgibQClFUEhzyjIxo1Y2lNOEjxvmYHFdxQ/640?wx_fmt=png&from=appmsg)

SD1.5
：emmmmmm，这小狗的热狗怎么悬空了啊？你的热狗怎么成香肠了？

SD2.0
：SD2.0比较聪明，他直接把热狗放到了地上，哈哈这样你就挑不出我毛病了吧，但是语义理解不对啊大哥。

SDXL
：基本理解了我的意思，但是这个画风，以及这个舌头衔接太奇怪了吧。

SD3
：王炸！光效衔接都非常自然，小狗很可爱，热狗也很有食欲。

3.
测试一下二次元动漫人物。

((anime style)),1girl, indoors, sitting on the sofa, living room, pink hair, blue eyes, from back, from above, face towards viewer, playing video games, holding controller, white shirt, short, parted lips, anime production（（（动漫风格）），1女孩，室内，坐在沙发上，客厅，粉红色的头发，蓝眼睛，从后面，从上面，脸朝向观众，玩电子游戏，拿着手柄玩游戏，白衬衫，短，分开的嘴唇，动漫制作）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6DrE17BLMc501uLt3Oia5XXb48C6ttddGAUzfTmDAGFibb2WibfWxGpBKQ/640?wx_fmt=png&from=appmsg)

SD1.5
：底模过于抽象。。。很多细节都丢失了，对比着看一下吧，从头发到眼睛。

SD1.5
：千手观音？

SDXL
：有点感觉了，但是你的画风画质很难评

SD3：
没的说，依然是王炸！从头发到眼镜，从整体画质，到细节，No1！

动漫还做了另一组对比图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe62bVibKR5UTKsGAf4cjdvqcr8k9dVm6PAlYSnJhS4oLXoiaVqNfGL1urA/640?wx_fmt=png&from=appmsg)

你懂的= =

4. 再测试一下不同的科幻风格

robot droids, in the desert , colorful, dutch angle（机器人， 在沙漠中， 五颜六色）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6gQyU83DDQUq1ef8w7qLNZLlqXib5HjzatozNvHpHic7S9xL5aIH7yJlQ/640?wx_fmt=png&from=appmsg)

SD1.5
：这机器人，是营养不良吧？哈哈哈 还有说好的五颜六色呢？

SD2
：右边这哥们你的手臂掉了~其他不必多说了，懂得都懂嘿嘿

SDXL
：还行，但是这个机器人怎么这么丑呢，三条腿不对称

SD3
：同样很Nice，依然是王炸，除了这颜色跟我理解的五颜六色不太一样。

5. 再测一组
真人图片，难度也蛮大的，要求在水下。

1boy,underwater,green eyes,white skirt,looking at viewer（1个男孩，水下，绿色眼睛，白色裙子，看着观众）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6v2ALTXfL9W1bBqMP1pUQuaBicYuvAxiceU3y06HicEvVibsraHZ2MW4sHw/640?wx_fmt=png&from=appmsg)

SD1.5
：恐怖片。。。

SD
2.0
：
更恐怖了，有点像泡开的奥特曼。。

SDXL
：还可以，凑合能看，就是这绿的啊。

SD3
：非常NIce！

再测另一组真人的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6N61yNHVJj6Irf45OZjzkiaquIicGDWjYxse9Dms2qHMDTvOYiagvr5mwg/640?wx_fmt=png&from=appmsg)

6. 来一组风景。

universe,stars,moon（宇宙、星星、月亮）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6TRcJFSaw5PRUMfAYvmZ90icnSUz9AiaibBVC0Licoc6LeXtDiaAeDYAv53Q/640?wx_fmt=png&from=appmsg)

SD1.5
：有点像我爸的微信头像。。。

SD
2.0
：凑合，就是构图雪崩。

SDXL
：SDXL是真的好容易画卡通。

SD3
：这氛围就到位了。

7.最后一个SD3最棒的，文字嵌入。

Cyberpunk style,urban,1 robot,an electronic screen with“ Khazix”（赛博朋克风格，都市，1个机器人，一个带有“卡兹克斯”的电子屏幕）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6BHOZqRBu96XD1Fr99tzibniaskSS3WZvsQeQD85hN9oWff5cZcpD2a3w/640?wx_fmt=png&from=appmsg)

这个就不评价了，因为过往的SD模型，都不支持文字嵌入，目前SD3是独一份。

上面简单对比完之后，你可以直观感受到SD3的威力了，也能感受到，
Stable Diffusion这个模型，一路以来的进化史。

我都不敢想象加了高质量提示词，配合开源社区的微调等强大的生态，这模型可以有多强。

最关键的是，它开源，所以，他免费。现在他可以直接在你自己的电脑里用跑了。

不过我上面的测试都是在ComfyUI里做的，没错是这个样子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe6uaicyXVVz8ZcuQXWhbXEtRNgT9bGvNgFjyADQNswzcJs8sibnPQCCdicQ/640?wx_fmt=png&from=appmsg)

我其实一直都没咋写过ComfyUI，不是觉得他不行，而是他太行了。所以他上手门槛比较高，对于普通用户来说，不如Webui直观好用。

就在我想该怎么让大家更方便用上的时候，小伙伴甩给我了
St
ability AI
官方已经放出的一个Webui，叫做
StableSwarmUI。

https://github.com/Stability-AI/StableSwarmUI

他实际上是建立在ComfyUI的基础上进一步封装的一个UI，非常快捷，导入工作流之后就可以直接使用了。

关键是，官方已经提供了一键配置环境文件（甚至提供了mac电脑和linux环境配置文件），也就是模型运行环境什么的都不需要我们自己去配置。

我们在这个的基础上，帮大家下载好了SD3模型并放置好了模型，简单弄了个整合包，可以直接打开使用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe67sa42S65hQwueecLicypuKNaibyb57T1uvFNUbmQjBNuFYn13buiaQeFQ/640?wx_fmt=png&from=appmsg)

整合包我扔公众号后台了，
对着公众号私信“SD3”这个英文字母就有，使用教程太长，我也直接扔整合包里面去了。

实测我的小4060，8GB的显存即可运行。

更骚的是，
St
ability AI
为了让更多人能用上SD3，他们甚至跟AMD谈了合作，现在，AMD的显卡也能跑SD3了。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURormaDwyHtDicXJBmib9Jzoe634uLldgFfINPl5AkHaQ49nicFM5kxbxiarAQ7lpcKWfPbvCKLnusqg9w/640?wx_fmt=png&from=appmsg)

真的是非常亲民，从模型本身到模型运行的环境，
Stability真的做了很多。

Midjourney虽然确实牛叉，但确实对很多国内的人来说，架起了高高的围栏，很多普通人可能连去给Midjourney支付会员的方式都没有

这时，Stability AI站了出来，说，“我来！”

Stability AI花了极高的成本训练了Stable DIffusion，开源了Stable DIffusion系列。

这也才有了之后灿烂的开源绘画社区，大家才可以把AI绘画模型实实在在下到自己电脑上，切切实实感受绘画的魅力。

昨天有一个小插曲，LUMA发布了他们的AI视频Dream Machine，宣传片是真的酷，激动的我在各大群里乱叫大家别睡了，但是上手一测，好像...也就那样...并没有太多额外的惊喜。

但反过来看SD，我属有点泪目了，
每一个工作都是实打实的，从来也不过分宣传，时不时还给你小惊喜，比如前段时间的47s的音频模型也非常好用。

可能商业上，
St
ability AI
做的很一般，被人们所诟病。

但是在开源生态上，他真的极大推动了AI界的发展。

可以这么说：

St
ability AI
，在我心中。

才是那个真正的。

OpenAI。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
