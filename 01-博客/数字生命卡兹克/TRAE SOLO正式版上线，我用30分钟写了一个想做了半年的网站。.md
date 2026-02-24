---
title: "TRAE SOLO正式版上线，我用30分钟写了一个想做了半年的网站。"
发布日期: 2025-11-13
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647676665&idx=1&sn=a3e548b4b71668c388876f21ebef3ead&chksm=f13b14c5f433658532d0bf2f20d5f532b2195dbc9620d667f7befad8bc09f63f551556802fbd"
---

## 摘要

**1) 一句话总结**
字节跳动旗下的AI编程IDE产品 TRAE SOLO 正式全量上线，推出专为复杂项目迭代设计的 SOLO Coder 模式，并开启限时免费。

**2) 关键要点**
*   **产品状态**：TRAE SOLO 结束自7月以来的内测，正式面向全量用户上线，产品采用 GUI（图形用户界面）形态。
*   **SOLO Builder 模式**：适合“从0到1”的初始项目搭建，可快速生成前端、后端并完成自动部署。
*   **SOLO Coder 模式**：专为“从1到100”的项目迭代设计，支持 Plan 模式（正式编程前确认执行细节）和更好的上下文压缩。
*   **多智能体调用**：SOLO Coder 支持在开发过程中动态调用自定义的其他智能体（如API接入专家），以分散开发任务并防止上下文污染。
*   **实时跟随功能**：提供可视化面板，实时展示 AI 自动编写代码的完整过程与任务清单进度。
*   **实战数据**：作者耗时约30分钟，结合 Builder 与 Coder 模式开发并部署了一个 App Logo 搜索与 AI 改图网站，AI 自动生成了 5697 行代码。
*   **定价与额度**：官方定价首月3美元，Pro用户每月包含600次快速请求额度（限时额外赠送300次）；目前处于限时免费期，使用不消耗请求额度。

**3) 风险与不足**
*   **多轮迭代幻觉**：SOLO Builder 模式在对话轮数增多后容易出现 AI 幻觉，不适合长期的后续迭代与修改。
*   **计划依赖风险**：在处理极度复杂的任务时，若 SOLO Coder 的 Plan 模式制定了错误的开发计划，会导致后续时间和资源的浪费，甚至造成项目崩盘。
*   **UI/UX 局限性**：AI 自动生成的项目在 UI 界面和交互设计细节上，仍有较大的优化空间，需人工介入调整。

## 正文

昨天晚上，我一直很喜欢的字节家的TRAE
SOLO
，终于正式上线了。

自从他们之前7月21号发了以来，其实就一直在内测，一直能用到的人都不多，而现在，终于全量了。

而且，限时免费。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOHUjdxYnKlQGme93lxZDkqUbuujOfxyVFl3c4FdiaCyibdVEkR9hlHCIw/640?wx_fmt=png&from=appmsg)

TRAE
国内版正式上线的时候，我也写过一篇，大家都知道
TRAE
是一个IDE产品，当时有点类似于Cursor。

而后，Agent越发爆火，各种编程Agent产品也疯狂的涌现。

CLI也就是命令行的形态的产品，逐渐成了主流，但是说实话，我自己一直以来，作为一个非专业用户，都还是更喜欢一个GUI界面。

所以，
TRAE
SOLO
这种编程Agent的形态，我还是更喜欢一点。

相比于之前7月刚刚亮相时候的内测版，这次
TRAE
SOLO
还是更新了蛮多的东西的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOcDeVdJdcqIkPmwzRhmPclibEISTcsXGY4w9eZgCTUPY2ome7nKvsF3A/640?wx_fmt=png&from=appmsg)

比如左边，终于有了更加舒服的多任务列表。

但是最重要的变化，其实还是这次全新的SOLO Coder的更新。

之前大家可能都用过
SOLO
Builder的这个模式。

非常适合从0到1的去做一个小项目，能帮你做前端、做后端、自动部署等等，但是这玩意，并不适合后续的迭代和修改，轮数一多，幻觉就上来了，现在很多编程Agent产品都有这个通病。

而SOLO Coder就是为了解决这个任务而生。

它有一些自己独特的特性，比如自动调用多智能体处理复杂开发防止污染上下文、支持Plan模式、更好的压缩上下文等等。

如果说SOLO
Builder更适合从0到1，那SOLO Coder，更适合完成从1到100的迭代。

