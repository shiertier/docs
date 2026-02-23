(function () {
  "use strict";

  var GRAPH_DATA_FILE = "graph-data.json";
  var GRAPH_MAX_NODES = 320;
  var ROOT_SECTIONS = ["00-元语", "01-博客", "02-资源", "03-图书", "04-聊天"];
  var GRAPH_STYLE_STORAGE_KEY = "relation-graph.style.v2";
  var HOVER_HELP_TEXT = "悬停节点可查看标题，点击节点可跳转";
  var DEFAULT_GROUP_COLORS = {
    "00-元语": "#4f7cff",
    "01-博客": "#ef5d5d",
    "02-资源": "#6ee7b7",
    "03-图书": "#f3c75f",
    "04-聊天": "#bf7cff",
    "其他": "#38bdf8"
  };
  var DEFAULT_SWATCHES = ["#ef5d5d", "#5b8bff", "#f3c75f", "#bf7cff", "#d97706", "#0ea5e9", "#10b981"];
  var PRIORITY_PATH_COLOR_RULES = [
    { terms: ["claude"], color: "#d97757" }, // 217,119,87
    { terms: ["gemini"], color: "#a261d4" }, // 162,97,212
    { terms: ["openai", "codex", "chatgpt", "chat-gpt"], color: "#000000" }, // 0,0,0
    { terms: ["deepseek"], color: "#0072d1" }, // 0,114,209
    { terms: ["memo", "memory"], color: "#00ffbf" }, // 0,255,191
    { terms: ["ai", "agent"], color: "#82bcf2" }, // 130,188,242
  ];
  var graphDataPromise = null;
  var mermaidReadyPromise = null;
  var tocCleanup = null;
  var graphCleanup = null;

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function safeDecode(value) {
    try {
      return decodeURIComponent(value);
    } catch (err) {
      return value;
    }
  }

  function loadGraphData() {
    if (graphDataPromise) return graphDataPromise;

    var prefixes = ["", "./", "../", "../../", "../../../", "../../../../", "../../../../../", "/"];

    graphDataPromise = (async function () {
      for (var i = 0; i < prefixes.length; i += 1) {
        var url = prefixes[i] + GRAPH_DATA_FILE;
        try {
          var response = await fetch(url, { cache: "no-store" });
          if (!response.ok) continue;
          var json = await response.json();
          if (json && Array.isArray(json.nodes) && Array.isArray(json.links)) {
            return json;
          }
        } catch (err) {
          continue;
        }
      }
      return { nodes: [], links: [], backlinks: {}, stats: { nodes: 0, links: 0 } };
    })();

    return graphDataPromise;
  }

  function ensureMermaidLibrary() {
    if (window.mermaid && typeof window.mermaid.initialize === "function") {
      return Promise.resolve(window.mermaid);
    }
    if (mermaidReadyPromise) return mermaidReadyPromise;

    mermaidReadyPromise = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
      script.async = true;
      script.onload = function () {
        if (window.mermaid) resolve(window.mermaid);
        else reject(new Error("Mermaid script loaded but window.mermaid is unavailable"));
      };
      script.onerror = function () {
        reject(new Error("Failed to load Mermaid runtime from CDN"));
      };
      document.head.appendChild(script);
    })
      .then(function (mermaid) {
        mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: "default" });
        return mermaid;
      })
      .catch(function (err) {
        console.error("[relation-graph] mermaid init failed", err);
        mermaidReadyPromise = null;
        throw err;
      });

    return mermaidReadyPromise;
  }

  function renderMermaidBlocks() {
    var blocks = $all(".markdown-section .mermaid").filter(function (block) {
      return block && !block.dataset.rendered;
    });
    if (blocks.length === 0) return Promise.resolve();

    return ensureMermaidLibrary()
      .then(function (mermaid) {
        var chain = Promise.resolve();
        blocks.forEach(function (block, index) {
          chain = chain.then(function () {
            var source = block.textContent || "";
            var id = "mermaid-" + Date.now() + "-" + index;
            return mermaid
              .render(id, source)
              .then(function (result) {
                block.innerHTML = result.svg;
                block.dataset.rendered = "1";
              })
              .catch(function (err) {
                block.dataset.rendered = "error";
                block.classList.add("mermaid-error");
                console.error("[relation-graph] mermaid render failed", err);
              });
          });
        });
        return chain;
      })
      .catch(function () {
        blocks.forEach(function (block) {
          if (!block.dataset.rendered) {
            block.dataset.rendered = "error";
            block.classList.add("mermaid-error");
          }
        });
      });
  }

  function getPathCandidateFromLocation() {
    var pathname = safeDecode(window.location.pathname || "").replace(/\\/g, "/");
    pathname = pathname.replace(/\/+/g, "/");
    if (!pathname || pathname === "/") return "README";

    pathname = pathname.replace(/^\//, "");
    if (pathname.endsWith("/")) pathname = pathname + "index.html";

    if (pathname === "index.html") return "README";
    if (pathname.endsWith(".html")) {
      pathname = pathname.slice(0, -5);
    }

    if (!pathname || pathname === "index") return "README";
    return pathname;
  }

  function resolveCurrentSlug(data) {
    var nodeIds = new Set((data.nodes || []).map(function (node) { return node.id; }));
    var candidate = getPathCandidateFromLocation();

    if (candidate === "README") return "README";
    if (nodeIds.has(candidate)) return candidate;

    for (var i = 0; i < ROOT_SECTIONS.length; i += 1) {
      var marker = ROOT_SECTIONS[i] + "/";
      var idx = candidate.indexOf(marker);
      if (idx >= 0) {
        var sliced = candidate.slice(idx);
        if (nodeIds.has(sliced)) return sliced;
      }
    }

    var trimmed = candidate;
    while (trimmed.indexOf("/") > -1) {
      trimmed = trimmed.slice(trimmed.indexOf("/") + 1);
      if (nodeIds.has(trimmed)) return trimmed;
    }

    return candidate;
  }

  function detectSiteBase(currentSlug) {
    var pathname = safeDecode(window.location.pathname || "/").replace(/\\/g, "/");
    pathname = pathname.replace(/\/+/g, "/");
    if (!pathname.startsWith("/")) pathname = "/" + pathname;

    if (currentSlug && currentSlug !== "README") {
      var root = currentSlug.split("/")[0];
      var marker = "/" + root + "/";
      var markerIdx = pathname.indexOf(marker);
      if (markerIdx >= 0) {
        return pathname.slice(0, markerIdx + 1);
      }
    }

    for (var i = 0; i < ROOT_SECTIONS.length; i += 1) {
      var sectionMarker = "/" + ROOT_SECTIONS[i] + "/";
      var idx = pathname.indexOf(sectionMarker);
      if (idx >= 0) {
        return pathname.slice(0, idx + 1);
      }
    }

    if (pathname.endsWith("/index.html")) {
      return pathname.slice(0, -"index.html".length);
    }

    if (pathname.endsWith(".html")) {
      return pathname.slice(0, pathname.lastIndexOf("/") + 1);
    }

    if (pathname.endsWith("/")) {
      return pathname;
    }

    return pathname + "/";
  }

  function hrefForSlug(siteBase, toSlug) {
    var base = siteBase || "/";
    if (!base.endsWith("/")) base += "/";

    if (!toSlug || toSlug === "README") {
      return base + "index.html";
    }

    var encoded = toSlug
      .split("/")
      .map(function (part) { return encodeURIComponent(part); })
      .join("/");
    return base + encoded + ".html";
  }

  function headingIdFromText(text, index) {
    var slug = text
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/[^\w\u4e00-\u9fa5-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    if (!slug) slug = "section-" + (index + 1);
    return "toc-" + slug + "-" + (index + 1);
  }

  function removeRightToc() {
    var old = document.getElementById("docs-right-toc");
    if (old) old.remove();

    var book = $(".book");
    if (book) book.classList.remove("with-right-toc");

    if (typeof tocCleanup === "function") {
      tocCleanup();
      tocCleanup = null;
    }
  }

  function renderRightToc(currentSlug) {
    removeRightToc();

    if (!currentSlug || currentSlug === "README") return;

    var markdownSection = $(".book .book-body .page-inner .markdown-section") || $(".markdown-section");
    if (!markdownSection) return;

    var headings = $all("h2, h3, h4", markdownSection).filter(function (heading) {
      var text = (heading.textContent || "").trim();
      if (!text) return false;
      if (/^反向链接$/.test(text)) return false;
      return true;
    });

    if (headings.length === 0) return;

    var seenIds = new Set();
    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = headingIdFromText(heading.textContent || "", index);
      }
      while (seenIds.has(heading.id)) {
        heading.id = heading.id + "-dup";
      }
      seenIds.add(heading.id);
    });

    var aside = document.createElement("aside");
    aside.id = "docs-right-toc";

    var title = document.createElement("div");
    title.className = "docs-right-toc-title";
    title.textContent = "目录";
    aside.appendChild(title);

    var list = document.createElement("ul");
    list.className = "docs-right-toc-list";

    headings.forEach(function (heading) {
      var level = Number((heading.tagName || "H2").replace("H", ""));
      var item = document.createElement("li");
      item.className = "docs-right-toc-item level-" + level;

      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = (heading.textContent || "").trim();
      link.dataset.targetId = heading.id;
      item.appendChild(link);
      list.appendChild(item);
    });

    aside.appendChild(list);

    var host = $(".book .book-body") || document.body;
    host.appendChild(aside);

    var book = $(".book");
    if (book) book.classList.add("with-right-toc");

    var onScroll = function () {
      var activeId = "";
      for (var i = headings.length - 1; i >= 0; i -= 1) {
        var top = headings[i].getBoundingClientRect().top;
        if (top <= 140) {
          activeId = headings[i].id;
          break;
        }
      }

      var links = $all("a", list);
      links.forEach(function (link) {
        if (link.dataset.targetId === activeId) link.classList.add("active");
        else link.classList.remove("active");
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    tocCleanup = function () {
      window.removeEventListener("scroll", onScroll);
    };
  }

  function renderBacklinks(data, currentSlug, idToNode, siteBase) {
    var markdownSection = $(".book .book-body .page-inner .markdown-section") || $(".markdown-section");
    if (!markdownSection) return;

    var old = document.getElementById("relation-backlinks");
    if (old) old.remove();

    if (!currentSlug || currentSlug === "README") return;

    var refs = ((data.backlinks || {})[currentSlug] || []).filter(function (slug) {
      return idToNode.has(slug);
    });

    if (refs.length === 0) return;

    var section = document.createElement("section");
    section.id = "relation-backlinks";
    section.className = "relation-backlinks";

    var h2 = document.createElement("h2");
    h2.textContent = "反向链接";
    section.appendChild(h2);

    var ul = document.createElement("ul");
    refs.forEach(function (slug) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = hrefForSlug(siteBase, slug);
      a.textContent = idToNode.get(slug).title || slug;
      li.appendChild(a);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    markdownSection.appendChild(section);
  }

  function degreeMapFromLinks(links) {
    var degree = new Map();
    (links || []).forEach(function (link) {
      degree.set(link.source, (degree.get(link.source) || 0) + 1);
      degree.set(link.target, (degree.get(link.target) || 0) + 1);
    });
    return degree;
  }

  function pickGraphSubset(data, currentSlug) {
    var nodes = data.nodes || [];
    var links = data.links || [];
    if (nodes.length <= GRAPH_MAX_NODES) return { nodes: nodes, links: links, truncated: false };

    var degree = degreeMapFromLinks(links);
    var sorted = nodes
      .slice()
      .sort(function (a, b) {
        var d = (degree.get(b.id) || 0) - (degree.get(a.id) || 0);
        if (d !== 0) return d;
        return a.id.localeCompare(b.id, "zh-Hans-CN");
      });

    var selected = sorted.slice(0, GRAPH_MAX_NODES - 1).map(function (node) { return node.id; });
    if (currentSlug && currentSlug !== "README" && !selected.includes(currentSlug)) {
      selected.push(currentSlug);
    }

    var selectedSet = new Set(selected);
    var selectedNodes = nodes.filter(function (node) { return selectedSet.has(node.id); });
    var selectedLinks = links.filter(function (link) {
      return selectedSet.has(link.source) && selectedSet.has(link.target);
    });

    return { nodes: selectedNodes, links: selectedLinks, truncated: true };
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function readNumberOr(value, fallback) {
    var num = Number(value);
    return Number.isFinite(num) ? num : fallback;
  }

  function sanitizeHexColor(value, fallback) {
    var candidate = String(value || "").trim();
    if (/^#[0-9a-f]{6}$/i.test(candidate)) return candidate.toLowerCase();
    if (/^#[0-9a-f]{3}$/i.test(candidate)) {
      return (
        "#" +
        candidate[1] + candidate[1] +
        candidate[2] + candidate[2] +
        candidate[3] + candidate[3]
      ).toLowerCase();
    }
    return fallback;
  }

  function normalizeGroupToken(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[\s_]+/g, "-")
      .replace(/[^\w\u4e00-\u9fa5-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function defaultColorForGroup(group, index) {
    if (DEFAULT_GROUP_COLORS[group]) return DEFAULT_GROUP_COLORS[group];
    return DEFAULT_SWATCHES[index % DEFAULT_SWATCHES.length];
  }

  function buildDefaultPaletteRows(groupCounts) {
    var groups = Object.keys(groupCounts || {}).sort(function (a, b) {
      return a.localeCompare(b, "zh-Hans-CN");
    });

    return groups.map(function (group, index) {
      return {
        id: "group-" + index + "-" + Date.now(),
        groupKey: group,
        query: "path:" + normalizeGroupToken(group || "其他"),
        color: defaultColorForGroup(group, index),
      };
    });
  }

  function loadStoredGraphStyle() {
    try {
      var raw = window.localStorage.getItem(GRAPH_STYLE_STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      return null;
    }
  }

  function saveStoredGraphStyle(style) {
    try {
      window.localStorage.setItem(GRAPH_STYLE_STORAGE_KEY, JSON.stringify(style));
    } catch (err) {
      // ignore write failures in private mode or restricted storage
    }
  }

  function buildPaletteRows(groupCounts, storedPalette) {
    var defaults = buildDefaultPaletteRows(groupCounts);
    if (!Array.isArray(storedPalette) || storedPalette.length === 0) return defaults;

    var byGroup = new Map();
    var custom = [];
    storedPalette.forEach(function (item, index) {
      if (!item || typeof item !== "object") return;
      var row = {
        id: String(item.id || ("custom-" + index + "-" + Date.now())),
        groupKey: item.groupKey ? String(item.groupKey) : null,
        query: String(item.query || ""),
        color: sanitizeHexColor(item.color, DEFAULT_SWATCHES[index % DEFAULT_SWATCHES.length]),
      };
      if (row.groupKey) byGroup.set(row.groupKey, row);
      else custom.push(row);
    });

    defaults.forEach(function (row, index) {
      var saved = byGroup.get(row.groupKey);
      if (!saved) return;
      row.query = saved.query || row.query;
      row.color = sanitizeHexColor(saved.color, row.color || defaultColorForGroup(row.groupKey, index));
      row.id = saved.id || row.id;
    });

    custom.forEach(function (row, index) {
      defaults.push({
        id: row.id || ("custom-" + index + "-" + Date.now()),
        groupKey: null,
        query: row.query || "path:",
        color: sanitizeHexColor(row.color, DEFAULT_SWATCHES[(index + defaults.length) % DEFAULT_SWATCHES.length]),
      });
    });

    return defaults;
  }

  function colorForPath(path) {
    var normalizedPath = String(path || "").toLowerCase();
    if (!normalizedPath) return null;
    var filename = normalizedPath.split("/").pop() || "";

    // pale yellow for coding-related paths or filenames containing "开发"
    if (normalizedPath.indexOf("coding") !== -1 || filename.indexOf("开发") !== -1) {
      return "#fef3c7";
    }

    for (var i = 0; i < PRIORITY_PATH_COLOR_RULES.length; i += 1) {
      var rule = PRIORITY_PATH_COLOR_RULES[i];
      for (var j = 0; j < rule.terms.length; j += 1) {
        if (normalizedPath.indexOf(rule.terms[j]) !== -1) {
          return rule.color;
        }
      }
    }

    return null;
  }

  function colorForGroup(group, paletteRows, path) {
    var keywordColor = colorForPath(path);
    if (keywordColor) return keywordColor;

    var normalizedGroup = normalizeGroupToken(group || "其他");

    for (var i = 0; i < paletteRows.length; i += 1) {
      var direct = paletteRows[i];
      if (direct.groupKey && direct.groupKey === group) {
        return sanitizeHexColor(direct.color, defaultColorForGroup(group, i));
      }
    }

    for (var j = 0; j < paletteRows.length; j += 1) {
      var row = paletteRows[j];
      var query = String(row.query || "").trim().toLowerCase();
      if (!query) continue;
      var term = query.indexOf("path:") === 0 ? query.slice(5).trim() : query;
      var normalizedTerm = normalizeGroupToken(term);
      if (!normalizedTerm) continue;
      if (normalizedGroup.indexOf(normalizedTerm) !== -1) {
        return sanitizeHexColor(row.color, defaultColorForGroup(group, j));
      }
    }

    return defaultColorForGroup(group || "其他", 0);
  }

  function buildInitialPositions(nodes) {
    var groups = new Map();
    nodes.forEach(function (node) {
      var group = node.group || "其他";
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push(node);
    });

    var groupKeys = Array.from(groups.keys());
    var radius = 290;
    var groupCenters = new Map();

    groupKeys.forEach(function (group, idx) {
      var angle = (Math.PI * 2 * idx) / Math.max(1, groupKeys.length);
      groupCenters.set(group, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    });

    nodes.forEach(function (node, index) {
      var center = groupCenters.get(node.group || "其他") || { x: 0, y: 0 };
      var jitterX = ((index * 13) % 29) - 14;
      var jitterY = ((index * 19) % 23) - 11;
      node.x = center.x + jitterX * 8;
      node.y = center.y + jitterY * 8;
      node.vx = 0;
      node.vy = 0;
      node.r = 5;
    });
  }

  function runForce(nodes, links, idToNode, degree) {
    var springLength = 62;
    var springK = 0.011;
    var charge = 6800;

    for (var step = 0; step < 240; step += 1) {
      for (var i = 0; i < links.length; i += 1) {
        var link = links[i];
        var a = idToNode.get(link.source);
        var b = idToNode.get(link.target);
        if (!a || !b) continue;

        var dx = b.x - a.x;
        var dy = b.y - a.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 1;
        var force = (dist - springLength) * springK;

        var fx = (dx / dist) * force;
        var fy = (dy / dist) * force;

        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      }

      for (var m = 0; m < nodes.length; m += 1) {
        for (var n = m + 1; n < nodes.length; n += 1) {
          var p = nodes[m];
          var q = nodes[n];

          var rdx = q.x - p.x;
          var rdy = q.y - p.y;
          var d2 = rdx * rdx + rdy * rdy + 0.01;
          var rep = charge / d2;

          var distRep = Math.sqrt(d2);
          var rfx = (rdx / distRep) * rep;
          var rfy = (rdy / distRep) * rep;

          p.vx -= rfx;
          p.vy -= rfy;
          q.vx += rfx;
          q.vy += rfy;
        }
      }

      for (var k = 0; k < nodes.length; k += 1) {
        var node = nodes[k];
        node.vx += -node.x * 0.001;
        node.vy += -node.y * 0.001;

        node.vx *= 0.87;
        node.vy *= 0.87;

        node.x += node.vx;
        node.y += node.vy;

        node.r = 4 + Math.min(8.5, Math.sqrt((degree.get(node.id) || 1) / 1.6));
      }
    }
  }

  function pointerToWorld(canvasState, x, y) {
    return {
      x: (x - canvasState.offsetX) / canvasState.scale,
      y: (y - canvasState.offsetY) / canvasState.scale,
    };
  }

  function findNodeAt(nodes, canvasState, x, y, nodeScale) {
    var world = pointerToWorld(canvasState, x, y);
    var scale = typeof nodeScale === "number" ? nodeScale : 1;
    for (var i = nodes.length - 1; i >= 0; i -= 1) {
      var node = nodes[i];
      var radius = ((node.r || 5) * scale) + 4;
      var dx = world.x - node.x;
      var dy = world.y - node.y;
      if (dx * dx + dy * dy <= radius * radius) {
        return node;
      }
    }
    return null;
  }

  function drawRoundedRect(ctx, x, y, width, height, radius) {
    var r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
  }

  function drawArrowHead(ctx, from, to, radius, widthFactor) {
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (!dist || dist < 1) return;

    var nx = dx / dist;
    var ny = dy / dist;
    var tipGap = radius + 3;
    var tipX = to.x - nx * tipGap;
    var tipY = to.y - ny * tipGap;
    var length = (9 + widthFactor * 2) / Math.max(1, widthFactor + 0.3);
    var half = length * 0.46;

    var baseX = tipX - nx * length;
    var baseY = tipY - ny * length;
    var ox = -ny * half;
    var oy = nx * half;

    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(baseX + ox, baseY + oy);
    ctx.lineTo(baseX - ox, baseY - oy);
    ctx.closePath();
    ctx.fill();
  }

  function drawGrid(ctx, width, height, state) {
    var grid = 36;
    var startX = state.offsetX % grid;
    var startY = state.offsetY % grid;

    ctx.save();
    ctx.strokeStyle = "rgba(140, 161, 199, 0.1)";
    ctx.lineWidth = 1;

    for (var x = startX; x < width; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (var y = startY; y < height; y += grid) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.restore();
  }

  function buildGraphHud(container, options) {
    var hud = document.createElement("div");
    hud.className = "relation-graph-hud";

    var panel = document.createElement("div");
    panel.className = "relation-graph-panel";
    hud.appendChild(panel);

    var title = document.createElement("div");
    title.className = "relation-graph-title";
    title.textContent = "关系图谱";
    panel.appendChild(title);

    var controls = document.createElement("div");
    controls.className = "relation-graph-controls";

    var resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "relation-graph-btn";
    resetBtn.textContent = "重置视角";

    var centerBtn = document.createElement("button");
    centerBtn.type = "button";
    centerBtn.className = "relation-graph-btn";
    centerBtn.textContent = "聚焦当前";

    controls.appendChild(resetBtn);
    controls.appendChild(centerBtn);
    panel.appendChild(controls);

    var colorSection = document.createElement("section");
    colorSection.className = "relation-graph-section";

    var colorTitle = document.createElement("div");
    colorTitle.className = "relation-graph-section-title";
    colorTitle.textContent = "颜色组";
    colorSection.appendChild(colorTitle);

    var colorList = document.createElement("div");
    colorList.className = "relation-graph-color-list";
    colorSection.appendChild(colorList);

    var addColorBtn = document.createElement("button");
    addColorBtn.type = "button";
    addColorBtn.className = "relation-graph-btn relation-graph-btn-primary";
    addColorBtn.textContent = "新建颜色组";
    colorSection.appendChild(addColorBtn);

    panel.appendChild(colorSection);

    var appearanceSection = document.createElement("section");
    appearanceSection.className = "relation-graph-section";

    var appearanceTitle = document.createElement("div");
    appearanceTitle.className = "relation-graph-section-title";
    appearanceTitle.textContent = "外观";
    appearanceSection.appendChild(appearanceTitle);

    var arrowRow = document.createElement("div");
    arrowRow.className = "relation-graph-appearance-row";
    var arrowLabel = document.createElement("span");
    arrowLabel.textContent = "箭头";
    var arrowToggle = document.createElement("input");
    arrowToggle.type = "checkbox";
    arrowToggle.className = "relation-graph-switch";
    arrowToggle.checked = !!options.appearance.showArrows;
    arrowRow.appendChild(arrowLabel);
    arrowRow.appendChild(arrowToggle);
    appearanceSection.appendChild(arrowRow);

    function createSliderRow(labelText, min, max, step, value) {
      var row = document.createElement("div");
      row.className = "relation-graph-slider-row";
      var label = document.createElement("label");
      label.className = "relation-graph-slider-label";
      label.textContent = labelText;
      var input = document.createElement("input");
      input.type = "range";
      input.min = String(min);
      input.max = String(max);
      input.step = String(step);
      input.value = String(value);
      input.className = "relation-graph-slider";
      row.appendChild(label);
      row.appendChild(input);
      appearanceSection.appendChild(row);
      return input;
    }

    var textOpacityInput = createSliderRow("文本透明度", 0, 100, 1, Math.round(options.appearance.textOpacity * 100));
    var nodeSizeInput = createSliderRow("节点大小", 60, 160, 1, Math.round(options.appearance.nodeScale * 100));
    var edgeWidthInput = createSliderRow("连线粗细", 50, 220, 1, Math.round(options.appearance.edgeScale * 100));

    var animateBtn = document.createElement("button");
    animateBtn.type = "button";
    animateBtn.className = "relation-graph-btn relation-graph-btn-primary";
    animateBtn.textContent = "播放动画";
    appearanceSection.appendChild(animateBtn);

    panel.appendChild(appearanceSection);

    var hover = document.createElement("div");
    hover.className = "relation-graph-hover";
    hover.textContent = HOVER_HELP_TEXT;

    var stats = document.createElement("div");
    stats.className = "relation-graph-meta";
    stats.textContent = options.statsText;

    panel.appendChild(hover);
    panel.appendChild(stats);
    container.appendChild(hud);

    function renderColorRows() {
      colorList.innerHTML = "";
      options.paletteRows.forEach(function (row, index) {
        var item = document.createElement("div");
        item.className = "relation-graph-color-row";

        var queryInput = document.createElement("input");
        queryInput.type = "text";
        queryInput.className = "relation-graph-color-query";
        queryInput.value = row.query || "";
        queryInput.placeholder = "path:关键词";
        queryInput.setAttribute("aria-label", "颜色组筛选词");
        queryInput.addEventListener("change", function () {
          row.query = queryInput.value.trim();
          options.onStyleChange();
        });

        var colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.className = "relation-graph-color-picker";
        colorInput.value = sanitizeHexColor(row.color, DEFAULT_SWATCHES[index % DEFAULT_SWATCHES.length]);
        colorInput.setAttribute("aria-label", "颜色组颜色");
        colorInput.addEventListener("input", function () {
          row.color = colorInput.value;
          options.onStyleChange();
        });

        var removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "relation-graph-remove-btn";
        removeBtn.textContent = "×";
        removeBtn.setAttribute("aria-label", "删除颜色组");
        removeBtn.addEventListener("click", function () {
          options.paletteRows.splice(index, 1);
          renderColorRows();
          options.onStyleChange();
        });

        item.appendChild(queryInput);
        item.appendChild(colorInput);
        item.appendChild(removeBtn);
        colorList.appendChild(item);
      });
    }

    renderColorRows();

    addColorBtn.addEventListener("click", function () {
      options.paletteRows.push({
        id: "custom-" + Date.now() + "-" + options.paletteRows.length,
        groupKey: null,
        query: "path:",
        color: DEFAULT_SWATCHES[options.paletteRows.length % DEFAULT_SWATCHES.length],
      });
      renderColorRows();
      options.onStyleChange();
    });

    arrowToggle.addEventListener("change", function () {
      options.appearance.showArrows = !!arrowToggle.checked;
      options.onStyleChange();
    });

    textOpacityInput.addEventListener("input", function () {
      options.appearance.textOpacity = clamp(Number(textOpacityInput.value) / 100, 0, 1);
      options.onStyleChange();
    });

    nodeSizeInput.addEventListener("input", function () {
      options.appearance.nodeScale = clamp(Number(nodeSizeInput.value) / 100, 0.6, 1.6);
      options.onStyleChange();
    });

    edgeWidthInput.addEventListener("input", function () {
      options.appearance.edgeScale = clamp(Number(edgeWidthInput.value) / 100, 0.5, 2.2);
      options.onStyleChange();
    });

    animateBtn.addEventListener("click", function () {
      options.onToggleAnimation();
    });

    return {
      hover: hover,
      stats: stats,
      resetBtn: resetBtn,
      centerBtn: centerBtn,
      setAnimationState: function (running) {
        animateBtn.textContent = running ? "停止动画" : "播放动画";
      },
    };
  }

  function renderGraphCanvas(container, graph, currentSlug, siteBase, graphStats) {
    container.innerHTML = "";
    var storedStyle = loadStoredGraphStyle() || {};
    var paletteRows = buildPaletteRows(graphStats.groupCounts || {}, storedStyle.palette);
    var appearance = {
      showArrows: !!(storedStyle.appearance && storedStyle.appearance.showArrows),
      textOpacity: clamp(readNumberOr(storedStyle.appearance && storedStyle.appearance.textOpacity, 0.88), 0, 1),
      nodeScale: clamp(readNumberOr(storedStyle.appearance && storedStyle.appearance.nodeScale, 1), 0.6, 1.6),
      edgeScale: clamp(readNumberOr(storedStyle.appearance && storedStyle.appearance.edgeScale, 1), 0.5, 2.2),
    };

    var canvas = document.createElement("canvas");
    canvas.className = "relation-graph-canvas";
    container.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    var dpr = Math.max(window.devicePixelRatio || 1, 1);

    var nodes = graph.nodes.map(function (node) {
      return {
        id: node.id,
        title: node.title,
        group: node.group,
        x: node.x,
        y: node.y,
        vx: node.vx,
        vy: node.vy,
        r: node.r,
      };
    });

    var links = graph.links;
    var adjacency = new Map();

    nodes.forEach(function (node) {
      adjacency.set(node.id, new Set());
    });

    var nodeMap = new Map();
    nodes.forEach(function (node) {
      nodeMap.set(node.id, node);
    });

    links.forEach(function (link) {
      link._source = nodeMap.get(link.source) || null;
      link._target = nodeMap.get(link.target) || null;
      if (adjacency.has(link.source)) adjacency.get(link.source).add(link.target);
      if (adjacency.has(link.target)) adjacency.get(link.target).add(link.source);
    });

    var state = {
      scale: 1,
      offsetX: 0,
      offsetY: 0,
      draggingNode: null,
      isPanning: false,
      moved: false,
      lastX: 0,
      lastY: 0,
      downNode: null,
      hoverNode: null,
      isAnimating: false,
      animationFrame: null,
      animationT: 0,
      animationBaseX: 0,
      animationBaseY: 0,
    };

    function persistGraphStyle() {
      saveStoredGraphStyle({
        palette: paletteRows.map(function (row) {
          return {
            id: row.id,
            groupKey: row.groupKey || null,
            query: row.query || "",
            color: sanitizeHexColor(row.color, "#64748b"),
          };
        }),
        appearance: {
          showArrows: !!appearance.showArrows,
          textOpacity: clamp(appearance.textOpacity, 0, 1),
          nodeScale: clamp(appearance.nodeScale, 0.6, 1.6),
          edgeScale: clamp(appearance.edgeScale, 0.5, 2.2),
        },
      });
    }

    var hud = buildGraphHud(container, {
      groupCounts: graphStats.groupCounts || {},
      statsText: graphStats.metaText,
      paletteRows: paletteRows,
      appearance: appearance,
      onStyleChange: function () {
        persistGraphStyle();
        draw();
      },
      onToggleAnimation: function () {
        if (state.isAnimating) stopAnimation();
        else startAnimation();
      },
    });

    var getCurrentNode = function () {
      return currentSlug ? nodeMap.get(currentSlug) : null;
    };

    var resetViewport = function () {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;
      state.scale = 1;
      state.offsetX = width / 2;
      state.offsetY = height / 2;
    };

    var centerOnNode = function (node, scale) {
      if (!node) return;
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;
      if (typeof scale === "number") {
        state.scale = Math.max(0.35, Math.min(2.8, scale));
      }
      state.offsetX = width / 2 - node.x * state.scale;
      state.offsetY = height / 2 - node.y * state.scale;
    };

    function stopAnimation() {
      if (!state.isAnimating) return;
      state.isAnimating = false;
      if (state.animationFrame) {
        cancelAnimationFrame(state.animationFrame);
        state.animationFrame = null;
      }
      state.offsetX = state.animationBaseX;
      state.offsetY = state.animationBaseY;
      hud.setAnimationState(false);
      draw();
    }

    function startAnimation() {
      if (state.isAnimating) return;
      state.isAnimating = true;
      state.animationT = 0;
      state.animationBaseX = state.offsetX;
      state.animationBaseY = state.offsetY;
      hud.setAnimationState(true);

      var tick = function () {
        if (!state.isAnimating) return;
        state.animationT += 0.03;
        state.offsetX = state.animationBaseX + Math.sin(state.animationT * 1.6) * 12;
        state.offsetY = state.animationBaseY + Math.cos(state.animationT * 1.2) * 8;
        draw();
        state.animationFrame = requestAnimationFrame(tick);
      };

      state.animationFrame = requestAnimationFrame(tick);
    }

    function draw() {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      drawGrid(ctx, width, height, state);

      ctx.save();
      ctx.translate(state.offsetX, state.offsetY);
      ctx.scale(state.scale, state.scale);

      var focusSet = null;
      if (state.hoverNode) {
        focusSet = new Set([state.hoverNode.id]);
        var neighbors = adjacency.get(state.hoverNode.id) || new Set();
        neighbors.forEach(function (id) { focusSet.add(id); });
      }

      var edgeBaseColor = "rgba(134, 152, 184, 0.3)";
      var edgeFocusColor = "rgba(129, 160, 255, 0.78)";
      for (var i = 0; i < links.length; i += 1) {
        var link = links[i];
        var a = link._source;
        var b = link._target;
        if (!a || !b) continue;

        var isFocusEdge =
          state.hoverNode && (a.id === state.hoverNode.id || b.id === state.hoverNode.id);

        ctx.beginPath();
        ctx.lineWidth = (isFocusEdge ? 1.85 : 1.05) * appearance.edgeScale / Math.max(1, state.scale);
        ctx.strokeStyle = isFocusEdge ? edgeFocusColor : edgeBaseColor;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        if (appearance.showArrows) {
          ctx.fillStyle = isFocusEdge ? edgeFocusColor : "rgba(134, 152, 184, 0.5)";
          drawArrowHead(ctx, a, b, (b.r || 5) * appearance.nodeScale, appearance.edgeScale);
        }
      }

      for (var n = 0; n < nodes.length; n += 1) {
        var node = nodes[n];
        var isCurrent = node.id === currentSlug;
        var isHover = state.hoverNode && state.hoverNode.id === node.id;
        var isDimmed = !!focusSet && !focusSet.has(node.id);
        var visualRadius = (node.r || 5) * appearance.nodeScale;

        var fill = colorForGroup(node.group, paletteRows, node.id);

        ctx.save();
        ctx.globalAlpha = isDimmed ? 0.3 : 1;
        ctx.shadowColor = isCurrent || isHover ? "rgba(92, 123, 255, 0.64)" : "rgba(0, 0, 0, 0.45)";
        ctx.shadowBlur = isCurrent || isHover ? 20 : 8;

        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.arc(node.x, node.y, visualRadius + (isHover ? 1.15 : 0), 0, Math.PI * 2);
        ctx.fill();

        if (isCurrent || isHover) {
          ctx.beginPath();
          ctx.lineWidth = 2.2 / Math.max(1, state.scale);
          ctx.strokeStyle = isCurrent ? "#f8fbff" : "#91a8ff";
          ctx.arc(node.x, node.y, visualRadius + 3.4, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();
      }

      var shouldShowLabels = state.scale > 0.92;
      if ((shouldShowLabels || state.hoverNode) && appearance.textOpacity > 0.03) {
        ctx.font = "12px 'SF Pro Text','PingFang SC','Noto Sans SC',sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";

        for (var t = 0; t < nodes.length; t += 1) {
          var item = nodes[t];
          var focus = state.hoverNode && state.hoverNode.id === item.id;
          if (!shouldShowLabels && !focus) continue;

          var dim = !!focusSet && !focusSet.has(item.id) && !focus;
          if (dim) continue;

          var label = item.title || item.id;
          var textWidth = ctx.measureText(label).width;
          var x = item.x + ((item.r || 5) * appearance.nodeScale) + 5;
          var y = item.y;

          ctx.save();
          ctx.globalAlpha = (focus ? 1 : 0.92) * appearance.textOpacity;
          drawRoundedRect(ctx, x - 4, y - 9, textWidth + 8, 18, 6);
          ctx.fillStyle = "rgba(13, 17, 24, 0.84)";
          ctx.fill();
          ctx.strokeStyle = "rgba(156, 176, 214, 0.32)";
          ctx.lineWidth = 1 / Math.max(1, state.scale);
          ctx.stroke();
          ctx.fillStyle = "#e5edf9";
          ctx.fillText(label, x, y);
          ctx.restore();
        }
      }

      ctx.restore();
    }

    var resize = function () {
      var rect = container.getBoundingClientRect();
      var width = Math.max(420, Math.floor(rect.width));
      var height = Math.max(500, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    var onMouseDown = function (event) {
      if (state.isAnimating) stopAnimation();
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var node = findNodeAt(nodes, state, x, y, appearance.nodeScale);

      state.moved = false;
      state.lastX = x;
      state.lastY = y;
      state.downNode = node;

      if (node) {
        state.draggingNode = node;
      } else {
        state.isPanning = true;
      }
    };

    var onMouseMove = function (event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      var dx = x - state.lastX;
      var dy = y - state.lastY;
      if (Math.abs(dx) + Math.abs(dy) > 1) state.moved = true;

      if (state.draggingNode) {
        var world = pointerToWorld(state, x, y);
        state.draggingNode.x = world.x;
        state.draggingNode.y = world.y;
      } else if (state.isPanning) {
        state.offsetX += dx;
        state.offsetY += dy;
      }

      var hoverNode = findNodeAt(nodes, state, x, y, appearance.nodeScale);
      if (hoverNode !== state.hoverNode) {
        state.hoverNode = hoverNode;
        if (hoverNode) {
          hud.hover.textContent = hoverNode.title || hoverNode.id;
          canvas.style.cursor = "pointer";
        } else {
          hud.hover.textContent = HOVER_HELP_TEXT;
          canvas.style.cursor = state.isPanning ? "grabbing" : "grab";
        }
      }

      state.lastX = x;
      state.lastY = y;
      draw();
    };

    var onMouseUp = function () {
      var clickedNode = state.downNode;
      var shouldNavigate = clickedNode && !state.moved;

      state.draggingNode = null;
      state.isPanning = false;
      state.downNode = null;

      if (shouldNavigate) {
        window.location.assign(hrefForSlug(siteBase, clickedNode.id));
      }

      draw();
    };

    var onMouseLeave = function () {
      state.draggingNode = null;
      state.isPanning = false;
      state.downNode = null;
      state.hoverNode = null;
      hud.hover.textContent = HOVER_HELP_TEXT;
      canvas.style.cursor = "grab";
      draw();
    };

    var onWheel = function (event) {
      if (state.isAnimating) stopAnimation();
      event.preventDefault();
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var worldBefore = pointerToWorld(state, x, y);

      var delta = event.deltaY < 0 ? 1.08 : 0.92;
      state.scale = Math.min(2.8, Math.max(0.35, state.scale * delta));

      state.offsetX = x - worldBefore.x * state.scale;
      state.offsetY = y - worldBefore.y * state.scale;
      draw();
    };

    var onReset = function () {
      if (state.isAnimating) stopAnimation();
      resetViewport();
      draw();
    };

    var onCenterCurrent = function () {
      if (state.isAnimating) stopAnimation();
      var current = getCurrentNode();
      if (current) {
        centerOnNode(current, Math.max(1.05, state.scale));
      } else {
        resetViewport();
      }
      draw();
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", resize);
    hud.resetBtn.addEventListener("click", onReset);
    hud.centerBtn.addEventListener("click", onCenterCurrent);

    canvas.style.cursor = "grab";
    resetViewport();

    var currentNode = getCurrentNode();
    if (currentNode) centerOnNode(currentNode, 1.06);

    resize();

    return function cleanup() {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", resize);
      hud.resetBtn.removeEventListener("click", onReset);
      hud.centerBtn.removeEventListener("click", onCenterCurrent);
    };
  }

  function renderHomeGraph(data, currentSlug, siteBase) {
    var graphHost = document.getElementById("relation-graph-home");
    if (!graphHost) return;

    if (typeof graphCleanup === "function") {
      graphCleanup();
      graphCleanup = null;
    }

    var subset = pickGraphSubset(data, currentSlug);
    var nodes = subset.nodes.map(function (node) {
      return {
        id: node.id,
        title: node.title,
        group: node.group,
      };
    });

    var idToNode = new Map();
    nodes.forEach(function (node) {
      idToNode.set(node.id, node);
    });

    var links = subset.links
      .filter(function (link) { return idToNode.has(link.source) && idToNode.has(link.target); })
      .map(function (link) {
        return {
          source: link.source,
          target: link.target,
          _source: null,
          _target: null,
        };
      });

    var degree = degreeMapFromLinks(links);
    buildInitialPositions(nodes);

    var nodeMap = new Map();
    nodes.forEach(function (node) {
      nodeMap.set(node.id, node);
    });

    links.forEach(function (link) {
      link._source = nodeMap.get(link.source) || null;
      link._target = nodeMap.get(link.target) || null;
    });

    runForce(nodes, links, nodeMap, degree);

    var groupCounts = {};
    nodes.forEach(function (node) {
      var group = node.group || "其他";
      groupCounts[group] = (groupCounts[group] || 0) + 1;
    });

    var totalNodes = data.stats && data.stats.nodes ? data.stats.nodes : data.nodes.length;
    var totalLinks = data.stats && data.stats.links ? data.stats.links : data.links.length;
    var meta = "节点：" + totalNodes + " ｜ 连线：" + totalLinks;
    if (subset.truncated) meta += " ｜ 当前视图：" + nodes.length;

    graphCleanup = renderGraphCanvas(
      graphHost,
      { nodes: nodes, links: links },
      currentSlug,
      siteBase,
      { groupCounts: groupCounts, metaText: meta }
    );

    var stats = document.getElementById("relation-graph-stats");
    if (stats) stats.textContent = meta;
  }

  function decoratePage() {
    loadGraphData().then(function (data) {
      var idToNode = new Map((data.nodes || []).map(function (node) { return [node.id, node]; }));
      var currentSlug = resolveCurrentSlug(data);
      var siteBase = detectSiteBase(currentSlug);

      renderMermaidBlocks()
        .catch(function () {})
        .then(function () {
          renderRightToc(currentSlug);
          renderBacklinks(data, currentSlug, idToNode, siteBase);
          renderHomeGraph(data, currentSlug, siteBase);
        });
    });
  }

  if (window.gitbook && window.gitbook.events && window.gitbook.events.bind) {
    window.gitbook.events.bind("page.change", decoratePage);
  }

  document.addEventListener("DOMContentLoaded", decoratePage);
})();
