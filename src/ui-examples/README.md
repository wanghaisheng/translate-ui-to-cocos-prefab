# Game UI Component Examples

This directory contains various game UI component types and corresponding JSON examples.

## Directory Structure

```
ui-examples/
├── README.md                  # This documentation file
├── login/                     # Login-related interfaces
│   ├── 16-9/                 # Landscape examples
│   │   ├── guofeng/          # Chinese traditional theme
│   │   │   ├── example1/     # Example 1
│   │   │   │   ├── description.txt
│   │   │   │   └── data.json
│   │   │   └── example2/     # Example 2
│   │   │       ├── description.txt
│   │   │       └── data.json
│   │   ├── oumei/            # Western theme
│   │   ├── ercitciyuan/      # Anime theme
│   │   ├── rihan/            # Japanese/Korean theme
│   │   ├── qban-katong/      # Q-style cartoon theme
│   │   ├── kehuan/           # Sci-fi theme
│   │   └── junshi/           # Military theme
│   └── 9-16/                 # Portrait examples
│       ├── guofeng/
│       ├── oumei/
│       ├── ercitciyuan/
│       ├── rihan/
│       ├── qban-katong/
│       ├── kehuan/
│       └── junshi/
├── main-menu/                 # Main menu interface
│   ├── 16-9/
│   │   ├── guofeng/
│   │   ├── oumei/
│   │   ├── ercitciyuan/
│   │   ├── rihan/
│   │   ├── qban-katong/
│   │   ├── kehuan/
│   │   └── junshi/
│   └── 9-16/
│       ├── guofeng/
│       ├── oumei/
│       ├── ercitciyuan/
│       ├── rihan/
│       ├── qban-katong/
│       ├── kehuan/
│       └── junshi/
├── character/                 # Character-related interfaces
│   ├── 16-9/
│   └── 9-16/
├── inventory/                 # Inventory/items interface
│   ├── 16-9/
│   └── 9-16/
├── shop/                      # Shop interface
│   ├── 16-9/
│   └── 9-16/
├── battle/                    # Battle interface
│   ├── 16-9/
│   └── 9-16/
├── settings/                  # Settings interface
│   ├── 16-9/
│   └── 9-16/
├── chat/                      # Chat interface
│   ├── 16-9/
│   └── 9-16/
├── social/                    # Social system interface
│   ├── 16-9/
│   └── 9-16/
├── task/                      # Task system interface
│   ├── 16-9/
│   └── 9-16/
├── map/                       # Map system interface
│   ├── 16-9/
│   └── 9-16/
├── activity/                  # Activity system interface
│   ├── 16-9/
│   └── 9-16/
├── guide/                     # Guide system interface
│   ├── 16-9/
│   └── 9-16/
├── notification/              # Notification system interface
│   ├── 16-9/
│   └── 9-16/
├── ranking/                   # Ranking system interface
│   ├── 16-9/
│   └── 9-16/
├── mail/                      # Mail system interface
│   ├── 16-9/
│   └── 9-16/
├── achievement/               # Achievement system interface
│   ├── 16-9/
│   └── 9-16/
├── collection/                # Collection/atlas system interface
│   ├── 16-9/
│   └── 9-16/
├── photo/                     # Photo system interface
│   ├── 16-9/
│   └── 9-16/
├── marriage/                  # Marriage system interface
│   ├── 16-9/
│   └── 9-16/
├── pet/                       # Pet system interface
│   ├── 16-9/
│   └── 9-16/
├── mount/                     # Mount system interface
│   ├── 16-9/
│   └── 9-16/
├── home/                      # Home system interface
│   ├── 16-9/
│   └── 9-16/
├── trade/                     # Trade system interface
│   ├── 16-9/
│   └── 9-16/
└── common/                    # Common components
    ├── 16-9/
    └── 9-16/
```

## Theme Classification

### 1. Chinese Traditional Theme (Guofeng)
- Traditional Chinese elements
- Ink painting style
- Classical decorations
- Traditional color schemes

### 2. Western Theme (Oumei)
- Modern minimalist style
- Realistic elements
- Metallic textures
- Cool color tones

### 3. Anime Theme (Ercitciyuan)
- Anime style
- Bright colors
- Exaggerated expressions
- Cute elements

### 4. Japanese/Korean Theme (Rihan)
- Refined and delicate
- Fresh style
- Aesthetic elements
- Soft color schemes

### 5. Q-style Cartoon Theme (Qban-Katong)
- Cute style
- Rounded shapes
- Lively colors
- Exaggerated proportions

### 6. Sci-fi Theme (Kehuan)
- Futuristic tech feel
- Mechanical elements
- Light effects
- Cool color tones

