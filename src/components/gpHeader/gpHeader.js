import React from 'react';
import './gpHeader.css';

import BtThree from '../btThree/btThree';

function GpHeader() 
{
 

  return (
    <div class="Group-header">
      <BtThree setText="Sobre Mim"sizeFont="7"/>
      <BtThree setText="Habilidades"sizeFont="7"/>
      <BtThree setText="Projetos"sizeFont="7"/>
      <BtThree setText="Contato"sizeFont="7"/>
    </div>
  );
}

export default GpHeader;