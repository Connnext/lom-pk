import React from "react";

const FormInput = ({
  title,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
}) => {
  return (
    <div>
      <div className="form__input--title">{title}</div>
      <input
        onBlur={onBlur}
        type={
          name === "password" || name === "confirmPassword"
            ? "password"
            : "text"
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="form-input"
      />
      {error && <div style={{ color: "red", fontSize: "14px" }}>{error}</div>}
    </div>
  );
};

export default FormInput;
