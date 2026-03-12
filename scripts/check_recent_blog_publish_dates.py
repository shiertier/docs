#!/usr/bin/env python3
"""Check whether blog posts dated today/yesterday (UTC) have evidence rows.

Usage:
  python3 scripts/check_recent_blog_publish_dates.py --missing-publish-date 01-博客
  python3 scripts/check_recent_blog_publish_dates.py --list-recent 01-博客
  python3 scripts/check_recent_blog_publish_dates.py 01-博客 .tmp/publish-date-evidence-final.tsv
"""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sys
from pathlib import Path


DATE_RE = re.compile(r"^发布日期:\s*[\"']?(\d{4}-\d{2}-\d{2})[\"']?\s*$", re.MULTILINE)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="List recent blog publish dates or verify evidence table coverage."
    )
    parser.add_argument(
        "--list-recent",
        action="store_true",
        help="only print posts whose 发布日期 is today or yesterday in UTC",
    )
    parser.add_argument(
        "--missing-publish-date",
        action="store_true",
        help="print blog files that do not have 发布日期 in frontmatter",
    )
    parser.add_argument("blog_root", help="blog directory to scan, e.g. 01-博客")
    parser.add_argument(
        "evidence_tsv",
        nargs="?",
        help="TSV file containing evidence rows; required unless --list-recent is used",
    )
    return parser.parse_args()


def recent_dates_utc() -> set[str]:
    today = dt.datetime.now(dt.timezone.utc).date()
    yesterday = today - dt.timedelta(days=1)
    return {today.isoformat(), yesterday.isoformat()}


def extract_publish_date(path: Path) -> str | None:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return None
    parts = text.split("\n---\n", 1)
    if len(parts) != 2:
        return None
    frontmatter = parts[0]
    match = DATE_RE.search(frontmatter)
    return match.group(1) if match else None


def iter_recent_posts(blog_root: Path) -> list[tuple[str, str]]:
    recent = recent_dates_utc()
    rows: list[tuple[str, str]] = []
    for path in sorted(blog_root.rglob("*.md")):
        publish_date = extract_publish_date(path)
        if publish_date in recent:
            rows.append((path.as_posix(), publish_date))
    return rows


def iter_missing_publish_dates(blog_root: Path) -> list[str]:
    missing: list[str] = []
    for path in sorted(blog_root.rglob("*.md")):
        if extract_publish_date(path) is None:
            missing.append(path.as_posix())
    return missing


def load_evidence_pairs(path: Path) -> set[tuple[str, str]]:
    pairs: set[tuple[str, str]] = set()
    if not path.exists():
        return pairs
    for raw in path.read_text(encoding="utf-8").splitlines():
        if not raw.strip():
            continue
        cols = raw.split("\t")
        if len(cols) >= 2:
            pairs.add((cols[0], cols[1]))
    return pairs


def main() -> int:
    args = parse_args()
    blog_root = Path(args.blog_root)

    if args.missing_publish_date:
        missing = iter_missing_publish_dates(blog_root)
        for relpath in missing:
            print(relpath)
        return 1 if missing else 0

    recent_rows = iter_recent_posts(blog_root)

    if args.list_recent:
        for relpath, publish_date in recent_rows:
            print(f"{relpath}\t{publish_date}")
        return 0

    if not args.evidence_tsv:
        print("evidence_tsv is required unless --list-recent is used", file=sys.stderr)
        return 2

    evidence_pairs = load_evidence_pairs(Path(args.evidence_tsv))
    missing = [(relpath, publish_date) for relpath, publish_date in recent_rows if (relpath, publish_date) not in evidence_pairs]

    for relpath, publish_date in missing:
        print(f"{relpath}\t{publish_date}\tmissing-evidence")

    return 1 if missing else 0


if __name__ == "__main__":
    raise SystemExit(main())
