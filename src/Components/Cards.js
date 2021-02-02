import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="offer-container">
      <h2 style={{ color: "#434343" }}>Aktualna oferta</h2>
      <span> Kliknij w zestaw </span> 
      <div className="flip-boxes">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src="/images/cards/image3.jpeg" alt="Paris" height="300px" />
            </div>
            <div className="flip-box-back">
              <h2>Zestaw "SERCA"</h2>
              <p>30zł</p>
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src="/images/cards/image2.jpeg" alt="Paris" height="300px" />
            </div>
            <div className="flip-box-back">
              <h2>Zestaw "LOVE"</h2>
              <p>30zł</p>
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src="/images/cards/image4.jpeg" alt="Paris" height="300px" />
            </div>
            <div className="flip-box-back">
              <h2>Zestaw "PARA"</h2>
              <p>30zł</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
