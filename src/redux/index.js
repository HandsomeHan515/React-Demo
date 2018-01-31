import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import mySaga from './saga';
import initialState from './state';

const sagaMiddleware = createSagaMiddleware();

let enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

const store = createStore(
  reducer,
  initialState,
  enhancer
)

sagaMiddleware.run(mySaga);

export default store;