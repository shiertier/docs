#!/usr/bin/env bash
set -euo pipefail

# Full-repo relation pass using ONE shared queue (no sharding), with configurable workers.
# Every file run is recorded (START/DONE/ERROR), and failures are retried by round.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

ONLY_MISSING_TOPIC=0
while [[ $# -gt 0 ]]; do
  case "$1" in
    --only-missing-topic)
      ONLY_MISSING_TOPIC=1
      shift
      ;;
    -h|--help)
      cat << 'EOF'
Usage:
  run_all_docs_relation_30.sh [--only-missing-topic]

Options:
  --only-missing-topic   Only process markdown files that do NOT contain "关联主题".
EOF
      exit 0
      ;;
    *)
      echo "[error] unknown argument: $1"
      echo "use --help for usage"
      exit 1
      ;;
  esac
done

WORKERS="${WORKERS:-30}"
MAX_WORKERS="${MAX_WORKERS:-100}"
# Optional strict count check. Leave empty/0 to disable.
EXPECTED_TOTAL="${EXPECTED_TOTAL:-0}"
MAX_ROUNDS="${MAX_ROUNDS:-4}"
RUN_ID="${RUN_ID:-$(date +%Y%m%d_%H%M%S)}"

BASE_DIR=".tmp/full_doc_relation_queue_${RUN_ID}"
mkdir -p "$BASE_DIR"

ALL_SCOPE_FILES="$BASE_DIR/all_scope_files.txt"
ALL_FILES="$BASE_DIR/all_files.txt"
find 00-元语 01-博客 02-资源 03-图书 -type f -name '*.md' | sort > "$ALL_SCOPE_FILES"

if [[ "$ONLY_MISSING_TOPIC" == "1" ]]; then
  : > "$ALL_FILES"
  if command -v rg >/dev/null 2>&1; then
    while IFS= read -r file; do
      if ! rg -q "关联主题" "$file"; then
        echo "$file" >> "$ALL_FILES"
      fi
    done < "$ALL_SCOPE_FILES"
  else
    while IFS= read -r file; do
      if ! grep -q "关联主题" "$file"; then
        echo "$file" >> "$ALL_FILES"
      fi
    done < "$ALL_SCOPE_FILES"
  fi
  sort -u "$ALL_FILES" -o "$ALL_FILES"
  echo "[info] mode: only files without '关联主题'"
else
  cp "$ALL_SCOPE_FILES" "$ALL_FILES"
  echo "[info] mode: all markdown files in scope"
fi

TOTAL_FILES="$(wc -l < "$ALL_FILES" | tr -d ' ')"
TOTAL_SCOPE_FILES="$(wc -l < "$ALL_SCOPE_FILES" | tr -d ' ')"
echo "[info] total markdown files in scope: $TOTAL_SCOPE_FILES"
echo "[info] selected markdown files: $TOTAL_FILES"

if [[ "$EXPECTED_TOTAL" != "0" && -n "$EXPECTED_TOTAL" ]]; then
  if [[ "$TOTAL_FILES" != "$EXPECTED_TOTAL" ]]; then
    echo "[error] EXPECTED_TOTAL=$EXPECTED_TOTAL but found $TOTAL_FILES"
    exit 1
  fi
fi

if [[ "$WORKERS" -lt 1 || "$WORKERS" -gt "$MAX_WORKERS" ]]; then
  echo "[error] WORKERS must be in [1, $MAX_WORKERS]"
  exit 1
fi

STATUS_TSV="$BASE_DIR/run_status.tsv"
DONE_OK="$BASE_DIR/processed_ok.txt"
DONE_FAIL="$BASE_DIR/processed_fail.txt"

# header
printf 'ts\tround\tworker\tevent\tcode\tindex\tfile\n' > "$STATUS_TSV"
: > "$DONE_OK"
: > "$DONE_FAIL"

log_status() {
  local ts="$1" round="$2" worker="$3" event="$4" code="$5" idx="$6" file="$7"
  printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\n' "$ts" "$round" "$worker" "$event" "$code" "$idx" "$file" >> "$STATUS_TSV"
}

