好的，这是一个为满足您需求的中间 UI JSON 格式的完整定义。

这个定义的**目标**是：

1.  **引擎无关性:** 足够通用，能够描述大多数 UI 场景，并且可以被转化为 Unity (uGUI/UI Toolkit), Cocos Creator, Unreal Engine (UMG) 的原生结构。
2.  **结构化:** 清晰地表达 UI 的层级关系。
3.  **布局明确:** 包含足够的布局信息，以在不同引擎中重建相似的布局。
4.  **样式可描述:** 能够定义常见的视觉样式。
5.  **组件化:** 支持常见的 UI 组件类型及其特定属性。
6.  **资源关联:** 清晰地引用所需的图像和字体资源。

```json
{
  "version": "1.0.0", // JSON 格式的版本号
  "metadata": {
    "sourceType": "Figma | PSD | Image | HTML | Other", // 设计稿来源类型
    "sourceFile": "path/to/design/file.fig", // 来源文件名或标识
    "exportTimestamp": "2023-10-27T10:30:00Z", // 导出时间
    "toolVersion": "MyUITool/1.2.0" // 生成此 JSON 的工具版本 (可选)
  },
  "assets": [ // 项目所需的所有资源列表
    {
      "id": "asset_img_button_bg_normal", // 唯一资源 ID，在 element 中引用
      "type": "Image", // "Image" | "Font"
      "path": "assets/images/button_bg_normal.png", // 相对 JSON 文件的资源路径
      // Image specific properties:
      "imageType": "Sliced", // "Simple" | "Sliced" | "Tiled" | "Filled" (默认 Simple)
      "sliceBorders": { // 九宫格边界 (像素值, 仅当 imageType 为 Sliced 时有效)
        "left": 10,
        "top": 10,
        "right": 10,
        "bottom": 10
      }
    },
    {
      "id": "asset_img_button_bg_pressed",
      "type": "Image",
      "path": "assets/images/button_bg_pressed.png",
      "imageType": "Sliced",
      "sliceBorders": { "left": 10, "top": 10, "right": 10, "bottom": 10 }
    },
    {
      "id": "asset_font_main",
      "type": "Font",
      "path": "assets/fonts/MyCustomFont.ttf" // 支持 ttf, otf
    },
    {
      "id": "asset_icon_search",
      "type": "Image",
      "path": "assets/icons/search.png"
    }
  ],
  "rootElement": { // UI 层级的根节点
    // --- Core Element Properties (适用于所有元素) ---
    "id": "root_panel_123", // 元素唯一 ID
    "name": "MainLoginPanel", // 元素名称 (来自图层名或生成)
    "type": "Panel", // 标准化元素类型 (见下方列表)
    "active": true, // 是否默认激活/可见 (对应 Unity GameObject.activeSelf, Cocos Node.active, UE Widget Visibility)

    // --- Layout Properties ---
    "rect": { // 元素自身的基础矩形区域 (相对于父节点)
      "x": 0,       // 左上角 X 坐标 (像素)
      "y": 0,       // 左上角 Y 坐标 (像素)
      "width": 800, // 宽度 (像素)
      "height": 600 // 高度 (像素)
    },
    "layout": {
      "anchors": { // 归一化锚点 (0-1 范围, 相对于父节点) - 决定元素如何随父节点缩放/定位
        "minX": 0.0, // 左边锚点
        "minY": 0.0, // 底部锚点 (注意: Cocos/Unity Y轴可能向上/向下, 需要导入器处理) - 这里假设 (0,0) 是左下角
        "maxX": 1.0, // 右边锚点
        "maxY": 1.0  // 顶部锚点
      },
      "margins": { // 从锚点到元素边界的距离 (像素) - 用于拉伸和固定边距
        "left": 10,
        "bottom": 10,
        "right": 10,
        "top": 10
        // 如果 anchors 定义了一个点 (minX=maxX, minY=maxY), margins 定义的是固定宽高偏移
        // 如果 anchors 定义了一个区域, margins 定义的是到父容器相应边的距离
      },
      "pivot": { // 元素自身的轴心点 (0-1 范围, 0,0 左下角, 0.5,0.5 中心, 0,1 左上角) - 影响定位和旋转/缩放基准
        "x": 0.5,
        "y": 0.5
      },
      "layoutGroup": null // 如果为 null, 则子元素使用各自的 anchors/margins 自由布局. 否则定义容器布局:
      // "layoutGroup": {
      //   "type": "Vertical", // "Vertical" | "Horizontal" | "Grid"
      //   "padding": { "left": 5, "top": 5, "right": 5, "bottom": 5 }, // 容器内边距
      //   "spacing": 10, // 子元素间距
      //   "childAlignment": "MiddleCenter", // 子元素在容器内的对齐方式 (e.g., "UpperLeft", "MiddleCenter", "LowerRight")
      //   "controlChildWidth": true, // 容器是否控制子元素宽度 (Layout Group 特有)
      //   "controlChildHeight": true, // 容器是否控制子元素高度
      //   "forceExpandWidth": false, // 子元素是否强制填满容器宽度
      //   "forceExpandHeight": false, // 子元素是否强制填满容器高度
      //   // Grid Specific:
      //   "constraint": "FixedColumnCount", // "FixedColumnCount" | "FixedRowCount"
      //   "constraintCount": 3, // 列数或行数
      //   "cellSize": { "width": 100, "height": 100 } // 固定单元格大小 (可选)
      // }
    },

    // --- Style Properties ---
    "style": {
      "opacity": 1.0, // 透明度 (0.0 - 1.0)
      "colorTint": "#FFFFFFFF", // 整体颜色叠加 (适用于 Image, Panel 等) (Hex: AARRGGBB or RRGGBB)
      "backgroundImage": null, // "asset_id_ref" (引用 assets 中的 ID)
      // "backgroundImageScaleMode": "Stretch" // "Stretch" | "Tile" | "Center" (如果需要)

      // --- Text Specific Style (仅当 type 为 Text 时有效) ---
      "text": {
        "content": "登录", // 文本内容
        "fontAssetId": "asset_font_main", // 引用 assets 中的字体 ID (必需)
        "fontSize": 24, // 字号
        "color": "#FF333333", // 文本颜色 (Hex: AARRGGBB or RRGGBB)
        "horizontalAlign": "Center", // "Left" | "Center" | "Right"
        "verticalAlign": "Middle", // "Top" | "Middle" | "Bottom"
        "style": "Normal", // "Normal" | "Bold" | "Italic" | "BoldAndItalic"
        "lineSpacing": 1.0, // 行间距 (倍数)
        "wrapping": "Wrap", // "None" | "Wrap" (是否换行)
        "overflow": "Overflow", // "Overflow" | "Truncate" | "ResizeHeight" (文本超出范围时的处理)
        "autoSize": false // 是否根据内容自动调整大小 (可能影响 Rect/Layout)
      }
    },

    // --- Component Specific Properties ---
    "componentProps": { // 根据 'type' 包含不同的特定属性
      // Example for Button:
      // "Button": {
      //   "interactable": true,
      //   "transitionType": "SpriteSwap", // "None" | "ColorTint" | "SpriteSwap"
      //   "targetGraphicRef": "asset_img_button_bg_normal", // 主要视觉表现的 Asset ID (可选, 通常是背景 Image)
      //   "states": {
      //     "normal": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FFFFFFFF" },
      //     "highlighted": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FFF0F0F0" }, // Hover
      //     "pressed": { "spriteAssetId": "asset_img_button_bg_pressed", "color": "#FFCCCCCC" },
      //     "selected": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FFFFFFFF" }, // Toggle state
      //     "disabled": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FF888888" }
      //   }
      // }
      // Example for InputField:
      // "InputField": {
      //   "contentType": "Standard", // "Standard" | "Password" | "Email" | "IntegerNumber" | "DecimalNumber"
      //   "lineType": "SingleLine", // "SingleLine" | "MultiLineSubmit" | "MultiLineNewline"
      //   "characterLimit": 0, // 0 for no limit
      //   "placeholderText": "请输入用户名...",
      //   "placeholderColor": "#FF808080",
      //   "placeholderFontAssetId": "asset_font_main", // 可选, 默认使用 Text 组件字体
      //   "textComponentRef": "child_text_id_124" // 关联的 Text 子元素的 ID (必需)
      //   "backgroundImageRef": "asset_input_bg_id" // 背景图片的 Asset ID (可选)
      // }
      // Example for ScrollView:
      // "ScrollView": {
      //    "contentRef": "child_content_panel_id", // 可滚动内容的根元素 ID (必需)
      //    "direction": "Vertical", // "Vertical" | "Horizontal" | "Both"
      //    "inertia": true, // 是否有惯性
      //    "elastic": true, // 是否有回弹效果
      //    "horizontalScrollbar": { // 可选
      //        "visibility": "Auto", // "Auto" | "Always" | "Never"
      //        "handleRef": "scrollbar_h_handle_id", // 滑块元素 ID
      //        "containerRef": "scrollbar_h_container_id" // 滚动条背景元素 ID
      //    },
      //    "verticalScrollbar": { // 可选
      //        "visibility": "Auto",
      //        "handleRef": "scrollbar_v_handle_id",
      //        "containerRef": "scrollbar_v_container_id"
      //    }
      // }
      // Example for Image: (可能不需要额外属性, 已在 style 中定义)
      // "Image": {}
    },

    // --- Children ---
    "children": [ // 子元素数组, 递归定义 UIElement 结构
      {
        "id": "child_text_id_124",
        "name": "LoginButtonText",
        "type": "Text",
        "active": true,
        "rect": { "x": 0, "y": 0, "width": 180, "height": 40 }, // 通常子元素 x,y 是相对父元素 (0,0)
        "layout": {
          "anchors": { "minX": 0.5, "minY": 0.5, "maxX": 0.5, "maxY": 0.5 }, // 居中锚定
          "margins": { "left": -90, "bottom": -20, "right": 90, "top": 20 }, // 定义宽高 (90*2=180, 20*2=40)
          "pivot": { "x": 0.5, "y": 0.5 }
        },
        "style": {
          "opacity": 1.0,
          "colorTint": "#FFFFFFFF",
          "backgroundImage": null,
          "text": {
            "content": "登 录",
            "fontAssetId": "asset_font_main",
            "fontSize": 30,
            "color": "#FFFFFFFF",
            "horizontalAlign": "Center",
            "verticalAlign": "Middle",
            "style": "Bold",
            "lineSpacing": 1.0,
            "wrapping": "None",
            "overflow": "Overflow",
            "autoSize": false
          }
        },
        "componentProps": {},
        "children": [] // Text 元素通常没有子元素
      },
      // ... 其他子元素 ...
    ]
  }
}

// --- 标准化 Element Type 列表 (可扩展) ---
// "Panel": 通用容器, 通常带有背景 Image/Color. (Unity: Image/Panel, Cocos: Node+Sprite/Graphics, UE: Border/Image)
// "Image": 显示图片资源. (Unity: Image/RawImage, Cocos: Sprite, UE: Image)
// "Text": 显示文本. (Unity: TextMeshProUGUI, Cocos: Label, UE: TextBlock)
// "Button": 可交互按钮. (Unity: Button+Image/Text, Cocos: Button+Node(Sprite/Label), UE: Button+Border/TextBlock)
// "Input": 文本输入框. (Unity: InputField(TMP), Cocos: EditBox, UE: TextBox/EditableText)
// "ScrollView": 滚动视图区域. (Unity: ScrollRect, Cocos: ScrollView, UE: ScrollBox)
// "Slider": 滑动条. (Unity: Slider, Cocos: Slider, UE: Slider)
// "Toggle": 开关/复选框. (Unity: Toggle, Cocos: Toggle, UE: CheckBox)
// "ProgressBar": 进度条. (Unity: Slider(non-interactable)/Image(Filled), Cocos: ProgressBar, UE: ProgressBar)
// "Container": 逻辑分组容器, 可能没有视觉表现, 主要用于布局 (LayoutGroup). (Unity: Empty GameObject, Cocos: Node, UE: CanvasPanel/VerticalBox/HorizontalBox/GridPanel - 类型可能由 layoutGroup 决定)
// "Icon": 通常指小的、图标类的 Image. (与 Image 类似, 但语义上区分)
// "Mask": 遮罩区域 (Unity: Mask/RectMask2D, Cocos: Mask, UE: RetainerBox? 需要研究)
```

