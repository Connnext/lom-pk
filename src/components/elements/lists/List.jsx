import React from "react";
import "./list.css";

export default function List({ items }) {
  if (!items) return null;
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
