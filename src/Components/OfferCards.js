import React, { useState } from "react";
import "./Cards1.css";
import Zoom from "react-reveal/Zoom";

function OfferCards(props) {
  const [expandedFirst, setExpandedFirst] = useState(true);
  const [expandedSecond, setExpandedSecond] = useState(true);
  const [expandedThird, setExpandedThird] = useState(true);
  const [expandedFourth, setExpandedFourth] = useState(true);
  const [expandedFifth, setExpandedFifth] = useState(true);
  const [expandedSixth, setExpandedSixth] = useState(true);
  const [expandedSeventh, setExpandedSeventh] = useState(true);
  const [expandedEighth, setExpandedEighth] = useState(true);

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

  const toggleSixth = () => {
    setExpandedSixth(!expandedSixth);
  };

  const toggleSeventh = () => {
    setExpandedSeventh(!expandedSeventh);
  };

  const toggleEighth = () => {
    setExpandedEighth(!expandedEighth);
  };



  return (
      
    <div className="cards">
        <Zoom>
        <div
        className={expandedSixth ? "card" : "card expanded"}
        onClick={toggleSixth}
      >
        <img src="/images/2021/chrzest22.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Chrzest</h1>
            <div className="body-text">
            <p>
            Zestaw 4 miodowników w pudełku z ozdobną wstążką. Imię i data są personalizowane.
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Pierniki dodatkowo zapakowane są w celofanowe woreczki.
                </p>
                
                <p>Pudełko 15 x 22 cm</p>
                <span><strong>Cena 79 zł</strong></span>
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
        className={expandedSeventh ? "card" : "card expanded"}
        onClick={toggleSeventh}
      >
        <img src="/images/2021/slub22.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Ślub</h1>
            <div className="body-text">
            <p>
            Zestaw 4 miodowników w pudełku z ozdobną wstążką. Imiona i data są personalizowane.
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Pierniki dodatkowo zapakowane są w celofanowe woreczki.
                </p>
                
                <p>Pudełko 15 x 22 cm</p>
                <span><strong>Cena 79 zł</strong></span>
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
        <img src="/images/2021/slub23.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw personalizowany - ślub / rocznica ślubu</h1>
            <div className="body-text">
            <p>
            Zestaw 6 miodowników w pudełku z ozdobną wstąką. Kształty, kolory, zdobienia, napisy ustalane są indywidualnie. 
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>Pudełko 21 x 21 x 4 cm</p>
                <span><strong>Cena 130 zł</strong></span>
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
        <img src="/images/2021/urodziny22.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw personalizowany - urodziny - imieniny </h1>
            <div className="body-text">
            <p>
            Zestaw 6 miodowników w pudełku z ozdobną wstąką. Kształty, kolory, zdobienia, napisy ustalane są indywidualnie. 
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                
                <p>Pudełko 21 x 21 x 4 cm</p>
                <span><strong>Cena 130 zł</strong></span>
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
        <img src="/images/2021/dziecko.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw personalizowany dla dziecka </h1>
            <div className="body-text">
            <p>
            Zestaw 6 miodowników w pudełku z ozdobną wstąką. Kształty, kolory, zdobienia, napisy ustalane są indywidualnie. 
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>Pudełko 21 x 21 x 4 cm</p>
                <span><strong>Cena 130 zł</strong></span>
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
        <img src="/images/2021/winietki.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Winietki</h1>
            <div className="body-text">
            <p>
            Miodowniki z imionami gości. Kształty, kolory, zdobienia, napisy ustalane są indywidualnie. Zdjęcie przykładowe.
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>Minimalne zamówienie to 15 sztuk.</p>
                
                <p><strong>Cena od 10 zł / sztuka</strong></p>
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
        <img src="/images/2021/indywidualne.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Indywidualne</h1>
            <div className="body-text">
            <p>
            Miodowniki personalizowane na kadą okazję. Kształty, kolory, zdobienia, napisy ustalane są indywidualnie. Zdjęcie przykładowe.
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Minimalne zamówienie to 15 sztuk.
                </p>
                <span><strong>Cena od 10 zł / sztuka</strong></span>
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
        <img src="/images/2021/firmowe.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Firmowe</h1>
            <div className="body-text">
            <p>
            Miodowniki z logo Twojej firmy 
                </p>
                <p>
                Zdobienia wykonane są ręcznie lukrem królewskim. Produkt jest w całości jadalny.
                </p>
                <p>
                Minimalne zamówienie to 15 sztuk
                </p>
                <span><strong>Cena ustalana jest indywidualnie</strong></span>
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
