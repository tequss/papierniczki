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
  const toogleFourteenth = () => {
    setExpandedFourteenth(!expandedFourteenth);
  }


  return (
      
    <div className="cards">
        <Zoom>
        <div
        className={expandedTwelfth ? "card" : "card expanded"}
        onClick={toggleTwelfth}
      >
        <img src="/images/cards/cookieimage.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Duże Serce</h1>
            <div className="body-text">
            <p>
            Miodowo-maślane serce z białą koronką. Zapakowane w ozdobne pudełeczko z czerowną wstążką.
                </p>
                <p>
                Dodatkowo do ciasteczka dołączamy jedną z naszych okazjonalnych kartek.
                </p>
                <p>
                Pudełko 13,5 cm x 13,5 cm
                </p>
                
                <p>Cena 20 zł</p>
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
        <img src="/images/cards/dzieki1.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Kwieciste Serca</h1>
            <div className="body-text">
            <p>
            Ciasteczka jako podziękowanie dla gości.
                </p>
                <p>
                Możliwość wyboru kolorów kwiatów oraz dopisania daty, napisu lub inicjałów.
                </p>
                <p>
                Każde ciasteczko zapakowane jest w woreczek celafonowy zaklejony naszą naklejką.
                </p>
                <p>Możliwość dowiązania kokardki oraz bileciku z dłuższym tekstem.</p>
                <p>3 wielkość 9 x 9 cm / 7,8 x 7,8 cm / 6,5 x 6,5 cm</p>
                <p>Cena 10 zł / 8,5 zł / 7 zł / sztuka</p>
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
        <img src="/images/cards/dzieki2.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Chrzest Chłopiec</h1>
            <div className="body-text">
            <p>
            Ciasteczka jako podziękowanie dla gości.
                </p>
                <p>
                Możliwość wyboru kolorów kwiatów oraz dopisania daty, napisu lub inicjałów.
                </p>
                <p>
                Każde ciasteczko zapakowane jest w woreczek celafonowy zaklejony naszą naklejką.
                </p>
                <p>Możliwość dowiązania kokardki oraz bileciku z dłuższym tekstem.</p>
                <p>Wielkość 9 x 9 cm.</p>
                <p>Cena 10 zł / sztuka</p>
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
        <img src="/images/cards/image0.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Papierczniki</h1>
            <div className="body-text">
                <p>
                Zestaw miodowych-maślanych mini pierniczków ręcznie zdobionych lukrem królewskim
Ilość ciasteczek - 10 sztuk.</p>
<p>Zapakowane w jeden woreczek przewiązany białą kokardką
Produkt w całości jadalny.</p>

                
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
        <img src="/images/cards/komunia.jpeg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Zestaw Komunijny </h1>
            <div className="body-text">
            <p>
            Zestaw czterech ręcznie zdobionych miodowo-maślanych pierniczków zdobionych lukrem królewskim i jadalnym złotem. 
                </p>
                <p>
                Ciasteczka: kielich, skrzydełka, "IHS", "Pierwsza Komunia Święta".
                </p>
                <p>
                Całość zapakowana w ozdobne pudełko z zieloną wstążką.
                </p>
                <p>
                Produkt w całości jadalny.

                </p>
                <p>Pudełko 20,5 cm x 20,5 cm</p>
                <span>Cena 50 zł</span>
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
        <img src="/images/cards/chrzest2.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Chrzest Chłopiec</h1>
            <div className="body-text">
            <p>
            Zestaw czterech ręcznie zdobionych miodowo-maślanych pierniczków zdobionych lukrem królewskim i jadalnym złotem. Możliwość dopisania imienia i daty.

                </p>
                <p>
                Ciasteczka: body, skrzydełka, Chrzest Święty, katarzynka z gałązką.
                </p>
                <p>
                Całość zapakowana w ozdobne pudełko z zieloną wstążką.
                </p>
                <p>Produkt w całości jadalny.</p>
                <p>Pudełko 9,5 cm x 20 cm</p>
                <span>Cena 50zł</span>
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
        <img src="/images/cards/chrzest1.jpg" alt="" width="300px" />
        <div className="text1">
          <div className="text-content">
          <h1 className="title">Chrzest Dziewczynka</h1>
            <div className="body-text">
            <p>
            Zestaw czterech ręcznie zdobionych miodowo-maślanych pierniczków zdobionych lukrem królewskim i jadalnym złotem. Możliwość dopisania imienia i daty.

                </p>
                <p>
                Ciasteczka: sukienka, skrzydełka, Chrzest Święty, katarzynka z gałązką.
                </p>
                <p>
                Całość zapakowana w ozdobne pudełko z zieloną wstążką.
                </p>
                <p>Produkt w całości jadalny.</p>
                <p>Pudełko 9,5 cm x 20 cm</p>
                <span>Cena 50zł</span>
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
      </div>
      </Zoom>
    </div>
    
  );
}
export default Cards1;
