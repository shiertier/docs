---
title: "GPT-4o多模态生图正式上线 - 用嘴改图，此为王道。"
发布日期: 2025-03-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669942&idx=1&sn=2b608dc2c06de6796d08166d04f1ede8&chksm=f1383b8d8876a4496a9fcb3798583534eb74d8ce08ea9da7bc1dbca11cf2061000f54fe121c0"
---

## 摘要

### 1) 一句话总结
OpenAI于2025年3月26日正式上线了跳票近一年的GPT-4o原生多模态生图功能，支持通过自然语言进行高质量的图像生成与多轮细节修改。

### 2) 核心要点
*   **发布背景**：该功能最初于2024年5月公布，延期近一年后于2025年3月26日突击发布，目前面向200美元/月的Pro会员开放。
*   **ChatGPT端体验**：支持通过自然语言进行多轮对话改图（如修改色调、材质、UI、性别、融合图像等），但存在严格限流（生成十几张后需等待7分钟）。
*   **Sora网站端体验**：生成速度极快，单次可并行生成4张图片且无使用次数限制，但不支持生成后的多轮对话修改。
*   **核心能力**：具备顶级的文生图与图生图质量，用户无需依赖Stable Diffusion、ComfyUI或ControlNET等复杂工具即可实现高级图像编辑与风格转换。
*   **行业影响**：其多模态交互能力和出图质量显著优于Gemini，且在发布当日的社交媒体热度上完全掩盖了同期发布的Gemini 2.5 Pro。

### 3) 风险与不足
*   **细节生成瑕疵**：手指等局部细节仍可能出现生成错误。
*   **文本与事实错误**：图像中生成的复杂信息（如海报中的公式、元素周期表内容）存在错误。
*   **中文处理能力弱**：要求生成中文时偶尔会混入英文或日文，无法准确区分部分汉字（如“句”和“勾”），且中文标题字的排版审美不及即梦2.1等本土产品。
*   **一致性问题**：在进行多张图像融合时，人物面部的一致性仍存在轻微瑕疵。

## 正文

今天日子是2025年3月26日。

OpenAI又是临时发了一个直播预告。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8azTtsaGFHVEScjDmgicwwypqK9ZfQG0IRlk9McWrj6BGcb6qOHufHAbg/640?wx_fmt=png&from=appmsg)

凌晨2点要发东西。

我：？？？？？？？？？？

当熬到2点看完了直播以后，我人都恍惚了，我怎么好像去年5月的时候，见过这个东西？怎么感觉特娘的我时间穿越回到1年前了？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aibS9ZASMlZjia1qBTpl7DPgNTumiaHZXAjc4xly0ZlibaeIcTOXef8EiabA/640?wx_fmt=png&from=appmsg)

翻了一下，果然。。。

2024年5月13号，GPT4o正式发布，那时候的blog里面，就说了GPT4o是一个原生多模态模型，不仅支持端到端的语音输入输出，其实也支持图片的端到端输入输出。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aWNyibr1Yn3JkBgs4yiabVL37o6z3d7eOcverAxChCoicgwFRSicbHp9DqA/640?wx_fmt=png&from=appmsg)

只不过，这一鸽，就鸽了一年，鸽的我都快忘了GPT4o原来也支持图片输出的。。。

感觉是Gemini的原生多模态用嘴改图给OpenAI逼急了，没办法，只能临时加塞把这玩意掏出来。

OpenAI的发布节奏，真的已经越来越不对劲了。

但是回到4o生图这个产品能力本身。

虽然说节奏稀碎，可OpenAI一年后掏出的这个的产品，质量直接拉到顶，就跟DeepResearch把google的按在地上摩擦一样。

大家虽然都是原生多模态，都可以用嘴改图，但是GPT4o的绘图质量，就是可以把Gemini按在地上摩擦，就是当今的王，太牛逼了。

作为200刀的pro会员，我也在第一时间，就拿到了体验资格。

目前，有两个渠道可以使用4o Image Generation。

一个事ChatGPT，一个是单独的那个Sora的网站。

