import "../style/homepage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/scroll";
import AwesomeSlider from "react-awesome-slider";
import ReactAudioPlayer from "react-audio-player";

import SEISM from "../assets/videos/6M.mp4";
import CHIQ from "../assets/videos/CHIQ.mp4";
import VARANDAS from "../assets/videos/VARANDAS.mp4";

import GRAYBALL from "../assets/motions/GRAYBALL.mp4";
import JANELA from "../assets/motions/JANELA.mp4";

import FLUOXETINA from "../assets/arts/FLUOXETINA.png";
import MORTELENTA from "../assets/arts/MORTELENTA.png";
import QUETIAPINA from "../assets/arts/QUETIAPINA.png";
import DESMEMORIADO from "../assets/arts/DESMEMORIADO.png";

import "react-awesome-slider/dist/styles.css";

function Homepage() {
  /* useScrollToTop(); */

  /*   function fadeIn() {
    const images = document.querySelector(".motions");
    const fade =
      document.querySelector(".fade") || document.querySelector(".fadein");
    if (images === null) {
    } else {
      this.scrollY >= images.scrollHeight + 50
        ? (fade.className = "fadein")
        : (fade.className = "fade");
    }
  }

  window.addEventListener("scroll", fadeIn, false); */

  return (
    <>
      <span className="cursor" />
      <div className="homepage">
        <div className="nav">
          <NavbarEducation>
            <li className="nav-item">
              <h3>Avançado em Cinema e Televisão (200h)</h3>
              [Gracom School Of Visual Effects] - 2017
            </li>
            <li className="nav-item">
              <h3>Básico Intensivo em Fotografia Digital</h3>
              [F/508] - 2018
            </li>
            <li className="nav-item">
              <h3>Técnico em Produção de Áudio e Vídeo</h3>
              [Instituto Federal de Brasília] - em andamento
            </li>
          </NavbarEducation>
          <NavbarSkills>
            <li className="nav-item">
              <h4>Adobe Premiere</h4>
            </li>
            <li className="nav-item">
              <h4>Adobe After Effects</h4>
            </li>

            <li className="nav-item">
              <h4>Adobe Photoshop</h4>
            </li>

            <li className="nav-item">
              <h4>Adobe Lightroom</h4>
            </li>

            <li className="nav-item">
              <h4>Ableton Live</h4>
            </li>

            <li className="nav-item">
              <h4>Inglês</h4>
            </li>
          </NavbarSkills>
        </div>
        <div className="mainabout">
          <AwesomeSlider bullets={false} className="slider">
            <div>
              <video src={CHIQ} controls autoPlay muted />
            </div>
            <div>
              <video src={VARANDAS} controls autoPlay muted />
            </div>
            <div>
              <video src={SEISM} controls autoPlay muted />
            </div>
          </AwesomeSlider>
        </div>
        <div className="motions">
          <div>
            <h1>experimentos de motion design"</h1>
            <video src={GRAYBALL} autoPlay muted loop />
            <video src={JANELA} autoPlay muted loop />
          </div>
        </div>
        {/* <div className="fade"> */}
        <div className="arts">
          <h1>EP. "NEGLIGÊNCIA" - 2020</h1>
          <div className="grid">
            <div>
              <img src={QUETIAPINA} />
              <ReactAudioPlayer
                src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
                controls
                className="audio"
              />
            </div>
            <div>
              <img src={MORTELENTA} />
              <ReactAudioPlayer
                src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
                controls
                className="audio"
              />
            </div>
            <div>
              <img src={FLUOXETINA} />
              <ReactAudioPlayer
                src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
                controls
                className="audio"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}

function NavbarEducation(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <h2
        className="button"
        onMouseEnter={() => setMenuOpen(!menuOpen)}
        onMouseLeave={() => setMenuOpen(!menuOpen)}
        /* onClick={() => setMenuOpen(!menuOpen)} */
      >
        formação
      </h2>
      {menuOpen && <ul className="navbar-navEducation">{props.children}</ul>}
    </nav>
  );
}

function NavbarSkills(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <h2
        className="button"
        onMouseEnter={() => setMenuOpen(!menuOpen)}
        onMouseLeave={() => setMenuOpen(!menuOpen)}
        /* onClick={() => setMenuOpen(!menuOpen)} */
      >
        habilidades
      </h2>
      {menuOpen && <ul className="navbar-navSkills">{props.children}</ul>}
    </nav>
  );
}

export default Homepage;