### 7. Military Theme (Junshi)
- Bold style
- Camouflage elements
- Metallic textures
- Military color schemes

## Example Description

Each theme includes two examples:
1. **Basic Example** (example1)
   - Standard layout
   - Basic interactions
   - Theme element application

2. **Advanced Example** (example2)
   - Innovative layout
   - Advanced interactions
   - Distinctive theme representation

## File Description

### 1. description.txt
- Theme style description
- Layout design description
- Interaction logic description
- Theme element application description

### 2. data.json
- Interface component data
- Theme style configuration
- Layout parameters
- Interaction configuration

## Adaptation Guidelines

### Landscape (16:9)
- Suitable for PC and landscape mobile devices
- Maximizes horizontal space
- Supports multi-column layouts
- Suitable for complex interfaces

### Portrait (9:16)
- Suitable for portrait mobile devices
- Optimized for one-handed operation
- Primarily single-column layout
- Simplified interface elements

## UI Interface Categories

### 1. Login and Account System
- **Login Interface**
  - Account/password input
  - Quick login options
  - Registration entry
  - Forgot password
- **Registration Interface**
  - Account registration form
  - Agreement confirmation
  - Verification code
- **Server Selection**
  - Server list
  - Server status
  - Recommended servers
- **Character Creation**
  - Character appearance selection
  - Class selection
  - Name input
  - Initial attribute settings

### 2. Main Interface and Navigation
- **Main Interface Layout**
  - Top status bar
  - Bottom function bar
  - Quick action area
  - Mini-map
- **Function Entries**
  - Main menu button
  - Quick function buttons
  - Activity entries
- **Status Bar**
  - Player information
  - Resource display
  - System time
  - Network status

### 3. Character System
- **Character Information**
  - Basic info panel
  - Attribute display
  - Achievement display
  - Title system
- **Attribute Panel**
  - Basic attributes
  - Combat attributes
  - Special attributes
- **Skill Tree**
  - Skill display
  - Skill upgrading
  - Skill combinations
- **Equipment Bar**
  - Equipment display
  - Equipment attributes
  - Equipment enhancement
  - Equipment socketing

### 4. Inventory System
- **Item List**
  - Item categorization
  - Item sorting
  - Item filtering
- **Item Details**
  - Item information
  - Item attributes
  - Usage instructions
- **Item Operations**
  - Use item
  - Sell item
  - Disassemble item
  - Item synthesis

### 5. Shop System
- **Product Display**
  - Product categorization
  - Product list
  - Product details
- **Purchase Interface**
  - Purchase confirmation
  - Quantity selection
  - Payment methods
- **Recharge Interface**
  - Recharge amount
  - Recharge methods
  - Recharge history
- **Gift Package Interface**
  - Gift package display
  - Gift package details
  - Purchase history

### 6. Battle System
- **Battle Interface**
  - Battle scene
  - Skill bar
  - Status bar
  - Target selection
- **Skill Bar**
  - Skill icons
  - Cooldown display
  - Skill combinations
- **Status Bar**
  - Health points
  - Magic points
  - Status effects
- **Battle Tips**
  - Damage numbers
  - Status prompts
  - Battle information

### 7. Settings System
- **Basic Settings**
  - Graphics settings
  - Sound settings
  - Control settings
  - Language settings
- **Account Settings**
  - Account security
  - Privacy settings
  - Notification settings
- **Game Settings**
  - Game mode
  - Difficulty settings
  - Auto-battle

### 8. Social System
- **Chat Window**
  - Chat channels
  - Chat history
  - Emoji system
  - Voice chat
- **Friend List**
  - Friend management
  - Friend status
  - Friend interactions
- **Team Interface**
  - Team information
  - Member status
  - Team operations
- **Guild Interface**
  - Guild information
  - Member management
  - Guild activities

### 9. Task System
- **Task List**
  - Main quests
  - Side quests
  - Daily quests
  - Event quests
- **Task Tracking**
  - Quest progress
  - Quest objectives
  - Quest rewards
- **Task Details**
  - Quest description
  - Quest requirements
  - Quest rewards

### 10. Map System
- **World Map**
  - Region division
  - Teleport points
  - Quest markers
- **Mini-map**
  - Location display
  - Target markers
  - Zoom control
- **Navigation System**
  - Path planning
  - Auto-pathfinding
  - Target guidance

### 11. Activity System
- **Activity List**
  - Activity categories
  - Activity times
  - Activity rewards
- **Activity Details**
  - Activity rules
  - Participation conditions
  - Reward preview
- **Activity Interface**
  - Activity scene
  - Activity progress
  - Leaderboard

