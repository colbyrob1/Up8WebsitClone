import React, { Component } from "react";
import "./App.css";

class NumberButtons extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
           <th colSpan="1">
          {category}
          </th>
        </tr>
      );
    }
  }
    const button = (props) => {
    isOperator = val  => {
        return !isNaN(val) || val === "a";
    };

        return (
            <div
            className={`button ${this.isOperator(props.children) ? "" : "opperator"}`}

            onClick= {() => this.props.handleClick(props.children)}
        >
        )
}







export default Button;