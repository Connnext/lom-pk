import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import Form from "components/elements/forms/Form";
import "./orderCallButton.css";

const OrderCallButton = ({ additionalClass }) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const handleOrderCallClick = (e) => {
    e.stopPropagation();
    dispatch(setShowModal(true));
    dispatch(setFormType("orderCall"));
  };
  return (
    <div className="order__call">
      {showModal ? <Form /> : ""}
      <button
        onClick={handleOrderCallClick}
        className={`order__call--button ${additionalClass}`}
      >
        Заказать звонок
      </button>
    </div>
  );
};

export default OrderCallButton;