run_round() {
  local round="$1"
  local input_list="$2"

  local round_dir="$BASE_DIR/round_${round}"
  local logs_dir="$round_dir/logs"
  local queue_lock="$round_dir/queue.lock"
  local status_lock="$round_dir/status.lock"
  local counter_file="$round_dir/next_index.txt"
  local ok_file="$round_dir/ok.txt"
  local fail_file="$round_dir/fail.txt"
  local all_attempted="$round_dir/all_attempted.txt"
  local remaining_file="$round_dir/remaining.txt"

  mkdir -p "$logs_dir"
  : > "$ok_file"
  : > "$fail_file"
  : > "$all_attempted"
  echo 1 > "$counter_file"

  local count
  count="$(wc -l < "$input_list" | tr -d ' ')"
  echo "[info][round $round] queued files: $count"

  if [[ "$count" == "0" ]]; then
    : > "$remaining_file"
    return 0
  fi

  worker_loop() {
    local wid="$1"

    while true; do
      local job_line idx file ts log_file code
      job_line="$({
        flock -x 9
        idx="$(cat "$counter_file")"
        file="$(sed -n "${idx}p" "$input_list" || true)"
        if [[ -n "$file" ]]; then
          echo $((idx + 1)) > "$counter_file"
          printf '%s\t%s\n' "$idx" "$file"
        fi
      } 9>"$queue_lock")"

      if [[ -z "$job_line" ]]; then
        break
      fi

      idx="${job_line%%$'\t'*}"
      file="${job_line#*$'\t'}"

      ts="$(date +%Y-%m-%dT%H:%M:%S%z)"
      {
        flock -x 9
        log_status "$ts" "$round" "$wid" "START" "" "$idx" "$file"
      } 9>"$status_lock"

      log_file="$logs_dir/worker_${wid}_idx_${idx}.log"

      codex exec --yolo "在仓库 $ROOT_DIR 中，只处理一个文件：$file。必须完整通读该文件。若该文件存在 ## 相关文档：
0) 如果是元语, 应该使用搜索工具并增加或补全信息（已经充足的话可以不动）
1) 对每条关联做人工判定，删除无关联；
2) 每条保留关联改为格式：- [[路径|标题]]；关联理由：<引用|解说|延伸思考|观点一致|观点相悖|同一事件|上下游|版本演进>；说明：<一句话>；
3) 相关文档条目数量按事实决定，可为0条或多条；
4) 相关链接必须有效存在。
5) 检查 00-元语/ （通过ls来了解有哪些元语），确保 ## 关联主题；正确且无缺失、；必要时才新增高共识元语。禁止机械补链与标签索引。完成后输出修改摘要。
6) 确保 ## 关联主题 处于最后
7) 如果文章价值极低，允许删除" > "$log_file" 2>&1 || true
      code=$?

      ts="$(date +%Y-%m-%dT%H:%M:%S%z)"
      {
        flock -x 9
        log_status "$ts" "$round" "$wid" "DONE" "$code" "$idx" "$file"
        echo "$file" >> "$all_attempted"
        if [[ "$code" -eq 0 ]]; then
          echo "$file" >> "$ok_file"
          echo "$file" >> "$DONE_OK"
        else
          echo "$file" >> "$fail_file"
          echo "$file" >> "$DONE_FAIL"
        fi
      } 9>"$status_lock"
    done
  }

  local w
  for ((w=1; w<=WORKERS; w++)); do
    printf -v wid '%02d' "$w"
    worker_loop "$wid" &
  done
  wait

  sort -u "$all_attempted" -o "$all_attempted"
  sort -u "$ok_file" -o "$ok_file"
  sort -u "$fail_file" -o "$fail_file"

  # Remaining = queued - success
  comm -23 <(sort "$input_list") <(sort "$ok_file") > "$remaining_file"

  local ok_n fail_n rem_n
  ok_n="$(wc -l < "$ok_file" | tr -d ' ')"
  fail_n="$(wc -l < "$fail_file" | tr -d ' ')"
  rem_n="$(wc -l < "$remaining_file" | tr -d ' ')"

  echo "[info][round $round] ok=$ok_n fail=$fail_n remaining=$rem_n"
}

cp "$ALL_FILES" "$BASE_DIR/remaining_round_0.txt"

