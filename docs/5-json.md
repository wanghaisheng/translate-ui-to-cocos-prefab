# 游戏UI预制体中间JSON格式规范

## 概述

预制体中间JSON格式是游戏UI生成器平台中的核心数据结构，它作为设计工具和游戏引擎之间的桥梁，实现了UI设计到游戏代码的无缝转换。本文档详细说明该JSON格式的结构、字段含义、使用方法以及与不同游戏引擎的映射关系。

## 设计目标

预制体中间JSON格式的设计目标是：

1. **引擎无关性**：足够通用，能够描述大多数UI场景，并且可以被转化为Unity、Cocos Creator、Unreal Engine等主流游戏引擎的原生结构
2. **结构化**：清晰地表达UI的层级关系和组件嵌套
3. **布局明确**：包含足够的布局信息，以在不同引擎中重建相似的布局
4. **样式可描述**：能够定义常见的视觉样式和属性
5. **组件化**：支持常见的UI组件类型及其特定属性
6. **资源关联**：清晰地引用所需的图像和字体资源

## 基本结构

预制体JSON的基本结构采用树形层次结构，反映UI组件的嵌套关系。顶层结构包括：

```json
{
  "version": "1.0.0",
  "metadata": {
    "sourceType": "Figma",
    "sourceFile": "path/to/design/file.fig",
    "exportTimestamp": "2023-10-27T10:30:00Z",
    "toolVersion": "UIGenerator/1.2.0"
  },
  "assets": [],
  "rootElement": {}
}
```

### 核心字段说明

| 字段名 | 类型 | 描述 |
|--------|------|------|
| version | 字符串 | JSON格式的版本号 |
| metadata | 对象 | 包含源文件类型、导出时间等元数据 |
| assets | 数组 | 项目所需的所有资源列表 |
| rootElement | 对象 | UI层级的根节点 |

## 资源定义

资源部分定义了UI中使用的所有外部资源，包括图片和字体：

```json
"assets": [
  {
    "id": "asset_img_button_bg_normal",
    "type": "Image",
    "path": "assets/images/button_bg_normal.png",
    "imageType": "Sliced",
    "sliceBorders": {
      "left": 10,
      "top": 10,
      "right": 10,
      "bottom": 10
    }
  },
  {
    "id": "asset_font_main",
    "type": "Font",
    "path": "assets/fonts/MyCustomFont.ttf"
  }
]
```

## UI元素结构

每个UI元素都包含以下基本属性：

```json
{
  "id": "element_id",
  "name": "ElementName",
  "type": "Panel",
  "active": true,
  "rect": {
    "x": 0,
    "y": 0,
    "width": 100,
    "height": 100
  },
  "layout": {
    "anchors": {
      "minX": 0.0,
      "minY": 0.0,
      "maxX": 1.0,
      "maxY": 1.0
    },
    "margins": {
      "left": 10,
      "bottom": 10,
      "right": 10,
      "top": 10
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    }
  },
  "style": {},
  "componentProps": {},
  "children": []
}
```

### 元素属性说明

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | 字符串 | 元素唯一ID |
| name | 字符串 | 元素名称 |
| type | 字符串 | 元素类型（Panel、Button、Text等） |
| active | 布尔值 | 元素是否激活/可见 |
| rect | 对象 | 元素的位置和尺寸 |
| layout | 对象 | 元素的布局属性 |
| style | 对象 | 元素的样式属性 |
| componentProps | 对象 | 特定组件类型的属性 |
| children | 数组 | 子元素列表 |

## 支持的UI组件类型

预制体JSON支持多种UI组件类型，每种组件都有特定的属性集：

### 1. Panel（面板）

基础容器组件，可包含其他UI元素：

```json
{
  "type": "Panel",
  "style": {
    "opacity": 1.0,
    "colorTint": "#FFFFFFFF",
    "backgroundImage": "asset_img_panel_bg"
  }
}
```

### 2. Text（文本）

用于显示文本内容：

```json
{
  "type": "Text",
  "style": {
    "text": {
      "content": "登录",
      "fontAssetId": "asset_font_main",
      "fontSize": 24,
      "color": "#FF333333",
      "horizontalAlign": "Center",
      "verticalAlign": "Middle",
      "style": "Normal",
      "lineSpacing": 1.0,
      "wrapping": "Wrap"
    }
  }
}
```

### 3. Image（图像）

用于显示图片：

```json
{
  "type": "Image",
  "style": {
    "opacity": 1.0,
    "colorTint": "#FFFFFFFF",
    "backgroundImage": "asset_img_icon"
  }
}
```

### 4. Button（按钮）

