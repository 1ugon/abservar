import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import "../style/artdetail.css";

function ArtDetail() {
  return (
    <div className="artdetail">
      <div className="backwhite">
        <Link to="/">
          <FaArrowLeft size={20} color="black" />
        </Link>
        <div className="backblack">
          <p>Teste</p>
        </div>
      </div>
    </div>
  );
}

export default ArtDetail;
