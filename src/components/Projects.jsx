import React from 'react';

export default function Projects() {
  return (
    <>
      <section id="projects">
  <div className="circuit-bg flipped-both">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-projects" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.8" fill="rgba(6, 182, 212, 0.22)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-projects)" />
      <path d="M -50 150 L 250 150 L 320 220 L 680 220 L 750 150 L 1050 150" stroke="rgba(6, 182, 212, 0.16)" strokeWidth="2.5" />
      <path d="M -50 450 L 350 450 L 420 380 L 580 380 L 650 450 L 1050 450" stroke="rgba(6, 182, 212, 0.16)" strokeWidth="2.5" />
      <path d="M 150 -50 L 150 250 L 220 320 L 220 650" stroke="rgba(6, 182, 212, 0.14)" strokeWidth="2.0" />
      <path d="M 850 -50 L 850 250 L 780 320 L 780 650" stroke="rgba(6, 182, 212, 0.14)" strokeWidth="2.0" />
      <path d="M -50 550 L 200 300 L 400 300 L 500 200 L 500 -50" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1.8" />
      <path d="M 1050 50 L 800 300 L 600 300 L 500 400 L 500 650" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1.8" />
      <circle cx="250" cy="150" r="5" fill="#06B6D4" className="node" style={{'filter': 'drop-shadow(0 0 6px #22D3EE)', 'animationDelay': '0s'}} />
      <circle cx="350" cy="450" r="5" fill="#22D3EE" className="node" style={{'filter': 'drop-shadow(0 0 6px #06B6D4)', 'animationDelay': '-1.5s'}} />
      <circle cx="850" cy="250" r="5" fill="#06B6D4" className="node" style={{'filter': 'drop-shadow(0 0 6px #22D3EE)', 'animationDelay': '-0.7s'}} />
      <circle cx="200" cy="300" r="4.5" fill="#22D3EE" className="node" style={{'filter': 'drop-shadow(0 0 5px #06B6D4)', 'animationDelay': '-2.2s'}} />
      <circle cx="800" cy="300" r="4.5" fill="#06B6D4" className="node" style={{'filter': 'drop-shadow(0 0 5px #22D3EE)', 'animationDelay': '-1.1s'}} />
      <circle r="5.5" fill="#06B6D4" style={{'filter': 'drop-shadow(0 0 10px #22D3EE)'}}>
        <animateMotion dur="7s" repeatCount="indefinite" path="M -50 150 L 250 150 L 320 220 L 680 220 L 750 150 L 1050 150" />
      </circle>
      <circle r="5.5" fill="#22D3EE" style={{'filter': 'drop-shadow(0 0 10px #06B6D4)'}}>
        <animateMotion dur="9s" begin="2.5s" repeatCount="indefinite" path="M 1050 450 L 650 450 L 580 380 L 420 380 L 350 450 L -50 450" />
      </circle>
      <circle r="4.5" fill="#06B6D4" style={{'filter': 'drop-shadow(0 0 8px #22D3EE)'}}>
        <animateMotion dur="8s" begin="1s" repeatCount="indefinite" path="M 150 -50 L 150 250 L 220 320 L 220 650" />
      </circle>
      <circle r="4.5" fill="#22D3EE" style={{'filter': 'drop-shadow(0 0 8px #06B6D4)'}}>
        <animateMotion dur="10s" begin="4s" repeatCount="indefinite" path="M 850 -50 L 850 250 L 780 320 L 780 650" />
      </circle>
      <circle r="5.0" fill="#22D3EE" style={{'filter': 'drop-shadow(0 0 9px #06B6D4)'}}>
        <animateMotion dur="8.5s" begin="0.5s" repeatCount="indefinite" path="M -50 550 L 200 300 L 400 300 L 500 200 L 500 -50" />
      </circle>
      <circle r="5.0" fill="#06B6D4" style={{'filter': 'drop-shadow(0 0 9px #22D3EE)'}}>
        <animateMotion dur="9.5s" begin="3.5s" repeatCount="indefinite" path="M 1050 50 L 800 300 L 600 300 L 500 400 L 500 650" />
      </circle>
    </svg>
  </div>
  <div className="s-head reveal"><span className="s-num"></span><h2 className="s-title">Projects</h2><div className="s-line"></div></div>
  <div className="pr-grid">

      <div className="pr-card feat" style={{top: '110px', zIndex: 1}}>
        <div>
          <div className="feat-badge">★ Featured</div>
          <div className="pr-num">Project 01</div>
          <h3 className="pr-title">Supply Chain Transparency<br />via Blockchain</h3>
          <p className="pr-desc">Decentralized platform for supply chain transparency. Immutably records transactions and shipments on-chain for real-time provenance tracking and anti-counterfeiting.</p>
          <div className="pr-stack"><span className="st-tag">Blockchain</span><span className="st-tag">Smart Contracts</span><span className="st-tag">JavaScript</span><span className="st-tag">Node.js</span><span className="st-tag">React.js</span><span className="st-tag">Web3</span></div>
          <div className="pr-actions">
            <a href="https://github.com/Prabhu-45/Agrichain" target="_blank" className="pr-link">View on GitHub →</a>
            <a href="#" className="pr-link">Live Demo ↗</a>
          </div>
        </div>
        <div className="pr-visual">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1" style={{width: '60%', height: '60%', opacity: 0.7}}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
            <circle cx="12" cy="12" r="2" fill="#38bdf8"></circle>
            <circle cx="12" cy="4" r="1.5" fill="#38bdf8"></circle>
            <circle cx="5" cy="16" r="1.5" fill="#38bdf8"></circle>
            <circle cx="19" cy="16" r="1.5" fill="#38bdf8"></circle>
          </svg>
        </div>
      </div>

      <div className="pr-card feat" style={{top: '135px', zIndex: 2}}>
        <div>
          <div className="feat-badge">★ Featured</div>
          <div className="pr-num">Project 02</div>
          <h3 className="pr-title">Gen-AI Resume Builder &amp; Shortlisting Platform</h3>
          <p className="pr-desc">Generative AI platform for crafting ATS-optimized resumes and auto-shortlisting candidates. Features intelligent suggestions and role-based matching.</p>
          <div className="pr-stack"><span className="st-tag">Gen AI</span><span className="st-tag">React.js</span><span className="st-tag">Node.js</span><span className="st-tag">Express.js</span><span className="st-tag">NLP APIs</span></div>
          <div className="pr-actions">
            <a href="https://github.com/Prabhu-45/Prep-Ai" target="_blank" className="pr-link">View on GitHub →</a>
            <a href="#" className="pr-link">Live Demo ↗</a>
          </div>
        </div>
        <div className="pr-visual"><img src="resume_builder.png" alt="Gen-AI Resume Builder Visual"/></div>
      </div>

      <div className="pr-card feat" style={{top: '160px', zIndex: 3}}>
        <div>
          <div className="pr-num">Project 03</div>
          <h3 className="pr-title">Autonomous Drone Navigation System</h3>
          <p className="pr-desc">Custom UAV with integrated flight controller firmware and Python computer vision for real-time obstacle detection and autonomous GPS waypoint navigation.</p>
          <div className="pr-stack"><span className="st-tag">Python</span><span className="st-tag">OpenCV</span><span className="st-tag">Arduino</span><span className="st-tag">Flight Controller APIs</span><span className="st-tag">GPS</span></div>
          <div className="pr-actions">
            <a href="https://github.com/Prabhu-45/Drone-Project" target="_blank" className="pr-link">View on GitHub →</a>
            <a href="#" className="pr-link">Live Demo ↗</a>
          </div>
        </div>
        <div className="pr-visual"><img src="drone_navigation.png" alt="Autonomous Drone Navigation Visual"/></div>
      </div>

      <div className="pr-card feat" style={{top: '185px', zIndex: 4}}>
        <div>
          <div className="pr-num">Project 04</div>
          <h3 className="pr-title">Smart Solar Efficiency Dashboard</h3>
          <p className="pr-desc">Real-time full-stack dashboard for remote monitoring of solar panels, enabling efficiency optimization and automated hardware control via live sensor data.</p>
          <div className="pr-stack"><span className="st-tag">React.js</span><span className="st-tag">Python</span><span className="st-tag">Flask</span><span className="st-tag">REST APIs</span><span className="st-tag">WebSockets</span></div>
          <div className="pr-actions">
            <a href="https://github.com/Prabhu-45/AI-Based-Solar-Pannel-Efficiency-" target="_blank" className="pr-link">View on GitHub →</a>
            <a href="#" className="pr-link">Live Demo ↗</a>
          </div>
        </div>
        <div className="pr-visual"><img src="solar_dashboard.png" alt="Smart Solar Efficiency Visual"/></div>
      </div>

      <div className="pr-card feat" style={{top: '210px', zIndex: 5}}>
        <div>
          <div className="pr-num">Project 05</div>
          <h3 className="pr-title">AI-Powered Educational Chatbot</h3>
          <p className="pr-desc">NLP-powered conversational AI for automated student query resolution. Deployed as a highly scalable web app with sub-second latency and concurrent session support.</p>
          <div className="pr-stack"><span className="st-tag">JavaScript</span><span className="st-tag">Node.js</span><span className="st-tag">Express.js</span><span className="st-tag">NLP APIs</span><span className="st-tag">REST API</span></div>
          <div className="pr-actions">
            <a href="https://github.com/Prabhu-45/Ai-Cybersecurity-Privacy" target="_blank" className="pr-link">View on GitHub →</a>
            <a href="#" className="pr-link">Live Demo ↗</a>
          </div>
        </div>
        <div className="pr-visual"><img src="edu_chatbot.png" alt="AI-Powered Educational Chatbot Visual"/></div>
      </div>

      <div className="pr-card feat" style={{top: '235px', zIndex: 6}}>
        <div>
          <div className="feat-badge">★ Featured</div>
          <div className="pr-num">Project 06</div>
          <h3 className="pr-title">Quiz Master — Secure Assessment Platform</h3>
          <p className="pr-desc">Secure assessment platform built with a Python backend and MERN stack. Features dynamic exam authoring for admins and secure testing with instant results.</p>
          <div className="pr-stack">
            <span className="st-tag">Python</span>
            <span className="st-tag">React.js</span>
            <span className="st-tag">Node.js</span>
            <span className="st-tag">MongoDB</span>
            <span className="st-tag">Express.js</span>
          </div>
          <div className="pr-actions">
            <a href="https://github.com/Prabhu-45/Quiz-Master-main" target="_blank" className="pr-link">View on GitHub →</a>
            <a href="#" className="pr-link">Live Demo ↗</a>
          </div>
        </div>
        <div className="pr-visual"><img src="quiz_master.png" alt="Quiz Master Assessment Visual"/></div>
      </div>

  </div>
</section>
    </>
  );
}
