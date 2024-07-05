import React, { useState } from "react";
import ClearBasketItems from "components/elements/buttons/clearBasketItemsButton/ClearBasketItemsButton";
import "./basketSum.css";
import BasketToOrderButton from "components/elements/buttons/basketToOrderButton/BasketToOrderButton";

export default function BasketSum({ data, selectedItems }) {
  console.log(typeof selectedItems);
  console.log(selectedItems);
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  const totalCount = selectedItems.reduce((sum, item) => sum + item.amount, 0);
  console.log(totalAmount);
  return (
    <div className="basket__sum">
      <h2 className="basket__sum--title">В корзине</h2>
      <p className="basket__sum--subtitle">{totalCount} товаров на сумму:</p>
      <p className="basket__sum--price">{totalAmount}₽</p>
      <BasketToOrderButton selectedItems={selectedItems} />
      <p className="basket__sum--info">
        *Обращаем ваше внимание, что окончательная стоимость и состав заказа,
        если в нем присутствуют товары и/или услуги, участвующие в акции, будет
        подтверждена после обработки заказа.
      </p>
      <ClearBasketItems data={data} />
    </div>
  );
}
