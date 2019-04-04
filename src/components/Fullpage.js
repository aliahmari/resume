import React, { Component } from "react";
import "./Fullpage.css";

class Fullpage extends Component {
  render() {
    const { children } = this.props;
    const sectionBg = {
      backgroundColor: this.props.color
    };
    return (
      <div
        className={`fullpage ${this.props.className || ""}`}
        style={sectionBg}
      >
        {children}
      </div>
    );
  }
}

export default Fullpage;
