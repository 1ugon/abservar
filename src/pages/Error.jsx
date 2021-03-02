import "../style/error.css";
import React from "react";
import { Link } from "react-router-dom";

import ErrorVideo from "../assets/ERROR.mp4";
import Footer from "../components/Footer";

import { FaArrowLeft } from "react-icons/fa";

function Error() {
  return (
    <>
      <span className="cursor" />
      <div className="error">
        <div className="back">
          <Link to="/">
            <FaArrowLeft size={30} color="white" />
          </Link>
        </div>
        <div className="diverror">
          <video
            src={ErrorVideo}
            width={"100%"}
            autoPlay
            playsInline
            loop
            muted
            className="errorvideo"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
