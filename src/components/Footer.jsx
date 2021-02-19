import React from "react";

import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h4>ABSERVAR © {new Date().getFullYear()}</h4>
      <a target="_blank" rel="noreferrer" href="https://lugon.dev">
        made by lugon.dev
      </a>
    </div>
  );
}

export default Footer;
