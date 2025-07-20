document.addEventListener('DOMContentLoaded', function () {

  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function () {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
  });


  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
    });
  });


  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let cardWidth = document.querySelector('.work-card').offsetWidth + 30;

  window.addEventListener('resize', () => {
    cardWidth = document.querySelector('.work-card').offsetWidth + 30;
  });
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });


  const contactForm = document.querySelector('.contact-section');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
});