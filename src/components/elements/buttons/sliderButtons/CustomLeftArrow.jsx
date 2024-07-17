import React from "react";
import leftArrowIcon from "./../../../../img/left_galka.svg";

const CustomLeftArrow = ({ previousSlide }) => (
  <button
    onClick={previousSlide}
    className="custom-arrow-button arrow__icon--left"
  >
    <div className="arrow-circle">
      <img src={leftArrowIcon} alt="Left Arrow" className="custom-arrow-icon" />
    </div>
  </button>
);

export default CustomLeftArrow;
