# assets prompt frrom interface description 

```
Okay, this is a meta-level prompting challenge! You want a prompt that helps you (or an AI assistant) generate the CSV structure we discussed, which itself contains prompts and layout information for UI elements.

Here's a prompt designed to guide the generation of such a CSV, including placeholder dimensions and aspect ratio considerations:

---

**Prompt to Generate the UI Element CSV Structure:**

```
You are a UI/UX design assistant helping to break down a game interface into modular, AI-generatable graphical assets. Your task is to create a CSV-formatted table that details individual UI elements for a "Level Info Popup" in a mobile game called "《救救熊猫》" (Save the Panda).

The overall style of all graphical elements must be "Chinese Ink Wash Painting (Shui Mo Hua)" and all generated image assets should have a **transparent background (PNG)**, unless it's a base background element. Critically, **none of the AI image prompts within the CSV should instruct the AI to generate legible text, words, letters, or numbers.** Instead, they should describe purely visual, abstract, or symbolic representations for areas where text or numbers would normally appear.

The "Level Info Popup" itself will be layered on a game map. The popup needs to display:
1.  A main background texture for the popup.
2.  An artistic, abstract calligraphic area for a title.
3.  A small, emotive visual of an unwell panda.
4.  An information panel next to the panda, containing:
    a.  A symbolic icon for discomfort, alongside a graphical placeholder for a short text status.
    b.  A thematic icon for story context, alongside a graphical placeholder for a longer story summary.
5.  A list area for objective items (e.g., herbs to collect). Each list item needs:
    a.  An icon for the herb/item.
    b.  A graphical placeholder for the item's name.
    c.  A graphical representation of quantity (e.g., dots for "x2", "x3").
6.  Two main action buttons at the bottom (primary and secondary).
7.  (Optional, but good to include placeholders) Areas/icons for:
    a.  Five element energy bars (visual only, no numbers).
    b.  Constraint indicators (e.g., moves left, time limit - icon + abstract number shape).
    c.  Difficulty selection icons (e.g., normal icon, hard icon).

**For each UI element, please generate a row in the CSV with the following columns:**

*   **`Element_ID`**: A unique, descriptive ID (e.g., `popup_bg`, `title_gfx`, `panda_sad_img`, `herb_icon_ginseng`, `button_start_gfx`).
*   **`Description_Human`**: A brief human-readable description of the element's purpose.
*   **`Layer_Order_zIndex`**: An integer indicating layering order (0 for base, higher numbers on top).
*   **`Position_X_Instruction`**: A textual instruction for X positioning relative to the popup or a parent element (e.g., "Center", "Left", "Right of [Element_ID]", "Top-Left Corner").
*   **`Position_Y_Instruction`**: A textual instruction for Y positioning (e.g., "Top", "Center", "Below [Element_ID]", "Bottom-Right Corner").
*   **`Approx_Width_Instruction`**: An approximate width, expressed as a percentage of the parent popup or a descriptive term (e.g., "60% of popup", "Small", "Wide enough for 3 icons").
*   **`Approx_Height_Instruction`**: An approximate height, similar to width.
*   **`Target_Aspect_Ratio_Suggestion`**: Suggest a target aspect ratio for this specific element's generated image if relevant (e.g., "1:1" for an icon, "4:3" for a character portrait, "16:9" for a banner, "N/A" if flexible). This is for the *asset itself*, not its final scaled size in the UI.
*   **`Transparency_Required`**: "Yes" (for PNG with alpha) or "No" (for opaque base like popup_bg).
*   **`AI_Image_Prompt_Element_Specific`**: A detailed prompt for an AI image generator to create *this specific graphical element*. **This prompt MUST focus on visual description, use "Shui Mo Hua style," specify "transparent background, PNG" if `Transparency_Required` is "Yes," and STRICTLY AVOID instructing the AI to generate any legible text, letters, words, or numbers.** It should describe abstract shapes or purely visual representations for text/number areas.
*   **`Styling_Notes_Human`**: Any additional notes for the artist/designer or AI prompter (e.g., "Monochrome with subtle gold accents," "Ensure clear emotional distress," "Placeholder should suggest 2 lines of text").

