import React from 'react';
import './btHeader.css';

const BtHeader = (params) => {
  
  const handleClick = () => {
    window.scrollTo({
      top: params.viewY,
      behavior: 'smooth', // Adiciona um comportamento de rolagem suave
    });
  };

  return (
      <button class="neumorphic" onClick={handleClick}>
              <span><b>{params.textIn}</b></span>
      </button>
  );
}

export default BtHeader;