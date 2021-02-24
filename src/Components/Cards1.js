import React, { useState } from "react";
import "./Cards1.css";
import Zoom from "react-reveal/Zoom";

function Cards1(props) {
  const [expanded, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!expanded);
  };

  return (
      
    <div className="cards">
        <Zoom>
      <div
        className={expanded ? "card" : "card expanded"}
        onClick={toggleClass}
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
        className={expanded ? "card" : "card expanded"}
        onClick={toggleClass}
      >
        <img src="/images/cards/card5.JPG" alt="" width="300px" />
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
        className={expanded ? "card" : "card expanded"}
        onClick={toggleClass}
      >
        <img src="/images/cards/card6.JPG" alt="" width="300px" />
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
        className={expanded ? "card" : "card expanded"}
        onClick={toggleClass}
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
        className={expanded ? "card" : "card expanded"}
        onClick={toggleClass}
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
      </Zoom>
    </div>
    
  );
}
export default Cards1;
