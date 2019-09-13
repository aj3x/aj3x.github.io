import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './Nav.scss'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Test from './Test';
import ReactGA from 'react-ga';

export default class Nav extends Component {
  render() {
    return (
      <Router className="navbar-light">
        <nav className="nav">
          <Link
            className="nav-link"
            to="/" title="HelloWorld"
            onClick={() => ReactGA.pageview('/about')}
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="/knowledgebase"
            title="Knowledge Base"
            onClick={() => ReactGA.pageview('/projects')}
          >
            Portfolio
          </Link>
          <Link
            className="nav-link"
            to="/contact"
            title="Contact"
            onClick={() => ReactGA.pageview('/contact')}
          >
            Contact
          </Link>
        </nav>

        <Route path="/" exact component={About}/>
        <Route path="/knowledgebase" component={Projects}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/test" component={Test}/>
      </Router>
    )
  }
}