**关键解释和注意事项:**

1.  **坐标系和 Y 轴:** 定义中假设 (0,0) 在左下角，Y 轴向上。引擎导入器需要根据目标引擎的约定（例如 Unity uGUI (0,0) 在左下，但 RectTransform Y 向上；Cocos Creator (0,0) 在左下，Y 向上；UMG (0,0) 在左上，Y 向下）进行转换。`pivot` 和 `anchors` 的 Y 值需要相应调整。
2.  **标准化 `type`:** 这是核心。导入器需要知道如何将 `Panel` 映射到引擎的具体实现。这个列表需要根据实际需求进行维护和扩展。
3.  **`layout` 的重要性:** `anchors` 和 `margins` 是实现跨引擎自适应布局的关键。`layoutGroup` 提供了更结构化的容器布局方式。导入器需要智能地将这些信息转化为引擎的布局组件 (e.g., Unity Layout Groups, Cocos Widget/Layout, UE Boxes/Slots)。
4.  **`componentProps`:** 这里只列举了几个例子。每种 `type` 可能有其特定的属性集。设计时需要考虑哪些是跨引擎通用的核心属性。
5.  **引用关系:** 使用 `id` 来建立引用关系（如 ScrollView 的 content, InputField 的 Text, Button 的 TargetGraphic, 资源的引用）。这要求 ID 在 JSON 文件内是唯一的。
6.  **灵活性与复杂性:** 这个格式试图平衡灵活性和复杂性。可以根据项目需求简化或扩展某些部分（例如，如果不需要支持所有 Button 状态，可以简化 `componentProps.Button`）。
7.  **资源路径:** `assets.path` 使用相对路径，方便项目迁移。导入器需要知道相对于 JSON 文件查找这些资源的基路径。

这个定义提供了一个坚实的基础，后续可以根据具体实现中的挑战和需求进行迭代和完善。



输入是图片，得到这个中间json的prompt

```
Okay, here is a detailed prompt designed to instruct a multimodal LLM (like Gemini or GPT-4V) to analyze a UI image and generate the previously defined intermediate JSON structure.

**Key Aspects of this Prompt:**

*   **Clear Goal:** States the objective directly.
*   **Input/Output:** Specifies the input (image) and desired output (JSON).
*   **Schema Reference:** Explicitly instructs the LLM to follow the provided JSON schema structure.
*   **Detailed Instructions per Field:** Breaks down what information is needed for each key part of the JSON (elements, rect, layout, style, assets, hierarchy).
*   **Handling Ambiguity/Approximation:** Acknowledges that image analysis is not exact and guides the LLM on how to handle estimations (especially for layout and styles).
*   **Asset Identification:** Guides the LLM to *identify* image assets and create placeholders, as it cannot extract files directly.
*   **Strict Output Formatting:** Demands only the JSON object as output.

---

**The Prompt:**

```text
Analyze the provided user interface (UI) image and generate a JSON object representing its structure, elements, layout, and styling. The output MUST strictly follow the JSON schema provided below.

**Overall Goal:** Convert the visual UI elements in the image into a hierarchical JSON structure suitable for reconstructing the UI in game engines.

**Input:** UI Image.

**Output:** A single JSON object conforming to the specified schema. Do NOT include any introductory text, explanations, apologies, or markdown formatting around the final JSON output.

**JSON Schema and Instructions:**

