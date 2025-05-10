# UI Prefab JSON 格式说明文档

## 目录
- [概述](#概述)
- [基本结构](#基本结构)
- [节点属性](#节点属性)
- [组件系统](#组件系统)
- [特殊组件](#特殊组件)
- [示例说明](#示例说明)
- [最佳实践](#最佳实践)

## 概述

本文档描述了用于描述 UI 预制体的 JSON 格式。该格式支持复杂的 UI 层级结构，包含多种组件类型，并支持各种 UI 特性。

## 基本结构

每个 UI 节点都包含以下基本属性：

```json
{
  "name": "节点名称",
  "pos": { "x": 0.00, "y": 0.00 },
  "scale": { "x": 1.00, "y": 1.00 },
  "rotation": 0.00,
  "active": true,
  "components": [],
  "children": []
}
```

### 必需属性
- `name`: 节点名称，用于标识节点
- `pos`: 节点位置，包含 x 和 y 坐标
- `scale`: 节点缩放，包含 x 和 y 缩放值
- `rotation`: 节点旋转角度（Z轴）
- `active`: 节点是否激活

## 节点属性

### 位置和变换
- `pos`: 节点在父节点坐标系中的位置
  - `x`: X 轴坐标，保留2位小数
  - `y`: Y 轴坐标，保留2位小数
- `scale`: 节点缩放
  - `x`: X 轴缩放，保留2位小数
  - `y`: Y 轴缩放，保留2位小数
- `rotation`: Z 轴旋转角度，保留2位小数

### 状态
- `active`: 布尔值，表示节点是否激活
- `button`: 布尔值，表示节点是否有 BoxCollider 组件

## 组件系统

支持三种主要组件类型：

### 1. UILabel 组件
用于显示文本的组件。

```json
{
  "type": "UILabel",
  "size": { "width": 100, "height": 50 },
  "color": "#000000",
  "depth": 1,
  "pivot": "Center",
  "text": "文本内容",
  "fontSize": 20,
  "overflow": "ShrinkContent",
  "outlineColor": "#FFFFFF",
  "outlineWidth": 2,
  "spacingX": 0,
  "spacingY": 0,
  "bitmapFont": "字体名称"
}
```

### 2. UISprite 组件
用于显示精灵图像的组件。

```json
{
  "type": "UISprite",
  "size": { "width": 100, "height": 100 },
  "color": "#FFFFFF",
  "depth": 1,
  "pivot": "Center",
  "spType": "Simple",
  "spName": "精灵名称",
  "atlas": "图集名称",
  "border": {
    "left": 10,
    "right": 10,
    "top": 10,
    "bottom": 10
  },
  "fillDir": 0
}
```

### 3. UITexture 组件
用于显示纹理的组件。

```json
{
  "type": "UITexture",
  "size": { "width": 100, "height": 100 },
  "color": "#FFFFFF",
  "depth": 1,
  "pivot": "Center",
  "spName": "纹理名称",
  "spType": "Simple"
}
```

## 特殊组件

### 滚动视图 (ScrollView)
用于创建可滚动的内容区域。

```json
{
  "scrollView": {
    "offset": { "x": 0, "y": 0 },
    "size": { "x": 700, "y": 400 },
    "movement": 1
  }
}
```

### 网格布局 (Grid)
用于创建网格布局。

```json
{
  "grid": {
    "arrangement": 0
  }
}
```

## 示例说明

查看 `example.json` 文件，可以看到一个完整的 UI 界面示例，包含：

1. 主面板 (MainPanel)
   - 背景精灵
   - 标题文本
   - 内容面板（带滚动视图）
   - 按钮组（带网格布局）

2. 内容面板 (ContentPanel)
   - 三个列表项
   - 每个列表项包含背景和文本

3. 按钮组 (ButtonGroup)
   - 关闭按钮（红色）
   - 确认按钮（绿色）

## 最佳实践

1. **命名规范**
   - 使用有意义的节点名称
   - 遵循驼峰命名法
   - 避免使用特殊字符

2. **组件组织**
   - 将相关组件放在同一个节点下
   - 使用适当的深度值控制渲染顺序
   - 合理使用九宫格精灵优化性能

3. **布局技巧**
   - 使用网格布局对齐元素
   - 合理设置锚点位置
   - 使用滚动视图处理大量内容

4. **性能优化**
   - 使用图集管理精灵
   - 合理设置文本溢出处理
   - 控制节点层级深度

5. **资源管理**
   - 统一管理图集资源
   - 使用位图字体优化文本渲染
   - 合理设置颜色值

## 注意事项

1. 所有数值类型保留2位小数
2. 颜色值使用十六进制格式（#RRGGBB）
3. 确保组件深度值正确设置
4. 注意节点层级关系
5. 合理使用特殊组件（滚动视图、网格等） 