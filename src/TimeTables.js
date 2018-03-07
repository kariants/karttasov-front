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
  this.setState({
    Stop_Code: event.target.value,
    Line_Number: event.target.value,
    Stop_Times: event.target.value,
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

            <label for="Name">Line Number
            <input type="text" name="Line_Number" id="Name" />
            </label><br/>

            <label for="Description">Stop Times
            <input type="text" name="Stop_Times" id="Description" />
            </label><br/>

            <input type="submit" value="Submit" />
          </form>
    </div>
  );
}
}
export default TimeTables;
