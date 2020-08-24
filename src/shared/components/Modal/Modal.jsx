import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition as Animation } from 'react-transition-group';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const ModalOverlay = ({
  className,
  style,
  onSubmit,
  headerClass,
  header,
  children,
  contentClass,
  footerClass,
  footer,
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  const { show, onCancel } = props;
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <Animation
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </Animation>
    </>
  );
};

export default Modal;
