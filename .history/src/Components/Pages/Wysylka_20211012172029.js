import React, { Component } from "react";
import "../Styles/Orders.css";
// import ContactForm from '../ContactForm/ContactForm'
import Cards1 from '../Cards1';
;
class Sklad extends Component {
  render() {
    return (
      <div className="order-container">
        <h2 style={{ color: "#434343" }}>Wysyłka/Odbiór</h2>
        <div className="aboutorders">
        <div className="cookies-text">
        <h4 style={{ color: "#CD999D" }}>Wysyłka</h4>
        <p>Paczki wysyłamy za pośrednictwem kuriera lub paczkomatu. Koszt wysyłki to 25 zł niezależnie od wielkości paczki. </p>
        </div>
        <div className="paintings-text">
        <h4 style={{ color: "#CD999D" }}>Ręcznie robione! </h4>
<p>Pierniczki wykonujemy ręcznie od podstaw, poprzez wyrobienie ciasta, upieczenie i na końcu zdobienie lukrem królewskim. Podstawą naszych papierniczków jest prawdziwy miód, masło i cukier trzcinowy. <br/>

<p><b>Nasze pierniczki są w całości jadalne!</b> </p>
 
</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Sklad;
