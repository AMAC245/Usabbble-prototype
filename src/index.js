import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './components/App'
 
const store = configureStore()
const ROOT_NODE = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>,
    ROOT_NODE
)






