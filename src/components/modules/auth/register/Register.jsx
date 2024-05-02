import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch } from "react-redux";
import { registerUser } from "store/slices/userSlice";

export default function Register() {
  const dispatch = useDispatch();
  const handleRegister = (email, password) => {
    dispatch(registerUser({ email, password }));
  };
  const title = "register";
  return <Form title={title} handleSubmit={handleRegister} />;
}
