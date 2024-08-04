import React from "react";
import Spinner from "components/elements/spinners/Spinner";
import OrderItem from "../item/orderItem/OrderItem";
import InfoText from "components/elements/text/InfoText";
import { useSelector } from "react-redux";
import FormButton from "components/elements/buttons/formButton/FormButton";
import "./orderSum.css";
import { errorWithText } from "utils/messages";

export default function OrderSum({ selectedItems, handleSubmit }) {
  const isValidDelivery = useSelector((state) => state.user.isValidDelivery);
  const isValidPersonal = useSelector((state) => state.user.isValidPersonal);
  const userData = useSelector((state) => state.user.userData);
  const totalAmount =
    selectedItems?.reduce((sum, item) => sum + item.amount * item.price, 0) ||
    0;

  const handleFormSubmit = () => {
    if (isValidDelivery && isValidPersonal) {
      handleSubmit(userData);
    } else {
      errorWithText("Форма не валидна");
    }
  };
  return (
    <div className="order__sum">
      {selectedItems.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <InfoText subtitle={"Ваш заказ:"} />
          <div className="order__main--info">
            <div className="order__items--wrapper">
              {selectedItems.map((item) => (
                <OrderItem
                  key={item.product_id}
                  product_id={item.product_id}
                  amount={item.amount}
                  price={item.price}
                />
              ))}
            </div>
            <div className="order__sum--price">
              <p className="order__price--title">
                {selectedItems.reduce((count, item) => count + item.amount, 0)}{" "}
                товаров на сумму:{" "}
                <span className="order__price--count">{totalAmount}</span> ₽
              </p>
            </div>
            <FormButton
              onClick={handleFormSubmit}
              disabled={!isValidDelivery || !isValidPersonal}
              text="Оформить заказ"
            />
            <p className="order__sum--info">
              *Обращаем ваше внимание, что окончательная стоимость и состав
              заказа, если в нем присутствуют товары и/или услуги, участвующие в
              акции, будет подтверждена после обработки заказа.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
