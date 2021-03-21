import React from "react";
import "../Styles/Cards.css";
import OfferCards from "../OfferCards";

function Offer() {
  return (
    <div className="offer-container">
      <h2 style={{ color: "#434343" }}>Wielkanoc</h2>
      <h3>Obiory osobiste</h3>
      <p> Uwaga! Wysyłka ciasteczek Wielkanocnych w dniach 29-30 marca. Odbiory osobiste realizujemy w dniach: 26-28 marca w Szczepanowicach. W razie chęci otrzymania zamówienia we wcześniejszym terminie prosimy o kontakt.</p>

      <OfferCards/>
      
     </div>
    
  )
};

export default Offer;
