import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav id="nav">
        <div className="nav-logo">
          Prabhu's<span> Portfolio</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="nav-underline" id="nav-underline"></div>
        </ul>
        
        <div className="nav-cta-group desktop-only">
          <a href="resume.pdf" target="_blank" className="nav-cta ghost">Resume</a>
          <a href="mailto:prabhuprasadmishrawork@gmail.com?subject=Portfolio%20Enquiry" className="nav-cta primary">Hire Me</a>
        </div>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#achievements" onClick={handleLinkClick}>Achievements</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        <div className="mobile-cta-group">
          <a href="resume.pdf" target="_blank" className="nav-cta ghost" onClick={handleLinkClick}>Resume</a>
          <a href="mailto:prabhuprasadmishrawork@gmail.com?subject=Portfolio%20Enquiry" className="nav-cta primary" onClick={handleLinkClick}>Hire Me</a>
        </div>
      </div>
    </>
  );
}
