import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./../../../../redux/store/slices/userSlice";
import RegisterForm from "components/elements/forms/RegisterForm";
import { errorWithText } from "utils/messages";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import Spinner from "components/elements/spinners/Spinner";
import {
  useRegisterMutation,
  useRequestVerifyTokenMutation,
} from "./../../../../redux/services/authService";

export default function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const [requestVerifyToken] = useRequestVerifyTokenMutation();
  const dispatch = useDispatch();
  const handleRegister = async (data) => {
    try {
      localStorage.setItem("user_email_for_verify", data.email);
      await register(data).unwrap();
      // dispatch(registerUser(data));
      dispatch(setFormType("confirmEmail"));
      requestVerifyToken(data.email);
    } catch (err) {
      if (err.data.detail == "REGISTER_USER_ALREADY_EXISTS") {
        dispatch(setShowModal(true));
        dispatch(setFormType("requestVerify"));
      }
    }
  };
  if (isLoading) return <Spinner />;
  return <RegisterForm handleSubmit={handleRegister} />;
}
