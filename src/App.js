import React, { Component } from 'react';
import './App.css';
import Post from './PostNew.js';
import MapsRenderer from './MapsRenderer.js';
import SearchBar from './SearchBar.js';
import LeftDiv from './LeftDiv.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: '',
    }
  }
  callback = (marker) =>{
    this.setState({
      marker: marker
    })
    }
  render() {
    return (
      <div>
      <div id="searchBar">
        <SearchBar />
      </div>
      <div id="mapContainer ">
        <MapsRenderer callback={this.callback} />
      </div>
      <div id="post">
        <Post />
      </div>
      <div id="LeftDiv">
        <LeftDiv marker ={this.state.marker}/>
      </div>
      </div>


    );
  }
}
