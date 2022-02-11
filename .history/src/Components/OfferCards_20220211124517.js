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
        className={expandedFifth ? "card" : "card expanded"}
        onClick={toggleFifth}
      >
        <img src="/images/2022/stalaoferta/swiadkowanie.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Czy zostaniesz moją świadkową - duży zestaw</h1>
            <div className="body-text">
            <p>
            Zestaw 4 miodowo-maślanych pierników w pudełku z ozdobną wstążką. 
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
        <img src="/images/2022/stalaoferta/swiadkowanie2.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Czy zostaniesz moją świadkową - mały zestaw</h1>
            <div className="body-text">
            <p>
            Zestaw 2 miodowo-maślanych pierników w pudełku z ozdobną wstążką. 
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Pierniki dodatkowo zapakowane są w celofanowe woreczki.
                </p>
                
                <p>Pudełko 15 x 22 cm</p>
                <span><strong>Cena 55 zł</strong></span>
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
        className={expandedFourth ? "card" : "card expanded"}
        onClick={toggleFourth}
      >
        <img src="/images/2022/stalaoferta/dziewczynka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw dla Dziewczynki</h1>
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
          <h1 className="title">Zestaw dla Chłopca</h1>
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
        <img src="/images/2022/stalaoferta/komunia.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw na Komunię</h1>
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
        className={expandedSecond ? "card" : "card expanded"}
        onClick={toggleSecond}
      >
        <img src="/images/2022/stalaoferta/chrzestdziewczynka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Chrzest Dziewczynki</h1>
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
                
                <p><strong>Cena 89 zł</strong></p>
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
        <img src="/images/2022/stalaoferta/chrzestchlopiec.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Chrzest Chłopca</h1>
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
      
      </Zoom>
    </div>
    
  );
}
export default OfferCards;
