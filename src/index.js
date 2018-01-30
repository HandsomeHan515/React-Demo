import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Progress, Todo, Counter, Help } from './containers';
import { Header } from './components';

import { store } from './redux';

store.subscribe(() => {
  console.log('state: %o', store.getState())
})

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/progress' component={Progress} />
      <Route path='/todo' component={Todo} />
      <Route path='/counter' component={Counter} />
      <Route path='/help' component={Help} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
