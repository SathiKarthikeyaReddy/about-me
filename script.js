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

            // Check if this section is a stagger parent
            if (entry.target.classList.contains('stagger-parent')) {
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, i) => {
                    setTimeout(() => {
                        child.classList.add('is-visible');
                    }, i * 150); // 150ms stagger
                });
            }

            // Standard section reveal
            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, entry.target.classList.contains('stagger-parent') ? 0 : index * 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedSections.forEach(section => {
    observer.observe(section);
});

// Vanilla JS 3D Tilt Effect for premium interactivity
const tiltElements = document.querySelectorAll('.tilt-effect');

tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();

        // Calculate mouse position relative to the center of the element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate tilt amounts (max 10 degrees)
        const tiltX = ((y - centerY) / centerY) * -10;
        const tiltY = ((x - centerX) / centerX) * 10;

        // Apply transform
        el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.transition = 'none'; // Remove transition for instant following
    });

    // Reset transform on mouse leave
    el.addEventListener('mouseleave', () => {
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        el.style.transition = 'transform 0.5s ease-out'; // Smooth reset
    });
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

// =========================================================================
// NEW TEXT INTERACTIVITY & SPOTLIGHT LOGIC
// =========================================================================

// Global Mouse Spotlight Tracker
const spotlight = document.querySelector('.mouse-spotlight');

if (spotlight) {
    window.addEventListener('mousemove', (e) => {
        // Use CSS variables to smoothly update the radial gradient position
        spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
}

// Split Reveal Text into individual word spans for sequential animation
const revealTexts = document.querySelectorAll('.reveal-text');

revealTexts.forEach(block => {
    // Split by spaces, wrap in spans
    const text = block.textContent;
    const words = text.split(' ');

    // Clear original text
    block.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.classList.add('word');
        // Add staggered delay inline based on word position
        span.style.transitionDelay = `${index * 40}ms`;
        span.textContent = word + ' ';
        block.appendChild(span);
    });

    // Add to intersection observer so it triggers when scrolled into view
    observer.observe(block);
});
