---
title: "一手实测Nano Banana Pro后，我总结了8种全新的超神玩法。"
发布日期: 2025-11-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647677104&idx=1&sn=d0524cabe68e30732bf05b1602190109&chksm=f1dfc2ec517e28496c2f89cd2497eea1dd41e4091a477853b23d17a13709ec5be5f7bd28c917"
---

## 摘要

**1) 一句话总结**
基于Gemini 3构建的Nano Banana Pro模型在4K图像直出、中文文字渲染与逻辑推理能力上实现大幅跃升，实测可高效支持漫画翻译上色、海报排版、知识图解等8种创新应用场景。

**2) 核心要点**
*   **模型基础能力**：Nano Banana Pro（底层为Gemini 3 Pro Image）支持4K分辨率直出与自定义图片比例，其中文文字生成稳定性和多模态知识推理能力获得巨幅提升。
*   **漫画处理一条龙**：可通过简单提示词，直接对黑白漫画进行外语翻译（如日翻中）、精准填字、上色，以及转换为3D毛绒、马赛克、铜制浮雕等不同材质风格。
*   **海报与排版设计**：具备极强的中英文本生成能力与排版审美，能够精准生成包含大量清晰小字、复杂字体的电影艺术海报及赛博朋克主视觉图。
*   **知识解说与图解**：依托强大的世界知识库，可生成带有详细且清晰中文解析的复杂结构图（如应县木塔结构、苏绣工艺、赛博义眼拆解）。
*   **数理逻辑与解题**：具备直接解答数学/逻辑题的能力，并能将完整的解题步骤以“草稿纸手写”的视觉形式准确绘制出来。
*   **长文转白板图**：支持将长篇学术论文或长达数十页的PDF文档（如Llama 3模型文档、DeepSeek-OCR论文）直接转换为详细的白板板书照片。
*   **游戏UI与场景渲染**：能极度稳定地生成各类游戏（如潜水员戴夫、FPS、MOBA）的UI界面及聊天框细节；在产品渲染中，能将带有中文的产品（如CD）置入各种复杂光影场景且保持文字不变形。
*   **特色艺术风格**：对“3D拼豆”等特定艺术风格支持极佳，可稳定生成精致的手办、动物拼豆图及配套色卡。
*   **使用渠道**：目前可在Gemini中通过“选择思考并调用banana”来使用该模型，或通过Lovart.ai平台进行体验。

## 正文

万众期待的Nano Banana Pro，终于终于终于来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibNcZdibpu0iacXm1U57Ih4CNI6EcscNym8WibibvqzKhib7HMbdmze4ASAQA/640?wx_fmt=png&from=appmsg)

虽然没有给到Nano Banana 2的命名，只有Pro，但是这次的进化幅度，依然还是超了我的预期。

深夜里，我的各个群都沸腾了。

图一直在发，测评帖一条接一条，催我更新的朋友也不少。

而这次的这玩意，不仅可以直出4K，可以自定义比例，模型的知识推理能力和中文文字稳定性，也得到了巨幅的提升。

在玩了一个通宵后，我总结了8种非常有趣的玩法，毕竟时间还太短，肯定还有更多有趣有创意的玩法是我没有发现。

所以，我也只是来做一个小小的抛砖引玉。

希望对大家有用。

话不多说，我们，开始。

一. 漫画一条龙

第一个玩法，也是我觉得
Nano Banana Pro
最NB的玩法，就是给黑白漫画，翻译，上色，换材质一条龙。

我用的原图来自鬼灭之刃。

不知道有没有人和我一样，非常不喜欢看黑白漫画，感觉看起来贼费劲。

而且不是中文版，更费劲。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibKlnb8RreqGl7sibPjzUp8SdNltEIEzOlBhYBrXH2UpgbGkUicrsWyQUw/640?wx_fmt=png&from=appmsg)

这时候只要略施小计，给NB Pro一段非常简单的提示词：
把这张图变成彩色，翻译成中文并放在对应的对话框内，其他保持不变，最后以图片的形式给我。

漫画就会从日文变成中文，从黑白变成彩色。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibAerVo3IOdYJYIMCqr5p6FtIduEjvoUqdwpO6zAiczsx7pIgjPWmVQhw/640?wx_fmt=png&from=appmsg)

舒服多了。

当然，你也可以，自己做黑白漫画，翻译，上色，换材质一条龙。

