#!/bin/bash

# 创建UI示例目录结构脚本
# 整合game-assets.md和README.md中的界面类型

# 定义游戏风格
STYLES=(
    "guofeng:国风:传统中国元素,水墨风格,古典装饰,传统配色"
    "oumei:欧美:现代简约风格,写实元素,金属质感,冷色调"
    "ercitciyuan:二次元:动漫风格,明亮色彩,夸张表现,萌系元素"
    "rihan:日韩:精致细腻,清新风格,唯美元素,柔和配色"
    "qban-katong:Q版卡通:可爱风格,圆润造型,活泼配色,夸张比例"
    "kehuan:科幻:未来科技感,机械元素,光效表现,冷色调"
    "junshi:军事:硬朗风格,迷彩元素,金属质感,军事配色"
    "wuxia:武侠:武侠元素,江湖风格,侠义精神,传统武术"
    "xianxia:仙侠:仙侠元素,修仙风格,灵气飘逸,仙侠世界"
    "sanguo:三国:三国元素,历史风格,英雄气概,三国世界"
    "xiyou:西游:西游元素,神话风格,奇幻世界,西游记"
    "gongting:宫廷:宫廷元素,奢华风格,皇家气派,宫廷生活"
    "mohuan:魔幻:魔幻元素,魔法风格,奇幻世界,魔法世界"
    "kehuan-weilai:科幻未来:未来科技,科幻风格,未来世界,科技感"
    "qihuan:奇幻:奇幻元素,幻想风格,奇幻世界,魔法世界"
    "zhongshiji:中世纪:中世纪元素,骑士风格,城堡世界,中世纪"
    "xiandai:现代:现代元素,都市风格,现代生活,城市世界"
    "mori-feitu:末日废土:废土元素,末日风格,荒芜世界,生存挑战"
    "saibopengke:赛博朋克:赛博朋克元素,高科技低生活,霓虹世界,未来都市"
    "zhengqi-pengke:蒸汽朋克:蒸汽朋克元素,复古科技,齿轮世界,蒸汽时代"
    "xiandai-junshi:现代军事:现代军事元素,战争风格,军事世界,现代战争"
    "zhanzheng:战争:战争元素,战争风格,战争世界,战争场景"
    "tank:坦克:坦克元素,战争风格,坦克世界,坦克战斗"
    "jijia:机甲:机甲元素,科幻风格,机甲世界,机甲战斗"
    "gete:哥特:哥特元素,黑暗风格,哥特世界,黑暗氛围"
    "wenyi-fuxing:文艺复兴:文艺复兴元素,艺术风格,艺术世界,文艺复兴"
    "kongbu:恐怖:恐怖元素,惊悚风格,恐怖世界,恐怖氛围"
    "weimei:唯美:唯美元素,艺术风格,艺术世界,唯美氛围"
    "dongfang:东方:东方元素,东方风格,东方世界,东方文化"
    "hefeng:和风:和风元素,日式风格,和风世界,日本文化"
    "meishi:美式:美式元素,美式风格,美式世界,美国文化"
    "meiman-feng:美漫风:美漫元素,漫画风格,美漫世界,漫画风格"
    "qing-guofeng:轻国风:轻国风元素,简约中国风,轻国风世界,简约中国"
    "dunhuang-feng:敦煌风:敦煌元素,艺术风格,敦煌世界,敦煌艺术"
    "xiangsu:像素:像素元素,复古风格,像素世界,像素艺术"
    "sailulu:赛璐璐:赛璐璐元素,动画风格,赛璐璐世界,动画艺术"
    "shuimo-feng:水墨风:水墨元素,艺术风格,水墨世界,水墨艺术"
    "bianping:扁平:扁平元素,简约风格,扁平世界,简约设计"
    "houtu:厚涂:厚涂元素,艺术风格,厚涂世界,艺术创作"
    "mengxi:萌系:萌系元素,可爱风格,萌系世界,可爱氛围"
    "katong:卡通:卡通元素,卡通风格,卡通世界,卡通艺术"
    "xiuxian:休闲:休闲元素,轻松风格,休闲世界,轻松氛围"
    "keai:可爱:可爱元素,可爱风格,可爱世界,可爱氛围"
    "xieshi:写实:写实元素,写实风格,写实世界,写实艺术"
    "shiqi-shidai:石器时代:石器时代元素,原始风格,石器世界,原始生活"
    "pengren:烹饪:烹饪元素,美食风格,烹饪世界,美食文化"
    "chuanqi:传奇:传奇元素,神话风格,传奇世界,神话传说"
    "nvxing-xiang:女性向:女性向元素,女性风格,女性世界,女性文化"
    "yinv:乙女:乙女元素,女性风格,乙女世界,女性文化"
    "hehezhi:回合制:回合制元素,策略风格,回合制世界,策略游戏"
    "shazhuo:沙盒:沙盒元素,自由风格,沙盒世界,自由探索"
    "duoren:多人:多人元素,社交风格,多人世界,社交互动"
    "yizhi:益智:益智元素,智力风格,益智世界,智力挑战"
    "dataosha:大逃杀:大逃杀元素,生存风格,大逃杀世界,生存挑战"
    "xiaoyuan:校园:校园元素,青春风格,校园世界,青春生活"
    "daomu:盗墓:盗墓元素,探险风格,盗墓世界,探险冒险"
    "wenzi:文字:文字元素,文学风格,文字世界,文学创作"
    "paoku:跑酷:跑酷元素,运动风格,跑酷世界,运动挑战"
    "qipai:棋牌:棋牌元素,策略风格,棋牌世界,策略游戏"
    "laohuji:老虎机:老虎机元素,赌博风格,老虎机世界,赌博游戏"
    "buyu:捕鱼:捕鱼元素,休闲风格,捕鱼世界,休闲游戏"
    "duli-youxi:独立游戏:独立游戏元素,创意风格,独立游戏世界,创意游戏"
    "fangzhi:放置:放置元素,休闲风格,放置世界,休闲游戏"
    "guaji:挂机:挂机元素,休闲风格,挂机世界,休闲游戏"
    "roguelike:Roguelike:Roguelike元素,随机风格,Roguelike世界,随机游戏"
    "sangshi:丧尸:丧尸元素,恐怖风格,丧尸世界,恐怖游戏"
    "anhei:暗黑:暗黑元素,黑暗风格,暗黑世界,黑暗游戏"
    "yingshi:影视:影视元素,电影风格,影视世界,电影游戏"
)

