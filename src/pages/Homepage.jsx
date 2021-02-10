import React from "react";
import { Link } from "react-router-dom";

import "../style/homepage.css";

import Footer from "../components/Footer";

import Banner from "../assets/BANNER.mp4";
import Sign from "../assets/sign.png";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <img className="signimg" src={Sign} />
        <div className="video">
          <video src={Banner} width={"60%"} autoPlay playsInline loop muted />
        </div>
        <div className="sign">
          <Link className="link" to="/about">
            ???
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
