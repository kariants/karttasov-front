import React from 'react';
import Stop from './Classes/Stop.js';
import TimeTables from "./Classes/TimeTables.js";
import Routes from "./Classes/Routes.js";

class Post extends React.Component{
  constructor(props) {
  super(props);
  this.state = null;

  this.handleClick = this.handleClick.bind(this);
}



handleClick(event) {
  console.log(event.target.id);
  if(event.target.id === "Stop_button"){
    this.setState(<Stop />)
  }else if (event.target.id === "Routes_button") {
    this.setState(<Routes />)
  }else if(event.target.id === "TimeTables_button"){
    this.setState(<TimeTables />)
  }


}

  render(){

    const style={

    }

    return(
      <div className="Post">
      <ul id="form_list">
        <li role="button" id="Stop_button" onClick={this.handleClick.bind(this)}>Stop</li>
        <li role="button" id="Routes_button" onClick={this.handleClick.bind(this)}>Routes</li>
        <li role="button" id="TimeTables_button" onClick={this.handleClick.bind(this)}>Time Tables</li>
      </ul>
      <div>{this.state}</div>
      </div>

    );
  }

}
export default Post;
