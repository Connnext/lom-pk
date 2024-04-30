import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch } from "react-redux";
import { recoverPassword } from "store/slices/userSlice";

export default function RecoverPassword() {
  const dispatch = useDispatch();
  const handleRecoveryPassword = (email) => {
    dispatch(recoverPassword(email)); // Отправляем запрос на сервер
  };
  return <Form handleSubmit={(email) => handleRecoveryPassword(email)} />;
}
