import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curTime = new Date();
curTime = curTime.getHours();

const colChange = {};

if (curTime >= 1 && curTime < 12) {
  curTime = "Good Morning";
  colChange.color = "orange";
} else if (curTime >= 12 && curTime < 19) {
  curTime = "Good Afternoon";
  colChange.color = "yellow";
} else {
  curTime = "Good Night";
  colChange.color = "#444";
}

ReactDOM.render(
  <React.Fragment>
    <h1>
      Hello sir, <span style={colChange}>{curTime}</span>
    </h1>
  </React.Fragment>,
  document.getElementById("root")
);
