import React from 'react';
import { BrainCircuit, Plane, Layers, Network } from 'lucide-react';

export default function Services() {
  return (
    <>
      <section id="services">
  <div className="services-circuit-bg">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.8" fill="rgba(6, 182, 212, 0.22)" />
        </pattern>
      </defs>
      {/*  Background grid  */}
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/*  Circuit Paths  */}
      <path d="M -50 150 L 250 150 L 320 220 L 680 220 L 750 150 L 1050 150" stroke="rgba(6, 182, 212, 0.16)" strokeWidth="2.5" />
      <path d="M -50 450 L 350 450 L 420 380 L 580 380 L 650 450 L 1050 450" stroke="rgba(6, 182, 212, 0.16)" strokeWidth="2.5" />
      <path d="M 150 -50 L 150 250 L 220 320 L 220 650" stroke="rgba(6, 182, 212, 0.14)" strokeWidth="2.0" />
      <path d="M 850 -50 L 850 250 L 780 320 L 780 650" stroke="rgba(6, 182, 212, 0.14)" strokeWidth="2.0" />
      <path d="M -50 550 L 200 300 L 400 300 L 500 200 L 500 -50" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1.8" />
      <path d="M 1050 50 L 800 300 L 600 300 L 500 400 L 500 650" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1.8" />

      {/*  Glowing Connection Junction Nodes  */}
      <circle cx="250" cy="150" r="5" fill="#06B6D4" className="node" style={{'filter': 'drop-shadow(0 0 6px #22D3EE)', 'animationDelay': '0s'}} />
      <circle cx="350" cy="450" r="5" fill="#22D3EE" className="node" style={{'filter': 'drop-shadow(0 0 6px #06B6D4)', 'animationDelay': '-1.5s'}} />
      <circle cx="850" cy="250" r="5" fill="#06B6D4" className="node" style={{'filter': 'drop-shadow(0 0 6px #22D3EE)', 'animationDelay': '-0.7s'}} />
      <circle cx="200" cy="300" r="4.5" fill="#22D3EE" className="node" style={{'filter': 'drop-shadow(0 0 5px #06B6D4)', 'animationDelay': '-2.2s'}} />
      <circle cx="800" cy="300" r="4.5" fill="#06B6D4" className="node" style={{'filter': 'drop-shadow(0 0 5px #22D3EE)', 'animationDelay': '-1.1s'}} />

      {/*  Glowing Pulses animating along the paths (Increased size & shadow)  */}
      {/*  Pulse 1  */}
      <circle r="5.5" fill="#06B6D4" style={{'filter': 'drop-shadow(0 0 10px #22D3EE)'}}>
        <animateMotion dur="7s" repeatCount="indefinite" path="M -50 150 L 250 150 L 320 220 L 680 220 L 750 150 L 1050 150" />
      </circle>
      {/*  Pulse 2  */}
      <circle r="5.5" fill="#22D3EE" style={{'filter': 'drop-shadow(0 0 10px #06B6D4)'}}>
        <animateMotion dur="9s" begin="2.5s" repeatCount="indefinite" path="M 1050 450 L 650 450 L 580 380 L 420 380 L 350 450 L -50 450" />
      </circle>
      {/*  Pulse 3 (Vertical)  */}
      <circle r="4.5" fill="#06B6D4" style={{'filter': 'drop-shadow(0 0 8px #22D3EE)'}}>
        <animateMotion dur="8s" begin="1s" repeatCount="indefinite" path="M 150 -50 L 150 250 L 220 320 L 220 650" />
      </circle>
      {/*  Pulse 4 (Vertical)  */}
      <circle r="4.5" fill="#22D3EE" style={{'filter': 'drop-shadow(0 0 8px #06B6D4)'}}>
        <animateMotion dur="10s" begin="4s" repeatCount="indefinite" path="M 850 -50 L 850 250 L 780 320 L 780 650" />
      </circle>
      {/*  Pulse 5 (Diagonal Bottom-Left to Top-Center)  */}
      <circle r="5.0" fill="#22D3EE" style={{'filter': 'drop-shadow(0 0 9px #06B6D4)'}}>
        <animateMotion dur="8.5s" begin="0.5s" repeatCount="indefinite" path="M -50 550 L 200 300 L 400 300 L 500 200 L 500 -50" />
      </circle>
      {/*  Pulse 6 (Diagonal Top-Right to Bottom-Center)  */}
      <circle r="5.0" fill="#06B6D4" style={{'filter': 'drop-shadow(0 0 9px #22D3EE)'}}>
        <animateMotion dur="9.5s" begin="3.5s" repeatCount="indefinite" path="M 1050 50 L 800 300 L 600 300 L 500 400 L 500 650" />
      </circle>
    </svg>
  </div>
  <div className="s-head reveal"><span className="s-num"></span><h2 className="s-title">What I Build</h2><div className="s-line"></div></div>
  <div className="sv-grid">
    <div className="sv-card">
      <div className="sv-num">01</div>
      <div className="sv-icon"><BrainCircuit size={32} color="#06B6D4" /></div>
      <h3 className="sv-title">AI &amp; Intelligent Systems</h3>
      <p className="sv-desc">Engineering neural networks, conversational AI, and predictive LLM pipelines for real-world problems.</p>
    </div>
    <div className="sv-card">
      <div className="sv-num">02</div>
      <div className="sv-icon"><Plane size={32} color="#06B6D4" /></div>
      <h3 className="sv-title">Computer Vision &amp; UAV</h3>
      <p className="sv-desc">Integrating real-time object tracking and ArduPilot firmware to build autonomous drone software.</p>
    </div>
    <div className="sv-card">
      <div className="sv-num">03</div>
      <div className="sv-icon"><Layers size={32} color="#06B6D4" /></div>
      <h3 className="sv-title">Full-Stack Architecture</h3>
      <p className="sv-desc">Building responsive React frontends and Node APIs designed for lightning-fast speeds.</p>
    </div>
    <div className="sv-card">
      <div className="sv-num">04</div>
      <div className="sv-icon"><Network size={32} color="#06B6D4" /></div>
      <h3 className="sv-title">Blockchain &amp; Web3</h3>
      <p className="sv-desc">Designing smart contracts and dApp systems to enable end-to-end transparency and tracking.</p>
    </div>
  </div>
</section>
    </>
  );
}