### 12. Guide System
- **Newbie Guide**
  - Guide process
  - Operation tips
  - Target guidance
- **Function Guide**
  - Function explanation
  - Operation demonstration
  - Important notes
- **Tip System**
  - System tips
  - Operation tips
  - Status tips

### 13. Common Components
- **Buttons**
  - Regular buttons
  - Icon buttons
  - Toggle buttons
- **Input Fields**
  - Text input
  - Number input
  - Password input
- **Progress Bars**
  - Linear progress
  - Circular progress
  - Segmented progress
- **Popups**
  - Confirmation popup
  - Notification popup
  - Input popup
- **Lists**
  - Vertical list
  - Horizontal list
  - Grid list
- **Tabs**
  - Top tabs
  - Bottom tabs
  - Side tabs

### 14. Notification System
- **System Announcements**
  - Server-wide announcements
  - Event previews
  - Maintenance notices
- **Real-time Tips**
  - Item acquisition tips
  - Achievement unlock tips
  - System message tips
- **Red Dot System**
  - Function entry red dots
  - Quest red dots
  - Mail red dots

### 15. Ranking System
- **Comprehensive Rankings**
  - Combat power ranking
  - Level ranking
  - Achievement ranking
- **Event Rankings**
  - Event point ranking
  - Event progress ranking
- **Friend Rankings**
  - Friend combat power ranking
  - Friend level ranking

### 16. Mail System
- **Mail List**
  - System mail
  - Player mail
  - Event mail
- **Mail Details**
  - Mail content
  - Attachment collection
  - Mail operations

### 17. Achievement System
- **Achievement List**
  - Achievement categories
  - Achievement progress
  - Achievement rewards
- **Achievement Details**
  - Achievement description
  - Completion conditions
  - Reward preview

### 18. Collection System
- **Collection Categories**
  - Character collection
  - Item collection
  - Scene collection
- **Collection Details**
  - Collection information
  - Collection progress
  - Unlock conditions

### 19. Photo System
- **Photo Interface**
  - Camera control
  - Filter selection
  - Pose selection
- **Album Management**
  - Photo list
  - Photo editing
  - Photo sharing

### 20. Marriage System
- **Marriage Application**
  - Proposal interface
  - Ring selection
  - Wedding reservation
- **Wedding Interface**
  - Wedding scene
  - Guest list
  - Wedding process

### 21. Pet System
- **Pet List**
  - Pet display
  - Pet attributes
  - Pet skills
- **Pet Training**
  - Pet leveling
  - Pet evolution
  - Pet equipment

### 22. Mount System
- **Mount List**
  - Mount display
  - Mount attributes
  - Mount skills
- **Mount Training**
  - Mount leveling
  - Mount evolution
  - Mount equipment

### 23. Home System
- **Home Management**
  - Home layout
  - Furniture placement
  - Decoration management
- **Home Interaction**
  - Visitor management
  - Interaction operations
  - Home quests

### 24. Trade System
- **Trade Interface**
  - Item selection
  - Price setting
  - Trade confirmation
- **Trade Records**
  - Trade history
  - Trade statistics
  - Trade ratings

### 25. Team System Extension
- **Team Management**
  - Team information
  - Member management
  - Team settings
- **Matching System**
  - Matching conditions
  - Matching wait
  - Matching results

### 26. Guild System Extension
- **Guild Management**
  - Guild information
  - Member management
  - Position settings
- **Guild Activities**
  - Activity list
  - Activity registration
  - Activity rewards

### 27. Battle System Extension
- **Battle Preparation**
  - Team configuration
  - Skill selection
  - Item preparation
- **Battle Settlement**
  - Battle results
  - Reward display
  - Data statistics

### 28. Activity System Extension
- **Activity Calendar**
  - Activity preview
  - Activity time
  - Activity reminders
- **Activity Rewards**
  - Reward preview
  - Reward collection
  - Reward records

## Usage Instructions

1. Each interface example contains a complete JSON structure
2. Examples include necessary components and attributes
3. Can be modified and extended according to actual needs
4. Recommended to follow UI hierarchy management standards
5. Pay attention to adapting to different resolutions and devices

## Best Practices

1. **Hierarchy Management**
   - Use reasonable hierarchy division
   - Control hierarchy count
   - Optimize hierarchy switching

2. **Performance Optimization**
   - Reduce unnecessary nesting
   - Use caching appropriately
   - Optimize rendering performance

3. **Interaction Design**
   - Provide clear feedback
   - Maintain operation consistency
   - Optimize user experience

4. **Adaptation Considerations**
   - Support multiple resolutions
   - Adapt to different devices
   - Consider landscape/portrait switching 