0. how to  get prd from raw idea /1 sentence
```
通用提示词：从一句话需求挖掘并生成视觉界面描述PRD初稿
You are an expert Game Designer and Product Analyst, skilled at transforming nascent ideas into structured product descriptions. Your task is to take a **brief, single-sentence user requirement** for a game interface and expand it into a preliminary **Visual Interface Description section for a Product Requirements Document (PRD)**.

The goal is to generate a description that, while based on minimal input, is rich enough in visual and functional detail to later inform the creation of UI assets (where text is handled programmatically, not in AI-generated images).

**For the output PRD section, please adhere to the following structure and guidelines:**

**1. Interface Identification:**
    *   **1.1. Interface Name:** [Suggest a clear, functional name for this interface based on the user's sentence, e.g., "Main Menu Screen," "Character Profile Popup," "In-Game HUD"]
    *   **1.2. Core Purpose (Inferred):** [Based on the user's sentence and common game design patterns, infer and state the primary objective of this interface for the player.]

**2. Overall Visual Style & Atmosphere (Placeholder - To be refined by dedicated Art Style Prompt):**
    *   **2.1. Art Style Family (General):** [Suggest a broad art style family that might suit the described interface, e.g., "Cartoonish 2D," "Sci-Fi Minimalist," "Fantasy Hand-Painted," "Pixel Art Retro." Acknowledge this is a placeholder for later detailed art direction.]
    *   **2.2. Desired Atmosphere/Feeling:** [Infer the intended emotional impact or feeling this interface should evoke, e.g., "Welcoming and exciting," "Informative and efficient," "Mysterious and intriguing," "Urgent and action-oriented."]

**3. Key Visual Components & Layout (Core of the description):**
    *   Based on the single-sentence requirement and common conventions for such an interface, **autonomously research, brainstorm, and detail the likely visual components and their layout.**
    *   For each component, describe:
        *   **a. Component Name/Type:** (e.g., "Primary Action Button," "Player Avatar Display," "Navigation Bar," "Resource Counters," "Background Scenery Element").
        *   **b. Visual Description (Placeholder for Art):** Describe its likely shape, form, and any implied textures or visual characteristics *without specifying exact colors or demanding text rendering*. Focus on how it *looks* as a graphical element. If it's an area where text/data will go, describe it as a visual placeholder for that information.
            *   **Example (Instead of):** "A red button with 'ATTACK' text."
            *   **Example (Correct for this PRD draft):** "A prominent, distinctly shaped button element, visually designated for a primary combat action. The surface area is designed to clearly accommodate an action label (to be rendered programmatically)."
            *   **Example (Instead of):** "Shows player health: 100/100."
            *   **Example (Correct for this PRD draft):** "A graphical bar or circular gauge element, visually representing a vital statistic like health. Adjacent to this graphical indicator, a clear space is reserved for numerical data display (to be rendered programmatically)."
        *   **c. Approximate Position & Relationship:** Describe its general placement (e.g., "Top-center," "Bottom-left corner," "Adjacent to the Player Avatar Display," "Overlays the main background").
        *   **d. Implied Interactivity (if any):** Note if the element is clearly interactive (e.g., "Button appears pressable," "Scrollable list area").

**4. Data Display Areas (Visual Placeholder Focus):**
    *   Identify areas where dynamic data (text, numbers, icons that change) would be displayed.
    *   Describe these as **visual containers or styled regions** ready to receive programmatically rendered content, rather than describing the content itself.
    *   Example: "A series of horizontal slots or softly outlined rectangular areas, designed to hold icons and numerical counts for in-game currency."

**5. Core Interactions (Inferred):**
    *   Based on the interface's purpose, list the primary ways a player would interact with it (e.g., "Tapping buttons," "Dragging elements," "Scrolling content").

**6. Information to be Researched/Refined Later (AI Self-Correction/Guidance):**
    *   Acknowledge that this is a preliminary description based on a brief requirement.
    *   List key areas that would require further detailed design, art direction, and specific content population in a full PRD, such as:
        *   Precise color palette.
        *   Specific icon designs.
        *   Exact textual content and typography.
        *   Detailed animation specifications.
        *   Specific五行 (Five Elements) or other unique game mechanics integration (if not explicitly in the one-sentence input).

**Your Process:**

1.  You will be provided with a **single-sentence user requirement** describing a game interface.
2.  **Analyze** this sentence to understand its core intent.
3.  **Leverage your knowledge** of common game UI/UX patterns and best practices to **autonomously flesh out** the likely components, layout, and visual characteristics of such an interface.
4.  **Strictly adhere to describing visual placeholders for text/data areas.**
5.  Generate the PRD section as structured above.

---
**USER'S SINGLE-SENTENCE INTERFACE REQUIREMENT:**
---

[在这里粘贴用户提供的一句话需求，例如：“我需要一个能让玩家查看他们收集到的所有熊猫伙伴，并能选择一个出战的界面。” 或者 “设计一个在战斗胜利后弹出的界面，告诉玩家获得了多少经验和金币，并有一个按钮返回主城。”]

---
**END OF USER'S REQUIREMENT.**
---

Please generate the preliminary Visual Interface Description PRD section based on the user's requirement provided above. Focus on elaborating the visual structure and components, and ensure all text/data areas are described as visual placeholders.
```
  
2. how to describe interface

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


2. how to get assets prompt from interface description
```
好的，我们来泛化之前那个“从界面图片（或其文字描述）生成UI元素CSV的提示词”，使其不再写死游戏名称和风格，并且能更好地接收上一阶段（从PRD生成的）“视觉界面描述”作为输入。

这个提示词的目标是，给定一份**侧重于视觉元素和无文字占位符的界面描述**，AI能够将其拆解成CSV格式，其中包含每个元素的布局信息和用于AI图像生成的、同样无文字的图形提示词。

---

**通用提示词：从视觉界面描述生成模块化UI资产CSV**

```
You are an expert UI/UX Deconstructor and AI Asset Generation Assistant. Your task is to process a detailed **visual interface description** for a game interface (style and genre will be specified) and break it down into modular, AI-generatable graphical assets. You will then populate a CSV-formatted table with details for each identified UI element.

The overall visual style of all graphical elements to be generated is **[SPECIFY OVERALL ART STYLE, e.g., "pixel art," "cartoonish," "photorealistic," "flat design," "sci-fi minimalist"]**. All generated image assets should adhere to this style and have a **transparent background (PNG)**, unless it's explicitly described as a solid base background element in the input description.

**Crucially, for each identified element from the input visual interface description, the corresponding AI image prompt you generate for the CSV MUST NOT instruct the AI to generate any legible text, words, letters, or numbers.** The input description itself should already be framed in terms of visual placeholders for text/data. Your AI image prompts should accurately reflect these visual placeholder descriptions (e.g., "ink lines suggesting text," "an empty outlined box where a title would go," "abstract calligraphic flourishes").

**Your Process for Analyzing the Provided Visual Interface Description and Generating the CSV:**

1.  **Identify Distinct UI Elements:** Based on the input description, segment the interface into its core functional and visual components (e.g., main background, title graphic area, character display region, button shapes, icon graphics, list item backgrounds, placeholders for text lines, etc.).
2.  **For each identified element, determine the information for the following CSV columns:**

    *   **`Element_ID`**: Assign a unique, descriptive ID (e.g., `screen_bg`, `header_graphic_styleA`, `avatar_display_area`, `item_icon_potion`, `action_button_primary_shape`).
    *   **`Description_Human`**: Briefly describe the element's purpose based on the input interface description.
    *   **`Layer_Order_zIndex`**: Infer its layering order (0 for base, higher on top) based on how elements are described as being positioned relative to each other (e.g., "overlaying," "below," "on top of").
    *   **`Position_X_Instruction`**: Based on the input description's layout cues (e.g., "Centered horizontally," "Aligned to the left edge of the main panel," "Positioned to the right of [Another_Element_ID]"), provide a general textual instruction for X positioning.
    *   **`Position_Y_Instruction`**: Similar to X, for Y positioning (e.g., "At the top of the screen," "Vertically centered within its parent container," "Located below the header_graphic_styleA").
    *   **`Approx_Width_Instruction`**: Based on the input description (which might use percentages or relative terms like "spanning half the screen," "compact icon size"), provide an approximate width instruction.
    *   **`Approx_Height_Instruction`**: Similar to width.
    *   **`Target_Aspect_Ratio_Suggestion`**: If the input description implies or if it's logical for the element type, suggest a target aspect ratio for the *generated asset itself* (e.g., "1:1" for icons, "16:9" for a banner, "N/A" if highly flexible or determined by content).
    *   **`Transparency_Required`**: "Yes" (for PNG with alpha) if the element is described as overlaying others or needing a transparent background. "No" if it's described as a solid base.
    *   **`AI_Image_Prompt_Element_Specific`**: This is the most critical part. Based on the visual characteristics of the element *as described in the input visual interface description*, formulate a detailed prompt for an AI image generator.
        *   This prompt MUST create a *new graphical asset consistent with the specified [OVERALL ART STYLE]*.
        *   It MUST explicitly describe generating a *visual placeholder* if the area is meant for text/data (e.g., "a series of [style-consistent, e.g., 'glowing holographic'] lines suggesting a text block," or "an empty, ornately framed [style-consistent, e.g., 'Victorian steampunk'] panel where a title would be rendered programmatically").
        *   **Always include "Transparent background. PNG." if `Transparency_Required` is "Yes."**
        *   **Always include "Adhering to [SPECIFY OVERALL ART STYLE] style."**
        *   **Always include "Strictly no legible text, words, letters, or numbers."**
    *   **`Styling_Notes_Human`**: Note any specific styling cues derived from the input description for this element (e.g., "Described with a 'metallic sheen'," "Should have 'soft, rounded corners' as per description," "Implied to be a 'primary call-to-action button'").

**Instructions for You (the AI Assistant processing this):**

You will be provided with a **detailed visual interface description** (which itself was likely generated from a PRD and focuses on visual placeholders instead of literal text).
Your goal is to deconstruct this description into its constituent visual elements and generate the CSV data to guide the AI generation of these elements as text-free graphical assets.

**Please output the result in CSV format. For repeating structures (like list items or multiple similar icons), demonstrate with 1-2 examples and note that the pattern repeats.**

---
**INPUT VISUAL INTERFACE DESCRIPTION (for a game with [SPECIFY OVERALL ART STYLE] art style):**
---

[在这里粘贴由上一个提示词（从PRD生成视觉界面描述）生成的，或者你手动编写的，侧重于视觉元素和无文字占位符的界面描述。]

---
**END OF INPUT VISUAL INTERFACE DESCRIPTION.**
---

Please generate the CSV output for the visual interface description provided above. Ensure all AI image prompts within the CSV strictly adhere to the "no text" rule and accurately reflect the described visual placeholders and the overall [SPECIFY OVERALL ART STYLE].
```

**如何使用这个泛化后的提示词：**

1.  **填写占位符:**
    *   `[SPECIFY OVERALL ART STYLE, e.g., "pixel art," "cartoonish," "photorealistic," "flat design," "sci-fi minimalist"]`: 替换为你当前项目的统一美术风格。这个风格将指导所有生成的AI图像素材。
    *   在 `INPUT VISUAL INTERFACE DESCRIPTION` 部分的提示中，也相应地填写这个美术风格，以提醒AI（或你自己）提供的描述应该与此风格一致。

2.  **准备输入 (关键步骤):**
    *   获取或准备好你的**“视觉界面描述”**。这份描述的质量至关重要。它应该：
        *   已经将所有需要显示文字或数据的地方描述为**视觉占位符**（例如，“一个带有卷轴边框的矩形区域，用于显示标题的抽象书法笔触”，“三个水平的墨线，代表一行简短的状态文字”）。
        *   详细描述了各个视觉组件的布局、相互关系和大致外观。
        *   与你在提示词中指定的 `[SPECIFY OVERALL ART STYLE]` 相符。

3.  **组合输入：**
    *   将上面泛化并填写好美术风格的完整提示词粘贴到新的对话框。
    *   在提示词中标记的 `[在这里粘贴...视觉界面描述]` 位置，粘贴你准备好的那份“视觉界面描述”。

4.  **提交给AI：** 将组合好的全部内容提交给AI。

5.  **审阅和优化输出 (非常重要)：**
    *   **AI图像提示词的质量：** 这是审查的重中之重。
        *   AI是否准确地将输入描述中的“视觉占位符”描述，转换成了能够生成相应“无文字图形”的AI图像提示词？
        *   提示词是否清晰、具体，并且严格遵守了“无文字”、“透明背景”、“指定美术风格”的要求？
        *   例如，如果输入描述是“一个用于标题的区域，以优雅的金色边框和深蓝丝绒质感为背景”，那么AI生成的图像提示词应该是类似：“`An empty rectangular panel with an elegant gold ornate border and a deep blue velvet textured background, suitable for overlaying a title. Strictly no legible text. Transparent background. PNG. Adhering to [Baroque Fantasy] style.`” (假设风格是巴洛克幻想风)
    *   **元素拆分的合理性：** AI是否将输入的界面描述合理地拆分成了独立的、可管理的视觉元素？
    *   **其他CSV字段的准确性：** 位置、尺寸、图层等估算是否大致符合输入描述的意图？

**泛化后的优势：**

*   **两步走的流程更清晰：**
    1.  PRD -> 视觉界面描述 (侧重无文字占位符) - 使用上一个泛化提示词。
    2.  视觉界面描述 -> UI资产CSV (包含无文字AI图像提示词) - 使用本提示词。
*   **职责分离：** 第一个提示词负责将PRD“翻译”成适合AI处理的视觉语言。第二个提示词负责将这种视觉语言进一步拆解为可供AI图像生成器使用的具体指令。
*   **更强的可控性：** 你可以在第一步生成的“视觉界面描述”上进行人工修改和润色，确保其准确无误，然后再将其作为输入给第二个提示词，从而提高最终CSV的质量。
*   **通用性：** 适用于任何美术风格和游戏类型，只要你在提示词中正确指定。

这个泛化后的提示词为你提供了一个更强大的工作流程，可以系统地将任何游戏的界面设计（只要你能先将其转化为合适的“视觉界面描述”）分解为模块化的、AI可生成的图形资产。记住，AI在这里是强大的助手，但最终的质量控制和细节打磨仍需要人工的智慧。
```


3 how  to get assets from screenshot
```
好的，我们来泛化之前那个“从界面图片生成UI元素CSV的提示词”，使其不再绑定具体游戏名称和风格，而是可以根据用户指定的风格来分析任意界面图片，并生成相应的、包含“无文字AI素材提示词”的CSV。

---

**通用提示词：从界面图片生成模块化UI资产CSV**

```
You are an expert UI/UX Deconstructor and AI Asset Generation Assistant. Your task is to analyze a provided **game interface image** and break it down into modular, AI-generatable graphical assets. You will then populate a CSV-formatted table with details for each identified UI element.

The overall visual style of all graphical elements to be *newly generated* for these assets should adhere to **[SPECIFY TARGET ART STYLE, e.g., "pixel art," "cartoonish," "photorealistic," "flat design," "sci-fi minimalist," "impressionistic oil painting"]**. Even if the source image has a different style, the goal is to extract the layout and element *function* and then describe how to *recreate* those elements in the specified [TARGET ART STYLE]. All newly generated image assets should have a **transparent background (PNG)**, unless it's a clear base background element being replicated.

**Crucially, for each identified element from the source image, the corresponding AI image prompt you generate for the CSV MUST NOT instruct the AI to replicate any legible text, words, letters, or numbers visible on that element in the source image.** Instead, the prompt should describe how to generate a purely visual, abstract, or symbolic representation of that element's *form and intended function*, rendered in the specified [TARGET ART STYLE], suitable for a text-free graphical asset. Areas that clearly contain text in the source image should be prompted as graphical placeholders (e.g., "[TARGET ART STYLE] lines suggesting text," "an empty [TARGET ART STYLE] outlined box where a title would go").

**Your Process for Analyzing the Provided Image and Generating the CSV:**