交互按钮组件：

```json
{
  "type": "Button",
  "componentProps": {
    "Button": {
      "interactable": true,
      "transitionType": "SpriteSwap",
      "targetGraphicRef": "asset_img_button_bg_normal",
      "states": {
        "normal": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FFFFFFFF" },
        "highlighted": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FFF0F0F0" },
        "pressed": { "spriteAssetId": "asset_img_button_bg_pressed", "color": "#FFCCCCCC" },
        "disabled": { "spriteAssetId": "asset_img_button_bg_normal", "color": "#FF888888" }
      }
    }
  }
}
```

### 5. InputField（输入框）

用于接收用户输入：

```json
{
  "type": "InputField",
  "componentProps": {
    "InputField": {
      "contentType": "Standard",
      "lineType": "SingleLine",
      "characterLimit": 20,
      "placeholderText": "请输入用户名...",
      "placeholderColor": "#FF808080",
      "placeholderFontAssetId": "asset_font_main",
      "textComponentRef": "child_text_id",
      "backgroundImageRef": "asset_input_bg_id"
    }
  }
}
```

### 6. ScrollView（滚动视图）

可滚动内容区域：

```json
{
  "type": "ScrollView",
  "componentProps": {
    "ScrollView": {
      "contentRef": "child_content_panel_id",
      "direction": "Vertical",
      "inertia": true,
      "elastic": true,
      "horizontalScrollbar": {
        "visibility": "Auto",
        "handleRef": "scrollbar_h_handle_id",
        "containerRef": "scrollbar_h_container_id"
      },
      "verticalScrollbar": {
        "visibility": "Auto",
        "handleRef": "scrollbar_v_handle_id",
        "containerRef": "scrollbar_v_container_id"
      }
    }
  }
}
```

## 布局系统

布局系统定义了UI元素如何在父容器中定位和调整大小：

### 锚点和边距

```json
"layout": {
  "anchors": {
    "minX": 0.0,
    "minY": 0.0,
    "maxX": 1.0,
    "maxY": 1.0
  },
  "margins": {
    "left": 10,
    "bottom": 10,
    "right": 10,
    "top": 10
  },
  "pivot": {
    "x": 0.5,
    "y": 0.5
  }
}
```

### 布局组

用于自动排列子元素：

```json
"layoutGroup": {
  "type": "Vertical",
  "padding": { "left": 5, "top": 5, "right": 5, "bottom": 5 },
  "spacing": 10,
  "childAlignment": "MiddleCenter",
  "controlChildWidth": true,
  "controlChildHeight": true,
  "forceExpandWidth": false,
  "forceExpandHeight": false
}
```

## 游戏引擎映射

预制体JSON格式设计为通用格式，但需要针对不同游戏引擎进行映射。以下是主要游戏引擎的映射关系：

### Cocos Creator 映射

| JSON元素类型 | Cocos Creator组件 |
|--------------|-------------------|
| Panel | cc.Node + cc.Sprite |
| Text | cc.Label |
| Image | cc.Sprite |
| Button | cc.Button |
| InputField | cc.EditBox |
| ScrollView | cc.ScrollView |

### Unity映射

| JSON元素类型 | Unity UGUI组件 |
|--------------|----------------|
| Panel | GameObject + Image |
| Text | Text / TextMeshProUGUI |
| Image | Image |
| Button | Button |
| InputField | InputField / TMP_InputField |
| ScrollView | ScrollRect |

### Unreal Engine映射

| JSON元素类型 | UMG组件 |
|--------------|----------|
| Panel | Panel / Border |
| Text | TextBlock |
| Image | Image |
| Button | Button |
| InputField | EditableText |
| ScrollView | ScrollBox |

## 完整示例

以下是一个登录界面的完整JSON示例：

