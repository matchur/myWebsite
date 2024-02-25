import React from 'react';
import './btHeader.css';

const BtHeader = ({ textIn, img}) => {
    
    const divStyle = {
        backgroundImage: `url(${img})`, // Define a imagem de fundo
      };
    
  return (
    <div id={textIn} className="Button-header" style={divStyle}>
      <span>{textIn}</span>
    </div>
  );
}

export default BtHeader;