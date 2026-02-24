---
title: "Gemini 2.0的“用嘴改图”终于上线了，这是AI绘图的新范式。"
发布日期: 2025-03-13
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669560&idx=1&sn=fe3da70d93bb4fa7bdd353f235358cd4&chksm=f1f57ff5e8fc8efbd50c4a403dddfd508a4b07dcdd127ca292cc6d93c437e97a3ad3c4878da8"
---

## 摘要

**1) 一句话总结**
Google正式上线了Gemini 2.0的原生多模态生图功能，用户可通过自然语言指令在Google AI Studio免费进行精准的图像编辑、融合与图文内容生成。

**2) 关键要点**
*   **核心技术**：Gemini 2.0具备端到端的图像理解与生成能力，无需借助PS或局部重绘工具，仅通过文字指令即可修改图像。
*   **访问途径**：目前在Google AI Studio（需网络代理）中免费开放，需将模型切换为`Gemini 2.0 Flash Experimental`，并将输出格式设置为`Images and text`。
*   **细节修改**：支持在保持原图其他细节不变的情况下，精准修改特定元素（如改变发型、闭眼、换脸、替换特定扑克牌、修改图内文字等）。
*   **草图与平面图渲染**：支持将手绘线稿转化为真实渲染图（可指定材质），或根据2D房屋平面图直接生成每个房间的3D渲染图。
*   **多图融合**：支持同时上传多张图片进行融合生成（如将产品图与背景图结合）。
*   **图文混排**：支持直接生成图文并茂的教程（如菜谱步骤）或分镜故事。

**3) 风险与不足（基于原文）**
*   **生成质量上限**：目前的图像审美质量和泛化能力仍不及Midjourney (MJ) 或 Flux 等头部绘图模型。
*   **稳定性问题**：部分细节修改（如替换特定扑克牌）可能无法一次成功，需要多次重新生成（roll）。
*   **融合效果瑕疵**：在进行多图融合（如产品贴图）时，存在光影不匹配和明显的“贴片感”。
*   **访问限制**：国内用户访问该功能需要使用网络代理（“魔法”）。

## 正文

Google这两天动作蛮多。

昨天刚开源Gemma3，然后今天夜里，鸽了N久的Gemini 2.0的原生多模态生图功能，也终于开放了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROynxpN3jBibia7icj9qvK9ib211jFibhgIyrc2zfpyBZJjDoOibUHjFSVzFicHg/640?wx_fmt=png&from=appmsg)

这也是我对Gemini 2.0最期待的功能。

在出门回来，玩了一下午后，我觉得终于可以给你们分享一下，这玩意的有趣之处了。

先给你们直观的感受一下，它能干啥。

比如我现在有一张图，是一个很酷的小姐姐。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyqWYw3lHuib00P7Ym0jmNZibaJgdtglqLcIFy40URmflg7q4umEa7TcUQ/640?wx_fmt=png&from=appmsg)

我想让这个小姐姐，变成长头发。

你无需PS，无需局部重绘，只需要一句话就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyp6B0MrhSQMedory44qhiaVS1aibNH8gLqGkqGHDbh0Z2mPoyYeD8VCfg/640?wx_fmt=png&from=appmsg)

Gemini 2.0，就会瞬间保证所有的其他细节不变的情况下，把小姐姐变成长发。

我们还可以，一句话，让她把眼睛闭上。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyQcgyd1xVyOTl1OEIskibbOuGibMNicY3n5iaEbDzbic2yhyYOWD9GKnFC7A/640?wx_fmt=png&from=appmsg)

再把她的脸，换成特朗普。。。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyUlBIuPYibzicRXANwBWSh7XQ5qdqWyibRVXk94gSl5dh1h4ictBwH6gbAQ/640?wx_fmt=jpeg&from=appmsg)

这个效果，emmmm，我无法评价。。。

又或者，这是一套扑克牌的图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROy3LwSW5yPDAnNlp4mH0fAmShESp66S3LDhM4EaOgq9g2WyUh63qgabQ/640?wx_fmt=png&from=appmsg)

我想把把最右边的红桃A扑克牌，变成梅花2。

一句话，就成。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyFrIDJ2zyhN5M3Ka352ziaPEF0RsXMzicMguuojaSS884ZsTUDjLYJkAQ/640?wx_fmt=png&from=appmsg)

不过这个得roll，我roll了3次才roll出来。

你也可以改文字。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyBz5NT8icp07Cmt63s5UfmibRJpbwUsTXq46X36zOhpwiapLicfjzQfC4jg/640?wx_fmt=png&from=appmsg)

甚至，可以扔一个草图进去，然后说：

