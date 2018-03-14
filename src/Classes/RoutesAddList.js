import React, { Component } from 'react';
import List from './List';

export default class RoutesAddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });

  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });

    this.props.callback(this.state.items);
  }



  render() {
    return(
      <div>
        <form className="RoutesAddList" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />

        </div>
    );
  }



}