```json
{
  "version": "1.0.0",
  "metadata": {
    "sourceType": "Image", // Set this value
    "sourceFile": "<Provide a generic name like 'ui_image.png'>",
    "exportTimestamp": "<Generate current ISO 8601 timestamp>",
    "toolVersion": "LLM_Vision_Analyzer/1.0" // Set this value
  },
  "assets": [
    // INSTRUCTION: Identify distinct graphical assets (icons, background textures, complex button graphics).
    // For each identified asset:
    // 1. Create a unique 'id' (e.g., "asset_img_user_icon", "asset_img_panel_bg").
    // 2. Set 'type' to "Image".
    // 3. Provide a descriptive placeholder 'path' like "placeholder_assets/user_icon.png".
    // 4. Estimate 'imageType' ("Simple", "Sliced") based on visual appearance (e.g., if it looks like a 9-slice button background, use "Sliced", otherwise "Simple").
    // 5. If 'imageType' is "Sliced", attempt to estimate 'sliceBorders' (left, top, right, bottom pixel estimates), otherwise omit 'sliceBorders'.
    // Example: { "id": "asset_icon_search", "type": "Image", "path": "placeholder_assets/search_icon.png", "imageType": "Simple" }
  ],
  "rootElement": {
    // INSTRUCTION: Analyze the main container/background of the UI as the root.
    "id": "<Generate unique ID, e.g., 'root_panel_001'>",
    "name": "<Assign descriptive name, e.g., 'MainScreen' or 'RootPanel'>",
    "type": "<Usually 'Panel' or 'Container'>", // Choose from: Panel, Container, Image
    "active": true, // Assume true unless visibly inactive
    "rect": { // Estimate bounding box for the root (often the full image dimensions)
      "x": 0,
      "y": 0, // Use top-left corner as (0,0) origin
      "width": <Image Width>,
      "height": <Image Height>
    },
    "layout": { // Sensible defaults for root
      "anchors": { "minX": 0, "minY": 0, "maxX": 1, "maxY": 1 }, // Fill parent (screen)
      "margins": { "left": 0, "bottom": 0, "right": 0, "top": 0 },
      "pivot": { "x": 0.5, "y": 0.5 } // Center pivot is common
      // "layoutGroup": null // Usually null for the root, unless it's clearly a list container itself
    },
    "style": {
      "opacity": 1.0,
      "colorTint": "<Estimate background color hex (RRGGBB or AARRGGBB), default #FFFFFFFF if no solid color>",
      "backgroundImage": "<Reference an asset ID from the 'assets' list above if a background image is detected, otherwise null>",
      "text": null // Usually null for root panel
    },
    "componentProps": {}, // Usually empty for root
    "children": [
      // INSTRUCTION: Recursively identify all child UI elements within this parent.
      // For EACH child element:
      {
        "id": "<Generate unique ID, e.g., 'button_login_002'>",
        "name": "<Assign descriptive name, e.g., 'LoginButton', 'UsernameInput', 'TitleText', 'UserAvatarImage'>",
        "type": "<Classify using ONLY these types: Panel, Image, Text, Button, Input, ScrollView, Slider, Toggle, ProgressBar, Container, Icon, Mask>",
        "active": true, // Assume true
        "rect": { // Estimate bounding box relative to the PARENT's top-left corner
          "x": <Estimated X>,
          "y": <Estimated Y>,
          "width": <Estimated Width>,
          "height": <Estimated Height>
        },
        "layout": {
          // INSTRUCTION: Estimate layout based on visual position.
          // Anchors/Margins are hard to guess precisely. Make a reasonable estimate:
          // - If centered: anchors={minX:0.5, minY:0.5, maxX:0.5, maxY:0.5}, margins define offsets/size.
          // - If stretched width, fixed top: anchors={minX:0, minY:1, maxX:1, maxY:1}, margins define left/right/top spacing & height.
          // - Default to point anchors if unsure: anchors={minX:0.5, minY:0.5, maxX:0.5, maxY:0.5}, pivot={x:0.5, y:0.5}. Margins define width/height offsets from pivot.
          "anchors": { "minX": <Est.>, "minY": <Est.>, "maxX": <Est.>, "maxY": <Est.> },
          "margins": { "left": <Est.>, "bottom": <Est.>, "right": <Est.>, "top": <Est.> },
          "pivot": { "x": 0.5, "y": 0.5 }, // Default to center pivot unless clearly otherwise
          // "layoutGroup": // If this element clearly acts as a vertical/horizontal/grid container for its children, describe it here. Otherwise null.
          // { "type": "Vertical/Horizontal/Grid", "padding": {...}, "spacing": <Est.>, ... }
        },
        "style": {
          "opacity": <Estimate 0.0-1.0>,
          "colorTint": "<Estimate color hex #RRGGBB(AA) if applicable, default #FFFFFFFF>",
          "backgroundImage": "<Reference asset ID if this element IS an image or has a distinct background image, otherwise null>",
          "text": // If type is "Text" or element contains text (e.g., Button, Input placeholder)
          {
            "content": "<Extract text using OCR>",
            "fontAssetId": null, // Cannot determine font file from image, leave as null
            "fontSize": <Estimate font size in pixels>,
            "color": "<Estimate text color hex #RRGGBB(AA)>",
            "horizontalAlign": "<Estimate Left/Center/Right based on visual alignment>",
            "verticalAlign": "<Estimate Top/Middle/Bottom based on visual alignment>",
            "style": "<Estimate Normal/Bold/Italic based on appearance>",
            "lineSpacing": 1.0, // Default
            "wrapping": "<Estimate Wrap/None based on appearance>",
            "overflow": "Overflow", // Default
            "autoSize": false // Default
          } // Set to null if not applicable
        },
        "componentProps": {
          // INSTRUCTION: Add specific props based on 'type'. Examples:
          // "Button": { "interactable": true, "transitionType": "None", "states": { "normal": { "spriteAssetId": "<Ref background image asset if applicable>", "color": "<Tint>" } } } // Cannot determine other states from static image
          // "InputField": { "placeholderText": "<Extract placeholder text if visible>", "textComponentRef": "<ID of child Text element if separate>", ... }
          // "Image": { /* Usually empty, style handles it */ }
        },
        "children": [ // Recursively define children of this element
          // ...
        ]
      }
      // ... more child elements ...
    ]
  }
}
```

**Final Instruction:** Remember, your entire output should be ONLY the JSON object starting with `{` and ending with `}`. Ensure all strings are correctly escaped within the JSON. Provide your best estimate for positional and style values based on the visual information in the image.
---

**How to Use:**

1.  Replace `<Image Width>` and `<Image Height>` with the actual dimensions of the input image if known, otherwise the LLM might estimate them from the `rootElement`.
2.  Send this entire text prompt along with the UI image to the multimodal LLM API.
3.  The LLM should ideally return *only* the JSON text.
4.  Parse and validate the returned JSON using your `UI Validator & Corrector` tool, making necessary adjustments to coordinates, types, assets, and styles.
```





```
Okay, let's outline the structure and key parts of a Cocos Creator **Editor Extension** script that takes the intermediate JSON and generates a Prefab.

**Assumptions:**

1.  You have a Cocos Creator 3.x project.
2.  You understand how to create a basic Cocos Creator Extension. If not, refer to the official Cocos Creator documentation on Extension development.
3.  The intermediate JSON file and its associated asset files (images, fonts specified in the `assets` array) are located together in a folder accessible by the script.
4.  The script will run in the *Editor* environment, not the game runtime.

**Extension Structure (Simplified):**

```
your-ui-importer-extension/
├── package.json        # Extension definition, menus
└── main.ts             # Main extension logic (or main.js)
```

**1. `package.json` (Define the Menu Item)**

```json
{
  "package_version": 2,
  "version": "1.0.0",
  "name": "ui-importer",
  "description": "Imports UI from intermediate JSON format",
  "main": "./main.js", // Or main.ts if using TypeScript
  "contributions": {
    "menu": [
      {
        "path": "Assets/Import UI from JSON", // Menu path
        "label": "Import UI Prefab...",      // Menu label
        "message": "import-ui"             // Message to trigger the method
      }
    ],
    "messages": {
      "import-ui": {
        "methods": [
          "openImportDialog" // Method in main.ts to call
        ]
      }
    }
  },
  "author": "Your Name",
  "editor": ">=3.8.0" // Specify compatible Cocos Creator version
}
```

**2. `main.ts` (The Importer Logic)**

