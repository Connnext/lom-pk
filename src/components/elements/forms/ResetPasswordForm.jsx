import React, { useEffect, useState } from "react";
import FormInput from "../inputs/FormInput";
import FormButton from "../buttons/formButton/FormButton";

export default function ResetPasswordForm({ handleSubmit }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [confirmError, setConfirmError] = useState("Пароли должны совпадать");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
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
    handleSubmit({ password });
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
    if (passwordError || confirmError || password !== confirmPassword) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, confirmError, password, confirmPassword]);
  return (
    <>
      <h2 className="form__title">Изменение пароля</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <FormInput
          title="Новый пароль:"
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
        <FormButton disabled={!formValid} text="Подтвердить" />
      </form>
    </>
  );
}
