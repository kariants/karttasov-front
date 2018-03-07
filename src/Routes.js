import React from 'react';

export class Routes extends React.Component {

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




              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Routes;
