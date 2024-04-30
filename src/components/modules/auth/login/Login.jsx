import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch } from "react-redux";
import { loginUser } from "store/slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    dispatch(loginUser({ email, password }));
  };

  return <Form handleSubmit={handleLogin} />;
}
