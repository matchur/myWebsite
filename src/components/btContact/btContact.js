import React from 'react';
import './btContact.css';
/*
@params
Name
Desc

*/


function BtContact(params) {


      
    const handleClick = () => {
        window.open(params.Link);
      };

  return (
    <div className='Group-btContact'>
        <div className='bt-Contact'>
            <button class="neumorphic-Contact" onClick={()=>{handleClick()}} >
                <img className='imgContact' src={"./imgs/svg/"+params.img+".svg"} alt="oi"></img>
            </button>
        </div>
        <div className='bt-Text'>
            <div className='txt-row'><b>{params.Name}</b> {params.Desc}</div>
        </div>
    </div>
  );
}

export default BtContact;