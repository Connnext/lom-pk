import React, { useState, useEffect } from "react";
import FormInput from "../inputs/FormInput";
import FormButton from "../buttons/formButton/FormButton";
import FormLinks from "../links/FormLinks";
import { useSelector } from "react-redux";

const LoginForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
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
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <>
      <h2 className="form__title">Вход</h2>
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
        <FormLinks />
        <FormButton disabled={!formValid} text="Войти" />
      </form>
    </>
  );
};

export default LoginForm;
