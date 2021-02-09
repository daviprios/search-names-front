import React, { FormEvent, useEffect, useState } from 'react';

import './index.sass';

import api from 'services/api';

export default function DeleteForm() {
  const [codeInput, setCodeInput] = useState('');
  const [isCodeMax, setIsCodeMax] = useState(false);
  const numberLimit = 4;

  const [Message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if(codeInput.length >= numberLimit && !isCodeMax)
      setIsCodeMax(true);
    if(codeInput.length < numberLimit && isCodeMax)
      setIsCodeMax(false);
  }, [codeInput, isCodeMax]);

  function handleCode(event: FormEvent<HTMLInputElement>){
    const value = event.currentTarget.value;
    if(value.length !== 0 && value[value.length - 1].match(/\D/))
      return;
    if(isCodeMax && value.length > codeInput.length)
      return;
    setCodeInput(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    api.deleteName(Number(codeInput)).then(result => {
      result.data.code === 'success' ? setMessage('Enviado com sucesso') : setMessage('Algo deu errado ;-;');
      setCodeInput('');
    });
    setMessage('Enviando...');
    setShowMessage(true);
  }

  return (
    <form id='DeleteForm' onSubmit={event => handleSubmit(event)}>
      <h1>
        Deletar um nome
      </h1>
      <p>
        Escreva o código do nome a apagar
      </p>
      <p className='textLimit'>{isCodeMax ? 'Limite de numeros atingido' : ''}<span>{codeInput.length}/{numberLimit}</span></p>
      <input className='formInput' required placeholder='Código' onChange={event => handleCode(event)} value={codeInput}/>
      <button className='submitButton' type='submit'>
        Enviar
      </button>
      {showMessage ?
      <p>
        {Message}
      </p>
      : <></>}
    </form>
  )
}
