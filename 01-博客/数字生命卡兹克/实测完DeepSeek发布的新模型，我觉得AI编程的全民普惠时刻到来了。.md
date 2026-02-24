---
title: "实测完DeepSeek发布的新模型，我觉得AI编程的全民普惠时刻到来了。"
发布日期: 2025-03-25
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669864&idx=1&sn=a4e5c85ed93ae460a705b50113ecd261&chksm=f14e026f6db285a57124aa618467a9f8a9eb95c6aed1924661ecd1bbdd6cae68445e1ff9aaf9"
---

## 摘要

**1) 一句话总结**
DeepSeek开源发布了新版模型DeepSeek-V3-0324，其代码生成与前端UI审美能力大幅提升，凭借极高的性价比和开源优势，进一步降低了AI编程的门槛。

**2) 关键要点**
*   **版本发布**：DeepSeek直接开源了新版本DeepSeek-V3-0324，发布时未附带跑分数据。
*   **基础参数**：新版模型的参数量和上下文窗口长度（128k）与原V3版本保持一致。
*   **核心升级**：代码生成能力和前端审美显著进化，整体能力评估介于Claude 3.5 Sonnet与Claude 3.7 Sonnet之间。
*   **实测表现**：能够成功生成复杂的单文件HTML游戏（如8位像素弹球）、带动效的互动网页（如牛马时钟、背单词页面），并能将PDF文件转化为排版精美的可视化网页。
*   **UI审美提升**：生成的网页落地页和图文卡片（如“汉语新解”风格）摆脱了旧版的粗糙感，具备较高的设计感和现代审美。
*   **测试方案**：目前可通过OpenRouter（提供API，当前免费）结合ChatWise（提供类似Claude Artifacts的实时代码预览功能）进行便捷测试。
*   **成本优势**：官方API价格极低且提供深夜优惠时段；相比之下，Claude 3.7的输入成本是其10倍以上，输出成本是其13.5倍（标准时段）至27倍（优惠时段）。
*   **生态普惠**：模型开源支持企业自行部署或通过第三方平台接入，避开了国内用户使用Claude的高昂费用和封号风险。

**3) 风险与不足**
*   **复杂代码能力仍有差距**：在生成复杂游戏（如弹球游戏）时，效果仍略逊于Claude 3.7，存在UI不够完美、部分功能有Bug（如AI模式拖不动）以及遗漏特殊道具等问题。
*   **本地部署硬件门槛高**：模型参数量较大，普通消费级显卡（如RTX 5080）无法单卡本地运行。

## 正文

DeepSeek深夜偷袭。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2EN3Kh0vbkOZpP14KLwye9Tx9W2yvxjN2tq7RgYcAMWvEFebcOHSqiaOtw/640?wx_fmt=png&from=appmsg)

昨天晚上，他们的v3模型，有了一波更新，版本号到了DeepSeek-V3-0324，而且是直接开源的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENic0rZRgGHCiayg24ichaIptYOGCwUd4PHwKaqVjXp0n7T4aAJZic1SbhPA/640?wx_fmt=png&from=appmsg)

没有跑分，啥也没有，就直接裸上的。

我第一时间实测了一波。

自己部署肯定不可能自己部署的，参数量不是我这种5080的垃圾卡能跑的动的，然后本来想着用硅基流动，结果他们没上= =

最后用的方案，是O
penRouter+ChatWise。

O
penRouter第一时间提供
DeepSeek-V3-0324的模型支持，卷的起飞。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENjXMC7ibs0GNcwF5d2nhBj4tAQTlv6BzBibLqJpqGHaAdhKSv8nWiawibLQ/640?wx_fmt=png&from=appmsg)

而ChatWise当前端界面，用它的原因特别简单，它不仅能接入各种API。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8awDuMZj7MHVSSGlG2c7uZwAIHXO5UtHs3SbPyXW1ibto7nepzfaia60DA/640?wx_fmt=png&from=appmsg)

还有一个很有趣的功能，
叫做Artifacts。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENmaKicOqrd8D518nfoPxTnSe38VMjGibeY6ApYP5iajaPwZ0kRULUaGwYw/640?wx_fmt=png&from=appmsg)

跟Claude那个右边预览的窗口是一样的。

能做到指哪打哪，所见即所得。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENzc7Tl8wn6djTeQWicsdGTwhQL0XczJ6eGsvK6jVTX27A7Zkx0xBfqdQ/640?wx_fmt=png&from=appmsg)

