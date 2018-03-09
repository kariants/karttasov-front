import React from 'react';
export class TimeTables extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    day: '',
    hour: '',
    minute: '',
    line: '',
    Stop_Time: '',


  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  var change = {}
  console.log(event.target.value);
    change[event.target.name] = event.target.value
    this.setState(change)
}

handleSubmit(event) {
//  console.log(this);
  event.preventDefault();

  var timeStr = this.state.Stop_Time;
  var splitTime = timeStr.split(':');
  this.state.hour = splitTime[0];
  this.state.minute = splitTime[1];


  fetch('/timetables/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'},



    body: JSON.stringify({
      Stop_Code: this.state.Stop_Code,

      stopTimesObj: { dayType : this.state.day,
                    hours : {
                      hour: this.state.hour ,
                      allData: { data: {min: this.state.minute, Line_Code: this.state.line} }
                    }
                  }
  }),
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ console.log( JSON.stringify( data ) ) });
}
render() {
  return (
    <div>
    <p>Timetables Form</p>
          <form onSubmit={this.handleSubmit} id="timetables_form">
            <label htmlFor="Stop_Code">Stop Code
            <input type="text" name="Stop_Code" id="Stop_Code" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <label htmlFor="Line_Code">Line Code
            <input type="text" name="Line_Code" id="Line_Code" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <label htmlFor="Stop_Time">Stop Times
            <input type="time" name="Stop_Time" id="Stop_Time" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </label><br/>

            <div>
            Day
            <select name="day" form="timetables_form">
            <option value="weekday">Weekday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            </select>
            </div>

            <input type="submit" value="Submit" />
          </form>


    </div>
  );
}
}
export default TimeTables;
