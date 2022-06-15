import React from "react";
import * as ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div id="modal" className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modalEl = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalEl
      )}
    </>
  );
};

export default Modal;
