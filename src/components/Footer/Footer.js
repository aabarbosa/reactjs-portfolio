import React, { Component } from 'react';
import './Footer.css'
import './Social.scss'

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <div className="row-social" style={{ margin: 0 }}>
              <div className="social-button">

                  <a 
                    href="https://www.github.com/aabarbosa" 
                    target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://stackoverflow.com/u/10448918"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-stack-overflow"></i>
                    </a>
                  <a href="mailto:aabarbosa.cs@gmail.com" 
                    target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-medium"></i>
                  </a>
              </div>
              
              <br />
            </div>
            <div className="row" id="copyleft" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <p className="small">© 2019 A.A., ReactJS</p>
              </div>
            </div>
        </div>
        );
  }
}

export default Footer;