---
title: "火爆全网的《卢浮宫小猫》AI视频万字创作心得分享，这可能是他们最毫无保留的一次。"
发布日期: 2026-01-16
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678972&idx=1&sn=d42663a7ea0cf4881ce4c5f5fdcb7bb6&chksm=f134e839f1d250e7cfaba9ddda4d63505e7dd436bf084bf33cbd310ea50124b6e64618f376c1"
---

## 摘要

**1) 一句话总结**
数字艺术家海辛与阿文详细拆解了为浦东美术馆创作《卢浮宫小猫》AI宣传片的全流程，涵盖从选角定调、分镜设计到多AI模型协同执行的具体技术决策与实操经验。

**2) 核心要点**
*   **项目背景与选角**：为浦东美术馆的卢浮宫大展制作两支官方宣传片，主角从最初设定的“奶牛猫”改为“法国白猫”与“上海橘猫”，以适应双片结构、提升画面亮度并延续橘猫的城市代言属性。
*   **视觉定调**：确立了“镜像”核心视觉（如卢浮宫与浦东美术馆的上下倒影），放弃了早期的分屏方案，以获得更透气、高雅的电影质感。
*   **音乐制作**：使用Suno生成以钢琴为主的配乐，并通过设置50%的“音频影响度（Audio influence）”，在保留基础旋律的前提下为上海篇成功变奏出加入萨克斯的爵士风格。
*   **分镜与叙事策略**：开篇要求高信息量（3个镜头内交代海报、主角与环境）；刻意规避蒙娜丽莎等过度大众化的展品，且画面中不出现人物肖像，以免分散观众对猫的注意力。
*   **复杂画面执行路径**：对于复杂创意（如“猫在水中的倒影是孔雀”），放弃纯AI文生图/视频，采用“手绘粗草图 -> Photoshop合成透视与关系 -> AI模型统一风格与动态”的拆解工作流。
*   **美术与生图工具**：主力生图与改图工具为Nano Banana Pro与Gemini。利用AI实现了批量修改主角颜色（黑猫改白猫），并能仅凭两张随手拍的照片生成精准的16:9展品正视图。
*   **合成与后期技巧**：总结出“先裁剪再生成”和“先将主体抠至纯色背景再换场景”的技巧以提高生成成功率；并推荐使用Photoshop的“协调”功能快速统一合成物的前后光影。
*   **视频生成工具**：主力视频模型为Flow（VEO 3.1），利用其涂鸦标注功能控制运动轨迹；同时配合Luma Ray3进行高质量合成，Wan 2.6保持动物角色一致性，以及利用上一代模型（如即梦3.0）生成幅度更可控的落版微动效。

**3) 风险与不足（基于原文明确提及）**
*   **复杂指令失控风险**：将核心创意直接交给AI“一把梭”（如直接输入复杂提示词生成视频）极不靠谱，会导致主体变形或逻辑错误，必须分步骤迭代。
*   **多图参考的清晰度与稳定性缺陷**：测试市面上的视频多参产品后发现，稍微改变元素画面就会模糊，且难以保证特定展品、猫等多个稳定主体的不变性。
*   **特定超现实动态的生成瓶颈**：AI难以处理某些特定的非现实物理动态，例如让“蝴蝶酥”飞起来时，AI会强制将其变为真实的蝴蝶，导致该类创意最终被废弃。
*   **元素抢戏与逻辑审查风险**：画面中一旦出现人脸，或使用写实地图/航线转场，极易转移观众注意力并引发对合理性（如地理位置、距离）的过度关注。

## 正文

昨晚，超级超级开心的邀请了我的两位好朋友、也是我的两位偶像海辛和阿文，来我的视频号做了一场直播。

来分享他们关于他们的AI视频作品，《卢浮宫小猫》的全流程创作分享。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rsbiakFLPKyBa7x3zCo4gFfWrBQ81rUBczpVSW1XoiaIE7EmaPuIQUsNA/640?wx_fmt=png&from=appmsg)

听完我都惊了，我说，你们真的啥都往外说啊，真的是，一点也不藏着掖着，全都就这么分享啊。。。

真的，这场直播，实在干货太多了，我也不想总结了，因为干货太多了，我花了一夜时间，把这篇文字稿做了详细的整理，和他们的分享PPT做了一一对应，然后经他们授权以后，分享给大家，当然，文章最后，也会附上海辛&阿文的PPT文件，方便大家继续收藏学习，说实话，阿文的PPT，也是一个看着就赏心悦目的艺术。

希望这些宝贵的经验，能对我们的AI的使用、能对我们的创作，有一些激励。

毕竟，像他们这么强的还愿意出来毫无保留的分享的人，真的不多了。

一切的开始，先看片子吧，这也是一切的起点，这片子，当时真的让我惊为天人。

艺术，这TM的就是真正的艺术。

这场直播，就是这个片子的两位主创，海辛和阿文的关于这个《卢浮宫小猫》的毫无保留的分享。

以下，为直播实录，也均为海辛&阿文口吻：

————

大家好，我们是海辛和阿文。我们是数字艺术家，也是一对和AI一起创作的搭档。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rYNZCU2Zfsl3ztjHTlDV2FRQ90PPLxb2tjm7Gq0k9xkmPibebytTGJgg/640?wx_fmt=jpeg&from=appmsg)

今天想把我们最近为浦东美术馆制作的一组官方宣传片，从创意到分镜到AI工具执行的全过程，做一次尽可能毫无保留的分享。

我们之前做过两部比较有名的短片。第一部是在去年年初，北京日报邀请我们为北京制作的城市文明宣传片，片名是“故宫猫上班记”。这部片子完成后在互联网上传播得很不错，也带来了很多机会，包括有机会去到大阪世博会展映，同时还去到 TED 2025 的主会场，作为第九单元的开幕影片进行播放。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rkPExPwzazVgCboBeMOouHupQM27BaCTk8NMB36o7a13u51btR2dJEw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rjmTVEqUYFNTnuaJiaJWE7RlgianKjqbRfCCMUVSogEKr0B2Geg1BGH9Q/640?wx_fmt=jpeg&from=appmsg)

