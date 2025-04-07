document.addEventListener('DOMContentLoaded', function() {
    // Initialize language support
    initLanguage();
    
    // Tab navigation in playground
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Deactivate all tabs
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Activate selected tab
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Results tab navigation
    const resultTabButtons = document.querySelectorAll('.results-tab-btn');
    resultTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-result-tab');
            
            // Deactivate all tabs
            document.querySelectorAll('.results-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.result-tab-content').forEach(content => content.classList.remove('active'));
            
            // Activate selected tab
            button.classList.add('active');
            document.getElementById(tabId + '-content').classList.add('active');
        });
    });
    
    // Upload functionality
    const uploadDropzone = document.getElementById('upload-dropzone');
    const fileUpload = document.getElementById('file-upload');
    
    if (uploadDropzone && fileUpload) {
        uploadDropzone.addEventListener('click', () => {
            fileUpload.click();
        });
        
        uploadDropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadDropzone.classList.add('dragover');
        });
        
        uploadDropzone.addEventListener('dragleave', () => {
            uploadDropzone.classList.remove('dragover');
        });
        
        uploadDropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadDropzone.classList.remove('dragover');
            
            if (e.dataTransfer.files.length) {
                handleFileUpload(e.dataTransfer.files[0]);
            }
        });
        
        fileUpload.addEventListener('change', (e) => {
            if (e.target.files.length) {
                handleFileUpload(e.target.files[0]);
            }
        });
    }
    
    // Demo image button
    const demoImageBtn = document.querySelector('.demo-image-btn');
    if (demoImageBtn) {
        demoImageBtn.addEventListener('click', () => {
            showDemoResults();
        });
    }
    
    // URL Analysis
    const urlAnalyzeBtn = document.getElementById('url-analyze-btn');
    if (urlAnalyzeBtn) {
        urlAnalyzeBtn.addEventListener('click', () => {
            const urlInput = document.getElementById('url-input').value;
            if (urlInput.trim() !== '') {
                showLoadingState();
                setTimeout(() => {
                    showDemoResults();
                }, 1500);
            }
        });
    }
    
    // Figma Analysis
    const figmaAnalyzeBtn = document.getElementById('figma-analyze-btn');
    if (figmaAnalyzeBtn) {
        figmaAnalyzeBtn.addEventListener('click', () => {
            const figmaUrl = document.getElementById('figma-url-input').value;
            if (figmaUrl.trim() !== '') {
                showLoadingState();
                setTimeout(() => {
                    showDemoResults();
                }, 1500);
            }
        });
    }
    
    // HTML Analysis
    const htmlAnalyzeBtn = document.getElementById('html-analyze-btn');
    if (htmlAnalyzeBtn) {
        htmlAnalyzeBtn.addEventListener('click', () => {
            const htmlInput = document.getElementById('html-input').value;
            if (htmlInput.trim() !== '') {
                showLoadingState();
                setTimeout(() => {
                    showDemoResults();
                }, 1500);
            }
        });
    }
    
    // Close results
    const closeResultsBtn = document.getElementById('close-results');
    if (closeResultsBtn) {
        closeResultsBtn.addEventListener('click', () => {
            document.getElementById('analysis-results').style.display = 'none';
        });
    }
    
    // Filter library
    setupFilterLibrary();
    
    // Testimonials slider
    const testimonialPrev = document.getElementById('testimonial-prev');
    const testimonialNext = document.getElementById('testimonial-next');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;
    
    if (testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', () => {
            navigateTestimonial((currentTestimonial - 1 + 3) % 3);
        });
        
        testimonialNext.addEventListener('click', () => {
            navigateTestimonial((currentTestimonial + 1) % 3);
        });
        
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                navigateTestimonial(index);
            });
        });
    }
    
    function navigateTestimonial(index) {
        currentTestimonial = index;
        
        // Update dots
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Update visible testimonial
        const testimonials = document.querySelectorAll('.testimonial-card');
        testimonials.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Hide all testimonials except the first one
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((card, i) => {
        if (i !== 0) {
            card.style.display = 'none';
        }
    });
    
    // Pricing toggle
    const billingToggle = document.getElementById('billing-toggle');
    if (billingToggle) {
        billingToggle.addEventListener('change', () => {
            const monthlyPrices = document.querySelectorAll('.amount.monthly');
            const annualPrices = document.querySelectorAll('.amount.annual');
            
            monthlyPrices.forEach(price => {
                price.style.display = billingToggle.checked ? 'none' : 'inline';
            });
            
            annualPrices.forEach(price => {
                price.style.display = billingToggle.checked ? 'inline' : 'none';
            });
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Export to Cocos Creator button
    const exportToCocosBtn = document.getElementById('export-to-cocos');
    if (exportToCocosBtn) {
        exportToCocosBtn.addEventListener('click', () => {
            alert('This feature is available in premium plans. Please upgrade to export to Cocos Creator 3.8.');
        });
    }
    
    // JSON copy button
    const copyJsonBtn = document.getElementById('copy-json');
    if (copyJsonBtn) {
        copyJsonBtn.addEventListener('click', () => {
            const jsonText = document.getElementById('json-output').textContent;
            navigator.clipboard.writeText(jsonText)
                .then(() => {
                    alert('JSON copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy JSON: ', err);
                });
        });
    }
    
    // JSON download button
    const downloadJsonBtn = document.getElementById('download-json');
    if (downloadJsonBtn) {
        downloadJsonBtn.addEventListener('click', () => {
            const jsonText = document.getElementById('json-output').textContent;
            const blob = new Blob([jsonText], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ui-analysis.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
    
    // Initialize AI UI Showcase Gallery
    function initAIShowcase() {
        const galleryContainer = document.getElementById('showcase-gallery');
        if (!galleryContainer) return;
        
        // Sample showcase data (in a real implementation, this would come from an API)
        const showcaseItems = [
            {
                id: 1,
                title: 'Fantasy RPG Main Menu',
                source: 'midjourney',
                genre: 'rpg',
                type: 'main-menu',
                image: 'img/showcase/fantasy-ui-1.jpg',
                tags: ['Fantasy', 'RPG', 'Main Menu']
            },
            {
                id: 2,
                title: 'Sci-Fi Inventory Screen',
                source: 'ideogram',
                genre: 'action',
                type: 'inventory',
                image: 'img/showcase/scifi-ui-1.jpg',
                tags: ['Sci-Fi', 'Action', 'Inventory']
            },
            {
                id: 3,
                title: 'Casual Game Shop',
                source: 'imagefx',
                genre: 'casual',
                type: 'shop',
                image: 'img/showcase/casual-ui-1.jpg',
                tags: ['Casual', 'Colorful', 'Shop']
            },
            {
                id: 4,
                title: 'Strategy Battle UI',
                source: 'midjourney',
                genre: 'strategy',
                type: 'battle',
                image: 'img/showcase/strategy-ui-1.jpg',
                tags: ['Strategy', 'Battle', 'Dashboard']
            },
            {
                id: 5,
                title: 'Mobile RPG Inventory',
                source: 'ideogram',
                genre: 'rpg',
                type: 'inventory',
                image: 'img/showcase/mobile-ui-1.jpg',
                tags: ['Mobile', 'RPG', 'Inventory']
            },
            {
                id: 6,
                title: 'Action Game Main Menu',
                source: 'imagefx',
                genre: 'action',
                type: 'main-menu',
                image: 'img/showcase/action-ui-1.jpg',
                tags: ['Action', 'Dark Theme', 'Main Menu']
            }
        ];
        
        // Render initial gallery
        renderGallery(showcaseItems);
        
        // Set up filter functionality
        const sourceFilter = document.getElementById('ai-source-filter');
        const genreFilter = document.getElementById('game-genre-filter');
        const typeFilter = document.getElementById('ui-type-filter');
        
        function applyFilters() {
            const sourceValue = sourceFilter.value;
            const genreValue = genreFilter.value;
            const typeValue = typeFilter.value;
            
            let filteredItems = showcaseItems;
            
            if (sourceValue !== 'all') {
                filteredItems = filteredItems.filter(item => item.source === sourceValue);
            }
            
            if (genreValue !== 'all') {
                filteredItems = filteredItems.filter(item => item.genre === genreValue);
            }
            
            if (typeValue !== 'all') {
                filteredItems = filteredItems.filter(item => item.type === typeValue);
            }
            
            renderGallery(filteredItems);
        }
        
        sourceFilter.addEventListener('change', applyFilters);
        genreFilter.addEventListener('change', applyFilters);
        typeFilter.addEventListener('change', applyFilters);
        
        function renderGallery(items) {
            galleryContainer.innerHTML = '';
            
            if (items.length === 0) {
                galleryContainer.innerHTML = '<div class="no-results"><p>No UI designs match your filters. Try different criteria.</p></div>';
                return;
            }
            
            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'showcase-item';
                
                itemElement.innerHTML = `
                    <div class="showcase-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="showcase-info">
                        <h4>${item.title}</h4>
                        <div class="showcase-tags">
                            ${item.tags.map(tag => `<span class="showcase-tag">${tag}</span>`).join('')}
                        </div>
                        <div class="showcase-actions">
                            <div class="before-after-toggle">
                                <i class="fas fa-exchange-alt"></i>
                                <span>Before/After</span>
                            </div>
                            <button class="btn small-btn view-analysis-btn">View Analysis</button>
                        </div>
                    </div>
                `;
                
                galleryContainer.appendChild(itemElement);
                
                // Add event listener to "View Analysis" button
                const viewButton = itemElement.querySelector('.view-analysis-btn');
                viewButton.addEventListener('click', () => {
                    // Set the sample image for analysis results
                    document.getElementById('analyzed-image').src = item.image;
                    showResults();
                });
                
                // Add before/after toggle functionality
                const beforeAfterToggle = itemElement.querySelector('.before-after-toggle');
                const showcaseImage = itemElement.querySelector('.showcase-image img');
                let showingBefore = true;
                
                beforeAfterToggle.addEventListener('click', () => {
                    if (showingBefore) {
                        // Switch to "after" image (showing the UI in Cocos Creator)
                        const afterImagePath = item.image.replace('.jpg', '-after.jpg');
                        showcaseImage.src = afterImagePath;
                        beforeAfterToggle.querySelector('span').textContent = 'Original/Implemented';
                    } else {
                        // Switch back to original image
                        showcaseImage.src = item.image;
                        beforeAfterToggle.querySelector('span').textContent = 'Before/After';
                    }
                    showingBefore = !showingBefore;
                });
            });
        }
    }
    
    initAIShowcase();
});

// Functions
function handleFileUpload(file) {
    if (file.type.startsWith('image/')) {
        showLoadingState();
        
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('analyzed-image').src = e.target.result;
            setTimeout(() => {
                showResults();
            }, 1500);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload an image file.');
    }
}

function showLoadingState() {
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        uploadArea.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i><p>Analyzing UI...</p></div>';
    }
}

function showResults() {
    populateResults();
    document.getElementById('analysis-results').style.display = 'block';
}

function showDemoResults() {
    // Set a demo image
    document.getElementById('analyzed-image').src = 'img/demo-ui.svg';
    showResults();
}

function populateResults() {
    // Populate component list
    populateComponentList();
    
    // Populate JSON output
    populateJsonOutput();
    
    // Populate styles
    populateStyles();
    
    // Populate recommendations
    populateRecommendations();
}

function populateComponentList() {
    const componentList = document.getElementById('component-list');
    if (!componentList) return;
    
    componentList.innerHTML = `
        <div class="component-item">
            <div class="component-header">
                <h4>Main Panel</h4>
                <span class="component-type">Panel</span>
            </div>
            <div class="component-details">
                <p><strong>Size:</strong> 750×450</p>
                <p><strong>Position:</strong> X: 0, Y: 0</p>
                <p><strong>Children:</strong> 8</p>
            </div>
        </div>
        <div class="component-item">
            <div class="component-header">
                <h4>Logo</h4>
                <span class="component-type">Image</span>
            </div>
            <div class="component-details">
                <p><strong>Size:</strong> 120×80</p>
                <p><strong>Position:</strong> X: 40, Y: 30</p>
                <p><strong>Image Source:</strong> logo.png</p>
            </div>
        </div>
        <div class="component-item">
            <div class="component-header">
                <h4>Title Text</h4>
                <span class="component-type">Label</span>
            </div>
            <div class="component-details">
                <p><strong>Size:</strong> 300×50</p>
                <p><strong>Position:</strong> X: 225, Y: 35</p>
                <p><strong>Text:</strong> "Welcome to the Game"</p>
                <p><strong>Font:</strong> Arial, 28px, #FFFFFF</p>
            </div>
        </div>
        <div class="component-item">
            <div class="component-header">
                <h4>Start Button</h4>
                <span class="component-type">Button</span>
            </div>
            <div class="component-details">
                <p><strong>Size:</strong> 200×60</p>
                <p><strong>Position:</strong> X: 275, Y: 150</p>
                <p><strong>Text:</strong> "Start Game"</p>
                <p><strong>Normal State:</strong> #4CAF50</p>
                <p><strong>Pressed State:</strong> #388E3C</p>
            </div>
        </div>
        <div class="component-item">
            <div class="component-header">
                <h4>Settings Button</h4>
                <span class="component-type">Button</span>
            </div>
            <div class="component-details">
                <p><strong>Size:</strong> 200×60</p>
                <p><strong>Position:</strong> X: 275, Y: 230</p>
                <p><strong>Text:</strong> "Settings"</p>
                <p><strong>Normal State:</strong> #2196F3</p>
                <p><strong>Pressed State:</strong> #1976D2</p>
            </div>
        </div>
    `;
}

function populateJsonOutput() {
    const jsonOutput = document.getElementById('json-output');
    if (!jsonOutput) return;
    
    const demoJson = {
        "version": "1.0",
        "meta": {
            "screen_type": "main_menu",
            "resolution": "1920x1080",
            "game_type": "action"
        },
        "root": {
            "name": "MainPanel",
            "type": "Panel",
            "rect": {
                "x": 0,
                "y": 0,
                "width": 750,
                "height": 450
            },
            "style": {
                "backgroundType": "image",
                "backgroundImage": "panel_bg.png",
                "opacity": 1
            },
            "children": [
                {
                    "name": "Logo",
                    "type": "Image",
                    "rect": {
                        "x": 40,
                        "y": 30,
                        "width": 120,
                        "height": 80
                    },
                    "style": {
                        "image": "logo.png"
                    }
                },
                {
                    "name": "Title",
                    "type": "Label",
                    "rect": {
                        "x": 225,
                        "y": 35,
                        "width": 300,
                        "height": 50
                    },
                    "text": "Welcome to the Game",
                    "style": {
                        "fontSize": 28,
                        "fontFamily": "Arial",
                        "color": "#FFFFFF",
                        "alignment": "center"
                    }
                },
                {
                    "name": "StartButton",
                    "type": "Button",
                    "rect": {
                        "x": 275,
                        "y": 150,
                        "width": 200,
                        "height": 60
                    },
                    "text": "Start Game",
                    "style": {
                        "normalColor": "#4CAF50",
                        "pressedColor": "#388E3C",
                        "textColor": "#FFFFFF",
                        "fontSize": 24,
                        "fontFamily": "Arial",
                        "cornerRadius": 8
                    }
                },
                {
                    "name": "SettingsButton",
                    "type": "Button",
                    "rect": {
                        "x": 275,
                        "y": 230,
                        "width": 200,
                        "height": 60
                    },
                    "text": "Settings",
                    "style": {
                        "normalColor": "#2196F3",
                        "pressedColor": "#1976D2",
                        "textColor": "#FFFFFF",
                        "fontSize": 24,
                        "fontFamily": "Arial",
                        "cornerRadius": 8
                    }
                }
            ]
        }
    };
    
    jsonOutput.textContent = JSON.stringify(demoJson, null, 2);
}

function populateStyles() {
    const stylesContainer = document.getElementById('styles-container');
    if (!stylesContainer) return;
    
    stylesContainer.innerHTML = `
        <div class="style-section">
            <h4>Color Palette</h4>
            <div class="color-swatches">
                <div class="color-swatch" style="background-color: #2C3E50">
                    <span>#2C3E50</span>
                    <span>Background</span>
                </div>
                <div class="color-swatch" style="background-color: #4CAF50">
                    <span>#4CAF50</span>
                    <span>Primary Button</span>
                </div>
                <div class="color-swatch" style="background-color: #2196F3">
                    <span>#2196F3</span>
                    <span>Secondary Button</span>
                </div>
                <div class="color-swatch" style="background-color: #FFFFFF; color: #333;">
                    <span>#FFFFFF</span>
                    <span>Text</span>
                </div>
            </div>
        </div>
        <div class="style-section">
            <h4>Typography</h4>
            <div class="typography-samples">
                <div class="typography-sample">
                    <span class="font-name">Arial, 28px</span>
                    <span class="font-preview" style="font-family: Arial; font-size: 28px;">Title Text</span>
                    <span class="font-usage">Used for: Main Title</span>
                </div>
                <div class="typography-sample">
                    <span class="font-name">Arial, 24px</span>
                    <span class="font-preview" style="font-family: Arial; font-size: 24px;">Button Text</span>
                    <span class="font-usage">Used for: Button Labels</span>
                </div>
            </div>
        </div>
        <div class="style-section">
            <h4>Layout</h4>
            <div class="layout-info">
                <p><strong>Alignment:</strong> Center-aligned UI</p>
                <p><strong>Spacing:</strong> 20px between major elements</p>
                <p><strong>Padding:</strong> 30px from screen edges</p>
            </div>
        </div>
        <div class="style-section">
            <h4>Visual Effects</h4>
            <div class="effects-info">
                <p><strong>Button Shadows:</strong> 0px 4px 8px rgba(0,0,0,0.2)</p>
                <p><strong>Panel Gradient:</strong> Linear from #2C3E50 to #1A2530</p>
                <p><strong>Corner Radius:</strong> 8px for buttons, 12px for panels</p>
            </div>
        </div>
    `;
}

function populateRecommendations() {
    const recommendationsContainer = document.getElementById('recommendations-container');
    if (!recommendationsContainer) return;
    
    recommendationsContainer.innerHTML = `
        <div class="recommendation-item">
            <div class="recommendation-header">
                <i class="fas fa-lightbulb"></i>
                <h4>Improve Button Contrast</h4>
            </div>
            <p>The green "Start Game" button may not have enough contrast against the dark background for some users. Consider increasing the brightness or adding a subtle glow effect to improve visibility.</p>
        </div>
        <div class="recommendation-item">
            <div class="recommendation-header">
                <i class="fas fa-lightbulb"></i>
                <h4>Add Visual Feedback</h4>
            </div>
            <p>Add hover states to buttons to provide better visual feedback. Based on similar action games, a subtle scale or glow effect on hover increases user engagement by 23%.</p>
        </div>
        <div class="recommendation-item">
            <div class="recommendation-header">
                <i class="fas fa-lightbulb"></i>
                <h4>Consider Additional Navigation</h4>
            </div>
            <p>Most action games include "Exit" and "Credits" options in the main menu. Consider adding these for completeness. Approximately 85% of similar games include these options.</p>
        </div>
        <div class="recommendation-item">
            <div class="recommendation-header">
                <i class="fas fa-lightbulb"></i>
                <h4>Add Animations</h4>
            </div>
            <p>Adding subtle animations to the title and buttons can significantly improve user engagement. Consider a gentle pulsing effect on the "Start Game" button to draw attention.</p>
        </div>
    `;
}

function setupFilterLibrary() {
    // Populate the result grid with mock data
    const resultGrid = document.getElementById('result-grid');
    if (!resultGrid) return;
    
    // Generate 9 mock UI screens
    let html = '';
    for (let i = 1; i <= 9; i++) {
        html += `
            <div class="result-item">
                <div class="result-image">
                    <img src="img/ui-sample-${i}.svg" alt="UI Screen Sample">
                </div>
                <div class="result-info">
                    <h4>Game UI Screen ${i}</h4>
                    <div class="result-tags">
                        <span class="tag">${['Chinese', 'Western', 'Anime', 'Cartoon', 'Pixel'][i % 5]} Style</span>
                        <span class="tag">${['RPG', 'Action', 'Strategy', 'Casual', 'Adventure'][i % 5]}</span>
                    </div>
                    <button class="btn small-btn view-details-btn">View Details</button>
                </div>
            </div>
        `;
    }
    resultGrid.innerHTML = html;
    
    // Add event listeners to view details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Set the sample image
            document.getElementById('analyzed-image').src = `img/ui-sample-${index + 1}.svg`;
            showResults();
        });
    });
    
    // View toggle (grid/list)
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const viewType = button.getAttribute('data-view');
            
            // Update active button
            document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update view
            if (viewType === 'list') {
                resultGrid.classList.add('list-view');
            } else {
                resultGrid.classList.remove('list-view');
            }
        });
    });
}

