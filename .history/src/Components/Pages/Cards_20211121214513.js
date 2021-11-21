import React from "react";
import "../Styles/Cards.css";
import Zoom from "react-reveal/Zoom";
import Cards1 from "../Cards1";

function Cards() {
  return (
    <div className="offer-container">
      <h2 style={{ color: "#434343" }}>Boże Narodzenie</h2>
      <h3>Uwaga!</h3>
      <div className="allert">
      
      <p>Zamówienia świąteczne przyjmujemy do 10 grudnia. Wysyłki będziemy realizować 16 grudnia.</p>
      </div>
      <Cards1/>
      {/* <div className="flip-boxes">
        <Zoom>
          
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="/images/cards/image3.jpeg"
                  alt="Paris"
                  height="400px"
                />
              </div>
              <div className="flip-box-back">
                <h3>Zestaw "SERCA"</h3>
                <p>
                  Zestaw czterech ręcznie malowanych ciasteczek w kształcie
                  serca. Dwa mocno czekoladowe i dwa miodowo-maślane, pokryte
                  słodkim lukrem królewskim z nutą cytryny.
                </p>
                <p>
                  Produkt w całości jadalny. Wszystkie zdobienia wykonane są
                  ręcznie.
                </p>
                <p>
                  Każde z ciasteczek zapakowane jest w celafonowy woreczek z
                  kokardką.
                </p>
                <p>Wymiary ciasteczka: 9cm x 9cm</p>
                <span>30zł</span>
              </div>
            </div>
          </div>

          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="/images/cards/image2.jpeg"
                  alt="Paris"
                  height="400px"
                />
              </div>
              <div className="flip-box-back">
                <h3>Zestaw "LOVE"</h3>
                <p>
                  Zestaw pięciu ręcznie malowanych ciasteczek. Cztery
                  miodowo-maślane literki i jedno czekoladowe serce. Wszystkie
                  pokryte słodkim lukrem królewskim z nutą cytryny.
                </p>
                <p>
                  Produkt w całości jadalny. Wszystkie zdobienia wykonane są
                  ręcznie.
                </p>
                <p>
                  Każde z ciasteczek zapakowane jest w celafonowy woreczek z
                  kokardką.
                </p>
                <p>
                  Wymiary: <br />
                  Literki 5cm x 8cm
                  <br /> Serce 9cm x 9cm
                </p>
                <span>30zł</span>
              </div>
            </div>
          </div>

          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="/images/cards/image4.jpeg"
                  alt="Paris"
                  height="400px"
                />
              </div>
              <div className="flip-box-back">
                <h3>Zestaw "PARA"</h3>
                <p>
                  Zestaw trzech ręcznie malowanych ciasteczek. Dwi
                  miodowo-maślane postacie i jedne czekoladowe usta. Wszystkie
                  pokryte słodkim lukrem królewskim z nutą cytryny.
                </p>
                <p>
                  Produkt w całości jadalny. Wszystkie zdobienia wykonane są
                  ręcznie.
                </p>
                <p>
                  Każde z ciasteczek zapakowane jest w celafonowy woreczek z
                  kokardką.
                </p>
                <p>
                  Wymiary: <br /> Postacie 10cm x 10cm <br /> Usta 6cm x 10cm
                </p>
                <span>30zł</span>
              </div>
            </div>
          </div>
        </Zoom>
     </div> */}
     </div>
    
  )
};

export default Cards;
