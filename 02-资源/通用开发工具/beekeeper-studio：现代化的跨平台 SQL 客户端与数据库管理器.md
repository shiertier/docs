---
title: "beekeeper-studio：现代化的跨平台 SQL 客户端与数据库管理器"
对象: "GitHub 项目"
项目主页: "https://github.com/beekeeper-studio/beekeeper-studio"
Stars快照: "3659"
官方网站: "https://www.beekeeperstudio.io"
主要语言: "TypeScript"
开源协议: "NOASSERTION"
---

## 摘要

**1) 一句话总结**
Beekeeper Studio 是一款主打现代化与极致用户体验的跨平台 SQL 客户端与数据库管理工具，基于 Electron 构建，并提供开源社区版与高级付费版。

**2) 核心要点**
*   **跨平台与技术栈**：支持 Linux、macOS 和 Windows，主要使用 TypeScript 开发，前端基于 Vue.js，桌面端基于 Electron 构建。
*   **严格的 UX 导向**：以“快速、直观、现代”为核心原则，坚决拒绝会破坏简洁体验的臃肿功能。
*   **广泛的免费数据库支持**：支持连接 PostgreSQL、MySQL、SQLite、SQL Server、Redis、TiDB、BigQuery 等主流数据库。
*   **核心功能**：内置带语法高亮和自动补全的智能 SQL 编辑器，采用多标签页设计，支持数据排序/过滤、JSON 格式查看、数据导入/导出及备份恢复。
*   **查询管理**：允许用户保存常用查询，并提供查询运行历史记录以便追溯。
*   **双版本商业模式**：社区版免费且无需注册（基于 GPLv3 协议开源）；终极版（Ultimate Edition）为付费版本，提供额外高级功能。
*   **技术渊源**：项目的核心数据库库衍生自 Sqlectron 项目的 `Sqlectron-core`。

**3) 风险与不足**
*   **付费墙限制**：部分特定数据库（如 Oracle、MongoDB、ClickHouse、DuckDB、Cassandra 等）的连接支持仅在付费版中提供。
*   **功能缺失/开发中**：对 Snowflake 和 DynamoDB 的支持目前尚未完成，处于“即将推出”或“计划中”状态。
*   **商标合规风险**：虽然社区版代码开源，但 Beekeeper Studio 的商标（文字标记和徽标）不属于开源范围，二次使用或分发需严格遵守其官方商标准则。

## 功能与定位

Beekeeper Studio 是一款跨平台的 SQL 编辑器和数据库管理工具，支持 Linux、macOS 和 Windows 操作系统。该项目旨在解决传统开源数据库工具界面臃肿、功能堆砌的问题，致力于提供一款美观、强大且易于使用的现代化 SQL 工作台。

## 核心功能

- **广泛的数据库支持**：支持连接 PostgreSQL、MySQL、SQLite、SQL Server、Amazon Redshift、CockroachDB、MariaDB、TiDB、Google BigQuery 和 Redis 等主流数据库。
- **智能 SQL 编辑器**：内置带有语法高亮和自动补全功能的 SQL 查询编辑器。
- **多任务界面**：采用多标签页（Tabbed）设计，方便用户同时处理多个任务。
- **数据浏览与操作**：支持对数据表进行排序和过滤，支持以 JSON 格式查看数据。
- **查询管理**：允许用户保存常用查询，并提供查询运行历史记录，方便追溯历史工作。
- **数据迁移与安全**：提供数据的导入/导出以及备份/恢复功能。
- **快捷与个性化**：配置了合理的键盘快捷键，并内置了广受欢迎的暗黑主题。

## 特色与差异点

- **严格的 UX 导向**：开发团队以“使用体验良好”为核心指导原则，强调软件必须快速、直观且现代。如果某项新功能会破坏这种简洁的体验，团队会选择放弃该功能。
- **双版本模式**：采用核心开源加高级功能付费的模式。社区版免费且无需注册；终极版（Ultimate Edition）提供额外的高级功能。
- **技术渊源**：项目的核心数据库库基于 Sqlectron 项目的 `Sqlectron-core` 衍生而来。
- **技术栈**：主要使用 TypeScript 开发，前端基于 Vue.js，桌面端基于 Electron 构建。

## 限制与注意事项

- **付费墙限制**：部分特定数据库的连接支持仅在付费版中提供，包括 Oracle Database、Cassandra、Firebird、LibSQL、ClickHouse、DuckDB、SQL Anywhere、MongoDB 以及 Trino/Presto。
- **开发中功能**：对 Snowflake 和 DynamoDB 的支持目前处于“即将推出”或“计划中”状态。
- **开源协议与商标**：社区版代码基于 GPLv3 协议开源，但 Beekeeper Studio 的商标（文字标记和徽标）不属于开源范围，使用需遵守其官方的商标准则。

## 链接

- 仓库：https://github.com/beekeeper-studio/beekeeper-studio
- 官网：https://www.beekeeperstudio.io

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
