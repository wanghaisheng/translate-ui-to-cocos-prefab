#!/bin/bash

# 添加新手/7日活动页面脚本
# 此脚本将添加新手引导、7日活动等相关页面到现有的UI结构中

# 定义新手引导相关界面
NEWCOMER_INTERFACES=(
    "新手引导|新手教程、操作指引、功能解锁等"
    "新手任务|新手任务列表、任务进度、任务奖励等"
    "新手礼包|新手专属礼包、限时礼包、成长礼包等"
    "新手特权|新手专属特权、限时特权、成长特权等"
    "新手活动|新手专属活动、限时活动、成长活动等"
    "新手商城|新手专属商城、限时商品、成长商品等"
    "新手客服|新手专属客服、VIP服务、问题处理等"
    "新手帮助|新手相关帮助、常见问题、使用指南等"
)

# 定义7日活动相关界面
SEVEN_DAY_INTERFACES=(
    "七日登录|七日登录奖励、登录进度、奖励领取等"
    "七日任务|七日任务列表、任务进度、任务奖励等"
    "七日礼包|七日专属礼包、限时礼包、节日礼包等"
    "七日特权|七日专属特权、限时特权、节日特权等"
    "七日活动|七日专属活动、限时活动、节日活动等"
    "七日商城|七日专属商城、限时商品、节日商品等"
    "七日客服|七日专属客服、VIP服务、问题处理等"
    "七日帮助|七日相关帮助、常见问题、使用指南等"
)

# 定义签到相关界面
CHECK_IN_INTERFACES=(
    "每日签到|每日签到奖励、签到进度、连续签到等"
    "每周签到|每周签到奖励、签到进度、连续签到等"
    "每月签到|每月签到奖励、签到进度、连续签到等"
    "签到日历|签到日历展示、签到记录、签到统计等"
    "签到礼包|签到专属礼包、限时礼包、节日礼包等"
    "签到特权|签到专属特权、限时特权、节日特权等"
    "签到活动|签到专属活动、限时活动、节日活动等"
    "签到商城|签到专属商城、限时商品、节日商品等"
)

# 定义成长相关界面
GROWTH_INTERFACES=(
    "成长任务|成长任务列表、任务进度、任务奖励等"
    "成长礼包|成长专属礼包、限时礼包、节日礼包等"
    "成长特权|成长专属特权、限时特权、节日特权等"
    "成长活动|成长专属活动、限时活动、节日活动等"
    "成长商城|成长专属商城、限时商品、节日商品等"
    "成长客服|成长专属客服、VIP服务、问题处理等"
    "成长帮助|成长相关帮助、常见问题、使用指南等"
    "成长基金|成长基金详情、收益计算、领取记录等"
)

# 获取所有风格目录
STYLE_DIRS=$(find ui-examples/examples -maxdepth 1 -type d | grep -v "ui-examples/examples$" | sed 's|ui-examples/examples/||')

