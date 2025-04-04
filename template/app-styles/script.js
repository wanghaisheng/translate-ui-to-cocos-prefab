import { config } from './config.js';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize showcase
    const styleBtns = document.querySelectorAll('.style-btn');
    const showcases = document.querySelectorAll('.style-showcase');
    
    // Set default style showcase
    showcases[0].classList.add('active');
    
    // Apply global dark mode if configured
    if (config.customization.darkModeDefault) {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f5f5f5';
    }
    
    // Style button clicks
    styleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            styleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding showcase
            const styleId = this.dataset.style;
            
            // Hide all showcases with animation
            showcases.forEach(showcase => {
                if (showcase.classList.contains('active')) {
                    gsap.to(showcase, {
                        opacity: 0,
                        duration: config.animations.fadeTime / 1000,
                        onComplete: () => {
                            showcase.classList.remove('active');
                            
                            // Show selected showcase
                            const targetShowcase = document.getElementById(`${styleId}-showcase`);
                            targetShowcase.classList.add('active');
                            gsap.fromTo(targetShowcase, 
                                { opacity: 0 },
                                { opacity: 1, duration: config.animations.fadeTime / 1000 }
                            );
                            
                            // Initialize style-specific interactions
                            initStyleInteractions(styleId);
                        }
                    });
                }
            });
            
            // Play sound if enabled
            if (config.interactive.enableSounds) {
                playClickSound();
            }
        });
    });
    
    // Initialize interactions for default style
    initStyleInteractions('minimalism');
    
    // Listen for theme toggle in Dark Mode demo
    const darkToggle = document.querySelector('.dark-toggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', function() {
            const handle = this.querySelector('.dark-toggle-handle');
            if (handle.style.right === '2px') {
                handle.style.right = '30px';
            } else {
                handle.style.right = '2px';
            }
        });
    }
    
    // Initialize Neumorphism toggle
    const neuToggle = document.querySelector('.neu-toggle');
    if (neuToggle) {
        neuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    // Initialize Skeuomorphism switch
    const skeuSwitch = document.querySelector('.skeu-switch');
    if (skeuSwitch) {
        skeuSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
            if (config.interactive.enableSounds) {
                playToggleSound();
            }
        });
    }
    
    // Initialize Skeuomorphism dial
    const skeuDial = document.querySelector('.skeu-dial-handle');
    if (skeuDial) {
        let rotating = false;
        let startAngle = 0;
        let currentAngle = 30;
        
        skeuDial.addEventListener('mousedown', function(e) {
            e.preventDefault();
            rotating = true;
            
            const rect = skeuDial.parentElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!rotating) return;
            
            const rect = skeuDial.parentElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
            const rotation = currentAngle + (angle - startAngle);
            
            skeuDial.style.transform = `rotate(${rotation}deg)`;
        });
        
        document.addEventListener('mouseup', function() {
            if (rotating) {
                rotating = false;
                const transformStyle = skeuDial.style.transform;
                const match = transformStyle.match(/rotate\(([^)]+)deg\)/);
                if (match) {
                    currentAngle = parseFloat(match[1]);
                }
            }
        });
    }
    
    // Make Brutal Button Interactive
    const brutalBtn = document.querySelector('.brutal-btn');
    if (brutalBtn) {
        brutalBtn.addEventListener('mousedown', function() {
            this.style.transform = 'translate(3px, 3px)';
            this.style.boxShadow = '0px 0px 0 black';
            
            if (config.interactive.enableSounds) {
                playClickSound('harsh');
            }
        });
        
        brutalBtn.addEventListener('mouseup', function() {
            this.style.transform = 'translate(1px, 1px)';
            this.style.boxShadow = '2px 2px 0 black';
        });
        
        brutalBtn.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '3px 3px 0 black';
        });
    }
    
    // Animate Illustration Character
    animateIllustrationCharacter();
});

// Initialize style-specific interactions
function initStyleInteractions(styleId) {
    switch(styleId) {
        case 'minimalism':
            // Add subtle feedback to buttons
            const minBtn = document.querySelector('.min-btn');
            if (minBtn) {
                minBtn.addEventListener('click', function() {
                    gsap.to(this, {
                        backgroundColor: '#333',
                        scale: 0.95,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 1
                    });
                });
            }
            break;
            
        case 'glass':
            // Add parallax effect to glass elements
            const glassCard = document.querySelector('.glass-card');
            const glassContainer = document.querySelector('.glass-container');
            
            if (glassContainer && glassCard) {
                glassContainer.addEventListener('mousemove', function(e) {
                    const rect = glassContainer.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const xPercent = (x / rect.width - 0.5) * 20;
                    const yPercent = (y / rect.height - 0.5) * 10;
                    
                    gsap.to(glassCard, {
                        rotationY: xPercent,
                        rotationX: -yPercent,
                        transformPerspective: 1000,
                        duration: 0.5,
                        ease: 'power1.out'
                    });
                });
                
                glassContainer.addEventListener('mouseleave', function() {
                    gsap.to(glassCard, {
                        rotationY: 0,
                        rotationX: 0,
                        duration: 0.5,
                        ease: 'power1.out'
                    });
                });
            }
            break;
            
        case 'illustration':
            // Reset animation
            animateIllustrationCharacter();
            break;
    }
}

// Animate the illustration character
function animateIllustrationCharacter() {
    const character = document.querySelector('.illus-character');
    const eyes = document.querySelectorAll('.illus-eye');
    const cloud = document.querySelector('.illus-cloud');
    
    if (character && config.interactive.enableAnimations) {
        // Bounce character
        gsap.to(character, {
            y: -10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        // Blink eyes
        if (eyes.length) {
            const blinkEyes = () => {
                gsap.to(eyes, {
                    scaleY: 0.1,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        // Set the next blink
                        gsap.delayedCall(2 + Math.random() * 3, blinkEyes);
                    }
                });
            };
            
            // Start blink cycle
            blinkEyes();
        }
        
        // Move cloud
        if (cloud) {
            gsap.to(cloud, {
                x: -30,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }
}

// Sound functions
function playClickSound(type = 'subtle') {
    if (!config.interactive.enableSounds) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'subtle') {
        oscillator.type = 'sine';
        oscillator.frequency.value = 800;
        gainNode.gain.value = 0.1;
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'harsh') {
        oscillator.type = 'square';
        oscillator.frequency.value = 200;
        gainNode.gain.value = 0.15;
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.15);
    }
}

function playToggleSound() {
    if (!config.interactive.enableSounds) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 400;
    gainNode.gain.value = 0.1;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
}

