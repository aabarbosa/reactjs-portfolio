
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'
import './Header.scss';

const Header = (props) => {
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
                <NavLink to="/letter">
                  Letter
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
  )
};

export default Header;