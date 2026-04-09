import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import LockInLanding from './Components/LockIn/LockInLanding';
import LockInPrivacy from './Components/LockIn/LockInPrivacy';
import LockInTerms from './Components/LockIn/LockInTerms';
import Privacy from './Components/Policy/Privacy';
import Security from './Components/Policy/Security';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/security" component={Security} />
      <Route exact path="/lockin" component={LockInLanding} />
      <Route exact path="/lockin/privacy" component={LockInPrivacy} />
      <Route exact path="/lockin/terms" component={LockInTerms} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
