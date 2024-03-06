import React, { useState, useEffect } from 'react';
import './gpContact.css';
import BtContact from '../btContact/btContact';

function GpContact() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    



    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Group-PrincipalContact'>
      <div className='background-wrapper'>
        <img
          className='backgroundContact'
          src={       window.innerWidth <= 768?   './imgs/myfotos/wallpaperMeCel.png':   './imgs/myfotos/wallpaperMe.png'   }
          style={{ transform: `translateY(${scrollPosition * 0.017}px)` , opacity: 0 + scrollPosition / 3080 }} // Adjust speed as needed
          alt="Background"
        />
        <div className="overlay">
          <h1>Vamos Conversar?</h1>
          <div className='contactCards'>
            <BtContact img="whatsapp" Name="Telefone: " Desc=" (18) 982028260" Link = "https://api.whatsapp.com/send?phone=5518982028260"/>
            <BtContact img="gmail" Name="E-mail: " Desc="ma.usv@hotmail.com" Link="mailto:ma.usv@hotmail.com" />
            <BtContact img="github" Name="GitHub: " Desc="Matchur" Link="https://github.com/matchur" />
            <BtContact img="linkedin" Name="LinkedIn: " Desc="Matheus V. Costa" Link="https://www.linkedin.com/in/matheus-vin%C3%ADcius-costa-127666189/" />
            <BtContact img="instagram" Name="Instagram: " Desc="@m4tchur" Link="https://www.instagram.com/m4tchur/" />

  
          </div>
        </div>
      </div>
      <div className='Group'></div>
    </div>
  );
}

export default GpContact;