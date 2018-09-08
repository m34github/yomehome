import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import header from './header';
import home from './home';

const rootReducer = combineReducers({
  header,
  home
});

export default createStore(rootReducer, applyMiddleware(thunk));
