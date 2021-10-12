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
        <p><b>Piernik:</b> mąka pszenna, miód pszczeli, masło 82%, cukier trzcinowy , żółtko jaja w proszku pasteryzowane, kakao, przyprawa do piernika (może zawierać śladowe ilości glutenu, selera, jaj, gorczycy, soi, sezamu), soda oczyszczona. </p>
        <p><b>Lukier:</b> cukier puder, woda, albumina (białko kurze w proszku pasteryzowane), sok z cytryny, kakao, barwniki spożywcze (E422, E124, E551, E202, E330, E129, E122, E133, E110, E102, E172, E555, E171)
</p>
        </div>
        <div className="paintings-text">
        <h4 style={{ color: "#CD999D" }}>Ręcznie robione!/h4>
<p>Pierniczki wykonujemy ręcznie od podstaw, poprzez wyrobienie ciasta, upieczenie i na końcu zdobienie lukrem królewskim. Podstawą naszych papierniczków jest prawdziwy miód, masło i cukier trzcinowy.

Nasze pierniczki są w całości jadalne!
</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Sklad;
