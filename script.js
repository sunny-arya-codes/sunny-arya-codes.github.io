document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const experience = [
        {
            company: "Sponte",
            role: "AI Engineer (Founding Team)",
            period: "Apr 2026 – Present",
            description: "Architecting Generative AI workflows, multi-step LLM pipelines, and AI-powered enterprise solutions for production use cases. Building scalable FastAPI microservices integrated with vector databases including FAISS and pgvector for contextual reasoning over proprietary data.",
            tech: ["Python", "FastAPI", "LLMs", "FAISS", "pgvector", "Prompt Engineering"]
        },
        {
            company: "Freshmenu",
            role: "Software Development Engineer",
            period: "Jan 2024 – Mar 2026",
            description: "Built an AI-driven Financial Reconciliation Platform using FastAPI, Next.js, and LLM workflows. Engineered a Procurement Automation System using OpenCV. Developed and maintained scalable backend services using Java, Spring Boot, and MySQL.",
            tech: ["Java", "Spring Boot", "MySQL", "Next.js", "FastAPI", "OpenCV", "ActiveMQ"]
        },
        {
            company: "Freshmenu",
            role: "Software Developer Intern",
            period: "Sep 2023 – Dec 2023",
            description: "Worked on backend engineering and API development tasks using Java, Spring Boot, MySQL, and MongoDB. Contributed to third-party integrations and feature enhancements.",
            tech: ["Java", "Spring Boot", "MySQL", "MongoDB", "REST APIs"]
        }
    ];

    const projects = [
        {
            title: "AI Agent for Academic Guidance",
            description: "Full-stack Retrieval-Augmented Generation (RAG) system for context-aware academic guidance. Implemented JWT authentication, rate limiting, and optimized chunking strategies.",
            year: "2024",
            tech: ["FastAPI", "LangChain", "OpenAI", "pgvector", "AWS", "Docker"],
            liveLink: "https://github.com/sunnyarya0"
        },
        {
            title: "Spatio-Temporal Crime Prediction",
            description: "Multi-class crime classification system on 800K+ records using temporal, spatial, and cyclical feature engineering.",
            year: "2023",
            tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "GridSearchCV"],
            liveLink: "https://github.com/sunnyarya0"
        }
    ];

    // --- Rendering Functions ---
    const createBadgeContainer = (techList) => {
        const container = document.createElement('div');
        container.className = 'badge-container';
        techList.forEach(tech => {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = tech;
            container.appendChild(badge);
        });
        return container;
    };

    // 1. Sidebar Cards (Timeline Replacement)
    const timelineList = document.getElementById('timeline-list');
    experience.forEach((exp, index) => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.setAttribute('data-index', index);
        card.innerHTML = `
            <span class="exp-company">${exp.company}</span>
            <span class="exp-role">${exp.role}</span>
            <span class="exp-period">${exp.period}</span>
        `;
        card.addEventListener('click', () => openModal(exp));
        timelineList.appendChild(card);
    });

    // 2. Main Column Projects
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
        item.innerHTML = `
            <div class="project-header-row">
                <a href="#" class="project-title" target="_blank" rel="noopener noreferrer">${project.title}</a>
                <a href="${project.liveLink}" class="live-link" target="_blank" rel="noopener noreferrer">Live</a>
            </div>
            <div class="project-year">${project.year}</div>
            <p class="project-desc">${project.description}</p>
        `;
        item.appendChild(createBadgeContainer(project.tech));
        projectsList.appendChild(item);
    });

    // --- Modal Logic ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    const openModal = (data, isProject = false) => {
        const title = isProject ? data.title : data.role;
        const meta = isProject ? data.year : `${data.company} | ${data.period}`;
        
        modalBody.innerHTML = `
            <h2>${title}</h2>
            <div class="modal-meta">${meta}</div>
            <p class="modal-desc">${data.description}</p>
            <h3>Technologies Used</h3>
        `;
        modalBody.appendChild(createBadgeContainer(data.tech));
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeModal = () => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scroll
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Mobile Toggles ---
    const navToggle = document.getElementById('nav-toggle');
    const historyToggle = document.getElementById('history-toggle');
    const navLinksWrapper = document.querySelector('.nav-links-wrapper');
    const profileSidebar = document.getElementById('profile-sidebar');

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinksWrapper.classList.toggle('active');
        profileSidebar.classList.remove('active'); // Close history if nav opens
    });

    historyToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        profileSidebar.classList.toggle('active');
        navLinksWrapper.classList.remove('active'); // Close nav if history opens
    });

    // Close mobile menus on click outside
    document.addEventListener('click', (e) => {
        if (!navLinksWrapper.contains(e.target) && !navToggle.contains(e.target)) {
            navLinksWrapper.classList.remove('active');
        }
        if (!profileSidebar.contains(e.target) && !historyToggle.contains(e.target)) {
            profileSidebar.classList.remove('active');
        }
    });
});
