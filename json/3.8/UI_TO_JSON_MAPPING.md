# UI 分析结果到 JSON 的映射指南

本文档详细说明了如何将 UI 截图分析结果转换为 JSON 文件的具体步骤和方法。

## 1. 基础结构映射

### 1.1 节点基础属性
```json
{
    "name": "节点名称",          // 从分析结果中的命名获取
    "position": {               // 从位置测量结果获取
        "x": 0,                // 相对父节点的 X 坐标
        "y": 0,                // 相对父节点的 Y 坐标
        "z": 0                 // 层级深度
    },
    "rotation": {              // 从旋转角度测量获取
        "x": 0,
        "y": 0,
        "z": 0
    },
    "scale": {                 // 从缩放比例测量获取
        "x": 1,
        "y": 1,
        "z": 1
    },
    "active": true,            // 从可见性分析获取
    "layer": 1                 // 从层级分析获取
}
```

### 1.2 组件映射规则

#### Panel 组件
```json
{
    "__type__": "cc.Panel",
    "color": "#FFFFFF",        // 从背景色分析获取
    "opacity": 255,            // 从透明度分析获取
    "size": {                  // 从尺寸测量获取
        "width": 100,
        "height": 100
    }
}
```

#### Label 组件
```json
{
    "__type__": "cc.Label",
    "string": "文本内容",      // 从文本内容分析获取
    "fontSize": 24,            // 从字体大小测量获取
    "lineHeight": 30,          // 从行高测量获取
    "color": "#000000",        // 从文字颜色分析获取
    "enableOutline": true,     // 从描边效果分析获取
    "outlineColor": "#FFFFFF", // 从描边颜色分析获取
    "outlineWidth": 2          // 从描边宽度测量获取
}
```

#### Sprite 组件
```json
{
    "__type__": "cc.Sprite",
    "spriteFrame": "textures/xxx", // 从图片资源分析获取
    "color": "#FFFFFF",            // 从颜色叠加分析获取
    "type": 0,                     // 从图片类型分析获取
    "sizeMode": 1,                 // 从缩放模式分析获取
    "trim": true                   // 从裁剪设置分析获取
}
```

## 2. 布局映射

### 2.1 位置计算
```json
{
    "position": {
        "x": "父节点宽度 * 0.5",  // 使用相对位置计算
        "y": "父节点高度 * 0.5"
    }
}
```

### 2.2 布局组件
```json
{
    "__type__": "cc.Layout",
    "type": 1,                    // 布局类型：1=水平，2=垂直，3=网格
    "resizeMode": 1,              // 调整模式：1=容器，2=子节点
    "padding": {                  // 从内边距测量获取
        "left": 10,
        "right": 10,
        "top": 10,
        "bottom": 10
    },
    "spacingX": 10,              // 从水平间距测量获取
    "spacingY": 10               // 从垂直间距测量获取
}
```

## 3. 交互映射

### 3.1 按钮组件
```json
{
    "__type__": "cc.Button",
    "interactable": true,        // 从交互状态分析获取
    "transition": 1,             // 过渡类型：1=颜色，2=精灵，3=缩放
    "normalColor": "#FFFFFF",    // 从正常状态颜色获取
    "pressedColor": "#CCCCCC",   // 从按下状态颜色获取
    "hoverColor": "#EEEEEE",     // 从悬停状态颜色获取
    "disabledColor": "#999999"   // 从禁用状态颜色获取
}
```

### 3.2 输入组件
```json
{
    "__type__": "cc.EditBox",
    "placeholder": "请输入...",  // 从占位文本分析获取
    "maxLength": 20,            // 从输入限制分析获取
    "inputMode": 1,             // 输入模式：1=任意，2=数字，3=邮箱等
    "fontSize": 24,             // 从字体大小测量获取
    "lineHeight": 30            // 从行高测量获取
}
```

## 4. 特殊效果映射

### 4.1 动画组件
```json
{
    "__type__": "cc.Animation",
    "clips": [                  // 从动画效果分析获取
        {
            "name": "show",
            "duration": 0.3,
            "sample": 60,
            "curveData": {
                "property": "scale",
                "keyframes": [
                    {"frame": 0, "value": 0},
                    {"frame": 30, "value": 1}
                ]
            }
        }
    ]
}
```

### 4.2 特效组件
```json
{
    "__type__": "cc.Effect",
    "type": "blur",            // 从特效类型分析获取
    "intensity": 5,            // 从特效强度分析获取
    "color": "#FFFFFF",        // 从特效颜色分析获取
    "duration": 0.5            // 从持续时间分析获取
}
```

## 5. 映射示例

### 5.1 登录界面映射
```json
{
    "name": "LoginPanel",
    "layer": 1,
    "components": [
        {
            "__type__": "cc.Sprite",
            "spriteFrame": "textures/login_bg",
            "sizeMode": 1
        }
    ],
    "children": [
        {
            "name": "Title",
            "components": [
                {
                    "__type__": "cc.Label",
                    "string": "游戏登录",
                    "fontSize": 32,
                    "color": "#FFFFFF"
                }
            ]
        },
        {
            "name": "InputArea",
            "components": [
                {
                    "__type__": "cc.Layout",
                    "type": 2,
                    "spacingY": 20
                }
            ],
            "children": [
                {
                    "name": "UsernameInput",
                    "components": [
                        {
                            "__type__": "cc.EditBox",
                            "placeholder": "请输入用户名",
                            "maxLength": 20
                        }
                    ]
                },
                {
                    "name": "PasswordInput",
                    "components": [
                        {
                            "__type__": "cc.EditBox",
                            "placeholder": "请输入密码",
                            "maxLength": 20,
                            "inputMode": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "LoginButton",
            "components": [
                {
                    "__type__": "cc.Button",
                    "normalColor": "#4CAF50",
                    "pressedColor": "#45A049"
                },
                {
                    "__type__": "cc.Label",
                    "string": "登录",
                    "color": "#FFFFFF"
                }
            ]
        }
    ]
}
```

## 6. 映射注意事项

1. **属性精度**
   - 位置和尺寸保留两位小数
   - 颜色使用十六进制格式
   - 时间使用秒为单位

2. **资源引用**
   - 使用相对路径
   - 统一资源命名规范
   - 注意资源依赖关系

3. **性能优化**
   - 避免重复属性
   - 合理使用默认值
   - 优化组件结构

4. **兼容性考虑**
   - 检查属性支持范围
   - 处理版本差异
   - 提供降级方案

## 7. 验证方法

1. **结构验证**
   - 检查必填属性
   - 验证属性类型
   - 确认引用关系

2. **功能验证**
   - 测试交互效果
   - 验证动画表现
   - 检查布局正确性

3. **性能验证**
   - 检查渲染层级
   - 验证内存占用
   - 测试加载性能 