```typescript
import { existsSync, readFileSync } from 'fs';
import { join, dirname, basename, extname, relative } from 'path';

// Define interfaces for better type safety (mirroring the JSON structure)
interface AssetInfo {
    id: string;
    type: 'Image' | 'Font';
    path: string;
    imageType?: 'Simple' | 'Sliced' | 'Tiled' | 'Filled';
    sliceBorders?: { left: number; top: number; right: number; bottom: number; };
}

interface RectData { x: number; y: number; width: number; height: number; }
interface LayoutData { /* ... define based on JSON ... */ }
interface StyleData { /* ... define based on JSON ... */ }
interface ComponentProps { [key: string]: any; } // Adjust as needed

interface UIElement {
    id: string;
    name: string;
    type: string; // Panel, Image, Text, Button, etc.
    active: boolean;
    rect: RectData;
    layout: any; // Use 'any' for brevity or define fully
    style: any;  // Use 'any' for brevity or define fully
    componentProps: ComponentProps;
    children: UIElement[];
}

interface IntermediateJson {
    version: string;
    metadata: any;
    assets: AssetInfo[];
    rootElement: UIElement;
}

// --- Main Extension Logic ---
export const methods = {
    /**
     * Opens a dialog to select the JSON file and starts the import process.
     */
    async openImportDialog() {
        const options: Electron.OpenDialogOptions = {
            title: 'Select Intermediate UI JSON File',
            properties: ['openFile'],
            filters: [{ name: 'JSON Files', extensions: ['json'] }],
        };
        const result = await Editor.Dialog.showOpenDialog(options);

        if (!result.canceled && result.filePaths.length > 0) {
            const jsonPath = result.filePaths[0];
            try {
                console.log(`[UI Importer] Starting import for: ${jsonPath}`);
                await this.importUiFromJson(jsonPath);
                Editor.Dialog.info('UI Import Successful!');
                console.log(`[UI Importer] Import finished successfully.`);
            } catch (error) {
                console.error(`[UI Importer] Error during import:`, error);
                Editor.Dialog.error(`UI Import Failed. Check console for details. Error: ${error.message}`);
            }
        }
    },

    /**
     * The core import function.
     * @param jsonPath Absolute path to the JSON file.
     */
    async importUiFromJson(jsonPath: string) {
        const jsonContent = readFileSync(jsonPath, 'utf-8');
        const uiData: IntermediateJson = JSON.parse(jsonContent);
        const jsonDir = dirname(jsonPath);

        // --- 1. Import Assets ---
        // Cache for resolved asset UUIDs { jsonAssetId: cocosAssetUuid }
        const assetUuidCache: Record<string, string> = {};
        await this.importAssets(uiData.assets, jsonDir, assetUuidCache);

        // --- 2. Create Node Hierarchy ---
        const rootNode = await this.createNodeRecursive(uiData.rootElement, assetUuidCache, jsonDir);

        if (!rootNode) {
            throw new Error("Failed to create root node.");
        }

        // --- 3. Save as Prefab ---
        const baseName = basename(jsonPath, extname(jsonPath));
        // Determine a good save location within the project's assets folder
        const projectAssetsPath = Editor.Utils.Path.resolve('db://assets/');
        let saveDir = join(projectAssetsPath, 'Prefabs', 'ImportedUI'); // Example save path
        let prefabPath = join(saveDir, `${baseName}.prefab`);
        prefabPath = Editor.Utils.Path.relative(projectAssetsPath, prefabPath); // Make relative to db://assets/
        prefabPath = Editor.Utils.Path.normalize(prefabPath); // Normalize path separators

        console.log(`[UI Importer] Saving Prefab to: db://assets/${prefabPath}`);

        // Ensure the target directory exists
        const prefabDirUrl = Editor.Utils.Path.dirname(`db://assets/${prefabPath}`);
        if (!await Editor.Message.request('asset-db', 'query-asset-info', prefabDirUrl)) {
             await Editor.Message.request('asset-db', 'create-asset', prefabDirUrl, null);
             console.log(`[UI Importer] Created directory: ${prefabDirUrl}`);
        }

        // Save the prefab
        const prefabAsset = await Editor.PrefabUtils.savePrefabAsset(rootNode);
        if (!prefabAsset) {
            throw new Error(`Failed to create Prefab asset object.`);
        }

        // Move/rename the created prefab asset to the desired location
        const defaultPrefabUrl = Editor.Utils.Path.normalize(prefabAsset.url); // Get the URL where it was initially saved
        await Editor.Message.request('asset-db', 'move-asset', defaultPrefabUrl, `db://assets/${prefabPath}`);

        // Optional: Clean up the temporary node from the scene if it was added
        if (rootNode.parent) {
            rootNode.destroy();
        }

        // Refresh asset DB to show the new prefab
        await Editor.Message.request('asset-db', 'refresh-asset', `db://assets/${prefabPath}`);
    },

    /**
     * Imports required assets from the JSON definition into the Cocos project.
     * @param assets Asset definitions from JSON
     * @param jsonDir Directory containing the JSON file (base for relative asset paths)
     * @param assetUuidCache Cache to store resolved UUIDs
     */
    async importAssets(assets: AssetInfo[], jsonDir: string, assetUuidCache: Record<string, string>) {
        console.log(`[UI Importer] Importing ${assets.length} assets...`);
        const projectAssetsPath = Editor.Utils.Path.resolve('db://assets/');

        for (const assetInfo of assets) {
            const sourceAssetPath = join(jsonDir, assetInfo.path);
            if (!existsSync(sourceAssetPath)) {
                console.warn(`[UI Importer] Asset not found: ${sourceAssetPath} (referenced by ID: ${assetInfo.id}). Skipping.`);
                continue;
            }

            // Determine target path within db://assets/
            // Example: Place assets in Assets/ImportedUIAssets/ related to JSON name or structure
            const relativeAssetPath = relative(jsonDir, sourceAssetPath);
            let targetAssetDir = join('ImportedUIAssets', dirname(relativeAssetPath));
            let targetAssetUrl = `db://assets/${join(targetAssetDir, basename(sourceAssetPath))}`;
            targetAssetUrl = Editor.Utils.Path.normalize(targetAssetUrl);

            // Check if asset already imported (by URL)
            let assetInfoResult = await Editor.Message.request('asset-db', 'query-asset-info', targetAssetUrl);

            if (!assetInfoResult) {
                // Import the asset
                console.log(`[UI Importer] Importing ${assetInfo.type} asset: ${sourceAssetPath} to ${targetAssetUrl}`);
                const targetDirUrl = Editor.Utils.Path.dirname(targetAssetUrl);

                // Ensure target directory exists
                 if (!await Editor.Message.request('asset-db', 'query-asset-info', targetDirUrl)) {
                    await Editor.Message.request('asset-db', 'create-asset', targetDirUrl, null);
                 }

                assetInfoResult = await Editor.Message.request('asset-db', 'create-asset', targetAssetUrl, readFileSync(sourceAssetPath));
                if (!assetInfoResult) {
                     console.warn(`[UI Importer] Failed to import asset: ${targetAssetUrl}. Skipping linking.`);
                     continue;
                }
                // Optional: Apply import settings like 9-slice if needed AFTER import
                 if (assetInfo.type === 'Image' && assetInfo.imageType === 'Sliced' && assetInfo.sliceBorders) {
                     // TODO: Apply 9-slice meta settings (requires deeper AssetDB interaction or manual setup)
                     console.warn(`[UI Importer] Sliced image detected (${assetInfo.id}). Manual 9-slice setup might be required in Cocos Creator for ${targetAssetUrl}`);
                 }
            } else {
                 console.log(`[UI Importer] Asset already exists: ${targetAssetUrl}`);
            }


            // Store UUID in cache
            if (assetInfoResult && assetInfoResult.uuid) {
                 // For images, we usually need the SpriteFrame UUID, not the Texture UUID
                 if(assetInfo.type === 'Image') {
                    // Query for the SpriteFrame sub-asset
                    const subAssets = await Editor.Message.request('asset-db', 'query-asset-info', assetInfoResult.uuid);
                    // Find the SpriteFrame within the sub-assets (might be nested)
                    const spriteFrameAsset = this.findSpriteFrameInAssetInfo(subAssets);
                     if(spriteFrameAsset) {
                        assetUuidCache[assetInfo.id] = spriteFrameAsset.uuid;
                        console.log(`   - Linked JSON ID '${assetInfo.id}' to SpriteFrame UUID: ${spriteFrameAsset.uuid}`);
                     } else {
                         console.warn(`[UI Importer] Could not find SpriteFrame for image asset: ${targetAssetUrl}`);
                         assetUuidCache[assetInfo.id] = assetInfoResult.uuid; // Fallback to texture UUID? Might not work.
                     }
                 } else if (assetInfo.type === 'Font') {
                    assetUuidCache[assetInfo.id] = assetInfoResult.uuid;
                    console.log(`   - Linked JSON ID '${assetInfo.id}' to Font UUID: ${assetInfoResult.uuid}`);
                 }
            }
        }
         console.log('[UI Importer] Asset import phase finished.');
    },

    /** Helper to find SpriteFrame UUID from asset info (which might include texture itself) */
    findSpriteFrameInAssetInfo(assetInfo: any): any | null {
        if (!assetInfo) return null;
        if (assetInfo.importer === 'sprite-frame') {
            return assetInfo;
        }
        if (assetInfo.subAssets) {
            for (const key in assetInfo.subAssets) {
                const subAsset = assetInfo.subAssets[key];
                if (subAsset.importer === 'sprite-frame') {
                    return subAsset;
                }
            }
        }
        return null;
    },


    /**
     * Recursively creates Cocos Nodes based on the UIElement definition.
     * @param elementData Data for the current element from JSON
     * @param assetUuidCache Cache of resolved asset UUIDs
     * @param jsonDir Base directory for resolving assets if needed
     * @returns The created Cocos Creator Node or null on failure
     */
    async createNodeRecursive(elementData: UIElement, assetUuidCache: Record<string, string>, jsonDir: string): Promise<Node | null> {
        const cc = globalThis.cc; // Access runtime cc types if needed (use carefully in editor scripts)
        if (!cc) {
            console.error("[UI Importer] Cannot access 'cc' global. Ensure script runs in correct context.");
            return null;
        }
        const { Node, UITransform, Sprite, Label, Button, EditBox, ScrollView, Layout, Widget, Color, Size, Vec3, Vec2 } = cc; // Import necessary Cocos types

        const node = new Node(elementData.name);
        node.active = elementData.active;

        // --- 1. UITransform (All UI Nodes Need This) ---
        const uiTransform = node.addComponent(UITransform);
        // Set Content Size
        uiTransform.setContentSize(new Size(elementData.rect.width, elementData.rect.height));
        // Set Anchor Point (maps to JSON pivot) - Cocos Y is often up from bottom-left (0,0)
        if (elementData.layout && elementData.layout.pivot) {
            uiTransform.setAnchorPoint(new Vec2(elementData.layout.pivot.x, elementData.layout.pivot.y));
        } else {
            uiTransform.setAnchorPoint(new Vec2(0.5, 0.5)); // Default center
        }
        // Set Position - IMPORTANT: JSON rect x,y is top-left relative to parent. Cocos position is relative to parent's anchor point based on node's anchor point. Widget component handles this better.
        // We'll primarily rely on the Widget component for positioning relative to parent.
        // node.setPosition(new Vec3(elementData.rect.x, elementData.rect.y, 0)); // Initial naive position


        // --- 2. Add Components based on Type & Configure ---
        let backgroundSprite: Sprite | null = null; // Track background sprite for Button target

        switch (elementData.type) {
            case 'Panel':
            case 'Image':
            case 'Icon':
                const sprite = node.addComponent(Sprite);
                const imageAssetId = elementData.style?.backgroundImage;
                if (imageAssetId && assetUuidCache[imageAssetId]) {
                    const spriteFrame = await Editor.Utils.Uuid.loadUuid(assetUuidCache[imageAssetId], cc.SpriteFrame);
                    if (spriteFrame) {
                        sprite.spriteFrame = spriteFrame;
                        // Apply 9-slice (SpriteType.SLICED) if indicated in JSON
                        if (elementData.assets?.find(a => a.id === imageAssetId)?.imageType === 'Sliced') {
                             sprite.type = Sprite.Type.SLICED;
                             // Note: slice borders are set on the SpriteFrame asset meta, not directly on the component usually.
                             console.warn(`[UI Importer] Node '${node.name}': Uses sliced image '${imageAssetId}'. Ensure 9-slice borders are set correctly in the SpriteFrame asset meta.`);
                        } else {
                            sprite.type = Sprite.Type.SIMPLE;
                        }
                        sprite.sizeMode = Sprite.SizeMode.CUSTOM; // Use UITransform size
                    } else {
                        console.warn(`[UI Importer] Node '${node.name}': Could not load SpriteFrame for asset ID: ${imageAssetId}`);
                    }
                } else {
                    // Use color fill? Cocos doesn't have a simple colored panel, might need Graphics or a plain white sprite tinted.
                     sprite.spriteFrame = await Editor.Utils.Uuid.loadUuid('UUID_OF_BUILTIN_WHITE_SPRITE', cc.SpriteFrame); // Need UUID of builtin-sprite or similar
                     sprite.type = Sprite.Type.SLICED; // Use sliced for color fill often
                     sprite.sizeMode = Sprite.SizeMode.CUSTOM;
                    console.warn(`[UI Importer] Node '${node.name}' (${elementData.type}): No background image specified or asset not found. Applying color tint if available.`);
                }
                 if (elementData.style?.colorTint) {
                     sprite.color = new Color().fromHEX(elementData.style.colorTint);
                 }
                if (elementData.style?.opacity !== undefined) {
                     node.opacity = elementData.style.opacity * 255; // Cocos opacity is 0-255
                 }
                backgroundSprite = sprite;
                break;

            case 'Text':
                const label = node.addComponent(Label);
                const textStyle = elementData.style?.text;
                if (textStyle) {
                    label.string = textStyle.content || '';
                    label.fontSize = textStyle.fontSize || 20;
                    label.lineHeight = (textStyle.fontSize || 20) * (textStyle.lineSpacing || 1.2);
                    if (textStyle.color) label.color = new Color().fromHEX(textStyle.color);

                    // Font (requires Font asset UUID)
                    const fontAssetId = textStyle.fontAssetId;
                     if (fontAssetId && assetUuidCache[fontAssetId]) {
                         const font = await Editor.Utils.Uuid.loadUuid(assetUuidCache[fontAssetId], cc.Font);
                         if(font) label.font = font;
                         else console.warn(`[UI Importer] Node '${node.name}': Could not load Font for asset ID: ${fontAssetId}`);
                         label.useSystemFont = !font; // Use system font if custom font fails
                     } else {
                         label.useSystemFont = true;
                     }

                    // Alignment
                    label.horizontalAlign = this.mapHorizontalAlign(textStyle.horizontalAlign);
                    label.verticalAlign = this.mapVerticalAlign(textStyle.verticalAlign);

                    // Overflow & Wrapping
                     label.overflow = this.mapOverflow(textStyle.overflow, textStyle.wrapping === 'Wrap');
                     label.enableWrapText = textStyle.wrapping === 'Wrap';

                    // Style (Bold/Italic) - Cocos handles this via font asset variations or RichText
                     label.isBold = textStyle.style?.includes('Bold');
                     label.isItalic = textStyle.style?.includes('Italic');

                    // TODO: Handle autoSize? Label has SHRINK overflow type.
                }
                 if (elementData.style?.opacity !== undefined) {
                     node.opacity = elementData.style.opacity * 255;
                 }
                break;

            case 'Button':
                // Button usually needs a background Sprite component added first
                if (!node.getComponent(Sprite)) {
                    const bgSprite = node.addComponent(Sprite);
                     // Try to apply normal state sprite from componentProps or style
                    const btnProps = elementData.componentProps?.Button;
                    let normalSpriteId = btnProps?.states?.normal?.spriteAssetId || elementData.style?.backgroundImage;
                    if (normalSpriteId && assetUuidCache[normalSpriteId]) {
                        const spriteFrame = await Editor.Utils.Uuid.loadUuid(assetUuidCache[normalSpriteId], cc.SpriteFrame);
                        if (spriteFrame) {
                            bgSprite.spriteFrame = spriteFrame;
                             // Apply 9-slice settings if needed (check asset info)
                             const assetInfo = uiData.assets?.find(a => a.id === normalSpriteId);
                             if (assetInfo?.imageType === 'Sliced') {
                                 bgSprite.type = Sprite.Type.SLICED;
                             } else {
                                 bgSprite.type = Sprite.Type.SIMPLE;
                             }
                             bgSprite.sizeMode = Sprite.SizeMode.CUSTOM;
                        }
                    } else {
                         // Fallback to white sprite + tint
                         bgSprite.spriteFrame = await Editor.Utils.Uuid.loadUuid('UUID_OF_BUILTIN_WHITE_SPRITE', cc.SpriteFrame); // Need UUID
                         bgSprite.type = Sprite.Type.SLICED;
                         bgSprite.sizeMode = Sprite.SizeMode.CUSTOM;
                    }
                    backgroundSprite = bgSprite; // Track it
                } else {
                    backgroundSprite = node.getComponent(Sprite); // Already added
                }

                const button = node.addComponent(Button);
                const buttonProps = elementData.componentProps?.Button;
                if (buttonProps) {
                    button.interactable = buttonProps.interactable !== undefined ? buttonProps.interactable : true;
                    button.transition = this.mapButtonTransition(buttonProps.transitionType);

                    if (backgroundSprite) {
                        button.target = node; // Target the node itself if sprite is on it
                    }

                    // Configure transitions (Color Tint / Sprite Swap)
                    const states = buttonProps.states;
                    if (states) {
                        if (button.transition === Button.Transition.COLOR) {
                            button.normalColor = states.normal?.color ? new Color().fromHEX(states.normal.color) : Color.WHITE;
                            button.hoverColor = states.highlighted?.color ? new Color().fromHEX(states.highlighted.color) : new Color(200, 200, 200, 255);
                            button.pressedColor = states.pressed?.color ? new Color().fromHEX(states.pressed.color) : new Color(180, 180, 180, 255);
                            button.disabledColor = states.disabled?.color ? new Color().fromHEX(states.disabled.color) : new Color(128, 128, 128, 255);
                        } else if (button.transition === Button.Transition.SPRITE) {
                            button.normalSprite = await this.loadSpriteFrame(states.normal?.spriteAssetId, assetUuidCache);
                            button.hoverSprite = await this.loadSpriteFrame(states.highlighted?.spriteAssetId, assetUuidCache); // Might be same as normal
                            button.pressedSprite = await this.loadSpriteFrame(states.pressed?.spriteAssetId, assetUuidCache);
                            button.disabledSprite = await this.loadSpriteFrame(states.disabled?.spriteAssetId, assetUuidCache);
                        }
                    }
                }
                 if (elementData.style?.opacity !== undefined) {
                     node.opacity = elementData.style.opacity * 255;
                 }
                break;

             case 'Input':
                 // EditBox often needs a background image and a text label child
                 const editBox = node.addComponent(EditBox);
                 const inputProps = elementData.componentProps?.InputField;

                 // Background Sprite
                 if (!node.getComponent(Sprite)) {
                     const bgSprite = node.addComponent(Sprite);
                     const bgAssetId = inputProps?.backgroundImageRef || elementData.style?.backgroundImage;
                     if (bgAssetId && assetUuidCache[bgAssetId]) {
                         bgSprite.spriteFrame = await this.loadSpriteFrame(bgAssetId, assetUuidCache);
                         // Apply 9-slice if needed
                         const assetInfo = uiData.assets?.find(a => a.id === bgAssetId);
                         if (assetInfo?.imageType === 'Sliced') bgSprite.type = Sprite.Type.SLICED;
                         bgSprite.sizeMode = Sprite.SizeMode.CUSTOM;
                     } else {
                         // Default background
                         bgSprite.spriteFrame = await Editor.Utils.Uuid.loadUuid('UUID_OF_BUILTIN_INPUT_BG', cc.SpriteFrame); // Need suitable default
                         bgSprite.type = Sprite.Type.SLICED;
                         bgSprite.sizeMode = Sprite.SizeMode.CUSTOM;
                     }
                     editBox.backgroundImage = bgSprite.spriteFrame; // Link background
                 }

                 // Text Label (Often requires finding/creating a child Text node)
                 // Placeholder Label (Often requires finding/creating a child Text node)
                 // This part is complex: the JSON refers to child IDs. We need to handle this AFTER children are created or make assumptions.
                 // For simplicity here, we set props directly on EditBox if possible.
                 console.warn(`[UI Importer] Node '${node.name}' (Input): Linking text/placeholder components requires post-processing or specific child node naming conventions.`);

                 if (inputProps) {
                     editBox.string = elementData.style?.text?.content || ''; // Initial text?
                     editBox.placeholder = inputProps.placeholderText || '';
                     if (inputProps.placeholderColor) editBox.placeholderFontColor = new Color().fromHEX(inputProps.placeholderColor);
                     if (inputProps.placeholderFontAssetId && assetUuidCache[inputProps.placeholderFontAssetId]) {
                         editBox.placeholderFont = await Editor.Utils.Uuid.loadUuid(assetUuidCache[inputProps.placeholderFontAssetId], cc.Font);
                     }
                     // Map ContentType to InputFlag / InputMode
                     editBox.inputFlag = this.mapInputContentTypeFlag(inputProps.contentType);
                     editBox.inputMode = this.mapInputContentTypeMode(inputProps.contentType);
                     editBox.returnType = EditBox.ReturnType.DEFAULT; // Customize as needed
                     editBox.maxLength = inputProps.characterLimit > 0 ? inputProps.characterLimit : -1; // -1 for infinite
                 }
                 break;

            case 'ScrollView':
                const scrollView = node.addComponent(ScrollView);
                const scrollProps = elementData.componentProps?.ScrollView;
                if (scrollProps) {
                    scrollView.horizontal = scrollProps.direction === 'Horizontal' || scrollProps.direction === 'Both';
                    scrollView.vertical = scrollProps.direction === 'Vertical' || scrollProps.direction === 'Both';
                    scrollView.inertia = scrollProps.inertia !== undefined ? scrollProps.inertia : true;
                    scrollView.elastic = scrollProps.elastic !== undefined ? scrollProps.elastic : true;

                    // Linking Content Node: This needs to happen AFTER the child content node is created.
                    // Linking Scrollbars: Needs child scrollbar nodes created first.
                    console.warn(`[UI Importer] Node '${node.name}' (ScrollView): Linking content node and scrollbars requires post-processing or specific child node naming conventions ('content', 'horizontalScrollbar', 'verticalScrollbar').`);
                }
                 // ScrollView often needs a Mask component on itself or a child 'view' node. Add Mask?
                 // node.addComponent(Mask); // Basic mask
                break;

            case 'Container':
                 // Often used for LayoutGroups. No visual component needed by default.
                 break;

            // ... Add cases for Slider, Toggle, ProgressBar, Mask etc. ...

            default:
                console.warn(`[UI Importer] Unsupported element type: ${elementData.type} for node ${elementData.name}`);
        }

        // --- 3. Layout Component (Widget or Layout Group) ---
        if (elementData.layout) {
            const layoutInfo = elementData.layout;
            if (layoutInfo.layoutGroup) {
                // Add Layout Component
                const layoutComp = node.addComponent(Layout);
                const groupInfo = layoutInfo.layoutGroup;
                layoutComp.type = this.mapLayoutGroupType(groupInfo.type);
                layoutComp.resizeMode = Layout.ResizeMode.CONTAINER; // Or CHILDREN/NONE

                if (groupInfo.padding) {
                    layoutComp.paddingLeft = groupInfo.padding.left || 0;
                    layoutComp.paddingRight = groupInfo.padding.right || 0;
                    layoutComp.paddingTop = groupInfo.padding.top || 0;
                    layoutComp.paddingBottom = groupInfo.padding.bottom || 0;
                }
                layoutComp.spacingX = (groupInfo.type === 'Horizontal' || groupInfo.type === 'Grid') ? (groupInfo.spacing || 0) : 0;
                layoutComp.spacingY = (groupInfo.type === 'Vertical' || groupInfo.type === 'Grid') ? (groupInfo.spacing || 0) : 0;

                layoutComp.horizontalDirection = Layout.HorizontalDirection.LEFT_TO_RIGHT;
                layoutComp.verticalDirection = Layout.VerticalDirection.TOP_TO_BOTTOM; // Cocos default

                 if (groupInfo.type === 'Grid') {
                     layoutComp.constraint = this.mapLayoutConstraint(groupInfo.constraint);
                     layoutComp.constraintNum = groupInfo.constraintCount || 1;
                     if (groupInfo.cellSize) {
                         // Grid layout with fixed cell size often uses ResizeMode.NONE
                         layoutComp.resizeMode = Layout.ResizeMode.NONE;
                         layoutComp.cellSize = new Size(groupInfo.cellSize.width, groupInfo.cellSize.height);
                     }
                 }

                // Alignment? Cocos Layout has alignment properties for items within the layout space
                // TODO: Map childAlignment if possible

                // Control Child Size / Force Expand - Affects how children should be sized within the layout
                 layoutComp.affectedByScale = false; // Usually false for UI


                // Add Widget to make the Layout container itself adhere to parent anchors/margins
                 this.applyWidgetComponent(node, layoutInfo);

            } else {
                // Add Widget Component for anchor/margin based layout
                 this.applyWidgetComponent(node, layoutInfo);
            }
        }


        // --- 4. Recursively Create Children ---
        if (elementData.children && elementData.children.length > 0) {
            for (const childData of elementData.children) {
                const childNode = await this.createNodeRecursive(childData, assetUuidCache, jsonDir);
                if (childNode) {
                    node.addChild(childNode);
                }
            }
            // --- Post-Child Creation Linking (e.g., ScrollView content) ---
            if (elementData.type === 'ScrollView') {
                 const scrollProps = elementData.componentProps?.ScrollView;
                 if (scrollProps && scrollProps.contentRef) {
                    const contentNode = node.getChildByPath(this.findNodePathById(node, scrollProps.contentRef)); // Need helper to find node by our custom ID
                     if (contentNode) {
                         const scrollViewComp = node.getComponent(ScrollView);
                         if (scrollViewComp) {
                            scrollViewComp.content = contentNode;
                             console.log(`[UI Importer] Linked ScrollView content for ${node.name}`);
                         }
                     } else {
                         console.warn(`[UI Importer] Node '${node.name}': Could not find content node with ID '${scrollProps.contentRef}'`);
                     }
                 }
                 // TODO: Link scrollbars similarly
            }
            if (elementData.type === 'Input') {
                // TODO: Link text/placeholder Label components based on componentProps refs
            }
        }

        return node;
    },

    /** Applies and configures the Widget component based on layout info */
     applyWidgetComponent(node: Node, layoutInfo: any) {
        const cc = globalThis.cc;
        const { Widget, UITransform } = cc;
        let widget = node.getComponent(Widget);
        if (!widget) {
            widget = node.addComponent(Widget);
        }
        widget.target = null; // Align to parent by default
        widget.isAlignOnce = false; // Align always

         // Map Anchors - Cocos Widget alignment properties
         // isAlign<Side> enables alignment, <side> property sets the margin
         const anchors = layoutInfo.anchors || { minX: 0.5, minY: 0.5, maxX: 0.5, maxY: 0.5 }; // Default center anchor
         const margins = layoutInfo.margins || { left: 0, top: 0, right: 0, bottom: 0 };
         const uiTransform = node.getComponent(UITransform);
         const pivot = uiTransform.anchorPoint; // Use the node's actual anchor point

         // Simple top-left position based on rect for point anchors (less robust)
         // node.setPosition(new Vec3(elementData.rect.x, -elementData.rect.y, 0)); // Negate Y for top-left? Depends on parent anchor.

         // --- Widget Alignment Logic ---
         // This logic maps JSON anchors/margins (relative to parent bounds) to Cocos Widget properties (margins relative to target anchor points)
         // Assumes target (parent) anchor is (0,0) lower-left for calculation simplicity, Widget handles actual parent anchor.

         const isStretchX = Math.abs(anchors.minX - anchors.maxX) > 0.01;
         const isStretchY = Math.abs(anchors.minY - anchors.maxY) > 0.01;

         // Horizontal Alignment
         if (isStretchX) {
             widget.isAlignLeft = true;
             widget.left = margins.left;
             widget.isAlignRight = true;
             widget.right = margins.right;
             widget.isAlignHorizontalCenter = false; // Disable center align if stretching
         } else {
             // Point anchor horizontally
             widget.isAlignHorizontalCenter = true;
             // Calculate center offset based on anchorX and margin.left (acting as offset)
             widget.horizontalCenter = margins.left + (anchors.minX - 0.5) * (node.parent?.getComponent(UITransform)?.width || 0); // Approximation
             widget.isAlignLeft = false;
             widget.isAlignRight = false;
         }

         // Vertical Alignment
         if (isStretchY) {
             widget.isAlignBottom = true;
             widget.bottom = margins.bottom;
             widget.isAlignTop = true;
             widget.top = margins.top;
             widget.isAlignVerticalCenter = false; // Disable center align if stretching
         } else {
             // Point anchor vertically
             widget.isAlignVerticalCenter = true;
             // Calculate center offset based on anchorY and margin.bottom (acting as offset)
             widget.verticalCenter = margins.bottom + (anchors.minY - 0.5) * (node.parent?.getComponent(UITransform)?.height || 0); // Approximation
             widget.isAlignBottom = false;
             widget.isAlignTop = false;
         }

         // Final adjustments based on anchor point might be needed, but Widget usually handles this well.
         // widget.updateAlignment(); // Not needed usually, happens automatically
    },

    // --- Helper Functions for Mapping ---

    async loadSpriteFrame(assetId: string | null | undefined, cache: Record<string, string>): Promise<SpriteFrame | null> {
        const cc = globalThis.cc;
        if (!assetId || !cache[assetId]) return null;
        try {
            const asset = await Editor.Utils.Uuid.loadUuid(cache[assetId], cc.SpriteFrame);
            return asset as SpriteFrame;
        } catch (e) {
            console.warn(`[UI Importer] Failed to load SpriteFrame asset with ID: ${assetId} (UUID: ${cache[assetId]})`, e);
            return null;
        }
    },

    mapHorizontalAlign(align: string | undefined): number {
        const cc = globalThis.cc;
        switch (align) {
            case 'Left': return cc.HorizontalTextAlignment.LEFT;
            case 'Right': return cc.HorizontalTextAlignment.RIGHT;
            case 'Center':
            default: return cc.HorizontalTextAlignment.CENTER;
        }
    },

    mapVerticalAlign(align: string | undefined): number {
        const cc = globalThis.cc;
        switch (align) {
            case 'Top': return cc.VerticalTextAlignment.TOP;
            case 'Bottom': return cc.VerticalTextAlignment.BOTTOM;
            case 'Middle':
            default: return cc.VerticalTextAlignment.CENTER;
        }
    },

    mapOverflow(overflow: string | undefined, wrapping: boolean): number {
        const cc = globalThis.cc;
        switch (overflow) {
            case 'None': return cc.Label.Overflow.NONE;
             case 'Clamp': return cc.Label.Overflow.CLAMP; // JSON 'Truncate'?
             case 'Shrink': return cc.Label.Overflow.SHRINK; // JSON 'AutoSize' related?
             case 'ResizeHeight': return cc.Label.Overflow.RESIZE_HEIGHT;
             default: // Overflow / Wrap
                 return wrapping ? cc.Label.Overflow.RESIZE_HEIGHT : cc.Label.Overflow.CLAMP; // Sensible default
        }
    },

    mapButtonTransition(type: string | undefined): number {
        const { Button } = globalThis.cc;
        switch (type) {
            case 'ColorTint': return Button.Transition.COLOR;
            case 'SpriteSwap': return Button.Transition.SPRITE;
            case 'Scale': return Button.Transition.SCALE; // Add if supported in JSON
            case 'None':
            default: return Button.Transition.NONE;
        }
    },

    mapLayoutGroupType(type: string | undefined): number {
        const { Layout } = globalThis.cc;
        switch(type) {
            case 'Horizontal': return Layout.Type.HORIZONTAL;
            case 'Vertical': return Layout.Type.VERTICAL;
            case 'Grid': return Layout.Type.GRID;
            default: return Layout.Type.NONE;
        }
    },

    mapLayoutConstraint(type: string | undefined): number {
         const { Layout } = globalThis.cc;
         switch(type) {
             case 'FixedRowCount': return Layout.Constraint.FIXED_ROW;
             case 'FixedColumnCount': return Layout.Constraint.FIXED_COL;
             default: return Layout.Constraint.NONE;
         }
     },

    mapInputContentTypeFlag(type: string | undefined): number {
        const { EditBox } = globalThis.cc;
        switch(type) {
            case 'Password': return EditBox.InputFlag.PASSWORD;
            // Map others if needed (Standard, Email, Number often overlap with InputMode)
            default: return EditBox.InputFlag.DEFAULT;
        }
    },

     mapInputContentTypeMode(type: string | undefined): number {
         const { EditBox } = globalThis.cc;
         switch(type) {
             case 'Email': return EditBox.InputMode.EMAIL_ADDR;
             case 'IntegerNumber': return EditBox.InputMode.NUMERIC;
             case 'DecimalNumber': return EditBox.InputMode.DECIMAL;
             // Map others
             default: return EditBox.InputMode.ANY;
         }
     },

     // Helper to find a node's path relative to an ancestor by our custom ID
     findNodePathById(root: Node, targetId: string): string {
         const findRecursive = (current: Node, path: string[]): string[] | null => {
             // Check if current node's data (if stored somewhere) matches ID, or maybe check name pattern?
             // This requires storing the original JSON ID on the node, e.g., via a custom component or just checking name initially.
             // For now, relying on name match as a placeholder:
             if (current.name === targetId) { // Not robust! Use ID if possible.
                 return path;
             }

             for (const child of current.children) {
                 path.push(child.name);
                 const result = findRecursive(child, path);
                 if (result) return result;
                 path.pop(); // Backtrack
             }
             return null;
         }
         const resultPath = findRecursive(root, []);
         return resultPath ? resultPath.join('/') : '';
     }
};

