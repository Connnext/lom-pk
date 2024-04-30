import React, { useState } from "react";
import "./modal.css";
import LoginForm from "../auth/login/LoginForm";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <LoginForm />
      </div>
    </div>
  );
};

export default Modal;
