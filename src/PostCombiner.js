import React from 'react';
import Button from './PostButton.js';
import Form from './PostForms.js'

export default class Post extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    choose: 'Stop_button'
  };

}
callback = (Form) =>{
  this.setState({
    choose:Form
  })
};

render(){
  return(
      <div id ="Post">
        <Button callback={this.callback} />
        <Form choose={this.state.choose} />
      </div>
)}

}