// --- Standard Extension Lifecycle ---
export function load() {
    console.log('[UI Importer] Extension Loaded');
}

export function unload() {
    console.log('[UI Importer] Extension Unloaded');
}
```

**Explanation and Key Areas:**

1.  **`package.json`:** Defines the menu item `Assets/Import UI from JSON -> Import UI Prefab...` which triggers the `import-ui` message, calling the `openImportDialog` method.
2.  **`openImportDialog`:** Uses `Editor.Dialog.showOpenDialog` to let the user pick the JSON file.
3.  **`importUiFromJson`:**
    *   Reads and parses the JSON.
    *   Calls `importAssets` to handle finding/importing images and fonts into the Cocos project using `AssetDB` (`Editor.Message.request('asset-db', ...)`). It caches the resulting UUIDs.
    *   Calls `createNodeRecursive` to build the Cocos node hierarchy in memory.
    *   Uses `Editor.PrefabUtils.savePrefabAsset` to save the generated root node as a `.prefab` file in a specified project location (e.g., `db://assets/Prefabs/ImportedUI/`).
    *   Provides feedback via `console.log` and `Editor.Dialog`.
4.  **`importAssets`:**
    *   Iterates through the `assets` array in the JSON.
    *   Constructs the source path (relative to JSON) and a target path within `db://assets/`.
    *   Uses `asset-db` messages to check if the asset exists at the target URL (`query-asset-info`).
    *   If not found, it creates the target directory (`create-asset` for directory) and then imports the asset (`create-asset` with file data).
    *   **Crucially:** It retrieves the UUID of the imported asset (specifically the `SpriteFrame` sub-asset UUID for images) and stores it in `assetUuidCache` mapped by the JSON asset ID.
    *   Includes a placeholder warning about needing manual 9-slice setup, as applying meta settings programmatically can be complex.