# 定义游戏类型
GAME_TYPES=(
    "rpg:角色扮演:角色成长,剧情驱动,探索世界,战斗系统"
    "action:动作:动作战斗,连招系统,技能释放,打击感"
    "strategy:策略:策略思考,资源管理,战术部署,战争模拟"
    "card:卡牌:卡牌收集,卡组构建,回合战斗,策略思考"
    "mmorpg:MMORPG:多人互动,社交系统,公会系统,大型副本"
    "puzzle:益智:智力挑战,解谜游戏,逻辑思考,休闲娱乐"
    "simulation:模拟经营:资源管理,建设发展,经济系统,模拟生活"
    "shooting:射击:射击战斗,瞄准系统,武器系统,战场环境"
    "adventure:冒险:探索冒险,解谜探索,剧情驱动,世界探索"
    "racing:竞速:竞速比赛,车辆系统,赛道系统,竞速挑战"
    "fighting:格斗:格斗战斗,连招系统,技能系统,对战模式"
    "rts:即时战略:即时战斗,资源管理,单位控制,战术部署"
    "sports:体育:体育比赛,运动系统,竞技系统,体育竞技"
    "tabletop:桌游棋牌:棋牌游戏,策略思考,多人互动,休闲娱乐"
    "music:音乐:音乐游戏,节奏系统,音乐系统,音乐挑战"
    "dating:恋爱养成:恋爱互动,角色养成,剧情驱动,情感系统"
    "moba:MOBA:多人对战,英雄系统,技能系统,团队配合"
    "matching:消除:消除游戏,匹配系统,连击系统,休闲娱乐"
    "tower-defense:塔防:防御系统,资源管理,敌人系统,策略思考"
    "slots:老虎机:赌博游戏,随机系统,奖励系统,休闲娱乐"
)

