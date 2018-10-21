import React from 'react';

import cssClasses from './DrawerToggle.module.css';

const drawerToggle = (props) => {
  return (
    <div className={cssClasses.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;