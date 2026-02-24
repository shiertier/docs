---
title: "SD全新开源模型SDXL1.0评测 - 留给Midjourney的时间不多了"
发布日期: 2023-07-30
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659092&idx=1&sn=9c5a8461ea95f2c77b7052713410b30e&chksm=f10688a82d5ca632b88bede1c26b8b398e046a3a0c9dd5cad083fb7f646ce4b0ae7ffaa20637"
---

## 摘要

**1) 一句话总结**
Stability AI正式开源了SDXL 1.0通用大模型，大幅提升了基础图像生成质量，并为未来的微调模型生态提供了极高的发展上限。

**2) 核心要点**
*   **模型定位**：SDXL 1.0补齐了Stable Diffusion阵营在通用大模型上的短板，为开发者提供了质量更高的微调基础底模（如DreamShaper已推出微调版本）。
*   **生成质量对比**：在超写实和真实场景下，SDXL 1.0的生成能力已能与Midjourney V5.2抗衡。
*   **最佳出图尺寸**：SDXL 1.0对长语义有较好理解，其效果最佳的生成尺寸为 1024*1024。
*   **在线使用渠道**：
    *   官方网站 Clipdrop：每天提供400张免费带水印的生成额度。
    *   第三方平台 Liblib：每天提供100张免费额度（使用时必须勾选“XL Refiner”选项）。
*   **本地部署要求**：需将SD启动器更新至1.5.1版本，并下载3个核心模型文件：base模型、refiner模型以及VAE。
*   **本地工作流变更**：需先使用 `base` 模型进行文生图（尺寸设为1024*1024），完成后发送至图生图，切换至 `refiner` 模型再跑一遍以获得最佳效果。

**3) 风险与不足**
*   **硬件门槛极高**：本地运行大约需要 32GB 以上的内存和 12GB 以上的显存（16G内存+3060显卡配置下运行会直接崩溃）。
*   **生态暂不兼容**：作为新模型，目前不支持基于 SD 1.5 基础的所有 LoRA 模型，也不支持 ControlNet。
*   **特定领域质量差距**：在基础审美、构图光影上不及 Midjourney；在插画、3D等领域目前仍大幅落后于 Midjourney 的 Niji 5 模型。

## 正文

在AI绘图上，一直有两个阵营。

一派是以开源为首的StableDiffusion，一派是以封闭为首的Midjourney。

在过去，基于SD的生态蓬勃发展，出现了N多优秀的大模型，比如我经常极力推崇的MajicMIX还有GhostMIX等等。

但是这些大模型无一例外，都是特定画风或者特定场景的。从来没有那种比肩MJ5.2或者Niji5质量的通用大模型。

直到前几天，stability开源了他们的SDXL1.0，SD阵营在这一块的短板，终于被彻底补齐。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpaQvsgicnT7HQHTplLvo1cZReiaU925ib3H7MbNNT9dDfhbRkQtVzPmrY4yFP1fxOYf8q8FPPQbs4TQ/640?wx_fmt=png)

所有的SD玩家都特么的可以自豪的说一句：

劳资也有通用大模型啦！MJ
吔屎啦你
！

然而最值得期待的，并不是SDXL本身。

而是未来基于SDXL而发展起来的生态。

现有的C站、Liblib上的模型，基本都是基于SD1.5这个通用大模型微调来的。

通用大模型本身就是一个妹子的底子，而微调就是画一层妆。

SD1.5这个1分妹子，经过化妆后，都有将近7分的实力。

那SDXL1.0这个本身就已经5~6分的妹子，化完妆后，有多牛逼？这个想象空间太大了。

像赫赫有名的DreamShaper，已经第一时间推出了基于SDXL1.0的微调版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1f8PibMfWO1onwRO1D4t53ZSzKPLghma0CibnRibBZkukndb9v9aaoibNRQ/640?wx_fmt=png)

我认识的几个挺有名的大模型作者，也已经开始在加班加点的做SDXL1.0的微调适配工作，未来一周内，可能就会有大量的超级模型出现。

但是有一说一，现阶段的原生SDXL1.0，离MJ还是有一些距离。

放一些随手生成的对比图。

prompt是完全一模一样，毕竟SDXL1.0现在对于长语义也有非常好的理解了，但是尺寸用的是SDXL1.0效果最好的1024*1024
。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1zFORvb7Ze2OUWicOanfaJxd2vEB53sVATExGvZnv288cibeDCr9Rb3Og/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1DBILPNDsr0FHO3ToTPibfpkibRyRGiaXyqC2gzlWmEprzibIjoicibVjnlCg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1HibLE6a6hn2c35wPvRBf7jKzZ2klpo9D7g4nrDYkAbicwcEuISday0ng/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM153Pz7xWjyD3oUuGhSuL13YJvgrWp2S1u2Am5Tdob8tl3qykUFhVpmQ/640?wx_fmt=jpeg)

可以看到，在一些超写实或者真是场景中，SDXL能跟MJ V5.2打的有来有回了，但是在审美上...个人觉得还是有很多差距，
stability的审美真的就是那种很直男...

就比如这张，樱花落在北极熊身上...这构图、这光影、这色彩对比...

