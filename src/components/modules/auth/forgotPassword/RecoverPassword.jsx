import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch } from "react-redux";
import { recoverPassword } from "./../../../../redux/store/slices/userSlice";

export default function RecoverPassword() {
  const dispatch = useDispatch();
  const handleRecoverPassword = ({ email }) => {
    dispatch(recoverPassword({ email }));
  };
  return <Form handleSubmit={handleRecoverPassword} />;
}
