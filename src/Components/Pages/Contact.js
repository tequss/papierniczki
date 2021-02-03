import React, { Component } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import "../Components/Styles/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img src="/images/cards/image3.jpeg" alt="Paris" height="300px" />
          </div>
          <div class="flip-box-back">
            <h2>Paris</h2>
            <p>What an amazing city</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
