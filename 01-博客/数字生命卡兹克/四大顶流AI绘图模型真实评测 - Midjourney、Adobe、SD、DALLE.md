---
title: "四大顶流AI绘图模型真实评测 - Midjourney、Adobe、SD、DALLE"
发布日期: 2024-04-24
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647662316&idx=1&sn=c38b00dd5c3c1f97d3f53d18a9e6627a&chksm=f19ac690404e9e7d992d10aa2880bcb7c07318d98adf58a8fab26128cc704b77582c12dcd0e7"
---

## 摘要

**1) 一句话总结**
本文对Midjourney V6、Adobe Firefly 3、Stable Diffusion 3和DALL-E 3四款主流AI绘图模型进行了综合评测，结果显示Midjourney在细节与审美维度保持绝对领先，DALL-E 3在语义理解上占据优势，而Adobe Firefly 3整体表现垫底。

**2) 关键要点**
*   **评测对象**：Midjourney V6、Adobe Firefly 3（预览版）、Stable Diffusion 3 (SD3) 和 DALL-E 3。
*   **评测维度**：分为细节质量、审美（构图、色彩、光影等）和语义理解三个核心维度。
*   **评测方法**：每个维度14个测试用例（共42个），每个提示词生成12张图并选取最佳代表作，按1至4分进行排名打分。
*   **细节质量排名**：Midjourney V6 > SD3 > Adobe Firefly 3 > DALL-E 3。Midjourney在此维度取得压倒性胜利。
*   **审美能力排名**：Midjourney V6 > SD3 > DALL-E 3 > Adobe Firefly 3。Midjourney依然保持绝对优势。
*   **语义理解排名**：DALL-E 3 > Midjourney V6 > SD3 > Adobe Firefly 3。DALL-E 3与Midjourney处于领先地位，DALL-E 3略胜一筹。
*   **综合结论**：Midjourney整体实力依然稳坐头把交椅；Adobe Firefly 3全面落后，表现远低于预期。

**3) 风险与不足（原文明确提及）**
*   **评测指标缺失**：本次评测明确剔除了“风格多样化”这一指标，因为该维度无法进行有效测试。
*   **模型表现预期落差**：SD3在通过API接入的实际测试中，表现并未达到外界宣传的“神乎其神”的水平。

## 正文

昨天，Adobe正式发布了他们新一代的AI绘图大模型：
Adobe Firefly 3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3R9nEQkZtL9C3xMsFKOYNDe9Kyr7YCs59E16DVndrRCpH32b4qY7McQ/640?wx_fmt=png&from=appmsg)

细节更强、语义理解更强、控制性更强等等。

还发了新一版本的PS AI。

不过这些不是重点。

A
dobe
F
irefly 3的发布，
结合前段时间发布的SD3，让我有了再一次搞一个AI绘图大模型竞技场，评测一下的想法。

上一次做AI绘图的综合评测还在去年12月1号：

四大巨头的AI绘图模型综合评测 - 写在Meta Imagine上线后

那时候Midjourney还没发V6，stability也没发SD3。

在现在这个节点，过了近半年的时候，来再看一下现在进化过的巨头们，已经达到了什么样的水平。

四家分别为：

Midjourney V6、
A
dobe
F
irefly 3、Stable Diffusion 3、Dalle 3。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3kOKVheGJ7dJnzFhbvicmibXFah3Uic87GVVeWEKPo3kEKhwpPeIA7XD8w/640?wx_fmt=jpeg&from=appmsg)

至于评测方式，我依然会从
细节质量、审美（构图色彩等）、
语义理解
这三个维度来评测，剔除掉了风格多样化这个指标（没法测）。

细节质量、审美、语义理解每个类别14个case，总和42个Case（42这个数字的代表意义懂的都懂哈哈哈哈）

同时每个Prompt我会在AI绘图模型中roll3次出12张图，取效果最具有代表性的那个图，尽量减少偏见。同时为了保证公平，基本不会搞特别复杂的prompt。

