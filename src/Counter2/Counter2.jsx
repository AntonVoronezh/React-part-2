import React from "react";
import { clickedContext } from "../App.jsx";

export default props => {
  return (
    <div
      style={{
        border: "1px solid green",
        width: 200,
        margin: "0 auto"
      }}
    >
      <h3>Counter 2</h3>
      <clickedContext.Consumer>
        {clicked => clicked ? <p>Clicked</p> : null}
      </clickedContext.Consumer>
    </div>
  );
};
