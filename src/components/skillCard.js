import React, { Component } from "react";
import "./skillCard.css";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
        <div className="skill-title-wrapper">
          <h4>{skill.content.title}</h4>
        </div>
        <div className="contactMe">
          <a href="https://t.me/ali_ahmari" className="aContactme">
            Contact Me!
          </a>
        </div>
      </div>
    );
  }
}
export default SkillCard;
