import React, { Component } from 'react'

const Github = 'https://www.github.com/aabarbosa'

class GitHub extends Component {

  render() {

    return (
      <div className="window-btn-display">
        <a 
          href={Github} 
          target="_blank" 
          rel="noopener noreferrer">
          Github
        </a>
      </div>
    )
  }
}

export default GitHub