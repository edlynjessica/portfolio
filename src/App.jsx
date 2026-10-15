
import React, { useState } from 'react';
import './App.css';
import { profile } from './data';
import Terminal from './components/Terminal';

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const skillCategories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'ai_ml', label: 'Applied AI & ML' },
    { id: 'tools', label: 'DevOps & Tools' },
  ];

  const getFilteredSkills = () => {
    if (activeSkillCategory === 'all') {
      return [
        ...profile.skills.languages.map((s) => ({ ...s, cat: 'Languages' })),
        ...profile.skills.backend.map((s) => ({ ...s, cat: 'Backend & Data' })),
        ...profile.skills.ai_ml.map((s) => ({ ...s, cat: 'Applied AI & ML' })),
        ...profile.skills.tools.map((s) => ({ ...s, cat: 'DevOps & Tools' })),
      ];
    }
    return profile.skills[activeSkillCategory].map((s) => ({
      ...s,
      cat: skillCategories.find((c) => c.id === activeSkillCategory)?.label,
    }));
  };

  return (
    <div className="portfolio-root">
      {/* Background Ambience and Grid */}
      <div className="bg-grid-pattern" aria-hidden="true"></div>
      <div className="bg-radial-glow" aria-hidden="true"></div>

      {/* Global Header / Nav */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#" className="nav-brand">
            <span className="brand-prefix">~/</span>
            <span className="brand-name">{profile.handle}.dev</span>
            <span className="brand-status-dot" title="Available for hire"></span>
          </a>

          <nav className="nav-menu" aria-label="Main navigation">
            <a href="#terminal" className="nav-link"><span className="nav-accent">$</span> terminal</a>
            <a href="#about" className="nav-link">about</a>
            <a href="#skills" className="nav-link">skills</a>
            <a href="#projects" className="nav-link">projects</a>
            <a href="#experience" className="nav-link">experience</a>
            <a href="#achievements" className="nav-link">achievements</a>
            <a href="#contact" className="nav-link">contact</a>
          </nav>

          <div className="nav-actions">
            <a href={`mailto:${profile.contact.email}`} className="nav-btn-contact">
              Let's Connect
            </a>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="hero-intro">
            <div className="hero-status-badge">
              <span className="pulse-indicator"></span>
              <span>{profile.status}</span>
            </div>

            <h1 className="hero-heading">
              Engineering scalable backends &amp; <span className="text-gradient-green">applied intelligence</span>.
            </h1>

            <p className="hero-lead">
              Hi, I'm <strong className="hero-name-highlight">{profile.name}</strong> — a {profile.title} with a <strong>{profile.education.cgpa} CGPA</strong> in Computer Science. I construct low-latency APIs with FastAPI and PostgreSQL, and practical machine learning &amp; RAG systems with Scikit-learn and LangChain.
            </p>

            <div className="hero-cta-group">
              <a href="#terminal" className="btn-primary">
                <span className="btn-icon">⚡</span> Run Terminal Commands
              </a>
              <a href="#projects" className="btn-secondary">
                View Featured Work →
              </a>
              <button type="button" onClick={handleCopyEmail} className="btn-ghost">
                {copiedEmail ? 'Copied ✓' : 'Copy Email'}
              </button>
            </div>

            <div className="hero-quick-specs">
              <div className="spec-item">
                <span className="spec-val">9.19</span>
                <span className="spec-label">B.E. CSE CGPA</span>
              </div>
              <div className="spec-divider">/</div>
              <div className="spec-item">
                <span className="spec-val">Python + Java</span>
                <span className="spec-label">Core Languages</span>
              </div>
              <div className="spec-divider">/</div>
              <div className="spec-item">
                <span className="spec-val">FastAPI + Postgres</span>
                <span className="spec-label">Backend Stack</span>
              </div>
              <div className="spec-divider">/</div>
              <div className="spec-item">
                <span className="spec-val">RAG &amp; Scikit-learn</span>
                <span className="spec-label">Applied AI</span>
              </div>
            </div>
          </div>

          {/* Terminal Centerpiece */}
          <div className="hero-terminal-wrapper" id="terminal">
            <div className="terminal-label-bar">
              <span className="terminal-badge-tag">SIGNATURE FEATURE</span>
              <span className="terminal-badge-desc">Interactive CLI — type commands or click actions below</span>
            </div>
            <Terminal profile={profile} />
          </div>
        </section>

        {/* About & Education Section */}
        <section id="about" className="section-block about-block">
          <div className="section-header">
            <span className="section-subtitle">01 // PROFILE &amp; FOUNDATIONS</span>
            <h2 className="section-title">About &amp; Academic Background</h2>
          </div>

          <div className="about-grid">
            <div className="about-text-card">
              <h3 className="card-heading">Engineering Philosophy</h3>
              <p>
                My work centers on the intersection of <strong>fault-tolerant backend architecture</strong> and <strong>practical artificial intelligence</strong>. Rather than treating ML as an isolated notebook experiment, I focus on integrating predictive models and LLM/RAG pipelines directly into production microservices.
              </p>
              <p>
                Whether designing relational schemas for healthcare records or training regression models to forecast municipal water depletion, I prioritize <em>algorithmic rigor, data integrity, and measurable performance</em>.
              </p>

              <div className="about-metrics-pills">
                <span className="metric-pill">High Concurrency APIs</span>
                <span className="metric-pill">Data Modeling &amp; Normalization</span>
                <span className="metric-pill">RAG &amp; Semantic Retrieval</span>
                <span className="metric-pill">Predictive Modeling</span>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-badge">{profile.education.honors}</div>
              <h3 className="card-heading">{profile.education.degree}</h3>
              <div className="edu-cgpa-display">
                <span className="cgpa-number">9.19</span>
                <span className="cgpa-scale">/ 10.0 Cumulative GPA</span>
              </div>
              
              <div className="edu-coursework-title">Key Core Coursework</div>
              <div className="coursework-tags">
                {profile.education.coreCoursework.map((course) => (
                  <span key={course} className="course-tag">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tech Stack */}
        <section id="skills" className="section-block skills-block">
          <div className="section-header">
            <span className="section-subtitle">02 // TECHNICAL ARSENAL</span>
            <h2 className="section-title">Interactive Tech Stack</h2>
            <p className="section-desc">
              Tools, frameworks, and technologies applied across backend microservices and machine learning systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="skills-filter-tabs">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab ${activeSkillCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {getFilteredSkills().map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-card-top">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level-tag">{skill.level}</span>
                </div>
                <div className="skill-category-label">{skill.cat}</div>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="section-block projects-block">
          <div className="section-header">
            <span className="section-subtitle">03 // PROVEN DELIVERABLES</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              End-to-end applications demonstrating machine learning, backend engineering, and retrieval architectures.
            </p>
          </div>

          <div className="projects-grid">
            {profile.projects.map((project, idx) => (
              <article key={project.id} className="project-card">
                <div className="project-card-header">
                  <span className="project-index">0{idx + 1}</span>
                  <span className="project-status-badge">{project.status}</span>
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-metrics-box">
                  <span className="metrics-label">Core Performance:</span>
                  <span className="metrics-value">{project.metrics}</span>
                </div>

                <div className="project-tech-stack">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="tech-badge">{techItem}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-repo-ref">Module: <code className="repo-code">{project.repoName}</code></span>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-action-link">
                      Live Preview ↗
                    </a>
                  ) : (
                    <span className="project-badge-internal">Verified Repository</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-block experience-block">
          <div className="section-header">
            <span className="section-subtitle">04 // PROFESSIONAL JOURNEY</span>
            <h2 className="section-title">Engineering Experience</h2>
          </div>

          <div className="experience-timeline">
            {profile.experience.map((exp, idx) => (
              <div key={exp.company} className="exp-timeline-item">
                <div className="exp-timeline-marker">
                  <span className="marker-dot"></span>
                  {idx < profile.experience.length - 1 && <span className="marker-line"></span>}
                </div>

                <div className="exp-card">
                  <div className="exp-card-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company-name">@ {exp.company}</span>
                        <span className="exp-location">• {exp.location}</span>
                      </div>
                    </div>
                    <span className="exp-duration-badge">{exp.duration}</span>
                  </div>

                  <p className="exp-summary">{exp.summary}</p>

                  <ul className="exp-bullet-list">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section id="achievements" className="section-block achievements-block">
          <div className="section-header">
            <span className="section-subtitle">05 // MERIT &amp; VALIDATION</span>
            <h2 className="section-title">Achievements &amp; Certifications</h2>
          </div>

          <div className="achievements-cert-grid">
            {/* Achievements Column */}
            <div className="achievements-column">
              <h3 className="sub-column-title">
                <span className="col-icon">🏆</span> Honors &amp; Milestones
              </h3>
              <div className="achievements-list">
                {profile.achievements.map((ach, i) => (
                  <div key={i} className="achievement-card">
                    <span className="ach-category">{ach.category}</span>
                    <h4 className="ach-title">{ach.title}</h4>
                    <p className="ach-desc">{ach.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div className="certifications-column">
              <h3 className="sub-column-title">
                <span className="col-icon">📜</span> Technical Specializations
              </h3>
              <div className="certifications-list">
                {profile.certifications.map((cert, i) => (
                  <div key={i} className="cert-card">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-desc">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-block contact-block">
          <div className="contact-card-terminal">
            <div className="contact-header">
              <span className="contact-prefix">$ contact --initiate</span>
              <span className="contact-status-live">● Accepting Inquiries</span>
            </div>

            <div className="contact-content-grid">
              <div className="contact-left">
                <h2 className="contact-heading">Let's build something robust together.</h2>
                <p className="contact-description">
                  Looking for a backend engineer with solid fundamentals in Python, FastAPI, relational data systems, or applied AI/RAG workflows? Reach out directly.
                </p>

                <div className="contact-detail-items">
                  <div className="contact-row">
                    <span className="contact-label">Email:</span>
                    <a href={`mailto:${profile.contact.email}`} className="contact-link-main">
                      {profile.contact.email}
                    </a>
                    <button type="button" onClick={handleCopyEmail} className="contact-copy-btn">
                      {copiedEmail ? 'Copied ✓' : 'Copy'}
                    </button>
                  </div>

                  <div className="contact-row">
                    <span className="contact-label">Location:</span>
                    <span className="contact-val">{profile.location} (Open to Remote &amp; On-Site)</span>
                  </div>
                </div>

                <div className="contact-social-links">
                  <a href={profile.contact.github} target="_blank" rel="noreferrer" className="social-pill">
                    <span className="social-icon">⌥</span> GitHub Profile ↗
                  </a>
                  <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                    <span className="social-icon">⌘</span> LinkedIn Profile ↗
                  </a>
                  <a href={`mailto:${profile.contact.email}`} className="social-pill email-pill">
                    <span className="social-icon">✉</span> Send Email ↗
                  </a>
                </div>
              </div>

              <div className="contact-cli-snippet">
                <div className="cli-snippet-header">
                  <span>bash — cURL ping</span>
                </div>
                <pre className="cli-code-block">{`# Ping developer endpoint
curl -X POST https://edlyn.dev/api/v1/contact \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender": "Recruiter / Team Lead",
    "role": "Backend / Applied AI Engineer",
    "status": "Ready for Interview"
  }'

# Response: 200 OK
# { "status": "Available", "cgpa": "9.19", "contact": "${profile.contact.email}" }`}</pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-brand">{profile.handle}@portfolio</span>
            <span className="footer-meta">Linux x86_64 // React + Vite // Built with precision</span>
          </div>
          <div className="footer-right">
            <a href="#hero" className="footer-back-to-top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

