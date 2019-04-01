import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, Element } from "react-scroll";

class DownIcon extends Component {
render (){
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "-10px",
            transform: "translateY(-65px)"
          }}
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
            <FontAwesomeIcon style= {{fontSize: "40px"}} className="ScrollDown" icon={faChevronDown} />
          </Link>
          <Element name="About" className="element" />
        </div>
      );
}
}


export default DownIcon
