import React from 'react'
import {Link} from 'react-router-dom'
import Resume from './documents/Resume'
import '../assets/styles/home.scss'

const Home = (props) => {
  return (
    <div className="Home">
      <div className="presentation-title">Welcome!</div>
      <div className="presentation-text">
        I am more attached to jobs that give me autonomy. Sure.. I am absolutely attached with
        the work I create by myself. I scored higher with projects and exams that 
        guided me freely to the goal. It's information job.
        I am passionate about it.
      </div>
      <div className="window-btn-display">
        <Link to="/portfolio">
          Portfolio
        </Link>
        <a  href="/documents/AABarbosa.pdf" 
            target="_blank" rel="noopener noreferrer">See my Résumé
            
        </a>
        <div>
        </div>
        <a 
          href="https://www.github.com/aabarbosa" 
          target="_blank" 
          rel="noopener noreferrer">
          Coding
        </a>
      </div>
    
      <Resume/> TODO: make this render from the link event
    </div>
    
  )
}

export default Home