```json
{
  "version": "1.0.0",
  "metadata": {
    "sourceType": "Figma",
    "sourceFile": "login_screen.fig",
    "exportTimestamp": "2023-10-27T10:30:00Z",
    "toolVersion": "UIGenerator/1.2.0"
  },
  "assets": [
    {
      "id": "asset_img_login_bg",
      "type": "Image",
      "path": "assets/images/login_bg.png"
    },
    {
      "id": "asset_img_button_normal",
      "type": "Image",
      "path": "assets/images/button_normal.png",
      "imageType": "Sliced",
      "sliceBorders": { "left": 10, "top": 10, "right": 10, "bottom": 10 }
    },
    {
      "id": "asset_img_button_pressed",
      "type": "Image",
      "path": "assets/images/button_pressed.png",
      "imageType": "Sliced",
      "sliceBorders": { "left": 10, "top": 10, "right": 10, "bottom": 10 }
    },
    {
      "id": "asset_img_input_bg",
      "type": "Image",
      "path": "assets/images/input_bg.png",
      "imageType": "Sliced",
      "sliceBorders": { "left": 5, "top": 5, "right": 5, "bottom": 5 }
    },
    {
      "id": "asset_font_main",
      "type": "Font",
      "path": "assets/fonts/main_font.ttf"
    }
  ],
  "rootElement": {
    "id": "login_panel",
    "name": "LoginPanel",
    "type": "Panel",
    "active": true,
    "rect": { "x": 0, "y": 0, "width": 800, "height": 600 },
    "layout": {
      "anchors": { "minX": 0.0, "minY": 0.0, "maxX": 1.0, "maxY": 1.0 },
      "margins": { "left": 0, "bottom": 0, "right": 0, "top": 0 },
      "pivot": { "x": 0.5, "y": 0.5 }
    },
    "style": {
      "opacity": 1.0,
      "backgroundImage": "asset_img_login_bg"
    },
    "children": [
      {
        "id": "title_text",
        "name": "TitleText",
        "type": "Text",
        "active": true,
        "rect": { "x": 0, "y": 100, "width": 300, "height": 60 },
        "layout": {
          "anchors": { "minX": 0.5, "minY": 0.0, "maxX": 0.5, "maxY": 0.0 },
          "margins": { "left": -150, "bottom": 100, "right": 150, "top": 160 },
          "pivot": { "x": 0.5, "y": 0.5 }
        },
        "style": {
          "text": {
            "content": "游戏登录",
            "fontAssetId": "asset_font_main",
            "fontSize": 36,
            "color": "#FFFFFFFF",
            "horizontalAlign": "Center",
            "verticalAlign": "Middle",
            "style": "Bold"
          }
        },
        "children": []
      },
      {
        "id": "username_input",
        "name": "UsernameInput",
        "type": "InputField",
        "active": true,
        "rect": { "x": 0, "y": 0, "width": 400, "height": 50 },
        "layout": {
          "anchors": { "minX": 0.5, "minY": 0.5, "maxX": 0.5, "maxY": 0.5 },
          "margins": { "left": -200, "bottom": 50, "right": 200, "top": 100 },
          "pivot": { "x": 0.5, "y": 0.5 }
        },
        "style": {
          "backgroundImage": "asset_img_input_bg"
        },
        "componentProps": {
          "InputField": {
            "contentType": "Standard",
            "lineType": "SingleLine",
            "characterLimit": 20,
            "placeholderText": "请输入用户名...",
            "placeholderColor": "#FF808080",
            "placeholderFontAssetId": "asset_font_main",
            "textComponentRef": "username_input_text"
          }
        },
        "children": [
          {
            "id": "username_input_text",
            "name": "UsernameInputText",
            "type": "Text",
            "active": true,
            "rect": { "x": 10, "y": 0, "width": 380, "height": 50 },
            "layout": {
              "anchors": { "minX": 0.0, "minY": 0.0, "maxX": 1.0, "maxY": 1.0 },
              "margins": { "left": 10, "bottom": 0, "right": 10, "top": 0 },
              "pivot": { "x": 0.5, "y": 0.5 }
            },
            "style": {
              "text": {
                "content": "",
                "fontAssetId": "asset_font_main",
                "fontSize": 24,
                "color": "#FF333333",
                "horizontalAlign": "Left",
                "verticalAlign": "Middle"
              }
            },
            "children": []
          }
        ]
      },
      {
        "id": "password_input",
        "name": "PasswordInput",
        "type": "InputField",
        "active": true,
        "rect": { "x": 0, "y": -75, "width": 400, "height": 50 },
        "layout": {
          "anchors": { "minX": 0.5, "minY": 0.5, "maxX": 0.5, "maxY": 0.5 },
          "margins": { "left": -200, "bottom": -25, "right": 200, "top": 25 },
          "pivot": { "x": 0.5, "y": 0.5 }
        },
        "style": {
          "backgroundImage": "asset_img_input_bg"
        },
        "componentProps": {
          "InputField": {
            "contentType": "Password",
            "lineType": "SingleLine",
            "characterLimit": 20,
            "placeholderText": "请输入密码...",
            "placeholderColor": "#FF808080",
            "placeholderFontAssetId": "asset_font_main",
            "textComponentRef": "password_input_text"
          }
        },
        "children": [
          {
            "id": "password_input_text",
            "name": "PasswordInputText",
            "type": "Text",
            "active": true,
            "rect": { "x": 10, "y": 0, "width": 380, "height": 50 },
            "layout": {
              "anchors": { "minX": 0.0, "minY": 0.0, "maxX": 1.0, "maxY": 1.0 },
              "margins": { "left": 10, "bottom": 0, "right": 10, "top": 0 },
              "pivot": { "x": 0.5, "y": 0.5 }
            },
            "style": {
              "text": {
                "content": "",
                "fontAssetId": "asset_font_main",
                "fontSize": 24,
                "color": "#FF333333",
                "horizontalAlign": "Left",
                "verticalAlign": "Middle"
              }
            },
            "children": []
          }
        ]
      },
      {
        "id": "login_button",
        "name": "LoginButton",
        "type": "Button",
        "active": true,
        "rect": { "x": 0, "y": -150, "width": 200, "height": 60 },
        "layout": {
          "anchors": { "minX": 0.5, "minY": 0.5, "maxX": 0.5, "maxY": 0.5 },
          "margins": { "left": -100, "bottom": -180, "right": 100, "top": -120 },
          "pivot": { "x": 0.5, "y": 0.5 }
        },
        "style": {
          "backgroundImage": "asset_img_button_normal"
        },
        "componentProps": {
          "Button": {
            "interactable": true,
            "transitionType": "SpriteSwap",
            "states": {
              "normal": { "spriteAssetId": "asset_img_button_normal", "color": "#FFFFFFFF" },
              "highlighted": { "spriteAssetId": "asset_img_button_normal", "color": "#FFF0F0F0" },
              "pressed": { "spriteAssetId": "asset_img_button_pressed", "color": "#FFCCCCCC" },
              "disabled": { "spriteAssetId": "asset_img_button_normal", "color": "#FF888888" }
            }
          }
        },
        "children": [
          {
            "id": "login_button_text",
            "name": "LoginButtonText",
            "type": "Text",
            "active": true,
            "rect": { "x": 0, "y": 0, "width": 200, "height": 60 },
            "layout": {
              "anchors": { "minX": 0.0, "minY": 0.0, "maxX": 1.0, "maxY": 1.0 },
              "margins": { "left": 0, "bottom": 0, "right": 0, "top": 0 },
              "pivot": { "x": 0.5, "y": 0.5 }
            },
            "style": {
              "text": {
                "content": "登录",
                "fontAssetId": "asset_font_main",
                "fontSize": 28,
                "color": "#FFFFFFFF",
                "horizontalAlign": "Center",
                "verticalAlign": "Middle",
                "style": "Bold"
              }
            },
            "children": []
          }
        ]
      }
    ]
  }
}
```

