import React, { Component } from 'react';

export default class searchBar extends Component {
  constructor(props) {
  super(props);
  this.state = {
    route: "",
    stop : "",
    all: ""
  };
  this.handleChange = this.handleChange.bind(this);
}
handleChange(event){
if(event.target.value > 0){
  fetch("/routes/"+event.target.value).then(res => res.json()).then((result) => {
    const data = result.map((line) =><option value={"Route: "+line.Line_Code} />);
    this.setState({route: data})
  });

  fetch("/stops/"+event.target.value).then(res => res.json()).then((result) => {
    const data = result.map((line) =><option value={"Stop: "+line.Stop_Code}/>);
    this.setState({stop: data})
  });
}
}
combiner(){
  var rou = this.state.route;
  var all = rou.concat(this.state.stop);
  return all
}

  render() {

    return (
      <div>
      <input type="text" placeholder="Search..."id="Search" list={"SandR"} onChange={this.handleChange.bind(this)} value={this.state.name} style={{width: '100%', height: 30}}/>
      <datalist id="SandR">{this.combiner()}</datalist>
      </div>
    )
  }
}
