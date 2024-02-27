import React, { useEffect, useState } from 'react';
import TypeIt from "typeit";
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
              <a className='Title-aboutme'>Sobre Mim</a>         
              <a className='Subtitle-aboutme'>Matheus Vinicius Costa</a>   
            </div>
   
              <a className='Text-aboutme'> Olá, me chamo <b>Matheus Costa</b>, sou desenvolvedor de softwares e um grande entusiasta 
              da Ciência da Computação, sempre dedicado a melhorar minhas habilidades e desenvolver aplicativos e idéias inteligentes.</a>
              <a className='Text-aboutme'> Aqui no meu site, você vai encontrar algumas coisas interessantes <i>sobre mim </i> 
              então fique a vontade para explorar, talvez eu tenha deixado alguns <b>Easter Eggs</b> por aí...
              </a>
              <a className='Text-aboutme'></a>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default  GpAboutMe;