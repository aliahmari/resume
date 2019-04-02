import React, { Component } from "react";
import data from "./data.json";
/* import logo from "./logo.svg"; */
import "./App.css";
import TitlesAndIcons from "./Sections/TitlesAndIcons.js";
import AboutSection from "./Sections/AboutSection";
import Skills from "./Sections/Skills";
import Navigations from "./components/Navigations";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigations />
        <TitlesAndIcons />
        <AboutSection />
        <Skills />
      </div>
    );
  }
}

export default App;
