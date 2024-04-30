import React from "react";

const FormButton = ({ disabled, text }) => {
  return (
    <button disabled={disabled} type="submit" className="form-button">
      {text}
    </button>
  );
};

export default FormButton;
