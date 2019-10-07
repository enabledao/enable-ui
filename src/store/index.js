import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { networkId } from './networkId'

const rootReducer = combineReducers({
    networkId,
})

export const store = createStore(rootReducer, composeWithDevTools())