比如我又生成了一个中文的炭治郎和海绵宝宝一起玩的日文漫画。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibZt7H1cFPRoUTE1w1lXqQhRkLWKyHibaLYXvH8ADSpYd2tRqPOsyY4NQ/640?wx_fmt=png&from=appmsg)

再把他用上面的Prompt，转为，彩色中文漫画。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibBnfbpeiaUMmziaHmtqwcbsffMIjMpnCTYJxmUAOgiarXpJPyib1FZCrtsw/640?wx_fmt=jpeg&from=appmsg)

还能不断的换风格。

Prompt：把这个漫画变成3d毛绒效果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibJkZhh6tkMYOSxB38rUt1SvCt6SApS5jVdkGZ9Su3TnWt8g3fgibGQMQ/640?wx_fmt=jpeg&from=appmsg)

Prompt：把这个漫画变成中世纪石头拼成的马赛克风格，有一种神圣感。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibZGsOGE7bsQRL83lV4r1c3tue7IvCnp1osDKeYgq6HQlnS3pYJAWTibA/640?wx_fmt=jpeg&from=appmsg)

还能换成，铜制浮雕材质。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibgonQPPstOL9faYrZyZ4I9vPsn5yJgtxM9bibXpfyK2PicicicrtthYEIuA/640?wx_fmt=png&from=appmsg)

特别好玩。

二.海报设计一条龙

看完第一个玩法，你们应该发现，NB Pro现在的文字能力已经很NB了，尤其是中文。

不再是当年那个中文字让我看出恐怖谷效应的NB。

所以我直接测了一下它做海报的能力。

英文版不用说了，强是应该的。

提示词：
A retro movie poster for the film 'Robot Dreams', flat illustration, mid-century animation style, bold outlines, warm retro color palette. Scene: Anthropomorphic dog and boxy blue-grey robot walking hand-in-hand on a sandy beach at sunset, facing a dilapidated amusement park pier with a large ferris wheel and roller coaster. The sky is deep orange. Prominent typography with the huge bold title "ROBOT DREAMS" in deep orange at the top center. Small festival logos at the top edge, and small white review quotes placed around the characters. Nostalgic, melancholic mood.

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwibhy5tlaCPibqibtAC2Tp9E0NKVgdicfagQKdfgl8OujibxykJhLpoqNqoAw/640?wx_fmt=jpeg&from=appmsg)

中文能力，文字能力和审美同样是顶中顶。

提示词：
电影《死亡诗社》艺术海报，画面主体用艺术抽象的方式展现电影中的经典一幕，主标题用流动的艺术手写字体“死亡诗社”，下面附上英文名“Dead Poets Society”，笔画纤细，拉丝，灵动的曲线，有质感，副标题为“Captain my captain”,用极细无衬线小字体。另外附上电影海报需要的其他小字，以增加质感，文字清晰可辨认。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibCJHvYBR4cFcNiac19ymoh9Ab5kMjcIbgIJdhB5YbuER5NEPjNOejc1Q/640?wx_fmt=jpeg&from=appmsg)

提示词：动画电影《天书奇谭》艺术海报，中国山水画风格，工笔画细节，高级感，水墨晕染效果，传统青绿山水色系，连绵起伏的云雾缭绕的青山。山脉呈递进透视。有红色的仙鹤群点缀其间，营造出奇幻、磅礴、大气的意境，柔和而明亮的光线，高细节，电影级品质。主题为手写艺术字体“天书奇谭”，加入电影海报需要的其他小字以增加质感，全部文字清晰可辨认。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibJbpCXyjT4agLShPr4ftDoMtlF5SzHoL7HZqFXAa7Q99b7TZK8U6UMg/640?wx_fmt=jpeg&from=appmsg)

不说的话谁能看出来这是歪果模型。。。

可怕。。。

而做一个中文的超多文字的赛博朋克主视觉，也是稳的离谱。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibCuLm8y7zEWataOQKtyibLVbWLlKoJ12aZ8SZ5PmA9HsQPm5HUS1HACw/640?wx_fmt=jpeg&from=appmsg)

三. 知识解说图

因为Nano Banana Pro其实是基于Gemini 3构建的，它的真正的名字，叫做Gemini 3 Pro Image。

所以，既然是一个多模态模型，那他的世界知识和推理能力，自然不会差到哪里去。

Nano Banana第一代就已经让人感受过它的推理能力之强了。

