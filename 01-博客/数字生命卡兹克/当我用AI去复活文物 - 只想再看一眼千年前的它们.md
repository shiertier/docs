---
title: "当我用AI去复活文物 - 只想再看一眼千年前的它们"
发布日期: 2024-04-08
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647662047&idx=1&sn=49e7f9c62cdeae879ce8b0543d0e03d5&chksm=f1cc0ae631db34bc4045ac35c7c2e7b40020c235857e7ab7d096413108b37f9744346054aea0"
---

## 摘要

**1) 一句话总结**
本文分享了利用GPT、DALL-E 3与Midjourney等AI工具，将战国时期楚墓出土的漆木彩绘文物“复活”为具象化神兽的工作流与实践经验。

**2) 关键要点**
*   **核心目标**：利用AI技术“复活”文物，并非使用ControlNet进行简单的照片重绘，而是基于文物的历史背景与神韵，为其创作出具象化的全新形象。
*   **测试案例一**：荆州博物馆藏品“漆木彩绘蟾座凤鸟羽人”（战国时期，国家一级文物），由羽人、凤鸟、蟾蜍三部分组成。
*   **早期测试方案**：最初尝试直接使用Stable Diffusion（SD）生成，以及采用分部重绘再拼接的手工方式，均未能取得理想效果。
*   **工作流突破**：改用GPT+DALL-E 3组合，不再追求原封不动的还原，而是保留结构与神韵，成功用现代审美诠释了文物形象。
*   **测试案例二**：荆州博物馆藏品“漆木彩绘双头镇墓兽”（战国时期，国家一级文物）。
*   **最终优化工作流**：先使用DALL-E 3生成概念图，利用GPT描述该生物特征，经人工精炼提示词后，输入Midjourney进行最终生成，以提升图像质感。
*   **后续计划**：作者已利用此工作流生成了多件中国历史“神兽”形象，并计划在后续视频项目中详细拆解完整的工作流。

**3) 风险与不足（原文明确提及）**
*   **复杂结构理解困难**：直接使用AI（如SD）处理由多部分组成的复杂文物时，AI难以准确理解其结构。
*   **拼接重绘效果不佳**：采用局部重绘再拼接的传统“苦力活”方式，耗时且最终生成的图像效果依然怪异。
*   **DALL-E 3 质感缺陷**：DALL-E 3 生成的图像在质感和审美上表现较差，无法直接作为最终成品。
*   **Midjourney 一致性问题**：即使使用Midjourney优化了质感，生成的图像依然存在许多一致性问题。

## 正文

好久不见。

这是我写公众号以来，第一次断更了将近一周。

主要原因是一直在做一个新的片子，做了很久，真的很久。不眠不休肝了快10天了。

当然，过程中又有无数新的经验和工作流，可以分享。

大的工作流我觉得可以等片子放出来后，后续再来详细拆解。

但是今天，我觉得可以先拎一个案例和技巧出来写，是一个非常好玩的案例。

用AI，复活文物。

我说的复活文物，不是用ControlNET啥的把文物照片一笔一画画出来。而是真的在此基础上，给他一个新的形象。

因为文物，很多都是从墓葬里发掘出来的，这些东西，大部分都是陪葬品，它的属性，也就是：器具，或艺术品。

这些器具和艺术品，古人在创作他们的时候，一定都有参考物，不一定是现在生活中真实存在的，但大概率也存在与口口相传的故事里。

而这次我们想要做的，就是去把那些参照物，做出来，来看看他们用AI做出来，到底是什么样子。

我用荆州博物馆的
漆木彩绘蟾座凤鸟羽人举例。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg299KTjia1TxxBt0fcq6ZjwxfILXHjJ4IOVniaIniaCOJykN0E3iasXrG8pA/640?wx_fmt=png&from=appmsg)

这是一件非常非常牛逼且著名的藏品。

时代：
战国（公元前475—221年）
来源：天星观二号楚墓出土
级别：国家一级文物
羽人是楚地巫风最盛时代最具创意的木雕作品。由上部羽人、中部凤鸟和下部蟾蜍状底座三部分组成，其中羽人为人鸟合体，立于凤鸟之上，造型奇特，形象优美，制作精致。羽人被当作天上的神灵，蟾蜍代表月亮之精，凤鸟是飞翔于天地之间的神鸟，羽人又是变化莫测的神人，三者合一，寄托楚人遨游九天，羽化成仙的愿望。

最开始，我们在还原的时候，愁破了脑袋。

上部羽人、中部凤鸟、下部蟾蜍。

我不得不佩服古人的想象力，真的。有一种别致的美感。

但是还原的时候，真的愁。

