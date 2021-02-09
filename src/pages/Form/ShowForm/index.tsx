import React, { FormEvent, useEffect, useState } from 'react';

import './index.sass';

import NamesTable, { NameList } from 'components/namesTable';

export interface NameResponse{
  names: NameList[],
  pagesize: number,
  total: number
}

export default function ShowForm() {
  const [nameInput, setNameInput] = useState('');
  const [isNameMax, setIsNameMax] = useState(false);
  const characterLimit = 100;

  const [showMessage, setShowMessage] = useState(false);

  const [nameResponse, setNameResponse] = useState<NameResponse>({names: [],pagesize: 0, total: 0});

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
    setNameInput('');
    setShowMessage(true);
    setNameResponse({names: [{id: '1', name: 'Adalbertino'},{id: '2', name: 'Bragão'},{id: '3', name: 'Cinderela'}], pagesize: 3, total: 18});
  }

  return (
    <form id='ShowForm' onSubmit={event => handleSubmit(event)}>
      <h1>
        Mostrar um ou mais nomes
      </h1>
      <p>
        Escreva o nome que quer pesquisar
      </p>
      <p className='textLimit'>{isNameMax ? 'Limite de caracteres atingido' : ''}<span>{nameInput.length}/{characterLimit}</span></p>
      <input className='formInput' required placeholder='Nome' onChange={event => handleName(event)} value={nameInput}/>
      <button className='submitButton' type='submit'>
        Enviar
      </button>
      {showMessage ?
      <p>
        Message 
      </p>
      : <></>}
      { nameResponse.total <= 0 ? <></> :
        <NamesTable list={nameResponse.names} size={nameResponse.pagesize} total={nameResponse.total}/>
      }
    </form>
  )
}
