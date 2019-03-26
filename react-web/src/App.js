import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav'
import Foot from './components/Foot'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav></Nav>
        <Foot></Foot>
      </div>
    );
  }
}

export default App;
