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
            
                      <div className = "hero-container">
                      <div className="hero-text">
                    <h1 style={{color: "#5c5c5c"}}>Witajcie w świecie papieru i pierniczków czyli świecie</h1>
                    <h1 style={{color: "#CD999D" }}>PAPIERNICZKI</h1>
                    <h3>Co tu znajdziecie? <br /> Dwie siostry: Pani od plastyki i Pani dietetyk, a w koło wszystko co artystyczne zrobione z papieru i pierniczków. </h3>  
                    
                    <button className="btn-checkoffer">
            <Link smooth to="section2">
                        <span aria-hidden="true">Sprawdź ofertę</span>
                        </Link>
                    </button>
                    
                    </div>
                    <img src="/images/heroimage.jpg" alt="One of the papierniczki's project" className="image2" width="500px" />
                    </div>

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
                {/* <Contact /> */}
                </section>
                </body>
                
                </>
        );
        
    }
}


export default Hero;