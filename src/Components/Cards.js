import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <h2 style={{color: "#434343"}}>Aktualna oferta</h2>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardsItem
              src='images/cards/image2.jpeg'
              text='Zestaw LOVE'
              label='30 zł'
            />
            <CardsItem
              src='images/cards/image3.jpeg'
              text='Zestaw SERCE'
              label="30 zł"
            />
            <CardsItem
              src='images/cards/image4.jpeg'
              text='Zestaw PARA'
              label='30 zł'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;