那次TED的第十一单元里Sam Altman也做了访谈，所以我们也算在同一个活动里同台过一小段时间，这是我们非常荣幸的时刻。我们从来没想过自己的影片会去到一些我们自己都没去过的国家。

第二部是今年为上海浦东做的城市文明宣传片，延续“小猫”主题，片名是“文明小猫游浦东”。上线后有一些小的波澜，包括上海发布、浦东文明等一系列官方账号的转载，数据也都不错。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rgFCmliciclndJ3T24TbS7a0LOZCPwcCLv5JTdcgGT4icf5IiaGulnNXHqw/640?wx_fmt=jpeg&from=appmsg)

在线下它也登上了陆家嘴地铁站地下通道的超长屏，也上过正大广场对着东方明珠的超级大屏，在陆家嘴非常核心的位置轮播；东方明珠下面的 12 连屏也会时不时播放。我们还拿到过一个“互联网优质传播作品奖”，由上海市委网信办颁发。我们一直有一个和小猫有关的系列，也可以开玩笑说，我们做猫确实是专业的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rJibRIrqx1Fls8krkBzrpocZYAMBegmTQNfic07RBxYQDoMaISau6Hbvg/640?wx_fmt=jpeg&from=appmsg)

年底浦东美术馆找到我们，他们要在上海举办一次卢浮宫官方大展，也是上海第一次相关主题的大型展览，希望我们做官方宣传片。美术馆希望出两支短片来覆盖较长的宣传周期，大概会持续一到两个月。

我们最终交付的是两支片子。上半支讲的是“来自法国的小白猫来到上海”的故事，同时也为下半支埋了彩蛋。

下半支讲的是“浦东代言橘猫去浦东美术馆看展”的故事。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r9FVuCzqOE5KSfzIj5Gm5I2wtJvsbHrMZiazR1Ka8kFeOibuq2hH4PAiaQ/640?wx_fmt=jpeg&from=appmsg)

两支片子都围绕实际展品来做叙事设计。上半支围绕的是这次来参展的孔雀纹样盘。下半支围绕的展品是“赛诗会诗版”。在下半支里我们也把音乐做了重新处理，加了萨克斯，做了一点爵士变调，让它更像上海的味道。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rgzU4MeiaoMZZkffwia0WR3ejoYYFHQLB7OgS60qxf0FAJiaQfa5NCXwyw/640?wx_fmt=jpeg&from=appmsg)

片子发布后，在各个平台都有传播，美术馆官方视频号后台数据也不错。我们自己的账号收到了不少私信留言，有观众说因为看了这两部短片才决定去看展。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r0H7iacOW41l3wXcW5HjcCVZLAEge5JBP3JXVvl0MjmVf3LKnibJdAYCg/640?wx_fmt=jpeg&from=appmsg)

线下也有播放场景，例如外滩相关的大屏会循环播放，预计会持续到明年 5 月。

接下来，我们想跟大家分享一下我们的全创作流程和一些心得，希望对大家有用。

一.选角

我们第一个想分享的点，是选角，以及，我们为什么最终是一只白猫加一只橘猫。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r3MzHUvveygvegx8kRADJOtok74hFlsowrSzOicEGgm3KjeC9l4Y51hw/640?wx_fmt=jpeg&from=appmsg)

虽然我们决定继续以猫为主题，但猫本身其实也有很多讲究。最开始，我们从浦东美术馆的主题色出发。浦东美术馆整体黑白为主，所以我们第一时间想到的主角是一只奶牛猫。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rRuUZ94jsgahWO1QUUbgFyCueeSWIMwh0KzqMnQUoxyiaGhj8RE6iaGNA/640?wx_fmt=jpeg&from=appmsg)

最初版本的故事和你们看到的成片完全不一样。我们最初选的核心展品也不是孔雀纹样盘和诗版，当时选的是一幅油画。我们设定那只奶牛猫原本在画里国王脚下睡觉，后来美术馆员工搬画时不小心把猫“抖下来”，猫开始探索卢浮宫，最后在窗边看到展品随着货车离开卢浮宫，准备运往上海。奶牛猫决定踩上滑板去追车，路上发生很多惊险的小事件。我们当时做过 demo。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rztdSU9C7bC0oP9RKhicervBIFwwriaCttpaLOxCrrCReoLJvHcK2mnag/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rU0cMZstt4AKlEfPo54bcMnU9WIlSZSGzsPFn0rfR3dEKyWPH4slWicw/640?wx_fmt=jpeg&from=appmsg)

后来弃用这个方案有几个原因。最直接的一点是宣传期较长，美术馆希望出两支短片。如果讲奶牛猫追车，这段情节切分后第二支会很像公路追逐片，片子的调性会被带偏，也会消耗大量精力讲追车过程，和“美术馆官方宣传片”的气质不一致。所以我们把奶牛猫方案整体拿掉了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rHnuibfvT3iaLL3OSbib657mFupqkOLxNHK9Wc4MBoEaEibDbTvfDuXRuwg/640?wx_fmt=gif&from=appmsg)

美术馆需要两支短片后，我们的第一个直觉方案很简单，把奶牛猫拆成一只白猫和一只黑猫。再继续往下推，我们又发现黑猫在成片里会偏暗，不太吸眼球。我们希望主角“本身更亮”，能更快抓住观众视线，于是从“一黑一白”调整成“一白一橘”。同时橘猫也能呼应我们上一条片子里橘猫作为上海的代言属性，所以更适合做上海那条的主角。法国那条就用白猫更合适。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rSSLR5sWyibTFJK3vFVPtf40KRGSy7DZicibb4e1lia4GticSXjGKpYxVoTQ/640?wx_fmt=jpeg&from=appmsg)

二.定调

第二个点，就是定调。

先定画面与音乐，再往下推进所有分镜。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rcHxRuNhb7E6jPXypclApfFvZhqqmOPbCSes9RUVgFByYYoQQseY5bw/640?wx_fmt=jpeg&from=appmsg)

我们在做影片时，有个非常必要的操作就是先决定“影片调性”。这里的调性包含两部分。第一部分是核心画面长什么样，影调是什么感觉。第二部分是音乐。对 TVC 来说，音乐能非常直接地告诉观众应该怎么感受一段戏，也会反向指导剪辑节奏，决定镜头是快剪还是慢剪。

