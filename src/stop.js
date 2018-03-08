import React from 'react';

export class Stop extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    Name: '',
    Description: '',
    Line_Number: '',
    Latitude:'',
    Longitude:''

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
  //console.log(this);
  event.preventDefault();
  //console.log(this.state);

fetch('/stops/new', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'},

  body: JSON.stringify({
    Stop_Code: this.state.Stop_Code,
    Name: this.state.Name,
    Position:{lat:this.state.Latitude , lng:this.state.Longitude},
    Description: this.state.Description,
    Line_Number: this.state.Bus_Lines

}),
})
.then(function(res){ return res.json(); })
.then(function(data){ console.log( JSON.stringify( data ) ) });



}

  render() {
    return (
      <div>

            <p>Bus Stops Form</p>

            <form onSubmit={this.handleSubmit}>
              <label htmlFor="Stop Code">Stop Code
              <input type="text" name="Stop_Code" id="Stop_Code" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>

              <label htmlFor="Name">Name
              <input type="text" name="Name" id="Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>

              <label htmlFor="Latitude">Latitude
              <input type="number" name="Latitude" step="0.000001" id="Latitude" placeholder="Latitude" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label>

              <label htmlFor="Longitude">Longitude
              <input type="number" name="Longitude" step="0.000001" id="Longitude" placeholder="Longitude" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>

              <label htmlFor="Description">Description
              <input type="text" name="Description" id="Description" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>

              <label htmlFor="Bus Lines">Line Number
              <input type="text" name="Line_Number" id="Line_Number" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>


              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Stop;
