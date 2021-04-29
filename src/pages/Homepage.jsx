import "../style/homepage.css";
import React from "react";
import { Link } from "react-router-dom";

import AboutVideo from "../assets/ABOUT.mp4";
import Footer from "../components/Footer";

import { FaRegCommentDots, FaEnvelope } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import { useScrollToTop } from "../hooks/scroll";

function Homepage() {
  useScrollToTop();

  function fadeIn() {
    const images = document.querySelector(".motions");
    const fade =
      document.querySelector(".fade") || document.querySelector(".fadein");
    if (images === null) {
    } else {
      this.scrollY >= images.scrollHeight + 50
        ? (fade.className = "fadein")
        : (fade.className = "fade");
    }
  }

  window.addEventListener("scroll", fadeIn, false);

  return (
    <>
      <span className="cursor" />
      <div className="homepage">
        <div className="nav">
          <div className="button">
            <h2>formação</h2>
          </div>
          <div className="button">
            <h2>habilidades</h2>
          </div>
        </div>
        <div className="mainabout">
          <div className="construction">
            <h1>Estamos em construção por favor tenha paciência</h1>
          </div>
        </div>
        <div className="motions">
          <div className="grid"></div>
        </div>
        <div className="arts">
          <div className="fade"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
