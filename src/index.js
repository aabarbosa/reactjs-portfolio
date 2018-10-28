/*
    Modules, components and assets.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'

import Application from './Application'

import * as Caches from './assets/caches/cache'

/* This render the application to the root div at public */
ReactDOM.render(
    <HashRouter> 
        <Application />
    </HashRouter> ,
    document.getElementById('root'))
Caches.register()
