---
title: "我花了100个小时，整理并撰写了一份ChatGPT的超实用prompt大全..."
发布日期: 2023-03-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658055&idx=1&sn=2dbf70e48f901b70571488cde509984d&chksm=f1aa4ace69a22e4774abbe4eec599f3ba4b069074b14aa43b96ab64d6f6987bc405ac20aece3"
---

## 摘要

**1) 一句话总结**
作者耗时100小时整理并撰写了一份高度实用的ChatGPT提示词（Prompt）大全，提出将历史对话框固化为专属生产力工具的理念，以解决AI回答泛泛而谈的问题。

**2) 关键要点**
*   **创作背景**：作者发现国内现有的Prompt大全多为机翻且缺乏实用性（如150条中149条是无用的角色扮演），因此决定亲自整理撰写针对Midjourney、文章重写、短视频脚本等生产力场景的提示词。
*   **核心用法（对话框工具化）**：建议将ChatGPT左侧的历史对话框作为独立的人设或工具使用，而不是每次都新建混乱的聊天记录。
*   **Prompt设置技巧**：在新建对话开头输入设定好的Prompt，并要求ChatGPT回复“明白”，此后该对话框即可作为专属工具持续使用，无需每次重复输入提示词。
*   **语言选择策略**：文档中的Prompt均采用英文撰写以保证输出的稳定性，并通过在句末添加“Your answer should be in Chinese”来获取中文回答。
*   **测试数据**：收录的Prompt均经过精挑细选，部分已深度使用半个月，其余均经过至少10个以上案例的测试验证。
*   **应用案例1（Midjourney V5）**：输入简单的主题（如“天台上的情侣”），ChatGPT可直接生成四段符合规范的英文提示词，直接用于Midjourney绘图。
*   **应用案例2（小红书文案）**：输入需求后，可自动生成包含Emoji表情和底部标签的标准小红书风格文章。
*   **文档维护**：文档持续更新中，作者通过私信发放，并采用邀请制招募共同编辑者以控制内容质量。

**3) 风险/不足（原文明确提及）**
*   **中文Prompt稳定性风险**：使用中文撰写Prompt时，生成效果通常一般，且ChatGPT偶尔会出现不稳定（“犯病”）的情况。
*   **现有市场内容劣质风险**：国内充斥着大量机翻的Prompt文档，无法切实解决生产力问题。
*   **多人协作质量风险**：若开放文档的所有人编辑权限，会导致内容鱼龙混杂，难以保证Prompt的质量。

## 正文

我一直认为ChatGPT在目前有别于其他对话式AI，最有价值的工作（不谈还没有正式发布的插件），就是他最左边的那一栏历史对话，基于prompt的聊天记录。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzIeE6CSppN62NBKYCuW9Bz3OzKaaJ0yFDdh89AqbPvGovemrPFM0p4iaw/640?wx_fmt=png)

ChatGPT是一个大语言模型，他什么都懂，大到没有性格没有精通专业。如果你不会提给他提示的话，你得到的回答就经常是车轱辘话和八股文。

这也是最近跟很多朋友交流下来，觉得ChatGPT没什么用的说法。

因为很多的提问都是“请给我解释一下XXXXXXX”...

这时候prompt（提示）的重要性不言而喻，为了让ChatGPT帮我做某些特定的事情或进行特定的回答，我们需要给他一个prompt，给他先定一个人设或规则。

比如“我先让你充当一个“Midjourney提示器”，“撰写小红书风格的文章”等等，当然，实际的prompt肯定不会只有这么简单的一句。

我自己部分整理、部分撰写了一份ChatGPT的prompt大全，之所以做这个是因为国内充斥着各种机翻的且没什么卵用的东西，比如号称150个prompt大全里149条都是github上的角色扮演，通篇都是让ChatGPT“充当足球解说员”、“充当艺人顾问”之类的玩意。。。真正会用到的什么Midjourney、重写文章、短视频脚本啥的一个没有。

这份文档目前我还在持续更新中，努力做国内最实用最China的prompt文档。公众号里没法插链接和文档，关注我并私信回复“P”，后台就自动发你了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzItElZOKKJzgsnMGYLhtBibwrs1jdZQ0e1HOEeRolG4icncfVCwyfaH0vg/640?wx_fmt=png)

这篇非常干货，每一个prompt我都是精挑细选，或者是自己撰写的，罗列了我认为真正有用的一些提示，能切实的解决一些生产力问题，或者是有趣好玩的。有一部分我已经深度使用了半个月了，其他的我也都测试了最起码10个以上的案例，效果也都很棒。

