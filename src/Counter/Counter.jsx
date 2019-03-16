import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    counter: 0
  };


  render() {
    // return (
    //   <div>
    //     <h2>Counter {this.state.counter}</h2>
    //     <button onClick={this.addCounter}>+</button>
    //     <button onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
    //   </div>
    // );

  }
}
