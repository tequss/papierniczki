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
  const [expandedTenth, setExpandedTenth] = useState(true);
  const [expandedEleventh, setExpandedEleventh] = useState(true);
  const [expandedTwelfth, setExpandedTwelfth] = useState(true);
  const [expandedThirteenth, setExpandedThirteenth] = useState(true);
  const [expandedFourteenth, setExpandedFourteenth] = useState(true);
  const [expandedFifteenth, setExpandedFifteenth] = useState(true);
  const [expandedSixteenth, setExpandedSixteenth] = useState(true);
  const [expandedSeventeenth, setExpandedSeventeenth] = useState(true);

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
  const toggleTenth = () => {
    setExpandedTenth(!expandedTenth);
  }
  const toggleEleventh = () => {
    setExpandedEleventh(!expandedEleventh);
  }
  const toggleTwelfth = () => {
    setExpandedTwelfth(!expandedTwelfth);
  }
  const toggleThirteenth = () => {
    setExpandedThirteenth(!expandedThirteenth);
  }
  const toggleFourteenth = () => {
    setExpandedFourteenth(!expandedFourteenth);
  }
  const toggleFifteenth = () => {
    setExpandedFifteenth(!expandedFifteenth);
  }
  const toggleSixteenth = () => {
    setExpandedSixteenth(!expandedSixteenth);
  }
  const toggleSeventeenth = () => {
    setExpandedSeventeenth(!expandedSeventeenth);
  }

  return (
      
    <div className="cards">
        <Zoom>
        <div
        className={expandedFifteenth ? "card" : "card expanded"}
        onClick={toggleFifteenth}
      >
        <img src="/images/kalendarz.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Kalendarz Adwentowy</h1>
            <div className="body-text">
            <p>
            Zestaw 25 mini pierniczków zapakowanych <br /> w ozdobne pudełko. 
                </p>
                <p>
                Każdy pierniczek z zestawu jest inny.
                </p>
                <p>
                Wielkość pierniczka 4x4cm 
                </p>
                <p>Wielkość pudełka 28x28cm</p>
                
                <p>Cena 130 zł</p>
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
        className={expandedSixteenth ? "card" : "card expanded"}
        onClick={toggleSixteenth}
      >
        <img src="/images/2021/klasyk.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Świąteczny Klasyk</h1>
            <div className="body-text">
            <p>
            Zestaw 4 pierniczków: choinka, jemioła, renifer, śnieżynka.
                </p>
                <p>
                Wszystkie zapakowane w ozdobne pudełko przewiązane wstążką.
                </p>
                <p>
                Możliwość zakupu bez pudełka.
                </p>
                <p>Cena w pudełku 55 zł / bez 50 zł</p>
                
                <p>Pudełko 21x21cm</p>
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
        className={expandedSeventeenth ? "card" : "card expanded"}
        onClick={toggleSeventeenth}
      >
        <img src="/images/2021/choinka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Na Choinkę</h1>
            <div className="body-text">
            <p>
            Zestaw 4 pierniczków: bombka, śnieżynka, dzwonek, gwiazdka.
                </p>
                <p>
                Każdy pierniczek ma dziurkę i dowiązana czerwoną wstążkę.
                </p>
                <p>
                Wszystkie zapakowane w ozdobne pudełko.
                </p>
                <p>Cena w pudełku 55 zł / bez 50 zł</p>
                
                <p>Pudełko 21x21cm</p>
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
        className={expandedFourteenth ? "card" : "card expanded"}
        onClick={toggleFourteenth}
      >
        <img src="/images/2021/pierniki.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Piernikowe Ludki</h1>
            <div className="body-text">
            <p>
            Zestaw 2 pierniczków zapakowanych w ozdobne pudełko przewiązane wstążką.
                </p>
                <p>
                Zdobione kakaowym lukrem królewskim.
                </p>
                <p>
                Cena w pudełku 40 zł / bez 35 zł
                </p>
                
                <p>Pudełko 15x15cm</p>
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
        className={expandedTwelfth ? "card" : "card expanded"}
        onClick={toggleTwelfth}
      >
        <img src="/images/2021/mikolaj.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Mikołaj</h1>
            <div className="body-text">
            <p>
            Zestaw 3 pierniczków: głowa mikołaja, rękawica, laska cukrowa.
                </p>
                <p>
                Wszystkie zapakowane w ozdobne pudełko przewiązane wstążką.
                </p>
                <p>
                Cena w pudełku 45 zł / bez 40 zł
                </p>
                <p>Pudełko 21x11cm</p>
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
        className={expandedThirteenth ? "card" : "card expanded"}
        onClick={toggleThirteenth}
      >
        <img src="/images/2021/kamienica.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Kamieniczka</h1>
            <div className="body-text">
            <p>
            Aromatyczny piernik zapakowany w celofanowy woreczek przewiązany czerwoną kokardką.
                </p>
                <p>
                Wielkość 12x7,5cm
                </p>
                <p>Cena 12 zł sztuka</p>
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
        className={expandedNinth ? "card" : "card expanded"}
        onClick={toggleNinth}
      >
        <img src="/images/2021/auto.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Auto z choinką</h1>
            <div className="body-text">
                <p>Duży piernik zapakowany w celofanowy woreczek przewiązany złotą kokardką.</p>
<p>Wielkość 13x9cm</p>

                
                <p>Cena 17 zł sztuka</p>
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
        <img src="/images/2021/domek.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Piernikowy domek</h1>
            <div className="body-text">
            <p>
            Duży piernik zapakowany w celofanowy woreczek przewiązany zieloną kokardką.
                </p>
                <p>
                Wielkość 13x9cm
                </p>
                <p>
                Cena 18 zł sztuka
                </p>
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
        <img src="/images/2021/dzwonek.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Świąteczny dzwonek</h1>
            <div className="body-text">
            <p>
            Duży piernik zapakowany w celofanowy woreczek przewiązany złotą kokardką.
                </p>
                <p>
                Wielkość 13x9cm
                </p>
                <p>
                Cena 19 zł sztuka
                </p>
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
        <img src="/images/2021/sniezynka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Śnieżynka XXL</h1>
            <div className="body-text">
            <p>
            Ażurowy piernik do powieszenia na choinkę.
                </p>
                <p>
                Zapakowany w celofanowy woreczek z czerwoną kokardką.
                </p>
                <p>
                Wielkość 20x18cm
                </p>
                <p>Cena 29 zł sztuka</p>
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
        <img src="/images/2021/laska.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Laska Cukrowa</h1>
            <div className="body-text">
            <p>
            Aromatyczny piernik zapakowany w celofanowy woreczek przewiązany czerwoną kokardką.
                </p>
                <p>
                Wielkość 12x7,5cm
                </p>
                <p>
                Cena 9 zł sztuka
                </p>
                
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
      {/* <div
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
        className={expandedTenth ? "card" : "card expanded"}
        onClick={toggleTenth}
      >
        <img src="/images/cards/image100.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Ciasteczka indywidualne</h1>
            <div className="body-text">
                <p>
                Minimalne zamówienie to 10 sztuk ciastek</p>
<p>Wielkość od 8 cm. Wszystkie ciasteczka zapakowane są osobno w celafonowy woreczek z naklejką lub kokardką. </p>

                
                <p>Cena za sztukę od 8zł</p>
                <span>Czas oczekiwania - 3 tygodnie</span>
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
        className={expandedEleventh ? "card" : "card expanded"}
        onClick={toggleEleventh}
      >
        <img src="/images/cards/image101.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Ciasteczka firmowe</h1>
            <div className="body-text">
            <p>
                Minimalne zamówienie to 25 sztuk ciastek</p>
<p>Wielkość od 5 cm. Wszystkie ciasteczka zapakowane są osobno w celafonowy woreczek z naklejką lub kokardką. </p>

                
                <p>Cena za sztukę od 6zł</p>
                <span>Czas oczekiwania - 3 tygodnie</span>
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
      </div> */}
      </Zoom>
    </div>
    
  );
}
export default Cards1;
