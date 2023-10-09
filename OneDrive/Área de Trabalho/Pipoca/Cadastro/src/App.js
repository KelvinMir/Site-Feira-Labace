import React, { useState } from 'react';
import './css/App.css'
import './assets/fonts/Lobster-Regular.ttf'
import MenuHamburguer from './assets/js/hamburguer'
import SenhaValidation from './assets/js/validarsenha';
import Footer from './assets/js/footer';
import axios from 'axios';


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

  const handleEnviarData = () => {
    const dataNascimento = `${formData.ano}-${formData.mes}-${formData.dia}`;
    return dataNascimento;
  }

  // Manipulador de evento para atualizar o estado quando os campos do formulário forem alterados
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manipulador de evento para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataNascimento = handleEnviarData();

    try {
      const dadosParaAPI = {
        firstName: formData.nome,
        lastName:formData.sobrenome,
        email: formData.email,
        password: formData.senha,
        birthday:dataNascimento,
        role: 'User',
      };
      setIdCounter(idCounter + 1);
      const response = await axios.post('https://api-pipoca-agil-f605f7e4c842.herokuapp.com/api/users', dadosParaAPI);
      
      // Verificar a resposta da API e lidar com ela
      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
      // Lide com erros, como exibir uma mensagem de erro ao usuário
    }
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
                  placeholder="&nbsp;Nome"
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
                  placeholder="&nbsp;Sobrenome"
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
                placeholder="&nbsp;Email"
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
                    placeholder="&nbsp;Dia"
                    pattern="\d{2}"
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
                    placeholder="&nbsp;Mês"
                    pattern="\d{2}"
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
                    placeholder="&nbsp;Ano"
                    pattern="\d{4}"
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
