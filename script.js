const themeToggle = document.getElementById('theme-toggle');
const sunIcon = 'fa-sun';
const moonIcon = 'fa-moon';
const currentTheme = localStorage.getItem('theme');
const toggleIcon = themeToggle.querySelector('i');

// Apply the saved theme on initial load
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
    // Default to light theme
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

// On-scroll animations
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
