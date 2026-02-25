const projectsData = {
    "support-ticket-system": {
        title: "Support Ticket System",
        subtitle: "Full-Stack LLM-Integrated Issue Tracker",
        icon: "fa-ticket-alt",
        description: "A comprehensive, containerized full-stack support ticket system integrating OpenAI's GPT-3.5 API for automatic categorization and prioritization. Built with pure database-level stats aggregation and constraints.",
        techStack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Vite", "Docker", "OpenAI API"],
        features: [
            "AI-driven automatic ticket categorization and prioritization.",
            "Backend built with Django, DRF, and Postgres.",
            "Database-level constraints and high-efficiency stats aggregation.",
            "Modern, responsive React frontend powered by Vite.",
            "Full Docker and Docker Compose containerization."
        ],
        liveLink: null, // Requires local docker deployment
        githubLink: "https://github.com/SathiKarthikeyaReddy/support-ticket-system",
        thumbnailBg: "linear-gradient(135deg, #10b981, #047857)"
    },
    "car-scroll-animation": {
        title: "Midnight Drive Scroll Animation",
        subtitle: "Cinematic GSAP Scroll Experience",
        icon: "fa-car",
        description: "A premium scroll-driven animation experience featuring a vintage muscle car. The page stays pinned while the road seamlessly slides upward, creating a continuous driving illusion with dynamic story cards.",
        techStack: ["Next.js 14", "React", "Tailwind CSS v4", "GSAP 3", "ScrollTrigger"],
        features: [
            "Pinned scroll flow mapping road movement to scroll position.",
            "Cinematic neon text reveal sequences.",
            "Stage-based story cards triggered dynamically via ScrollTrigger.",
            "High-performance, buttery smooth 60fps animations."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/car-scroll-animation-nextjs",
        thumbnailBg: "linear-gradient(135deg, #4f46e5, #312e81)"
    },
    "apple-scroll-animation": {
        title: "Gravity of Ideas",
        subtitle: "Interactive Storytelling Scroll",
        icon: "fa-apple-alt",
        description: "A scroll-driven animated storytelling page depicting the precise moment Newton discovered gravity. Features a falling apple tracing a complex SVG bezier curve.",
        techStack: ["Next.js", "React", "GSAP 3", "MotionPathPlugin", "Tailwind CSS"],
        features: [
            "Apple follows a precise MotionPath tied 1:1 to scroll.",
            "Impact finale with screen shake and particle bursts.",
            "Ambient looping tree sway and custom glow trails.",
            "Progressive sky color shift based on scroll depth."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/apple-scroll-animation",
        thumbnailBg: "linear-gradient(135deg, #ef4444, #991b1b)"
    },
    "matrix": {
        title: "Matrix Front-End",
        subtitle: "UndoSchool Frontend Assignment",
        icon: "fa-border-all",
        description: "A responsive and strictly designed frontend assignment completed for UndoSchool, demonstrating exact design matching and structural HTML/CSS competency.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Pixel-perfect design replication.",
            "Responsive layout scaling across devices.",
            "Clean and maintainable code structure."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/matrix",
        thumbnailBg: "linear-gradient(135deg, #8b5cf6, #5b21b6)"
    },
    "netflix-clone": {
        title: "Netflix UI Clone",
        subtitle: "Responsive Landing Page",
        icon: "fa-tv",
        description: "A responsive Netflix homepage built thoroughly with HTML, CSS, and precise flexbox layouts to ensure cross-device aesthetic compatibility.",
        techStack: ["HTML", "CSS", "Flexbox"],
        features: [
            "Accurate replication of the Netflix landing page UI.",
            "Fully responsive across mobile, tablet, and desktop views.",
            "Hover effects and clean typography matching the original brand."
        ],
        liveLink: "https://karthikeya0609.ccbp.tech",
        githubLink: null,
        thumbnailBg: "linear-gradient(135deg, #e50914, #831010)"
    },
    "restaurant-page": {
        title: "Restaurant Landing Page",
        subtitle: "Modern Static Web Design",
        icon: "fa-utensils",
        description: "Created a modern static landing page with an aesthetic UI focusing on showcasing a culinary business attractively.",
        techStack: ["HTML", "CSS", "JavaScript"],
        features: [
            "Aesthetic hero section with food imagery.",
            "Menu and features highlight sections.",
            "Responsive grid and flexbox alignment."
        ],
        liveLink: "https://fdmnchlndgpage.ccbp.tech",
        githubLink: null,
        thumbnailBg: "linear-gradient(135deg, #f59e0b, #b45309)"
    },
    "spotify-clone": {
        title: "Spotify Open Page",
        subtitle: "Music App Interface Replication",
        icon: "fa-music",
        description: "Developed a meticulous landing page replicating Spotify’s dark-themed UI with a focus on structural accuracy and usability.",
        techStack: ["HTML", "CSS"],
        features: [
            "Dark theme UI pattern replication.",
            "Sidebar and main content grid structuring.",
            "Responsive audio card layouts."
        ],
        liveLink: "https://musicapp06.ccbp.tech",
        githubLink: null,
        thumbnailBg: "linear-gradient(135deg, #1db954, #1ed760)"
    },
    "real-estate": {
        title: "Real Estate Landing Page",
        subtitle: "Property Showcase Website",
        icon: "fa-home",
        description: "Designed and implemented an interactive real estate website frontend designed to list properties cleanly.",
        techStack: ["HTML", "CSS"],
        features: [
            "Grid-based property listing interface.",
            "Search and filter UI structural mockups.",
            "Modern, trustworthy color palette."
        ],
        liveLink: "https://findhomes.ccbp.tech",
        githubLink: null,
        thumbnailBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    "maltego-investigation": {
        title: "Maltego Threat Investigation",
        subtitle: "Cybersecurity Email Analysis",
        icon: "fa-shield-alt",
        description: "Analyzed complex email headers using the Maltego intelligence tool to detect phishing attempts, map network infrastructure, and isolate suspicious activity origins.",
        techStack: ["Maltego", "Email Header Analysis", "OSINT"],
        features: [
            "Visual node-based mapping of email routing.",
            "Identification of spoofed domains and phishing origins.",
            "Extraction and correlation of IP metadata."
        ],
        liveLink: "https://www.linkedin.com/in/karthikeya-reddy-sathi",
        githubLink: null,
        thumbnailBg: "linear-gradient(135deg, #f43f5e, #be123c)"
    },
    "smart-notes": {
        title: "Smart Notes App",
        subtitle: "CRUD Web Application",
        icon: "fa-sticky-note",
        description: "A modern, responsive web-based note-taking application featuring full Create, Read, Update, and Delete (CRUD) operations mapped to local storage.",
        techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        features: [
            "Real-time note creation and deletion.",
            "Persistent local storage ensuring data isn't lost on refresh.",
            "Clean, colorful Bootstrap UI with intuitive interactions."
        ],
        liveLink: "https://uismart-notes.netlify.app/",
        githubLink: "https://github.com/SathiKarthikeyaReddy/SmartNotes",
        thumbnailBg: "linear-gradient(135deg, #eab308, #a16207)"
    }
};
