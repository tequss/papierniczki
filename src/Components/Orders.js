import React, { Component } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import "../Components/Styles/Orders.css";

class Orders extends Component {
  render() {
    return (
      <div className="offer-container">
        <div className="offer-text">
          <h1 style={{ color: "#434343" }}>Zamów </h1>
          <h1 style={{ color: "#CD999D" }}>Swój zestaw</h1>
        </div>
      </div>
    );
  }
}

export default Orders;
