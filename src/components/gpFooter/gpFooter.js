import React from 'react';
import './gpFooter.css';

const GpFooter = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img className="footer-background" src="./imgs/footer_img.png" alt="Footer BackGround" />
        <div className='footer-nail'>
        <figcaption className='label-nail'><b>© COPYRIGHT MATHEUS COSTA. ALL RIGHTS RESERVED.</b></figcaption>
        <figcaption className='label-nail2'><i>03/2024</i></figcaption>
        </div>
      </div>
    </div>
  );
}

export default GpFooter;