**Please generate at least 10-15 distinct element rows for a comprehensive popup design, including a `popup_background` element. For list items like herbs, show an example for one or two distinct herbs, and indicate that the pattern should be repeated for other herbs.**

**Example of a single element's AI prompt within the CSV (for `title_area_gfx`):**
`"Artistic, abstract calligraphic ink brush strokes, forming elegant, flowing shapes reminiscent of traditional title calligraphy. Strictly no legible characters or letters. Transparent background. Shui Mo Hua style. PNG."`

**Output the result in CSV format.**
```

---

**How this prompt works and guides the CSV generation:**

1.  **Sets the Context:** Clearly states the game, the UI component (Level Info Popup), and the overall visual style (Shui Mo Hua).
2.  **Core Constraint (No Text):** Repeatedly emphasizes that the AI prompts *within the CSV* must not ask for legible text. This is the most crucial instruction.
3.  **Lists Required UI Components:** Breaks down the popup into logical parts, giving a checklist of what needs to be designed.
4.  **Defines CSV Columns:** Specifies the exact structure and purpose of each column in the output CSV.
    *   **`Target_Aspect_Ratio_Suggestion`:** This new column directly addresses your request for including aspect ratio information for the generated *assets*. It's a suggestion because the final display size will be determined by layout.
5.  **Provides an Example:** Shows exactly how one of the `AI_Image_Prompt_Element_Specific` fields should be formatted.
6.  **Minimum Output Expectation:** Asks for a reasonable number of elements to demonstrate the structure.
7.  **Specifies Output Format:** Explicitly requests CSV.

**When you use this prompt with an AI assistant (like me right now, or a more advanced one like GPT-4 if you have access), it should understand the task and generate a CSV that looks something like this (abbreviated example):**

```csv
Element_ID,Description_Human,Layer_Order_zIndex,Position_X_Instruction,Position_Y_Instruction,Approx_Width_Instruction,Approx_Height_Instruction,Target_Aspect_Ratio_Suggestion,Transparency_Required,AI_Image_Prompt_Element_Specific,Styling_Notes_Human
popup_bg,Popup window base layer,0,Center of Screen,Center of Screen,80% of screen width,70% of screen height,16:9,No,"A traditional Chinese scroll or aged Xuan paper textured rectangle for a UI popup window, with delicate, ornate ink brush borders. Clean, empty central area. Shui Mo Hua style. No text.",This is the main container for other elements.
title_gfx,Abstract calligraphic title graphic,1,Center,Top edge of popup_bg (with padding),70% of popup_bg,10% of popup_bg,N/A,Yes,"Artistic, abstract calligraphic ink brush strokes, forming elegant, flowing shapes reminiscent of traditional title calligraphy. Strictly no legible characters or letters. Transparent background. Shui Mo Hua style. PNG.",Should feel like an important heading.
panda_sad_img,Unwell panda character visual,1,Left side of popup_bg (padding),Below title_gfx (padding),25% of popup_bg,25% of popup_bg,1:1,Yes,"A small, emotive ink wash illustration of a cute panda character, hunched over with sad eyes, perhaps a subtle shiver effect. Transparent background. Shui Mo Hua style. PNG.",Focus on clear expression of sadness/illness.
icon_discomfort_gfx,Symbol for panda's discomfort,2,Right of panda_sad_img,Align top with panda_sad_img,5% of popup_bg,5% of popup_bg,1:1,Yes,"A small, clear symbolic icon representing discomfort (e.g., a stylized wilted bamboo leaf, a thermometer pictogram with a low mercury line). Ink wash style, monochrome. Transparent background. PNG.",Simple and instantly recognizable.
placeholder_short_text_gfx,Graphical placeholder for short status text,2,Right of icon_discomfort_gfx,Align center with icon_discomfort_gfx,30% of popup_bg,5% of popup_bg,N/A,Yes,"A compact arrangement of two to three short, soft, horizontal ink lines, visually suggesting a space for a brief status update. Purely graphical, no text. Transparent background. Shui Mo Hua style. PNG.",Mimic the visual weight of a single line of text.
... (and so on for all other elements as per the prompt instructions) ...
herb_icon_ginseng,Icon for Ginseng herb,3,Inside objective list area - Row 1 Left,Top of objective list area,8% of popup_bg,8% of popup_bg,1:1,Yes,"A small, detailed ink wash icon of a ginseng root, clearly identifiable. Transparent background. Shui Mo Hua style. PNG.",Unique icon for each herb.
herb_name_placeholder_ginseng,Placeholder for Ginseng name,3,Right of herb_icon_ginseng,Align center with herb_icon_ginseng,20% of popup_bg,5% of popup_bg,N/A,Yes,"A clean rectangular placeholder shape with a soft ink outline, to denote where the herb name would be. No text. Transparent background. Shui Mo Hua style. PNG.",Consistent style for all name placeholders.
herb_quantity_gfx_ginseng_x2,Graphical quantity for Ginseng (x2),3,Right of herb_name_placeholder_ginseng,Align center with herb_icon_ginseng,5% of popup_bg,5% of popup_bg,N/A,Yes,"Two small, solid ink dots arranged horizontally, visually representing a quantity of '2'. Purely graphical, no numbers. Transparent background. Shui Mo Hua style. PNG.",Visual representation of quantity.
```

This comprehensive prompt should give you a solid starting point for generating the structured CSV you need for your modular UI asset creation process. Remember to adjust details like percentages and specific icon descriptions as needed for your exact design.
```



