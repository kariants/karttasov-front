import React from 'react';

import "./PostNew.css"

export default class Post extends React.Component{
  constructor(props) {
  super(props);

  this.handleClick = this.handleClick.bind(this);
}



handleClick(event) {
    this.props.callback(event.target.id)
  }

  render(){
    return(
      <div id="PostButton">
      <ul id="form_list">
        <li role="button" id="Stop_button" onClick={this.handleClick.bind(this)}>Stop</li>
        <li role="button" id="Routes_button" onClick={this.handleClick.bind(this)}>Routes</li>
        <li role="button" id="TimeTables_button" onClick={this.handleClick.bind(this)}>Time Tables</li>
      </ul>
      </div>
    );
  }

}