# 获取所有游戏类型目录
GAME_TYPE_DIRS=$(find ui-examples/examples/* -maxdepth 1 -type d | grep -v "ui-examples/examples/[^/]*$" | sed 's|ui-examples/examples/[^/]*/||')

# 为每个风格和游戏类型添加新手/7日活动页面
for style_dir in $STYLE_DIRS; do
    for game_type_dir in $GAME_TYPE_DIRS; do
        echo "处理 $style_dir/$game_type_dir 的新手/7日活动页面..."
        
        # 添加新手引导相关界面
        for interface in "${NEWCOMER_INTERFACES[@]}"; do
            IFS='|' read -r interface_dir interface_name interface_desc <<< "$interface"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir"
            
            # 创建横屏和竖屏示例
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/16-9"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/9-16"
            
            # 创建示例1和示例2
            for layout in "16-9" "9-16"; do
                for example in "example1" "example2"; do
                    mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example"
                    
                    # 创建description.txt
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/description.txt" << EOF
# $style_dir 风格 - $game_type_dir 游戏 - $interface_name - $layout 布局 - $example

## 界面描述
这是一个$style_dir风格的$game_type_dir游戏的$interface_name示例，采用$layout布局。

## 界面功能
$(echo $interface_desc | tr ',' '\n' | sed 's/^/- /')

## 布局说明
- $layout布局的特点和优势
- 界面元素的位置和排列
- 交互元素的设计和反馈
EOF
                    
                    # 创建data.json
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/data.json" << EOF
{
    "name": "$interface_name",
    "style": "$style_dir",
    "gameType": "$game_type_dir",
    "layout": "$layout",
    "version": "1.0.0",
    "description": "$interface_desc",
    "components": [
        {
            "type": "Panel",
            "name": "MainPanel",
            "position": {"x": 0, "y": 0, "z": 0},
            "size": {"width": 1920, "height": 1080},
            "color": "#FFFFFF",
            "opacity": 255,
            "children": []
        }
    ]
}
EOF
                done
            done
        done
        
        # 添加7日活动相关界面
        for interface in "${SEVEN_DAY_INTERFACES[@]}"; do
            IFS='|' read -r interface_dir interface_name interface_desc <<< "$interface"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir"
            
            # 创建横屏和竖屏示例
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/16-9"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/9-16"
            
            # 创建示例1和示例2
            for layout in "16-9" "9-16"; do
                for example in "example1" "example2"; do
                    mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example"
                    
                    # 创建description.txt
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/description.txt" << EOF
# $style_dir 风格 - $game_type_dir 游戏 - $interface_name - $layout 布局 - $example

## 界面描述
这是一个$style_dir风格的$game_type_dir游戏的$interface_name示例，采用$layout布局。

## 界面功能
$(echo $interface_desc | tr ',' '\n' | sed 's/^/- /')

## 布局说明
- $layout布局的特点和优势
- 界面元素的位置和排列
- 交互元素的设计和反馈
EOF
                    
                    # 创建data.json
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/data.json" << EOF
{
    "name": "$interface_name",
    "style": "$style_dir",
    "gameType": "$game_type_dir",
    "layout": "$layout",
    "version": "1.0.0",
    "description": "$interface_desc",
    "components": [
        {
            "type": "Panel",
            "name": "MainPanel",
            "position": {"x": 0, "y": 0, "z": 0},
            "size": {"width": 1920, "height": 1080},
            "color": "#FFFFFF",
            "opacity": 255,
            "children": []
        }
    ]
}
EOF
                done
            done
        done
        
        # 添加签到相关界面
        for interface in "${CHECK_IN_INTERFACES[@]}"; do
            IFS='|' read -r interface_dir interface_name interface_desc <<< "$interface"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir"
            
            # 创建横屏和竖屏示例
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/16-9"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/9-16"
            
            # 创建示例1和示例2
            for layout in "16-9" "9-16"; do
                for example in "example1" "example2"; do
                    mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example"
                    
                    # 创建description.txt
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/description.txt" << EOF
# $style_dir 风格 - $game_type_dir 游戏 - $interface_name - $layout 布局 - $example

## 界面描述
这是一个$style_dir风格的$game_type_dir游戏的$interface_name示例，采用$layout布局。

## 界面功能
$(echo $interface_desc | tr ',' '\n' | sed 's/^/- /')

## 布局说明
- $layout布局的特点和优势
- 界面元素的位置和排列
- 交互元素的设计和反馈
EOF
                    
                    # 创建data.json
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/data.json" << EOF
{
    "name": "$interface_name",
    "style": "$style_dir",
    "gameType": "$game_type_dir",
    "layout": "$layout",
    "version": "1.0.0",
    "description": "$interface_desc",
    "components": [
        {
            "type": "Panel",
            "name": "MainPanel",
            "position": {"x": 0, "y": 0, "z": 0},
            "size": {"width": 1920, "height": 1080},
            "color": "#FFFFFF",
            "opacity": 255,
            "children": []
        }
    ]
}
EOF
                done
            done
        done
        
        # 添加成长相关界面
        for interface in "${GROWTH_INTERFACES[@]}"; do
            IFS='|' read -r interface_dir interface_name interface_desc <<< "$interface"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir"
            
            # 创建横屏和竖屏示例
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/16-9"
            mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/9-16"
            
            # 创建示例1和示例2
            for layout in "16-9" "9-16"; do
                for example in "example1" "example2"; do
                    mkdir -p "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example"
                    
                    # 创建description.txt
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/description.txt" << EOF
# $style_dir 风格 - $game_type_dir 游戏 - $interface_name - $layout 布局 - $example

## 界面描述
这是一个$style_dir风格的$game_type_dir游戏的$interface_name示例，采用$layout布局。

## 界面功能
$(echo $interface_desc | tr ',' '\n' | sed 's/^/- /')

## 布局说明
- $layout布局的特点和优势
- 界面元素的位置和排列
- 交互元素的设计和反馈
EOF
                    
                    # 创建data.json
                    cat > "ui-examples/examples/$style_dir/$game_type_dir/$interface_dir/$layout/$example/data.json" << EOF
{
    "name": "$interface_name",
    "style": "$style_dir",
    "gameType": "$game_type_dir",
    "layout": "$layout",
    "version": "1.0.0",
    "description": "$interface_desc",
    "components": [
        {
            "type": "Panel",
            "name": "MainPanel",
            "position": {"x": 0, "y": 0, "z": 0},
            "size": {"width": 1920, "height": 1080},
            "color": "#FFFFFF",
            "opacity": 255,
            "children": []
        }
    ]
}
EOF
                done
            done
        done
    done
done

# 更新interfaces目录
for interface in "${NEWCOMER_INTERFACES[@]}" "${SEVEN_DAY_INTERFACES[@]}" "${CHECK_IN_INTERFACES[@]}" "${GROWTH_INTERFACES[@]}"; do
    IFS='|' read -r interface_dir interface_name interface_desc <<< "$interface"
    mkdir -p "ui-examples/interfaces/$interface_dir"
    
    # 创建界面类型README
    cat > "ui-examples/interfaces/$interface_dir/README.md" << EOF
# $interface_name

## 功能说明
$(echo $interface_desc | tr ',' '\n' | sed 's/^/- /')

## 设计元素
- 根据界面功能设计合适的布局和组件
- 考虑用户操作习惯和交互逻辑
- 优化视觉表现和反馈效果

## 适配考虑
- 支持不同分辨率和设备
- 考虑横竖屏切换的布局变化
- 优化不同设备的操作体验
EOF
done

echo "新手/7日活动页面添加完成！" 