这个项目里需要处理的信息很多：浦东美术馆、卢浮宫、伊斯兰艺术、上海、巴黎等。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rzAfKicch6PwkQf2cMUGmGk6pIkf0ECUrvwbQB2loTXTplDDGd5Q3h7A/640?wx_fmt=jpeg&from=appmsg)

我们最早注意到浦东美术馆的“镜厅”，觉得镜子这个概念很适合做结构，卢浮宫和浦东美术馆可以是一种镜像关系，上海和巴黎也可以是一种镜像关系，两只小猫也可以是一种镜像关系。于是我们最早想做“分屏动画”，一边讲巴黎，一边讲上海，最后在浦东美术馆相遇。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r0NZISCN6EMW4tpcTibEVy9zpoWClYSX2gPyep6JYWkia7xYBLy7IYuHw/640?wx_fmt=jpeg&from=appmsg)

我们做过一些早期探索画面，例如上面是外滩看浦东美术馆，下面是法国卢浮宫。也做过两只猫在各自桌面看海报的构图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rfmYHdLSMfCYOoRUdLZicrd375xV6ic1AiaLW9DrDwOhbswfOZeLtgQpEA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rvHebs3Bnt7BttsWPw7yXaNI8I5IZmop50Iss1EuvD2AzIWNOAo1OUw/640?wx_fmt=jpeg&from=appmsg)

后来阿文基于这些画面做了一次“暴改”，把“卢浮宫”放在上方，“浦东美术馆”作为倒影放在下方，画面非常透气、有电影质感，整体气质高雅，光影真实又敞亮。另一组画面也做了优化，把“海报”从桌上挪到建筑本身上，让环境信息交代更自然。

我们就据此确定了整支片子的画面氛围。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r9GvfX5ppZUVwclf1gYcNLTXDRf9UC38ibVpgctM1c5EdC4I5luJMFQA/640?wx_fmt=jpeg&from=appmsg)

三.音乐

第三个点，是音乐。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rNcs3ueAopB2ATUiaKCWkuqIGHBspk6WkDGWlBhibYVLlK83ypf0jm7Lg/640?wx_fmt=jpeg&from=appmsg)

我们一般把音乐放在很前期做，因为音乐决定节奏，节奏决定镜头数量和剪辑策略。这个项目里，我们决定主乐器以钢琴为主。原因有两个。一个是我们在镜像画面里喜欢“水波纹”的倒影质感，它会让我们联想到钢琴很干净的和弦。另一个是镜厅的格子结构也让我们想到钢琴键盘的秩序感。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rDzubibXgfiaWUvhD94LliaJicqwVxCC3jpBExICG9gPe3KWVAiaPckXwwvw/640?wx_fmt=jpeg&from=appmsg)

叙事类短片的配乐需要“弧线”，它不能像白噪音那样从头到尾同一个节奏。故事一定有起承转合，对应音乐也要有对应的结构。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5raDsn2XQ51xKzQ1DTdniaMXLd46BtvtmnBRwOklSLQof8xF1vP7TMzmw/640?wx_fmt=jpeg&from=appmsg)

我们用Suno来做，原因很简单，它生成的音乐好听，同时可以对片段进行很细的控制。你能规定每一段旋律的长度，也能在某个时间点明确告诉它要出现怎样的情绪，比如突然转折、紧张、悬疑等。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rK4BIsRq0m2BphT28zXCI9XYDVic7ojibMuflAliasYTLoibafV7xkItjxg/640?wx_fmt=jpeg&from=appmsg)

我们这次的音乐结构大致是：开篇用非常简单的钢琴和弦慢慢把观众引入故事。接着是一段顺着讲主角与环境的展开。之后有一个转折段，制造小挫折来吸引观众继续看。再进入第二段旋律，承载主角行动与高潮。最后是收尾，我们希望回到一个很漂亮的钢琴和弦，所以会专门补一个 outro。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rS10E8sbSYQF1Y2BxJIH16Uto0dKazqYXQmZd4tzxcshEqIoCxibIT0A/640?wx_fmt=jpeg&from=appmsg)

Suno 的一个优点是你可以对不满意的片段无限重生成。我们法国那条音乐做完后，把整首导出来再上传回 Suno，让它在保留旋律的基础上做上海那条的变奏。我们把音频影响度 Audio influence 开到 50%，这样能保证基础旋律不变，再告诉它加入萨克斯，做成老上海爵士的感觉，它就会在原旋律上做很合适的变调。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rvDdVebGc1P5dL6vOG15HzqowNRGyT6YVibHADia6sib3HSfbSgmjL31Yg/640?wx_fmt=jpeg&from=appmsg)

