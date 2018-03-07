import React from 'react';

export class Routes extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    Agency: '',
    Line_Number: '',
    Description: '',
    Stop_Code: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({
    Agency: event.target.value,
    Line_Number: event.target.value,
    Description: event.target.value,
    Stop_Code: event.target.value
  });
}

handleSubmit(event) {
  event.preventDefault();
}

  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit}>
              <label for="Agency">Agency
              <input type="text" name="Agency" id="Agency" />
              </label><br/>

              <label for="Line_Number">Line Number
              <input type="Line_Number" name="Line_Number" id="Line_Number" />
              </label><br/>

              <label for="Description">Description
              <input type="text" name="Description" id="Description" />
              </label><br/>

              <label for="Stop_Code">Stop Code
              <input type="text" name="Stop_Code" id="Stop_Code" />
              </label><br/>

              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Routes;
