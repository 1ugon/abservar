import "../style/artdetail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Player from "../components/Player";
import Error from "../pages/Error";
import Play from "../assets/play.png";
import { useScrollToTop } from "../hooks/scroll";
import { FaArrowLeft } from "react-icons/fa";
import ImageBackground from "../assets/Background.png";

import { useArt } from "../data/arts";

function ArtDetail() {
  const [image, setImage] = useState(true);
  const params = useParams();
  const art = useArt(params.slang);

  useScrollToTop();

  useEffect(() => {
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
            <Player url="" />
          </div>
        </div>
      </>
    );
  }
}

export default ArtDetail;