在ChatGPT上，当你画图的选项变成这个的时候，就说明用的不是Dalle3了，而是4o。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8a46aWHD4fFUfXXmEGkeUrKVbEaddyCRzZXLOsKkOibicce3klStwXcAKw/640?wx_fmt=png&from=appmsg)

你就直接可以用嘴画图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aOYcogoiac4x10OiaLsuXlBfuqq11twJWibKJmMoVphtib2fb1v0atstjCA/640?wx_fmt=png&from=appmsg)

也可以，直接用嘴改图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8agmic0dkYOicic1kHdj6U9Ik42FYhTAheWdZvYibb6quNXt3NLaB60nhXtg/640?wx_fmt=png&from=appmsg)

但是在ChatGPT上用，有一个问题就是，即使我作为200刀的Pro会员，他居然也限我流，才生成十几张，就给我限了，让我7分钟以后再用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aFL81Y85LicQdQcKSJV1icEcX3cBicuKsW4hn8VcfCyGDCS88UC5dOyibGA/640?wx_fmt=png&from=appmsg)

而在Sora上用的话，有个好处，就是速度极快，一次性可以跑4张，而且还无限用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aj4eFtqyTiblXqag4WXtFU0RLtAd4ECLJ8tr1dYoN4afwodR69Aqwngw/640?wx_fmt=png&from=appmsg)

质量顶到飞起。

你可以把这个位置，改成image就OK了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aCmb5AdIKORf2iaibflpibOAC0iaozQic8TclicZJ7Nd96mWYRF6RxCb6Rdyw/640?wx_fmt=png&from=appmsg)

但是最大的问题，就是生成完以后的图片，不能进行多轮对话修改了。

现在ChatGPT和Sora的关系，越来越像豆包和即梦的关系了。

我从2点，跑图跑到4点，坦率的讲，我对4o的生图质量，是非常震惊的。

比我想象的还要好。。

用过Gemini的就知道，虽然可以实现多模态改图，但是那个生图的质量，丑的不忍直视，能用，但是到不了生产力级别。

但是，4o可以。

我直接放一下我跑的纯生图case，改图的case放后面。

先看生图。

Prompt：冰霜巨龙盘踞在雪峰上，周身冰晶闪耀，龙息喷出寒气，背景狂风席卷雪花。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aKuBiaDykBCOEvAr37bLDxuDYlqS5KqicFDVdYPazvhSb6ae8u5kYoskg/640?wx_fmt=png&from=appmsg)

Prompt：山姆奥特曼在摘棉花。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aXG5Lia66IZCY5Bk6soBOJOdeKHwa1V1MOuiaQTxkG9STHfjER4krhc4A/640?wx_fmt=png&from=appmsg)

Prompt：
制作一张漫画风格的生日卡，上面写着“我希望你今天像动漫开场中的超新星一样闪耀！"

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aTajf3oBs9iaYo0xRibDr8CYBNibpZAfgjOX7a0icHuldsm0aicvHibpBCafA/640?wx_fmt=png&from=appmsg)

Prompt：
创建一个多步骤表单用户界面设计的图像，简约一点，好看一点。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aLDe57OHMaHb1pOeTtqFw852Df7gHKc0DWEbIbnlLuJwQj0rjQPDttg/640?wx_fmt=png&from=appmsg)

Prompt：创建一个索隆的女孩版动漫角色。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8a6kjNdb033Vtg7ibngl7L7kY7GGia80d1ia5T3fsngRQhIRibFQ4siaxbFOA/640?wx_fmt=png&from=appmsg)

Prompt：
创建一个包含所有元素的周期表卡通图像。确保每个元素框都标有元素的全名（如氦或氢）。在每个元素的框中，包含一个代表该元素的卡通图像。同时也包括一些完全随机的物品，而不是实际的元素，仿佛是在幻觉中看到周期表的成员。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8a9icrTSbK9EF8KQmWUCtVaRsnk8uiatzy2WCiadJ9iatUhf6c7rnbbwfa0Q/640?wx_fmt=png&from=appmsg)

