import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetBasketQuery } from "./../../../../redux/services/basketService";
import useBasketItem from "hooks/useBasketItem";
import { setBasket } from "./../../../../redux/store/slices/userSlice";
import ControlButtons from "./ControlButtons";
import { errorWithText } from "utils/messages";
import "./addToBasketButton.css";

const AddToBasketButton = ({ id }) => {
  const items = useSelector((state) => state.user.items);
  const dispatch = useDispatch();
  const { data } = useGetBasketQuery();
  const { count, added, handleIncrement } = useBasketItem(id, 0);
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  const is_auth = localStorage.getItem("is_auth") || is_auth_FromRedux;
  useEffect(() => {
    if (data) dispatch(setBasket(data));
  }, [data, dispatch]);

  const handleAddToBasket = () => {
    if (is_auth) handleIncrement();
    else errorWithText("Необходимо войти / зарегестрироваться!");
  };
  return (
    <div className="add-to-basket">
      {added && is_auth && count > 0 ? (
        <ControlButtons id={id} initialCount={count} />
      ) : (
        <button className="add__product" onClick={handleAddToBasket}>
          Добавить в корзину
        </button>
      )}
    </div>
  );
};

export default AddToBasketButton;