这两个产品的网页在此：

https://openrouter.ai/

https://chatwise.app/

有需要的朋友可以自取。

目前
O
penRouter上的DeeSeek-V3-0324是免费的，可以随便用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENERwiaicrwNkIEU32zTibsiauecRic9dgichVPRNdt9MxEVX9U9q7bZWl3gAA/640?wx_fmt=png&from=appmsg)

再来说说
DeeSeek-V3-0324的更新结论。

参数层面几乎都没有变，比如原来的v3是128k上下文，现在还是128k上下文。

最牛逼的进化，是新v3的代码能力。

生成的前端代码质量和审美，效果甚至能追上一点Claude3.7了。

能力大概在Claude 3.5 Sonnet到
Claude 3.7 Sonnet之间。

我用一个朋友
@洛小山
的case举例子。他是做游戏出身的，所以在模型的代码能力上，非常喜欢用游戏来做case。

这是他的一个弹球游戏的Prompt：

创建一个红白机风格的"像素弹球大师"游戏，包含自动演示AI功能，使用纯HTML/CSS/JavaScript实现为单文件：
1.
游戏视觉与核心玩法：
- 复刻经典打砖块/弹球街机游戏，采用8位像素美学
- 游戏区域使用固定比例(类似256×240像素)，周围添加复古装饰
- 所有元素通过Canvas绘制，使用有限调色板(16-20种颜色)
- 基础玩法：玩家控制挡板反弹球体，击碎屏幕上方的砖块
2.
物理系统实现：
- 精确的球体物理：
• 基于角度和速度的真实反弹模型
• 挡板碰撞位置影响反弹角度(边缘产生更大角度)
• 碰撞时有适当的速度变化和加速效果
- 多样化的砖块与碰撞：
• 精确判断球体撞击砖块的哪一面并给予相应反弹
• 不同类型砖块：普通砖块、坚固砖块(需多次撞击)、特殊砖块(掉落道具)
• 球与环境边界的碰撞检测和反应
3.
AI自动演示系统：
- 设计一个智能AI玩家，能够自动控制挡板：
• 实现预测算法，计算球的落点并移动挡板接球
• AI决策系统：根据当前球速和方向做出最佳挡板位置选择
• 添加适度的"人类化"反应：偶尔犯错、有反应延迟、预判不完美
- AI模式交互：
• 游戏启动时先进入AI自动演示模式，展示游戏玩法
• 提供明显的按钮切换AI和人类玩家模式
• AI模式下显示实时决策过程，如预测轨迹线或目标位置标记
4.
游戏内容与机制：
- 砖块系统：
• 多种类型砖块，颜色区分不同属性和分值
• 关卡设计：至少3个不同布局的关卡，难度递增
- 道具系统：
• 实现4-5种不同效果的道具(多球、扩展挡板、减速、穿透等)
• 道具从被击碎的特殊砖块掉落，需要挡板接触触发
- 游戏状态：
• 玩家有3条生命，球落下底部损失生命
• 分数系统：不同砖块给予不同分数，连击有额外奖励
• 关卡进度：清空当前关卡可破坏砖块后进入下一关
5.
8位风格音效系统（使用Web Audio API）：
- 必须使用Web Audio API编程生成所有音效，不使用外部音频文件：
• 球体碰撞音效：与砖块、墙壁和挡板碰撞时发出不同音调
• 砖块破坏音效：根据砖块类型有不同音色和长度
• 道具获取音效：上升音阶表示能力提升
• 失败音效：球掉落底部时的下降音调
• 胜利音效：通关时的欢快音乐序列
- 音效设计指南：
• 使用方波(square)、三角波(triangle)等音源创建复古音色
• 正确控制音量包络(ADSR)模拟经典游戏机音效特点
• 为不同游戏事件设计独特且辨识度高的音效
• 提供音量控制选项，可开关音效
- 背景音乐：
• 使用Web Audio API创建简单的循环背景音乐
• 音乐应符合8位游戏风格，使用简单的音符序列
6.
UI与控制：
- 游戏界面：
• 显示当前分数、最高分、剩余生命和关卡信息
• 设计开始画面、关卡过渡和游戏结束界面
- 控制方式：
• 键盘控制：方向键移动挡板，空格发球
• 鼠标/触摸支持：拖动或点击控制挡板
• 明确的AI/人类模式切换按钮
7.
音效和视觉反馈协同：
- 确保音效与视觉事件精确同步
- 重要事件（如获得道具、失去生命）同时提供视觉和听觉反馈
- 游戏状态变化（如关卡切换）有相应的音效过渡
8.
代码质量与文档：
- 代码组织良好，使用模块化结构
- 音效生成函数需有详细注释，解释声音合成原理
- 物理系统和AI决策算法需有清晰说明
- 优化性能，确保游戏和音效播放流畅
请实现完整的单文件HTML游戏，确保所有音效都通过Web Audio API动态生成，不依赖任何外部资源。游戏应自动启动进入AI演示模式，展示物理系统和玩法，并允许玩家随时接管控制。

