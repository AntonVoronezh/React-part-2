import React, { Component } from "react";
import Auxiliary from '../hoc/Auxiliary.jsx'

export default class ErrorBoundary extends Component {
  state = {
    counter: 0
  };

  addCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      })
  };

  render() {
    return (
      // <React.Fragment>
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
      </Auxiliary>
    );
    // return [
    //     <h2 key={1}>Counter {this.state.counter}</h2>,
    //     <button key={2} onClick={this.addCounter}>+</button>,
    //     <button key={3} onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
    // ];
  }
}
