import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: '',
      map: '',
      mapLoaded: ''
    }

  };


componentWillReceiveProps(nextProps) {
  if (nextProps.stopsList !== '') {

    if (this.state.mapLoaded === '') {
      this.loadMap(); // call loadMap function to load the google map
      this.setState({mapLoaded: 'loaded'});
    }

    this.setState({list: nextProps.stopsList}, () => {
      this.createMarkers();
    });
  }
}

componentDidUpdate() {
  this.createMarkers();
}

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {

        center: {lat: 60.1651157, lng: 24.9412466}, // sets center of google map to Helsinki.
        zoom: 13, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap', // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        styles : [
        {
          featureType:"poi",
          stylers: [{ visibility: "off" }]
        },{
          featureType: "transit.station",
          stylers:[{visibility: "off"}]
        }
      ]
    });
      // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      this.map = new maps.Map(node, mapConfig);
      this.setState({map: this.map});
    }
  }

  createMarkers() {
    const google = this.props.google;

    var infoWindow = new google.maps.InfoWindow({
      content: null
    });

    var markerArr = this.state.list;
    // creates markers
    for (var i = 0; i < markerArr.length; i++) {
      const marker = new google.maps.Marker({
        position: {
          lat: parseFloat(markerArr[i].Position.lat),
          lng: parseFloat(markerArr[i].Position.lng) },
        map: this.state.map,
        title: markerArr[i].Name,
        Stop_Code: markerArr[i].Stop_Code
      });

      marker.addListener('click', (event) => {
        infoWindow.setContent( marker.Stop_Code   + " - " + marker.title);
        infoWindow.open(this.map, marker);

        fetch("/timetables/" + marker.Stop_Code).then(res =>res.json()).then((result) => {
          this.props.callback(marker, result);
        });


        return false;
      });

    }
  }




  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '100vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '100vh', // 75vh similarly will take up roughly 75% of the height of the screen. px also works.

    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
