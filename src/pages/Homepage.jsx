import "../style/homepage.css";
import React from "react";
import { Link } from "react-router-dom";

import Header from "../assets/HEADER.mp4";
import Footer from "../components/Footer";

import { arts } from "../data/arts";
import { motions } from "../data/motions";

function Homepage() {
  function fadeIn() {
    const images = document.querySelector(".arts");
    const fade =
      document.querySelector(".fade") || document.querySelector(".fadein");
    if (images !== null) {
      this.scrollY >= images.scrollHeight
        ? (fade.className = "fadein")
        : (fade.className = "fade");
    } else {
    }
  }

  window.addEventListener("scroll", fadeIn, false);

  return (
    <>
      <span className="cursor" />
      <div className="homepage">
        <Link className="link" to="/about">
          ???
        </Link>
        <div className="video">
          <video src={Header} width={"100%"} autoPlay playsInline loop muted />
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
                  <img src={art.image} alt={art.id} className={art.class} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
