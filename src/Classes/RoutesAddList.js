import React, { Component } from 'react';
import List from './List';

export default class RoutesAddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      list: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });

    fetch("/stops/"+event.target.value).then(res =>res.json()).then((result)=>{

    const data = result.map((line) =><option value={line.Stop_Code}/>);
    this.setState({list: data})
    console.log(data);
    });

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
          <input value={this.state.term} list='item' onChange={this.onChange} />
          <datalist id="item">{this.state.list}</datalist>
          <button>Add</button>
        </form>

        <List items={this.state.items} />

        </div>
    );
  }



}
