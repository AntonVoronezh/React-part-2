import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    car: [
      { name: "Ford", year: 2010 },
      { name: "Audi", year: 2011 },
      { name: "Vaz", year: 2012 }
    ],
    title: "React Component"
  };

  changeTitleHandler = () => {
    const oldTitle = this.state.title;


  };


}

export default App;
