import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  errorMessage,
  successMessageAdmin,
  successMessageCustomer,
} from "utils/messages";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import { useLoginMutation } from "./../../../../redux/services/authService";
import Spinner from "components/elements/spinners/Spinner";
import LoginForm from "components/elements/forms/LoginForm";
import { authUser } from "./../../../../redux/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useCurrentUserQuery } from "./../../../../redux/services/userService";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    refetch,
  } = useCurrentUserQuery();

  const handleLogin = useCallback(
    async (data) => {
      try {
        localStorage.setItem("user_email_for_verify", data.email);
        const response = await login(data).unwrap();
        dispatch(setShowModal(false));
        dispatch(authUser());
        const { data: userData } = await refetch();
        localStorage.setItem("is_verified", userData.is_verified.toString());
        localStorage.setItem("is_superuser", userData.is_superuser.toString());
        localStorage.setItem("is_active", userData.is_active.toString());
        localStorage.setItem("is_auth", "true");
        userData.is_superuser
          ? successMessageAdmin()
          : successMessageCustomer();
        navigate("/");
        console.log("Login successful");
      } catch (error) {
        console.error("Ошибка при логине:", error);
        if (error.data.detail == "LOGIN_USER_NOT_VERIFIED") {
          dispatch(setShowModal(true));
          dispatch(setFormType("requestVerify"));
        }
      }
    },
    [login, navigate, dispatch, refetch]
  );

  console.log("Render dataUser:", dataUser);

  if (isLoading || isLoadingUser) return <Spinner />;

  return <LoginForm handleSubmit={handleLogin} />;
}