function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    const ctaButton = document.querySelector('.cta-button');
    
    nav.classList.toggle('active');
    ctaButton.classList.toggle('active');
}

// Language support
function initLanguage() {
    // Get the language selector
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) return;
    
    // Set default language
    let currentLang = 'en';
    
    // Load language if stored in localStorage
    if (localStorage.getItem('preferred_language')) {
        currentLang = localStorage.getItem('preferred_language');
        languageSelect.value = currentLang;
    }
    
    // Load the language file
    loadLanguage(currentLang);
    
    // Add change event listener
    languageSelect.addEventListener('change', function() {
        const newLang = this.value;
        localStorage.setItem('preferred_language', newLang);
        loadLanguage(newLang);
    });
}

function loadLanguage(lang) {
    fetch(`locale/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations);
        })
        .catch(error => {
            console.error('Error loading language file:', error);
            // If loading fails, try to load English as fallback
            if (lang !== 'en') {
                loadLanguage('en');
            }
        });
}

function applyTranslations(translations) {
    // Apply translations to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
    
    // Apply translations to placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });
    
    // Apply translations to meta tags
    document.querySelectorAll('meta[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.content = translations[key];
        }
    });
    
    // Update page title if it has a translation
    if (translations.title) {
        document.title = translations.title;
    }
}