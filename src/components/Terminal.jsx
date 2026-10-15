import React, { useState, useEffect, useRef } from 'react';

/**
 * Interactive Terminal Centerpiece for Edlyn Jessica's Portfolio
 * Features:
 * - Authentic Unix/Zsh CLI prompt: ed@portfolio:~$
 * - Blinking block cursor
 * - Command history navigation via Arrow Up / Arrow Down
 * - Mobile-friendly quick action pills
 * - Rich structured output for: help, whoami, about, skills, projects,
 *   experience, achievements, education, contact, cat resume, clear, sudo
 * - Scrollable terminal window with realistic window controls
 */
export default function Terminal({ profile, onNavigateSection }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [isCopied, setIsCopied] = useState(false);
  const terminalEndRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize with welcome banner
  useEffect(() => {
    const welcomeEntry = {
      id: 'init-banner',
      type: 'system',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: (
        <div className="term-banner">
          <div className="term-banner-header">
            <span className="term-green">●</span> SYSTEM READY // EDLYN JESSICA OS [v2.4.0-prod]
          </div>
          <div className="term-banner-meta">
            <span>[HOST] edlyn-workstation</span>
            <span>[KERNEL] Linux 6.8.0-backend</span>
            <span>[ROLE] {profile.title}</span>
            <span>[STATUS] Available</span>
          </div>
          <p className="term-banner-hint">
            Type <span className="term-kbd">help</span> to list commands, or click any quick action below.
          </p>
        </div>
      ),
    };
    setHistory([welcomeEntry]);
  }, [profile]);

  // Auto-scroll terminal body (not the page) to bottom on output change
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when clicking anywhere in terminal body
  const handleTerminalClick = (e) => {
    // Avoid stealing focus if user is selecting text
    if (window.getSelection()?.toString().length === 0) {
      // Use preventScroll to avoid jumping the page when focusing the input
+      inputRef.current?.focus({ preventScroll: true });
    }
  };

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ').toLowerCase();

    // If 'clear', reset history
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      setCmdIndex(-1);
      return;
    }

    let outputElement = null;

    switch (cmd) {
      case 'help':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Available Shell Commands:</div>
            <div className="term-help-grid">
              <div><span className="term-cmd">whoami</span> / <span className="term-cmd">about</span></div>
              <div className="term-desc">Display developer profile, degree, and engineering focus</div>
              
              <div><span className="term-cmd">skills</span></div>
              <div className="term-desc">List backend, AI/ML, and system engineering capabilities</div>
              
              <div><span className="term-cmd">projects</span></div>
              <div className="term-desc">Inspect featured machine learning & API projects</div>
              
              <div><span className="term-cmd">experience</span></div>
              <div className="term-desc">Review engineering roles at Xebia and LoyalMed</div>
              
              <div><span className="term-cmd">education</span></div>
              <div className="term-desc">View B.E. Computer Science degree & CGPA details</div>
              
              <div><span className="term-cmd">achievements</span></div>
              <div className="term-desc">List academic honors and algorithmic milestones</div>
              
              <div><span className="term-cmd">contact</span></div>
              <div className="term-desc">Display verified communication channels (Email, GitHub, LinkedIn)</div>
              
              <div><span className="term-cmd">cat resume</span></div>
              <div className="term-desc">Inspect resume summary and availability</div>
              
              <div><span className="term-cmd">clear</span></div>
              <div className="term-desc">Clear current terminal buffer</div>
            </div>
            <div className="term-tip">
              Tip: You can also click the quick buttons below or scroll down to explore visual sections.
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        outputElement = (
          <div className="term-output-block">
            <div className="term-card">
              <div className="term-card-header">
                <span className="term-accent-bold">{profile.name}</span>
                <span className="term-badge">{profile.education.cgpa} CGPA</span>
              </div>
              <div className="term-title-text">{profile.title}</div>
              <p className="term-body-text">{profile.bio}</p>
              <div className="term-meta-row">
                <span className="term-label">Location:</span> {profile.location} | <span className="term-label">Status:</span> {profile.status}
              </div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Technical Skills:</div>
            <div className="term-skills-list">
              <div className="term-skill-cat">
                <span className="term-cat-label">[Languages]</span>
                <span className="term-pill">Python</span>
                <span className="term-pill">Java</span>
                <span className="term-pill">SQL</span>
              </div>
              <div className="term-skill-cat">
                <span className="term-cat-label">[Backend &amp; Data]</span>
                <span className="term-pill">FastAPI</span>
                <span className="term-pill">REST APIs</span>
                <span className="term-pill">MySQL</span>
                <span className="term-pill">SQLite</span>
                <span className="term-pill">PostgreSQL</span>
              </div>
              <div className="term-skill-cat">
                <span className="term-cat-label">[Applied AI &amp; ML]</span>
                <span className="term-pill">Scikit-learn</span>
                <span className="term-pill">Pandas &amp; NumPy</span>
                <span className="term-pill">LangChain</span>
                <span className="term-pill">RAG</span>
                <span className="term-pill">ChromaDB</span>
              </div>
              <div className="term-skill-cat">
                <span className="term-cat-label">[Tools &amp; Platforms]</span>
                <span className="term-pill">Git &amp; GitHub</span>
                <span className="term-pill">Postman</span>
                <span className="term-pill">Streamlit</span>
                <span className="term-pill">React</span>
                <span className="term-pill">OutSystems</span>
              </div>
              <div className="term-skill-cat">
                <span className="term-cat-label">[DevOps &amp; Deployment]</span>
                <span className="term-pill">Linux &amp; Bash</span>
                <span className="term-pill">Docker</span>
                <span className="term-pill">Render</span>
                <span className="term-pill">Netlify</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Featured Production & ML Projects:</div>
            <div className="term-projects-list">
              {profile.projects.map((proj, idx) => (
                <div key={proj.id || idx} className="term-proj-item">
                  <div className="term-proj-head">
                    <span className="term-proj-num">0{idx + 1}.</span>
                    <strong className="term-proj-name">{proj.name}</strong>
                    <span className="term-proj-status">[{proj.status}]</span>
                  </div>
                  <div className="term-proj-desc">{proj.tagline}</div>
                  <div className="term-proj-metrics">Metric: {proj.metrics}</div>
                  <div className="term-proj-tech">
                    {proj.tech.map((t) => (
                      <span key={t} className="term-tag">{t}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '6px', fontSize: '11px', display: 'flex', gap: '10px' }}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" className="term-link">
                        GitHub ↗
                      </a>
                    )}
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="term-link">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="term-tip">Scroll down to the Projects section for in-depth architecture breakdowns.</div>
          </div>
        );
        break;

      case 'experience':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Engineering Experience:</div>
            {profile.experience.map((exp) => (
              <div key={exp.company} className="term-exp-item">
                <div className="term-exp-head">
                  <span className="term-exp-role">{exp.role}</span>
                  <span className="term-exp-company">@ {exp.company}</span>
                  <span className="term-exp-time">({exp.duration})</span>
                </div>
                <div className="term-exp-summary">{exp.summary}</div>
                <ul className="term-bullet-list">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Academic Credentials:</div>
            <div className="term-card">
              <div className="term-card-header">
                <strong>{profile.education.degree}</strong>
                <span className="term-badge">CGPA {profile.education.cgpa}</span>
              </div>
              <p className="term-body-text">{profile.education.honors}</p>
              <div className="term-section-subtitle">Core Coursework:</div>
              <div className="term-tag-wrap">
                {profile.education.coreCoursework.map((c) => (
                  <span key={c} className="term-pill">{c}</span>
                ))}
              </div>
            </div>
          </div>
        );
        break;

      case 'achievements':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Key Engineering & Academic Milestones:</div>
            <ul className="term-bullet-list">
              {profile.achievements.map((item, i) => (
                <li key={i}>
                  <strong className="term-accent">{item.title}</strong> — {item.desc}
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case 'contact':
        outputElement = (
          <div className="term-output-block">
            <div className="term-section-title">Verified Contact Channels:</div>
            <div className="term-contact-box">
              <div><span className="term-label">Email:</span> <a href={`mailto:${profile.contact.email}`} className="term-link">{profile.contact.email}</a></div>
              <div><span className="term-label">GitHub:</span> <a href={profile.contact.github} target="_blank" rel="noreferrer" className="term-link">{profile.contact.github}</a></div>
              <div><span className="term-label">LinkedIn:</span> <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="term-link">{profile.contact.linkedin}</a></div>
              <div><span className="term-label">Status:</span> <span className="term-green">{profile.status}</span></div>
            </div>
          </div>
        );
        break;

      case 'cat':
        if (args === 'resume' || args === 'resume.pdf' || args === 'resume.txt') {
          outputElement = (
            <div className="term-output-block">
              <div className="term-section-title">Resume Summary — {profile.name}</div>
              <div className="term-resume-preview">
                <pre>{`============================================================
${profile.name} | ${profile.title}
Email: ${profile.contact.email} | Location: ${profile.location}
Degree: ${profile.education.degree} (CGPA: ${profile.education.cgpa})
Key Stack: Python, Java, SQL, FastAPI, REST APIs, Scikit-learn, LangChain, RAG
Roles: Tech Intern @ Xebia | R&D Intern @ LoyalMed Devices
============================================================`}</pre>
                <div className="term-tip">
                  {profile.contact.resumeAvailable ? (
                    <a href="#contact" className="term-link">Download Full PDF Resume</a>
                  ) : (
                    <span>Direct resume copy available upon request via <a href={`mailto:${profile.contact.email}`} className="term-link">{profile.contact.email}</a>.</span>
                  )}
                </div>
              </div>
            </div>
          );
        } else {
          outputElement = (
            <div className="term-error">
              cat: {args || 'missing argument'}: No such file. Try <span className="term-kbd">cat resume</span>
            </div>
          );
        }
        break;

      case 'sudo':
        outputElement = (
          <div className="term-output-block">
            <div className="term-warn">
              [SECURITY] Guest session elevated to guest-root. No arbitrary system changes permitted on production portfolio.
            </div>
          </div>
        );
        break;

      case 'date':
        outputElement = (
          <div className="term-output-block">
            <div>Current system time: {new Date().toUTCString()}</div>
          </div>
        );
        break;

      default:
        outputElement = (
          <div className="term-error">
            zsh: command not found: <span className="term-kbd">{raw}</span>.
            <div className="term-tip">
              Type <span className="term-cmd" onClick={() => executeCommand('help')} style={{ cursor: 'pointer' }}>help</span> to view all available commands.
            </div>
          </div>
        );
    }

    const newEntry = {
      id: Date.now() + Math.random(),
      cmd: raw,
      type: 'command',
      output: outputElement,
    };

    setHistory((prev) => [...prev, newEntry]);
    setInput('');
    setCmdIndex(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleKeyDown = (e) => {
    // Command history navigation
    const commandList = history.filter((h) => h.type === 'command').map((h) => h.cmd);

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIdx = Math.min(cmdIndex + 1, commandList.length - 1);
      setCmdIndex(nextIdx);
      setInput(commandList[commandList.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex <= 0) {
        setCmdIndex(-1);
        setInput('');
      } else {
        const nextIdx = cmdIndex - 1;
        setCmdIndex(nextIdx);
        setInput(commandList[commandList.length - 1 - nextIdx] || '');
      }
    }
  };

  const handleCopyHistory = () => {
    const text = history
      .map((h) => (h.cmd ? `$ ${h.cmd}` : ''))
      .filter(Boolean)
      .join('\n');
    navigator.clipboard.writeText(text || 'ed@portfolio:~$ help');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const quickActions = [
    { label: 'help', cmd: 'help' },
    { label: 'whoami', cmd: 'whoami' },
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'experience', cmd: 'experience' },
    { label: 'education', cmd: 'education' },
    { label: 'contact', cmd: 'contact' },
    { label: 'clear', cmd: 'clear' },
  ];

  return (
    <div className="terminal-container" onClick={handleTerminalClick}>
      {/* Terminal Top Window Bar */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="dot dot-close" title="Close buffer" onClick={() => executeCommand('clear')}></span>
          <span className="dot dot-min" title="Minimize"></span>
          <span className="dot dot-max" title="Maximize"></span>
        </div>
        <div className="terminal-title">
          <span className="terminal-icon">⚡</span> ed@portfolio: ~/workspace (zsh)
        </div>
        <div className="terminal-actions">
          <button
            type="button"
            className="term-action-btn"
            onClick={handleCopyHistory}
            title="Copy command history"
          >
            {isCopied ? 'Copied ✓' : 'Copy'}
          </button>
          <button
            type="button"
            className="term-action-btn"
            onClick={() => executeCommand('clear')}
            title="Clear terminal buffer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="terminal-body" ref={terminalBodyRef} tabIndex={0} aria-label="Interactive terminal buffer">
        {history.map((entry) => (
          <div key={entry.id} className="terminal-row">
            {entry.type === 'system' ? (
              entry.content
            ) : (
              <>
                <div className="terminal-prompt-line">
                  <span className="term-user">ed@portfolio</span>
                  <span className="term-colon">:</span>
                  <span className="term-path">~</span>
                  <span className="term-symbol">$</span>
                  <span className="term-executed-cmd">{entry.cmd}</span>
                </div>
                <div className="terminal-output-wrapper">{entry.output}</div>
              </>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <form onSubmit={handleSubmit} className="terminal-active-line">
          <div className="terminal-prompt-label">
            <span className="term-user">ed@portfolio</span>
            <span className="term-colon">:</span>
            <span className="term-path">~</span>
            <span className="term-symbol">$</span>
          </div>
          <div className="terminal-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="terminal-real-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              aria-label="Terminal command prompt"
              placeholder=""
            />
            {/* Styled cursor */}
            <span className="term-cursor" aria-hidden="true"></span>
          </div>
        </form>

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Quick Pill Bar */}
      <div className="terminal-footer">
        <span className="term-footer-label">Quick Run:</span>
        <div className="term-pills-bar">
          {quickActions.map((action) => (
            <button
              key={action.cmd}
              type="button"
              className="term-pill-btn"
              onClick={() => executeCommand(action.cmd)}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

