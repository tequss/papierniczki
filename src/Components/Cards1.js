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
        className={expandedNinth ? "card" : "card expanded"}
        onClick={toggleNinth}
      >
        <img src="/images/2021/sowa.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zewstaw Sowa z sercem</h1>
            <div className="body-text">
                <p>Zestaw dwóch personalizowanych pierników zapakowanych w ozdobne brązowe pudełko z beżową kokardką.<br />Wszystkie zdobienia wykonane są ręcznie lukrem królewskim.<br />Produkt w całości jadalny. </p>
                <p>Pierniki dodatkowo zapakowane są w celofanowy woreczek.</p>

                <p>Pudełko 15 x 22 cm</p>
                <p>Cena 65 zł</p>
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
        <img src="/images/2021/kaktusik.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Kaktus </h1>
            <div className="body-text">
            <p>
            Aromatyczny paeronalizowany piernik zapakowany w celofanowy woreczek przewiązany kremową kokardką.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim i jadalnym srebrem.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>Wielkość 10 x 7 cm cm</p>
                <p>Cena 20 zł / sztuka</p>
                
               
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
        <img src="/images/2021/ksiazka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Książka</h1>
            <div className="body-text">
            <p>
            Aromatyczny personalizowany piernik zapakowany w celofanowy woreczek przewiązany żółtą kokardką..<br />Zdobienia wykonane są ręcznie lukrem królewskim.<br />Produkt w całości jadalny.
                </p> 
                <p>
                Wielkość 9,5 x 7 cm
                </p>
                <p>
                Cena 20 zł / sztuka
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
        <img src="/images/2021/zestawsowa.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Nauczyciela</h1>
            <div className="body-text">
            <p>
            Zestaw 3 pierników zapakowanych w celofanowy woreczek przewiązany beżową kokardką.<br />Zdobienia wykonane są ręcznie lukrem królewskim.<br />Produkt w całości jadalny.
                </p>
                <p>
                Wielkość pierniczków 6 x 6 cm
                </p>
                <p>
                Cena 39 zł / zestaw 
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
        className={expandedThirteenth ? "card" : "card expanded"}
        onClick={toggleThirteenth}
      >
        <img src="/images/2021/zakochanekroliczki.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zakochane Króliczki</h1>
            <div className="body-text">
            <p>
            Zestaw 2 duych miodowo-maślanych pierników.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>Pierniki dodatkowo zapakowany w celofanowy woreczek.</p>
               
                <p>Pudełko 17 x 24 cm</p>
                <p>
                Cena 49 zł
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
        className={expandedFifteenth ? "card" : "card expanded"}
        onClick={toggleFifteenth}
      >
        <img src="/images/2021/pankrolik.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Pan Królik lub Pani Królik</h1>
            <div className="body-text">
            <p>
            Aromatyczny, miodowo-maślany piernik w kształcie króliczka.<br />Zdobienia wykonane są ręcznie lukrem królewskim.<br />Produkt w całości jadalny. 
                </p>
                <p>Piernik zapakowany jest w celofanowy woreczek z kokardką.</p>
                <p>
                Wielkość 12 x 7,5 cm
                </p>
                <p>Cena 22 zł za sztukę</p>
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
      {/* <div
        className={expandedSixteenth ? "card" : "card expanded"}
        onClick={toggleSixteenth}
      >
        <img src="/images/2021/pisanki.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Pisanki w pudełku</h1>
            <div className="body-text">
            <p>
            Zestaw dwóch miodowo-maślanych pierniczków.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim i jadalnym złotem.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>Pierniki dodatkow zapakowane są w celofanowy woreczek.</p>
                <p>Pudełko 15 x 22 cm</p>
                <p>Cena 35 zł</p>
                
                
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
      {/* <div
        className={expandedSeventeenth ? "card" : "card expanded"}
        onClick={toggleSeventeenth}
      >
        <img src="/images/2021/kurczaczek.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Pierzasty kurczaczek</h1>
            <div className="body-text">
            <p>
            Personalizowany, miodowo-maślanyh piernik z imieniem.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>wielkość 9 x 9,5 cm</p>
                <p>Cena 17 zł za sztukę</p>
                
               
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
      {/* <div
        className={expandedFourteenth ? "card" : "card expanded"}
        onClick={toggleFourteenth}
      >
        <img src="/images/2021/kroliczelapki.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Królicze Łapki</h1>
            <div className="body-text">
            <p>
            Dwa miodowo-maślane pierniczki zapakowane w celofanowy woreczek z kokardką.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>Wielkość pierniczka 7,5 x 7 cm</p>
                <p>
                Cena 17 zł
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
      </div> */}
        {/* <div
        className={expandedTwelfth ? "card" : "card expanded"}
        onClick={toggleTwelfth}
      >
        <img src="/images/2021/jajeczka.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Mini jajeczka</h1>
            <div className="body-text">
            <p>
            Zestaw 12 malutkich miodowo-maślanych pierniczków.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>Pierniczki zapakowane są w celofanowy woreczek z kokardką </p>
                <p>
                Cena 29 zł
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
      </div> */}
      {/* <div
        className={expandedThirteenth ? "card" : "card expanded"}
        onClick={toggleThirteenth}
      >
        <img src="/images/2021/dziadkowi.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Kochanemu dziadkowi</h1>
            <div className="body-text">
            <p>
            Aromatyczny piernik dla kochanego Dziadka.
                </p>
                <p>
                Wszystkie zdobienia wykonane są ręcznie lukrem królewskim.
                </p>
                <p>
                Produkt w całości jadalny.
                </p>
                <p>W pudełku 15 x 15cm - 28 zł</p>
                <p>
                Cena bez pudełka, w celofanowym woreczku z kokardką - 18 zł
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
      </div> */}
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
