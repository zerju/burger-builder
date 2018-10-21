import React from 'react';
import cssClasses from './Layout.css';

const layout = (props) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={cssClasses.Content}>
      {props.children}
    </main>
  </>
);

export default layout;