同时，为了有最后整体可视化的评分让大家看着更直观，所以我会进行打分。在每个案例中，第一名为4分，第二为3分，第三为2分，最后一名为1分，最后计算平均分。

虽然每个case数量都不是很多，但是这也差不多了，而且是我个人的极限了。为了避免文章太长阅读体验极差，我就每个类别只放8个Case来做展示。

OK，让我们开始吧。

一. 细节质量

主要测试AI绘图对于细节的表现能力，比如人物面部皮肤的质感、比如织物纹理的细节、场景细微元素的细节等等，这个是对模型精度和输出质量一个非常重要的考量。

1.Prompt：

Selfie of charming kpop girl, outdoors, evening time, brunette, casual giggle, 2 bun tied hairstyle

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc34cv3WRic0pzfhrsG4oicw8EnKnyhibaTBibJaMnJd6XmHPNibznAJmbOLVw/640?wx_fmt=jpeg)

Midjourney > SD3
> Adobe > Dalle

-

2.
Prompt
：

Portrait of a 2000s blonde woman posing on a sports car, white wired headphones, expressionless, 2000s hairstyle, 2000s fashion, sun rays, light teal and amber,Cinestill 50D

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3cBGoEAMCuvsCbuvNGuToy3GtF06ibicQTSoNm6DECTrtNTWatocNdiaeg/640?wx_fmt=jpeg&from=appmsg)

Midj
ourney > SD3
> Adobe > Dalle

3.
Prompt
：

Photo of smiling Labrador wearing sunglasses and straw hat sitting on the beach bench with glass of cocktail, beach scene, realistic

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc37RDNf1ffiaicG7nj6cAz6ugOQqa0Ds1kpWhqntW0PibtJJrMX6A7eAeqw/640?wx_fmt=jpeg&from=appmsg)

4.
Prompt
：

a sports car drifting in a middle of partitions in a festival of vape and there is people around the car vaping, cinematic mood

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3ODO3JYPNibjkKjhfCPwT3wn23H8xKfANllzXC1ComDiaoL0HRvau1tpA/640?wx_fmt=jpeg&from=appmsg)

SD3
> Adobe >
Midj
ourney >
Dalle

5.
Prompt
：

Realistic illustrations,The drumstick hits the frame and the drum bounces up water droplets

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3mfic71yEeWxiaydgYh4cFia7aFdN4qqW3n6T5RUMyx71rqCtstzL6Tp2w/640?wx_fmt=jpeg&from=appmsg)

Midj
ourney >
Adobe >
Dalle
> SD3

6
.
Prompt
：

a house design inside of the perfect beach house, rustic malibu in style, the beach and surf included in the photos, Photography

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3ibyQnlA45Aw3mXOblZic0iauLy0Oia83WuLHfx89TuJGEdJ2Teng1OicgJA/640?wx_fmt=jpeg&from=appmsg)

Midj
ourney >
Adobe
> SD3
>
Dalle

7.Prompt：

beautiful blonde model made out of porcelain, long hair, wearing sci-fi light mecha armor, in the style of balanced symmetry, white and blue LED lights on armor

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3acmfyI2pqJDT4VNBMM06WqkNuYpd0lqpWjyefKHLHMm06icYMiafdVkQ/640?wx_fmt=jpeg&from=appmsg)

8
.Prompt：

Delicious hamburger, floating in the air, food professional photography, studio lighting, studio background

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3HZNX2SxAOMiarc4yjfL2FOH6NPWg9gDeicFP7VFnBg1eMHMYIWpWo6TA/640?wx_fmt=jpeg&from=appmsg)

Midjourney > Adobe > SD3
> Dalle

剩下case略。

在细节质量部分，Midjourney基本以绝对的优势压倒性胜利。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3ic18rNoLJRynRuKBiaMfbyPNW6L3iaXLiaHLuemOzbQWhYjDn9247FqGvA/640?wx_fmt=png&from=appmsg)

二. 审美

主要测试AI绘图的审美能力，一张图好不好看，是美是丑，除了细节之外，更多的还需要看模型的审美能力，比如构图、色彩、光影等等，审美强，出的图才好看。

