import React from "react";
import "./moreProductsButton.css";

export default function MoreProductsButton({ onClick }) {
  return (
    <div className="shop__button--wrapper">
      <button onClick={onClick} className="shop__button">
        Показать больше товаров
      </button>
    </div>
  );
}
