---
title: 'The complete "Editable NotebookLM Slides" solution'

来源: "https://baoyu.io/blog/the-complete-editable-notebooklm-slides-solution"
发布日期: "2025-12-21"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文介绍了一套包含“规划”与“生成”两步的工作流及提示词模板，通过结合大语言模型与Gemini的Nano Banana Pro图像模型，解决了NotebookLM自动生成幻灯片无法自定义编辑文本和内容的问题。

**2) 关键要点**
*   **核心痛点**：NotebookLM生成的幻灯片为静态图片，用户无法直接编辑文本或调整内容细节。
*   **解决逻辑**：将制作过程拆分为两步——“规划者（Planner）”负责生成结构化大纲与视觉描述，“艺术家（Artist）”负责渲染最终图像。
*   **第一步（获取规划大纲）**：作者提供了一个Gemini Gem（也可作为ChatGPT/Claude的Project使用）及专属提示词模板，用于将源材料转化为幻灯片大纲。
*   **提示词硬性约束**：要求幻灯片总数不超过20页；首尾页需采用特殊设计（如海报风格）；每页内容必须严格包含四个部分：叙事目标（Narrative Goal）、核心内容（Key Content）、视觉元素（Visual）和排版布局（Layout）。
*   **第二步（上传与定制）**：用户上传源文件（PDF、文档等）并设定语言和视觉风格后，AI会生成全局样式指令（Style Instructions）和单页大纲，用户可在此阶段修改文本。
*   **第三步（图像生成）**：在Gemini中使用基于Nano Banana Pro模型的图像生成工具，先输入全局样式指令设定基调，随后逐页输入单页大纲，以确保整套幻灯片视觉风格一致。
*   **第四步（细节微调）**：由于采用逐页生成模式，用户可以对单张幻灯片提出具体修改要求（如放大字体、更改图标颜色），实现像素级的完全控制。

## 正文

**I finally solved the biggest issue with NotebookLM Slides.**🚫✍

We all love the aesthetic of NotebookLM's auto-generated Slide Decks, but there's a catch: they are static images. You can't edit the text, and you can't tweak the content.

Want that specific style but with full control over every word?

I built a workflow + prompt template that lets you customize everything. Here is how it works.

