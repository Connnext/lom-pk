import React from "react";
import useShopData from "hooks/useShopData";
import { showMoreProducts_text } from "utils/textDecorate";
import "./moreProductsButton.css";

export default function MoreProductsButton() {
  const { handleMoreProductsClick } = useShopData();
  return (
    <div className="shop__button--wrapper">
      <button onClick={handleMoreProductsClick} className="shop__button">
        {showMoreProducts_text}
      </button>
    </div>
  );
}
