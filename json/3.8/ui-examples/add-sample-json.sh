#!/bin/bash

# 添加示例JSON文件脚本
# 为UI示例添加更详细的JSON内容

# 定义颜色方案
declare -A COLOR_SCHEMES
COLOR_SCHEMES["guofeng"]="#8B4513,#D2691E,#F4A460,#DEB887,#FFF8DC"
COLOR_SCHEMES["oumei"]="#2F4F4F,#4682B4,#708090,#B0C4DE,#F0F8FF"
COLOR_SCHEMES["ercitciyuan"]="#FF69B4,#FFB6C1,#FFC0CB,#FFE4E1,#FFF0F5"
COLOR_SCHEMES["rihan"]="#F0F8FF,#E6E6FA,#D8BFD8,#DDA0DD,#EE82EE"
COLOR_SCHEMES["qban-katong"]="#98FB98,#90EE90,#32CD32,#00FF00,#00FA9A"
COLOR_SCHEMES["kehuan"]="#000080,#0000CD,#4169E1,#1E90FF,#00BFFF"
COLOR_SCHEMES["junshi"]="#556B2F,#6B8E23,#808000,#9ACD32,#ADFF2F"

# 定义字体方案
declare -A FONT_SCHEMES
FONT_SCHEMES["guofeng"]="STKaiti,STSong,SimSun,NSimSun,FangSong"
FONT_SCHEMES["oumei"]="Arial,Helvetica,Times New Roman,Georgia,Verdana"
FONT_SCHEMES["ercitciyuan"]="Comic Sans MS,Comic Sans,Chalkboard SE,Chalkboard,Marker Felt"
FONT_SCHEMES["rihan"]="MS Gothic,MS PGothic,MS Mincho,MS PMincho,Meiryo"
FONT_SCHEMES["qban-katong"]="Comic Sans MS,Comic Sans,Chalkboard SE,Chalkboard,Marker Felt"
FONT_SCHEMES["kehuan"]="Orbitron,Electrolize,Rajdhani,Audiowide,Share Tech Mono"
FONT_SCHEMES["junshi"]="Impact,Stencil Std,Black Ops One,Special Elite,Orbitron"

# 定义按钮样式
declare -A BUTTON_STYLES
BUTTON_STYLES["guofeng"]="rounded,gradient,shadow,outline"
BUTTON_STYLES["oumei"]="sharp,flat,shadow,outline"
BUTTON_STYLES["ercitciyuan"]="rounded,gradient,shadow,outline"
BUTTON_STYLES["rihan"]="rounded,gradient,shadow,outline"
BUTTON_STYLES["qban-katong"]="rounded,gradient,shadow,outline"
BUTTON_STYLES["kehuan"]="sharp,flat,glow,outline"
BUTTON_STYLES["junshi"]="sharp,flat,shadow,outline"

# 定义图标样式
declare -A ICON_STYLES
ICON_STYLES["guofeng"]="outline,filled,gradient,shadow"
ICON_STYLES["oumei"]="outline,filled,flat,shadow"
ICON_STYLES["ercitciyuan"]="outline,filled,gradient,shadow"
ICON_STYLES["rihan"]="outline,filled,gradient,shadow"
ICON_STYLES["qban-katong"]="outline,filled,gradient,shadow"
ICON_STYLES["kehuan"]="outline,filled,flat,glow"
ICON_STYLES["junshi"]="outline,filled,flat,shadow"

# 定义背景样式
declare -A BACKGROUND_STYLES
BACKGROUND_STYLES["guofeng"]="texture,gradient,pattern,image"
BACKGROUND_STYLES["oumei"]="solid,gradient,pattern,image"
BACKGROUND_STYLES["ercitciyuan"]="gradient,pattern,image,texture"
BACKGROUND_STYLES["rihan"]="gradient,pattern,image,texture"
BACKGROUND_STYLES["qban-katong"]="gradient,pattern,image,texture"
BACKGROUND_STYLES["kehuan"]="solid,gradient,pattern,image"
BACKGROUND_STYLES["junshi"]="solid,gradient,pattern,image"

