import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car.jsx";

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
    const car = this.state.car[argIndex];
    car.name = argName;
    const cars = [...this.state.car];
    cars[argIndex] = car;
    this.setState({ car: cars });
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  deleteHandler = argIndex => {
    const cars = this.state.car.concat();
    cars.splice(argIndex, 1);
    this.setState({ car: cars });
  };

  render() {
    const cars = this.state.showCars
      ? this.state.car.map((elem, i) => {
          return (
            <Car
              key={i}
              name={elem.name}
              year={elem.year}
              onDelete={this.deleteHandler.bind(this, i)}
              onChangeName={event => this.onChangeName(event.target.value, i)}
            />
          );
        })
      : null;

    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <button onClick={this.toggleCarsHandler}>toggle cars</button>
        <div style={{
          width:400,
          margin: 'auto',
          paddingTop: '20px'
        }}>{cars}</div>
      </div>
    );
  }
}

export default App;
