import React from "react";
import ResetPasswordForm from "components/elements/forms/ResetPasswordForm";
import { useResetPasswordMutation } from "./../../../../redux/services/authService";
import { successMessageResetPassword } from "utils/messages";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token_for_reset_password");
  const [resetPassword] = useResetPasswordMutation();
  const handleResetPassword = async ({ password }) => {
    try {
      await resetPassword({ token: token, password: password }).unwrap();
      dispatch(setShowModal(false));
      dispatch(setFormType(null));
      successMessageResetPassword();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <ResetPasswordForm handleSubmit={handleResetPassword} />;
}
