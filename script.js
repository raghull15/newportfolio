const EMAILJS_PUBLIC_KEY  = '-cawejxZaLoIR7jlN';
const EMAILJS_SERVICE_ID  = 'service_sryb28h';  
const EMAILJS_TEMPLATE_ID = 'template_6tyy85g';  

document.addEventListener('DOMContentLoaded', () => {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

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

function initCursor() {
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    (function lerp() {
        ringX += (mouseX - ringX) * 0.13;
        ringY += (mouseY - ringY) * 0.13;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(lerp);
    })();

    document.querySelectorAll('a, button, .pill, .cert-card, .project-card, .exp-card, .fact-item')
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
            ctx.fillStyle = `rgba(124,111,247,${this.opacity})`;
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
            delay = 1800; isDeleting = true;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false; charIndex = 0;
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
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function initHamburger() {
    const hamburger   = document.getElementById('hamburger');
    const mobileNav   = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileClose');
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
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
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
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => io.observe(el));
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

            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form           
            );

            showToast('success', '✅ Message sent successfully! I\'ll get back to you soon.');
            form.reset();

        } catch (err) {
            console.error('EmailJS error:', err);

            showToast('error', '❌ Failed to send. Please email me directly at dhanushkumarr1508@gmail.com');

        } finally {
            setLoading(false);
        }
    });


    function setLoading(on) {
        submitBtn.disabled          = on;
        btnText.style.display       = on ? 'none'         : 'inline-flex';
        btnSpinner.style.display    = on ? 'inline-flex'  : 'none';
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
