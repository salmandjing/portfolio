import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header({ data, darkMode, toggleDarkMode }) {
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return null;

  const { name, occupation, description, social } = data;

  const networks = social.map((network) => (
    <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer">
      <i className={network.className}></i>
    </a>
  ));

  return (
    <header id="home">
      <nav id="nav-wrap" className={navHidden ? 'nav-hidden' : ''}>
        <ul id="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/blog">Blog</Link></li>
          <li>
            <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle theme">
              <i className={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}></i>
            </button>
          </li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <p className="greeting">Hi, I'm</p>
          <h1>{name}</h1>
          <p className="tagline">{occupation}</p>
          <p className="description">{description}</p>
          <div className="social-links">
            {networks}
          </div>
          <a href="#portfolio" className="cta-button">View My Work</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </header>
  );
}

export default Header;
