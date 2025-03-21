document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');
  
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
  
    // Handle contact form submission with security enhancements
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
  
    if (form && status) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
  
        const formData = new FormData(form);
  
        // CSRF Token (Optional - should be set on server and injected into the form)
        const csrfToken = document.querySelector('meta[name="csrf-token"]');
        if (csrfToken) {
          formData.append('csrf_token', csrfToken.getAttribute('content'));
        }
  
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            credentials: 'same-origin', // Same-origin policy enforcement
            headers: {
              'Content-Security-Policy': "default-src 'self'",
              'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
            }
          });
  
          const resultText = await response.text();
          const sanitizedText = resultText.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Basic XSS sanitization
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
  });
  