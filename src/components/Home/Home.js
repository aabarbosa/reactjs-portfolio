import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import data from '../../assets/documents/presentation.json'

import User from './User'

const Home = (props) => {
  return (
    <div className="Home">
      <div className="presentation-title">Welcome!</div>

          <User/>
      <div className="presentation-text">
          {data.presentation}
      </div>
      <div className="linkContainer">
        <Link to="/projects">Check Out</Link>
      </div>
    </div>
  );
};




export default Home;