它给过一个比较夸张的结尾，我们最后还是改回原来的结尾，让整体更克制。
另外，我们也会以我们家猫尼卡的身份把这些配乐发到网上。尼卡算是“咪星上的传奇音乐人”，里面收录了我们为客户做的一些 TVC 配乐。
四.分镜
接下来，就是分镜的方法应该怎么做。
我们个人审美很强烈，所以这里更多是经验分享。
我们对开篇分镜的基本要求是“信息量高”。
尽量在第一个镜头就暗示观众故事讲什么。举例来说，“故宫猫上班记”的第一个镜头是猫睁眼，瞳孔里是故宫的影子，很快就讲清楚“猫和故宫”。“文明小猫游浦东”开头是猫推开上海地图，很快就讲清楚“猫来上海旅游”。
这次卢浮宫小白猫那条，我们希望在三个镜头内讲清楚故事。第一个镜头让猫看海报，把“展览海报”这个关键视觉塞进观众脑子里。第二个镜头用特写介绍主角是谁。第三个镜头用全景交代环境，同时做“卢浮宫倒影浦东美术馆”的镜像关系。
分镜还要有节奏感。节奏感很大程度来自景别变化。全景接全景会让观众感受很单一，所以我们会在全景和特写之间来回切，形成一种收放感。开篇镜头如果信息量太大，观众第一秒会不知道看哪里，我们会用简单动画引导视线。上半支用“拉开帷幕”的方式，下半支也用了比较经典的开场感设计。
然后接下来是故事第一段，也是比较核心的一部分，也是我们自己非常满意的一组分镜。
然后这组分镜它的目的就是来讲是白猫从卢浮宫走出来，喜欢上孔雀纹样盘，然后发生一段奇幻想象。
这个序列需要讲清楚两个信息：主角在卢浮宫，主角喜欢孔雀盘子。
第一个镜头用卢浮宫的经典展品来建立地点。我们选择了胜利女神像，它也是卢浮宫非常经典的雕塑。我们刻意不选蒙娜丽莎，因为过于大众熟悉，会显得太俗。构图上我们也不会把镜头重点只放在雕塑上，因为我们希望观众关注的是猫。所以我们把雕塑放到背景里做点缀，用一个极端仰拍构图，让前景的白猫在画面里占更大体积，强迫观众把注意力放在猫身上，同时又能一眼识别“这是卢浮宫”。
第二个镜头开始低调引入伊斯兰艺术。我们参考过一个在 Instagram 上很有名的艺术家，他的作品常见做法是拍日常生活景象，再让其中的符号动起来。
那种感觉很妙，因为它奇幻，但又像现实生活里可能发生的事。我们一开始做过更夸张的版本，例如猫划过时整个场景都翻出花纹，后来觉得动静太大，不像生活里会发生的事，就改成更克制的定机位方案，让背景花纹在猫走过时细微地动。
我们尝试过很多版本：魔法阵一样的花纹，镜头摇下去进入一个伊斯兰艺术世界，花纹从画面里凸起等。后来我们意识到“有意思”还不够，还需要情绪增量，于是用一个对比设计：开头用压抑的极端俯视，镜头运动到尾帧时进入一个巨大的开阔空间，让观众产生豁然开朗的感受。最终镜头里两侧的图案像传送带一样动，把猫带入一个开阔的展品空间。
我们还做了一个取舍：画框里不放人物肖像。因为画面里一旦出现人像，观众会不由自主去找所有人像，注意力会从猫身上被抢走。我们希望观众跟着猫走，所以把容易抢戏的元素尽量拿掉，让表达更含蓄。
在这个镜头的尾帧设计里，阿文做了一个非常高明的操作：把孔雀纹样盘直接放进展品空间，让核心展品在高潮段提前出现。确定尾帧后，我们再回过头重新设计首帧和镜头运动，这样能收敛想象，让镜头更可控。
到了情绪高潮之后，我们还需要继续加一点新的刺激。我们想过猫上去后看到空空间，也想过再看一个展品，但都不够触动。
后来我们想到猫看到一只孔雀，而且孔雀是活的。这个点一下就让我们觉得艺术品像活过来一样。节奏上我们也做了层层递进：孔雀先转头，再转身，最后张开翅膀，把惊喜留到最后一秒。
高潮之后要回到现实。我们用一个很简单的方式：切回猫的特写，好像在想象，再切到一个客观镜头交代现实，猫其实站在孔雀盘子前看展品。观众就能明白，奇幻段落来自猫的幻想。
然后是转折段，它的目标是讲清楚“展品要去上海了”，以及“猫决定进箱子一起去”。
我们采用了蒙太奇和分屏的处理，因为它能在短时间交代大量信息。做这种镜头时，我们会把人物尽量 cut out。做动物片时，人脸很容易抢戏，观众更愿意共情人，注意力会被人带走，所以我们只保留特写和动作，不给脸。
第二段我们原本想拍猫在飞机货舱箱子里发生的事。
我们会在没完全确定情节前，用 Sora 跑一些样例，快速看节奏和构图，找惊喜和参考。跑出来后我们不喜欢，原因是画面不透气，颜色偏黄偏旧偏暗，和我们前期设定的影调不一致。情节逻辑也不顺，因为猫在箱子里本来也看不到箱外展品，展品也应该在箱子里。
所以我们把“箱内偷窥”整段拿掉，把重点拉回核心叙事：白猫陪孔雀盘子来到上海。
来到上海这一段，我们最开始想做飞机从卢浮宫飞到上海的写实转场，也用 VEO 3 跑过。也尝试过古典地图微动画。但这些方案都被我们否掉了，
因为地图会让观众特别在意合理性，例如巴黎和上海的位置、航线距离对不对，这会转移注意力。我们也尝试过更抽象的“火点地图加脚印”方案，但我们不喜欢画面太全，我们更希望观众看到的是画面里占比更大的关键主体。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rYOiar7mUViak7OrA1N41F5UicUdiavEK5h5rb4x8hV9LYvRCzcDW7OxITg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r9LItDaYyYrw4FQcPnP8HST3YCnS3wXmLhfm8tiaaBPpQ9U6ibmQuW5qg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rzTh040J3MTEoicj64p7Cqx304HJjJ4yTdxy4npfosekQib3b3YJebI6g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rDHLiaB6icMOzzJT8zVS3RHOwzcia9cIh4bRXp41Kzyic9msibVic8sexA7RA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5riadJUHcs00M7NoVyJNesTzAJo6Yehf35TtncFDiaq7XZmIA0XVJ1ZOicw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rabskCtBQgJiaWsduc2mog8IhRqlEFcwibBEleZw9JPOqDQ0qOq0rngng/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rmTc8gqrQmEtEhYIibGZ3DlJQoyWciaEIzhCR0OlT5iaJcic0h0CKqq2VMQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r7AaeYvW7ZtyFcbicGckPiaEX9eolHOLebh74f1icJOxcwicvwhdWRTG5Ag/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rl3dibQJzg0ZVlxfSVPPfP8wr1wgoF24SpyNqkjJ56zrBdv4ULUjCkmA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rTt3ygRZ8IXDrSKUFZeOTsdAicxBoUl2pMDODpiaO5Wdo3KEIaCWg5WvQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rQh0q4kVqevg0Cbo54b04Yicc5ZNO1XYWxfjCXr3wPfQh1GqCqDZB9xw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rl9MvyYm7ib839vT7yicUyCAJOeAabmIUktIaLKr9mOJ2gNcSFEYLgCEw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rcichibDhfA9VnT3MOsc6POq3RaVzIWjOpe65x6WbzoLiacLOlzhQR2hfA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5ricCOB6ICctgDpfm1rMY1A0YcoBRuLW8CyxiaibTRmWoagiaygVqicTBibs2g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r9ibicZubyKYiaSHevGjWL6nWM8jaib624CibIPSZm39Ugtd558xhxA89QfQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rekz9RHs2BvNlMscvHNTEQibHKK1kmlQwNKed9nsYgTEzkD6diccE3Ukg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rIM9dXKTNmE5r9PrsHo20dM0681KfJH6CibRGqAN2Dx1VmznevHTPvEg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rrrPibnahJmiaNrOgttMBE2cXWWacjyiaRS4rt6pq2mh2icZ1DlOvxicC0lA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rN1sJJCdM2lFia4BwcLtrGnenw9hhROLia4Yuu344eHlL7vK5Ua17OVww/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r6Fzmc8uPuHelm8HwPBqN3cVIDxibeAHl03ib5Jc8bEfaaVnRrUeRUxnA/640?wx_fmt=jpeg&from=appmsg)

