import React, { useState } from "react";
import "./addToBasketButton.css";
import { successAdd, successDelete } from "utils/messages";
import { useUpdateBasketMutation } from "./../../../../redux/services/basketService";

const AddToBasketButton = () => {
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);
  const [updateBasket, { isLoading }] = useUpdateBasketMutation();

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    successAdd();
    updateBasket({ product_id: 1, amount: newCount }); // Замените 1 на реальный product_id
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount === 0) {
        setAdded(false);
      }
      successDelete();
      updateBasket({ product_id: 1, amount: newCount }); // Замените 1 на реальный product_id
    }
  };

  const handleAddToBasket = () => {
    setAdded(true);
    setCount(1);
    successAdd();
    updateBasket({ product_id: 1, amount: 1 }); // Замените 1 на реальный product_id
  };

  return (
    <div className="add-to-basket">
      {added ? (
        <>
          <button
            className="decrement-button"
            onClick={handleDecrement}
            disabled={count === 0 || isLoading}
          >
            -
          </button>
          <span className="count">{count}</span>
          <button
            className="increment-button"
            onClick={handleIncrement}
            disabled={isLoading}
          >
            +
          </button>
        </>
      ) : (
        <button
          className="add__product"
          onClick={handleAddToBasket}
          disabled={isLoading}
        >
          Добавить в корзину
        </button>
      )}
    </div>
  );
};

export default AddToBasketButton;
