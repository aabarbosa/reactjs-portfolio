import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import '../assets/styles/header.scss'

const NavBar = (props) => {

  return (
    <header>
      <Logo/>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/work">
              How I Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/passion">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
          <a href="https://github.com/aabarbosa" 
            target="_blank" 
            rel="noopener noreferrer">
            GitHub
            <i className="icon-link-ext"></i>
          </a>
            <a href="https://stackoverflow.com/u/10448918"
            target="_blank" 
            rel="noopener noreferrer">
            StackOverflow
            <i className="icon-link-ext"></i>
            </a>
            <a href="https://test.teste.com" 
            target="_blank" 
            rel="noopener noreferrer">
            Résumé
            </a>
          </li>
        </ul>
      </nav>
      </header>
  )
}

export default NavBar