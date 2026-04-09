import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import BlogList from './Components/Blog/BlogList';
import BlogPost from './Components/Blog/BlogPost';
import LockInLanding from './Components/LockIn/LockInLanding';
import LockInPrivacy from './Components/LockIn/LockInPrivacy';
import LockInTerms from './Components/LockIn/LockInTerms';
import Privacy from './Components/Policy/Privacy';
import Security from './Components/Policy/Security';

function Root() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/blog">
          <BlogList darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Route>
        <Route exact path="/blog/:slug">
          <BlogPost darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Route>
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/lockin" component={LockInLanding} />
        <Route exact path="/lockin/privacy" component={LockInPrivacy} />
        <Route exact path="/lockin/terms" component={LockInTerms} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
