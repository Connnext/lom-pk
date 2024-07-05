import React from "react";
import useBasketItem from "hooks/useBasketItem";
import "./addToBasketButton.css";

const ControlButtons = ({ id, initialCount }) => {
  const { count, handleIncrement, handleDecrement, handleInputChange } =
    useBasketItem(id, initialCount);
  return (
    <div className="quantity-control-buttons">
      <button className="decrement-button" onClick={handleDecrement}>
        -
      </button>
      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        className="count"
      />
      <button className="increment-button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default ControlButtons;
