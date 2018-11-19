import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  handleClick = () => {
    const expandToggle = this.state.expanded ? false : true;

    this.setState({
      expanded: expandToggle
    });
  }

  render() {
    const { title, description, features, techStack, link, repo, aspectRatioOfsetClass } = this.props;
    const stackList = techStack.map((listItem, index) => <li key={`${title.trim()}${index}`}>{listItem}</li>);
    const iconClass = this.state.expanded ? 'icon-right-open rotate' : 'icon-right-open';
    const containerClass = this.state.expanded ? 'expanded' : '';
    return (
      <div className="projectDiv">
        <h2 onClick={this.handleClick}><i className={iconClass}></i> {title}</h2>
        <div className={`info-container ${containerClass}`}>
          <div 
            className={`screenshot ${aspectRatioOfsetClass}`}>
            <a href={link} target="_blank" rel="noopener noreferrer"> </a>
            <div className="ss-fake-content">
            </div>
          </div>
          <h3>Environment: </h3>
          <p className="description">{description}</p>
          <p className="features">{features}</p>
          <ul className="techStack">          
            {stackList}     
          </ul>
          <div className="buttonContainer">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer">Live Version</a>
            <a 
              href={repo} 
              target="_blank" 
              rel="noopener noreferrer">Github Repo</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;