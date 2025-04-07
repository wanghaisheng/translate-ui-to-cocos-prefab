// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化导航栏
    initNavigation();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 初始化工具卡片悬停效果
    initToolCards();
    
    // 初始化数据库卡片动画
    initDatabaseCards();
    
    // 初始化testimonials轮播
    initTestimonials();
});

// 导航栏功能
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // 滚动时改变导航栏样式
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
    
    // 移动端菜单切换
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // 点击导航链接时关闭菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// 滚动动画
function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// 工具卡片悬停效果
function initToolCards() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
}

// 数据库卡片动画
function initDatabaseCards() {
    const cards = document.querySelectorAll('.database-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate-slide-in');
    });
}

// Testimonials 轮播
function initTestimonials() {
    const testimonials = document.querySelector('.testimonials-grid');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    if (!testimonials || testimonialCards.length === 0) return;
    
    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        updateTestimonials();
    }, 5000);
    
    function updateTestimonials() {
        const offset = -currentIndex * 100;
        testimonials.style.transform = `translateX(${offset}%)`;
    }
    
    // 触摸滑动支持
    let startX = 0;
    let isDragging = false;
    
    testimonials.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    testimonials.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                currentIndex = Math.min(currentIndex + 1, testimonialCards.length - 1);
            } else {
                currentIndex = Math.max(currentIndex - 1, 0);
            }
            updateTestimonials();
            isDragging = false;
        }
    });
    
    testimonials.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 动态背景效果
function initDynamicBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.insertBefore(canvas, document.body.firstChild);
    
    // 设置画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 粒子系统
    const particles = [];
    const particleCount = 200; // 增加粒子数量
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1; // 减小粒子大小
            this.speedX = Math.random() * 1 - 0.5; // 降低移动速度
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.3 + 0.1; // 降低不透明度
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width || 
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // 动画循环
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 初始化动态背景
initDynamicBackground();

// 打字机效果
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 应用打字机效果到标题
const titles = document.querySelectorAll('.typing-effect');
titles.forEach(title => {
    const text = title.textContent;
    typeWriter(title, text);
});

// 页面加载进度条
function initPageLoadProgress() {
    const progress = document.createElement('div');
    progress.className = 'page-load-progress';
    document.body.appendChild(progress);
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progress.style.opacity = '0';
            }, 300);
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }, 10);
}

// 初始化页面加载进度条
initPageLoadProgress();

// 暗色模式切换
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (!darkModeToggle) return;
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', 
            document.body.classList.contains('dark-mode'));
    });
}

// 初始化暗色模式
initDarkMode();

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 初始化图片懒加载
initLazyLoading();

// 表单验证
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // 处理表单提交
                console.log('Form submitted successfully');
            }
        });
    });
}

// 初始化表单验证
initFormValidation(); 