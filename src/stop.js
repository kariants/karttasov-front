import React from 'react';

export class Stop extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    Name: '',
    Description: '',
    Latitude: '',
    Longitude: '',
    Line_Number: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({
    Stop_Code: event.target.value,
    Name: event.target.value,
    Description: event.target.value,
    Latitude: event.target.value,
    Longitude: event.target.value,
    Line_Number: event.target.value
  });
}

handleSubmit(event) {
  event.preventDefault();
}

  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit}>
              <label for="Stop Code">Stop Code
              <input type="text" name="Stop_Code" id="Stop_Code" />
              </label><br/>

              <label for="Name">Name
              <input type="text" name="Name" id="Name" />
              </label><br/>

              <label for="Description">Description
              <input type="text" name="Description" id="Description" />
              </label><br/>

              <label for="Latitude">Latitude
              <input type="number" name="Latitude" id="Latitude" placeholder="Latitude" />
              </label><br/>

              <label for="Longitude">Longitude
              <input type="number" name="Longitude" id="Longitude" placeholder="Longitude" />
              </label><br/>


              <label for="Line_Number">Line_Number
              <input type="Line_Number" name="Line_Number" id="Line_Number" multiple />
              </label><br/>


              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Stop;
