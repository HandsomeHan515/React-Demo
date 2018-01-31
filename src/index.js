import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './redux';
import RouterMap from './route';

ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
