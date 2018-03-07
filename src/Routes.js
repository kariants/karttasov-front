import React from 'react';

export class Routes extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    Agency: '',
    Description: '',
    Line_Number: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  var change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
}


handleSubmit(event) {
  console.log(this);
  event.preventDefault();
}
  render() {
    return (
      <div>
          <p>Routes Form</p>

            <form onSubmit={this.handleSubmit}>
            <label htmlFor="Agency">Agency
            <input type="text" name="Agency" id="Agency" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

              <label htmlFor="Stop Code">Stop Code
              <input type="text" name="Stop_Code" id="Stop_Code" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>


              <label htmlFor="Description">Description
              <input type="Description" name="Description" id="Description" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>


              <label htmlFor="Line_Number">Line Number
              <input type="Line_Number" name="Line_Number" id="Line_Number" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>




              <input type="submit" value="Submit"/>
            </form>
      </div>
    );
  }
}

export default Routes;
