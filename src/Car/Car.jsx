import React, { Component } from "react";

export default props => (
  <div style={{
    border: '1px solid #ccc',
    marginBottom: '10px',
    padding: '10px',
    boxShadow:'0 4px 5px 0 rgba(0,0,0,.14)',
    borderRadius: 5
  }}>
    <h3>Car name is {props.name}</h3>
    <p>
      <strong>Year: {props.year}</strong>
    </p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete}>Click</button>
  </div>
);
