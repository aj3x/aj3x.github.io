import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Foot from './components/Foot';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <Nav />
      <Foot />
    </div>
  );
}

export default App;