最后我们决定直接在“卢浮宫首帧”和“浦东美术馆首帧”之间做变化，把转场做得更特写、更集中。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rbCicLLUzwoDxVJCZcHibGG9Zvia7OAJJVhQicktsmGjjkN71AUAcFibBDfA/640?wx_fmt=jpeg&from=appmsg)

转场动画我们测试过很多种：像地毯掀开、瓷砖翻转、飞机意向等。最后选择飞机，是因为在转场前后的镜头里飞机意向都出现过。意向连续会让观众看得更舒服，即使中间从写实跳到马赛克艺术风格，也不会突兀。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rEIctvTxHR0SdR7BlricRL48Oz0r6TNZ8AZMaPdBNEctHlU5FPFRb4qw/640?wx_fmt=gif&from=appmsg)

到上海后，分镜更直接：先远到近逐渐看到浦东美术馆，再看到猫朝美术馆跑过去。我们非常喜欢其中一个镜头：猫在水边跑，水里的倒影是孔雀。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rXWkrSmvSfDATHR9ibWXKBHht16koMP9ww4LNV8yd3am3OmaGBCdiaekw/640?wx_fmt=jpeg&from=appmsg)

这个想法最初更“野”。我们希望猫跑的时候能看到很多动物的影子，像孔雀、马、骆驼等，带出一种“伊斯兰艺术都一起到上海了”的感觉。我们用文生图和文生视频试过，都不行。也想过猫心里把自己当老虎，影子是老虎，但这和片子关系太弱，很快拿掉。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rnT0avyDEaRVeYMw79O62PO8KicicqzzwFsNeHQPF76ELFagr5d9cJYOA/640?wx_fmt=gif&from=appmsg)

我们后来发现，这种核心创意直接交给 AI 一把梭很不靠谱，需要拆分执行。我们先手画分镜，决定镜头角度略俯拍，让观众注意力自然落在湖面倒影上。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rRCPevqoL2CbthocF2UnsVVt2ThOSNgsb538rWciccAY8jpGaN7uH3PQ/640?wx_fmt=jpeg&from=appmsg)

构图简化成“猫的影子是孔雀”，和主线关系最直接。我们会先用 Photoshop 合成想要的关系，再交给模型去完成统一风格和动态。整个过程中我们强烈感觉到，手画哪怕很粗，对 AI 理解和对人沟通都更直观。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5ria0ibwMniaiakJJqmiapcO97aFDzH7khWbo1vcQvTCLZf2A8T7s9yZ0DhAg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rA3baIEducdsicMPPzeBJRZ0AcgBOUagZWLI4BgO957x7QMS5AMPFPyQ/640?wx_fmt=jpeg&from=appmsg)

收尾我们再呼应“镜”的概念，用一个更克制、更漂亮的画面结束。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rbEdBJRog2rq2T1eNcicxMPr8HHTFOXD849icJAiaQxGrq2cAEQbpzMQZg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rc3WoHrc4KxrjIV2eckMPvept5ydpyfIuq8r1afW8RjDOh7PoUNibg5g/640?wx_fmt=jpeg&from=appmsg)

这就是所有的分镜了。

接下来，美术的部分交给阿文。

五.美术

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rUQoOnKcoyXKp8icdmg2rCsLoX0ThfSVrJpv9Rwh80vicxRoCIaq3ZRUg/640?wx_fmt=jpeg&from=appmsg)

我（阿文）主要做两件事。

第一，把海辛的手稿分镜转成最终画面。第二，把控整体美术风格。

我们接到项目后第一时间去了解伊斯兰艺术。它是我们平时接触较少的一种艺术风格，但很有特色。掌握一些核心关键词后，很容易做出有异域特色的马赛克式美术。我们在直播里总结过 4 个很好用的关键词，最常用的两个是“伊兹尼克风格”和“马赛克 Mosaic art”。这里的马赛克指 Mosaic art，和像素风 Pixel art 是两件事。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rvibXGAFX4ghia5SXLia38QOwep0P3Wz5ZLgOm7kbUXj7ibiccYSpTvZ3phg/640?wx_fmt=jpeg&from=appmsg)

我们做片子有两个原则。第一眼要好看，第二眼要耐看。在 AI 时代，观众愿意把你的短片看完是一件很珍贵的事。好看在我们这里等于电影感。耐看等于尽可能多的细节和创意细节，美术细节也算其中一部分。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rvMficU2huxBHicsFicCpJqqfZCz2llvulia1cicHIFZwGf5yaBgUcRCvgHg/640?wx_fmt=jpeg&from=appmsg)

大家对电影感其实非常敏感。同一个画面同一个提示词，不同模型出来的结果，你很容易一眼判断哪个更有电影感。所以美术第一步是选对模型。我们目前生图主力基本就用 Nano Banana Pro。改图大多数时候也用它直接文字修改，有时配合 Photoshop。一部分我也会手动细调。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5raAE9SHZRyd5YIYVEI5yqzMfu5KktfXDORcSzcWRpdeMv0btRq2hxcg/640?wx_fmt=jpeg&from=appmsg)

