/* ================================================================
   script.js  —  Dhanush Kumar Portfolio
   Features:
     1. Custom cursor (dot + lagging ring)
     2. Particle canvas
     3. Typing animation
     4. Sticky navbar + active section highlight
     5. Hamburger mobile menu
     6. Dark / Light theme toggle (persists in localStorage)
     7. Scroll reveal (IntersectionObserver)
     8. Skill bar animations
     9. Contact form (Formsubmit.co — shows spinner on submit)
================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticles();
    initTyping();
    initNavbar();
    initHamburger();
    initThemeToggle();
    initScrollReveal();
    initSkillBars();
    initContactForm();
});

/* ================================================================
   1. CUSTOM CURSOR
================================================================ */
function initCursor() {
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    /* dot follows instantly */
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    /* ring lerps behind */
    (function lerp() {
        ringX += (mouseX - ringX) * 0.13;
        ringY += (mouseY - ringY) * 0.13;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(lerp);
    })();

    /* scale ring on interactive elements */
    document.querySelectorAll('a, button, .pill, .cert-card, .project-card, .exp-card, .fact-item, .social-link')
        .forEach(el => {
            el.addEventListener('mouseenter', () => {
                ring.style.width   = '56px';
                ring.style.height  = '56px';
                ring.style.opacity = '0.25';
            });
            el.addEventListener('mouseleave', () => {
                ring.style.width   = '36px';
                ring.style.height  = '36px';
                ring.style.opacity = '0.45';
            });
        });
}

/* ================================================================
   2. PARTICLE CANVAS
================================================================ */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(true); }

        reset(initial = false) {
            this.x       = Math.random() * canvas.width;
            this.y       = initial ? Math.random() * canvas.height : -4;
            this.size    = Math.random() * 1.4 + 0.3;
            this.speedX  = (Math.random() - 0.5) * 0.25;
            this.speedY  = Math.random() * 0.35 + 0.1;
            this.opacity = Math.random() * 0.45 + 0.08;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y > canvas.height + 4) this.reset();
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = hexToRgba('#7C6FF7', this.opacity);
            ctx.fill();
        }
    }

    const particles = Array.from({ length: 90 }, () => new Particle());

    (function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    })();
}

/* hex → rgba helper */
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

/* ================================================================
   3. TYPING ANIMATION
================================================================ */
function initTyping() {
    const el = document.getElementById('typed');
    if (!el) return;

    const roles = ['Web Apps.', 'Mobile Apps.', 'AI Systems.', 'Scalable APIs.', 'Cool Things.'];
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const current = roles[roleIndex];
        el.textContent = isDeleting
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        let delay = isDeleting ? 55 : 105;

        if (!isDeleting && charIndex > current.length) {
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex < 0) {
            isDeleting  = false;
            charIndex   = 0;
            roleIndex   = (roleIndex + 1) % roles.length;
            delay       = 300;
        }
        setTimeout(type, delay);
    }

    setTimeout(type, 900);
}

/* ================================================================
   4. NAVBAR — sticky + active section highlight
================================================================ */
function initNavbar() {
    const navbar   = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    if (!navbar) return;

    function onScroll() {
        /* sticky blur */
        navbar.classList.toggle('scrolled', window.scrollY > 60);

        /* highlight active link */
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 130) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ================================================================
   5. HAMBURGER MOBILE MENU
================================================================ */
function initHamburger() {
    const hamburger  = document.getElementById('hamburger');
    const mobileNav  = document.getElementById('mobileNav');
    const mobileClose= document.getElementById('mobileClose');
    if (!hamburger || !mobileNav) return;

    const open = () => {
        hamburger.classList.add('open');
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () =>
        hamburger.classList.contains('open') ? close() : open()
    );

    if (mobileClose) mobileClose.addEventListener('click', close);

    document.querySelectorAll('.mobile-link').forEach(link =>
        link.addEventListener('click', close)
    );
}

/* ================================================================
   6. THEME TOGGLE — dark ↔ light, saved in localStorage
================================================================ */
function initThemeToggle() {
    const html      = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');
    const iconDark  = document.getElementById('themeIconDark');
    const iconLight = document.getElementById('themeIconLight');
    if (!toggleBtn) return;

    /* load saved or OS preference */
    const saved      = localStorage.getItem('dk-theme');
    const prefersDark= window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));

    toggleBtn.addEventListener('click', () => {
        applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('dk-theme', theme);
        if (iconDark)  iconDark.style.display  = theme === 'dark'  ? 'block' : 'none';
        if (iconLight) iconLight.style.display = theme === 'light' ? 'block' : 'none';
    }
}

/* ================================================================
   7. SCROLL REVEAL — IntersectionObserver, fires once per element
================================================================ */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => io.observe(el));
}

/* ================================================================
   8. SKILL BARS — animate width when skills section enters view
================================================================ */
function initSkillBars() {
    const fills = document.querySelectorAll('.skill-bar-fill');
    if (!fills.length) return;

    /* set the CSS var each bar animates to */
    fills.forEach(bar => {
        const pct = bar.getAttribute('data-pct') || '0';
        bar.style.setProperty('--w', pct + '%');
    });

    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fills.forEach(bar => bar.classList.add('animate'));
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    io.observe(skillsSection);
}

/* ================================================================
   9. CONTACT FORM — Formsubmit.co
   ──────────────────────────────────────────────────────────────
   How it works:
   • The <form> action points to formsubmit.co/your@email.com
   • On FIRST submit → Formsubmit emails you a confirmation link
     → click it once to activate
   • Every submit after that → email arrives in your Gmail ✅
   • No API keys, no accounts, nothing else needed.
   
   This function just shows a loading spinner while the form
   does its normal HTTP POST to Formsubmit.
================================================================ */
function initContactForm() {
    const form       = document.getElementById('contactForm');
    const submitBtn  = document.getElementById('submitBtn');
    const btnText    = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');

    if (!form) return;

    /* =========================
       1. Handle form submit
    ========================= */
    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            form.reportValidity();
            e.preventDefault();
            return;
        }

        if (submitBtn)  submitBtn.disabled      = true;
        if (btnText)    btnText.style.display   = 'none';
        if (btnSpinner) btnSpinner.style.display= 'inline-flex';
    });

    /* =========================
       2. Detect success after redirect
    ========================= */
    const params = new URLSearchParams(window.location.search);

    if (params.get("success") === "true") {

        /* Create success message dynamically */
        const successMsg = document.createElement("div");
        successMsg.innerHTML = "✅ Message sent successfully!";
        successMsg.style.color = "#4CAF50";
        successMsg.style.marginTop = "15px";
        successMsg.style.fontSize = "16px";

        form.appendChild(successMsg);

        /* Reset form */
        form.reset();

        /* Reset button state */
        if (submitBtn)  submitBtn.disabled      = false;
        if (btnText)    btnText.style.display   = 'inline';
        if (btnSpinner) btnSpinner.style.display= 'none';

        /* Clean URL (remove ?success=true) */
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}