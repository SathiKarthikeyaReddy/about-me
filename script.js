const themeToggle = document.getElementById('theme-toggle');
const sunIcon = 'fa-sun';
const moonIcon = 'fa-moon';
const currentTheme = localStorage.getItem('theme');
const toggleIcon = themeToggle.querySelector('i');

// Apply the saved theme on initial load or default to dark
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
    // Default to dark theme for the new premium feel
    document.body.setAttribute('data-theme', 'dark');
    toggleIcon.classList.add(moonIcon);
}

// Theme Switcher Logic
themeToggle.addEventListener('click', () => {
    let newTheme;
    const currentThemeState = document.body.getAttribute('data-theme');

    // Smoothly rotate icon during transition
    themeToggle.style.transform = 'rotate(180deg)';
    setTimeout(() => themeToggle.style.transform = 'rotate(0deg)', 300);

    if (currentThemeState === 'light') {
        newTheme = 'dark';
        toggleIcon.classList.replace(sunIcon, moonIcon);
    } else {
        newTheme = 'light';
        toggleIcon.classList.replace(moonIcon, sunIcon);
    }

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Advanced On-scroll animations using Intersection Observer
const animatedSections = document.querySelectorAll('.animated-section');

const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the viewport bottom
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add a slight stagger delay if multiple elements enter at once
            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedSections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll implementation for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset for sticky navbar
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