先给大家看目前的AI编程王者Claude 3.7的效果。

游戏网址在此：
https://jyt0pm2v2l.yourware.so/

超级酷，UI正确，规则正确，有特殊道具，1个球还能变成3个球，声音和AI模式也都加进去了，路径的规划也超级无敌，我看的最爽的解压时刻，其实就是接住3个球的时候，一个都不漏。

而且有一个特别特殊的规则，它也写进去了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENhVCkPsvDEhvtiaXfgsgbAn6ibeSGkacyuLIftQxibYQYH7IgfvEn7YQUQ/640?wx_fmt=png&from=appmsg)

就是偶尔的不完美。

所以你才会看到，它有时候刻意在漏球，刻意接不住。

Cluade 3.7，不愧是王。

我们再来看看DeepSeek新版v3做的。

说实话，在效果上，肯定是跟Claude 3.7有一些差距的，这个需要承认。

包括在游戏UI的美观上，AI模式还有BUG拖不动，特殊道具也没有等等。

但是它完成了，是一个游戏，是一个能玩的，而且还不错的游戏。

在这一点上，就已经很酷了。

而且游戏，毕竟是非常难的case了，再看看其他的实测。

比如我要做网页，我想让它整个活，做一个牛马时钟。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENoAruva7NxyCMmsykgqicXFjj142XJ1SKt4hqWPPfoAVrfaNFuuvwdVw/640?wx_fmt=png&from=appmsg)

而这个牛马时钟，做出来非常的搞笑，非常的抽象。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENzcsq3kKLkfwpIhNXDqvMDWv6UqLDMyP56A4w4NQt8PRNibd9YQMsAsQ/640?wx_fmt=gif&from=appmsg)

真的就是牛马来回切换啊。。。

非常的符合牛马时钟的题意。

又或者，可以让DeepSeek v3，直接生成一个有趣好玩的背单词html页面。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo1gtyAAsdySwFhPBiavw2EN33uy0wZCCVcMY73LXSaCNjRfwQibw25rgjuSkZvBeJvq8CEWIYCzfAw/640?wx_fmt=gif&from=appmsg)

不仅做到了游戏化界面，甚至还有N多动效。

最酷的是，甚至这个背景图，都是它自己写出来的网址。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENFaHOSgggn4KvVXDaAy3lmmETmq31ClWEwzNXwveTLJiaOiavnaleADFg/640?wx_fmt=png&from=appmsg)

太牛逼了。

这些是比较难的互动部分，Claude3.5刚出来的时候，那时候我记得最火的东西，是李继刚的“汉语新解”，我不知道还有没有人记得，那个东西长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYu1QictFDNYYNu4pXicp25MHV1HHzCW1THVKYDB7b2yzicDdtbvMaOmPooA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

而现在，DeepSeek新版V3，在审美上，也可以做到这种效果了。

这张图，由DeepSeek新版V3直出。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENSWMgzdDXwiajhE3LKY6OgaRpSo4aU5urBUOlVzibOGYhdNMDJ2gHYXrw/640?wx_fmt=png&from=appmsg)

无敌棒好吧。

网页的审美，也很棒，终于不是之前土不啦叽的审美了。

比如我说一句特别简单的prompt：“写一个精美的落地页，内容是deepseek v3发布。”

这是上一版v3干出来的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENibL0ar5sPudCl9Z3zX8xzG8HPHbueNvgicOan818831TefUyw1sdDD6g/640?wx_fmt=png&from=appmsg)

真的，丑的我不忍直视。

