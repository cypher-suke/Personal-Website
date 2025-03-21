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
  
    // Handle contact form submission
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
  
    if (form && status) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
  
        const formData = new FormData(form);
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData
          });
  
          const resultText = await response.text();
          status.textContent = resultText;
          status.style.marginTop = '1rem';
  
          if (response.ok) {
            status.style.color = '#00cc66'; // green
            form.reset();
          } else {
            status.style.color = '#ff4444'; // red
          }
        } catch (error) {
          status.textContent = 'There was an error sending your message.';
          status.style.color = '#ff4444';
        }
      });
    }
  });
  