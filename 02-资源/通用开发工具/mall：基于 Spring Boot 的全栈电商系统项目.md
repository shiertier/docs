---
title: "mall：基于 Spring Boot 的全栈电商系统项目"
对象: "GitHub 项目"
项目主页: "https://github.com/macrozheng/mall"
Stars快照: "3749"
官方网站: "https://www.macrozheng.com/admin/"
主要语言: "Java"
开源协议: "Apache-2.0"
---

## 摘要

**1) 一句话总结**
`mall` 是一套基于 Spring Boot 和 Vue 构建的高人气开源全栈电商系统，包含前台商城与后台管理模块，支持容器化部署并提供完善的学习教程与微服务衍生版本。

**2) 关键要点**
* **项目数据**：基于 Java 开发，采用 Apache-2.0 开源协议，在 GitHub 拥有超 8.2 万 Stars 和近 3 万 Forks。
* **核心模块**：分为面向消费者的前台商城（含 Elasticsearch 搜索、购物车、订单流程等）和面向运营的后台管理系统（含商品、订单、促销、权限管理等）。
* **后端技术栈**：核心框架为 Spring Boot 和 MyBatis，集成了 Spring Security、Elasticsearch、RabbitMQ、Redis、MongoDB 及 MinIO/OSS 等主流中间件与存储技术。
* **前端技术栈**：Web 端基于 Vue、Vuex 和 Element UI 构建，移动端基于 uni-app 构建。
* **架构设计**：采用高度模块化设计，将通用代码、数据库操作、安全认证等解耦为独立子模块；除单体架构外，还提供基于 Spring Cloud Alibaba 的微服务版本（`mall-swarm`）。
* **部署方案**：支持 Windows 常规部署，提供基于 Docker、Docker Compose 的容器化部署方案，以及基于 Jenkins 的自动化部署支持。
* **配套资源**：官方提供全套图文与视频教程、详细部署文档及在线演示环境，非常适合作为 Java 全栈及前后端分离架构的实战学习项目。

**3) 风险与缺口**
* **分支与环境版本强绑定**：项目不同分支对基础环境版本有严格要求（如 `master` 分支依赖 Spring Boot 2.7 + JDK 8，而 `dev-v3` 分支依赖 Spring Boot 3.2 + JDK 17），开发者若未根据自身环境选择正确分支会导致运行失败。

## 功能与定位

`mall` 是一套完整的开源电商系统，包含前台商城系统与后台管理系统。该项目基于 Spring Boot 和 MyBatis 框架实现，采用 Docker 容器化部署，致力于使用现阶段主流技术栈打造企业级电商平台。

## 典型使用场景

* 搭建包含 Web 端与移动端的完整中小型电商平台。
* 作为 Java 全栈开发、前后端分离架构及容器化部署的实战学习项目。

## 核心功能

* **前台商城系统**：面向消费者，包含首页门户、商品推荐、商品搜索（基于 Elasticsearch）、商品展示、购物车、订单流程、会员中心、客户服务及帮助中心等模块。
* **后台管理系统**：面向运营人员，提供商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理及系统设置等功能。
* **基础与通用模块**：内置 MyBatisGenerator 生成的数据库操作代码、Spring Security 封装的公用安全模块，以及统一的工具类库。

## 特色与差异点

* **技术栈全面且主流**：
  * **后端**：集成 Spring Security、Elasticsearch、RabbitMQ、Redis、MongoDB、MinIO/OSS 等中间件与存储技术。
  * **前端/移动端**：基于 Vue、Vuex、Element UI 构建 Web 端；基于 uni-app 构建移动端。
* **配套资源完善**：作者提供了全套图文学习教程、视频教程以及详细的部署文档。
* **多架构版本**：除当前的单体架构版本外，还衍生了基于 Spring Cloud Alibaba 的微服务版本（`mall-swarm`）。
* **高度模块化**：项目组织结构清晰，将通用代码、数据库操作、安全认证、前后台接口及搜索系统解耦为独立子模块。

## 使用方式概览

* **环境准备**：需配置 JDK、MySQL、Redis 等基础环境（若仅启动后台管理模块，最低仅需 MySQL 和 Redis）。
* **本地开发**：克隆后端仓库导入 IDEA 编译运行；分别克隆对应的前端仓库（`mall-admin-web` 或 `mall-app-web`）进行本地调试。
* **部署运行**：支持 Windows 环境常规部署，同时提供基于 Docker、Docker Compose 的容器化部署方案，以及基于 Jenkins 的自动化部署支持。

## 限制与注意事项

* **分支与环境要求**：项目不同分支对基础环境版本有严格要求。`master` 分支基于 Spring Boot 2.7 + JDK 8；`dev-v3` 分支基于 Spring Boot 3.2 + JDK 17。开发者需根据自身环境选择对应分支。

## 链接

- 仓库：https://github.com/macrozheng/mall
- 官网：https://www.macrozheng.com/admin/

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
