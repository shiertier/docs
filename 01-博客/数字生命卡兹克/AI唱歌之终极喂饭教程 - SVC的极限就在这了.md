---
title: "AI唱歌之终极喂饭教程 - SVC的极限就在这了"
发布日期: 2024-01-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661219&idx=1&sn=74299c51f67863360c044b45a48658cf&chksm=f18c333b8c3c3ea26fd62399d1e1313dcb9982ed543c5f935f4761be33a4a31765d443b2ac00"
---

## 摘要

**1) 一句话总结**
本文提供了一份基于so-vits-svc（SVC）的AI唱歌模型全流程教程，详细说明了从数据集处理、AutoDL云端训练、音频推理合成到模型本地保存的具体步骤与参数配置。

**2) 核心要点**
*   **数据集准备**：需准备约1小时纯唱歌干声，覆盖低中高音域，在有吸音条件的环境中使用较好设备录制，切忌混用说话与唱歌数据。
*   **音频预处理**：使用剪映进行响度统一、人声美化（参数50）与降噪；使用Audio Slicer将音频切割为10-20秒的片段，并手动删除低于2秒或超过25秒的文件。
*   **云端环境配置**：推荐在AutoDL平台租用V100 32G显卡，使用`so-vits-svc-4.1`社区镜像（v12或更高版本），通过JupyterLab的`quickly`笔记本执行预处理代码块。
*   **主模型训练**：在终端执行 `python train.py -c configs/config.json -m 44k` 命令进行训练，建议训练步数在2万至6万步之间，模型质量需通过实际听感判定。
*   **推理环境启动**：在终端运行 `python app.py` 启动WebUI，通过配置AutoDL自定义服务代理来访问 `http://127.0.0.1:6006`。
*   **目标歌曲处理**：先用剪映分离目标歌曲的人声与伴奏，再使用UVR5（VR 5_HP模型）去除人声中的混响与和声以获取纯净干声。
*   **音频转换与后期**：在WebUI中加载模型与`config.json`，上传干声，将f0预测器设置为`rmvpe`进行音频转换，最后将生成的音频与伴奏在剪映中合并导出。
*   **模型保存**：需前往 `autodl-tmp/so-vits-svc/logs/44k` 路径，将训练好的模型文件下载至本地保存，以便下次复用。

**3) 风险与缺漏（原文明确提及）**
*   **数据混用风险**：绝对不能将正常说话数据与唱歌数据混用，否则会导致模型效果极差。
*   **显存溢出风险（OOM）**：直接使用未切割的长音频（如1小时）进行训练，或在运行UVR5时未关闭剪映等占用显存的软件，均会导致显存溢出。
*   **路径命名报错**：数据集的任何路径和文件命名若包含中文或特殊字符（如空格），会导致程序报错。
*   **音色削弱风险**：浅扩散模型（扩展模型）虽能修复部分哑音，但会削弱音色并导致音色泄露，建议仅训练主模型。
*   **云端数据丢失**：云端机器操作结束后若不及时将模型下载至本地，实例释放后会导致所有训练成果丢失。

## 正文

最近感觉AI文本、AI绘图、AI视频、AI 3D都没啥惊喜的项目了。

于是我又开始研究起了AI声音。

前几天刚发了一个
中文声音克隆的TTS项目 - BertVits2

然后昨天又看到群里好朋友一直在问用SVC做AI唱歌的事，但是没人理，那怎么行，所以我就来了，英雄登场。

这篇文章，为我的好朋友而写。

正好，离上次写SVC的教程，也快过了整整8个月的时间了，有兴趣想考古的可以去看看，虽然它已经没啥蛋用了：

我把我的声音训练成了AI模型，并让它唱了一首歌...（附超全面教程，你奶奶看了都会用）

当时还有很多问题，比如SVC自己的版本，高音部分很容易哑音、电流有点严重、音色不好、咬字不好等一堆问题。

