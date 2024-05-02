import React from "react";

const FormLinks = ({ formType, handleFormChange }) => {
  return (
    <div className="extra-links">
      {formType === "login" && (
        <div className="extra__links--auth">
          <span onClick={() => handleFormChange("recoverPassword")}>
            Забыли пароль?
          </span>
          <span
            onClick={() => handleFormChange("register")}
            style={{ textAlign: "right", display: "inline-flex", gap: "3px" }}
          >
            Регистрация{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="15"
              height="15"
            >
              <path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" />
            </svg>
          </span>
        </div>
      )}
      {formType === "register" && (
        <span onClick={() => handleFormChange("login")}>
          Авторизация{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" />
          </svg>
        </span>
      )}
      {formType === "recoverPassword" && (
        <span onClick={() => handleFormChange("login")}>
          Авторизация{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" />
          </svg>
        </span>
      )}
    </div>
  );
};

export default FormLinks;
