import React from 'react';
import Carousel from 'react-images';

const images = [{ source: 'images/galery/galery1.jpg' }, { source: 'images/galery/galery2.jpg' }, { source: 'images/galery/galery3.jpg' }, { source: 'images/galery/galery4.jpg' }];

class Carusel extends React.Component {
  render() {
    return <Carousel views={images} />;
  }
}

export default Carusel;