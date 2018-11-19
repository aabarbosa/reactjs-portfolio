import React, { Component } from 'react'
import Routes from './components/Routes/Routes'
import { Route } from 'react-router'
import Bar from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './components/App/App.css';
//import './assets/css/formatter.css'

class Application extends Component {
  render() {
    return (

      <div className="App">
        <Bar/>
        <Route component={Routes}/>
        <Footer/>
      </div>
    )
  }
}

export default Application
