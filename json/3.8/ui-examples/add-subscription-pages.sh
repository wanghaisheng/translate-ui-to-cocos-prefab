#!/bin/bash

# 添加订阅和消费促进页面脚本
# 此脚本将添加订阅和消费促进相关的页面到现有的UI结构中

# 定义订阅相关界面
SUBSCRIPTION_INTERFACES=(
    "订阅中心|订阅套餐展示、订阅权益说明、订阅状态等"
    "月度订阅|月度订阅详情、月度特权、续订提醒等"
    "季度订阅|季度订阅详情、季度特权、续订提醒等"
    "年度订阅|年度订阅详情、年度特权、续订提醒等"
    "订阅特权|订阅专属内容、特权功能、专属奖励等"
    "订阅礼包|订阅专属礼包、限时礼包、节日礼包等"
    "订阅活动|订阅专属活动、限时活动、节日活动等"
    "订阅商城|订阅专属商城、限时商品、节日商品等"
    "订阅客服|订阅专属客服、VIP服务、问题处理等"
    "订阅帮助|订阅相关帮助、常见问题、使用指南等"
)

# 定义消费促进界面
CONSUMPTION_INTERFACES=(
    "限时特惠|限时折扣、特惠商品、倒计时等"
    "首充礼包|首充奖励、首充特权、首充礼包等"
    "成长基金|成长基金详情、收益计算、领取记录等"
    "战令系统|战令等级、战令任务、战令奖励等"
    "通行证|通行证等级、通行证任务、通行证奖励等"
    "每日特惠|每日折扣、每日商品、每日礼包等"
    "周卡月卡|周卡月卡详情、特权说明、购买界面等"
    "充值返利|充值返利规则、返利计算、返利领取等"
    "消费礼包|消费满减、消费礼包、消费特权等"
    "节日活动|节日特惠、节日礼包、节日活动等"
    "限时活动|限时折扣、限时礼包、限时特权等"
    "新人礼包|新人特惠、新人礼包、新人特权等"
    "回归礼包|回归特惠、回归礼包、回归特权等"
    "推荐商品|个性化推荐、热门商品、猜你喜欢等"
    "促销活动|促销规则、促销商品、促销礼包等"
)

# 获取所有风格目录
STYLE_DIRS=$(find ui-examples/examples -maxdepth 1 -type d | grep -v "ui-examples/examples$" | sed 's|ui-examples/examples/||')

# 获取所有游戏类型目录
GAME_TYPE_DIRS=$(find ui-examples/examples/* -maxdepth 1 -type d | grep -v "ui-examples/examples/[^/]*$" | sed 's|ui-examples/examples/[^/]*/||')

# 为每个风格和游戏类型添加订阅和消费促进页面
for style_dir in $STYLE_DIRS; do
    for game_type_dir in $GAME_TYPE_DIRS; do
        echo "处理 $style_dir/$game_type_dir 的订阅和消费促进页面..."
        
        # 添加订阅相关界面
        for interface in "${SUBSCRIPTION_INTERFACES[@]}"; do
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
        
        # 添加消费促进界面
        for interface in "${CONSUMPTION_INTERFACES[@]}"; do
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
for interface in "${SUBSCRIPTION_INTERFACES[@]}" "${CONSUMPTION_INTERFACES[@]}"; do
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

echo "订阅和消费促进页面添加完成！" 