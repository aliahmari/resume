import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navigations.css";

class Navigations extends Component {
  state = {
    btnColor: "#fff",
    textColor: "#000",
    firstSection: "linear-gradient(75deg, #f6f6f6, #fefefe) repeat-x",
    secondSection: "#fff",
    tihrdSection: "linear-gradient(75deg, #f6f6f6, #fefefe) repeat-x",
    btnBorder: "1px solid",
    btnRadius: "5px",
    btnBackground: "none",
    navBackgroundColor: "#2a3e55",
    innerNavBg: "none"
  };
  ChangeColor = () => {
    this.setState({
      btnColor: this.state.btnColor === "#32b4fd" ? "#fff" : "#32b4fd",
      btnBackground: this.state.btnBackground === "none" ? "#fff" : "none",
      navBackgroundColor: this.state.navBackgroundColor === "#2a3e55" ? "#fff" : "#2a3e55",
      innerNavBg: this.state.innerNavBg === "none" ? "#f6f5f4" : "none",
      btnBorder: this.state.btnBorder === "1px solid" ? "none" : "1px solid"
    });
  };
  render() {
    return (
      <div
        style={{ background: this.state.navBackgroundColor }}
        className="navigation"
      >
        <div style={{background: this.state.innerNavBg}} className="innerNav">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={50}
            delay={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <a
              style={{
                color: this.state.btnColor
              }}
              className="stickyNav"
            >
              About
            </a>
          </Link>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={50}
            delay={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <a
              style={{
                color: this.state.btnColor
              }}
              className="stickyNav"
            >
              Skills
            </a>
          </Link>
          <a
            style={{
              color: this.state.btnColor,
              border: this.state.btnBorder
            }}
            className="stickyNav ChangeColor"
            onClick={() => {
              this.ChangeColor();
            }}
          >
            Click Here!
          </a>
        </div>
      </div>
    );
  }
}
export default Navigations;
