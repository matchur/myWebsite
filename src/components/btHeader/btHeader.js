import React from 'react';
import './btHeader.css';

const BtHeader = ({textIn}) => {
    

  return (
      <button class="neumorphic">
              <span><b>{textIn}</b></span>
      </button>
  );
}

export default BtHeader;