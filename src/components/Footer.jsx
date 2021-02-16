import React from "react";

import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3>ABSERVAR © {new Date().getFullYear()}</h3>
      <p>
        Made by{" "}
        <a target="_blank" rel="noreferrer" href="https://lugon.dev">
          lugon.dev
        </a>
      </p>
    </div>
  );
}

export default Footer;
