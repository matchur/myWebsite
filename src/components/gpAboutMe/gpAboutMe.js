import React, { useEffect} from 'react';

import './gpAboutMe.css';
import Typewriter from 'typewriter-effect/dist/core';



function GpAboutMe() {


  useEffect(()=>
  {
    new Typewriter('#element', {
      strings: ['Matheus V. <b>Costa</b>', 'Desenvolvedor','Cientista','Criativo',],
      autoStart: true,
      loop: true,
    });
  },[]);
  

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
              <div className='Title-aboutme'>Sobre Mim</div>         
              <div className='Subtitle-aboutme'>Matheus Vinicius Costa</div>   
            </div>
              <div className='Text-aboutme1'> Olá, me chamo <b>Matheus Costa</b>, sou desenvolvedor de software e um grande entusiasta 
              da Ciência da Computação, sempre dedicado a melhorar minhas habilidades e desenvolver aplicativos e idéias inteligentes.</div>
              <div className='Text-aboutme2'> Aqui no meu site, você vai encontrar algumas coisas interessantes <i>sobre mim </i> 
              então fique a vontade para explorar, talvez eu tenha deixado alguns <b>Easter Eggs</b> por aí...
              </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default  GpAboutMe;