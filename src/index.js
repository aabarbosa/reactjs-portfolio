/*
    Modules, components and assets.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Application from './Application'
import { BrowserRouter } from 'react-router-dom';
import * as Caches from './assets/caches/cache'
import './index.css';
import './index.scss';
/*
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './components/Portfolio/screens/Home/Home'
import Detail from './components/Portfolio/screens/Detail/Detail'
import styles from './components/Portfolio/index.css'
*/
/* This render the application to the root div at public */
const appRouter = 
  <BrowserRouter>
    <div className="bgOverlay">
      <Application />
    </div>
  </BrowserRouter>;
ReactDOM.render(appRouter, 
    document.getElementById('root'))
Caches.register()

/*
ReactDOM.render(
	<Router>
		<div className={styles.router}>
			<Route exact path="/" component={Home}/>
			<Route path="/:id" component={Detail}/>
		</div>
	</Router>,
	document.getElementById('app')
);

// react-hot-loader
if (module.hot){
	module.hot.accept();
}
*/