我想用一个实际的教程案例，来带着大家，看一下SOLO
Builder和SOLO Coder组合的威力。

比如我一直有一个痛点，就是找一些APP的logo。

因为我们自己做内容的时候，经常会在做封面或者做文中图片的时候，需要用到一些APP的logo，比如ChatGPT、微信、QQ等等等等。

但是吧，每一次找这些玩意，都挺麻烦的，要么从一些专门的svg网站下载，要么就去google上面搜，点开一堆网页来回找，还挺麻烦的。

比如就说就一个我最近比较喜欢的AI社交产品，叫Second Me，这玩意的图标，长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyO9A2jTwhl6ibS7Qpv1X2PvGJRWAY3ayAxIFicVK03ibyO4GZIAiaWzFPwsw/640?wx_fmt=png&from=appmsg)

我想用它的图表，去做一下二创，但是，我通过Google搜索出来的，都是这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOCcnHsIuXkJNcCRKvo2B364Za6Ff61Fst5qWpvZ1Sfyn0eNHpD9ibg3Q/640?wx_fmt=png&from=appmsg)

所以，我就有了一个自己的想法。

我想做一个APP的logo的合集网站，就是在这个网站上，我随便搜索一个名字，就能把他们的logo搜出来，然后再接入一个图片大模型，能用嘴直接对这个APP的logo进行二创，比如直接把背景颜色换了、做一个3D的风格等等等等。

而且这个网站，也能贡献出来，给大家一起用。

之前这个想法一直存在脑子里，正好这次
TRAE
SOLO正式版上了，我就直接拿这个case，来实际看一下SOLO
Builder + SOLO Coder的能力吧。

首先我们对这个任务进行大概的步骤拆解一下：

SOLO
Builder做一个空壳小demo - 找APP logo的数据源 - 把一些规范封装成智能体 - 使用SOLO Coder
制定开发计划 - SOLO Coder
在原内容上进行开发 - 调试 - 部署。

第一步，就是先搓一个这个logo网站的小demo，好看一点差不多就行，先搭个框架起来。

我先用了Builder搭了个简单的框架。

提示词很简单，就是告诉它设计并开发一个LogoSearch软件图标下载网站的
落地页
，包含顶部导航栏、
主视觉
、示例图标展示、页脚。

SOLO Builder做这种从0到1的小东西确实很香，做的效果很不错，整体设计还ok，速度很快，而且一次性就跑成功了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOt72UqkbYnt93zZk0IWTMyCsNFticPAKTHndPEMsWgcPcH33kKXCia5Hg/640?wx_fmt=png&from=appmsg)

OK，现在，我们已经有了一个还不错的挺好的前端框架了。

第二步，我本来以为是最简单的，结果发现，是最难的。。。

就是找APP logo的数据源。

毕竟不能直接用Google的搜索API，那玩意根本不行，有些第三方的也是，极度不稳定，在我找了将近半小时以后，想起了一个神奇的东西。

就是，APP的图标，大多数情况下，不就是官方的LOGO吗。

于是我搜了下，发现远古的iTunes上，还真有现成的接口。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOiaZjrZDicNZjQFY06Afd8bZ24ICicI6Yibt4hqQtw7g77ZnJFwu7o16WYw/640?wx_fmt=png&from=appmsg)

这就省事多了，找到了数据源以后，直接开干。

在开始用Coder迭代之前，我先建了这个API的对应的智能体。

因为Coder有个比较牛逼的点就是，在过程中，动态的调用其他的智能体，可以分散开发，防止污染上下文。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOtudTm8YiaplaqicFJyeYVPN9Sr0d0InvWepxqzcIK9ShAJcqtybxicaIQ/640?wx_fmt=png&from=appmsg)

而且我一向是喜欢能封装的就封装，要不然乱糟糟的，而且非常不利于后续的产品迭代，有规范还有规矩。

所以，我们点击这个SOLO Coder小图标的这个地方。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOOuMSDk8S6hNt0lzkib6AXGcnWpVzf5fZq7r2ibQUW7MeHoBGFiaU6B5ug/640?wx_fmt=png&from=appmsg)

在展开的弹窗里，就可以创建一个智能体了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOOWMCmtdrwYr0uYTX5UMlznd7Xc5vtoYP8fUNFNesw31Yw1PKIQ0Fxg/640?wx_fmt=png&from=appmsg)