round=1
while [[ "$round" -le "$MAX_ROUNDS" ]]; do
  prev="$BASE_DIR/remaining_round_$((round-1)).txt"
  run_round "$round" "$prev"

  cp "$BASE_DIR/round_${round}/remaining.txt" "$BASE_DIR/remaining_round_${round}.txt"
  rem="$(wc -l < "$BASE_DIR/remaining_round_${round}.txt" | tr -d ' ')"
  if [[ "$rem" == "0" ]]; then
    echo "[ok] all files completed by round $round"
    break
  fi
  echo "[warn] round $round unfinished, remaining=$rem"
  round=$((round + 1))
done

final_round="$round"
if [[ "$final_round" -gt "$MAX_ROUNDS" ]]; then
  final_round="$MAX_ROUNDS"
fi

final_remaining="$BASE_DIR/remaining_round_${final_round}.txt"
if [[ ! -f "$final_remaining" ]]; then
  final_remaining="$BASE_DIR/remaining_round_${MAX_ROUNDS}.txt"
fi

FINAL_REM="$(wc -l < "$final_remaining" | tr -d ' ')"

sort -u "$DONE_OK" -o "$DONE_OK"
sort -u "$DONE_FAIL" -o "$DONE_FAIL"

OK_COUNT="$(wc -l < "$DONE_OK" | tr -d ' ')"
FAIL_COUNT="$(wc -l < "$DONE_FAIL" | tr -d ' ')"

echo "[summary] ok=$OK_COUNT fail=$FAIL_COUNT remaining=$FINAL_REM"

echo "[summary] status file: $STATUS_TSV"
echo "[summary] ok list:     $DONE_OK"
echo "[summary] fail list:   $DONE_FAIL"

if [[ "$FINAL_REM" != "0" ]]; then
  echo "[error] not all files completed; see: $final_remaining"
  exit 2
fi

# Validate related-doc reason format only inside ## 相关文档 sections.
CHECK_AWK="$BASE_DIR/check_related_reasons.awk"
cat > "$CHECK_AWK" << 'AWK'
BEGIN {
  split("引用 解说 延伸思考 观点一致 观点相悖 同一事件 上下游 版本演进", arr, " ");
  for (i in arr) allow[arr[i]] = 1;
}
{
  if ($0 ~ /^## 相关文档$/) {inrel=1; next}
  if ($0 ~ /^## /) {inrel=0}
  if (inrel && $0 ~ /^- /) {
    if ($0 !~ /关联理由：/) {
      printf("MISSING_REASON %s:%d %s\n", FILENAME, NR, $0);
      next;
    }
    reason=$0;
    sub(/^.*关联理由：/, "", reason);

    # Prefer exact separator "；说明：" to avoid multibyte regex issues
    # on awk implementations/locales without full UTF-8 regex support.
    if (index(reason, "；说明：") > 0) {
      split(reason, parts, "；说明：");
      reason = parts[1];
    } else if (index(reason, ";说明:") > 0) {
      split(reason, parts, ";说明:");
      reason = parts[1];
    } else if (index(reason, "; 说明:") > 0) {
      split(reason, parts, "; 说明:");
      reason = parts[1];
    }

    # Trim ASCII punctuation/spaces as a fallback.
    sub(/[;.,].*$/, "", reason);
    gsub(/[[:space:]]/, "", reason);
    if (!(reason in allow)) {
      printf("BAD_REASON_TYPE %s:%d %s\n", FILENAME, NR, $0);
    }
  }
}
AWK

WITH_RELATED="$BASE_DIR/with_related_after.txt"
if command -v rg >/dev/null 2>&1; then
  rg -l '^## 相关文档$' 00-元语 01-博客 02-资源 03-图书 | sort > "$WITH_RELATED"
else
  grep -R -l '^## 相关文档$' 00-元语 01-博客 02-资源 03-图书 --include='*.md' | sort > "$WITH_RELATED"
fi

CHECK_OUT="$BASE_DIR/reason_check.txt"
xargs -d '\n' awk -f "$CHECK_AWK" < "$WITH_RELATED" > "$CHECK_OUT" || true

if [[ -s "$CHECK_OUT" ]]; then
  echo "[error] reason validation failed"
  sed -n '1,120p' "$CHECK_OUT"
  exit 3
fi

echo "[ok] queue mode complete: all files processed and reason format validated"
