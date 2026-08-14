import React from 'react';

export default function About() {
  return (
    <>
      <section id="about">
  <div className="circuit-bg flipped-x">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.8" fill="rgba(6, 182, 212, 0.22)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-about)" />
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
  <div className="s-head reveal"><span className="s-num"></span><h2 className="s-title" style={{ borderLeft: '3px solid #0ea5e9', paddingLeft: '12px' }}>About Me</h2><div className="s-line"></div></div>
  <div className="about-grid">
    <div className="ab-left-col">
      <div className="ab-profile-card">
        <div className="ab-profile-img-wrap">
          <img src="profile_picture.png" alt="Prabhu Prasad Mishra" className="ab-profile-img" />
        </div>
      </div>
      <div className="ab-profile-info">
        <div className="ab-profile-name">Prabhu Prasad Mishra</div>
        <div className="ab-profile-title">AI Engineer &amp; Full-Stack Developer</div>
      </div>
      <div className="badges">
        <span className="bdg">🏆 Hackathon Winner</span>
        <span className="bdg">🚁 UAV &amp; Drone Engineer</span>
        <span className="bdg">⛓ Blockchain Developer</span>
        <span className="bdg">📍 Bhubaneswar, India</span>
        <span className="bdg">🎓 B.Tech — GITA</span>
      </div>
    </div>
    <div className="ab-text">
      <p>I'm a B.Tech student in Computer Science &amp; Information Technology at GITA, Bhubaneswar, with 10+ months of hands-on internship experience across software development, automation engineering, and AI-powered applications.</p>
      <p>I've built and shipped production-grade systems across two parallel internships — automating QA workflows at a robotics startup, reducing manual testing effort by 30%, and deploying JavaScript learning modules to thousands of students globally at an edtech platform.</p>
      <p>My work spans the full stack — from React interfaces and Node.js APIs to Python computer vision pipelines, autonomous drone firmware, and blockchain-backed supply chains. I don't just write code — I build systems that operate in the real world.</p>
    </div>
    <div className="ab-aside d2">
      <div className="ib status-ib"><div className="ib-lbl">Status</div><div className="ib-val" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="status-dot"></div>Open to Opportunities</div><div className="ib-sub">Internships · Full-time · Freelance</div></div>
      <div className="ib"><div className="ib-lbl">Education</div><div className="ib-val">B.Tech — CS &amp; Information Technology</div><div className="ib-sub">GITA, Bhubaneswar · 2023–Present</div></div>
      <div className="ib"><div className="ib-lbl">Experience</div><div className="ib-val">2 Internships · 10+ Months</div><div className="ib-sub">Ridoxy Automation · Nobel Learning PBC</div></div>
      <div className="ib"><div className="ib-lbl">Recognition</div><div className="ib-val">LinkedIn Top Skills Badge</div><div className="ib-sub">AI · Drone Engineering · JavaScript</div></div>
      <div className="ib"><div className="ib-lbl">Contact</div><div className="ib-val" style={{'fontSize': '.8rem'}}>prabhuprasadmishrawork@gmail.com</div><div className="ib-sub">github.com/Prabhu-45</div></div>
    </div>
  </div>
</section>
    </>
  );
}
