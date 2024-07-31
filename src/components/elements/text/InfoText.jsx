import React from "react";
import "./InfoText.css";

export default function InfoText(props) {
  return (
    <div className="info__wrapper">
      <h2 className="info__subtitle">{props.subtitle}</h2>
      <div className="info__text paragraph">{props.text}</div>
    </div>
  );
}
