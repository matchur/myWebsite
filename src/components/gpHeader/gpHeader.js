import React from 'react';
import './gpHeader.css';
import BtHeader from '../btHeader/btHeader';

function GpHeader() 
{
  return (
    <div class="Group-header">
      <BtHeader textIn='Inicio' img="../../images/test.jpg"/>
      <BtHeader textIn='Conhecimento' img="../../images/test.jpg"/>
      <BtHeader textIn='Projetos' img="../../images/test.jpg"/>
      <BtHeader textIn='Contato' img="../../images/test.jpg"/>
    </div>
  );
}

export default GpHeader;