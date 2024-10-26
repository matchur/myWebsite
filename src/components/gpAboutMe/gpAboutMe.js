import React, { useEffect} from 'react';
import PhotoViewer from '../photoViewer/photoViewer';
import './gpAboutMe.css';
import Typewriter from 'typewriter-effect/dist/core';



function GpAboutMe() {


  useEffect(()=>
  {
    new Typewriter('#element', {
      strings: ['Desenvolvedor','Ciêntista da Computação','<i>Full Stack Dev</i>',],
      autoStart: true,
      loop: true,
      deleteSpeed: 90,
      pauseFor: 4000,
    });
  },[]);
  

  return (
    <div className='Group-principal'>
        

            <img className="ImgLogo1" alt="demonstrative img" src="./imgs/logo1.png" />  


          <div className='Group-aboutme'>
            <div className='Group-aboutme_inner'>
              <img className='Pin-aboutme'  alt="Componente Visual" src="./imgs/pinAboutMe.png"></img>
              <div className='Group-Title'>   
                <div className='Title-aboutme'>Seja Bem-Vindo</div>         
                <div className='Subtitle-aboutme'>&#123;M&#125;</div>   
              </div>
                  <div className='Text-aboutme1'> Olá, me chamo <b>Matheus V. Costa</b>, sou <t id='element'></t>, e você está no meu <i>website</i>. Se busca um profissional para a sua equipe ou tem uma proposta de projeto, entre em contato!</div>
                <PhotoViewer /> 
            </div>

            <div className='Group-easycontact'>
              <img className='Pin-easycontact'  alt="Componente Visual 2" src="./imgs/pinAboutMe.png"></img>
              <button className="custom-btn btn-3" onClick={() => window.open('https://www.linkedin.com/in/matheus-vin%C3%ADcius-costa-127666189/')}><span>LinkedIn</span></button>
              <button className="custom-btn btn-3" onClick={() => window.open('https://github.com/matchur')}><span>GitHub</span></button>          
              </div>

            </div>
        
      
      

    </div>
  );
}

export default  GpAboutMe;