import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Progress, Todo, Counter, Help } from './containers';
import { Header } from './components';

import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
