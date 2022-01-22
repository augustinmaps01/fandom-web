import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../img/background 2.jpg';
import slide2 from '../img/lee ji.jpg';
import slide3 from '../img/Kim.Yoo-jung.full.146391.jpg';
import slide4 from '../img/Kim.Yoo-jung.full.146391.jpg';
const CarouselImage = () => {
  return (
    <Carousel>
    <Carousel.Item interval = {1000}>
        <img className="d-block w-100" src={slide1}/>               
    </Carousel.Item>
      <Carousel.Item interval = {1000}>
        <img className="d-block w-100" src={slide2}/>               
    </Carousel.Item>
      <Carousel.Item interval = {1000}>
        <img className="d-block w-100" src={slide3}/>               
    </Carousel.Item>
      <Carousel.Item interval = {1000}>
        <img className="d-block w-100" src={slide4}/>               
    </Carousel.Item>

</Carousel>
  );
};

export default CarouselImage;