而这一次，得益于它的文字渲染能力的巨幅加强，你甚至，可以让它做知识解说图。

比如，生成一个应县木塔的结构解说。

Prompt：
为我生成西安大同应县木塔的结构解说图，附上一整段详细中文，中文字清晰。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibMCvyxz14TzfBGomTiasoHBF1PE8tLVtibvb9kLE6icgdo5fPI5ZxQA9Hg/640?wx_fmt=jpeg&from=appmsg)

稳定的让人害怕。

还有，苏绣工艺。

Prompt：
为我生成苏绣工艺的详细解说图，配上详细的中文知识解析。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibkicibtNERN0ichQUAliaeYMYGFJDw1c38olBbvg6bMjYwaTFftqMnhdNEg/640?wx_fmt=jpeg&from=appmsg)

还有一个非常惊艳的，来自好朋友
@雪佬
的一个赛博义眼拆解图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwibgp30uKtNoGdECuLXF2DDeAX9O4UgibF6jws4bOYQJLCZZDmxVssJPYA/640?wx_fmt=png&from=appmsg)

四. 写解题过程

得益于Nano Banana Pro巨强的推理能力。

你甚至，还能用这玩意做题。

不止做题，还能把做题过程给，直接画出来。

比如，这道题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibxGUyH1OZSiaiahQGLyVwcHiaYzdKrc4yvFMDFhOvJFUrumnmIdZNiayAgw/640?wx_fmt=png&from=appmsg)

只需要给一句Prompt：

画一张草稿纸，上面是这道题的解法。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibXqOYwxsoSAnpwv3pyEoqRgSmCGDr0MG204Ho9PO4wcR4VkBQsichjiaQ/640?wx_fmt=png&from=appmsg)

就直接解出来了，还给你画出来了，究极离谱。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwib9x0ycyU8zVgaibm9CSK0le3XAFNY4IlROM6ibEhb6tpIHLK9PWErn4Tw/640?wx_fmt=png&from=appmsg)

真的，就无敌。

五. 论文转图片

X上一个大佬发现的神奇玩法。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibTiaZFIywdlicI004jauHU9DojxUoDDzwHUHVpV2JnCGu8McMc364QfzA/640?wx_fmt=png&from=appmsg)

将论文或非常长的文章转换成详细的白板照片。

不知道为什么，看到这个玩法，我第一个想到的，就是DeepSeek-OCR。。。

比如直接把今晚Nano Banana Pro的官宣，转成一张白板图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwib49GsPic2bN7MLmTiaLU5HjAoiaia1iaH0ykahjvSRY8a4d8yRv4M1ANFmiag/640?wx_fmt=jpeg&from=appmsg)

还把
Llama 3 模型的92页PDF，也转了一道。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwiblpCfMh8j8CMicxJoLkQQnrRckYN6K3ZCDgN9GSlYtiadA8P7Gxh1vxlQ/640?wx_fmt=jpeg&from=appmsg)

我也随手把DeepSeek-OCR的论文扔了上去。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwibg3NSfGNvwzYck7U20elrRy8gnrwr1tDey3QUk6jRibjxrNfREIMqO1Q/640?wx_fmt=jpeg&from=appmsg)

很秀。

感觉，老师的板书都可以被替代了。。。

六. 生成游戏界面

这次Nano Banana Pro，在生成游戏UI界面上，真的是格外的稳定。

你真的不知道，这玩意吃了多少的游戏素材。

比如生成一个潜水员戴夫的游戏界面，深海探索，遇见巨大未知生物。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibeDP4xyKuibS3ww4yloZv4nkz1WkckLY0ubBLjjOlHC92M7v6E3Dicf0Q/640?wx_fmt=jpeg&from=appmsg)

又或者，生成一张《使命召唤》风格的第一人称射击游戏截图，但是是跟柴犬cheems交火。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibL7qjnaYibKxdIBU4NibDBeM4q14e5NVrQPsla1wTGic7pyRwfzxDnjyNw/640?wx_fmt=png&from=appmsg)

还能生成，英雄联盟的胜利结算界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwib5icINzYILwLtasiaibEKSqjlorY0a0icIngicboYIu6ft8dgIhrOKVOwkYQ/640?wx_fmt=png&from=appmsg)

甚至，因为Nano Banana 2的超强的知识推理。

你还能生成Moba游戏里面，互喷。

