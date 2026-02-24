---
title: "刚刚，腾讯发布了他们的首个全栈AI IDE。"
发布日期: 2025-07-22
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647673267&idx=1&sn=f6e072c323e71c7721a31f0b761aec90&chksm=f13cd68dd1890232a7c53f95b88aaa7068065d205c596d94ddaa81d097cf06a564fcd2e87cdf"
---

## 摘要

**1) 一句话总结**
腾讯正式发布了其首个主打“产设研一体”的全栈AI IDE工作台CodeBuddy，支持从需求文档生成、设计图转换到前后端开发与一键部署的全流程自动化。

**2) 关键要点**
*   **产品演进与定位**：CodeBuddy从原有的插件形态升级为独立的AI IDE，定位为“产品-设计-研发部署”全流程AI一体化开发工作台。
*   **底层模型**：国际版目前免费支持使用 Claude 4 模型。
*   **Plan Mode（计划模式）**：支持自动生成PRD（产品需求文档）、TRD、DRD，并可基于这些文档直接生成网页及部署后端，内置Prompt优化功能。
*   **设计到代码（Design-to-Code）**：支持将Figma设计稿一键转换为网页，并集成了Shadcn等常用设计组件库。
*   **自然语言UI编辑**：支持在预览界面框选HTML元素，通过自然语言指令直接进行样式微调（如颜色渐变、修改圆角等）。
*   **后端与部署集成**：集成了腾讯云开发CloudBase与Supabase，支持纯小白搭建后端，并提供一键部署上线生成真实访问链接的功能。
*   **行业理念**：腾讯提出AI编程将分化为两种范式——非技术人员的“氛围编程”（简单应用）与专业团队的“规约编程”（复杂系统），该产品极大降低了独立开发者的门槛。
*   **发布状态**：目前产品处于内测阶段，需通过邀请码（官网 codebuddy.ai）申请体验。

**3) 风险与不足（基于原文）**
*   **设计还原瑕疵**：Figma一键转网页功能在部分细节上存在瑕疵，例如顶部背景图可能会出现轻微拉伸。
*   **文档生成深度有限**：AI生成的PRD、TRD、DRD等文档目前仅具备雏形，与真正的专业标准文档相比仍有较大差距。

## 正文

今天，人在腾讯的发布会现场。

上次他们从深圳飞来北京开这种小规模的私密发布会，已经是半年前了，这个发布会场地，我都见了第三次了，属实是老演员了。

第一次是开源，第二次是3D，而这一次，是AI编程。

CodeBuddy IDE。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNdm4rHiaKzSp0w3W0ibPM9jxqXTvSKFqUicvODvvULRDdrib4qDaX4WBwjBKUXYibUHPtVVrrpicsbP9g/640?wx_fmt=jpeg&from=appmsg)

上一次我写过腾讯的
CodeBuddy插件，是集成在别人的IDE里面的，那篇文章莫名奇妙的10w+了：
腾讯悄悄出了个插件版“Cursor”，还跟微信小程序打通了。

而今天，他们终于不再是插件的形式了，做出了自己的AI IDE。

