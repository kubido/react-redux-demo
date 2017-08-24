import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

const middleware = applyMiddleware(logger, thunk)

const store = createStore(rootReducer, middleware)

//createStore(reducer, defaultState, enhancer/middleware)
export default store
