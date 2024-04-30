import React from "react";
import "./InfoTitle.css";

export default function InfoTitle(props) {
  return (
    <>
      <h2 className="info__title">{props.title}</h2>
      <hr className="info__divider" />
    </>
  );
}
