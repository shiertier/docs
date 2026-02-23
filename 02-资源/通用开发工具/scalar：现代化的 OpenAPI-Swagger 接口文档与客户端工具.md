---
title: "scalar：现代化的 OpenAPI-Swagger 接口文档与客户端工具"
对象: "GitHub 项目"
项目主页: "https://github.com/scalar/scalar"
Stars快照: "14047"
---

## 摘要

**1) 一句话总结**
Scalar 是一套围绕 OpenAPI/Swagger 构建的开源 API 工具链，核心提供现代化的交互式接口文档渲染器与离线优先的 API 客户端。

**2) 核心要点**
*   **项目热度与定位**：在 GitHub 拥有超 1.4 万 Stars，旨在提供现代化的 API 文档展示，并作为 Postman 的替代方案。
*   **交互式 API 文档**：支持渲染 OpenAPI/Swagger 文档，内置接口测试工具，并能自动生成多种编程语言和框架的代码调用示例。
*   **离线优先客户端**：原生支持 OpenAPI/Swagger，具备环境变量和动态参数功能，提供网页版及跨平台桌面端（Windows、macOS、Linux）。
*   **极简接入方式**：开发者只需在一个基础 HTML 文件中引入 CDN 脚本并传入文档 URL，即可快速生成 API 参考文档。
*   **广泛的生态集成**：支持与 React、Vue、Python、Go、Spring Boot 等数十种主流语言和框架集成，并被多个现代后端框架选为默认的 OpenAPI 文档 UI。
*   **托管与协作服务**：提供免费和付费的边缘托管服务，支持分配子域名、自定义域名、SSL，以及结合 GitHub 同步的团队协作功能。
*   **完整的工具矩阵**：生态内包含 Mock 服务器、CLI 工具、SDK 生成器、OpenAPI 解析与升级工具及在线编辑器等。

## 功能与定位
Scalar 是一套围绕 OpenAPI/Swagger 构建的开源 API 工具链。其核心定位是提供现代化的交互式 API 参考文档渲染器，以及一个离线优先的 API 客户端（作为 Postman 的替代方案）。

## 典型使用场景
- **API 文档生成与展示**：为后端项目快速生成美观、现代的在线接口文档。
- **接口调试与测试**：开发者使用桌面端或网页端 API 客户端进行接口调用与参数调试。
- **文档托管与团队协作**：通过托管服务发布 API 文档，结合 GitHub 同步进行团队协作与自由格式文档编写。

## 核心功能
- **交互式 API 参考文档**：
  - 渲染 OpenAPI/Swagger 文档。
  - 内置 API 测试工具。
  - 自动生成多种编程语言和框架的代码调用示例。
- **离线优先的 API 客户端**：
  - 原生支持 OpenAPI/Swagger。
  - 支持环境变量和动态参数。
  - 提供 Watch 模式，可与服务端框架同步。
- **托管服务（Managed Hosting）**：
  - 提供免费和付费的边缘托管服务。
  - 支持分配子域名（如 `*.apidocumentation.com`）及 SSL，也支持使用自定义域名。
  - 支持 GitHub 同步及团队协作功能。
- **丰富的生态工具**：
  - 提供包括 Mock 服务器、CLI 工具、SDK 生成器、OpenAPI 解析与升级工具、在线编辑器等在内的完整项目矩阵。

## 特色与差异点
- **现代化的 UI 设计**：官方强调其界面设计现代，告别了陈旧的传统 API 文档样式。
- **极简的接入方式**：只需在一个基础的 HTML 文件中引入 CDN 脚本，即可快速创建 API 参考文档。
- **极其广泛的生态集成**：
  - 支持与数十种主流语言和框架集成（涵盖 React, Vue, Next.js, Python, Go, Spring Boot, Laravel, FastAPI 等）。
  - 被 Effect, ElysiaJS, Litestar, Nitro, oRPC 等多个现代框架选为默认的 OpenAPI 文档 UI。
- **跨平台支持**：API 客户端不仅支持浏览器在线使用，还提供 Windows、macOS 和 Linux 的桌面端下载。

## 使用方式概览
- **快速接入文档**：创建一个 HTML 文件，引入 `@scalar/api-reference` 的 CDN 脚本，并在初始化配置中传入 OpenAPI/Swagger 文档的 URL（支持配置代理以避免 CORS 问题）即可完成渲染。
- **客户端使用**：可直接在浏览器中访问网页版客户端，或下载对应操作系统的桌面版应用进行离线调试。

## 链接

- 仓库：https://github.com/scalar/scalar

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
