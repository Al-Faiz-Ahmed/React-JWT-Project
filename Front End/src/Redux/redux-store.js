import React from 'react'
import {applyMiddleware, createStore,compose} from 'redux'
import { Provider } from 'react-redux'
import {reducers} from './reducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = {}
const store = createStore(reducers,initialState,composeEnhancer(applyMiddleware(thunk)))

export default function GlobalRedux({children}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
} 




