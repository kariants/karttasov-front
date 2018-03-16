import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <p>{this.props.marker.title}</p>
      <p>{this.props.Stop_Times.Stop_Code}</p>
      </div>
    );
}
}
