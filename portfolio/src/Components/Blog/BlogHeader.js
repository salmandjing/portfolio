import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function BlogHeader({ darkMode, toggleDarkMode }) {
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

  return (
    <nav id="nav-wrap" className={`opaque${navHidden ? ' nav-hidden' : ''}`}>
      <ul id="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li>
          <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle theme">
            <i className={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default BlogHeader;
