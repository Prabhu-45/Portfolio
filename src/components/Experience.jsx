import React from 'react';

export default function Experience() {
  return (
    <>
      <section id="experience">
  <div className="circuit-bg">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-experience" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.8" fill="rgba(6, 182, 212, 0.22)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-experience)" />
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
  <div className="s-head reveal"><span className="s-num"></span><h2 className="s-title">Experience</h2><div className="s-line"></div></div>
  <div className="exp-list">
    <div className="ex-item">
      <div className="ex-header">
        <div>
          <div className="ex-role">SEO &amp; Associate Software Developer</div>
          <a href="https://seoczars.com/" target="_blank" className="ex-company-link">
            <div className="ex-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            SEOCZARS IT Services Pvt. Ltd.
            <span className="ex-underline"></span>
          </a>
          <div className="ex-company-loc">— Bhubaneswar, India</div>
        </div>
        <div className="ex-period">Feb 2026 — Jun 2026</div>
      </div>
      <ul className="ex-bullets">
        <li>Engineered technical SEO enhancements and optimized frontend architectures, accelerating page load speeds by 40% and improving Core Web Vitals.</li>
        <li>Developed custom automation utilities and web-scraping scripts using Python, significantly reducing manual data gathering for competitive analysis.</li>
        <li>Implemented programmatic SEO strategies by dynamically generating optimized landing pages, driving a notable 25% increase in targeted organic search traffic.</li>
      </ul>
    </div>
    <div className="ex-item">
      <div className="ex-header">
        <div>
          <div className="ex-role">Software &amp; Automation Engineering Intern</div>
          <a href="#" className="ex-company-link">
            <div className="ex-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            Ridoxy Automation Private Limited
            <span className="ex-underline"></span>
          </a>
          <div className="ex-company-loc">— Bhubaneswar, India</div>
        </div>
        <div className="ex-period">Aug 2025 — Feb 2026</div>
      </div>
      <ul className="ex-bullets">
        <li>Built scalable Python/JavaScript automation frameworks for QA, cutting manual testing by ~30% and speeding deployment cycles.</li>
        <li>Implemented AI-driven decision modules and control algorithms for autonomous robotic platforms, improving response accuracy and reducing field faults.</li>
        <li>Maintained version-controlled codebase, enforced code quality via peer reviews, and produced technical documentation for automation pipelines.</li>
      </ul>
    </div>
    <div className="ex-item">
      <div className="ex-header">
        <div>
          <div className="ex-role">Technology Intern</div>
          <a href="#" className="ex-company-link">
            <div className="ex-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            Nobel Learning PBC
            <span className="ex-underline"></span>
          </a>
          <div className="ex-company-loc">— Remote</div>
        </div>
        <div className="ex-period">Apr 2025 — Jul 2025</div>
      </div>
      <ul className="ex-bullets">
        <li>Engineered scalable JavaScript learning modules impacting thousands of global users, increasing completion and engagement metrics.</li>
        <li>Designed AI-based adaptive content systems leveraging learner analytics and behavioral signals.</li>
        <li>Developed responsive React.js interfaces, debugged production issues, and shipped sprint-based releases in an Agile environment.</li>
      </ul>
    </div>
  </div>
</section>
    </>
  );
}
