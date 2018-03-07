import React from 'react';

export class Stop extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    Name: '',
    Description: '',
    Bus_Lines: ''
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

fetch('/stops/new', {
  method: 'POST',
  body: {
    Stop_Code: event.state.Stop_Code,
    Name: event.state.Name,
    Description: event.state.Description,
    Bus_Lines: event.state.Bus_Lines
  }
});

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

              <label htmlFor="Description">Description
              <input type="text" name="Description" id="Description" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>

              <label htmlFor="Latitude">Latitude
              <input type="number" name="Latitude" step="0.000001" id="Latitude" placeholder="Latitude" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label>

              <label htmlFor="Longitude">Longitude
              <input type="number" name="Longitude" step="0.000001" id="Longitude" placeholder="Longitude" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>

              <label htmlFor="Bus Lines">Bus Lines
              <input type="text" name="Bus_Lines" id="Bus_Lines" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              </label><br/>


              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Stop;
