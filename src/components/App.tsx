import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';


export const App: React.VFC = () => (
  <div >
    <h1>Single Page Apps for GitHub Pages</h1>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
