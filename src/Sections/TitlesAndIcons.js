import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";
import "./TitlesAndIcons.css";

class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first" color={this.props.color}>
          <h1 className="title">{data.title}</h1>
          <h2 className="subtitle">{data.subtitle}</h2>
          <div className="socialicons">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <DownIcon />
        <Element name="About" className="element" />
      </div>
    );
  }
}

export default TitlesAndIcons;
