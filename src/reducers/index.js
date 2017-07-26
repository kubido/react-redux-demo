import { combineReducers } from 'redux'
import counter_reducer from './counter_reducer'

export default combineReducers({
  stateCounter: counter_reducer
})
