import React, { Component } from 'react'
import Bar from './components/NavBar'
import Presentation from './components/Home'

import './assets/css/formatter.css'

class Application extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
        <Presentation/>
      </div>
    )
  }
}

export default Application
