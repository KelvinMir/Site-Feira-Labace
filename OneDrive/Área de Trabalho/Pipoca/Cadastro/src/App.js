import React, { useState } from 'react';
import './css/App.css'
import './assets/fonts/Lobster-Regular.ttf'
import MenuHamburguer from './assets/js/hamburguer'
import SenhaValidation from './assets/js/validarsenha';
import Footer from './assets/js/footer';


function Cadastro() {
  // Defina o estado para controlar os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    dia: '',
    mes: '',
    ano: '',
    senha: '',
  });

  // Manipulador de evento para atualizar o estado quando os campos do formulário forem alterados
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manipulador de evento para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Faça algo com os dados do formulário, como enviar para um servidor ou realizar alguma ação no cliente
    console.log(formData);
  };

  return (
    <body className='container'>
      <MenuHamburguer />
      <div className='formulario'>
        <form onSubmit={handleSubmit}>
            <h1>Criar Conta</h1>
            <div className='nome-sobr'>
              <div>
                <label htmlFor="nome"></label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                />
              </div>
              <div>
                <label htmlFor="sobrenome"></label>
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  placeholder="Sobrenome"
                />
              </div>    
            </div >
            <div className='email'>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className='data'>
              <div>
                <label htmlFor="dia"></label>
                  <input
                    type="text"
                    id="dia"
                    name="dia"
                    value={formData.dia}
                    onChange={handleChange}
                    placeholder="Dia"
                    className='data-item'
                  />
              </div>
              <div>  
                  <label htmlFor="mes"></label>
                  <input
                    type="text"
                    id="mes"
                    name="mes"
                    value={formData.mes}
                    onChange={handleChange}
                    placeholder="Mês"
                    className='data-item'
                  />
              </div>  
              <div >
                <label htmlFor="ano"></label>
                  <input
                    type="text"
                    id="ano"
                    name="ano"
                    value={formData.ano}
                    onChange={handleChange}
                    placeholder="Ano"
                    className='data-item'
                  />
              </div>
               
            </div>
            <SenhaValidation />
            <div className='criterios'>
              <h3>Sua senha deve ter pelo menos:</h3>
              <p>Pelo menos uma letra maiúscula*</p>
              <p>Pelo menos uma letra minúscula*</p>
              <p>Pelo menos um número*</p>
              <p>Pelo menos um caractere especial*</p>
              <p>Entre 8 e 20 caracteres*</p>       
            </div>
            <button type="submit">Cadastrar</button>
            <div className='login'>
              Já tem conta? <a href="./pages/telalogin.js">Faça seu login</a>
            </div>

        </form>
      </div>
      <Footer />
    </body>
     
  );
};

export default Cadastro;