生成王者荣耀游戏界面，玩家在左下角互喷。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibyibJia1hH6mLgJnjicrHAtpvk6xicNpAGoshXTJibmE3s4YemFzAiak3f8yQ/640?wx_fmt=png&from=appmsg)

英雄联盟游戏中的界面，祖安互喷聊天。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibIWibL699Nn8DsiavspFibdbe9ia8f6Chxj0usn6tCJndD6tbMkYJ9ZSXOQ/640?wx_fmt=png&from=appmsg)

这时候你就能发现。

在Nano Banana Pro的世界里。

英雄联盟喷人的杀伤力，好像比王者荣耀差了一大截。。。

七. 产品渲染

得益于这次文字能力的究极稳定。

所以改改文字，基本都是啥非常小的小case了。

而且，对于产品大量中文的一致性保持，也效果极佳。

比如，一张周杰伦的，CD。

《范特西的幻想》。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibTibhUnadpVXiaIqU11zeQmAzhlniaJXlqRHMAU3picib1BSLkH74yooib90A/640?wx_fmt=png&from=appmsg)

我们可以把他，放到任何场景里面去。

比如，Promtp：

90年代台北旧唱片店的木架上，周围堆满了黑胶唱片和旧磁带，温暖的钨丝灯光，背景有霓虹灯招牌的倒影，空气中有尘埃飞舞。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibmVliadXHYvedibicDcJpwmASgznr8SGLXc4Jf92kvJFKFPHKuGiaMmFarw/640?wx_fmt=png&from=appmsg)

又或者。

CD悬浮在半空中，周围是破碎的玻璃碎片和漂浮的时钟齿轮，呼应“幻想”与“时空穿越”的概念，电影级布光。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibgicYE2Hn5blfjKZY13icVelxOC06ibniaJAwyicMWWsxOKvpZUd9CAXn9aA/640?wx_fmt=png&from=appmsg)

将CD放入CD机中能看到碟子全貌，旁边立着CD盒子，旁晚夕阳场景，木桌上，有窗帘落下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwib860wXG2qbEO3aEQgx7lMfJ0wB4FyCVciauWPw7mdWdBeDqicsH8NxxQQ/640?wx_fmt=png&from=appmsg)

将图中的产品放置在泰勒斯威夫特的演唱会当中。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibKT69Uiawiaq0BFPiaLhCVqnmJhpcztSe7HLlDlQkIZznZDqkJ1Db4X5Vw/640?wx_fmt=jpeg&from=appmsg)

几乎没有任何变形，所有的小字都稳的一笔。

秀的离谱。

八. 拼豆

再生图的过程中，我无意中，发现了有一种风格，Nano Banana Pro支持的特别好。

就是拼豆。。。

真的，超级稳定和好看。

Prompt就非常简单的一句：

3D拼豆，盒子里装着精致的手办。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0Ddjjwibjc8Ejv9KyZtqMS4MHygTCdOkkYEJrcG7W1LibhYITTlmJky0Qq0YEfA/640?wx_fmt=png&from=appmsg)

还有，拼豆小狗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibnZm2GTic57MLSOQ8xC4oCHasBQyZyq80G9W9Sr9umTxOveUhMfHMBSg/640?wx_fmt=png&from=appmsg)

甚至，还能拆开，变成拼豆色卡和小猫。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibzsX3oTs05oSTTx1X99waTShWvsyIulwChljIUeoQAZxcSPpFXBSj1g/640?wx_fmt=png&from=appmsg)

我就问你，这么可爱的东西，谁能不喜欢啊。

写在最后
Google真的这周让我燃尽了。。。
Gemini3和Nano Banana Pro，真的结结实实的熬了两个通宵。
但是我想说，好产品，值得。
目前在Gemini上，选择思考，然后调用banana，就是
Nano Banana Pro模型了。
当然，你也可以去Lovart上玩，他们老传统了，新模型发布，基本就是3天
免费随便玩，只是尝个鲜还是非常香的。
网址在此：
https://www.lovart.ai
现在来看，Google这家厂子的底蕴。
还是太恐怖了。
希望这篇文章对大家有用。
玩的开心。
当AI越来越强悍的时候。
制约我们的，真的就是我们那。
贫瘠的想象力了。
Chiyo、
姜糖
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqBFbfDkicw1Oiaarj0DdjjwibDqh97TOHR29gvQJcORfll1BvKUGZoc0o8FKKCXvGE9iaWWXyytozCcA/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