而我的教程里，更是有很多错误，比如数据集的处理、人声分离的处理等等。

AI一天，人间一年。

所以到了今天，我也打算再摸一下SVC效果的极限，写一个SVC的超详细的教程，让大家有手就行，不用任何修音，都能做出目前最好的AI唱歌的效果。

先给大家听一下，我把我的声音训练成了模型后，唱《模特》和《王妃》的效果。

这首歌直接模型直出，没有任何后期没有任何修音，具体什么水平，各位看官可以自己评判。

话不多说，教程开始。

整体分为4步。

数据集的准备与处理。
主模型的训练。
最终推理与合成。
保存模型下次使用。

每一步我都会详细的说明，把我趟过的所有坑，一一写清楚，那毕竟，都是血和泪。

OK，开始吧。

一.
数据集的准备与处理

我一直说的一句话是：AI声音，90%的效果都是由数据集决定的。

所以，数据集的好坏，跟你最后的效果，呈绝对的正比。

这里我多说一句，也是我之前教程的错误：

正常说话数据和唱歌数据，绝对绝对绝对不要混用！

你要那种正常说话比如念台词的SVC模型，你就传1个小时说话的干声。

你要是做AI唱歌的SVC，你就传1个小时覆盖了低中高音域的唱歌的干声。

不要混用，效果很差！

同时，录音的时候，绝对要找个安静的地方，最好是类似录音室、直播间这种有吸音棉的地方，因为墙壁会反弹声音，会让声音有一点点混响的感觉。

收音的设备一定要好一点，用耳机或者麦，别对着手机就唱了。

音域一定要广，建议唱个4、5首超高音的歌，比如死了都要爱之类的，可以跑调，无所谓，你拼命唱上去就行了。反正只要你录一次，坚持一下，很快就完事。

录完了以后，可以再扔到剪映里面优化一下。把响度统一、人声美化（开到50）、音频降噪全勾上。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqTOHFpHNlyBouZdgVBj9b8da8eOY0V8YpqlF1dWic12RvY5mycoeJ7K4666gTdVrSl6F9DeKibKFqA/640?wx_fmt=png&from=appmsg)

你的一手数据集就算完事了。

接下来是切分数据集。因为你直接扔1小时的数据集直接拿去训练，显存必爆，所以我们得做一个切分。这里还是推荐使用
Audio Slicer（音频切分）将其剪裁成10秒~20秒左右的分段文件，你可以对着我公众号回复"SVC2024"，就有
Audio Slicer的下载链接了。

我们把
Audio Slicer
下载下来，解压后打开Slicer-gui。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCjRTqia1DFicLwJMMy3x3w38Xjn9RYNlibZjJYnPDicAgQjRwJoauBicib0yA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

然后把Minimun Length那一项改成8000，把我们需要处理的音频直接拖到左边窗口，在右下角选择输出路径。

同时此处注意，任何路径和文件命名，都不要带有中文和特殊的比如空格之类的字符！！！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSGNZu46lhHXtKqU92JHSkeAIzhD6uEbkiaCwT2xGHIqYzJXCPBQkJmxA/640?wx_fmt=png&from=appmsg)

扔进去以后，我们直接点最右下角的Start。速度非常块，十几秒就切割完了。我们去我们选择的输出路径就能看到我们的文件。

然后我们选择时长排序，把低于2秒的，超过25秒的都给删了。

至此，前期的数据集就算是处理完毕了~

二. 主模型的训练

有了优质的数据集之后，我们正式开始模型的训练。

打开国际炼丹场AutoDL：https://www.autodl.com/home

没注册的自己注册去，我就不管了。

在租卡页面，租一台北京C区的V100 32G。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSr0eUfboGt1kGwCaBD3caLC3CHIJFpxRog4e6bAESKbxuGhMQhZ1StQ/640?wx_fmt=png&from=appmsg)

