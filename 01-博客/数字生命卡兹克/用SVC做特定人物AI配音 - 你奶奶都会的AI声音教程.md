---
title: "用SVC做特定人物AI配音 - 你奶奶都会的AI声音教程"
发布日期: 2023-10-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659961&idx=1&sn=66c2cb611ee17a217cbbd15acedbfd5a&chksm=f1dd0208477b5216550af265a0ef44de55106e75e2fee139a427cfc9d9c485c6a2e0b7d76288"
---

## 摘要

**1) 一句话总结**
本文是一篇面向新手的AI声音克隆教程，详细介绍了如何使用SVC技术，通过准备纯净音频数据集、在AutoDL云端配置并训练模型，最终实现特定人物声音的AI转换。

**2) 关键要点**
*   **技术原理**：SVC技术类似于特定人物的声音变声器，用户输入一段自己录制的音频，AI会自动将其转换为目标人物的声音。
*   **数据集要求**：需准备5~10分钟（理想状态为30分钟至2小时）干净、无混响的干声音频，导出为WAV格式。
*   **音频预处理**：需使用UVR5工具分两步处理音频（先去伴奏，再去混响）以提取纯净人声。
*   **音频切分**：使用Audio Slicer工具将长音频切分为10秒左右的短句（Minimum Length参数设为8000）。
*   **云端环境配置**：在AutoDL平台租用V100-32G实例，选择`svc-4.1`（V10版本）社区镜像，并在JupyterLab中上传数据集至指定目录。
*   **核心参数设置**：编码器选择`vec768l12`，f0预测器选择`rmvpe`；在`config.json`中将`batch_size`改为12，`learning_rate`改为0.0002，`keep_ckpts`改为10。
*   **模型训练与评估**：通过终端运行`python train.py -c configs/config.json -m 44k`开始训练；模型每800步保存一次，约3000步左右可用，损失值（loss）越低越好（参考值22~28）。
*   **云端推理使用**：运行`python app.py`启动WebUI，选择训练好的模型，上传原声音频，勾选自动F0预测并选择`rmvpe`预测器，即可生成转换音频。

**3) 风险与注意事项**
*   **显存溢出风险**：UVR5处理音频时不要与剪映同时打开，否则会爆显存；长达1小时的音频文件直接用于训练必定会爆显存，必须提前切分为短段。
*   **路径命名规范**：任何文件路径和文件命名，绝对不能包含中文或特殊字符（如空格）。
*   **代码修改注意**：在启用`rmvpe`预测器时，只能删除代码前的`#`号，绝对不能删除`!`感叹号。

## 正文

前几天我又做了一个《流浪地球》的二创，其中台词配音用了李雪健老师的声音，很多人来问我，这个声音是怎么实现出来的。

其实几个月之前，我写过AI声音的几篇教程，不过这眨眼间，小半年过去了，现在的AI声音质量已经有了质的飞跃，体验也已经简单很多了，也属于你奶奶都会的级别了。

所以我想再写一篇教程，有手就行的带大家来训练一些特定人物的声音模型，这个东西我个人认为在一些影视、音乐和配音领域还是蛮有用的。

先简单的说一下这个技术，SVC，你就把它简单的理解成一个特定人物声音的变成器，你自己先录一段音频，然后把这个音频扔给AI，AI就自动产出另一个人声音的音频了。

比如我这个视频，我是自己先念了一段台词：

然后用AI转成了李雪健老师的声音：

你们可以听一下，大概就是这样的效果。

训练这样的声音模型整体需要3步：

准备声音数据集。
在云上训练模型。
在云上使用AI声音。

我们一步一步来，
不用发怵，我都能做出来，你也一定能
。

一. 准备数据集

这个其实没有一个固定的方法，只要你能找到5~10分钟左右的干净的人声就行，我是直接从李雪健老师过往的影视作品中选了他的片段。

然后扔到剪映里，把他的声音单独剪出来，最后导出的时候只导出WAV格式的音频就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbHwiaJswd5cGFWsgeCY5XoHXCSgTIXH3lKJkPYTvgtj2x0fpVia3EBJEg/640?wx_fmt=png)

理论上30分钟到2小时的数据集这个量肯定是最好的，但是你要是实在搞不到那么多，5分钟10分钟的迷你数据集拿去训练也不是不行，但是一定要干声，要干净，别有乱七八糟的混响声音之类的。

这块我建议还是用神器
UVR5去一下你的伴奏和混响。
要用的工具我都打好包了，对着后台私信"S"就行。

