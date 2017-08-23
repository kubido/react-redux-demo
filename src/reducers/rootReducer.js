import { combineReducers } from 'redux'

import counterReducer from './CounterReducer'
import userReducer from './UserReducer'

const rootReducer = combineReducers({
  counterStore: counterReducer,
  userStore: userReducer
})


export default rootReducer
