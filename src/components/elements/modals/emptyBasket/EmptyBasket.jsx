import React from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyBasket from "./../../../../img/empty_basket.png";

import { setFormType } from "./../../../../redux/store/slices/modalSlice";
import "./emptyBasket.css";

export default function EmptyBasket() {
  const dispatch = useDispatch();
  const roleFromRedux = useSelector((state) => state.user.role);
  const role = localStorage.getItem("role") || roleFromRedux;
  const handleFormChange = (newFormType) => {
    dispatch(setFormType(newFormType));
  };
  return (
    <div>
      <img className="empty__basket--img" src={emptyBasket} alt="emptyBasket" />
      {role == null ? (
        <div className="empty__basket--wrapper">
          <h2 className="empty__basket--title">Ваша корзина пуста</h2>
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
            onClick={() => handleFormChange("login")}
          >
            На главную
          </button>
        </div>
      )}
    </div>
  );
}
