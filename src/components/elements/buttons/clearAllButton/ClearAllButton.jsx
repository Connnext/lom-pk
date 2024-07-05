import React from "react";
import "./clearAllButton.css";

const ClearAllButton = ({ onClick }) => {
  return (
    <button className="clear-all-button" onClick={onClick}>
      Удалить выбранные
    </button>
  );
};

export default ClearAllButton;
