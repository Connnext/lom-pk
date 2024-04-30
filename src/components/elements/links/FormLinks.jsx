import React from "react";
import { Link } from "react-router-dom";
import {
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  FORGOT_PASSWORD_ROUTE,
} from "utils/constants";

const FormLinks = ({ isRegister, isRecoverPassword, handleForgotPassword }) => {
  return (
    <div className="extra-links">
      {!isRegister && !isRecoverPassword ? (
        <div className="extra__links--auth">
          <Link to={FORGOT_PASSWORD_ROUTE} onClick={handleForgotPassword}>
            Забыли пароль?
          </Link>
          <Link
            style={{
              textAlign: "right",
              display: "inline-flex",
              gap: "3px",
            }}
            to={REGISTER_ROUTE}
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
          </Link>
        </div>
      ) : (
        <Link
          style={{
            textAlign: "right",
            display: "inline-flex",
            gap: "3px",
          }}
          to={LOGIN_ROUTE}
        >
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
        </Link>
      )}
    </div>
  );
};

export default FormLinks;
