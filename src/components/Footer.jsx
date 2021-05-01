import React from "react";
import { FaEnvelope, FaVimeo, FaInstagram } from "react-icons/fa";

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
        <p>abservar © {new Date().getFullYear()}</p>
        <br />
        <a target="_blank" rel="noreferrer" href="https://lugon.dev">
          made by lugon
        </a>
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
