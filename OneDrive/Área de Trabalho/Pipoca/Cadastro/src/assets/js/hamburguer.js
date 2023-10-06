// src/components/MenuHamburguer.js
import React, { useState } from 'react';
import '../../css/hamburguer.css'; 
import Youtube from "../../img/youtube.svg"
import Facebook from "../../img/facebook.svg"
import X from "../../img/X.svg"
import Instagram from "../../img/instagram.svg"

function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='body-hamburguer'>
        <button className="menu-toggle" onClick={toggleMenu}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </button> 
        <div className={`menu-hamburguer ${isOpen ? 'open' : ''}`}>
            <ul className="menu-items">
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Galeria de fotos</a></li>
                <li><a href='/'>Trilha do Conhecimento</a></li>
                <li><a href='/'>Clube do Assinante</a></li>
                <li>
                <ul className="social-icons">
                    <li>
                    <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
                        <img src={Youtube} alt="YouTube" />
                    </a>
                    </li>
                    <li>
                    <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    </li>
                    <li>
                    <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    </li>
                    <li>
                    <a href='https://twitter.com' target="_blank" rel="noopener noreferrer">
                        <img src={X} alt="Twitter" />
                    </a>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default MenuHamburguer;
