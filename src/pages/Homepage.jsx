import "../style/homepage.css";
import React from "react";
import { Link } from "react-router-dom";

import Header from "../assets/HEADER.mp4";
import Footer from "../components/Footer";

import { arts } from "../data/arts";
import { motions } from "../data/motions";

function Homepage() {
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
                <video
                  src={motion.video}
                  width={"100%"}
                  autoPlay
                  playsInline
                  loop
                  muted
                  className="motion"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="arts">
          <div className="grid">
            {arts.map((art) => (
              <Link to={`/art/${art.slang}`}>
                <div key={art.id}>
                  <img
                    src={art.image}
                    alt={art.imagealt}
                    className={art.class}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
