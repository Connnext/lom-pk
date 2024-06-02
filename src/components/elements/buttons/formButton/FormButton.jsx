import React from "react";
import "./formButton.css";
const FormButton = ({ disabled, text }) => {
  return (
    <button disabled={disabled} type="submit" className="form__button">
      {text}
    </button>
  );
};

export default FormButton;
