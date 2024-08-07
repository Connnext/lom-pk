import React, { useState, useEffect } from "react";
import FormInput from "../inputs/FormInput";
import FormButton from "../buttons/formButton/FormButton";
import FormLinks from "../links/FormLinks";

export default function RegisterForm({ handleSubmit }) {
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
    handleSubmit({ email, password });
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
    if (confirmPassword && e.target.value !== confirmPassword) {
      setConfirmError("Пароли не совпадают");
    } else {
      setConfirmError("");
    }
  };

  const confirmHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setConfirmError("Пароли не совпадают");
    } else {
      setConfirmError("");
    }
  };

  useEffect(() => {
    if (
      emailError ||
      passwordError ||
      confirmError ||
      password !== confirmPassword
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, confirmError, password, confirmPassword]);

  return (
    <>
      <h2 className="form__title">Регистрация</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <FormInput
          title="Email:"
          name="email"
          value={email}
          onChange={emailHandler}
          onBlur={blurHandler}
          error={emailDirty && emailError}
          placeholder="lom@mail.ru"
        />
        <FormInput
          title="Пароль:"
          name="password"
          value={password}
          onChange={passwordHandler}
          onBlur={blurHandler}
          error={passwordDirty && passwordError}
          placeholder="abc1234"
        />
        <FormInput
          title="Подтвердите пароль"
          name="confirmPassword"
          value={confirmPassword}
          onChange={confirmHandler}
          onBlur={blurHandler}
          error={confirmDirty && confirmError}
          placeholder="abc1234"
        />
        <FormLinks />
        <FormButton disabled={!formValid} text="Зарегистрироваться" />
      </form>
    </>
  );
}
