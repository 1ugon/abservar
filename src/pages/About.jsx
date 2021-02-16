import "../style/about.css";
import React from "react";
import { Link } from "react-router-dom";

import AboutImage from "../assets/about.png";
import Footer from "../components/Footer";

import { FaArrowLeft, FaRegCommentDots, FaEnvelope } from "react-icons/fa";

import ReactWhatsapp from "react-whatsapp";

import { useScrollToTop } from "../hooks/scroll";

function About() {
  useScrollToTop();

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
          <img src={AboutImage} className="aboutimage" />
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
            <div className="button" title="WhatsApp">
              <ReactWhatsapp
                number="+556195518261"
                message="Olá Abservar! Gostaria de falar com você sobre a arte que vi no seu site"
                element="div"
              >
                <FaRegCommentDots size={30} color="white" />
              </ReactWhatsapp>
            </div>
            <div className="button" title="E-mail">
              <a href="mailto:abservar@gmail.com">
                <FaEnvelope size={30} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
