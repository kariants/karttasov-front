import React, { Component } from 'react';
import './App.css';
import Stop from './Stop.js';
import TimeTables from "./TimeTables.js";
import Routes from "./Routes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>hello world</p>
      <br />



      <Stop />

      <br />
      <Routes />
  <br />
        <TimeTables />
      </div>



    );
  }
}

export default App;
