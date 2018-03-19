import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timetables: this.props.timetables,
      marker: this.props.marker
    };

    console.log(this.state);
  }

componentWillReceiveProps(nexProps) {
  this.setState({
    timetables: nexProps.timetables,
    marker: nexProps.marker

  });
}


  render() {
    return (
      <div>
      <h2>{this.state.marker.Stop_Code} - {this.state.marker.title}</h2>
      </div>

    );
  }
}
