import React from 'react';

export class Routes extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    Agency: '',
    Description: '',
    Line_Code: ''
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
//  console.log(this);
event.preventDefault();
fetch("/routes/new",{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'},

    body: JSON.stringify({
      Agency:this.state.Agency,
      Description:this.state.Description,
      Line_Code:this.state.Line_Code
    }),
})
.then(function(res){ return res.json(); })
.then(function(data){ console.log( JSON.stringify( data ) ) });

}
  render() {
    return (
      <div>
          <p>Routes Form</p>

            <form onSubmit={this.handleSubmit}>

            <label htmlFor="Line_Code">Line Code
            <input type="Line_Number" name="Line_Code" id="Line_Code" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <label htmlFor="Description">Description
            <input type="Description" name="Description" id="Description" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <label htmlFor="Agency">Agency
            <input type="text" name="Agency" id="Agency" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

              <input type="submit" value="Submit"/>
            </form>
      </div>
    );
  }
}

export default Routes;
