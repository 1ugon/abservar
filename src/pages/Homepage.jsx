import React from "react";
import { Link } from "react-router-dom";

import "../style/homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="video">
        {/* <video src={} width={100%} autoPlay playsInline loop muted/> */}
      </div>
      <div className="sign">
        <Link className="link">???</Link>
      </div>
    </div>
  );
}

export default Homepage;
