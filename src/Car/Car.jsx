import React, { Component } from "react";
import "./Car.css";
import Radium from "radium";

const Car = props => {
  const inputClasses = ["input"];

  if (props.name !== "") {
    inputClasses.push("green");
  } else {
    inputClasses.push("red");
  }

  if (props.name.length > 5) {
    inputClasses.push("bold");
  }



  return (
    <div className="Car" style={style}>
      <h3>Car name is {props.name}</h3>
      <p>
        <strong>Year: {props.year}</strong>
      </p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(" ")}
      />
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};

export default Radium(Car);
