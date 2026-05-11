/* ============================================
   Panachelux Travels & Tours - Main JavaScript
   GSAP | AOS | Swiper | Custom Interactions
   ============================================ */

// Preloader
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
        setTimeout(() => { preloader.style.display = 'none'; }, 600);
        // Trigger hero animations after preloader
        initHeroAnimations();
      }, 500);
    });
  }
});

// Scroll Progress Bar
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    bar.style.transform = `scaleX(${scrolled})`;
  }, { passive: true });
}

// Navbar Scroll Effect
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile Navigation
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileOverlay?.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  mobileOverlay?.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      mobileOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Back to Top
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Hero Animations (GSAP)
function initHeroAnimations() {
  if (typeof gsap === 'undefined') return;

  const tl = gsap.timeline();
  tl.to('.hero-headline .line1', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
    .to('.hero-headline .line2', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .to('.hero-ctas .btn', { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.4');
}

// Counter Animation
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2500;
        const start = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// Visa Filtering
function initVisaFilter() {
  const tabs = document.querySelectorAll('.visa-filters .filter-tab');
  const cards = document.querySelectorAll('.visa-card');
  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          gsap?.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Destination Filtering
function initDestinationFilter() {
  const tabs = document.querySelectorAll('.dest-filters .filter-tab');
  const cards = document.querySelectorAll('.dest-card-page');
  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const region = card.getAttribute('data-region');
        if (filter === 'all' || region === filter) {
          card.style.display = '';
          gsap?.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Gallery Filtering
function initGalleryFilter() {
  const tabs = document.querySelectorAll('.gallery-filters .filter-tab');
  const items = document.querySelectorAll('.gallery-item');
  if (!tabs.length || !items.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Lightbox
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const img = lightbox.querySelector('img');
  const counter = lightbox.querySelector('.lightbox-counter');
  const items = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;

  const galleryImages = [];
  items.forEach((item, i) => {
    const imgSrc = item.querySelector('img').src;
    galleryImages.push(imgSrc);
    item.addEventListener('click', () => {
      currentIndex = i;
      openLightbox();
    });
  });

  function openLightbox() {
    img.src = galleryImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    img.src = galleryImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    img.src = galleryImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  }

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
}

// FAQ Accordion
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

// AOS-like Scroll Animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => observer.observe(el));
}

// Swiper Initialization
function initSwipers() {
  // Destination Swiper
  if (document.querySelector('.destinations-section .swiper')) {
    new Swiper('.destinations-section .swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: '.destinations-section .swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.destinations-section .swiper-button-next',
        prevEl: '.destinations-section .swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }

  // Testimonial Swiper
  if (document.querySelector('.testimonials-section .swiper')) {
    new Swiper('.testimonials-section .swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.testimonials-section .swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }
}

// Orbit Mouse Parallax
function initOrbitParallax() {
  const orbitContainer = document.querySelector('.orbit-container');
  if (!orbitContainer) return;

  const outerRing = orbitContainer.querySelector('.orbit-ring.outer');
  const innerRing = orbitContainer.querySelector('.orbit-ring.inner');
  if (!outerRing || !innerRing) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    outerRing.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    innerRing.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  });
}

// Form Handling (prevent default)
function initForms() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = 'var(--green)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  });
}

// Initialize All
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbar();
  initMobileNav();
  initBackToTop();
  initCounters();
  initVisaFilter();
  initDestinationFilter();
  initGalleryFilter();
  initLightbox();
  initAccordion();
  initScrollAnimations();
  initSwipers();
  initOrbitParallax();
  initForms();
});
