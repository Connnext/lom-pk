import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import emptyBasket from "./../../../../img/empty_basket.png";
import "./emptyBasket.css";

export default function EmptyBasket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  const is_auth =
    localStorage.getItem("is_auth") === "true" || is_auth_FromRedux;

  const handleFormChange = (newFormType) => {
    dispatch(setFormType(newFormType));
  };
  const handleToHome = (event) => {
    if (event) event.stopPropagation();
    dispatch(setShowModal(false));
    dispatch(setFormType(null));
    navigate("/");
  };
  return (
    <>
      <img className="empty__basket--img" src={emptyBasket} alt="emptyBasket" />
      {!is_auth ? (
        <div className="empty__basket--wrapper">
          <h2 className="empty__basket--title">Корзина недоступна</h2>
          <p className="empty__basket--text">
            Для добавления товаров в корзину необходимо <br />
            зарегестрироваться или войти
          </p>
          <button
            className="empty__basket--button"
            onClick={() => handleFormChange("login")}
          >
            Войти
          </button>
        </div>
      ) : (
        <div className="empty__basket--wrapper">
          <h2 className="empty__basket--title">Ваша корзина пуста</h2>
          <p className="empty__basket--text">
            Добавьте товары в корзину, чтобы продолжить покупку
          </p>
          <button
            className="empty__basket--button"
            onClick={() => handleToHome()}
          >
            На главную
          </button>
        </div>
      )}
    </>
  );
}