而且，着实做出了一些创新，非常有意思。
这次他们主打的，是产设研一体。
讲道理，看到这五个字，我忽然有一种感觉，回到了当年在互联网厂子里打工的年代。
腾讯的原话是：
首个“产品-设计-研发部署”全流程AI一体化的开发工作台。
听着有点玄乎。
我用人话，总结了几个亮点：
1. 国际版，你懂的，目前可以用到Claude4，而且是免费。
2. 使用Plan mode模式，可以生成产品PRD、TRD、DRD，再用这些文档去生成网页，最后部署后端，真一站式服务。
3. 可以直接把Figma的设计稿，一键变成网页。
4. 集成了几个常用的设计组件库。
5. 科技针对页面部分Html元素进行自然语言样式微调。
6. 跟我昨天写的Minimax Agent一样，集成了后端，腾讯云开发CloudBase与Supabase，也就是说，纯小白也能搭后端了。
确实是有一点不一样的，能感觉这个产品并不是给纯开发者用的，我自己曾经是UI设计师，后面转成了用户体验设计师，交互和用研都干，再后面转了产品经理，也开始写PRD和做产品规划，说实话，对我这样的人，现在看到的、尝试过的无数的AI编程产品，这玩意，给我的亲切感是最强的。
因为相比于各种各样的代码和技术栈，这里面确实有太多我自己的熟悉的东西了，PRD、DRD、Figma、设计组件等等。。。
有一种感觉，
CodeBuddy其实更像是给这个时代的独立开发者用的一个AI工作台，只不过现在是以AI编程的形式来作为呈现。
目前，
CodeBuddy上支持这些模型。
给大家看看完整的工作流。
比如像设计一个宝可梦图鉴网站，可以开启Plan mode模式。
再选一套设计组件，比如著名的
Shadcn。
然后说一句话：
做个pokedex。
CodeBuddy就会开始嘟嘟嘟的跑了。
你会看到，他是真的做了一整套分析，列出了详细的计划，然后开始干活。
在把网页做出来以后，还能框选中预览界面上的元素，进行口喷修改，比如对这个区域价格渐变、变成圆角等等等。
又或者，直接让他根据宝可梦的元素，给一些不同的颜色变化。
这个改起UI来，就真的超级方便。
在一切你觉得没有问题之后，你就可以，把它部署上线，而这个流程，就更简单了，只需要点一下这里就行。
不过在这之前，你还是得稍微连接一下后端的服务集成。
然后，等一会之后，就非常便捷的，部署好了。
非常的离谱。
这个部署好的网页，你是真的可以进的。
https://ae86014095c0489eb9ca19124aec07a2.ap-singapore.cloudstudio.run/
独立开发的门槛，又一步被降低了。
而你如果是个设计师的话，也真的可以，把你的Figma上的设计稿，一键转成网站。
只需要几秒钟，就直接转完了，虽然顶部的背景图稍微有一点拉伸，但是真的瑕不掩瑜，其他的大部分的样式，都是对的。
还有一个骚的。
就是，你还可以让他，给你写出PRD、TRD、DRD这种万恶之源= =
你要是觉得你写的比较草率的话，也可以点击右下角的Prompt优化。
优化以后，确实专业了很多。
直接让他跑一下。
他会真的先从产品、技术、涉及三个角度来去想一想怎么搞。
然后就会列计划正常开发。
他们这个PRD、TRD、DRD写的还是真的有点意思，虽然跟真正的文档还差的有点多，但是雏形是有了。
还是蛮有意思的。
发布会上，腾讯云开发者产品总经理刘毅有一句话，我觉得还是挺形象的。
他说：
“未来，AI编程将分化成两种范式：简单应用开发需求，非技术背景的个人开发者通过氛围编程即可实现；复杂系统需要专业化的团队协作，则需要规约编程。”
这个点我其实非常赞同。
纵观过去这两年AI的冲击。
比如设计领域，一些简单的图和海报，非设计背景的个人已经可以通过即梦、Midjourney、ComfyUI去实现了，在这个场景里，AI是主力。
而真正复杂的设计系统、主视觉等等，还是需要专业设计师操刀，而这个时候，AI只是辅助。
影视也一样，一些简单的故事片、短视频，个人创作者，凭借AI完全可以自己搓一部出来，创意被无限放大，但是专业级的电影，比如《流浪地球3》，我相信不会有任何人会认为，这年头你能徒手用AI搓一部出来，对吧。
对
CodeBuddy感兴趣的，可以去申请一下测试，目前还在内测阶段，需要邀请码才能进去。
网址在此：
https://wj.qq.com/s2/22240515/0ac5/
说实话，我现在已经有一点不喜欢邀请码这个机制了。
在现场，我刚想吐槽。
然后，他们说，卡总，送你50个邀请码啊，你看看有没有朋友想体验的。
我。。。
突然一下子吐槽不起来了，瞬间感觉，邀请码还挺香的。
所以，我决定，搞个抽奖，把这50个邀请码抽给大家~
对着公众号后台私信“抽奖”（不是评论区），就能看到这次邀请码的小程序抽奖码了，开奖时间和详情啥的就都放在那边了，抽到的可以去官网下载产品，网址在此：https://www.codebuddy.ai/
最后。
希望各大厂都赶紧卷AI编程还有Agent，快卷，打起来最好。
毕竟，打的越狠，用户越爽。
让AI编程领域，也来一场，外卖补贴大战吧。
Vibe Coding愉快。
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuUicLk2AmZ93iaRb9nEW7gdlHDBDrJSK7B2NPBzWwAlcHtEHOJlbbR2vg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuJhW107GO84ZsreQYbrsSdxGUdK6D30Ct8QrSLNVvGdAbDqNMEjU3Rg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuB8xKibENSXqaNBQwGM3ljbxRHW6YsaryVR6nLQZ0AGWnQy2NJTtV1Ng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTub7HdsxrvT0tC7PKW2PKFgUlXUF0a3a6GqgjbMtkULj3DfBicV5Iutibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuFap3qAdmD2j87fkRgK1hVrMKeCCaM5sM5ErvGqVd2SpAvjgYCpfoMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuw6IqXicxwia5aooZ8uTa2L9mg1XyuRZzr3naP7JgaMVFhWS5n1tD8w8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTufm1icpJ7vH2zOjtlkXycv65UZM5pNqg30scS8bqJNL0yu63ZozGKNEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNdm4rHiaKzSp0w3W0ibPM9jiaX8QVGlZ6jI15P2sBsE6nn8dFFwUWjTEU17gs35Br4tJkckWTVYxWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuNVL2ofYOC6dCQkdPibJ2snVXickernu9TgsIvYoBEWAV6ft3KNfVH3HA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTu3pedAR45bxT179EicsBAicNUE886gdYpOme3KvUSMj675OKc1a7Cq0KQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuvOtmkvU2ta7smK96KvjHGCK7MpmMdqu4czOAEicyNPicRbyULHgAtxZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTulCAib1KibE7ssRM6D7aH1jdzC3rsRJPA44KpPCIp8cI0vz1dOLtOtKew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuKIHNHPibBD3icHKLzfQ527et5KS65Jur7sn3MM8DQWAaJmxDciby7tSnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTulU0pauXl2gMZ16eNqyCFqBibP8PhxXNe9QiablXnYfDO6US38yYFCkgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTu4gYFWzicncfa6zjfcRnY0JW4WUicHWHzQdVlc7BE9xtBmK77kWCm7oxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuKorxgib5VFnaWqg3KETHrBPU9CUECv2I8Z3JjCj0Z9HrjXOkrPUdwtw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqsum7NlVvfKH9HA8yjzxTuQav1tTLWfBaljSJE40FS6BYxOeW10Fibf3lbBMcgUSvhqdNK70nH4yg/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