然后去下面的镜像tab，在社区镜像中，搜
so-vits-svc-4.1。在弹出来的搜索联想框中，选用v12版本，在此文发出后，镜像依然可能会持续升级，如果在你使用的时候，出现了比v12还要高的版本，请使用你能看到的最高的版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSkVuYVqw2RlnFF7Ee3O6m6UmYYuf7JYYFTZXCBzQ0hQticGhDCqGwx1w/640?wx_fmt=png&from=appmsg)

都完事后，点立即创建。

你就会看到你的云机器在创建过程了，第一次创建拉取云上的镜像时间会久一点点，多等等就好。

当机器状态变成运行中的时候，点JupyterLab，进入操作系统。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSrmdLC3qqH7Um4UwmIOJtggxzyFn0ZgvGCPu6YibCLRZCgPq08lSibE2g/640?wx_fmt=png&from=appmsg)

正常应该是直接打开了记事本的这个页面，如果你进来发现是空的，没有任何文字，请双击一下点开这两个记事本文件，就有了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSjqvtxB137dns91EDwyvCVUIuLPjciar8RvLOwzDrU9llPwBY8ZgzTeA/640?wx_fmt=png&from=appmsg)

你如果想看一下具体的详情学一些知识，可以把这个有一堆文字的记事本看完，但是如果你懒得设置这么多东西看这么多字，可以直接点quickly这个笔记本，我们直接快速开始。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSgdl0aozdokVeYwribuCBeHHNTZXkTIIEibRqzdHbuHFlicMSHvQ0FxC3w/640?wx_fmt=png&from=appmsg)

进入quickly这个笔记本后，点击第一个代码块，也就是：
#移动项目文件夹到数据盘以节约系统盘空间。然后点击上方的三角图标，运行代码块。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXS75dg8VzMYwiapX5wWoFL1e5vp2sibNq9ZfOTy2PHp21mGic6VyAarwQfw/640?wx_fmt=png&from=appmsg)

此时注意一下右上角的圆圈，
空心圆则代表机器目前空闲状态没有正在运行的东西，实心圆则代表系统正在运行中。你运行代码块后，圆圈会从空心圆变成实心圆，运行完成后，实心圆会变回空心圆。

第一步移动项目文件夹运行完成之后，我们在左边的文件栏，进入这个路径：autodl-tmp/so-vits-svc/dataset_raw，在这个文件夹里，新建一个文件夹，比如我叫Khazix，我那就新建一个Khazix的文件夹。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSS8dFM55NI8oeRNU8G9b5UwxepVYfeSj9LPibOofdnD9c5BJiaJrELD7A/640?wx_fmt=png&from=appmsg)

再点开这个Khazix的文件夹，把我们第一步处理完的所有数据集直接拖过来，传上去。
（PS：我知道传压缩包再用解压命令速度更快，但是不是所有人都懂linux解压命令，所以别杠，我更喜欢让普通人都懂都直观没有思考成本的方式去写教程。）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSzFbgsScuPY9cYwesuApiaBDibribmpdmbviaJJDjZUJicAQoLW3aMOR1rcw/640?wx_fmt=png&from=appmsg)

当这个蓝条跑完并消失后，你的数据就已经全部上传成功了。

回到右边的记事本，预处理这四部，挨个运行就行，注意下右上角圆圈状态，运行一个后，圆圈状态从实心圆变成空心圆后，再运行下一个代码块。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSeTasWOVPYZicp2Ra2keDwc9fmFVib4epVz4NRaE0dqco2Q5nmPAGunJw/640?wx_fmt=png&from=appmsg)

前三步：#进入项目文件夹、#重采样、#默认使用带响度嵌入的768成功运行后，就是我截图的这个运行反馈。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXS3CZl69NnD8Clia1ZVVD2fILx3dbVMxeV9kQSaF9qiclBiaerUdLJ5sL7A/640?wx_fmt=png&from=appmsg)

