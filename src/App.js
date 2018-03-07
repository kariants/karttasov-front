import React, { Component } from 'react';
import './App.css';
import Stop from './Stop.js';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>hello world</p>
      <Stop />
      <br />
      <Routes />

      </div>



    );
  }
}

export default App;