UVR5分两步，第一步先去伴奏，把你的声音素材input进去，参数如下，直接Start，注意UVR5不要跟剪映同时开，会爆显存。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCH7d8fOrg131T9VSTuRjBVYVnK9sicT2fjlNkYEnz77V5cJs8hJmW8Iw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

成功了以后，我们去到我们设置的输出目录下，就能看到两个文件，有一个后缀带有
Vocals的，再input到UVR5中，按如下参数设置，去掉混响。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCvHxBa4eYs2MEBmvXu8LDzXzpOQtCvCPzuwMa1AhuuWpiauOYkYOMV9A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

最后你还会得到一个XX_
Vocals_
Vocals的文件，就是一个非常干净的人声了。

再使用整合包里的工具Audio Slicer（音频切分）将其剪裁成10秒左右的分段文件，因为你1个小时的文件直接拿去训练是必爆的，所以我们需要将他拆成10秒左右的1小段1小段。

打开整合包中的工具
Slicer-gui。
然后把Minimun Length那一项改成8000，把我们需要处理的音频直接拖到左边窗口，在右下角选择输出路径。
同时此处注意，任何路径和文件命名，都一定不要带有中文和特殊的比如空格之类的字符！！！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCCiaCpTA8UzibU86v4ZoCQEvV8baZ7VeVibIoaN1bAAuIDYJqjCOqy27aA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

这样数据集就处理完毕了。接下来就是轻松愉快的训练。

二. 在云上训练模型

打开我们的老朋友AutoDL，
https://www.autodl.com/

注册好账号以后，自己充值，10~30块就差不多了。然后我们点击控制台 - 容器实例，来到这个页面，再点击租用新实例（实例你可理解为就是一台电脑的意思）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbd5bcHwTctRZFq0y5m1iaNyeibM2qib2k4LFBMOhHmvbrre8qSIM9WxeLg/640?wx_fmt=png)

直接选北京C区，V100-32G，在下面的社区镜像中搜so-vits，选这个
svc-4.1，V10版本的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbGoygZnN8PJOon2ibhvAgNEveLNExHFIu5yYu7fotFTkdIYqb8cNHAUw/640?wx_fmt=png)

然后创建，第一次稍微等一会，毕竟这个镜像20个G，有点大，下载还是要一段时间的。

等好了后，直接点这个JupyterLab。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbLYaaxfexbUVVgAe6boyXBrysyeGxHiav5XD6tfPK4W7DmxRHSYJE7GQ/640?wx_fmt=png)

进去以后，点一下左上角这个。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbQ1RMuJqQKBv9zOBia7L07o48DKWeHR1NQCx7hzWXLo3XvzFUTDAt24w/640?wx_fmt=png)

再然后里面的东西其实都很详细了，你跟着教程点点点，真的就是有手就行。前面那一大堆玩意不用看，直接往下拉。找到这个#移动项目文件夹，点顶上的三角播放。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbC0C2sZiboqBUGzNBJSqzCI93FQTdNmibw9BUuTrGb0QFKW5O35PFGk1w/640?wx_fmt=png)

等右上角这个实心圆变成空心圆，就说明这一步跑好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbIQISz9bzkCiachllgSD0gQvibVxbQvGPE3jnUOLshFxqK7ticnHibVenEQ/640?wx_fmt=png)

然后再运行进入项目文件夹那个代码块。

这块点完要小停一下，我们需要把我们的数据集传上去。

在左边的文件管理器里，进入autodl-tmp/so-vits-svc/dataset_raw，先新建一个文件夹，比如我就新建了一个叫lixuejian的。

再把你刚才切出来的数据集文件直接全部都拖进去就行。

这样数据集就传好了，再运行这个代码块。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbdTB7wuIaZx0NgQ8AnG5OsAAQQYDKJQG7fmZ3j2pBz1RmIatqdyjgAg/640?wx_fmt=png)

1s就运行完了，运行完之后，在下面
选vec768l12编码器
，再运行代码块。下面那几个就不用管了，这个编码器是6选1。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbgnAAuzKptcdS3YeJV1LD8CcEUsEuGWIVGRLuljPxoE7p6BNAFF5JaQ/640?wx_fmt=png)

运行完后下滑，找到f0预测器。删掉第二条rmvpe预测器前面的那个#号，
！感叹号不要删，只删这一个#符号就行
，这其实也是个6选1。
然后一样点左上角三角按钮运行代码块。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbYuHxn54ZmocflH4JNkic4icGfITF7Cn0qQ0yYhZGYCV5GvsrJdFdeXtg/640?wx_fmt=png)

