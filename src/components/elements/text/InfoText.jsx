import React from "react";
import "./InfoText.css";

export default function InfoText(props) {
  return (
    <div className="info__wrapper">
      <h3 className="info__subtitle">{props.subtitle}</h3>
      <p className="info__text">{props.text}</p>
    </div>
  );
}
