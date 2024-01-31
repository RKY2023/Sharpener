import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHide}></div>
}

const Overlays = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const getOverlayElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onHide}/>, getOverlayElement)}
        {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>, getOverlayElement)}
        </>
    )
}

export default Modal;