import "../style/about.css";
import React from "react";
import { Link } from "react-router-dom";

import AboutImage from "../assets/about.png";
import Footer from "../components/Footer";

import { FaArrowLeft, FaRegCommentDots, FaEnvelope } from "react-icons/fa";

import ReactWhatsapp from "react-whatsapp";

function About() {
  return (
    <>
      <span className="cursor" />
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
          <p>
            currently studying audio-visual at Instituto Federal de Brasília
          </p>
          <br />
          <p>
            main interest include cinematography, art direction, motion & sound
            design
          </p>
          <div className="buttons">
            <ReactWhatsapp
              number="1-212-736-5000"
              message="Olá Abservar!"
              element="FaRegCommentDots"
            >
              <FaRegCommentDots size={30} color="white" />
            </ReactWhatsapp>
            <FaEnvelope size={30} color="white" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
