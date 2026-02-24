---
title: "Qwen3深夜正式开源，小尺寸也能大力出奇迹。"
发布日期: 2025-04-29
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670717&idx=1&sn=edec1f6cda0c1227e72cd07abf4228ff&chksm=f1e16d556c3dac205cadc2b591b542cbd8f0217906a4f30fef27aac515e575840554cac2ba41"
---

## 摘要

**1) 一句话总结**
阿里云正式开源了Qwen3系列大模型，提供从0.6B到235B的8个不同尺寸版本，首创开源混合推理模式，并在多语言支持、部署成本及Agent生态接入上实现了显著突破。

**2) 核心要点**
*   **模型矩阵**：共发布8个模型，包含6个稠密模型（0.6B、1.7B、4B、8B、14B、32B）和2个MoE模型（30B-A3B、235B-A22B）。
*   **混合推理架构**：作为首个开源的混合推理模型，将普通问答与深度思考（思维链）模式融为一体，用户可通过开关自由切换。
*   **上下文长度**：0.6B至4B模型支持最大32K Token上下文，其余大尺寸模型均支持128K Token。
*   **极低部署成本**：旗舰版MoE模型（Qwen3-235B-A22B）性能对标顶级闭源模型，但部署成本仅为DeepSeek R1的三分之一。
*   **小尺寸高性能**：小尺寸模型性能越级，如Qwen3-4B的性能已能与上一代QwQ-32B打平，Qwen3-30B-A3B则全方位超越QwQ-32B。
*   **多语言与生态支持**：支持语言数量从上一代的29种大幅扩展至119种；增强了Agent能力并支持MCP协议，可直接调用外部工具（如即梦AI画图）。
*   **开源协议**：全系列8个模型均采用Apache 2.0协议开源，无限制支持商业化使用。

**3) 风险与不足（基于原文实测）**
*   **复杂代码与UI生成局限**：在生成复杂的交互式网页时，审美和细节丰富度略显勉强；在编写复杂逻辑代码（如弹球游戏）时会出现Bug。
*   **极端逻辑处理**：在面对非常离奇、非正常的测试提示词（Prompt）时，模型会出现逻辑能力下降（“掉智”）的情况。
*   **文本创作能力**：实测文笔表现虽优于部分开源竞品，但仍略逊于GPT-4o。

## 正文

小道消息一直在说，昨天深夜或者今天凌晨，阿里会发Qwen3。

然后我特意早早的睡了一两小时，凌晨1点起床，就为了等Qwen3发。

结果这一等，就是好几个小时。。。

不过，功夫不负有心人。

凌晨5点，我眼睛都睁不开的时候，终于等到了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRRXF26JAzmyMDQBcoFfPjDv0MJL57tK8pk2UWaQheV2gdfbuEO27UnQ/640?wx_fmt=png&from=appmsg)

Qwen你赔我睡眠。。。

把报告看完，我总结一下，觉得最大的亮点有6个：

1. 模型能力登顶全球，这个没啥可说的，就是No.1。

2. 第一个开源的混合推理模型。

3. 8个不同尺寸的模型，几乎覆盖了所有场景。

4. 成本很低，
旗舰模型235B参数部署成本只要DeepSeek R1的三分之一。

5. 支持MCP协议。

6. 居然还支持了119种语言。

一起说吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRKFvUTqzJtp6e2CYSuQ7PkWVLUVEq6nTvv7Fl3yQDv8OmHuoibjWlAiaw/640?wx_fmt=png&from=appmsg)

这次发了8个模型，Qwen3-0.6B、1.7B、4B、8B、14B、32B，这6个都是Dense稠密模型。

还有两个重量级MoE模型，Qwen3-30B-A3B，和旗舰版的Qwen3-235B-A22B。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRLKhIR1avtNKhG6YuT0rjB54V1jQwkcro4s6Zbzv6MdOmXEmZnP54Kg/640?wx_fmt=png&from=appmsg)