完事了以后，下面的其他的代码块先不用管，去到左边文件管理器，按这个路径autodl-tmp/so-vits-svc/configs，找到config.json文件。

右键，打开方式-Editor。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbBo7ZAicfdKAWLwBdXz2xKY3h7r1icQSEsxSOyMiaBJTgkPMNiaxnHKu2ug/640?wx_fmt=png)

然后改几个参数。

"batch_size": 6改成12；

"learning_rate": 0.0001改成0.0002；

"keep_ckpts": 3改成10；（从最多保存3个模型变成最多保存10个模型）

改完以后，Ctrl+S保存。关掉。

保持在当前在svc这个目录下，点右上角的加号，新建1个终端。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbX2Cs0iaxH7qKzrc1DibSqlVv3va88GSUvECRMGyhVlhiasXLxVlBt6ATg/640?wx_fmt=png)

在终端里输入我这块的代码

python train.py -c configs/config.json -m 44k

训练就正式开始了。你一步一步按我的来，基本不会有任何报错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbYT64yTAueIkiccZClQa9w2wRlWt1shzZTj7TNlENwMXBjicjISlgp8Mg/640?wx_fmt=png)

三. 在云上使用AI声音。

模型训练开始后会有步数提示，每训练800步会保存一个模型，基本3000步左右的那个模型你就可以去听听了。

可以稍微注意一下一个叫
loss（损失值）的参数，越低越好，一般是在28左右，如果给你保存的那个是在22啥的，那就是还不错的模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbcgv2xkGhGz9vmoN1QeB74u9g6udeh0IbSogbPCia4L5BOlkYeu3GEFg/640?wx_fmt=png)

模型保存在autodl-tmp/so-vits-svc/logs/44k这个目录下，这些D和G开头的就是。后面的编号一般都是800倍数，比如800、1600、2400等等。我从别的地方直接拽了一个已经训练好的模型当示意。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbtwKGNULEskFEBMJzIaZjQIEUWIhV3icC2AyRulu2xLF4JrHtOZ1Wpyg/640?wx_fmt=png)

你要是觉得模型质量不错，可以下载到本地，一样，都通用。

然后就是推理了。

还是
保持在当前在svc这个目录下，再新建一个终端，输入我这个代码

python app.py

你就能看到多出来两个链接

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbrwEOFfbVTC716uJ88iafj3AVnic0ZbrBpLnVVRs53pEEGngvbCOGRrvw/640?wx_fmt=png)

把第二个复制粘贴到你的网页。

就能看到WebUI了。

然后把这两个下拉选项选成你的模型就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbibt7pdtR2LDkY0ibc1ENBpwBQEyibW1fObuW2zibfONxiaHIcbF6rIRCxXg/640?wx_fmt=png)

每几秒钟，你就能看到这么一条提示，你的模型被加载了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrb9ia8ato7kKE03GJicdR5OiaxkwjsJAzgSgDSZ1ibQXe9wBsR3m8jBH69Zg/640?wx_fmt=png)

再然后，传上你自己的音频，勾选上自动F0预测，F0预测器选择之前的rmvpe，愉快的点击音频转换就可以啦~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMkWC60ibJ5Aq2XjgsGUvrbDvbGfqkJnDeLdfgibNyVPOdXSQxM4579V1nsv2LbBp0dib7LkWG6IVjg/640?wx_fmt=png)

得益于V100的算力和大显存，2分钟的音频都不会爆，直接推理就行。大概十几秒后，就OK啦！

接下来，你就自己去见证奇迹吧哈哈。

写在最后

从2月到5月，从5月到10月，不知不觉，我已经写了8个月了。

时间真如老狗，跑的真特么让人追不上。

AI的进化速度和新工具的出现速度，也让我这种普通人难以企及，别说学懂研究透，我耗尽了我所有的时间，能勉强跟上它的变迁，我已经是觉得非常艰辛了。

前一段时间看了
稚晖君的视频，我真的挺感慨。人跟人的学习能力实在是差距太大太大了。

那种神一样的学习能力和知识海，我可能这一生都无法企及。

而在AIGC领域，我更不是什么大牛，在真正的大佬面前，我就是一个很小的小卡乐咪。

但是看完他的视频，我也突然明白了自己的定位。

我就是AI世界的一个小小的门童，用各种稀奇古怪的作品和奶奶都会的教程，让没见过这个世界的人，看一眼这个世界的玄妙。

如果能引领他们走进AI的殿堂，那我这个门童的使命，也就真正达成了。

人嘛，总是要给自己找点价值，不是嘛。

现在，我找到了。

⭐～感
恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
