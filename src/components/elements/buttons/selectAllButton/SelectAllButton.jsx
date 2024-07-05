import React from "react";
import "./selectAllButton.css";

const SelectAllButton = ({ onClick }) => {
  return (
    <button className="select-all-button" onClick={onClick}>
      Выбрать все
    </button>
  );
};

export default SelectAllButton;
