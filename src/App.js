import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Foot from './components/Foot';
import Nav from './components/Nav';

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
