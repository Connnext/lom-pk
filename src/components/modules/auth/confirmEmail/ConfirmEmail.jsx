import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import { useRequestVerifyTokenMutation } from "./../../../../redux/services/authService";
import { successRequestVerifyMessage } from "utils/messages";
import confirmEmail from "./../../../../img/confirmEmail.png";
import "./confirmEmail.css";

export default function ConfirmEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requestVerifyToken] = useRequestVerifyTokenMutation();
  const email = localStorage.getItem("user_email_for_verify");
  const handleConfirm = async () => {
    try {
      await requestVerifyToken({ email: email }).unwrap();
      setTimeout(() => {
        dispatch(setShowModal(false));
        dispatch(setFormType(null));
      }, 100);
      successRequestVerifyMessage(email);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <img
        className="confirm-email__img"
        src={confirmEmail}
        alt="confirm-email"
      />
      <div className="confirm-email__wrapper">
        <h2 className="confirm-email__title">Подтверждение почты</h2>
        <p className="confirm-email__text">
          Перейдите на почту для подтверждения регистрации.
        </p>
      </div>
      {handleConfirm()}
    </>
  );
}
