const projectsData = {
    "spend-anomaly-alert": {
        title: "Spend Anomaly Alert System",
        subtitle: "AI-Powered Corporate Finance Intelligence",
        icon: "fa-chart-line",
        description: "An intelligent corporate finance tool that ingests recurring expense data, calculates category-level baselines, and autonomously flags anomalous spending using Z-score statistical variance modeling. Generates polished executive-ready weekly digest reports via Gemini AI.",
        techStack: ["Python", "FastAPI", "React", "Vite", "Recharts", "SQLite", "Gemini API", "html2pdf.js"],
        features: [
            "Z-score statistical anomaly detection with a cold-start guard (requires ≥3 historical records per category).",
            "Automatic AI-generated executive digest summarizing weekly spend findings.",
            "Drag-and-drop CSV upload with real-time KPI dashboard.",
            "Client-side PDF export requiring no server-side C libraries.",
            "Robust fallback template mode — works seamlessly without API keys."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/spend-anomaly-alert",
        thumbnailBg: "linear-gradient(135deg, #f59e0b, #b45309)"
    },
    "sql-bi-reporter": {
        title: "SQL BI Reporter",
        subtitle: "Natural Language Business Intelligence Tool",
        icon: "fa-database",
        description: "A self-contained BI tool that enables non-technical stakeholders to query realistic business datasets using plain English. It translates natural language into safe, sanitized SQL via Gemini AI, executes it against a SQLite database, and auto-generates conversational business summaries — all with persistent query history.",
        techStack: ["Python", "FastAPI", "React", "Vite", "SQLite", "Gemini API", "pandas"],
        features: [
            "Natural language → SQL translation powered by Gemini AI.",
            "SQL injection protection via allowlist validation and schema grounding.",
            "Auto-generated conversational business summaries of query results.",
            "Persistent query history log across sessions.",
            "Pre-seeded realistic business datasets (sales, orders, expenses).",
            "Zero API keys required — fully functional fallback mode included."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/sql-bi-reporter",
        thumbnailBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    "personal-finance-analyser": {
        title: "Personal Finance Analyser",
        subtitle: "AI-Categorised Spending Dashboard",
        icon: "fa-wallet",
        description: "A data-dense web application that ingests bank transaction CSVs and leverages a pluggable categorisation engine to identify spending patterns. Provides actionable financial intelligence by classifying transactions, computing month-over-month trends, and flagging statistical anomalies in spending behaviour.",
        techStack: ["Python", "FastAPI", "React", "Vite", "Recharts", "SQLite", "pandas", "Gemini API"],
        features: [
            "Pluggable categorisation engine — swap between zero-dependency rule-based or LLM-powered categoriser.",
            "Month-over-month trend analysis with interactive Recharts visualisations.",
            "Statistical anomaly detection on personal spending patterns.",
            "CSV drag-and-drop ingestion with automatic field mapping.",
            "Persistent SQLite storage — transactions survive browser refresh.",
            "Clone and run immediately — no API keys needed."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/personal-finance-analyser",
        thumbnailBg: "linear-gradient(135deg, #10b981, #047857)"
    },
    "wobb-vibe-coder-premium": {
        title: "Wobb Vibe Coder — Premium",
        subtitle: "Glassmorphism UI Redesign & State Migration",
        icon: "fa-paint-brush",
        description: "A professional-grade frontend take-home assignment for the Vibe Coder Intern role at Wobb. Fixed existing bugs, migrated state management from prop-drilling to Zustand with persistence, and overhauled the UI/UX to a premium standard with glassmorphism, Framer Motion animations, and full dark mode.",
        techStack: ["TypeScript", "React", "Vite", "Tailwind CSS v4", "Zustand", "Framer Motion", "Sonner"],
        features: [
            "Bug fixes: case-sensitive search, engagement rate calculation error, unnecessary re-render elimination.",
            "Full Zustand state migration with localStorage persistence for shortlisted profiles.",
            "Glassmorphism design system with backdrop-blur, calibrated typography, and 8pt spacing grid.",
            "Fluid enter/exit animations via Framer Motion on sidebar and tab transitions.",
            "Full dark mode via CSS variables and Tailwind dark: variant with manual toggle.",
            "Toast notifications via Sonner replacing generic browser alerts."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/wobb-vibe-coder-premium",
        thumbnailBg: "linear-gradient(135deg, #8b5cf6, #5b21b6)"
    },
    "resume-master-hub": {
        title: "Resume Master Hub",
        subtitle: "AI-Powered Resume Builder & Analyser",
        icon: "fa-file-alt",
        description: "A full-stack Resume Builder and Analyser web application built with React, Vite, TypeScript, and Supabase. Empowers users to create, format, and optimise resumes with AI-driven feedback and analytics, featuring a rich component library and real-time collaboration support.",
        techStack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Supabase", "shadcn/ui", "Vitest"],
        features: [
            "AI-powered resume analysis and optimisation suggestions.",
            "Drag-and-drop resume section builder with live preview.",
            "Supabase backend for authentication and persistent resume storage.",
            "Built with shadcn/ui component library for a polished, accessible UI.",
            "Full test suite using Vitest.",
            "Export to PDF functionality."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/resume-master-hub",
        thumbnailBg: "linear-gradient(135deg, #ec4899, #be185d)"
    },
    "support-ticket-system": {
        title: "Support Ticket System",
        subtitle: "Full-Stack LLM-Integrated Issue Tracker",
        icon: "fa-ticket-alt",
        description: "A comprehensive, containerized full-stack support ticket system integrating OpenAI's GPT-3.5 API for automatic categorization and prioritization. Built with pure database-level stats aggregation and constraints.",
        techStack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Vite", "Docker", "OpenAI API"],
        features: [
            "AI-driven automatic ticket categorization and prioritization.",
            "Backend built with Django, DRF, and PostgreSQL.",
            "Database-level constraints and high-efficiency stats aggregation.",
            "Modern, responsive React frontend powered by Vite.",
            "Full Docker and Docker Compose containerization."
        ],
        liveLink: null,
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
            "High-performance, buttery smooth 60fps animations.",
            "Fully responsive design with mobile-optimised scroll behaviour."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/car-scroll-animation-nextjs",
        thumbnailBg: "linear-gradient(135deg, #4f46e5, #312e81)"
    },
    "apple-scroll-animation": {
        title: "Gravity of Ideas",
        subtitle: "Interactive Storytelling Scroll",
        icon: "fa-apple-alt",
        description: "A scroll-driven animated storytelling page depicting the precise moment Newton discovered gravity. Features a falling apple tracing a complex SVG bezier curve path tied 1:1 to scroll position.",
        techStack: ["Next.js", "React", "GSAP 3", "MotionPathPlugin", "Tailwind CSS"],
        features: [
            "Apple follows a precise MotionPath tied 1:1 to scroll position.",
            "Impact finale with screen shake and particle burst effects.",
            "Ambient looping tree sway and leaf drift animations.",
            "Dynamic text reveals triggered by scroll milestones.",
            "Responsive canvas rendering for all screen sizes."
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/apple-scroll-animation-nextjs",
        thumbnailBg: "linear-gradient(135deg, #f97316, #c2410c)"
    }
};