# 定义动画效果
declare -A ANIMATION_EFFECTS
ANIMATION_EFFECTS["guofeng"]="fade,slide,scale,rotate"
ANIMATION_EFFECTS["oumei"]="fade,slide,scale,rotate"
ANIMATION_EFFECTS["ercitciyuan"]="bounce,elastic,spring,pop"
ANIMATION_EFFECTS["rihan"]="fade,slide,scale,rotate"
ANIMATION_EFFECTS["qban-katong"]="bounce,elastic,spring,pop"
ANIMATION_EFFECTS["kehuan"]="glow,pulse,wave,ripple"
ANIMATION_EFFECTS["junshi"]="fade,slide,scale,rotate"

# 定义界面元素
declare -A INTERFACE_ELEMENTS
INTERFACE_ELEMENTS["login"]="username,password,login_button,register_link,forgot_password"
INTERFACE_ELEMENTS["main-menu"]="start_game,options,credits,exit_game,version_info"
INTERFACE_ELEMENTS["character"]="avatar,stats,equipment,skills,inventory"
INTERFACE_ELEMENTS["backpack"]="item_grid,item_details,equip_button,use_button,drop_button"
INTERFACE_ELEMENTS["shop"]="item_list,item_details,buy_button,price,currency"
INTERFACE_ELEMENTS["combat"]="health_bar,mana_bar,skill_buttons,target_info,action_buttons"
INTERFACE_ELEMENTS["settings"]="graphics,audio,controls,language,account"
INTERFACE_ELEMENTS["chat"]="chat_window,message_input,emote_buttons,channel_tabs,player_list"
INTERFACE_ELEMENTS["map"]="world_map,location_markers,zoom_controls,legend,search"
INTERFACE_ELEMENTS["social"]="friend_list,friend_requests,chat_window,group_list,status"
INTERFACE_ELEMENTS["quests"]="quest_log,active_quests,completed_quests,quest_details,rewards"