这次Qwen采用了新的命名方式，Qwen3-0.6B、1.7B、32B这种没啥可说的，大家都理解。

两个MoE模型，把激活的参数写在后面，
Qwen3-235B-A22B的意思就是235B的参数，但是在推理时只激活22B。

Qwen3-30B-A3B就是总参数量为30B，激活参数3B，这个还蛮有意思的。

而且，所有的模型，都是混合推理模型。

大概的意思就是，你既可以把它当不会长思考没有思维链的普通模型用，也可以直接开启推理模式，变成一个推理模型。

可以简单的理解为，把DeepSeek V3和R1直接揉在了一起。

就像我们其实都知道，DeepSeek这个深度思考，你打开的时候，是R1模型，但是你关掉，其实用的是v3来给你回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRRdmVXV6j34D8PJlwBQ67oXPDrI9XpnEURibV3JPjFCRtBE0GL9K42Gg/640?wx_fmt=png&from=appmsg)

但是Qwen3，是一体的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YR2F5ic1vEyNp8fWwYyicsqyicm7NvkA2MQATcibe6XfIciaWyD2UXiaibESfxw/640?wx_fmt=png&from=appmsg)

是一个模型，只不过支持了两种模式，这个不管对于开发者还是使用者，都方便很多。

整体上，8个模型，诚意足到爆炸，小到0.6B，大到235B，能打手机端侧，也能打旗舰体验，全部一次性开源了，而且都是Apache 2.0协议，想怎么用就怎么用，想商用就商用，没啥顾虑。

Qwen3-0.6B~4B的最大Token都是32K，其他的都是128K。

性能上，稍微有点离谱。

Qwen3-4B的小模型，就已经能和上一代QwQ-32B这玩意打得有来有回。而Qwen3-30B-A3B，更是几乎就比QwQ-32B全方位的强。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YROic1xLlOz0B5ROjvBeeHkrpqp5ZRsHD87PFaGfiaxJTQtF60LKgFnibKw/640?wx_fmt=png&from=appmsg)

至于最牛逼的那个
Qwen3-235B-A22B，他们甚至没只跟开源模型比，比的全都是最顶级的闭源模型。

最主要的是，这玩意部署成本，大概只有DeepSeek R1的
三分之一
啊。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRn18OxrtzfoTHP4xLkE6ic1hicsoml64PpWpIk5gC9Fib3AfCYaRiapcE9A/640?wx_fmt=png&from=appmsg)

什么叫便宜大碗，这就是。

但是这么一对比，忽然发现，Gemini2.5-Pro，好像有点猛。。。

同时，在性能水桶式提升的背景下，也有了更强的Agent能力，也支持MCP了。

他们官方自己放了一段视频。

我也随手把即梦接了进去，可以直接用Qwen3来调用即梦画图了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YR4dnogTacBiaL5GVkibTmWf0blPXxDuxEBrvWlKghEDBEDia0Hma3Rgg9g/640?wx_fmt=png&from=appmsg)

就还真的，挺好玩，你的下一个即梦，又何必是即梦呢（狗头。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRy26j4UvsEDvs6f9h0VjxOlQvCte4g1jUbuEDv66ibQNFG5CGa2gejOg/640?wx_fmt=png&from=appmsg)

除了这些模型的能力，Qwen3这次还有一个很有趣的东西。

就是语言。

上一代的Qwen2.5，只支持包括
中文、英文、法文、西班牙文、葡萄牙文、德文、意大利文、俄文、日文、韩文、越南文、泰文、阿拉伯文等 29 种语言。

而这一次，支持119种语言了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRO97pE5OmA4ryd1RETSDAg7XEVdDEKMTzp4LicwDibYNR1qM9ibYp1OIIQ/640?wx_fmt=png&from=appmsg)

不是，到底谁才是真正的OpenAI啊。

这妥妥是为世界人民谋福利好吧。。。

项目地址都在这了。

Blog: https://qwenlm.github.io/blog/qwen3/

