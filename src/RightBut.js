import React, { Component } from 'react';

export default class RightBut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'hide'
    }
  }
  clickandle(){
    if(this.state.text === "hide"){
    this.setState({
      text: "show"
    }, () =>{
      this.props.callback(this.state.text);
    });

  }else{
    this.setState({
      text:"hide"
      },() =>{
    this.props.callback(this.state.text);
  })}
  }

  render(){
    return(
      <button onClick={this.clickandle.bind(this)} style={{position:"fixed",top:"0px", right:"0px"}}>{this.state.text}</button>
    )
  }

}