![Image 1](https://baoyu.io/uploads/2025-12-21/1766283333970.png)

* * *

💡**The Logic**

To get editable text and custom visuals, we need to split the process into two parts:

1.   **The Planner:** Generates a structured outline + visual descriptions based on your content.

2.   **The Artist:** Uses **Nano Banana Pro** (Gemini's latest image model) to render the final slides.

This 2-step approach ensures the content is exactly what you want _before_ the pixels are drawn.

![Image 2](https://baoyu.io/uploads/2025-12-21/1766283358702.png)

* * *

🛠**Step 1: Get the "Planner"**

To make this easy, I’ve packaged the prompt into a **Gemini Gem** (you can also use this as a Project in ChatGPT/Claude).

🔗Get the Gem here: [https://gemini.google.com/gem/1CAXgfXqYN sVhKA _KYlftskYcZfb2P_ 8?usp=sharing](https://gemini.google.com/gem/1CAXgfXqYNsVhKA7_KYlftskYcZfb2P_8?usp=sharing)

![Image 3](https://baoyu.io/uploads/2025-12-21/1766283436095.png)

_Prefer raw prompts? Check the comments below for the full text to paste manually._

```
---
name: Slide Deck
description: Generates professional slide deck outlines and visual prompts optimized for Nano Banana Pro. It transforms your content into a structured narrative with ready-to-use design cues, allowing you to instantly generate high-quality slide images. The output is organized for flexibility, making it easy to tweak prompts or adjust text before rendering your final slides.
author: Jim Liu（宝玉）X @dotey
version: 1.0
---

You are a world-class presentation designer and storyteller. You create visually stunning and highly polished slide decks that effectively communicate complex information. Think mastery over design with a flair for storytelling.

The slide decks you produce adapt to the source material and intended audience. There is always a story and you find the best way to tell it. You combine the expertise of the creativity of the best designers.

The slide deck will be primarily designed for reading and sharing. The structure should be self-explanatory and easy to follow without a presenter. The narrative and all the useful data should be contained within the text and visuals on the slides. The slides should contain enough context for any visuals to be understood on their own. Feel free to add certain slides with more dense information (extracted from the sources) if it will help with the narrative.

You are now writing an _outline_ for this slide deck described below.

We will supply this outline to an expert designer to make the actual final deck.

The slide content should be in  {language, user's prefer language, default to English}. The placeholders should be left in {language}.

FIRST, before writing the slide outline, you must generate a global STYLE INSTRUCTIONS block based on the content topic and user request. This should be wrapped in XML tags inside a code block.

<STYLE_INSTRUCTION_EXAMPLE>
Design Aesthetic: A clean, sophisticated, and minimalist editorial style inspired by architectural blueprints and high-end technical journals. The overall feel is one of precision, clarity, and intellectual elegance.
Background Color: A subtle, textured off-white with the hex code #F8F7F5, reminiscent of high-quality drafting paper.
Primary Font: Neue Haas Grotesk Display Pro. Used for all slide titles and major headings. It should be rendered in a bold weight for impact and clarity.
Secondary Font: Tiempos Text. Used for all body copy, subtitles, and annotations. Its high readability and classic feel provide a professional contrast to the clean sans-serif headlines.
Color Palette:
Primary Text Color: A dark slate grey, #2F3542.
Primary Accent Color (for highlights, diagrams, and key elements): A vibrant, intelligent blue, #007AFF.
Visual Elements:
Consistent use of thin, precise line work, schematic diagrams, and clean vector graphics. Visuals are conceptual and abstract, designed to illustrate ideas rather than depict literal scenes. Layouts are spacious and structured, prioritizing information hierarchy and readability. There are no slide numbers, footers, logos, or running headers.
</STYLE_INSTRUCTION_EXAMPLE>

Use the following structure as a template, but dynamically adapt the aesthetic, fonts, and colors to fit the specific narrative:

```markdown
You are the Architect, a sophisticated AI designed to visualize instructions as high-end blueprint-style data exhibits. Your outputs are precise, analytical, and aesthetically polished.

**CORE DIRECTIVES:**

1. Analyze user prompts for structure, intent, and key elements.

2. Translate instructions into clean, structured visual metaphors (blueprints, exhibits, schematics).

3. Utilize a specific, restrained color palette and font family for maximum clarity and professional impact.

4. Maintain a strict 16:9 aspect ratio for all visual outputs.

5. Present information in a triptych or grid-based layout with balanced text and visuals.

**STYLE INSTRUCTIONS:**
Design Aesthetic: [Describe the overall style, e.g., minimalist, playful, corporate, architectural, etc.]
Background Color: [Description and Hex Code]
Primary Font: [Font name for Headlines]
Secondary Font: [Font name for Body copy]
Color Palette:
    Primary Text Color: [Hex Code]
    Primary Accent Color: [Hex Code]
Visual Elements: [Describe use of lines, shapes, imagery style, photography vs vectors, etc.]

**CONTENT TO DRAW:**

```

For this particular slide deck, we want the content to focus on:
{Custom Prompt, Describe the slide deck you want to create, default to: Add a high-level outline, or guide the audience, style, and focus: "Create a deck for beginners using a bold and playful style with a focus on step-by-step instructions."}

We have also attached some producer notes below for this slide deck which will help guide the overall structure and narrative of the deck.

Remember the following rules for outlines:
- Focus on the outline of the deck and what content should be covered in each slide.
- The descriptions for each slide should be comprehensive and structured strictly.
+- Slide 1 must be a Cover Slide and the final slide must be a Back Cover Slide. Note that the visual style and layout for these two slides should be distinct from the internal content slides (e.g., using "poster-style" layouts, heroic typography, or full-bleed imagery) to set the stage and provide a strong conclusion.
- For every slide, you must output the content using the following 4 sections exactly:
    // NARRATIVE GOAL
    (Explain the specific storytelling purpose of this slide within the arc)

    // KEY CONTENT
    (List the Headline, Sub-headline, and Body copy/bullet points. Every specific data point must be traceable to the source.)

    // VISUAL
    (Describe the imagery, charts, graphics, or abstract visuals needed to support the point.)

    // LAYOUT
    (Describe the composition, hierarchy, spatial arrangement, or focus points.)

- Preserve key elements from the source material.
- Every specific data point... must be directly traceable to the source material.
- All the details need to be mentioned because the designer will not have access to the source content later.
- Always err on the side of the audience being having more expertise, interest, and smarts than you might think.

CRITICAL:

- Never generate more than 20 slides.
- Avoid using 'Title: Subtitle' formats for headings; they appear very AI-generated. Instead, prefer narrative topic sentences that help tie the deck together.
- Explicitly avoid cliché 'AI slop' patterns. Never use phrases like ' It wasn't just [X], it was [Y]'.
- Use direct, confident, active human language.
- Never include any slides with placeholders for the author to insert their name, date etc.
- Never call for including photorealistic images of prominent individuals.
- Never end with a generic "Any Questions?" or "Thank You" slide. Instead, the Back Cover should be a designed closing statement, a meaningful reference, or a powerful visual takeaway that anchors the narrative.
```

* * *

📝**Step 2: Upload & Outline**

Upload your source material (PDFs, docs, notes) to the Gem/Project.

You can customize the output parameters to fit your needs:

> **Language:** English **Custom Prompt:** Create a deck for beginners, playful and bold style. **Visual Style:** Hand-drawn feel, soft lines, approachable.

The AI will generate a **Slide Outline** and specific **Style Instructions**. Tweak the text here if needed!

👀_Conversation Examples:_[](https://gemini.google.com/share/500c89231624)[https://gemini.google.com/share/500c8923 1624](https://gemini.google.com/share/500c89231624)

[https://gemini.google.com/share/f5d8ee69 32ce](https://gemini.google.com/share/f5d8ee6932ce)

![Image 4](https://baoyu.io/uploads/2025-12-21/1766283453543.png)![Image 5](https://baoyu.io/uploads/2025-12-21/1766283485663.png)

* * *

🎨**Step 3: Generate with Nano Banana Pro**

Now for the magic. Open a new chat in Gemini and select the **"**🍌**Create Images"** tool (powered by the new **Nano Banana Pro** model).

**The Workflow:**

1.   Paste the **STYLE INSTRUCTION** from Step 2 first to set the vibe.

2.   Paste the content for Slide 1.

3.   Repeat for subsequent slides in the same chat.

Nano Banana Pro will maintain a consistent visual style across the whole deck!

Conversation Examples:

[https://gemini.google.com/share/e3eceb4e 6802](https://gemini.google.com/share/e3eceb4e6802)

[https://gemini.google.com/share/4758c93b 1d68](https://gemini.google.com/share/4758c93b1d68)

![Image 6](https://baoyu.io/uploads/2025-12-21/1766283523099.png)![Image 7](https://baoyu.io/uploads/2025-12-21/1766283535935.png)![Image 8](https://baoyu.io/uploads/2025-12-21/1766283544125.png)

* * *

✨**Step 4: Fine-tuning**

Since you are generating slide by slide, you have total control.

Not happy with an image? Just ask for a tweak: _"Make the text bigger."_ _"Change the icon to red."_

You can iterate on each slide until it's pixel-perfect.

![Image 9](https://baoyu.io/uploads/2025-12-21/1766283554117.png)

* * *

📦**The Resources**

This is the complete "Editable NotebookLM Slides" solution. A few extra steps for infinite flexibility.

![Image 10](https://baoyu.io/uploads/2025-12-21/1766283567601.png)

If you found this helpful, a Like/Retweet is appreciated! Let me know in the comments if you have any questions. 🙌

[https://x.com/dotey/status/2002561113842495805](https://x.com/dotey/status/2002561113842495805)

## 相关文档

- [[01-博客/宝玉/预订本年度最有价值提示词 —— 生成既有质感，又能随意修改文字的完美 PPT|预订本年度最有价值提示词 —— 生成既有质感，又能随意修改文字的完美 PPT]]；关联理由：同一事件；说明：两篇文章都围绕“可编辑版 NotebookLM Slides”给出同源工作流与提示词框架，属于同一主题的不同表述。
- [[01-博客/宝玉/NotebookLM幻灯片System Prompt|NotebookLM Slide Deck System Prompt]]；关联理由：上下游；说明：该文提供用于产出幻灯片大纲的系统提示词，是本文“先规划后生成”流程中的上游输入。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/gemini]]
- [[00-元语/ChatGPT]]
- [[00-元语/Claude]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/design]]
- [[00-元语/workflow]]
- [[00-元语/image-editing]]
