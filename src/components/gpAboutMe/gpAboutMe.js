import React, { useEffect} from 'react';
import PhotoViewer from '../photoViewer/photoViewer';
import './gpAboutMe.css';
import Typewriter from 'typewriter-effect/dist/core';



function GpAboutMe() {


  useEffect(()=>
  {
    new Typewriter('#element', {
      strings: ['Matheus V. <b>Costa</b>', 'Desenvolvedor','Ciêntista da Computação','<i>Full Stack Dev</i>',],
      autoStart: true,
      loop: true,
    });
  },[]);
  

  return (
    <div className='Group-principal'>
      <div className="Group-content">
        <div className="image-container">
          <figure id="container">
            <img className="ImgLogo1" alt="demonstrative img" src="./imgs/logo1.png" />  
            <figcaption id='element'></figcaption>
          </figure>
          <div className='Group-aboutme'>
            <div className='Group-aboutme_inner'>
              <img className='Pin-aboutme'  alt="Componente Visual" src="./imgs/pinAboutMe.png"></img>
              <div className='Group-Title'>   
                <div className='Title-aboutme'>Sobre Mim</div>         
                <div className='Subtitle-aboutme'>Matheus Vinicius Costa</div>   
              </div>
                <div className='Text-aboutme1'> Olá, me chamo <b>Matheus Costa</b>, sou desenvolvedor Full Stack e um grande entusiasta 
                da Ciência da Computação, sempre dedicado a melhorar minhas habilidades e desenvolver idéias inteligentes.</div>
                <div className='Text-aboutme2'> Aqui no meu site, você vai encontrar algumas coisas interessantes <i>sobre mim </i> 
                então fique a vontade para explorar.
                </div>
                <PhotoViewer /> 
            </div>
            
            <div className='Group-easycontact'>
              <img className='Pin-easycontact'  alt="Componente Visual 2" src="./imgs/pinAboutMe.png"></img>
              <button className="custom-btn btn-3" onClick={() => window.open('https://www.linkedin.com/in/matheus-vin%C3%ADcius-costa-127666189/')}><span>LinkedIn</span></button>
              <button className="custom-btn btn-3" onClick={() => window.open('https://github.com/matchur')}><span>GitHub</span></button>          </div>
          </div>
          
        </div>
      </div> 
      

    </div>
  );
}

export default  GpAboutMe;