# UI Visualization Tools

This directory contains tools for visualizing and interacting with the UI examples.

## UI Preview Tool

The UI Preview Tool (`ui-preview.html`) is a web-based tool that allows you to:

- Browse the UI example directory structure
- Preview UI examples with different styles, game types, interfaces, and layouts
- View and inspect UI elements and their properties
- View the JSON data and theme information

### Features

- **File Structure Browser**: Navigate through the UI example directory structure
- **UI Preview**: Visualize UI examples with proper scaling and positioning
- **Element Inspection**: Click on UI elements to view their properties
- **JSON Viewer**: View the raw JSON data for the current UI example
- **Theme Viewer**: View the theme information including colors, fonts, and styles

### Usage

1. Open `ui-preview.html` in a web browser
2. Use the dropdown menus to select:
   - Style (e.g., guofeng, oumei)
   - Game Type (e.g., rpg, action)
   - Interface (e.g., login, main-menu)
   - Layout (16:9 or 9:16)
   - Example (example1 or example2)
3. Click "Load" to load and display the selected UI example
4. Click on UI elements to view their properties
5. Use the tabs to switch between JSON and Theme views

### Directory Structure

The tool expects the UI examples to be organized in the following structure:

```
ui-examples/
├── [style]/
│   ├── [game-type]/
│   │   ├── [interface]/
│   │   │   ├── 16-9/
│   │   │   │   ├── example1/
│   │   │   │   │   └── data.json
│   │   │   │   └── example2/
│   │   │   │       └── data.json
│   │   │   └── 9-16/
│   │   │       ├── example1/
│   │   │       │   └── data.json
│   │   │       └── example2/
│   │   │           └── data.json
```

### JSON Format

The tool expects each UI example to have a `data.json` file with the following structure:

```json
{
  "name": "string",
  "style": "string",
  "gameType": "string",
  "layout": "string",
  "version": "string",
  "description": "string",
  "theme": {
    "colors": {
      "primary": "string",
      "secondary": "string",
      "accent": "string",
      "background": "string",
      "text": "string"
    },
    "fonts": {
      "primary": "string",
      "secondary": "string"
    },
    "buttonStyle": "string",
    "iconStyle": "string",
    "backgroundStyle": "string",
    "animationEffect": "string"
  },
  "components": [
    {
      "type": "string",
      "name": "string",
      "position": {"x": number, "y": number, "z": number},
      "size": {"width": number, "height": number},
      "color": "string",
      "opacity": number,
      "children": []
    }
  ],
  "elements": [
    {
      "type": "string",
      "name": "string",
      "position": {"x": number, "y": number, "z": number},
      "size": {"width": number, "height": number},
      "text": "string",
      "fontSize": number,
      "fontFamily": "string",
      "color": "string",
      "backgroundColor": "string",
      "borderRadius": number
    }
  ],
  "animations": [
    {
      "name": "string",
      "type": "string",
      "duration": number,
      "delay": number,
      "targets": ["string"]
    }
  ],
  "interactions": [
    {
      "name": "string",
      "type": "string",
      "target": "string",
      "action": "string"
    }
  ]
}
```

### Development

The UI Preview Tool is built with vanilla JavaScript and doesn't require any external dependencies. To modify or extend the tool:

1. Edit the HTML, CSS, and JavaScript in `ui-preview.html`
2. Test the changes by opening the file in a web browser
3. Commit the changes to the repository

### Future Improvements

- Add support for loading real JSON files from the server
- Add support for editing UI elements and saving changes
- Add support for exporting UI examples to different formats
- Add support for previewing animations and interactions
- Add support for custom themes and styles 