import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  const { type, onClick, children } = props;
  return (
    <button
      className={classes.button}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
