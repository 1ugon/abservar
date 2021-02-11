import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import "../style/about.css";

import AboutImage from "../assets/about.png";

function About() {
  return (
    <div className="about">
      <div className="back">
        <Link to="/">
          <FaArrowLeft size={30} color="white" />
        </Link>
      </div>
      <div className="mainabout">
        <h1>404</h1>
        <img
          src={AboutImage}
          alt={"an eye in a scren"}
          className="aboutimage"
        />
        <p>experimental audio-visual research</p>
        <p>based in brasília, brazil</p>
        <br />
        <p>started in the professional field in 2014 as video editor</p>
        <p>currently studying audio-visual at Instituto Federal de Brasília</p>
        <br />
        <p>
          main interest include cinematography, art direction, motion & sound
          design
        </p>
      </div>
    </div>
  );
}

export default About;
