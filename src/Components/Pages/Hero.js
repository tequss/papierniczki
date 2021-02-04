import React, { Component } from "react";
import Cards from "./Cards";
import Orders from "./Orders";
import Realizations from "./Realizations";
import { Link } from "react-scroll";
import "../Styles/Hero.css";
import Fade from "react-reveal/Fade";

class Hero extends Component {
  render() {
    return (
      <>
        <body className="body-hero">
          <main>
            <div className="hero-container">
              <div className="hero-text">
                <Fade left>
                  <h1 style={{ color: "#5c5c5c" }}>
                    Witajcie w świecie papieru i pierniczków czyli świecie
                  </h1>
                </Fade>
                <Fade right>
                  <h1 style={{ color: "#CD999D" }}>PAPIERNICZKI</h1>
                </Fade>
                <h3>
                  Co tu znajdziecie? <br /> Dwie siostry: Pani od plastyki i
                  Pani dietetyk, a w koło wszystko co artystyczne zrobione z
                  papieru i pierniczków.{" "}
                </h3>

                <button className="check-offer">
                  <Link smooth to="section2">
                    <span aria-hidden="true">Sprawdź ofertę</span>
                  </Link>
                </button>
              </div>
              <img
                src="/images/heroimage.jpg"
                alt="One of the papierniczki's project"
                className="imagehero"
                width="500px"
              />
            </div>
          </main>

          <section className="section2">
            <Cards />
          </section>
          <section className="section3">
            <Realizations />
          </section>
          <section className="section4">
            <Orders />
          </section>
          <section className="section5">{/* <Contact /> */}</section>
        </body>
      </>
    );
  }
}

export default Hero;
