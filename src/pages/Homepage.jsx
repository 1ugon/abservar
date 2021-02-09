import React from "react";
import { Link } from "react-router-dom";

import "../style/homepage.css";

import Banner from "../assets/BANNER.mp4";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="video">
          <video src={Banner} width={"100%"} autoPlay playsInline loop muted />
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
