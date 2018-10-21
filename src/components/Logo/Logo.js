import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'
import cssClasses from './Logo.module.css';

const logo = (props) => {
  return (
    <div style={{ height: props.height }} className={cssClasses.Logo}>
      <img alt="My Burger" src={burgerLogo}></img>
    </div>
  );
};

export default logo;