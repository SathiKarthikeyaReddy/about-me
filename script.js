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
    // Default to dark theme for the premium feel
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

// Mouse spotlight effect
const spotlight = document.querySelector('.mouse-spotlight');
document.addEventListener('mousemove', (e) => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
});

// Advanced On-scroll animations using Intersection Observer
const animatedSections = document.querySelectorAll('.animated-section');

const observerOptions = {
    threshold: 0.08,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            // Check if this section is a stagger parent
            if (entry.target.classList.contains('stagger-parent')) {
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, i) => {
                    setTimeout(() => {
                        child.classList.add('is-visible');
                    }, i * 120); // 120ms stagger
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedSections.forEach(section => {
    observer.observe(section);
});

// Tilt effect on cards
document.querySelectorAll('.tilt-effect').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 18;
        const rotateY = (centerX - x) / 18;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});

// ─── Project Cards Renderer ───────────────────────────────────────────────────
function renderProjectCards() {
    const grid = document.getElementById('projects-grid');
    if (!grid || typeof projectsData === 'undefined') return;

    Object.entries(projectsData).forEach(([key, project], index) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 stagger-child';

        const liveBtn = project.liveLink
            ? `<a href="${project.liveLink}" target="_blank" class="btn btn-sm btn-primary interactive-item me-2">
                    <i class="fas fa-external-link-alt me-1"></i>Live Demo
               </a>`
            : '';

        const githubBtn = project.githubLink
            ? `<a href="${project.githubLink}" target="_blank" class="btn btn-sm btn-outline-secondary interactive-item">
                    <i class="fab fa-github me-1"></i>GitHub
               </a>`
            : '';

        const techBadges = project.techStack
            .slice(0, 4)
            .map(t => `<span class="tech-badge">${t}</span>`)
            .join('');

        const moreBadge = project.techStack.length > 4
            ? `<span class="tech-badge tech-badge-more">+${project.techStack.length - 4} more</span>`
            : '';

        col.innerHTML = `
            <div class="card project-card h-100 tilt-effect interactive-item" data-project-key="${key}">
                <div class="project-thumbnail" style="background: ${project.thumbnailBg};">
                    <i class="fas ${project.icon} project-icon"></i>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title mb-1">${project.title}</h5>
                    <p class="card-subtitle text-muted small mb-2">${project.subtitle}</p>
                    <p class="card-text small flex-grow-1">${project.description.substring(0, 120)}...</p>
                    <div class="tech-stack-row mb-3">${techBadges}${moreBadge}</div>
                    <div class="project-actions d-flex align-items-center">
                        ${liveBtn}
                        ${githubBtn}
                        <button class="btn btn-sm btn-link ms-auto p-0 details-btn" data-key="${key}">
                            Details <i class="fas fa-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(col);
    });

    // Re-attach tilt effect to newly rendered cards
    grid.querySelectorAll('.tilt-effect').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 18;
            const rotateY = (centerX - x) / 18;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Details button → navigate to project-details page
    grid.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const key = e.currentTarget.getAttribute('data-key');
            window.location.href = `project-details.html?project=${key}`;
        });
    });

    // Trigger stagger animation for project cards
    const projectSection = document.getElementById('projects');
    if (projectSection && projectSection.classList.contains('is-visible')) {
        grid.querySelectorAll('.stagger-child').forEach((child, i) => {
            setTimeout(() => child.classList.add('is-visible'), i * 100);
        });
    }
}

// Initialise project cards on DOM load
document.addEventListener('DOMContentLoaded', renderProjectCards);
// Fallback for already-loaded documents
if (document.readyState !== 'loading') renderProjectCards();
