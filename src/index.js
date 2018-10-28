/*
    Modules, components and assets.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'

import App from './App'

import * as Caches from './assets/caches/cache'

/* This render the application to the root div at public*/
ReactDOM.render(
    <HashRouter> 
        <App />
    </HashRouter> ,
    document.getElementById('root'))
Caches.register()