我就搞了一个iTunes的智能体，这个智能体长这样，在提示词那块直接把API文档和调用格式就直接全部给过去了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOb23nqkzbAYpukaaZGpMMsicR770kd0Ta6oqPQI9W7mHTeDm9PUhbonw/640?wx_fmt=png&from=appmsg)

除了这个之外，我又乱七八糟的按照我心中对于这个网站的规划，搞了一些我觉得会有用的进行约束的智能体，比如火山引擎API的这个，我就往里面扔了Seedrame 4.0的API调用规范。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOt2q3Msia8Q3I2AXfWbA4suV1DeRvcGibZ9PLx6O2oUZxcTTXHmJc6Xrg/640?wx_fmt=png&from=appmsg)

OK，到这一步，准备工作基本就全部完成了。

接下来，就是正儿八经的往里面填数据的实际开发了。

我们，直接切换到SOLO Coder模式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOgSocgz76iaoib7Q8RVmpNJJxN9Ij1tXquibca8vKa7nSiaNjrwrQIjp4Sg/640?wx_fmt=png&from=appmsg)

当你切换到SOLO Coder后，你会发现，右边多了一个非常适合复杂任务的Plan模式，可以在正式编程前确定具体的执行细节。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOIYb6J9RLvtZZsgDemrqccDNfqhd7QKJY0cW3A5gvopLAt7pGHw3wtA/640?wx_fmt=png&from=appmsg)

毕竟一个垃圾的计划，会浪费掉后续所有的时间和资源，我这个任务还好一点，如果是那种极度复杂的基于原有仓库进行开发的任务，你的开发计划列错了，那就全崩盘了。

我打开了Plan模式后，把我的需求发了过去，写的Prompt其实超级简单，就是把我希望加上的功能，给它列了出来。

1
、调用“iTunes图标搜索API接入专家”智能体，实现图标搜索API接入以及图标搜索功能的实现，支持搜索中国，美国，日本，韩国区域的应用。
2
、调用“火山引擎Seedream接入专家”智能体，接入seedream
4
模型，增加AI修改功能，支持图标风格转换，添加AI处理前后对比视图。APIKEY用户在页面填写，保存在浏览器本地。
3
、实现不同格式下载，PNG、JPEG、Web、icon等，包含下载进度显示与完成通知
4
、实现收藏夹功能，数据存在浏览器本地，不需要账号同步、登录等功能。

发过去以后，它立马就写了一个很详细具体的计划。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOXtqjHgFWrOMVaIYrkQpxJ1yia9rOSk6BBAHJibkmXjyfGyAngOC2A5QA/640?wx_fmt=png&from=appmsg)

这个计划，详细的有点离谱的程度了。

你可以点开以后在右边进行确认，要是觉得代码结构和交付结果没啥问题，你就可以点击执行，开干。

你要是觉得不行的话，就在下方的对话栏里进行对话然后修改。

我大概看了一下，具体的的框架没啥问题，有些太细节的东西我也不懂，于是，我就让它，真正的开始，执行。

在我确认之后，它就自己列了个任务清单，刷刷刷开干了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOZQt5QAMuQJOz7Q6pTRNDkLx7NQ4DuVYA3CRs7OQxId19yny4icnFPJQ/640?wx_fmt=gif&from=appmsg)

TRAE
SOLO有一个特别酷的实时跟随的功能，开了以后SOLO会自动切换面板，把整个开发过程都暴露给你看，就跟你看一场实时AI编程直播其实没啥区别。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOSSllP6kbymYaY5EXfFNQpWP4QGbrbfXsmVObnacReGtszdwmXRhK4A/640?wx_fmt=png&from=appmsg)

如果不想看，当然也可以把它最小化，先去打把游戏，或者做点别的事情。

它做好了会弹出消息提醒。

因为有了实时跟随，真的看AI编程看得有点上瘾，我真的一直盯着看了十几分钟。

在过程中还挺有意思的，每一步做完以后，都会打个横杠，表示已完成这一项任务。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOU8qhcYlibibd3MKF4HxmIBUzXgcNH6hx9rc1hS18tnk7AsfZibL3mQOZA/640?wx_fmt=png&from=appmsg)

大概过了30分钟之后，它终于，完成了所有的代码编写。

