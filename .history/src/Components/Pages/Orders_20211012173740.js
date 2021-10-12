import React, { Component } from "react";
import "../Styles/Orders.css";
// import ContactForm from '../ContactForm/ContactForm'
import Cards1 from '../Cards1';
;
class Orders extends Component {
  render() {
    return (
      <div className="order-container">
        <h2 style={{ color: "#434343" }}>Jak zamówić ? </h2>
        <div className="aboutorders">
        <div className="cookies-text">
        <h4 style={{ color: "#CD999D" }}>Pierniczki </h4>

<p>1. Zajrzyj do naszej aktualnej oferty.</p>
<p>2. Wybierz co chcesz zamówić i w jakiej ilości.</p>
<p>3. Napisz do nas w wiadomości na FB i złóż zamówienie.</p>
<p>4. Zamówienia płatne są z góry, przelewem na konto. Jeśli chcesz wystawimy fakturę.</p>
        </div>
        {/* <div className="paintings-text">
        <h4 style={{ color: "#CD999D" }}>Portrety</h4>
<p>1. Zajrzyj do naszej aktualnej oferty.</p>
<p>2. Przygotuj swoje zdjęcie, które będzie stanowić podstawę grafiki i zastanów się nad wielkością obrazu.</p>
<p>3. Napisz do nas na FB a my przygotujemy dla Ciebie dokładną wycenę.</p>
<p>4. Wysyłkę realizujemy firmą InPost na adres domowy lub do paczkomatu. Koszt wysyłki to 25zł.</p>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Orders;
