import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav'
import Foot from './components/Foot'

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <Nav />
        <Foot />
      </div>
    );
  }
}

export default App;
