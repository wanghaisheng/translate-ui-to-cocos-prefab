# Cocos Creator 3.8 UI Prefab JSON 格式说明

本文档详细说明了 Cocos Creator 3.8 中 UI 预制体的 JSON 格式规范。

## 目录结构

```
json/3.8/
├── schema.json    # JSON Schema 定义文件
├── example.json   # 示例数据文件
└── README.md      # 本文档
```

## 基本结构

每个 UI 节点都包含以下基本属性：

```json
{
    "name": "节点名称",
    "position": { "x": 0, "y": 0, "z": 0 },
    "rotation": { "x": 0, "y": 0, "z": 0, "w": 1 },
    "scale": { "x": 1, "y": 1, "z": 1 },
    "active": true,
    "components": [],
    "children": []
}
```

## 组件类型

### 1. Label 组件 (文本标签)

用于显示文本内容，支持字体、颜色、描边等属性。

```json
{
    "__type__": "cc.Label",
    "string": "文本内容",
    "fontSize": 32,
    "lineHeight": 40,
    "color": { "r": 0, "g": 0, "b": 0, "a": 255 },
    "enableOutline": true,
    "outlineColor": { "r": 255, "g": 255, "b": 255, "a": 255 },
    "outlineWidth": 2
}
```

### 2. Sprite 组件 (精灵/图片)

用于显示图片资源，支持颜色叠加、裁剪等效果。

```json
{
    "__type__": "cc.Sprite",
    "spriteFrame": "textures/background",
    "color": { "r": 255, "g": 255, "b": 255, "a": 255 },
    "type": 0,
    "sizeMode": 1,
    "trim": true
}
```

### 3. Button 组件 (按钮)

实现交互按钮，支持多种状态和过渡效果。

```json
{
    "__type__": "cc.Button",
    "interactable": true,
    "transition": 1,
    "normalColor": { "r": 255, "g": 255, "b": 255, "a": 255 },
    "pressedColor": { "r": 200, "g": 200, "b": 200, "a": 255 },
    "hoverColor": { "r": 230, "g": 230, "b": 230, "a": 255 },
    "disabledColor": { "r": 150, "g": 150, "b": 150, "a": 255 }
}
```

### 4. ScrollView 组件 (滚动视图)

实现可滚动区域，支持水平和垂直滚动。

```json
{
    "__type__": "cc.ScrollView",
    "content": { "width": 600, "height": 400 },
    "horizontal": false,
    "vertical": true,
    "inertia": true,
    "brake": 0.5,
    "elastic": true,
    "bounceDuration": 0.5
}
```

### 5. Layout 组件 (布局)

用于自动布局，支持多种布局方式和间距设置。

```json
{
    "__type__": "cc.Layout",
    "type": 1,
    "resizeMode": 1,
    "paddingLeft": 10,
    "paddingRight": 10,
    "paddingTop": 10,
    "paddingBottom": 10,
    "spacingX": 0,
    "spacingY": 10,
    "verticalDirection": 0,
    "horizontalDirection": 0
}
```

## 属性说明

### 位置和变换

- `position`: 3D 位置坐标
  - `x`: 水平位置
  - `y`: 垂直位置
  - `z`: 深度位置

- `rotation`: 四元数旋转
  - `x`, `y`, `z`, `w`: 四元数分量

- `scale`: 3D 缩放
  - `x`: 水平缩放
  - `y`: 垂直缩放
  - `z`: 深度缩放

### 颜色系统

所有颜色使用 RGBA 格式：
- `r`: 红色分量 (0-255)
- `g`: 绿色分量 (0-255)
- `b`: 蓝色分量 (0-255)
- `a`: 透明度分量 (0-255)

### 布局属性

- `padding`: 内边距
  - `paddingLeft`: 左内边距
  - `paddingRight`: 右内边距
  - `paddingTop`: 上内边距
  - `paddingBottom`: 下内边距

- `spacing`: 间距
  - `spacingX`: 水平间距
  - `spacingY`: 垂直间距

## 使用示例

查看 `example.json` 文件，它展示了一个完整的 UI 界面示例，包含：
1. 主面板（背景）
2. 标题文本
3. 可滚动的内容区域
4. 列表项
5. 按钮组

## 最佳实践

1. **命名规范**
   - 使用有意义的节点名称
   - 遵循驼峰命名法
   - 避免使用特殊字符

2. **组件组织**
   - 相关组件放在同一个节点下
   - 使用 Layout 组件管理子节点布局
   - 合理使用嵌套结构

3. **性能优化**
   - 避免过深的节点层级
   - 合理使用 active 属性控制显示
   - 注意 ScrollView 的内容大小

4. **资源管理**
   - 使用正确的资源路径
   - 注意资源命名规范
   - 合理使用颜色叠加

## 注意事项

1. 所有数值属性都使用 number 类型
2. 颜色值范围是 0-255
3. 位置和尺寸使用像素单位
4. 旋转使用四元数表示
5. 组件类型必须使用正确的 `__type__` 值

## 验证

使用 `schema.json` 文件可以验证 JSON 数据的合法性，确保：
- 所有必需的属性都存在
- 属性值类型正确
- 组件配置完整

## 相关文档

- [Cocos Creator 3.8 官方文档](https://docs.cocos.com/creator/3.8/manual/zh/)
- [UI 系统](https://docs.cocos.com/creator/3.8/manual/zh/ui-system/)
- [预制体系统](https://docs.cocos.com/creator/3.8/manual/zh/asset/prefab.html) 