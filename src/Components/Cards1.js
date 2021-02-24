import React, { useState } from "react";
import "./Cards1.css";

function Cards1(props) {
  const [expanded, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!expanded);
    console.log("DEBUGGING");
  };

  return (
    <div className="cards">
      <div
        className={expanded ? "card" : "card expanded"}
        onClick={toggleClass}
      >
        <img src="/images/cards/card4.JPG" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
            <h1 className="title">Zestaw "SERCA"</h1>
            <div className="body-text">
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
          <h1 className="title">Zestaw "SERCA"</h1>
            <div className="body-text">
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
          <h1 className="title">Zestaw "SERCA"</h1>
            <div className="body-text">
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
        <img src="/images/cards/card7.JPG" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw "SERCA"</h1>
            <div className="body-text">
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
        <img src="/images/cards/card8.JPG" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw "SERCA"</h1>
            <div className="body-text">
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
    </div>
  );
}
export default Cards1;
