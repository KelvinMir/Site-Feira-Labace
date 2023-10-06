
import React from 'react';
import { Helmet } from 'react-helmet';

import logo from '../src/img/icons8-copyright-50.png'

function App() {
  return (
    <div>
      {/* Usar o Helmet para atualizar as tags do head */}
    <Helmet>
    <title>Sua Marca</title>
    <link rel="icon" href={logo} />
    </Helmet>

  {/* Resto do seu conteúdo */}
    </div>
    
  );
}

export default App;
