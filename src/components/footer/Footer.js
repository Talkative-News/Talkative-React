import React from 'react';
import './footer.css';
import Cover from '../../images/footer/footer-bg.png'
import Dot from '../../images/footer/Dot Talkative.svg';
import CapsuleLogo from '../../images/footer/capsuleLogo.png';

function Footer() {
  return (
    <div id='footerContainer'>
      <img src={ Cover } className='coverFooter' alt='Cover Headline' draggable='false'/>
      <div id='blackOut'/>
      <div className='footerAtas'>
        <div className='leftWing'>
          <div className='logo-place'>
            <img src={ Dot } alt='Dot Talkative Logo' draggable='false'/>
            <h1>Talkative</h1>
          </div>
          <div className='below-logo-text'>
            <span>
              Situs berita terupdate di Indonesia! Terdapat banyak bacaan dan
              informasi terkini. Anda juga dapat berdiskusi bersama.
            </span>
          </div>
        </div>
        <div className='rightWing'>
          <img src={CapsuleLogo} alt='Logo UKDW' draggable='false'></img>
        </div>
      </div>
      <div className='footerBawah'>
        <span>
          2023 Talkative News. All rights reserved. Terms of use | Privacy
          policy
        </span>
      </div>
    </div>
  );
}

export default Footer;
