import React, { PureComponent } from 'react';
import { HashRouter as Router, Link, Route } from "react-router-dom";
import About from './About';
import Projects from './Projects';
import './Nav.scss';

export default class Nav extends PureComponent {
  render() {
    return (
      <Router className="navbar-light">
        <nav className="nav">
          <Link
            className="nav-link"
            to="/" title="HelloWorld"
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="/knowledgebase"
            title="Knowledge Base"
          >
            Portfolio
          </Link>
        </nav>

        <Route path="/" exact component={About}/>
        <Route path="/knowledgebase" component={Projects}/>
      </Router>
    )
  }
}
