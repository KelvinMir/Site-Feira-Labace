import React, { useState } from 'react';
import '../css/Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importe os estilos do Swiper
import png from '../img/icons8-branding-96.png'

function Carousel() {
  const [slidePerView] = useState(3);
  const data = [
    { id: '1', image: png}, 
    { id: '2', image: png}, 
    { id: '3', image: png}, 
    { id: '4', image: png}, 
    { id: '5', image: png}, 
    { id: '6', image: png}, 
    
  ];

  return (
    <div className='carousel-container'>
      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt='Slider'
              className='slide-item' 
            />
            <p>Marca do Produto</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
