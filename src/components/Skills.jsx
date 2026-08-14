import React from 'react';

export default function Skills() {
  return (
    <>
      <section id="skills">
  <div className="circuit-bg flipped-y">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-skills" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.8" fill="rgba(6, 182, 212, 0.22)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-skills)" />
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
  <div className="s-head reveal"><span className="s-num"></span><h2 className="s-title">Skills</h2><div className="s-line"></div></div>
  <div className="sk-grid">
    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
        <div className="sk-name">Languages &amp; Data</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">C</span>
        <span className="sk-tag sk-expert">Java</span>
        <span className="sk-tag sk-expert">Python</span>
        <span className="sk-tag sk-expert">JavaScript</span>
        <span className="sk-tag">TypeScript</span>
        <span className="sk-tag">SCSS</span>
        <span className="sk-tag">MySQL</span>
        <span className="sk-tag">MongoDB</span>
      </div>
    </div>
    
    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></div>
        <div className="sk-name">Frameworks &amp; Backend</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">React.js</span>
        <span className="sk-tag sk-expert">Node.js</span>
        <span className="sk-tag sk-expert">Express.js</span>
        <span className="sk-tag">Next.js</span>
        <span className="sk-tag">Flask</span>
        <span className="sk-tag">REST APIs</span>
        <span className="sk-tag">WebSockets</span>
        <span className="sk-tag">GSAP</span>
        <span className="sk-tag">Three.js</span>
        <span className="sk-tag">Selenium</span>
      </div>
    </div>

    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></div>
        <div className="sk-name">AI &amp; Intelligence</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">Generative AI</span>
        <span className="sk-tag sk-expert">LLMs</span>
        <span className="sk-tag sk-expert">LangChain</span>
        <span className="sk-tag sk-expert">RAG</span>
        <span className="sk-tag">AI Agents</span>
        <span className="sk-tag sk-expert">Computer Vision</span>
        <span className="sk-tag">OpenCV</span>
        <span className="sk-tag">Neural Networks</span>
        <span className="sk-tag">TensorFlow</span>
        <span className="sk-tag">NLP</span>
        <span className="sk-tag">Prompt Engineering</span>
        <span className="sk-tag">Vector Database</span>
        <span className="sk-tag">ChromaDB</span>
        <span className="sk-tag">MLOps</span>
      </div>
    </div>

    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg></div>
        <div className="sk-name">UAV &amp; Hardware</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">Drone Design &amp; Building</span>
        <span className="sk-tag sk-expert">UAV Systems</span>
        <span className="sk-tag sk-expert">Autonomous Navigation</span>
        <span className="sk-tag">Flight Controllers</span>
        <span className="sk-tag">ArduPilot</span>
        <span className="sk-tag">PID Controllers</span>
        <span className="sk-tag">GPS &amp; Waypoints</span>
        <span className="sk-tag">Sensor Fusion</span>
        <span className="sk-tag">Embedded Systems</span>
        <span className="sk-tag">Arduino</span>
      </div>
    </div>

    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>
        <div className="sk-name">Blockchain &amp; Web3</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">Solidity</span>
        <span className="sk-tag sk-expert">Smart Contracts</span>
        <span className="sk-tag">Ethereum</span>
        <span className="sk-tag">Web3.js</span>
        <span className="sk-tag">Ethers.js</span>
        <span className="sk-tag">DApp Architecture</span>
        <span className="sk-tag">Hardhat</span>
        <span className="sk-tag">Decentralized Storage</span>
      </div>
    </div>

    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></div>
        <div className="sk-name">Engineering Practices</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">Git &amp; GitHub</span>
        <span className="sk-tag">Linux</span>
        <span className="sk-tag">OOP</span>
        <span className="sk-tag sk-expert">Agile &amp; Scrum</span>
        <span className="sk-tag sk-expert">CI/CD Pipelines</span>
        <span className="sk-tag sk-expert">QA &amp; Test Automation</span>
        <span className="sk-tag">Code Review</span>
        <span className="sk-tag">Technical Documentation</span>
        <span className="sk-tag">Postman</span>
        <span className="sk-tag">Jira</span>
        <span className="sk-tag">Bug Tracking</span>
      </div>
    </div>

    <div className="sk-card">
      <div className="sk-header">
        <div className="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
        <div className="sk-name">Tools &amp; Platforms</div>
      </div>
      <div className="sk-tags">
        <span className="sk-tag sk-expert">Git</span>
        <span className="sk-tag sk-expert">GitHub</span>
        <span className="sk-tag sk-expert">VS Code</span>
        <span className="sk-tag">Postman</span>
        <span className="sk-tag">Linux</span>
        <span className="sk-tag">Jira</span>
        <span className="sk-tag">Chrome DevTools</span>
        <span className="sk-tag">Vercel</span>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
