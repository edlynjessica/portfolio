export const profile = {
  name: "Edlyn Jessica Philip",
  handle: "ed",
  terminalUser: "ed@portfolio:~$",
  title: "Backend Developer | AI Enthusiast",
  tagline: "Building practical backend systems and AI-powered applications.",
  bio: "Third-year B.E. Computer Science and Engineering student at St. Joseph’s College of Engineering. Focused on backend development, APIs, and databases, while exploring practical AI applications and strengthening algorithmic problem-solving skills through DSA.",

  status: "Open to internships",
  location: "Chennai, India",

  // Contact details - clean and verified
  contact: {
    email: "edlynjessica09@gmail.com",
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
      "Operating Systems",
      "Computer Networks",
      "Machine Learning & Data Science",
      "Object-Oriented Programming (Java)",
      "Agile Software Development",
      "Full Stack Development (MERN)"
    ],
  },

  // Categorized tech stack (ordered from highest to lowest proficiency)
  skills: {
    languages: [
      { name: "Java", level: "Proficient", desc: "Core OOP principles, data structures, algorithms, and backend logic" },
      { name: "Python", level: "Intermediate", desc: "Scripting, data analysis, API development, and ML prototyping" },
      { name: "SQL", level: "Intermediate", desc: "Relational queries, table schemas, joins, and basic optimization" },
    ],
    backend: [
      { name: "REST APIs", level: "Intermediate", desc: "Designing CRUD endpoints, status codes, and JSON payload handling" },
      { name: "MySQL", level: "Intermediate", desc: "Relational schema design, constraints, indexing, and querying" },
      { name: "SQLite", level: "Familiar", desc: "Lightweight local relational storage for prototypes and embedded apps" },
      { name: "FastAPI", level: "Learning", desc: "Building asynchronous REST endpoints, request validation, and routing" },
      { name: "PostgreSQL", level: "Beginner", desc: "Relational database setup, queries, and structured data storage" },
    ],
    ai_ml: [
      { name: "Scikit-learn", level: "Familiar", desc: "Supervised learning models, data preprocessing, and evaluation metrics" },
      { name: "Pandas & NumPy", level: "Familiar", desc: "Data manipulation, dataset cleaning, and numerical calculations" },
      { name: "LangChain", level: "Familiar", desc: "Chaining prompts, document processing, and vector store integration" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Familiar", desc: "Retrieving contextual documents to augment LLM query responses" },
      { name: "ChromaDB", level: "Familiar", desc: "Storing and querying vector embeddings for document retrieval" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Intermediate", desc: "Version control, commit history, branching, and repository collaboration" },
      { name: "Postman", level: "Familiar", desc: "API endpoint testing, request inspection, and response verification" },
      { name: "Streamlit", level: "Familiar", desc: "Quick interactive UI creation for data science and ML prototypes" },
      { name: "OutSystems", level: "Familiar", desc: "Low-code application modeling, workflow logic, and rapid UI delivery" },
      { name: "React", level: "Beginner", desc: "Basic component structure, state management, and frontend UI updates" },
    ],
    devops: [
      { name: "Render", level: "Familiar", desc: "Deploying web services and backend APIs from Git repositories" },
      { name: "Netlify", level: "Familiar", desc: "Hosting and automated continuous deployment for static frontend sites" },
      { name: "Linux & Bash", level: "Beginner", desc: "Basic shell commands, file system navigation, and script execution" },
      { name: "Docker", level: "Beginner", desc: "Basic container concepts, Dockerfiles, and image building" },
      { name: "Deployment", level: "Beginner", desc: "Configuring basic cloud hosting, environment variables, and builds" },
    ],
  },

  // Flat list for quick terminal lookups
  flatSkills: [
    "Java", "Python", "SQL",
    "FastAPI", "REST APIs", "MySQL", "SQLite", "PostgreSQL",
    "Scikit-learn", "Pandas & NumPy", "LangChain", "RAG", "ChromaDB",
    "React", "Streamlit", "OutSystems", "Git & GitHub", "Postman",
    "Linux & Bash", "Docker", "Render", "Netlify", "Deployment",
  ],

  // Featured Projects with verified details from user's workspace
  projects: [
    {
      id: "api-monitoring",
      name: "API Monitoring System",
      shortName: "API Monitor",
      tagline: "Backend endpoint availability, latency tracking, and response correctness monitoring",
      description:
        "Building a backend-focused API monitoring system to track endpoint availability, response times, and response correctness. The goal is to help identify failing endpoints, monitor performance, and validate API behavior through automated checks.",
      tech: ["Python", "FastAPI", "REST APIs", "Postman"],
      metrics: "Active development: automated health checks & response verification",
      status: "In Development",
      repoName: "API-Monitoring-Tool",
      github: "https://github.com/edlynjessica/API-Monitoring-Tool",
      link: null,
    },
    {
      id: "hireready",
      name: "HireReady",
      shortName: "HireReady",
      tagline: "End-to-end placement readiness application with REST APIs and analytics dashboard",
      description:
        "An end-to-end placement readiness application built with Python, FastAPI, SQLite, and Streamlit. Includes REST APIs, user authentication, data workflows, readiness scoring, and a dashboard for personalized career insights.",
      tech: ["Python", "FastAPI", "SQLite", "Streamlit", "bcrypt"],
      metrics: "Readiness scoring & personalized career insights dashboard",
      status: "Completed / Deployed",
      repoName: "HireReady",
      github: "https://github.com/edlynjessica/HireReady",
      link: "https://hireready-ml.streamlit.app/",
    },
    {
      id: "groundwater",
      name: "Groundwater Depletion Prediction System",
      shortName: "Water Depletion ML",
      tagline: "Groundwater depletion forecasting application with multi-tier alert engine",
      description:
        "Developed a groundwater depletion forecasting application using FastAPI, Streamlit, and a Random Forest Regressor. Uses tank capacity, water level, consumption, rainfall, and resident data to estimate depletion time and generate Safe, Warning, or Critical alerts.",
      tech: ["Python", "FastAPI", "Random Forest", "Scikit-learn", "Streamlit"],
      metrics: "R² = 0.967 | Safe, Warning & Critical alerts",
      status: "Completed / Deployed",
      repoName: "water-prediction-ml",
      github: "https://github.com/edlynjessica/water-prediction-ml",
      link: "https://vocal-dasik-b18ce8.netlify.app/",
    },
    {
      id: "roadsos",
      name: "RoadSOS",
      shortName: "RoadSOS",
      tagline: "Roadside emergency assistance MVP for IIT Madras Road Safety Hackathon 2026",
      description:
        "Led development and integration of a roadside emergency assistance MVP for the IIT Madras Road Safety Hackathon 2026. Coordinated module development, managed Git-based version control, integrated team contributions, and resolved merge conflicts across a six-member team. Includes map functionality using OpenStreetMap and an emergency assistance workflow.",
      tech: ["HTML", "CSS", "JavaScript", "OpenStreetMap", "Overpass API", "Git", "GitHub Pages"],
      metrics: "Map functionality & emergency assistance workflow integration",
      status: "Hackathon MVP",
      repoName: "RoadSafetyHack-2026",
      github: "https://github.com/edlynjessica/RoadSafetyHack-2026",
      link: null, // No live demo link
    },
  ],

  // Professional Experience (Reverse Chronological Order)
  experience: [
    {
      company: "LoyalMed Devices Pvt. Ltd.",
      role: "Research and Development Intern",
      duration: "June 2026",
      location: "Chennai, India (On-site)",
      summary: "R&D internship focused on functional testing and healthcare software workflow validation.",
      bullets: [
        "Performed functional testing of healthcare software workflows, identified defects, and validated functionality to support software quality.",
        "Collaborated with developers to document issues and suggest UI/UX improvements based on workflow analysis.",
      ],
    },
    {
      company: "Xebia",
      role: "Tech Intern",
      duration: "November 2025 – December 2025",
      location: "Chennai, India (On-site)",
      summary: "Tech internship developing application modules and relational database entities using OutSystems in an Agile team.",
      bullets: [
        "Developed application modules, UI workflows, CRUD functionality, and relational database entities using OutSystems.",
        "Collaborated with a three-member team in an Agile environment to implement features, validate functionality, debug issues, and deliver software increments.",
      ],
    },
  ],

  // Competitive Programming & Achievements
  competitiveProgramming: {
    totalSolved: "1300+",

    // Ratings showcase — AtCoder → Codeforces → CodeChef (ordered)
    ratings: [
      {
        platform: "AtCoder",
        value: "Rank 450",
        note: "Brown rating",
        url: "https://atcoder.jp/users/edlyn_jessica",
      },
      {
        platform: "Codeforces",
        value: "1035",
        note: "Maximum rating",
        url: "https://codeforces.com/profile/edlyn_jessica",
      },
      {
        platform: "CodeChef",
        value: "2★",
        note: "Rated competitor",
        url: "https://www.codechef.com/users/edlyn_jessica",
      },
    ],

    // LeetCode — separate profile card + heatmap area
    leetcode: {
      url: "https://leetcode.com/u/edlyn_jessica09/",
      solved: "700+",
      detail: "Data structures, algorithms & contest problems",
    },

    // Problem counts — LeetCode → CodeChef → GeeksforGeeks (platforms with supplied counts only)
    platforms: [
      {
        name: "LeetCode",
        solved: "700+",
        detail: "Data structures, algorithms & contest problems",
        url: "https://leetcode.com/u/edlyn_jessica09/",
      },
      {
        name: "CodeChef",
        solved: "450+",
        detail: "2★ rated — long challenges & short contests",
        url: "https://www.codechef.com/users/edlyn_jessica",
      },
      {
        name: "GeeksforGeeks",
        solved: "200+",
        detail: "Practice problems across core CS topics",
        url: "https://www.geeksforgeeks.org/profile/edlynjesb2tz",
      },
    ],

    contests: [
      {
        title: "MetaCode — Finalist",
        event: "COMPOSIT 31st Edition, IIT Kharagpur",
        highlight: "Finalist",
      },
      {
        title: "Code Her '26 — 2nd Place",
        event: "Code Her '26 Coding Competition",
        highlight: "2nd Place",
      },
    ],
  },

  // Technical Certifications (Verified)
  certifications: [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      year: "2026",
      distinction: null,
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      distinction: null,
    },
    {
      title: "Fundamental Algorithms: Design and Analysis",
      issuer: "NPTEL — IIT Kharagpur",
      year: "2026",
      distinction: "Elite Silver · Top 2%",
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL — IIT Madras",
      year: "2025",
      distinction: "Elite Silver",
    },
  ],
};

