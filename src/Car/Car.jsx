import React from "react";
import "./Car.scss";
// import Radium from "radium";

class Car extends React.Component {

  componentWillReceiveProps(nextProps){
    console.log('Car componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Car shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Car componentWillUpdate', nextProps, nextState)
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState)
  // }

  componentDidUpdate() {
    console.log('Car componentDidUpdate')
  }

  // getSnapshotBeforeUpdate() {
  //   console.log('Car getSnapshotBeforeUpdate')
  // }

  componentWillUnmount() {
    console.log('Car componentWillUnmount')
  }

  render() {
    console.log('Car render')

    const inputClasses = ["input"];

  if (this.props.name !== "") {
    inputClasses.push("green");
  } else {
    inputClasses.push("red");
  }

  if (this.props.name.length > 5) {
    inputClasses.push("bold");
  }

  const style = {
    border: "1px solid #ccc",
    boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
    ":hover": {
      border: "1px solid #aaa",
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, .34)",
      cursor:'pointer'
    }
  };

  return (
    <div className="Car" style={style}>
      <h3>Car name is {this.props.name}</h3>
      <p>
        <strong>Year: {this.props.year}</strong>
      </p>
      <input
        type="text"
        onChange={this.props.onChangeName}
        value={this.props.name}
        className={inputClasses.join(" ")}
      />
      <button onClick={this.props.onDelete}>delete</button>
    </div>
  ); 
  }
 
};

// export default Radium(Car);
export default Car;
