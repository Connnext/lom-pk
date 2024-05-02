import React, { useEffect, useState } from "react";
import "./form.css";
import Modal from "../modals/Modal";
import RecoverPasswordForm from "./RecoverPasswordForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Form = ({ handleSubmit }) => {
  const [formType, setFormType] = useState("login");

  const handleFormChange = (newFormType) => {
    setFormType(newFormType);
  };

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
        <form className="form-container">
          {formType === "login" && (
            <LoginForm
              formType={formType}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
            />
          )}
          {formType === "register" && (
            <RegisterForm
              formType={formType}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
            />
          )}
          {formType === "recoverPassword" && (
            <RecoverPasswordForm
              formType={formType}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
    </Modal>
  );
};

export default Form;
