import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <p>{this.props.marker.title}</p>
    );
}
}
