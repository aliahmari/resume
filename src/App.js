import React, { Component } from "react";
import data from "./data.json";
/* import logo from "./logo.svg"; */
import "./App.css";
import { SocialIcon } from "react-social-icons";
import Fullpage from "./components/Fullpage";
import TitlesAndIcons from "./Sections/TitlesAndIcons.js";
import AboutSection from "./Sections/AboutSection";
import Skills from "./Sections/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />

        <TitlesAndIcons />
        <AboutSection />
        <Skills />
      </div>
    );
  }
}

export default App;