选对模型的价值很像选对乙方。它能把活干好，也能处理很多磨人的修改。举一个例子，有一个镜头我们很满意，但交第一稿后，美术馆说这个镜头要拿掉，因为会显得搬运展品不专业，他们不希望给观众传达那种感受。叙事上我们又需要这个镜头交代猫躲进箱子跟着展品去上海。最后我们用 Nano Banana 把展品“包”起来，让搬运看上去更专业，就过稿了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rNia0zdncup7TIAcxL8U8Yx4Ro80fPT1kRZHYD8zGDNMowxDRricia7X1A/640?wx_fmt=jpeg&from=appmsg)

还有一个例子，画面最后一帧很美，但你会发现注意力长期落在白猫的屁股上，这是换成白猫后才暴露的问题。解决也很简单，让首帧尾巴垂下来，后续走上去就不会出现那个问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rI9ian8k484lCKHGGxuc5NvKnuTSwLpemgnjWNwwn1f0JiaQVmnLGPdYA/640?wx_fmt=jpeg&from=appmsg)

更夸张的是换猫救命。我们中途把主角从黑猫换成白猫时，很多镜头的静帧和动画都已经做完了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r1DJ1R3DcAbQTvicoYV0fic8THmLb7wiaMKmoBMQVsaqf2U1sEubxFnYOg/640?wx_fmt=jpeg&from=appmsg)

听起来离谱，但 AI 真的能改。

那时我们能用的工具有限，只有 Nano Banana 第一代，我们通常在 Google 的 Whisk 里用。我们的习惯是一个镜头一个文件夹，于是逐个文件夹进去改猫的颜色，一天半就全部改完了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rdTibNdav1qdccRKnJgxJIpDyudLvfMicXs4cq0N7ddPqicUnznicYrCRjA/640?wx_fmt=jpeg&from=appmsg)

后来复盘时 Banana Pro 出来，我们发现更离谱的效率还在后面，AI不仅可以改，而且越改越快。第三方平台里可以一次上传所有镜帧，直接一句话批量把黑猫主角改成白猫，效率更高。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5ruAHxx0WeUO2tIh5ep0SouLhVPLtXSZaw6O334JfRP5zdIOl4ia1X0xw/640?wx_fmt=jpeg&from=appmsg)

很多人会问哪里用 Nano Banana Pro 最好用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rhUCqWX8bcrEL5AMC7x65maic0vhF0Xg5z5fDu446cCZuxWicTiaFME7oA/640?wx_fmt=jpeg&from=appmsg)

我们的经验是，Google 自家的会员体系有不少坑。我们买过最顶级的 Google Ultra 会员，从推出就买，一直用到现在。你经常看到别人说 Google 打折，比如三个月每月 79 美元，或半年价等，但回头看自己的订阅价格可能完全不变，依旧很贵，加税更高。

另一个让我们很不爽的点是 4K 的入口不清晰。有人会说在 Flow，但 Flow 默认生成是 1K，下载时才会超分到 4K。我们也不确定那是超分还是原生 4K。Google AI Studio 可以更原生地出 4K，但它又是另外收费。

如果你和我们一样是 Ultra 会员，这里是我们更务实的用法：想快速抽卡就用 Flow，它生成快，因为基础是 1K。想多轮迭代就用 Gemini，对话轮次很方便。对结果把握很大时，可以去 AI Studio 走原生 4K。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rF1CicT9dZzcQ69bT4yiax4TWbO1U4Nxt46WzgTC2poVkylstwGntxFfw/640?wx_fmt=jpeg&from=appmsg)

另外，我们现在写提示词越来越简单。模型多模态理解很强，很多时候不需要小作文。比如我会把图片丢进去，让它提取猫和蝴蝶，放到纯色背景，再转像素风就行。稳定风格后再延展素材，效率很高。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rUEUJ36Eo8GnTpEfWvDY2jSUT86ruuuVz3JQhh9m4ffiaicFialwWpctCw/640?wx_fmt=jpeg&from=appmsg)

而且，现在的Prompt真的要写小作文吗？

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rQVdlqibv7mJRuibfTp1oJNmB1laSpJJsxhqwGJ09SqviaDWnsRjztv73w/640?wx_fmt=jpeg&from=appmsg)

我们做过一个镜头需要展品的正视图，但布展期谁都进不去，工作人员只能给我们远远的随手拍了两张照片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5ryoyyI4qicNgDqgfDjOh99l1CI0kNosy8XjZyquB5LM8bExQFqFOjGcQ/640?wx_fmt=jpeg&from=appmsg)

这两张对我们已经非常珍贵，我们就把它当情报，直接让 Gemini 根据两张图生成展品的正视图，16:9。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r3GPtq7mjG7lKhgN5iavr5WFyP7eBn8gKZXWRPTvUWOnsZiaE49N7kV7w/640?wx_fmt=jpeg&from=appmsg)

结果生成得很好，我们用它完成了最终镜头。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5roczovJY1iagIMic53JgqOpRM55Trz87E8aUvuxlMkdLd3hAIljkWLKcA/640?wx_fmt=jpeg&from=appmsg)

更惊喜的是开展当天我们去现场，发现它和现场位置几乎一模一样。现场人挤不进去，AI 挤进去了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rHdeOPN254tVXxticriaPelprV2I9otCRXet0GVGK1IOQLoHrLad32wTA/640?wx_fmt=jpeg&from=appmsg)

模型强大到一定的程度的时候，它是不问分镜出身的，也就是说你有些时候给它一些比较离谱的分镜，它也能瞬间的 get 到你想要什么，然后直接生成出来一些比较好看的画面，这些都是海辛的分镜进模型，然后直出的一些画面，都是非常不错的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r2EdXA7iaCQEWAlfPqjT6N1FVtP3BcLIYicIJ7zLwACBySRFiapOibibQQYw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rC4RqWL3lnTJMhEXfF3hQE249ZMLfRdRHlh8psFylHXfJVn2gh2ULFA/640?wx_fmt=jpeg&from=appmsg)

但是对于对于复杂创意，就必须分次迭代。

以“猫走在岸边，水里倒影是孔雀”这个镜头为例。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rta0E0lmicc6AGT38HibIibJl8djyxwUj2XpUsZE2aWKDCUgPBnAV5Kq5w/640?wx_fmt=jpeg&from=appmsg)

