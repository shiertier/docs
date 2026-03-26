给 Codex 一张地图，不要给它一本手册。`AGENTS.md` 只保留入口、硬边界和最低自检；详细规则统一放到 `06-文档系统/`。

## 入口地图

- 总入口：`06-文档系统/README.md`
- 设计原则：`06-文档系统/设计/核心信念.md`
- 结构地图：`06-文档系统/设计/记录系统结构.md`
- 内容生产：`06-文档系统/流程/内容生产与归档.md`
- 项目 / 图书：`06-文档系统/流程/项目档案与图书记录.md`
- 关系图谱：`06-文档系统/流程/关系图谱维护.md`
- 发布边界：`06-文档系统/规则/发布与风险边界.md`
- 自检与园艺：`06-文档系统/维护/自检与文档园艺.md`
- 当前迁移：`06-文档系统/计划/文档系统迁移计划.md`

## 技能入口

- 网页全文抓取：`skills/web-full-archive.md`
- Gemini 调用规范：`skills/gemini-task-usage.md`
- 网站 / Git 项目档案：`skills/site-project-profile.md`
- GitHub 仓库文档转博客：`skills/github-repo-blog-archive.md`
- 图书记录：`skills/book-record.md`
- 关系图谱与元语：`skills/tag-index-wiki.md`
- 强关联规则：`skills/文档关联性.md`
- 新内容发现：`skills/new-content-discovery.md`

## 全局硬规则

- 临时材料以及 Gemini 的输入 / 输出只放 `.tmp/`。
- 最终文档只落盘到 `00-元语/`、`01-博客/`、`02-资源/`、`03-图书/`、`04-聊天/`、`06-文档系统/`。
- `01-博客/` 文档必须有可证据化的 `发布日期: YYYY-MM-DD`；当天或前一天的日期必须补取证文件。
- 公开文档统一使用 frontmatter `title`；正文不保留一级标题 `# 标题`。
- 最终文档必须干净：不保留占位词、站点导航噪音、抓取日志、流程说明。
- 高风险来源只记录对象、用途、边界与风险；不复述可执行细节、下载直链、绕过步骤。
- 关系图谱使用 `[[wiki 链接]]` 和 `## 关联主题` / `## 相关文档`；禁止回退到 `#tag` 聚合页。

## 任务路由

- 网页 / 博客 / 字幕 / 聊天整理：先看 `06-文档系统/流程/内容生产与归档.md`，再进对应 `skills/*.md`。
- 网站 / Git 项目档案、图书条目：先看 `06-文档系统/流程/项目档案与图书记录.md`。
- 关系图谱、元语补全、相关文档回写：先看 `06-文档系统/流程/关系图谱维护.md`。
- 站点入口、结构、目录为什么这么分：看 `06-文档系统/设计/*.md`。

## 最低自检

- 结构自检：`python3 scripts/check_docs_system.py`
- 标题空行：`python3 scripts/normalize_h2_spacing.py --check AGENTS.md skills 00-元语 01-博客 02-资源 03-图书 04-聊天 06-文档系统`
- 博客发布日期：`python3 scripts/check_recent_blog_publish_dates.py --missing-publish-date 01-博客`
- 最近日期取证：`python3 scripts/check_recent_blog_publish_dates.py 01-博客 .tmp/publish-date-evidence-final.tsv`
- 占位词 / 噪音：`rg -n "待补充|TODO 占位|占位文件|## TODO|跳至主要内容|返回主菜单|研究索引|商业应用概览|开发者专区" 01-博客 02-资源 03-图书 04-聊天`

## 完成定义

- 规则写进 `06-文档系统/` 或对应 `skills/*.md`。
- 至少一条可执行自检能覆盖这次调整。
- 自检通过后再发布。
