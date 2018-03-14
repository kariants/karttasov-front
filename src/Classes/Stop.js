import React from 'react';
import './Stop.css'

export class Stop extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    Stop_Code: '',
    Name: '',
    Desc: '',
    Lat:'',
    Lng:''

  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  var change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
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
    })
}});



}

  render() {
    return (
      <div>

            <p>Bus Stops Form</p>

            <form id="Stopform" onSubmit={this.handleSubmit}>

              <p>Stop Code: </p>
              <input required type="text" name="Stop_Code" id="Stop_Code" onChange={this.handleChange.bind(this)} value={this.state.Stop_Code}/>
              <br/>

              <p>Name: </p>
              <input required type="text" name="Name" id="Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
              <br/>

              <label htmlFor="Desc">Description
              <input required type="text" name="Desc" id="Desc" onChange={this.handleChange.bind(this)} value={this.state.Desc}/>
              </label><br/>

              <fieldset>
               <legend>Position:</legend>
              <label htmlFor="Latitude">Latitude
              <input required type="number" name="Lat" step="0.000001" id="Lat" placeholder="Latitude" onChange={this.handleChange.bind(this)} value={this.state.Lat}/>
              </label><br/>


              <label htmlFor="Longitude">Longitude
              <input required type="number" name="Lng" step="0.000001" id="Lng" placeholder="Longitude" onChange={this.handleChange.bind(this)} value={this.state.Lng}/>
              </label><br/>
              </ fieldset>



              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default Stop;
