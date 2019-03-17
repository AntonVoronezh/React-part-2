import React from "react";
import "./Car.scss";

class Car extends React.Component {

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

  return (
    <div className="Car">
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

export default Car;
