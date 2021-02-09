import React from "react";

import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>ABSERVAR © {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
