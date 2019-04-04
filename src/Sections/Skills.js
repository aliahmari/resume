import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/skillCard";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <Fullpage className="third" color={this.props.color}>
        <h3 className="title">{data.sections[1].title}</h3>
        <div className="cardWrapper">
          {data.sections[1].items.map(eachSkill => {
            return <SkillCard skill={eachSkill} />;
          })}
        </div>
      </Fullpage>
    );
  }
}
export default Skills;
