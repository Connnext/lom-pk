import React from "react";

export default function horizontalDivider() {
  const footer__divider = {
    border: "none",
    height: "1px",
    backgroundColor: "#ccc",
    margin: "20px 0",
  };
  return <hr className={footer__divider}></hr>;
}
