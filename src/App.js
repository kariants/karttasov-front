import React, { Component } from 'react';
import './App.css';
import Post from './PostNew.js';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'

class App extends Component {
  render() {
    return (
      <div>


        <MapContainer google={this.props.google} />

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWhKVQtFGxlTcrO3idYsuix-RljyDyenk',
})(App)
