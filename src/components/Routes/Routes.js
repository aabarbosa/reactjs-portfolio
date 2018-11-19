import React from 'react';
import { Switch, Route } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../Home/Home';
import './Routes.css';


import Letter from '../Letter/Letter';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills'

const Routes = (props) => {
  return (
    <main>
      <TransitionGroup className="switch-routes">
        <CSSTransition key={props.location.key} classNames="fade" timeout={350}>
          <div className="switch-wrapper">
            <Switch location={props.location}>
              <Route path="/letter" component={Letter} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default Routes;