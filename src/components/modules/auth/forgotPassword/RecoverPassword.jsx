import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch } from "react-redux";
import { recoverPassword } from "store/slices/userSlice";

export default function RecoverPassword() {
  const dispatch = useDispatch();
  const handleRecoverPassword = (email) => {
    dispatch(recoverPassword({ email }));
  };
  const title = "recoverPassword";
  return <Form title={title} handleSubmit={handleRecoverPassword} />;
}
