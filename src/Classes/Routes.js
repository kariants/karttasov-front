import React from 'react';
import RoutesAddList from './RoutesAddList.js';

export class Routes extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    Agency: this.props.Routes.Agency,
    Description: this.props.Routes.Description,
    Line_Code: this.props.Routes.Line_Code,
    stopCodeList: this.props.Routes.stopCodeList,
    list:this.props.Routes.list
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

stopCodeCallback = (stopCodeList) =>{
      this.setState({stopCodeList: stopCodeList});
  }

handleChange(event) {
  var change = {}
    change[event.target.name] = event.target.value
    this.setState(change,()=>{this.props.callback({Routes:this.state})})

    if(event.target.name === "Line_Code"){

      fetch("/routes/"+event.target.value).then(res =>res.json()).then((result)=>{

      if(result.length >1 || result.length === 0){
      const data = result.map((line) =><option key={line.Line_Code} value={line.Line_Code}/>);
      this.setState({list: data})

    }else{
      this.setState({
        Agency: result[0].Agency,
        Line_Code: result[0].Line_Code,
        Description: result[0].Desc,
        stopCodeList: result[0].stopCodeList,
      },() =>{ this.props.callback({Routes:this.state})})

    }
  });
}
}
remove(event){
  event.preventDefault();
  fetch('/routes/remove', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'},

      body: JSON.stringify({
        Line_Code: this.state.Line_Code
    }),
  }).then(res => res.json())
    .then((data) =>{
       console.log(data);
       if(data.ok === 1){
       this.setState({
         Agency: '',
         Description: '',
         Line_Code: '',
         stopCodeList:''
       },() =>{ this.props.callback({Stop:this.state})});
}});

}

handleSubmit(event) {
//  console.log(this);
event.preventDefault();
var line="";
  if(this.state.Line_Code.length != 2 || this.state.Line_Code.length != 4 ){
    line = 0+this.state.Line_Code;
  }else{
    line = this.state.Line_Code;
  }

fetch("/routes/new",{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'},

    body: JSON.stringify({
      Agency:this.state.Agency,
      Description:this.state.Description,
      Line_Code:line,
      Stop_Code:this.state.stopCodeList
    }),
})
.then(res => res.json())
.then((data) =>{
   console.log(data);
   if(data.ok === 1){
    this.setState({
      Agency: '',
      Description: '',
      Line_Code: '',
      stopCodeList:''
    })

}});

}
  render() {
    return (
      <div>
          <p>Routes Form</p>

            <form onSubmit={this.handleSubmit}>

            <label htmlFor="Line_Code">Line Code
            <input required list="item" type="text" name="Line_Code" id="Line_Code" onChange={this.handleChange.bind(this)} value={this.state.Line_Code}/>
            <datalist id="item">{this.state.list}</datalist>
            </label><br/>

            <label htmlFor="Description">Description
            <input required type="text" name="Description" id="Description" onChange={this.handleChange.bind(this)} value={this.state.Description}/>
            </label><br/>

            <label htmlFor="Agency">Agency
            <input required type="text" name="Agency" id="Agency" onChange={this.handleChange.bind(this)} value={this.state.Agency}/>
            </label><br/>

            <fieldset>
            <legend>Stop Code</legend>
            <RoutesAddList callback={this.stopCodeCallback}/>

            </fieldset>
              <input type="submit" value="Submit"/>
              <button type="button" id="remove_button" onClick={this.remove.bind(this)}>Remove Route</ button>
            </form>

      </div>
    );
  }
}

export default Routes;
