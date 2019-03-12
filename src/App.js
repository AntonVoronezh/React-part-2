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
        <Car name={"Ford"} year={2010} />
        <Car name="Audi" year={2000}>
          <p>COLOR</p>
        </Car>
      </div>
    );
  }
}

export default App;
