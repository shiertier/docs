---
title: '在 Databricks 上扩展 ML 推理：Liquid 聚簇还是分区？加盐还是不加盐？'
发布日期: 2026-02-28
来源: 'Towards Data Science'
原文链接: 'https://towardsdatascience.com/liquid-or-partitioned-salted-or-not-scaling-ml-inference-on-databricks/'
作者: 'Towards Data Science'
译注: '原文无可用官方中文正文，使用 Gemini 翻译并经助手最小必要校对整理。'
---

## 摘要

### 1) 一句话总结
本文评估了在 Databricks 上针对严重倾斜的 5.5 亿行数据集进行机器学习推理的四种数据布局策略，最终得出“动态加盐结合 Liquid 聚簇”是最大化集群利用率、消除数据倾斜并显著缩短推理时间的最佳方案。

### 2) 关键要点
* **背景与性能瓶颈**：初始推理作业在 420 核集群上处理 18 个分区耗时近 10 小时仍未完成。根本原因在于数据严重倾斜（产品 D 占总数据量的 79.7%），导致少数执行器过载，而大量计算核心闲置。
* **测试场景**：对比了四种数据存储方案：不加盐且分区、加盐且分区、不加盐且 Liquid 聚簇、加盐且 Liquid 聚簇。
* **动态加盐实现**：根据产品数据量比例动态分配盐值（salt buckets），数据量越大的产品分配的桶越多；同时在写入时强制限制每个文件最大 100 万行（`maxRecordsPerFile`），以确保文件大小适合推理。
* **AQE 的局限性**：仅依赖 Spark 的自适应查询执行（AQE）无法解决该场景下的并行度不足和集群利用率低的问题。
* **不加盐方案表现极差**：无论使用传统分区还是 Liquid 聚簇，不加盐都会导致产品 D 仅生成 18-19 个分区（平均每个分区约 4000 万行），远远无法跑满 420 个可用核心。
* **加盐且分区显著提升性能**：加盐后，产品 D 的分区数增加至约 860 个，成功将推理运行时间大幅缩短至 3 小时。
* **最佳方案（加盐且 Liquid 聚簇）**：结合了加盐的并行度控制和 Liquid 聚簇的自适应文件布局。该方案实现了最均匀的任务分布，减少了极端异常值，并在不强制严格分区边界的情况下保留了数据本地性（Data Locality）。

### 3) 风险与不足（基于原文明确提及）
* **测试受限**：由于项目预算和时间非常紧张，且业务部门耐心有限，无法进行详尽的全面测试（例如因预估成本过高，直接跳过了“不加盐且 Liquid 聚簇”场景的完整推理测试）。
* **Spark 分区行为不可控风险**：即使计算并应用了盐值，Spark 仍有可能生成包含过多行的分区，必须通过代码强制限制最大行数（100 万行）来规避此风险。
* **长尾任务遗留问题**：在“加盐且分区”场景中，虽然整体时间缩短，但最长任务仍耗时 3 小时，表明存在残余倾斜，原文指出这需要在未来进一步调查。
* **数据布局导致的资源浪费风险**：如果文件分区太少或大小不合理，会导致集群花费大量时间扫描大文件，造成数百个核心闲置，而少数执行器被数千万行数据压垮。

## 正文

## 简介

四个不同产品的连续变量。该机器学习流水线（pipeline）构建于 Databricks 之上，包含两个主要组件。

