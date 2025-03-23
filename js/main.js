document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
  
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  
    if (aboutImage) observer.observe(aboutImage);
    if (aboutText) observer.observe(aboutText);
  
    // Handle contact form submission with security enhancements
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
  
    if (form && status) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
  
        const formData = new FormData(form);
  
        const csrfToken = document.querySelector('meta[name="csrf-token"]');
        if (csrfToken) {
          formData.append('csrf_token', csrfToken.getAttribute('content'));
        }
  
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            credentials: 'same-origin',
            headers: {
              'Content-Security-Policy': "default-src 'self'",
              'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
            }
          });
  
          const resultText = await response.text();
          const sanitizedText = resultText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          status.textContent = sanitizedText;
          status.style.marginTop = '1rem';
  
          if (response.ok) {
            status.style.color = '#00cc66';
            form.reset();
          } else {
            status.style.color = '#ff4444';
          }
        } catch (error) {
          status.textContent = 'There was an error sending your message.';
          status.style.color = '#ff4444';
        }
      });
    }
  
    // Show navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
    });
  });  
  