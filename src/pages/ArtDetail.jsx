import "../style/artdetail.css";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import About from "../pages/About";

import { FaArrowLeft, FaUserCircle } from "react-icons/fa";

import { useArt } from "../data/arts";

import { useScrollToTop } from "../hooks/scroll";

function ArtDetail() {
  const [image, setImage] = useState(true);
  const params = useParams();
  const art = useArt(params.slang);

  useScrollToTop();

  if (!art) {
    return <About />;
  } else {
    return (
      <>
        <span className="cursor" />
        <div className="artdetail">
          <div className="back">
            <Link to="/">
              <FaArrowLeft size={30} color="black" />
            </Link>
          </div>
          <div className="backwhite">
            <div className="grid">
              <div className="arttext">
                <h2>{art.title.toLocaleUpperCase()}</h2>
                <p>{art.description.toLocaleLowerCase()}</p>
              </div>
              <div>
                <h4>click me</h4>
                <img
                  className="artimage"
                  src={image ? art.imagePrimary : art.imageSecundary}
                  id="image"
                  onClick={() => {
                    setImage(!image);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="backblack">
            <div className="center">
              <div className="price">
                <h3>R${art.price},00</h3>
              </div>
            </div>
            <div className="profile">
              <Link to="/about" className="linkprofile">
                <p>contato</p>
                <FaUserCircle
                  size={50}
                  color="white"
                  title="contato"
                  className="button"
                />
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ArtDetail;
