import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import '../Components/Styles/Realizations.css'
import Carusel from '../Components/Carusel';


class Realizations extends Component {
    
    render() {
        
        return (
                  <div className = "offer-container">
                    <div className = "offer-text">
                    <h2 style={{color: "#434343"}}>Nasze</h2>
                    <h2 style={{color: "#CD999D"}}>Realizacje</h2>
                    </div>
                    <div className = "galery">
                    <Carusel />
                    
                   
                    </div>
                </div>
                
              
        );
    }
}


export default Realizations;