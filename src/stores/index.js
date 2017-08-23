import { createStore } from 'redux'

import rootReducer from '../reducers/rootReducer'

const store = createStore(rootReducer)

//createStore(reducer, defaultState, enhancer/middleware)
export default store
