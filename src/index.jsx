import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//import de MiddleWares
//middleWare necessário para eseprar request assincrono
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'


import reducers from './main/reducers'

//para esperar req. assíncrona



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__ ()

//nomal seria const store = createStore(reducers) 
//mas pra aplicar Middlerare de promisse fica    
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools) 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('app'))