5.  **`createNodeRecursive`:**
    *   The core recursive function. Takes the JSON `elementData`.
    *   Creates a `Node`.
    *   Adds `UITransform` and configures size/anchor point (pivot).
    *   Uses a `switch` statement on `elementData.type` to add and configure the correct Cocos components (`Sprite`, `Label`, `Button`, `Layout`, etc.).
    *   Loads asset UUIDs from the `assetUuidCache` and uses `Editor.Utils.Uuid.loadUuid` to get references to `SpriteFrame` or `Font` assets needed by components.
    *   Configures component properties based on `style` and `componentProps`. Includes mapping functions (`mapHorizontalAlign`, etc.).
    *   **Layout:** Decides whether to add a `Layout` component (if `layoutGroup` is present) or a `Widget` component (for anchor/margin layout). The `applyWidgetComponent` function handles the complex mapping from JSON anchors/margins to Widget properties.
    *   Recursively calls itself for `children` and adds the returned child nodes.
    *   Includes placeholder warnings for complex linking (ScrollView content, InputField text components) that might require post-processing or specific naming conventions in the JSON/design.
6.  **Mapping Helpers:** Functions like `mapHorizontalAlign`, `mapButtonTransition`, etc., translate enum-like strings from JSON into Cocos-specific enum values.
7.  **`load`/`unload`:** Standard extension entry/exit points.