Creatures from the Book of Mountains and Seas of China, a golden alien tiger with a resting bird on its back, attack posture, with light and golden particles emitting in the air

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3nrNecV2FrqhSdjWPH3xcq7AVlTlNzsDEArX2iaqiaic5mTdeNgZgTuhBw/640?wx_fmt=jpeg&from=appmsg)

Midjourney > SD3
> Dalle
> Adobe

2.Prompt：

A strong man riding a steel dragon flying in the sky, panorama, steel mecha, futuristic tech wind

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3yJSSx3DZ9qzMJWcxKoJxpIffQ4eXgGFEWJjSXOMBph2N5ibQaEWrs3w/640?wx_fmt=jpeg&from=appmsg)

Midjourney
> Dalle
> SD3
> Adobe

3.Prompt：

An abstract three-dimensional sculpture in the shape of an orchid, composed of gemstones and frosted viscous materials, in the style of tesseract, light-filled, sparkling water reflections, sunrays shine upon it

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3U363QPFSotKexxsibmNOQEwFjd65iba1B8IvTAwrjEH1woNJXchBg6vQ/640?wx_fmt=jpeg&from=appmsg)

4
.Prompt：

woman smiling and having a cup of 7-eleven coffee outside a 7-eleven convenience store in the morning in the style of 90's anime, 1990s anime texture and colors, thick line work

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3IppIVIRMnOrHFooZUsFcYt4MuibALic4EKOKrGPMIexIaLcduKGpnXhg/640?wx_fmt=jpeg&from=appmsg)

5
.Prompt：

fantasy greatsword made from crimson metal, oil painting

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc32m2DyLr6LGZicP2LDrVV5eVBwOx0EAfjqnkAq72ibgyIG0htxrUQZqzQ/640?wx_fmt=jpeg&from=appmsg)

6
.Prompt：

a dark ocean with great Sturm, Captive Souls Pirate's Redemption, ship emerging out of the fog, Giant octopus reaching out of the waters to pull down the ship

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3M56sPBdXoUe0494tTCK6ppZR7Vib61m3BkJ6WdbDibibNdwxJA2x9ziaaQ/640?wx_fmt=jpeg&from=appmsg)

warhammer 40K, Islamic space marine, white armor, black and gold trim, matte paintin

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3jM8Qc0JwnAlTGmD3sJ11dibzZOQ9ic7S8JElvsfiaJICygXicvHqlAgYFA/640?wx_fmt=jpeg&from=appmsg)

oil painting of an angel with wings spread above the forest, light beam from its eyes illuminates path in bright green and blue colors

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3zJhnVsQAQnCrYCNwiaT6WzT4tlNdgUbj7CmgdmMILpq7znjqibdia0WqQ/640?wx_fmt=jpeg&from=appmsg)

在审美部分，Midjourney依然以绝对的优势压倒性胜利，而以设计起家的Adobe，反而拉了最大的跨。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3JAaPugUt35OWxOV2uNBTWpWwPGkWKeKNzvM7icib98uLyLmtvMknagUQ/640?wx_fmt=png&from=appmsg)

三. 语义理解

主要测试AI绘图对于复杂语义的理解能力，能否将文本内容都能清晰的表达出来并保证生成图片的质量。

Portrait photograph of an anthropomorphic tortoise seated on a New York City subway train

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3THx2ng6wFnWibj8MMYPBbDnQPcdBLhQEiaR7GhcJM1rWYoQxV9w5B3KA/640?wx_fmt=jpeg&from=appmsg)

Dalle >
Midjourney
> SD3
> Adobe

A businessman on a throne. The AI agents gathered behind him like royal guards. Photo Real

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3ukVABojADpp4AmicdTMoyXFNjwRpyRM6Ey5KUHricyB3tuM3h4SeiasOQ/640?wx_fmt=jpeg&from=appmsg)

A cup of coffee sitting on a table in front of a window, outside the window is a futuristic city; a futuristic monorail can be seen close by, many lush plants around, shot from ground floor, clouds above

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3N0HxiaahKcWs2tp7Lapb8t9qE2uF5T0dDtKiaJDmL0IGtVH3KibS4wBLw/640?wx_fmt=jpeg&from=appmsg)

