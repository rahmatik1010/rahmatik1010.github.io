/* ============================================================
   RAHMAT HIDAYAT — FUTURE AUTOMOTIVE EDITORIAL
   Interactive Systems & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ── Preloader ──────────────────────────────────────────────
  const preloader = document.getElementById('preloader');
  const preloaderFill = document.getElementById('preloaderFill');
  let progress = 0;

  const preloaderInterval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(preloaderInterval);
      setTimeout(() => {
        preloader.classList.add('hidden');
        // Start counter animations after preloader hides
        initCounters();
      }, 400);
    }
    preloaderFill.style.width = progress + '%';
  }, 150);

  // ── Cursor Glow ────────────────────────────────────────────
  const cursorGlow = document.getElementById('cursorGlow');

  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  // ── Navigation Scroll Effect ───────────────────────────────
  const nav = document.getElementById('mainNav');

  const handleNavScroll = () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ── Mobile Menu ────────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('[data-mobile-link]');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Smooth Scroll for Anchor Links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Scroll Reveal ──────────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Counter Animation ──────────────────────────────────────
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'));
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // ── Parallax on Hero Background ────────────────────────────
  const heroBg = document.querySelector('.hero-bg img');

  if (heroBg && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;

      if (scrolled < heroHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
      }
    }, { passive: true });
  }

  // ── Active Navigation Highlight ────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--accent-primary)';
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-20% 0px -50% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));

  // ── Magnetic Button Effect ─────────────────────────────────
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');

  if (window.matchMedia('(pointer: fine)').matches) {
    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ── Capability Card Tilt ───────────────────────────────────
  const capabilityCards = document.querySelectorAll('.capability-card');

  if (window.matchMedia('(pointer: fine)').matches) {
    capabilityCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * -8;
        const rotateY = (x - 0.5) * 8;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ── Form — FormSubmit.co Integration ─────────────────────
  const contactForm = document.getElementById('contactForm');
  const formSubmit = document.getElementById('formSubmit');
  const formRedirect = document.getElementById('formRedirect');

  // Set the redirect URL dynamically so it works on any domain (localhost, github.io, custom)
  if (formRedirect) {
    formRedirect.value = window.location.origin + window.location.pathname + '#success';
  }

  // Show loading state on submit (form posts naturally to FormSubmit.co)
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      formSubmit.querySelector('span').textContent = 'Sending...';
      formSubmit.disabled = true;
      formSubmit.style.opacity = '0.7';
    });
  }

  // Show success toast if redirected back with #success hash
  if (window.location.hash === '#success') {
    // Clean up the hash from URL
    history.replaceState(null, '', window.location.pathname);

    // Show success notification after preloader
    setTimeout(() => {
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
        background: var(--gray-900); color: white; padding: 1rem 2rem;
        border-radius: 12px; font-family: var(--font-mono); font-size: 0.8rem;
        letter-spacing: 0.05em; z-index: 9999; box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        animation: fadeInUp 0.5s var(--ease-out-expo);
      `;
      toast.textContent = '✓ Message sent successfully!';
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
      }, 4000);
    }, 1500);
  }

  // ── Keyboard Navigation Enhancement ────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenu.classList.contains('open')) {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });

  // ── Dynamic Year in Footer ─────────────────────────────────
  const yearSpan = document.querySelector('.footer-copyright');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2026', currentYear);
  }
});