第四步：#默认使用rmvpe且带浅扩散，会跑的旧一点并且有进度条，运行成功以后，是这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSJibMuCuicFpLxxHydh6EkjoIq2NsibWibl9t2YgMDM40OsaXtsbnqiac5wg/640?wx_fmt=png&from=appmsg)

OK，所有的预处理已经全部完成，接下来开始正式训练。

在训练这部分有两个，一个叫浅扩散模型，一个叫主模型。主模型是核心，也是需要先训练的，浅扩散模型属于扩展模型，能增强效果，但是会削弱不少音色。

所以只进行主模型训练就行，所有的训练和推理都不要直接点笔记本的代码块直接运行了，不好管理。

保持左边路径是autodl-tmp/so-vits-svc里，点击右上角+号，在新页面中选择终端。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSiauEs0RHuibBdovDfLdTyQ00kxpszB4pjCUWbhqhHGJuzLwoiaAr7IL9w/640?wx_fmt=png&from=appmsg)

然后在命令行中输入命令：

python train.py -c configs/config.json -m 44k

如果报错，请先看看你是不是在
autodl-tmp/so-vits-svc新起的终端。

正式训练后，就长这个样子，左边的那些Epoch是轮数，没啥大用，主要看右边的步数，1w步左右可以去听，2w步差不多就可以用了，最多不要超过6w步。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSE9FcMCpv0NuOPz7hhmPCRMClp2uibl2cepbbI59PMYfsUFWicP95xozA/640?wx_fmt=png&from=appmsg)

至于如何判定模型效果好不好，在我实验下来，任何参数都没啥绝对的意义。

请记住，用你的耳朵，你的耳朵，就是你最好的分辨器。1w步后的每个模型，用你的耳朵，推理后，去听。

三.
最终推理与合成

模型差不多了以后，可以一边训练，一遍开启推理的WebUI界面，去做歌，试着听一听。

跟训练的步骤类似，保持左边文件夹
保持左边路径是autodl-tmp/so-vits-svc里，点击右上角+号，在新页面中选择终端。新建一个命令行页面。

输入代码：

python app.py

等一会后，你就能拿看到两个链接冒出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXS8AMOR2fd0wqzOkDzHgo6AtB06nxEPvIfr42r6ZE2kQxzMvhpR9OiadA/640?wx_fmt=png&from=appmsg)

只看第一个这个http://127.0.0.1:6006链接就行。

先别复制打开，因为你打不开。

回到容器实例首页。点击自定义服务。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSAcibYH4Ty0gHpe6IlspcBZ2MHKq3uZPxCFGlPR7JALJ6bqFBdzCNUEQ/640?wx_fmt=png&from=appmsg)

就会弹出来弹窗，按的教程和要求来就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXS2zhuWWiaJns01eMWH94fbJhl7t5dLLdmRrx8jkbrLlknJptkSjqjs7A/640?wx_fmt=png&from=appmsg)

等把代理挂上以后，你就能打开
http://127.0.0.1:6006这个链接了。

打开以后，3个挨个点，模型那块选择具体是哪个模型。配置文件默认是 no_config，不要忘了点开换成config.json。最后再点一下加载模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSc6dfpBnibJHrQFC0KZo8WZKMk8CftwGaHfHfgEef4IicgnpK3ibQia8lkg/640?wx_fmt=png&from=appmsg)

加载完了以后，你就可以看到反馈了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSlRxB6gVP03S3TGZYN7teUMJQPTxXlMHDhMx0fwJgaXyflUqN37gUAA/640?wx_fmt=png&from=appmsg)

扩散模型和聚类模型是两个扩展模型，聚类模型你炼说话模型时有用，会增加咬字，唱歌模型没啥大用，不用管，浅扩散模型可以修复部分哑音，但是会出现一些音色泄露问题，你数据集弄好。也不用管。

