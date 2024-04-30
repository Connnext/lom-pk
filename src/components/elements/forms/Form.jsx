import React, { useEffect, useState } from "react";
import "./form.css";
import { useLocation } from "react-router-dom";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "utils/constants";
import Modal from "../modals/Modal";
import CloseButton from "../buttons/CloseButton";
import FormInput from "../inputs/FormInput";
import FormButton from "../buttons/FormButton";
import FormLinks from "../links/FormLinks";

const Form = ({ handleSubmit }) => {
  const location = useLocation();
  const isRecoverPassword = location.pathname === FORGOT_PASSWORD_ROUTE;
  const isRegister = location.pathname === REGISTER_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [confirmError, setConfirmError] = useState("Пароли должны совпадать");
  const [modalActive, setModalActive] = useState("false");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "confirmPassword":
        setConfirmDirty(true);
        break;
      default:
        break;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };
  const handleCloseModal = () => {
    setModalActive(false);
  };
  const handleForgotPassword = () => {
    setModalActive(true);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email*");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен быть больше 6 символов*");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
    // Проверяем совпадение паролей
    if (isRegister && confirmPassword && e.target.value !== confirmPassword) {
      setConfirmError("Пароли не совпадают");
    } else {
      setConfirmError("");
    }
  };
  const confirmHandler = (e) => {
    setConfirmPassword(e.target.value);
    // Проверяем совпадение паролей
    if (isRegister && password && e.target.value !== password) {
      setConfirmError("Пароли не совпадают");
    } else {
      setConfirmError("");
    }
  };
  useEffect(() => {
    if (
      isRegister &&
      (emailError ||
        passwordError ||
        confirmError ||
        password !== confirmPassword)
    ) {
      setFormValid(false);
    } else if (!isRegister && (emailError || passwordError)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    isRegister,
    emailError,
    passwordError,
    confirmError,
    password,
    confirmPassword,
  ]);
  useEffect(() => {
    if (modalActive) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalActive]);
  const getTitle = (isRegister, isRecoverPassword) => {
    return isRegister
      ? "Регистрация"
      : isRecoverPassword
      ? "Восстановление пароля"
      : "Вход";
  };

  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <div className="form-wrapper">
        <div className="form__head">
          <h2 className="form__title">
            {getTitle(isRegister, isRecoverPassword)}
          </h2>
          <CloseButton onClick={handleCloseModal} />
        </div>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <FormInput
            title="Email:"
            name="email"
            value={email}
            onChange={emailHandler}
            onBlur={blurHandler}
            error={emailDirty && emailError}
            placeholder="lom@mail.ru"
          />
          {!isRecoverPassword && (
            <FormInput
              title="Пароль:"
              name="password"
              value={password}
              onChange={passwordHandler}
              onBlur={blurHandler}
              error={passwordDirty && passwordError}
              placeholder="abc1234"
            />
          )}
          {isRegister && (
            <FormInput
              title="Подтвердите пароль"
              name="confirmPassword"
              value={confirmPassword}
              onChange={confirmHandler}
              onBlur={blurHandler}
              error={confirmDirty && confirmError}
              placeholder="abc1234"
            />
          )}
          <FormLinks
            isRegister={isRegister}
            isRecoverPassword={isRecoverPassword}
            handleForgotPassword={handleForgotPassword}
          />
          <FormButton
            disabled={!formValid}
            text={isRegister ? "Зарегистрироваться" : "Войти"}
          />
        </form>
      </div>
    </Modal>
  );
};

export default Form;
