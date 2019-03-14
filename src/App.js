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
    title: "React Component",
    showCars: false
  };

  onChangeName = (argName, argIndex) => {
    // console.log(name, index)
    const car = this.state.car[argIndex];
    car.name = argName;
    const cars = [...this.state.car];
    cars[argIndex] = car;
    this.setState({car:cars});
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };


  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>

        <button onClick={this.toggleCarsHandler}>toggle cars</button>

        {this.state.showCars
          ? this.state.car.map((elem, i) => {
              return (
                <Car
                  key={i}
                  name={elem.name}
                  year={elem.year}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
