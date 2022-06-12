import React, { Component } from "react";
import "../Styles/Orders.css";
// import ContactForm from '../ContactForm/ContactForm'
import Cards1 from '../Cards1';
;
class Sklad extends Component {
  render() {
    return (
      <div className="order-container">
        <h2 style={{ color: "#434343" }}>Z czego zrobione są nasze papierniczki?</h2>
        <div className="aboutorders">
        <div className="cookies-text">
        <h4 style={{ color: "#CD999D" }}>Skład</h4>
        <p><b>Miodownik:</b> mąka pszenna, miód pszczeli, masło 82%, cukier trzcinowy, żółtko jaja w proszku pasteryzowane, soda oczyszczona. </p>
        <p><b>Piernik:</b> mąka pszenna, miód pszczeli, masło 82%, cukier trzcinowy, żółtko jaja w proszku pasteryzowane, przyprawa do piernika, kakao, soda oczyszczona. </p>
        <p><b>Lukier:</b> cukier puder, woda, albumina (białko kurze w proszku pasteryzowane), sok z cytryny, kakao, barwniki spożywcze.
</p>
        </div>
        <div className="paintings-text">
        <h4 style={{ color: "#CD999D" }}>Ręcznie robione! </h4>
<p>Pierniczki wykonujemy ręcznie od podstaw, poprzez wyrobienie ciasta, upieczenie i na końcu zdobienie lukrem królewskim. Podstawą naszych papierniczków jest prawdziwy miód, masło i cukier trzcinowy. <br/>

<p><b>Nasze pierniczki są w całości jadalne!</b> </p>
<p>Termin przydatności do spożycia to 4 miesiące od daty produkcji.</p>
 
</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Sklad;
