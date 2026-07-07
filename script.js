const EMAILJS_PUBLIC_KEY  = '-cawejxZaLoIR7jlN';
const EMAILJS_SERVICE_ID  = 'service_sryb28h';
const EMAILJS_TEMPLATE_ID = 'template_6tyy85g';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    initParticles();
    initTyping();
    initNavbar();
    initNavIndicator();
    initHamburger();
    initThemeToggle();
    initScrollReveal();
    initScrollProgress();
    initSkillBars();
    initMagnetic();
    initContactForm();
});

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
        constructor() { this.reset(true); }

        reset(initial = false) {
            this.x       = Math.random() * canvas.width;
            this.y       = initial ? Math.random() * canvas.height : -4;
            this.size    = Math.random() * 3 + 1.5;
            this.speedX  = (Math.random() - 0.5) * 0.15;
            this.speedY  = Math.random() * 0.22 + 0.07;
            this.opacity = Math.random() * 0.22 + 0.08;
            this.color   = ['255,45,32', '240,240,240', '200,30,20'][Math.floor(Math.random() * 3)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y > canvas.height + 4) this.reset();
        }

        draw() {
            ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    const particles = Array.from({ length: 48 }, () => new Particle());

    (function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    })();
}

function initTyping() {
    const el = document.getElementById('typed');
    if (!el) return;

    const roles = ['Web Apps.', 'Mobile Apps.', 'AI Workflows.', 'APIs.', 'Useful Products.'];
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const current = roles[roleIndex];
        el.textContent = isDeleting
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        let delay = isDeleting ? 55 : 105;

        if (!isDeleting && charIndex > current.length) {
            delay      = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            charIndex  = 0;
            roleIndex  = (roleIndex + 1) % roles.length;
            delay      = 300;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 900);
}

function initNavbar() {
    const navbar   = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    if (!navbar) return;

    function onScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 60);

        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
        });

        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });

        moveNavIndicator();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Sliding red indicator that glides under whichever nav link is active/hovered
function initNavIndicator() {
    const navList = document.getElementById('navList');
    if (!navList) return;

    navList.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', () => moveNavIndicator(link));
    });

    navList.addEventListener('mouseleave', () => moveNavIndicator());

    window.addEventListener('resize', () => moveNavIndicator(), { passive: true });
}

function moveNavIndicator(targetLink) {
    const navList     = document.getElementById('navList');
    const indicator   = document.getElementById('navIndicator');
    if (!navList || !indicator) return;

    const link = targetLink || navList.querySelector('.nav-link.active') || navList.querySelector('.nav-link');
    if (!link) return;

    const listRect = navList.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    indicator.style.width     = linkRect.width + 'px';
    indicator.style.transform = `translateX(${linkRect.left - listRect.left}px)`;
}

function initHamburger() {
    const hamburger   = document.getElementById('hamburger');
    const mobileNav   = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;

    const openMenu = () => {
        hamburger.classList.add('open');
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () =>
        hamburger.classList.contains('open') ? closeMenu() : openMenu()
    );

    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));
}

function initThemeToggle() {
    const html      = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');
    const iconDark  = document.getElementById('themeIconDark');
    const iconLight = document.getElementById('themeIconLight');
    if (!toggleBtn) return;

    const saved       = localStorage.getItem('dk-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));

    toggleBtn.addEventListener('click', () =>
        applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
    );

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('dk-theme', theme);
        if (iconDark)  iconDark.style.display  = theme === 'dark'  ? 'block' : 'none';
        if (iconLight) iconLight.style.display = theme === 'light' ? 'block' : 'none';
    }
}

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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => io.observe(el));
}

// Thin red rail at the very top of the page that fills as you scroll down
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    function onScroll() {
        const scrollTop    = window.scrollY;
        const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
        const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width    = pct + '%';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
}

function initSkillBars() {
    const fills = document.querySelectorAll('.skill-bar-fill');
    if (!fills.length) return;

    fills.forEach(bar => {
        bar.style.setProperty('--w', (bar.getAttribute('data-pct') || '0') + '%');
    });

    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fills.forEach(bar => bar.classList.add('animate'));
            }
        });
    }, { threshold: 0.2 }).observe(skillsSection);
}

// Buttons nudge slightly toward the cursor on hover — desktop only, and
// automatically skipped on touch devices / reduced-motion.
function initMagnetic() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch        = window.matchMedia('(hover: none)').matches;
    if (prefersReduced || isTouch) return;

    document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x    = e.clientX - rect.left - rect.width / 2;
            const y    = e.clientY - rect.top  - rect.height / 2;
            el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

function initContactForm() {
    const form       = document.getElementById('contactForm');
    const submitBtn  = document.getElementById('submitBtn');
    const btnText    = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const toast      = document.getElementById('formToast');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(true);
        hideToast();

        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS SDK not loaded.');
            }

            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);

            showToast('success', "Message sent. I'll get back to you soon.");
            form.reset();

        } catch (err) {
            console.error('EmailJS error:', err);
            showToast('error', 'Failed to send. Email me directly at dhanushkumarr1508@gmail.com');

        } finally {
            setLoading(false);
        }
    });

    function setLoading(on) {
        submitBtn.disabled       = on;
        btnText.style.display    = on ? 'none'        : 'inline-flex';
        btnSpinner.style.display = on ? 'inline-flex' : 'none';
    }

    function showToast(type, msg) {
        toast.textContent = msg;
        toast.className   = 'form-toast ' + type;
        toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(hideToast, 7000);
    }

    function hideToast() {
        toast.className   = 'form-toast';
        toast.textContent = '';
    }
}