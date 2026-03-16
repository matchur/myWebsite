import React from 'react';
import './btContact.css';

function BtContact(params) {
  const handleClick = () => {
    window.open(params.Link);
  };

  return (
    <div className="Group-btContact">
      <div className="bt-Contact">
        <button className="neumorphic-Contact" onClick={handleClick}>
          <img className="imgContact" src={`./imgs/svg/${params.img}.svg`} alt="Contato" />
        </button>
      </div>
      <div className="bt-Text">
        <div className="txt-row">
          <b>{params.Name}</b> {params.Desc}
        </div>
      </div>
    </div>
  );
}

export default BtContact;
