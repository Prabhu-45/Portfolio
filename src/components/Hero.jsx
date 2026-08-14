import React from 'react';

export default function Hero() {
  return (
    <>
      <section id="hero">
  <canvas id="hero-canvas" className="hero-canvas"></canvas>
  <div className="hero-grid"></div>
  <div className="hero-glow"></div>
  <div className="hero-glow2"></div>
  <div className="hero-tag"></div>
  <h1 className="hero-name">
    <div className="line-1">
      {"Prabhu".split('').map((char, i) => <span key={i} className="char">{char}</span>)}
    </div>
    <div className="line-2">
      {"Prasad".split('').map((char, i) => <span key={i} className="char">{char}</span>)}
    </div>
    <div className="line-3">
      <span className="dim">
        {"Mishra".split('').map((char, i) => <span key={i} className="char">{char}</span>)}
      </span>
      <span className="acc char">.</span>
    </div>
  </h1>
  <p className="hero-desc">Building intelligent systems, autonomous drones, and scalable web apps.</p>
  <div className="hero-actions">
    <a href="#projects" className="btn-p"><span>View My Work →</span></a>
  </div>
  <div className="hero-avatar-wrap">
    <canvas id="hero-avatar" width="800" height="800" className="hero-avatar-img" style={{'pointerEvents': 'auto'}}></canvas>
  </div>
  <div className="hero-stats">
    <div><div className="stat-num"><span data-target="2023" className="counter">0</span></div><div className="stat-lbl">Since</div></div>
    <div><div className="stat-num"><span data-target="5" className="counter">0</span>+</div><div className="stat-lbl">Projects</div></div>
    <div><div className="stat-num"><span data-target="2" className="counter">0</span></div><div className="stat-lbl">Internships</div></div>
  </div>
  <div className="scroll-hint">Scroll</div>
</section>
    </>
  );
}
