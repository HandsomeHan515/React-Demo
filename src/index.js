import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Progress, Resource, Group, Help } from './containers';
import { Header } from './components';

ReactDOM.render(
  <Router>
    <div>
      <Header />

      <Route exact path='/' component={Home} />
      <Route path='/progress' component={Progress} />
      <Route path='/resource' component={Resource} />
      <Route path='/group' component={Group} />
      <Route path='/help' component={Help} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
