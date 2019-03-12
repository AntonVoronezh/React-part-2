import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  render() {
    const divStyle = {
      textAlign: "center",
      border: "1px solid red"
    };

    return (
      <div className="App">
        <h2> hello dsdf </h2>
        <div className="ffff" style={divStyle}>
          vxfg2 fhkdgh <p> ghfkg </p>{" "}
        </div>{" "}
        <Car />
      </div>
    );
  }
}

export default App;
