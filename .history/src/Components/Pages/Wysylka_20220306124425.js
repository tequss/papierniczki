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
        <p>Paczki wysyłamy za pośrednictwem kuriera lub paczkomatu. Koszt wysyłki to 25 zł niezależnie od wielkości paczki.</p> <p><b>Wysyłka zamówień walentynkowych będzie realizowana w dniach 8-9 lutego.</b> </p>
        </div>
        <div className="paintings-text">
        <h4 style={{ color: "#CD999D" }}>Odbiór</h4>
<p>Odbiory osobiste zamówień wielkanocnych - Gorzkowice 14.04, Łodź 13.04 </p>

<p>Zamówienia złożone do 21.03 będą wysłane 28-29.03, późniejsze 11-12.04. Zamówienia przyjmujemy do wyczerpania naszych możliwości przerobowych.</p>
{/* <p>
<b>Odbiór osobisty zamówień świątecznych będzie realizowany w Łodzi - 18 grudnia, w Gorzkowicach - 20 grudnia.</b></p> */}

 

        </div>
        </div>
      </div>
    );
  }
}

export default Wysylka;
