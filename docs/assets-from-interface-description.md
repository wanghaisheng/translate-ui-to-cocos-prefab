Okay, this is a meta-level prompting challenge! You want a prompt for an AI (like me, or potentially a more specialized text-processing AI) to take a detailed UI *interface description* (like the ones we've been creating) and transform it into the structured CSV format we just designed for generating individual UI assets.

This requires the AI to:

1.  **Understand the structure of the input interface description.**
2.  **Identify distinct visual elements within that description.**
3.  **Extract or infer properties for each element** (description, approximate position, layer, transparency needs).
4.  **Formulate a concise AI image generation prompt for *each individual element***, specifically designed to produce a transparent PNG with no internal text.
5.  **Output this information in CSV format.**

This is a complex task for a general-purpose LLM, and the quality of the output will heavily depend on the clarity and consistency of the input interface description. It might require some post-processing or manual refinement.

Here's a prompt designed to guide an AI (like a powerful LLM) to perform this conversion. This prompt itself will be quite detailed.

---

**Prompt for AI to Generate UI Element CSV from Interface Description:**

```
You are an expert UI/UX Deconstructor and AI Art Prompt Engineer. Your task is to take a detailed description of a game UI screen (specifically a "Level Info Popup" for a mobile game called "《救救熊猫》" with a Chinese ink wash painting style) and break it down into individual, distinct visual components. For each component, you need to generate a row for a CSV file.

The CSV file should have the following columns:
"Element ID (Unique)", "Description (For Human understanding)", "Layer Order (zIndex)", "Position X (Relative to Popup)", "Position Y (Relative to Popup)", "Width (Approx. % of Popup)", "Height (Approx. % of Popup)", "Transparency (Yes/No/Partial)", "AI Image Prompt (For Transparent PNG, No Text)", "Notes/Styling Cues"

**Input:** I will provide you with a detailed textual description of the "Level Info Popup" screen.

**Your Task - For EACH distinct visual element you identify in the input description, you must:**

1.  **Assign a Unique `Element ID`:** Use a descriptive, snake_case ID (e.g., `popup_title_graphic`, `panda_sad_illustration`, `herb_icon_ginseng`, `primary_action_button`).
2.  **Write a `Description (For Human understanding)`:** A brief explanation of what this element is.
3.  **Determine `Layer Order (zIndex)`:** Estimate its stacking order (0 for base, higher numbers on top). Backgrounds are usually 0 or 1. Foreground elements higher.
4.  **Estimate `Position X (Relative to Popup)` and `Position Y (Relative to Popup)`:** Use descriptive terms like "Center", "Top", "Bottom", "Left", "Right", "Below [another element ID]", "Right of [another element ID]", or approximate percentage-based coordinates if implied (e.g., "Top 10%", "Left 5%"). Assume the popup itself is the reference frame.
5.  **Estimate `Width (Approx. % of Popup)` and `Height (Approx. % of Popup)`:** Provide an approximate percentage of the overall popup dimensions this element might occupy.
6.  **Determine `Transparency (Yes/No/Partial)`:**
    *   "Yes": Element should have a fully transparent background (e.g., icons, characters meant to be overlaid).
    *   "No": Element is opaque (e.g., the main popup background itself).
    *   "Partial": Element might have semi-transparent parts (e.g., a subtle overlay texture).
7.  **Formulate `AI Image Prompt (For Transparent PNG, No Text)`:** This is the most critical part.
    *   The prompt must be designed to generate **ONLY that specific, isolated visual element.**
    *   It MUST instruct the AI to generate the image with a **transparent background** (e.g., "Transparent background. PNG format.").
    *   It MUST **strictly prohibit any legible text, words, letters, numbers, or typography** within the generated image itself.
    *   It should describe the element's visual appearance, style (Chinese ink wash painting, Shui Mo Hua), and any key details from the input description.
    *   For elements that *represent* text (like placeholders), the prompt should describe a *graphical representation* of that space (e.g., "soft horizontal ink lines," "empty outlined rectangle").
    *   Focus on visual descriptors: "artistic," "stylized," "iconic," "graphical," "silhouette," "outline," "texture."
8.  **Add `Notes/Styling Cues`:** Any extra details, reminders for the artist/developer, or specific style notes derived from the input description.

**Example of how to process a part of the input description:**

If the input says: "At the top, a prominent title area with artistic ink brush strokes, like traditional calligraphy, but no actual words."

Your CSV row for this element might be:
`title_area_gfx`, `Abstract calligraphic title graphic`, `1`, `Center`, `Top`, `60%`, `10%`, `Yes`, `Artistic, abstract calligraphic ink brush strokes, forming elegant, flowing shapes reminiscent of traditional title calligraphy. Strictly no legible characters or letters. Transparent background. Shui Mo Hua style. PNG.`, `Should look like a title placeholder, purely graphical.`

**Important Considerations for your output:**

*   **Breakdown Granularity:** Be reasonably granular. A button is one element. An icon on the button (if distinct) might be another if it needs to be layered or changed independently, though often a button graphic includes its icon. A list of herbs should have each herb icon, each name placeholder, and each quantity graphic as separate elements if they need to be individually positioned and sourced.
*   **Placeholder for Dynamic Data:** For areas where game data (like herb names, quantities, panda status text) will be displayed, generate prompts for the *visual background or placeholder* for that data, NOT the data itself. The actual text will be rendered by the game engine.
*   **Consistency:** Maintain a consistent style for IDs and descriptions.
*   **Focus on "No Text":** Reiterate in each AI image prompt that no text should be generated.
*   **Assume Standard Popup Structure:** Unless the description specifies otherwise, assume a reasonably standard popup layout (title at top, content in middle, buttons at bottom).

**Now, I will provide the detailed input description for the "Level Info Popup." Please process it and generate the CSV output according to these instructions.**

---
**(You would then paste the detailed "Level Info Popup" description here for the AI to process.)**
---

**Self-Correction/Refinement Instructions for the AI (if it makes mistakes):**

*   "If you generated an AI Image Prompt that describes more than one distinct visual element, please break it down further."
*   "If an AI Image Prompt might still lead to the AI generating text, please rephrase it to focus only on visual shapes and abstract forms, and reinforce the 'no text' and 'transparent background' requirements."
*   "Ensure all `Element ID`s are unique and in snake_case."
*   "Double-check that `Transparency` is set to 'Yes' for most overlay elements like icons, characters, and text placeholders."
*   "For elements that are 'placeholders' for text, ensure the AI prompt describes a *graphical* representation (e.g., ink lines, empty shapes) and not the concept of text itself."

This detailed prompt sets clear expectations for the AI. It's still a challenging task that might require some human oversight and editing of the generated CSV, especially for the AI image prompts, but it provides a strong framework for the AI to attempt the conversion.

```


# assets from screenshot

好的，如果你的输入是**界面图片**而不是文字描述，那么驱动AI为你生成CSV的提示词需要进行重大的改造。这种情况下，AI的角色将从“理解文字并拆解”转变为“**视觉分析并拆解**”。这通常需要具备多模态理解能力的AI模型（能够同时处理图像和文本）。

假设我们使用的AI具备这种能力（例如GPT-4V，或未来更强大的模型），提示词需要引导它：

1.  **分析图片中的UI布局和视觉元素。**
2.  **识别出独立的、可分离的UI组件。**
3.  **为每个组件推断其属性**（描述、大致位置、图层顺序等）。
4.  **为每个组件生成一个用于“再创作”或“提取为带透明背景素材”的AI图像提示词**（这个提示词的目标是生成一个干净的、独立的、无背景的该组件版本）。
5.  **输出CSV。**

以下是改造后的提示词，假设输入是一张界面图片：

---

**Prompt for AI to Generate UI Element CSV from an Interface IMAGE:**

```
You are an expert UI/UX Deconstructor and AI Art Prompt Engineer with advanced visual analysis capabilities. Your task is to analyze the provided game UI screen IMAGE and break it down into its individual, distinct visual components. For each component you identify, you need to generate a row for a CSV file.

The CSV file should have the following columns:
"Element ID (Unique)", "Description (For Human understanding)", "Layer Order (zIndex)", "Position X (Approx. % of Screen from Left)", "Position Y (Approx. % of Screen from Top)", "Width (Approx. % of Screen)", "Height (Approx. % of Screen)", "Transparency (Yes/No/Partial)", "AI Image Prompt (To RECREATE this element as a Transparent PNG, No Text)", "Notes/Styling Cues"

**Input:** I will provide you with an IMAGE of a game UI screen (from the game "《救救熊猫》" which has a Chinese ink wash painting style).

**Your Task - For EACH distinct visual element you identify in the provided IMAGE, you must:**

1.  **Assign a Unique `Element ID`:** Use a descriptive, snake_case ID based on the element's appearance and function (e.g., `popup_background_texture`, `main_title_brushstrokes`, `panda_sad_illustration_01`, `herb_icon_ginseng_map`, `primary_action_button_seal_style`).
2.  **Write a `Description (For Human understanding)`:** A brief explanation of what this visual element is, based on your analysis of the image.
3.  **Determine `Layer Order (zIndex)`:** Estimate its stacking order based on how elements overlap in the image (0 for base, higher numbers on top).
4.  **Estimate `Position X (Approx. % of Screen from Left)` and `Position Y (Approx. % of Screen from Top)`:** Based on the visual position in the image, estimate its top-left corner's X and Y coordinates as a percentage of the total screen width and height.
5.  **Estimate `Width (Approx. % of Screen)` and `Height (Approx. % of Screen)`:** Estimate the element's dimensions as a percentage of the total screen width and height.
6.  **Determine `Transparency (Yes/No/Partial)`:**
    *   "Yes": If the element appears to be an overlay with a clear transparent background in its original design intent (e.g., icons, characters).
    *   "No": If the element is opaque (e.g., a solid background panel).
    *   "Partial": If the element has inherent semi-transparent parts (e.g., a wispy cloud effect, a semi-transparent overlay).
7.  **Formulate `AI Image Prompt (To RECREATE this element as a Transparent PNG, No Text)`:** This is the most critical part.
    *   The prompt's goal is to generate a **clean, isolated version of THIS SPECIFIC visual element from the input image**, suitable for use as an asset with a transparent background.
    *   It MUST instruct the AI to generate the image with a **transparent background** (e.g., "Transparent background. PNG format.").
    *   It MUST **strictly prohibit any legible text, words, letters, numbers, or typography** if the original element in the image *appears* to be purely graphical or a placeholder for text. If the original element *contains actual, clearly legible text that is part of its design (e.g., a logo with stylized text)*, then the prompt MAY describe that stylized text visually (e.g., "stylized calligraphic forms spelling [GameName]"), but the primary goal is to avoid AI-hallucinated text. For UI elements that are clearly meant to *contain dynamic game text* (like score displays, name labels), the prompt should be for the *background graphic/placeholder* of that text area, with NO text.
    *   The prompt should meticulously describe the element's **visual appearance as seen in the input image**: its shape, color, texture, style (Chinese ink wash painting, Shui Mo Hua), and any unique details.
    *   Focus on "recreate this visual element," "extract this graphic asset."
8.  **Add `Notes/Styling Cues`:** Any extra details observed from the image, reminders for recreation, or specific style notes (e.g., "has a soft outer glow," "ink strokes are very expressive," "color is a muted jade green").

**Example of how to process a visual element from an image:**

If the input IMAGE shows a red button with a gold border and a small, abstract bamboo icon on it (but no actual text like "Start"):

Your CSV row for this element might be:
`action_button_red_bamboo`, `Red action button with gold border and bamboo icon`, `3`, `40%`, `85%`, `20%`, `8%`, `Yes`, `A red, rounded rectangular UI button element with a thin gold border, featuring a small, stylized white bamboo shoot icon in its center. Chinese ink wash accents. Strictly no text or letters. Transparent background. PNG.`, `Icon is simple, almost a silhouette. Red is a deep crimson.`

**Important Considerations for your output (based on image analysis):**

*   **Element Segmentation:** Accurately identify and segment distinct visual elements from the image. This is the hardest part for the AI.
*   **Inferring Intent:** For areas with text in the input image, you need to infer if this text is static (part of the art) or dynamic (game data).
    *   If **dynamic game text** (e.g., a score "12345", a player name "PandaHero"), the AI Image Prompt should be for the **background or placeholder graphic** where this text is displayed, explicitly stating "no text" for that graphic. The actual text "12345" is data, not part of the asset to be generated.
    *   If **static, stylized text that IS the art** (e.g., the game logo itself), the AI Image Prompt *may* describe the visual appearance of these stylized forms.
*   **Recreating Style:** The AI Image Prompts should aim to capture the *style* (ink wash, colors, textures) of the element as seen in the input image.
*   **Transparency by Default:** Most UI elements layered on a background should have `Transparency: Yes`.

**Now, I will provide an IMAGE of a game UI screen. Please analyze it and generate the CSV output according to these instructions.**

---
**(You would then ideally be able to UPLOAD or PROVIDE a LINK to the interface image for the AI to process.)**
---

**Self-Correction/Refinement Instructions for the AI (if it makes mistakes based on image input):**

*   "The element you identified as `[Element ID]` in the image actually seems to be two separate elements: `[New Element ID 1]` and `[New Element ID 2]`. Please split it."
*   "The AI Image Prompt for `[Element ID]` needs to better capture its [specific visual detail, e.g., a subtle gradient, the texture] as seen in the input image."
*   "The text 'Score: 100' in the input image is dynamic game data. The AI Image Prompt for `score_display_background` should be for the background panel only, with no text."
*   "Please ensure all generated AI Image Prompts strongly emphasize creating assets with transparent backgrounds."

This modified prompt is tailored for a multimodal AI. The success will heavily depend on the AI's visual understanding capabilities. For current widely available LLMs without direct, sophisticated image analysis for this specific task, you might need to:

1.  **Manually segment the image yourself first.**
2.  **For each segmented part, provide *that smaller image segment* to the AI along with a prompt to describe *it* and generate a recreation prompt for *it*.** This breaks the problem down.

Or, more practically, you would use this CSV structure yourself, manually analyze the image, and then write the AI image prompts for each identified element. The AI's role would then be to *generate the individual assets* based on *your* carefully crafted prompts for each piece.








# 使用方法


好的，一旦你有了一个**新的界面描述** (例如，我们之前设计的“游戏主界面”、“胜利/失败页面”、“商店页面”等)，你可以按照以下步骤来使用我们刚刚精心设计的“生成UI元素CSV的提示词”：

**使用流程：**

1.  **准备新的界面描述：**
    *   确保你的新界面描述是详细的、清晰的，并且也遵循了“避免在描述中直接提及图片内文字”的原则（即，描述的是视觉元素和布局，而非图片上要渲染的文字内容）。
    *   这个新的界面描述将成为你提供给AI的**主要输入内容**。

2.  **复制并粘贴“生成UI元素CSV的提示词”：**
    *   将我们之前设计好的那个长提示词（包含“You are an expert UI/UX Deconstructor...”开头的那段）完整地复制下来。

3.  **组合输入：**
    *   在一个新的对话或输入框中，首先粘贴我们设计好的**“生成UI元素CSV的提示词”**。
    *   紧接着，在其下方，明确地指出这是新的输入描述，然后粘贴你准备好的**新的界面描述文本**。

    **示例结构：**

    ```
    [粘贴完整的“生成UI元素CSV的提示词” - 从 "You are an expert UI/UX Deconstructor..." 开始，一直到 "...Please process it and generate the CSV output according to these instructions." 结束]

    ---
    INPUT INTERFACE DESCRIPTION BELOW:
    ---

    [在这里粘贴你为“新界面”（例如“游戏主界面”）准备的详细文字描述]

    ---
    END OF INPUT INTERFACE DESCRIPTION.
    ---

    Please generate the CSV output for the interface description provided above. Remember to follow all instructions regarding element breakdown, AI image prompt formulation (transparent background, no text), and CSV column structure.
    ```

4.  **提交给AI (例如 ChatGPT-4 或类似能力的模型)：**
    *   将组合好的完整内容提交给AI。

5.  **审阅和优化输出：**
    *   **检查CSV结构：** AI生成的CSV是否严格按照了我们定义的列名 (`Element ID (Unique)`, `Description (For Human understanding)`, `Layer Order (zIndex)`, etc.)？
    *   **检查元素拆分：** AI是否合理地将新界面描述拆分成了独立的视觉组件？有没有遗漏？有没有拆分得过细或过粗？
    *   **检查AI图像提示词：**
        *   **核心！** 这是最需要人工干预的地方。
        *   每个元素的AI图像提示词是否**清晰、准确地描述了该独立元素**？
        *   是否明确指示了**透明背景 (Transparent background. PNG.)**？
        *   是否**严格禁止了文字 (Strictly no legible text, words, letters...)**？
        *   提示词是否能引导AI生成符合水墨画风的、独立的、可用于图层叠加的素材？
        *   对于代表文字区域的“占位符”图形，提示词是否描述的是“墨线”、“空白区域的轮廓”等视觉表现，而不是文字本身？
    *   **检查位置和尺寸估算：** `Position X/Y` 和 `Width/Height (Approx. % of Popup/Screen)` 是否大致合理？这些通常需要根据实际设计图进行精确调整，AI的估算只是一个起点。
    *   **检查图层顺序 (`Layer Order`)：** 是否符合视觉叠加的逻辑？
    *   **补全与修正：** 你可能需要手动修改或补充AI生成的CSV内容，特别是优化AI图像提示词，使其更精准。例如，AI可能为所有“药材图标”生成了一个通用的提示词，你需要为每种具体药材（如“人参图标”、“薄荷叶图标”）分别定制提示词。

6.  **迭代 (如果需要)：**
    *   如果AI的初步输出偏差较大，你可以复制它的回答，指出具体问题，然后要求它根据你的反馈进行修正。例如：
        *   “你为`button_start_game`生成的AI图像提示词中，没有明确禁止文字，请修正。”
        *   “`panda_status_area`这个元素太大了，请将其拆分为`panda_icon`和`status_text_placeholder_graphic`两个独立的元素行。”
        *   “所有药材图标的AI图像提示词都一样，请为`herb_icon_ginseng`和`herb_icon_mint`分别生成更具体的提示词，描述它们各自的形态。”

**关键点：**

*   **清晰的输入描述是前提：** 你提供给AI的新界面描述越清晰、越结构化、越侧重视觉元素，AI就越容易准确地拆分并生成CSV。
*   **AI是辅助工具：** 将AI的输出视为一个**初稿或起点**。人工的审查、优化和修正，特别是对AI图像提示词的打磨，是保证最终素材质量的关键。
*   **针对性调整：** 不同的界面有不同的元素和布局特点。你可能需要在我们设计的那个“总提示词”的基础上，针对特定类型的界面（如全屏地图 vs. 弹窗）在组合输入时做一些微小的引导性补充。例如，如果新界面不是弹窗而是全屏，那么“Relative to Popup”可能需要调整为“Relative to Screen”。

通过这个流程，你可以有效地利用我们设计的“元提示词”来处理各种新的界面描述，系统地生成用于模块化UI开发的CSV数据和AI图像生成提示。

