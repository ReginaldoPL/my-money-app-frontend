import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware ,createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './main/reducers'

//para esperar req. assíncrona
import promise from 'redux-promise'


import App from './main/app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__ ()

//nomal seria const store = createStore(reducers) 
//mas pra aplicar Middlerare de promisse fica    
const store = applyMiddleware(promise)(createStore)(reducers, devTools) 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('app'))