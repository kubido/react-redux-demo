import { createStore } from 'redux'

import TodoReducer from '../reducers/TodoReducer'

const store = createStore(TodoReducer)

export default store