Prompt：
做一个用火龙果的外皮做的蜥蜴，照片必须逼真，整个鳞片都要是火龙果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aeIsSnrFNFnGrNqzXFllEEjC62dfIrkdteuwZicZAjrpbMkTdtqPS2iaQ/640?wx_fmt=png&from=appmsg)

Prompt：
一张坦率的狗仔风格照片，卡尔·马克思匆忙走过美国购物中心的停车场，回头用惊讶的表情看着，试图避免被拍照。他手里抓着多个装满奢侈品的光滑购物袋。他的外套在风中飘动，其中一个袋子在他迈步时摇摆。模糊的背景中有汽车和发光的购物中心入口，以强调运动。相机的闪光灯部分过曝了图像，给人一种混乱的小报感觉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8abV0zt4EWFpgSgJicEmO6czjqG09wjMVqZAHy1pICwRicHib85pZdoncCA/640?wx_fmt=png&from=appmsg)

Prompt：画
一个包含机器人运动学和动力学详细信息的海报。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aL352NP93vSibib5dG3iass9VQuiaOP2T40Tzv9nwHtO0waZxWqUaD5Yyxg/640?wx_fmt=png&from=appmsg)

Prompt：
描绘一只对冒烟的计算机服务器机架感到困惑的水豚。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aXUlfzDl8hbhibPDkfKbRxkIWJs2RlLgC7IGmWpEnSibS9ibaUXVpmmyWg/640?wx_fmt=png&from=appmsg)

Prompt：一只猫用粉笔在街上写下“我是一只猫”的图片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8ak8PibQM1ic8guwS28DbgTqYG87YRQPg2K5tZ3IEY6zjTPjD9TQ1wry0A/640?wx_fmt=png&from=appmsg)

我还有太多太多太多跑出来的图想放给大家看了。

受限于篇幅，我只能放这么多，我推荐你们每一个人，都去试试。

诚然，4o当然还有很多小问题，比如手指细节可能有问题，比如海报里的公式都是错的，比如上面的元素周期表很多是不对的，比如你让他画中文有时候会干出英文或者日文等等。

但是，但是，这个质量，这个自由度，这个语义理解。

让我可以在这个阶段，无视他的所有那些细小的瑕疵。

我已经很久没有跑图跑的兴奋了，跑图跑的不想睡觉，这样的感觉，还在两年前，第一次看到Midjourney v5更新的时候。

太酷了。

当然，你并不是只可以文生图，当然也可以，图生图。

如今，你再也不需要什么SD、什么Comfyui、什么ControlNET插件，你就可以实现很多很多效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aE8jG1BcRSJzqzxVuCBAglnGbeLYu1EsQsbPjibjnUFTr6Oq3TbenXLg/640?wx_fmt=png&from=appmsg)

效果就是这样的，BUG就是4o无法区分句和勾：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8avyfjdiaiaaVj1NB9AbnGhHcVdffpeWVIsMicepH4lvlCvp48CqEmtgZJQ/640?wx_fmt=png&from=appmsg)

又或者，把雷总经典手势转一下风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8al54kvwpG5YbKYocd5JaNzn9LSpMYztibvBwDzovPRR2BQoNBeoHSQwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aBGmuIibkplFcIqKARfWnS4Y9dm4t2dzrzxdukmBK2wTcaZhzfvTibBBQ/640?wx_fmt=png&from=appmsg)

再或者，把拼多多的logo，改成青花风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aiafrRN5Pbf5I9HRYm91CfDHaUOgth8FIj8RDma4f0Oza9Sm4kmswnbA/640?wx_fmt=png&from=appmsg)

又或者，把几张图融起来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8auVgicT3hhXgdj8m72V3ReibbpSzib0cQ8hK4J4UaG4Wb6DGbBgDoeRygA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8atnLLlnxHS7mwsGSsba8erdK6ibhwXvOqwVlD4OBIJ85tXTOqImDHVtA/640?wx_fmt=png&from=appmsg)

人物脸的一致性有一点瑕疵，但是这个融合效果，已经无敌到没边了。