# 定义界面类型 (整合game-assets.md和README.md中的界面类型)
INTERFACES=(
    # 基础界面
    "登录界面|用户登录、账号注册、密码找回等基础功能"
    "角色创建|角色外观定制、属性分配、职业选择等"
    "主界面|游戏主菜单、功能导航、快捷操作等"
    "设置界面|游戏设置、音效设置、画面设置等"
    "商城|道具购买、货币充值、限时特惠等"
    "背包|物品管理、装备管理、道具使用等"
    "任务|任务列表、任务追踪、任务奖励等"
    "成就|成就系统、成就进度、成就奖励等"
    "好友|好友列表、好友申请、好友互动等"
    "聊天|世界聊天、私聊、组队聊天等"
    "邮件|系统邮件、玩家邮件、邮件附件等"
    "公告|游戏公告、活动公告、系统通知等"
    "排行榜|战力排行、等级排行、财富排行等"
    "公会|公会信息、成员管理、公会活动等"
    "战斗|战斗界面、技能释放、战斗结算等"
    "副本|副本选择、副本进度、副本奖励等"
    "PVP|竞技场、战场、跨服战等"
    "交易|玩家交易、拍卖行、交易所等"
    "地图|世界地图、小地图、传送点等"
    "技能|技能树、技能升级、技能搭配等"
    "装备|装备强化、装备洗炼、装备镶嵌等"
    "宠物|宠物培养、宠物进化、宠物技能等"
    "坐骑|坐骑培养、坐骑进化、坐骑技能等"
    "时装|时装展示、时装搭配、时装特效等"
    "称号|称号展示、称号获取、称号特效等"
    "活动|活动列表、活动奖励、活动规则等"
    "签到|每日签到、连续签到、签到奖励等"
    "抽奖|普通抽奖、限定抽奖、保底机制等"
    "VIP|VIP特权、VIP等级、VIP礼包等"
    "充值|充值界面、充值优惠、充值礼包等"
    "客服|客服咨询、问题反馈、建议提交等"
    "帮助|游戏帮助、新手指引、常见问题等"
    "退出|退出确认、账号切换、重新登录等"
    
    # 订阅相关界面
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
    
    # 消费促进界面
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

# 创建主目录
mkdir -p ui-examples

# 创建README.md
cat > ui-examples/README.md << EOF
# 游戏 UI 组件示例集

本目录包含了各种游戏 UI 功能的组件类型和对应的 JSON 样例，整合了 game-assets.md 和 README.md 中的界面类型。

## 目录结构

\`\`\`
ui-examples/
├── README.md                  # 本说明文件
├── styles/                    # 游戏风格
│   ├── guofeng/              # 国风主题
│   ├── oumei/                # 欧美主题
│   ├── ercitciyuan/          # 二次元主题
│   └── ...                   # 其他风格
├── game-types/                # 游戏类型
│   ├── rpg/                  # 角色扮演
│   ├── action/               # 动作游戏
│   ├── strategy/             # 策略游戏
│   └── ...                   # 其他类型
├── interfaces/                # 界面类型
│   ├── login/                # 登录界面
│   ├── main-menu/            # 主菜单界面
│   ├── character/            # 角色相关界面
│   └── ...                   # 其他界面
└── examples/                  # 示例集合
    ├── guofeng/              # 国风主题示例
    │   ├── rpg/              # RPG游戏示例
    │   │   ├── login/        # 登录界面示例
    │   │   │   ├── 16-9/     # 横屏示例
    │   │   │   │   ├── example1/  # 示例1
    │   │   │   │   └── example2/  # 示例2
    │   │   │   └── 9-16/     # 竖屏示例
    │   │   │       ├── example1/  # 示例1
    │   │   │       └── example2/  # 示例2
    │   │   └── ...           # 其他界面示例
    │   └── ...               # 其他游戏类型示例
    └── ...                   # 其他风格示例
\`\`\`

## 使用说明

1. 每个界面示例都包含完整的 JSON 结构
2. 示例中包含了必要的组件和属性
3. 可以根据实际需求修改和扩展
4. 建议遵循 UI 层级管理规范
5. 注意适配不同分辨率和设备

## 最佳实践

1. **层级管理**
   - 使用合理的层级划分
   - 控制层级数量
   - 优化层级切换

2. **性能优化**
   - 减少不必要的嵌套
   - 合理使用缓存
   - 优化渲染性能

3. **交互设计**
   - 提供清晰的反馈
   - 保持操作一致性
   - 优化用户体验

4. **适配考虑**
   - 支持多种分辨率
   - 适配不同设备
   - 考虑横竖屏切换
EOF

# 创建风格目录
mkdir -p ui-examples/styles
for style in "${STYLES[@]}"; do
    IFS=':' read -r dir name desc <<< "$style"
    mkdir -p "ui-examples/styles/$dir"
    
    # 创建风格README
    cat > "ui-examples/styles/$dir/README.md" << EOF
# $name 风格

## 设计特征
$(echo $desc | tr ',' '\n' | sed 's/^/- /')

## 适用游戏类型
- 根据游戏主题和风格选择合适的游戏类型
- 考虑目标用户群体的喜好和习惯
- 结合游戏玩法和机制进行设计

## 设计注意事项
- 保持风格的一致性
- 注意色彩搭配和视觉平衡
- 考虑不同设备和分辨率的适配
- 优化用户交互体验
EOF
done

# 创建游戏类型目录
mkdir -p ui-examples/game-types
for game_type in "${GAME_TYPES[@]}"; do
    IFS=':' read -r dir name desc <<< "$game_type"
    mkdir -p "ui-examples/game-types/$dir"
    
    # 创建游戏类型README
    cat > "ui-examples/game-types/$dir/README.md" << EOF
# $name 游戏

## 游戏特点
$(echo $desc | tr ',' '\n' | sed 's/^/- /')

## UI设计重点
- 根据游戏类型特点设计UI布局和交互
- 考虑游戏玩法和机制对UI的需求
- 优化用户体验和操作流畅度

## 设计注意事项
- 保持界面简洁清晰
- 突出重要信息和功能
- 优化操作路径和反馈
- 考虑不同设备和分辨率的适配
EOF
done

# 创建界面类型目录
mkdir -p ui-examples/interfaces
for interface in "${INTERFACES[@]}"; do
    IFS='|' read -r dir name desc <<< "$interface"
    mkdir -p "ui-examples/interfaces/$dir"
    
    # 创建界面类型README
    cat > "ui-examples/interfaces/$dir/README.md" << EOF
# $name

## 功能说明
$(echo $desc | tr ',' '\n' | sed 's/^/- /')

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

# 创建示例目录
mkdir -p ui-examples/examples

# 为每个风格创建示例
for style in "${STYLES[@]}"; do
    IFS=':' read -r style_dir style_name style_desc <<< "$style"
    mkdir -p "ui-examples/examples/$style_dir"
    
    # 为每个游戏类型创建示例
    for game_type in "${GAME_TYPES[@]}"; do
        IFS=':' read -r game_type_dir game_type_name game_type_desc <<< "$game_type"
        mkdir -p "ui-examples/examples/$style_dir/$game_type_dir"
        
        # 为每个界面类型创建示例
        for interface in "${INTERFACES[@]}"; do
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
# $style_name 风格 - $game_type_name 游戏 - $interface_name - $layout 布局 - $example

## 界面描述
这是一个$style_name风格的$game_type_name游戏的$interface_name示例，采用$layout布局。

## 设计特点
$(echo $style_desc | tr ',' '\n' | sed 's/^/- /')

## 游戏特点
$(echo $game_type_desc | tr ',' '\n' | sed 's/^/- /')

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
    "style": "$style_name",
    "gameType": "$game_type_name",
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

echo "UI示例目录结构创建完成！" 