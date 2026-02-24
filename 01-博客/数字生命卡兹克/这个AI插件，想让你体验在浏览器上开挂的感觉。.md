---
title: "这个AI插件，想让你体验在浏览器上开挂的感觉。"
发布日期: 2024-10-18
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647665959&idx=1&sn=181a266bf43ee1b4187741e8c415bf7d&chksm=f1b893b5cb4071e4f5797b1fda129494939f5049c97584ffb4f55c536909bf23986c8e2b31af"
---

## 摘要

### 1) 一句话总结
“有挂”是一款基于Claude 3.5的Chrome浏览器AI插件，允许用户通过自然语言指令直接修改、定制任意网页的前端界面与功能。

### 2) 核心要点
*   **核心功能**：用户无需编程基础或调用开发者工具（F12），只需输入自然语言指令，即可对网页进行视觉爆改或功能添加。
*   **底层技术**：插件将用户的提示词（Prompt）与当前网页的页面代码结合，发送给Claude 3.5模型，由AI生成并应用修改后的代码。
*   **获取与安装**：已上架Chrome应用商店，支持一键安装，可固定在浏览器右上角随时唤起。
*   **典型应用场景**：
    *   视觉修改：将网页背景改为特定主题（如黑客帝国）。
    *   动效添加：在网页上模拟全屏烟花等动画效果。
    *   效率工具：一键抓取网页数据（如微博热搜榜单）并生成下载按钮，导出为Excel文件。
    *   交互组件：通过提供图片链接，在网页添加自定义交互按钮（如点击敲木鱼积功德）。
*   **规则保存机制**：提供代码修改的保存选项，用户可选择“仅本次生效（刷新消失）”、“仅当前网站永久生效”或“所有网站全局生效”。
*   **开发背景**：由独立开发者海玮和虎王（曾开发“马大哈翻译”）制作，旨在降低网页代码修改门槛，还原类似游戏中“输入作弊码”的体验。

### 3) 风险与不足
*   **API成本与依赖**：插件必须填写Claude 3.5的API Key才能运行。虽然开发者目前提供了一个免费公用Key，但完全由开发者个人承担成本，存在资金压力，长期使用需用户自备API Key。
*   **长链接报错风险**：在通过指令添加外部图片时，如果直接使用过长的图片链接容易导致系统报错，需借助图床工具转换为短链接后使用。

## 正文

这段时间，看到一个非常有趣的独立开发者做的浏览器AI插件。

非常的好玩，他的名字，
叫
“有挂”
。

听着这名字，作者的心思就已经全部呼之欲出了，就是要让你在浏览器上开挂。

我先放个作者自己录的演示视频，你就知道这插件大概是干嘛的了。

对某一个网站不满意？你自己直接用嘴就可以对他来一顿爆改。

google背景太丑？一句话直接给你爆改成黑客帝国，太骚了。

我脑子里在当时看到这个产品的一瞬间，已经浮现了N种抽象玩法。

按照以前，你想改，那得按F12，调出网页源码，然后自己一点一点去扒拉前端代码，别说小白了，专业的前端也得调半天。

现在，不需要任何设置，用这个插件，一句话搞定一切。

比如，昨晚国足赢球了，2：1战胜了印度尼西亚。你也别说印度尼西亚什么水平，你就说国足赢没赢吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxI0rFEicrA2IbA2Im9Ncpvy9QmtDsFo6iccLTKpHdt2O0Aib8jseFLqgWbQ/640?wx_fmt=png&from=appmsg)

为了表达我的庆贺，我就瞬间，想给国足在网页上放个烟花。

这时候就可以打开有挂，说一句话：

“在页面上模拟一个烟花”

十秒左右之后，烟花，就诞生了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIqkiaysic3aeSvWQZkcHPkfxu4ice3RdWksic1iawuFLWSLgfFdk8ibKUxTyQ/640?wx_fmt=gif&from=appmsg)

效果不错，满屏的烟花，融入的相当自然。

真好，满足了我在城市没法放烟花的遗憾。

又比如，最近看一些微博热搜，因为我经常会根据一些热搜来整活做一些选题，现在，用有挂，
直接就能把微博上的榜单数据保存到Excel文件。妈妈再也不用担心我保存下来有一堆链接的文字了。

一句话：“
右上角添加一个下载按钮，用于把热搜保存到xls文件
”。直接下载按钮就给你安排上了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIau1yB7rh1OwVzLXCSBCb9iaQMIkGTY4FMsNf5vtsTt91tACuWgRHAqA/640?wx_fmt=png&from=appmsg)

点击下载热榜。表格文件直接1s下载到本地。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIpYBWyxeIdZag2D8uTIXY0jVvlWtBZrDRtm6wkibMbibk3dDX4icAmib9KQ/640?wx_fmt=png&from=appmsg)

无敌到爆好吧。

这效果，真的绝了。

抽象和效率，都可以给你拉满。

限制你的，不再是技术，而是纯粹的，你的想象力。

“有挂”这个插件，你直接在Chrome应用商店就能搜到。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIiajp6mUVldtY7ibJuibfScM5T0fsUCaIYibPWYXkicNj4y62TXR3kjJQzgg/640?wx_fmt=png&from=appmsg)

一键安装就行。

安装好以后，你可以把有挂固定在你的右上角。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIgicpAmpIk4nT6geqHCoPXLyHjsFr4dOPibqktxAw9FJEYDB7LNVKb5LQ/640?wx_fmt=png&from=appmsg)

