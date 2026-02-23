#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$ROOT_DIR/.tmp"
RUNTIME_DIR="${QUARTZ_RUNTIME_DIR:-/tmp/quartz-runtime}"
TARBALL="${QUARTZ_TARBALL:-/tmp/quartz-v4.tar.gz}"
QUARTZ_REF="${QUARTZ_REF:-v4}"

mkdir -p "$TMP_DIR"
rm -rf "$RUNTIME_DIR"
mkdir -p "$(dirname "$RUNTIME_DIR")" "$(dirname "$TARBALL")"

curl -fsSL "https://codeload.github.com/jackyzha0/quartz/tar.gz/refs/heads/$QUARTZ_REF" -o "$TARBALL"
TOP_DIR="$(tar -tzf "$TARBALL" | awk -F/ 'NR==1 { print $1 }')"

tar -xzf "$TARBALL" -C "$TMP_DIR"
if [ ! -d "$TMP_DIR/$TOP_DIR" ]; then
  echo "[quartz:prepare] extracted directory not found: $TMP_DIR/$TOP_DIR" >&2
  exit 1
fi
mv "$TMP_DIR/$TOP_DIR" "$RUNTIME_DIR"

CONTENT_DIR="$RUNTIME_DIR/content"
rm -rf "$CONTENT_DIR"
mkdir -p "$CONTENT_DIR"

shopt -s nullglob
copied_dirs=0
for src_dir in "$ROOT_DIR"/0[0-4]-*; do
  if [ -d "$src_dir" ]; then
    cp -a "$src_dir" "$CONTENT_DIR/"
    copied_dirs=$((copied_dirs + 1))
  fi
done
shopt -u nullglob

{
  cat <<'INDEX_HEAD'
---
title: 文档首页
---

# 文档首页

本页面由 Quartz 自动发布，内容来自仓库文档目录。

## 目录
INDEX_HEAD

  if [ -d "$CONTENT_DIR/00-元语" ]; then
    echo "- [[00-元语/README|元语词条]]"
    echo "- [[00-元语/关系图谱|关系图谱]]"
  fi
  if [ -d "$CONTENT_DIR/01-博客" ]; then
    echo "- [[01-博客|博客归档]]"
  fi
  if [ -d "$CONTENT_DIR/02-资源" ]; then
    echo "- [[02-资源|资源档案]]"
  fi
  if [ -d "$CONTENT_DIR/03-图书" ]; then
    echo "- [[03-图书|图书记录]]"
  fi
  if [ -d "$CONTENT_DIR/04-聊天" ]; then
    echo "- [[04-聊天|聊天整理]]"
  fi
} > "$CONTENT_DIR/index.md"

BASE_URL="${QUARTZ_BASE_URL:-}"
if [ -z "$BASE_URL" ] && [ -n "${GITHUB_REPOSITORY:-}" ]; then
  OWNER="${GITHUB_REPOSITORY%%/*}"
  REPO="${GITHUB_REPOSITORY##*/}"
  if [ "$REPO" = "$OWNER.github.io" ]; then
    BASE_URL="$OWNER.github.io"
  else
    BASE_URL="$OWNER.github.io/$REPO"
  fi
fi
if [ -z "$BASE_URL" ]; then
  BASE_URL="localhost"
fi

cat > "$RUNTIME_DIR/quartz.config.ts" <<CONFIG_EOF
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "wsl-docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "$BASE_URL",
    ignorePatterns: ["private", "templates", ".obsidian", ".tmp"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f6f8fb",
          lightgray: "#e5e7ef",
          gray: "#9aa4b2",
          darkgray: "#435066",
          dark: "#1f2a3d",
          secondary: "#2f5ea5",
          tertiary: "#23a084",
          highlight: "rgba(47, 94, 165, 0.11)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#141820",
          lightgray: "#2f3642",
          gray: "#646f81",
          darkgray: "#d8dbe2",
          dark: "#f3f4f6",
          secondary: "#7aa2e3",
          tertiary: "#35c4a2",
          highlight: "rgba(122, 162, 227, 0.2)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
CONFIG_EOF

cat > "$RUNTIME_DIR/quartz.layout.ts" <<'LAYOUT_EOF'
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/shiertier/docs",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [Component.Graph()],
}
LAYOUT_EOF

echo "[quartz:prepare] runtime prepared at $RUNTIME_DIR"
echo "[quartz:prepare] baseUrl=$BASE_URL"
markdown_count="$(find "$CONTENT_DIR" -type f -name '*.md' | wc -l | tr -d ' ')"
echo "[quartz:prepare] copied_dirs=$copied_dirs markdown_files=$markdown_count"