而
DeepSeek-V3-0324，不说是那种专业级的UI设计师的级别，但是至少是好看的，能看的，是有设计感的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENkFjRmB6dNJSvt2cDSWhmHUGn63rciaQY9cjC7Ja6e2M6p0Hbia4u7tSA/640?wx_fmt=png&from=appmsg)

这差距，一眼就能看出来，没有什么比视觉效果，更直观的对比了。

前段时间很火的文件转可视化网页，很多人看了教程，但是苦于必须用Claude3.7，找不到门道，没法用。

但是现在，DeepSeek新版v3，直接完美复刻。

比如我之前用的这份吃瓜文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoARicLpj3qOz9iaONsjxELGAvEc1W0KkibZaYmJU8PlzXeia4zibxmJbIhib83AqlAZkM6X02pjVWm0LSA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

直接把PDF传到ChatWise里，选用
DeepSeek-V3-0324，加上藏师傅的这段超棒的Prompt：

我会给你一个文件，分析内容，并将其转化为美观漂亮的中文可视化网页：

## 内容要求

-
所有页面内容必须为简体中文
-
保持原文件的核心信息，但以更易读、可视化的方式呈现
-
在页面底部添加作者信息区域，包含：
- 作者姓名: []
- 社交媒体链接: 至少包含Twitter/X：
- 版权信息和年份

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
**使用CDN引入Preline UI组件库，按需使用其组件增强界面效果**
-
**根据提供的JSON文件内容（颜色、字体等）配置TailwindCSS的样式Token，确保设计一致性**
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
- 按钮悬停时有轻微放大和颜色变化
- 卡片元素悬停时有精致的阴影和边框效果
- 页面滚动时有平滑过渡效果
- 内容区块加载时有优雅的淡入动画

## 性能优化

-
确保页面加载速度快，避免不必要的大型资源
-
图片使用现代格式(WebP)并进行适当压缩
-
实现懒加载技术用于长页面内容

## 输出要求

-
提供完整可运行的单一HTML文件，包含所有必要的CSS和JavaScript
-
确保代码符合W3C标准，无错误警告
-
页面在不同浏览器中保持一致的外观和功能
请根据上传文件的内容类型（文档、数据、图片等），创建最适合展示该内容的可视化网页。在配置TailwindCSS时，请使用提供的JSON文件中的颜色、字体等配置项来自定义样式Token。

你就能得到一个，超酷超级好看的吃瓜时间线的可视化网页。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENunrZkngR1ZRaVySDnZK93dREW3TicQZ5ZgHH3QVanvpOaChoyywiapQw/640?wx_fmt=png&from=appmsg)

在这个关键的时间点，DeepSeek又用自己的技术和硬实力。

把AI编程的发展和普惠，往前推了巨大的一步。

要知道，Claude 3.7效果虽好，但是先不说封杀国内，即使你能用上，价格也是真的不便宜。

而DeepSeek新版v3，不仅价格没变，他们甚至还有深夜优惠时间段。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENWibXaY8e330QKJ1GUzge0Ou75n1dvkMHtj4kJiafTtSibICfrlhESZjQA/640?wx_fmt=png&from=appmsg)

良心过头了。

我们对比一下Claude3.7和DeepSeek v3的价格（deepseek-chat就是DeepSeek v3）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo1gtyAAsdySwFhPBiavw2ENrjkLPOY9045kq8gTiaBN7wR25tichRAEjcjIcNZnZJSNiby6S75icFeiaqQ/640?wx_fmt=png&from=appmsg)

输入是DeepSeek v3的
10倍以上
。输出则是
13.5倍（标准时段）和
27倍
（优惠时段）。

这还只是官方API，可别忘了，这个模型，是开源的。

作为企业，你有算力完全可以自己部署，更别提还有很多部署完，免费给大家用的三方平台。

对于绝大多数的普通人来说，我们为什么要忍着被封号的痛苦、付着高昂的价格，去用Claude 3.7？

当所有的三方模型，再一次批量接入DeepSeek新v3的时候，AI编程的普惠，一定会前进一大步。

人人皆可实现自己的梦。

我真的非常的兴奋，也非常的开心。

这一刻，仿佛整个AI世界的夜空同时亮起了万千烟花。

它凶猛、热闹，却也公平且慷慨。

冯骥那一天，说的没错，DeepSeek就是国运。

我们必定。

国运昌隆。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
