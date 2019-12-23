import React from 'react';
import Logo from '../../assets/images/logo.png';

const logoComponent = () => (
  <a href="/" aria-describedby="logoDescription" className="rickmrty-logo">
    <img src={Logo} alt="logo" />
    <span className="visually-hidden" id="logoDescription">Rick and Morty Logo</span>
  </a>
);

export default logoComponent;