# assets prompt from image/screenshot

```
好的，如果你的输入是**界面图片**，而不是文字描述，那么我们需要对“生成UI元素CSV的提示词”进行**重大改造**。AI将从分析图片转为分析你对图片的“解读”和“拆分指令”。

这时，AI的角色更像是**“看图说话并按规则填表”**的助手。你需要引导它识别图片中的各个区域和元素，并为每个识别出的元素生成符合我们CSV结构的信息，特别是符合“无文字图形”要求的AI图像生成提示词。

**改造后的提示词策略：基于图片输入的UI元素CSV生成**

这个提示词会引导AI（或你自己在与AI交互时遵循这个逻辑）来处理图片。

```
You are an expert UI/UX Deconstructor and AI Asset Generation Assistant. Your task is to analyze a provided **game interface image** and break it down into modular, AI-generatable graphical assets. You will then populate a CSV-formatted table with details for each identified UI element.

The overall style of all graphical elements in the source image is assumed to be "Chinese Ink Wash Painting (Shui Mo Hua)". All newly generated AI image assets for these elements should also adhere to this style and have a **transparent background (PNG)**, unless it's a clear base background element from the image.

**Crucially, for each identified element from the source image, the corresponding AI image prompt you generate for the CSV MUST NOT instruct the AI to replicate any legible text, words, letters, or numbers visible on that element in the source image.** Instead, the prompt should describe how to generate a purely visual, abstract, or symbolic representation of that element's *form and style*, suitable for a text-free graphical asset. Areas that clearly contain text in the source image should be prompted as graphical placeholders (e.g., "ink lines suggesting text," "an empty outlined box where a title would go").

**Your Process for Analyzing the Provided Image and Generating the CSV:**

