import React from 'react';

import './index.sass';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id='Home'>
      <h1>
        Buscador de Nomes
      </h1>
      <div>
        <Link to='/form/create'>
          <button>
            Adicionar um nome
          </button>
        </Link>
        <Link to='/form/show'>
          <button>
            Mostrar um ou mais nomes
          </button>
        </Link>
        <Link to='/form/update'>
          <button>
            Atualizar um nome
          </button>
        </Link>
        <Link to='/form/delete'>
          <button>
            Deleter um nome
          </button>
        </Link>
      </div>
    </div>
  )
}
