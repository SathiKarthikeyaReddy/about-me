/**
 * Sathi Karthikeya Reddy Portfolio - Interactive 3D Background & Multilayer Logic
 * Powered by Three.js WebGL and Modern Event Listeners
 */

// =========================================================================
// 1. Theme Configuration & Persistence
// =========================================================================
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = themeToggle ? themeToggle.querySelector('i') : null;
const sunIcon = 'fa-sun';
const moonIcon = 'fa-moon';

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggleIcon) {
        if (theme === 'dark') {
            toggleIcon.classList.remove(sunIcon);
            toggleIcon.classList.add(moonIcon);
        } else {
            toggleIcon.classList.remove(moonIcon);
            toggleIcon.classList.add(sunIcon);
        }
    }
    // Update Three.js background clear color if active
    if (window.updateThreeTheme) {
        window.updateThreeTheme(theme);
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => themeToggle.style.transform = 'rotate(0deg)', 250);
        applyTheme(newTheme);
    });
}


// =========================================================================
// 2. Interactive Three.js 3D WebGL Background Animation
// =========================================================================
function init3DBackground() {
    const canvas = document.getElementById('bg-3d-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Starfield Particle Constellation
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const indigoColor = new THREE.Color(0x6366f1);
    const violetColor = new THREE.Color(0xa855f7);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 140;
        positions[i + 1] = (Math.random() - 0.5) * 140;
        positions[i + 2] = (Math.random() - 0.5) * 120;

        const choice = Math.random();
        let c = whiteColor;
        if (choice < 0.35) c = cyanColor;
        else if (choice < 0.70) c = indigoColor;
        else if (choice < 0.90) c = violetColor;

        colors[i] = c.r;
        colors[i + 1] = c.g;
        colors[i + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 1.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating Geometric Wireframe Objects
    const wireframeGroup = new THREE.Group();

    // 1. Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.22
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-28, 12, -15);
    wireframeGroup.add(icosahedron);

    // 2. Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(6, 1.8, 80, 16);
    const torusMat = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        wireframe: true,
        transparent: true,
        opacity: 0.18
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    torusKnot.position.set(30, -14, -20);
    wireframeGroup.add(torusKnot);

    // 3. Octahedron
    const octGeo = new THREE.OctahedronGeometry(5, 0);
    const octMat = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.25
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(22, 22, -25);
    wireframeGroup.add(octahedron);

    scene.add(wireframeGroup);

    // Interactive mouse parallax & scroll integration
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = window.scrollY;

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.updateThreeTheme = (theme) => {
        if (theme === 'light') {
            material.opacity = 0.35;
            icoMat.opacity = 0.12;
            torusMat.opacity = 0.10;
        } else {
            material.opacity = 0.65;
            icoMat.opacity = 0.22;
            torusMat.opacity = 0.18;
        }
    };

    // Animation Render Loop
    function animate() {
        requestAnimationFrame(animate);

        // Smooth mouse inertia lerp
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Rotate particles and wireframes
        particles.rotation.y += 0.0006;
        particles.rotation.x += 0.0003;

        icosahedron.rotation.x += 0.005;
        icosahedron.rotation.y += 0.007;

        torusKnot.rotation.x += 0.004;
        torusKnot.rotation.z += 0.006;

        octahedron.rotation.y += 0.008;

        // Multilayer parallax shift responding to scroll position
        const scrollFactor = scrollY * 0.008;
        camera.position.x = targetX * 6;
        camera.position.y = targetY * 4 - scrollFactor * 0.4;
        camera.rotation.z = targetX * 0.02;

        renderer.render(scene, camera);
    }

    animate();
}


// =========================================================================
// 3. Dynamic Projects Rendering & Multilayer New Page Launch
// =========================================================================
function renderProjects(filterCategory = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid || typeof projectsData === 'undefined') return;

    grid.innerHTML = '';

    const projectsList = Object.values(projectsData);
    const filtered = filterCategory === 'all' 
        ? projectsList 
        : projectsList.filter(p => p.category === filterCategory);

    filtered.forEach((p, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';

        // Limit tech pills to top 4 for neat presentation
        const techBadges = p.techStack.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join('');

        col.innerHTML = `
            <div class="glass-card project-card tilt-effect" onclick="openProjectInNewPage('${p.id}')">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="project-icon-wrapper" style="background: ${p.thumbnailBg};">
                        <i class="fas ${p.icon}"></i>
                    </div>
                    <span class="project-category-badge">${p.category}</span>
                </div>
                <h3 class="project-card-title">${p.title}</h3>
                <h4 class="project-card-subtitle">${p.subtitle}</h4>
                <p class="project-card-desc">${p.summary || p.description.slice(0, 120) + '...'}</p>
                <div class="project-tech-pills">
                    ${techBadges}
                </div>
                <div class="project-card-footer">
                    <span class="project-action-link">
                        Launch Case Study <i class="fas fa-arrow-up-right-from-square"></i>
                    </span>
                    <a href="${p.githubLink}" target="_blank" onclick="event.stopPropagation();" title="View Source on GitHub" class="project-github-icon">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });

    // Rebind tilt listeners to newly created cards
    initTiltEffect();
}

/**
 * Opens project case study in a NEW TAB / PAGE, giving a high-tier multilayer architecture feel
 */
function openProjectInNewPage(projectId) {
    const targetUrl = `project-details.html?id=${encodeURIComponent(projectId)}`;
    window.open(targetUrl, '_blank');
}


// =========================================================================
// 4. Filter Button Event Handlers
// =========================================================================
function initFilterControls() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-category');
            renderProjects(cat);
        });
    });
}


// =========================================================================
// 5. Interactive Mouse Spotlight & 3D Tilt Mechanics
// =========================================================================
function initSpotlight() {
    const spotlight = document.querySelector('.mouse-spotlight');
    if (!spotlight) return;

    window.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
}

function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.tilt-effect');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const tiltX = ((y - centerY) / centerY) * -8;
            const tiltY = ((x - centerX) / centerX) * 8;

            el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            el.style.transition = 'transform 0.4s ease';
        });

        el.addEventListener('mouseenter', () => {
            el.style.transition = 'none';
        });
    });
}


// =========================================================================
// 6. Intersection Observer Scroll Reveals
// =========================================================================
function initScrollObserver() {
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, i) => {
                    setTimeout(() => {
                        child.classList.add('is-visible');
                    }, i * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedSections.forEach(sec => observer.observe(sec));
}


// =========================================================================
// 7. Lifecycle Initialization
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    init3DBackground();
    renderProjects('all');
    initFilterControls();
    initSpotlight();
    initTiltEffect();
    initScrollObserver();
});
