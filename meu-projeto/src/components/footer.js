import React from "react";
import instagram from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import facebook from '../img/facebook.svg'
import whats from '../img/whatsapp.svg'
import '../css/footer.css'
import visa from '../img/visa.svg'
import mastercard from '../img/mastercard.svg'
import pix from '../img/pix.svg'
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="Redes"> 
                    <p>Redes Sociais:</p> 
                    <div className="flex">
                        <a href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer" >
                            <img src={instagram} alt="instagram" /> 
                        </a>
                        <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://www.whatsapp.com/?lang=pt_br"  target="_blank" rel="noopener noreferrer">
                            <img src={whats} alt="Whatsapp" />
                        </a>
                    </div>                 
                   
                </div>
                <div className="Atendimento">
                    <p>Atendimento:</p>
                    <div className="contact">
                        <a href="mailto:gmail.com.br">email@atendimento.com </a>
                        <a href="tel:(99)99999-9999">(99)99999-9999</a>
                    </div>
                    
                </div>
                <div className="Pay">
                    <p>Formas de Pagamento:</p>
                    <div className="cards">
                        <img src={visa} alt="Visa Card" />
                        <img src={mastercard} alt="Mastercard" />
                        <img src={pix} alt="Pix" />
                    </div>
                    

                </div>
            </div>
                
        </footer>
            
    )
}

export default Footer;