我们最开始还原的时候，本能的还是上了SD。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2zxjicNCYPIAZRiaxiapnrxlIpukVLLBdJNTzNBnP5TAoL46loyoPZ8iavw/640?wx_fmt=png&from=appmsg)

这个东西，它就很奇怪....

三部分，你直接让AI上，它真的很难理解。

然后海辛决定，上辛苦活。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg24MAj7HOB5ewibrf5wFBh0h8qQw6micnaA48rkHfUmiapR0YMW8uyib9k0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2KM4m24UqMaKtOEZEjSB2PYWicIgqdJsV4HJP9khwqfNC7aO1Ntnsuqg/640?wx_fmt=png&from=appmsg)

一部分一部分的重绘，然后，再拼起来。

我隔着屏幕都能感受到海辛的崩溃= =

在十几分钟之后。

海辛给我发来了这么一张图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2l8xXtksrkFk8T7g9WRsKCWwu4FNNdiczl3R77ScvRIpzzXMF9tj9QbA/640?wx_fmt=png&from=appmsg)

我：。。。

海辛：。。。

确实还原，但是也是真的别致。。。

我们陷入了非常深了焦虑中。

直到，阿文发出来了这么一张图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2FyRZHmTQ8FFacpuZkKnIUhaN0ibXKK7lAFHchZpO618upFUQz04O9wg/640?wx_fmt=jpeg&from=appmsg)

我：卧槽。

海辛：卧槽。

我们都懵了。

这玩意，并不是原封不动的还原，而是在文物的基础之上，还原了结构，保留了神韵，用现代化的审美，对文物的过去，进行了完美的诠释。

这才是我想要的还原。

我们立马冲过去问阿文，到底是咋做的了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2SqMkl8mgHefPn3QFfKb4OrleRkic4ribRPxuZUCmRI0QoribqTFz6Iv0w/640?wx_fmt=png&from=appmsg)

再一次刷新了我对GPT+Dalle的组合的上限的认知。

我也自然，去如法炮制了。

这一次，我给的是荆州博物馆里，著名的
漆木彩绘双头镇墓兽。

时代：战国（公元前475—221年）
来源：天星观一号楚墓出土
级别：国家一级文物
内涵：镇墓兽头插鹿角，睁目吐舌，狰狞恐怖，是经过夸张或组合而成的形象，显示其引魂升天的神威

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2gRiaouJgmAkRVbxAvgVf9IicjiaGKUjcZdYo9zOw4c4l3icNh4cNHAGsYA/640?wx_fmt=png&from=appmsg)

然后，Dalle给我画了这么一张图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2hv54dQibrqeLSCMh7nbuASicp12IpUSGLrghNUYRWdRmSUD1HjFaBiaUg/640?wx_fmt=png&from=appmsg)

说实话，这就是我心中的荆楚文化中的镇墓兽。

他就得长这个样子。

于是，我又让GPT给我描述了一下这个生物。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg24wHSSWAruFWwTG399FyRnTqoqvSRiaVqTUXYWHzvFS4icZBTxSBYBNyQ/640?wx_fmt=png&from=appmsg)

然后我自己再精炼总结了一下，扔到了Midjourney里（Dalle3的质感和审美太差）。

我的镇墓兽，就出来了。虽然还有很多一致性问题。

但，这就是我喜欢的，想要的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2zWiblMfX2xFZ0EUF0feS4uEYR3j1cyRIszgaHxuFKtYLCV5GkG5re5Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2BSlLzvnusrjMpR6bOobhBYNibhhyhoicZbicSEklXO1erfWzcgI1L0icHg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2o2Rg4XdZRQfOV3NVDuH5UU6uyAMRyK5OZyXI8oFibq3bxk6OBTwoy5g/640?wx_fmt=jpeg&from=appmsg)

当然，除了镇墓兽之外，我又继续用AI，复活了很多其他的文物。

后面有机会的话，可以放一系列。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2e67Tb8FwTzufia9ruDt2ibOjf3Bibe5iaukhS4Cz6r08C2QMsKrR7CwPDQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2qt2a6mtsHwc0NyugnAgZVAd4iblcjP40DuVLza8CAtDs46Sg7nQ1NXQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2MkbkN9RuZB442If2DSc40VRzAnqPnslfxepCTtTwNn1dxKjb0RLf9Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo83ypLo0ZicqDWhfGJtkGg2KaEibLsicsrgJm4Vv0wNmnYmvDMJ8FnK5FsuU8PyZ6Mz5YMEHVAstExw/640?wx_fmt=jpeg&from=appmsg)

或者说不叫文物。

应该叫，我们中国，独有的，“神兽”。

他们，是活在我们的历史里，活在我们的记忆里，活在，我们的血脉里。

所以。

我想看到他们时隔千年，再出出现在我的眼前。

看一眼，那跨越千年的梦。

我爱它们。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
