import "../style/about.css";
import React from "react";
import { Link } from "react-router-dom";

import AboutVideo from "../assets/ABOUT.mp4";
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
          <video
            src={AboutVideo}
            width={"100%"}
            autoPlay
            playsInline
            loop
            muted
            className="aboutvideo"
          />
          <div className="aboutcel">
            <p>experimental audio-visual research</p>
            <p>based in brasília, brazil</p>
            <br />
            <p>started in the professional field in 2014 as video editor</p>
            <p>
              currently studying audio-visual at Instituto Federal de Brasília
            </p>
            <br />
            <p>
              main interest include cinematography, art direction, motion &
              sound design
            </p>
          </div>
          <div className="buttons">
            <div className="button" title="whatsapp">
              <ReactWhatsapp
                number="+556195518261"
                message="oi, abservar! 👁"
                element="div"
              >
                <FaRegCommentDots size={50} color="white" />
              </ReactWhatsapp>
            </div>
            <div className="button" title="e-mail">
              <a href="mailto:abservar@gmail.com">
                <FaEnvelope size={50} color="white" />
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