再下面，就是要传你的音乐的地方了。

一般流程是：下载音乐 - 分离人声与伴奏 - 人声推理 - 最后推理完的人声与伴奏合成。

下载音乐这块我推荐一个免费的贼牛逼的音域下载网站：

https://tools.liumingye.cn/music

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXS9v5CcxdTFE8mPyGKiaObyCd2riaicKCtVkpvVBwoFr3Act81P7jGvLJLg/640?wx_fmt=png&from=appmsg)

没什么可说的，除了良心，还是良心，且用且珍惜。

下载下来以后，去剪映里分离人声和伴奏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSPVkaTqKZCT4ibgDqSnTkG5nasBPQudrIUWAicnY287FoH4uyqsn9ibGicQ/640?wx_fmt=png&from=appmsg)

我其实想了很久，到底推荐大家用UVR5的MDX23C还是剪映。

最后我觉得还是剪映吧，剪映这个人声分离，能达到UVR5的MDX23C的90%左右水平，主要是真的有手就行，点一下就完事。。。。。。而你要研究UVR5的那些模型，能干吐你，而且大概率你显卡也跑不动。

所以在剪映里，你分离两次，一次仅保留人声、一次仅保留背景音，还可以把那个人声再人声美化一下，最后，再把人声的那条单独导个WAV出来。

注意，出来的人声WAV还是没法直接用，因为里面可能会带混响和和声。所以还是要用UVR5的VR 5_HP去一下混响和和声。

你直接对着我公众号回复"SVC2024"，就有UVR5的下载包了。

正常安装完打开以后。按照我图片里的设置，把参数改一下，然后点那个Start。跑之前，记得把剪映关了，要不然很容易爆显存。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSI3jwzhgrYjQfPrJzPiaSQo9VK2CPr3FvWpbI6mQWa7RQ2nP7Sr3HmnQ/640?wx_fmt=png&from=appmsg)

分离完以后，你就有一个非常棒的干声了。

最后回到SVC的WebUI页面，把你的干声直接传上去，传5分钟的都没事，不用担心爆显存。然后把这个
f0预测器，换成rmvpe。其他的什么都不管，直接点击音频转换。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSA7LicyvIGAJ9bGwzdCKOQu1Ugc3xyqxeiaTlCO42eVYMBej7ibTCzEw6w/640?wx_fmt=png&from=appmsg)

几十秒后，你的歌曲就替换完成了。

现在，你就是这首歌的，唱歌人了。

（总感觉这话说的，像破壁人。。。）

最后，去剪映里自己把人声和伴奏音轨叠一起，导出就完事了。这个我就不教了。要不然文章又奔着5000字去了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXS1jgT4x5LI7ABFcS1YC9J7iaH2oRUZ5LaWaNpWfRYIkJ7Frb66AjbDlQ/640?wx_fmt=png&from=appmsg)

四.
保存模型下次使用

云端的一大弊端就是，你弄完了，不及时保存的话，就全部白弄了。

所以，一定要把模型保存下来。

来到这个路径：

autodl-tmp/so-vits-svc/logs/44k

你就能看到你的模型了，你可以把这个两个模型下载到本地，万无一失的留着。下载再用的时候，直接再开台机子，把这两玩意，传到同样的文件夹里，就OK了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqOXORJAG9qcfeHez3McAXSthibH0yWvLDEGFjiah1iaWW6unc2VbWiaz1vKwZqVdrfnEhybg2QcbnzNw/640?wx_fmt=png&from=appmsg)

写在最后

说实话，做教程还是心累，因为默认得把所有人都当小白，尽量把所有我趟过的坑都讲到，让大家避免跟我犯同样的错误。还得写的不长篇大论，让大家跟着有手就行的就能做下去。

但是希望花费的这些时间、精力。

能对大家有一些用处。

但行好事，莫问前程。

那前路也永远会有意外的惊喜等着你。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
