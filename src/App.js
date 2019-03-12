import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //   <h2>hello dsdf</h2>

    //   </div>
    // );

    return React.createElement(
      "div",
      { className: "App" },
      "kk",
      React.createElement("h2", null, "jdfsgnfg dgfsg")
    );
  }
}

export default App;
