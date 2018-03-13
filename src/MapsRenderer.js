import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'


class MapsRenderer extends Component {
  constructor(props) {
    super(props);
    this.setState({
      marker:'',
      time:''

    });

  }
callback = (marker) =>{
      this.props.callback(marker)
  }

  render() {
    return (
      <div>
        <MapContainer google={this.props.google} callback={this.callback} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWhKVQtFGxlTcrO3idYsuix-RljyDyenk',
})(MapsRenderer)
