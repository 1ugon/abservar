import React from "react";

import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>all rights reserved to abservar © {new Date().getFullYear()}</p>
      <a target="_blank" rel="noreferrer" href="https://lugon.dev">
        made by lugon
      </a>
    </div>
  );
}

export default Footer;
