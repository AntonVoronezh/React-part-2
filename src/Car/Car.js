import React, { Component } from "react";

export default props => (
  <div>
    <h3>Car name is {props.name}</h3>
    <p>
      <strong>Year: {props.year}</strong>
    </p>
  </div>
);
