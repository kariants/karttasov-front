import React, { Component } from 'react';
import './App.css';
import Post from './PostCombiner.js';
import MapsRenderer from './MapsRenderer.js';
import SearchBar from './SearchBar.js';
import LeftDiv from './LeftDiv.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: '',
      timetables: ''
    }
  }
  callback = (marker, result) =>{
    this.setState({
      marker: marker,
      timetables: result
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
        <LeftDiv marker={this.state.marker} timetables={this.state.timetables} />
      </div>
      </div>


    );
  }
}
