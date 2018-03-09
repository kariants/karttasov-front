import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'

class MapsRenderer extends Component {
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
})(MapsRenderer)