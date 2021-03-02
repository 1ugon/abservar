import "../style/homepage.css";
import React from "react";
import { Link } from "react-router-dom";

import AboutVideo from "../assets/ABOUT.mp4";
import Footer from "../components/Footer";

import { FaRegCommentDots, FaEnvelope } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";

import { useScrollToTop } from "../hooks/scroll";

import { arts } from "../data/arts";
import { motions } from "../data/motions";

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
          <div className="button" title="whatsapp">
            <ReactWhatsapp
              number="+556195518261"
              message="oi, abservar! 👁"
              element="div"
            >
              <FaRegCommentDots size={50} color="black" />
            </ReactWhatsapp>
          </div>
          <div className="button" title="e-mail">
            <a href="mailto:abservar@gmail.com">
              <FaEnvelope size={50} color="black" />
            </a>
          </div>
        </div>
        <div className="mainabout">
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
        </div>
        <div className="motions">
          <div className="grid">
            {motions.map((motion) => (
              <div key={motion.id}>
                <img src={motion.video} width={"100%"} />
              </div>
            ))}
          </div>
        </div>
        <div className="arts">
          <div className="fade">
            <div className="grid">
              {arts.map((art) => (
                <Link to={`/art/${art.slang}`} key={art.id}>
                  <img
                    src={art.imagePrimary}
                    alt={art.id}
                    className={art.class}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
