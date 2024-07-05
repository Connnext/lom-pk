import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecoverPasswordForm from "components/elements/forms/RecoverPasswordForm";
import { useForgotPasswordMutation } from "./../../../../redux/services/authService";
import { successRecoverPasswordMessage } from "utils/messages";
import { useDispatch } from "react-redux";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import Spinner from "components/elements/spinners/Spinner";

export default function RecoverPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleRecoverPassword = async ({ email }) => {
    try {
      await forgotPassword(email).unwrap();
      dispatch(setShowModal(false));
      dispatch(setFormType(null));
      successRecoverPasswordMessage(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <RecoverPasswordForm handleSubmit={handleRecoverPassword} />
      )}{" "}
    </div>
  );
}
