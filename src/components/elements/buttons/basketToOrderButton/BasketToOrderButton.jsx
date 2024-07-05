import React from "react";
import { useNavigate } from "react-router-dom";
import { ORDER_ROUTE } from "utils/constants";
import "./basketToOrderButton.css";

export default function BasketToOrderButton({ selectedItems }) {
  const navigate = useNavigate();
  const handleOrderClick = () => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    navigate(ORDER_ROUTE);
  };

  return (
    <button className="link__to-order" onClick={handleOrderClick}>
      Перейти к оформлению
    </button>
  );
}
