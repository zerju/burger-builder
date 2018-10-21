import React from 'react';
import cssClasses from './Backdrop.module.css';

const backdrop = (props) => {
  const backdropEl = props.show ?
    <div className={cssClasses.Backdrop} onClick={props.clicked}></div> : null;
  return (
    <>
      {backdropEl}
    </>
  );
};

export default backdrop;