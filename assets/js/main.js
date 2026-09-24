/**
 * PORTFOLIO WEBSITE - CREATIVE MEDIA STUDENT
 * Main JavaScript Interactions & Features (Multi-page Support)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. PRELOADER HANDLING
     ========================================================================== */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 350);
    }
  });

  /* ==========================================================================
     2. DARK / LIGHT THEME TOGGLE
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
  const currentTheme = localStorage.getItem('portfolio-theme') || 'light';

  // Apply saved theme across all pages
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
      themeIcon.style.color = '#fbbf24';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      themeIcon.style.color = '#0284c7';
    }
  }

  /* ==========================================================================
     3. STICKY NAVBAR & BACK-TO-TOP BUTTON VISIBILITY
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Sticky Navbar
    if (scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Scroll To Top Button
    if (scrollY > 350) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  });

  // Scroll to Top click event
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     4. ACTIVE NAVIGATION LINK (MULTI-PAGE CURRENT PAGE HIGHLIGHT)
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  let currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (currentFile === '' || currentFile === '/') {
    currentFile = 'index.html';
  }

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentFile) {
      link.classList.add('active');
    } else if (linkHref !== currentFile && !linkHref.startsWith('#')) {
      link.classList.remove('active');
    }
  });

  /* ==========================================================================
     5. SCROLL REVEAL ANIMATIONS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     6. PORTFOLIO MODAL PREVIEW HANDLER (FOR PORTFOLIO & HOME PAGE)
     ========================================================================== */
  const portfolioData = {
    1: {
      title: 'Aurora Branding & Visual Identity',
      category: 'Graphic Design',
      desc: 'การออกแบบอัตลักษณ์แบรนด์เครื่องสำอางออร์แกนิกยุคใหม่ รวมถึงโลโก้ โทนสี บรรจุภัณฑ์ และคู่มือแบรนด์ (Brand Guidelines) ที่เน้นความพรีเมียมและความยั่งยืน',
      tools: 'Adobe Illustrator, Photoshop, Figma',
      image: 'assets/images/work-1.svg',
      year: '2026'
    },
    2: {
      title: 'Urban Perspectives Photography',
      category: 'Photography',
      desc: 'ชุดภาพถ่ายสตรีทและสถาปัตยกรรมเมืองใหญ่ เน้นมุมมองการจัดองค์ประกอบด้วยเส้นนำสายตา (Leading Lines) และการเล่นกับแสงเงาในยามค่ำคืน',
      tools: 'Sony A7IV, Lightroom Classic',
      image: 'assets/images/work-2.svg',
      year: '2025'
    },
    3: {
      title: 'Solaris Sci-Fi Short Film',
      category: 'Video Editing',
      desc: 'โปรเจกต์ตัดต่อและเกรดสีภาพยนตร์สั้นแนววิทยาศาสตร์ ใช้เทคนิค Color Grading สไตล์ภาพยนตร์ฮอลลีวูด และออกแบบ Sound Effects เชิงมิติเสียง',
      tools: 'DaVinci Resolve Studio, Premiere Pro',
      image: 'assets/images/work-3.svg',
      year: '2025'
    },
    4: {
      title: 'Neo Dimension 3D Title Sequence',
      category: 'Motion Graphic',
      desc: 'การสร้างโมชันกราฟิกไตเติลเปิดรายการด้วยเรขาคณิตสามมิติ และ Kinetic Typography ที่ลื่นไหลตามจังหวะดนตรีแนว Synthwave',
      tools: 'Cinema 4D, After Effects, Blender',
      image: 'assets/images/work-4.svg',
      year: '2026'
    },
    5: {
      title: 'FinWave Mobile Banking Experience',
      category: 'UI/UX Design',
      desc: 'การวิจัยผู้ใช้และออกแบบแอปพลิเคชันธุรกรรมการเงินสำหรับกลุ่มคนรุ่นใหม่ (Gen Z) เน้นความเรียบง่าย ปลอดภัย และการใช้งานที่ลื่นไหลตามหลัก Human-Centered Design',
      tools: 'Figma, Maze, Protopie',
      image: 'assets/images/work-5.svg',
      year: '2026'
    },
    6: {
      title: 'Creative Agency Interactive Website',
      category: 'Web Design',
      desc: 'การพัฒนาเว็บไซต์ Landing Page แบบตอบสนองทุกอุปกรณ์ (Responsive Web Design) ผสานแอนิเมชันลูกเล่นแบบ Interactive และ Glassmorphism ที่สวยงาม',
      tools: 'HTML5, CSS3, JavaScript, Bootstrap 5',
      image: 'assets/images/work-6.svg',
      year: '2026'
    }
  };

  const portfolioModalEl = document.getElementById('portfolioModal');
  const portfolioModal = portfolioModalEl && typeof bootstrap !== 'undefined' ? new bootstrap.Modal(portfolioModalEl) : null;

  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalYear = document.getElementById('modalYear');

  document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-id');
      const project = portfolioData[projectId];

      if (project && portfolioModal) {
        if (modalImg) modalImg.src = project.image;
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalCategory) modalCategory.textContent = project.category;
        if (modalDesc) modalDesc.textContent = project.desc;
        if (modalTools) modalTools.textContent = project.tools;
        if (modalYear) modalYear.textContent = project.year;

        portfolioModal.show();
      }
    });
  });

  /* ==========================================================================
     7. CONTACT FORM SUBMISSION WITH SUCCESS FEEDBACK
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'ส่งข้อความ';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> กำลังส่ง...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('d-none');
          setTimeout(() => {
            formSuccessAlert.classList.add('d-none');
          }, 5000);
        }

        contactForm.reset();
        contactForm.classList.remove('was-validated');
      }, 800);
    });
  }

});
