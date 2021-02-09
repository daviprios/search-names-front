import React from 'react';

import './index.sass';

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div id='NotFound'>
      <h1>
        404 - Page Not found | Nenhuma página encontrada
      </h1>
      <p>
        Está página que você está procurando não existe, mas você pode voltar para o menu principal atravéz deste <Link to='/'>link</Link>
      </p>
    </div>
  )
}
