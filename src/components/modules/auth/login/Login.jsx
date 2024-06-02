import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./../../../../redux/store/slices/userSlice";
import { useAuthMutation } from "./../../../../redux/services/userService";
import {
  errorMessage,
  successMessageAdmin,
  successMessageCustomer,
} from "utils/messages";
import LoginForm from "components/elements/forms/LoginForm";
import { setShowModal } from "./../../../../redux/store/slices/modalSlice";
import Spinner from "components/elements/spinners/Spinner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [auth, { isLoading, isError }] = useAuthMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await auth(data).unwrap();
      const access = response?.access_token;
      const role = response?.role;
      console.log(role);
      dispatch(setShowModal(false));
      if (access && role) {
        localStorage.setItem("token", access);
        localStorage.setItem("role", role);
        dispatch(loginUser(role));
        role === "admin" ? successMessageAdmin() : successMessageCustomer();
        navigate("/");
      }
    } catch {
      errorMessage();
    }
  };
  if (isLoading) return <Spinner />;
  return <LoginForm handleSubmit={handleLogin} />;
}