1.  **Identify Distinct UI Elements:** Visually segment the provided game interface image into its core functional and visual components (e.g., popup background, title area, character display, buttons, icons, list items, placeholders for text).
2.  **For each identified element, determine the information for the following CSV columns:**

    *   **`Element_ID`**: Assign a unique, descriptive ID (e.g., `popup_bg_from_image`, `title_graphic_style1`, `panda_pose_sad_from_image`, `herb_icon_ginseng_visual`, `start_button_shape`).
    *   **`Description_Human`**: Briefly describe the element's purpose based on its appearance and context in the image.
    *   **`Layer_Order_zIndex`**: Estimate its layering order (0 for base, higher on top) based on visual cues.
    *   **`Position_X_Instruction_From_Image`**: Describe its X position generally based on the image (e.g., "Center", "Left third", "Slightly right of center", "Aligned with left edge of [Parent_Element_ID_from_image]").
    *   **`Position_Y_Instruction_From_Image`**: Describe its Y position (e.g., "Top", "Bottom edge", "Below [Parent_Element_ID_from_image]").
    *   **`Approx_Width_Estimate_From_Image`**: Estimate its width relative to the overall image or a clear parent element (e.g., "Approx. 60% of image width", "Same width as title_graphic_style1", "Small icon size").
    *   **`Approx_Height_Estimate_From_Image`**: Estimate its height similarly.
    *   **`Observed_Aspect_Ratio_From_Image`**: Visually estimate the aspect ratio of this element in the source image (e.g., "Appears 1:1", "Wider than tall, approx. 3:1", "Portrait, approx. 2:3").
    *   **`Transparency_Required_Based_On_Image`**: "Yes" if the element appears to be layered without a solid background of its own, or if it needs to be placed on various backgrounds. "No" if it's a solid base element itself.
    *   **`AI_Image_Prompt_Element_Specific_Visual_Replication`**: This is the most critical part. Based on the visual appearance of the element *in the source image*, formulate a detailed prompt for an AI image generator to create a *new graphical asset in the same style but explicitly without any text or numbers*.
        *   Describe its shape, color, texture, ink wash style, and any purely graphical details.
        *   If the element in the source image *contains text*, the prompt should describe how to generate a *visual placeholder* for that text area (e.g., "a rectangular area with a soft ink wash fill, suitable for overlaying text programmatically," or "elegant, abstract calligraphic flourishes where a title would be, but no legible characters").
        *   **Always include "Transparent background. PNG." if transparency is required.**
        *   **Always include "Shui Mo Hua style."**
        *   **Always include "Strictly no legible text, words, letters, or numbers."**
    *   **`Styling_Notes_From_Image_Observation`**: Note any specific styling cues observed from the image for this element (e.g., "Uses a thick ink outline," "Subtle gold highlights visible," "Appears slightly aged").

**Instructions for You (the AI Assistant processing this):**

You will be provided with a game interface image (or a link to one, or I will describe it to you as if you are seeing it).
Your goal is to act as if you are meticulously "tracing" or "deconstructing" that image into its components and then generating the CSV data to re-create those components as text-free graphical assets.

**Please output the result in CSV format. For lists (like herbs), demonstrate with 1-2 examples and note that the pattern repeats.**

---
**INPUT IMAGE CONTEXT:**
*(Here, you would either:
    a) If the AI can process images directly: "Analyze the following uploaded game interface image: [upload image]"
    b) If the AI cannot process images directly, you act as the "eyes" and describe the image to it, then ask it to generate the CSV based on YOUR description of the image. For example: "I am looking at an image of a game popup. At the top, there's a banner-like shape with what looks like artistic but unreadable calligraphy..." and so on, describing each element you see.)*
---

**Example of an `AI_Image_Prompt_Element_Specific_Visual_Replication` if the source image had a button with "开始" text:**

Instead of trying to replicate "开始", the prompt would be:
`"A Shui Mo Hua style button element, visually matching the shape and ink wash texture of the 'start' button seen in the reference image. The button surface should be clean and ready for programmatic text overlay, or feature a simple abstract ink swirl. Strictly no legible text, words, or letters. Transparent background. PNG."`

**This prompt now guides the AI to:**

