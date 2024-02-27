import React from 'react';
import './gpHeader.css';
import BtHeader from '../btHeader/btHeader'

function GpHeader() 
{

  return (
    <div class="Group-header">
      <BtHeader textIn="Sobre Mim"/>
      <BtHeader textIn="Habilidades"/>
      <BtHeader textIn="Projetos"/>
      <BtHeader textIn="Contato"/>
    </div>
  );
}

export default GpHeader;