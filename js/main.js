/* ═══════════════════════════════════════════
   SUNNY ARYA — Portfolio Interactions (Brutalist)
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile menu toggle ──
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        // Provide brutal instant scroll instead of smooth
        target.scrollIntoView({ behavior: 'auto' });
      }
    });
  });

  // ── Scroll reveal animations ──
  // Brutalist reveals (quick, mechanical snaps)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Typed text effect ──
  const typedElement = document.getElementById('typed-text');
  if (typedElement) {
    const texts = [
      'BACKEND ENGINEER',
      'GEN-AI DEVELOPER',
      'EVENT DRIVEN EXPERT',
      'API BUILDER'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;

    function typeText() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 30; // Fast delete 
      } else {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 80; // Hard type
      }

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 200;
      }

      setTimeout(typeText, typeSpeed);
    }

    typeText();
  }

  // ── Contact form handling (prevent default) ──
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn--primary');
      const originalText = btn.textContent;
      const originalBg = btn.style.background;
      
      btn.textContent = 'MESSAGE SENT!';
      btn.style.background = '#000';
      btn.style.color = '#fff';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = originalBg;
        btn.style.color = '';
        form.reset();
      }, 3000);
    });
  }
});
