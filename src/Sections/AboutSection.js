import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";

import './AboutSection.css'

class AboutSection extends Component {
  render() {
    return (
      
      <Fullpage className="second">
      <h3 className="title">{data.sections[0].title}</h3>
        <div className="BackgroundBox">
          <p className="aboutcontent">{data.sections[0].items[0].content}</p>
        </div>
      </Fullpage>
    );
  }
}
export default AboutSection;
