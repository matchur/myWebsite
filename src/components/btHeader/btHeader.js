import React from 'react';
import './btHeader.css';

const BtHeader = ({ textIn, sectionId }) => {
  const handleClick = () => {
    window.location.hash = sectionId;
  };

  return (
    <button className="neumorphic" onClick={handleClick}>
      <span>
        <b>{textIn}</b>
      </span>
    </button>
  );
};

export default BtHeader;