第一步我会先理解分镜草稿的透视。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rxHzNw7mG7zibLcDgnr83zOicFIstB7a83tVxic0xs9Skt8Vlib3ax2qOgA/640?wx_fmt=jpeg&from=appmsg)

我习惯用 PPT 搭一个很粗的草图。手边刚好有一只透明 PNG 的白猫老演员，我把它放进画面就能把透视构建出来。然后把这个粗草图丢进模型，让它转成写实风，先得到一个“猫走在岸边，旁边有湖”的基础场景。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rSy3OXNp2Picvf5xajd620LSwx8vyeLJk5QpEibIoxFicgOY8z3Az6GH1w/640?wx_fmt=jpeg&from=appmsg)

第二步是铺地砖。我确实用提示词在水泥地上铺地砖，试过很多关键词，直到找到“密集度刚好”的版本。铺好后画面成型了，但多次迭代会让猫姿势变形，我会再让 AI 调整。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rKlLKaAPkCXt8Y6J2ZIkTSibYbF7kA8T4NtB1v1ib4n9MicPwwGu1rw8og/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5re7d8n19nhn5NZ9OrnqGkUuFDQibGh6Hlyo6YBox6uBp9N8N0HQvlR9Q/640?wx_fmt=jpeg&from=appmsg)

第三步是加展品信息。最简单是进 PS 叠上去，调图层样式就能完成。但我们发现湖里倒影的孔雀很难跑起来，因为风格化孔雀不易转成写实动态。于是回 PS 把孔雀擦掉，换成写实孔雀影子，再丢回模型继续跑。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rzicXXV8kzq2viapQvjEHfQETbf8S4SMHJxuRFibtKTicA5iaW6qAJwSjE5w/640?wx_fmt=jpeg&from=appmsg)

后来猫要换花色，换完发现地砖吃掉白猫，我又重新铺了一遍地砖，才有最终静帧。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rq6e6siaHyepjBDN4xJiad9q0ZFCWESAhyprZzjvKzzibdPtXmWexJz96Q/640?wx_fmt=jpeg&from=appmsg)

最后做动画反而最简单。通常直出，抽两三把就能抽到不错的动态，比如猫沿岸走，水中孔雀倒影跟着走。

然后是一些美术上，我们做实景合成的经验。

短片里有大量地标和展品不能错，所以我们需要确定性。很多时候我们会把猫合成到真实存在的地标上。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r41WJAz2ic4s0iaDKyIlyV12L81X1LpDTMxlqyPRKiclhiaw4pnBInonEcA/640?wx_fmt=jpeg&from=appmsg)

现在这种合成很简单，你只要告诉 Nano Banana Pro 场景里有一只背对镜头的橘猫追一只指定花色的蝴蝶，它就能生成。

两个提升成功率的小技巧。第一，先裁剪再生成。比如和平饭店素材里下方装饰我们不需要，我会先裁掉再丢给模型。很多室内镜头也一样，先裁剪掉不需要的区域，模型更聚焦。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rN82f59aK8tdqAQicrm3U0RNribzCicaib9PSVVCgnWgTiaje3Znq1TCEicibg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rC7oKET1WFle2W6upgI66Dd8t3uDUnVIPJIMFLJcal6MFyAc7uIhzxg/640?wx_fmt=jpeg&from=appmsg)

第二，如果你需要做 match cut 或反复复用主体，建议先把猫和蝴蝶提取到纯色背景，再换各种背景。直接在同一张图里让模型不断换场景，它很容易吃掉蝴蝶、吃掉猫，或者给猫换花色。先抠主体再换背景，成功率会高很多。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rDvzeKjwv9ldLaOQUfb1Q9tDASqGibnQBDYmjEiadeyjicdHnJwm39pRKQ/640?wx_fmt=jpeg&from=appmsg)

很多人问为什么我们不用多图参考生视频。

关于视频多参产品，我们在做这两支短片时几乎把市面上能试的都试了，清晰度问题很难根治，稍微动一下元素就糊。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rWtckEEKByObn4Nf5txGWUX263EFl3O0vZ094UIKEOrVbrmticOuQjkw/640?wx_fmt=jpeg&from=appmsg)

即使最近 Flow 上线的新多参功能，我们也试过，它也很难保证我们要的展品不变。我们需要稳定的主体太多，包括多件展品、猫、蝴蝶，所以最后还是首尾帧套路更稳。

还有很多朋友问，PS还有存在的必要吗？

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rZqTiayyEccFeEIncliamYP7Xp0k0oLDW2IUweRopYv4UtBQR0MXCU5xA/640?wx_fmt=jpeg&from=appmsg)

我觉得 PS 还有用，但我们开的次数越来越少。我很推荐一个大家用得不多的功能，叫“协调”。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rXLBKQSVktocXZP26sASiazRmB9IrRKiaNGwUkuNSyWMblmxR9JJT0HpA/640?wx_fmt=jpeg&from=appmsg)

你把 PNG 或图片贴到镜帧上，点一下协调，它会自动匹配环境光影，让合成物变得更融。比如悬浮盘子的镜头，我点一下协调，前后光影差别非常明显，效率很高。

同时，Banana Pro 强到一个程度后，很多事也能直接用它做掉。比如橘猫片里有个镜头，我先用 Vidu 生成了预演，清晰度不够，展品也不稳，但猫的动作和展品关系很对。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rCiahQkiakmhS9pzBOwOichQkJjzKAJ9icoP2KiabVtRH7kGmDq5bz8fbKXQ/640?wx_fmt=jpeg&from=appmsg)

于是我把预演和展品素材都丢给 Banana Pro，让它保持构图不变，把悬浮展品替换成我给的这些，允许重复出现、错落有致。结果第一版就给了非常好的画面，还自动做了前后景虚实和动态模糊，基本符合生产需求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rfj2PiagaXTSibcX7vW5V4QdAISMvM8RODHNdkCkfy9jvWF8vicL0vmunA/640?wx_fmt=jpeg&from=appmsg)

