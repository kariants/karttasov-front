import React from 'react';
import Stop from './Classes/Stop.js';
import TimeTables from "./Classes/TimeTables.js";
import Routes from "./Classes/Routes.js";

export default class Post extends React.Component{
  constructor(props) {
  super(props);
}


render(){
  if(this.props.choose === "Stop_button"){
    return(<Stop />);
  }else if(this.props.choose === "Routes_button"){
    return(<Routes />);
  }else if(this.props.choose === "TimeTables_button"){
    return(<TimeTables />);
  }


}
}
