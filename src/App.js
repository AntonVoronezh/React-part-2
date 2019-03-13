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

  changeTitleHandler = (argTitle) => {

    this.setState({
      title: argTitle
    })
  }

  handleInput(event) {
    this.setState({
      title: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        

        <input type="text" onChange={this.handleInput.bind(this)} />

        <button onClick={this.changeTitleHandler.bind(this, 'changed!')}>change title</button>

        {
          this.state.car.map((elem, i) => {
            return (<Car 
                    key={i}
                    name={elem.name}
                    year={elem.year}
                    onChangeTitle={() => this.changeTitleHandler(elem.name)}
            />
            )
          })
        }


      </div>
    );
  }
}

export default App;
