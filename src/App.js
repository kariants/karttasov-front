import React, { Component } from 'react';
import './App.css';
import Post from './PostCombiner.js';
import MapsRenderer from './MapsRenderer.js';
import SearchBar from './SearchBar.js';
import LeftDiv from './LeftDiv.js';
import RightBut from './RightBut.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: '',
      timetables: '',
      showhideRight: ''
    }
  }
  rightCallback = (state) =>{
    this.setState({
      showhideRight: state
    })
  }
  callback = (marker, result) =>{
    this.setState({
      marker: marker,
      timetables: result
    })
    }
  render() {
    var rightdivcss = {}
    if(this.state.showhideRight === "show"){
    rightdivcss = {
      width:"300px",
      display:"none"
    }

  }else{
    rightdivcss = {
        width:"0px",
      display:"none"
    }
  }
    return (
      <div>
      <div id="searchBar">
        <SearchBar />
      </div>
      <div id="mapContainer ">
        <MapsRenderer callback={this.callback} />
      </div>
      <div id="post">
        <Post hide={this.state.showhideRight} />
      </div>
      <div id="LeftDiv">
        <LeftDiv marker={this.state.marker} timetables={this.state.timetables} />
      </div>
      <div id="RightBut">
        <RightBut callback={this.rightCallback}/>
      </div>
      </div>


    );
  }
}
