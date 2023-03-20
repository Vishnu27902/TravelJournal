import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./style.css";

function Index(){
  return(
    <App/>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"));