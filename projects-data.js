/**
 * Sathi Karthikeya Reddy - Verified Portfolio Projects
 * Only projects with verified, live repositories on GitHub are included.
 */

const projectsData = {
    "emplay-ai-engineering-suite": {
        id: "emplay-ai-engineering-suite",
        title: "Emplay AI/ML & LLM Engineering Suite",
        subtitle: "Autonomous RAG, AST-Guarded SQL Agent & MLOps Pipeline",
        category: "Growth & AI",
        icon: "fa-brain",
        summary: "Production-grade enterprise AI/ML monorepo uniting a hybrid ChromaDB/BM25 RAG engine with Reciprocal Rank Fusion, an AST-guarded Text-to-SQL agent, and MLflow-tracked ticket triage with 26 passing tests.",
        description: "An enterprise-scale AI/ML and LLM engineering monorepo architected for mission-critical enterprise intelligence. Features three production microservices: a hybrid dense-lexical knowledge engine with cross-encoder re-ranking, a deterministic AST-guarded Text-to-SQL business intelligence agent with dynamic schema introspection, and an end-to-end MLOps support ticket triage pipeline backed by MLflow experiment tracking and statistical Z-score outlier guardrails.",
        techStack: ["Python 3.10+", "FastAPI", "ChromaDB", "Rank-BM25", "sqlglot AST", "MLflow", "Scikit-Learn", "SQLite", "PyTest"],
        features: [
            "Hybrid Knowledge Intelligence Engine blending dense ChromaDB vectors with sparse BM25 via Reciprocal Rank Fusion (RRF, k=60) to eliminate domain acronym hallucination.",
            "Contextual cross-encoder re-ranking pass with strict grounding prompts enforcing explicit citation attribution [Source: document.md, Section 2].",
            "Deterministic AST security guard using sqlglot to strictly enforce single-root SELECT execution and block multi-statement and schema mutation injections.",
            "Dynamic relational schema extractor automatically introspecting SQLite tables, foreign keys, and 3 representative sample rows for LLM prompt context.",
            "NLP Customer Support Ticket Triage pipeline synthesizing 1,500+ tickets across 5 enterprise categories with MLflow experiment tracking.",
            "Statistical Z-score outlier detector (Z > 3.0) intercepting adversarial or out-of-distribution prompts before consuming inference compute.",
            "Token counter and cost governance middleware estimating real-time per-request compute footprint and API latency.",
            "100% automated test pass rate across 26 comprehensive pytest cases covering edge cases, AST security, and MLOps logging."
        ],
        stats: [
            { label: "Unit Tests", value: "26 / 26 Passing" },
            { label: "Engines", value: "3 Microservices" },
            { label: "Governance", value: "AST + MLflow" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/emplay-ai-engineering-suite",
        thumbnailBg: "linear-gradient(135deg, #6366f1, #06b6d4)"
    },
    "quantacus-growth-solutions": {
        id: "quantacus-growth-solutions",
        title: "Quantacus Growth Solutions Monorepo",
        subtitle: "Enterprise Growth Solutions & Autonomous Analytics Suite",
        category: "Growth & AI",
        icon: "fa-chart-pie",
        summary: "A production-grade commercial analytics monorepo unifying multi-channel demand signals, paid marketing performance, and self-serve SQL business intelligence with 27 automated pytest tests.",
        description: "An enterprise-grade commercial growth analytics monorepo engineered to bridge top-of-funnel marketing demand signals, multichannel paid ad economics, and retail transaction telemetry into three autonomous, production-ready software engines. Built for the Growth Solutions Analyst role at Quantacus.ai.",
        techStack: ["Python 3.10+", "FastAPI", "SQLite", "Google Gemini 2.5", "sqlglot AST", "SciPy", "Pandas", "Chart.js"],
        features: [
            "Unified monorepo architecture housing three production-ready microservices with independent APIs.",
            "Adaptive Omnichannel Demand Trend & Arbitrage Engine detecting surge inflections 10-14 days prior to peak volume.",
            "eCommerce Growth Experimentation & ROAS Anomaly Engine with SQL window-modeled CTEs and A/B hypothesis testing.",
            "Self-Serve Natural Language SQL BI Engine with strict AST security guardrails preventing SQL injection.",
            "One-click automated multi-database seeder (seed_all.py) and unified pytest test runner (run_all_tests.py).",
            "100% automated test pass rate across 27 rigorous test cases covering edge cases and AST security."
        ],
        stats: [
            { label: "Unit Tests", value: "27 / 27 Passing" },
            { label: "Microservices", value: "3 Engines" },
            { label: "Architecture", value: "Monorepo" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/quantacus-growth-solutions",
        thumbnailBg: "linear-gradient(135deg, #4f46e5, #06b6d4)"
    },
    "tessera-flow": {
        id: "tessera-flow",
        title: "Tessera Flow",
        subtitle: "Enterprise Multi-Agent Execution Tracker",
        category: "Full Stack & Systems",
        icon: "fa-network-wired",
        summary: "High-density multi-agent execution tracking dashboard simulating a 5-agent AI cluster orchestrating enterprise cloud data migration with TanStack tables and compliance seals.",
        description: "A client-side multi-agent execution tracking dashboard designed as a high-density, professional enterprise internal tool. Simulates a 5-agent AI cluster (Extraction, Validation, Mapping, Migration, Governance) executing 18 atomic workflow steps to migrate legacy vendor records into cloud ERP environments.",
        techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "TanStack Table v8", "Lucide React", "Playwright"],
        features: [
            "Autonomous 5-agent cluster simulation driven by a custom timestamp-based React state machine.",
            "High-density execution log table built with TanStack Table v8 supporting sorting, search, and agent filtering.",
            "Accessible focus-trapped agent detail drawer with Escape key handling and aria-live announcements.",
            "Real-time governance panel generating compliance logs and cryptographic verification seals with JSON export.",
            "Zero hydration mismatch architecture with robust localStorage persistence and rehydration safety."
        ],
        stats: [
            { label: "AI Agents", value: "5 Sequential" },
            { label: "Workflow Steps", value: "18 Concrete" },
            { label: "Performance", value: "60 FPS Client-Side" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/tessera-flow",
        thumbnailBg: "linear-gradient(135deg, #6366f1, #a855f7)"
    },
    "omnichannel-demand-engine": {
        id: "omnichannel-demand-engine",
        title: "Omnichannel Demand Trend & Arbitrage Engine",
        subtitle: "Rolling Z-Score Anomaly Detection & Media Arbitrage",
        category: "Growth & AI",
        icon: "fa-arrow-trend-up",
        summary: "Real-time demand spike detector normalizing multi-channel signals (Google, YouTube, TikTok, IG) and correlating surge velocity with inventory to prevent stockouts and scale ad spend.",
        description: "A high-throughput demand intelligence platform that standardizes multi-channel time-series signals into a composite Demand Signal Index (DSI). Employs rolling 30-day Z-scores to spot demand surges 10-14 days prior to peak demand events and orchestrates automated inventory-advertising arbitrage guidance.",
        techStack: ["Python 3.10+", "FastAPI", "SQLite", "Pandas", "NumPy", "SciPy", "Pytest"],
        features: [
            "Channel-level MinMax normalization and intent weighting (Google 40%, YouTube 25%, TikTok 25%, Instagram 10%).",
            "Continuous rolling Z-score computation with cold-start expanding windows and zero-variance guards.",
            "Surge velocity acceleration algorithms identifying trend inflections 10+ days prior to peak market volume.",
            "Arbitrage decision matrix matching DOIR (Days of Inventory Remaining) with surge demand.",
            "FastAPI REST interface exposing active trends, inventory guidance, and external webhook ingestion."
        ],
        stats: [
            { label: "Lead Time", value: "10-14 Days Early" },
            { label: "Anomaly Threshold", value: "Z >= 2.0 (97.7th %)" },
            { label: "API Endpoints", value: "4 REST Routes" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/omnichannel-demand-engine",
        thumbnailBg: "linear-gradient(135deg, #06b6d4, #3b82f6)"
    },
    "growth-experimentation-roas": {
        id: "growth-experimentation-roas",
        title: "eCommerce Growth Experimentation & ROAS Engine",
        subtitle: "SQL Window Analytics, Cohorts & Anomaly Tripwires",
        category: "Growth & AI",
        icon: "fa-bullseye",
        summary: "Advanced marketing analytics platform featuring SQLite window functions, customer cohort LTV:CAC models, two-proportion Z-tests for A/B tests, and a responsive Chart.js dashboard.",
        description: "An advanced marketing performance engine featuring complex SQLite CTEs and Window Functions modeling 90 days of Meta Ads, Google PMax, and TikTok Ads. Automates CPM surge, CTR decay, and ROAS breach tripwires, evaluates A/B tests via pooled two-proportion Z-tests, and serves a responsive Chart.js visual dashboard.",
        techStack: ["Python 3.10+", "FastAPI", "SQLite", "Pandas", "SciPy", "Chart.js", "Tailwind CSS"],
        features: [
            "Reusable SQL CTE and Window Function models computing daily, weekly, and rolling 7-day ROAS and CAC baselines.",
            "Cohort retention models evaluating cumulative customer lifetime value (LTV:CAC) progression from M0 to M3.",
            "Rigorous two-proportion pooled Z-test verifying conversion rate uplifts at p < 0.05 with annualized ARR estimates.",
            "Automated KPI tripwires flagging CPM surges (>20%), CTR drops (>15% WoW), and ROAS breaches (<2.5x).",
            "Automated weekly executive digests in Markdown and JSON with ad spend waste mitigation.",
            "Interactive single-page dashboard with real-time Chart.js visual telemetry."
        ],
        stats: [
            { label: "Lookback Period", value: "90 Days Multi-Channel" },
            { label: "Significance Test", value: "p < 0.05 Two-Tailed" },
            { label: "Automated Alerts", value: "CPM / CTR / ROAS" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/growth-experimentation-roas",
        thumbnailBg: "linear-gradient(135deg, #ec4899, #8b5cf6)"
    },
    "sql-bi-agent": {
        id: "sql-bi-agent",
        title: "Natural Language SQL BI Agent",
        subtitle: "Text-to-SQL with Strict AST Security Guardrails",
        category: "Growth & AI",
        icon: "fa-terminal",
        summary: "Self-serve conversational retail analytics agent powered by Google Gemini 2.5 with a strict sqlglot AST guardrail preventing SQL injection, table drops, and statement stacking.",
        description: "A self-serve conversational business intelligence platform powered by Google Gemini 2.5 and SQLite. Features a mathematically verified sqlglot AST security guardrail that strictly permits single-root SELECT statements and prevents SQL injection, accompanied by an offline deterministic fallback engine and query telemetry logging.",
        techStack: ["Python 3.10+", "FastAPI", "SQLite", "Google Gemini 2.5", "sqlglot", "Pandas"],
        features: [
            "AST security guardrail using sqlglot to block statement stacking and destructive keywords.",
            "Dynamic schema inspector extracting DDLs, foreign keys, and sample rows for LLM prompts.",
            "Dual-mode execution: live Gemini API + deterministic offline mock engine for keyless reviewers.",
            "Query telemetry and latency logging to SQLite audit_log table.",
            "Interactive web query playground with real-time injection defense demonstration."
        ],
        stats: [
            { label: "Security", value: "AST Zero-Injection" },
            { label: "Execution Latency", value: "< 5ms (SQLite)" },
            { label: "LLM Model", value: "Gemini 2.5 Flash" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/sql-bi-agent",
        thumbnailBg: "linear-gradient(135deg, #10b981, #059669)"
    },
    "custom-employee-portal": {
        id: "custom-employee-portal",
        title: "Custom Employee Portal with Zoho One",
        subtitle: "Enterprise RBAC & Service Proxy Architecture",
        category: "Full Stack & Systems",
        icon: "fa-id-badge",
        summary: "Enterprise web portal with internal authentication, Role-Based Access Control, and an outbound Zoho One API proxy with in-memory OAuth2 token caching.",
        description: "A web-based custom employee portal with its own authentication and Role-Based Access Control (RBAC). The backend integrates with Zoho One APIs so employees can view and open only the Zoho applications their assigned role permits. Employees never enter individual Zoho credentials — all access is proxied through a central backend service account.",
        techStack: ["Node.js", "Express", "React 18", "Vite", "JWT", "OAuth 2.0", "Zoho One API", "Helmet"],
        features: [
            "Centralized Zoho OAuth2 token cache with 60-second safety margin and refresh grant handler.",
            "Strict RBAC permission matrix governing authorized vs locked app tiles.",
            "Paginated, filterable system security audit trail recording access and denied events.",
            "Inactivity session tracker and responsive modern Vite-powered React UI."
        ],
        stats: [
            { label: "Auth Model", value: "JWT + OAuth2" },
            { label: "Security", value: "RBAC + Helmet" },
            { label: "Frontend", value: "React 18 + Vite" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/custom-employee-portal",
        thumbnailBg: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    "drone-telemetry-dashboard": {
        id: "drone-telemetry-dashboard",
        title: "SkyRoute Drone Fleet Telemetry",
        subtitle: "Autonomous Delivery & Cold-Chain Anomaly Monitor",
        category: "Full Stack & Systems",
        icon: "fa-helicopter",
        summary: "Mission-critical autonomous delivery orchestration dashboard featuring live WebSocket telemetry streaming, geospatial tracking, and cold-chain sensor anomaly detection.",
        description: "Mission-critical autonomous delivery orchestration dashboard featuring real-time telemetry streaming, geofence boundary tracking, and cold-chain temperature anomaly detection for medical drone payloads. Built with FastAPI WebSockets and Leaflet.",
        techStack: ["Python", "FastAPI", "WebSockets", "Leaflet.js", "Chart.js", "Bootstrap 5"],
        features: [
            "Live WebSocket telemetry streaming drone altitude, speed, battery, and GPS coordinates.",
            "Dynamic Leaflet map rendering active flight corridors and delivery dropzones.",
            "Real-time sensor anomaly detection for cold-chain pharmaceutical cargo.",
            "Fleet health status cards with low-battery and route-deviation alarms."
        ],
        stats: [
            { label: "Streaming", value: "WebSockets" },
            { label: "Mapping", value: "Leaflet Geospatial" },
            { label: "Target", value: "Cold-Chain Fleet" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/drone-telemetry-dashboard",
        thumbnailBg: "linear-gradient(135deg, #0284c7, #0369a1)"
    },
    "support-ticket-system": {
        id: "support-ticket-system",
        title: "Support Ticket System",
        subtitle: "Full-Stack LLM-Integrated Issue Tracker",
        category: "Full Stack & Systems",
        icon: "fa-ticket-alt",
        summary: "Containerized issue tracker with Django REST Framework, React, and OpenAI GPT integration for automatic categorization and SLA priority assignment.",
        description: "A comprehensive, containerized full-stack support ticket system integrating OpenAI GPT API for automated ticket categorization, priority prediction, and sentiment classification. Features database-level constraint enforcement and stats aggregation.",
        techStack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Vite", "Docker", "OpenAI API"],
        features: [
            "AI-driven automatic ticket categorization and SLA priority assignment.",
            "Backend built with Django, DRF, and Postgres with database-level constraints.",
            "High-efficiency stats aggregation for resolution time and agent performance.",
            "Full Docker and Docker Compose containerization for instant local deployment."
        ],
        stats: [
            { label: "Stack", value: "Django + React" },
            { label: "AI Model", value: "OpenAI GPT" },
            { label: "Deployment", value: "Docker Compose" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/support-ticket-system",
        thumbnailBg: "linear-gradient(135deg, #10b981, #047857)"
    },
    "personal-finance-analyser": {
        id: "personal-finance-analyser",
        title: "Personal Finance & Wealth Optimizer",
        subtitle: "Full-Stack Financial Health & Budget Engine",
        category: "Full Stack & Systems",
        icon: "fa-wallet",
        summary: "Full-stack personal finance application with recurring expense tracking, cash-flow breakdowns, and emergency fund runway projections.",
        description: "A comprehensive personal finance analyzer tracking expenses, recurring subscriptions, and savings rates with interactive visual cash-flow breakdowns and monthly budgeting targets.",
        techStack: ["Python", "FastAPI", "SQLite", "Chart.js", "Bootstrap", "HTML5"],
        features: [
            "Automated transaction categorization across recurring fixed and variable costs.",
            "Interactive monthly cash-flow Sankey and category spending doughnut charts.",
            "Savings runway calculator with dynamic emergency fund projections.",
            "Clean REST API architecture with SQLite persistent storage."
        ],
        stats: [
            { label: "Backend", value: "FastAPI + SQLite" },
            { label: "Analytics", value: "Cash-Flow Engine" },
            { label: "UI", value: "Chart.js Visuals" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/personal-finance-analyser",
        thumbnailBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)"
    },
    "spend-anomaly-alert": {
        id: "spend-anomaly-alert",
        title: "Paid Media Spend Anomaly Alert Engine",
        subtitle: "Real-Time Advertising Run-Rate & Cost Monitor",
        category: "Growth & AI",
        icon: "fa-triangle-exclamation",
        summary: "Statistical cost-anomaly detector flagging runaway ad spend, sudden CPM spikes, and conversion tracking drop-offs before budget depletion.",
        description: "An automated cost-anomaly detector monitoring multi-channel marketing campaigns. Identifies sudden budget pacing over-runs, runaway CPC spikes, and conversion tracking drop-offs before budget depletion.",
        techStack: ["Python", "SQLite", "Pandas", "NumPy", "FastAPI"],
        features: [
            "Statistical threshold tripwires flagging pacing deviations exceeding standard variance.",
            "Automated root-cause diagnostics detailing auction inflation and audience exhaustion.",
            "Exportable anomaly digest for growth marketers and media buyers."
        ],
        stats: [
            { label: "Domain", value: "Paid Media Safety" },
            { label: "Engine", value: "Statistical Z-Score" },
            { label: "Platform", value: "Python / FastAPI" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/spend-anomaly-alert",
        thumbnailBg: "linear-gradient(135deg, #f97316, #c2410c)"
    },
    "car-scroll-animation-nextjs": {
        id: "car-scroll-animation-nextjs",
        title: "Midnight Drive Scroll Animation",
        subtitle: "Cinematic GSAP Scroll Experience",
        category: "Interactive & UI",
        icon: "fa-car",
        summary: "Scroll-driven interactive web experience built with Next.js and GSAP ScrollTrigger featuring a vintage muscle car driving through dynamically revealed night stages.",
        description: "A premium scroll-driven animation experience featuring a vintage muscle car. The page stays pinned while the road seamlessly slides upward, creating a continuous driving illusion with dynamic story cards.",
        techStack: ["Next.js 14", "React", "Tailwind CSS v4", "GSAP 3", "ScrollTrigger"],
        features: [
            "Pinned scroll flow mapping road movement to scroll position.",
            "Cinematic neon text reveal sequences with dynamic lighting.",
            "Stage-based story cards triggered dynamically via ScrollTrigger.",
            "High-performance, buttery smooth 60fps animations."
        ],
        stats: [
            { label: "Frame Rate", value: "60 FPS Smooth" },
            { label: "Engine", value: "GSAP 3 ScrollTrigger" },
            { label: "Framework", value: "Next.js 14" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/car-scroll-animation-nextjs",
        thumbnailBg: "linear-gradient(135deg, #4f46e5, #312e81)"
    },
    "apple-scroll-animation": {
        id: "apple-scroll-animation",
        title: "Gravity of Ideas",
        subtitle: "Interactive Storytelling Scroll",
        category: "Interactive & UI",
        icon: "fa-apple-whole",
        summary: "Scroll-driven storytelling page depicting Newton's discovery of gravity using GSAP MotionPathPlugin and SVG physics curves.",
        description: "A scroll-driven animated storytelling page depicting the moment Newton discovered gravity. Features a falling apple tracing a complex SVG bezier curve with progressive color transitions.",
        techStack: ["Next.js", "React", "GSAP 3", "MotionPathPlugin", "Tailwind CSS"],
        features: [
            "Apple follows a precise MotionPath tied 1:1 to scroll depth.",
            "Impact finale with screen shake and particle bursts.",
            "Ambient looping tree sway and custom glow trails.",
            "Progressive sky color shift based on scroll depth."
        ],
        stats: [
            { label: "Animation", value: "SVG MotionPath" },
            { label: "Interactivity", value: "1:1 Scroll Bound" },
            { label: "Styling", value: "Tailwind CSS" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/apple-scroll-animation",
        thumbnailBg: "linear-gradient(135deg, #ef4444, #991b1b)"
    },
    "SmartNotes": {
        id: "SmartNotes",
        title: "Smart Notes App",
        subtitle: "Responsive CRUD Web Application",
        category: "Interactive & UI",
        icon: "fa-note-sticky",
        summary: "Modern responsive note-taking application featuring full Create, Read, Update, and Delete operations with persistent browser storage.",
        description: "A modern, responsive web-based note-taking application featuring full Create, Read, Update, and Delete (CRUD) operations mapped to persistent local storage with dynamic category tags.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "FontAwesome"],
        features: [
            "Real-time note creation, editing, and deletion with instant search.",
            "Persistent local storage ensuring data preservation across sessions.",
            "Clean, colorful UI cards with responsive layout."
        ],
        stats: [
            { label: "Storage", value: "LocalStorage" },
            { label: "Operations", value: "Full CRUD" },
            { label: "Deployment", value: "Netlify Live" }
        ],
        liveLink: "https://uismart-notes.netlify.app/",
        githubLink: "https://github.com/SathiKarthikeyaReddy/SmartNotes",
        thumbnailBg: "linear-gradient(135deg, #eab308, #a16207)"
    },
    "matrix": {
        id: "matrix",
        title: "Matrix Front-End",
        subtitle: "Pixel-Perfect Frontend Architecture",
        category: "Interactive & UI",
        icon: "fa-border-all",
        summary: "Strictly engineered frontend demonstration recreating exact pixel-perfect design specifications and fluid responsive CSS grids.",
        description: "A responsive and strictly designed frontend application demonstrating exact design specification matching, layout precision, and modular HTML/CSS styling.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Pixel-perfect design replication of complex UI specifications.",
            "Fluid responsive layout scaling smoothly across mobile, tablet, and desktop.",
            "Semantic, accessible HTML structure and clean CSS modules."
        ],
        stats: [
            { label: "Layout", value: "CSS Grid & Flexbox" },
            { label: "Precision", value: "Pixel-Perfect" },
            { label: "Standard", value: "Semantic HTML5" }
        ],
        liveLink: null,
        githubLink: "https://github.com/SathiKarthikeyaReddy/matrix",
        thumbnailBg: "linear-gradient(135deg, #8b5cf6, #5b21b6)"
    }
};

// Export for module/script usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
