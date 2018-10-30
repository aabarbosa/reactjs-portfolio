import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Portfolio extends Component {

  render() {

    return (
        <div className="window-btn-display">
            <Link to="/portfolio">
            Portfolio
            </Link>
        </div> 
    )
  }
}

export default Portfolio