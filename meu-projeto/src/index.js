import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar.js';
import Body from './components/body.js';
import Carousel from './components/carousel';
import Footer from './components/footer';
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Carousel />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
