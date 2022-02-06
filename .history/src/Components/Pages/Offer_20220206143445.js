import React from "react";
import "../Styles/Cards.css";
import OfferCards from "../OfferCards";

function Offer() {
  return (
    <div className="offer-container">
      <h2 style={{ color: "#434343" }}>Stała oferta</h2>
      {/* <h3>Uwaga!</h3>
      <div className="allert">
      <p>Wysyłka ciasteczek Wielkanocnych w dniach 29-30 marca. Odbiory osobiste realizujemy w dniach: 26-28 marca w Szczepanowicach. W razie chęci otrzymania zamówienia we wcześniejszym terminie prosimy o kontakt.</p>
      </div> */}
      <OfferCards/>
      
     </div>
    
  )
};

export default Offer;
