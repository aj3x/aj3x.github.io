import React, { PureComponent } from 'react'
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
          <Link
            className="nav-link"
            to="/contact"
            title="Contact"
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