1.  **Expect an image as input (or your detailed description of it).**
2.  **Focus on visual segmentation** of that image.
3.  **Translate visual observations** into the structured CSV format.
4.  **Crucially, for the AI image prompts within the CSV, it must describe how to *recreate the style and form* of the elements from the source image *without replicating any text seen on them*.**

**How to Use This with an AI:**

*   **If AI supports direct image upload (like GPT-4 Vision):**
    1.  Paste the entire prompt above.
    2.  Then, where it says `INPUT IMAGE CONTEXT:`, upload your interface image.
    3.  Ask it to generate the CSV.

*   **If AI does NOT support direct image upload (like standard ChatGPT):**
    1.  Paste the entire prompt above.
    2.  You then act as the "image analyzer." Look at your image carefully.
    3.  Where it says `INPUT IMAGE CONTEXT:`, you start describing the image to the AI, element by element. For example:
        *   "Okay, for the input image, I see a main popup area that looks like an old scroll. Let's call its Element_ID `popup_scroll_bg`..."
        *   "On this `popup_scroll_bg`, at the top, there's a decorative banner. It has some brush strokes that look like a title but I can't read any words. Element_ID `title_banner_graphic`..."
        *   "To the left, there's a small drawing of a sad panda. Element_ID `panda_sad_visual`..."
    4.  The AI, using the main prompt as its instruction set, will then try to fill out the CSV rows based on your descriptions of what you're seeing in *your* image.

This "image-input" version of the prompt shifts the burden of initial description but maintains the core goal of generating a CSV Unfall of text-free graphical asset prompts and layout information. It's a more interactive process if the AI can't see the image directly.
```



# how to describe interface


```
好的，我们来将这个“从PRD生成UI元素CSV的界面描述”的提示词进行泛化，移除特定游戏名称《救救熊猫》和固定的“水墨画风”，使其更具通用性，可以适应不同游戏项目和美术风格。

---

**通用提示词：从产品需求文档生成视觉界面描述 (用于AI资产生成预处理)**

```
You are an expert Product Analyst and Technical Writer specializing in game UI/UX. Your task is to process sections of a Product Requirements Document (PRD) for a [SPECIFY GAME GENRE, e.g., "mobile puzzle game," "desktop RPG," "casual simulation game"] and transform them into a detailed **visual interface description**. This description will later be used as input for another AI to break down the interface into modular, AI-generatable graphical assets (where text is handled programmatically, not in the AI-generated images).

**The overall visual style of the game is [SPECIFY OVERALL ART STYLE, e.g., "pixel art," "cartoonish," "photorealistic," "flat design," "sci-fi minimalist"]. All visual elements described should adhere to this specified style.**

**Your Goal:**
For a given UI screen/interface described in the PRD, generate a textual description that:
1.  Clearly identifies the **purpose and overall visual theme/style** of the interface (e.g., "Main Menu - A vibrant, futuristic hub with holographic elements...").
2.  Breaks down the interface into its **major visual components and layout zones** (e.g., Top Navigation Bar, Central Character Display Area, Bottom Action Panel).
3.  For each component, describes its **visual appearance, style (consistent with the overall art style), and approximate placement/relationship** to other components.
4.  **Crucially, when describing areas that will contain text or numerical data in the final game, your description should focus on the *visual placeholder or stylistic treatment* of that area, rather than the text content itself.**
    *   **Example (Instead of):** "A button says 'Start Mission'."
    *   **Example (Correct):** "A prominent button element, styled with [description of style, e.g., 'a glowing neon border and a metallic texture'], intended for the primary call to action. The area for textual information is clearly defined and visually distinct."
    *   **Example (Instead of):** "Displays the player's health: 85/100."
    *   **Example (Correct):** "A designated graphical bar element for health indication, potentially using a segmented fill or color gradient, with a clear area کنار آن for numerical data display (rendered programmatically)."
5.  Mentions any **key interactive elements** and their visual cues for interactivity (e.g., "buttons have a clear 'pressable' appearance with bevels and hover states described in the PRD").
6.  Describes any **dynamic visual elements, animations, or special effects** mentioned in the PRD for this interface.
7.  The output description should be detailed enough so that another AI (or a human) can later use it to generate a CSV of individual graphical assets and their AI image prompts (where those AI image prompts will explicitly *avoid* generating text).

**Process:**

1.  You will be provided with relevant excerpts from the PRD describing a specific game interface.
2.  Analyze these excerpts to understand the interface's function, layout, key elements, and any specified visual styling (ensuring it aligns with the overall art style provided above).
3.  Synthesize this information into a coherent, detailed visual description following the goals outlined.
4.  Structure your output clearly, perhaps using headings for different sections of the interface if applicable.

---
**INPUT PRD EXCERPT(S) BELOW (for a [SPECIFY GAME GENRE] with a [SPECIFY OVERALL ART STYLE] art style):**
---

[在这里粘贴从你的PRD中复制的相关界面描述部分。请确保这部分PRD内容与上面指定的 [GAME GENRE] 和 [OVERALL ART STYLE] 相符。]

---
**END OF PRD EXCERPT(S).**
---

Please generate the detailed visual interface description based on the PRD excerpt(s) provided above, adhering to all the specified guidelines, particularly the focus on visual placeholders for text/data areas, and ensuring consistency with the defined [GAME GENRE] and [OVERALL ART STYLE].
```

