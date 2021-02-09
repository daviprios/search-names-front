import React, { FormEvent, useEffect, useState } from 'react';

import './index.sass';

import api from 'services/api';

export default function UpdateForm() {
  const [nameInput, setNameInput] = useState('');
  const [isNameMax, setIsNameMax] = useState(false);
  const characterLimit = 100;

  const [codeInput, setCodeInput] = useState('');
  const [isCodeMax, setIsCodeMax] = useState(false);
  const numberLimit = 4;

  const [Message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if(nameInput.length >= characterLimit && !isNameMax)
      setIsNameMax(true);
    if(nameInput.length < characterLimit && isNameMax)
      setIsNameMax(false);
  }, [nameInput, isNameMax]);

  useEffect(() => {
    if(codeInput.length >= numberLimit && !isCodeMax)
      setIsCodeMax(true);
    if(codeInput.length < numberLimit && isCodeMax)
      setIsCodeMax(false);
  }, [codeInput, isCodeMax]);

  function handleName(event: FormEvent<HTMLInputElement>){
    if(isNameMax && event.currentTarget.value.length > nameInput.length)
      return;
    setNameInput(event.currentTarget.value);
  }

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
    api.updateName(nameInput, Number(codeInput)).then(result => {
      result.data.code === 'success' ? setMessage('Enviado com sucesso') : result.data.message === 'client error' ? setMessage('Falha no envio') : setMessage('Falha no servidor');
      setCodeInput('');
      setNameInput('');
    });
    setMessage('Enviando...');
    setShowMessage(true);
  }

  return (
    <form id='UpdateForm' onSubmit={event => handleSubmit(event)}>
      <h1>
        Atualizar um nome
      </h1>
      <p>
        Escreva o código e o novo nome a substituir
      </p>
      <p className='textLimit'>{isCodeMax ? 'Limite de numeros atingido' : ''}<span>{codeInput.length}/{numberLimit}</span></p>
      <input className='formInput' required placeholder='Código' onChange={event => handleCode(event)} value={codeInput}/>
      <p className='textLimit'>{isNameMax ? 'Limite de caracteres atingido' : ''}<span>{nameInput.length}/{characterLimit}</span></p>
      <input className='formInput' required placeholder='Nome' onChange={event => handleName(event)} value={nameInput}/>
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