**To Use This:**

1.  Create the extension folder (`your-ui-importer-extension`) in your Cocos Creator project's `extensions` directory.
2.  Place `package.json` and `main.ts` (or the compiled `main.js`) inside.
3.  Enable the extension in Cocos Creator's Extension Manager.
4.  Restart Cocos Creator.
5.  You should see the "Assets -> Import UI from JSON -> Import UI Prefab..." menu item.
6.  Click it, select your intermediate JSON file.
7.  Check the Cocos Creator Console for progress and error messages.
8.  If successful, a prefab should appear in `Assets/Prefabs/ImportedUI/`.

**Important Considerations & Potential Improvements:**

*   **Error Handling:** The script has basic `try...catch` but could be more robust.
*   **Asset UUIDs:** Needs hardcoded UUIDs for built-in assets like default sprites/fonts if you want fallbacks (`UUID_OF_BUILTIN_WHITE_SPRITE`). Find these in your library or create simple assets yourself.
*   **9-Slice:** Programmatically setting 9-slice borders on imported SpriteFrames via meta files is complex. Often, it's easier to require the user to set them up manually after import. The warning is included.
*   **Coordinate System:** The `Widget` component handles most coordinate mapping well, but double-check positioning, especially if not using Widgets.
*   **Complex Linking:** Linking ScrollView content, InputField text nodes, etc., relies on finding child nodes. The current `findNodePathById` is a basic placeholder using names; a better approach might be to temporarily store the JSON ID on the node using a custom component during creation.
*   **TypeScript Compilation:** If using `main.ts`, ensure you have a build process (like `tsc`) to compile it to `main.js` which Cocos Creator uses.
*   **Performance:** For very large UI hierarchies, performance might become a factor.
*   **Cocos API Changes:** Editor APIs can change between Cocos Creator versions. Ensure compatibility.
```



中间样式包含图片素材生成prompt的提示词
```
Okay, let's update the prompt for the multimodal LLM to include generating descriptive `alt` text suitable for image generation tools like Midjourney, while also emphasizing style consistency.

