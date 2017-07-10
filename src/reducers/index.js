import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import navReducer from './navReducer';

export default combineReducers({
  todo: todoReducer,
  nav: navReducer
})
