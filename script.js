const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

const toggleMenu = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const closeMenu = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const updateActiveSection = () => {
    const scrollTop = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`header nav a[href*=${sectionId}]`);
            if (activeLink) activeLink.classList.add('active');
            
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });
};

const handleStickyHeader = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
};

const handleFooterAnimation = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.scrollingElement.scrollHeight;
    footer.classList.toggle('show-animate', scrollPosition >= documentHeight);
};

const handleScroll = () => {
    updateActiveSection();
    handleStickyHeader();
    handleFooterAnimation();
    closeMenu();
};

menuIcon.addEventListener('click', toggleMenu);
window.addEventListener('scroll', handleScroll);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(closeMenu, 300);
    });
});
