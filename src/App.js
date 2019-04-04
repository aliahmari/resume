import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from "./Sections/TitlesAndIcons.js";
import AboutSection from "./Sections/AboutSection";
import Skills from "./Sections/Skills";
import { Link, Element } from "react-scroll";
import SnowStorm from "react-snowstorm";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ReactTooltip from 'react-tooltip'

class App extends Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "Site's style changed",
      message: "Click again to see other style!",
      type: "info",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 4000 },
      dismissable: { click: true }
    });
  }

  state = {
    first: "#f6f6f6",
    second: "#ffffff",
    third: "#f6f6f6",
    btnColor: "#fff",
    textColor: "#000",
    firstSection: "linear-gradient(75deg, #f6f6f6, #fefefe) repeat-x",
    secondSection: "#fff",
    tihrdSection: "linear-gradient(75deg, #f6f6f6, #fefefe) repeat-x",
    btnBorder: "1px solid",
    btnRadius: "5px",
    btnBackground: "none",
    navBackgroundColor: "#2a3e55",
    innerNavBg: "none",
    firstSectionBg: "#f6f6f6",
    datatip: "Current theme is Defualt"
  };

  ChangeColor = () => {
    this.setState({
      btnColor: this.state.btnColor === "#32b4fd" ? "#fff" : "#32b4fd",
      btnBackground: this.state.btnBackground === "none" ? "#fff" : "none",
      navBackgroundColor:
        this.state.navBackgroundColor === "#2a3e55" ? "#fff" : "#2a3e55",
      innerNavBg: this.state.innerNavBg === "none" ? "#f6f5f4" : "none",
      btnBorder: this.state.btnBorder === "1px solid" ? "none" : "1px solid",
      firstSectionBg: this.state.firstSectionBg === "#000" ? "#f6f6f6" : "#000",
      first: this.state.first === "#fff6f6" ? "#f6f6f6" : "#fff6f6",
      second: this.state.second === "#f6f6f6" ? "#ffffff" : "#f6f6f6",
      third: this.state.third === "#fff6f6" ? "#f6f6f6" : "#fff6f6",
      datatip:
        this.state.datatip === "Current theme is Awful🤮"
          ? "Current theme is Defualt"
          : "Current theme is Awful🤮"
    });
  };

  render() {
    return (
      <div className="App">
        <div
          style={{ background: this.state.navBackgroundColor }}
          className="navigation"
        >
          <div
            style={{ background: this.state.innerNavBg }}
            className="innerNav"
          >
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
            <ReactNotification ref={this.notificationDOMRef} />
            <a
              data-tip={this.state.datatip}
              style={{
                color: this.state.btnColor,
                border: this.state.btnBorder
              }}
              className="stickyNav ChangeColor"
              onClick={() => {
                this.ChangeColor();
                this.addNotification();
              }}
            >
              Change Style!
            </a>
            <ReactTooltip place="right" type="dark" effect="solid"/>
          </div>
        </div>
        
        <TitlesAndIcons color={this.state.first} />
        <AboutSection color={this.state.second} />
        <Skills color={this.state.third} />
        <SnowStorm followMouse={false} snowColor={"#000"} />
        
      </div>
    );
  }
}

export default App;
