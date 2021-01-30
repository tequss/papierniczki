import React, { Component } from 'react';
import Cards from '../Cards';
// import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/Offer.css';


class Offer extends Component {
    
    render() {
        
        return (
                
                  <div className = "offer-container">
                    <div className = "offer-text">
                    </div>
                    <Cards/>
                </div>
                
              
        );
    }
}


export default Offer;