1.  **Identify Distinct UI Elements:** Visually segment the provided game interface image into its core functional and visual components (e.g., popup background, title area, character display, buttons, icons, list items, placeholders for text).
2.  **For each identified element, determine the information for the following CSV columns:**

    *   **`Element_ID`**: Assign a unique, descriptive ID (e.g., `screen_bg_from_image`, `header_area_visual_style1`, `avatar_region_from_image`, `item_icon_potion_visual_ref`, `action_button_primary_form`).
    *   **`Description_Human`**: Briefly describe the element's purpose based on its appearance and context in the source image.
    *   **`Layer_Order_zIndex`**: Estimate its layering order (0 for base, higher on top) based on visual cues from the source image.
    *   **`Position_X_Instruction_From_Image`**: Describe its X position generally based on its location in the source image (e.g., "Centered", "Left third of image", "Visually aligned with [Another_Element_ID_from_image]'s right edge").
    *   **`Position_Y_Instruction_From_Image`**: Describe its Y position similarly.
    *   **`Approx_Width_Estimate_From_Image`**: Estimate its width relative to the overall image or a clear parent element in the source image.
    *   **`Approx_Height_Estimate_From_Image`**: Estimate its height similarly.
    *   **`Observed_Aspect_Ratio_From_Image`**: Visually estimate the aspect ratio of this element as it appears in the source image.
    *   **`Transparency_Required_Based_On_Image`**: "Yes" if the element in the source image appears to be layered without a solid background of its own, or if it needs a transparent background for flexible placement. "No" if it's a solid base element.
    *   **`AI_Image_Prompt_Element_Specific_Visual_Replication_In_Target_Style`**: This is the most critical part. Based on the visual appearance and function of the element *in the source image*, formulate a detailed prompt for an AI image generator to create a *new graphical asset rendered in the specified [TARGET ART STYLE] and explicitly without any text or numbers*.
        *   Describe its shape, form, general color impression (which can be adapted to the [TARGET ART STYLE]), and any purely graphical details observed in the source that should be translated into the new style.
        *   If the element in the source image *contains text*, the prompt should describe how to generate a *visual placeholder for that text area in the [TARGET ART STYLE]* (e.g., "a rectangular area with a [TARGET ART STYLE, e.g., 'glowing sci-fi'] fill, suitable for overlaying text programmatically," or "elegant, abstract [TARGET ART STYLE, e.g., 'Art Deco'] flourishes where a title would be, but no legible characters").
        *   **Always include "Transparent background. PNG." if transparency is required.**
        *   **Always include "Rendered in a [SPECIFY TARGET ART STYLE] style."**
        *   **Always include "Strictly no legible text, words, letters, or numbers."**
    *   **`Styling_Notes_From_Image_Observation_For_Target_Style`**: Note any specific styling cues observed from the source image that should be considered or adapted when recreating the element in the [TARGET ART STYLE] (e.g., "Source element has a strong highlight on top edge, replicate with [TARGET ART STYLE] lighting," "Observed a gradient fill, adapt using [TARGET ART STYLE] color palette").

**Instructions for You (the AI Assistant processing this):**

You will be provided with a game interface image (or a link to one, or I will describe it to you as if you are seeing it).
Your goal is to act as if you are meticulously "tracing" or "deconstructing" that image into its components and then generating the CSV data to guide the AI re-creation of those components as text-free graphical assets in the **specified [TARGET ART STYLE]**.

**Please output the result in CSV format. For lists or repeating similar elements, demonstrate with 1-2 examples and note that the pattern repeats.**

---
**TARGET ART STYLE FOR NEWLY GENERATED ASSETS:** **[SPECIFY TARGET ART STYLE HERE]**
---
**INPUT IMAGE CONTEXT:**
*(Here, you would either:
    a) If the AI can process images directly: "Analyze the following uploaded game interface image: [upload image]"
    b) If the AI cannot process images directly, you act as the "eyes" and describe the image to it, then ask it to generate the CSV based on YOUR description of the image and the target art style you've specified above.)*
---

**Example of an `AI_Image_Prompt_Element_Specific_Visual_Replication_In_Target_Style` if the source image had a *cartoonish* button with "START" text, and the `TARGET ART STYLE` was specified as "Dark Fantasy Sketch":**

The prompt would be:
`"A button element, its shape and general form inspired by the 'start' button in the reference image, but re-imagined and rendered in a Dark Fantasy Sketch style. The button surface should feature gritty textures, sharp edges, and perhaps a subtle, ominous rune-like abstract marking where text would normally be, or a clean, textured surface suitable for programmatic text overlay. Strictly no legible text, words, or letters. Transparent background. PNG. Rendered in a Dark Fantasy Sketch style."`

This generalized prompt instructs the AI to:

1.  **Understand the Target Art Style:** It explicitly takes a `[SPECIFY TARGET ART STYLE]` parameter, which will guide all generated AI image prompts.
2.  **Analyze an Input Image (or its description):** It's designed to deconstruct visual information from a source.
3.  **Focus on Form and Function, then Re-skin:** The key is to identify what an element *does* and what it *looks like structurally* in the source, and then describe how to create a new asset that fulfills the same function and has a similar structure, but rendered in the *new target art style* and always without text.
4.  **Maintain CSV Structure:** The output CSV format remains the same, providing all necessary information for asset management and generation.

**How to Use This Generalized Prompt:**

1.  **Define Target Art Style:** Before using the prompt, decide and clearly state the `[SPECIFY TARGET ART STYLE]` you want the new assets to be in.
2.  **Prepare Input Image/Description:** Have your source interface image ready, or be prepared to describe it in detail to the AI if it can't process images directly.
3.  **Fill in the `TARGET ART STYLE` placeholder** in the main prompt.
4.  **Provide the Image/Description:**
    *   If the AI supports image uploads, upload it.
    *   If not, describe the image to the AI, element by element, keeping in mind that the AI's goal is to help you generate prompts to *recreate* those elements in the new target style.
5.  **Submit and Review:** Submit the prompt and image/description to the AI. Carefully review the generated CSV, especially the `AI_Image_Prompt_Element_Specific_Visual_Replication_In_Target_Style` column, to ensure the prompts correctly guide the AI to generate assets in the desired new style and without text.

