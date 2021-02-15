import React, { FormEvent, useEffect, useState } from 'react';

import './index.sass';

import api from 'services/api';

import NamesTable, { NameList } from 'components/namesTable';

export default function ShowForm() {
  const [nameInput, setNameInput] = useState('');
  const [isNameMax, setIsNameMax] = useState(false);
  const characterLimit = 100;

  const [Message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const [nameTable, setNameTable] = useState<NameList[]>([{id: 0, name: ''}]);
  const [showNameTable, setShowNameTable] = useState(false);

  useEffect(() => {
    if(nameInput.length >= characterLimit && !isNameMax)
      setIsNameMax(true);
    if(nameInput.length < characterLimit && isNameMax)
      setIsNameMax(false);
  }, [nameInput, isNameMax]);

  function handleName(event: FormEvent<HTMLInputElement>){
    if(isNameMax && event.currentTarget.value.length > nameInput.length)
      return;
    setNameInput(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    setNameTable([]);
    api.getNameTable(nameInput).then(result => {
      if(result.data.code === 'success'){
        if(result.data.names?.length === 0){
          setMessage('Sem resultado');
          setShowNameTable(false);
        }else{
          setMessage('Enviado com sucesso');
          setShowNameTable(true);
        }
      } else {
        setMessage('Algo deu errado ;-;');
        setShowNameTable(false);
      }
      setNameTable(result.data.names ? result.data.names : []);
      setNameInput('');
    });
    setMessage('Enviando...');
    setShowMessage(true);
  }

  return (
    <form id='ShowForm' data-list-on={showNameTable} onSubmit={event => handleSubmit(event)}>
      <h1>
        Mostrar um ou mais nomes
      </h1>
      <p>
        Escreva o nome que quer pesquisar
      </p>
      <p className='textLimit'>{isNameMax ? 'Limite de caracteres atingido' : ''}<span>{nameInput.length}/{characterLimit}</span></p>
      <input className='formInput' placeholder='Nome' onChange={event => handleName(event)} value={nameInput}/>
      <button className='submitButton' type='submit'>
        Enviar
      </button>
      {showMessage ?
      <p>
        {Message}
      </p>
      : <></>}
      { showNameTable ? <NamesTable list={nameTable}/> : <></>}
    </form>
  )
}
