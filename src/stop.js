import React from 'react';

export class Stop extends React.Component {

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


              <label for="Bus Lines">Bus Lines
              <input type="number" name="Bus_Lines" id="Bus_Lines" multiple />
              </label><br/>


              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Stop;
