import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger)
export default createStore(rootReducer, middleware)