我也收到了一条通知。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOXepN62LRbVNt78Id3ytKGKhnkDPRmBT8CuiaCHmgMUrObDGbunTK4OQ/640?wx_fmt=jpeg)

我跑回去看了一下，一共5697多行，属实震撼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOuSK54hwelLWtIxHooLic2PjVumXgQ1IFblicSasEBahobjeCnibB7pz3w/640?wx_fmt=png&from=appmsg)

我当时的心情，其实就跟开盲盒一样，毕竟等了半个多小时，我不知道，是惊喜还是惊吓。

我直接打开了一下网页，我发现，这个完整率和成功率，当时让我非常的惊喜。

甚至喊出了一句，卧槽。

前端和后端的功能，居然都非常的正常。

没有一点问题，主功能是完全OK的，比如我想搜ChatGPT的logo，直接就搜到了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyONm7D83cRzgX8v9BxAHeZOte7dbXnciaav5ibeXU7QSlYXzcgsf7kU28A/640?wx_fmt=png&from=appmsg)

搜了其他的，也都OK。

收藏也没问题功能也没有问题，而另外的我们有两个非常重要的功能，AI改图和不同格式的下载。

这个就，做的更完整了。

点开logo详情页，你就能看到一堆参数。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOYKicepH4D6O0qygBgC1TtPHX4SqYRNo4UvUAttLIlbg0cZiamfaLnz1Q/640?wx_fmt=png&from=appmsg)

甚至不只有我想要的不同格式，还有不同的尺寸。

比我自己之前想的，还要全面。

PNG、JPG、WebP啥的格式，也全都有了。

而且，AI改图的功能也实现了，他给我把功能放在了列表页上。

使用也很方便，只需要在搜出来的结果里点一下魔法棒按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyO4RJIg64b1p6TbUjNDnicntt3NZXlfHdIGECgT06vAmDibhNXpdTSQLibw/640?wx_fmt=png&from=appmsg)

就会进入一个新页面，也按照我的需求，把API key的地方给留了出来，接入的是Seedream 4.0，只要填一个火山引擎的API密钥就能使用。

比如我要把这个logo，编程手绘风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOhyQnjAJMcibpOktAGj4ga6IWLSibPmricV0OYHtIWI5LibBrXCk92thugw/640?wx_fmt=png&from=appmsg)

直接一句话，就搞定了，甚至SOLO Coder还自己更进了一步，给我加了直接用滑块看对比图的功能。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOGEPYIcgx679YGYq6IicCcjmwQRNSvIvf2cUdWDpseItOamCRNpOA2icw/640?wx_fmt=jpeg)

虽然作为一个体验设计师，它的很多UI和交互还有不少值得优化的地方，但是这个完整度，已经非常恐怖了。

喜欢，很喜欢。

在一切都测试开发完了之后，我又用里面的小工具，把项目上线到Vercel了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyO4VUQq1T5DHQ467cMYZ3zM2K74sE1Z9VROSkpgQOu9o4LqT7EhHWKvQ/640?wx_fmt=png&from=appmsg)

https://logosearch.vercel.app/

欢迎大家去玩，不过不能保证稳定性= =。

SOLO Builder +
SOLO Coder的组合，真的超级香，感觉这一把，可能真的成了。。

最后，再说一下价格这块。

现在官方定价是首月3美元，这几天是纯粹的限免，然后Pro用户每月有600次快速请求额度，限时赠送300额度的额外礼包。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrWe7LPEk1lRajkpBVVGdyOzFLqIyndcAb0mOicCFZsibALKSUicnn5ZAj0EDVKPT1icXZlbquibGT1xhA/640?wx_fmt=png&from=appmsg)

在做上面这个logo的网站上，一般来说需要花100多快速额度，不过现在因为这几天限免，所以都是随便用完全不会消耗额度。

所以啊，赶紧去薅啊

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURohypbtLqK2UPUBmJFcrHicPpZgHHPgaFe9YqpUCdcPoiahqCp1MCqiaZJ6l6RXBSicoNlN4MhJ7zULMw/640?wx_fmt=png&from=appmsg)

总之，这次
TRAE
SOLO的更新，在我看来，是非常棒的。

超级棒的配合，对小白对专业用户，都能找到自己都有的用武之地。

TRAE
SOLO这一波，在编程Agent产品上，还是有自己独特的生态位的。

期待
TRAE
的下一次进化。

也期待更多人。

做出更多。

有意思的东西。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
