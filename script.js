const themeToggle = document.getElementById('theme-toggle');
const sunIcon = 'fa-sun';
const moonIcon = 'fa-moon';
const currentTheme = localStorage.getItem('theme');
const toggleIcon = themeToggle.querySelector('i');

if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleIcon.classList.remove(sunIcon);
        toggleIcon.classList.add(moonIcon);
    } else {
        toggleIcon.classList.remove(moonIcon);
        toggleIcon.classList.add(sunIcon);
    }
} else {
    document.body.setAttribute('data-theme', 'light');
    toggleIcon.classList.add(sunIcon);
}

themeToggle.addEventListener('click', () => {
    let newTheme;
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        newTheme = 'dark';
        toggleIcon.classList.replace(sunIcon, moonIcon);
    } else {
        newTheme = 'light';
        toggleIcon.classList.replace(moonIcon, sunIcon);
    }
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

const animatedSections = document.querySelectorAll('.animated-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedSections.forEach(section => {
    observer.observe(section);
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
    const navbar = document.getElementById('navbar-main');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const heroTitle = document.getElementById('hero-title');
const titleText = 'SATHI KARTHIKEYA REDDY';
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            heroTitle.style.borderRight = 'none';
        }, 500);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 1200);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

const competencyCards = document.querySelectorAll('.competency-card');
competencyCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
});

document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0)';
    });
});

const parallaxElements = document.querySelectorAll('.hero-section');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(element => {
        const rate = scrolled * 0.5;
        element.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
});

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const xMove = (mouseX - 0.5) * 10;
        const yMove = (mouseY - 0.5) * 10;
        
        if (card.matches(':hover')) {
            card.style.transform = `translateY(-10px) scale(1.02) rotateX(${yMove}deg) rotateY(${xMove}deg)`;
        }
    });
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

console.log('%c✨ Portfolio Loaded Successfully! ✨', 'color: #4299e1; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ by Sathi Karthikeya Reddy', 'color: #38b2ac; font-size: 14px;');