Sora差不多就这样，ChatGPT上也可以用，效果跟Sora一样，反正背后都是4o，但是ChatGPT最大的好处，就是可以进行后续对话。

比如我先跑一个妹子的图片。

Prompt：创建一幅史诗般的现实主义图像，特写，1 个女孩，漂浮的蓝色头发，长发，水滴，湿润，手持武士刀，带有图案的蓝色和服，超详细。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aNbhYMkibiaaT6JG7uWHLpbyARZiakzXflwGcdrfqhPD30cQ2ofUjLXX8w/640?wx_fmt=png&from=appmsg)

我现在，想把她放到游戏海报上，直接嘴说就可以。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8a4BOlEHnPOo4BVeyauSorqXF2mrNh2Uy5ibfhLWh7F3hUBZxg6PNHmicw/640?wx_fmt=png&from=appmsg)

虽然在中文标题字的审美，跟即梦2.1相比还有一点差距，但是已经很好了，毕竟4o的主语言，是英文。

用嘴给图片改色调。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8afHAicuicIqnGyxOEaib7K6GBe7wKNsZ8AVSibvY86kJU8CHcXZd41R5ucw/640?wx_fmt=png&from=appmsg)

用嘴改变材质。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8ak0KrEyUOBQqLa8RtkvVUNOJr4Lz4jfQxvBBy7yXa7c2jsGhuJnpe5A/640?wx_fmt=png&from=appmsg)

用嘴改屏幕里的UI（虽然有点乱码就是了）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8ayPUMZAHPmcK0OOkN0gW6WU1WvWaFJEhhxFhOB95YqXd6HBsZe5ycqw/640?wx_fmt=png&from=appmsg)

用嘴来改性别。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aslqjnCJN0UiaQibPrichBgicwGCNWEKnv81ww6G9YryZQz8l0sQBsNZRWg/640?wx_fmt=png&from=appmsg)

还有他们自己官方跑的，几个我觉得屌炸天的case，我觉得必须拿给大家看看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8azfG0qRGbBe0IAPaZ3icDdu0oJzPFAIw5y4OhMAX3JAvtpUset8YKSog/640?wx_fmt=png&from=appmsg)

上面这是AI直出的，甚至玻璃上的影子都是对的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8at4ibGEboJUAcP3rCoh5NiagHt4SGcgL6oyib7k4GK3N2ODDR0qsVuSAZA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aVyAOeq12wyhWCE2hNmDpwdVTT8ZNcxmbIQciabib1oCZibDrOtfoNlKKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aEfktibsaPibCOibxzCOOH4iaDZIC5c9lxiaicm9UaiajTIz7VaGeHA5bQBbTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqttBqFBufy1WlOlonvRic8aqVibttCb12w6GUbS3iamMTPZWJcM3OomKEBic2mmcAL3jgtrPyaLZwovA/640?wx_fmt=webp&from=appmsg)

当年，Midjourney让世界见识到AI画师的潜能。

后来，Stable Diffusion把开源的火炬交到社区手里。

再后来，Gemini显露多模态的雏形，却始终差点火候。

如今，GPT4o原生多模态横空出世，用几乎成熟得可怕的质量，宣布了图像生成的新纪元。

如此高的生成质量，如此丝滑的多模态对话，已经不是能不能用的问题，而是能否彻底改变现有的AI绘图生态。

以及人们，做AI绘图的交互方式。

这是AI时代，也是我们的时代。

最后，说句题外话。

今天除了GPT-4o原生多模态上线，同时也是Gemini 2.5 pro发布。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aVfWMOu8kmaYqaYnRI4jjLKqwqic3MpqQK1wv2s1pou2mXHibFbufMpMQ/640?wx_fmt=png&from=appmsg)

然后，当4o发了之后。

我的X上的时间线。。。

就几乎全部被4o出图攻占了。

Gemini 2.5 Pro这一次，还是没抢过GPT-4o。

1.5 Pro被Sora淹，2.5 Pro被4o淹。

真的，听哥一句劝。

要不然以后咱就别发Pro，改个名叫Ultra吧。

你说好不。。。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