1.   使用 [无服务器计算 (serverless compute)](https://learn.microsoft.com/en-us/azure/databricks/compute/serverless/) 在 SQL 中进行特征准备。
2.   使用作业集群（job clusters）对包含数百个模型的集成模型进行推理，以便控制计算能力。

**_在我们的首次尝试中，一个 420 核的集群花了近 10 个小时仅仅处理了 18 个分区。_**

目标是**调整数据流以最大化集群利用率并确保可扩展性。** 推理是在四组 ML 模型上进行的，每个产品一组。然而，我们将重点关注**数据是如何保存的**，因为这将决定我们在推理时**能够利用多少并行度**。我们不会将重点放在推理本身的内部工作原理上。

> 如果文件分区太少，集群将花费大量时间扫描大文件，此时除非重新分区（这意味着增加网络延迟和数据混洗/shuffling），否则你也可能在每个分区的大量行上进行推理。这同样会导致运行时间过长。

![Image 1](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-7-1024x576.jpeg)

图 1. 如果需要，不要害怕给你的数据加点“盐”。照片由 [Faran Raufi](https://unsplash.com/@faran_raufi?utm_source=medium&utm_medium=referral) 发布在 [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral) 上。

然而，业务部门对于交付对组织有直接影响的 ML 流水线的耐心是有限的。因此，测试也是有限的。

在本文中，我们将回顾我们的特征数据概况，然后概述 ML 推理，并基于四种数据集处理场景展示推理性能的结果与讨论：

1.   分区表，不加盐，分区内无行数限制**_（不加盐且分区 / non-salted and Partitioned）_**
2.   分区表，加盐，限制 100 万行**_（加盐且分区 / salty and Partitioned）_**
3.   Liquid 聚簇表，不加盐，分区内无行数限制**_（不加盐且 Liquid 聚簇 / non-salted and Liquid）_**
4.   Liquid 聚簇表，加盐，限制 100 万行**_（加盐且 Liquid 聚簇 / salty and liquid）_**

## 数据概况

该数据集包含这组 ML 模型用于推理的特征。它拥有约 5.5 亿行数据，并包含由属性 `ProductLine` 标识的四个产品：

*   **产品 A：** 约 1045 万 (1.9%)
*   **产品 B：** 约 440 万 (0.8%)
*   **产品 C：** 约 1 亿 (17.6%)
*   **产品 D：** 约 3.54 亿 (79.7%)

此外，它还有另一个低基数（low cardinality）属性 `attrB`，该属性仅包含两个不同的值，用作过滤器，为 ML 系统的每个部分提取数据集的子集。

此外，`RunDate` 记录了特征生成的日期。它们是仅追加（append-only）的。最后，使用以下查询读取数据集：

```sql
SELECT
  Id,
  ProductLine,
  AttrB,
  AttrC,
  RunDate,
  {model_features}
FROM
  catalog.schema.FeatureStore
WHERE
  ProductLine = :product AND
  AttrB = :attributeB AND
  RunDate = :RunDate
```

## 加盐实现

这里的加盐是动态生成的。其目的是根据数据量来分布数据。这意味着大型产品分配到更多的桶（buckets），而小型产品分配到较少的桶。例如，考虑到数据概况中的比例，产品 D 应该分配到大约 80% 的桶。

我们这样做是为了获得可预测的推理运行时间，并最大化集群利用率。

```python
# Calculate percentage of each (ProductLine, AttrB) based on row counts
brand_cat_counts = df_demand_price_grid_load.groupBy(
   "ProductLine", "AttrB"
).count()
total_count = df_demand_price_grid_load.count()
brand_cat_percents = brand_cat_counts.withColumn(
   "percent", F.col("count") / F.lit(total_count)
)

# Collect percentages as dicts with string keys (this will later determine
# the number of salt buckets each product receives
brand_cat_percent_dict = {
   f"{row['ProductLine']}|{row['AttrB']}": row['percent']
   for row in brand_cat_percents.collect()
}

# Collect counts as dicts with string keys (this will help
# to add an additional bucket if counts is not divisible by the number of
# buckets for the product
brand_cat_count_dict = {
   f"{row['ProductLine']}|{row['AttrB']}": row['count']
   for row in brand_cat_percents.collect()
}

# Helper to flatten key-value pairs for create_map
def dict_to_map_expr(d):
   expr = []
   for k, v in d.items():
       expr.append(F.lit(k))
       expr.append(F.lit(v))
   return expr

percent_case = F.create_map(*dict_to_map_expr(brand_cat_percent_dict))
count_case = F.create_map(*dict_to_map_expr(brand_cat_count_dict))

# Add string key column in pyspark
df_demand_price_grid_load = df_demand_price_grid_load.withColumn(
   "product_cat_key",
   F.concat_ws("|", F.col("ProductLine"), F.col("AttrB"))
)

df_demand_price_grid_load = df_demand_price_grid_load.withColumn(
   "percent", percent_case.getItem(F.col("product_cat_key"))
).withColumn(
   "product_count", count_case.getItem(F.col("product_cat_key"))
)

# Set min/max buckets
min_buckets = 10
max_buckets = 1160

# Calculate buckets per row based on (BrandName, price_delta_cat) percentage
df_demand_price_grid_load = df_demand_price_grid_load.withColumn(
   "buckets_base",
   (F.lit(min_buckets) + (F.col("percent") * (max_buckets - min_buckets))).cast("int")
)

# Add an extra bucket if brand_count is not divisible by buckets_base
df_demand_price_grid_load = df_demand_price_grid_load.withColumn(
   "buckets",
   F.when(
       (F.col("product_count") % F.col("buckets_base")) != 0,
       F.col("buckets_base") + 1
   ).otherwise(F.col("buckets_base"))
)

# Generate salt per row based on (ProductLine, AttrB) bucket count
df_demand_price_grid_load = df_demand_price_grid_load.withColumn(
   "salt",
   (F.rand(seed=42) * F.col("buckets")).cast("int")
)

# Perform the repartition using the core attributes and the salt column
df_demand_price_grid_load = df_demand_price_grid_load.repartition(
   1200, "AttrB", "ProductLine", "salt"
).drop("product_cat_key", "percent", "brand_count", "buckets_base", "buckets", "salt")
```

最后，我们将数据集保存到特征表中，并添加每个分区的最大行数限制。这是为了防止 Spark 生成包含过多行的分区，即使我们已经计算了盐值，Spark 仍有可能这样做。

为什么我们要强制限制 100 万行？主要关注点是模型推理时间，而不是文件大小。在对 100 万、150 万、200 万行进行了几次测试后，第一种情况在我们的案例中产生了最佳性能。再次强调，这个项目的预算和时间非常紧张，所以我们必须充分利用我们的资源。

```python
df_demand_price_grid_load.write\
   .mode("overwrite")\
   .option("replaceWhere", f"RunDate = '{params['RunDate']}'")\
   .option("maxRecordsPerFile", 1_000_000) \
   .partitionBy("RunDate", "price_delta_cat", "BrandName") \
   .saveAsTable(f"{params['catalog_revauto']}.{params['schema_revenueautomation']}.demand_features_price_grid")
```

## 为什么不直接依赖 Spark 的自适应查询执行（AQE）？

回想一下，我们的主要关注点是推理时间，而不是针对常规 Spark SQL 查询（如文件大小）进行优化的指标。实际上，仅使用 AQE 是我们最初的尝试。正如您将在结果中看到的，考虑到我们的数据比例，运行时间非常不理想，并且没有最大化集群利用率。

### 机器学习推理

有一个包含 4 个任务的流水线，每个产品一个任务。每个任务执行以下常规步骤：

*   加载对应产品的特征
*   加载对应产品的 ML 模型子集
*   在由 `AttrB` 切分的一半子集上执行推理
*   在由 `AttrB` 切分的另一半上执行推理
*   将数据保存到结果表

我们将重点关注其中一个推理阶段，以免本文充斥过多数据，尽管另一个阶段在结构和结果上非常相似。此外，您可以在图 2 中看到要评估的推理的 DAG。

![Image 2](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1rF_T7GEQJOImSAW740V8iQ.png)

图 2. ML 推理 Spark 阶段的 DAG。作者自制。

看起来非常简单直接，但运行时间可能会因数据的保存方式和集群的大小而异。

### 集群配置

对于我们正在分析的推理阶段，每个产品都有一个集群，这些集群针对项目的基础设施限制以及数据分布进行了调整：

*   产品 A：35 个工作节点 (Standard_DS14v2, 420 核)
*   产品 B：5 个工作节点 (Standard_DS14v2, 70 核)
*   产品 C：1 个工作节点 (Standard_DS14v2, 14 核)
*   产品 D：1 个工作节点 (Standard_DS14v2, 14 核)

此外，默认启用了 AdaptiveQueryExecution (AQE)，这将让 Spark 根据您提供的上下文决定如何最好地保存数据。

## 结果与讨论

对于每个场景，您将看到每个产品的文件分区数量以及每个分区的平均行数的描述，这能让您了解 ML 系统在每个 Spark 任务中将对多少行进行推理。此外，我们展示了 Spark UI 指标，以观察运行时性能并查看推理时的数据分布。为了避免包含过多信息，我们将仅针对最大的产品 D 展示 Spark UI 部分。此外，根据场景的不同，产品 D 的推理会成为运行时间的瓶颈。这也是它成为结果主要关注点的另一个原因。

#### 不加盐且**_分区_**

您可以在图 3 中看到，平均每个文件分区有数千万行，这意味着单个执行器（executor）需要相当长的运行时间。平均最大的是产品 C，单个分区超过 4500 万行。最小的是产品 B，平均约 1200 万行。

![Image 3](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/13DQdKiP3ZdTPxU4BDzolmw.png)

图 3. 分区中的平均行数与产品的对比。

图 4 描绘了每个产品的分区数量，总共 26 个。查看产品 D，18 个分区远远达不到我们可用的 420 个核心，并且平均而言，每个分区将对约 4000 万行执行推理。

![Image 4](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/11yKmInXJ6fZ1l-h0pafMCA.png)

图 4. 每个产品的文件分区总数

看看图 5。集群总共花费了 9.9 个小时，但仍未完成，因为我们不得不终止该作业，它变得越来越昂贵，并且阻塞了其他人的测试。

![Image 5](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1XqqTRSJNVi9kfN6TpUK9Rg.png)

图 5. 产品 D 的分区、不加盐数据集推理阶段的摘要。

从图 6 中已完成任务的摘要统计数据可以看出，产品 D 的分区存在严重的倾斜（skew）。最大输入大小约为 5600 万行，运行时间为 7.8 小时。

![Image 6](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/17nRrOUKuWwUd82bPk2QeOw.png)

图 6. 执行器在分区且不加盐数据集上推理的摘要统计。

#### 不加盐且 Liquid 聚簇

在这个场景中，我们可以观察到在每个文件分区的平均行数和每个产品的分区数量方面非常相似的结果，分别如图 7 和图 8 所示。

![Image 7](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1luYu9MuWHuIQpezXDTws0g.png)

图 7. 分区中的平均行数与产品的对比

产品 D 有 19 个文件分区，仍然远远达不到 420 个核心。

![Image 8](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1Tie9MP_a3Sb-9u9VXnDf1w.png)

图 8. 每个产品的文件分区总数

我们已经可以预见这个实验将会非常昂贵，所以我决定跳过这个场景的推理测试。同样，在理想情况下，我们会继续推进，但我的看板上还有大量积压的任务（tickets）。

#### 加盐且**_分区_**

在应用加盐和重新分区过程后，产品 A 和 B 的每个分区平均记录数约为 250 万条，产品 C 和 D 约为 100 万条，如图 9 所示。

![Image 9](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/11ibQtKbp4tqFUCYLknmPhQ.png)

图 9. 分区中的平均行数与产品的对比

此外，我们可以在图 10 中看到，产品 D 的文件分区数量增加到了大约 860 个，这为每个推理阶段提供了 430 个分区。

![Image 10](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1e9iCjwmKMe_6t9AJCAwoAA.png)

图 10. 每个产品的文件分区总数

如图 11 所示，这使得使用 360 个任务对产品 D 进行推理的运行时间降至 3 小时。

![Image 11](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1XPs6GV1zBPWriVnogBeh9Q.png)

图 11. 分区且加盐数据集推理阶段的摘要

查看图 12 的摘要统计数据，分布看起来很均衡，运行时间在 1.7 小时左右，但最长任务耗时 3 小时，这值得在未来进一步调查。

![Image 12](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1M4gJ5itQjC6XKebuM5a4fg.png)

图 12. 执行器在分区且加盐数据集上推理的摘要统计。

一个巨大的好处是，盐值根据产品的比例分布了数据。如果我们有更多的可用资源，我们可以增加 `repartition()` 中的混洗分区（shuffle partitions）数量，并根据数据比例添加工作节点。这确保了我们的流程能够以可预测的方式扩展。

### 加盐且 Liquid 聚簇

这个场景结合了我们迄今为止探索的两个最强大的手段：

使用加盐来控制文件大小和并行度，以及使用 Liquid 聚簇来保持相关数据共置（colocated），而无需严格的分区边界。

在应用相同的加盐策略和每个分区 100 万行的限制后，Liquid 聚簇表显示的平均分区大小与加盐且分区的情况非常相似，如图 13 所示。产品 C 和 D 保持在接近 100 万行的目标，而产品 A 和 B 则略高于该阈值。

![Image 13](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1ZLtw94SHej0-FeJSxTd_nQ.png)

图 13. 分区中的平均行数与产品的对比

然而，主要的区别在于这些分区是如何被 Spark 分布和消耗的。如图 14 所示，产品 D 再次达到了很高的文件分区数量，提供了足够的并行度，以在推理期间使可用核心达到饱和。

![Image 14](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1p4w7CaB5p5l12ZmfwtHfBA.png)

图 14. 每个产品的文件分区总数。

与分区方式不同，Liquid 聚簇允许 Spark 随着时间的推移自适应文件布局，同时仍然受益于加盐。这使得工作在各个执行器之间的分布更加均匀，在输入大小和任务持续时间方面出现的极端异常值更少。

从图 15 的摘要统计数据中，我们观察到大多数任务都在一个紧凑的运行时间窗口内完成，并且最大任务持续时间低于加盐且分区的场景。这表明倾斜减少了，并且集群内的负载均衡更好了。

![Image 15](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1jXin-p9v590_KgNK8wFqqg.png)

图 15. Liquid 聚簇且加盐数据集推理阶段的摘要

![Image 16](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/1YQf4toMi31piHtqA1XRm7w.png)

图 16. 执行器在 Liquid 聚簇且加盐数据集上推理的摘要统计。

一个重要的副作用是，Liquid 聚簇在不强制执行严格分区边界的情况下，保留了过滤列的数据本地性（data locality）。这使得 Spark 仍然可以受益于数据跳过（data skipping），而加盐则确保没有单个执行器会被数千万行数据压垮。

总的来说，**加盐且 Liquid 聚簇**成为了最稳健的设置：它最大化了并行度，最小化了倾斜，并在推理工作负载增长或集群配置更改时降低了运营风险。

### 核心要点

*   **推理的可扩展性通常受限于数据布局，而不是模型复杂度。** 大小不合理的文件分区可能会导致数百个核心闲置，而少数几个执行器却在处理数千万行数据。
*   **对于大规模推理，仅靠分区是不够的。** 如果不控制文件大小，分区表仍然会产生巨大的分区，从而导致运行时间长且倾斜的任务。
*   **加盐是解锁并行度的有效工具。** 引入盐键（salt key）并强制执行每个分区的行数限制，可以显著增加可运行任务的数量并稳定运行时间。
*   **Liquid 聚簇通过在没有严格边界的情况下减少倾斜，对加盐形成了补充。** 它允许 Spark 随着时间的推移自适应文件布局，使系统在数据增长时更具弹性。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/MLOps]]
- [[00-元语/data-science]]
- [[00-元语/serverless]]
