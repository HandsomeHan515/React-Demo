import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Ad, Todo, Counter, Help, NotFound } from '../containers';
import App from '../App';

const RouterMap = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ad' component={Ad} />
          <Route path='/todo' component={Todo} />
          <Route path='/counter' component={Counter} />
          <Route path='/help' component={Help} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default RouterMap;