**如何使用这个泛化后的提示词：**

1.  **填写占位符：**
    *   `[SPECIFY GAME GENRE, e.g., "mobile puzzle game," "desktop RPG," "casual simulation game"]`: 替换为你当前项目的游戏类型。
    *   `[SPECIFY OVERALL ART STYLE, e.g., "pixel art," "cartoonish," "photorealistic," "flat design," "sci-fi minimalist"]`: 替换为你当前项目的主要美术风格。
    *   在 `INPUT PRD EXCERPT(S) BELOW` 部分的提示中，也相应地填写这两个占位符，以提醒AI（或你自己）提供的PRD摘录应该与这些设定相符。

2.  **复制PRD内容：** 从你对应项目的PRD中，找到描述目标界面的章节，复制相关文字。

3.  **准备输入：**
    *   将上面泛化并填写好占位符的完整提示词粘贴到新的对话框。
    *   在提示词中标记的 `[在这里粘贴从你的PRD中复制的相关界面描述部分。...]` 位置，粘贴你从PRD复制的内容。

4.  **提交给AI：** 将组合好的全部内容提交给AI。

**泛化后的优势：**

*   **通用性：** 不再局限于《救救熊猫》或水墨画风，可以适用于各种不同类型和风格的游戏项目。
*   **灵活性：** 通过简单的占位符替换，即可快速适配新项目。
*   **一致性：** 保持了核心的指令——从PRD生成侧重视觉元素和“无文字占位符”的界面描述，为下一步AI素材生成做准备。

**使用时的注意事项：**

*   **PRD摘录的质量：** AI的输出质量高度依赖于你提供的PRD摘录的清晰度和详细程度。如果PRD本身对视觉描述很模糊，AI也难以生成好的视觉界面描述。
*   **美术风格的准确描述：** `[SPECIFY OVERALL ART STYLE]` 这个占位符需要你尽可能准确地描述美术风格，因为AI生成的界面描述会基于这个风格来想象视觉元素。例如，同样是按钮，在“像素风”和“写实风”下的描述就会完全不同。
*   **迭代优化：** 仍然可能需要对AI的输出进行人工审查和微调，以确保描述的准确性和完整性，使其能最好地服务于后续的AI图像生成环节。

这个泛化后的提示词为你提供了一个更通用的工具，可以系统地将不同项目的PRD内容转化为适合AI进行下一步视觉资产拆解和提示词生成的中间描述。

```
