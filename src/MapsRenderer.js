import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';


class MapsRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ''
    };
  }

  fetchStops() {
  fetch("/stops/").then(res =>res.json()).then((result)=>{
      this.setState({list: result})
    });
  }

  componentWillReceiveProps(nextProps) {
    //loading stops from the database
    this.fetchStops();

  }


  render() {
    return (
      <div>
        <MapContainer google={this.props.google} stopsList={this.state.list} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWhKVQtFGxlTcrO3idYsuix-RljyDyenk',
})(MapsRenderer)
