import '../css/body.css';
import GifImage from './gif';
import React from 'react';
import gif from '../img/icons8-product.gif'
import png from '../img/icons8-product-48.png'

function Body () {
    
    return (
    <div>

        <section className='flexselect'>
            <div className="product">
                <GifImage
                gifSrc={gif}
                staticSrc={png}
                altText="Minha Imagem"
                style={{ width: '300px', height: '310px' }}
                />
                <h2>Produto</h2>
                <h3>R$10,00</h3>
                    
            </div>
            <div className="product">
                <GifImage
               gifSrc={gif}
               staticSrc={png}
                altText="Minha Imagem"
                />    
                <h2>Produto</h2>
                <h3>R$10,00</h3>        
            </div>    
            <div className="product">
                <GifImage
                gifSrc={gif}
                staticSrc={png}
                altText="Minha Imagem"
                />
                <h2>Produto</h2>
                <h3>R$10,00</h3>   
                    
            </div>
            <div className="product">
                <GifImage
               gifSrc={gif}
               staticSrc={png}
                altText="Minha Imagem"
                />
                <h2>Produto</h2>
                <h3>R$10,00</h3>    
            </div>
            <div className="product">
                <GifImage
                gifSrc={gif}
                staticSrc={png}
                altText="Minha Imagem"
                />    
                <h2>Produto</h2>
                <h3>R$10,00</h3>    
                </div>
                <div className="product">
                    <GifImage
                    gifSrc={gif}
                    staticSrc={png}
                    altText="Minha Imagem"
                    /> 
                    <h2>Produto</h2>
                    <h3>R$10,00</h3>
                </div>
                <div className="product">
                    <GifImage
                    gifSrc={gif}
                    staticSrc={png}
                    altText="Minha Imagem"
                    /> 
                    <h2>Produto</h2>
                    <h3>R$10,00</h3>   
                </div>
                <div className="product">
                    <GifImage
                    gifSrc={gif}
                    staticSrc={png}
                    altText="Minha Imagem"
                    /> 
                    <h2>Produto</h2>
                    <h3>R$10,00</h3>    
                </div>
                <div className="product">
                    <GifImage
                    gifSrc={gif}
                    staticSrc={png}
                    altText="Minha Imagem"
                    /> 
                    <h2>Produto</h2>
                    <h3>R$10,00</h3>    
                </div> 
        </section>
   </div> 
 )   
}
 export default Body