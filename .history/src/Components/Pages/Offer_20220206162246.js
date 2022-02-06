import React from "react";
import "../Styles/Cards.css";
import OfferCards from "../OfferCards";

function Offer() {
  return (
    <div className="offer-container">
      <h2 style={{ color: "#434343" }}>Stała oferta</h2>
      <div className="allert">
      <p>Czas realizacji to 3-10 dni roboczych.</p>
      </div>
      <OfferCards/>
      
     </div>
    
  )
};

export default Offer;
