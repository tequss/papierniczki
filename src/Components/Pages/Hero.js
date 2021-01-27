import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/Hero.css';


class Hero extends Component {
    

    render() {
        
        return (
                
                <main>
                  <section className = "hero">
                    <h1 style={{color: "#434343"}}>Sprawdź naszą</h1>
                    <h1 style={{color: "#CD999D"}}>aktualną ofertę</h1>
                    <h2>Coś pięknego dla oka i brzuszka</h2>   
                    <button className="btn-checkoffer">
                        <span aria-hidden="true">Sprawdź ofertę</span>
                    </button>
                    </section>
                <section className="hero-images">
                <img src="/images/card.jpg" alt="" className="image1" width="320px" height="320px"/>
                <img src="/images/card1.jpeg" alt="One of the papierniczki's project" className="image2" width="300px" height="300px"/>
                </section>

                </main>
                
                
        );
    }
}


export default Hero;