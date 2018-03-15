import React from 'react';
import Stop from './Classes/Stop.js';
import TimeTables from "./Classes/TimeTables.js";
import Routes from "./Classes/Routes.js";

export default class Post extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    Stop: '',
    Routes: '',
    TimeTables: ''
  }
}
callback=(data)=>{
  this.setState(data)
};


render(){
  if(this.props.choose === "Stop_button"){

    return(<Stop callback={this.callback} Stop={this.state.Stop}/>);
  }else if(this.props.choose === "Routes_button"){
    return(<Routes callback={this.callback} Routes={this.state.Routes} />);
  }else if(this.props.choose === "TimeTables_button"){
    return(<TimeTables callback={this.callback} TimeTables={this.state.TimeTables} />);
  }


}
}