This approach is very powerful because it allows you to take an existing UI (even a rough sketch or a UI from a different game) and get a structured plan (the CSV) for recreating its visual components in a completely new artistic style using AI image generation, all while ensuring text is handled separately.
```
# 工作流5 生成原型和落地页

提示词如下：

基于需求，根据下面的prompt模板生成app原型和对应的落地页

**文件组织方式：**

* **项目根目录结构：**
  * `index.html` - 主落地页，作为不同UI风格原型的展示入口
  * `css/` - 存放全局样式文件
  * `js/` - 存放全局JavaScript文件
  * `img/` - 存放全局图片资源
  * `locale/` - 存放多语言翻译文件
  * `apps/` - 存放所有UI风格的原型实现

* **apps目录结构：**
  * `README.md` - 项目说明文档
  * `base/` - 基础风格(由ai根据prd自行设计)版本原型，包含完整功能实现
    * `app/` - 核心应用代码
    * `css/` - 样式文件
    * `js/` - JavaScript文件
    * `i18n/` - 多语言文件
    * `img/` - 图片资源
    * `onboarding-preview/` - Onboarding流程预览
      * `paywall-preview/` - Paywall界面预览
    * 功能页面：`home.html`, `profile.html`, `settings.html`, `tasks.html`, `journal.html`, `journey.html`, `community.html`, `subscription.html`等
  

* **落地页中的原型展示：**
  * 在index.html的"App截图"部分，使用iframe方式嵌入各个风格的原型预览
  * 每个风格独立成section，包含：
    * 风格名称和特点描述
    * iframe嵌入对应风格的index.html
    * 预览窗口保持手机实际尺寸
  * 使用统一的预览容器样式，确保视觉统一

* **多语言支持：**
  * 每个风格目录下的i18n文件夹存放该风格特有的翻译
  * 根目录locale文件夹存放全局共用的翻译
**第一部分：游戏化 App 产品落地页 Prompt 模板 (更新版 - 输出 index.html + 文件夹结构 - 融入游戏化元素)**

这个部分是 **游戏化 App 产品落地页** 的设计 Prompt 模板，目标是生成极致高转化率的响应式游戏化 App 产品落地页，并深度融入通用落地页最佳实践和 SEO 优化策略，**最终输出包含 `index.html` 文件以及 `css/`, `js/`, `img/`, `locale/` 文件夹的项目结构**.  **本模板特别强调融入游戏化元素，以吸引游戏用户并提升转化率.**

**游戏化 App 产品落地页 Prompt 模板 (通用最佳实践融入版 - 颜色方案自主优化版 - 响应式设计优化版 - PRD 不完善友好型 - 自主研究补充版 - 游戏化元素强化版) - **Enhanced Version with Pre-computed Design Practice Summary, Direct Implementation & SEO Optimization & Gamified Elements - **Outputs index.html & Project Folders** **

**目标：**  即使 **提供的 `prd.md` 产品需求文档不完善 (可能信息量较少或存在缺失)，且 PRD 中可能定义了颜色方案**，AI 也将 **主动进行研究并补充必要信息，并在必要时自主优化或替换 PRD 中定义的颜色方案**，设计一个 **极致高转化率** 的 **响应式游戏化 App 产品落地页** 原型，**最大化转化率和用户下载量**、**深度融入通用落地页最佳实践**、採用成功落地页策略，**兼容不同屏幕大小**，并输出可用于开发的 **SEO 友好型 HTML 代码 (`index.html`) 和相关资源文件夹 (`css/`, `js/`, `img/`, `locale/`) 以及设计文档 `landing-page-brief.md`**. **无需生成独立的 PC 和 Mobile 版本，只需一个响应式版本即可.** **This enhanced version is specifically designed based on research indicating that audience understanding, simple engaging design, persuasive copy, trust elements, optimization, **AND EFFECTIVE PRICE PRESENTATION** are key to boosting landing page conversions, and is now DIRECTLY GUIDED by the following pre-computed summary of top performing landing page design practices, **AND OPTIMIZED FOR SEARCH ENGINES (SEO), AND EMPHASIZING GAMIFIED ELEMENTS TO APPEAL TO GAME USERS.** **The final output will be an `index.html` file and associated folders containing CSS, JS, images, and localization resources, along with a detailed design brief document.**

**核心理念：**  **AI 不仅基于 PRD，更将主动进行市场调研、用户分析 (游戏用户画像)、竞品分析 (游戏 App 落地页)，并深度学习通用落地页最佳实践 (as detailed in provided resources) **AND NOW SPECIFICALLY IMPLEMENTING THE FOLLOWING PRE-COMPUTED SUMMARY OF KEY DESIGN PRACTICES OBSERVED FROM TOP PERFORMING LANDING PAGES, INCLUDING PRICE PRESENTATION STRATEGIES, **AND ENSURING SEO-FRIENDLY HTML OUTPUT, AND INCORPORATING GAMIFIED DESIGN PRINCIPLES**, 弥补 PRD 信息不足，并有权在分析基础上，自主优化或替换 PRD 中定义的颜色方案，以确保落地页设计极致优化，最大化转化率，采用响应式设计，完美适配各种屏幕尺寸，并深度契合游戏化 App 产品特点 AND **SEARCH ENGINE OPTIMIZATION BEST PRACTICES, WHILE APPEALING TO A GAMING AUDIENCE**.**  **在 PRD 信息缺失或设计需要优化时，AI 将以通用落地页最佳实践为首要指导原则, **ENRICHED BY AND DIRECTLY IMPLEMENTING THE FOLLOWING PRE-COMPUTED SUMMARY OF SUCCESSFUL LANDING PAGE EXAMPLES, AND SPECIFICALLY EFFECTIVE PRICE PRESENTATION TECHNIQUES, **AND PRIORITIZING SEO-FRIENDLINESS, AND GAME USER PSYCHOLOGY**, 结合通用最佳实践、颜色心理学、品牌调性、转化率优化、**and insights from audience research and conversion studies, AND GAME USER BEHAVIOR STUDIES**, 做出最有利于提升转化的设计决策. **A streamlined approach focusing on a single offer will be prioritized to maximize lead conversion, as research suggests. **THE GENERATED HTML (`index.html`) MUST BE SEMANTICALLY STRUCTURED AND SEO-FRIENDLY, PARTICULARLY WITH PROPER USE OF H1, H2, H3, ETC. HEADING TAGS TO ORGANIZE CONTENT LOGICALLY FOR SEARCH ENGINES, AND INCORPORATING GAMIFIED ELEMENTS WHERE APPROPRIATE.**

**核心需求更新：**

* **支持中文英文多语言切换，使用独立的JSON文件存储多语言数据，方便拓展其他语种。**
* **落地页内容深度优化：应用 Ahrefs 和 Pollo.ai 落地页分析的所有 learnings，显著提升落地页质量，使其更具营销力和转化率。** **特别强调以下 Pollo.ai learnings:**
    * **Learning #1: 动态视觉展示 (视频/GIFs)**
    * **Learning #2: 亲和且人性化的对话式语气**
    * **Learning #3: 问题-激发-解决方案 (PAS) 叙事结构**
    * **Learning #4: 多样化且醒目的行动号召 (CTAs) 与策略性布局**
    * **Learning #5: 具体且多样的社会认同形式**
    * **Learning #6: 聚焦核心使用场景**
    * **Learning #7: 现代简洁设计与响应式布局**
* **新增核心功能：炫酷 Onboarding 流程 和 Paywall 机制**
    * **设计一套炫酷的 Onboarding 流程，引导新用户快速了解 App 核心功能和价值，提升用户首次使用体验。**
    * **Onboarding 结束后，展示 Paywall 界面，引导用户订阅付费以解锁完整 App 功能。**

**多语言支持实现：**
* 使用独立的 JSON 文件存储多语言数据 (例如：en.json, zh.json)。
* HTML 中使用 `data-i18n` 属性标记需要多语言支持的文本内容。
* 使用 JavaScript 加载 JSON 文件并根据用户选择的语言动态替换文本内容。
* 在 `index.html` 中添加语言切换功能，例如下拉菜单或按钮。

**App原型界面规划：**
* 设计 Onboarding 界面 (3-5 个 Onboarding 步骤)，确保流程简洁、吸引人、并有效传递 App 价值。
* 设计 Paywall 界面，引导用户订阅付费以解锁完整 App 功能。
* 设计 App 的核心功能界面 (例如：首页、个人资料页、设置页等)。
* 明确 Onboarding -> Paywall -> 核心功能界面 的完整用户流程。

**UI设计要求：**
* Onboarding 界面的 UI 设计需要炫酷、现代、并具有吸引力，可以考虑使用动画、微交互、时尚的配色方案和排版等，营造良好的视觉体验。
* Paywall 界面设计清晰、简洁、并突出订阅价值。
* 界面尺寸应模拟 iPhone 15 Pro，并让界面圆角化，使其更像真实的手机界面。
* 图片资源要求：
  * 用户头像：使用Unsplash平台的真实人物照片，确保图片质量高、风格专业。
  * Logo设计：使用SVG格式创建，确保在各种尺寸下保持清晰度和可扩展性。
  * 界面演示图片：优先使用SVG格式创建图标和插图，对于需要展示真实效果的UI元素，使用来自Unsplash、Pexels或Apple官方UI资源的高质量图片。
  * 所有图片资源必须确保有合适的分辨率和压缩比例，以平衡视觉效果和加载性能。
* 添加顶部状态栏（模拟 iOS 状态栏），并包含 App 导航栏（类似 iOS 底部 Tab Bar）如果某个页面存在滑动导航栏需要一直固定在底部。
* 整体设计风格需现代简洁，注重留白和清晰的视觉层级。确保落地页和 App 原型在各种设备上均能完美展示。

**落地页增强：**
* 在 "App 截图" Section 中，除了展示核心功能界面截图外，增加 Onboarding 流程的 GIF 动画或短视频，展示炫酷的 Onboarding 体验。
* 增加 "Open Full App Demo" 的入口 (按钮或链接)，引导用户体验包含 Onboarding 和 Paywall 流程的完整 App Demo。Demo 入口需要能够模拟 Onboarding -> Paywall -> 核心功能界面 的完整用户流程。
* "App 截图" Section：内容是不直接写入所有界面的 HTML 代码，而是使用 `iframe` 的方式嵌入这些 HTML 片段，高度保持手机的实际高度即可，并将所有页面平铺展示在 index 页面中的"app 截图"章节，而不是跳转链接。
* 在落地页中增加多个App预览section，用于展示不同UI风格的App原型，每种风格实现一套原型，使用iframe嵌入而非直接展示源码。
* 为每种UI风格的App原型创建独立的预览区域，包含风格名称、特点描述和交互式预览窗口。

**Pre-computed Summary of Key Design Practices from Top Landing Pages (Direct Implementation Guide for AI) - **SEO Enhanced & Gamified** **:**

*   **(New) Gamified Headline Strategies (SEO & Game User Optimized):**
    *   **Incorporate Game-Related Keywords in Headlines (SEO & Game Discovery):** Use keywords that game users commonly search for and that are relevant to the game genre, mechanics, or theme. (e.g., "Download the **Addictive Puzzle Game** Now!", "Conquer the **Fantasy RPG World** - Free Download!"). **Ensure primary game keywords are in the H1.**
    *   **Use Action-Oriented & Playful Language (Game Engagement):** Employ dynamic, action-driven, and playful language that resonates with game users and evokes a sense of fun and excitement. (e.g., "Jump into the Adventure!", "Start Your Quest Today!", "Unleash Your Inner Gamer!"). **Maintain SEO relevance while being playful.**
    *   **Highlight Game Benefits & Unique Selling Points (Game Value Proposition):** Clearly communicate the unique benefits and selling points of the game, focusing on what makes it fun, engaging, and rewarding for players. (e.g., "Endless Hours of Fun & Challenges," "Unique Gameplay You Won't Find Anywhere Else," "Become a Legend in Our Epic World!"). **Benefit-driven headlines should also integrate SEO keywords.**

*   **CTA Button Design & Placement (SEO & Game Context):**
    *   **Use Visually Appealing & Game-Themed CTAs:** Design CTA buttons that are visually appealing and fit the game's theme and style. Consider using game-related icons, fonts, and colors. (e.g., a "Download" button that looks like a treasure chest or a futuristic download portal). **Visual appeal of CTAs enhances user experience and indirectly SEO.**
    *   **Employ Action-Oriented & Game-Relevant Verb Phrases for CTA Text:** Use concise, action-driven phrases with verbs that are relevant to the game and encourage immediate action. (e.g., "Play Now for Free!", "Download & Install!", "Join the Adventure!"). **CTA text should be concise and game-relevant.**
    *   **Strategically Place Multiple CTAs Throughout Long-Form Pages:** Embed frequent CTA buttons within the long-form sales letter, especially after highlighting key game features, gameplay mechanics, or user testimonials. **Strategic CTA placement improves user flow and engagement.**
    *   **Design Buttons with Game-Like Visuals & Clear Text:** Create buttons that have a game-like aesthetic (e.g., textured, stylized borders, unique shapes) while maintaining clear, legible, and contrasting text. **Ensure readability and game-like visual appeal.**

*   **Social Proof Techniques (SEO Trust & Game Community Signals):**
    *   **Feature Player Testimonials & Reviews (Game Community Trust):** Include testimonials and reviews from real players, highlighting their positive experiences, enjoyment, and game achievements. **Game player testimonials build trust within the gaming community.**
    *   **Visually Show Gameplay Screenshots & Trailers (SEO Visual Game Content):** Showcase engaging gameplay screenshots and trailers that visually demonstrate the game's fun, excitement, and unique features. **Visual game content enhances user engagement and SEO.**
    *   **Incorporate Game Awards & Recognitions (Game Authority & Credibility):** Utilize badges and phrases emphasizing game awards, recognitions, or positive reviews from gaming publications or influencers. **Game awards enhance authority and credibility within the gaming niche.**
    *   **Highlight Player Base Size & Community Activity (Game Popularity & Community):**  Showcase the game's player base size, active community forums, or social media engagement to emphasize popularity and community. **Game popularity signals and community activity build user confidence.**

*   **Urgency & Scarcity Tactics (SEO User Engagement & Game FOMO):**
    *   **Implement "Limited Time Launch Discount" Offers:** Feature "Limited Time Launch Discount" banners or sections near the top and throughout the page, especially during game launch periods. **Launch discounts create urgency for early adopters.**
    *   **Display Prominent Countdown Timers for Launch Offers:**  Incorporate highly visible countdown timers, especially near pricing and CTA sections, to emphasize limited-time launch discounts or early bird bonuses. **Timers emphasize offer time limits and drive quicker action.**
    *   **Use "Limited Edition Bonus" / "Early Access" Messaging:**  Employ textual scarcity cues like "Limited Edition Bonus Content," "Early Access Available for First 1000 Players," "Exclusive Launch Day Rewards." **Scarcity messaging creates FOMO (Fear of Missing Out) and encourages immediate action.**
    *   **Utilize Visual Urgency & Excitement Cues:** Reinforce urgency and excitement visually through dynamic animations, vibrant color schemes, and energetic language throughout the design. **Visual cues contribute to user experience and engagement.**

*   **Overall Layout & Design Principles (SEO Structure & Game User Experience):**
    *   **Adopt Game-Themed Landing Page Format (Visually Engaging):** Structure the landing page with a visually engaging, game-themed design that captures the essence of the game and appeals to game users. **Visually appealing game-themed design improves user engagement.**
    *   **Place a Compelling Game Trailer or Gameplay Video Above the Fold (SEO Engagement & Game Immersion):** Position a captivating game trailer or gameplay video prominently at the top of the landing page to immediately immerse users in the game world. **Game trailers increase user time on page and engagement.**
    *   **Structure Content with Game-Relevant Headings & Sections (SEO Semantic HTML & Game Focus):**  Organize content with clear headings, subheadings, bullet points, and short paragraphs, using game-relevant terminology and sections (e.g., "Gameplay Features," "Character Classes," "World Lore"). **Semantic HTML with game-relevant headings improves SEO and user understanding.**
    *   **Maintain Visually Striking & Game-Appropriate Design Aesthetic (SEO Page Speed & Game Style):**  Opt for a visually striking and game-appropriate design aesthetic that aligns with the game's genre, style, and target audience. **Visually appealing and game-appropriate design enhances user experience.**
    *   **Focus on a Streamlined Single Game Offer (Eliminate Distractions) (SEO User Focus & Game Download):** Ensure the landing page is laser-focused on a single game offer and download, avoiding external links or unnecessary navigation that distract from the primary goal. **Streamlined focus improves user experience and download conversion rates.**

*   **Price & Offer Presentation Strategies (SEO Value & Game Monetization):**
    *   **Highlight "Free-to-Play" or "Free Download" Prominently:** If the game is free-to-play or offers a free download option, highlight this prominently to attract users. **"Free-to-Play" highlighting increases user acquisition.**
    *   **Present In-App Purchase Options Clearly (Game Monetization Transparency):** If the game includes in-app purchases, present these options clearly and transparently on the landing page, emphasizing value and benefits. **Transparency builds user trust and manages expectations.**
    *   **Offer Exclusive Launch Bundles or Starter Packs:** Create exclusive launch bundles or starter packs with bonus in-game items, currencies, or content to incentivize early downloads and purchases. **Launch bundles incentivize early adoption and monetization.**
    *   **Visually Emphasize Free Bonuses & Limited-Time Offers:** Use bolded fonts, contrasting colors, and game-themed visuals to emphasize free bonuses, limited-time offers, or discounts to attract user attention. **Visual emphasis on offers drives user action.**
    *   **(Optional) Offer Cross-Platform Availability & Download Options:** Clearly indicate cross-platform availability (iOS, Android, PC, etc.) and provide direct download links or app store badges for easy access. **Cross-platform availability and easy download options improve user convenience.**

**请提供你的 `prd.md` 文档 (即使不完善，且可能包含颜色方案)，以及尽可能详细的游戏 App 产品信息 (即使 PRD 中缺失，也请在 Prompt 中补充)，AI 将会：**

1.  **分析 `prd.md` 文档：**  尽力从中提取所有可用的游戏 App 产品信息、目标用户描述 (游戏用户画像)、品牌风格偏好 **(包括 PRD 中定义的颜色方案)** 等.
2.  **自主研究补充信息：**  **当 `prd.md` 信息不足时，AI 将主动进行以下研究 (但不限于):**
    *   **游戏 App 市场调研：**  基于游戏 App 产品名称和核心卖点，进行市场调研，了解游戏市场规模、趋势、用户需求 (游戏用户偏好)、竞争格局 (游戏 App 落地页) 等. **Research should include keyword research to identify relevant SEO keywords for game-related headlines and content.**
    *   **目标游戏用户深度分析：**  基于 PRD 中已有的目标用户描述 (即使很简略)，进行更深入的游戏用户分析，包括：游戏用户画像细化、游戏用户痛点挖掘、游戏用户游戏偏好和下载动机分析. **This will include tailoring content to game user interests and preferences. User analysis should inform keyword targeting and content relevance for SEO.**
    *   **竞品游戏 App 落地页分析：**  主动搜索和分析竞争对手的游戏 App 响应式落地页, **NOW DIRECTLY GUIDED BY THE PRE-COMPUTED SUMMARY OF KEY DESIGN PRACTICES, INCLUDING PRICE PRESENTATION, AND OPTIMIZED FOR SEO, AND INCORPORATING GAMIFIED ELEMENTS**, 深入研究其设计策略和转化技巧 (游戏用户转化技巧). **Analyze competitor game landing pages for SEO best practices, including keyword usage, heading structure, and content optimization, AND GAME-SPECIFIC DESIGN ELEMENTS.**
    *   **通用落地页 & 游戏落地页最佳实践 **深度** 学习：**  进行 **更深入、更系统化** 的通用落地页和游戏落地页最佳实践学习, **NOW DIRECTLY IMPLEMENTING THE ABOVE PRE-COMPUTED DESIGN PRACTICE SUMMARY, AND PRIORITIZING SEO-FRIENDLINESS, AND GAME USER ENGAGEMENT**, **重点研究以下成功落地页的关键要素 (based on provided research, common characteristics of successful landing pages, GAME LANDING PAGES, AND THE PRE-COMPUTED DESIGN PRACTICE SUMMARY ABOVE, **AND NOW WITH ADDED SEO AND GAME USER CONSIDERATIONS**):**
        *   **游戏化的强烈标题和副标题 (Gamified Benefit-Driven Headlines - SEO & Game User Optimized):**  **Implement problem-focused and benefit-driven headlines, using direct and urgent language, considering target game audience cues, AND INTEGRATING RELEVANT SEO & GAME-RELATED KEYWORDS, as per the pre-computed summary.** **Ensure the main headline is wrapped in H1 tag and incorporates primary game keywords.**
        *   **清晰的游戏产品价值主张 (Clear Game Value Proposition - SEO & Game Relevance):**  快速、简洁、有力地传递游戏产品能为用户带来的独特价值 (游戏乐趣、独特玩法、沉浸体验等). **Ensure the value proposition is clear, concise, powerful, AND RELEVANT TO USER SEARCH INTENT AND TARGET GAME KEYWORDS, reflecting the benefit-driven and SEO-optimized approach summarized above.**
        *   **游戏用户痛点聚焦和解决方案呈现 (Game User Pain Point & Solution Focus - SEO & Game Content Relevance):**  深入挖掘游戏用户痛点 (例如：找不到好玩的游戏、游戏太氪金、游戏体验差)，并在落地页中反复强调，然后将游戏产品定位为完美的解决方案. **Focus on game user pain points before solutions to resonate with game users, and ensure pain points and solutions are highlighted effectively AND INCORPORATE RELEVANT GAME KEYWORDS NATURALLY, as per the summary.** **Use H2 tags for major sections outlining game user pain points and game solutions, incorporating secondary game keywords.**
        *   **社会认同和玩家证言 (Social Proof & Player Testimonials - SEO User Trust & Game Community Authority):**  显著位置展示玩家评价、游戏成功案例、权威游戏媒体或 KOL 背书, 建立信任感. **Feature player testimonials, gameplay screenshots/trailers, and game awards/recognitions, directly implementing the social proof techniques from the summary. Testimonials should build game user trust and authority within the game community. Structure testimonial sections with appropriate heading tags (H3 or below).**
        *   **行动号召优化 (Optimized Call-to-Actions - CTAs - SEO User Engagement & Game Action):**  设计醒目、突出、行动导向的 CTA 按钮，使用有吸引力的文案 (游戏化文案)，并在关键位置多次放置 CTA 按钮. **Design CTAs with game-themed visuals, action-oriented and game-relevant text, and strategic placement throughout the page, directly following the CTA button design guidelines from the summary. Optimize CTA button placement and design to maximize game user engagement and download conversion.**
        *   **紧迫感和稀缺性策略 (Scarcity & Urgency Tactics - SEO Engagement Metrics & Game FOMO):**  巧妙运用限时优惠、限量、倒计时等策略，营造紧迫感，促使用户立即行动 (游戏下载). **Implement "Limited Time Launch Discount" offers, prominent countdown timers, "Limited Edition Bonus" messaging, and visual urgency & excitement cues, directly applying the urgency and scarcity tactics from the summary. Urgency and scarcity tactics should aim to improve game user engagement metrics and download rates.**
        *   **风险消除和免费体验承诺 (Risk Reversal & Free-to-Play Promise - SEO Trust & Game Credibility):**  如果游戏是 Free-to-Play，务必在落地页中显著强调 "免费畅玩" 或 "免费下载" 等承诺，降低用户尝试游戏的风险，消除疑虑. **Clearly state and emphasize "Free-to-Play" or "Free Download" to reduce perceived risk and build game user trust, enhancing credibility for SEO.**
        *   **简洁明了的游戏化设计和布局 (Clean & Simple & Gamified Design & Layout - SEO Page Speed & Game User Mobile-Friendliness):**  采用简洁、专业、易于导航，并融入游戏化元素的设计风格，避免干扰元素，突出核心游戏信息和下载入口. **Maintain a clean and minimalist design with a game-themed layout, video hook at the top, and structured, easily digestible content, directly implementing the layout and design principles from the summary. Ensure clean code and optimized design for fast page speed and mobile-friendliness, critical SEO factors for game users.**
        *   **移动端优先和响应式设计 (Mobile-First & Responsive Design - SEO Mobile-Friendliness & Mobile Game Users):**  极致重视移动端游戏用户体验，确保在移动设备上完美展示和流畅操作. **Prioritize mobile-first design and ensure responsiveness for optimal mobile game user experience, a key SEO ranking signal.**
        *   **视觉元素极致优化 (Optimized Visual Game Elements - SEO Visual Game Content & Engagement):**  使用高质量、高相关性的游戏图片和视频，增强视觉吸引力，直观展示游戏玩法、特色和乐趣. **Optimize game images and videos for SEO, including descriptive file names and alt text. Use visuals to enhance game user engagement and time on page, indirectly supporting SEO.**
        *   **销售文案极致优化 (Optimized Sales Copy - SEO Content Optimization & Game Keywords):**  撰写具有销售力、 persuasive 的游戏文案，强调游戏乐趣、独特玩法、沉浸体验、用户利益、紧迫感，使用强有力的动词和游戏行业常用语. **Optimize sales copy for SEO by naturally incorporating relevant game keywords throughout the text. Focus on providing valuable and relevant game content that satisfies game user search intent.**
        *   **价格和价值呈现 (Price & Value Presentation - SEO User Experience & Game Value):**  清晰展示游戏内购信息 (如果适用) 和优惠信息，并突出游戏产品的价值感，例如：对比不同游戏套餐，赠送游戏内道具或福利. **Implement a tiered pricing structure (if applicable), tiered value proposition (game bundles), clear price differences, "Most Popular" tier highlighting, and visually emphasize free bonuses/discounts, directly applying the price presentation strategies from the summary. Clear and compelling price presentation improves game user experience and conversion rates.**
        *   **Focus on One Game Solution (SEO Topical Focus & Game Focus):** Streamline approach focusing on a single game offer and download to maximize download conversion. **Focusing on a single game offer helps maintain topical relevance and focus for SEO, improving keyword targeting and content coherence within the game niche.**
    *   **颜色心理学研究 (SEO User Experience & Game Engagement):**  研究颜色心理学，了解不同颜色对用户情绪、行为和转化率的影响，并结合游戏类型选择合适的颜色方案 (例如：鲜艳色彩用于休闲游戏，暗黑色彩用于恐怖游戏). **Complementary color palettes, checked against game genre trends, will be used, avoiding jarring choices. Color scheme should enhance game user experience and readability, indirectly supporting SEO through engagement metrics.**
    *   **品牌调性和游戏风格分析 (SEO Brand Building & Game Brand Consistency):**  分析游戏产品品牌调性和游戏风格，确保颜色方案与品牌形象和游戏风格相符. **Consistent brand tonality and game style across the landing page builds brand recognition and authority, indirectly contributing to long-term SEO benefits.**
    *   **响应式设计最佳实践应用 (SEO Mobile-Friendliness & Mobile Game Users):**  学习和应用响应式网页设计的通用最佳实践，确保移动端游戏用户体验. **Adhere to responsive design best practices to ensure mobile-friendliness for game users, a critical SEO ranking factor.**
    *   **通用落地页 & 游戏落地页最佳实践应用 (SEO User Experience & Game Conversion):**  学习和应用通用落地页和游戏落地页设计的最佳实践. **Implement general landing page and game landing page best practices to optimize user experience and game download conversion rates, indirectly supporting SEO goals.**

**(Continue with sections 2, 3, 4, 5, 6 and Game Style Optimization Checklist from the previous FULL PROMPT, ensuring all sections are updated to reflect the new pre-computed summary implementation, SEO optimization instructions, and game-specific considerations.)**

**4、HTML 原型实现 (性能优化 + 响应式实现 + 颜色方案应用 + 通用技术标准对齐 + Compliance (If Applicable) + **SEO-Friendly HTML Output**):**

*   **最终输出：包含 `index.html` 文件以及 `css/`, `js/`, `img/`, `locale/` 文件夹的项目结构。** The final output will be a project folder containing `index.html`, `css/`, `js/`, `img/`, and `locale/` folders.
*   **HTML 代码 (`index.html`) 和技术实现需要尽可能与通用 Web 技术标准对齐，例如：兼容性、加载速度、安全性等. **AND MUST BE SEO-FRIENDLY, UTILIZING SEMANTIC HTML STRUCTURE AND PROPER HEADING TAG USAGE**.  AI 需要在 `landing-page-brief.md` 文档中，简述其技术实现策略，以及如何与通用 Web 技术标准对齐 **AND ENSURE SEO-FRIENDLY HTML**. **Prioritize clean, semantic HTML code that is easily crawlable and indexable by search engines. Use H1, H2, H3, etc. tags appropriately to structure content hierarchy for SEO in `index.html`, with game-relevant keywords.**
*   **轻量级 HTML 框架 (Tailwind CSS 优先):**  使用 Tailwind CSS 或 Bootstrap 等响应式 CSS 框架，快速实现响应式布局和颜色方案应用，并方便定制游戏化视觉风格. **Choose a framework that allows for clean and optimized HTML output in `index.html`, contributing to SEO page speed, and is flexible for game-themed styling.**
*   **Media Queries 应用:**  使用 Media Queries 精细化控制不同屏幕尺寸下的样式、布局和颜色方案，确保在各种设备上游戏用户体验. **Ensure responsive design is implemented correctly using Media Queries for optimal mobile-friendliness for game users, an SEO ranking factor for `index.html`.**
*   **CSS Variables (Custom Properties)：**  可以使用 CSS Variables (自定义属性) 来管理和调整颜色方案，方便响应式调整和主题切换，并支持游戏主题切换 (如果需要).
*   **弹性布局 (Flexbox/Grid):**  采用 Flexbox 或 CSS Grid 等现代布局技术，构建灵活的响应式布局，适应不同游戏内容和屏幕尺寸. **Use flexible layout techniques to ensure responsiveness and optimal game user experience across devices for `index.html`, indirectly supporting SEO.**
*   **响应式图片 ( `<picture>` / `srcset` )：**  使用 `<picture>` 元素或 `<img>` 标签的 `srcset` 属性，提供不同尺寸的游戏图片资源，优化响应式图片加载，提升游戏落地页性能. **Implement responsive images using `<picture>` or `srcset` in `index.html` for SEO image optimization and page speed, especially important for visually rich game landing pages.**
*   **性能优化 (WebP, 懒加载):**  所有游戏图片和视频素材必须经过压缩优化，使用 WebP 格式，懒加载技术，确保游戏落地页加载速度. **Prioritize page speed optimization techniques like image compression, WebP format, and lazy loading for SEO performance in `index.html`, crucial for retaining game users on the landing page.**
*   **精简代码 (优化性能):**  HTML 和 CSS 代码要精简，避免冗余代码，提升游戏落地页性能. **Write clean, concise, and efficient HTML and CSS code for `index.html` and associated CSS to minimize page size and improve loading speed, benefiting SEO and game user experience.**
*   **CDN 加速 (提升速度):**  静态资源 (游戏图片、视频等) 使用 CDN 加速，提升全球游戏用户访问速度. **Utilize CDN for static resources (game assets) to improve page loading speed globally, enhancing SEO for `index.html` and ensuring fast access for game users worldwide.**
*   **移动端优先优化 (提升游戏用户体验 - SEO Mobile-Friendliness):**  针对移动端进行性能优化，并优先考虑移动端游戏用户体验，确保移动端游戏用户流畅访问和下载. **Prioritize mobile-first optimization and game user experience for mobile devices, as mobile-friendliness is a crucial SEO ranking factor for `index.html` and essential for mobile game users.**
*   **合规性声明 (如果适用) (Compliance Disclaimer - If Applicable):** Include 合规性声明 if required by regulations or platform guidelines, e.g., "This page contains promotional content for a game..." **Compliance is important where applicable.**

**6、生成 landing-page-brief.md 文档 (极致详细版 - 突出 AI 自主研究、响应式设计、颜色方案决策、通用最佳实践和 **游戏化设计** 应用 - **Enhanced Detail & Justification & SEO Strategy & Game-Specific Design**):**

*   **极致详细版需求文档 `landing-page-brief.md`:**  生成 `landing-page-brief.md` 文档，**需要提供前所未有的详细程度，不仅要记录游戏化 App 产品落地页 (`index.html`) 的所有设计决策，更要极致详细地记录 AI 在 PRD 信息不足时，如何进行自主研究、分析和决策 (游戏用户分析)，如何实现响应式设计，如何进行颜色方案选择和优化 (包括是否替换 PRD 原有颜色方案)，以及 **最重要的是，如何深度融入和应用通用落地页和游戏落地页最佳实践, and how research on audience (game users) and conversion optimization, **AND SPECIFICALLY THE PRE-COMPUTED SUMMARY OF LANDING PAGE DESIGN PRACTICES, **AND SEO OPTIMIZATION PRINCIPLES, AND GAME-SPECIFIC DESIGN CONSIDERATIONS**, informed the design of `index.html`**.**  文档 `landing-page-brief.md` 需要包含:
    *   **PRD 信息分析概要:**  简述从 `prd.md` 中提取的关键游戏 App 产品信息和信息缺失情况， **特别指出 PRD 中是否定义了颜色方案.**
    *   **AI 自主研究报告:**  详细描述 AI 进行的游戏 App 市场调研, **INCLUDING KEYWORD RESEARCH FOR GAME-RELATED SEO**, 目标游戏用户分析 **(including game user personalization strategies, location-aware content considerations for game users)**、竞品游戏 App 落地页分析 **(INCLUDING SEO ANALYSIS AND GAME UI/UX ANALYSIS)** 等研究过程和结果. **Detail how game user research and conversion studies AND GAME-SPECIFIC SEO RESEARCH were incorporated in the design of `index.html`.**
    *   **通用落地页 & 游戏落地页最佳实践学习报告:**  **极其详细地描述 AI 如何学习和理解通用落地页和游戏落地页最佳实践，包括学习资源、学习方法、学习成果, **AND HOW THE PRE-COMPUTED SUMMARY OF DESIGN PRACTICES WAS USED AS A DIRECT IMPLEMENTATION GUIDE, **AND HOW SEO BEST PRACTICES AND GAME-SPECIFIC DESIGN PRINCIPLES WERE INTEGRATED**. 总结的成功落地页关键要素 (需与 Prompt 中列出的要素一致).  **Provide specific examples of landing pages AND GAME LANDING PAGES that were analyzed (if applicable beyond the provided URLs) and how their best practices, **AND SPECIFICALLY ELEMENTS FROM THE PRE-COMPUTED SUMMARY, **AND SEO STRATEGIES, AND GAME-SPECIFIC DESIGN ELEMENTS**, were adopted in `index.html`.**
    *   **设计决策依据:**  针对每个关键设计决策 (例如：模型选择、模块选择、文案策略、视觉风格 (游戏化视觉风格)、信任策略、响应式策略、颜色方案选择、**通用最佳实践应用, Game-Specific Design, Audience Personalization (Game Users), Streamlined Approach, Compliance (If Applicable), PRICE SECTION DESIGN, SEO OPTIMIZATION, GAMIFIED ELEMENTS**) ， **极其详细地** 说明 AI 的决策理由和依据. **务必清晰地指出每个设计决策是如何基于通用落地页和游戏落地页最佳实践的，并引用具体的最佳实践原则或案例作为支撑. Explicitly state how game user understanding, simple & gamified design, persuasive game copy, trust elements, optimization, **AND PRICE PRESENTATION BEST PRACTICES FROM THE SUMMARY, **AND SEO PRINCIPLES, AND GAME-SPECIFIC DESIGN PRINCIPLES** informed each design decision for `index.html`. **Specifically detail how the pre-computed summary was directly implemented in each design aspect of `index.html` AND HOW SEO CONSIDERATIONS AND GAME-SPECIFIC DESIGN ELEMENTS WERE ADDRESSED IN EACH SECTION.**
    *   **文案创意来源和游戏化文案风格借鉴:**  详细描述文案策略和创意来源， **并详细说明如何借鉴游戏化文案风格，提供具体的文案范例和分析. Explain how persuasive game copy principles, benefit-driven game language, short sentence structure, **AND SEO GAME KEYWORD INTEGRATION** were implemented in `index.html`, referencing the pre-computed summary guidelines for copy and SEO, and game-specific copywriting best practices.**
    *   **素材选择考虑因素和游戏素材风格参考:**  详细描述游戏图片、视频素材选择的考虑因素， **并详细说明如何借鉴游戏素材风格，提供具体的素材案例和分析.  Detail the game trailer/gameplay video integration strategy, and how visual game elements were chosen to maximize benefit communication in `index.html`, as per the summary recommendations, **AND HOW GAME IMAGES AND VIDEOS ARE OPTIMIZED FOR SEO (FILE NAMES, ALT TEXT, ETC.)**.**
    *   **响应式设计策略详解:**  详细描述 AI 采用的响应式设计策略和技术， **包括响应式颜色方案的实现方法，以及如何针对移动端游戏用户进行优化. Detail mobile-first design considerations and speed optimization techniques for general web standards AND SEO MOBILE-FRIENDLINESS for `index.html`, specifically for mobile game users.**
    *   **颜色方案决策详解:**  详细描述 AI 的颜色方案选择过程，包括：PRD 颜色方案分析 (如果存在)、自主研究和分析过程 (颜色心理学和游戏类型色彩搭配)、最终颜色方案决策、颜色方案 justification (重点解释替换 PRD 颜色方案的理由，如果发生替换). **Justify the color scheme choice for `index.html` based on color psychology, game genre color palettes, brand tonality, and general best practices, referencing the color palette analysis from the pre-computed summary if applicable.  Explain how color choices contribute to game user experience and engagement, indirectly supporting SEO.**
    *   **信任建立策略详解和游戏用户信任要素强化:**  详细描述信任建立策略， **并详细说明如何强化游戏用户更看重的信任要素 (例如：真实玩家评价、游戏媒体评分、游戏安全认证)，提供具体的信任要素展示方案和案例. Explain how social proof and game-specific trust signals are implemented in `index.html`, directly referencing the social proof techniques from the pre-computed summary. Explain how building trust and authority enhances game user confidence and potentially improves SEO E-A-T within the gaming niche.**
    *   **CTA 按钮设计详解和游戏化 CTA 按钮风格借鉴:**  详细描述 CTA 按钮设计策略， **并详细说明如何借鉴游戏化 CTA 按钮风格，提供具体的 CTA 按钮设计方案和案例. Explain how CTAs are optimized for maximum clicks and blended creatively into the game-themed content of `index.html`, directly referencing the CTA button design guidelines from the pre-computed summary.  Explain how optimized CTAs contribute to game user engagement and download conversion rates.**
    *   **Price Section Design & Implementation Details:** **Provide a dedicated section detailing the price section design and implementation in `index.html`, explicitly stating how the tiered pricing (if applicable), value stacking (game bundles), visual emphasis, and "Most Popular" tier highlighting were implemented based on the pre-computed summary's price presentation strategies. Include visual examples or mockups of the price section. Explain how clear and value-driven price presentation improves game user experience and conversion rates.**
    *   **技术实现策略详解和通用技术标准对齐说明:**  详细描述技术实现策略， **并详细说明如何与通用 Web 技术标准对齐，提供具体的技术方案和标准参考. Explain how general web technical standards are met and page loading speed is optimized for general web requirements AND SEO PAGE SPEED OPTIMIZATION for `index.html`, ensuring a smooth experience for game users.** **Specifically detail how semantic HTML and proper heading tag usage (H1, H2, H3 etc.) are implemented for SEO in `index.html`.**
    *   **性能优化策略:**  简述采用的性能优化策略. **Detail specific performance optimization strategies implemented for SEO page speed benefits in `index.html` (image compression, lazy loading, CDN, etc.), crucial for game landing pages.**
    *   **Compliance Strategy (If Applicable):** Detail how compliance disclaimer and relevant regulations are addressed for the game app product in `index.html` if applicable (e.g., age ratings, in-app purchase disclosures).

**游戏风格优化 Checklist (AI 自主研究、决策、响应式设计、颜色方案优化、通用最佳实践和 **游戏化设计** 应用验证) - **Enhanced Checklist & Direct Summary & SEO & Game Implementation Verification** **:

*   ✅ **高转化率导向 (AI 极致目标):**  设计目标是 **极致提升转化率 (游戏下载量)**，所有设计决策都必须服务于这个目标， **并以通用落地页和游戏落地页最佳实践为最高指导原则 and the pre-computed design practice summary as a direct implementation guide, **AND SEO BEST PRACTICES, AND GAME-SPECIFIC DESIGN PRINCIPLES** for `index.html`.**
*   ✅ **深度融入通用 & 游戏最佳实践 & Pre-computed Summary Implementation & SEO & Game Optimization:**  落地页设计 (`index.html`) 必须深度融入通用落地页和游戏落地页最佳实践 **AND DIRECTLY IMPLEMENT THE PRE-COMPUTED DESIGN PRACTICE SUMMARY, **AND BE OPTIMIZED FOR SEO, AND INCORPORATE GAME-SPECIFIC DESIGN ELEMENTS**, 并体现在各个方面 (用户分析 (游戏用户画像)、结构规划、文案 (游戏文案)、UI 设计 (游戏化 UI)、技术实现等).  `landing-page-brief.md` 文档需要 **极致详细地** 论证通用和游戏最佳实践的应用情况 **AND DEMONSTRATE DIRECT IMPLEMENTATION OF EACH POINT IN THE PRE-COMPUTED SUMMARY, **AND EXPLICITLY DETAIL SEO IMPLEMENTATION STRATEGIES AND GAME-SPECIFIC DESIGN CHOICES IN `index.html`**.**
*   ✅ **Audience Personalization (Game User Relevance & SEO Relevance):** Landing page (`index.html`) is tailored to the target **game** audience's interests and preferences, potentially with location-aware content, **AND CONTENT IS RELEVANT TO TARGET GAME AUDIENCE AND SEARCH INTENT FOR SEO.**
*   ✅ **Streamlined Approach (SEO User Focus & Game Focus):** Landing page (`index.html`) focuses on a single game offer to maximize download conversion **AND MAINTAIN TOPICAL FOCUS FOR SEO AND GAME RELEVANCE.**
*   ✅ **AIDA Principle Applied (SEO Content Structure & Game User Journey):** Landing page (`index.html`) structure is based on the AIDA model for effective game user journey **AND CONTENT IS LOGICALLY STRUCTURED WITH SEMANTIC HTML AND HEADING TAGS FOR SEO AND GAME INFORMATION HIERARCHY.**
*   ✅ **痛点营销 (AI 自主挖掘 + 通用 & 游戏痛点策略 + Summary Implementation + **SEO & Game Keywords**):**  AI 主动挖掘 **游戏用户** 痛点，并在落地页 (`index.html`) 中进行 **极致** 痛点营销， **借鉴成功案例的痛点策略 AND DIRECTLY IMPLEMENTING PROBLEM-FOCUSED HEADLINES AND GAME USER PAIN POINT EMPHASIS FROM THE PRE-COMPUTED SUMMARY, **AND INCORPORATING RELEVANT SEO & GAME KEYWORDS NATURALLY**.** **Focus on symptoms before solutions in game user pain point messaging as per summary, **AND ENSURE KEYWORD RELEVANCE FOR SEO AND GAME DISCOVERY IN `index.html`**.**
*   ✅ **利益驱动 (AI 自主提炼 + 通用 & 游戏利益呈现 + Summary Implementation + **SEO & Game Keywords**):**  AI 主动提炼游戏产品核心卖点和 **游戏用户** 利益，并在落地页 (`index.html`) 中 **极致突出** 用户利益， **借鉴成功案例的利益呈现方式 AND DIRECTLY IMPLEMENTING BENEFIT-DRIVEN HEADLINES AND COPY AS PER THE PRE-COMPUTED SUMMARY, **AND INTEGRATING RELEVANT SEO & GAME KEYWORDS**.** **Benefit-driven headlines and game copy are used throughout the landing page (`index.html`) as per summary, **AND ARE OPTIMIZED FOR SEO & GAME KEYWORDS**.**
*   ✅ **销售型文案 (AI 自主创作 + 通用 & 游戏极致转化文案风格 + Summary Implementation + **SEO & Game Optimization**):**  AI 自主创作销售型文案，力求 **极致简洁有力，Benefit-Driven, 游戏化**，并 **深度契合通用和游戏极致转化文案风格 AND DIRECTLY IMPLEMENTING PERSUASIVE COPY GUIDELINES FROM THE PRE-COMPUTED SUMMARY, **AND OPTIMIZING FOR SEO AND GAME USER ENGAGEMENT**.** **Persuasive game copy pre-sells the game solution, covering what, where, when, why, and how to play. Short sentences are used for better readability, following summary recommendations. **GAME SALES COPY IN `index.html` IS OPTIMIZED FOR RELEVANT SEO & GAME KEYWORDS AND GAME USER SEARCH INTENT**.**
*   ✅ **视觉冲击力 & 游戏化风格 (AI 自主设计 + 颜色方案优化 + 通用 & 游戏视觉风格借鉴 + Simple & Engaging & Gamified Design + Summary Implementation + **SEO Visuals**):**  AI 自主设计具有视觉冲击力和 **游戏化** 风格的界面， **并极致优化颜色方案以增强视觉冲击力，借鉴成功案例的视觉风格 AND DIRECTLY IMPLEMENTING CLEAN & SIMPLE DESIGN PRINCIPLES FROM THE PRE-COMPUTED SUMMARY, **AND ENSURING VISUAL GAME ELEMENTS ARE OPTIMIZED FOR SEO AND GAME USER APPEAL**.** **Design of `index.html` is clean, mobile-friendly, with easy-to-read dark text on light backgrounds, appealing **game-themed** images, and complementary color palettes, adhering to the summary guidelines for visual style. **GAME IMAGES AND VIDEOS IN `index.html` ARE OPTIMIZED FOR SEO (FILE NAMES, ALT TEXT) AND GAME USER ENGAGEMENT.**
*   ✅ **信任建立 (AI 自主策略 + 通用 & 游戏信任要素极致强化 + Social Proof & Player Testimonials & Game Trust Signals + Summary Implementation + **SEO E-A-T**):**  AI 自主设计信任建立策略， **并极致强化游戏用户更看重的信任要素 (例如：玩家评价，游戏媒体评分). Social proof elements like player testimonials, gameplay screenshots/trailers, and game awards/recognitions are prominently featured in `index.html`, DIRECTLY IMPLEMENTING SOCIAL PROOF TECHNIQUES FROM THE PRE-COMPUTED SUMMARY. **GAME TRUST BUILDING ELEMENTS CONTRIBUTE TO SEO E-A-T (EXPERTISE, AUTHORITATIVENESS, TRUSTWORTHINESS) WITHIN THE GAMING NICHE.**
*   ✅ **紧迫感营造 (AI 自主策略 + 通用 & 游戏紧迫感策略 + Summary Implementation - **SEO Engagement & Game FOMO**):**  AI 自主设计紧迫感营造策略， **借鉴成功案例的紧迫感策略 AND DIRECTLY IMPLEMENTING URGENCY & SCARCITY TACTICS FROM THE PRE-COMPUTED SUMMARY (LIMITED TIME LAUNCH DISCOUNTS, COUNTDOWN TIMERS, LIMITED EDITION BONUS MESSAGING) in `index.html`. **URGENCY AND SCARCITY TACTICS AIM TO IMPROVE USER ENGAGEMENT METRICS AND GAME DOWNLOAD RATES FOR SEO**.**
*   ✅ **响应式设计 (通用标准 + 移动优先 - **SEO Mobile-Friendliness & Mobile Game Users**):**  生成响应式落地页 (`index.html`)，适配不同屏幕尺寸， **极致重视移动端游戏用户体验，与移动优先策略对齐. **LANDING PAGE (`index.html`) IS FULLY RESPONSIVE AND MOBILE-FIRST OPTIMIZED, A CRITICAL SEO RANKING FACTOR AND ESSENTIAL FOR MOBILE GAME USERS**.**
*   ✅ **性能优化 (通用标准 + 通用技术标准对齐 - **SEO Page Speed**):**  页面 (`index.html`) 性能 **极致优化**，与通用 Web 技术标准对齐，确保游戏用户快速访问和下载. **PAGE LOADING SPEED OF `index.html` IS EXTREMELY OPTIMIZED FOR MAXIMUM CONVERSION AND GENERAL WEB TECHNICAL REQUIREMENTS, AND FOR SEO PAGE SPEED BENEFITS, CRUCIAL FOR GAME LANDING PAGES.**
*   ✅ **AI 自主研究和决策透明度 (SEO & Game Justification):**  `landing-page-brief.md` 文档 **极致详细地** 记录 AI 的自主研究过程、设计决策和依据 **(包括颜色方案决策和通用 & 游戏最佳实践应用, AND DIRECT IMPLEMENTATION OF THE PRE-COMPUTED SUMMARY, **AND SEO & GAME STRATEGY JUSTIFICATION FOR `index.html`**)**. **Document details how game user research and conversion studies, AND THE PRE-COMPUTED DESIGN SUMMARY, **AND SEO & GAME BEST PRACTICES**, informed design decisions for `index.html`. **EXPLICITLY JUSTIFY SEO STRATEGIES AND GAME-SPECIFIC DESIGN CHOICES IMPLEMENTED IN EACH SECTION OF THE LANDING PAGE (`index.html`)**.**
*   ✅ **响应式设计策略透明度 (SEO Mobile-Friendliness Documentation & Game Users):**  `landing-page-brief.md` 文档 **极致详细地** 记录 AI 采用的响应式设计策略和技术 **(包括响应式颜色方案实现) for `index.html`, specifically for mobile game users**. **DOCUMENTATION DETAILS MOBILE-FIRST DESIGN AND RESPONSIVE IMPLEMENTATION FOR SEO MOBILE-FRIENDLINESS OF `index.html` AND OPTIMIZATION FOR MOBILE GAME USERS**.**
*   ✅ **颜色方案优化 justification (SEO User Experience & Game Engagement Justification):**  **如果 AI 替换了 PRD 颜色方案，`landing-page-brief.md` 文档必须提供极致充分的理由和优势说明. Color scheme choice for `index.html` is justified based on color psychology, game genre color palettes, brand tonality, and general best practices, referencing the pre-computed summary if applicable. **EXPLAIN HOW COLOR CHOICES ENHANCE GAME USER EXPERIENCE AND ENGAGEMENT FOR SEO BENEFITS IN `index.html`**.**
*   ✅ **通用 & 游戏最佳实践应用 & Summary Implementation Justification (SEO & Game Best Practice Alignment):**  **`landing-page-brief.md` 文档必须详细论证落地页 (`index.html`) 设计是如何深度融入和应用通用落地页和游戏落地页最佳实践 AND THE PRE-COMPUTED DESIGN SUMMARY, 并提供具体的案例和分析. Document provides specific examples of landing pages AND GAME LANDING PAGES analyzed (if applicable) and **EXPLICITLY DEMONSTRATES HOW EACH POINT OF THE PRE-COMPUTED DESIGN SUMMARY WAS DIRECTLY IMPLEMENTED IN THE GENERATED LANDING PAGE PROTOTYPE (`index.html`), **AND HOW GENERAL & GAME BEST PRACTICES ALIGN WITH SEO PRINCIPLES AND GAME USER EXPECTATIONS**.**
*   ✅ **Price Section Design Implementation & Justification (SEO User Experience & Game Monetization):** **`landing-page-brief.md` document includes a dedicated section detailing the price section design and implementation in `index.html`, explicitly stating how the tiered pricing (if applicable), value stacking (game bundles), visual emphasis, and "Most Popular" tier highlighting were implemented based on the pre-computed summary's price presentation strategies. Provides visual examples or mockups of the price section. **EXPLAIN HOW CLEAR AND VALUE-DRIVEN PRICE PRESENTATION IMPROVES GAME USER EXPERIENCE AND CONVERSION RATES, INDIRECTLY SUPPORTING SEO IN `index.html` AND GAME MONETIZATION GOALS**.**
*   ✅ **SEO-Friendly HTML Output Verification:** **`landing-page-brief.md` document explicitly confirms that the generated HTML code (`index.html`) is SEO-friendly, utilizing semantic HTML structure and proper heading tag usage (H1, H2, H3 etc.).  Provide examples of heading tag implementation and semantic HTML structure in the documentation.**
*   ✅ **Compliance with Regulations (If Applicable):** Compliance disclaimer is included for the game app product in `index.html` to comply with relevant regulations and platform guidelines if applicable (e.g., age ratings, in-app purchase disclosures).

**请提供你的 `prd.md` 文档 (即使不完善，且可能包含颜色方案)，以及尽可能详细的游戏 App 产品信息 (即使 PRD 中缺失，也请在 Prompt 中补充)，AI 将会基于这些信息，进行极致深入的自主研究和设计，为你 \[你的游戏 App 产品名称] 设计 **极致高转化率的响应式游戏化 App 产品落地页** 原型 (通用最佳实践融入版 - 颜色方案自主优化版 - 响应式设计优化版 - PRD 不完善友好型 - 自主研究补充版 - 游戏化元素强化版) - **Enhanced Version with Pre-computed Design Practice Summary, Direct Implementation & SEO Optimization & Gamified Elements - **Outputs index.html & Project Folders**.**

**使用说明:**

1.  **务必极其详细地提供你的 `prd.md` 文档和游戏 App 产品信息，即使 PRD 不完善，且可能包含颜色方案.**  信息越详细、越精准，AI 的研究和设计就越有方向性，越能生成极致高转化的游戏 App 落地页原型 (`index.html`).
2.  将此 Prompt 和你的 `prd.md` 文档 (以及补充的游戏 App 产品信息) 一起输入给 AI 模型. **请极其明确地告知 AI 模型，你需要其深度学习通用落地页和游戏落地页最佳实践 (as detailed in provided resources), 主动进行极致深入的研究和补充信息，生成极致高转化率的响应式游戏化 App 落地页 (`index.html`)，并在颜色方案选择上具有自主权，可以优化或替换 PRD 颜色方案.  **Crucially emphasize that the AI MUST DIRECTLY IMPLEMENT THE PROVIDED PRE-COMPUTED SUMMARY OF LANDING PAGE DESIGN PRACTICES across all design aspects of `index.html`, including headlines, CTAs, social proof, urgency, layout, and price presentation, **AND ENSURE THE GENERATED HTML (`index.html`) IS OPTIMIZED FOR SEO, PARTICULARLY WITH SEMANTIC HTML AND PROPER HEADING TAG USAGE (H1, H2, H3 ETC.), AND INCORPORATE GAMIFIED DESIGN ELEMENTS THROUGHOUT**.** Emphasize the importance of data-driven design based on game user research and conversion optimization studies, **NOW GUIDED AND IMPLEMENTING THE PRE-COMPUTED DESIGN SUMMARY AND SEO & GAME BEST PRACTICES AS CENTRAL GUIDELINES FOR `index.html`.**
3.  AI 模型将根据 Prompt 和极致深入的自主研究结果，生成包含 `index.html` 文件以及 `css/`, `js/`, `img/`, `locale/` 文件夹的项目结构，并输出 **极致详细的** `landing-page-brief.md` 文档.
4.  **极其仔细地审查生成的原型 (`index.html` 及相关资源) 和 `landing-page-brief.md` 文档,**  **重点评估以下几个方面:**
    *   **是否深度融入了通用 & 游戏最佳实践 & PRE-COMPUTED SUMMARY IMPLEMENTATION & SEO & GAME OPTIMIZATION in `index.html`?**  `landing-page-brief.md` 文档中是否提供了极致充分的论证和案例 **AND EXPLICITLY DEMONSTRATES DIRECT IMPLEMENTATION OF EACH POINT IN THE PRE-COMPUTED DESIGN SUMMARY, **AND CLEARLY JUSTIFIES SEO IMPLEMENTATION STRATEGIES AND GAME-SPECIFIC DESIGN CHOICES IN `index.html`**?**  **Is the design of `index.html` demonstrably and verifiably aligned with general and game landing page best practices AND THE PRE-COMPUTED DESIGN SUMMARY, **AND OPTIMIZED FOR SEO, AND INCORPORATING GAMIFIED ELEMENTS**, as detailed in the `landing-page-brief.md`?**
    *   **AI 的自主研究和设计决策是否合理？**  `landing-page-brief.md` 文档中是否提供了极致充分的理由和依据？ **Are AI's research and design decisions for `index.html` well-justified in the `landing-page-brief.md`, demonstrating a clear understanding of game users and conversion optimization principles AND DIRECT IMPLEMENTATION OF THE PRE-COMPUTED DESIGN SUMMARY, **AND SEO & GAME BEST PRACTICES**?**
    *   **响应式效果是否良好？**  在不同屏幕尺寸下测试落地页 (`index.html`) 的显示效果，特别是移动端游戏用户体验. **Is the landing page (`index.html`) truly responsive and mobile-first optimized for general web standards AND SEO MOBILE-FRIENDLINESS, AND OPTIMIZED FOR MOBILE GAME USERS?**
    *   **颜色方案选择是否恰当？**  是否符合游戏品牌调性和游戏用户偏好？如果替换了 PRD 颜色方案，理由是否充分？ **Is the color scheme choice for `index.html` justified, effective for conversion, AND ALIGNED WITH GENERAL & GAME VISUAL BEST PRACTICES, **AND CONTRIBUTES TO POSITIVE GAME USER EXPERIENCE FOR SEO**?**
    *   **落地页 (`index.html`) 的整体设计是否极致契合通用高转化落地页和游戏落地页的风格和策略 AND DIRECTLY IMPLEMENTING THE PRE-COMPUTED DESIGN SUMMARY, **AND OPTIMIZED FOR SEO AND GAME USER APPEAL**?** **Does the overall design of `index.html` convincingly and verifiably align with general and game landing page styles and strategies for high-conversion, AND DIRECTLY IMPLEMENT THE PRE-COMPUTED DESIGN SUMMARY, **AND IS IT DEMONSTRABLY SEO-FRIENDLY AND APPEALING TO GAME USERS**?**
    *   **Is the Price Section Design Effectively Implemented According to the Pre-computed Summary's Guidance in `index.html`?**  **Does the `landing-page-brief.md` document detail and justify the price section design in `index.html` and its direct implementation of the pre-computed price presentation strategies, including visual examples? **IS THE PRICE SECTION DESIGN OPTIMIZED FOR GAME USER EXPERIENCE AND CONVERSION, INDIRECTLY SUPPORTING SEO IN `index.html` AND GAME MONETIZATION?**
    *   **Is the HTML Output (`index.html`) SEO-Friendly?**  **Does the `landing-page-brief.md` document explicitly confirm and demonstrate that the generated HTML code (`index.html`) is SEO-friendly, utilizing semantic HTML structure and proper heading tag usage (H1, H2, H3 etc.)? **VERIFY PROPER HEADING TAG USAGE AND SEMANTIC HTML STRUCTURE IN THE GENERATED `index.html` CODE, WITH GAME-RELEVANT KEYWORDS.**
    *   **Is Page Speed Optimized for SEO and General Web Standards in `index.html`?** **Does the `landing-page-brief.md` document detail specific performance optimization strategies implemented for SEO page speed benefits and general web technical standards?  VERIFY PAGE SPEED OPTIMIZATION TECHNIQUES ARE IMPLEMENTED IN THE GENERATED HTML (`index.html`) (GAME IMAGE & VIDEO OPTIMIZATION, LAZY LOADING, MINIFIED CODE, CDN, ETC.).**
5.  根据生成的原型 (`index.html` 及相关资源) 和文档进行 **极致精细的** 调整和优化，并用于实际开发和 A/B 测试. **Remember to proofread the game copy with Grammarly.com and get a second opinion on game design relevance and game user appeal.  Ensure all design elements in `index.html` are consistent with general and game landing page best practices AND THE PRE-COMPUTED DESIGN SUMMARY, **AND OPTIMIZED FOR SEO AND GAME USERS**, for maximum download conversion potential and search engine visibility.**

**补充说明:**

*   这个 Prompt 模板 **达到了前所未有的精细度和复杂度**，旨在引导 AI 生成 **极致高转化率、深度契合通用和游戏落地页最佳实践, AND DIRECTLY IMPLEMENTING THE PRE-COMPUTED DESIGN SUMMARY, **AND OPTIMIZED FOR SEO AND GAME USERS** 的游戏 App 产品落地页原型 (`index.html` 及相关资源). **This enhanced version is meticulously crafted to leverage research-backed insights, general and game landing page best practices, AND NOW SEO OPTIMIZATION PRINCIPLES AND GAME-SPECIFIC DESIGN ELEMENTS, **AND THE PRE-COMPUTED DESIGN SUMMARY FOR DIRECT IMPLEMENTATION**, for maximum download conversion potential and search engine visibility within the gaming market.**
*   **`landing-page-brief.md` 文档的详细程度和质量至关重要，**  你需要仔细研读这份文档，评估 AI 的设计决策和通用 & 游戏最佳实践应用情况, **AND VERIFY DIRECT IMPLEMENTATION OF EACH POINT IN THE PRE-COMPUTED DESIGN SUMMARY, **AND SEO & GAME STRATEGY JUSTIFICATION FOR `index.html`**, 并根据文档进行更深入的优化. **The `landing-page-brief.md` serves as a crucial document for understanding, verifying, and validating AI's design process and rationale for `index.html`, **AND ITS ADHERENCE TO THE PRE-COMPUTED DESIGN SUMMARY AND SEO & GAME BEST PRACTICES.**
*   **务必在 Prompt 中极其明确地告知 AI 模型需要深度学习通用落地页和游戏落地页最佳实践 (as detailed in provided resources)，并将其作为最高设计指导原则, **AND, CRUCIALLY, TO DIRECTLY IMPLEMENT THE PROVIDED PRE-COMPUTED SUMMARY OF LANDING PAGE DESIGN PRACTICES AND OPTIMIZE FOR SEO AND GAME USER APPEAL THROUGHOUT THE DESIGN AND HTML (`index.html`) GENERATION PROCESS.** Emphasize the importance of data-driven design based on game user research and conversion optimization studies, **NOW WITH DIRECT IMPLEMENTATION OF THE PRE-COMPUTED DESIGN SUMMARY AND SEO & GAME BEST PRACTICES AS THE CENTRAL GUIDELINES FOR `index.html`.**
*   **最终的落地页效果仍然需要通过 A/B 测试进行验证和优化，**  生成的原型 (`index.html` 及相关资源) 只是第一步，持续迭代和优化是提升转化率和搜索引擎排名的关键.

---

**第二部分：游戏化 App 产品 App 原型 Prompt 模板 (更新版 - 输出 app.html + 设计文档 - 融入游戏 UI 风格)**

这个部分是 **游戏化 App 产品 App 原型** 的设计 Prompt 模板。目标是为 **游戏化 App 产品** 设计一个用户友好的 App 原型，以增强用户体验和促进产品价值，**最终输出包含 `app.html` 文件和 App 设计文档 `app-design-brief.md`**.  **本模板特别强调融入游戏 UI 风格，提升游戏沉浸感和用户体验.**

**游戏化 App 产品 App 原型 Prompt 模板 (用户体验优化版 - 功能自主扩展版 - PRD 不完善友好型 - 自主研究补充版 - 游戏 UI 风格融入版) - **Enhanced Version with User-Centric Design Focus & Feature Expansion & Game UI Style Integration - **Outputs app.html & Design Brief** **

**目标：**  即使 **提供的 `prd.md` 产品需求文档不完善 (可能信息量较少或存在缺失)**，AI 也将 **主动进行研究并补充必要信息，并根据用户需求自主扩展必要的功能**，设计一个 **用户体验极致友好且沉浸感强** 的 **游戏化 App 产品 App 原型** (iOS 或 Android 平台任选)，**提升用户参与度和产品价值**、**深度融入移动端用户体验最佳实践和游戏 UI 设计最佳实践**、採用成功 App 和游戏 App 策略，**兼容主流移动设备**，并输出可用于开发的 **App 原型 HTML 文件 (`app.html`) 和 App 设计文档 `app-design-brief.md`**. **无需生成独立的 iOS 和 Android 版本，只需一个通用 App 原型即可.** **This enhanced version is specifically designed based on research indicating that user-centric design, intuitive navigation, key feature focus, and brand consistency are key to boosting app engagement and user satisfaction, AND NOW EMPHASIZING GAME UI STYLES FOR ENHANCED IMMERSION AND USER EXPERIENCE, and is now DIRECTLY GUIDED by these principles.** **The final output will be an `app.html` file and a detailed app design brief document.**

**核心理念：**  **AI 不仅基于 PRD，更将主动进行市场调研、用户分析 (游戏用户画像)、竞品分析 (游戏 App UI/UX)，并深度学习移动端用户体验最佳实践和 **游戏 UI 设计最佳实践** (as detailed in provided resources) **AND NOW SPECIFICALLY IMPLEMENTING THE FOLLOWING PRINCIPLES OF USER-CENTRIC APP DESIGN AND FEATURE FOCUS, AND INTEGRATING GAME UI STYLES**, 弥补 PRD 信息不足，并有权在分析基础上，自主扩展或优化 App 功能，以确保 App 原型设计极致用户友好且沉浸感强，最大化用户参与度，采用通用 App 原型设计，完美适配主流移动设备，并深度契合游戏化 App 产品特点 AND **USER EXPECTATIONS FOR MOBILE APPS AND GAME UI/UX**.**  **在 PRD 信息缺失或设计需要优化时，AI 将以用户体验和游戏 UI 设计最佳实践为首要指导原则, **ENRICHED BY AND DIRECTLY IMPLEMENTING THE FOLLOWING USER-CENTRIC DESIGN PRINCIPLES AND FEATURE FOCUS STRATEGIES, **AND PRIORITIZING INTUITIVE NAVIGATION, BRAND CONSISTENCY, AND GAME UI STYLE INTEGRATION**, 结合移动端设计通用最佳实践、用户行为心理学、品牌调性、用户留存优化、**and insights from mobile user research and app conversion studies, AND GAME UI/UX RESEARCH**, 做出最有利于提升用户体验和产品价值的设计决策. **A streamlined approach focusing on key app features and intuitive user flows will be prioritized to maximize user engagement, as research suggests. **THE GENERATED APP PROTOTYPE (`app.html`) SHOULD BE INTUITIVE TO NAVIGATE, FOCUS ON CORE USER NEEDS AND PRODUCT VALUE PROPOSITION, AND INCORPORATE A COHESIVE AND IMMERSIVE GAME UI STYLE.**

**User-Centric Design Principles & Feature Focus & Game UI Style Guide (Direct Implementation Guide for AI):**




**请提供你的 `prd.md` 文档 (即使不完善)，以及尽可能详细的游戏 App 产品信息 (即使 PRD 中缺失，也请在 Prompt 中补充)，AI 将会：**

1.  **分析 `prd.md` 文档：**  尽力从中提取所有可用的游戏 App 产品信息、目标用户描述 (游戏用户画像)、品牌风格偏好 等.
2.  **自主研究补充信息：**  **当 `prd.md` 信息不足时，AI 将主动进行以下研究 (但不限于):**
    *   **游戏 App 市场调研：**  基于游戏 App 产品名称和核心卖点，进行市场调研，了解游戏市场规模、趋势、用户需求 (游戏用户偏好)、竞争格局 (游戏 App UI/UX) 等. **Research should include analysis of successful game apps in the same genre and UI style research.**
    *   **目标游戏用户深度分析：**  基于 PRD 中已有的目标用户描述 (即使很简略)，进行更深入的游戏用户分析，包括：游戏用户画像细化、游戏用户痛点深度挖掘、游戏用户移动端游戏使用习惯和 UI 偏好分析. **This will include understanding game user mobile usage patterns, UI preferences, and genre-specific expectations to inform app design.**
    *   **竞品 App & 游戏 App 分析：**  主动搜索和分析竞争对手的 App 和同类型游戏 App, **NOW DIRECTLY GUIDED BY THE PRE-COMPUTED PRINCIPLES OF USER-CENTRIC APP DESIGN AND FEATURE FOCUS, AND INTEGRATING GAME UI STYLE CONSIDERATIONS**, 深入研究其功能特点、用户体验和 **游戏 UI 设计风格**. **Analyze competitor apps and game apps for best practices in UI/UX, navigation, feature implementation, AND GAME UI STYLE IMPLEMENTATION.**
    *   **移动端用户体验 & 游戏 UI 设计最佳实践 **深度** 学习：**  进行 **更深入、更系统化** 的移动端用户体验和游戏 UI 设计最佳实践学习, **NOW DIRECTLY IMPLEMENTING THE ABOVE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES AND FEATURE FOCUS STRATEGIES, AND PRIORITIZING INTUITIVE NAVIGATION, BRAND CONSISTENCY, AND GAME UI STYLE INTEGRATION**, **重点研究以下游戏 App 成功的关键要素 (based on provided research, common characteristics of successful game apps, GAME UI/UX BEST PRACTICES, AND THE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES & GAME UI STYLE GUIDE ABOVE):**
        *   **直观的导航和用户流程 (Intuitive Navigation & User Flows):**  **Implement simple and clear navigation, streamline key user flows, and use visual hierarchy for information clarity, as per the pre-computed principles. Ensure navigation is intuitive within the chosen game UI style.**
        *   **核心功能聚焦和价值体现 (Key Feature Focus & Value Proposition):**  突出 App 的核心功能 (游戏核心玩法)，并清晰地展现 App 如何为游戏用户提供价值 (游戏乐趣、沉浸感、挑战性)，与产品落地页形成互补. **Focus on core app features that enhance game value, prioritize essential features, and avoid feature creep, directly implementing the feature focus principles from the summary. Ensure core game features are presented within the chosen game UI style.**
        *   **用户参与和个性化体验 (User Engagement & Personalized Experience):**  考虑游戏用户个性化需求，设计互动性和参与性强的 App 元素 (游戏化交互)，提供清晰的用户反馈和进度指示 (游戏反馈机制). **Incorporate personalized game user experiences, interactive and engaging game elements, and clear feedback/progress indicators, directly applying the user engagement principles from the summary. Implement user engagement elements within the chosen game UI style.**
        *   **品牌一致性和游戏化视觉设计 (Brand Consistency & Gamified Visual Design - Game UI Style Integration):**  保持 App 视觉设计与产品落地页和品牌形象的一致性，采用 **与游戏主题和类型相符的游戏 UI 设计风格**，并优化视觉元素以适应移动设备. **Maintain brand consistency with the landing page, adopt a game-appropriate UI design style (chosen from the guide), and use mobile-optimized visual elements, directly implementing the brand consistency and visual design principles from the summary. Ensure the chosen game UI style is consistently applied throughout the app prototype.**
        *   **流畅的游戏用户操作和响应速度 (Smooth Game User Operations & Responsiveness):**  确保 App 操作流畅，响应迅速，避免卡顿和延迟，提升游戏用户体验. **Optimize app performance for smooth game user operations and responsiveness, ensuring a seamless and enjoyable mobile gaming experience.**
        *   **移动端平台特性利用 (Leveraging Mobile Platform Features - Game Context):**  考虑利用移动端平台的特性，例如：推送通知 (游戏活动通知)、地理位置服务 (LBS 游戏玩法)、设备传感器 (体感游戏) 等，增强 App 功能和游戏体验 (如果适用). **Consider leveraging mobile platform features (push notifications, location services, sensors) to enhance game app functionality and user experience where relevant and appropriate for the game genre.**
    *   **游戏用户行为心理学研究 (Game User Behavior & App Usage Patterns):**  研究游戏用户在移动端 App 中的行为心理学，了解游戏用户的使用习惯、游戏偏好和痛点. **Research game user behavior psychology in mobile apps to understand game usage patterns, game preferences, and pain points specific to game users and the chosen game genre.**
    *   **品牌调性和游戏风格分析 (Brand Consistency in App Design & Game UI Style):**  分析游戏产品品牌调性和游戏风格，确保 App 设计风格与品牌形象和游戏风格相符，并与落地页保持一致性，**并选择最契合游戏风格的 UI 风格**. **Ensure app design style aligns with game brand identity and maintains consistency with the landing page, AND THAT THE CHOSEN GAME UI STYLE IS APPROPRIATE FOR THE GAME GENRE AND TARGET AUDIENCE.**
    *   **移动端 UI/UX & 游戏 UI 设计最佳实践应用 (Mobile UI/UX & Game UI Best Practices):**  学习和应用移动端 UI/UX 设计和 **游戏 UI 设计** 的通用最佳实践，确保游戏 App 原型用户友好和沉浸感强. **Adhere to mobile UI/UX design and GAME UI DESIGN best practices for intuitive and user-friendly, and IMMERSIVE app interfaces.**
    *   **通用 & 游戏 App 通用最佳实践应用 (General & Game App Best Practices):**  学习和应用通用 App 设计和 **游戏 App 设计** 的通用最佳实践. **Implement general app and GAME APP best practices to optimize user experience and engagement within the game app.**

**(Continue with sections 2, 3, 4, 5, 6 and Game App Style Optimization Checklist, ensuring all sections are updated to reflect the new pre-computed principles implementation, user-centric design focus, and game UI style integration.)**

**4、App 原型实现 (用户体验优化 + 功能模块实现 + 品牌 & 游戏风格应用 + 响应式布局 + **User-Friendly & Game-Immersive Prototype Output**):**

*   **最终输出：包含 `app.html` 文件和设计文档 `app-design-brief.md`。** The final output will be an `app.html` file and an app design brief document `app-design-brief.md`.
*   **App 原型 (`app.html`) 需要尽可能用户友好，易于理解和操作，突出核心功能和游戏流程，并 **极致融入所选游戏 UI 风格**. **AND MUST BE INTUITIVE, FOCUS ON KEY USER NEEDS AND GAMEPLAY, AND IMMERSIVE IN ITS GAME UI STYLE**. AI 需要在 `app-design-brief.md` 文档中，简述其原型实现策略，以及如何确保用户友好性、游戏沉浸感和 **游戏 UI 风格的有效应用** **AND USER-CENTRIC DESIGN AND GAME UI STYLE IMPLEMENTATION**. **Prioritize clear and simple UI elements, intuitive navigation, a focus on core game user tasks, AND CONSISTENT GAME UI STYLE APPLICATION in `app.html`.**
*   **原型工具选择 (Figma/Sketch/Adobe XD 等 - 考虑游戏 UI 风格):**  使用 Figma, Sketch, Adobe XD 或其他专业的原型设计工具，快速创建 App 原型， **并选择适合实现所选游戏 UI 风格的工具**. **Choose a prototyping tool that allows for efficient creation of interactive and user-friendly app prototypes, AND IS SUITABLE FOR IMPLEMENTING THE CHOSEN GAME UI STYLE.**
*   **线框图或低保真原型优先 (快速迭代游戏功能和 UI):**  初期原型可以以线框图或低保真原型为主，快速迭代和验证游戏功能和 **游戏 UI 风格** 设计方案. **Start with wireframes or low-fidelity prototypes for rapid iteration and design validation, focusing on game user flow, key features, AND GAME UI STYLE exploration first.**
*   **模块化 & 游戏化 UI 设计:**  采用模块化设计方法，将 App 界面拆分成可复用的模块，方便设计和维护，**并采用游戏化 UI 设计原则，将 UI 元素设计成游戏内的元素**. **Implement modular design principles to create reusable UI components and facilitate design consistency and maintainability, AND INCORPORATE GAMIFIED UI ELEMENTS THAT FIT THE CHOSEN GAME UI STYLE.**
*   **响应式布局 (适配主流设备 - 游戏用户设备):**  设计响应式布局，确保 App 原型 (`app.html`) 在主流移动设备上都能良好显示，**并针对游戏用户常用的设备进行优化**. **Ensure responsive design principles are applied to adapt the app prototype (`app.html`) to various screen sizes of mainstream mobile devices, AND OPTIMIZE FOR DEVICES COMMONLY USED BY GAME USERS.**
*   **交互设计 (用户反馈 - 游戏化反馈):**  在原型 (`app.html`) 中加入基本的交互设计，例如：按钮点击反馈、页面切换动画等，提升用户体验，**并采用游戏化反馈机制，例如：粒子特效、音效、动画等，增强游戏沉浸感**. **Incorporate basic interactions and user feedback mechanisms (button clicks, page transitions) to enhance user experience and prototype usability in `app.html`, AND UTILIZE GAMIFIED FEEDBACK MECHANISMS (PARTICLE EFFECTS, SOUND EFFECTS, ANIMATIONS) TO ENHANCE GAME IMMERSION.**
*   **性能考量 (流畅度 - 游戏流畅性):**  原型设计需要考虑性能，避免过度复杂的动画和效果，确保原型运行流畅，**并模拟游戏运行的流畅度**. **Consider performance implications in prototype design, avoiding overly complex animations or effects to ensure smooth prototype performance, AND AIM TO SIMULATE GAME SMOOTHNESS AND RESPONSIVENESS.**
*   **品牌 & 游戏风格一致性 (Visual Consistency & Game UI Style):**  App 原型 (`app.html`) 设计需要与游戏产品品牌风格保持一致，包括颜色、字体、图标等，**并极致贯彻所选的游戏 UI 风格，确保整体视觉风格的统一性和沉浸感**. **Maintain visual consistency with game product brand style, including colors, fonts, and icons, ensuring brand identity is reflected in the app prototype (`app.html`), AND CONSISTENTLY APPLY THE CHOSEN GAME UI STYLE FOR VISUAL COHESION AND IMMERSION.**

**6、生成 app-design-brief.md 文档 (极致详细版 - 突出 AI 自主研究、用户体验优化、功能扩展决策、移动端最佳实践和 **游戏 UI 风格** 应用 - **Enhanced Detail & Justification & User-Centric Approach & Game UI Style Integration**):**

*   **极致详细版需求文档 `app-design-brief.md`:**  生成 `app-design-brief.md` 文档，**需要提供前所未有的详细程度，不仅要记录 App 原型 (`app.html`) 的所有设计决策，更要极致详细地记录 AI 在 PRD 信息不足时，如何进行自主研究、分析和决策 (游戏用户分析、竞品游戏 App UI/UX 分析)，如何实现用户体验优化和游戏沉浸感，如何进行功能扩展和优化，以及 **最重要的是，如何深度融入和应用移动端用户体验最佳实践和游戏 UI 设计最佳实践, and how research on game user behavior and app usage patterns, **AND SPECIFICALLY THE PRE-COMPUTED PRINCIPLES OF USER-CENTRIC APP DESIGN AND FEATURE FOCUS, AND THE CHOSEN GAME UI STYLE**, informed the design of `app.html`**.**  文档 `app-design-brief.md` 需要包含:
    *   **PRD 信息分析概要:**  简述从 `prd.md` 中提取的关键游戏 App 产品信息和信息缺失情况.
    *   **AI 自主研究报告:**  详细描述 AI 进行的游戏 App 市场调研, **INCLUDING ANALYSIS OF SUCCESSFUL GAME APPS AND GAME UI STYLE RESEARCH**, 游戏用户分析 **(including mobile game user behavior analysis and UI preferences)**、竞品 App & 游戏 App 分析 **(INCLUDING UI/UX AND GAME UI STYLE ANALYSIS)** 等研究过程和结果. **Detail how game user research and app conversion studies AND MOBILE GAME APP & GAME UI RESEARCH were incorporated in the design of `app.html`.**
    *   **移动端用户体验 & 游戏 UI 设计最佳实践学习报告:**  **极其详细地描述 AI 如何学习和理解移动端用户体验和游戏 UI 设计最佳实践，包括学习资源、学习方法、学习成果, **AND HOW THE PRE-COMPUTED PRINCIPLES OF USER-CENTRIC APP DESIGN AND FEATURE FOCUS AND THE CHOSEN GAME UI STYLE GUIDE WERE USED AS A DIRECT IMPLEMENTATION GUIDE**. 总结的成功 App 关键要素 (需与 Prompt 中列出的要素一致).  **Provide specific examples of apps AND GAME APPS that were analyzed (if applicable beyond general research) and how their best practices, **AND SPECIFICALLY ELEMENTS FROM THE PRE-COMPUTED PRINCIPLES AND THE CHOSEN GAME UI STYLE**, were adopted in `app.html`.**
    *   **功能扩展决策依据:**  详细说明 AI 如何基于游戏用户需求和游戏产品价值，自主扩展 App 功能，并提供决策理由和依据. **Justify feature expansion decisions for `app.html` based on game user needs, game product value proposition, and mobile game app best practices, considering the chosen GAME UI STYLE.**
    *   **游戏 UI 风格选择 justification:**  **极其详细地 justification AI 选择的游戏 UI 风格 (从 Prompt 提供的 11 种风格中选择) ，并说明选择该风格的原因和优势，以及如何与游戏产品的主题、类型和目标用户相契合. EXPLICITLY AND IN DETAIL JUSTIFY THE CHOSEN GAME UI STYLE (FROM THE 11 STYLES PROVIDED IN THE PROMPT), EXPLAINING THE RATIONALE AND ADVANTAGES OF THIS CHOICE, AND HOW IT ALIGNS WITH THE GAME PRODUCT'S THEME, GENRE, AND TARGET AUDIENCE.**
    *   **设计决策依据:**  针对每个关键设计决策 (例如：导航设计、界面布局、功能模块设计、交互设计、视觉风格 (游戏 UI 风格)、响应式策略、**移动端 & 游戏 UI 最佳实践应用, User-Centric Approach, Feature Focus, Brand Consistency, INTUITIVE NAVIGATION, USER FLOW OPTIMIZATION, GAME UI STYLE INTEGRATION**) ， **极其详细地** 说明 AI 的决策理由和依据. **务必清晰地指出每个设计决策是如何基于用户体验和游戏 UI 设计最佳实践的，并引用具体的移动端和游戏 UI 设计原则或案例作为支撑. Explicitly state how game user understanding, intuitive navigation, key feature focus, brand consistency, **AND USER-CENTRIC DESIGN PRINCIPLES AND THE CHOSEN GAME UI STYLE FROM THE GUIDE** informed each design decision for `app.html`. **Specifically detail how the pre-computed principles and chosen GAME UI STYLE were directly implemented in each design aspect of `app.html` AND HOW GAME USER EXPERIENCE CONSIDERATIONS WERE ADDRESSED IN EACH SECTION, WITHIN THE CHOSEN GAME UI STYLE FRAMEWORK.**
    *   **界面布局和导航设计详解:**  详细描述 App 的界面布局和导航设计策略， **并详细说明如何确保导航的直观性和用户流程的流畅性，以及如何将这些设计融入到所选的游戏 UI 风格中. Detail navigation design strategies and how intuitive navigation and streamlined user flows are achieved in `app.html`, referencing the pre-computed principles for navigation, AND HOW THESE ARE REALIZED WITHIN THE CHOSEN GAME UI STYLE.**
    *   **功能模块设计详解和游戏价值体现:**  详细描述 App 的核心功能模块设计， **并详细说明如何通过功能模块体现游戏产品的用户价值 (游戏核心玩法)，与落地页形成互补，并确保功能模块的 UI 设计与所选游戏 UI 风格一致. Detail the design of core app feature modules and how they enhance game product value proposition (core gameplay), complementing the landing page, referencing the feature focus principles from the summary, AND ENSURING FEATURE MODULE UI DESIGN ALIGNS WITH THE CHOSEN GAME UI STYLE.**
    *   **交互设计策略详解和游戏化用户反馈机制:**  详细描述 App 的交互设计策略， **并详细说明如何通过交互设计提供清晰的用户反馈 (游戏化反馈)，提升游戏用户操作体验和沉浸感，并确保交互设计与所选游戏 UI 风格协调一致. Explain interactive design strategies and game-themed user feedback mechanisms implemented to enhance game user experience, usability, and immersion in `app.html`, referencing the user engagement principles from the summary, AND ENSURING INTERACTIVE DESIGN IS CONSISTENT WITH THE CHOSEN GAME UI STYLE.**
    *   **视觉风格决策详解和品牌 & 游戏风格一致性:**  详细描述 App 的视觉风格决策过程，包括：品牌调性分析、颜色方案 (基于游戏 UI 风格)、字体选择 (游戏字体)、图标设计 (游戏化图标) 等， **并详细说明如何保持 App 视觉风格与游戏产品品牌和落地页的一致性，以及如何极致贯彻所选的游戏 UI 风格，实现视觉风格的统一性和沉浸感. Justify visual style choices for `app.html` based on brand tonality, game genre, color psychology (within the chosen game UI style), and mobile UI best practices, referencing the brand consistency principles from the summary AND THE CHOSEN GAME UI STYLE GUIDE. Explain how visual consistency with the landing page and brand is maintained, AND HOW THE CHOSEN GAME UI STYLE IS CONSISTENTLY APPLIED FOR VISUAL UNITY AND IMMERSION.**
    *   **响应式设计策略详解和移动端适配:**  详细描述 AI 采用的响应式设计策略和技术， **确保 App 原型 (`app.html`) 在主流移动设备上的良好适配，并针对游戏用户常用的设备进行优化，同时保持游戏 UI 风格的响应式效果. Detail responsive design strategies and techniques used to ensure app prototype (`app.html`) adaptability across mainstream mobile devices, AND OPTIMIZATION FOR DEVICES COMMONLY USED BY GAME USERS, WHILE MAINTAINING RESPONSIVENESS OF THE CHOSEN GAME UI STYLE.**
    *   **技术实现策略简述和原型工具选择:**  简述 App 原型的技术实现策略， **并说明选择的原型设计工具，以及选择该工具的原因 (例如：更适合实现所选游戏 UI 风格). Briefly describe the technical implementation strategy for the app prototype (`app.html`) and justify the choice of prototyping tool, AND EXPLAINING WHY THE CHOSEN TOOL IS SUITABLE FOR IMPLEMENTING THE SELECTED GAME UI STYLE.**
    *   **性能优化策略:**  简述原型设计中考虑的性能优化策略， **确保游戏 App 原型运行流畅，响应迅速，并提供流畅的游戏体验模拟**. **Detail performance optimization strategies considered in prototype design to ensure smooth operation and responsiveness of the game app prototype (`app.html`), AND TO SIMULATE A SMOOTH GAMING EXPERIENCE.**

**游戏 App 风格优化 Checklist (AI 自主研究、决策、用户体验优化、功能扩展、移动端最佳实践和 **游戏 UI 风格** 应用验证) - **Enhanced Checklist & Direct Principles & User-Centric & Game UI Verification** **:

*   ✅ **用户体验至上 & 游戏沉浸感 (AI 极致目标):**  设计目标是 **极致提升游戏用户体验和游戏沉浸感**，所有设计决策都必须服务于这个目标， **并以移动端用户体验和游戏 UI 设计最佳实践为最高指导原则 and the pre-computed user-centric design principles AND CHOSEN GAME UI STYLE as a direct implementation guide for `app.html`.**
*   ✅ **深度融入移动端 & 游戏最佳实践 & Pre-computed Principles & Game UI Implementation:**  App 原型设计 (`app.html`) 必须深度融入移动端用户体验和游戏 UI 设计最佳实践 **AND DIRECTLY IMPLEMENT THE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES AND THE CHOSEN GAME UI STYLE**, 并体现在各个方面 (导航、布局、功能、交互、视觉 (游戏 UI 风格) 等).  `app-design-brief.md` 文档需要 **极致详细地** 论证移动端和游戏 UI 最佳实践的应用情况 **AND DEMONSTRATE DIRECT IMPLEMENTATION OF EACH POINT IN THE PRE-COMPUTED PRINCIPLES AND THE CHOSEN GAME UI STYLE, **AND EXPLICITLY DETAIL USER-CENTRIC DESIGN AND GAME UI STYLE STRATEGIES IN `app.html`**.**
*   ✅ **游戏用户需求驱动 (AI 自主挖掘 + 移动端游戏用户习惯 + Principles & Game UI Implementation):**  AI 主动挖掘 **游戏用户** 在移动端的使用需求和游戏偏好，并在 App 原型 (`app.html`) 中进行 **极致** 用户需求满足， **借鉴成功游戏 App 的用户需求策略 AND DIRECTLY IMPLEMENTING USER-CENTRIC DESIGN PRINCIPLES FROM THE PRE-COMPUTED SUMMARY, **AND FOCUSING ON INTUITIVE NAVIGATION, KEY GAME FEATURES, AND APPROPRIATE GAME UI STYLE**.** **Focus on game user needs and pain points in mobile game app usage, **AND ENSURE KEY GAME FEATURES IN `app.html` ADDRESS THESE NEEDS AND ARE PRESENTED WITHIN THE CHOSEN GAME UI STYLE**.**
*   ✅ **核心游戏功能聚焦 (AI 自主扩展 + 核心游戏功能突出 + Principles & Game UI Implementation):**  AI 主动扩展 App 功能，但 **极致聚焦** 于核心 **游戏** 功能，突出游戏产品价值 (游戏乐趣，沉浸感)， **借鉴成功游戏 App 的功能策略 AND DIRECTLY IMPLEMENTING FEATURE FOCUS PRINCIPLES FROM THE PRE-COMPUTED SUMMARY, **AND PRIORITIZING ESSENTIAL GAME FEATURES AND PRESENTING THEM WITHIN THE CHOSEN GAME UI STYLE**.** **App prototype (`app.html`) focuses on core game features that enhance game product value, avoiding feature creep, as per summary recommendations. **ESSENTIAL GAME FEATURES ARE PRIORITIZED FOR INITIAL PROTOTYPE IN `app.html` AND DESIGNED WITH THE CHOSEN GAME UI STYLE**.**
*   ✅ **直观导航 & 游戏化导航 (AI 自主设计 + 移动端导航模式 + Game UI Principles Implementation):**  AI 自主设计直观易用的 **游戏化** 导航系统， **深度契合移动端游戏用户导航习惯，并极致简化用户操作流程，且完全融入所选游戏 UI 风格 AND DIRECTLY IMPLEMENTING INTUITIVE NAVIGATION GUIDELINES FROM THE PRE-COMPUTED SUMMARY, **AND STREAMLINING KEY GAME USER FLOWS, AND REALIZING NAVIGATION ELEMENTS WITHIN THE CHOSEN GAME UI STYLE**.** **Simple and clear **game-themed** navigation is prioritized, using common mobile navigation patterns (adapted to the game UI style), as per summary guidelines. **KEY GAME USER FLOWS ARE STREAMLINED FOR MINIMAL STEPS AND FRICTION IN `app.html`, WITHIN THE CHOSEN GAME UI STYLE**.**
*   ✅ **简洁 & 游戏化界面 (AI 自主设计 + 移动端界面风格 + Simple & Clean & Gamified UI + Game UI Principles Implementation):**  AI 自主设计简洁清晰且 **游戏化** 的界面风格， **极致优化界面布局和信息呈现 (游戏信息)，借鉴成功游戏 App 的界面风格 AND DIRECTLY IMPLEMENTING CLEAN & MODERN UI DESIGN PRINCIPLES FROM THE PRE-COMPUTED SUMMARY, **AND MAINTAINING VISUAL HIERARCHY FOR GAME INFORMATION CLARITY, AND CONSISTENTLY APPLYING THE CHOSEN GAME UI STYLE**.** **UI design of `app.html` is clean, modern, visually appealing, AND GAME-THEMED, appropriate for target game audience and game genre, adhering to summary guidelines for visual style AND THE CHOSEN GAME UI STYLE. **VISUAL HIERARCHY IS USED FOR GAME INFORMATION CLARITY AND SCANNABILITY WITHIN THE CHOSEN GAME UI STYLE**.**
*   ✅ **品牌 & 游戏风格一致性 (AI 自主策略 + 品牌 & 游戏风格统一 + Brand & Game Consistency + Game UI Principles Implementation):**  AI 自主设计品牌和 **游戏风格** 一致性策略， **极致强化 App 原型 (`app.html`) 与游戏产品品牌和落地页的风格统一性，并确保完美契合所选游戏 UI 风格. Brand consistency is maintained with the landing page and overall game brand identity, DIRECTLY IMPLEMENTING BRAND CONSISTENCY PRINCIPLES FROM THE PRE-COMPUTED SUMMARY, **AND EXTREMELY EMPHASIZING CONSISTENCY AND APPROPRIATENESS OF THE CHOSEN GAME UI STYLE THROUGHOUT THE APP PROTOTYPE (`app.html`). **APP VISUAL DESIGN (`app.html`) ALIGNS WITH LANDING PAGE AND GAME BRAND IDENTITY, AND PERFECTLY EMBODIES THE CHOSEN GAME UI STYLE**.**
*   ✅ **游戏用户参与 & 沉浸感 (AI 自主策略 + 互动 & 游戏化元素 + Game UI Principles Implementation - **Game User Engagement & Immersion**):**  AI 自主设计游戏用户参与策略， **借鉴成功游戏 App 的互动和游戏化元素，并在 App 原型 (`app.html`) 中极致提升用户参与度和游戏沉浸感 AND DIRECTLY IMPLEMENTING USER ENGAGEMENT PRINCIPLES FROM THE PRE-COMPUTED SUMMARY (PERSONALIZED EXPERIENCE, INTERACTIVE ELEMENTS, FEEDBACK/PROGRESS INDICATORS), **AND MAXIMIZING GAME IMMERSION THROUGH THE CHOSEN GAME UI STYLE AND GAME-APPROPRIATE INTERACTION MECHANISMS**.** **GAME USER ENGAGEMENT IS ENHANCED THROUGH PERSONALIZATION, INTERACTIVITY, AND CLEAR FEEDBACK MECHANISMS IN `app.html`, ALL WITHIN THE FRAMEWORK OF THE CHOSEN IMMERSIVE GAME UI STYLE**.**
*   ✅ **响应式设计 (通用标准 + 移动端适配 - 游戏用户设备):**  生成响应式 App 原型 (`app.html`)，适配主流移动设备， **极致重视移动端游戏用户体验，并针对游戏用户常用设备进行优化. **APP PROTOTYPE (`app.html`) IS RESPONSIVE AND ADAPTABLE TO MAINSTREAM MOBILE DEVICES, AND OPTIMIZED FOR DEVICES COMMONLY USED BY GAME USERS**.**
*   ✅ **性能优化 (通用标准 + 移动端流畅度 - 游戏流畅性):**  App 原型 (`app.html`) 性能 **极致优化**，确保运行流畅，响应迅速，**并模拟流畅的游戏体验**. **APP PROTOTYPE (`app.html`) PERFORMANCE IS EXTREMELY OPTIMIZED FOR SMOOTH OPERATION AND RESPONSIVENESS ON MOBILE DEVICES, AND TO SIMULATE A SEAMLESS AND RESPONSIVE GAMING EXPERIENCE**.**
*   ✅ **AI 自主研究和决策透明度:**  `app-design-brief.md` 文档 **极致详细地** 记录 AI 的自主研究过程、设计决策和依据 **(包括功能扩展决策、游戏 UI 风格选择和移动端 & 游戏 UI 最佳实践应用, AND DIRECT IMPLEMENTATION OF THE PRE-COMPUTED PRINCIPLES AND THE CHOSEN GAME UI STYLE, **AND USER-CENTRIC & GAME UI DESIGN STRATEGY JUSTIFICATION FOR `app.html`**)**. **Document details how game user research and app usage pattern studies, AND THE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE, informed design decisions for `app.html`. **EXPLICITLY JUSTIFY USER-CENTRIC DESIGN AND GAME UI STYLE STRATEGIES IMPLEMENTED IN EACH SECTION OF THE APP PROTOTYPE (`app.html`)**.**
*   ✅ **响应式设计策略透明度:**  `app-design-brief.md` 文档 **极致详细地** 记录 AI 采用的响应式设计策略和技术 **(包括移动端适配方案和游戏 UI 风格的响应式实现) for `app.html`**. **DOCUMENTATION DETAILS RESPONSIVE DESIGN STRATEGIES AND MOBILE ADAPTATION TECHNIQUES FOR THE APP PROTOTYPE (`app.html`), AND HOW THE CHOSEN GAME UI STYLE IS MAINTAINED RESPONSIVELY**.**
*   ✅ **功能扩展 justification:**  **`app-design-brief.md` 文档必须详细论证 App 的功能扩展决策，并提供充分的理由和优势说明. Document provides detailed justification for app feature expansion decisions for `app.html`, explaining rationale and benefits in the context of the game product and chosen UI style.**
*   ✅ **移动端 & 游戏最佳实践应用 & Principles & Game UI Implementation Justification:**  **`app-design-brief.md` 文档必须详细论证 App 原型 (`app.html`) 设计是如何深度融入和应用移动端用户体验和游戏 UI 设计最佳实践 AND THE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE, 并提供具体的案例和分析. Document provides specific examples of apps AND GAME APPS analyzed (if applicable) and **EXPLICITLY DEMONSTRATES HOW EACH POINT OF THE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES AND THE CHOSEN GAME UI STYLE WAS DIRECTLY IMPLEMENTED IN THE GENERATED APP PROTOTYPE (`app.html`), **AND HOW MOBILE & GAME UI BEST PRACTICES ALIGN WITH USER-CENTRIC DESIGN AND GAME IMMERSION GOALS**.**
*   ✅ **User-Friendly & Game-Immersive Prototype Output Verification:** **`app-design-brief.md` document explicitly confirms that the generated App prototype (`app.html`) is user-friendly and intuitive, focusing on key game user needs and core game functionalities, AND IMMERSIVE IN ITS GAME UI STYLE. Prototype (`app.html`) is designed for ease of use, clear game-themed navigation, AND GAME IMMERSION.**
*   ✅ **Performance Optimization for Mobile & Game Smoothness:** **`app-design-brief.md` document details performance optimization strategies considered for mobile app prototype (`app.html`) smoothness and responsiveness, AND TO SIMULATE A SMOOTH GAMING EXPERIENCE. Prototype (`app.html`) is designed for optimal performance on mobile devices and a seamless game user experience.**
*   ✅ **Game UI Style Implementation Verification:** **`app-design-brief.md` document explicitly confirms that the generated App prototype (`app.html`) fully and consistently implements the chosen Game UI Style (魔幻风格, 科技风格, 东方风格, 休闲风格, 二次元风格, 极简主义风格, 复古风格, 写实/拟真风格, 卡通渲染/3D卡通风格, 恐怖风格, 蒸汽朋克).  Provide visual examples and detailed descriptions to verify the consistent and effective implementation of the chosen Game UI style in `app.html`.**

**请提供你的 `prd.md` 文档 (即使不完善)，以及尽可能详细的游戏 App 产品信息 (即使 PRD 中缺失，也请在 Prompt 中补充)，AI 将会基于这些信息，进行极致深入的自主研究和设计，为你 \[你的游戏 App 产品名称] 设计 **用户体验极致友好且沉浸感强的游戏化 App 产品 App 原型** (用户体验优化版 - 功能自主扩展版 - PRD 不完善友好型 - 自主研究补充版 - 游戏 UI 风格融入版) - **Enhanced Version with User-Centric Design Focus & Feature Expansion & Game UI Style Integration - **Outputs app.html & Design Brief**.**

**使用说明:**

1.  **务必极其详细地提供你的 `prd.md` 文档和游戏 App 产品信息，即使 PRD 不完善.**  信息越详细、越精准，AI 的研究和设计就越有方向性，越能生成极致用户友好且沉浸感强的游戏 App 原型 (`app.html`).
2.  将此 Prompt 和你的 `prd.md` 文档 (以及补充的游戏 App 产品信息) 一起输入给 AI 模型. **请极其明确地告知 AI 模型，你需要其深度学习移动端用户体验和游戏 UI 设计最佳实践 (as detailed in provided resources), 主动进行极致深入的研究和补充信息，生成极致用户友好且沉浸感强的游戏 App 原型 (`app.html`)，并在功能设计上具有自主权，可以扩展或优化 App 功能，并 **极致贯彻和实现所选的游戏 UI 风格**.  **Crucially emphasize that the AI MUST DIRECTLY IMPLEMENT THE PROVIDED PRE-COMPUTED PRINCIPLES OF USER-CENTRIC APP DESIGN AND FEATURE FOCUS across all design aspects of `app.html`, including navigation, features, UI/UX, and brand consistency, **AND ENSURE THE GENERATED APP PROTOTYPE (`app.html`) IS INTUITIVE, USER-FRIENDLY, AND EXTREMELY IMMERSIVE THROUGH THE CONSISTENT AND EFFECTIVE APPLICATION OF THE CHOSEN GAME UI STYLE**.** Emphasize the importance of data-driven design based on game user research and mobile game app best practices, **NOW GUIDED AND IMPLEMENTING THE PRE-COMPUTED DESIGN PRINCIPLES AND THE CHOSEN GAME UI STYLE AS CENTRAL GUIDELINES FOR `app.html`.** You MUST also explicitly instruct AI to choose **ONE** Game UI style from the provided list (e.g., "Please choose **科技风格** Game UI for the App Prototype").**
3.  AI 模型将根据 Prompt 和极致深入的自主研究结果，生成 App 原型文件 (`app.html`) 和 **极致详细的** `app-design-brief.md` 文档.
4.  **极其仔细地审查生成的原型 (`app.html`) 和 `app-design-brief.md` 文档,**  **重点评估以下几个方面:**
    *   **是否深度融入了移动端 & 游戏最佳实践 & PRE-COMPUTED PRINCIPLES & GAME UI IMPLEMENTATION in `app.html`?**  `app-design-brief.md` 文档中是否提供了极致充分的论证和案例 **AND EXPLICITLY DEMONSTRATES DIRECT IMPLEMENTATION OF EACH POINT IN THE PRE-COMPUTED PRINCIPLES AND THE CHOSEN GAME UI STYLE, **AND CLEARLY JUSTIFIES USER-CENTRIC DESIGN AND GAME UI STYLE STRATEGIES IN `app.html`**?**  **Is the design of `app.html` demonstrably and verifiably aligned with mobile app and game app best practices AND THE PRE-COMPUTED PRINCIPLES AND CHOSEN GAME UI STYLE, as detailed in the `app-design-brief.md`?**
    *   **AI 的自主研究和设计决策是否合理？**  `app-design-brief.md` 文档中是否提供了极致充分的理由和依据？ **Are AI's research and design decisions for `app.html` well-justified in the `app-design-brief.md`, demonstrating a clear understanding of game user experience, mobile game app design principles AND DIRECT IMPLEMENTATION OF THE PRE-COMPUTED DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE?**
    *   **App 原型 (`app.html`) 的用户体验是否极致友好且沉浸感强？**  是否易于导航、操作流畅、信息清晰？ **Is the app prototype (`app.html`) truly user-friendly and intuitive, with easy navigation, smooth operation, and clear information presentation, AND EXTREMELY IMMERSIVE IN ITS GAME UI STYLE?**
    *   **功能扩展决策是否合理？**  扩展的功能是否符合游戏用户需求和游戏产品价值，并与所选游戏 UI 风格相符？ **Are app feature expansion decisions for `app.html` justified and aligned with game user needs and game product value proposition, AND CONSISTENT WITH THE CHOSEN GAME UI STYLE?**
    *   **App 原型 (`app.html`) 的整体设计是否极致契合通用 & 游戏 App 的最佳实践和用户期望 AND DIRECTLY IMPLEMENTING THE PRE-COMPUTED DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE?** **Does the overall design of `app.html` convincingly and verifiably align with general and game app best practices and user expectations AND DIRECTLY IMPLEMENT THE PRE-COMPUTED DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE, **AND IS IT DEMONSTRABLY USER-CENTRIC AND GAME-IMMERSIVE**?**
    *   **Is the App Prototype Output (`app.html`) User-Friendly & Game-Immersive?**  **Does the `app-design-brief.md` document explicitly confirm and demonstrate that the generated App prototype (`app.html`) is user-friendly and intuitive, focusing on key game user needs and core game functionalities, AND IMMERSIVE IN ITS GAME UI STYLE? VERIFY USER-FRIENDLINESS, INTUITIVENESS, AND GAME IMMERSIVENESS OF THE GENERATED APP PROTOTYPE (`app.html`).**
    *   **Is Performance Optimized for Mobile & Game Smoothness?** **Does the `app-design-brief.md` document detail performance optimization strategies considered for mobile app prototype (`app.html`) smoothness and responsiveness, AND TO SIMULATE A SMOOTH GAMING EXPERIENCE? VERIFY PERFORMANCE OPTIMIZATION CONSIDERATIONS ARE REFLECTED IN THE APP PROTOTYPE DESIGN (`app.html`) FOR A SEAMLESS GAME USER EXPERIENCE.**
    *   **Is the Chosen Game UI Style Effectively and Consistently Implemented?** **Does the `app-design-brief.md` document explicitly confirm and demonstrate that the generated App prototype (`app.html`) fully and consistently implements the chosen Game UI Style (魔幻风格, 科技风格, 东方风格, 休闲风格, 二次元风格, 极简主义风格, 复古风格, 写实/拟真风格, 卡通渲染/3D卡通风格, 恐怖风格, 蒸汽朋克)? **VERIFY CONSISTENT AND EFFECTIVE IMPLEMENTATION OF THE CHOSEN GAME UI STYLE THROUGHOUT THE GENERATED APP PROTOTYPE (`app.html`) AND DOCUMENTATION.**
5.  根据生成的原型 (`app.html`) 和文档进行 **极致精细的** 调整和优化，并用于实际开发和用户测试. **Remember to get game user feedback on the app prototype (`app.html`) and iterate on design based on game user testing.  Ensure all design elements in `app.html` are consistent with mobile game app best practices AND THE PRE-COMPUTED DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE, **AND FOCUSED ON USER-CENTRICITY AND GAME IMMERSION**, for maximum game user engagement and product value.**

**补充说明:**

*   这个 Prompt 模板 **达到了前所未有的精细度和复杂度**，旨在引导 AI 生成 **极致用户友好、深度契合移动端和游戏 App 最佳实践, AND DIRECTLY IMPLEMENTING THE PRE-COMPUTED USER-CENTRIC DESIGN PRINCIPLES AND A CHOSEN IMMERSIVE GAME UI STYLE 的游戏 App 产品 App 原型 (`app.html` 及设计文档). **This enhanced version is meticulously crafted to leverage research-backed insights, mobile game app best practices, AND NOW USER-CENTRIC DESIGN PRINCIPLES AND GAME UI STYLE INTEGRATION, **AND THE PRE-COMPUTED DESIGN PRINCIPLES AND GAME UI STYLE GUIDE FOR DIRECT IMPLEMENTATION**, for maximum game user engagement and product value.**
*   **`app-design-brief.md` 文档的详细程度和质量至关重要，**  你需要仔细研读这份文档，评估 AI 的设计决策和移动端 & 游戏 App 最佳实践应用情况, **AND VERIFY DIRECT IMPLEMENTATION OF EACH POINT IN THE PRE-COMPUTED DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE, **AND USER-CENTRIC & GAME UI DESIGN STRATEGY JUSTIFICATION FOR `app.html`**, 并根据文档进行更深入的优化. **The `app-design-brief.md` serves as a crucial document for understanding, verifying, and validating AI's design process and rationale for `app.html`, **AND ITS ADHERENCE TO THE PRE-COMPUTED DESIGN PRINCIPLES, CHOSEN GAME UI STYLE, AND GAME APP BEST PRACTICES.**
*   **务必在 Prompt 中极其明确地告知 AI 模型需要深度学习移动端用户体验和游戏 UI 设计最佳实践 (as detailed in provided resources)，并将其作为最高设计指导原则, **AND, CRUCIALLY, TO DIRECTLY IMPLEMENT THE PROVIDED PRE-COMPUTED PRINCIPLES OF USER-CENTRIC APP DESIGN AND FEATURE FOCUS AND CHOSEN GAME UI STYLE AND OPTIMIZE FOR USER-CENTRICITY AND GAME IMMERSION THROUGHOUT THE DESIGN AND PROTOTYPE (`app.html`) GENERATION PROCESS.** Emphasize the importance of data-driven design based on game user research and mobile game app best practices, **NOW WITH DIRECT IMPLEMENTATION OF THE PRE-COMPUTED DESIGN PRINCIPLES AND CHOSEN GAME UI STYLE AS THE CENTRAL GUIDELINES FOR `app.html`.** **Also, explicitly instruct AI to choose ONE Game UI style from the provided list in your prompt.**
*   **最终的 App 效果仍然需要通过游戏用户测试进行验证和优化，**  生成的原型 (`app.html`) 只是第一步，持续迭代和优化是提升游戏用户体验和产品价值的关键.

请仔细检查更新后的 **游戏化 App 产品落地页 Prompt 模板** 和 **游戏化 App 产品 App 原型 Prompt 模板**，特别是新增的 **游戏化元素** 和 **游戏 UI 风格** 相关部分，以及 **Checklist** 和 **使用说明** 部分，确认是否完全符合你的需求，是否还有需要修改或完善的地方。 如果没有问题，这两个更新后的 Prompt 模板就可以用于生成 **游戏化 App 产品** 的落地页和 App 原型了。

ref
>https://aistudio.google.com/prompts/1BSKVLYmXutS9_GKdXD9X9-e7PWokVir2