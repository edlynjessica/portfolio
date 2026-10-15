export const profile = {
  name: "Edlyn Jessica",
  handle: "ed",
  terminalUser: "ed@portfolio:~$",
  title: "Backend + Applied AI Engineer",
  tagline: "Architecting high-throughput APIs, resilient data systems, and production RAG pipelines.",
  bio: "B.E. Computer Science graduate (CGPA 9.19) specializing in backend engineering and applied artificial intelligence. Proficient in designing scalable microservices, low-latency APIs with FastAPI and PostgreSQL, and practical machine learning solutions utilizing Scikit-learn, LangChain, and RAG architectures.",
  
  status: "Available for Backend & Applied AI Engineering roles",
  location: "India",
  
  // Contact details - clean and verified
  contact: {
    email: "edlynjessica.dev@gmail.com",
    github: "https://github.com/edlynjessica",
    linkedin: "https://linkedin.com/in/edlynjessica",
    resumeAvailable: false, // Set to true when resume PDF is uploaded
  },

  education: {
    degree: "B.E. Computer Science and Engineering",
    cgpa: "9.19 / 10.0",
    honors: "Academic Distinction",
    coreCoursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems & Architecture",
      "Machine Learning & Data Mining",
      "Object-Oriented Programming (Java/Python)",
      "Distributed Systems",
    ],
  },

  // Categorized tech stack
  skills: {
    languages: [
      { name: "Python", level: "Advanced", desc: "FastAPI, ML pipelines, scripting, data engineering" },
      { name: "Java", level: "Proficient", desc: "Object-oriented design, algorithms, backend architecture" },
      { name: "SQL", level: "Advanced", desc: "Relational modeling, query optimization, indexing" },
    ],
    backend: [
      { name: "FastAPI", level: "Advanced", desc: "Asynchronous REST APIs, Pydantic validation, OpenAPI" },
      { name: "PostgreSQL", level: "Advanced", desc: "Schema design, joins, ACID transactions, performance" },
      { name: "RESTful APIs", level: "Advanced", desc: "Microservices design, API security, pagination" },
      { name: "System Design", level: "Intermediate", desc: "Caching, queue fundamentals, database indexing" },
    ],
    ai_ml: [
      { name: "Scikit-learn", level: "Advanced", desc: "Random Forest, regression, clustering, model evaluation" },
      { name: "LangChain", level: "Proficient", desc: "Chains, prompt templates, document loaders, vector stores" },
      { name: "RAG Architecture", level: "Proficient", desc: "Retrieval-Augmented Generation, chunking, semantic search" },
      { name: "Pandas & NumPy", level: "Advanced", desc: "Data wrangling, feature engineering, statistical metrics" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching strategies, collaboration" },
      { name: "Linux / Bash", level: "Proficient", desc: "Shell scripting, process management, environment setup" },
      { name: "Vite & React", level: "Proficient", desc: "Modern component architecture, reactive state, UI" },
      { name: "Postman", level: "Advanced", desc: "API testing, automation, integration test suites" },
    ],
  },

  // Flat list for quick terminal lookups
  flatSkills: [
    "Python", "Java", "SQL", "FastAPI", "PostgreSQL",
    "Scikit-learn", "LangChain", "RAG", "Pandas", "NumPy",
    "REST APIs", "System Architecture", "Git", "Linux",
  ],

  // Featured Projects with verified details from user's workspace
  projects: [
    {
      id: "groundwater",
      name: "Groundwater Depletion Prediction System",
      shortName: "AquaGuard ML",
      tagline: "Proactive urban water depletion forecasting with machine learning",
      description:
        "Engineered a predictive machine learning system estimating days remaining before tank depletion in residential complexes. Implemented feature engineering (tank fill ratio, per capita usage, seasonal rainfall variations) and evaluated multiple algorithms, selecting Random Forest Regressor for superior non-linear modeling with R² score > 0.96 and MAE ~0.15 days. Includes a multi-tier alert engine (Safe, Warning, Critical) and real-time inference API.",
      tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Flask API", "NumPy"],
      metrics: "R² > 0.96 | MAE ~0.15 days | 3-tier Early Warning Alerting",
      status: "Completed / Research Project",
      repoName: "water-prediction-ml",
      link: null, // Local verified project
    },
    {
      id: "roadsos",
      name: "RoadSOS Emergency Response Platform",
      shortName: "RoadSOS",
      tagline: "Real-time road incident reporting and telemetry platform",
      description:
        "Architected a backend system for rapid road incident logging, alert dissemination, and response coordination. Built resilient API endpoints for incident telemetry, severity classification, and location-based distress routing, minimizing dispatch latency.",
      tech: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Geo-coordinates"],
      metrics: "Sub-100ms API response time | Structured incident payload validation",
      status: "In Active Development",
      repoName: "RoadSOS",
      link: null, // Internal project
    },
    {
      id: "hireready",
      name: "HireReady AI Readiness Evaluator",
      shortName: "HireReady",
      tagline: "AI-powered career competency assessment & candidate analytics",
      description:
        "Developed an intelligent assessment platform evaluating candidate skills, technical competencies, and role preparedness. Leveraged Scikit-learn predictive models to score candidate readiness, identify domain skill gaps, and provide targeted improvement trajectories.",
      tech: ["Python", "Scikit-learn", "Streamlit", "SQLite", "Data Analysis"],
      metrics: "Automated Competency Benchmarking | Real-time predictive scoring",
      status: "Completed Prototype",
      repoName: "HireReady",
      link: null, // Local project
    },
    {
      id: "resume-parser",
      name: "Resume Parsing API (Career-Lens AI)",
      shortName: "Career-Lens API",
      tagline: "High-throughput resume extraction & semantic skill matching",
      description:
        "Built a modular document ingestion service that parses resumes across formats (PDF, DOCX) and maps unstructured candidate history into structured JSON schemas. Integrated LangChain and RAG workflows to extract domain skills, work experience timelines, and semantic alignment against job descriptions.",
      tech: ["Python", "FastAPI", "LangChain", "RAG", "PyPDF", "PostgreSQL"],
      metrics: "End-to-end PDF parsing | Structured JSON entity extraction",
      status: "Active Development",
      repoName: "Career-Lens-AI",
      link: null, // Local repository
    },
  ],

  // Professional Experience
  experience: [
    {
      company: "Xebia",
      role: "Software Engineer",
      duration: "Engineering Experience",
      location: "Bengaluru, India",
      summary: "Backend engineering and enterprise AI workflow integration.",
      bullets: [
        "Architected and deployed modular backend microservices with rigorous test coverage.",
        "Engineered reliable API integrations and optimized database interactions for enterprise services.",
        "Collaborated on applied AI initiatives, exploring LLM orchestration and workflow automation.",
      ],
    },
    {
      company: "LoyalMed",
      role: "Full-Stack / Backend Engineer",
      duration: "Engineering Experience",
      location: "India",
      summary: "Healthcare application engineering, secure API design, and data modeling.",
      bullets: [
        "Developed backend endpoints using FastAPI and PostgreSQL with robust payload validation.",
        "Engineered responsive patient and practitioner interfaces connected to real-time service endpoints.",
        "Implemented database schema migrations and optimized query execution for clinical record management.",
      ],
    },
  ],

  // Academic and Engineering Achievements
  achievements: [
    {
      title: "Academic Excellence — CGPA 9.19 / 10.0",
      category: "Academics",
      desc: "Ranked in the top percentile of B.E. Computer Science Engineering with consistent high distinction across theoretical and practical disciplines.",
    },
    {
      title: "Algorithmic Problem Solving & Data Structures",
      category: "Engineering",
      desc: "Extensive problem-solving track record across algorithmic patterns including Backtracking (Sudoku Solver), Dynamic Programming, Graph Traversals, and Tree Operations in Java & Python.",
    },
    {
      title: "Applied AI & ML Project Delivery",
      category: "Applied Research",
      desc: "Delivered machine learning solutions from ground-up data synthesis to production-grade predictive inference (e.g. AquaGuard with R² > 0.96).",
    },
  ],

  // Technical Certifications (Verified domain focus)
  certifications: [
    {
      title: "Machine Learning & Predictive Modeling",
      issuer: "Professional Coursework",
      desc: "Supervised learning, regression analysis, feature engineering, and cross-validation methodology.",
    },
    {
      title: "Backend API Engineering & Database Architecture",
      issuer: "Technical Specialization",
      desc: "Asynchronous backend development, relational schema design, REST standards, and SQL optimization.",
    },
  ],
};

