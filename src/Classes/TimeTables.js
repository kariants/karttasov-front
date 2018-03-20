import React from 'react';



export class TimeTables extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: this.props.TimeTables.Stop_Code,
    day: 'weekday',
    line_Code: this.props.TimeTables.line_Code,
    Stop_Time: this.props.TimeTables.Stop_Code,
    list: this.props.TimeTables.list,
    lineCodeList: this.props.TimeTables.lineCodeList

  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  var change = {}
    change[event.target.name] = event.target.value
    this.setState(change,()=>{this.props.callback({TimeTables:this.state})})

    if(event.target.name === "Stop_Code" && event.target.value.length > 0 ){
      fetch("/stops/"+event.target.value).then(res =>res.json()).then((result)=>{

      const data = result.map((line) =><option value={line.Stop_Code}/>);
      this.setState({list: data},()=>{this.props.callback({TimeTables:this.state})})
      console.log(data);
    });
    }

    if (event.target.name === "line_Code" && event.target.value.length > 0 ) {
      fetch("/routes/" + event.target.value).then(res =>res.json()).then((result)=>{
        const data = result.map((line) =><option value={line.Line_Code}/>);
        this.setState({lineCodeList: data},()=>{this.props.callback({TimeTables:this.state})})
        console.log(data);
      });
    }




}

handleSubmit(event) {
//  console.log(this);
  event.preventDefault();

fetch('/timetables/update', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'},

    body: JSON.stringify({
      Stop_Code: this.state.Stop_Code,
      Time : {dayType : this.state.day, Stop_Time: this.state.Stop_Time, Line_Code:this.state.line_Code}
    }),
})
  .then(function(res){ return res.json(); })
  .then(function(data){ console.log( JSON.stringify( data ) ) });

}

render() {
  return (
    <div syle={{overflow:"hidden"}}>
    <p>Timetables Form</p>
          <form onSubmit={this.handleSubmit} id="timetables_form">
            <label htmlFor="Stop_Code">Stop Code
            <input required type="text" name="Stop_Code" id="Stop_Code" list={"item"} onChange={this.handleChange.bind(this)} value={this.state.Stop_Code}/>
            <datalist id="item">{this.state.list}</datalist>
            </label><br/>

            <label htmlFor="Line_Code">Line Code
            <input required type="text" name="line_Code" id="line_Code" list={"LineCodeItem"} onChange={this.handleChange.bind(this)} value={this.state.line_Code}/>
            <datalist id="LineCodeItem">{this.state.lineCodeList}</datalist>
            </label><br/>

            <label htmlFor="Stop_Time">Stop Times
            <input required type="time" name="Stop_Time" id="Stop_Time" onChange={this.handleChange.bind(this)} value={this.state.Stop_Time}/>
            </label><br/>

            <div>
            Day
            <select name="day" form="timetables_form" onChange={this.handleChange.bind(this)}>
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
