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
