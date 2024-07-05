import React from "react";
import "./checkboxBasket.css";

export default function CheckboxBasket({ id, value, onChange }) {
  return (
    <div className="checkbox-container">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="checkbox-input"
      />
    </div>
  );
}
