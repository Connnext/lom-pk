import React, { useState } from "react";
import ClearBasketItems from "components/elements/buttons/clearBasketItemsButton/ClearBasketItemsButton";
import BasketToOrderButton from "components/elements/buttons/basketToOrderButton/BasketToOrderButton";
import "./basketSum.css";

export default function BasketSum({ data, selectedItems }) {
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  const totalCount = selectedItems.reduce((sum, item) => sum + item.amount, 0);
  console.log(totalAmount);
  return (
    <div className="basket__sum">
      <div className="basket__sum--main">
        <div className="basket__sum-in-basket">
          <h2 className="basket__sum--title">В корзине</h2>
          <p className="basket__sum--subtitle">
            {totalCount} товаров на сумму:
          </p>
          <p className="basket__sum--price">{totalAmount} ₽</p>
        </div>
        <BasketToOrderButton selectedItems={selectedItems} />
      </div>
      <div className="basket__sum--extra">
        <p className="basket__sum--info">
          *Обращаем ваше внимание, что окончательная стоимость и состав заказа,
          если в нем присутствуют товары и/или услуги, участвующие в акции,
          будет подтверждена после обработки заказа.
        </p>
        <ClearBasketItems data={data} />
      </div>
    </div>
  );
}