说说怎么实际用。

回到ChatGPT的最左边的历史对话。

很多人把它仅仅只是当做聊天记录，非常混乱，问啥都是先选New Chat。但是换一种用法，把他当做一个一个的人设，或者是一个一个的工具，可能效果会更好。

用我文档中的prompt举几个例子。

第一个例子：Midjourney照片级作品提示（V5）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzIibcE4ZLmnhrS08pwa1tS5vooN4F1icWfJymwj4ydjCmViazAkhurubbRA/640?wx_fmt=png)

我们在使用Midjourney的时候，经常需要各种地方找关键词，每次写描述都是头炸的事，如果把ChatGPT和Midjourney结合起来用呢？只给一句话，让ChatGPT写出直接能用的描述，再把描述扔给Midjourney直接绘图。

这时候这条prompt就发挥用场了。

先新起一条对话，在开头把这段prompt输入进去。这条prompt的大致意思是让他充当Midjourney提示器，他要按照我举的例子和规范去撰写描述，只能使用英文回答，稍后我会把需要描述的主题发给他，明白的话回复明白。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzI8HbGRUw9iaFINQeWHpfibh1ibly8rNl3WfJo7ia5H28lfg1ffUgBeo8UjQ/640?wx_fmt=png)

这是后就能看到它回复了“明白”，这条对话也被存档，在这个对话下，所有发给他的信息，都会被自动转为专为midjourney写的描述。

我们在这个对话下，给他发一句:“天台上的情侣。”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzI6pic2cVh1IGlMu19uhaaI6rr1yIXUP8ugHMaPL0XeT1SZdHTPRpiasBA/640?wx_fmt=png)

他会直接帮我们生成四段完美符合midjourney V5版本的提示词，我们随便挑一段，扔到midjourney里看看效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzIfwpichcyxTw1NabWyp7swL3rTUCytNibtf9xvbictX4EFicD8Aj1eu8pmQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzIqJ9uLI3yZd61Bzxgklg3xaGa9jVgAAcc9DWzib3ianhsbFchBs7cpe3w/640?wx_fmt=png)

效果完美。

后续的这个对话，等于就变成了一个工具，发送的句子都会自动变成
midjourney的描述。大大提高效率。

第二个例子：小红书风格文章。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzI5NREiaQQIsYW3Og1v1APIibtZcK1Hnpxic44wZQI1daoBZcibicF8ZWzf1g/640?wx_fmt=png)

差不多的用法，也是在左边新建一个对话，在开头把prompt复制进去，开启小红书模式。后面就是开心的生成了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMCc25mS59Lwtico1EyLKzI5w4AbeVlyqCRI1YJFYZicUB4Hvx7MZeC6XAooU4qS8ia2rgP4xNAoAnQ/640?wx_fmt=png)

基本上会跟小红书非常一致，包括Emoji的运用，甚至最后还会直接生成标签。

对于小红书的运营者来说，这个对话框也可以大大提高效率，只要是需要写小红书风格的文案，只要找到这个对话，粘贴进去就完事。

最后额外提一句，之所以这些prompt都是英文，并不是我直接复制的国外的什么的，而是我用中文prompt试了无数版，效果都一般，且ChatGPT偶尔还会犯病。而用英文提示语则稳得一笔。只要在最后加一句“Your answer should be in Chinese”让后续用中文回答就搞定了。

而之所以prompt一定要让他回个：“明白”，是为了
更好用，只需要在开头输入一次
prompt就可以不用管了，而很多其他的
prompt都要带着
prompt和本身问题一起发给ChatGPT，每次临时要用还得回去找
prompt，用起来神烦，现在跟对话记录合并在一起，就非常非常轻松愉悦了。

以上。希望我的这份文档能给大家抛砖引玉，真正的把ChatGPT和
prompt用起来，解放生产力，而不是当一个大号玩具。

prompt文档关注我并私信回复“P”，后台就自动发你了。

也在此希望大家一起把这份文档建设好，因为个人对prompt的质量要求较高，所以不开放所有人的编辑权限了以免鱼龙混杂，但是也欢迎希望共同编辑的大佬们私聊我，一起完善。

大家有什么新的需求，也可以在评论区留言，我来帮大家写并更新在文档中。

以上，创作不易，有用的话请帮忙点个关注和在看，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
