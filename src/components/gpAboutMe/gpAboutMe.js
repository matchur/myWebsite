import React, { useEffect } from 'react';
import './gpAboutMe.css';
import Typewriter from 'typewriter-effect/dist/core';

function GpAboutMe() {
  useEffect(() => {
    const typewriter = new Typewriter('#element', {
      strings: ['Matheus V. <b>Costa</b>', 'Desenvolvedor', 'Cientista', 'Criativo'],
      autoStart: true,
      loop: true,
    });
    
    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div className='Group-principal'>
      <div className="Group-content">
        <div className="image-container">
          <figure id="container">
            <img alt="demonstrative img" src="./imgs/logo1.png" />  
            <figcaption id='element'></figcaption>
          </figure>
          <div className='Group-aboutme'>
            <img className='Pin-aboutme'  alt="Componente Visual" src="./imgs/pinAboutMe.png"></img>
            <div className='Group-Title'>   
              <p className='Title-aboutme'>Sobre Mim</p>         
              <p className='Subtitle-aboutme' >Matheus Vinicius Costa</p>   
            </div>
   
            <p className='Text-aboutme' > Olá, me chamo <b>Matheus Costa</b>, sou desenvolvedor de softwares e um grande entusiasta 
              da Ciência da Computação, sempre dedicado a melhorar minhas habilidades e desenvolver aplicativos e ideias inteligentes.</p>
            <p className='Text-aboutme'> Aqui no meu site, você vai encontrar algumas coisas interessantes <i>sobre mim</i> 
              então fique à vontade para explorar, talvez eu tenha deixado alguns <b>Easter Eggs</b> por aí...
            </p>

          </div>
        </div>
      </div>  
    </div>
  );
}

export default GpAboutMe;