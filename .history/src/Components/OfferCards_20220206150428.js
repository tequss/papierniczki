import React, { useState } from "react";
import "./Cards1.css";
import Zoom from "react-reveal/Zoom";

function OfferCards(props) {
  const [expandedFirst, setExpandedFirst] = useState(true);
  const [expandedSecond, setExpandedSecond] = useState(true);
  const [expandedThird, setExpandedThird] = useState(true);
  const [expandedFourth, setExpandedFourth] = useState(true);
  const [expandedFifth, setExpandedFifth] = useState(true);
  

  const toggleFirst = () => {
    setExpandedFirst(!expandedFirst);
  };

  const toggleSecond = () => {
    setExpandedSecond(!expandedSecond);
  };

  const toggleThird = () => {
    setExpandedThird(!expandedThird);
  };
  const toggleFourth = () => {
    setExpandedFourth(!expandedFourth);
  };

  const toggleFifth = () => {
    setExpandedFifth(!expandedFifth);
  };


  return (
      
    <div className="cards">
        <Zoom>
        <div
        className={expandedFourth ? "card" : "card expanded"}
        onClick={toggleFourth}
      >
        <img src="/images/2022/stalaoferta/dziewczynka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Dziewczynka</h1>
            <div className="body-text">
            <p>
            Zestaw 6 miodowo-maślanych pierników w pudełku z ozdobną wstąką.
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Pierniki dodatkowo zapakowane są w celofanowe woreczki.
                </p>
                <p>Pudełko 21 x 21 cm</p>
                <span><strong>Cena 89 zł</strong></span>
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
      <div
        className={expandedFifth ? "card" : "card expanded"}
        onClick={toggleFifth}
      >
        <img src="/images/2022/stalaoferta/chlopiec.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Chłopiec</h1>
            <div className="body-text">
            <p>
            Zestaw 6 miodowo-maślanych pierników w pudełku z ozdobną wstążką. 
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Pierniki dodatkowo zapakowane są w celofanowe woreczki.
                </p>
                
                <p>Pudełko 21 x 21 cm</p>
                <span><strong>Cena 89 zł</strong></span>
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
      <div
        className={expandedFirst ? "card" : "card expanded"}
        onClick={toggleFirst}
      >
        <img src="/images/cards/wielkanoc2.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Wielkanocna Ferajna</h1>
            <div className="body-text">
            <p>
            Zestaw 5 miodowo-maślanych pierniczków udekorowanych lukrem królewskim.
                </p>
                <p>
                Wszystkie ciasteczka zapakowane są w celafonowy woreczek i przewiązane białką wstążeczką.
                </p>
                
                <p>Wielkość + / - 8 cm x 5,5 cm </p>
                <span><strong>25zł</strong></span>
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
      <div
        className={expandedSecond ? "card" : "card expanded"}
        onClick={toggleSecond}
      >
        <img src="/images/cards/wielkanoc3.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Pijane Kury</h1>
            <div className="body-text">
            <p>
            Zestaw 4 miodowo-maślanych pierniczków udekorowanych lukrem królewskim.
                </p>
                <p>
                Każde ciasteczko zapakowane jest w celafonowy woreczek i przewiązane czerwoną wstążeczką.
                </p>
                <p>
                Wysokość kurek 10 cm

                </p>
                <p>Zestaw 4 kurek <strong>30zł</strong></p>
                <span>Zestaw 2 kurek <strong>15zł</strong> (wybierane losowo)</span>
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
      <div
        className={expandedThird ? "card" : "card expanded"}
        onClick={toggleThird}
      >
        <img src="/images/cards/wielkanoc1.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Złote jajka</h1>
            <div className="body-text">
            <p>
            Zestaw 6 miodowo-maślanych mini pierniczków udekorowanych lukrem królewskim.
                </p>
                <p>
                Ciasteczka zapakowane są w jeden celafonowy woreczek i przewiązane złotą wstążeczką.
                </p>
                
                <p>Wysokość jajeczek 5,5 cm</p>
                <span><strong>15zł</strong></span>
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
      
      </Zoom>
    </div>
    
  );
}
export default OfferCards;