六.动画

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rONb9JNHbaXw2hy2vvYaz0B0xgmLtEich6vbod6V5icYeR9e8b3SwkuKw/640?wx_fmt=jpeg&from=appmsg)

我们主力视频工具是 Flow。我们常用的视频模型是 VEO 3.1。

Flow 最近也上线了 4K 功能，对画质会有帮助。辅助视频模型我们也会用到可灵、海螺、即梦、万相、Ruma 等，但 Flow 用得更顺手，出来的画面也更偏电影感。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rgBsO1iaJWfEoibrRLqDBK9FlJYr3OuQIYEXEESEF3mtONy7JZXWnsibMw/640?wx_fmt=jpeg&from=appmsg)

我们觉得现在已经进入一个可以“P 视频”的时代。很多视频工具都能直接编辑视频。Flow 里有个隐藏功能，入口很深，在生成视频左上角有 edit。进去后可以往视频里加东西、剪东西，甚至改变摄像机位置和运镜，偏实验，但有时好用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rHmTON1tElRzibvzvkkUaicS1HgEyMBEfTvF5WOkdTvfwOYSFn0JQCOibg/640?wx_fmt=jpeg&from=appmsg)

它的限制也很明显，比如它能加能剪，但很难做“编辑替换”，比如把黑猫改白猫。要实现只能先 remove 再 insert，操作会显得很笨。
Flow 里我们用得多的还有涂鸦玩法。纯文字很难让猫完成某些动作，比如让猫直接跨过去，我们抽很多次也出不来。
但在首帧上画涂鸦给运动指示，比如让蝴蝶往哪飞，猫跟着往哪走，再加一句提示词“按照标注中的说明操作，然后删除我的标注”，模型就会按你标注的运动规则生成，猫可以顺利走出画外。
而Luma 的 Ray3 意外好用。我们圣诞节做过测试，把很草的预演上传，加一段提示词，它能生成得很漂亮，清晰度很高，甚至能在原视频上无中生有。
缺点是生成慢，优点是合成质量高，能进生产力。
Wan 2.6 的新建角色功能也值得关注。它的人物角色还很容易出戏，但动物角色比人物精彩得多。我随手上传了自家猫尼卡的一段很糊很暗的视频，建完角色后就可以在
Wan
2.6 里用 @ 召唤它，生成质量高到“主人认可”级别，而且很高清。我们让它做过很多表演，比如恐龙来救它。这个功能上线时我们的两支短片已经发了，有点生不逢时。
还有一个小经验：做落版微动效时可以选“差一点的模型”，也就是上一代模型。上一代动态幅度通常更小，有时候刚好适合落版。比如我们做落版希望环境微动，但 Flow 可能会加很多自己想象的花纹，动得过头。
用上一代模型反而动得刚好。我这次用过即梦 3.0，那种微动幅度就很合适。
如果大家想知道我们日常一直在用哪些工具，我们也会在微博置顶内容里按月更新工具清单。
七.废稿
这次废稿非常多，尤其橘猫那条，因为 Pro 出来后实现一些想法很快，探索量更大。举几个我们特别喜欢但忍痛删掉的。
一个是上海观众很喜欢问的“蝴蝶酥”。上海蝴蝶酥很有名，我们确实做过一只巨大的蝴蝶酥，而且画面我们很喜欢。但 AI 里蝴蝶酥一动就会变回真实蝴蝶，始终飞不起来，所以只能放弃。
还有一个是浦东美术馆很网红的打卡点，能拍到东方明珠。我们做过一个镜头，蝴蝶从窗外伸进半边翅膀，另一半翅膀通过阳光的光影补齐，组成完整蝴蝶。画面很美，但动起来时蝴蝶还是飞不起来，只能删。
另一个是卢浮宫伊斯兰艺术展馆的镜头，我们一开始想做得更夸张，甚至还有海啸级别的动效，后来觉得太奇幻，不符合我们想要的“低调但奇幻”，也删了。
最后
我最后，我们想传达的核心观点是：
模型越方便，越要逼自己做得更好。
现在模型越来越方便，很多创作者会倾向用 agent 直接出整套分镜方案，或者让它完成更多创作。但我们想说的是，模型方便不应该成为偷懒理由。
它更像一个提醒：你有更多能力把作品做得更好。
用一句我们常说的话做结尾：
只要在行动，就是在向前走。
谢谢大家，我们今天的分享就到这里。
（PS：需要海辛&阿文分享PPT文件的，
可以对着公众号后台私信“猫”
，就会自动发给你啦）
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rGz0mSkfxFmxaIIZXde40jSx8zuQPAupked8vP7ticibknf0Ggvz7wsxQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rZDtbtznDb0jYTkLv2x9ibADm3F2HjSyYScmE8TlRqSWpHmjeGqqKyIg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rxyaMDjGjLhA8539XQPST4jWEibicpvN1NOl0IianzId2iav7PysiajO4e6A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5r2RmDMlxKgcwwT6hPDNGqjWe3ANPpwt3anyWtkRrGKH9iauIUfoKeDHw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5ricAtajicmRrU4NZfp5icjiaibb6CjTsE9KbdkN4ddlTk6BmWrxCvic2LSJvQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rabuOtp2tf0OLDYmxsKMaRBhfxU0YIiaia0UA4ica9CoeGfibxdVvMBB8qg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5riapouPN8OwPkrGibXnIXBtoMPL2dVzTxB5tmttPQ0gqSE59SCNmoD8lQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rloPtDS5aWnKozmGmuYRwtpaiaqR9ggR04Kvd1pVNaCeBKNosaFvRLQw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rsCXTICDqUVzKlrZWLibwNlDo3TqgCT0MEs0jOZKIgBqMQDDxqnLZwzA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rDAsxxZe7qWOCFhuRO1UkOKJ4oEnXLzlmIRCiaSZ3Nx8LUXlSOgHDSNQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rxaqhqFRPvjGeXzKuVklAFZJaAhPhlgia0tthaiadOY5jACEgoOQ0S0wQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpicGMYlHcS3tP7PHPxwar5rF0PdAbibcTD9PpYPvCs6FONXdaQYuRV2qibweWBudFAiaMzZdnyzSC39A/640?wx_fmt=jpeg&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
