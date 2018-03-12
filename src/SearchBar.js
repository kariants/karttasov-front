import React, { Component } from 'react';

export default class searchBar extends Component {
  constructor(props) {
  super(props);
  this.state = {
    list: ""
  };
  this.handleChange = this.handleChange.bind(this);
}
handleChange(event){
  var arr = [];
  fetch("/routes/"+event.target.value).then(res => res.json()).then((result) => {
    const data = result.map((line) =><option value={line.Line_Code}/>);
    data.map((tieto) => arr.push(tieto));
  });

  fetch("/stops/"+event.target.value).then(res => res.json()).then((result) => {
    const data = result.map((line) =><option value={line.Stop_Code}/>);
    data.map((tieto) => arr.push(tieto));
  });
  console.log(arr);
  this.setState({list: arr});
}

  render() {
    return (
      <div>
      <input type="text" placeholder="Search..."id="Search" list={"SandR"} onChange={this.handleChange.bind(this)} style={{width: '100%', height: 30}}/>
      <datalist id ="SandR">{this.state.list}</datalist>
      </div>
    )
  }
}
