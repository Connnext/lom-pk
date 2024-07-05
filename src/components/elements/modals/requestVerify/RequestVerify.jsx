import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import { useRequestVerifyTokenMutation } from "./../../../../redux/services/authService";
import { successRequestVerifyMessage } from "utils/messages";
import request__verify from "./../../../../img/confirmEmail.png";
import "./requestVerify.css";

export default function RequestVerify() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requestVerifyToken] = useRequestVerifyTokenMutation();
  const email = localStorage.getItem("user_email_for_verify");
  const handleRequest = async () => {
    try {
      await requestVerifyToken(email).unwrap();
      setTimeout(() => {
        dispatch(setShowModal(false));
        dispatch(setFormType(null));
      }, 100);
      successRequestVerifyMessage(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img
        className="request__verify--img"
        src={request__verify}
        alt="request__verify"
      />

      <div className="request__verify--wrapper">
        <h2 className="request__verify--title">
          Аккаунт с данной почтой уже существует
        </h2>
        <p className="request__verify--text">
          Для входа необходимо пройти верификацию по почте, на которую вы
          регестрировали ваш аккаунт: {email}
        </p>
        <button
          className="request__verify--button"
          onClick={() => handleRequest()}
        >
          Отправить письмо
        </button>
      </div>
    </>
  );
}
