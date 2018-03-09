import React, { Component } from 'react';

export default class searchBar extends Component {
  constructor(props) {
  super(props);

}

  render() {
    return (
      <div>
      <input type="text" placeholder="Search..." style={{width: '100%', height: 30}}/>
      </div>
    )
  }
}
