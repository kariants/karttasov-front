import React from 'react';
import Button from './PostButton.js';
import Form from './PostForms.js'
import './PostCombiner.css'

export default class Post extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    choose: 'Stop_button',
    showhideRight: ''
  };

}
componentWillReceiveProps(nexProps) {
  this.setState({
    showhideRight: nexProps.hide
  });
}
callback = (Form) =>{
  this.setState({
    choose:Form
  })
};

render(){
  var style = {};
  if(this.state.showhideRight === "show"){
    style = {
      width:"300px"
    }
  }else{
    style = {
      width:"0px"
    }
  }
  return(
      <div style={style} id ="Post">
        <Button callback={this.callback} />
        <Form choose={this.state.choose} />
      </div>
)}

}
