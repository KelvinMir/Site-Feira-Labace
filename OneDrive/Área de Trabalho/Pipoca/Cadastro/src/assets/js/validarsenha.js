import React, { useState } from 'react';
import '../../css/validarsenha.css'
function SenhaValidation() {
  const [senha, setSenha] = useState('');
  const [feedbackSenha, setFeedbackSenha] = useState('');

  const validarSenha = (senha) => {
    const senhaValida =
      /[A-Z]/.test(senha) &&
      /[a-z]/.test(senha) &&
      /\d/.test(senha) &&
      /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(senha) &&
      senha.length >= 8 &&
      senha.length <= 20;

    if (senhaValida) {
      setFeedbackSenha(''); // Senha válida, nenhum feedback é exibido
    } else {
      setFeedbackSenha(
        'Verifique todos os requisitos!'
      );
    }
  };

  return (
    <div className='senha'>
      <div>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          placeholder="&nbsp;Senha"
          onChange={(e) => {
            setSenha(e.target.value);
            validarSenha(e.target.value);
          
          }}
        />
      </div>
      <div id="feedback-senha">
        {feedbackSenha && <p>{feedbackSenha}</p>}
      </div>
      
    </div>
  );
}

export default SenhaValidation;
  
  