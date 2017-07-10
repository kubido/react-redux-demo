import { createStore, middleware } from 'redux';
import rootReducers from '../reducers';

const store = createStore(rootReducers, middleware)

export default store;
