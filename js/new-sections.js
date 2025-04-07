document.addEventListener('DOMContentLoaded', function() {
  // FAQ 交互
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // 关闭所有其他 FAQ 项
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // 如果当前项不是活动的，则激活它
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
  
  // 默认打开第一个 FAQ 项
  if (document.querySelector('.faq-item')) {
    document.querySelector('.faq-item').classList.add('active');
  }
  
  // Case Study Animation and Interaction
  const caseStudy = document.querySelector('.case-study');
  if (caseStudy) {
    // Add hover effect to case study
    caseStudy.addEventListener('mouseenter', () => {
      caseStudy.classList.add('case-study-hover');
    });
    
    caseStudy.addEventListener('mouseleave', () => {
      caseStudy.classList.remove('case-study-hover');
    });
    
    // Animate metrics on scroll
    const animateMetrics = () => {
      const metrics = document.querySelectorAll('.case-metric .metric-value');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const value = target.getAttribute('data-value') || target.innerText;
            const duration = 2000;
            let startTimestamp = null;
            const startValue = 0;
            
            // Handle different formats (numbers, percentages, currency)
            const isPercentage = value.includes('%');
            const isCurrency = value.includes('$');
            let endValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
            
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
              
              if (isPercentage) {
                target.innerText = `${currentValue}%`;
              } else if (isCurrency) {
                target.innerText = `$${currentValue}K`;
              } else {
                target.innerText = `${currentValue}+`;
              }
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            
            // Store original value as data attribute
            target.setAttribute('data-value', value);
            // Start animation
            window.requestAnimationFrame(step);
            // Unobserve after animation starts
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.5 });
      
      metrics.forEach(metric => {
        observer.observe(metric);
      });
    };
    
    // Call animation function
    animateMetrics();
    
    // Add parallax effect to case study image
    const caseStudyImage = document.querySelector('.case-study-image img');
    if (caseStudyImage) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.05;
        caseStudyImage.style.transform = `translateY(${offset}px)`;
      });
    }
  }
});