---
title: "yfinance：Yahoo Finance 数据访问 Python 库"
发布日期: "2026-02-23"
对象: "GitHub 项目 `ranaroussi/yfinance`"
项目主页: "https://github.com/ranaroussi/yfinance"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 21737，Forks 3098，Watchers 265（抓取时间：2026-02-24）"
版本快照: "最新发布 1.2.0（发布时间：2026-02-16T19:52:19Z）"
---

## 摘要

**1) 一句话总结**
yfinance 是一个开源的 Python 库，为个人开发者和研究人员提供了一种便捷的方式，从 Yahoo! Finance API 获取金融市场数据以用于研究和教育。

**2) 核心要点**
*   **工具定位**：开源 Python 库，以符合 Python 编程习惯的方式调用 Yahoo! Finance API 获取数据。
*   **适用场景**：面向个人开发者、研究人员或学生，适用于量化分析、学术研究和教育学习。
*   **股票与批量数据**：支持通过 `Ticker` 或 `Tickers` 获取单只/多只股票数据，并提供 `download` 功能批量下载市场数据。
*   **市场与行业数据**：内置 `Market`、`Sector` 和 `Industry` 组件，用于获取大盘、特定板块与行业信息。
*   **实时数据流**：提供 `WebSocket` 和 `AsyncWebSocket` 组件以支持实时流数据的获取。
*   **搜索与筛选**：提供 `Search`（搜索报价和新闻）、`EquityQuery` 和 `Screener`（构建条件筛选标的）功能。
*   **环境与安装**：兼容 Python 2.7 及 3.6+ 版本，可通过 `pip install yfinance` 直接安装。

**3) 风险与不足**
*   **非官方属性**：该工具为独立开源项目，未经 Yahoo, Inc. 附属、认可或审查。
*   **使用场景限制**：工具及调用的 API 明确规定**仅限个人使用**，仅旨在用于研究和教育目的。
*   **合规责任**：用户在使用实际下载的数据时，必须自行查阅并严格遵守 Yahoo! 的相关服务条款与使用协议。

## 功能与定位

yfinance 是一个开源的 Python 库，提供了一种符合 Python 编程习惯（Pythonic）的方式，用于从 Yahoo! Finance API 获取金融与市场数据。

## 典型使用场景

适用于个人开发者、研究人员或学生获取金融市场数据，以进行量化分析、学术研究和教育学习。

## 核心功能

yfinance 提供了多个主要组件来满足不同的数据获取需求：
- **股票数据获取**：通过 `Ticker` 获取单个股票代码的数据，或通过 `Tickers` 获取多个股票代码的数据。
- **批量下载**：使用 `download` 功能批量下载多个股票代码的市场数据。
- **市场与行业信息**：通过 `Market` 获取市场相关信息，通过 `Sector` 和 `Industry` 获取特定板块与行业的数据。
- **实时数据流**：提供 `WebSocket` 和 `AsyncWebSocket` 组件以支持实时流数据的获取。
- **搜索与筛选**：
  - `Search`：用于搜索股票报价和相关新闻。
  - `EquityQuery` 和 `Screener`：用于构建查询条件以筛选市场标的。

## 特色与差异点

- 项目具备活跃社区与持续迭代特征。

## 使用方式概览

- **环境要求**：支持 Python 2.7 及 3.6+ 版本。
- **安装**：可通过 PYPI 使用 pip 进行安装：
  ```bash
  pip install yfinance
  ```

## 限制与注意事项

- **非官方属性**：yfinance 是一个独立的开源工具，未经 Yahoo, Inc. 附属、认可或审查。它仅调用 Yahoo 公开的 API。
- **使用目的限制**：该工具及 Yahoo! finance API 明确规定**仅限个人使用**，旨在用于研究和教育目的。
- **法律与合规**：用户在使用下载的实际数据时，必须自行查阅并严格遵守 Yahoo! 的相关服务条款与使用协议。

## 链接

- GitHub 仓库：https://github.com/ranaroussi/yfinance
- 官方文档主页：https://ranaroussi.github.io/yfinance

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/data-pipeline]]
