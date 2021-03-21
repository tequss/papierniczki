import React from "react";
import "../Styles/Cards.css";
import OfferCards from "../OfferCards";

function Offer() {
  return (
    <div className="offer-container">
      <h2 style={{ color: "#434343" }}>Wielkanoc</h2>
      <h3> Uwaga! Wysyłka ciasteczek Wielkanocnych w dniach 29-30 marca. W razie chęci otrzymania zamówienia we wcześniejszym terminie proszę o kontakt.</h3>

      <OfferCards/>
      
     </div>
    
  )
};

export default Offer;
