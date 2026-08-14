import React, { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scripts are now loaded via index.html <head> with defer for faster loading
    // We just need to trigger the animations once the React component mounts.
    if (window.initAnimations) {
      window.initAnimations();
      if (window.initCursor) window.initCursor();
    } else {
      // In case the script is slightly delayed (e.g., slow network), wait for it
      window.addEventListener('load', () => {
        if (window.initAnimations) window.initAnimations();
        if (window.initCursor) window.initCursor();
      });
    }

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className='app-container'>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
