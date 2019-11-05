import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { networkId } from './networkId'
import { toastProvider } from './toastProvider'

const rootReducer = combineReducers({
    networkId,
    toastProvider,
})

export const store = createStore(rootReducer, composeWithDevTools())
