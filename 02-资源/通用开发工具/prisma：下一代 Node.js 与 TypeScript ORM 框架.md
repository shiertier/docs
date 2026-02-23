---
title: "prisma：下一代 Node.js 与 TypeScript ORM 框架"
对象: "GitHub 项目"
项目主页: "https://github.com/prisma/prisma"
Stars快照: "45377"
---

## 摘要

### 一句话总结
Prisma 是一个专为 Node.js 和 TypeScript 设计的下一代开源 ORM 框架，提供极致类型安全的数据库访问、声明式迁移以及可视化的数据管理能力。

### 核心要点
* **开源与热度**：基于 Apache 2.0 协议开源，在 GitHub 上拥有 45377 颗 Stars。
* **三大核心工具**：包含 Prisma Client（自动生成的类型安全查询构建器）、Prisma Migrate（声明式数据建模与迁移系统）和 Prisma Studio（可视化数据库 GUI）。
* **统一的 Schema 管理**：通过单一的 `.prisma` 文件统一配置数据源、生成器和数据模型，并支持通过“数据内省”从现有数据库反向生成模型。
* **极致的类型安全**：在 TypeScript 环境下提供静态类型检查，可在编译阶段捕获拼写错误，且查询结果直接返回纯 JavaScript 对象，无需处理复杂的 ORM 实例。
* **广泛的数据库支持**：支持 PostgreSQL、MySQL、SQLite、SQL Server、MongoDB 以及 CockroachDB。
* **架构兼容性**：兼容 Serverless 应用与微服务架构，适用于构建 REST、GraphQL、gRPC 等多种 API 服务。
* **代码生成机制**：每次修改数据模型后，需通过 `npx prisma generate` 命令重新生成客户端代码，以确保 API 与数据库结构同步。

### 风险与限制
* **环境变量加载限制**：当使用 `prisma.config.ts` 配置文件时，Prisma 不会自动加载 `.env` 文件，开发者必须手动引入 `dotenv` 包或依赖运行环境（如 Node.js 的 `--env-file`）来加载环境变量。
* **版本依赖要求**：自 Prisma 7 版本起，实例化 Prisma Client 时强制要求必须配合使用数据库驱动适配器（Driver Adapter）。

## 功能与定位
Prisma 是一个专为 Node.js 和 TypeScript 后端应用设计的“下一代 ORM”工具集。它通过直观的数据建模语言和自动生成的客户端，为开发者提供类型安全的数据库访问、声明式的数据库迁移以及可视化的数据管理能力。

## 典型使用场景
* 适用于任何需要连接数据库的 Node.js 或 TypeScript 后端项目。
* 兼容 Serverless 应用与微服务架构。
* 可用于构建 REST API、GraphQL API、gRPC API 等多种接口服务。

## 核心功能
* **Prisma Client**：自动生成且类型安全的查询构建器，用于在代码中执行数据库查询与操作。
* **Prisma Migrate**：声明式的数据建模与数据库迁移系统，用于管理数据库表结构的变更。
* **Prisma Studio**：提供一个图形用户界面（GUI），方便开发者直接查看和编辑数据库中的数据。
* **数据内省（Introspection）**：支持从已有的数据库中反向生成 Prisma 数据模型。

## 特色与差异点
* **极致的类型安全**：在 TypeScript 环境下，查询结果会被静态类型化，能够防止访问不存在的属性，并在编译阶段捕获拼写错误（即使只查询模型的部分字段也能保持类型安全）。
* **统一的 Schema 定义**：所有项目均从一个 `.prisma` 文件开始，开发者在其中统一配置数据源、生成器并定义应用的数据模型。
* **返回原生对象**：Prisma Client 的所有查询结果均返回纯 JavaScript 对象（Plain old JavaScript objects），无需处理复杂的 ORM 实例。
* **多数据库支持**：支持 PostgreSQL、MySQL、SQLite、SQL Server、MongoDB 以及 CockroachDB 等主流数据库。

## 使用方式概览
1. **安装依赖**：将 Prisma CLI 安装为开发依赖，并安装 `@prisma/client`。
2. **编写 Schema**：在 Prisma schema 文件中定义数据源（如指定数据库类型）和生成器（指定输出路径）。
3. **配置连接**：通过 `prisma.config.ts` 文件或环境变量配置数据库连接字符串。
4. **生成客户端**：运行 `npx prisma generate` 命令，Prisma 会读取 Schema 并自动生成客户端代码。每次修改数据模型后都需要重新执行此命令。
5. **实例化与查询**：在代码中引入生成的 `PrismaClient` 并实例化，随后即可调用 API 进行 CRUD 操作。

## 限制与注意事项
* **环境变量加载**：当使用 `prisma.config.ts` 时，Prisma ORM 不会自动加载 `.env` 文件中的环境变量。开发者需要手动引入 `dotenv` 等第三方包，或依赖运行环境（如 Bun、Node.js 的 `--env-file` 参数）来加载。
* **驱动适配器要求**：自 Prisma 7 版本起，实例化 Prisma Client 时必须配合使用数据库驱动适配器（Driver Adapter）。

## 链接

- 仓库：https://github.com/prisma/prisma

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
