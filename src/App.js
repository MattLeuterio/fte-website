import React from 'react';
import {Route, Switch, useLocation } from 'react-router-dom';
import "./ui/scss/App.scss";

import {
  Home,
  About,
  Join,
  People,
  LastResults,
  PageNotFound
} from './pages'
import { GlobalLayout } from './components';

const App = () => {
  const location = useLocation();

  return (
        <GlobalLayout>
          <Switch location={location} key={location.key}>
            <Route exact path="/latest-results" component={LastResults} />
            <Route exact path="/people" component={People} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch> 
        </GlobalLayout>
  );
}

export default App;
