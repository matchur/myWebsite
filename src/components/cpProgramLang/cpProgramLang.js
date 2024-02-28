import React from 'react';
import './cpProgramLang.css';
/*
Alt = Descrição
Img = Caminho Imagem
*/

const CpProgramLang = (params) => {
    

  return (
      <div className='Component-ProgramLang'>
        <img src={params.img} alt={params.alt}></img>
      </div>
  );
}

export default CpProgramLang;