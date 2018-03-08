import React from 'react';

export class TimeTables extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    Line_Number: '',
    Stop_Times: '',
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
  fetch('/timetables/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'},

    body: JSON.stringify({
      Stop_Code: this.state.Stop_Code,
      Line_Number: this.state.Bus_Lines,
      Stop_Times:this.state.Stop_Times

  }),
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ console.log( JSON.stringify( data ) ) });
}
render() {
  return (
    <div>
    <p>Timetables Form</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Stop_Code">Stop Code
            <input type="text" name="Stop_Code" id="Stop_Code" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <label htmlFor="Line_Number">Line Number
            <input type="text" name="Line_Number" id="Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <label htmlFor="Stop_Times">Stop Times
            <input type="text" name="Stop_Times" id="Description" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <input type="submit" value="Submit" />
          </form>
    </div>
  );
}
}
export default TimeTables;
