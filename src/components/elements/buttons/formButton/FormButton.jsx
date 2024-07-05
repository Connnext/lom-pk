import React from "react";
import "./formButton.css";
const FormButton = ({ disabled, text, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className="form__button"
    >
      {text}
    </button>
  );
};

export default FormButton;
