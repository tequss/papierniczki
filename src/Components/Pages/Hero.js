import React, { Component } from 'react';
import Cards from '../Cards';
import Contact from '../Contact';
import Orders from '../Orders';
import Realizations from '../Realizations';
import { Link, animateScroll as scroll } from "react-scroll";
import '../Styles/Hero.css';
import Offer from './Offer';




class Hero extends Component {
  
    render() {
        
        return (
                <>
                <body className="body-hero">
                <main>
                  <section className = "hero-section">
                      <div className="hero-text">
                    <h1 style={{color: "#434343"}}>Sprawdź naszą</h1>
                    <h1 style={{color: "#CD999D"}}>aktualną ofertę</h1>
                    <h3>Coś pięknego dla oka i brzuszka</h3>  
                    
                    <button className="btn-checkoffer">
            <Link smooth to="section2">
                        <span aria-hidden="true">Sprawdź ofertę</span>
                        </Link>
                    </button>
                    
                    </div>
                    

                <div className="hero-images">
                <img src="/images/card.jpg" alt="" className="image1" width="320px" height="320px"/>
                <img src="/images/card1.jpeg" alt="One of the papierniczki's project" className="image2" width="300px" height="300px"/>
                </div>
                </section>

                </main>
                
                <section className="section2">
                <Cards />
                </section>
                <section className="section3">
                <Realizations />
                </section>
                <section className="section4">
                <Orders />
                </section>
                <section className="section5">
                <Contact />
                </section>
                </body>
                
                </>
        );
        
    }
}


export default Hero;