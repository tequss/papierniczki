import React, { useState } from "react";
import "./Cards1.css";
import Zoom from "react-reveal/Zoom";

function Cards1(props) {
  const [expandedFirst, setExpandedFirst] = useState(true);
  const [expandedSecond, setExpandedSecond] = useState(true);
  const [expandedThird, setExpandedThird] = useState(true);
  const [expandedFourth, setExpandedFourth] = useState(true);
  const [expandedFifth, setExpandedFifth] = useState(true);
  const [expandedSixth, setExpandedSixth] = useState(true);
  const [expandedSeventh, setExpandedSeventh] = useState(true);
  const [expandedEighth, setExpandedEighth] = useState(true);
  const [expandedNinth, setExpandedNinth] = useState(true);

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
  const toggleNinth = () => {
    setExpandedNinth(!expandedNinth);
  }

  return (
      
    <div className="cards">
        <Zoom>
        <div
        className={expandedFirst ? "card" : "card expanded"}
        onClick={toggleFirst}
      >
        <img src="/images/cards/image0.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Papierczniki</h1>
            <div className="body-text">
                <p>
                Zestaw miodowych-maślanych mini pierniczków ręcznie zdobionych lukrem królewskim
Ilość ciasteczek - 10 sztuk.
Zapakowane w jeden woreczek przewiązany białą kokardką
Produkt w całości jadalny.

                </p>
                <p>Wymiary ciastka: 5cm x 5,5cm</p>
                <span>30zł</span>
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
        <img src="/images/cards/card4.JPG" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Dla Niej  - Duży Zestaw </h1>
            <div className="body-text">
            <p>
            Okolicznościowy zestaw kobiecy.
                </p>
                <p>
                Zawiera jadalne kosmetyki i kobiece gadżety
                </p>
                <p>
                Zestaw 4 miodowych pierniczków ozdobionych lukrem królewskim i jadalnym złotem.
Całość zapakowana w ozdobne pudełeczko przewiązane wstążką.
Możliwość wyboru koloru oraz dodania napisu.
Produkt w całości jadalny.

                </p>
                <p>Pudełko 20,5 cm x 20,5 cm</p>
                <span>60zł</span>
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
        <img src="/images/cards/card6.JPG" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Dla Niej - Lustro & Lakier</h1>
            <div className="body-text">
            <p>
            Okolicznościowy zestaw kobiecy.
                </p>
                <p>
                Zawiera jadalne kosmetyki i kobiece gadżety
                </p>
                <p>
                Zestaw 2 miodowych pierniczków ozdobionych lukrem królewskim i jadalnym złotem.
Całość zapakowana w ozdobne pudełeczko przewiązane wstążką.
Możliwość wyboru koloru oraz dodania napisu.
Produkt w całości jadalny.


                </p>
                <p>Pudełko 9,5 cm x 20 cm</p>
                <span>35zł</span>
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
        <img src="/images/cards/card5.JPG" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Dla Niej - Perfumy & Szminka </h1>
            <div className="body-text">
            <p>
            Okolicznościowy zestaw kobiecy.
                </p>
                <p>
                Zawiera jadalne kosmetyki i kobiece gadżety
                </p>
                <p>
                Zestaw 2 miodowych pierniczków ozdobionych lukrem królewskim i jadalnym złotem.
Całość zapakowana w ozdobne pudełeczko przewiązane wstążką.
Możliwość wyboru koloru oraz dodania napisu.
Produkt w całości jadalny.



                </p>
                <p>Pudełko 15,5 cm x 15,5 cm</p>
                <span>35zł</span>
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
        <img src="/images/cards/card7.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Chłopczyk</h1>
            <div className="body-text">
            <p>
            Okolicznościowy zestaw dla chłopca.
                </p>
                <p>
                Zawiera 4 miodowe pierniczki: konik, body, wózek, miś. 
                </p>
                <p>
                Wszystkie zdobienia wykonane są lukrem królewskim.
Całość zapakowana w ozdobne pudełeczko przewiązane wstążką.
Produkt w całości jadalny.


                </p>
                <p>Pudełko 20,5 cm x 20,5 cm</p>
                <span>60zł</span>
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
        <img src="/images/cards/card8.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Dziewczynka</h1>
            <div className="body-text">
            <p>
            Okolicznościowy zestaw dla dziewczynki.
                </p>
                <p>
                Zawiera 4 miodowe pierniczki: konik, body, wózek, miś. 
                </p>
                <p>
                Wszystkie zdobienia wykonane są lukrem królewskim.
Całość zapakowana w ozdobne pudełeczko przewiązane wstążką.
 Produkt w całości jadalny.


                </p>
                <p>Pudełko 20,5 cm x 20,5 cm</p>
                <span>60zł</span>
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
        className={expandedSixth ? "card" : "card expanded"}
        onClick={toggleSixth}
      >
        <img src="/images/cards/paint1.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Portret Linia</h1>
            <div className="body-text">
            <p>
            Minimalistyczny projekt wykonany czarną linią. 
                </p>
                <p>Projekt w tej cenie to grafika do samodzielnego wydruku z max 2 postaciami. Grafiki z naszym wydrukiem i większą ilością postaci wyceniamy indywidualnie w zależności od wielkości wydruku.</p>
                <span>50zł</span>
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
        <img src="/images/cards/paint2.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Portret Standard</h1>
            <div className="body-text">
            <p>
            Standardowa kolorowa grafika bez wyraźnych szczegółów. 
                </p>
                <p>Projekt w tej cenie to grafika do samodzielnego wydruku z max 2 postaciami. Grafiki z naszym wydrukiem i większą ilością postaci wyceniamy indywidualnie w zależności od wielkości wydruku.</p>
                <span>od 70zł</span>
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
        className={expandedEighth ? "card" : "card expanded"}
        onClick={toggleEighth}
      >
        <img src="/images/cards/paint3.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Portret Premium</h1>
            <div className="body-text">
            <p>
            Precyzyjna kolorowa grafika z wyraźnym światłocieniem oraz wyraźnymi szczegółami. 

                </p>
                <p>Projekt w tej cenie to grafika do samodzielnego wydruku z max 2 postaciami. Grafiki z naszym wydrukiem i większą ilością postaci wyceniamy indywidualnie w zależności od wielkości wydruku.</p>
                <span>od 80zł</span>
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
export default Cards1;
