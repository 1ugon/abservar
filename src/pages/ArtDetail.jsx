import "../style/artdetail.css";
import React from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import About from "../pages/About";

import { FaArrowLeft, FaIdCard, FaEnvelope } from "react-icons/fa";

import { useArt } from "../data/arts";

import { useScrollToTop } from "../hooks/scroll";

function ArtDetail() {
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
              <div>
                <h2>{art.title.toLocaleUpperCase()}</h2>
                <p>{art.description}</p>
              </div>
              <div>
                <img className="artimage" src={art.image} alt={art.imagealt} />
              </div>
            </div>
          </div>
          <div className="backblack">
            <div className="center">
              <div className="price">
                <h3>R${art.price},00</h3>
                <h3 className="contato">Contato</h3>
                <Link to="/about">
                  <FaIdCard size={30} color="white" />
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ArtDetail;
