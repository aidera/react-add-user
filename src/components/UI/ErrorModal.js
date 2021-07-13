import React from 'react';
import ReactDOM from 'react-dom';

import classes from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Backdrop = (props) => {
  const { onClick } = props;
  return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = (props) => {
  const { title, message, onConfirm } = props;
  return (
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
  );
};

const ErrorModal = (props) => {
  const { title, message, onConfirm } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
