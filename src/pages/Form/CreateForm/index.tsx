import React, { FormEvent, useEffect, useState } from 'react';

import './index.sass';

export default function CreateForm() {
  const [nameInput, setNameInput] = useState('');
  const [isNameMax, setIsNameMax] = useState(false);
  const characterLimit = 100;

  const [showMessage, setShowMessage] = useState(false);

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
  }

  return (
    <form id='CreateForm' onSubmit={event => handleSubmit(event)}>
      <h1>
        Adicionar um nome
      </h1>
      <p>
        Escreva o nome que quer adicionar
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
    </form>
  )
}