请你根据这张手绘线稿图，生成对应的一张真实房屋渲染图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROytoGQzTY0KyneI48rQuQREzj1LmuuyrAQSyDwb415SWsWRdicrXibKSPQ/640?wx_fmt=png&from=appmsg)

对这个屋子材质不满意，你还可以，改成木质的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROypM5JKb8bjNyYWiaiboLuiav72Iukxfhdft6krbqASTDxop0J8oJdZ8ibDQ/640?wx_fmt=png&from=appmsg)

这，就是言出法随的力量。、

得益于Gemini 2.0的多模态能力，类似于之前的GPT4o，GPT4o是语音端到端，而Gemini 2.0，则是图片端到端。

集图片理解和生成为一身。

而且，画出的图，审美也还凑合，虽然还远远达不到类似MJ、Flux那种质量，泛化能力也差点意思，但，能用了。

在多模态大模型上，能用的言出法随，是非常关键的一点。

说下怎么用。

打开
https://aistudio.google.com/

正常你登录后会看到这个界面（需要魔法）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROy19rUELFVXWwPBDsbzEAnb3HRrciaJAU2fuRCIDspAiatdNzZiaviaFf9nQ/640?wx_fmt=png&from=appmsg)

然后，在右侧把模型，切换成Gemini 2.0 Flash Experimental。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyC7BhMgYjSLcbKjPyf7iar4Y2icqOjgZpL0eXoiag2l1BcEygNfX96jswA/640?wx_fmt=png&from=appmsg)

目前限免，可以随意白嫖。

同时记得output这块，一定是Images and text，千万别只选Text，那你就生成不了图了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyNqLEtrsWsiaqk1TKX5P86reLPwgRmib9TlcXcSqRiaLcBt3gtYDuw2ib6A/640?wx_fmt=png&from=appmsg)

接下来，直接在对话框里，传你图片，加上文字描述就OK。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROy0RAB5P2XYrhUuz8EyfkvWq1iaFI3bO5iauPLkCchJ9kZCB5XTEw6xxYw/640?wx_fmt=png&from=appmsg)

比如我把我的头像，变成3D实物。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyHcUuB6WyZMYSXkZ9ItnK83N8KSic30uLeqRO2VTwHrZDMk8vfIj9Z1g/640?wx_fmt=jpeg&from=appmsg)

而且你不止可以传一张图，你也可以，传两张图，然后，融图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyh0GqwJNSjiaAf1mNicSxzCqZN5o5aeVHibSk8bHyOVDrh88PYC086RiclQ/640?wx_fmt=png&from=appmsg)

虽然它换logo换的还有点贴片感，比较这个太难了，但是产品图，就会好很多了。

比如1和2结合。

![](https://mmbiz.qpic.cn/mmbiz_png/fbRX0iaT8EgeFSBLyK5cU7lM8CwxPXpQOKq7OTvUFkS1729PyQngDZ3bdphFziaicmnJyH1cWp5dOMPgprdpOXVLw/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

光影还是有一些不匹配，有一些贴图感，但不妨碍很准确。

再给半年时间迭代，我觉得，一切都不是问题。

甚至你还可以，不只是图+文字进去，你还可以，直接让它给你生成图文混排的教程。

比如这个做番茄炒蛋的case。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROye4jZs07jUtZqWoZGLCOaYJIdW8kUPiabDZZNq2ibDoib2qH0HWCoYniaxw/640?wx_fmt=png&from=appmsg)

你现在，是真的拥有一个图文混排的教程了。。。

甚至，你还可以，给一个平面图，直接做每个房间的渲染图。

我随手生成了一个两室一厅的平面图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyUP0EC9YQTYz8icqiaiaiaFW53Nc3BvAibgoJiaJOB5NI15Pcr6ibwaZNY6I6A/640?wx_fmt=png&from=appmsg)

然后，扔给了Gemini。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFu6zVibqbwjCiadEiaiaQlROyEcOHYAhTKwcPIzoYIpzLRwjQGPfkicOGh4BhHNucCWIZkLHzU9NYpgA/640?wx_fmt=png&from=appmsg)

怎一个离谱了得。。。

这种一致性，做故事、做分镜，真的就是手到擒来。

两年多了，生成式AI在图像编辑领域的进步，真的也就像悄悄进行的大革命。

从最初需要苦学多年Photoshop和图像处理技术，到如今只需一句话就能实现你的所有创意。

我们不再受限于专业技能的掌握程度，就算是从来没用过PS的小白，也可以轻松地用嘴，将脑海中的创意转化为现实。

言出法随，从这一刻，成真了。

这或许。

就是AI时代。

它们给予我们最珍贵的礼物。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
