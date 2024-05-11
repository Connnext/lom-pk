import React from "react";
import "./form.css";
import Modal from "../modals/Modal";
import RecoverPasswordForm from "./RecoverPasswordForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const Form = ({ handleSubmit }) => {
  const formType = useSelector((state) => state.modal.formType);
  return (
    <Modal>
      <div className="form-wrapper">
        <div className="form__head">
          <h2 className="form__title">
            {formType === "register"
              ? "Регистрация"
              : formType === "recoverPassword"
              ? "Восстановление пароля"
              : "Вход"}
          </h2>
        </div>
        {formType === "login" && <LoginForm handleSubmit={handleSubmit} />}
        {formType === "register" && (
          <RegisterForm handleSubmit={handleSubmit} />
        )}
        {formType === "recoverPassword" && (
          <RecoverPasswordForm handleSubmit={handleSubmit} />
        )}
      </div>
    </Modal>
  );
};

export default Form;
