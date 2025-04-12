// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollTop = 0;
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
const formMessage = document.querySelector('.form-message');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.email.value;
    
    // Simulate form submission
    formMessage.innerHTML = 'Subscribing...';
    formMessage.style.color = '#fff';
    
    setTimeout(() => {
      formMessage.innerHTML = 'Thank you for subscribing!';
      newsletterForm.reset();
      
      setTimeout(() => {
        formMessage.innerHTML = '';
      }, 3000);
    }, 1500);
  });
}

