import React from "react";
import "./Car.scss";
import withClass from "../hoc/withClass.jsx";
import PropTypes from "prop-types";

class Car extends React.Component {
  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    console.log("Car render");

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
      <React.Fragment>
        <h3>Car name is {this.props.name}</h3>
        <p>
          <strong>Year: {this.props.year}</strong>
        </p>
        <input
          type="text"
          ref={inputRef => this.inputRef = inputRef}
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
};

export default withClass(Car, "Car");