SDXL的简直不忍直视。

不过审美这玩意本身也不是
stability这公司的强项，审美的东西还是让广大网友来微调吧...

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1bV4iaglDFB7rbzo8JTgH7HwCDibMLaxgfNGEW0NyuibbWF9UupkvBRyTg/640?wx_fmt=jpeg)

至于在插画、3D等领域，SDXL1.0跟
MJ的
Niji5比，那就稍微有点欺负SDXL1.0了。。。

目前还属于被摁在地上爆锤的情况。但是未来可期，毕竟网友人才多啊。。。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1zF6ODYUdPreXEW4j8uOMggqxoibH3MlsnLiaFU27G3cMib4y5F4Wk8HAA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1QIpTVq0qgeIUnK3UzoWicE06Oul7eo3mKW11A2hPCwStIAtyUZ6Gwicw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1FUIA9rWiaLIas2jzQdMCicKc3ubOiaYFV7ibZwkNQQicPx12WxSdJzObC8Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1rLyHwWagfVCkyuKeicQ3RnYJlJKlFVBwQeD5UTsXHHS6jml496FXlYg/640?wx_fmt=jpeg)

说下目前SDXL的用法。

现在有两种，一种是官方的在线SDXL，一种是老规矩的本地SD。

有心的会留意到我上面的所有图片都有个Cilpdrop的水印。

之前有一期给大家推荐过Clipdrop：
用AI一键抹除照片里的人物还原场景 - 极致体验
，这是
stability的官方网站，集成了很多他们自己开发的应用。

网址：https://clipdrop.co/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1gialQggibxheP85zZ92XPbFc9cdQM5FU25KKoibx7dAT4hwKNK14KrCHg/640?wx_fmt=png)

第一个工具就是SDXL1.0的在线版，直接手写prompt就可以，下面三个选项可以选择风格、尺寸，以及写负面提示词。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1mQ8aDRWzPcLnUGiamV9z2cqQR5XZ5aicQiaibd8P0rp7MV2M7cIEgzlYfA/640?wx_fmt=jpeg)

生成完的推荐大家去增强一下，提高分辨率。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1E97cJTwnH60QmhBH0LtdIicTDJF3micDw3XzQVY9SAs4C2ofvsrIUa7Q/640?wx_fmt=png)

目前每天可以带水印的跑400张免费图片。

如果你觉得水印麻烦，也可以使用哩布哩布的在线SD，目前每天也可以免费100张。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1VVflawhHUVgu3M4X7zKcPVacvnon1FDotk0g0ZAFRgoUev3P3HK7XA/640?wx_fmt=png)

他们也第一时间支持了SDXL1.0，记住，
如果你使用SDXL1.0，下面那个XL Refiner选项必须勾选！！！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1pRKKaZNPTAfzDOY1vtqibiblFRwXBHVsj4WuBmV0lkO2QnLALm2OicHLg/640?wx_fmt=png)

然后就是我们最常用的本地SD安装了。

需要下载3个模型，我已经全部打包好放到了网盘里，私信SDXL就有了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1d3TCSv3CIL3ggMliajjLuaISUViaEkhAgsN4eJp9mjkicN9UhBfkDpAxQ/640?wx_fmt=png)

其中有两个大模型，base和refiner，一个VAE。

打开秋叶大佬的SD启动器，把版本更新到1.5.1，然后正常装模型和VAE就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM10f44T6pqicGvTGg4XH93VE1oMBAOFZY3C2eYP5WtibyGUQeoD70NATZw/640?wx_fmt=png)

SDXL1.0的工作流和以前的流程不太一样，
需要先使用base做一遍文生图，而且尺寸必须是1024*1024。生成完的图片再发送到图生图，切换到refiner模型再跑一遍。
这样才能得到最好的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpQiaPHh1iasUkISO3Xs03vM1hbSCu2IvFxvXxibfHXGQaXK2KQPtlOoXEngVewYibCyTs6RmI6bqPssA/640?wx_fmt=png)

这块我提醒一句，SDXL对配置要求非常高，
大概需要32G以上的内存和12G以上的显存。

我自己的电脑是16G内存，3060显卡。即使加了30G虚拟内存，SDXL1.0一运行必爆。

没有这个配置的，不用下模型了，直接Clipdrop或者liblib吧。

同时，现在的SDXL1.0因为刚出来，所以生态非常不完善，不支持SD1.5基础的所有LoRA，也不支持ControlNET。

我不太建议大家现在直接在本地跑，线上用用试试就得了。

等2~3周，生态、插件、体验完善，再开整也不迟。

写在最后。

SDXL1.0是SD的一次反击。

SD从来不是靠通用大模型的质量去取胜，他靠的是生态，是百万开发者基于SD之上而构建起的超级生态帝国。

以前的SD1.5，本身质量太差，但是在这种质量的模型上，居然都演化出了N多能跟
Midjourney掰掰手腕的大模型们。

而现在质量提高了无数数量级后的SDXL1.0，基于它之上的生态上限，无法想象未来有多么辉煌。

留给
Midjourney的时间，确实不多了。

AI绘图行业的格局，也该变天了。

⭐吧，
感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
