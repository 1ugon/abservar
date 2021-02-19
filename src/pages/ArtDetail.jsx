import "../style/artdetail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import About from "../pages/About";

import { FaArrowLeft } from "react-icons/fa";

import { useArt } from "../data/arts";

import { useScrollToTop } from "../hooks/scroll";

import Contact from "../assets/contact.png";
import NextImage from "../assets/nextimage.png";

function ArtDetail() {
  const [image, setImage] = useState(true);
  const params = useParams();
  const art = useArt(params.slang);

  useScrollToTop();

  function showArt() {
    const price =
      document.querySelector(".price") || document.querySelector(".priceoff");

    const art1 = document.querySelector(".artimage");
    const art2 = document.querySelector(".artimagesec");

    if (art1 === null && art2 === null && price === null) {
    } else {
      if (image) {
        art1.className = "artimage";
        art2.className = "artimagesec";
        price.className = "priceoff";
      } else {
        art2.className = "artimage";
        art1.className = "artimagesec";
        price.className = "price";
      }
    }
  }

  useEffect(() => {
    showArt();
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
              <div className="divtext">
                <h2>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={art.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {art.title.toLocaleUpperCase()}
                  </a>
                </h2>
                <p>{art.desc.toLocaleLowerCase()}</p>
                {art.descsec === "" ? (
                  ""
                ) : (
                  <p>{art.descsec.toLocaleLowerCase()}</p>
                )}
                {art.paper === "" ? "" : <p>Papel:</p>}
                {art.paper === "" ? "" : <p>- {art.paper}</p>}
                {art.dimension === "" ? "" : <p>Dimensão: </p>}
                {art.dimension === "" ? "" : <p> {art.dimension}</p>}
                {art.year === "" ? "" : <p>Ano: </p>}
                {art.year === "" ? "" : <p>– {art.year} </p>}
              </div>
              <div>
                <div className="divimage">
                  <h3 className="nextimage" onClick={() => setImage(!image)}>
                    clique uma ou duas vezes
                    <img src={NextImage} className="imagenext" />
                    <div className="artimage">
                      <img src={art.imagePrimary} />
                    </div>
                    <div className="artimagesec">
                      <img src={art.imageSecundary} />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="backblack">
            <div className="priceoff">
              <h3>R${art.price},00</h3>
            </div>
            <div className="profile">
              <Link to="/about">
                <img src={Contact} />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArtDetail;
