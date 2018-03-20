import React from 'react';
import './Stop.css'

export class Stop extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: this.props.Stop.Stop_Code,
    Name: this.props.Stop.Name,
    Desc: this.props.Stop.Desc,
    Lat:this.props.Stop.Lat,
    Lng:this.props.Stop.Lng,
    list:this.props.Stop.list
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  var change = {}
    change[event.target.name] = event.target.value
    this.setState(change,()=>{this.props.callback({Stop:this.state})})

    if(event.target.name === "Stop_Code"){

    fetch("/stops/"+event.target.value).then(res =>res.json()).then((result)=>{

      if(result.length > 1 || result.length === 0){
    const data = result.map((line) =><option value={line.Stop_Code}/>);
    this.setState({list: data})

  }else{
    this.setState({
      Stop_Code: result[0].Stop_Code,
      Name: result[0].Name,
      Desc: result[0].Desc,
      Lat: result[0].Position.lat,
      Lng: result[0].Position.lng
    },() =>{ this.props.callback({Stop:this.state})})
  }
    });
}
}
remove(event){

  event.preventDefault();
  fetch('/stops/remove', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'},

      body: JSON.stringify({
        Stop_Code: this.state.Stop_Code
    }),
  }).then(res => res.json())
    .then((data) =>{
       console.log(data);
       if(data.ok === 1){
       this.setState({
         Stop_Code: '',
         Name: '',
         Desc: '',
         Lat:'',
         Lng:''
       },() =>{ this.props.callback({Stop:this.state})});
}});
}
handleSubmit(event) {
  //console.log(this);
  event.preventDefault();
  //console.log(this.state);

fetch('/stops/new', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'},

  body: JSON.stringify({
    Stop_Code: this.state.Stop_Code,
    Name: this.state.Name,
    Pos:{lat:this.state.Lat , lng:this.state.Lng},
    Desc: this.state.Desc
}),
})
.then(res => res.json())
.then((data) =>{
   console.log(data);
   if(data.ok === 1){
    this.setState({
      Stop_Code: '',
      Name: '',
      Desc: '',
      Lat:'',
      Lng:''
    },() =>{ this.props.callback({Stop:this.state})})
}});



}

  render() {
    return (
      <div id="Stopformdiv">

            <p>Bus Stops Form</p>

            <form id="Stopform" onSubmit={this.handleSubmit}>

              <p>Stop Code: </p>
              <input required type="text" list="item" name="Stop_Code" id="Stop_Code" onChange={this.handleChange.bind(this)} value={this.state.Stop_Code}/>
              <datalist id="item">{this.state.list}</datalist>
              <br/>

              <p>Name: </p>
              <input required type="text" name="Name" id="Name" onChange={this.handleChange.bind(this)} value={this.state.Name}/>
              <br/>

              <p>Desc: </p>
              <input required type="text" name="Desc" id="Desc" onChange={this.handleChange.bind(this)} value={this.state.Desc}/>
              <br/>

              <fieldset>
               <legend>Position:</legend>
              <p>Latitude: </p>
              <input required type="number" name="Lat" step="0.000001" id="Lat" placeholder="Latitude" onChange={this.handleChange.bind(this)} value={this.state.Lat}/>
              <br/>


              <p>Longitude: </p>
              <input required type="number" name="Lng" step="0.000001" id="Lng" placeholder="Longitude" onChange={this.handleChange.bind(this)} value={this.state.Lng}/>
              <br/>
              </ fieldset>



              <input type="submit" value="Submit" />
              <button type="button" id="remove_button" onClick={this.remove.bind(this)}>Remove Stop</ button>
            </form>
      </div>
    );
  }
}

export default Stop;
