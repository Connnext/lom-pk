import React, { useState, useEffect } from "react";
import FormInput from "../inputs/FormInput";
import FormButton from "../buttons/formButton/FormButton";
import FormLinks from "../links/FormLinks";
import { useSelector } from "react-redux";

export default function RecoverPasswordForm({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email });
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

  useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  return (
    <>
      <h2 className="form__title">Восстановление пароля</h2>
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
        <FormLinks />
        <FormButton disabled={!formValid} text="Отправить запрос" />
      </form>
    </>
  );
}
