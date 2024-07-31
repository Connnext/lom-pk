import React from "react";
import "./verticalDivider.css";

export default function VerticalDivider({ hideAt }) {
  return (
    <div
      className={`vertical__divider ${hideAt ? `hide-at-${hideAt}` : ""}`}
    ></div>
  );
}
