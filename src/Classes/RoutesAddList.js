import React, { Component } from 'react';

export default class RoutesAddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [this.props.stopCodeList],
      list: ''
    };
  }

  onChange(event){
    this.setState({ term: event.target.value });

    fetch("/stops/"+event.target.value).then(res =>res.json()).then((result)=>{

    const data = result.map((line) =><option key={line.Stop_Code} value={line.Stop_Code}/>);
    this.setState({list: data})
    });

  }

add(){
  this.setState({
    term: '',
    items: [...this.state.items, this.state.term]
  }, () =>{this.props.callback(this.state.items)});
}

  render() {
    return(
      <div>
        <form className="RoutesAddList">
          <input value={this.state.term} list="StopList" onChange={this.onChange.bind(this)} />
          <datalist id="StopList">{this.state.list}</datalist>
          <button type="button" onClick={this.add.bind(this)}>Add</button>
        </form>

        <ul>{this.state.items.map((stop) =>{<li>{stop}</li>})}</ul>

        </div>
    );
  }



}
