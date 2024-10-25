import React from 'react';
import './cpDevText.css';

const CpDevText = (params) => {
    

  return (    
            <div>
                <div id='containerComp'>
                    <b>{params.title}</b>
                    <div id='flip'>
                        <div><div> &lt;Front-End/&gt;</div></div>
                        <div><div>.&#40;Back-End&#41;</div></div>
                        <div><div>&gt;$ Pentest</div></div>
                        <div><div>🎮 GameDev 🎲</div></div>
                    </div>
                </div>
            </div>
  );
}

export default CpDevText;