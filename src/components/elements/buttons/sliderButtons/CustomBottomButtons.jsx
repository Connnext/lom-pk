import React from "react";

const CustomBottomButtons = ({ slideCount, currentSlide, goToSlide }) => {
  const buttons = Array.from({ length: slideCount }, (_, i) => (
    <button
      key={i}
      className={`custom-bottom-button ${currentSlide === i ? "active" : ""}`}
      onClick={() => goToSlide(i)}
    >
      <span className="custom-dot"></span>
    </button>
  ));

  return <div className="custom-bottom-buttons">{buttons}</div>;
};

export default CustomBottomButtons;
