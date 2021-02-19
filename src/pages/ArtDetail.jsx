import "../style/artdetail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import About from "../pages/About";

import { FaArrowLeft, FaUserCircle } from "react-icons/fa";

import { useArt } from "../data/arts";

import { useScrollToTop } from "../hooks/scroll";

function ArtDetail() {
  const [image, setImage] = useState(true);
  const params = useParams();
  const art = useArt(params.slang);

  useScrollToTop();

  useEffect(() => {
    function priceOn() {
      const price =
        document.querySelector(".price") || document.querySelector(".priceoff");
      if (price === null) {
      } else {
        if (image) {
          price.className = "priceoff";
        } else {
          price.className = "price";
        }
      }
    }

    priceOn();
  }, [image]);

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
                <p>{art.desc.toLocaleLowerCase()}</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={art.desclink}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1.5rem",
                  }}
                >
                  <h4 style={{ padding: 10 }}>link</h4>
                </a>
                <p>{art.descfull}</p>
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
              <div className="priceoff">
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
        </div>
      </>
    );
  }
}

export default ArtDetail;
