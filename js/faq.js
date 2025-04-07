/**
 * FAQ Section functionality
 * Handles toggling of FAQ questions and answers
 */
(function() {
  'use strict';
  
  // Initialize FAQ functionality once DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initFaq);
  
  /**
   * Initialize FAQ accordion functionality
   */
  function initFaq() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Add click event listener to each question
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        toggleFaqItem(this, faqQuestions);
      });
    });
  }
  
  /**
   * Toggle FAQ item open/closed state
   * @param {HTMLElement} question - The question element that was clicked
   * @param {NodeList} allQuestions - All FAQ question elements for closing others
   */
  function toggleFaqItem(question, allQuestions) {
    const toggle = question.querySelector('.faq-toggle');
    const answer = question.nextElementSibling;
    
    // Toggle active class on current question
    toggle.classList.toggle('active');
    answer.classList.toggle('active');
    
    // Close all other questions
    allQuestions.forEach(otherQuestion => {
      if (otherQuestion !== question) {
        const otherToggle = otherQuestion.querySelector('.faq-toggle');
        const otherAnswer = otherQuestion.nextElementSibling;
        
        otherToggle.classList.remove('active');
        otherAnswer.classList.remove('active');
      }
    });
  }
})(); 