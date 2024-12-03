const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

document.querySelector('.hero-btn').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const sectionsToAnimate = document.querySelectorAll('.about-section, .product-card');

if (sectionsToAnimate.length > 0) {
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 } 
  );

  sectionsToAnimate.forEach((section) => animationObserver.observe(section));
}

const productCards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.3 }
);

productCards.forEach((card) => observer.observe(card));

const dealCards = document.querySelectorAll('.deal-card');

if (dealCards.length > 0) {
  const dealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  dealCards.forEach((card) => dealObserver.observe(card));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  });
  