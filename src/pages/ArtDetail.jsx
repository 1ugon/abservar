import "../style/artdetail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Error from "../pages/Error";
import { useScrollToTop } from "../hooks/scroll";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

import { useArt } from "../data/arts";

function ArtDetail() {
  const [image, setImage] = useState(true);
  const params = useParams();
  const art = useArt(params.slang);

  useScrollToTop();

  useEffect(() => {
    const price =
      document.querySelector(".price") || document.querySelector(".priceoff");
    const contact =
      document.querySelector(".contact") ||
      document.querySelector(".contactoff");
    if (price === null || contact === null) {
    } else {
      if (image) {
        price.className = "priceoff";
        contact.className = "contactoff";
      } else {
        price.className = "price";
        contact.className = "contact";
      }
    }
  }, [image]);

  function getImage() {
    if (image) {
      return art.imagePrimary;
    } else {
      return art.imageSecundary;
    }
  }

  if (!art) {
    return <Error />;
  } else {
    return (
      <>
        <span className="cursor" />
        <div className="artdetail">
          <div className="back">
            <Link to="/">
              <FaArrowLeft size={30} color="white" />
            </Link>
          </div>
          <div>
            <div className="grid">
              <div className="gridimage">
                <img
                  src={getImage()}
                  className="imageprimary"
                  onClick={() => setImage(!image)}
                />
                {art.imagePrimary === art.imageSecundary ? (
                  ""
                ) : (
                  <p className="click">clique na imagem</p>
                )}
              </div>
              <div className="gridtext">
                <h1>{art.title.toLocaleUpperCase()}</h1>
                {art.link === "" ? (
                  ""
                ) : (
                  <a target="_blank" rel="noreferrer" href={art.link}>
                    <FaPlay size={40} color="white" />
                  </a>
                )}

                <h2>{art.descprim}</h2>
                <h2>{art.descsec}</h2>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ArtDetail;
