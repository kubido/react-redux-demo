import { combineReducers } from 'redux'
import counter_reducer from './counter_reducer'
import user_reducer from './user_reducer'

export default combineReducers({
  stateCounter: counter_reducer,
  userList: user_reducer
})
