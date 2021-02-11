import React from "react";
import { Link } from "react-router-dom";

import "../style/homepage.css";

import Footer from "../components/Footer";

import Banner from "../assets/BANNER.mp4";
import Logo from "../assets/logo.png";
import { arts } from "../data/arts";
import { motions } from "../data/motions";

function Homepage() {
  for (var i = 0; i < 4; i++) {}

  return (
    <>
      <div className="homepage">
        <img className="signimg" src={Logo} />
        <div className="video">
          <video src={Banner} width={"70%"} autoPlay playsInline loop muted />
        </div>
        <div className="sign">
          <Link className="link" to="/about">
            ???
          </Link>
        </div>
        <div className="arts">
          <div className="grid">
            {arts.map((art) => (
              <div key={art.id}>
                <img src={art.image} alt={art.imagealt} className={art.class} />
              </div>
            ))}
          </div>
        </div>
        <div className="motions">
          <div className="grid">
            {motions.map((motion) => (
              <div key={motion.id}>
                <video
                  src={motion.video}
                  width={"100%"}
                  autoPlay
                  playsInline
                  loop
                  muted
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