GitHub: https://github.com/QwenLM/Qwen3

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRXTM66tibYgrrnEb6jE7twciacINlteA9nX85IyHOCeynnUiamTfBpf5wQ/640?wx_fmt=png&from=appmsg)

你牛逼的话可以自己部署，我5080勉强跑个Qwen3-8B，实在跑不起。

想体验的话，可以直接去通义和Qwen Chat，都可以。

通义：
https://www.tongyi.com/qianwen/

Qwen Chat：
https://chat.qwen.ai/

我自己直接在Qwen Chat上面实测了一波，一进来左上角就默认是旗舰版Qwen3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRNR6ox8LZZ9THV2t4biaAZtAwOfhfibjzgeUibWX6pe4KEotQjuldMaNjA/640?wx_fmt=png&from=appmsg)

嗯，就是比较抽象的是，提示语都居然都变成早上好，卡兹克了。。。

你可以在左上角，切换3个这次Qwen3比较有代表的模型来进行对比。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YR9bjFMPyyovYLzIVLHadHxtFayAic7ksIJljxYBKTnANzAnogowWWejg/640?wx_fmt=png&from=appmsg)

左下角的深度思考，就能是否开启推理的开关。

而且这个开关还能拖动滑块，决定它的最大思考长度，虽然这个功能很极客，但是还有意思。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRdZ0GuDbT5bIYFYlyoY7DRvian7p2lR7uPWoDIT82PfSQqJ86XCekX8g/640?wx_fmt=png&from=appmsg)

我自己的实测结论就是：水桶级别，中等偏上。

比如让它给我生成一个登录页。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRfuUpIvcW93aLy7vQibibbxgkqS0RNKlNobXuHGlVN7k4Gokfx0OjTEOQ/640?wx_fmt=png&from=appmsg)

效果很不错，能直接干出一个很酷的界面。

https://us4mpg09fz.app.yourware.so/

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRUB4KQp3LT3OBh2Vc9abnDGXEV7ArDMLTKvIZ4KlIpBjsERFIWcrR0A/640?wx_fmt=gif&from=appmsg)

或者做藏师傅搞得可交互的网页，把吃瓜PDF变成在线时间线。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRbmdaMr6n9TYfnU5AqnvMAZoBtIT5g5LnufnF1KTeWBrDDfRWCNcMcw/640?wx_fmt=png&from=appmsg)

这时候你就会发现，审美会差一点，丰富度也会不是特别狗，稍微有一点点勉强了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRCuiaegTYktDm9ibkL95ZIVib1B3f4NMQt8dPch87E8gbfO1Rqmiaia0Xn8g/640?wx_fmt=png&from=appmsg)

藏师傅之前的可视化网页Prompt如下：：

我会给你一个文件，分析内容，并将其转化为美观漂亮的中文可视化网页作品集：

## 内容要求

-
保持原文件的核心信息，但以更易读、可视化的方式呈现
-
在页面底部添加作者信息区域，包含：
* 作者姓名: [作者姓名]
* 社交媒体链接: 至少包含Twitter/X：
-
版权信息和年份

## 设计风格

-
整体风格参考Linear App的简约现代设计
-
使用清晰的视觉层次结构，突出重要内容
-
配色方案应专业、和谐，适合长时间阅读

## 技术规范

-
使用HTML5、TailwindCSS 3.0+（通过CDN引入）和必要的JavaScript
-
实现完整的深色/浅色模式切换功能，默认跟随系统设置
-
代码结构清晰，包含适当注释，便于理解和维护

## 响应式设计

-
页面必须在所有设备上（手机、平板、桌面）完美展示
-
针对不同屏幕尺寸优化布局和字体大小
-
确保移动端有良好的触控体验

## 媒体资源

-
使用文档中的Markdown图片链接（如果有的话）
-
使用文档中的视频嵌入代码（如果有的话）

## 图标与视觉元素

