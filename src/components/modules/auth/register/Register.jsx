import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./../../../../redux/store/slices/userSlice";
import { useSignUpMutation } from "./../../../../redux/services/userService";
import RegisterForm from "components/elements/forms/RegisterForm";
import { error, successMessageSignUp } from "utils/messages";
import { setFormType } from "./../../../../redux/store/slices/modalSlice";

export default function Register() {
  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useDispatch();
  const handleFormChange = (newFormType) => {
    dispatch(setFormType(newFormType));
  };
  const handleRegister = async (data) => {
    try {
      await signUp(data).unwrap();
      dispatch(registerUser(data));
      successMessageSignUp();
      handleFormChange("confirmEmail");
    } catch (err) {
      console.log(err);
      error("Аккаунт с данной почтой уже существует");
    }
  };
  if (isLoading) {
    return <h3 style={{ fontSize: "20px" }}>Загрузка...</h3>;
  }
  return <RegisterForm handleSubmit={handleRegister} />;
}
