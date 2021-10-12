import React, { Component } from "react";
import "../Styles/Orders.css";
// import ContactForm from '../ContactForm/ContactForm'
import Cards1 from '../Cards1';
;
class Wysylka extends Component {
  render() {
    return (
      <div className="order-container">
        <h2 style={{ color: "#434343" }}>Wysyłka/Odbiór</h2>
        <div className="aboutorders">
        <div className="cookies-text">
        <h4 style={{ color: "#CD999D" }}>Wysyłka</h4>
        <p>Paczki wysyłamy za pośrednictwem kuriera lub paczkomatu. Koszt wysyłki to 25 zł niezależnie od wielkości paczki.<br /> Wysyłka zamówień świątecznych złożonych do 10 listopada (w tym kalendarzy adwentowych) będzie realizowana 25 listopada. </p>
        </div>
        <div className="paintings-text">
        <h4 style={{ color: "#CD999D" }}>Odbiór</h4>
<p>Odbiór osobisty możliwy jest w Łodzi lub w Gorzkowicach (łódzkie) po wcześniejszym uzgodnieniu terminu.
<br/>
<b>Odbiór osobisty zamówień świątecznych złożonych do 10 listopada (w tym kalendarzy adwentowych) będzie realizowany w Łodzi - 26 listopada, w Gorzkowicach - 27 listopada.<b/>

 
</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Wysylka;
