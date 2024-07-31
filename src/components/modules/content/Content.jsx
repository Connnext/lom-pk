import React from "react";
import Container from "../container/Container";
import "./content.css";

export default function Content({ children }) {
  return (
    <div className="content">
      <Container>{children}</Container>
    </div>
  );
}
