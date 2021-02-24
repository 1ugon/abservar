import "../style/artdetail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import About from "../pages/About";

import { FaArrowLeft } from "react-icons/fa";

import { useArt } from "../data/arts";

import { useScrollToTop } from "../hooks/scroll";

import Contact from "../assets/contact.png";
import Play from "../assets/play.png";

function ArtDetail() {
  const [image, setImage] = useState(true);
  const params = useParams();
  const art = useArt(params.slang);

  useScrollToTop();

  useEffect(() => {
    const price =
      document.querySelector(".price") || document.querySelector(".priceoff");
    if (price === null) {
    }
    if (image) {
      price.className = "priceoff";
    } else {
      price.className = "price";
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
                    <img src={Play} className="playicon" />
                  </a>
                </h2>
                <div className="artinfo">
                  <p>{art.desc.toLocaleLowerCase()}</p>
                  {art.descsec === "" ? (
                    ""
                  ) : (
                    <p>{art.descsec.toLocaleLowerCase()}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="divimage">
                  <h3 className="nextimage">
                    clique na imagem
                    <div className="artimage">
                      <img src={getImage()} onClick={() => setImage(!image)} />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="backblack">
            <div className="priceoff">
              <h3>R${art.price}</h3>
            </div>
            <div className="infos">
              {art.paper === "" ? "" : <p>Papel:</p>}
              {art.paper === "" ? "" : <p>- {art.paper}</p>}
              {art.dimension === "" ? "" : <p>Dimensão: </p>}
              {art.dimension === "" ? "" : <p> {art.dimension}</p>}
              {art.year === "" ? "" : <p>Ano: </p>}
              {art.year === "" ? "" : <p>– {art.year} </p>}
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
