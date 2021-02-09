import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import "../style/about.css";

function About() {
  return (
    <div className="about">
      <div>
        <Link to="/">
          <FaArrowLeft size={20} color="white" />
        </Link>
      </div>
      <div className="mainabout">
        <h1>404</h1>
      </div>
    </div>
  );
}

export default About;
