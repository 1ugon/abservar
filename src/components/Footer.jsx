import React from "react";
import { FaEnvelope, FaVimeo, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="side">
        <a target="_blank" rel="noreferrer" href="mailto:abservar@gmail.com">
          <FaEnvelope size={50} color="black" />
        </a>
      </div>
      <div>
        <Link to="/about">
          <h1>sobre</h1>
        </Link>
      </div>
      <div className="side">
        <a target="_blank" rel="noreferrer" href="https://vimeo.com/abservar">
          <FaVimeo size={40} color="black" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/abservar/"
        >
          <FaInstagram size={40} color="black" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
