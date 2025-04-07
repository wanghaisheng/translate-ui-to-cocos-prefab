/**
 * Tool Landing Pages JavaScript
 * Handles interactive elements for tool landing pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Engine tabs functionality
  initEngineTabs();
  
  // Examples filter functionality
  initExamplesFilter();
  
  // FAQ accordion functionality
  initFaqAccordion();
  
  // Demo video functionality
  initDemoVideo();
});

/**
 * Initialize engine tabs functionality
 */
function initEngineTabs() {
  const engineTabs = document.querySelectorAll('.engine-tab');
  const engineContents = document.querySelectorAll('.engine-content');
  
  if (!engineTabs.length) return;
  
  engineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      engineTabs.forEach(t => t.classList.remove('active'));
      engineContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const engine = tab.getAttribute('data-engine');
      const content = document.getElementById(`${engine}-content`);
      if (content) {
        content.classList.add('active');
      }
    });
  });
}

/**
 * Initialize examples filter functionality
 */
function initExamplesFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const exampleCards = document.querySelectorAll('.example-card');
  
  if (!filterButtons.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      // Show/hide example cards based on filter
      exampleCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Initialize FAQ accordion functionality
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (!faqItems.length) return;
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle active class on clicked item
      item.classList.toggle('active');
      
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Initialize demo video functionality
 */
function initDemoVideo() {
  const playButton = document.querySelector('.play-button');
  
  if (!playButton) return;
  
  playButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Replace image with video iframe
    const demoVideo = playButton.closest('.demo-video');
    const videoImage = demoVideo.querySelector('img');
    
    if (videoImage) {
      const videoId = 'demo-video-id'; // Replace with actual video ID
      const iframe = document.createElement('iframe');
      
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      
      videoImage.style.display = 'none';
      playButton.style.display = 'none';
      
      demoVideo.appendChild(iframe);
    }
  });
}

/**
 * Smooth scroll to anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

/**
 * Add scroll-based animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.platform-card, .process-step, .example-card, .testimonial');
  
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize scroll animations
initScrollAnimations(); 