点击这个图标，你就可以在任意网页上，吊起这个插件了。

插件点击以后，就会在右下角弹出一个小框框。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIJicZ2NK7gO18n0RO2egEJPjYWmjHSn4n0ribNVPBQIlxbc5ne2nXeLVA/640?wx_fmt=png&from=appmsg)

这时候你输入内容并不会有响应，需要先填一个Cluade 3.5的API KEY。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIWHVBiajxYiaMh1PsvYmOiaibdO5qZZLVkiapFl3rqibLfJ0fGx2o9AP9OETA/640?wx_fmt=png&from=appmsg)

这里有一个开发者提供的KEY，直接填入就能用，给大家复制在下面了。

key：YG-c886707ebcb2d89daae8e17

但是这块我额外说一下，因为这个插件我理解的大概的原理就是，你输入一段Prompt，然后插件把Prompt和整个网页的页面代码一起扔给Claude3.5，让它针对Prompt对网页代码进行修改。

而这个插件其实也是刚出来，开发者为了方便大家用，给了自己的Claude3.5的Key，烧的其实也都是开发者自己的钱，有点那个做慈善的感觉...

大家悠着点用，有条件的推荐还是用自己的Claude3.5的API，别把开发者干秃了，真的，独立开发者真的也不容易。。。

正好
文章写的有点累了，我就用有挂在页面上加个木鱼，没事敲一敲积攒一些功德吧。

木鱼吗，肯定还是需要一个图标的，要不然只敲一个btn多没意思。

先在网上随便找一张木鱼的图片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxI4FklPPVS0RI0Oy9iaWVbr3vrdXeFibI7icbO6vR9Rn6DUZvtmo0nGlX4A/640?wx_fmt=png&from=appmsg)

但这时候直接复制出来的图片链接很长，很容易报错。我找了一个图床，https://www.locimg.com/，可以把长链变成短链。

然后，把刚刚获得的图片复制到剪切板，回到刚刚的页面，在输入框填入：

给页面左上角添加一个巨大的图片按钮，每次点击浮动弹出巨大的功德加一，并显示总数。图片链接：
https://s1.locimg.com/2024/10/17/58a6fcad3d06f.jpg

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIGwl7UCvYaL0RiaYItz9NHJPNfDOVZ6qTYfTS2ow1QSJzDkzMp04nX4w/640?wx_fmt=gif&from=appmsg)

嘟嘟嘟的很快，10到20秒左右，一顿非常炫酷的像黑客一样的代码和进度条后，我的大木鱼，就被添加到了左上角。

你就可以，愉快的敲木鱼了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIZVt3eD7jQyvVGiaornHwZ9sLESBpicfDv6M1C272rlmCps118uOoNEfA/640?wx_fmt=gif&from=appmsg)

看着页面上不断涌现的功德+1，还是很爽的。而且他甚至，把+1动效都给我做好了。。。

又能摸鱼，又能
加功德。

真好。

但是毕竟是改的网页代码嘛，所以懂的人肯定都知道，刷新一下网页，你所有的修改就都没了。

而有挂考虑到了这个问题，他们提供了一个“保存”的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIfficibz5p3kzLicWc1QOxEeP07ISzZMDDMO8RBZoCKCYDibl632cWOyoiag/640?wx_fmt=png&from=appmsg)

你点保存后，就可以选择这个改好的代码，是就这一次生效，刷新就消失了，还是对当前这个网站永久生效。又或是刚一点，对所有网站都生效。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIibcJOMicdZ4yeQ9zjh1ox2nR9XQbGrIHlcYfzp1aM5dswYl8geoo7icvg/640?wx_fmt=png&from=appmsg)

仅当前网站生效很好理解，比如我这次是在Google上加了敲木鱼，我选择了这个选项，那以后，我只要进到Google来，有挂就会按照我这次保存的代码，给我修改一遍网站，每一次进到Google，我的木鱼始终都在。

而所有网站生效就是全局生效，你不管去到那一个页面，我的大木鱼，永远浮现在左上角。随时准备为我功德+1。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIibKM8BtL4cjxpkrZ3LsaZQs6l49iawKpK1VcLMaicZawHfdYuiaWmkmjiaQ/640?wx_fmt=png&from=appmsg)

有挂这个产品，这种交互，我觉得是真的把所谓的“副驾驶”概念，用到了极致。并且也把修改网页代码的门槛，降到了极致。

它永远就在这里，随时等待你的召唤。

在一众要编辑代码的编程产品里。

有一个考虑编程小白的插件，把体验做到极致。

这种感觉，真好。

我也去顺道挖了下这产品背后的开发者。

海玮和虎王。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqM4zdlkCibokW0UovHIHVxIANzPKhYTbsrQP6Ht6Xicc29pKmuotVKe88Ky7o6H7pvzyTrPRyCFHOQ/640?wx_fmt=png&from=appmsg)

看到了他们的思考，他们的热血。

也看到了他们之前的产品“马大哈翻译”。

他们说，想让“有挂”传递的感觉是：

“想把大家带回十五年前在GTA里输入作弊码，然后看着坦克掉下来的那个夏天。”

鼻子一下就酸了。

我心中曾经那个执剑的少年，如今也只是混迹于市井之间。

做什么不是过一天呢。

那不如，做点自己想做的。

为了自己。

也为了十五年前的梦。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
