const projectsData = {
    "personal-finance-analyser": {
        title: "Personal Finance Analyser Dashboard",
        subtitle: "AI-Categorised Spending Dashboard & Anomaly Detector",
        icon: "fa-wallet",
        description: "Built a Python and FastAPI backend service to parse bank transaction CSVs, store data in SQLite, and expose REST endpoints consumed by a React dashboard that surfaces spending patterns, category breakdowns, and month-over-month trends.",
        techStack: ["Python", "FastAPI", "React", "SQLite", "Gemini 1.5 Flash", "Recharts", "pytest"],
        features: [
            "Parsed bank transaction CSVs and stored data in SQLite, exposing REST endpoints for React dashboard.",
            "Engineered a pluggable LLM categorisation module using Gemini 1.5 Flash with prompt engineering.",
            "Deterministic rule-based fallback swappable via a single environment variable for graceful degradation.",
            "Implemented Python-based z-score anomaly detection with a cold-start guard.",
            "Sortable, filterable transactions table highlighting anomalies in the UI with comprehensive pytest unit tests."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/personal-finance-analyser",
        thumbnailBg: "linear-gradient(135deg, #10b981, #047857)"
    },
    "spend-anomaly-alert": {
        title: "Spend Anomaly Alert System",
        subtitle: "Executive Spend Tracking & AI Anomaly Detection",
        icon: "fa-chart-line",
        description: "Developed a Python FastAPI expense tracking API that detects category-level spending anomalies and generates a weekly digest report featuring an executive summary, flagged anomalies table, category trends, and LLM-written recommendations.",
        techStack: ["Python", "FastAPI", "React", "Recharts", "Gemini API", "html2pdf.js", "SQLite"],
        features: [
            "Detects category-level spending anomalies and generates weekly digest reports.",
            "Executive summary narrative, flagged anomalies table, and LLM-written recommendations.",
            "Designed and implemented frontend-backend integration for React dashboard with Recharts visualizations & KPI cards.",
            "In-browser report rendering and PDF export via html2pdf.js.",
            "End-to-end REST API contract definition."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/spend-anomaly-alert",
        thumbnailBg: "linear-gradient(135deg, #f59e0b, #b45309)"
    },
    "sql-bi-reporter": {
        title: "SQL Business Intelligence Reporter",
        subtitle: "Natural Language to SQL Data Exploration Tool",
        icon: "fa-database",
        description: "Built a BI tool where users ask plain English questions about preloaded business datasets; the app generates a SQL query via Gemini, validates it against a SELECT-only security guard, executes it against SQLite, and returns results with a plain English summary.",
        techStack: ["Python", "FastAPI", "SQLite", "Gemini API", "React", "Vite", "pandas"],
        features: [
            "Translates plain English queries to SQL via Gemini AI.",
            "Validates SQL against a SELECT-only security guard for zero-risk execution.",
            "Returns results accompanied by a plain English summary for non-technical stakeholders.",
            "Persistent query history with CSV export functionality.",
            "Fallback demo mode requiring zero API keys and Datasets reference view with live data previews."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/sql-bi-reporter",
        thumbnailBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    "support-ticket-system": {
        title: "AI-Powered Classification System",
        subtitle: "LLM-Integrated Issue Tracker & Triage Pipeline",
        icon: "fa-ticket-alt",
        description: "Integrated an LLM API for real-time ticket categorisation and designed the full pipeline — prompt construction, API handling, response parsing, and dynamic UI rendering — demonstrating direct experience building agentic AI product features.",
        techStack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React", "Docker", "OpenAI API"],
        features: [
            "Real-time ticket categorisation and priority assignment via LLM API.",
            "Full pipeline design: prompt construction, API handling, response parsing, and dynamic UI rendering.",
            "Django & DRF backend with database-level constraints and stats aggregation.",
            "Modern React frontend for user and agent management.",
            "Full containerization with Docker and Docker Compose."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/support-ticket-system",
        thumbnailBg: "linear-gradient(135deg, #8b5cf6, #5b21b6)"
    },
    "SmartNotes": {
        title: "SmartNotes",
        subtitle: "Modern Web-Based Digital Note Companion",
        icon: "fa-sticky-note",
        description: "A modern, responsive web-based note-taking application built with HTML, CSS, JavaScript, Bootstrap, and FontAwesome. SmartNotes provides an intuitive interface for creating, organizing, and managing notes with a sleek interface.",
        techStack: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "FontAwesome"],
        features: [
            "Intuitive UI for creating, editing, and organizing digital notes.",
            "Responsive layout supporting desktop and mobile devices.",
            "Fast, client-side note search and tag filtering.",
            "Clean component styling using Bootstrap 5 and FontAwesome icons."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/SmartNotes",
        thumbnailBg: "linear-gradient(135deg, #ec4899, #be185d)"
    },
    "static_website": {
        title: "Static Web Showcase",
        subtitle: "Responsive UI & Semantic Web Design",
        icon: "fa-desktop",
        description: "A clean, responsive static web project demonstrating semantic HTML structure, modern CSS layout techniques (Flexbox/Grid), and vanilla JavaScript DOM interactions.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Fully responsive web page design adapting seamlessly across viewports.",
            "Pure vanilla implementation with zero external framework dependencies.",
            "Optimized CSS styling and smooth micro-interactions."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/static_website",
        thumbnailBg: "linear-gradient(135deg, #64748b, #334155)"
    },
    "car-scroll-animation-nextjs": {
        title: "Midnight Drive Scroll Animation",
        subtitle: "Cinematic GSAP Scroll Experience",
        icon: "fa-car",
        description: "A premium scroll-driven animation experience featuring a vintage muscle car. The page stays pinned while the road seamlessly slides upward, creating a continuous driving illusion with dynamic story cards.",
        techStack: ["Next.js", "React", "Tailwind CSS", "GSAP 3", "ScrollTrigger"],
        features: [
            "Pinned scroll flow mapping road movement to scroll position.",
            "Cinematic neon text reveal sequences.",
            "Stage-based story cards triggered dynamically via ScrollTrigger.",
            "High-performance, smooth 60fps animations."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/car-scroll-animation-nextjs",
        thumbnailBg: "linear-gradient(135deg, #4f46e5, #312e81)"
    },
    "apple-scroll-animation": {
        title: "The Gravity of Ideas",
        subtitle: "Interactive Storytelling Scroll Animation",
        icon: "fa-apple-alt",
        description: "A scroll-driven animated storytelling page depicting the precise moment Newton discovered gravity. Features a falling apple tracing a complex SVG bezier curve path tied 1:1 to scroll position.",
        techStack: ["Next.js", "React", "GSAP 3", "MotionPathPlugin", "Tailwind CSS"],
        features: [
            "Apple follows a precise MotionPath tied 1:1 to scroll position.",
            "Impact finale with screen shake and particle burst effects.",
            "Ambient looping tree sway and leaf drift animations."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/apple-scroll-animation",
        thumbnailBg: "linear-gradient(135deg, #f97316, #c2410c)"
    }
};
