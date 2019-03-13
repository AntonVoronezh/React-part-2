import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    car: [
      {name:'Ford', year:2010},
      {name:'Audi', year:2011},
      {name:'Vaz', year:2012}
    ],
    title: 'React Component'
  };

  render() {
    const cars = this.state.car;

    return (
      <div className="App">
      <h2>{this.state.title}</h2>
        <Car name={cars[0].name} year={cars[0].year} /> 
        <Car name={cars[1].name} year={cars[1].year} /> 
        <Car name={cars[2].name} year={cars[2].year} /> 
      </div>
    );
  }
}

export default App;
