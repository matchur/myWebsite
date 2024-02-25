import React from 'react';
import './gpHeader.css';
import BtHeader from '../btHeader/btHeader';

function GpHeader() 
{
  var inicioImg = ""

  return (
    <div class="Group-header">
      <BtHeader textIn='Inicio' img="./test.jpg"/>
      <BtHeader textIn='Conhecimento' img="./test.jpg"/>
      <BtHeader textIn='Projetos' img="./test.jpg"/>
      <BtHeader textIn='Contato' img="./test.jpg"/>
    </div>
  );
}

export default GpHeader;