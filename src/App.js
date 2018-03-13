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
      Stop_Times:''
    }
  }
  callback = (marker,Stop_Times) =>{
    this.setState({
      marker: marker,
      Stop_Times: Stop_Times
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
        <LeftDiv marker ={this.state.marker} Stop_Times={this.state.Stop_Times}/>
      </div>
      </div>


    );
  }
}
