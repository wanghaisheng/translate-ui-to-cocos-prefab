document.addEventListener('DOMContentLoaded', () => {
    // Global state or shared variables
    let s1_component_idx = 0;
    let s3_element_idx = 0;

    // --- Step Navigation ---
    window.nextStep = (stepId, sourceTextareaId) => {
        document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
        document.getElementById(stepId).style.display = 'block';
        if (sourceTextareaId) {
            const sourceText = document.getElementById(sourceTextareaId).value;
            if (stepId === 'step2') {
                document.getElementById('step2_prdInput').value = sourceText;
            } else if (stepId === 'step3') {
                document.getElementById('step3_detailedDescInput').value = sourceText;
            }
        }
        window.scrollTo(0, 0);
    };

    window.prevStep = (stepId) => {
        document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
        document.getElementById(stepId).style.display = 'block';
        window.scrollTo(0, 0);
    };

    // --- Step 1: PRD Generation ---
    const s1_componentsContainer = document.getElementById('s1_componentsContainer');
    const s1_addComponentButton = document.getElementById('s1_addComponentButton');
    const generatePrdButton = document.getElementById('generatePrdButton');
    const step1_output = document.getElementById('step1_output');

    function addS1Component() {
        s1_component_idx++;
        const div = document.createElement('div');
        div.classList.add('component-item');
        div.innerHTML = `
            <h4>组件 ${s1_component_idx}</h4>
            <label for="s1_compName${s1_component_idx}">a. 组件名称/类型:</label>
            <input type="text" id="s1_compName${s1_component_idx}" placeholder="例如：主要操作按钮">
            <label for="s1_compVisualDesc${s1_component_idx}">b. 视觉描述 (占位符):</label>
            <textarea id="s1_compVisualDesc${s1_component_idx}" rows="2" placeholder="例如：一个突出的、形状独特的按钮元素..."></textarea>
            <label for="s1_compPosition${s1_component_idx}">c. 大致位置 & 关系:</label>
            <input type="text" id="s1_compPosition${s1_component_idx}" placeholder="例如：屏幕底部居中">
            <label for="s1_compInteractive${s1_component_idx}">d. 暗示的交互性:</label>
            <input type="text" id="s1_compInteractive${s1_component_idx}" placeholder="例如：看起来可点击">
            <button type="button" class="remove-item-btn">移除此组件</button>
        `;
        s1_componentsContainer.appendChild(div);
        div.querySelector('.remove-item-btn').addEventListener('click', () => div.remove());
    }

    s1_addComponentButton.addEventListener('click', addS1Component);
    addS1Component(); // Add one by default

    generatePrdButton.addEventListener('click', () => {
        let output = "## PRD 视觉界面描述\n\n";
        output += `**一句话需求:** ${document.getElementById('singleSentenceReq').value}\n\n`;
        
        output += "**1. 界面识别:**\n";
        output += `    *   **1.1. 界面名称:** ${document.getElementById('s1_interfaceName').value}\n`;
        output += `    *   **1.2. 核心目的 (推断):** ${document.getElementById('s1_corePurpose').value}\n\n`;

        output += "**2. 整体视觉风格与氛围:**\n";
        const globalArtStyle = document.getElementById('overallArtStyle').value;
        output += `    *   **2.1. 美术风格大类 (通用):** ${document.getElementById('s1_artStyleFamily').value || globalArtStyle} (参考全局设定: ${globalArtStyle})\n`;
        output += `    *   **2.2. 期望氛围/感觉:** ${document.getElementById('s1_desiredAtmosphere').value}\n\n`;

        output += "**3. 关键视觉组件与布局:**\n";
        const components = s1_componentsContainer.querySelectorAll('.component-item');
        if (components.length === 0) {
            output += "    *   [尚未定义具体组件]\n";
        }
        components.forEach((comp, index) => {
            const i = Array.from(s1_componentsContainer.children).indexOf(comp) + 1; // Get live index
            output += `    *   **组件 ${index + 1}:**\n`;
            output += `        *   **a. 组件名称/类型:** ${comp.querySelector(`input[id^="s1_compName"]`).value}\n`;
            output += `        *   **b. 视觉描述 (占位符):** ${comp.querySelector(`textarea[id^="s1_compVisualDesc"]`).value}\n`;
            output += `        *   **c. 大致位置 & 关系:** ${comp.querySelector(`input[id^="s1_compPosition"]`).value}\n`;
            output += `        *   **d. 暗示的交互性:** ${comp.querySelector(`input[id^="s1_compInteractive"]`).value}\n`;
        });
        output += "\n";

        output += `**4. 数据展示区域 (视觉占位符焦点):**\n${document.getElementById('s1_dataDisplayAreas').value}\n\n`;
        output += `**5. 核心交互 (推断):**\n${document.getElementById('s1_coreInteractions').value}\n\n`;
        output += `**6. 后续需研究/完善的信息:**\n${document.getElementById('s1_researchLater').value}\n`;
        
        step1_output.value = output;
    });

    // --- Step 2: Detailed Visual Interface Description ---
    const generateDetailedDescButton = document.getElementById('generateDetailedDescButton');
    const step2_output = document.getElementById('step2_output');

    generateDetailedDescButton.addEventListener('click', () => {
        const gameGenre = document.getElementById('gameGenre').value;
        const overallArtStyle = document.getElementById('overallArtStyle').value;
        const prdInputRef = document.getElementById('step2_prdInput').value; // Keep as reference

        const s2_purposeTheme = document.getElementById('s2_purposeTheme').value;
        const s2_majorComponents = document.getElementById('s2_majorComponents').value;
        const s2_componentDetails = document.getElementById('s2_componentDetails').value;
        const s2_interactiveElements = document.getElementById('s2_interactiveElements').value;
        const s2_dynamicVisuals = document.getElementById('s2_dynamicVisuals').value;

        let output = `## 详细视觉界面描述 / 落地页原型文本\n\n`;
        output += `**游戏类型:** ${gameGenre}\n`;
        output += `**整体美术风格:** ${overallArtStyle}\n\n`;

        output += `**参考PRD输入:**\n${prdInputRef}\n\n`;
        output += `--- DETAILED DESCRIPTION ---\n\n`;

        output += `**1. 界面目的和整体视觉主题/风格:**\n${s2_purposeTheme}\n\n`;
        output += `**2. 主要视觉组件和布局区域:**\n${s2_majorComponents}\n\n`;
        output += `**3. 各组件的视觉外观、风格、近似位置/关系 (强调视觉占位符):**\n${s2_componentDetails}\n\n`;
        output += `**4. 关键交互元素及其视觉提示:**\n${s2_interactiveElements}\n\n`;
        output += `**5. 动态视觉元素、动画或特殊效果:**\n${s2_dynamicVisuals}\n\n`;
        
        output += `**重要提示 (AI资产生成阶段需遵守):**\n`;
        output += `- 所有文本/数据区域均已描述为视觉占位符。\n`;
        output += `- 所有描述均应与整体美术风格 (${overallArtStyle}) 保持一致。\n`;
        output += `- 下一步骤将基于此详细描述拆解UI资产并生成无文字的AI绘图提示。\n`;
        
        step2_output.value = output;
    });

    // --- Step 3: Modular UI Assets CSV ---
    const s3_elementsContainer = document.getElementById('s3_elementsContainer');
    const s3_addElementButton = document.getElementById('s3_addElementButton');
    const generateCsvButton = document.getElementById('generateCsvButton');
    const csvTableBody = document.getElementById('csvTableBody');
    const step3_csvOutput = document.getElementById('step3_csvOutput');
    const downloadCsvButton = document.getElementById('downloadCsvButton');

    function addS3Element() {
        s3_element_idx++;
        const div = document.createElement('div');
        div.classList.add('element-item');
        div.innerHTML = `
            <h4>元素 ${s3_element_idx}</h4>
            <label for="s3_elemId${s3_element_idx}">Element_ID:</label>
            <input type="text" id="s3_elemId${s3_element_idx}" placeholder="例如：main_background, button_confirm_shape">
            <label for="s3_elemDesc${s3_element_idx}">Description_Human:</label>
            <input type="text" id="s3_elemDesc${s3_element_idx}" placeholder="例如：主背景图, 确认按钮的形状">
            <label for="s3_elemZIndex${s3_element_idx}">Layer_Order_zIndex:</label>
            <input type="number" id="s3_elemZIndex${s3_element_idx}" value="0">
            <label for="s3_elemPosX${s3_element_idx}">Position_X_Instruction:</label>
            <input type="text" id="s3_elemPosX${s3_element_idx}" placeholder="例如：Centered horizontally">
            <label for="s3_elemPosY${s3_element_idx}">Position_Y_Instruction:</label>
            <input type="text" id="s3_elemPosY${s3_element_idx}" placeholder="例如：Top of screen">
            <label for="s3_elemWidth${s3_element_idx}">Approx_Width_Instruction:</label>
            <input type="text" id="s3_elemWidth${s3_element_idx}" placeholder="例如：Spans full width, 128px">
            <label for="s3_elemHeight${s3_element_idx}">Approx_Height_Instruction:</label>
            <input type="text" id="s3_elemHeight${s3_element_idx}" placeholder="例如：Half screen height, 64px">
            <label for="s3_elemAspectRatio${s3_element_idx}">Target_Aspect_Ratio_Suggestion:</label>
            <input type="text" id="s3_elemAspectRatio${s3_element_idx}" placeholder="例如：16:9, 1:1, N/A">
            <label for="s3_elemTransparency${s3_element_idx}">Transparency_Required:</label>
            <select id="s3_elemTransparency${s3_element_idx}">
                <option value="Yes">Yes (PNG with alpha)</option>
                <option value="No">No (Solid)</option>
            </select>
            <label for="s3_elemVisualsForPrompt${s3_element_idx}">Visuals for AI Prompt (describe element's look):</label>
            <textarea id="s3_elemVisualsForPrompt${s3_element_idx}" rows="2" placeholder="例如：一个带有柔和圆角的深蓝色矩形，表面有轻微的渐变和光泽"></textarea>
            <label for="s3_elemStylingNotes${s3_element_idx}">Styling_Notes_Human:</label>
            <input type="text" id="s3_elemStylingNotes${s3_element_idx}" placeholder="例如：Described with a 'metallic sheen'">
            <button type="button" class="remove-item-btn">移除此元素</button>
        `;
        s3_elementsContainer.appendChild(div);
        div.querySelector('.remove-item-btn').addEventListener('click', () => div.remove());
    }
    s3_addElementButton.addEventListener('click', addS3Element);
    // addS3Element(); // Add one by default if needed

    generateCsvButton.addEventListener('click', () => {
        const overallArtStyle = document.getElementById('overallArtStyle').value;
        const headers = [
            "Element_ID", "Description_Human", "Layer_Order_zIndex", 
            "Position_X_Instruction", "Position_Y_Instruction", 
            "Approx_Width_Instruction", "Approx_Height_Instruction", 
            "Target_Aspect_Ratio_Suggestion", "Transparency_Required", 
            "AI_Image_Prompt_Element_Specific", "Styling_Notes_Human"
        ];
        
        let csvContent = headers.join(",") + "\n";
        csvTableBody.innerHTML = ""; // Clear previous table rows

        const elements = s3_elementsContainer.querySelectorAll('.element-item');
        elements.forEach((elem) => {
            const rowData = [];
            const elementId = elem.querySelector(`input[id^="s3_elemId"]`).value;
            rowData.push(elementId);
            rowData.push(elem.querySelector(`input[id^="s3_elemDesc"]`).value);
            rowData.push(elem.querySelector(`input[id^="s3_elemZIndex"]`).value);
            rowData.push(elem.querySelector(`input[id^="s3_elemPosX"]`).value);
            rowData.push(elem.querySelector(`input[id^="s3_elemPosY"]`).value);
            rowData.push(elem.querySelector(`input[id^="s3_elemWidth"]`).value);
            rowData.push(elem.querySelector(`input[id^="s3_elemHeight"]`).value);
            rowData.push(elem.querySelector(`input[id^="s3_elemAspectRatio"]`).value);
            
            const transparency = elem.querySelector(`select[id^="s3_elemTransparency"]`).value;
            rowData.push(transparency);

            const visualsForPrompt = elem.querySelector(`textarea[id^="s3_elemVisualsForPrompt"]`).value;
            let aiPrompt = `${visualsForPrompt}. Adhering to ${overallArtStyle} style. Strictly no legible text, words, letters, or numbers.`;
            if (transparency === "Yes") {
                aiPrompt += " Transparent background. PNG.";
            }
            rowData.push(`"${aiPrompt.replace(/"/g, '""')}"`); // Escape quotes for CSV

            rowData.push(elem.querySelector(`input[id^="s3_elemStylingNotes"]`).value);
            
            csvContent += rowData.map(d => `"${(d || "").toString().replace(/"/g, '""')}"`).join(",") + "\n";

            // Populate table
            const tr = csvTableBody.insertRow();
            rowData.forEach(cellData => {
                const td = tr.insertCell();
                td.textContent = cellData;
            });
        });
        step3_csvOutput.value = csvContent;
    });

    downloadCsvButton.addEventListener('click', () => {
        const csvData = step3_csvOutput.value;
        if (!csvData) {
            alert("没有 CSV 数据可供下载。请先生成 CSV。");
            return;
        }
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "ui_assets_description.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });

    // Initialize first step visibility
    document.getElementById('step1').style.display = 'block';
});