-
使用专业图标库如Font Awesome或Material Icons（通过CDN引入）
-
根据内容主题选择合适的插图或图表展示数据
-
避免使用emoji作为主要图标

## 交互体验

-
添加适当的微交互效果提升用户体验：
* 按钮悬停时有轻微放大和颜色变化
* 卡片元素悬停时有精致的阴影和边框效果
* 页面滚动时有平滑过渡效果
* 内容区块加载时有优雅的淡入动画

## 性能优化

-
确保页面加载速度快，避免不必要的大型资源
-
实现懒加载技术用于长页面内容

## 输出要求

-
提供完整可运行的单一HTML文件，包含所有必要的CSS和JavaScript
-
确保代码符合W3C标准，无错误警告
-
页面在不同浏览器中保持一致的外观和功能
请根据上传文件的内容类型（文档、数据、图片等），创建最适合展示该内容的可视化网页。

而如果再让它写一个之前我在文章里放的洛小山的弹球游戏。就确实没有那么亮眼，在游玩的时候还有一些些BUG。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YR6IqfYJtFnED28BeSSX7d2gHLhbPiaBOmxzQaoGATgcAtYPbJFljzSXg/640?wx_fmt=png&from=appmsg)

但是毕竟这个游戏还是太复杂了，人模型的尺寸也没那么大，也没法既要又要。

如果是做稍微简单一点的连连看游戏，就还是比较简单了。

<!-- 生成一个记忆翻牌游戏，要求：
1. 使用CSS渐变背景（深紫到黑）
2. 12张圆角卡片（6对图案），默认显示彩色霓虹边框
3. 点击卡片翻转时显示emoji图案，匹配成功时卡片变为半透明发光状态
4. 顶部显示极简计时器和步数统计
5. 禁止使用图片，全部用CSS绘制 -->
<
div
id
=
"memory-game"
style
=
"background: linear-gradient(135deg, #3a0ca3, #000);"
>
<!-- JS动态生成卡片 -->
</
div
>
，所有的游戏文字都是英文

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRa7hIocgk1pXRkee54icgqW6Mt9FwRCqE2nnzLoibib9kphUAicpxsQfxeA/640?wx_fmt=png&from=appmsg)

除了代码，逻辑问题，现在基本也不太能难道现在的推理大模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRnedZMicqH1M8fykLU4MbyV1EqyOtZkoIaqPU8VlTRv1GI5xAkrsBsXw/640?wx_fmt=png&from=appmsg)

不过在遇到一些非常离奇非正常的测试prompt时，还是会有一点点掉智。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YR4SSL3f4woqvE3bQPNibnaamtFfyQsRmacRyIfpMw27Mv5kpoE06xrtw/640?wx_fmt=png&from=appmsg)

文笔的话，亲测会比DeepSeek好一些。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRFu47mjyy6zCcCZEPaEtwCvKRtsXuTMXuQV0amQQkb2CkDJEoz3K0mg/640?wx_fmt=png&from=appmsg)

但是略逊于GPT-4o。

如果你还想玩一点花活，还能跟即梦打通做结合。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRZINW5Hk6sOVxibNEywU3RyUkt8NXqEnFhdOu5Lebe16Fib64PzoLicOxQ/640?wx_fmt=jpeg&from=appmsg)

就能实现类似于那种原生多模态模型，图文混排的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgmcHYkNoia5nWWl1FCD5YRZNh5fs8SmH6Vqurv44cGY7JaJkAP6vgiazic2SbPr0PH90StUMkc11og/640?wx_fmt=png&from=appmsg)

还是超级有意思的。

总之，这次Qwen3的发布，真的有点像是深夜街头，突然亮起的那盏霓虹灯。

不仅亮，还便宜。

不仅便宜，还能库库的切换颜色。

这一波下来，阿里确实是拿出了一种很阿里的态度。

8点了，天也亮了。

该去睡觉了。

最后。

Qwen3，欢迎来到这个荒诞又灿烂的时代。

咱们，下个奇点见。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
