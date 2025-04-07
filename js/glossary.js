document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.getElementById('glossary-search');
    const glossaryTerms = document.querySelectorAll('.glossary-term');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            glossaryTerms.forEach(term => {
                const termTitle = term.querySelector('h3').textContent.toLowerCase();
                const termContent = term.querySelector('.term-content').textContent.toLowerCase();
                
                if (termTitle.includes(searchTerm) || termContent.includes(searchTerm)) {
                    term.style.display = 'block';
                    // 确保父section也可见
                    const parentSection = term.closest('.glossary-section');
                    if (parentSection) {
                        parentSection.style.display = 'block';
                    }
                } else {
                    term.style.display = 'none';
                }
            });
            
            // 隐藏没有可见术语的部分
            document.querySelectorAll('.glossary-section').forEach(section => {
                const visibleTerms = section.querySelectorAll('.glossary-term[style="display: block;"]');
                if (visibleTerms.length === 0) {
                    section.style.display = 'none';
                }
            });
            
            // 如果搜索框为空，显示所有条目
            if (searchTerm === '') {
                document.querySelectorAll('.glossary-section').forEach(section => {
                    section.style.display = 'block';
                });
                glossaryTerms.forEach(term => {
                    term.style.display = 'block';
                });
            }
        });
    }
    
    // 字母导航功能
    const letterLinks = document.querySelectorAll('.letter-link');
    
    letterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // 平滑滚动到对应部分
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // 减去头部高度的偏移量
                    behavior: 'smooth'
                });
                
                // 高亮显示当前活动的字母链接
                letterLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 检查当前页面位置，高亮显示对应的字母链接
    const highlightCurrentSection = () => {
        const scrollPosition = window.scrollY + 150; // 添加一些偏移
        
        const sections = document.querySelectorAll('.glossary-section');
        let currentSection = null;
        
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition) {
                currentSection = section.id;
            }
        });
        
        if (currentSection) {
            letterLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    };
    
    // 监听滚动事件
    window.addEventListener('scroll', highlightCurrentSection);
    
    // 初始加载时高亮当前部分
    highlightCurrentSection();
    
    // 为术语添加展开/折叠功能
    const termTitles = document.querySelectorAll('.glossary-term h3');
    
    termTitles.forEach(title => {
        title.addEventListener('click', function() {
            const term = this.closest('.glossary-term');
            term.classList.toggle('expanded');
            
            const content = term.querySelector('.term-content');
            
            if (term.classList.contains('expanded')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    
    // 默认展开所有术语
    document.querySelectorAll('.glossary-term').forEach(term => {
        term.classList.add('expanded');
        const content = term.querySelector('.term-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    });
}); 