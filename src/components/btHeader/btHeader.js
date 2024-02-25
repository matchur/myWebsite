import React from 'react';
import './btHeader.css';

const BtHeader = ({ textIn, img }) => {
  return (
    <div className="Button-header">
        <img src={img} alt={'Imagem: '+textIn} />
      <span>{textIn}</span>
    </div>
  );
}

export default BtHeader;