**Key Changes:**

1.  **New `alt` field:** Added within the `style` object for elements identified as `Image` or `Icon`, or potentially `Panel` if it uses a distinct background image.
2.  **`alt` Content Instruction:** Specific instructions on what kind of description is needed for image generation (subject, action, style, composition, etc.).
3.  **Style Consistency Instruction:** A top-level instruction reminding the LLM to maintain a consistent artistic style across all generated `alt` descriptions within the same JSON.
4.  **Asset Identification Update:** Clarified that `alt` text should be generated for identified image assets.

---

**Updated Prompt:**

```text
Analyze the provided user interface (UI) image and generate a JSON object representing its structure, elements, layout, and styling. The output MUST strictly follow the JSON schema provided below.

**Overall Goal:** Convert the visual UI elements in the image into a hierarchical JSON structure suitable for reconstructing the UI in game engines. Critically, for graphical elements like images, icons, and distinct backgrounds, generate descriptive `alt` text that can be used as a prompt for AI image generation tools (like Midjourney) to recreate similar assets with a consistent style.

**Style Consistency Requirement:** Ensure that the artistic style described in all generated `alt` text prompts within this JSON output is consistent (e.g., if one icon is described as "flat vector art", other icons and backgrounds should likely follow the same style unless visually distinct).

**Input:** UI Image.

**Output:** A single JSON object conforming to the specified schema. Do NOT include any introductory text, explanations, apologies, or markdown formatting around the final JSON output.

**JSON Schema and Instructions:**

```json
{
  "version": "1.0.0",
  "metadata": {
    "sourceType": "Image",
    "sourceFile": "<Provide a generic name like 'ui_image.png'>",
    "exportTimestamp": "<Generate current ISO 8601 timestamp>",
    "toolVersion": "LLM_Vision_Analyzer/1.1" // Updated version
  },
  "assets": [
    // INSTRUCTION: Identify distinct graphical assets (icons, background textures, complex button graphics).
    // For each identified asset:
    // 1. Create a unique 'id'.
    // 2. Set 'type' to "Image".
    // 3. Provide a descriptive placeholder 'path'.
    // 4. Estimate 'imageType' ("Simple", "Sliced").
    // 5. Estimate 'sliceBorders' if "Sliced".
    // 6. ***IMPORTANT***: Generate the corresponding `alt` text for image generation (see style.alt instruction below) and store it conceptually here (it will be placed in the element's style).
  ],
  "rootElement": {
    // ... (id, name, type, active, rect, layout - same as before) ...
    "style": {
      "opacity": 1.0,
      "colorTint": "<Estimate background color hex, default #FFFFFFFF>",
      "backgroundImage": "<Reference asset ID from 'assets' if background image detected, otherwise null>",
      "alt": null, // **NEW**: If backgroundImage is set, provide alt text prompt for it here.
      "text": null
    },
    "componentProps": {},
    "children": [
      // INSTRUCTION: Recursively identify child elements.
      // For EACH child element:
      {
        // ... (id, name, type, active, rect, layout - same as before) ...
        "style": {
          "opacity": <Estimate 0.0-1.0>,
          "colorTint": "<Estimate color hex, default #FFFFFFFF>",
          "backgroundImage": "<Reference asset ID if element IS an Image/Icon/Panel BG, else null>",
          // --- ALT TEXT FOR IMAGE GENERATION ---
          "alt": // **NEW**: If 'type' is Image/Icon, OR if 'type' is Panel/Button AND 'backgroundImage' is NOT null:
                 // Generate a descriptive prompt suitable for AI image generation (e.g., Midjourney).
                 // Include:
                 //   - Subject: What is it? (e.g., 'user profile icon', 'ornate wooden button background', 'fantasy landscape background')
                 //   - Key elements/details: (e.g., 'hooded figure', 'glowing gem', 'subtle texture')
                 //   - Artistic Style: (e.g., 'flat vector art', 'photorealistic', 'pixel art', 'watercolor painting', 'cyberpunk illustration', 'minimalist line art') - ***MAINTAIN CONSISTENCY ACROSS ALL ALTS***
                 //   - Composition/View: (e.g., 'centered', 'close-up', 'seamless pattern', 'UI element on transparent background')
                 //   - Mood/Atmosphere (Optional): (e.g., 'dark fantasy', 'cheerful', 'techy')
                 //   - Aspect Ratio Hint (Optional): (e.g., '--ar 1:1' for square icons, '--ar 16:9' for backgrounds)
                 // Example for an icon: "Minimalist flat vector user profile icon, anonymous silhouetted head and shoulders, teal blue color, UI element on transparent background --ar 1:1"
                 // Example for a background: "Seamless pattern of subtle sci-fi circuitry lines, dark grey background with faint blue glow, techy, detailed texture --ar 1:1"
                 // If the element is not an image/icon/BG, set "alt": null.
                 "<Generated alt text prompt or null>",
          "text": // If type is "Text" or element contains text... (same as before)
          {
            // ... (text properties same as before) ...
          } // Set to null if not applicable
        },
        // ... (componentProps, children - same as before) ...
      }
      // ... more child elements ...
    ]
  }
}
```

**Final Instruction:** Remember, your entire output should be ONLY the JSON object starting with `{` and ending with `}`. Ensure all strings are correctly escaped. Provide your best estimate for positional and style values. Critically, ensure the `alt` text descriptions maintain a consistent artistic style throughout the output.
---

**How this addresses the requirements:**

1.  **`alt` Field:** The JSON structure now includes an `alt` field within the `style` object.
2.  **Targeted Generation:** The instructions specify *when* to generate the `alt` text (for `Image`, `Icon`, and elements with a distinct `backgroundImage`).
3.  **Prompt Content Guidance:** Clear bullet points guide the LLM on the desired content for the `alt` text, focusing on elements useful for image generation tools.
4.  **Style Consistency:** A prominent instruction at the beginning and reinforced within the `alt` description emphasizes maintaining a coherent artistic style across all generated prompts.
5.  **Placeholder Paths:** The `assets` array still uses placeholder paths, as the LLM can't extract files, but it *identifies* the need for an asset and generates its description (`alt` text). The actual image generation using these `alt` prompts would be a separate step.

This updated prompt guides the LLM to not only analyze the structure but also to creatively describe the visual assets in a way that facilitates their recreation using generative AI, while trying to keep the look and feel consistent.
```


