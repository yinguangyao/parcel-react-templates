import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import home from './home/reducers'

const rootReducers = combineReducers({
    home
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