Dalle
> Adobe
> SD3
>
Midjourney

4.Prompt：

A hyper-realistic image of an anthropomorphic corn cob working as a cashier at a convenience store, depicted with a cheerful expression while laughing. The corn cob, dressed in the store's uniform, features a friendly face with eyes and a mouth on the husk, showing a big, joyful smile. The scene captures the corn cob scanning items at the cash register, wearing a typical convenience store uniform that includes a neat polo shirt and a name tag

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3taGhjNU0Nulw0zxxCR4jicsUnglZTqwBFPvNKIVdGSznicoiapaGjCt1A/640?wx_fmt=jpeg&from=appmsg)

5.Prompt：

Editorial photography of astronaut cooking Christmas colorful chocolate honey cookies on spaceship, Christmas honey cookies floating around astronaut, no gravity, in spaceship, levitated

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3mMWoj6kqvpR4ic6wcT3sVspHVSKbYS1jpTibdLeicNmAZvkx3X4GB8ia4Q/640?wx_fmt=jpeg&from=appmsg)

6.Prompt：

a close up hyper realistic image of a medieval knight facing off against the grim reaper. Dramatic lighting

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc35960ovrd6qUz4ThayQ2uVh4H7KOFvib5rLgtiawKOicl3ITu3NBvOibWCg/640?wx_fmt=jpeg&from=appmsg)

Dalle
=
Midjourney
>
Adobe
>
SD3

a very pretty young woman smilling flying over an aztec city with a dog, both the woman and the dog are flying, she is wearing an aztec outfit, the dog is wearing a colourful collar. they both seem to be having fun, ultra realistic

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3XvvB8BVNECZSlickfxSZ1MvbYukEKEJq8vUl5KiayvE5ue38AFPEic8ow/640?wx_fmt=jpeg&from=appmsg)

8.Prompt：

dungeons and dragons, high detailed, fantastic realism, female centaur with unicorn horn on head, hyper realistic

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3E2Ku2pYgj2GvkwXjPpbUQjMlb2OxX68SfcULOWwnPWT3ebObIghPaQ/640?wx_fmt=jpeg&from=appmsg)

Midjourney
>
SD3 >
Dalle>
Adobe

Dalle3和Midjourney基本上处于领先地位，Dalle还是领先一筹。Adobe继续垫底。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3vsE6dFC9NV1SiaRL2PT8QHjh8EebRSJdKw6bLDbS1GazjqnhF2621Pw/640?wx_fmt=png&from=appmsg)

最后总结

在四个大模型三个维度评完了以后，我相信大家应该能对这几个大模型有大概的了解了。

但是为了更直观一些，我再来做个雷达图吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo72ggc9dEIOGhrePbIoLc3Aocd7W2EmRt2bgos0tnInm4q1O02H5Rr3swO1LMetrFxaeQwcibSOeg/640?wx_fmt=png&from=appmsg)

细节质量方面，MJ V6 > SD3 > Adobe Fiefly 3 > Dalle 3。

审美方面，
MJ V6 >
SD3 >
Dalle 3 >
Adobe Fiefly 3。

语义理解方面，
D
alle 3
> MJ V6
> SD3 >
Adobe Fiefly 3
。

MJ依然稳坐头把交椅，很多人跟我说，啥XX大模型在什么什么参数评测中已经超越了MJ啥啥的，我每次都点点头：哦。

而
Adobe Fiefly 3的全面拉胯以至于我几度怀疑自己是不是选错了模型，直到我再三确认我选的确实就是
Fiefly Image 3预览版。

就...拉胯的令人难以置信。

而SD3至少在我以API方式接入使用下，也没有很多自媒体或者其他人吹的那么神乎其神。

希望这个评测，能抛砖引玉吧，让大家对AI绘图综合有一些了解。

更建议的是，自己上手去试试。

又跑了十几个小时，虽然跟大家说的是只有42个Case，但是背后跑了不知道多少。希望能对大家有所帮助吧。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
