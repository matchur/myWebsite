import React, { useState, useEffect } from 'react';
import './gpHeader.css';
import BtHeader from '../btHeader/btHeader';
import CpToggle from '../cpToggle/cpToggle';

function GpHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 130);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Group-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="display-flex">
        <BtHeader textIn="Sobre Mim" sectionId="about" />
        <BtHeader textIn="Habilidades" sectionId="skills" />
        <BtHeader textIn="Portfólio" sectionId="projects" />
        <BtHeader textIn="Contato" sectionId="contact" />
        <CpToggle />
      </div>
    </div>
  );
}

export default GpHeader;
