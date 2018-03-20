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

  },()=>{
    console.log(this.state);
  });
}


  render() {
    return (
      <div>
      <h2>{this.state.marker.Stop_Code} - {this.state.marker.title}</h2>
        {this.state.timetables.map((entry) => entry.Times.map((Times) =><p style={{width:"50%", display:"inline-block"}}>{Times.dayType}/{Times.Stop_Time}/{Times.Line_Code}</p> ))}
      </div>

    );
  }
}
