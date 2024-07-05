import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import confirmEmail from "./../../../../img/confirmEmail.png";
import { setShowModal } from "./../../../../redux/store/slices/modalSlice";
import "./../../../modules/auth/confirmEmail/confirmEmail.css";

export default function SuccessOrder() {
  return (
    <>
      <img
        className="confirm-email__img"
        src={confirmEmail}
        alt="confirm-email"
      />
      <div className="confirm-email__wrapper">
        <h2 className="confirm-email__title">Заказ оформлен</h2>
        <p className="confirm-email__text">
          В ближайшее время с вами свяжется менеджер по продажам для уточнения
          деталей заказа. <br />
          Если вы выбрали доставку, менеджер обсудит условия её выполнения.
        </p>
      </div>
    </>
  );
}
