import React from 'react';

export default function Achievements() {
  return (
    <>
      <section id="achievements">
  <div className="circuit-bg flipped-x">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-achievements" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.8" fill="rgba(6, 182, 212, 0.22)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-achievements)" />
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
  <div className="s-head reveal"><span className="s-num"></span><h2 className="s-title">Achievements</h2><div className="s-line"></div></div>
  <div className="ach-grid">
    <div className="ach-card top-ach">
      <div className="ach-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
      </div>
      <div className="ach-t">Hackathon Winner</div>
      <div className="ach-d">1st Place in national-level hackathons (BPUT, NSRIT, Avishkaar 2024) — built rapid AI prototypes under 24-hour deadlines.</div>
    </div>
    
    <div className="ach-card top-ach">
      <div className="ach-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      </div>
      <div className="ach-t">Dual Internships</div>
      <div className="ach-d">Managed two parallel technical internships delivering production-grade software and automation systems while studying full-time.</div>
    </div>

    <div className="ach-card">
      <div className="ach-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L2.5 9l5.4 3.1L4 16l-2.7-.9-.8.8 3.5 3.5.8-.8-.9-2.7 3.9-3.9 3.1 5.4 2.2-1.2c.4-.2.7-.6.6-1.1Z"></path></svg>
      </div>
      <div className="ach-t">Drone from Scratch</div>
      <div className="ach-d">Built a fully custom autonomous drone from the ground up — handled mechanical design, C++ firmware, and Python AI vision.</div>
    </div>

    <div className="ach-card">
      <div className="ach-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </div>
      <div className="ach-t">Coding Champion</div>
      <div className="ach-d">Placed in the top <span className="ach-num" data-target="5">0</span>% of competitive coding challenges, demonstrating strong DSA and algorithmic problem-solving.</div>
    </div>

    <div className="ach-card">
      <div className="ach-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 15v5s3-1.5 5 2c0 0-1.5-3 2-5"></path><path d="M12 15v5s-3-1.5-5 2c0 0 1.5-3-2-5"></path><circle cx="12" cy="9" r="6"></circle></svg>
      </div>
      <div className="ach-t">NPTEL Certified</div>
      <div className="ach-d">Earned distinguished NPTEL certifications in Cybersecurity &amp; Privacy and Blockchain &amp; Its Applications.</div>
    </div>
  </div>
</section>
    </>
  );
}