# 为每个风格创建示例
for style_dir in ui-examples/examples/*; do
    if [ -d "$style_dir" ]; then
        style_name=$(basename "$style_dir")
        
        # 获取颜色方案
        colors=(${COLOR_SCHEMES[$style_name]//,/ })
        primary_color=${colors[0]}
        secondary_color=${colors[1]}
        accent_color=${colors[2]}
        background_color=${colors[3]}
        text_color=${colors[4]}
        
        # 获取字体方案
        fonts=(${FONT_SCHEMES[$style_name]//,/ })
        primary_font=${fonts[0]}
        secondary_font=${fonts[1]}
        
        # 获取按钮样式
        button_styles=(${BUTTON_STYLES[$style_name]//,/ })
        
        # 获取图标样式
        icon_styles=(${ICON_STYLES[$style_name]//,/ })
        
        # 获取背景样式
        background_styles=(${BACKGROUND_STYLES[$style_name]//,/ })
        
        # 获取动画效果
        animation_effects=(${ANIMATION_EFFECTS[$style_name]//,/ })
        
        # 为每个游戏类型创建示例
        for game_type_dir in "$style_dir"/*; do
            if [ -d "$game_type_dir" ]; then
                game_type_name=$(basename "$game_type_dir")
                
                # 为每个界面类型创建示例
                for interface_dir in "$game_type_dir"/*; do
                    if [ -d "$interface_dir" ]; then
                        interface_name=$(basename "$interface_dir")
                        
                        # 获取界面元素
                        elements=(${INTERFACE_ELEMENTS[$interface_name]//,/ })
                        
                        # 创建横屏和竖屏示例
                        for layout in "16-9" "9-16"; do
                            for example in "example1" "example2"; do
                                json_file="$interface_dir/$layout/$example/data.json"
                                
                                if [ -f "$json_file" ]; then
                                    # 创建更详细的JSON内容
                                    cat > "$json_file" << EOF
{
    "name": "$interface_name",
    "style": "$style_name",
    "gameType": "$game_type_name",
    "layout": "$layout",
    "version": "1.0.0",
    "description": "这是一个$style_name风格的$game_type_name游戏的$interface_name示例，采用$layout布局。",
    "theme": {
        "colors": {
            "primary": "$primary_color",
            "secondary": "$secondary_color",
            "accent": "$accent_color",
            "background": "$background_color",
            "text": "$text_color"
        },
        "fonts": {
            "primary": "$primary_font",
            "secondary": "$secondary_font"
        },
        "buttonStyle": "${button_styles[0]}",
        "iconStyle": "${icon_styles[0]}",
        "backgroundStyle": "${background_styles[0]}",
        "animationEffect": "${animation_effects[0]}"
    },
    "components": [
        {
            "type": "Panel",
            "name": "MainPanel",
            "position": {"x": 0, "y": 0, "z": 0},
            "size": {"width": 1920, "height": 1080},
            "color": "$background_color",
            "opacity": 255,
            "children": [
                {
                    "type": "Label",
                    "name": "TitleLabel",
                    "position": {"x": 960, "y": 100, "z": 0},
                    "size": {"width": 400, "height": 60},
                    "text": "$interface_name",
                    "fontSize": 36,
                    "fontFamily": "$primary_font",
                    "color": "$text_color",
                    "alignment": "center",
                    "outline": true,
                    "outlineColor": "$primary_color",
                    "outlineWidth": 2
                },
                {
                    "type": "Button",
                    "name": "CloseButton",
                    "position": {"x": 1820, "y": 1060, "z": 0},
                    "size": {"width": 60, "height": 60},
                    "text": "X",
                    "fontSize": 24,
                    "fontFamily": "$primary_font",
                    "color": "$text_color",
                    "backgroundColor": "$primary_color",
                    "hoverColor": "$secondary_color",
                    "pressedColor": "$accent_color",
                    "borderRadius": 5
                }
            ]
        }
    ],
    "elements": [
EOF
                                    
                                    # 添加界面元素
                                    for element in "${elements[@]}"; do
                                        cat >> "$json_file" << EOF
        {
            "type": "Element",
            "name": "${element^}Element",
            "position": {"x": 100, "y": 200, "z": 0},
            "size": {"width": 200, "height": 50},
            "text": "$element",
            "fontSize": 18,
            "fontFamily": "$secondary_font",
            "color": "$text_color",
            "backgroundColor": "$secondary_color",
            "borderRadius": 5
        },
EOF
                                    done
                                    
                                    # 完成JSON文件
                                    cat >> "$json_file" << EOF
        {
            "type": "Element",
            "name": "CustomElement",
            "position": {"x": 100, "y": 300, "z": 0},
            "size": {"width": 200, "height": 50},
            "text": "Custom Element",
            "fontSize": 18,
            "fontFamily": "$secondary_font",
            "color": "$text_color",
            "backgroundColor": "$accent_color",
            "borderRadius": 5
        }
    ],
    "animations": [
        {
            "name": "ShowAnimation",
            "type": "${animation_effects[0]}",
            "duration": 0.5,
            "delay": 0,
            "targets": ["MainPanel", "TitleLabel"]
        },
        {
            "name": "HideAnimation",
            "type": "${animation_effects[1]}",
            "duration": 0.3,
            "delay": 0,
            "targets": ["MainPanel", "TitleLabel"]
        }
    ],
    "interactions": [
        {
            "name": "CloseButtonClick",
            "type": "click",
            "target": "CloseButton",
            "action": "HideAnimation"
        }
    ]
}
EOF
                                fi
                            done
                        done
                    fi
                done
            fi
        done
    fi
done

echo "示例JSON文件添加完成！" 