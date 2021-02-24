import React, { Component } from "react";
import "../Styles/Orders.css";
// import ContactForm from '../ContactForm/ContactForm'
import Cards1 from '../Cards1';
;
class Orders extends Component {
  render() {
    return (
      <div className="order-container">
        <div className="offer-text">
          <h1 style={{ color: "#434343" }}>Zamów </h1>
          <h1 style={{ color: "#CD999D" }}>Swój zestaw</h1>
         
          {/* <ContactForm /> */}
        </div>
        <Cards1/>
      </div>
    );
  }
}

export default Orders;
