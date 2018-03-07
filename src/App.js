import React, { Component } from 'react';
import './App.css';
import Stop from './Stop.js';
import TimeTables from "./TimeTables.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>hello world</p>
      <br />

      <TimeTables />
      <br />
      <Stop />
      </div>



    );
  }
}

export default App;
