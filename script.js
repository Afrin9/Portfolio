const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    
    overlay.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    

    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
         
          hamburger.classList.remove('active');
          mobileNav.classList.remove('active');
          overlay.classList.remove('active');
          body.classList.remove('no-scroll');
          
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
   
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselTrack = document.querySelector('.carousel-track');
    
    if (prevButton && nextButton && carouselTrack) {
      prevButton.addEventListener('click', () => {
        carouselTrack.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      });
      
      nextButton.addEventListener('click', () => {
        carouselTrack.scrollBy({
          left: 300,
          behavior: 'smooth'
        });
      });
    }
    
   
    const contactForm = document.querySelector('.contact-section');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
      });
    }