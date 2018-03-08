import React from 'react';
import Stop from './Stop.js';
import TimeTables from "./TimeTables.js";
import Routes from "./Routes.js";

class Post extends React.Component{


  render(){
    return(
      <div className="Post">
      <button onClick={console.log("Stop")}>Stop</button>
      <button>Route</button>
      <button>Stop Time</button>
        <Stop />
        <br />
        <Routes />
        <br />
        <TimeTables />
      </div>

    );
  }

}
export default Post;
