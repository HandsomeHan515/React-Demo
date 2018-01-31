import { createStore } from 'redux';
import { reducer } from './reducer';
import initialState from './state';



const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
)


export default store;