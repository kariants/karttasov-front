import React, { Component } from 'react';

export default class RoutesAddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      list: '',
      stoplist: [],
    };
  }

appendList(){
  const data = this.state.items.map((line) =>

    <div style={{border: "1px solid black", margin:"15px" }} id={"Stop"+line} key={line}>
    <p>{line}</p>
    <button type="button" onClick={this.remove.bind(this)}>Remove</button>
    <button type="button" onClick={this.up.bind(this)}>Move Up</button>
    <button type="button" onClick={this.down.bind(this)}>Move Down</button>
    </div>);

  this.setState({stoplist: data}, () =>{
    console.log(this.state)
})
}
up(event){
  var html = event.target.parentElement.childNodes[0].innerHTML;
  var index = this.state.items.indexOf(html);
  var array = this.state.items;
  if(index !== 0){

    var minIndex = index -1;
    var otherHtml = this.state.items[minIndex];
    array[minIndex] = html;
    array[index] = otherHtml;
    this.appendList();
  }

}
down(event){
  var html = event.target.parentElement.childNodes[0].innerHTML;
  var index = this.state.items.indexOf(html);
  var array = this.state.items;
  
    if(index !== this.state.items.length){
      var minIndex = index +1;
      var otherHtml = this.state.items[minIndex];
      array[minIndex] = html;
      array[index] = otherHtml;
      this.appendList();
    }

}
componentWillReceiveProps(nextProps) {
  //console.log(nextProps);
  if(nextProps.stopCodeList !== undefined){
    this.setState({
      items: nextProps.stopCodeList
    },() =>{
      this.appendList();
  })
  }
}
remove(event){
  var array = this.state.items;
  console.log(event.target.parentElement.childNodes[1].data);
  var index = this.state.items.indexOf(event.target.parentElement.childNodes[1].data);
  console.log(index);

  array.splice(index,1);
  this.setState({
    items:array
  }, () =>{
    this.props.callback(this.state.items);
    this.appendList();
    console.log(this.state);
  })

}

  onChange(event){
    this.setState({ term: event.target.value });
    fetch("/stops/"+event.target.value).then(res =>res.json()).then((result)=>{
      console.log(result);
    const data = result.map((line) =><option key={line.Stop_Code} value={line.Stop_Code}/>);
    this.setState({list: data}, () =>{
      console.log(this.state)
  });

});
}

add(){
  if(this.state.items.indexOf(this.state.term) === -1){
  this.setState({
    term: '',
    items: [...this.state.items, this.state.term]
  }, () =>{this.props.callback(this.state.items)
    this.appendList();
  });
}
}

  render() {
    return(
      <div>
          <input value={this.state.term} list="StopList" onChange={this.onChange.bind(this)} />
          <datalist id="StopList">{this.state.list}</datalist>
          <button type="button" onClick={this.add.bind(this)}>Add</button>

        <div id={"stopdiv"}>{this.state.stoplist}</div>

        </div>
    );
  }



}
