import React, { useState, useEffect } from 'react';
import './gpHeader.css';
import BtHeader from '../btHeader/btHeader';
import CpToggle from '../cpToggle/cpToggle';
function GpHeader() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className={`Group-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='display-flex'>
        <BtHeader textIn="Sobre Mim" viewY= "0"/>
        <BtHeader textIn="Habilidades" viewY= "940"/>
        <BtHeader textIn="Portfólio" viewY= "1820"/>
        <BtHeader textIn="Contato" viewY="3420" />
        <CpToggle />
      </div>
    </div>
  );
}

export default GpHeader;