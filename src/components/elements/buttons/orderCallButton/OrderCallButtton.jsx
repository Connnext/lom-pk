import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import "./orderCallButton.css";
import Form from "components/elements/forms/Form";

const OrderCallButton = ({ additionalClass }) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const handleOrderCallClick = (e) => {
    e.stopPropagation();
    dispatch(setShowModal(true));
    dispatch(setFormType("orderCall"));
  };
  return (
    <>
      {showModal ? <Form /> : ""}
      <button
        onClick={handleOrderCallClick}
        className={`order__call--button ${additionalClass}`}
      >
        Заказать звонок
      </button>
    </>
  );
};

export default OrderCallButton;