## 最佳实践

### 1. 命名规范

- 使用有意义的ID和名称，反映UI元素的功能
- 采用驼峰命名法或下划线命名法，保持一致性
- 为不同类型的UI元素使用前缀，如`btn_`表示按钮，`txt_`表示文本

### 2. 结构组织

- 保持层次结构清晰，避免过深的嵌套
- 相关UI元素应组织在同一父节点下
- 使用Panel作为组织容器，提高结构清晰度

### 3. 性能优化

- 避免不必要的嵌套和组件
- 合理使用布局组件，减少手动定位
- 对于复杂UI，考虑拆分为多个预制体

### 4. 资源管理

- 使用一致的资源命名和路径规则
- 优化图片资源，使用九宫格切图减少资源大小
- 合理组织字体资源，避免过多字体变体

## 与游戏引擎的集成

### JSON预制体导出工具

游戏UI生成器平台提供了JSON预制体导出工具，它能够：

- 分析UI设计，识别组件和结构
- 提取样式和布局信息
- 生成标准化的JSON数据
- 支持多种设计工具格式

### 引擎预制体导入插件

平台还提供了针对不同游戏引擎的预制体导入插件：

- **Cocos Creator预制体导入插件**：将JSON直接转换为Cocos预制体
- **Unity预制体导入插件**：将JSON转换为Unity UGUI或UI Toolkit预制体
- **Unreal Engine预制体导入插件**：将JSON转换为UMG控件蓝图

## 结论

预制体中间JSON格式是游戏UI生成器平台中连接设计和实现的关键桥梁。通过标准化的JSON结构，我们可以实现UI设计到游戏引擎的无缝转换，大幅提高UI开发效率。该格式的设计兼顾了通用性和特殊性，既支持跨引擎的UI描述，又能适应不同引擎的特殊需求。

通过本文档的指导，开发者可以理解预制体JSON的结构和用法，有效地利用JSON预制体导出工具和引擎预制体导入插件，实现高效的游戏UI开发流程。


