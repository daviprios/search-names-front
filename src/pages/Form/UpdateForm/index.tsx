import React, { FormEvent, useEffect, useState } from 'react';

import './index.sass';

export default function UpdateForm() {
  const [nameInput, setNameInput] = useState('');
  const [isNameMax, setIsNameMax] = useState(false);
  const characterLimit = 100;

  const [codeInput, setCodeInput] = useState('');
  const [isCodeMax, setIsCodeMax] = useState(false);
  const numberLimit = 4;

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
    if(isCodeMax && event.currentTarget.value.length > codeInput.length)
      return;
    setCodeInput(event.currentTarget.value);
  }

  return (
    <div>
      <h1>
        Atualizar um nome
      </h1>
      <p>
        Escreva o código e o novo nome a substituir
      </p>
      <p>Limite de numeros atingido <span>{codeInput.length}/{numberLimit}</span></p>
      <input placeholder='Código' onChange={event => handleCode(event)} value={codeInput}/>
      <p>Limite de caracteres atingido <span>{nameInput.length}/{characterLimit}</span></p>
      <input placeholder='Nome' onChange={event => handleName(event)} value={nameInput}/>
    </div>
  )
}
