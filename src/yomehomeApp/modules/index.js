import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import check from './check';
import header from './header';
import home from './home';

const rootReducer = combineReducers({
  check,
  header,
  home
});

export default createStore(rootReducer, applyMiddleware(thunk));
