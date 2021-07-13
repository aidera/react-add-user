import React from 'react';

import classes from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ErrorModal = (props) => {
  const { title, message, onConfirm } = props;
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
