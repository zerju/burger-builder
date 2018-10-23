import React from 'react';

import cssClasses from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={cssClasses.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
      {props.isAuthenticated ?
        <NavigationItem link="/Logout">Logout</NavigationItem>
        : <NavigationItem link="/Auth">Authenticate</NavigationItem>}
    </ul>
  );
};

export default navigationItems;