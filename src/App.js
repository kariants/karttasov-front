import React, { Component } from 'react';
import './App.css';
import Post from './PostNew.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>hello world</p>
      <br />
        <Post/>
      </div>
    );
  }
}

export default App;
